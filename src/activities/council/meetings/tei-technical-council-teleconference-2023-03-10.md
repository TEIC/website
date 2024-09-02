---
layout: page.njk
title: "TEI Technical Council Teleconference, 2023-03-10"
---
# TEI Technical Council Teleconference, 2023-03-10
### **Meeting times**


* 6:30am PST / 9:30am EST / 2:30pm UTC / 3:30pm CET
* Started: \~14:36Z Ended: \~16:06Z


### Present:


* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EBB, Chair)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS, at 15:00Z)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


### Apologies/Not Present:


* Elli Bleeker (EB)
* Helena Bermúdez Sabel (HBS)
* Patricia O'Connor (TOC)


Meeting minutes previous month ([February 2023](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2023-02-10/))
Spring F2F meeting
------------------


* May 7–9 at University of Guelph: working at [THINCLab](https://www.uoguelph.ca/arts/dhguelph/thinc) [(McLaughlin Library)](https://goo.gl/maps/wyf6RJ7grWwdAncMA)
* Travel discussion
	+ [LINCS project conference](https://lincsproject.ca/events/making-links-2023/)
	+ [DH@Guelph workshops](https://www.uoguelph.ca/arts/dhguelph/summer2023) (May 9–12\): adjusted workshop model
	+ See details sent to TEI\-Council mailing list on 2023\-02\-19\.
		- Updates to be sent via Slack and TEI\-Council mailing list shortly!
	+ [Travel Reimbursement form](https://tei-c.org/wp-content/uploads/2022/09/TEI_travel_form.pdf)
	+ **Action on EBB** to arrange a shared document for travel arrangements by **2023\-03\-17**.


Fall F2F meeting
----------------


* Timing considerations
	+ TEI/MEI Conference is Mon 04 Sep to Fri 08 September at Paderborn (see [save the date notice](https://www.uni-paderborn.de/forschung/forschung-im-profil/digital-humanities/nachricht/save-the-date-joint-tei-and-mei-conference-2023)):
	+ Best if Council meets before the conference begins
	+ Mon 04 Sep is Labour Day in US \& Canada
	+ Workshops: Mon 04 Sep and Tue 05 Sep
		- Will be held in a different part of town than the main conference
* Review of responses to Slack poll for Council F2F meeting dates.
* **Council decision: Sun 03 (morning)–Tue 05 (midday) September**
	+ **Action on EBB** to arrange a shared document for travel arrangements by **2023\-04\-10**.
	+ Recommendation for travel to Paderborn—try train transport from a larger hub.


TEI/MEC Conference planning
---------------------------


* RV is committee chair, puts together program committee
* [CFP](https://teimec2023.uni-paderborn.de/cfp.html) (proposals due April 16\)
* Using ConfTool for submissions
	+ Request to provide option for people's titles, including non\-specific, ie. Mx
	+ No GatherTown event (not well attended last time), but some other virtual support for sharing posters.
* **Action on Council:** Help spread the word: RV explains that due to this being a joint event, there's some confusion over whether this is the actual TEI annual conference. Therefore any further communications should make it very clear that it is.


Next release: April 2023
------------------------


* Release techs: JT, HC, SB
* Release dates: **Planning on Tue 04 Apr** (perhaps start on Mon 03 April; either way release techs should meet the week before)
* **Refrigerate on Thu 23 March**
* **Freeze on Thu 30 March.**


Updates from TEI Board
----------------------


* TEI identity guide for logo redesign: Write in your suggestions by March 15 on shared Google Doc from the Board.
* Communications Officer update: \~5 applicants (yay!)


Progress on Rendering “Attributes” section of tagdocs
-----------------------------------------------------


* (Background)  [Stylesheets \#592](https://github.com/TEIC/Stylesheets/issues/592)
* Work proceeding on this branch: <https://github.com/TEIC/Stylesheets/tree/stylesheets_group_on_592>
* Progress from last Stylesheets meeting: managed to create semantic list elements to hold the att information
* to be continued.


TCW for TEI GitHub Webhooks and Secrets (HC and JT)
---------------------------------------------------


* Context: See [Stylesheets PR \#588](https://github.com/TEIC/Stylesheets/pull/588): Tests fail due to failed Slack webhook action on external PRs.
* [Stylesheets ticket \#594](https://github.com/TEIC/Stylesheets/issues/594)
* JT's [initial audit of secrets and webhooks in the TEIC GitHub org](https://docs.google.com/document/d/1X8l4urOTaKLcZhEBce7pdSNezbv44SnKnw5dvzIyhy4/edit):
	+ Document is currently in JT’s Google Drive—we should move it to the TEIC Google Drive.
	+ Are we using waffle, Travis? These appear to be outdated.
	+ Status of DockerHub (using Peter Stadler's credentials)
	+ Discussion: following JT's query we realized we should update members and especially owners of the TEIC organization:
		- During meeting: updated the owners, added JT to help with webhooks issue, removed Sebastian Rahtz from the owners group and as a memento kept his user as a member, etc.
		- RV: Council membership should be able to write to the repo, but we should limit the direct write access to modifying the Guidelines (this is beyond simple membership\-\-determine who has write access).
		- Council may work on this in off hours of a F2F.


Another TEI ODD Processor (ATOP)
--------------------------------


* Ongoing request that Council pay attention to tickets with [atop label](https://github.com/TEIC/TEI/labels/atop). While most are not actually blocking progress, resolution would speed things up.
	+ [\#2306](https://github.com/TEIC/TEI/issues/2306)  — SB: Not surprisingly, this is more nuanced than we thought. See comment of 2023\-03\-09 on ticket.
	+ [\#2330](https://github.com/TEIC/TEI/issues/2330) — Green \+ Yellow after February Council discussion and [ticket update](https://github.com/TEIC/TEI/issues/2330#issuecomment-1426000839)
	+ [\#2381](https://github.com/TEIC/TEI/issues/2381) — Council decides:
		- GREEN
		- Add a warning on \<content\> tagdoc page
		- Add a warning In release notes—indicate this might break something: use a source\= attribute to point to the version you need.


RomaJS/Roma Beta Update
-----------------------


* Planned to be released before the TEI April release
* Still plan to release RomaJS as the new Roma with next release as v 1\.0\.0 and out of beta
	+ will have German, Italian, Spanish, French translations ready (Spanish translation is still in the works but with a good chance to be completed).
	+ Kiyonori's students working on Japanese translations (but not very likely to be completed in time for the release)
	+ some bugs to squash yet: if contacted by RV about a bug, please respond before the TEI refridge date.
* Old Roma would stay under a different domain name (possible alternative domain names: Roma Classic, Roma Antiqua)
* **Action HC and RV** to work on DNS switch. (It should happen sooner, but can be announced with the next release.)
* **Action on EBB** to write the announcement to stop using old Roma and start on the new Roma when its released


TEI Specs Internationalization Update
-------------------------------------


* Interface of SpecTranslator
	+ HC: complete translations for Spanish, but no other languages
* **Action on HC** to prepare instructions / call for more from other languages. HC has launched a README at <https://github.com/TEIC/spec_translator> with instructions to edit the TEI file in the I18N folder for the spec translator.
