---
id: "workshop:the-good-the-bad-and-the-ugly"
type: "InnovateUS workshop"
title: "The Good, the Bad, and the Ugly"
url: "https://innovate-us.org/the-good-the-bad-and-the-ugly"
date: "2026-10-27"
duration: "60 minutes"
language: "English"
series: "The Good, the Bad and the Ugly of Predictive AI"
instructors: ["Aleksandra Korolova"]
moderators: ["Mihir Kshirsagar"]
recording: "https://www.youtube.com/watch?v=bE3uF2P_kTc"
transcript: "automatic, from the recording"
source: "InnovateUS (innovate-us.org)"
licence: "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/), as stated on innovate-us.org"
---

# The Good, the Bad, and the Ugly

InnovateUS workshop · 27 October 2026 · 60 minutes

Some predictive systems have helped governments improve inspections, anticipate service needs, target interventions, and allocate resources more effectively. Others have failed because of poor data, flawed assumptions, feedback loops, bias, or misplaced confidence in uncertain forecasts. Through real-world examples, participants will examine both successful and unsuccessful deployments of predictive AI and learn how to identify common warning signs, limitations, and unintended consequences before they become costly mistakes.

## Speakers

- **Aleksandra Korolova**, Assistant Professor of Computer Science and Public Affairs, Princeton University

## Moderators

- **Mihir Kshirsagar**, Tech Policy Clinic Lead, Princeton University

Part of the series [The Good, the Bad and the Ugly of Predictive AI](https://innovate-us.org/workshop-series/the-good-the-bad-and-the-ugly-of-predictive-ai).

Recording: https://www.youtube.com/watch?v=bE3uF2P_kTc

## Transcript

Automatic transcript of the recording: names and terms can be misheard, and the times can be a few seconds off. Each time links to that moment of the video. The transcript alone: https://innovate-us.org/the-good-the-bad-and-the-ugly.txt (plain text) and https://innovate-us.org/the-good-the-bad-and-the-ugly.json (every segment with its start and end second).

**Mihir Kshirsagar**

[0:00](https://youtu.be/bE3uF2P_kTc?t=0) So we're really excited to be doing this with Innovate US. Princeton Center for Information Technology Policy works to understand and improve the relationship between digital technology and society, and I can't think of sort of a better person to lead us into this discussion than Professor Korolova. She studies the social impacts of algorithms, machine learning, and AI, and has actually developed and deployed these technologies while preserving privacy, equity, reliability, and accountability. She's also on the United Nations Independent International Scientific Panel for AI, so we're really privileged to have her here. Nico, I'm going to stop the poll, right, or will somebody do that? Great. So this second topic is going to talk through identifying the good, the bad, and the ugly, and I'm going to turn it over to Professor Korolova in just a minute.

[1:02](https://youtu.be/bE3uF2P_kTc?t=62) I will say, you know, please ask lots of questions and try to give us specific areas or places where you've run into bottlenecks, because that's really the goal of this, is to understand where your issues are and how we can try to help address some of them. So with that, I'll turn it over to Professor Korolova.

**Aleksandra Korolova**

[1:22](https://youtu.be/bE3uF2P_kTc?t=82) Thanks, Mihir, so much, and thanks, Nico, for the introduction. I'm so excited to be here and really looking forward to an engaging conversation. As Mihir said, I'm a faculty member at CITP, and my research is on understanding societal impacts of AI, including through audits, and then finding tools to address those impacts that I identify. And I'm going to go in the reverse order. I'm going to start with the bad and the ugly, and then get to the good. And the use case that I really like to start with in these talks is this software developed by a German company now, I think already six or seven years ago, Ritoria, that used to claim that based on a two-minute video uploaded by an applicant, their AI is going to be able to identify multiple personality traits of the applicant that are relevant to the job.

[2:37](https://youtu.be/bE3uF2P_kTc?t=157) When you see such a claim, yes, we all want to be more efficient in screening applicants, but perhaps this sounds implausible, right? Like, what can you do with a two-minute video with personality traits? But even though it sounds implausible, it takes a little bit of time to demonstrate that this AI doesn't actually do what it takes. And fortunately, a German broadcasting agency did just that, using a very clever setup. They had an actress, a professional actress, film herself in saying the exact same thing, but wearing slightly different things. In one case, she wore glasses, and in another case, she wore a headscarf.

[3:41](https://youtu.be/bE3uF2P_kTc?t=221) And then she uploaded these videos to Ritoria, and what she observed were that the evaluations were very different, even though she was saying the exact same thing. So, for example, when she wore glasses, she was rated much more conscientious, but slightly less neurotic. And when she wore a headscarf, she was rated more extroverted and more agreeable. And this is just like a very clear example, right, that whatever the vendor here is claiming is probably not correct, right, because the results are not robust to even very, very simple perturbations in what the person is doing. And so many of these kinds of AIs that claim to do personality traits based on pictures and videos and so forth can be quite quickly dismissed.

[4:53](https://youtu.be/bE3uF2P_kTc?t=293) But the question is a little bit harder for AI that claims to predict social outcomes. And I know this example was already presented by Manuel in last week's session, but for those of you who weren't there, I just want to reiterate it again because it's such an important example in this discourse. So one of the faculty members also at CITP, Matt Salganik, led a 20-year-long study where they collected data from more than 4,000 families on various variables about their families, their children, about their social environment, and so on and so forth. And then based on this data that they collected over nine years, they challenged 400 researchers to come up with the best prediction of the material hardship that the family would experience when their youngest child is 15, as well as the child's GPA and the child's grit.

[6:07](https://youtu.be/bE3uF2P_kTc?t=367) And you could think of, look, there's a lot of data collection, there's a lot of people involved, there is a chance that they would be able to develop good AI to do this. But as it turned out, the results were not very promising. R-squared is a measure of how much of the outcome is explained by the data. And so the best results that these teams of researchers came up with were R-squared of 0.23, 0.19, and 0.06, when the best possible, when the perfect prediction would have been an R-squared of 1. So really, despite all this data collection, the predictions that the researchers were able to make were not that good. And another interesting aspect of it is that using all 13,000 variables that were available in the data set didn't lead to much better results than just using four variables.

[7:17](https://youtu.be/bE3uF2P_kTc?t=437) And that's a theme that we will come back to also a little bit later in the talk. And so here, again, we can speculate what may be causing this poor performance. Maybe there's not enough data, maybe there's some missing data, and so on and so forth. But probably the most plausible explanation here is that the dynamics of life trajectories are inherently unpredictable. And machine learning and AI works best for static situations and maybe a poor choice for dynamic, social, and life outcomes. Another example that has received a lot of scrutiny and debate is the use of AI in recidivism prediction.

[8:19](https://youtu.be/bE3uF2P_kTc?t=499) So a company called Northpointe, but there are many companies in this space, had a product called Compass, which used proprietary AI that relied on data pulled from criminal records and defendants' answers to 137 questions and claimed that this AI is able to predict the risk for each defendant to commit new crimes. And some of the example questions were,

**Mihir Kshirsagar**

[9:05](https://youtu.be/bE3uF2P_kTc?t=545) I think we lost audio for a second. Hold on.

**Nico Campbell**

[9:13](https://youtu.be/bE3uF2P_kTc?t=553) Yeah, I believe maybe Alexandra got cut off. Sorry, everyone. Please hold for a moment. I don't believe Alexandra's in the room anymore, but let me check. No. Blame it on AI. Alexandra will be right back.

**Mihir Kshirsagar**

[9:38](https://youtu.be/bE3uF2P_kTc?t=578) While they're at back, do folks have any... Oh, there we go. Okay.

**Nico Campbell**

[9:45](https://youtu.be/bE3uF2P_kTc?t=585) She's back.

**Aleksandra Korolova**

[9:47](https://youtu.be/bE3uF2P_kTc?t=587) Sorry about this.

**Nico Campbell**

[9:50](https://youtu.be/bE3uF2P_kTc?t=590) That's completely fine.

**Aleksandra Korolova**

[9:55](https://youtu.be/bE3uF2P_kTc?t=595) I'm not sure why Zoom kicked me out. Okay. And some of the example questions in this were things like, was there one of your parents ever sent to jail or prison? And how many of your acquaintances are taking drugs illegally? So the questions were available, but the AI they were using was proprietary. And again, here, one can ask, what do you think is the accuracy of this prediction? And what's interesting is that North Point themselves did not report this accuracy to begin with, but a team of journalists at ProPublica started studying this. And what they found is that the accuracy, so the correctness of prediction was about 0.6 to 0.7, with a perfect prediction being one.

[11:08](https://youtu.be/bE3uF2P_kTc?t=668) And again, it turned out, thanks to a study by other researchers, is that this exact same accuracy could be achieved without using any proprietary AI and by simply relying on a two variable linear regression, where one looked at the defendant's age and the number of prior convictions. So again, proprietary AI, so much data, but not really performing very well. And moreover, not performing better than just like a very, very, very simple model. And one can also go here into what are the mechanisms at play as to why this is not performing so well. And in my classes, I teach two lectures on explaining these, so there are a lot of different mechanisms. But the key thing here is that when one operationalizes a real world situation into a prediction problem, one has to make a lot of assumptions that don't really hold.

[12:20](https://youtu.be/bE3uF2P_kTc?t=740) So for example, one has to assume that the data that is given is perfect, but of course, it is not perfect. One has to assume that in this training data, you actually have perfect information about who committed crime, but actually, we can only measure arrests, not crime, and so on and so forth. There are a number of these examples that have been explored over the last 10 years. And I'm just going to quote the conclusion that was reached by Amnesty International on this. And this is their report from 2026. And their recommendation is to prohibit high-risk profiling in high-stakes contexts, such as law enforcement, migration, and social security, and then to put lots and lots of safeguarding measures for profiling in other domains, with safeguarding measures being things like due diligence, transparency, accountability, effective remedy and redress, and community participation.

[13:41](https://youtu.be/bE3uF2P_kTc?t=821) If you don't like the conclusion from Amnesty International, there's another approach, again, by my colleagues from CITP. So here's the academic take on this. The academic take on this is to identify a set of tasks that they call predictive optimization. So these are the tasks when machine learning is used to make predictions about some future outcome that pertains to individuals, and then those predictions are used to make decisions about those individuals. And examples here include things like determining creditworthiness, school dropout, pretrial risk, and so on and so forth. For these tasks that fall into this broad category of predictive optimization, the recommendation of the colleagues is that, really, there needs to be much more done to assess the legitimacy of predictive optimization.

[14:50](https://youtu.be/bE3uF2P_kTc?t=890) And they have a very nice rubric to ask the specific questions, and so on and so forth. And another recommendation could be… be that in addition to assessing legitimacy using this rubric, perhaps the alternative one can consider is one that looks at something simple rather than this proprietary complex AI with lots of variables. Maybe one can use something very simple because that retains some explainability, retains some contestability and is much easier to extend. That's the conclusion, perhaps not so satisfying, but it is what it is. Now, we are all, or many of you are perhaps here, to really talk about generative AI and the recent advances that have been made about which there is so much excitement. There is excitement for multiple reasons. One, because it feels general purpose, so whatever question you ask in whatever domain, there is an answer that you get, and you get it in a very approachable interface. Also, there are many claims now that soon it will work even better than humans if it doesn't already. There may be natural questions about whether the cautionary tales I told you apply to the previous generation of AI, but now with this new generation, maybe there are things to hope for. I'm going to answer it in a couple of ways. First,

[16:54](https://youtu.be/bE3uF2P_kTc?t=1014) some of the problems that were true before about life outcomes not being predictable, about the problem being overly simplified when it's made into a prediction task, they still hold. The jury is still out, we will see, but my guess is that for tasks that are predictive optimisation, the generative AI will be no better than previous. That's a guess. One can also analyse it from a different perspective. One can analyse it from the perspective of what do we know about the performance of these tools? Usually, when the developers release the new model and say, our model is best in class and performs so well, the way they are measuring the performance is on benchmarks. What are benchmarks? These are specific use cases for which the answers are known on which the models are run. The challenge with extrapolating from the performance on benchmarks to potential performance in your specific use cases that you may have is that very often, these benchmarks are just unrelated to individual company and government use cases, right?

[18:31](https://youtu.be/bE3uF2P_kTc?t=1111) They talk about how they solve high school mathematics questions, coding questions, and this is not necessarily the problem that you're trying to solve. For some of the tasks, they may also not exist, the true answer. It may be just a question of judgment, and so it may be also difficult to measure the performance against it. Finally, some of these benchmarks may include the data that the models have been trained on, so what they're measuring is how much this model has memorized and not necessarily how much it can actually do. I have a little bit of time, so let me illustrate this quickly, why you can't assume performance with some work that was done by my students, um, where they said, okay, we know that many companies are now using AI for resume screening, but, like, let's see how well does it actually work, and what they did is they constructed resumes that are identical but just differ in a couple of qualifications, and then they measured whether these couple of clarifications correctly impact the outcome that the model judged for these resumes, and the results here reflect the state-of-the-art models that were state-of-the-art, you know, a year ago when this work was done, but the results were not so encouraging, so even for such a simple task of comparing resumes that just differed in a couple of qualifications, the models were not 100% correct. They did make mistakes in the studies.

[20:35](https://youtu.be/bE3uF2P_kTc?t=1235) And kind of, like, broadly speaking, this question of whether the AI works and how well it works has been a problem with AI claims for many decades now, so this is a table from Manish Raghavan's work where he went through all the hiring vendors and tried to look how many of them claimed that they validated the performance of their AI, and there were very few public validations that the AI actually works. And there's another really nice paper that goes through other examples and demonstrates that, you know, very often there's just an assumption that the AI works without this validation, which is much needed.

[21:44](https://youtu.be/bE3uF2P_kTc?t=1304) So that's, so far, a very bleak picture, either the ugly or the bad. Now let me get to the good. So what did I used to do in these talks before, people? What I tried to do is I tried to teach folks how to evaluate vendors. I would say, okay, we know here's all these problems, now let me give you some examples, let me give you the tools, let me walk you through the reasoning of how to evaluate them so that you know whether this example works for you. And my top recommendation was always, okay, find an external expert and then support this expert in supporting you in doing this evaluation. And of course, as an academic, I recommended, well, you know, find some academics and here's a list of academics and, you know, get involved with them. And yes, it's a hard task, so you need to help facilitate this interaction between the academic that you found and the AI vendor that you are considering.

[22:57](https://youtu.be/bE3uF2P_kTc?t=1377) And, you know, often in these interactions, there are some difficulties that occur. For example, access that is given to an expert and here's some way to overcome these difficulties. And other difficulties like user privacy and here are some ways to overcome these difficulties. And then, oh, by the way, here's an example you can read of how such a collaborative audit worked and how it was successful and so on and so forth. So that was my one recommendation. My second recommendation was to teach folks how to assess the AI on their own. And I would start with saying, well, okay, go to the website of the AI vendor and the first sanity check that you should do is to see whether there is a clear and understandable statement of what AI does and not. And if you can't understand the statement, then that's the first flag of what's going on. And so, this is the successor to Northpointe developer of Compass. And now you can read and see whether you can understand the statement and kind of like go from there, right? The next thing you can do is, look, you have to ask for quantitative evidence of validation, right? And you have to ask for it in the language of AI, look for this and look for that and so on and so forth, right? And then you should also develop your own studies and run it on your own data and compare vendors' claims to yours.

[24:47](https://youtu.be/bE3uF2P_kTc?t=1487) And then if you're worried about bias and discrimination, these are the questions you should ask. And these are the actions you should take and so on and so forth. But what's the challenge with teaching this way, right? It just doesn't scale to every specific use case, right? What I recommended there may be a good recommendation for the non-recidivism prediction, but this is not necessarily the use case that you're considering in your entity, in your situation, right? For your problem that you are trying to solve. Right. And the great thing in my opinion now about generative AI is that there is some good here. And specifically, now you can use generative AI to augment your skills and expertise for vendor evaluation. So you already know kind of like what you need, right? And what questions you may want to ask. And then you can ask these questions to these tools. You can ask them to Claude, to ChatGPT, to whatever tool of your choosing. And it's going to give some thought-provoking answers, right? So this is just an example I put in what this company claims this and includes it in the organization. What should be the additional questions that I should ask? And it does come up with some thought-provoking questions. Not necessarily each one of them is correct, but they are thought-provoking and can augment the skills and expertise that you already have in your specific domain. And moreover, these AI tools are interactive and resourceful

[26:53](https://youtu.be/bE3uF2P_kTc?t=1613) assistance, right? You can ask them follow-up questions. You can ask clarifications. You can ask to look for competitors and make comparisons. You can ask for best practices. You can ask to present arguments against a particular vendor or against a particular use case, right? So there's a lot of ways that one can question what one wants to do for that specific use case, as opposed to this abstract, let's evaluate AI kind of use case, right? And so, for example, in here where I asked, okay, are there any arguments against using any of these vendors against recidivism for recidivism prediction? It does come up with some more reasonable answers that also argue against. So in my opinion, the first good is that generative AI cannot judge for you whether this is a good use case. Don't outsource the decision to it, but it can help augment your thinking and your reasoning process about it.

[28:07](https://youtu.be/bE3uF2P_kTc?t=1687) The second thing that I think is really good and a great opportunity is I think that the generative AI can empower your existing people. It is the case that now it's very good at writing code, building prototypes, and so on and so forth. So it's possible that the technical people that you already have on your teams now may be able to build custom solutions for your specific use case in-house using these tools, right? And the advantage of working with the technical person who is in-house, as opposed to acquiring something from an external vendor, right, is that this person can work in collaboration with you. They can iterate with you. You together can bring in all the relevant context. You can put things that are needed for oversight and control. You can evaluate where it does help, where it doesn't help.

[29:12](https://youtu.be/bE3uF2P_kTc?t=1752) You can incorporate community participation and feedback and so on and so forth, right? So it makes this process much more iterative and much more centered in your expertise and in your use case, as opposed to kind of like this general all-size-fits-all technology. So that's my second good. And finally, the third thing that I think now tilts things a little bit more in favor of the use cases that you may all be considering is that in the current stage of AI development, The data and the real use cases and the real domain expertise are very valuable. And because they're so valuable for training and developing AI, this can give you all a real negotiation power with vendors.

[30:20](https://youtu.be/bE3uF2P_kTc?t=1820) I think you can negotiate costs, you can negotiate data protection, there's questions such as many of these companies now have these so-called forward deployed engineers, so specialized people who will integrate with you to make a custom solution for your use case. You can negotiate that you own the mistake reporting and resolution, perhaps you can negotiate sharing responsibility for potential failures of this AI, and so on and so forth. So the fact that you have your specific use case, your know-how, your data is something very valuable that gives you the opportunity to get AI help on your terms. So in conclusion, my recommendation would be to look at it this way.

[31:25](https://youtu.be/bE3uF2P_kTc?t=1885) For those vendors whose tools claim to successfully do predictive optimization, I think those tools should receive extra scrutiny and using the expert if you can, using the checklist, using the AI tools, extra scrutiny to begin with, because it's not even clear that this successful predictive optimization is possible. Second thing, whenever an AI vendor claims that their thing works, it actually needs to be validated with actual data, with domain expertise, and with some sort of feedback loop to learn from mistakes and from feedback that you may be receiving. Finally, generative AI is a great tool not to outsource your thinking, but to augment and empower you and your team's expertise in your domain and in your specific use case.

[32:32](https://youtu.be/bE3uF2P_kTc?t=1952) That is, I think, a very promising way forward. With that, thank you very much, and I am very happy to take questions.

**Mihir Kshirsagar**

[32:42](https://youtu.be/bE3uF2P_kTc?t=1962) Amazing. Thank you. And please keep the questions coming. I guess one question maybe to start with is, I love the hopeful vision that you've laid out here. How do you think people in municipalities and state and local governments can – what do you think are the best ways they can start to get up to speed on these kinds of applications? Where should they be looking for how to do this well?

**Aleksandra Korolova**

[33:24](https://youtu.be/bE3uF2P_kTc?t=2004) That's a great question, and I think sometimes the best way is to just start, right? Just take a toy example, something that you're thinking about, something that you just want to test, like, okay, I did this today by hand, but I wonder if this AI can do this for me. Or, you know, I did this by hand, but I wonder if there's any critique that the AI can offer. And because the interfaces really are so approachable, it's just a matter of, like, okay, here's what I did. Here's the questions I'm thinking about. Critique my work, and then you'll get an answer. And if you don't get the answer that you like, you can iterate. You can say, well, here's more context about what I'm thinking about, and here's more context about what's important to me, and go from there.

[34:26](https://youtu.be/bE3uF2P_kTc?t=2066) And again, it's not going to be necessarily the perfect solution, but it's going to be kind of like a partner in your thinking about this problem, and it may spot directions or sources or problems that you haven't thought about.

**Mihir Kshirsagar**

[34:44](https://youtu.be/bE3uF2P_kTc?t=2084) Yeah, no, this is super important and very valuable, right, to think about, because I think sometimes, and you'll see this in the question that somebody asked here, you know, how do you approach someone who accepts generative AI outputs as truth and in a way outsources their thinking? I think there's a lot that people hear about how you should not trust any of the outputs. You shouldn't use it, but you're really saying, you know, you can be much smarter and be more, make it to force you to do critical thinking. But how do you avoid this trap that the person is talking about, that in some ways you outsource your thinking to the AI?

**Aleksandra Korolova**

[35:29](https://youtu.be/bE3uF2P_kTc?t=2129) I think the way to avoid it is to make a conscious decision that, look, I am the domain expert. I know what my constituents need. I know what the priorities are for my case. And no kind of like general purpose technology can know what's important for my state or for my municipality or for my constituents. I know this. I'm going to do the work, and this is going to be the checker, the challenger, you know, the thing that will make my work even better or, you know, in some cases will speed up my work, but it will not replace my work.

**Mihir Kshirsagar**

[36:15](https://youtu.be/bE3uF2P_kTc?t=2175) Yeah, that's great. I mean, one follow-up question, which comes to this, that, you know, how do you, do you have sort of suggestions for how people might catch themselves if they do happen to fall into a loop where they're trusting the AI output without being critical? Are there things that they should be thinking about or doing, you know, as they go about their practice, so that they're using it well to do the things that you're talking about?

**Aleksandra Korolova**

[36:48](https://youtu.be/bE3uF2P_kTc?t=2208) I think there, this is a wide open question, right? Like we're also actively thinking about it also in our teaching, right? And how do we teach students? I think, I don't know that there is a great answer to that, but perhaps one approach is through a workflow, right? It is just to set the workflow that I'm going to do the important parts myself first, and only then will I turn to this AI tool.

**Mihir Kshirsagar**

[37:19](https://youtu.be/bE3uF2P_kTc?t=2239) Yeah. Yeah. And as you said, you know, to set up loops, right? So that you're aware of when you might get into trouble. So, please keep the questions coming. There's a question here from Antoine that says, I guess, talking about David Autor and about expertise is a mediating variable, which is to say skill is a factor. Is there evidence of self-efficacy measurements and prompting, or is there evidence of bias and skewedness? So, I guess this is a question around, are people who, when they prompt these models, is there something, is there any evidence of, have you seen any reports of sometimes your bias coming into how you may prompt a model?

[38:24](https://youtu.be/bE3uF2P_kTc?t=2304) Should people be aware of that, I guess?

**Aleksandra Korolova**

[38:28](https://youtu.be/bE3uF2P_kTc?t=2308) I think there are, I can't name off the top of my head, sorry, but I think there are examples where depending how you ask, you get a different answer. And so, if you ask and you say, well, support my opinion, then the chances that you will get a supportive opinion are higher than if you get a dissenting opinion. And this is a phenomenon known as sycophancy. And so, of course, it's important to be able to look at it from multiple perspectives. And so, this is, again, a great tool to say, well, I decided to go with this vendor, right, and this is my reasoning, give me reasons not to go with this vendor.

**Mihir Kshirsagar**

[39:26](https://youtu.be/bE3uF2P_kTc?t=2366) Great. All right. Here's another very practical question. It says, if I have a ton of agency data, how do I figure out if it actually might be useful for prediction? I'm not a technologist, but I would like to investigate this. Oop.

**Aleksandra Korolova**

[39:51](https://youtu.be/bE3uF2P_kTc?t=2391) You may, so first of all, it may be, the simplest path may be to find a technologist who would be willing to investigate this with you. And this is back to my good news part two, I think now it may be easier to do this because now what it used to take a technologist to do a year or two years to program this pilot, they may be able to do with AI tools much faster. And so, finding such a willing technologist may be simply much faster. But it's also possible that you may be able to do this yourself with these tools. You can very clearly describe the task you have, the hypothesis you may want to test, upload the data that you have, and put the AI to task. And again, this may, you can't trust the solution 100%, but it may point you in the right direction of, well, maybe there is some signal here, maybe it is useful, or no, then most likely there isn't signal here and it's not useful.

[41:08](https://youtu.be/bE3uF2P_kTc?t=2468) Of course, you have to be very cognizant of privacy, because if you just upload data to any AI tool, the privacy guarantees are quite limited. So, that's something to look at specifically.

**Mihir Kshirsagar**

[41:28](https://youtu.be/bE3uF2P_kTc?t=2488) Yeah. There was some questions, it's not actually come through as a Q&A question, but I saw it in the chat. There were some people who were worried about using data and if I were to characterize it, you were to capture some latent racial bias features in the data, because if you're making predictions, you may be capturing long-running racial biases. And that's one of the dangers of predictive systems that you've highlighted. How should a government agency that's thinking about using a predictive AI tool, how should they be thinking about these latent biases in their data and how to stop

**Aleksandra Korolova**

[42:19](https://youtu.be/bE3uF2P_kTc?t=2539) running predictions that depend on such biases? So, my answer, and perhaps this is not a popular answer, is to really look at whether your use case falls into predictive optimization. Go to that website, see the more detailed description of what predictive optimization is. And then if it does, focus on very simple, very explainable AI tools, where it's one, two, three variables, where you can explain in words to yourself what this AI is doing. Because that way, at least you will make the biases clear and obvious, as opposed to hiding them under, okay, I have this very complex model with many, many variables. I don't know what's going on and therefore it's hard to say whether you're propagating biases.

**Mihir Kshirsagar**

[43:23](https://youtu.be/bE3uF2P_kTc?t=2603) Great. All right. Stephen has a question. And please, please keep the questions coming. What is the simplest way for the public to question the legitimacy of a government predictive model that says there'll be no significant impact when it differs from a community's ground truth? Examples are about data centers, highway expansions, etc. So, I guess, you know, this is not, I guess, Stephen, I'm guessing, you're not in a government office, but you're thinking about it from the outside. How would, and it's sort of relevant to people who are in government too, right? How will your critics look at your decisions to use a predictive model? And how can you test, I guess, the assumptions of these predictive models from the outside when you may not have access to how it's making decisions?

**Aleksandra Korolova**

[44:23](https://youtu.be/bE3uF2P_kTc?t=2663) That's a great question. I think what should become the best practice is really for anyone deploying AI to really provide a very concrete place where people can voice their complaints and for the deployers, actually, to review those complaints and understand whether there's basis to them. But if such a thing is not provided, then I think for the individual, the best way is to use a predictive model. So, either the press or, again, find an academic who studies this topic, and see whether the academic can give, using your concrete example, can give it a bit more scrutiny and then go to the press together with you.

**Mihir Kshirsagar**

[45:44](https://youtu.be/bE3uF2P_kTc?t=2744) Great. All right. We have another question coming in, which is a big, broad question. So, do you believe it would be prudent for the United States, along with other world governments, to regulate AI and ensure safety and AI alignment are independently verified? This touches on your work for the UN.

**Aleksandra Korolova**

[46:17](https://youtu.be/bE3uF2P_kTc?t=2777) Can you repeat the question, please?

**Mihir Kshirsagar**

[46:18](https://youtu.be/bE3uF2P_kTc?t=2778) Yes, yes. Do you believe it would be prudent for the United States, along with other world governments, to regulate AI and ensure safety and AI alignment are independently verified?

**Aleksandra Korolova**

[46:40](https://youtu.be/bE3uF2P_kTc?t=2800) I think so. I think the government should represent the will of the people, and so if there is enough concern among people that this is a problem, then this can be addressed. My worry is that it's not clear that the governments necessarily now have a strategy for truly independent verification. I think some of the strategies are very heavily reliant on what is being proposed by AI companies themselves, and based on my experience in other domains, such as social media, I feel like the self-policing and the self-auditing and so forth, that doesn't work as well as one would hope. So, I'm hoping that if such measures are put in place, then they're not purely dictated by industry, but they're really driven by the best science we have, the best policy we have, the best ideas that people collectively have, rather than only the companies.

**Mihir Kshirsagar**

[48:26](https://youtu.be/bE3uF2P_kTc?t=2906) Yeah. Yeah, I mean, you're right. I mean, you've been talking about this, right, of independent evaluation is important at different stages of the pipeline, and I think, you know, whether it's predictive or generative or wherever, there has to be a way to do this, and there are ways that, you know, if you're in the government, those of you listening, you have to find ways to fund it, both internally and then get people involved. I guess maybe, you know, seeing as they're, please, if there are more questions, please keep them coming. You know, one question for you is, how do you think people should be training and hiring for analysts to work in government, you know, in this? I know that you are not only appointed at Princeton in the computer science school, you're also in the policy school. So, you know, any thoughts or reflections on how, what policymakers need to have in their toolkit to be better at using AI models?

**Aleksandra Korolova**

[49:33](https://youtu.be/bE3uF2P_kTc?t=2973) I think the first one is really confidence in themselves, right? Confidence in that their expertise and their skills and their domain knowledge is valuable, no matter what others maybe say, and then also confidence to try these tools. There's really a lot of there's not much to them. It's a matter of, you know, spending one afternoon or, like, watching a couple of videos. There's not much to it, but it's a dual part, right? Like, on one hand, yes, I am encouraging to try these tools. They are powerful for certain tasks, especially for tasks where you don't need, you know, like, 100% precision, you know, to be able to do it. You know, like, 100% precision and reliability, and it's not a consequential decision-making. But at the same time, yes, they're powerful, but they don't yet, perhaps, but they don't have this domain knowledge and expertise and that, and the human side, right, of what policymakers and government employees have developed through their careers.

**Mihir Kshirsagar**

[50:52](https://youtu.be/bE3uF2P_kTc?t=3052) Yeah. One question which Nico asked, which is, on the auditing side of it, you may need to get demographic data to audit tool for bias, but then collecting and linking that data may create some sort of privacy risk. How should an agency think about navigating that?

**Aleksandra Korolova**

[51:14](https://youtu.be/bE3uF2P_kTc?t=3074) So, this is a, this is a common problem, and actually, this is a pretty soft problem from the perspective of academia. The tools that enable you to evaluate while preserving privacy exist, and it's, it's just a matter of getting connected to the right person who, who can show you how to apply them. It's, it's mostly a soft problem.

**Mihir Kshirsagar**

[51:44](https://youtu.be/bE3uF2P_kTc?t=3104) Yeah. I think it's, you know, just to, you are one of the experts in the use of differential privacy and things like that to help do these kinds of analyses. But, you know, when you say it's a soft problem, it's solved to the extent that you can get all the desirable features that you'd want from an audit, but, and you're also not losing any of privacy. So, yes, yes, yes,

**Aleksandra Korolova**

[52:14](https://youtu.be/bE3uF2P_kTc?t=3134) that's right. That's right. The right techniques that enable you to kind of like get the best of both worlds to do the audit while not endangering anyone's privacy. And if a vendor tells you that that's not possible, that's actually a red flag for the, for the vendor claims. That's, that's how you know that maybe that AI doesn't actually quite work. Right. Yeah. And maybe, maybe if in

**Mihir Kshirsagar**

[52:40](https://youtu.be/bE3uF2P_kTc?t=3160) the last question on this topic is, you know, if you can just quickly on the top of your head, say some of the red flags that people should have in mind. So, one of them is clearly don't, you know, if they don't actually know how to audit their model, then perhaps they don't know what they're talking about. What are some other red flags that people should, should keep in mind?

**Aleksandra Korolova**

[53:04](https://youtu.be/bE3uF2P_kTc?t=3184) So, the first red flag is lack of published validation, right? If, if your thing actually works, then you should be able to put this validation, what, what test you ran, with what data, with what accuracy, what, what did you get publicly online on a website? If, if, if it's not there, then it's the first red flag. Second red flag is if the vendor is not willing to engage with you in kind of like this iterative process of, okay, let's, let's look at this with my data. Let's, let's try my use case. Show me on my specific case with the, the thing that I specifically care about, that it actually works. So, if they're not willing to engage, then that's another red flag. Then any sort of like, oh yeah, we can't engage because privacy, security, you know, code secrets is, is another red flag.

**Mihir Kshirsagar**

[54:10](https://youtu.be/bE3uF2P_kTc?t=3250) Well, that's, yeah, that's a great list of things to look for. And, and, you know, I, I think in this era, I think as we turn to generative AI for a lot of solutions and problems, you know, many, many instances, people are using predictive AI, the old fashioned predictive AI, and sort of your suggestion for using generative AI to watch how best to use predictive AI is really, really helpful. So, so thank you for sharing that. And I think that's, that's, we're right at time. So, I'll turn it over to Nico.

**Nico Campbell**

[54:57](https://youtu.be/bE3uF2P_kTc?t=3297) Thank you very much, everyone. One second. I just want to make sure that we're all good. Okay. There we go. Wow. Wonderful conversation. Thank you so much, Alexandra. Thank you for sharing your insights with us. And Mihir, as always, thank you for a great conversation. And as always, of course, thank you to our audience. Thank you for joining and contributing questions. Before you go, a few reminders, so please hold on for a second. There was one question in the chat about circulating materials and readings listed. We will absolutely ensure that that is done, that you get the relevant links or slides and that they're circulated to you. As another reminder, please, as you head out, take a moment to complete our post-workshop survey. It's incredibly important and it helps us improve these sessions and plan future workshops. And as always, today's recording will be posted on our website. And then as a final reminder, also our final session in this series on governing prediction will be at this time next Tuesday, which is November 3rd. Our speaker is none other than our wonderful moderator for the last two sessions, Mihir himself, and we hope to see you all there.

[56:07](https://youtu.be/bE3uF2P_kTc?t=3367) With that, thank you everyone and have a great day. Thank you very much.

* * *

Original page: https://innovate-us.org/the-good-the-bad-and-the-ugly · Licence: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/), as stated on innovate-us.org
