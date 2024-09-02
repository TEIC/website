---
layout: page.njk
title: "TEI Technical Council Meeting,"
---
# TEI Technical Council Meeting,



Present: Piotr Banski (PB), Brett Barney (BB), Gabriel Bodard (GB), Lou Burnard (LB),
 Hugh Cayless (HC), James Cummings (JC), Kevin Hawkins (KH), Martin Holmes (MH; minutes),
 Elli Mylonas (EM), Paul Schaffner (PS), Sebastian Rahtz (SR), Rebecca Welzenbach (RW)


Apologies: Paul Schaffner (PS)



 Actions Arising
 
 * JC \& HC: Coordinate to select an appropriate day for the next release.
* KH: Send outstanding questions re TEI P4 deprecation to the Council list for comment.
* GB: Create a list of potential projects for code\-bounties.
* All: Continue the discussion of moving some parts of the codebase into GitHub.
* MH: Raise on TEI\-L the issue of collapsing the front page and the TOC of the Guidelines
 into a single page.
* EM: Create a Doodle poll for dates for Council Face\-to\-Face meeting in April.




 Farewell to PB, and Welcome to New Members (JC)
 
 PB is leaving Council at the end of the year. JC expressed thanks for all his hard
 work, and hoped he would continue it as a non\-member. PB promised to continue his
 work, especially as a member of LING\-SIG, and will pass on any outstanding tasks through
 the Council mailing list.


PB raised one problem arising out of the recent release and rapid "re\-release": for
 the first release, PB had backed\-out a change relating to @dcr: attributes, and then
 put the change back in right after the release, so we could see and discuss it. However,
 due to the need to re\-release, the change was unknowingly included. This is now a
 rotten egg for Council to handle, because it’s included, but isn’t mentioned in the
 description of the release. So the Guidelines now contain something that shouldn’t
 be there officially. MH has encountered the topic in the LMF discussion list, and
 thinks it might be a good idea, but PB disagrees. PB: it should at least be discussed,
 and it was released without that necessary discussion. GB: Isn’t this related to the
 discussion of the next release? How easy is it to do? PB: It’s just a single\-line
 change. GB: Why don’t we just comment out that line and pretend it never happened.
 JC: How many people would notice or care about this? MH: The RELISH community already
 has this change as a customization; whether they know the release included it by accident
 is unknown.


JC welcomed two new members present, HC and EM. HC: My main focus is on the standoff
 markup group and the rewrite of the TEI pointer schemes. EM: I’m a DH librarian at
 Providence, Rhode Island, and daily life consists of working on DH projects, many
 of which have TEI components. I've worked with GB, HC and others on EpiDoc. I have
 no specific aims right now, but I look forward to contributing in any way that’s helpful,
 and learning as much as possible about how the TEI works now.




 Brief Reports
 
 
 
 Chair's report from TEI members meeting and Board meeting (JC)
 
 Focusing on the Board meeting, some of whose discussions affect how Council works.
 There is already a joint Board/Council mailing list, which we’ve already made good
 use of. The Board discussed many things over 2 days, including the journal. It was
 proposed that an issue of the journal be dedicated to another language (e.g. an issue
 in French), but the Board would prefer that the journal simply take on articles in
 other languages, with abstracts in English. There were also financial issues: John
 Unsworth as treasurer has moved to a new system called Apricot (note from KH: actually
 “Wild Apricot”), which you can see in the members area of the website, and this helps
 collect money more easily. Also discussed: taking some existing money and putting
 it into an endowment to support the work of Council, but there isn’t enough money
 yet to do that. The Board want to support the prime activity of the TEI, which is
 the Council work.


There were discussions about streamlining Board and Council to save money, and how
 that might be done. We (Council) had expressed a desire to keep as many people as
 possible on Council. Board will be reduced to 5 members, and Council to 10 elected
 members. This reduces the formal number from 12 to 10, which is what we currently
 actually have. Each body will select its own chair from among the elected members;
 for the next year, JC will continue as appointed chair, but this will change at the
 next round of elections.


Council also agreed to abolish the role of non\-voting partner board members \-\- these
 are people who are on Board but don’t vote, representing partners. Decisions were
 also made about communication, and different ways to make the Board more representative
 of the community, travel costs, etc. Funding for Board travel will be reduced if necessary.
 Council members are encouraged to seek travel funding from their institutions where
 possible.


Board also decided to get rid of some of the previous levels of membership. In the
 new system, User and above levels have a vote. Higher\-level institutions are claiming
 membership for a larger number of people. The membership site has more information.
 Questions?


BB: Will there still be a Board representative on Council?


JC: Yes, but reduced to one, not the Chair and a representative, IIRC; LB may confirm
 but he appears to have lost connection.


KH: All these decisions require a vote of the membership, don’t they?


JC: Yes, there will be a vote. The changes should be in Board minutes, coming soon.




 Next P5 release \- when, what and who (JC)
 
 JC: There were some unfortunate problems with the last release, as PB has noted already.
 \[LB comes back in.] The question is when the next release should be. How do people
 feel about a January release?


SR: If someone is in the middle of something, they should say so.


LB: It may also be the case that we haven’t made enough changes to make it worthwhile.


HC: There are bugfixes in there, though.


KH: I’m catching up on things, and there will be a lot of differences.


MH: We don’t want to do the release right after the SourceForge changes.


SR/JC: We don’t want to do the SF transition yet; let’s wait and see what happens
 to EpiDoc. :\-)


GB: The datcat on fDecl is a problem; we should reverse this asap.


JC: So: who wishes to be responsible for that release? It could be a trial\-by\-fire
 for a new member. It requires that someone spend an entire day on it, following the
 steps in the document we’ve been creating. It usually requires a cycle of changes
 that end up needing to be completed.


??: The actual work only takes about 20 minutes...


JC: Yes, but there are large gaps while things build between actions. We’ve been trying
 to move this away from Oxford, and a list of people including MH, GB and PB have done
 releases.


HC: I volunteer to take a crack at it.


JC: We can timetable an exact day, and then work back from that to establish freeze
 times etc. This should be mid\- to late\-January presumably, to allow as much as possible
 for outstanding tasks to be finished.


KH: It should be a bit sooner if possible, because of the current fDecl bug.


PB: I agree.


JC: Tentative timetable is mid\-January, then. I will liaise with HC about a date he
 can devote entirely to this, and get accounts set up etc.




 Report on deprecation of TEI P4 (JC \& KH)
 
  JC: A notice has gone out to TEI\-L removing official support for P4, since no changes
 have been made to it for several years, but KH still has questions.


KH: David Sewell has done most of what we planned, but the following questions remain.
 Please look over them, and if you have thoughts on them, please email the Council
 list. KH will send the points to the list for comment.


* What do we do about files in [http://www.tei\-c.org/Guidelines/DTD/](/Guidelines/DTD/)? (This is the same except whitespace for content originally at [http://www.tei\-c.org/P4X/DTD/](/P4X/DTD/) and now at [http://www.tei\-c.org/Vault/P4/xml/schema/dtd/](/Vault/P4/xml/schema/dtd/).) Do we leave these files there so they can be directly found as targets of the P4
 DTD (typically invoked as [http://www.tei\-c.org/Guidelines/DTD/tei2\.dtd](/Guidelines/DTD/tei2.dtd)), or do we put in permanent redirects to the Vault location?
* What do we do about [http://www.tei\-c.org/Guidelines/Customization/Lite/DTD/](/Guidelines/Customization/Lite/DTD/)? The URL that is used for the P4 TEI Lite DTD in oXygen and no doubt elsewhere points
 to [http://www.tei\-c.org/Lite/DTD/teixlite.dtd](/Vault/P4/Lite/DTD/teixlite.dtd), which in turn redirects to [http://www.tei\-c.org/Guidelines/Customization/Lite/DTD/teixlite.dtd](/Guidelines/Customization/Lite/DTD/teixlite.dtd).
* The link at [http://www.tei\-c.org/Guidelines/](/Guidelines/) for P4 now points to the Vault. Is everyone okay with removing mention of P4 from
 this page entirely (since it's no longer supported)?
* JC has suggested adding a note at the top of [http://www.tei\-c.org/Vault/P4/doc/html/index.html](/Vault/P4/doc/html/index.html) – or to all HTML files – noting that P4 is no longer supported. KH: We didn't attempt
 to do this with P1, P2, or P3 as far as I know, and I don't think it's worth the effort
 for P4\. People who are using it already know it's not current, and the fact that 'Vault/'
 is now in the URL should clue them in if they've somehow had their head in the ground
 for the past five years.




 How to proceed with proof of concept Roma rewrite (Byzantium); how does it affect
 moving forward with code bounties? (SR)
 
 SR: Assuming that everyone knows what this is: what I’m looking for from Council is
 some sense of how much Council weight/support should be behind it. Should we treat
 this as a priority project and adopt it, and/or seek money for it? There has been
 talk of leftover money being dedicated to coding projects like this.


JC: I recently reminded the Board of how we have stayed below our budget, in order
 to allow for code bounties.


SR: If we have money, do we have a candidate programmer?


LB: This is clearly the next step forward; Roma is old, and we need to replace it,
 so this should be encouraged. SR is asking two questions: 1\) Do we agree that if we
 have funding it should go to this? I think yes. 2\) If we have funding, does anyone
 have a programmer we could approach? This should be asked on TEI\-L.


JS: This should be as public as possible. LB and JC are intending to write a text
 about code\-bounties, but this was postponed until after the results of the current
 Byzantium project are clear.



GB: There were other code\-bounty projects mentioned at the Oxford meeting: solving
 the Durand conundrum, and solving the XPointer implementation problem.


LB: So we could actually prioritize these things.


JC: GB, could you write up this list of projects?


SR: It’s clear what the output of the XPointer project would be, but that’s not clear
 with regard to the Durand conundrum issue.


LB: We shouldn’t be discussing them now; let’s get the list organized.


GB: I’ll create a list and we’ll take it from there.


SR: Is everyone clear that we should proceed with code bounties in the first quarter
 of next year?


LB: We do need to be clear that there is some money there; we don’t know for sure
 that the Board will allow us to spend the money we “saved” from this year’s budget.


JC: When we have a list of items with costs, we can go back to the Board and argue
 for using the money on one or more projects.




 Use of Github (<https://github.com/organizations/TEIC>) for community projects, and proposal to move things like oddbyexample, processpb,
 Byzantium there, and possibly most of stylesheets (SR)
 
 SR: We need to make sure that Council is happy with splitting our work into two locations.
 The canonical example is oddbyexample.xsl. I don’t think that belongs to the TEI.


MH disagrees, because the current model doesn’t seem to be broken. GB agrees.


SR: Github is a better model, with more granular permissions etc.


JC: This would also be a better model from the community point of view, because anyone
 could join.


LB: Exactly the same thing is true of the SF project. I can’t see what the problem
 is; if we want to store some things in one place and some in another, who cares?


KH: There are two questions. Do we want to split into separate repositories for official
 TEI things and unofficial private projects of SR? If so, will the repository for unofficial
 stuff be outside of SF?


JC: SR’s point is that this work is not work done for TEI, and putting it in the repo
 is a sort of abuse.


SR: There is a mandate from a recent meeting about pulling my material from SF. It’s
 confusing for punters to have it in there \-\- e.g. Louis Dubeau on TEI\-L recently was
 under the impression that the Stylesheets are an official TEI project.


MH: Does this mean that the Stylesheets are not part of the TEI package?


SR: Some of them should be and some not — those that produce the Guidelines should
 be, and others shouldn’t.


Various: Could they really be separated?


JC: We were mainly concerned with the housing of supplementary things such as oddbyexample.xsl.


SR: We have one definitive Guidelines, obviously, but we can have multiple implementations
 of e.g. an ODD processor.


LB: Yes, but this is a separate discussion from whether some things belong in GitHub
 or not.


MH: If the reason for moving to GitHub is that it’s better, shouldn’t we move everything?


JC: We should continue this on the list.




 Guidelines front page: should we merge index.html with index\_toc.html for a single,
 simpler page? (MH)
 
 JC: index.html was created because the full TOC page was thought to be too big.


MH: Do people still think that’s true?


LB: I don’t know whether there was any usability testing before that decision, and
 we shouldn’t take another one now without it.


JC: We definitely need feedback from the community on what they think it should be
 like, otherwise we’ll end up with something else unpopular.


JC: Should MH raise this issue on TEI\-L?


JC: No objections, so an action on MH to do that.




 Spring Face\-to\-Face Meeting (JC)
 
 JC: I’ve been talking to EM about possibly having this at Brown.


EM: We got to the point where I would talk to people in the library to get permission
 to do this. Providence is a good travel hub for the Council, and it can be hosted
 here. It’s easier if it can be hosted during Spring Break, but that coincides with
 Easter and Passover; that may affect some people, especially if we want to have a
 TEI Day. The break is the last week of March, and Easter is on the 31st.


LB: What would a TEI Day be?


JC: Sometimes the meeting is supplemented by a local TEI event, which is helpful for
 Council members trying to get travel funding etc.


LB: It also raises local consciousness, but in the case of Brown...


EM: But Brown is in the middle of other institutions, and workshops often draw people
 in from other locations, so it’s not just Brown. My only slight concern is that April
 is only four months away, so publicizing a TEI Day more broadly takes more work. Hotels
 are OK, and even during April we can probably get rooms in the library for three days
 of meetings with breakout rooms. How does this sound to the rest of you?


LB: I would love to go to Providence.


JC: I’d be happy to go. Going back to Ann Arbor would impose yet more work on KH and
 RW, so this would give them some relief.


EM: You fly into Boston, and we’re well served by cheap airlines and trains.


JC: Any reasons why we shouldn’t go there?


KH: If you’re really trying to cut costs, Ann Arbor saves one trip (with three people
 already there), so that could be the location this year and Providence next year.


JC: If it works out cheaper to have a meeting in Ann Arbor and one in Providence (instead
 of Oxford), then that would be the logical choice.


EM: I need suggestions on dates, based on which dates are impossible for people.


MH: We need a Doodle poll for this.


EM: I’ll put the Doodle poll up.


SR: Easter would be problematic for people with families.


EM: So the last week of March is not a good time... I’ll do the month of April only,
 not March.




Action items from [Oxford F2F](http://www.google.com/url?q=http%3A%2F%2Fwiki.tei-c.org%2Findex.php%2FOxford2012-Actions&sa=D&sntz=1&usg=AFQjCNFta6hFwQZ7EOuAsrtuNz58maR_WQ) and Action items from [Ann Arbor F2F](http://www.google.com/url?q=http%3A%2F%2Fwiki.tei-c.org%2Findex.php%2FAnnArbor2012-Actions&sa=D&sntz=1&usg=AFQjCNEm52yXtQImVaZ6Gynu9qv2FOSrxA) still not done
 
 JC: Just complete the final column in both wiki pages, and if there’s something you’re
 never going to do or can’t do, email the Council list.




JC: Thanks MH for taking the minutes.




