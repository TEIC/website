---
layout: page.njk
title: "TEI Technical Council Teleconference, 2018-08-30"
---
# TEI Technical Council Teleconference, 2018-08-30
**Meeting time:**


* 08:00 EDT, 13:00 BST, 14:00 CEST
* Started @ \~12:10Z; ended @ \~13:32Z.


**Present:**
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


**Apologies:**
* Alex Bia


F2F in Tokyo
------------


* Schedule: [https://tei2018\.dhii.asia/programme](https://tei2018.dhii.asia/programme)
	+ Friday,  7 September: F2F
	+ Saturday, 9 September: F2F with Martin Holmes
	+ Sunday, 10 September: Workshops — help needed?
		- possibly need help for the Epidoc workshop. Won’t know until later if that will be the case.
	+ Monday, 11 September: Open Council Session, 09:30–12:00
	+ Thursday, 14 September: Dinner Council \& Board
* Guests on Saturday: Martin Holmes (Internationalization, Stylesheets, Oxygen), Susanna Allés (Internationalization)
* Meeting with LingSIG?
* Open Council Session 09:30–12:00
	+ Slide set “What TEI Council Does”: (build/adapt from <http://bit.ly/TEICouncil> ) (15 min)
	+ Work on [\#1707](https://github.com/TEIC/TEI/issues/1707) (max 45 min) — introduce (summary of ticket and where we are) with slides.
	+ Brief intro to RomaJS with Council reporting back on roadmap, etc.
	+ Ticket reporting (i.e., sub\-groups that examined tickets on Saturday reporting to full Council) e.g.:
		- [\#1756](https://github.com/TEIC/TEI/issues/1756)
		- [\#327](https://github.com/TEIC/TEI/issues/327)


RomaJS poster
-------------


* RV asks the Council to comment


RomaJS application
------------------


* Slow data import — how much of a dealbreaker?
	+ Suggestions:
		- JC: Try a localized/dockerized version of OxGarage to speed up.
		- PS: OxGarage can convert ODD to JSON in one run. ounded like you’re doing two requests for that? E.g. Conversions/ODD%3Atext%3Axml/ODDC%3Atext%3Axml/oddjson%3Aapplication%3Ajson/
	+ Messages to user reporting on phase of import process should be vertical and checked\-off as it goes along.
* Move to github.com/TEIC? — Yes
* Demo on mith.us ok? We need to use HTTP because of Vault, so no GitHub pages — Yes
* **Action on** RV: Write to Ian Rifkin and ask to switch TEI Vault to handle https (not just http), and/or virtual host DNS to point to mith.us server.


Status Jenkins @ UVic
---------------------


* PS: TEI Jenkins is pointing at Paderborn, but messages are coming from University of Victoria. Paderborn ant responds differently to zip files than UVic. RV: We may want to revisit how we’re testing changes.


Requested “Letter of Support”
-----------------------------


* Proposal of “Letter of Support” for Marjorie Burghart on developing a TEI XML editor.
* MS asks Council to comment on the proposed letter of support


AOB
---


* On Tokyo agenda but we could decide now: Archiving legacy GitHub repos, e.g. <https://github.com/TEIC/Carthage> is done.
* Report on Standoff task force meeting. Nothing to report.
* BPTL would benefit from Council’s feedback/decision on  [TEIC/TEI\#1788](https://github.com/TEIC/TEI/issues/1788).
* Next Council meeting: Thursday September 27 (12:00\-13:30Z, 08:00\-9:30 EDT, 13:00\-14:30 BST, 14:00\-15:30 CEST)


Ticket triage
-------------




| **August 2018** | **JC** |
| --- | --- |
| **September 2018** | **EM** |
| **October 2018** | **MT** |
| **November 2018** | **SS** |
| **December 2018** | **AB** |


 