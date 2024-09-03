---
title: "TEI Technical Council Teleconference, 2021-12-09"
date: 2021-12-09
---
# TEI Technical Council Teleconference, 2021-12-09
**Meeting times:** 


* 10:30am–12:00pm PDT, 1:30pm–3:00pm EDT, 6:30pm–8:00pm BST, 7:30pm–9:00pm CEST
* Started:     18:33Z    Ended:    20:07Z


**Present:**
* Syd Bauman (SB)
* Helena Bermudez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Peter Stadler (PS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Elli Bleeker (EB)
* Jessica Lu (JL)


 
New meeting times for 2022
--------------------------


* MS to send out a poll, either [Doodle](https://doodle.com/en/) or [When2Meeet](https://www.when2meet.com/)


VSF2F meeting 2022
------------------


* Consensus is to plan VSF2F in 2022\-03, and real F2F at the TEI conference in 2022\-09\.


Ticket Triage, minute review, and P5 update assignment
------------------------------------------------------


* Table for 2022 is at the end of this document, please add your initials.


Next Stylesheets meeting
------------------------


* Thu 16 Dec (usual time: 18:30Z)


Stylesheets task force
----------------------


* We need a formal charge. **Action on EBB, JJ, HBS, SS** will work on this by January meeting. The charge can be short, just a few paragraphs.


Council chair elections
-----------------------


* Nominations:
	+ SB nominated MS, JJ seconds; MS elected chair for calendar 2022\.
	+ Plan (or at least, vague idea) is for JJ to become chair for calendar 2023\.


Whitespace in URIs
------------------


* See [PR](https://github.com/TEIC/TEI/pull/2204#issuecomment-981709846) for current state of restricting anyURI to not have spaces. Branch: [sydb\_issue\-2185\_URI\_spaces.](https://github.com/TEIC/TEI/tree/sydb_issue-2185_URI_spaces)
* What is the proper path forward?
* SB \& MH have implemented solution 1\.i. Do we need to discuss percent\-encoding (i.e., solution 1\.iii), and if so, where?
	+ Consensus seems to be yes, we do need to discuss it.
	+ Suggested places are in the [teidata.pointer](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-teidata.pointer.html) tagdoc and somewhere in module [16 Linking, Segmentation, and Alignment](https://tei-c.org/release/doc/tei-p5-doc/en/html/SA.html). **Action on HC** by **2022\-01\-28** to determine where, exactly, and write first draft of prose.
* Does anyone know what an XPointer processor does if it finds a space or a “%20” in the fragment identifier?
* This probably needs a follow up ticket for the Stylesheets to check our handling of attributes that use teidata.pointer: check whether the Stylesheets properly handle whitespace as separator (and do proper URL decoding where needed?)


TCW32
-----


* Open issues:
	+ 1 more example to write (SB)
	+ Testing examples \#10 and \#15 (EBB completed \#10, will complete \#15 in Dec)
	+ Testing examples \#17, \#18, \#19 (now MS \#17, and HBS \#18 and \#19\)
	+ Proofreading prose (JJ is still working on it)
	+ MS \& SB need to talk about errors example \#09 (and \#08\) (SB \& MS)
	+ Checking over the entire document (JC)
	+ Work on \#11 and new, similar but more thorough, example (SB \& RV)


Thank yous
----------


* Thank you, Jessica and Meaghan for your service on the TEI Council!


 
Issues from SVF2F meeting
-------------------------




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#2045 | A | [calendar\= should not be in att.datable](https://github.com/TEIC/TEI/issues/2045) | Subgroup suggests Council review the [list](https://github.com/TEIC/TEI/issues/2045#issuecomment-731271583) of elements where @calendar is appropriate, and decide whether Duncan’s objections are reasonable, and whether if we proceed, there should be a deprecation period. **2021\-12\-09**: Discussion: RV will add a comment on the ticket on the issue of sloppy encoding to help progress this. RV → done |
| \#2106 | B | [broken links to non\-English bibliography entries from examples\-\* pages](https://github.com/TEIC/TEI/issues/2106) | Subgroup proposal: merge \<listBibl\> (with different xml:lang) into one and move those @xml:lang one level down to the \<bibl\>. Keep @xml:lang for historical reasons or nuke them? **2021\-12\-09**: HBS will look to see if we have any examples of a bibliographic resource expressed in multiple languages, and if we do, to try to merge them into one entry. Move the @xml:lang into the freshly merged \<listBibl\> then. |


 