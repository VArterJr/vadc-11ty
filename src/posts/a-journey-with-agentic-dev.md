---
title: A Journey with Agentic AI Dev - Partnership for Real this Time?
description: How things went when I actually gave an AI coding agent a real shot at helping me build a useful web app.
date: 2025-12-17
tags: [web-development, AI, Copilot, Claude, GPT]
layout: layouts/post.njk
---

## Introduction

I wanted a piece of software that didn't exist in the form and execution I wanted. I started a project to build it myself and was working through the design and coding approach / tech stack when I thought... "Why not try to leverage AI to help me build this?"

I've had done some experiments in the past with AI coding agents /  assistants / vibe coding (if you want to use that word), but never really committed to using them as a true partner in building something **real** that I would use. This time I wanted to see if I could really get something built that I could use and deploy quickly with an AI agent as my coding partner.

**That is what I've spent my last three evenings working on.**

## The Web App Idea
I have tried many web-based bookmarking tools (paid and free), but I don't prefer the implementations or lack of customizability. And the good ones are paid (and some are worth it if they fit your need).

I've tried about a dozen of them. None just hit that sweet spot for me. Some were too complex, some too simple. Some had poor UI/UX. Some were slow. Some didn't have the features I wanted (tags, notes, multiple structure views, customization, etc.). Some were just too expensive for what they offered. All of them seemed to be missing end-to-end encryption and at rest for privacy and security (which is a big deal to me).

I wanted a new app that combined what I wanted in a tool and was easy to implement and deploy, and my time is limited at the moment. What a chance to try to leverage AI to help me build something useful for myself (and maybe others) with the limited time I have right now.

## The Goal
I work with AI (both productivity and agentic) for a living and help my customers implement and take advantage of our technology, including AI. Yet, for my personal development projects I tend to do 80% of the coding work myself. Every day I see the potential of AI to help people with productivity and witness the amazing results from my customers are building with our toolset. I use AI as a research and productivity assistant in my own work. It doesn't **DO** my job. It **ASSISTS** me in mundane tasks, research, reporting, and even brainstorming. It can help validate my line of thinking on topics that would typically take me much more time researching in depth.

That's why I love that we (Microsoft) named our AI... _Copilot_. I'm the Pilot, but I can sometimes use the help of a Copilot for data gathering, research, reporting for me so I can focus on helping my customers more and aiding them in solving the business problems they need to solve. Then in my learning and free time, on my own personal development projects, I tend to do most of the work myself. Why? Because I want to. It's fun.

This time... I didn't want to just test or experiment, I really wanted to do it. I wanted to see if I could really get an app built that I could actually use and deploy quickly with AI help.

My goal was 75% AI generated code, doc, and UI design with 25% me doing the architecture, design, and fixing what the AI developer got wrong. I tend to be a bit of a perfectionist, so I knew I would have to do some work to get it right... or spend time yelling at the AI... which no one wants. I also wanted it to do all of the tracking and documentation... the mundane stuff.

## My AI _Vibing_ History
I typically have about five or so little coding projects in process at any time, mainly for fun or learning. Plus my main website, which is in a state of rebuild right now too. Over the past weekend, I decided to see if I could put in some real effort and use an AI agent to help me build an initial design and base for this new bookmarking app that combines all the things I want in a web-based bookmark tool and that others may find usefull as well. Could AI really help me create a new app that is cloud based, easy to deploy, and works well, in less time than I could do it myself from scratch?

Spoiler... yes... sorta. And would I stick to it and give my assistant developer a chance? Yes... I needed to see this work and to prove a point to myself.

## My Background & Challenge
Being a pro dev in previous roles, I like to code! Professionally, I'm now more on the field architecture and management end of things. I still code for fun... often. And I'm picky. That comes from my early days of coaches and patient developers that were more experienced than me teaching me the right way to do things. Enforcing patterns and practices. Clean coding skills. Reviewing my work and helping me adjust and get better. I can never thank them all enough for what they taught me. There are 1,000+ ways of doing things in software development, and not all of them are good ways. most of them are not. But there are multiple decent ways too.

I kept asking myself, "Why was I always so impatient with AI 'developers'?" It's been a royal pain in the past when I've tried to vibe code with agentic AI. Using AI for looking up information, researching new languages I wasn't proficient in, sure. That is way faster than web search.

I'd get frustrated with how the agent developer does (or doesn't) do things. I like things a certain way. 99% of my projects are me as a lone dev and no one will see my code. I want things done as correctly as possible, not just working. **Working isn't enough.** I'm a huge fan of SOLID, design patterns in general, and avoiding poor coding practices and _code smells_. So I'd "yell" in ALL CAPS at the AI aegent when it missed the mark. Something I would never do to a room full of developers that report to me. Honestly... I wouldn't.

I wanted this time to be different, like once again working in a dev team of varying skills and being patient to get the outcomes that the customer (me in this case) desired. And I wanted to simulate working with the AI developer like a "real" developer vs. just a reference grabber. I need to give the AI a chance to "learn" my style and preferences and how I work.

## The Stack
Code is pure HTML5, TypeScript/JavaScript, and CSS. The backend server is TypeScript/JavaScript running on Node.js. Database is just a simple SQLite3 file. It is self-hosted (you could use it on my server as a demo, but you don't know when I'm pushing code or blowing away the database.) It can be hosted anywhere that supports web apps and Node.js, including Azure and other cloud providers. I run it on an Ubuntu LTS VPS.

I chose Claude Sonnet 4.5 (my favorite current model for coding) and GPT-5.2 which has been getting decent reviews for coding. Those would be the only models I allowed. 75% was Sonnet 4.5 and 25% GPT-5.2. I used VS Code with the GitHub Copilot extension for both models to do the coding. I used Perplexity and Sonnet 4.5 for brainstorming ideas and ensuring I was thinking about things in an effective and efficient manner.

## The Approach
I started with a simple design doc, feature list, and some mock-ups. I did some data diagrams to show how I wanted things organized. I gave it rules to follow on style and approach. **I TOOK THE TIME UPFRONT** to ensure things were well setup so the agentic developer could be as successful as possible. Like I would with human developers. In the past attempts I would just start spouting short prompts an expect perfection. That is typically not how real development works. (Or _shouldn't_ work if you _are_ doing this!)

It's all about expectations: As I mentioned above, in the past few vibe coding experiments I've done (which were just fun little experiments), I did a lot of the hard work, fixes, and clean-up. I'd get so frustrated at some point that I'd just take over the coding and have it do the mundane documentation and deployment automation. This time I really tried to let the AI agent do more of the heavy lifting and I would constrain myself to being the designer, architect, guide, and coach. It wasn't easy for me to switch into this mode, at first. This attempt wasn't going to be experimentation. I wanted something out of it. And I just don't have the time to do it all myself at the moment. I had a genuine reason to use some help and push through my mental challenges with doing it. And, for the most part, it worked well.

## The Attempt
Then I started coding with the AI. Did it follow my pages and pages of guidance and design exactly? Not always. Yet, when I gently reminded it to always reference those foundational documents, it got better. Just like many human developers I've worked with. It would forget, need to be reminded, and it would adjust again. And even if it missed the mark, which it did from time to time, I would be patient and guide it to the right outcome and coach it to do better next time. "That may _work_," I'd often say, "but that's not an _appropriate_ way of doing it. How about trying it like _______?" In the end, we got there. We actually got there!

Each evening I'd commit a few hours to the project after work. Each night I'd create the initial multi-page _mega-prompt-of-the-day_ to get started: I would write up the enhancements, bug fixes needed, or refactorings that were needed or designed and run them with GitHub Copilot. I'd then review the code, test it, and give feedback to the AI agent on what to do better next time.

I was more Customer, PM, BA, Architect, Tester, and Coach. I would also adjust my design docs and feature lists as I learned more about what I wanted and how the AI was interpreting my requests. It was a back-and-forth process, much like working with a new to role human developer who had technical knowledge and just needed help putting it all together for the project needs. It needed to learn how to work with me and I needed to learn how to work with it... effectively. **That** is the key to success. Don't expect it to read your mind and just do it all.

As stated before, Agentic AI is an assistant, not a magic genie. Set your expectations and prep up front and you will have a much better experience and success.

## The Result
With just three evenings of working with GitHub Copilot I have a simple, clean, [mostly] easy to use bookmarking app that [mostly] does what I want. It has user accounts, tagging, structure, customization, and notes. It is not fancy, but it works well. It is some basic security (passwords are hashed), and will one day be fully encrypted at rest. It is responsive (works on mobile and desktop). It has a fairly clean UI that is easy to navigate. It has import/export functionality supporting Netscape bookmark format as well as a custom JSON format I designed so you can backup the entirety of your data and not just a semi-flat bookmark structure. Search is coming next.

Did it work perfectly, NO. Did it work, YES. Did I get frustrated from time to time, yes. But setting correct expectations. This isn't magic and fire and forget, come back in two days to perfection. Nothing is. I had to be incredibly **explicit** in my requests and expected actions. I still had work to do. I had to participate. Eventually, I got in a rhytm and things started moving faster. I had to remember... this is my Copilot (assistant) developer. Not my replacement.

I was able to get a working app done in about ten hours of work total (including initial documentation & design, coding, testing, and refactoring at times). Not bad for a first REAL attempt and not just a small experiment. Starting from scratch and doing ALL of the work myself would have taken me way longer. Even if I take over coding from here, I estimate the AI agent saved me at least 50% of the time I would have spent doing research, coding, writing tests, etc. if I had done it all myself.

Version 0.0.3 is up on my site and in GitHub. A long way from "real" but still fun and already useful.

If you would like to try it out, you can find it on my new site here: https://vincearter.com/apps/ntbt/. (Note: The ending slash is important... don't forget it or you'll get a 404 from the server side.)

If you would like to see the code, it is free for non-commercial self-hosting use on GitHub: https://github.com/VArterJr/neotypa-booktabs.

If you would like to just watch a video of the basic functionality of version 0.0.3, there is a link on the GitHub repo landing page / README.md file.

If you are as crazy as me and want to help make this real... please reach out. I'm open to ideas, contributions, and help.

~ Vince Arter, Jr. 17-Dec-2025

---

_Have questions about this tech stack or want to discuss web development? [Get in touch](mailto:vince@vincearter.com)!_
