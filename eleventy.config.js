import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import markdownItAttrs from 'markdown-it-attrs';

export default function(eleventyConfig) {
  // Passthrough copy for stylesheets and assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // setup image processing
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  // Date formatting filter for posts
  eleventyConfig.addFilter("postDate", (dateObj) => {
    // If it's a string, parse it
    const date = typeof dateObj === 'string' ? new Date(dateObj) : dateObj;
    return date.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC' // Keep date formatting consistent without timezone shifts
    });
  });

eleventyConfig.amendLibrary("md", (mdLib) => {
    // Enable the attributes plugin
    mdLib.use(markdownItAttrs);

    const defaultImageRender =
      mdLib.renderer.rules.image ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

    mdLib.renderer.rules.image = function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      
      // Look for a specific class added via markdown-it-attrs
      const classIdx = token.attrIndex("class");
      
      if (classIdx >= 0) {
        const classes = token.attrs[classIdx][1].split(" ");
        
        if (classes.includes("has-wrapper")) {
          // Remove the trigger class so it doesn't pollute the final <img> tag
          token.attrs[classIdx][1] = classes.filter(c => c !== "has-wrapper").join(" ");
          
          // Render the image and wrap it
          const originalImageHtml = defaultImageRender(tokens, idx, options, env, self);
          return `<div class="image-wrapper">${originalImageHtml}</div>`;
        }
      }

      // If no matching class is found, render normally without a <div> wrapper
      return defaultImageRender(tokens, idx, options, env, self);
    };
  });

  // just in case you use Windows. I pity the pain.
	eleventyConfig.setChokidarConfig({
		usePolling: true,
		interval: 500,
	});

  // Return configuration options
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
