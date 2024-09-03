---
title: "TEI Technical Council Online \"SVF2F\", 2021-01-29 / 01-30"
date: 2012-01-29
---
# TEI Technical Council Online \"SVF2F\", 2021-01-29 / 01-30
**Meeting Times**




| **Friday, Jan 29** | 12:00–15:00 PST 15:00–18:00 EST | North American break\-outs |
| --- | --- | --- |
| **Saturday, Jan 30** | 10:00–13:00 CET | European break\-outs |
| **Saturday, Jan 30** | 06:00–10:00 PST 09:00–13:00 EST 15:00–19:00 CET | Council meeting |


**Attendance**


| (all times UTC) | Fri 29 Jan, 20:00–23:00 | Sat 30 Jan, 10:00–13:00 | Sat 30 Jan, 14:00–18:00 |
| --- | --- | --- | --- |
| Syd Bauman | ✓ | NA | ✓ |
| Helena Bermúdez Sabel | NA | ✓ | ✓ |
| Meaghan Brown | excused | NA | ✓ |
| Elisa Beshe­\- ro\-Bondar | ✓ | NA | ✓ |
| Hugh Cayless | ✓ | NA | ✓ |
| Nicholas Cole | NA | ✓ | ✓ |
| Janelle Jenstad | ✓ | NA | ✓ |
| Jessica H. Lu | ✓ | NA | ✓ |
| Martina Scholger | NA | ✓ | ✓ |
| Peter Stadler | NA | ✓ | excused |
| Magdalena Turska | NA | ✓ | ✓ |
| Raff Viglianti | ✓ | NA | ✓ |


 
\> Friday, Jan 29 (North American break\-outs)
----------------------------------------------


Review of [pull requests](#pr)
------------------------------


Discussion of [issues with milestone “Guidelines 4\.2\.0” which need discussion](#nd)
-------------------------------------------------------------------------------------


Milestones
----------


* Milestone 4\.2\.0: [https://github.com/TEIC/TEI/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Guidelines\+4\.2\.0%22](https://github.com/TEIC/TEI/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Guidelines+4.2.0%22)
* Milestone Stylesheets: <https://github.com/TEIC/Stylesheets/milestone/9>


\> Saturday, Jan 30 (European break\-outs)
------------------------------------------


Continue with pull requests
---------------------------


Continue with Guidelines issues 4\.2\.0
---------------------------------------


\> Saturday, Jan 30 (Full Council)
----------------------------------


Ruby glosses
------------


* Invited guests: Kiyonori Nagasaki, Satoru Nakamura, Kazuhiro Okada, and Martin Holmes
* Original issue: [encoding of ruby glosses](https://github.com/TEIC/TEI/issues/2054)
* Proposal from Martin Holmes: [https://hcmc.uvic.ca/\~mholmes/rubyForTEI/ruby.html](https://hcmc.uvic.ca/~mholmes/rubyForTEI/ruby.html)
	+ Seeking an easy, mechanically processible generic way to specify default values for place of \<rt\> (there's a feature request for this: [\#2090](https://github.com/TEIC/TEI/issues/2090))
* Current status of the implementation
	+ Specifications for \<ruby\>, \<rb\>, \<rt\> — done
	+ @place on \<ruby\> and \<rt\>, values ‘left’, ‘right’  — done for \<rt\>
	+ \<rt\>: @target OR @from and @to OR none — done
	+ nested \<ruby\> elements — done
	+ \<ruby\> in \<w\> (add \<ruby\> to macro.phrase.seg) — open (this will be implemented with a later release).
	+ @hand on \<rt\> — done
	+ \<rb\>, \<rt\> in att.typed — done, but no examples of usage yet
	+ Guidelines prose — decide where this should go. Options include:
		- Core (around notes)
		- Linking, Segmentation, and Alignment
		- Simple Analytic Mechanisms (except this is usually analysis applied by the editing team, but [see example](https://tei-c.org/release/doc/tei-p5-doc/en/html/AI.html#AIPC) of \<pc\> with manuscript image)
		- Writing Modes
		- Primary Sources
		- A new chapter for East Asian texts? Or not, because this may be useful in many contexts
		- MH suggests taking some time to identify areas. MB suggests we can have a poll on the ticket based on this to get everyone’s input: Indicate chapter and section range for each option (and whether just reference or full location). **Action on SB and MH** to set this up. Responses to be due Tue 02\-02\.
		- JL: call for more contextual introduction of ruby annotations from the East Asian community members involved. Ask Naoki Kokaze (via Kiyonori Nagasaki) for help.
		- Stylesheets: try rendering ruby annotations as HTML 5\.
* MH will build the Guidelines on UVic Jenkins; ask PS to build them on Paderborn Jenkins too.


February Release
----------------


* Ready to rock \& roll: we have release techs and dates.
* **Action on MS** (with NC): start release notes document **by** 2021\-02\-05\.


Next VF2F meeting
-----------------


* Short, in about two months. MS to set up a doodle poll.
* We will continue to have monthly meetings as scheduled.


General discussion on organization of Council meetings and Stylesheet meetings
------------------------------------------------------------------------------


* SB proposes to change the Stylesheets meeting to a “tactical technical work meeting” about working on tickets generally (including Stylesheets).
* Maybe we should still focus on Stylesheets?
* “Work shadowing" is helpful for new, less experienced Council members.
* Something that helps with less face\-to\-face work together.
* General agreement to defer further discussion and any changes until after our upcoming “short VF2F” in \~early February.


Elections
---------


* Council should put forth a representative from the TEI Council to be on the committee.
* JJ volunteers


ODD processing and custom attributes (of existing names)
--------------------------------------------------------


* <https://github.com/TEIC/TEI/pull/2069>; <https://github.com/TEIC/Stylesheets/issues/237>
* Does this need further discussion?
	+ Not at the moment, but there will be more discussion needed in future.


TEI Communications Officer
--------------------------


* Position has had several applications. Does anyone from the Council or Infrastructure group want to review the applications?
* Responsibilities of Communications officer (paid position): update wordpress, update Council and Board on website issues, send tweets, monitor twitter, and administer the mailing list.


Pull requests (with Guidelines 4\.2\.0 milestone)
-------------------------------------------------


Group A: SB, EB, HC, JJ, JL, RV
Group B: MS, MT, HB, NC, PS




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#2088 | A | [Added reference to macro to en and fr descriptions of specDesc for \#2061](https://github.com/TEIC/TEI/pull/2088) | RV is adding an Italian translation and will merge and close. — DONE JJ will add a French version of the remark, and then we can merge. **Action on MS, SB, or HC to pull it in after the French translation comes in. — DONE** |
| \#2081 | A | [not completley correct encoding declarations](https://github.com/TEIC/TEI/pull/2081) | Merged. **STATUS?** Both PR \& ticket closed. (We may want to revisit some of those that were not fixed, particularly those files that have non\-ASCII characters.) |
| \#2079 | A | [For Stylesheets 471:](https://github.com/TEIC/TEI/pull/2079) | Merged. Stylesheets change done also. Stylesheets [\#471](https://github.com/TEIC/TEI/pull/2079) merged too. |
| \#2065 | A | [require English glosses per 2037](https://github.com/TEIC/TEI/pull/2065) | HC is cleaning up a conflicted bit of code, after which we'll merge this. Merged. CLOSE? |
| \#2041 | A | [deprecation of locations of schemaSpec](https://github.com/TEIC/TEI/pull/2041) | Pending approval from MS regarding change requested; group thinks this is ready to merge. Make ticket to update TCW 24; need to prescribe consistent wording (start with present\-tense verb; period/no period) — DONE **Requested review** |
| \#2032 | A | [remove altIdent from some silly places](https://github.com/TEIC/TEI/pull/2032) | SB resolved conflicts. Awaiting build checks and will merge. Merged. |
| \#1996 | A | [align \`teidata.version\` with Semantic Versioning Specification, closes \#1993](https://github.com/TEIC/TEI/pull/1996) | VF2F subgroup thinks that it is appropriate to say that a TEI version number follows the Semantic Versioning Specification. Check with PS to address SB's concerns. **Action on PS** |
| \#1983 | A | [Citation Structures](https://github.com/TEIC/TEI/pull/1983) | Adding SB as a reviewer with approval (hopefully) before 2/12 refrigeration. Other reviews are also outstanding. HC plans to get this into the February release. **Action on SB, MS, PS to review, ask MS to pull in if this gets close to release.** |
| \#1958 | A | [Adding where to new att.locatable to address \#1769](https://github.com/TEIC/TEI/pull/1958) | Subgroup decides to close this PR, and start afresh on more expressive attributes to do with stage blocking and movement, possibly an att.blocking instead of att.locatable and \*different\* attributes than \`@where.\`**Closed** |
| \#1920 | A | [WIP: draft implementation of noteGrp](https://github.com/TEIC/TEI/pull/1920) | Need to fix att.anchoring as well — DONE American group made a few small edits. If MT can change the @source from \#UND (also HC has a comment asking about the example) then the European group can merge. MT: ready to go, changes made. **Merged and closed** |
|  | B | [allow object in a witness; close \#1868](https://github.com/TEIC/TEI/pull/2092) | Merged **and closed** |
|  | B | [add certainty to att.typed; close \#1934](https://github.com/TEIC/TEI/pull/2091) | merged and closed |
|  | B | [allow name in place; close \#1484](https://github.com/TEIC/TEI/pull/2094) <https://github.com/TEIC/TEI/pull/2096> | MT will add \<name\> to \<place\> (directly) MT: done, ready to go **Merged and closed** |


 
Needs discussion\+Go or status pending (with Guidelines 4\.2\.0 milestone)
--------------------------------------------------------------------------


Group A: SB, EB, HC, JJ, JL, RV
Group B: MS, MT, HB, NC, PS




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| 1823 | A, B | [teiCorpus: make guidelines and data model consistent](https://github.com/TEIC/TEI/issues/1823) | PS asked if we agree with last comment: [https://github.com/TEIC/TEI/issues/1823\#issue comment\-667130393](https://github.com/TEIC/TEI/issues/1823#issuecomment-667130393) Add to PS's comments something more about \<text\>: For historical reasons, \<text\> and \<sourceDoc\> are preserved as valid children of \<teiCorpus\> but their use is discouraged. **PS to change prose** |
| 1805 |  | [Suggestion for new uniHan element](https://github.com/TEIC/TEI/issues/1805) | We have once again failed to prod Duncan in time to get this work into the next release. We should gently remind him after the February release. |
| 1966 | B | [Inconsistency in character representation](https://github.com/TEIC/TEI/issues/1966) | Prod NC |
| 1981 | B | [att.declaring and att.declarable need constraints and better explanation](https://github.com/TEIC/TEI/issues/1981) | RV in progress |
| 2036 | B | [versionDate attribute needs more constraint](https://github.com/TEIC/TEI/issues/2036) | Looks good but maybe we should also move the class att.translatable to the tagdocs module to avoid confusion. **Needs discussion with full Council** |
| 2060 | B | [Prose in "Element and Attribute Descriptions" (TDphraseEA) refers to non\-existent \<ptr\> in example](https://github.com/TEIC/TEI/issues/2060) | Expand the example to incorporate the \<ptr\> element, make GREEN. |
| 2061 | B | [specDesc does not only point to element or class specification elements](https://github.com/TEIC/TEI/issues/2061) | Resolved with the first PR discussion (re PR [\#2088](https://github.com/TEIC/TEI/pull/2088)). Will close this ticket after JJ adds French translation of new remarks. |
| 2062 | B | [specDesc/@key should be required](https://github.com/TEIC/TEI/issues/2062) | Agreed to proceed without deprecation, mark GREEN. |
| 2066 | B | [promote “Dates and Times”](https://github.com/TEIC/TEI/issues/2066) | Agreed, mark GREEN. |
| 2067 | B | [\`@assertedValue\` of \`\<certainty\>\` should also accept pointers](https://github.com/TEIC/TEI/issues/2067) | Removed milestone 4\.2\.0 |
| 2070 | B | [Make file points at non\-existent files](https://github.com/TEIC/TEI/issues/2070) | Removed milestone 4\.2\.0 |
| 2078 | B | [problems with match\= (part of att.scoping)](https://github.com/TEIC/TEI/issues/2078) | VF2F asks EB to come up with a pull request, but we think it is not high priority for the upcoming release. * EB will make small change for next release in new branch: issue\-2078\. |


 