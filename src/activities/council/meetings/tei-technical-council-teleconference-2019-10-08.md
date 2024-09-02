---
layout: page.njk
title: "TEI Technical Council Teleconference, 2019-10-08"
---
# TEI Technical Council Teleconference, 2019-10-08
**Meeting time**


* EDT 9:00\-10:30, GMT 14:00\-15:30, CEST 15:00\-16:30
* Started: 13:05Z; Ended: 14:32Z;


**Present**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Hugh Cayless (HC)
* Nicholas Cole (NC, had to leave @ 14:13Z)
* James Cummings (JC)
* Jessica Lu (JL)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS, had to leave @ 14:19Z))
* Sarah Stanley (SS, had to leave @ 14:13Z)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present**
* Vanessa Bigot\-Juloux (VB)
* Meaghan Brown (MB)


 
Welcome to our new Council members
----------------------------------


* Introductions
* Mentors for new Council members
	+ JL  and EB (she also has access to RV because he’s available at the same institution).
	+ MB and RV.
	+ NC and JC for the next 3 months, after that MS takes over.
	+ TEI Council FAQ: [https://wiki.tei\-c.org/index.php/TEI\-Council\-FAQ](https://wiki.tei-c.org/index.php/TEI-Council-FAQ)


Meeting times (including Stylesheets group meeting)
---------------------------------------------------


* For the remainder of the calendar year, keep with current plan: 2nd Tuesday of each month @ 13:00Z; Stylesheets 1 week earlier at the same time.


Documentation
-------------


* **Action on** Council: Wiki pages, for example Council FAQ, are out of date. Need to assign people to update it.
* Perhaps also add release schedule (i.e., refrigeration, freezing) into FAQ as well, no harm having it in 2 places.


Next Release
------------


* Need to include 2 big items in next release: standOff (https://github.com/TEIC/TEI/issues/374\) and UniHan. (https://github.com/TEIC/TEI/issues/1805\). Timing of the release should allow time for these to be completed.
* Refrigerate last week in January? Freeze early February for release.
* RV, EB (\+ newcomers shadowing).
* **Action on** RV and EB to schedule release.


Council terms \& skill sets
---------------------------


* Come up with a proposal for Board concerning 3\-year terms.
* Awareness of needed skill sets for Council: Nominating committee should be seeking candidates who are prepared to engage in discussions of both the technical and theoretical issues Council works on.
* Terms: Board was in favor of 3\-year terms, with 1/3 of Council standing for election each year (instead of half of Council standing for election each year).
	+ This would require a change to the Bylaws.
	+ 11 members of Council: 4, 4, and 3 rotation.
	+ How do we start it? We have 5 positions for election next year. 1, 2 and 3 year terms for some of the current Council members.
	+ Should Council have 12 members? We used to have 12 members. We went to 11 to have a tie\-breaker. Adding an extra person is expensive — can we afford it? (\~9% increase in budget).
	+ NC: tension between bringing new people on board and maintaining continuity in quality of Guidelines releases. MT: Nominating committee has pressure to ensure this works out.
	+ Discussion: JC, RV: Skill sets when first standing for election don’t necessarily matter as we all have had to learn on the post. 3\-year terms assists in learning process. Understanding and willingness to engage are important.
	+ When someone is nominated, they need to be informed about the frequency of online and face\-to\-face meetings; our suggestion for the nominating committee is to include this in the invitation email.
	+ And candidates who stand for election need to be told that mentorship and funding are available. And that gets you funding to the annual membership meeting.
	+ Next Board Meeting on Thursday, October 10: **Action on** MS to inform Board that Council is in favor of 3\-year terms. And propose that a Board and a Council member get together to draft what needs to be changed (policy documents, etc). **JC, MS, EM** will work on this drafting: **due Nov 14** (proposal shown to Council earlier? The Council meeting is after the board meeting, on Nov 19\)


Review UniHan issue
-------------------


* Original issue (<https://github.com/TEIC/TEI/issues/1805>),
* Pull request (<https://github.com/TEIC/TEI/pull/1901>) from Duncan Paterson
	+ Bug fixes for UnicodeName
	+ Phase 0:
		- New attribute class: att.gaijiProp.xml (@name, @value).
		- Open questions: @value mandatory (see Duncan on June 30\); NCName for @value?
		- New elements: \<unicodeProp\>, \<localProp\>, and \<unihanProp\>.
	+ Phase 1:
		- Content models to allow new elements inside \<char\> or \<glyph\>
	+ Phase 2:
		- Deprecation of \<charProp\> and \<value\>
	+ Inheritance of attributes might be an issue? **Action on SB** to build the pull request locally and investigate.


 