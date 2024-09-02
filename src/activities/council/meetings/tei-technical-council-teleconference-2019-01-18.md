---
layout: page.njk
title: "TEI Technical Council Teleconference 2019-01-18"
---
# TEI Technical Council Teleconference 2019-01-18
**Present:**


* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Hugh Cayless (HC)
* James Cummings (JC) — arrived at 22:10Z
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux (VBJ)


Started: 21:06Z Ended: 22:34Z
Spring F2F, 6–8 May at the Folger Library, Washington DC
--------------------------------------------------------


* For the second day (Tue 07 May) we plan an evening meet up with the local organizers and experts.
* Map and table for recording flights \& accommodations was circulated
* **Action** on EM \& EBB: investigate AirbB\&B options **due** Fri 2019\-02\-08


Release planning
----------------


* Release technicians: HC \& EM
* Slightly modified release timeline
	+ Refridge: Jan 21
	+ Freeze: Jan 24
	+ Release Branch: Jan 25
	+ Release: Jan 29
* Stylesheets release
	+ Do we want to have release notes for the Stylesheets?
		- Yes, the notes for the Guidelines release and the Stylesheets release should be in one document
	+ Stylesheets build is currently broken due to odd2json.xsl failure(s), see [https://jenkins.tei\-c.org/view/TEI%20dev/job/Stylesheets\-dev/](https://jenkins.tei-c.org/view/TEI%20dev/job/Stylesheets-dev/)
	+ This failure occurs when building the Stylesheets locally, too. Looks it might be just a “need to copy output to expected\-results/” type of error. This will be fixed before we release.
* Tickets to discuss before we release?
	+ EB moved \#1707 to new milestone for July 2019 release, tentatively named 3\.6\.0
* Readme (release notes for 3\.5\.0\):
	+ Chair and Release technicians could be working on that starting now (this takes time)—maybe work on this before the release branch is created.
	+ **Action** on HC: update TCW 22 to indicate writing release notes starting a week or two ahead of release. (Note that TCW 22 is on the [Documentation repo](https://github.com/TEIC/Documentation).)
	+ **Action** on MS to start with the release notes and hand it on to the release techs


Adjust/rephrase modal verbs in the Guidelines (PS)
--------------------------------------------------


* It is quite an effort to go through the Guidelines and adjust all those verbs but it would be a significant improvement.
* This came up when Martin Holmes announced the implementation of the Japanese translations. This would make the translations more consistent.
* JC is already working on this — see issue <https://github.com/TEIC/TEI/issues/1175>
	+ JC reports he went through and did some of this prior to release 3\.4\.0 and will go through and do some more *after* this release. For the record he was searching for case\-insensitive use of (must\|must not\|should\|should not\|may\|require\|shall\|shall not\|recommend\|optional)', and got as far as end of chapter 3, CO\-CoreElements.
	+ See [TCW 24](http://teic.github.io/TCW/tcw24.html) (Styleguide for editing the TEI Guidelines) for recommendations on use of modal verbs.
	+ PS recommends we mark the modal verbs that are really important—for display, perhaps support self\-reflection for TEI—for more formal specification of these verbs. Perhaps ODD and Schematron can help flag as we’re editing and using modal verbs.
* Decision: we will discuss this at the next F2F meeting, whether we should make a feature request on marking modal verbs. In preparation, we will take a look at other standards documents for modal verbs like <https://tools.ietf.org/html/bcp14>.
* The Guidelines should be kept consistent.


Report on Skype meeting that addressed the uniHan element
---------------------------------------------------------


* Issue <https://github.com/TEIC/TEI/issues/1805>
* Last week (Mon 07 Jan)  RV, HC, SB, and MS met with Duncan Paterson and Martin Holmes. We agreed it was a good idea to introduce a new element. Suggestion to call it \<unihanProp\>. Furthermore, \<localProp\> and \<unicodeProp\> should be renamed to \<unicodeName\> and \<localName\> instead, deprecating the current names for a long time. These three elements should be added to a new att.gaijiProperties class.
* Proposal to the Council:
	+ Phase 0: Create att.gaijiProperties with @name and @value, to be used by \<unicodeProp\>, \<localProp\>, and \<unihanProp\>.
	+ Phase 1: add the new \<unicodeProp\>, \<unihanProp\>, and \<localProp\> elements with closed valList for unicodeProp/@name and unihanProp/@name, along with prose changes.
		- NOTE: The entry for “charProp” in the content models of \<char\> and \<glyph\> becomes instead “( charProp\* \| ( unicodeProp \| unihanProp \| localProp )\* )”, and a) \<charProp\> is deprecated (for some years), and b) the three new elements are members of a new class that has a required @name (which used to be the content) and a maybe required @value (which used to be the sibling \<value\>).
	+ Phase 2: Test the more aggressive validation of all @values based on @name and regexes from the Unihan database (see [technical report \#38](https://www.unicode.org/reports/tr38/)). If it’s not too onerous to run and to maintain, integrate it.
	+ Phase 3: Update prose and specs for \<unicodeName\> and \<localName\> to deprecate the old mechanisms and recommend the new attributes.
	+ Phase 4: Write scripts to pull values from Unicode documents as part of the TEI build process to validate @name and @value.
* **Action** on SB to write up issue (**due** 2019\-02\-18\), and on MS to ask Lou Burnard, Christian Wittern, and Espen Ore for examples (due 2019\-02\-25\)


Report on rub\-a\-dub\-dub (SB)
-------------------------------


* Making good progress — on phase 2 of 4
* Interestingly, it fails Test/, although it is passing Test2/. (Thanks to PS and his Travis for finding this.)
* It will take at least a couple of weeks until it is finished


Report on object element (JC)
-----------------------------


* JC summarised work on \<tei:object\> and related elements. Latest updates include renaming \<objIdentifier\> to \<objectIdentifier\>. It is ready to come out in next week’s release. More work to be done after this release, this is just getting us started. Language has been included to make that clear in Guidelines. JC to add to \<object\> tagdoc page.
* **Action** on JC to add clarification to the \<object\> tagdoc page.
* **Action** on MS and release techs: Caveat should be included in the release notes.


Availability of Google Calendar
-------------------------------


* Council decided that the Google Calendar can be made public


AOB
---


* **Action** on MS to be sure our Council minutes are being posted to website
* MS requests help with reviewing minutes
* Council decided that a council member would be assigned to assist the Chair with the minutes of each meeting on a rotating basis (based on the Ticket Triage rotation).
* Do minutes\-review the month *after* you do ticket triage
	+ e.g. July Ticket Triage person does the August minutes.
	+ EM added column to ticket triage
	+ Discussion: what belongs in public minutes. Actions/decisions. We opt to provide rationale but it’s not required. We don't have to identify each speaker. “Council discussed this issue.”


**Reminder Stylesheets Meeting**
--------------------------------


* Mon 21 Jan 19 at 14:00Z \= 09:00 EST / 14:00 GMT / 15:00 CET


 