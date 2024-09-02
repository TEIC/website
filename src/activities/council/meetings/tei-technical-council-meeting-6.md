---
layout: page.njk
title: "TEI Technical Council Meeting,"
---
# TEI Technical Council Meeting,



Present: Brett Barney (BB), Syd Bauman (SB), Lou Burnard (LB), Hugh Cayless (HC),
 James Cummings (JC), Kevin Hawkins (KH), Martin Holmes (MH; minutes), Elli Mylonas
 (EM), Paul Schaffner (PS), Sebastian Rahtz (SR), Rebecca Welzenbach (RW)



 Actions Arising
 
 * JC: Notify Elena Pierazzo that we are considering putting in a hackathon proposal for
 DH 2014, to run alongside workshops (although it will not be a workshop, strictly
 speaking). The deadline for workshop proposals is February 21\. Keep the discussion
 on this alive on the Council list until we arrive at a solid proposal.
* MH: Write first draft of new Guidelines sections on text directionality and transformation,
 ready for presentation at the FTF meeting.
* Entire Council: Look at the list of div.liminal problems posted on the list by SR, and be ready to
 discuss them at the FTF.
* JC: Finish the Roma specification ready for presentation at the FTF. Discuss privately
 with LB the possibility of funding from a French source.
* HC and SB: Draft proposed changes to the Guidelines regarding XPointer.
* SB and EM: Prepare prototype or proof\-of\-concept for Oxygen ODD plugin for presentation at the
 FTF.
* JC: Add a Council Member job description and a Council Chair job description to the Council
 wiki page, to help Council decide on the procedure for electing a new Chair.




 Brief Reports
 
 
 
 Report from TEI members meeting (SR)
 
 Report from SR on the members’ meeting has already been circulated to the Council
 list.


Re the proposed hackathon: do we think it’s a bad or good idea, and if we think it’s
 a good idea, do we have any suggestions for how it should be organized? 


JC: I did a 2\-Day Meeting attached to DH2012; organisers were generally happy to provide
 a room and help.


LB went to an unsuccessful hackathon in Paris.


HC: They have to be well organized to be effective.


EM: To be effective you have to make sure you have technical people; if you include
 non\-techies, it turns into a workshop.


HC agrees: you can’t have a hackathon without hackers.


JC: If we do this, should we view it as partly a marketing thing, which maybe means
 we have to prepare the ground, and pre\-do some of the target tasks?


HC: That becomes a workshop again.


EM: What if we make teams of one tech person and one humanist, so it would be partly
 outreach.


SR: The reason for bringing it up today is that, if we want to propose this for DH
 2014, we’ll have to do it before the face\-to\-face meeting (FTF). Do we want to do
 that, or organize a free\-standing event?


HC: You can do this as a distributed event, so you just declare a specific day as
 the hack day. You publicize it, get people to sign up and form teams, and submit project
 proposals. It’s probably best if it’s some kind of competition with named judges.


EM: You win a copy of the print Guidelines.


JC: This sort of thing works well if there’s a prize at the end that’s worth having,
 and/or the thing they’re hacking on is clearly specified. If it’s too general, we
 lose focus and end up comparing apples to giraffes.


HC: I’ve also seen it organized as an unconference ahead of time. That works better
 if you’re all in one place.


EM: It should be announced and put in the packet at DH 2014\.


JC: It could be advertised alongside DH 2014 and held before or after it.


SB: There’s an advantage in holding it at DH 2014 because there will be a large number
 of candidate participants in one place at the same time.


LB: Are we trying to propose two things or one thing here?


HC: If you think DH is a good venue for it, then we should argue for doing it at DH.
 It comes back to who we are trying to attract and what we’re trying to do.


LB: We should start with that issue, and then decide on what the best venue might
 be. It will be hard to sort that out in time for the DH deadline.


HC: What’s the deadline for the call for conference proposals?


SR: I suggest we just continue this by email; it sounds like most people are not against
 it.


JC: The workshop proposal deadline is 21st Feb, so we can leave it to the FTF meeting
 to decide.


LB: We should respond to Elena to say that we’re considering putting in a proposal.




 Update on Text Directionality Working Group progress (MH)
 
 Work has been blocked for about 3 months while waiting on response from W3C folks
 on a question about bottom\-to\-top directionality, which is apparently not supported
 by CSS Writing Modes. We now have some very helpful responses, particularly from Fantasai,
 who is heavily involved in CSS Writing Modes and also in the Unicode text directionality
 work; this confirms that the known cases of bottom\-to\-top writing (such as Ogham)
 are actually left\-to\-right languages written btt in special circumstances, and they
 can be handled using `"writing-mode: vertical-lr; text-orientation: sideways-left;"`. MH has been working on getting some samples showing various writing directions and
 permission to include them in the Guidelines, and has begun drafting two new sections
 for the Languages and Character Sets front matter section of the Guidelines dealing
 with text directionality and transformation. A first draft of the new materials will
 be presented at the FTF.
 




 Report on div.liminal work (LB)
 
 
 LB has presented suggestions to the Council list, and is now waiting on feedback from
 the Council on how to proceed.


JC: If we can set some clear examples before the community, we’re probably going to
 get several sets of examples in response; what do we want to get back from this?


PS: The original suggestion was that if you put out examples without recommendations
 or alternatives, then you will get more useful responses.


LB: exactly; the intention was not to lead the witness.


SR: I think we should do more of this in general, but my concern was with this particular
 example, and in this case we’ll probably just get polarization between two views.


LB: As Paul says, we should leave the options completely open and not prompt people.


SR: How long would you leave it open?


LB: If we started now, I think I’d leave it open till Christmas. It would depend on
 the rate of response. I skimmed through Paul’s 100 files, and picked three that I
 thought were interesting and did those, but I may not be typical. The three I looked
 at were very easy. On the other hand, looking at the very problematic examples which
 have feature requests associated with them, they were very interesting because they
 help to illuminate the feature requests. A consultation exercise is a preliminary
 exercise which may lead towards cheat sheets and best practice documents. What’s different
 here is that we’re starting off with a sort of pretended ignorance, suggesting that
 we don’t know how to handle these things, so please tell us your view. Because we’ve
 had such a close relationship with TCP, we perhaps haven’t given enough attention
 to other people who work on similar material.


JC: What do you think is the way forward?


LB: We should completely separate the EEBO FRs coming from SR, and deal with those
 at the FTF; then we could launch the consultative exercise.


SR: This is quite attractive, because the consultative exercise is not about changing
 the schema but about establishing best practice.


LB: I’d rather not open that issue on this call. If we can all take a look at them
 systematically before the FTF, we’ll make more progress.


SB: For the consultative exercise, we are proposing to limit responses to things which
 validate against tei\_all, right?


LB: Yes. This is intended to result in best practice guidelines for using the actual
 TEI.


SB/SR: Surely you have to allow people to use TEI elements in ways that are not currently
 allowed?


LB: We’ve already relaxed content models a great deal in this area, so I think if
 we allow people to step outside TEI, they should have to provide solid justification
 for it. For the FTF we should address the list of problems SR posted on the mailing
 list. There are four main areas.




 Report on Physical Bibliography group (SB)
 
 
 SB has spoken with one of the members of the previous group which disbanded in 2007
 (Richard Noble), and they are in the process of trying to restart the group. Richard
 will be teaching a course on advanced physical bibliography at the Rare Book School
 in summer 2014, and that provides us with a good deadline for this work. Questions
 for Council: Are we thinking about a relatively narrow band of things that we’d like
 to describe, or are we looking at combining this work with manuscript description?


SR: There is another group working on the possibility of combining the manuscript
 description work with text\-bearing objects.


SB: One of the central issues is collation; this has to be done whichever path we
 take, and RN is anxious to do this.


LB: Could we get RN to write down some of the specific issues?


EM: I’ve been involved with the Consortium for Electronic Literature (CELL) group,
 which is trying to catalogue electronic art and literature; I’d like to know if this
 would could feed into that.


KH: Perhaps we just want to take the manuscript description chapter and expand it
 so that it could be used to handle electronic literature and text\-bearing objects.
 We could get a group of people thinking about what we need before we start figuring
 out what the elements and attributes we need. I do like the idea of waiting for the
 FTF to discuss the ontology group’s findings.


LB: They ought to tell us what they want, and we should look at that and decide whether
 we can handle those needs by extending what already exists or creating new features.


KH: But in the past, responses to these needs have just been along the lines of “you
 can just use element X from the manuscript description chapter”. In the past, I’ve
 encouraged people to look at that chapter and see if it can fulfil their needs.


LB: Is the work of the computer\-mediated communication group relevant to EM’s issues
 with electronic documents? What I’ve seen from that group suggests that it’s helpful
 and useful, but it’s not the solution.


LB: They have a good [article in jTEI](http://jtei.revues.org/476).


EM: That community has some European librarians who are closely involved.
 




 Report on TEI for Libraries (KH)
 
 
 KH: In early April I sent an email to TEI\-L requesting that the community create SF
 tickets for parts of the Best Practices for Libraries that should be incorporated
 into the Guidelines as a whole. This was preferable to some wholesale incorporation
 approach. I created a wiki page; no\-one else has added to the wiki page. It’s possible
 there are tickets, but maybe not. Michelle Dalmau hopes to find a student who could
 work on this, funded by a grant from TEI, but until we have found the right person,
 we won’t move forward with this. I’ve also been thinking about Martin Mueller’s idea
 that we should drop level 1 and 2; level 1 is already covered by HathiTrust, and they
 may also be taking up level 2 in the future, so the need for those may evaporate.


JC: What do you think the barrier is to people submitting feature requests?


KH: People don’t get anything out of submitting a FR. In general people want to make
 their projects TEI\-conformant; to submit a FR they would need to be familiar both
 with the Guidelines and with the Best Practices, and feel it was a good thing to do
 to make a FR. What I have in mind is tickets not about the BP’s schema changes in
 the ODD, but rather tickets about the prose wording in the Best Practices.


LB: So this is really usage notes.


KH: Yes. Both I and MM felt there were usage notes in the Best Practices which are
 of general value to the community.




 Report on new Roma specification (JC)
 
 
 JC: I’ve let this slide, unfortunately. I will finish typing up the specification
 I started and share it with Council before the FTF. The idea is to have a specification
 which we can present to the community, saying that there is money available for implementation
 if anyone is interested in doing it.


LB: This is a replacement for Byzantium?


JC: Yes.


LB: We should have a private conversation about this, because a French organisation
 have said they may be able to provide some funding for this.


JC: Yes, you (LB) and I were the ones originally tasked with this.




 Report on specification and estimated cost for XPointer resolver (HC and SB)
 
 
 HC: I posted my notes to the list. Things have not really changed in the month\-and\-a\-half
 since then. I’m essentially waiting for feedback on this.


JC: I think you should run with it; nobody’s going to stop you, I think it is beneficial.


HC: So I would go ahead with actually drafting the change to the Guidelines.


LB: That would certainly concentrate my mind, if no\-one else’s.


SR: Weren’t we supposed to consult with Piotr about this?


HC: Yes, and I posted to their list and got no response.


KH: I don’t think it’s essential that we get PB’s input.


SB: It’s not essential, but I still think it’s a good idea. I’m willing to poke him
 on this.




 Report on specification and estimated cost for oXygen front end for ODD (SB and EM)
 
 
 (Writing an Oxygen plugin to make ODD writing easier.)


SB: We have nothing to report right now, but we will have something to show at the
 FTF.





 Other issues
 
 
 
 State of play on translation of Guidelines (LB?)
 
 
 LB: This is an issue I’d like to discuss at the FTF. I have nothing new to say.


JC: What happened to the translations that Florence was going to provide?


LB: She set all her students on the job, and got the results from them, and then decided
 that they weren’t acceptable, so she didn’t want to move forward with it. I’ll see
 her at the end of this month and talk to her again. It turns out this is an extremely
 difficult job unless you’re a professional translator. For example, there’s an endearing
 French person who has translated eight chapters of the Guidelines into French, but
 the results would need substantial work before they could be usable. The text is full
 of anglicisms, and also has some misunderstandings. The first translation project
 we did (element descriptions and comments only) was well\-defined and practical. Maybe
 we need something as clearly specified as that.


SB: If you’re looking at translating the whole Guidelines, you need to look at finding
 a grant which is very substantial.


JC: What’s the current state of the translation? I notice there are some recently\-added
 things which are not translated.


SR: MH should have identified all the untranslated elements and attributes. There’s
 a ticket for this. MH acknowledges not having completed this, and will go and find
 the ticket and move forward.


\[MH had in fact identified a list of priority elements lacking translations, but had
 no clear idea of where to proceed from there, so the ticket was stalled.]




 Timetabling the next release (JC)
 
 
 JC: I had originally targeted the end of November but maybe we should push that back
 further.


MH: That would give us an actual release date of the middle of December, if we follow
 our previous release pattern.


SB: The end of November is a busy time for Americans, so we should move this into
 December.


LB: How many releases have we done in 2013?


JC: We’ve had three: 17 Jan, 5 July, and 26 July. Two of those were major.


LB: If we aim to get a new release in December, but don’t achieve it till January,
 that wouldn’t be a disaster; we aim for two releases a year.


JC: At least two releases; we’ve been trying to have more because we’ve made it easier.
 


SR: At the member’s meeting, Elena felt that we should do fewer releases because we
 were too focused on releases.


SB: There was not a lot of support for that position.


JC: Though people do like the idea of stable versions on which they can base their
 project.


SB: But I don’t think that’s what Elena’s position was. She thought Council should
 pay attention to other things.


MH: Without regular releases, we don’t stay focused.


JC: We’ve been trying to make the release process easier so that we get changes out
 to the public more promptly. Any time we’ve polled the public for their priorities
 the maintenance and development of the Guidelines has been the most important, so
 we tend to focus on that. We are happy to consider other issues when raised by the
 public. I’ll notify TEI\-L of the face\-to\-face in case SIGs or others wish to raise
 specific issues. We’ll timetable the release for December, and I’ll update the website
 to reflect that.




 Face\-to\-face meeting details (JC)
 
 
 JC: Accommodation and meals are all booked; I’ll circulate more detailed information
 in a week or so, but are there any questions now? \[No questions.] There’s already
 a web page for the agenda, and eventually we’ll break it up into alternating discussions
 and ticket work shortly before the meeting.




 Planning for election of Council Chair (JC)
 
 
 JC: The first Council meeting in the new year will elect the new Chair. We have to
 decide how we’re going to do that election.


SB: Am I correct in assuming you’ll continue to serve as Chair until the new Chair
 is elected?


JC: Correct, and I may stand for election.


SR: We should schedule a January telco to discuss this.


MH: Does LB have a vote?


LB: No, and I’ll be in Mauritius for most of January anyway.


JC: The new Council, after electing its new Chair, will have to consider having a
 Board representative. If we do approve that, we would ask the Board to provide us
 with someone; i.e. Council should not actually choose the person.


SR: We could also have to consider the proposal on co\-opting Gabriel.


JC: I’ve already stated my position publicly that co\-opting someone because of the
 election mishap simply compounds the problem. We can discuss at the FTF if people
 desire. However, we should definitely sort out how we’re going to run the election
 before the new year and I want both departing and incoming Council members to have
 a voice in that.


EM: One thing that would be really helpful for all of us would be for the Chair to
 create a wiki page itemizing their duties.


JC: There is a Council FAQ page on the wiki, but ….


EM: Having this on the Council wiki would be a really good idea. JC is tasked with
 adding a Council Member job description and a Council Chair job description to the
 Council wiki page.




 Any other business
 
 
 Other items on this meeting’s agenda actually belong on the FTF agenda. SB is now
 moving those items to the FTF agenda.


JC Thanks TEI Technical Council Members for attending and especially MH leading the
 minute taking.





