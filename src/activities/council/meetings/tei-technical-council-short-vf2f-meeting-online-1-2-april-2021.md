---
layout: page.njk
title: "TEI Technical Council Short VF2F Meeting, Online, 1–2 April 2022"
---
# TEI Technical Council Short VF2F Meeting, Online, 1–2 April 2022
**Meeting Times**




| **Friday, Apr 1** | 12:00–15:00 PDT 15:00–18:00 EDT | North American break\-outs |
| --- | --- | --- |
| **Saturday, Apr 2** | 10:00–13:00 CEST | European break\-outs |
|  | 06:00–10:00 PDT 09:00–13:00 EDT 15:00–19:00 CEST | Council meeting |


**Attendance**


|  | Fri, North American\-Group started @15:00 ended @ 18:15 | Sat, European Group started @10:00 ended @ 13:00 | Sat, Full Council started @14:06Z ended @17:29Z |
| --- | --- | --- | --- |
| Syd Bauman | present |  | present |
| Helena Bermúdez Sabel |  | present | present |
| Elisa Beshe­ro\-Bondar | present |  | present |
| Elli Bleeker |  | present | present |
| Hugh Cayless | excused |  | present |
| Janelle Jenstad | present |  | present |
| Martina Scholger |  | present | present |
| Sabine Seifert |  | present | present |
| Peter Stadler |  | present | excused |
| Magdalena Turska |  | present | present |
| Raff Viglianti | present |  | present |


 
Meeting minutes previous month ([March](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2022-03-11-1500z/))


\> Friday, April 1 (North American break\-outs)
-----------------------------------------------


Started with [pull request](#pull-requests)s from table below
-------------------------------------------------------------


Notes/Questions:
----------------


* Lengthy discussion about [\#2209](https://github.com/TEIC/TEI/issues/2209) (at request of EB).
* Lengthy test of adding namespaced attributes in response to [\#2069](https://github.com/TEIC/TEI/pull/2069) and [\#237 comment](https://github.com/TEIC/Stylesheets/issues/237#issuecomment-285476102). **Action** on **SB** by 2022\-04\-07: attach test ODD to ticket. We need to look at this with the full group.


\> Saturday, April 2 (European break\-outs)
-------------------------------------------


Continue with [pull requests](#pull-requests) and [issues from Guidelines’](#current-issues) repo
-------------------------------------------------------------------------------------------------


* Confirm with SB that <https://github.com/TEIC/TEI/pull/2204> is ready to merge.
* Discuss issues arising from the request to offer citation buttons / bookmarks: tension between human readable and significant citation, e.g. TEI Guidelines, Reference for element 'abbr', Example 3 vs using a generated example id, direct bookmark link; latest vs fixed version (permalink)


\> Saturday, April 2 (Full Council)
-----------------------------------


Next release
------------


* Release technicians: JJ, HC, RV
* Refrigerate Sunday, April 10\.
* Freeze on Saturday, April 17\.
* Start release on Monday, April 19\.
* What do we want to include in the next release?
	+ Guidelines milestone 4\.4: [https://github.com/TEIC/TEI/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Guidelines\+4\.4\.0%22](https://github.com/TEIC/TEI/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Guidelines+4.4.0%22)
	+ Stylesheets milestone 7\.53\.0: [https://github.com/TEIC/Stylesheets/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Release\+7\.53\.0%22](https://github.com/TEIC/Stylesheets/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Release+7.53.0%22)


Issues
------


* Issue \#[2189](https://github.com/TEIC/TEI/issues/2189): creating a \<gender\> element <https://github.com/TEIC/TEI/issues/2189>
	+ Is it possible to get this into the upcoming release? (probably no)
	+ Vanessa Hannesschläger's and Peter Andorfer’s 2017 paper at TEI on “[Sex in the TEI: The TEI 2016 gender check](https://hcmc.uvic.ca/tei2017/abstracts/t_100_hannesschlager_andorfer_gender.html)”:
	+ EBB, JJ, RV, HBS to schedule a calendar meeting to work on this and invite Council. **First week in May, mid\-week. Action EBB** to schedule.
	+ Call for example customizations that introduce \<gender\>, on TEI\-L, call for discussion.


* Issue \#[2213](https://github.com/TEIC/TEI/issues/2213): att.datable.custom is under\-documented
	+ Facts (pointed out on the ticket):
		1. There is nothing in the prose about @datingPoint;
		2. the only discussion, in the [att.datable.custom](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.datable.custom.html) tagdoc, is at least somewhat confusing (Does this attribute apply to *dates* or to *datable items*? If the latter, what is a datable item?);
		3. there are no examples.
	+ What we would like to put to the Council:
	+ We need an example or two to clarify the use of the @datingPoint attribute, which we believe would make its role more clear. Does the Council have any suggestions for examples?
	+ We would like to discuss the relationship to \<timeline\>?
	+ The @datingPoint is included in the att.datable.custom class and as a result the attribute is only mentioned in the context of the \<calendar\> element. However, we find that @datingPoint does not fit in the context of \<calendar\> and we’d like to discuss whether we should change the prose.
	+ Context: EB added @datingPoint to Guidelines chapter discussion of \<calendar\> in a local branch (issue\-2213\). But perhaps it should not be discussed with \<calendar\>. It needs a better context in the Guidelines.
		- Discussion: @datingPoint belongs maybe with Guidelines prose/examples on \<event\> or \<timeline\>.
		- HC: @when points to when you think it happened, and @datingPoint on the same element points to an event as reference point.
		- SB’s example:
			* After nine days I let the horse run free
			'Cause the desert had turned to sea
		- Should it be in the att.datable.custom spec? (Maybe not, because yes, too close to \<calendar\>.)


* +
* Issue [\#1856](https://github.com/TEIC/TEI/issues/1856) nested \<ab\>s
	+ Making model.abLike separate from model.pLike
	+ \<p\> would be a special instance of \<ab\>
	+ This will be a large enough change that we should treat it as a major release as in 5\.0\.0
	+ We are currently considering
		- **only** to allow \<ab\> inside \<ab\>;
		- not to allow \<ab\> inside \<p\>,
		- not to allow \<p\> inside \<ab\>.
	+ Analogy: \<gi\> is to \<seg\> as \<p\> is to \<ab\>
	+ EBB, HC, JJ, MS will schedule a separate meeting in late May. **Action** on **MS** by **2022\-04\-16**: set up meeting.
* Issue [2244](https://github.com/TEIC/TEI/issues/2244): Correct listing of Council history
	+ The file also contains some of the workgroups, but many that we can remember are not listed here.
	+ Should the only work groups listed be those that influenced the Guidelines?
	+ Or does any work group that did significant work (even if not accepted by Council) belong here for credit?
	+ What about the SIGs? Historically, we have not included them in the Guidelines. Should we do that: do they belong in FM1\-IntroductoryNote?
	+ Proposed criterion for inclusion in our acknowledgments: whether they have some influence on the *Guidelines*.
* Issue [\#2106](https://github.com/TEIC/TEI/issues/2106): Reorganization and homogenization of the bibliography
	+ Current bibliography in [English](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/BIB.html), [French](https://www.tei-c.org/release/doc/tei-p5-doc/fr/html/BIB.html), and [Taiwanese Mandarin](https://www.tei-c.org/release/doc/tei-p5-doc/zh-TW/html/BIB.html).
		- French and English are interleaved now.
	+ Entries for “no source” and “undetermined” would go at the bottom
	+ Merged version (work in progress): [https://github.com/TEIC/TEI/blob/issue\-2106/P5/Source/Guidelines/en/BIB\-Bibliography.xml](https://github.com/TEIC/TEI/blob/issue-2106/P5/Source/Guidelines/en/BIB-Bibliography.xml)
	+ Discussion/Suggestions
		- Pick a different style guide for the languages in which we publish the Guidelines?
		- Recommendation to interleave: Try Google Translate’s transliteration and interleave them all together (following Chicago, MLA, etc): universalizes the bibliography rather than changing it for every distinct language.
			* What words we alphabetize on will maybe need some discussion.
		- Ask Christian Wittern, Marcus Bingenhammer, or Charles Muller. Names and contact details in [Issue comment](https://github.com/TEIC/TEI/pull/2235#issuecomment-1058722535).
	+ Broken links are a far larger problem than the ordering of entries.


F2F meeting in Newcastle
------------------------


* Conference September 12–16 (workshops Mon 12 \& Tue 13\)
* Do we want to meet in person, and if so before or after the conference?
	+ RV, EBB, JJ prefer before (JJ *cannot* attend after)
	+ MT: Weekend before is not great.
	+ SB thinks before is slightly better
	+ **Action on MS by 2022\-04\-08** to ask James if rooms for Council meetings are available before conference, after conference, or both.
	+ Considering full day meetings on Sat 10 Sep, Sun 11 Sep, ½\-day Mon morning 12 Sep.
	+ Also considering meetings overlapping the workshops: Sun 11, Mon 12, Tue 13 (better for MT).


CMC revival
-----------


* Next meeting is scheduled for 2022\-04\-25\. Jessica Lu has been invited, but says she probably will not have the time to attend.


TCW 32
------


* As a technical council working paper, intended for ourselves.
* SB proposes that we seem to be too busy to work on this now, but he is eager to get it published. Thus he suggests he can publish it somewhere on Northeastern DSG website; If Council wants to review and improve it later we can move it to a published TEI document later.
* Discussion: Why not just publish it from TEI space now?
	+ It still needs proofreading and improvement of examples. This can still be done at a later stage.
	+ Publish it for a general audience along with:
		- Lou Burnard’s [ODD\-chaining tutorial](https://teic.github.io/TCW/howtoChain.html)
		- ODD customization info on the website (which needs to be updated)
		- JJ: New section on TEI website:
			* How should it be called?  “How Tos”, “Tutorials and Examples”?
			* Community members should also be able to post workshop materials somewhere (this needs further discussion).
			* Should we point to elsewhere, or archive them in our own space?
			* Is there a linkchecker for the TEI website?
			* Sections for internally developed resources as well as links to external resources.
			* i18n group is also thinking of introductory materials which should be linked from internationalized landing pages.
		- Where should we put TCW32 and Lou Burnard’s document on ODD chaining?
			* Under Support/Learn the TEI: [https://tei\-c.org/support/learn/](https://tei-c.org/support/learn/)
			* Reorganize the drop\-down submenu under support? Start the submenu with "Learn the TEI...", possibly retitle it? Submenu and subpages.
				+ Learn the TEI (also deal with its duplicate linkage from Guidelines: remove it)
				+ Advance Your Skills
			* **Action on JJ by 2022\-04\-07:** decide on this, share with Council at the next meeting on **Friday April 8**.


Languages in ODD chaining
-------------------------


* HBS, MH, and SB provided “three unresolved questions”: [https://wiki.tei\-c.org/index.php?title\=New\_ODD\_processing\#unresolved\_questions](https://wiki.tei-c.org/index.php?title=New_ODD_processing#unresolved_questions)
* Summary of the discussion:
	+ All transformations prior to the output of RNG or HTML at the end of the chain should preserve all language versions of \<gloss\>, \<desc\>, and \<remarks\>, even those which are technically obsolete per their @versionDate attributes.
	+ A final rendering process should use elements in the specified docLang, EVEN THOSE WHICH ARE OUTDATED, in preference to English, but should fall back to English where nothing is available in the target language.
	+ If the chain originates with P5, then English is special, because it’s the canonical language of the base schema. But I like PS’s suggestion that a language should be declared as canonical for a schema, and where no element exists in that language, an error could be raised.
	+ Council Discussion:
		- @targetLang (not being useful, XSLT processing isn’t supporting what it’s supposed to be for: to output tags in another language. XSLT only works on glosses in @targtLang). What we use for that is \<altIdent\> usually. But should @targetLang be supported and worked on? Council discussion: the *Guidelines* should not preclude the use of @targetLang, but we do not further process it.


Access to Slack
---------------


* David Maus agreed to join the Stylesheets Task Force.
* SB asked if it is okay to invite him to TEI areas of Slack.
* Not possible to restrict him to just the \#atop channel; he’d need to be in \#general first. Council thinks this is fine, no reason not to invite David and similar people to our Slack space. **Action on SB by 2022\-04\-03** to invite David Maus to Slack.


Oxygen issues
-------------


* Martin Holmes would like us to discuss: \<[https://github.com/TEIC/oxygen\-tei/issues/54](https://github.com/TEIC/oxygen-tei/issues/54)\> and\<<https://github.com/TEIC/TEI/issues/2251>\>
	+ We have been caught unawares by Oxygen updates. See [Martin’s email](https://lists.tei-c.org/pipermail/tei-council/2022-April/027092.html) of 2022\-04\-01\.
* <https://github.com/TEIC/TEI/issues/464>\- Need for some way to test the oxygen\-tei package before release
* EBB suggests that Council needs a tutorial from MH (or someone else — SB suggests perhaps Elli Mylonas would be reasonable)
	+ We have to think about this every time *we* do a release.
	+ We have to pay attention every time *oXygen* does a new release.
	+ So we need some knowledge transfer.
	+ Can we use the Stylesheets meeting time?
	+ **Action on HBS by 2022\-04\-15** to organize time with MH.


[Review issues from October meeting](#issues-october)
-----------------------------------------------------


Issues from the October meeting
-------------------------------


Issues from the October meeting discussed by group B (European Group: MS, PS, MT, HBS) but on which no final decision was by the plenary.


| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#2110 | B | [Ruby: Multiple ruby streams in the same orientation](https://github.com/TEIC/TEI/issues/2110) | 2021\-10: subgroup proposes to add those examples to the Guidelines but refrains from adding “right\-right” or similar to suggested values of @place. If one is interested into detailing topographic information, use @facs on \<rt\>. Or, when not wanting to rely on a document sequence, use @n in addition 2022\-04\-02: Council discussion: Perhaps the representation of @place is very document\-specific. As Guidelines Examples they could be misleading: encourage people to customize. But how do we respond to the original ticket, which asks how to handle two distinct ruby streams?* Should we provide both alternatives: nested and non\-nested? Or recommend the nested solution only? * If sequence is important, right\-right conveys valuable information. * Does the @place attribute refer only to the page, not to the sibling or parent? Answer: att.placement refers to place OR textual object. * Comment added to ticket: favor the nested approach. |
| \#2111 | B | [Ruby Schematron rules result in warnings](https://github.com/TEIC/TEI/issues/2111) | 2021\-10: maybe leave the constraint at the attribute level but introduce a sch:rule with context to remedy these warnings, like \<sch:rule context\="tei:rt\[@target]"\> \<sch:report test\="@from \| @to"\>When target\= is present, neither from\= nor to\= should be.\</sch:report\> \</sch:rule\> still, file a bug report to the STF project 2022\-04\-02: Council agrees: Action on SB and HBS to file bug report. |
| \#2114 | B | [@lang attributes missing in HTML output](https://github.com/TEIC/TEI/issues/2114) | 2021\-10: mark yellow green and stick with the language issues (no further improvements to accessibility yet). This should be a different ticket. SB: Could someone from the European subgroup explain the above comment a bit further? What is yellow “needs discussion” about this, and what should be a different ticket? 2022\-04\-02: Council discussion: @xml:lang should be output on HTML elements. It requires Stylesheets work, but link to that work on this ticket. Greenlight, no yellow. |


Guidelines issues
-----------------


Group A: (HC), EBB, JJ, SB, RV
Group B: PS, HBS, MS, SS, EB


| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#2137 | B | [bookmark links in examples pages have no mouse\-over text](https://github.com/TEIC/TEI/issues/2137) | E subgroup proposes to 1\) add @rel\="bookmark" and @aria\-label on HTML output \<a\>. Consider opening a new issue for citation recommendation (issue with this is which link should be in the citation recommendation, the current release or stable link to the Vault). |
| \#2138 | B | [Bookmark links from non\-English examples don't link to bibliography](https://github.com/TEIC/TEI/issues/2138) | HBS thinks that this is actually the same problem as [\#2106](https://github.com/TEIC/TEI/issues/2106) E subgroup closed as duplicate |
| \#2139 | A | [Another example for langKnown](https://github.com/TEIC/TEI/issues/2139) | see PR |
| \#2140 | B | [Example needed to model attList for delimiting alternative groupings of attributes](https://github.com/TEIC/TEI/issues/2140) | E subgroup thinks this is great and should be added to the Guidelines **after** the Stylesheets have been prepared to support both the HTML output and the overriding of @type \& @subtype as mentioned on the ticket. For the HTML output there’s already a [ticket](https://github.com/TEIC/Stylesheets/issues/506) but for the overriding we need one. |
| \#2144 | B | [wrong attribution for example](https://github.com/TEIC/TEI/issues/2144) | E subgroup proposes (1\) to change the whitespace to a hyphen; and (2\) to add the same example with @ref instead of @key plus URL as value. |
| \#2190 |  | [Should we revise datatypes related to sex and gender?](https://github.com/TEIC/TEI/issues/2190) | This is related to issue \#2189: [Create a gender element](https://github.com/TEIC/TEI/issues/2189) which is yellow and green |
| \#2209 | A | [description of \<listRef\> mildly misleading](https://github.com/TEIC/TEI/issues/2209) | NA subgroup assigns EBB to re\-word the \<remarks\> then make PR. (1st sentence to set the conditions, next sentence(s) to list the constraints.) |
| \#2213 |  | [att.datable.custom is under\-documented in the Guidelines](https://github.com/TEIC/TEI/issues/2213) | This issue will be discussed on Saturday in the full Council session |


Guidelines Pull requests
------------------------




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| [\#1996](https://github.com/TEIC/TEI/pull/1996) | A | [align teidata.version with Semantic Versioning Specification, closes \#1993](https://github.com/TEIC/TEI/pull/1996) | NA subgroup: we (Council) need to poke PS. For the 2nd bullet point we think this should be a “soft” requirement: Just recommend that @version matches; don’t actually validate it. |
| [\#2069](https://github.com/TEIC/TEI/pull/2069) | A | [Warn if an attDef with a non\-colonized @ident has a @ns attribute](https://github.com/TEIC/TEI/pull/2069) | NA subgroup suggests a solution involving @ident and @altIdent when we specify the @ns, that solves the problem (we think) without changes required to TEI/Stylesheets. SB uploaded a sample ODD file. |
| [\#2143](https://github.com/TEIC/TEI/pull/2143) | A | [new langKnown example \+ bib ref](https://github.com/TEIC/TEI/pull/2143) | NA subgroup: Connected to ticket [\#2139](https://github.com/TEIC/TEI/issues/2139) which needs discussion. Check on \#2143 is running; it will take 6 hours. We should ask Stuart Yeates to update his branch with changes from our dev, and make the small change requested. If he doesn’t respond we should recheck this in from a new branch we make. |
| [\#2156](https://github.com/TEIC/TEI/pull/2156) | A | [improve prose, constrain value of global source\= attr](https://github.com/TEIC/TEI/pull/2156) | NA subgroup discovers that sch:let is not permitted as a child of \<constraint\>, and that is the reason tests are failing. We think this is very strange, especially because our schema says it’s allowed. |
| \#2188 | B | [Fix \#2187, I hope](https://github.com/TEIC/TEI/pull/2188) | E subgroup: Left message in the PR regarding the failing of the test. |
| \#2193 | B | [deprecate \<altIdent\> in bizarre places](https://github.com/TEIC/TEI/pull/2193) | E subgroup: Merged |
| \#2185 | B | [Address \#2185 by restricting anyURI to not have spaces](https://github.com/TEIC/TEI/pull/2204) | E subgroup: address in the afternoon session |
| \#2233 | B | [Translation from susannalles/TEI](https://github.com/TEIC/TEI/pull/2233) | E subgroup: added HBS as reviewer |
| \#2234 | B | [Translation from Carmen\-Grijalba/TEI](https://github.com/TEIC/TEI/pull/2234) | E subgroup: added HBS as reviewer |
| \#2237 | B | [Translation from PRibas65/TEI](https://github.com/TEIC/TEI/pull/2237) | E subgroup: added HBS as reviewer |
| \#2240 | B | [Translation from Patrymigallon/TEI](https://github.com/TEIC/TEI/pull/2240) | E subgroup: added HBS as reviewer |
| \#2243 |  | [Update to \#2206:](https://github.com/TEIC/TEI/pull/2243) | E subgroup: merged |
| \#2245 | B | [Translation from CarmendeSantiago/TEI](https://github.com/TEIC/TEI/pull/2245) | E subgroup: added HBS as reviewer |


 