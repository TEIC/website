---
title: "TEI Technical Council Teleconference, 2022-03-11"
date: 2022-03-11
---
# TEI Technical Council Teleconference, 2022-03-11
**Meeting Times:**


* 7am PST / 10am EST / 3pm BST / 4pm CEST
* Started:     15:04Z    Ended:    17:12Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Elli Bleeker (EB)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS, Chair)
* Peter Stadler (PS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Sabine Seifert (SS)


Meeting minutes previous month ([February](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2022-02-11/))
Next release
------------


* Release technicians: JJ, HC, RV
* Refrigeration on Sunday, April 10\.
* Freeze on Saturday, April 17\.
* Start release on Monday, April 19\.


Stylesheets meeting times
-------------------------


* Friday March 25, 8am PST / 11am EST / 3pm BST / 4pm CET
* Daylight Saving Time switch in Europe
* Action on MS: add meeting times to Google calendar


SVF2F meeting 2022
------------------


* **April 1 and 2**


Migration of mailing lists
--------------------------


* Migrate to something controlled by TEI on the TEI Huma\-Num server (something we have always wanted to do).
* Huma\-Num runs mailing lists on Sympa; ADHO on mailman, Brown on LISTSERV.
* Laurent Romary checked with Huma\-Num and they actually lack competence/capacity on the subject at present (they have opened a position to hire someone on the mailing infrastructure and hope to get better in the future). If the TEI Board is ready to pay, we would need to find a freelancer on the issue.
* SB can provide the needed expertise for LISTSERV, but not for Sympa.


Council on TEI website
----------------------


* There is incorrect information on the pages that list Council members.
* SB sent an email to the webmaster some time ago, but he got no response.
* MS asserts she last updated this page, so **Action** on MS by 2022\-03\-18 to fix it **– Done**.
* No one knows who, if anyone, receives the [webmaster@tei\-c.org](mailto:webmaster@tei-c.org) e\-mail, but HC thinks it might be him.
* This page comes up in a Google search and can't be found: [https://tei\-c.org/tei\-technical\-council\-2/](https://tei-c.org/tei-technical-council-2/)
* Search engines also find dev.tei\-c.org (which they should not — boot to Infrastructure group), but its page on Council has correct dates.
* This page lists the Council terms correctly: [https://dev.tei\-c.org/activities/Council/](https://dev.tei-c.org/activities/Council/)
* **Action on MS:** Check if this Guidelines page listing Council members is updated for next release: [https://tei\-c.org/release/doc/tei\-p5\-doc/en/html/FM1\.html](https://tei-c.org/release/doc/tei-p5-doc/en/html/FM1.html) (EBB added ticket <https://github.com/TEIC/TEI/issues/2244>).


TCW32
-----


* [https://bauman.zapto.org/\~syd/temp/4TEICouncil/tcw32\.html](https://bauman.zapto.org/~syd/temp/4TEICouncil/tcw32.html)
* JJ has some minor things to correct.
* **Action on SB** by 2022\-03\-18 to poke James Cummings to review the document.
* Publish end of March (was February)


Stylesheets task force
----------------------


* New Slack channel \#atop
* Charge: [https://tei\-c.org/activities/workgroups/tei\-stylesheets\-task\-force\-charge/](https://tei-c.org/activities/workgroups/tei-stylesheets-task-force-charge/)
* ODD Processor and documentation generation (see discussion on Slack channel \#general). MT gives a [presentation](https://tei-c.slack.com/files/U60GTJME1/F036PV4E8RH/tei_guidelines.pdf) on a version of the TEI Guidelines generated with TEI Publisher.
* **Action on MS** to create a poll for Council to approve the Task Force document. Changes possible to Task Force document through Friday, March 18\. Voting begins March 18 to close on Monday March 21\.


Issues
------


* Opening up the content model of \<listRef\> (EBB, EB)
* [\#2209](https://github.com/TEIC/TEI/issues/2209) and [\#1667](https://github.com/TEIC/TEI/issues/1667)
* SB recommends we finish Stylesheets [\#333](https://github.com/TEIC/Stylesheets/issues/333) (fully accommodate tagdocs use of \<ref\> in \<listref\>).
* After this is resolved, move on to add \<listRef\> to model.ptrLike (issue \#[1667](https://github.com/TEIC/TEI/issues/1667))
	+ Beware: this will permit nesting of \<listRef\>
	+ Nesting \<listRef\>s may pose problems for tagdocs processing, so Council decides to constrain the tagdocs use of \<listRef\> to prevent nesting.
	+ (Note: multiple sibling \<listRef\>s are permitted in tagdocs)
* Reorganization and homogenization of the bibliography (original issue: [\#2106](https://github.com/TEIC/TEI/issues/2106))
* Current bibliography in [English](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/BIB.html), [French](https://www.tei-c.org/release/doc/tei-p5-doc/fr/html/BIB.html), and [Taiwanese Mandarin](https://www.tei-c.org/release/doc/tei-p5-doc/zh-TW/html/BIB.html).


 