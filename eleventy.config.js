export default function(eleventyConfig) {
  // Passthrough copy for stylesheets and assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

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

  // Return configuration options
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
