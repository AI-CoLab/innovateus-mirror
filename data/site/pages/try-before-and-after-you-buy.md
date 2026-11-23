---
id: "workshop:try-before-and-after-you-buy"
type: "InnovateUS workshop"
title: "Try Before and After You Buy"
url: "https://innovate-us.org/try-before-and-after-you-buy"
date: "2026-09-29"
duration: "60 minutes"
series: "Practical Approaches to Evaluating AI for Public Benefit"
instructors: ["Patrick McLoughlin","Kathrin Frauscher"]
moderators: ["Deborah Stine"]
recording: "https://www.youtube.com/watch?v=R2JPKppLZJ8"
transcript: "automatic, from the recording"
source: "InnovateUS (innovate-us.org)"
licence: "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/), as stated on innovate-us.org"
---

# Try Before and After You Buy

InnovateUS workshop · 29 September 2026 · 60 minutes

How can agencies assess whether an AI tool is likely to work before committing significant resources? This session covers practical methods for testing AI systems prior to procurement or deployment, including baseline comparisons, pilot design, task-based evaluation, and the identification of acceptable and unacceptable risks. Also, performance can change as models evolve, workflows shift, staff adapt their practices, and systems encounter new contexts and use cases. This session explores how agencies can monitor performance over time, detect emerging problems, and understand when an initially successful implementation may require adjustment or reevaluation.

## Learning goals

By the end of this workshop, participants will be able to:

- **Design** practical pre-deployment evaluations that compare AI performance against current practices and establish meaningful baselines.
- **Identify** acceptable and unacceptable risks through task-based testing and well-designed pilots before committing significant resources to AI adoption.
- **Develop** approaches for monitoring AI performance over time and determining when changes in models, workflows, or use cases require adjustment, reevaluation, or retirement.

## Speakers

- **Patrick McLoughlin**, Executive Director, Maryland Benefits, State of Maryland; Former MD State Chief Data Officer
- **Kathrin Frauscher**, Deputy Executive Director, Open Contracting Partnership

## Moderators

- **Deborah Stine**, Senior Fellow, Innovate US

Part of the series [Practical Approaches to Evaluating AI for Public Benefit](https://innovate-us.org/workshop-series/evaluating-ai-in-practice-a-benchmarking-series-for-government).

Recording: https://www.youtube.com/watch?v=R2JPKppLZJ8

## Transcript

Automatic transcript of the recording: names and terms can be misheard, and the times can be a few seconds off. Each time links to that moment of the video. The transcript alone: https://innovate-us.org/try-before-and-after-you-buy.txt (plain text) and https://innovate-us.org/try-before-and-after-you-buy.json (every segment with its start and end second).

**Deborah Stine**

[0:00](https://youtu.be/R2JPKppLZJ8?t=0) I'd like to welcome everyone to the fourth session of Practical Approaches to Evaluating AI for Public Benefit. Over five sessions, we are introducing practical approaches to AI benchmarking and performance monitoring in government. Today's topic is Try Before You Buy, and our speakers today are Katrine Frauser, Deputy Executive Director for the Open Contracting Partnership, and Patrick McLaughlin, who is Executive Director of the Maryland Benefits Platform and is the lead for the Maryland AI Innovation Lab. Each is going to introduce themselves, I'll ask a few questions, and then we'll dive into your questions, which, as a reminder, should be into the Q&A box. With that, let us go to Katrine.

**Kathrin Frauscher**

[0:57](https://youtu.be/R2JPKppLZJ8?t=57) Yes, thank you so much, Deborah. I'm Katrine, I'm with the Open Contracting Partnership. We are a non-profit, we work here in the US domestically and globally to transform procurement to make it work for the people and the planet. So, Deborah, when you were saying, you know, you were in New York and you had to pay $6 for an iced tea and didn't get any refills, you know, that could be a procurement problem. And that's the kind of thing that we work on at OCP, and I think that we will talk about today as well, is how do you avoid signing a contract that gets you no refills and has you stuck at a price that you don't want to pay? So I'm excited to be here and learn from all of you. I feel like all of you here might know more about this topic than I do, but we can always have a very good conversation. And my favorite fall foods are fresh apples. I'm from a part of Europe where Austria and Italy border, so we have that fall tradition where you go hiking and then you eat roasted chestnuts, apples, and drink young wine.

[2:01](https://youtu.be/R2JPKppLZJ8?t=121) So you should try that one day.

**Deborah Stine**

[2:04](https://youtu.be/R2JPKppLZJ8?t=124) Okay, great. Well, that sounds really good to me. Okay, so as I understand it, Patrick is with us, but he's on the phone and not on video. So, Patrick, if you are there, can you please introduce yourself and tell us about what you do?

**Patrick McLoughlin**

[2:19](https://youtu.be/R2JPKppLZJ8?t=139) Yes, just to confirm, can everyone hear me okay?

**Deborah Stine**

[2:21](https://youtu.be/R2JPKppLZJ8?t=141) Yes, we can hear you just fine.

**Patrick McLoughlin**

[2:24](https://youtu.be/R2JPKppLZJ8?t=144) All right, fantastic. Thanks, and I apologize for the video difficulties. So I am Pat McLaughlin. I serve as Executive Director of Maryland Benefits in the State of Maryland, which we are responsible for health and human services, benefit administration, social safety net, program access and delivery. But in addition to that, our office is also responsible for statewide enterprise architecture, AI enablement through our AI innovation lab, as well as enterprise product development. So we work to really bring together well-architected cloud services in support of building really effective products for our customers to use, leveraging AI as much as possible in the right place at the right time to help deliver outcomes. So really excited to talk a lot today about the ways that we're looking to support our customers getting from POC to production using AI, but being able to test and evaluate before having to put a lot of investment in there.

[3:32](https://youtu.be/R2JPKppLZJ8?t=212) So really excited to be here.

**Deborah Stine**

[3:36](https://youtu.be/R2JPKppLZJ8?t=216) Yeah, no, we're glad you could make it. Even if we have sound only, I'm sure what you say will be brilliant. Before we start, can you say what POC means that you mentioned?

**Patrick McLoughlin**

[3:46](https://youtu.be/R2JPKppLZJ8?t=226) Proof of concept. Proof of concept. So an idea that would come up correct. Yep.

**Deborah Stine**

[3:50](https://youtu.be/R2JPKppLZJ8?t=230) Okay, great. Thank you very much. Okay, so let's go ahead and start with the questions that we have here. So I'm going to keep saying Katrina. That's all I can... Catherine is what I should be saying.

**Kathrin Frauscher**

[4:03](https://youtu.be/R2JPKppLZJ8?t=243) Catherine works as well.

**Deborah Stine**

[4:04](https://youtu.be/R2JPKppLZJ8?t=244) Catherine works as well.

**Kathrin Frauscher**

[4:05](https://youtu.be/R2JPKppLZJ8?t=245) I have all versions of Catherine in many languages.

**Deborah Stine**

[4:08](https://youtu.be/R2JPKppLZJ8?t=248) Exactly. Okay, so what do you think State should be doing during the procurement process itself to test AI before they commit?

**Kathrin Frauscher**

[4:17](https://youtu.be/R2JPKppLZJ8?t=257) Yeah, thanks so much for that question. And again, for having me. I was thinking that States can do at least three things before they commit to buying AI. And the first one is, describe the problem and not the solution. If you are so lucky or unlucky, depending on where you sit in the world of RFPs, and you have to run an RFP, start with the problem. The second advice we have at OCP is in line with this title, test before you buy. So using sandboxes and paid pilots can make a huge difference to the success of your AI initiative. And then third, something that more and more States here in the United States are doing is set up pre-competed vendor pools because they can help you to move fast. So I thought I'd give you a few examples for each of these points. And I will try to throw in some international examples, because as I said, we work globally. And I saw in the audience that people are, many of you are from the United States, but I also saw India and Europe.

[5:22](https://youtu.be/R2JPKppLZJ8?t=322) So hopefully these examples resonate with you. And if you have examples that I'm not mentioning, please share them in the chat. Bermuda, there you go. So if you are from Bermuda and you're doing something really cool, please let us know. So first with challenge-based or outcome-based procurement, the trick here is to really not give a lot of technical specifications or name the technical architecture solution, but start with a question. What is the problem that you're trying to solve? And then let the vendor propose the solution. And maybe you can even test it before you start the full procurement process. In Scotland, they have a program, an initiative that's called Civic Tech, and they do AI challenges. So a Scottish government agency can pose a problem as an open question. Then they can pay several vendors to test the ideas and then only extend the contract to the one where the product actually works for the government agency. So that's one way.

[6:22](https://youtu.be/R2JPKppLZJ8?t=382) Start with a question. The second one is try before you buy and use a sandbox. And a sandbox lets you verify a vendor claim before you go and sign the contract. So they have to show you in your own life environments what they can and cannot do. So you are more protected from any kind of overclaims. And one example that many of you have might have heard about, but it's definitely worth mentioning, is in California. It's a technical sandbox where the Department of Technology built a Gen AI sandbox. And they can test out multiple AI models with vendor solutions before an agency there commits to buying it. And I think we have a post or a link about that as well. They won several awards for their sandbox. So I definitely recommend that you check it out. And they have some really good write-ups about that.

[7:24](https://youtu.be/R2JPKppLZJ8?t=444) And the national government of Chile actually also has a very similar system set up where they also can try and verify vendor claims before going to full-scale deployment. If you haven't seen it yet, maybe one other resource that I wanted to share is the Center for Global Development that some of you might know. They also have a new playbook out that talks about how to evaluate AI models. So I'm happy to share that link in a moment as well. And then the third recommendation, so after you ask a question and after you have a sandbox, is to try to set up agile vendor pools with AI companies. In case you are not familiar with that, that takes a little bit of foresight and a little bit of preparation. But it basically means that you build a pool or a bench of AI companies, a bench of vendors, and you run a full competition to set up that pool of vendors.

[8:25](https://youtu.be/R2JPKppLZJ8?t=505) But once you have set up that pool of vendors, you can call on these firms to work with you on AI projects. And as Patrick just said, if you need a proof of concept, you can go to that pre-existing pool of vendors to do that proof of concept with you. One warning here is that we encourage you in terms of good practice to make sure that you have a mix of vendors, small vendors, established vendors, new vendors, and that you also make renewal to stay in the pool based on performance. You want to avoid that you re-establish some of the bad practices that once a company is in there, it stays in there and wins contract after contract. But you can introduce some performance measures here to have good vendor pools. And there are several states who are doing that. Georgia introduced that in 2024. I actually talked to them, I think, two weeks ago, and they are having a good experience with that vendor pool.

[9:25](https://youtu.be/R2JPKppLZJ8?t=565) But then also the city of Denver or Texas are doing similar things. So these would be three tips of what you can do before you go into signing a contract.

**Deborah Stine**

[9:36](https://youtu.be/R2JPKppLZJ8?t=576) Hey, those are great tips. Yeah, Pat, let's go ahead and go to you. Oh, we have you. How exciting. Thank you. So what do you think states should be doing during the procurement process itself to test before they commit?

**Patrick McLoughlin**

[9:54](https://youtu.be/R2JPKppLZJ8?t=594) So I think one of the key drivers is, as you begin to evaluate whether or not you're going to move into procurement, is trying to really focus in on what are the outcomes you're driving? What are the pieces that AI can help in contributing to delivering those outcomes? I think one of the challenges we have in procuring before we actually know what we want to do is that we often try to buy something and then figure out how it can then be the solution we're looking for instead of understanding what are the outcomes we're trying to deliver, what's the overall goal we're trying to meet? And then as part of delivering or developing what that process looks like, what are the tools and resources that we need to get there? And in many cases, there are AI tools that can be helpful. But knowing what that looks like as part of that discovery and evaluation process before we go in and actually go through a full procurement or get trial licenses or whatever it may be, understanding that it's actually meeting the problem we're looking to solve.

[10:55](https://youtu.be/R2JPKppLZJ8?t=655) Once we're able to get to a place that we understand that this is the right tool or we believe that this particular solution is going to meet that objective, then it allows us to be a little bit more deliberate in what are the types of offerings we can get? What is the requirements that go into that? Are there opportunities for us to do evals in advance of actually procuring anything to see how we can necessarily work that into either our product development or if it's something we're going to use as a standalone tool, does it meet our overall objective before actually committing to it? That I think has been a real significant change for us is really trying to drive that discovery up front that says, what problem are we trying to solve? What are the outcomes we're looking to deliver? And as a result of that, what are the right pieces of the puzzle that have to come together for us to meet that outcome? And then what's the process we want to go about to ensure that we're evaluating the compatibility or the way that that can help meet the outcome as part of that overall solution?

**Deborah Stine**

[11:59](https://youtu.be/R2JPKppLZJ8?t=719) OK, great. Thanks. And just before we go to the next question, a reminder for everybody, if you have questions, be sure to put those into the Q&A box, not into chat. And if there's a specific person you'd like to answer the question, please put their first name in front of the question. So Catherine, let's go to the second question, which is, what should states build into actual contracts? What are two or three contract clauses you tell a state to fight for, even if they can't rewrite the whole contract?

**Kathrin Frauscher**

[12:29](https://youtu.be/R2JPKppLZJ8?t=749) Yeah, that's a great question. I love that we're going kind of to the procurement phase, right? Because we say, as Patrick just said, procurement actually starts way before you should say the word procurement, right? It starts really with this idea, do you need AI? And then bring the procurement people in really early, right? Procurement technologists, the agencies, they all need to sit together really early to figure out some of these tricky questions. And I also love, Deborah, that you say, like, what is the thing we're fighting for? Because we all can preach everything here, but then in reality, it's really hard to go and change your procurement processes or change your contract clauses. So you do have to preserve your energy for the things that matter the most so that you know what you want to fight for. So three things that I would really keep in mind right now, if you can do it all, is keep your contracts short. And by the way, someone just said, oh, I like these points for procurement in general. And I think this is very true, right? A lot of these points are not AI procurement specific. They are maybe true for most technology procurement or procurement in general.

[13:33](https://youtu.be/R2JPKppLZJ8?t=813) But yeah, so keep your contract short. Think about not signing 10-year contracts, but two to three-year contracts, and also have termination clauses of like 60 to 90 days that you can exit when you're unhappy with your vendor or their performance. And I think it is really important to pay attention to ownership and plan for this vendor transition, right? Enter the contract thinking about that you will leave the relationship with this vendor again. So that means that when you see something that vendor owns all customization or owns all data, you do not want to sign that contract. You want to have a vendor-neutral contract. You want to have open standards and API requirements so that you can enter and exit this relationship as it serves you and not experience vendor lock-in. That also matters for AI. And then, you know, the big unknown right now is what's going to happen to prices. So I do think it is really important right now that you pay attention to everything that mentions a price and that you think about how prices might increase, that you don't lock yourself in, you know, into prices in three years from now.

[14:48](https://youtu.be/R2JPKppLZJ8?t=888) So that you either have, you know, per usage fees or per credit fees, but also introduce not to exceed classes if you're building something more complicated, right, so that you Get ready for the post-IPO world and when prices might increase or when your pilot scales, right, what we hear a lot from our government partners right now is they can afford to pilot but they can't afford to scale up and these are all things you have to think about before you sign a contract. And if you are looking for good examples, you know, where can I find a cheat sheet around some of these contract clauses? I think Christine already posted them but both Australia and the European Union have some very good contract clauses for AI contracts that you can use. Obviously, check them before you use them to make sure they are legal in your context but they have some very good recommendations in there of how to think about these AI-specific risks that you

**Deborah Stine**

[15:44](https://youtu.be/R2JPKppLZJ8?t=944) might want to consider. And just like one follow-up question just, you know, for our audience who's not involved with this every day, I think you mentioned the words open standards and I think it was maybe API. Can you explain what you mean by that particular phrase?

**Kathrin Frauscher**

[15:59](https://youtu.be/R2JPKppLZJ8?t=959) Yes, absolutely. So, you can think about that like Lego pieces, right? If you build something with Lego pieces, you want to be able to take the Lego pieces of your technology apart again and rebuild them in a way that they serve you. You don't want that you have a Lego piece that has been super glued together and you cannot take the yellow one out and replace it with a red one. In technology, that happens a lot so that in a way, if you want to go change a piece, you have to throw the whole thing out which obviously most governments can't do. So, in a very easy way to say, you know, we recommend that you play with Lego pieces in a way that you can restack them and rebuild them in any ways that it serves your own purpose.

**Deborah Stine**

[16:41](https://youtu.be/R2JPKppLZJ8?t=1001) And so, like in the contract, you want to make sure it allows you the ability to do that in a couple of years, say, example, you know, if you're into a contract. Okay, great. Thanks. So, Patrick, let's go to you. What should states build into actual contracts? What are two or three contract clauses that you tell a state to fight for even if they can't rewrite the whole contract?

**Patrick McLoughlin**

[17:08](https://youtu.be/R2JPKppLZJ8?t=1028) Yeah, I mean, I think as was shared, looking at those opportunities where we can have not a significant amount of flexibility, but we want to avoid some of the lock-in that winds up getting often included, particularly because when we know just the pace of change right now is happening at such a rate that we do need some flexibility in what we can shift over time. At the same time, we want to make sure that we – and I'm going to take this from the kind of government space, obviously – we want to own IP, we want to own the overall work product that is occurring from this. So, we do not want to be in a position where any of the output or anything that's being derived is subsequently not owned by, in our case, the state or in the control of what we want to do directionally or preventing us from doing additional work that we may need to do or want to do with the output of the data itself or the work itself or by leveraging that contract for other – not other purposes, but leveraging the work we're doing for other purposes and having the contract prevent us from being able to do so. So, we need that level of flexibility that's built into that. I do think the flexibility also allows for growth and change over time, as I mentioned before, with not necessarily preventing us from keeping up with the pace of change in a responsible way. So, ensuring that we don't have that lock-in, that we've got flexibility for moving, I think those are things that are pretty critical to us right now. I think also ensuring that when we're thinking about what we're looking to procure, especially when we're focusing around AI, is we want to give ourselves some of that – not wiggle room, but the ability to try multiple things with different places and not necessarily be locked into a specific type or vendor category. We have anything ranging from things we're dealing with professional services through actual solutioning of sources themselves. We need

[19:14](https://youtu.be/R2JPKppLZJ8?t=1154) to have a certain level of flexibility that we can continue to work within and allow us to scale

**Deborah Stine**

[19:20](https://youtu.be/R2JPKppLZJ8?t=1160) appropriately as we go. Okay, great. And this is the last question I'm going to ask before we go to audience Q&A, so just make sure you get your questions into that Q&A box. So, Catherine, AI performance can drift after deployment and contract signature. What can you do during contract

**Kathrin Frauscher**

[19:40](https://youtu.be/R2JPKppLZJ8?t=1180) management? Yeah, great question. And, you know, we always say signing a contract is really the start. I mean, the real work begins when you have your contract signed and you have to sign your contract assuming that this will happen, right? Assuming, as Patrick just said, that you want changes, that you want flexibility, and that you want to try out many, many things. So, AI will change, models will update, your own staff will, you will have staff turnover, right? So, all of that you need to prepare for before you sign the contract and then keep a close eye on it while you manage your contract, which is the actual real work. So, some things that we watch out here for is, you know, you need to be able to see the data. Don't sign something where you get audit performance only, you know, provided by the vendor and you can't see the actual data or error rates or usage rates yourself. So, you need to own the analytics. Just to the list that Patrick just had of the things that you should own, own your own analytics so you can hold the vendor accountable. Be clear about what it means for you that it's no longer working, right? So, if AI is starting to drift or there are a lot of error rates or complaints are going up, you know, so that you know what you want to do when and what these error rates are. You know, we see a lot of contracts that governments sign where there's just no leverage to get out of it no matter how big the mistakes are or how big the error rates are. So, you know, have some teeth in there as well so that you can hold your vendor accountable. I think one of our favorites as OCP is that you need to invest in your own capacity, right, to understand all of those things, to manage your contract, to know, you know, what errors look like, what good looks like. So, organizational capacity, state capacity, it's really important. Often there's big budgets for vendors but not that much budget for

[21:42](https://youtu.be/R2JPKppLZJ8?t=1302) state to hire smart people, right? But, you know, that's where I would put some money is having a great team. Maryland has one of those growth teams, you know, built over the last few years and it really makes a huge difference in terms of what you can do in terms of performance and deliver if you have this state capacity that is strong. Yeah, so I think those are some of

**Deborah Stine**

[22:05](https://youtu.be/R2JPKppLZJ8?t=1325) the things that we look at. Okay, great. Thanks. And Patrick, what do you think, you know, you can do during contract management to, you know, sort of avoid drift? And I'll add also on top of this is like staffing is a really big issue in this area. What did you do to build a great team? And because obviously that's really a really important part of this process. Yeah, so

**Patrick McLoughlin**

[22:31](https://youtu.be/R2JPKppLZJ8?t=1351) obviously with the avoiding contract drift portion of that, I think being clear and kind of, again, what those outcomes are and the purposes are for what's being used allows us to be a little bit more fine-tuned in how we're actually going to be using the contract itself. Trying to always have kind of the purpose as to the why we're doing it has been really helpful in keeping those, not just AI guardrails, but kind of more contractual guardrails and kind of purpose guardrails put in place. One of the things that I think for building a team that's key is, you know, understanding from a capacity standpoint, the types of skills that we're looking for need to be able to fit the overall objective of our organization. We run a very product development centric organization. So we look at ways that we want to construct teams to be able to kind of work in well-coordinated fashion with a set purpose on delivering a specific product or features within that larger product. And that's kind of the way that we started building out the teams themselves.

[23:34](https://youtu.be/R2JPKppLZJ8?t=1414) One of the real values is that we can upskill with certain AI skills a lot of the talent that we have in place. So as we've been bringing on additional resources, so, you know, if you think about just a software engineer, the natural progression is to continue to, you know, leverage and expand different tools to be able to provide more capability to those engineers. And they, for the majority of the cases, jump all over that. So looking at kind of maintaining that philosophy, philosophy of how we want to build those teams and teams of teams in the way that we actually look to deliver. And then combining both those who are coming in with significant AI skills or those that we can start to upskill internally through training programs has really allowed us to kind of accelerate quite a bit in the way that we're adopting AI, not just across our particular program, but across the state at large. The accessibility to a lot of those tools and resources internally is another key driver. So making sure that when we do have team members that are looking to try, evaluate, test new tools out, we've got, you know, the ecosystem or the sandboxes that are secured and appropriate for them to do some of those evaluations or tests, you know, scenarios in, or the skill building sets in, in a place where they can kind of explore, but without doing anything that would cause risk to a particular, you know, production work or product development activity that could cause any particular issue with, you know, day-to-day work that's happening. One of the things we're really driving on the overall skill development though, is leveraging our skilled teams to help incubate and accelerate skill adoption within the agencies. So like as part of the AI Innovation Lab, our real driving force is working with our agency partners to move from, I mentioned before, POC to production. And the idea

[25:34](https://youtu.be/R2JPKppLZJ8?t=1534) is, we know in so many government spaces, there's a really significant interest in leveraging AI for different purposes. Getting out of that initial kind of testing and tinkering and evaluation stage is hard. Having the right ecosystem, the right skills, but more importantly, the right executive sponsorship and business commitment from those agencies that you're looking to support, that really is the area that becomes kind of the gap that is harder to bridge. And what we're really looking to do is, rather than just build something for an agency and say, here you go, enjoy, we're actually asking for agencies to come to the table with a certain level of subject matter expertise on the business and policy side, some technical leads, and executive sponsorship, and put together a team that our Innovation Lab team members can then subsequently support over a six-month time period, helping them on a regular basis, not just upskill, but understand what the tools mean, how they can be built to better support the outcomes that those agencies are looking to drive, look at real POC scenarios that are not just experimentation opportunities, but in fact, ones that we can move down the path to production so that those agencies' customers, be they internal staff or public facing, are then able to leverage kind of the outcomes of or the benefits of using AI in a production space.

[26:58](https://youtu.be/R2JPKppLZJ8?t=1618) It could be something like a chatbot. It could be something internally like legacy code migration. But if we can start to build that capacity within agencies and they feel they have a support system from our team to help guide them there, that allows us to have a much more organic, but scalable kind of growth pattern across the state within agencies to build out better AI capacity

**Deborah Stine**

[27:23](https://youtu.be/R2JPKppLZJ8?t=1643) and capability. Can you maybe give just like one quick example of something where you've actually applied this in some setting, you know, like HR, you know, whatever it might be?

**Patrick McLoughlin**

[27:34](https://youtu.be/R2JPKppLZJ8?t=1654) Yeah, yeah. We actually, we have a number of active initiatives happening right now with agencies across the state where we're doing this in real time. So I'd use legacy code migration as an example. So we have a particular agency that is looking, they ran into the issue of basically having the support resources to maintain a legacy system and it becoming more and more challenging to not only just handle the standard maintenance and operations of that system, but then losing the institutional knowledge about what the system design was, how it was originally architected just because of, you know, a factor of people retiring or leaving, you know, state government. So we worked with that particular agency to actually move them through the process of taking what was, or still is, and is migrating away from that legacy environment into one that uses a more modern set of technology, allows them to look at the overall system design today rather than what was designed 20, 30 years ago, to look at what are the actual service delivery models they're looking to meet? What are the outcomes or objectives they're looking to meet?

[28:46](https://youtu.be/R2JPKppLZJ8?t=1726) And be able to work with our team to reimagine what that could look like. The key with all this is we're leveraging AI tools to help in that code migration process, in the overall system design process, in the discovery process itself is how we turn what those desired outcomes can actually look like from a technical spec and architecture perspective. So that's one where if we were to go and look at kind of a traditional system migration effort without using these tools and resources, or the subject matter expertise that our team can bring to the table to work with these agencies, that's an initiative that could have taken multiple years to accomplish. And our goal is really to move them forward over the course of, we're two, three months in right now, we've got another three months to go through, but getting them to a place where when we come to the end of this this engagement timeline, they'll be able to move that into a new production environment with a modernized code base that actually meets the objectives of today in the future, as opposed to the objectives that were from, you know, 30 years ago when the system was developed.

[29:49](https://youtu.be/R2JPKppLZJ8?t=1789) So that's an example where we're actually on the ground working with an agency, but they are the subject matter experts. They know the policy. They know what their customer base needs. A technologist People in our organization are not those who are going to be leading in that direction, but we can help provide them with the tooling, the resourcing, and the support to get that application or that system to a place that they can support their customers long-term without quite the lift that we'd have to go through in the past. So that's one of the examples that we're actively going through right now.

**Deborah Stine**

[30:22](https://youtu.be/R2JPKppLZJ8?t=1822) I think, right, yeah, I'm sure a lot of people have those same, you know, states have those same challenges. So I'm now going to switch to the audience questions. We'll sort of see how many we can get through in the time we have. Catherine, if an AI solution is being proposed to solve a problem, how do you evaluate that AI is the appropriate solution before building it?

**Kathrin Frauscher**

[30:44](https://youtu.be/R2JPKppLZJ8?t=1844) Yeah, that's a great question, and I think actually Patrick opened with that when he started and joined us. Maybe, you know, the first thing you should assume, maybe AI is not the solution, you know, and go to a scenario when AI is not the solution and see what other solutions there are, and then come to AI. I think it has actually shifted back again a little bit, but there was definitely a while where I think we all assumed that AI is the solution to many things that it's turning out. That's not really the case. So I think investing, you know, in your problem statement, starting with the need, doing some user research, some mapping. I think all of those are really good checks to make sure that AI will give you the solution. And then once you have decided that you really need to AI, you know, a lot of the practices that we talked about today would give you more insight into what type of AI, which model, which gatewards you want to set. And I also shared a guide from CDG, you know, that helps you evaluate models.

[31:48](https://youtu.be/R2JPKppLZJ8?t=1908) That's a little bit more technical in case that is helpful.

**Deborah Stine**

[31:51](https://youtu.be/R2JPKppLZJ8?t=1911) Okay. And Patrick, do you have a centralized AI team that can help smaller agencies who cannot afford to have their own AI-skilled human resources? If not, do you think it's a good idea to have one, something similar to, say, a centralized PMO that offers project management services?

**Patrick McLoughlin**

[32:09](https://youtu.be/R2JPKppLZJ8?t=1929) Yeah. So we have a centralized team, and I think it's helpful to have kind of centralized guidance, or maybe a centralized location that you can handle some things around establishing, like, core, when we think about model gardens, or essentially what are the models that we want to make available to the state? We want to have a centralized kind of process for that, because if it just becomes everyone uses what they want, there's a certain level of risk and, you know, kind of, not control, but we want to have the right guardrail setup so that we are aware of what models are being used, how they're being used, and can ensure that we have the right support mechanisms and security mechanisms in place to kind of protect those. Where I do see decentralized is as we start to see those skills get distributed. We love to see that happening with embeds within those agencies so that they can start to build out additional use cases and support within those agencies around kind of their business practices or the problems they're looking to solve.

[33:15](https://youtu.be/R2JPKppLZJ8?t=1995) And they've got a little bit more institutional knowledge about those programs and can help support them in a more direct way than someone who maybe from a central team would have a longer lead time or run-up time to try to understand some of those business practices. So, I think it's a combination of having that central team and in the case where we have a small agency that just doesn't have the resources, yes, in our scenario, we will provide support for those agencies to help them meet certain goals around initiatives where they want to try to build out some core capabilities or at least use some SMEI tooling to improve an overall workflow or process. Our team will help support that. Another area where it's really helpful for kind of centralized is where are there solutions that can be applicable or applied across the entire enterprise or all of the agencies through repeatable patterns. So, I'll give you an example of this is whether you are a Microsoft government or a state agency, whether you use Google or something else, these are kind of workspace, everyday resources and toolings, whether if you're using Google and you're using Drive and Sheets and Docs and whatever it may be, there's a number of opportunities for a centralized team to build out some core AI tooling and solutioning that can be deployed and used by all of those agencies across the board as a force multiplier to help support some of those enterprise solutions.

[34:55](https://youtu.be/R2JPKppLZJ8?t=2095) So, instead of each agency building a one-off, it allows you to kind of build a really well-scaled and easily adopted set of enterprise tooling around those key kind of everyday business products that agencies are using, and that's where a central organization can be really helpful in driving some of those forces. So, I don't think it's a one or the other. I think it's definitely an end, but there's a place for central really establishing the core governance, the right enablement practices, the appropriate frameworks, the AI scorecards or governance cards. Those are key from a central perspective, but then if you can embed at the local level, local being agency level, subject matter experts, or those who are really part of that agency's overall operational mission, it allows them to get speed to delivery at a different rate than someone coming from a central office.

**Deborah Stine**

[35:52](https://youtu.be/R2JPKppLZJ8?t=2152) Well, that actually relates to the next question. So, Catherine, you can maybe answer that, which is we're required to have a panel of employees from other departments view, rate vendor proposals. How do we ensure those on the panel have appropriate understanding of AI to properly evaluate vendor proposals?

**Kathrin Frauscher**

[36:10](https://youtu.be/R2JPKppLZJ8?t=2170) Yeah, that's a great question, and I think it goes back to what we said before about investing in organizational capacity, you know, upskilling people, training people. We, two years ago now, I think we wrote a buying AI guide, and this was obviously the earlier days, but it really surprised us that what a lot of people wanted, and especially procurement people wanted at that point, was like really basic information about how AI works. You know, it was not necessarily about the ins and out of like how procurement of AI works, but they just wanted to understand AI better. I think since then, we have made some progress, right? But also, I think, you know, Patrick and many of you experienced that there's a lot of what is expected of all of you, right? All the things that you have to know, and we also have to be careful that we don't expect too much of employees, right? So, you have to be a Medicaid expert and an AI expert and know how to do user research, you know, and stop working at five. So, it comes with a little bit of being realistic as well of how much you can expect one person to do, and I think, therefore, it goes back to building a team, you know, like you can bring different skills together to cover it all.

**Deborah Stine**

[37:25](https://youtu.be/R2JPKppLZJ8?t=2245) Yeah, and Patrick, I think you talked about this a bit, but this is a little bit more specific question. With many organizations I've worked with, they get past the pilot phase, and then when they put these into production and roll out across organizations, the cost shoot up past budget almost immediately. Often, there are duplicative agents too, or some of these are only used by a few silos on the org that eat up all the tokens. A team to review these as they continue to function, humans must be part of the governance planning. Any advice in the public entity space on affecting that governance conversation?

**Patrick McLoughlin**

[38:02](https://youtu.be/R2JPKppLZJ8?t=2282) Yeah, I mean, it's a real concern and a real issue, and having that kind of evaluation process and not thinking about model evaluation, program evaluation to kind of look at is what we are deploying and building well-architected from the perspective of operating as it's anticipated? Do we have the right caps, controls, and guardrails in place to prevent over-utilization or areas where perhaps we wind up having more token usage than we anticipate just because it was architected in a way that allows for extension well beyond what the, or expansion well beyond what the desired kind of workflow or process was going to be. So one of the key things is continuous review around these. So getting real-time or near real-time metrics on what does your overall token consumption look like, understanding the telemetry around that, understanding what the actual kind of compliance components are associated with that.

[39:04](https://youtu.be/R2JPKppLZJ8?t=2344) So you can understand, are we doing what we had spec'd out the use case to be? And if we are not, where are we deviating from what the original plan was? Because that's going to result in greater consumption. But looking at that repeated review to understand, are we still level setting against what the overall goals were? If we do have higher token consumption or just utilization than we anticipated, and it's for the right reasons, right? It's more adoption. It's use cases that have grown since we initiated the work itself. Being able to, again, balance that expansion with budget controls and caps around how much can be utilized, when it can be utilized. And then in some cases, it may also mean a model switch or to reduce model capability, all dependent upon what the needs are. So it's that continuous evaluation and review. Anytime we're releasing any products to a customer, whether that is a bought product or whether it's a built product, we want to ensure that from a review perspective, we're continually evaluating what the success criteria was, whether we're meeting it, what are the feature enhancements that are required?

[40:18](https://youtu.be/R2JPKppLZJ8?t=2418) So it is a true life cycle that should continue to be curated. That should allow us to have a better sense of how some of that token utilization is occurring. Has the architecture continued to operate as expected? And then those questions of if you're leveraging agents, what are those agents doing? Is there any deviation from the original plan? Again, going back to that telemetry and understanding what the consumption looks like, what the use cases are, what the outputs have looked like, and balancing that with model performance are ways that we can kind of establish some of those controls and governance around what's being deployed without running the risk of saying, we've gone two or three months, we've blown our budget. Now we're trying to figure out exactly how we can continue to operate when we don't have the funds to support the system that we thought we were going to have.

**Deborah Stine**

[41:10](https://youtu.be/R2JPKppLZJ8?t=2470) Thanks. Ken, I saw you answered this in writing, but I think it's a question a lot of people face. I wanna, if you could maybe give a spoken answer as well. So we've seen AI deciding eligibility for Medicaid, SNAP and unemployment for millions of low-income people. When agencies define acceptable risk for procurement, how should they weigh errors that harm the agency like improper payments against errors that harm residents, like say wrongful denials or termination of benefits people need to survive? How can agency push their own leadership to make sure beneficiary harm is an equal part of the needs and risk assessment and other best way, other ways to best engage vendors in that process?

**Kathrin Frauscher**

[41:52](https://youtu.be/R2JPKppLZJ8?t=2512) Yes. Tell them AI can never decide anything about eligibility. It has to be a person. I mean, Patrick will be able to talk about this much more eloquently than I can, but this is true for Medicaid eligibility. It's the same for your procurement decisions, right? Imagine a world where AI writes the procurement proposals and then AI evaluates and the procurement proposal, what could go wrong? Many things could go wrong. So I think it's about human in the loop, right? And we want to use AI to make things less time consuming, less complex, flag a missing document, save time for the caseworker, but not to make those decisions about eligibility, be it for Medicaid or foster care or anything, which where lives are at stake. So it's just a no.

**Deborah Stine**

[42:44](https://youtu.be/R2JPKppLZJ8?t=2564) Do you want to add anything, Patrick?

**Patrick McLoughlin**

[42:48](https://youtu.be/R2JPKppLZJ8?t=2568) Yeah, totally agree. I mean, the role of AI, when we think about benefit access and social safety net programs is really that driving informational components for our caseworkers to understand. So if we can have the flags that, Catherine just mentioned, the opportunities to auto extract information, to categorize information differently, that helps inform those caseworkers to make the decisions that they are trained to make on a regular basis, but not have to get into so much of the manual work that they previously had to go through. I mean, when we just think about kind of capacity of what the caseworkers are asked to do on a daily basis, and if we are able to provide a more streamlined approach for them to get the information they need and then allow them to use their subject matter expertise to make those decisions, it allows us to be much more effective in the overall benefit delivery model. But the caseworker is the one who ultimately has to be making those decisions.

[43:49](https://youtu.be/R2JPKppLZJ8?t=2629) They, at the end of the day, are the ones that are the experts in this area.

**Deborah Stine**

[43:54](https://youtu.be/R2JPKppLZJ8?t=2634) And to avoid vendor lock-in, expensive failures in AI procurement, strong in-house oversight is vital. How do you balance vendor expertise with maintaining internal capacity and what ratio of budget staffing should agencies dedicate to internal evaluation versus the vendor contract itself? So Patrick, I figured you'd be in a good situation to answer that one.

**Patrick McLoughlin**

[44:19](https://youtu.be/R2JPKppLZJ8?t=2659) Sure, and I'm going to use the Maryland lens for this because each state, each government entity is going to operate slightly differently. We tend within the state to be very internal capacity driven. And what I mean by that is we rely a lot on our overall state staff and employees to be the ones that deliver a lot of that work. So when we think about vendor lock-in, what we don't want to, or what we have tried to build a strong program around is allowing the vendors to really be those who would be sourcing the tools that we would be using, where the actual work itself would be done by. Now, that's not exclusive. Each agency has different models, and many agencies will use a vendor to do much of their work. But ultimately, if we can be really focused on the service itself that the employee is driving… An example I used on Friday in a meeting I was in is, we're less concerned about Kleenex, we're more focused about tissue.

[45:24](https://youtu.be/R2JPKppLZJ8?t=2724) And the idea behind that is not coming to a solution, whether it's buying a piece of software or whether it's using a vendor to build something. As the name of that solution, what we want to understand is, what is the actual service we're trying to provide? And then allow the right solution to tap into that. And one of the things that we want to prevent ourselves from doing is saying, I need one of those because someone else has it, without understanding why you need it. And that often results in you being locked into using a contract that really is not to the benefit of you or your customers, because you just wanted it because you wanted the name around it. So what we're really trying to do is be very service-focused. Discovery is a really critical piece for us to understanding what those services look like, what outcomes we're trying to deliver, what is the right type of tooling we need, and then work with a vendor who can provide that tooling, rather than necessarily have to outsource all of those key pieces to an external party to provide that solution.

**Deborah Stine**

[46:30](https://youtu.be/R2JPKppLZJ8?t=2790) Okay, so I'm going to just give one more set of questions to each of our speakers. And so we're heading toward the finish line here, so this is the speed round. So, Catherine, I'm going to combine three questions together, but I think you can answer them pretty quickly, which is, should AI policy be in place before signing a contract? What if executives are reluctant to define measurable outcomes but are still pushing for AI solutions? And how can we cover ourselves for our case protections? Meaning, how can we save our important prompts and results? Should we need to change the AI company? So, should we have an AI policy in place before signing a contract?

**Kathrin Frauscher**

[47:08](https://youtu.be/R2JPKppLZJ8?t=2828) I was like, no, not yes to that answer. I was like, yes. I was trying to, I was like testing my own memory if I can remember three questions in a row.

**Deborah Stine**

[47:16](https://youtu.be/R2JPKppLZJ8?t=2836) Okay.

**Kathrin Frauscher**

[47:18](https://youtu.be/R2JPKppLZJ8?t=2838) I think I can do it. I think it is better if you have policy because it does speak to the organizational capacity, right, and being set up for when things go wrong. That is not always possible, right, depending on where you live and which state you're in. So, your contract can kind of sub in for policy if needed, but it is better to have policy if you have the time to do that first. Executives, yes, I think that is a very common scenario that that happens. I think building a coalition of advocates within and outside of government, you know, to help you lobby for good outcomes and real results and accountability, I think that is really important. For the case protection and maybe having a library of your prompts, you know, that you can take with you. So, making sure that in your contract you get the prompts that you enter and you can take them with you.

[48:18](https://youtu.be/R2JPKppLZJ8?t=2898) That would be maybe one quick fix that you could do here.

**Deborah Stine**

[48:22](https://youtu.be/R2JPKppLZJ8?t=2902) Okay. And I am going to give you two really quick, Patrick, which is, do you think AI will actually be an enhancement to contract management or a hindrance? And then, what things do vendors try to slip into contracts that you should watch for?

**Patrick McLoughlin**

[48:40](https://youtu.be/R2JPKppLZJ8?t=2920) I personally feel positively around these things. I think it will be an enhancement to contract management over time. I do think it is going to be an iterative process to catch some things and to ensure that we have got kind of the right checks and balances around where it is being used in the process. I think about kind of when we look at how and where we may be able to introduce AI to our overall kind of contract lifecycle, we do need to make sure that the example before that Catherine gave of like, you know, writing an RFP, evaluating an RFP, these are all things that we have to be cognizant of in the overall process itself. But there are pieces that can be drastically streamlined. A lot of the churn we go through can be reduced or limited by kind of leveraging AI more and more throughout that process. So, I do see it as being a positive impact over time, but one that we will have to continue to work our way through some of the bumps in the shorter term that are going to exist.

[49:48](https://youtu.be/R2JPKppLZJ8?t=2988) So, yes to that. And the second question was?

**Deborah Stine**

[49:52](https://youtu.be/R2JPKppLZJ8?t=2992) Yeah, you know, hold on. I went and I switched screens here. Things vendors slip into contracts to watch out for and get clarity on.

**Patrick McLoughlin**

[50:02](https://youtu.be/R2JPKppLZJ8?t=3002) Yeah. Well, again, going back to IP and just data retention, data ownership, what you can do with much of your kind of underlying pieces that us as a government entity want ownership of. Those things are all critical pieces to ensure are not changing. We have a lot of limitation on what data can be shared by those vendors, what they're able to do with that data itself. We're very cognizant of this within the state itself and how we think about where data rests even for a very short time period, like when we're using large models, what kind of guardrails and components can we put in place to prevent that data from being, even for a short time period, how stored or retained somewhere else. So, those are things from a fine print and close evaluation we have to look at are what are the pieces that we can ensure aren't putting us or our customers, you know, not that we're really pushing customer data there, but like, you know, as, you know, representation of the public, how are we ensuring and protecting that data at all times?

[51:12](https://youtu.be/R2JPKppLZJ8?t=3072) So, those are the things that I think we're very cognizant about. The limitations we want to ensure that we are putting in place in our contracts to prevent anything from falling outside of the bounds of what we feel are appropriate for, you know, kind of government use government data.

**Deborah Stine**

[51:30](https://youtu.be/R2JPKppLZJ8?t=3090) Okay, great. So, we really only have a few minutes left. So, what's like in one sentence, what's one thing you want people to remember tomorrow? So, Katharine?

**Kathrin Frauscher**

[51:41](https://youtu.be/R2JPKppLZJ8?t=3101) I think one thing to remember is that if you're a state, you do have the power. And if you invest in organizational capacity and your procurement and your contracting, you know, you can get the AI that serves you and that aligns with your values. And yeah, we hope that this was helpful to do more and not less of that.

**Deborah Stine**

[52:02](https://youtu.be/R2JPKppLZJ8?t=3122) Great, thank you. And Patrick, what's your one thing?

**Patrick McLoughlin**

[52:05](https://youtu.be/R2JPKppLZJ8?t=3125) Yeah, I've been at the Nacio conference the last couple of days and will be for the next few days. And I think one of the things I've talked a lot about of late is this balance between what we hear, see, know a lot about how quick AI is moving and expanding and the balance between what that is and knowing how fast the rate and pace of change is and also what we know today. Like there are things that we are using in operation today that are tried, true, trusted. We have the right guardrails. And I think the balance between knowing that is what we're using every day and is not necessarily what we are seeing on a regular basis of being on the very, very, very leading edge. Does not discount, take away of the way things are expanding, but there is an opportunity to exhale and say like what we are using, we do have the right guardrails around. We have, you know, vetted this appropriately and it is in the best interest of, you know, our internal customers or however we're using things.

[53:05](https://youtu.be/R2JPKppLZJ8?t=3185) So that's something I think I've been reflecting on a lot the last couple of days and I think it's important right now particularly to keep in mind.

**Deborah Stine**

[53:14](https://youtu.be/R2JPKppLZJ8?t=3194) Okay, great. Thank you. So let us send a virtual round of applause to our speakers, Catherine and Patrick. As I mentioned, there is a post-workshop survey that we ask you to fill out. Be sure to suggest topics that you'd like to cover in the future and we do use your feedback to plan future workshop series and all your feedback goes to the speakers to say how much you found how useful this information was. Our last workshop in the series, number five, is on principles for public sector AI evaluation and that will be next Tuesday, October 6th at 2 p.m. And then next week we'll also have our second in the series focused on procurement. It's an AI cross-procurement lifecycle. Where does it actually fit? Which is on Monday, also at 2 p.m. Eastern. So we hope to see you there. Until next time, thank you so much everybody for coming and thanks again for our speakers. Goodbye and have a good rest of the day.

**Patrick McLoughlin**

[54:16](https://youtu.be/R2JPKppLZJ8?t=3256) Thanks everybody.

**Deborah Stine**

[54:17](https://youtu.be/R2JPKppLZJ8?t=3257) Thanks.

* * *

Original page: https://innovate-us.org/try-before-and-after-you-buy · Licence: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/), as stated on innovate-us.org
