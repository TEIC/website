---
layout: page.njk
title: "TEI Technical Council Teleconference, 2020-12-08"
---
# TEI Technical Council Teleconference, 2020-12-08
**Meeting time:**


* 6:00–7:30 PST, EST 09:00–10:30, GMT 14:00–15:30, CET 15:00–16:30
* Started: \~14:06Z; Ended: \~15:28Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HB joined @ \~15:10Z)
* Elisa Beshero\-Bondar (EB)
* Hugh Cayless (HC)
* Jessica H. Lu (JL)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Nicholas Cole
* Vanessa Bigot Juloux
* Magdalena Turska
* Meaghan Brown


Welcome and goodbye
-------------------


Organisation of meetings
------------------------


* General discussion on organization of Council meetings and Stylesheet meetings
	+ SB proposes to change the Stylesheets meeting to a "tactical technical work meeting" about working on tickets generally (including, but not limited to, Stylesheets).
	+ Council raises the following concerns:
		- Maybe we should still focus on Stylesheets?
		- "Work shadowing" is helpful for new/less emacs\-experienced Council members.
		- Not all Councilmembers like to work on/talk through tickets in a group; some prefer to work on tickets individually as it suits their own schedules and other commitments.
		- Any chance to the existing format of Stylesheets meetings should aim to help with less face\-to\-face work together, e.g. provide forum to resolve “needs discussion” matters so that individual Councilmembers can work on tickets more efficiently
	+ General agreement to defer further discussion and any changes until after our upcoming “short VF2F” in \~early February.
* Meeting times for 2021
	+ Due to locations of incoming and continuing Councilmembers, we know the time is going to have to be early morning PST, late afternoon for Europeans
	+ MS requests that we share our availability (by days, unless something particular)
* **Action on Everyone** to complete Doodle for short virtual F2F meeting in January/February


Next release
------------


* Refridge: Fri 2021\-02\-12
* Freeze: Fri 2021\-02\-19
* Release: Thu 2021\-02\-25


Council chair elections
-----------------------


* MS re\-elected (6 yes, 1 abstention out of 7 eligible voters)


Copious examples
----------------


* <https://github.com/TEIC/TEI/issues/1933>
* [https://bauman.zapto.org/\~syd/temp/4TEICouncil/html\_GLs\_all\_eg\_en/](https://bauman.zapto.org/~syd/temp/4TEICouncil/html_GLs_all_eg_en/)
	+ EB: \<bibl\> examples are far more diverse; \<byline\> improved; \<gap\> Asian examples, but duplicate examples (fr and en) — (MS: same for \<abbr\>); \<ab\> only one example.
	+ Recommendation: use \<exemplum\> itself as the grouping mechanism for a set of \<egXML\>s (or \<eg\>s) and \<p\>s that exemplify the exact same thing.
	+ Another recommendation: rely on front\-end (i.e. browser) user interaction to make heuristic decisions as to which should be displayed.
	+ We need 3 new issues: **Action on EB**
		- TEI repo: change the content model of exemplum [\#2072](https://github.com/TEIC/TEI/issues/2072)
		- TEI repo: group examples [\#2073](https://github.com/TEIC/TEI/issues/2073)
		- Stylesheets repo: do something semi\-intelligent with grouped examples in an \<exemplum\> [\#480](https://github.com/TEIC/Stylesheets/issues/480)
* Open tickets for issues that we encounter when reviewing examples (see email from Martin to the [Council list](https://lists.tei-c.org/pipermail/tei-council/2020-November/026587.html)).


TEI “Vanilla” — Potential Next Steps
------------------------------------


* Notes from the VF2F meeting in October
	+ SB: Change the name because it has alternative meanings in our community (to mean "unmodified")
	+ TEI Council should review the current introductory material and try to curate and filter some of the older material to ensure that it is relevant to current Guidelines.
	+ Encourage creation of ‘Road Not Taken’ examples? Explanations of decisions and alternates not chosen.
	+ Can we encourage some material to be written on presenting TEI documents (as a technical matter).
* MT: meeting summary [https://e\-editiones.org/tei\-vanilla\-meeting\-summary/](https://e-editiones.org/tei-vanilla-meeting-summary/)


Proposal on CMC
---------------


* CMC group met Fri 04 Dec, and plans to continue on Fri 11 Dec


Some of Peter’s issues
----------------------


* Can we mark these green?
	+ Remove directory "genetic": <https://github.com/TEIC/TEI/issues/2043>
		- SB: **yes**
		- MS: green
	+ teiCorpus: make guidelines and data model consistent: <https://github.com/TEIC/TEI/issues/1823> – do you agree with my latest comment: [https://github.com/TEIC/TEI/issues/1823\#issuecomment\-667130393](https://github.com/TEIC/TEI/issues/1823#issuecomment-667130393) ?
		- SB: not read it, yet; will try to reply by tomorrow


Notification on pull requests
-----------------------------


Ticket Triage (and minute review) assignment table
--------------------------------------------------




| **Month** | **ticket triage** | **minute review/assist** |
| --- | --- | --- |
| **December 2020** | SB | JL |


 