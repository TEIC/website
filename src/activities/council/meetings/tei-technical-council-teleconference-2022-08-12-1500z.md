---
layout: page.njk
title: "TEI Technical Council Teleconference, 2022-08-12"
---
# TEI Technical Council Teleconference, 2022-08-12
**Meeting times:**


* 7am PDT / 10am EDT / 4pm CEST
* Started:     15:05Z    Ended:    16:39Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EBB)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Peter Stadler (PS)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Helena Bermúdez Sabel (HBS)
* Elli Bleeker (EB)
* Magdalena Turska (MT)


Meeting minutes previous month ([July](https://tei-c.org/activities/council/tei-technical-council-teleconference-2022-07-08/))
 


TEI Conference
--------------


* F2F meeting in Newcastle
	+ September 11–13 (Sun–Tue).
	+ Agenda F2F meeting
	+ Travel \+ Accommodation
		- Discussion: We should be masking and testing during the meetings
* Joint Board/Council meeting
	+ Monday afternoon at 17:30, dinner afterwards
* Board meeting
	+ Thursday after the ABM (relevant for MS and HC)
	+ Topic that we should discuss with the TEI Board: concern over mailing list continuity
		- Revisit infrastructure group discussions of this
		- SB volunteers to assist with this
* JJ is willing to Zoom in for any issue but is particularly interested in being there for the \<ab\> and \<gender\> issues.


Next release
------------


* Timeline
	+ Thurs. October 20: Hard freeze: (i.e. release branches are created and only to be touched by the release techs)
	+ Tues. October 11: "Heightened Awareness Period" aka "Refrigeration": include special attention to PRs for the release – the yellow light at a traffic light.
	+ Tues. October 25: Release
* Decide on version number
	+ If CMC is included, major number needs to be incremented (from 4\.y.z to 5\.y.z, because it is a new chapter)
	+ \<gender\> element and nested \<ab\> probably not enough to justify a major number increase
	+ Next release will be 4\.5\.0 unless CMC makes it in, in which case it has to be 5\.0 because of the need to renumber chapters.
* Release techs will be SS, PS, \& MS. (Making this an all\-European effort.)


New gender element
------------------


* **Action on SB, HC, MS:** Review PR [2299](https://github.com/TEIC/TEI/pull/2299) **by** 2022\-09\-11
* Ready to merge into dev?
* Not quite. EBB needs to make a series of prose updates. SB assigned to merge the PR when ready.


Discussion of nested ab elements
--------------------------------


* **Action** on **HC** and **EBB** to update the prose.
* **Action** on **HC, SB, or EBB** after prose updated: make PR for [the branch](https://github.com/TEIC/TEI/compare/ab_in_ab_issue-1856).
	+ First example in 3\.1 should be revised. Find a better sense\-making paragraph.
	+ Second example in 3\.1 isn't a correct use of head.
	+ Modify phrasing in paragraph: "Since paragraphs are usually explicitly marked in Western texts...": this is too broad; doesn't apply to pre\-print documents.
	+ Discussion of parallels between the \<p\>:\<ab\> relationship and the \<s\>:\<seg\> relationship, except that \<s\> can take @type. We noted that \<p\> and \<s\> are formal semantic structures, while \<ab\> and \<seg\> capture informal passages.
	+ JJ notes that it would be useful to have @type on \<p\> for processing into HTML and using classes in stylesheets. We already talk about introductory, body, and concluding paragraphs in Western writing practice.
	+ Decision that \<ab\> is a chunk.
	+ HC and EBB will continue working on this and we'll review revisions at F2F.


Report on CMC
-------------


* Content (SB)
* Jenkins build problem (PS): <https://github.com/TEIC/Stylesheets/issues/565>


Report on ATOP (SB)
-------------------


* Hoping to have some code to demonstrate in Newcastle


 