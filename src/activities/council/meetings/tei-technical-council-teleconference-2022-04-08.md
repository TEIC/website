---
title: "TEI Technical Council Teleconference, 2022-04-08"
date: 2022-04-08
---
# TEI Technical Council Teleconference, 2022-04-08
**Meeting Times:**


* 7am PDT / 10am EDT / 4pm CEST
* Started:     14:06Z    Ended:    15:36Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB) (left at 15:34Z)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS, Chair)
* Sabine Seifert (SS)
* Peter Stadler (PS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Elli Bleeker (EB)


Meeting minutes from virtual F2F ([April](https://tei-c.org/activities/council/meetings/tei-technical-council-short-vf2f-meeting-online-1-2-april-2021/))
F2F meeting in Newcastle
------------------------


* James Cummings will check dates and room bookings. There is a chance we’d have to be in a different room in an adjacent building on the weekend.


Issues to discuss for the release
---------------------------------


* [\#2253](https://github.com/TEIC/TEI/pull/2253) List ref issue 2209
	+ RV will review the issue and merge the pull request.
* [\#2204](https://github.com/TEIC/TEI/pull/2204) Address [\#2185](https://github.com/TEIC/TEI/issues/2185) by restricting anyURI to not have spaces
	+ Confirm with SB that PR is ready to merge.
	+ SB: Seems to be ready to me. 2 reviewers have said it’s OK.
* \#[2213](https://github.com/TEIC/TEI/issues/2213): att.datable.custom is under\-documented
	+ moved to 4\.5\.0 milestone
* [\#2110](https://github.com/TEIC/TEI/issues/2110) Multiple ruby streams in the same orientation
	+ the anchors should be removed in the parallel approach; implement the nested example as suggested by Kiyonori Nagasaki as an alternative approach.
* [\#2070](https://github.com/TEIC/TEI/issues/2070) Make file points at non\-existent files
	+ Brief discussion yields desire to try to fix processing (maybe for this release) and corrigible errors in release notes; and perhaps raise a ticket for whether or not we actually want to re\-generate release notes every build.
* Guidelines milestone 4\.4\.0: [https://github.com/TEIC/TEI/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Guidelines\+4\.4\.0%22](https://github.com/TEIC/TEI/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Guidelines+4.4.0%22)
* Stylesheets milestone 7\.53\.0: [https://github.com/TEIC/Stylesheets/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Release\+7\.53\.0%22](https://github.com/TEIC/Stylesheets/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Release+7.53.0%22)


New section on TEI website for “How Tos”
----------------------------------------


* JJ will come up with a proposal in the next meeting.


Issues from previous SVF2F meeting
----------------------------------


Lengthy test of adding namespaced attributes in response to [\#2069](https://github.com/TEIC/TEI/pull/2069) and [\#237 comment](https://github.com/TEIC/Stylesheets/issues/237#issuecomment-285476102). **Action** on **SB** by 2022\-04\-07: attach test ODD to ticket. We need to look at this with the full group.
Guidelines Pull requests:
-------------------------




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| [\#1996](https://github.com/TEIC/TEI/pull/1996) | A | [align teidata.version with Semantic Versioning Specification, closes \#1993](https://github.com/TEIC/TEI/pull/1996) | NA subgroup: we (Council) need to poke PS. For the 2nd bullet point we think this should be a “soft” requirement: Just recommend that @version matches; don’t actually validate it. 2022\-04\-08: Add language to indicate that for the TEI Guidelines we’re inspired by the semantic versioning conventions but we’re applying our own TEI conventions to it (not following the custom for identifying “major” / “minor”.) |
| [\#2069](https://github.com/TEIC/TEI/pull/2069) | A | [Warn if an attDef with a non\-colonized @ident has a @ns attribute](https://github.com/TEIC/TEI/pull/2069) | NA subgroup suggests a solution involving @ident and @altIdent when we specify the @ns, that solves the problem (we think) without changes required to TEI/Stylesheets. SB uploaded a sample ODD file. 2022\-04\-08: Council decided to reject PR. |
| [\#2143](https://github.com/TEIC/TEI/pull/2143) | A | [new langKnown example \+ bib ref](https://github.com/TEIC/TEI/pull/2143) | NA subgroup: Connected to ticket [\#2139](https://github.com/TEIC/TEI/issues/2139) which needs discussion. Check on \#2143 is running; it will take 6 hours. We should ask Stuart Yeates to update his branch with changes from our dev, and make the small change requested. If he doesn’t respond we should recheck this in from a new branch we make. 2022\-04\-08: HBS will implement it as soon as she finished work on the bibliography. |
| [\#2156](https://github.com/TEIC/TEI/pull/2156) | A | [improve prose, constrain value of global source\= attr](https://github.com/TEIC/TEI/pull/2156) | NA subgroup discovers that sch:let is not permitted as a child of \<constraint\>, and that is the reason tests are failing. We think this is very strange, especially because our schema says it’s allowed. 2022\-04\-08: Council realized the build error problem is due to the positioning of the sch:let in the \<constraintSpec\>. SB will fix this. |
| \#2188 | B | [Fix \#2187, I hope](https://github.com/TEIC/TEI/pull/2188) | E subgroup: Left message in the PR regarding the failing of the test. 2022\-04\-08: Council decides for \<contraintSpec schema\=”schematron” ident\=”blort” mode\=”delete” /\> |
| \#2185 | B | [Address \#2185 by restricting anyURI to not have spaces](https://github.com/TEIC/TEI/pull/2204) | E subgroup: address in the afternoon session 2022\-04\-08: Action on HC to merge PR |


 