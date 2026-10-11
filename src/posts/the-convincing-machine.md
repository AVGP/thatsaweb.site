---
title: The Convincing Machine
date: 2026-10-11
description: AI is here to stay, but what is it really?
tags:
  - ai
  - philosophy
  - thoughts
author: Martin
---

![A person talks to the convincing machine](/images/ai-convincing-machine-by-gemini.jpg)
Gemini made this image for me. It convinced me, too!

AI is here and depending on who you're asking it'll solve the world's problems or kill all humanity. Quite the range!
I've been looking at this through a lense that I'm not seeing mentioned often, I think, and I am quite flabbergasted by the ends of the before-mentioned range as well as by my fellow humans.

## Where did this come from all of a sudden?

See, here's the thing: It didn't suddenly appear. LLMs, AI and machine-learning have a long tradition. Some of the current hype and debate are founded on "OMFG, look how QUICKLY we got here!"
when in reality the first significant work ([the perceptron](https://en.wikipedia.org/wiki/Perceptron)) was conceived in **1957**. It still is the foundation of ChatGPT and other systems _today_.

But there must have been a revolutionary development for it to explode so massively in the last few years right? Well, yes and no. 
A lot of amazing new hardware has been coming to the market, the realisation that we can use GPUs with their massively parallel computing architecture is fantastic to deal with the math that makes AI tick has sped things up, too.

Of course, also from a maths and computer science perspective, a lot of things have happened and been discovered, but *the foundations have been here for a really long time*.

For example: Researchers have recently found ways to tweak reinforcement learning a bit. But you know what? Reinforcement learning is a concept from Psychology in the 1910s, from maths in the 1950s and computer science in the late 70s
with improvements in the 80s, 90s and throughout the years, including 2026. _This is technology that is at least 57 years old_ (trial and error learning with an "internal monologue", John Andreae, 1969), depending on how you count.

The game changers were: 

1. A lot of affordable hardware that could hold the amount of data needed and run the amount of calculations needed quickly
2. A vast amount of data ready to train the systems on (aka "the web")

In no way, shape or form is this a revolution that came out of nowhere.

## What actually is it?

I'll start with two anecdotes. 
I once met a student who was really excited about what we were doing at the time with using machine learning to furnish apartments based on floorplans and some other inputs.
After I explained what it is and how it worked, he looked me in the eye and said, disappointedly: "But that's just statistics". Yes, my friend, it is.

A coworker of mine - the incredibly smart and incredibly friendly Julien - once explained machine learning as "a program that produces increasingly good output the more data you feed it". 

This is what I need y'all to understand.
The AI we're seeing is _data and maths_. At a very basic level, we feed it data and judge its output on whatever criteria we have, then it takes that feedback and repeats the process, until the feedback gets _good enough_.

Don't get me wrong - this is amazing!

For decades, the way we made things with computers was programming. Programming required us to break down something we want into myriads of small, computable instructions and basically build out computer-executable rules bit by bit.
Many things were easy that way - "Let me enter two numbers, then show the sum of these numbers" is easy enough to program. Another example could be:
  
  1. Show a password input field and a button.
  2. When the user taps the button, check if the password is exactly `s3cr3t`.
  3. If it is, show the secret message.
  4. If it isn't, show an error and repeat from the top.

This is great. We know exactly what this is going to output for every input. We can reason about it, we can debug it. If it's the right password, it'll show the message, if it's not, it won't.

Turns out, though: A lot of stuff is really hard to break into instructions like this. For example "Which hand-written number is in this photo?" is _very_ difficult. 

People have different writing styles, ink and paper may vary in color and brightness, contrast etc. That's where machine learning (and in turn, AI) shines. 

We give it a lot of examples and tell it how wrong it is, until it's right often enough. 

It will still sometimes get things wrong and the output isn't easily predictable for every possible input, but it helps _a lot_ with a problem that isn't otherwise easy to solve with computers.

So these are our tools: Data and statistics, tuning things to be _good enough_ but not having full control over the output. 

Or we use programming, where it's really hard to express some problems so a computer can solve them, but we can be sure about the output for any input.

## How do we interact and interpret what we're looking at here?

Now, this is where things get weird and difficult, I think.

If we look closely enough at what I mentioned in the previous section, we might spot something:

> We give it a lot of examples and tell it how wrong it is, until it's right often enough.

What have we done with LLMs? We gave it _a lot of examples_ of human language. Books, theater plays, movie scripts, lyrics and we've expanded this into music, videos and photos. We gave it pretty much _nearly all our public data_.
And what have we measured? What was "wrong" and what was "right"?

Well, we gave it human requests like "Summarize this email" or "Create an executive briefing of the project, based on this project documentation" or, most likely, 
"create a photorealistic picture of a huge cat destroying a city as it hunts a laser beam coming from an alien UFO in the sky".

![Gemini-generated image of a giant cat destroying a city as it hunts a laser beam coming from a UFO](/images/gemini-cat-laser-ufo.jpg)
Yes, of course I had to. Convincing, innit? 

We then looked at whatever the outcome was and said either: "wtf, no" (and maybe even elaborated on what was wrong, why and what we expected instead) or were excited about the result. We and our expectations became input as well.

Convincing us that we got a helpful, creative, great response is the output its optimising for. 

We built a machine with the purpose of convincing us. A **convincing machine**. 

That's its purpose - and because it's machine learning it gets better at it the more data (prompts, training data and our responses to its output) it gets. 

This machine doesn't know the concept of reality, of truth or lie. It took inputs, produced outputs and then repeated this process with additional input: Our feedback. 

Us being convinced and believing the output ~~was~~ is part of the input, of the training.

## What to keep in mind

As humans, we tend to look for living beings, because they can possibly harm us.
That's why things like [Pareidolia](https://en.wikipedia.org/wiki/Pareidolia) (aka [seeing faces in things](https://www.reddit.com/r/facesinthings/)) exists, for example.

Our thinking is also heavily shaped by our human perspective. We [declare buildings evil](https://www.reddit.com/r/evilbuildings/) based on their looks or their purpose. 
But a building can't be evil or friendly or empathetic. It's a building, dead stuff piled together in some way. That's it.

Yet, we build these machines with "personality" and say things like they "hallucinate" or "lie". 

Why not call a calculator "smart", then? That's weird, right? It's just a tool that you hammer data into and get data out of.

Fun fact, though: That's what we're doing with AI as well, but we're giving it _our own emotional responses_ as input and expect it to _convince us_ as the output.

It scares me _a lot_ to see how many people readily assign human characteristics to this tool and believe we're working on the same mechanics and principle that AI is.
But how many kids do you know who learned to do maths by jelling lots and lots of numbers at them and then telling them how far off they were? Cause that's how AI learns.

This is all fun and games and, please, go ahead and enjoy the personality of your AI bot of choice! It's fun and it can help you get a lot of stuff done very quickly.
I love how agents can deal with other chatbots for me (lol) and even deal with shitty websites for me, helping me to get more things down quicker.

But do not mistake the convincing machine for a human being.

Humans have morals, values, ideas, their own goals and emotions. They also sometimes have a bad day or values that don't align with yours. But we can hold each other accountable.
The convincing machine will tell you - and everyone else - whatever it is, that is most convincing. That's not lying - because to lie, you have to consciously choose to deceive.

The machine doesn't do that, it just does what we built it to do.
