---
id: "workshop:a-tale-of-two-generative-ai-use-cases"
type: "InnovateUS workshop"
title: "A Tale of Two Generative AI Use Cases"
url: "https://innovate-us.org/a-tale-of-two-generative-ai-use-cases"
date: "2024-08-21"
duration: "60 minutes"
language: "English"
instructors: ["Marcie Chin","Krista Canellakis","Polina Dudnik","Neil Shah"]
recording: "https://www.youtube.com/watch?v=fCgotuIGO5U"
transcript: "automatic, from the recording"
source: "InnovateUS (innovate-us.org)"
licence: "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/), as stated on innovate-us.org"
---

# A Tale of Two Generative AI Use Cases

InnovateUS workshop · 21 August 2024 · 60 minutes

- Learn from the U.S. Digital Response (USDR) team leading its portfolio of generative AI (GenAI) support for state and local governments
- Explore how generative AI can be integrated into existing workflows to address public sector challenges, drawing on USDR’s experience with state and local governments
- Hear about two applied uses of generative AI in areas such as benefits access and delivery, language translation, and data analysis
- Learn about USDR’s GenAI design sprint approach, aimed at finding good use cases for GenAI along a workflow, rapidly prototyping solutions, and testing them internally for rapid GenAI quality assessment and viability
  Gain actionable insights and a clear path forward to harness AI’s power in your agency
- **Sign up [here](https://airtable.com/appdAyP4l2W9gxQdc/pagx9sXF2F53dI7kn/form)**

## Learning goals

- Learn from the U.S. Digital Response (USDR) team leading its portfolio of generative AI (GenAI) support for state and local governments
- Explore how generative AI can be integrated into existing workflows to address public sector challenges, drawing on USDR’s experience with state and local governments
- Hear about two applied uses of generative AI in areas such as benefits access and delivery, language translation, and data analysis
- Learn about USDR’s GenAI design sprint approach, aimed at finding good use cases for GenAI along a workflow, rapidly prototyping solutions, and testing them internally for rapid GenAI quality assessment and viability
  Gain actionable insights and a clear path forward to harness AI’s power in your agency
- **Sign up [here](https://airtable.com/appdAyP4l2W9gxQdc/pagx9sXF2F53dI7kn/form)!**

## Speakers

- **Marcie Chin**, Product Lead for the Unemployment Insurance Program, U.S. Digital Response
- **Krista Canellakis**, Program Director, U.S. Digital Response
- **Polina Dudnik**, Google.org Fellow, U.S. Digital Response
- **Neil Shah**, GenAI Technologist-in-Residence, U.S. Digital Response

Recording: https://www.youtube.com/watch?v=fCgotuIGO5U

## Transcript

Automatic transcript of the recording: names and terms can be misheard, and the times can be a few seconds off. Each time links to that moment of the video. The transcript alone: https://innovate-us.org/a-tale-of-two-generative-ai-use-cases.txt (plain text) and https://innovate-us.org/a-tale-of-two-generative-ai-use-cases.json (every segment with its start and end second).

**Krista Canellakis**

[0:00](https://youtu.be/fCgotuIGO5U?t=0) Okay, hello everyone. Welcome to this session. My name is Krista Kanalakis. I lead a program called Digital Delivery at the U.S. Digital Response and I just want to first start off by thanking Innovate US for this amazing opportunity and thank you all for joining and spending your time here with us today. We're really excited to share with you two use cases of how we've supported governments with adopting generative AI. So just a quick overview of what we have in store for you today. We'll share some background on USDR and our approach to helping governments with gen AI. We'll then dive into two use cases where we've helped governments with benefits delivery and language translation and then we're going to break into two breakout groups where each project team that you've just heard about will go into more detail. So I'm sure hopefully you'll have lots of questions and you'll have a chance to ask those questions in the breakout. So USDR, we are a non-profit, non-partisan organization that works alongside governments at all levels to ensure that they have the capacity to support the critical needs of the public and we do this by both being the capacity and building the cap capacity so we show up and roll up our sleeves and to support governments on their immediate challenge and then we also aim to build the capacity along the way leaving governments in a better position to continue the work. We work on a short-term consulting model so we focus on work that can be delivered in the course of two or three months in partnership with the government team and we really pride ourselves on being non-partisan working with governments on a variety of issues in all quarters of the country and the best part is we're free. So quick on how we work, we essentially match needs for help from the governments with the availability of our skilled

[2:03](https://youtu.be/fCgotuIGO5U?t=123) volunteers and we collaborate with this growing community to support those immediate needs on specific projects across the country. We are very lucky to have a large support team for this work on generative AI. As part of USDR's focus area in GenAI, we have support, a million dollars from funding from google.org plus some pro bono technical support to really create public sector GenAI experiments and tools to help improve service delivery. So and in addition to the technical experts and former public servants we have on our USDR staff, we have this amazing group of fellows from google.org who are supporting our work who you'll be able to meet in this session today. And just a quick overview, a critical USDR model is our extended team. So we have a bench of nearly 10,000 volunteer technologists who've raised their hand to say they want to help government. We have government agency partnerships across the country and we help prototype to show what's possible and build government's capacity and really importantly we are product and tech neutral. So we really listen to our partners, understand their tech environment and build what will work best for them.

**Neil Shah**

[3:35](https://youtu.be/fCgotuIGO5U?t=215) So with that I'm going to hand it off to my colleague Neil who will share more on our GenAI approach. Hi everyone. So I'm Neil. Thank you all for joining. It starts with our vision, better public services accessible to all enabled by generative AI. So we set out over the last six months to talk to our partners and figure out what exactly the problems that they might have, what we can approach with generative AI and we started building prototypes. We built for common use cases, so across permitting, improving the quality of permit applications by checking submissions, unemployment insurance, helping adjudicators make more consistent decisions by synthesizing legal rules, language access, translation services into Spanish for broader access and then doing some other types of data analysis. What we're going to do today is walk you through two different case studies. One is called Project Ada, the other one is called Project Gala and that's also going to be the names of our breakout rooms. So the ones that interest you most keep in mind and at the end of our quick overview we're going to do deeper dives in those separate breakout sessions. So I'm going to start with Project Ada. It's an AI draft assistant and what we did was we had a partner who had a team of 50 staff members and they handle over 40,000 benefit reviews every year. These are appeals that come through and they have this small team, really capable and smart, but they walked us through their entire workflow and what we found is that given this volume and given all the manual processes, the timeliness and quality can be challenging. So the goal of this project was to increase response times, create consistency and more consistent quality and we wanted to be sure that agents

[5:40](https://youtu.be/fCgotuIGO5U?t=340) are at the center of decision making with the human-in-the-loop approach, which we're going to talk more about. So this isn't something that the partners necessarily knew up front. We ran them through what we're calling the the USDR generative AI design sprint and this is a shortened version of a design sprint that many government and non-profits and companies now utilize and what we do is we have some pre-work, we gather data, constraints, decide on problems, we work through a three-day sprint, talking through an expert panel, getting more familiar because USDR folks may not be experts on the topic, and then we move into prototype. And finally we learn from that prototype by getting feedback and iterating on the quality. That might be a longer period of time depending on the engagement. Next slide. And so I'll hand it over to Polina to talk through more about Project AIDA and the crisp decision that we kind of came, problem that we came to. Go ahead.

**Polina Dudnik**

[6:50](https://youtu.be/fCgotuIGO5U?t=410) Thanks Neil. Hi, I'm Polina. I am a fellow with USDR working on this AI applications for the AI applications for the government. So as Neil discussed, we have spent some time with our partner to really get into the meat of the problem, to map out their workflow, to understand what are some of the places that were taking a long time and contributing to the timeliness problems and contributing to the backlog that was accumulating of all of these decisions sort of piling up and not being made on time. And we've identified a few places that were taking a long time. And we really thought deeply together of what are the places that would actually be appropriate for an AI application. So I'll describe two of them to sort of explain why we picked this particular one. So one of the places in the whole process that is very time consuming is actually gathering facts about a particular case to understand what had happened in this case. And that's what ultimately determines eligibility or ineligibility for unemployment. And that process is very time consuming because there's many different places and sometimes different humans in different organizations that the examiners have to talk to, to really gather a full picture of what happened. While this was time consuming and does contribute to backlog, it's not a really appropriate place to apply AI. The main reason is because not all of this information is immediately digitally available. Sometimes it's simply on paper. And while it's not a hard barrier, we would probably have spent a lot of time simply digitizing information first. So we wouldn't be able to apply AI immediately.

[8:36](https://youtu.be/fCgotuIGO5U?t=516) The second problem in this was that all of these different databases or places where that information can be gathered have a lot of, of course, restrictions placed on them on who can access them. And so that was, was going to be another barrier where now for AI to help us, we'll have to give it permissions to view all of those databases. And that is not a quick process. I think we would be out of our two to three month time window that Krista had mentioned, just trying to gather permissions. So, but the second place we've identified was that when the examiners make their decision, they also have to write a letter back to the applicant to explain what the decision was and why it was made based on what laws and regulations. And that process too was time consuming. And we hypothesized that we could probably get an LLM, a large learning model, an AI assistant to help with drafting these letters based on inputs that are state regulations and rules, different case law, as well as, as well as facts about the case.

[9:48](https://youtu.be/fCgotuIGO5U?t=588) We were able to very quickly in a day, confirm that hypothesis that this should be possible by simply trying it out directly in one of those LLM chatbots that you might have heard about, which is ChatGPT or Gemini or Claw. There's a variety of them. And with very simple prompt, not tuned, nothing, not a lot of work went into it. We could see that it was already producing a decent result. So we knew that with more work around this, we can create a pretty good tool. So we've set an objective jointly with our partner to create a tool, which would allow us to help the examiners by listing all the applicable laws for the particular case, as well as drafting the first letter. And then together with this, we also had hoped to try to standardize some of the decisions, draft decisions that are being written, because there's a lot of non-standard, there's a lot of variability across this group of 50 people who usually write these letters.

[10:49](https://youtu.be/fCgotuIGO5U?t=649) And so there was also a secondary goal of standardization. The outcome we were really seeking still is to save time and reduce the backlog. So ultimately, we really wanted to confirm that if we do write these draft decision letters with the help of AI, that it would eventually save time for the examiners. So we settled on this tool that we call ADA, which stands for AI Draft Assistant. And what this tool does is it takes inputs from the examiners about the facts about the case, and then drafts a letter. Next slide. Now, one of the big questions to answer, and this is a very important question, is why would we write a tool at all? If an LLM chatbot will just simply write you a letter with a simple prompt, why would you spend any time investing into writing a tool? And it's an important question. And to answer that question, we really need to look at what are the requirements for this tool. So we have a team of 10 plus people, 50 people. We expect them to use this tool daily.

[11:56](https://youtu.be/fCgotuIGO5U?t=716) And the set of people has different degree of tech savvy. But what we wanted to create is a tool that they could use very easily and wouldn't allow them to get into the weeds or make mistakes with AI chatbot. We wanted to make sure that this tool could help with standardization of draft decisions across all the users, across all the examiners. We wanted to make these draft decision letters auditable by supervisors so they could read what the LLM wrote and what are the edits that the examiners had made afterwards. We wanted to get feedback on these draft decision letters so we can continue improving those letters. And lastly, and most importantly, and this sort of gets into the policy of AI inside governments, and we're starting to see these policies take shape for this particular state, the policy shaping to be that AI must not be making human decisions. And so we needed a way to enforce that. We needed a way to make sure that in all cases, the human examiners are making decisions and LLM is not making the decision. So if we simply gave an LLM chatbot without doing anything at all to the examiners, we wouldn't be able to meet these requirements because the quality of the output that you get back from an LLM really depends on how you ask your question. And if you are not skilled at doing this, it's very easy to get wrong answers. And an LLM chatbot doesn't allow for standardization because all the examiners will be using that chatbot however they want.

[13:36](https://youtu.be/fCgotuIGO5U?t=816) So through this sort of thought process, what we decided to do is to build a little wrapper on top of an LLM chatbot that would limit the functionality of the chatbot, not to chatting, but to a single question that is formulated once. So this tool would take all the inputs about the facts from the examiner, will take the decision most importantly as an input before asking LLM anything, and then wrap it up into a very detailed question to an LLM, and the LLM responds only once sharing what the draft decision letter is. And so is it necessary to write a tool in every case of the government use case? No. But it is often the case that if you have a large user base and you want standard use case and kind of control the experience, more likely than not, it is probably advisable to not give them the LLM chatbot directly, but to wrap it into something first.

[14:42](https://youtu.be/fCgotuIGO5U?t=882) Next slide. So at the end, and I know this is not, you can barely see what's going on here, I'll do a demo later, but in the end what we created is this web tool where when an examiner goes to this web tool, they see what's on The left-hand side of the slide, which is a request for a bunch of inputs about the case. When was the appeal? What are the facts? What is your decision? And once all of those inputs are entered by the examiner, there's a request that's being sent to NLLM. And once it's responding, it will create this draft decision letter here that the examiners can edit, and they can also rate, and the supervisors can later review. Next slide. One of the main topics in our collaboration with the state was how to use AI responsibly and make it human-centered. And I just want to reiterate one more time that the important policy aspect that's coming out of this experience, building with the state, and a lot of states are in fact looking for sort of guidance or some idea of what policy on AI users should be, was this idea that we must not have NLLM make the decision, was that we must have the human make the decision and enter the decision.

[16:02](https://youtu.be/fCgotuIGO5U?t=962) And so this was actually kind of a critical and long-discussed part of our collaboration was how to shape the tool in a way where we make sure AI is not replacing humans making decisions. So this tool is an assistant tool, but it's not a decision tool. The other thing that's important to understand and realize is that none of the AI tools that we will write will be 100% correct all the time. They will be increasingly more and more useful and more correct, but never 100% correct. So it's critical to have a human in the loop. And that's what sort of puts the humans and AI together as collaborators. So this is what we're going for with this tool. And I will do a quick demo right now.

**Neil Shah**

[16:56](https://youtu.be/fCgotuIGO5U?t=1016) Let's actually save the demo for the breakout, just for time.

**Polina Dudnik**

[16:59](https://youtu.be/fCgotuIGO5U?t=1019) Okay. Sorry, talk about it.

**Neil Shah**

[17:03](https://youtu.be/fCgotuIGO5U?t=1023) And now, so the live demo is going to be the breakout, so now I'm going to hand it off to Marci, who will talk to you about Project Gala.

**Marcie Chin**

[17:17](https://youtu.be/fCgotuIGO5U?t=1037) Okay. Hello, everybody. One second to set this up. Okay. Hello, everyone. My name is Marci. I'm the product lead working on Krista's team, focusing on unemployment insurance and language access. And today, I want to share a case study with you on how we collaborated with the State of New Jersey on using generative AI to increase language access in unemployment insurance. So since 2020, USDR has been supporting unemployment insurance agencies' efforts to increase workers' access to benefits. As challenging as the system is for people who speak English, it's even more challenging for people whose primary language is other than English.

**Krista Canellakis**

[18:08](https://youtu.be/fCgotuIGO5U?t=1088) Hey, Marci, I'm just going to interrupt you because your slides aren't showing.

**Marcie Chin**

[18:14](https://youtu.be/fCgotuIGO5U?t=1094) Oh, would you like me to share a screen? Let me try again.

**Krista Canellakis**

[18:19](https://youtu.be/fCgotuIGO5U?t=1099) Yeah, I was able to see them.

**Marcie Chin**

[18:21](https://youtu.be/fCgotuIGO5U?t=1101) Oh, okay. Great. I can see them.

**Krista Canellakis**

[18:24](https://youtu.be/fCgotuIGO5U?t=1104) Okay, keep going. There were some folks curious if you could share the deck, but maybe later.

**Marcie Chin**

[18:30](https://youtu.be/fCgotuIGO5U?t=1110) Okay, yeah, we can definitely share the deck later. Does this look good to everybody? Okay, great. Yes. So since 2020, supporting unemployment insurance agencies, we've learned that workers with limited English proficiency are up to 50% less likely to receive UI benefits than workers who speak English as their primary language. They tend to have nontraditional employment in industries that are more susceptible to economic instability and job loss. And this nontraditional employment, also, the system isn't originally designed to support workers in those types of industries. And they're also, we found, at higher risk of being targeted for unemployment insurance fraud. It's also no surprise that many governments are often lack capacity to provide meaningful translation services for their residents. So many governments are still dealing with difficulty or legacy systems where it's really difficult to update a myriad of digital and paper notifications that need to be tailored to specific claimant needs.

[19:37](https://youtu.be/fCgotuIGO5U?t=1177) And translation of government services gets really tricky because you need to find the right translation for these specialized terms and phrases. On top of being required to be accurate and compliant with federal and state policies. And at the end of the day, public servants are overworked and understaffed. So in 2023, we partnered with the New Jersey Department of Labor and Office of Innovation on Spanish language access so that they could launch their new unemployment insurance intake form in both plain English and plain Spanish. And out of that work, we developed a framework for how to approach Spanish language access for unemployment insurance. That framework consists of three pillars. First is focusing on co-creating that content with subject matter experts. So including working directly with their bilingual frontline staff, including call center agents and members from their IT team. And as well as internal policy experts.

[20:37](https://youtu.be/fCgotuIGO5U?t=1237) Finding that's really like a shortcut, right, to producing accurate content and also promoting alignment across teams. We also make sure to validate all the translations we produce with their target audience. So I believe in this case we tested with about 15, I believe 15 Spanish speaking residents in New Jersey. Representing nine different countries of origin. Because we wanted to really ensure that the translations were accessible and culturally relevant across the different Spanish dialects that are reflected in New Jersey's demographics. And then lastly, we make sure to staff our team with native Spanish speakers. What we found was by having native Spanish speakers on the team, it really helped, it went a long way with establishing connection with the Spanish speaking community and also with building trust. So that we can really get some really, really meaningful feedback from them. And so New Jersey launched, fully launched their new unemployment insurance intake form in both English and Spanish in April of 2024.

[21:40](https://youtu.be/fCgotuIGO5U?t=1300) So far they're seeing some really amazing impact data. So for example, reducing the average application time from more than three hours down to under half an hour. And by making the intake form available in Spanish for the very first time, we're seeing parity in completion time across or between English and Spanish speaking or English and Spanish applications. We're also seeing a roughly 20% increase in follow through to the next step from post application submission. So I think this is really, really impressive data so far. Also out of this work, we produced a plain Spanish glossary of unemployment insurance terms and a Spanish translation guide for unemployment insurance that's available on our website, free and open for any government to use. If you want to look at that, you can scan this QR code, but we'll send all of this information out afterwards too. So don't have to worry about that. But you might be wondering now, what does all this have to do with generative AI?

[22:43](https://youtu.be/fCgotuIGO5U?t=1363) So generative AI is the technology that will enable us to scale this approach. So the commercialization of generative AI technology really gave us this opportunity to scale all of that human centered work that was put into developing New Jersey's new unemployment insurance intake form. And what we're proposing here is that all of this work is still necessary, but other states and benefit programs don't have to keep reinventing that wheel. So I'm going to walk you through how we took a no-code approach, in this case using ChatGPT, just to see how generative AI could help us scale this work by leveraging both our language access framework that I just shared and those Spanish language resources that we created out of that project. Also that we could train a model to produce more accurate and accessible Spanish content that's really tailored for unemployment insurance. So the first takeaway I want to share with you all today is that generative AI is actually pretty good at translating unemployment insurance content to Spanish.

[23:43](https://youtu.be/fCgotuIGO5U?t=1423) We tested the translation of a common unemployment insurance term, discharged, which generally refers to being let go from your employer. So we tested that across four different translation mechanisms here. The human expert translator, who's versed in the domain knowledge, versed in plain language, content designer linguist person. So just like the best of the best that you can get. We also tested it with a trained model, and I'll go through and describe how we did all this in our breakout room. We tested it with an untrained model and also with the standard Google Translate widget that I'm sure most of you all are familiar with on your own websites. And so what we found was we had our Spanish or we had all of the outputs, the translation outputs across these mechanisms evaluated by our certified Spanish translator. And she scored each of those definitions or each of the translations using rubrics such as plain language, cultural relevancy, active voice, among others listed here, and averaged those scores out on a scale of one to five, with one being very poor and five being very good.

[24:55](https://youtu.be/fCgotuIGO5U?t=1495) So as expected, the version translated by our expert human averaged the highest possible score of five. And Google Translate, the Google Translate widget, averaged the lowest at 2.5. But you'll see here that the untrained or generalized model, which means we basically just asked ChatGPT to translate it without giving it any prompts or any context, it did slightly better than Google Translate. But once you start doing a little bit of fine tuning with the model, it comes really close to the human translation quality. So scoring a 4.7 out of five. So while our initial pilot test here suggests that large language models are pretty good at translating unemployment insurance content to plain Spanish, especially with a bit of fine tuning, but in order to really extract value from the model, you still need to keep humans in the loop. And for language access, this means augmenting our original approach with training or fine tuning that model with human-centered data sets, like our plain Spanish glossary of unemployment insurance terms and our translation guide, and also by making sure that the translations generated by the model are still always tested for readability by end users and reviewed for accuracy by what we're calling a competent human translator paired with a subject matter expert.

[26:16](https://youtu.be/fCgotuIGO5U?t=1576) And so this updated approach includes expanding our training data. So right now, we're continuing to work with the New Jersey Department of Labor to expand their unemployment insurance glossary so that the entire catalog will be available in plain English and plain Spanish. We're also developing a set of prompts to help make sure we're getting the best outputs from the model, and also continuing to refine that rubric you just saw so that governments know how to confidently measure the translations that are being produced. And finally, I want to remind you all and myself that it's okay to be confused. This technology is really new, and it's still changing really fast, and this is why we're taking such a measured approach in this work. But I also want to encourage you all to try it out for yourselves, and especially for translation. So we really believe that anyone can do this starting today. So we took a no-code approach to developing a proof of concept to validate whether or not generative AI really can scale our approach to language access.

[27:22](https://youtu.be/fCgotuIGO5U?t=1642) Our initial pilot demonstrates that generative AI, when properly trained, can help teams save a significant amount of time in developing plain language translations by cutting down the amount of time it takes for a content designer to localize the content, which requires a lot of research into regional variations and cultural nuances with language, and also reducing the amount of time needed to conduct user research and subject matter expert review. So trained models can help maintain consistency and accuracy of content throughout the system, not just with websites and forms, but also with various notifications and notices and non-digital methods of communication as well. They can also be leveraged to ensure that translated content is accurate and compliant with federal and state policy. We're really excited about the potential for generative AI to lower the barrier for governments to provide meaningful language access for all residents. We have a vision of developing a more robust generative AI tool powered by a model that can speak public benefits in plain language in any language spoken in the United States, which would really allow us to scale this impact across additional states to additional languages, particularly the lower resourced ones, and to additional benefits programs because we're seeing a lot of overlap in terminology between unemployment insurance and other programs like SNAP and paid family and medical leave, for example.

[28:48](https://youtu.be/fCgotuIGO5U?t=1728) And so we currently have an amazing team of Google.org fellows, Spanish bilingual user research and content designers who are all currently using large language models to update New Jersey's unemployment insurance glossary to plain English and Spanish. Doing this work will allow us to expand on those resources that we currently have, ultimately creating more comprehensive data sets that feed back into the model, making it more and more useful over time. And so we're very grateful to the state of New Jersey for being willing to experiment and learn with us and for paving the way for additional governments to hopefully benefit from this work. And so come join our breakout room where we actually we have a special guest. We have Jillian Gutierrez here, who's the director of the Office of Unemployment Insurance Modernization in the state of New Jersey, where she will be available to answer any questions and share some additional insights. And we'll all dive into more detail about how we're using large language models to translate their glossary into plain English and Spanish. Thank you.

**Neil Shah**

[29:47](https://youtu.be/fCgotuIGO5U?t=1787) All right. Thank you, Marcy. So we are here to help. Reach out to us, take a quick picture of this QR code, or type in the website. We want to hear about your projects, the problems that you're facing with them, and see if we can help. Next, we are going to do breakout rooms, and we're going to go deeper into each of these projects. So you'll see, once we start the breakout rooms, which we can start now, you can click in the bottom in Zoom, and join Gala or Ada. For Gala, we'll be going through the language access, the fine-tuning of the LLM process that they went through, and you'll also hear from our special guest from New Jersey. In Ada, we'll do a demo and answer questions about the Draft Assistant.

[30:55](https://youtu.be/fCgotuIGO5U?t=1855) And if you're having any trouble figuring out how to join the breakout rooms, just let us know.

**Audience**

[31:02](https://youtu.be/fCgotuIGO5U?t=1862) Yeah, I don't see, I'm looking for breakout rooms on my Zoom.

**Neil Shah**

[31:10](https://youtu.be/fCgotuIGO5U?t=1870) It might be behind the more button, Brian. There might be a more with three circles.

**Audience**

[31:15](https://youtu.be/fCgotuIGO5U?t=1875) Yeah, it's a captions, oh, join breakout room.

**Neil Shah**

[31:18](https://youtu.be/fCgotuIGO5U?t=1878) There you go. I see it.

**Audience**

[31:20](https://youtu.be/fCgotuIGO5U?t=1880) Thank you very much.

**Neil Shah**

[31:21](https://youtu.be/fCgotuIGO5U?t=1881) You're welcome.

**Audience**

[31:22](https://youtu.be/fCgotuIGO5U?t=1882) This is great.

**Neil Shah**

[31:37](https://youtu.be/fCgotuIGO5U?t=1897) We're getting about an even split in both breakouts.

**Audience**

[31:42](https://youtu.be/fCgotuIGO5U?t=1902) Oh, good.

**Neil Shah**

[31:46](https://youtu.be/fCgotuIGO5U?t=1906) And for the others still here, there isn't going to be much happening in the main room, so.

* * *

Original page: https://innovate-us.org/a-tale-of-two-generative-ai-use-cases · Licence: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/), as stated on innovate-us.org
