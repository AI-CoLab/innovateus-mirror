---
id: "workshop:ai-for-coding-from-zero-experience-to-a-working-website"
type: "InnovateUS workshop"
title: "AI for Coding: From Zero Experience to a Working Website"
url: "https://innovate-us.org/ai-for-coding-from-zero-experience-to-a-working-website"
date: "2026-03-27"
duration: "45 minutes"
series: "The Prompting Lab: Integrating AI into Your Public Sector Work"
instructors: ["Dhruv Kamalesh Kumar"]
recording: "https://www.youtube.com/watch?v=LIIviyKZ3s4"
transcript: "automatic, from the recording"
source: "InnovateUS (innovate-us.org)"
licence: "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/), as stated on innovate-us.org"
---

# AI for Coding: From Zero Experience to a Working Website

InnovateUS workshop · 27 March 2026 · 45 minutes

In this hands-on Prompting Lab, participants will use AI to build a simple website for showcasing a project, program, or initiative. Designed for beginners, the session walks step by step through how to prompt AI to generate code, shape the structure and content of a site, and make updates through iteration. Participants will actively build during the session, gaining practical experience with the process of turning an idea into a functional webpage.

By the end of the lab, participants will have a clearer understanding of how AI can support coding tasks, even for those with no prior technical background. They will leave with greater confidence using prompts to create and refine code, and with a basic website that helps communicate their work in a clear and engaging way.

## Learning goals

By the end of the session participants will learn how to:

- Use AI prompts to generate and refine basic code for a simple website

- Build a webpage that showcases a project, program, or initiative

- Practice iterating on content, layout, and functionality through prompting

- Gain confidence using AI as a tool for beginner-friendly coding tasks

## Speakers

- **Dhruv Kamalesh Kumar**, AI for Impact Fellow, The Burnes Center for Social Change

Part of the series [The Prompting Lab: Integrating AI into Your Public Sector Work](https://innovate-us.org/workshop-series/the-prompting-lab-series).

Recording: https://www.youtube.com/watch?v=LIIviyKZ3s4

## Transcript

Automatic transcript of the recording: names and terms can be misheard, and the times can be a few seconds off. Each time links to that moment of the video. The transcript alone: https://innovate-us.org/ai-for-coding-from-zero-experience-to-a-working-website.txt (plain text) and https://innovate-us.org/ai-for-coding-from-zero-experience-to-a-working-website.json (every segment with its start and end second).

**Dhruv Kamalesh Kumar**

[0:01](https://youtu.be/LIIviyKZ3s4?t=1) Hello, everyone. So the goal of this session is to help you understand how AI can help you prototype something really quickly, build a product, build a website, something really quickly, and you don't really need to know how to code. The AI is going to do all of the coding, and we are going to give instructions to the AI. So there are a bunch of tools that we can use to do this. The commonly famous ones are we have Cursor. It's a software. It's an app that you download on your laptop, and then you can use the AI within it to build anything. Then the other famous one is the Cloud Code. This is from Anthropic. We have Codex, which is from OpenAI. And then Google has their own version, which is called Antigravity.

[1:02](https://youtu.be/LIIviyKZ3s4?t=62) All of you might have different access to different AI tools or different software. So whatever I'm going to teach you today can be done in a similar way in all the tools. So for this session, I'm probably going to use Cloud Code. But if you have any preference, I can switch between Cloud Code or Cursor. I have both of them set up, so just let me know. If we have some time on the call, I can show both of them, and I can show you how they look and how you could use both of them. So, yeah, before I get started, any questions? I do see comments.

**Agueda Quiroga**

[1:42](https://youtu.be/LIIviyKZ3s4?t=102) There is a popular demand for a Cloud Code. I see.

**Dhruv Kamalesh Kumar**

[1:45](https://youtu.be/LIIviyKZ3s4?t=105) So we'll get started with Cloud Code then. I'm just going to share my screen, and then I'm going to explain what we are going to do. I'm going to just explain the problem statement of what we are going to be trying to build during this call. And if time permits, I'm going to also take some suggestions for features from you guys, and let's see if we can implement that today. The goal of this session is to build a website that is going to help me with a personal thing, which I'm hoping it might relate to you as well. So without further ado, just sharing my screen. Perfect. I'm assuming you guys can see my screen. Perfect. Okay, so the problem statement. Every week, I am expected to report back to my manager with everything I have achieved in that week, every task that I have completed. It's a report that goes. The issue is I tend to forget things.

[2:47](https://youtu.be/LIIviyKZ3s4?t=167) I might have done something, but I completely forgot that I did it. So let's probably build a website which might have a calendar or something. It keeps track of the date. And what I did on that particular day, it's going to store that information. And then on Friday, there is going to be a button which is going to generate a report. It's going to summarize everything I did in that week in a shareable tone language. And I can just copy-paste that to my manager. This is what we are going to be trying to build today. So this is, if you can see my screen, this is what Cloud Code looks like. You'll have to download the desktop version. On top, you can see there is chat, and then there is Cloud Code. There might also be a third option called Co-Work. That is also a very beautiful tool that might help you with a lot of other day-to-day stuff.

[3:47](https://youtu.be/LIIviyKZ3s4?t=227) But again, the focus of this call is on Cloud Code, so I'm going to stick with that. The first thing that you would need to do is allocate a folder for it. So the AI will only be able to perform actions within that folder and nothing outside of it. It won't be able to access or do anything outside of that folder. It's like a secured environment. So this kind of gives you a safety net. So at the bottom, there is an option over here to select a folder. Just click on that. Sorry, I'm just going to re-share my screen so you can actually see how selecting the folder looks like. Okay, so here I select folder, and then I'm going to select a folder that I want to work in.

**Audience**

[4:47](https://youtu.be/LIIviyKZ3s4?t=287) Oh. Okay, it's not yet. A hundred or forty, get three point.

**Dhruv Kamalesh Kumar**

[4:54](https://youtu.be/LIIviyKZ3s4?t=294) Okay, the folder has been selected. I'm just going to full screen it. So since all of you have probably used LLMs, ChatGPT or Gemini or Copilot or any other tool, this is a simple chat interface where you will be communicating with the AI. There's also a plus icon over here to attach any files or photos as well. So let's say you are building your website. There is an issue in the UI, and you want to tell the AI to fix it. So you can just take a screenshot of your tool or your website and just give it to the AI so it can see and look and understand what the issue is and potentially fix it as well. It is a beautiful feature. There is also a dropdown over here to select the model. Each model has a different performance, different capabilities with what it can do. My personal favorite is probably Opus 4.6.

[5:54](https://youtu.be/LIIviyKZ3s4?t=354) This is for coding related tasks. I would say this is by far the best model out there. So I'm going to select that. You can also connect it to remote sessions, SSH connections if you choose to. I'm just going to keep it on local. So now the question is, how do you give the AI the task to build this? How do you convey what you want to convey? Like, what do you want to build? And how do you get it to start doing it? So what I like to think of AI as is, you can think of it as an intern. You'll have to guide it. You'll have to give it instructions and be clear and be very specific. It can do a lot of things. It may not be aware of what it is capable of. In those scenarios, you can always keep asking it. Like, what can you do? It's smart enough to know what it is capable of doing, and it can give you suggestions based on whatever you're trying to do.

[6:54](https://youtu.be/LIIviyKZ3s4?t=414) So I'm going to get started. The first thing I'm going to do is, I'm going to explain what I'm trying to build in text. Again, the more detail I can give you, the better. So what I suggest, people, is start off small. Build something first. Deploy it. Test it out. Make sure it does what it was meant to do initially, and then keep adding features. Add a feature. Test it out. If any issues, let the AI know. Let it fix. Once all the issues are fixed, move on to the next feature. You can obviously use GitHub for version control, if you're familiar with it. If not, you can ask the AI. It can help you. It can help you guide through it, or it can explain new things as well. It has the AI, at least the Opus 4.6 model, pretty much can build and deploy and design anything you can imagine. It is genuinely scary how good these have gotten.

[7:55](https://youtu.be/LIIviyKZ3s4?t=475) So let's get started quick. So I want to increase the font size. Is this better? I want to build a website, and I want to deploy it as well, so that maybe I want to use it on my phone or maybe I want to keep a persistent link so that it does not just run from my laptop. So I want to build a website. I want to deploy it as well. The website will have a calendar in which for each working day, I will add what I did slash accomplished. And on Friday, I want to generate a report that I can share with my manager.

[9:13](https://youtu.be/LIIviyKZ3s4?t=553) So just making sure I've given it all the things I had in mind. Let's probably get started with this first, and then let's see what we want to do. So a suggestion over here I would have is whenever you're using cursor or cloud code, you generally put them in a plan mode initially, and that drafts a report on how the AI is going to perform that process or that feature or that build. Once you feel like the plan is good enough, you can start building it. Doing this plan step helps in giving you better outputs in the first try. So we'll start with this. Generally, these AIs are good enough to suggest you the plan mode by default before you get started if the project is complex enough. And if the project is small, it's probably going to start coding by itself. So it's already started coding.

[10:15](https://youtu.be/LIIviyKZ3s4?t=615) Okay. Is the zoom better? Okay. So perfect. Just a second. Okay. So within cloud code or cursor, it has the capability to spin up its own browser, a lightweight browser. On the left-hand side, you can see the browser. This is the current website. Obviously, the UI doesn't look that pretty. The color switching also doesn't work. We'll just let it finish first, and then we'll try to fix the UI if needed.

[11:20](https://youtu.be/LIIviyKZ3s4?t=680) Just going to go through comments while the AI is working and see if I can answer something in the meantime.

**Agueda Quiroga**

[11:30](https://youtu.be/LIIviyKZ3s4?t=690) Okay. So there was a lot of comments on how to make the screen bigger to look at the way you're writing. And other comments are if we can share the prompting into the chat, like the instructions you were doing now. I mean, if you put it now, if you could copy into the chat, just people could see in detail.

**Dhruv Kamalesh Kumar**

[11:59](https://youtu.be/LIIviyKZ3s4?t=719) I'm going to put this in cursor as well. In the meantime, I'm going to let cloud code do its job here. Or let's probably wait. Maybe I think it just finished. So let's probably go through what it finished. It's quite helpful to read through what it gives. Let's say it found something it wants to let you know, or maybe it needs some help from you to set up an external account or a site or an API key. It's going to ask you. If you're not sure how to do it, you can obviously just text it back and be like, how do I do this? Yes? Somebody had a question.

**Agueda Quiroga**

[12:45](https://youtu.be/LIIviyKZ3s4?t=765) No, I don't think it does.

**Dhruv Kamalesh Kumar**

[12:47](https://youtu.be/LIIviyKZ3s4?t=767) Okay. Okay. It says the app is built. Here's what it does. It has a calendar tab, the monthly calendar view, where you can click on the working day to log what was accomplished. Days with entries have a green dot. So good UI pattern. Weekly report tab exists. Data is saved in the browser's local storage. This to me, since I build tools or build software, it is storing it locally. It is not going to persist the data. As in, if I open the same website in a different laptop, that data is lost. This is only stored locally. So for my use case, this is fine, but let's say I want to share this link with a colleague. It might not work for them. Or if they want to see my data, it may not work with them. So I'm going to ask it to use a database as well. And maybe it's going to ask me to set up an account externally. So we'll go through that process as well.

[13:48](https://youtu.be/LIIviyKZ3s4?t=828) For deployment, we have a few options. You can use GitHub Pages, which is free. Push to the repo and enable pages. Netlify, which is also a good option. Drag and drop, work log folder. Vercel is also similar to Netlify. We can also use Vercel. So if you want to deploy a website for free, you can use, I personally use a lot of Vercel. So we can probably go with that. So the question it is asking is, which deployment method would you prefer? I'm going to say let's use Vercel. If you're not sure what to use, you can ask it to generate a report on comparing all three of them as well. It's going to compare all three of them and give you a report. And based on that, you can make a decision. So tools like Cloud Code and Cursor and all the other tools I was speaking about, they have the capability of executing terminal commands. If you are not sure what terminal is, it's a way to access your physical hardware at a very core level.

[15:00](https://youtu.be/LIIviyKZ3s4?t=900) But this is like one of the commands it's trying to execute. Check if Vercel CLI is installed. I'm going to allow it. So it's just accessing my physical laptop to see if necessary packages are installed. If not, it's going to start installing them or it's going to require permission before it does it. It's not going to do anything on my local laptop without my permission. So I'm going to allow it. Okay. So I need to log into Vercel first. So it is asking me to run this command in terminal. So I'm going to copy it. Assuming my screen is still sharing and it's not a Windows share. So if you use a Mac OS, you're going to can you guys see my terminal as well?

**Agueda Quiroga**

[16:04](https://youtu.be/LIIviyKZ3s4?t=964) Yes.

**Dhruv Kamalesh Kumar**

[16:05](https://youtu.be/LIIviyKZ3s4?t=965) Perfect. Okay, so in a Mac OS, it's called a terminal in a Windows laptop. It's going to be called CMD or PowerShell. So I'm just going to paste what it gave me. I'm going to hit enter. It's going to run a command. It gave me a link that I need to log in. I can also hit enter. It's going to open the browser. This is me logging into a Vercel account, which I had created beforehand. The creation of the account is free. So it just logged in. Enclose this tab. It also says it's logged in over here. I can close the terminal as well. Now we are back in cloud code. I'm just going to say I was able to log in. And now it's going to continue. It also gave another command now to actually deploy it. You can see what it's doing.

[17:06](https://youtu.be/LIIviyKZ3s4?t=1026) You can see how long it's taken to finish it. Looks like it's hit some limit. Okay, I'm going to maybe use something else. Let's probably use GitHub pages. It gave a option number two. So I'm just going to send that. Hit allow. Yes, it does not install anything by default. Everything is on the fly as needed. So it is already deployed. Now it's saying it's going to enable GitHub pages. I'm going to enable it. So whenever you set up an app like cloud code or cursor for the first time, there'll be a lot of permission asking.

[18:09](https://youtu.be/LIIviyKZ3s4?t=1089) There's also an option over here where it is auto accepted. It's plan mode and ask permissions. So you can keep switching. If I go to ask permission, it will keep asking permissions before it makes any changes. Auto accept is it will ask it once and then in the future, it won't ask again. Plan mode is what I suggested when you're making something very big or very ambitious. So it says the site is deployed. It will take a minute or two for the first build. Then it will be live at this URL. I'm just going to copy it. I can actually open it from here. Yeah, still waiting for it to deploy. Just give it a minute. In the meantime, any questions?

**Agueda Quiroga**

[18:52](https://youtu.be/LIIviyKZ3s4?t=1132) Yes, there are two questions. The first one said, Andrew, say what are the security risks for these additional packages? Are these auto updated or how does it work to limit risk?

**Dhruv Kamalesh Kumar**

[19:06](https://youtu.be/LIIviyKZ3s4?t=1146) Yes, these packages do not auto update. They cannot auto update. A user permission or the admin's permission is needed to perform that update and it is usually done via terminal or cursor or cloud code could also do it for you. But again, it's going to require the human permission in the loop. It's not going to do it automatically. So if there's a bug in the current package version, what happens? If there's a bug, usually cloud code or the cursor or the LLM is going to identify it. It is going to search online if other people have encountered similar issues with that package version. If they have, then it's probably going to revert back to a previous stable version so that your tool can still work. Or if that doesn't work, then you can ask it to research on an alternative solution as well.

**Agueda Quiroga**

[20:05](https://youtu.be/LIIviyKZ3s4?t=1205) Okay, the security barrier says Andrew, like 0.8.

**Dhruv Kamalesh Kumar**

[20:11](https://youtu.be/LIIviyKZ3s4?t=1211) When cursor or any AI is suggesting a package, I think you would have to instruct it a bit more to go with packages that we know are safe and have been in the industry for a while and it's an industry standard to use them. And I wouldn't recommend using any newer packages if you are dealing with any sensitive data in your application, essentially.

**Agueda Quiroga**

[20:46](https://youtu.be/LIIviyKZ3s4?t=1246) And there's another question, Drew, that says, sorry. Okay, we cloud code were for building an app or is just for building a website?

**Dhruv Kamalesh Kumar**

[20:57](https://youtu.be/LIIviyKZ3s4?t=1257) Technically, it can build an app too. It can build anything you want. If you want something to run on your laptop, which is like a desktop app, it can do that. If you want something that's going to run on a mobile phone, that's a mobile app. I should probably state something over here from personal experience. It can definitely write code that is going to run for Android and iOS. But if you plan to release a mobile application for iOS, you 100% need a Mac OS or an Apple laptop or a desktop. If not, Apple will not let you publish that app or even test or build that app. So you need a Mac OS only for iOS. And sorry, and if you're building an app for Apple laptops as well, which is Mac OS, you still need a Mac OS. Other than that, it can do everything. You want to build some automation scripts, you want to build some dashboards, websites, you name it, it can do it.

[21:59](https://youtu.be/LIIviyKZ3s4?t=1319) Data migration across legacy code, maybe migration of database. It can do everything. The only suggestion is give it as much as context as possible. Whatever you know, try to give it everything. Only then can it make those good educated decisions.

**Agueda Quiroga**

[22:25](https://youtu.be/LIIviyKZ3s4?t=1345) Okay, I don't know if I have time now for another question because I don't know the process, but there's a question by Gina. It says, so plan mode means it makes a plan and you approve the whole thing.

**Dhruv Kamalesh Kumar**

[22:37](https://youtu.be/LIIviyKZ3s4?t=1357) Exactly, exactly. It does not make any changes in the plan mode. It just writes a very detailed report on what needs to be built and how it's going to be built. Once you read through it, if that makes sense to you, if you agree with it, you can hit build and that's going to start building it after that. Generally results in a much better output. Yeah, okay. I noticed that this is still not loading. I just, I still see an error. So here I'm just going to show you what I can do. So I'm just going to take a screenshot of this page. I'm going to take a screenshot. I'm going to close it. I don't need it anymore. I'm going to copy the screenshot, paste it or drag and drop here. This is what I see in the link you shared. It's been more than five minutes. It said I had to wait a minute or two. So I'm just letting it know.

[23:37](https://youtu.be/LIIviyKZ3s4?t=1417) So now it's going to see that, see the error. It's going to see the link. It's also going to now look at what's happening behind the scenes and figuring out what the issue is. Like again, I had to not do anything. It's pretty much doing everything by itself. If you ask it for a security review, it's going to do that and it's going to give you that report. You can specify what you want in the report. And if you're not sure you can ask it to research on what other people do in the industry. It will go dig the web and figure out what the best practices are and then it's going to make you a similar report to satisfy whatever you have in mind. Okay, so it identified a bug where the code was there in GitHub, but it wasn't really deploying it. You need a script to deploy it. So it has now added the script as well. And now it has deployed it.

[24:38](https://youtu.be/LIIviyKZ3s4?t=1478) So let's see what happens. I'm just going to close this and let's probably split screen so I can pull up a browser. Okay. Okay, it says the deploy succeeded. Try refreshing the site. I'm just going to copy it again. Paste it over here. Oops. Okay, so here's my calendar also has the weekly report tab here. I can select the week ending Friday, no entries yet. Let's let's probably try adding some values and see what works if it doesn't work. We'll just let the AI know again and let's see what it does. So what did I do here?

[25:38](https://youtu.be/LIIviyKZ3s4?t=1538) I wrote an email. Okay, I'm going to save that here. I built a feature. Let's say I just started for two days. Go back to weekly report. It identified the week where the data was added. Not yet. Yeah, it just gave the suggestion over here. Generate the report. Here's the report. So now this is a very plain report. Nothing fancy. Just took the data and pasted it here. Didn't really rewrite it. So I just wrote a very like a three-word point. I wouldn't be comfortable sharing this with my manager. So let's probably introduce AI into this so that it can rewrite this in a better tone, better language that I can share. So whenever you want to use AI within the tool or within your website, you would need to get an API key from the LLM provider.

[26:51](https://youtu.be/LIIviyKZ3s4?t=1611) API key is like a secret key that they give you, which whenever you make an API call, they'll know that this is from a valid source and they're going to process it without an API key. You cannot really power AI in your application. And I should also mention that API usage or this key usage has a cost associated with it. So it comes with a cost as well. I already have the API key set up and I want to just mention something that's I feel important. So I'm just going to pull up Cursor. This is what Cursor looks like. If you have written code before and if you have used application like VS Code before, this is going to look very similar to it because that's on what it is built upon. This is the exact same folder where Cloud Code was working on. I have just opened the same folder within Cursor.

[27:52](https://youtu.be/LIIviyKZ3s4?t=1672) So whenever you have an API key, you're supposed to store it in a .env file. This is a .environment file. All your secrets, anything that you don't want the public to know, you don't want some third person to know about, you put it in a .env file. This is to protect that data. Why do we want to protect this data? Because as I mentioned, that secret key, there's a cost that gets attached to it. If it gets in the wrong hand, people can use that secret key to basically use your services and you would be paying for whatever they are doing on it. This can rack up pretty quickly. I have read stories where some people, their secrets were exposed and they were charged like north of $80,000 within a week. So things can go wrong. So just be careful when dealing with it. If you're not sure how to do it, again, ask the AI.

[28:55](https://youtu.be/LIIviyKZ3s4?t=1735) It is very, very smart. You can ask it all your questions, doubts. It will give you good suggestions. So the way you store it is in a .env file. I'm just going to expose my secrets. That's fine because I'm going to delete this API key as soon as this call is done. So this is how you store an API key. You have a key. This is the key. Equal to and then the value. You are never supposed to share this with anyone. This is highly sensitive data. Okay. Do you need an API key to use cloud code? No, you do not need an API key. You need a subscription to use cloud code. Okay. Now when we are dealing with AI and when we have API keys, we don't want the AI to see those either. Those have to be hidden from the AI as well. Why? Because AI, whatever you give to the AI is used to train them again.

[29:55](https://youtu.be/LIIviyKZ3s4?t=1795) So we do not want this API key to end up anywhere bad. So. For that, there are two things we'll be doing, or three things maybe. One is a .gitignore file. If you're not sure what it is, you can ask Cursor or Cloud Code to make it for you as well. This is how I made it. I did not make this manually, Cloud Code made it for me. A .gitignore file is whenever you push your code, this is my code, under work hyphen log, this is all of the code that makes the website run. So this is going to live in GitHub, all of this code, and I don't want to push my .environment file into GitHub. So I have a .gitignore file. Everything that is within the .gitignore file does not get pushed into GitHub, does not get uploaded into the internet. So it's an important file, you can ask any AI to make it for you. Similarly, we do not want the AI to access this file within this environment. We want it to access the code so that it can write the code, read the code, and update the code, but we do not want it to see this value. So there is also a Cursor.ignore file. Similarly, you can also have a Cloud.ignore file. Make sense? Okay, so that is with respect to security.

[31:19](https://youtu.be/LIIviyKZ3s4?t=1879) And this is how Cursor looks like. Again, you can see the code over here. This is app.js, this is all of the code. There is also the Agent tab over here. So again, you don't really have to code, you can just go to the Agent tab, which is again a chat interface. Similar to what we were doing over here in Cloud Code, you would be doing the exact same thing over here. So if it's okay with all of you, I would, I'm going to suggest that we switch from Cloud Code to Cursor and continue the exact same project. Can I get a thumbs up or something in the chat? API stands for Application Programming Interface, I believe. It is a communication layer between the front end and the back end. It's a common practice. Beautiful. I see a lot of thumbs up. Okay, so I'm going to just minimize this and switch over to Cursor.

[32:21](https://youtu.be/LIIviyKZ3s4?t=1941) Perfect. We don't really need the code, so I'm just going to close it and can't really make it bigger. Okay. So, okay. Similar to Cloud Code, in Cursor, we also have the Agent mode, Plan mode, Debug mode, and Ask mode. Ask mode, it won't make any code changes. You can ask it any question, it's going to answer you, but it's not going to make any changes. Agent mode, it can make changes, it can edit your code, it can edit your files. Plan mode creates a plan. I highly recommend using it when you're about to start building something. Once you approve of the plan, then you go into Agent mode to build it. That's the approach I personally take. Debug mode is for fixing bugs. And right over here, next to that, you have the model switcher. Here, by default, it is going to be on auto. It is fine to leave it on auto, but if you feel like you need more out of it and it's not doing what you want it to do, you have Opus 4.6 here as well.

[33:22](https://youtu.be/LIIviyKZ3s4?t=2002) Opus, so my personal ranking list is going to be Opus 4.6. After that, probably Composer too fast, and then maybe GPT 5.4, and then Sonnet 4.6 at the same level. Personally, not a fan of the GPT models with respect to coding. I feel they don't really, it takes a longer time for me to achieve the same result. So, going to switch back to Opus 4.6. You can also drop images over here if you choose to. And if you don't feel like talking, sorry, don't feel like texting into it, you can, obviously, you can talk to it as well. It's going to transcribe that. Also, if you are using a cursor or VS Code, you can click on this extension tab, and then you can install Cloud Code within cursor or Codex within cursor. So, I also have that set up over here. If you have done the setup, it's going to show up over here. For example, I can use Codex, which is from GPT or OpenAI, sorry. I can use it over here. Again, the UI is going to be quite similar. You have the plus icon to add files. You can choose the model. You can go into how much you want to think with it, change the permissions, where to run the task, same things. Again, Cloud Code is available here as well. I'm going to start a new session.

[34:49](https://youtu.be/LIIviyKZ3s4?t=2089) Oops, doesn't want to load. Okay. I'm going to ignore that and come back to cursor. Oh, sorry. Cloud had actually showed up. It was just minimized here. So, this is what Cloud Code looks like. It opened it a bunch of times. Yes, this is Cloud Code within cursor as well. So, you're not limited. You can pretty much use these anywhere. You can also run these on browser. So, that's also possible. You don't really even need a laptop. Okay. So, coming back over here, we want to add AI. So, I'm going to say in the final report, I want to use... Okay. For the API key that I have, I have gotten it from OpenAI. So, I can use only their models within my tool right now. I cannot use an anthropic model or a different model. I'll have to use OpenAI model. So, I'm just going to mention that in the final report, I want to use OpenAI API to rewrite the report so that it has a better tone for sharing it with my manager. Okay. So, now it's going to go through the code, figure out...

[36:31](https://youtu.be/LIIviyKZ3s4?t=2191) Again, this is a completely new chat panel. It's not the same Cloud place where we were talking. It has forgot... This on the right cursor has no clue what we were talking about before. It is just going to read the code by itself and going to figure out what the tool is in the first place and then figure out how to implement what we have asked it to do. Done this in Cloud... Yeah, yeah, yeah. You can do it in Cloud Code as well. I'm just showing you how can you do it in Cursor. You can do it anywhere. It can do the coding as well. It actually built this site. So, Cloud Code can build and is building Cloud Code and Cursor. Both of them can build. I am just showing how can you build in both of them for all the different audience that we have here. If I were to continue the conversation here and given it the same instruction, it would have done the same thing or a similar thing. But I'm just demonstrating how could you do it over here. You do not need both. You just need one of them. But regardless of what you have, it's pretty much the same process.

[37:50](https://youtu.be/LIIviyKZ3s4?t=2270) Again, you can see what it is doing over here, how it's thinking about it, how it's going about it. You can see all of that. VS is VS Studio, yes. Can you explain why CodeX and Cloud Code inside Cursor are interesting to use? So, I have been personally using Cursor for the last one and a half years. So, I'm used to the software, the tool. So, instead of having two more applications to use, I just integrated them within this. So, I have just one place I can keep switching and doing. Again, there's a cost associated. So, if I run out of credits in one of them, I can very easily jump on to the other one and just continue my work. So, let's see what it suggested. Changes. It did some changes. To deploy, you'll need to set the open API key variable in the Vercel project. So, the API key that we have in this dot environment, the secret that lets us use OpenAI model, since we are not pushing it to GitHub, it still needs to power the tool. So, how do we support that? We'll probably need to put it somewhere within that provider. Like, for example, if I were to use Vercel, this is how I can put it into Vercel.

[39:23](https://youtu.be/LIIviyKZ3s4?t=2363) Now, here, Cursor is not aware that I did not use Vercel and I have actually deployed it on GitHub pages. So, I'm just going to copy that link. I'm going to go back here and be like, I have actually deployed it on GitHub pages. I'll also give it the link. I'm able to use Codex and Cloud together through an API. I think maybe I missed as well. I was confused how you're using. So, these integrations are through extensions over here. Cloud Company, they wrote a bunch of code to support Cloud Code within Codex, not Codex, sorry, within Cursor or VS Code, Visual Studio. So, that is available for you to install over here through this extension. If you hit install and then if you log in to your account, you can use Cloud Code within over here. You can download the app and you can use that as well.

[40:34](https://youtu.be/LIIviyKZ3s4?t=2434) Just different ways to use the same existing subscription you have. Okay. Good to know GitHub pages only server static files. So, the serverless function I created won't work. It identified an issue in the code without me suggesting anything. So, it's now figuring out a different way on how to implement it. If it can't figure out anything, it's going to come back and it's going to let me know and it's going to maybe give me a few more suggestions on what might be the next steps. So, again, even if I don't really have the knowledge of anything, always feel free to ask. At the beginning, I said it's at an intern level. I treat it at an intern level. But it has the capabilities of writing code equivalent to a very senior software engineer. Okay. Let's see what it just wrote.

[41:41](https://youtu.be/LIIviyKZ3s4?t=2501) What's different now? It made some changes. Okay. Now it touches any server except opening itself. How it works. Okay. And put a collapsible key section site below the report. Okay. Okay. Since we have it in GitHub pages, there are some limitations on what and all we can perform. And it doesn't really give us a lot of freedom. So, how we implement this is going to change slightly. But, again, due to keeping time in mind, I do not want to change the direction of the project. So, I'm going to roll with this. And I'll show you what it did. So, it's saying to deploy. Just push your changes to master branch. GitHub pages will pick them up. No environment variables or server config needed. I'll explain what the last line means. So, again, let's say I don't understand what this means.

[42:43](https://youtu.be/LIIviyKZ3s4?t=2563) So, I'm just going to say can I I mean, I could ask it to explain what it means by that. But since I know what it means and I actually want to do it, I'm just going to ask it to do it. Again, you'll need to put it in agent mode or else this thing won't work. Similar to Cloud Code, it is going to ask you for permissions before executing these for the first time. Since I've been doing this for a year and a half, it doesn't need my permissions anymore. It's already curated. Okay. It says it completed the task. It should go live very shortly on the same URL. The link hasn't changed. I'm just going to go back here. Reload the site. Okay. Perfect. Now we see a new tab over here. This is where we need to add our new API key. So, I was mentioning that GitHub Pages has some limitations on what it can do. So, this is a result of that. Ideally, this is fine for now because you're asking the user to give their own key. You're not really exposing any of your key. So, completely fine for this presentation.

[43:56](https://youtu.be/LIIviyKZ3s4?t=2636) So, what I'm going to do now is I'm just going to copy that key that I had. Go back here. Just paste it. Hit save key. My key is saved. Now, I have the calendar. Let's say today is a Friday, right? Did a prompting lab. Okay. Weekly report. I'm going to select the week I need. Generate report. It gave the old one, but now there's also a button to polish for manager. I'm going to hit that button. Again, I haven't really seen the instructions or what the AI was told, but this is the final answer. Weekly report, it starts off with the date, the day, adds a divider. Then I have basically been giving it only three words for every day. It came up with a very detailed list. A very good list. I would be much more comfortable sharing this with my manager than this.

[45:00](https://youtu.be/LIIviyKZ3s4?t=2700) automated something which I wanted to do. Any questions? I noticed we have like 12 minutes left on the call. So I'll probably stop sharing now.

**Agueda Quiroga**

[45:12](https://youtu.be/LIIviyKZ3s4?t=2712) Okay, before moving to the questions, just I'd like to mention something to all the participants. There are tons of questions and different levels of questions into the chat. So first, something methodological. So we are sharing the recording and a learning guide with the step by step that Drew did today. Okay, and maybe some glossary and we're keeping some, I mean, adding some questions and comments on the chat. So we're seeing that tomorrow. Okay. And you will have two weeks to test example, tweak it, etc, etc. And on April 10, we are hosting an office hours to this session. Okay, so we will have the time to say, Hey, how was that? I tried etc. Okay, so that's how we are doing. So now we are opening for the q&a. And there are some questions in the chat, but we can go through the questions in the q&a. So I will start by Melissa say, can more than one API be used in one project? Like if you want to call multiple sites?

**Dhruv Kamalesh Kumar**

[46:22](https://youtu.be/LIIviyKZ3s4?t=2782) Yeah, you can add multiple API keys in your .env file, just a new entry, a new line. That's it.

**Agueda Quiroga**

[46:29](https://youtu.be/LIIviyKZ3s4?t=2789) Okay, by Eric, how much storage space would you expect this kind of new program website take up on your local drive?

**Dhruv Kamalesh Kumar**

[46:38](https://youtu.be/LIIviyKZ3s4?t=2798) Actually, very less. Probably say it kind of depends on the size of your website, what how much code you have. Let's imagine you have 100 files or 100 different documents, of course, that is still less than maybe 100 MB, it's less than that. So I don't think you'll be hitting even an even one gigabyte in your project. So should be fine. Okay, and you can use GitHub to store your code as well, for free. So that's available.

**Agueda Quiroga**

[47:13](https://youtu.be/LIIviyKZ3s4?t=2833) For those who are not technical capable, how do we keep track of security risk issues, especially with optional modules required to be installed?

**Dhruv Kamalesh Kumar**

[47:23](https://youtu.be/LIIviyKZ3s4?t=2843) Yep. A very valid question. Very important question. Again, you don't have to worry, the AI is very, very smart. It now has access to the internet as well. So it can go digging into what are the best practices. If somebody has reported that this package has an issue, a threat, it is going to be able to find it, mitigate it and let you know. So whatever it is, ask the AI, explain what you want, and it will do a phenomenal job. If you want a report out of it, you can explain that if you want it in PDF, it can generate a PDF report for you as well. So pretty capable. Try asking it.

**Agueda Quiroga**

[48:04](https://youtu.be/LIIviyKZ3s4?t=2884) Okay. So question by Eduardo, what are your thoughts on local LLMs via Olama for Cloud Code? Are they capable?

**Dhruv Kamalesh Kumar**

[48:14](https://youtu.be/LIIviyKZ3s4?t=2894) Local LLMs, deploying it via Olama is pretty nice. That's a nice feature. But for coding purposes, I don't really think there are any good models that you could potentially run on a local hardware. After I have been using, let's say from GPT-3, 3.5, 4, 5, almost all the Anthropic models as well, I haven't seen anything even close to 4.6 Opus. It's really, really good. And no open source model out there that can run locally can even match 20% of what Opus 4.6 can offer. So if you want something done quick and accurately, 100% try the foundational LLMs.

**Agueda Quiroga**

[49:05](https://youtu.be/LIIviyKZ3s4?t=2945) Okay, there was a question that has been answered by other participants, which is amazing, because it's about this peer to peer learning. It's about stuff that starts on GitHub. So I think it has been answered already. And then let me see because there are new questions. So my questions are moving. Okay. Okay, there's a comment that say, Wow, way above my head, but so fascinating. This makes coding so much more accessible to all. And I need to say there's a no coding person that wants to learn. I mean, it has a learning curve. And that's we need to accept and find it. We will get there.

**Dhruv Kamalesh Kumar**

[49:45](https://youtu.be/LIIviyKZ3s4?t=2985) Right. I am my day to day job is software development. I write code for living. It feels scary to say that I haven't written a single line of code in the last one and a half years. That's how good these models are, and getting and they keep getting better every three months. That's the trend that's been following.

**Agueda Quiroga**

[50:07](https://youtu.be/LIIviyKZ3s4?t=3007) Okay, there's a question that I think requires a longer answer. But I am just say that because maybe we can create a separate session for that. He said, How do we get the API? I think it's how does it work? How do you

**Dhruv Kamalesh Kumar**

[50:23](https://youtu.be/LIIviyKZ3s4?t=3023) generally you need to have a credit card behind it. So you create an account on their developer website, you put a billing account and then you can create an API key over there, which you can use in your applications.

**Agueda Quiroga**

[50:40](https://youtu.be/LIIviyKZ3s4?t=3040) Okay, so that another question. So API say that you're able to use codecs and cloud together through an API. I think maybe I missed that as well as was confused how to how you are using the two products together.

**Dhruv Kamalesh Kumar**

[50:54](https://youtu.be/LIIviyKZ3s4?t=3054) So there is no API behind this. I mean, I'm not directly connecting to the API. Instead, there is a login. You might be familiar with SSO login, like let's say your work email, there is a there's a common login page, right? Let's say Google, if you have a Google account, there's always a similar Google login page. So similarly, for all of these codecs and cloud code and cursor, all of these kind of have a similar login flow, you don't really need to deal with API access over here, you just log in with whatever account you have access to. And then it pulls in your security credentials and it it lets you use it.

**Agueda Quiroga**

[51:34](https://youtu.be/LIIviyKZ3s4?t=3094) Okay, another question, what do you need cursor inside cloud code? Can cloud code do the code itself?

**Dhruv Kamalesh Kumar**

[51:43](https://youtu.be/LIIviyKZ3s4?t=3103) Yes, yes, yes. Cloud code and cursor are kind of the same thing. They're just two competitive companies. They do the exact same thing. I was just demonstrating how you could use both of them. They are, they do the exact same thing behind the scenes. So whatever you can get your hands on, feel free to use it. It does the exact same thing.

**Agueda Quiroga**

[52:04](https://youtu.be/LIIviyKZ3s4?t=3124) Okay, a related question to that, but it's different is a can you explain please why codecs and cloud code inside cursor are interesting to use? Why do you want to use that?

**Dhruv Kamalesh Kumar**

[52:18](https://youtu.be/LIIviyKZ3s4?t=3138) Right? I did not want to download a different application to run that exact same thing when I can when I can just download an extension to run it within my cursor. There is also another reason why I did it. It is a bit more technical. So for the AI to write any code, it still needs to understand what has already been built, what your code already does and where it lives and be able to access it essentially. For this cursor from what I have noticed cursor actually does a phenomenal job in breaking down that code. So AI can access it better. If the AI can access your code better, if AI can understand what your code does better, it can generally give you better results. At the starting of the call, I had mentioned that the more context you can give to your AI, it will give you better results. It's the same principle here as well. If the AI can read your code better, it's going to give you better results. Let's let's take the example of Codex. Codex, I from my personal experience, it doesn't do as great of a job in terms of breaking that code down and giving it to the AI as compared to Cursor because Cursor has been like the company was built specifically to do that task.

[53:39](https://youtu.be/LIIviyKZ3s4?t=3219) And they have been in the industry longer than Codex. So their products are just a bit better in that terms. Cloud Code on the other hand is on par with Cursor. So Cursor, Cloud Code, these would ideally be my number one suggestion. Number two would be probably anti-gravity and then Codex. Number three would be somewhere around Copilot. Copilot is kind of a lot more limited in terms of what it can do compared to all of the things above it.

**Agueda Quiroga**

[54:10](https://youtu.be/LIIviyKZ3s4?t=3250) I think we have time for one final question maybe. Okay, the question I'm going to read, I have no idea. So I'm just going to read it without knowing the meaning of the words. Okay, so the question is, where is the data stored? Is there some time or some type of BD, like super base or, or Postgres behind it, which I have no idea what, sorry.

**Dhruv Kamalesh Kumar**

[54:36](https://youtu.be/LIIviyKZ3s4?t=3276) Makes sense. So for people who do not understand what was just spoken here, I probably while developing, I'd mentioned that any data I give to it, it's only going to live in that browser. If I share the link with you, you may not be able to see my data or that my data is not visible to you. Data is not persisted, it's not stored. To store the data, you need a database. If you're not sure what it is, you don't have to worry about it. You can ask the AI. It is capable and it knows about all the databases that are out there. It can help you set up. It's probably only going to need from you an API key to use that database. Other than that, it can pretty much handle everything. It can set up the database, it can connect to it, it can store your data, it can pull the data out of it, can do everything. Just ask it. You just say, I want the data to be stored permanently. Can you, can you implement a database? That's it. That's the only instruction I'm going to give AI. It's going to go figure out what databases are available, what is the best thing to use for our use case. It's going to give a suggestion if it has a lot of options and it does not know what to choose.

[55:46](https://youtu.be/LIIviyKZ3s4?t=3346) I can then be the decision maker here. I can say I want to use A. It's going to implement it. If it needs any special permissions or access, it's going to let me know. It's going to even let me know how to get those things. And once I give it to it, it should be, it should be able to deploy it. Yes.

**Agueda Quiroga**

[56:04](https://youtu.be/LIIviyKZ3s4?t=3364) Okay. I think this is it. No more time. So thank you so much Drew for this session. Amazing. And for our participants, expect the recording, the learning guide, try it at home and join us on April 10th for the Q&A on this session. Thank you so much. Everybody has been really, really amazing. Thank you. Take care. I'm going to close the session now. Thank you.

* * *

Original page: https://innovate-us.org/ai-for-coding-from-zero-experience-to-a-working-website · Licence: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/), as stated on innovate-us.org
