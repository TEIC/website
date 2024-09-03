---
title: "TEI Technical Council Teleconference, 2022-12-08"
date: 2022-12-08
---
# TEI Technical Council Teleconference, 2022-12-08
**Meeting times:**


* 8am PST / 11am EST / 4pm GMT / 5pm CET
* Started: \~16:05Z Ended: 17:32Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair\-elect)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS, Chair)
* Sabine Seifert (SS)
* Peter Stadler (PS)
* Joey Takeda (JT, Councilor\-elect)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Elli Bleeker (EB)
* Patricia O Connor (TOC)


Meeting minutes previous month ([November](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2022-11-10/))
 


Welcome Joey
------------


* Mentoring: RV and HC volunteer


New meeting times
-----------------


* We will need new meeting times. **Action on EBB** to arrange new monthly meeting (via Doodle) by **2023\-01\-01\.**


Spring F2F meeting
------------------


* Date: May 7–9
* Options for the meeting:
	+ Providence?
	+ Boston / Northeastern? **Action on SB** to ask Julia Flanders et al. if Northeastern could host the meeting **by 2022\-12\-10\.**


Fall F2F meeting
----------------


* The Conference and Members’ Meeting will be a joint event with MEI from Mon 04 Sep 23 through Fri 08 Sep 23 in Paderborn.
* Council may meet before or after the conference (PS)


Guidelines production via TEI Processing Model
----------------------------------------------


* MT presents a prototype at <https://guidelines.teipublisher.com/>
* Request for testing and reporting issues (discrepancies with existing Guidelines) and feature requests via [https://github.com/eeditiones/tei\-guidelines](https://github.com/eeditiones/tei-guidelines)
* Where is this version missing things (as in links to reference pages)? At what point shall we move this repo to TEI?
	+ RV suggests moving the repo to TEI to help us test it.
* Consider branding and design (involving touch\-up of the TEI logo)
	+ MT seeks a budget for hiring a designer to work on updating the TEI logo
		- Is this an individual request from MT to Board, or is Council in agreement to back this?
		- Small budget request if it’s only the logo and less time\-consuming.
	+ Original logo looks dated and clashes with modern websites. Text is hard to read in smaller sizes (because diagonal and italicized).
	+ PS has a logo for the upcoming TEI/MEI conference: it preserves brackets and color recognizable from current TEI logo (via <https://en.99designs.de>)
	+ PS: It’s not just the logo or the Guidelines but the whole TEI website. Design maybe needs a more general plan: color schemes, fonts, etc.
	+ SB: Logo \& website design is (in general) a Board issue rather than a Council issue. Council needs to be involved somewhat to ensure that the Guidelines are well incorporated into the website.
	+ SB: TEI and markup is “agnostic about its own output”: providing multiple different views of the Guidelines would be a way to express this agnosticism. JJ noted in the chat that there are easier ways to demonstrate that TEI is output\-agnostic.
	+ MT: The idea of ODD processing model was motivated by difficulty of maintaining Stylesheets. Council would need to decide what’s best to maintain in the long term.
		- PS: Council will need a dedicated session to discuss how the ODD model replaces specific parts of the Stylesheets.
	+ HBS: We need a dedicated working group with this initiative to help Guidelines better support i18n.
	+ Next steps:
		- Move the [repo](https://github.com/eeditiones/tei-guidelines) to TEI organization.
		- Council reviews <https://guidelines.teipublisher.com/> and files bug reports \& feature requests as needed.
		- Funding request to Board at meeting next Thursday 15 Dec 23\.
			* MS reminds that we need to request from the designer a full collection of material (design in a vector format that can be later adjusted, including fonts used etc.)
			* MT: to ask for a quote we should limit the scope to the kind of “icon” logo that can be used in a narrow website header or favicon and have the expanded “Text Encoding Initiative” as a neighboring text with fonts suggested.
		- We do need to discuss the TEI website in general and how it relates to the new design for Guidelines documentation. **Action on JJ** to work on this in January 2023\.


Internationalization
--------------------


* Roma
	+ RV reports he is at work on this, e.g. replacing hard\-coded strings with lookups.
	+ Lou Burnard has already provided French translations.
	+ After next few weeks RV will need to start thinking about methods for collecting translations.
* Interface of SpecTranslator
	+ HC: complete translations for Spanish, but no other languages.
	+ **Action on HC** to prepare instructions, and to write up a call for more participation from folks contributing other languages.


Ling SIG — Council liaison
--------------------------


* Meeting between MT, Piotr Banski, HBS, \& PS
* It was mostly a get\-to\-know each other event and discussion of how to bring the Ling SIG community together.
* Another meeting planned for mid\-Jan 2023\.
* Nothing specific to report, though.


Status of mailing lists
-----------------------


* We need to figure out how many of the 17 mailing lists from Brown we want to transfer to HumaNum.
* HC: Decide on which should be retired first.
* **Action on SB** to find inventory of Brown listservs and send them to Council list by **2022\-12\-16\.**
* **Action on MS** to ask Laurent Romary:
	+ With whom do we need to communicate at HumaNum?
	+ Can we move 5–8 mailing lists to HumaNum?
	+ Loop EBB on messages so she can keep rolling with this in January 2023\.


Documentation
-------------


* MS suggests we convene a subgroup.
* JJ, HC, and MS volunteer for the subgroup.
* Deal with TEI Wiki.
* Subgroup will meet after Christmas (i.e., after Jan. 11\). **Action on MS** to organize a meeting by **2022\-12\-31**.


Status [\#2049](https://github.com/TEIC/TEI/issues/2049)
--------------------------------------------------------


* SB removed the deprecation in branch sydb\_2049\_on\_altIdent\_reduex, but not on dev. Given that the conversation never was resolved and petered out, SB chose **proposal one** and implemented it. Thus [PR](https://github.com/TEIC/TEI/pull/2334) is waiting for review from one of EBB, MH, HC, JC, NC, and then (presuming thumbs up) SS can pull.
* Next steps: **Action on HBS** to test it, and if it’s passing, **action on SS** to merge it if HBS finds all is well.


ATOP
----


* Request that people pay attention to tickets with [atop label](https://github.com/TEIC/TEI/labels/atop). While most are not actually blocking progress, resolution would speed things up.
* MS suggests to add Council Responsibility label to these tickets.


CMC
---


* PS will continue to work on CMC.
* SB reports various problems have come up delaying meetings, but still pushing forward.
* Next meeting is scheduled for next week.


Goodbye Peter and thank you! 😟❤️
--------------------------------


Handing over the chair to Elisa  🪑
----------------------------------


* EBB wonders why we can’t see Board meeting dates on TEI\-C Google Calendar?
* MS: because they were not added to the calendar – fixed.


Next Stylesheets
----------------


* Scheduled for 29 December? HBS might suggest moving to January.
