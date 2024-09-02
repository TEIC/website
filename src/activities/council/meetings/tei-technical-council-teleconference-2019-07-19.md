---
layout: page.njk
title: "TEI Technical Council Teleconference, 2019-07-19"
---
# TEI Technical Council Teleconference, 2019-07-19
**Meeting time**


* EDT 16:00\-17:30, GMT 21:00\-22:30, CEST 22:00\-23:30
* Started: 20:09 UTC; ended 21:35\.


**Present**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present**
* Vanessa Bigot Juloux (VBJ)


 
Release debriefing
------------------


* General debrief of issues encountered
	+ Temporary scratch server was a serious problem because this was not a clone of the TEI server as we all expected, and because we did not all have access. The release techs had to install necessary software during the release.
* oXygen plugin
	+ Status: updated with new release.
	+ **Action on** **MS** to announce update on TEI\-L.
* Circularity: How to deal with?
	+ On agenda for the face\-to\-face meeting in Graz.
	+ To prepare: try to understand the process.
	+ **Action on PS** by **2019\-09\-04** will write up what our thinking and process was for this release.
	+ We could use a better explanation in TCW 22 about this.
	+ RV: let’s consider that the core cause of the circularity is our way of testing.


Nesting \<TEI\> and deprecation of \<teiCorpus\>
------------------------------------------------


* Given feedback, argument for deprecating \<teiCorpus\> is less strong.
* Need to re\-assess handling of standoff / nesting \<TEI\>.
* PS: This issue is much too big to deal with in a single meeting or F2F.
* PS: Proposal: dedicated standoff boot\-camp, bring together all the people involved—need 2 or 3 days.
	+ SB: We have precedent, and can create a task force, give it a charge, and get funding from the Board for them to meet.
	+ JC: Invite Piotr Bański and Laurent Romary to a workshop /task force meeting (do this in Europe to make it cheaper).
	+ RV: parallel case like genetic group. The group had meetings, people used their proposed markup, but then Council changed it. Is this process going to be similar? Consensus: yes, likely, because the key players would be involved with Council in conversation.
	+ MS: Laurent Romary is available on Monday afternoon in Graz. Perhaps we hold a planning meeting for a 2–3 day task force session then? Maybe even just one hour, to decide who, when, what country, funding. Additional hour or so for additional communication (e.g. presentation of alternative options). Some people who might be interested or form part of a task force include:
		- Roberto Rosselli del Turco
		- Piotr Bański
		- Martin Holmes
		- Laurent Romary (and ask Laurent if there’s anyone else to invite)
		- Georg Vogeler
	+ **Action on MT** by **2019\-09\-07**: to prepare a list of use\-cases (with help from rest of Council). HC and others will provide some examples for stand\-off and linked\-data block. We need to investigate the consequences of the web annotation model, etc.
	+ Set 90 minutes, maybe start at 2pm.
	+ **Action on MS** by **2019\-07\-22**: write to TEI\-list that tei\-corpus deprecation is off the table, and we’ll be discussing stand\-off proposals and alternatives in Graz.


F2F in Graz
-----------


* Stand\-off meeting on Monday afternoon (September 16\)?
	+ see above


ROMA
----


* Please help RV write text for the landing page on this [google doc](https://docs.google.com/document/d/1shx5xgCmyqk1lYfI_qcKhKb0npn5OnRXozer-bTh3vE/edit?usp=sharing).
* RV recently added certificate for [romabeta.tei\-c.org](http://romabeta.tei-c.org).
* **Action on RV** by **2019\-09:** update Roma to be pointing to latest TEI release.
* Maybe another round of testing from Council before August meeting.


Minutes
-------


* All minutes are online
* Document with collection of “action on items” in Google Drive


Google Calendar
---------------


* Council decided that the Google Calendar can be made public; should we make an announcement on TEI\-L? **Action on HC** to make calendar public.
* Make a list announcement about 2 months before the release with general time frame of next release (not specific dates; just a window).
	+ Don’t announce specific freeze/refrigeration dates.
* **Action on EM** to put the timetable for ticket triage and minute review/assist in the Google Calendar:
	+ EM entered at 9 am on the first weekday of each month. However, the timing may be off because it’ll probably show up as EST. Best to go ahead and change as needed.
	+ Minute Review/Assist is right after/before the Council meeting event (except for July, because the meeting is past).


uniHan
------


* Duncan Paterson did not know when the freeze \& release were happening.
* Please have a look at the issue and review: <https://github.com/TEIC/TEI/issues/1805>


**Next Stylesheets Meeting**
----------------------------


* Monday, July 22
