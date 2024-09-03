---
title: "TEI Technical Council Teleconference, 2020-10-13"
date: 2020-10-13
---
# TEI Technical Council Teleconference, 2020-10-13
**Meeting time:**


* EST 09:00–10:30, BST 14:00–15:30, CEST 15:00–16:30
* Started:    13:06Z    Ended: \~14:28Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Hugh Cayless (HC)
* Nicholas Cole (NC)
* Jessica Lu (JL)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Raffaele Viglianti (RV)


**Apologies/Not Present:**
* Meaghan Brown (MB)
* Vanessa Bigot Juloux (VB)
* Magdalena Turska (MT)


VF2F meeting
------------


* Schedule / Collection of topics: [https://docs.google.com/document/d/1nIk4x5SDB0\_EqSJG\-DynzLz\-n9WbmR0tjzM7Aaxfi5c/edit](https://docs.google.com/document/d/1nIk4x5SDB0_EqSJG-DynzLz-n9WbmR0tjzM7Aaxfi5c/edit)
* Invited guests
	+ Martin Holmes (MH)
	+ Laurent Romary (re: ISO invitation)
	+ CMC SIG folks?
	+ proposal on ruby glosses (Kiyonori Nagasaki and team)


Business Meeting
----------------


* Thursday, 19 November 2020


Stylesheets patch release
-------------------------


* Report: SB and Martin Holmes deliberately did not perform the release on Friday 02 October as they had announced, because they realized ahead of time their meeting would be too short. Instead, they spent the time preparing and setting up in advance what is needed for a release. Essentially, they tried a dry run. They found that the teinstall.sh script isn’t set up to deal with Stylesheets separate from Guidelines, and submitted [a ticket](https://github.com/TEIC/TEI/issues/2038).
* They’ll try to do the release this Friday 16 October.
* TCW 22 will need to be updated both in response to ticket [\#2038](https://github.com/TEIC/TEI/issues/2038) (mentioned above) and perhaps in other ways.
* Discussion of release cycle: NC would like to learn more to see if we can automate the process more to make releases easier. NC to consult with HC.


Update tests in Stylesheets repo
--------------------------------


* PS (with HC \& NC) were supposed to set up a bot.
* Started with it in a branch. An ant build script checks the updated P5 subset, runs the tests, copies results to the expected results, commits this and creates a pull request for Council to review. Council reviews the changed results to make sure they make sense or not. The ant script would feed into a Jenkins job that would automatically run this for every push to the Guidelines repo—to trigger the Stylesheets repo. The ant build script should facilitate local builds. See PS branch: [semi\-automate the task of updating source/p5subset.xml and reviewing expected results](https://github.com/TEIC/Stylesheets/issues/457)


ISO invitation
--------------


* MS reports no news, yet. Will invite Laurent Romary to VF2F meeting.


Proposal to add ruby, rb, and rt to encode ruby glosses for Japanese texts
--------------------------------------------------------------------------


* Proposal from the East Asian / Japanese SIG: [https://docs.google.com/document/d/1rRgBRYpxUlsnMEHbOPW\-92u\_AIMNwq9axGtpI1UGgz8/edit\#heading\=h.xjusjhhdlit2](https://docs.google.com/document/d/1rRgBRYpxUlsnMEHbOPW-92u_AIMNwq9axGtpI1UGgz8/edit#heading=h.xjusjhhdlit2)
* **Action on MS** to open ticket, proposers will share the document from there; when done ping SB. **Action on SB** to review \& edit ticket.
* Invite proposers to VF2F.


Guidelines Redesign
-------------------


* See issue <https://github.com/TEIC/TEI/issues/2023>
* HC: We can try to update the old 2007 appearance.
* HC, RV interested in working on this. SB interested in Stylesheets end of this.


Website
-------


* Related discussion: should TEI continue with Wordpress for the website? Or should we be using it more effectively? (As in posting articles, updating it frequently...)
* Problems: we can’t change the menu, posting minutes is awkward.
* Maybe a subgroup at F2F to tackle this?
* What is the relationship between Council, Board, and Infrastructure group (IG) regarding the TEI website? It was suggested that it is **neither** the responsibility of Council nor the IG. IG is not responsible for content, but maybe for implementing decisions of Board and Council. It’s probably the Board’s responsibility but it’s shared in many ways with Council.
* SB suggests the choice of TEI website front end is responsibility for Board, with advice from Council.


CMC subcommittee report
-----------------------


* The TEI Technical Council subgroup (SB, JL, PS) met on Tuesday 22 September, and has produced this draft position statement: [source](https://bauman.zapto.org/~syd/temp/TEItmp/cmc_conv_02.tei) (or [XHTML](https://bauman.zapto.org/~syd/temp/TEItmp/cmc_conv_02.xhtml)).
* CMC working on applications of TEI for social media archiving, email etc.
* existing TEI recommendations aren’t quite right to encode this.
* Council needs to decide:
	+ Should this be a separate chapter in the Guidelines, or be addressed in the core module?
	+ Or a separate coding system like EpiDoc?
* PS: This is an established group, connected with the linguists, that has been meeting for several years; the group has been active with TEI.
* EBB points out that students will love this.
* JL thinks there should be a full new chapter on CMC in the Guidelines, to clearly signal viability and suitability of encoding for newcomers unfamiliar with the TEI.
* NC: Is TEI necessary for email given the archiving tools available?
* RV: But APIs are constantly changing, and for assembling a corpus and working over a long period of time, TEI would be for a long\-range sustainable structure and annotation. SB: Scholars studying communication would need to study across platforms.
* SB: What about combining CMC and \<correspDesc\> in a chapter on Episodic Communications?
* PS: \<correspDesc\> has examples of email in the Guidelines already.
* SB: Should the question of threading be a point of continuity between archiving paper/print and electronic communications?
	+ Definitely.
* Arguments in favour:
	+ It provides a way to store information for things like Twitter where a canonical raw format is not available.
	+ There are common features of communications that allow things to be compared across platforms.
* Arguments opposed:
	+ Make sure the applications the CMC group has in mind are continuous with the flow of the Guidelines.
	+ Should we check with them first to be sure this should be a full chapter in the Guidelines?
	+ Chapter in the Guidelines should be flexible in the spirit of the Guidelines—broadly applicable regardless of media.
* JL: Question of whether to meet with CMC before or after the F2F, or invite them directly. Perhaps we should discuss specific feedback on their proposal with them before discussing with full Council?
	+ Ask the subgroup to meet with the SIG, and invite them to a later Council meeting call?
	+ But Council F2F conversation would be nice this month!
	+ If it doesn’t work for the next F2F, we can do a special Council session just on this topic.


Normalization of dates, revisited.
----------------------------------


* SB to give brief report on [\#1885](https://github.com/TEIC/TEI/issues/1885), ISO 8601\-2:2019, and the lack of need for @from\-iso, @to\-iso, @notBefore\-iso, and @notAfter\-iso. (See “[sydb\-new\_ISO\_8601](https://github.com/TEIC/TEI/tree/sydb-new_ISO_8601)” branch.)
* ISO has mechanisms for expressing seasons and approximate date ranges.
* **Action on Council** to check out branch and comment on it.
* Discussion on attributes
	+ Before we remove @from\-iso and friends, we would have to think about how precision thereof would be expressed (i.e., what would \<precision\> point to?)
* Example where W3C (and ISO 8601 pre\-2019\) falls short: a date with only the month and day but missing the year. [xsd:gMonthDay](https://www.w3.org/TR/xmlschema-2/#gMonthDay) is for cyclical recursion of a date every year, not specifically about a missing year. That is, \<date when\="\-\-10\-13"\> means “every October 13th”, **not** “the 13th of October in some year, not sure which”.
* SB will be working on this and sharing in future.


2021 TEI Conference
-------------------


* Is there a 2021 TEI Conference; when will it be?
* 2021 will be a virtual conference—awaiting dates, maybe bring up at next Board meeting.


AOB
---


* **Action on MS** to arrange Board \+ Council meeting to discuss website issues.


Reminder — Action on
--------------------


* NC to write\-up Oxygen release process \[happy to write this up but someone needs to talk me through it, because I don’t fully understand it.]
* HC to update the release documentation from the release minutes.
* MS to send brief email to TEI list on @version — DONE, 2020\-10\-12T15:29Z.
	+ The few responses so far indicate no problem removing @version.
	+ We will leave it for at least another 6 days before any action.
* MS: Ask Laurent to join us to discuss ISO invitation with us. What are they doing, what would we be involved with? Maybe arrange a special meeting? — DONE, 2020\-10\-12
