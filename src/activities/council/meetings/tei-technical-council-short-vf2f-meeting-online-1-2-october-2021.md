---
title: "TEI Technical Council Short VF2F Meeting, Online, 1–2 October 2021"
date: 2021-10-02
---
# TEI Technical Council Short VF2F Meeting, Online, 1–2 October 2021
**Meeting Times**




| **Friday, Oct 1** | 13:00–16:00 PST 16:00–19:00 EST | North American break\-outs |
| --- | --- | --- |
| **Saturday, Oct 2** | 09:00–12:00 BST 10:00–13:00 CET | European break\-outs |
|  | 06:00–10:00 PST 09:00–13:00 EST 14:00–18:00 BST 15:00–19:00 CET | Council meeting |


**Attendance**


|  | Fri, North American\-Group | Sat, European Group | Sat, Full Council |
| --- | --- | --- | --- |
| Syd Bauman | X |  | x |
| Helena Bermúdez Sabel |  | X | x |
| Meaghan Brown | X |  | x |
| Elisa Beshe­ro\- Bondar | X |  | x |
| Hugh Cayless | X |  | x |
| Janelle Jenstad | excused |  | x |
| Jessica H. Lu | X |  | x |
| Martina Scholger |  | x | x |
| Peter Stadler |  | x | x |
| Magdalena Turska |  | x | x |
| Raff Viglianti | excused |  | excused |


 
\> Friday, October 1 (North American break\-outs)
-------------------------------------------------


Work on [Guideline issues](#guidelinesIssues)
---------------------------------------------


\> Saturday, October 2 (European break\-outs)
---------------------------------------------


Continue with Guidelines issues
-------------------------------


\> Saturday, October 2 (Full Council)
-------------------------------------


Report on OxGarage
------------------


* PS reports that his colleague, Anne Ferger, is working on MEIGarage for a couple of years and may end up doing a lot on TEIGarage.
* The group in Paderborn has created several new repos — the set\-up is much cleaner now.
* There are two main repos: [OxGarage](https://github.com/TEIC/oxgarage) and [TEIgarage](https://github.com/TEIC/TEIGarage). PS recommends archiving OxGarage since there is no longer a connection to Oxford and since “TEIGarage” is more parallel to other "garages" like MEIgarage. Some issues:
	+ We would like to build a community around the garage.
	+ Is the TEIGarage Council’s responsibility?
	PS: Council should organize the community that maintains/develops it. Make it a sub\-community.
		- Invite Anne Ferger and James Cummings to a Council meeting to discuss how to proceed in the near future. Council agrees to invite them for the November meeting.
	+ How is the community building organized for MEI? — It is still too early, but the community building is planned as soon as the project has further progressed.
* Council agreed on the new name “TEIGarage” for the former OxGarage.


[CMC](https://github.com/TEI-CMC-SIG/TEI/tree/cmc-features): computer\-mediated communication
---------------------------------------------------------------------------------------------


* Should @generatedBy become a global attribute?
* In the fork of the *Guidelines* that the CMC group is creating (which is a copy of P5 with the added CMC chapter) the new @generatedBy is not global, but rather is on some 144 elements. (2nd most popular attribute, SB thinks — @type is on 230 elements.)
* Posts from humans may be punctuated by text from the bot or system.
* Differentiating the @generatedBy values of “system” versus “bot” can be difficult (but that’s the encoder’s problem, not ours).
* Discussion on @generatedBy vs @resp: @resp conveys intention (the person who decided to encode it as having been generated).
* Do machines have agency? What about the people behind the bot messages?
* FWIW, MH is in favour of globality of @generatedBy.
* PS suggests @method (but we already have an @method).
* SB: suggests @generationMethod? EBB likes @generatedBy. What about @method? (We already have correction/@method, normalization/@method, and variantEncoding/@method.)


Discussion on concepts of gender and sex or equivalent
------------------------------------------------------


* SB brought the issue to table. Wondering if we should be proactive instead of waiting for someone to ask us to change it.
* JL: Our students are noticing that the \<sex\> element is weird and off\-putting. Students find the definition strange, esp. its insistent pointing to biology. Even if not formally (via tickets), people are already asking.
* What’s the solution? Should we have two elements?
	+ Probably need \<gender\> in addition to \<sex\> instead of using \<sex\> with a @type to capture gender.
	+ Note that there is a @sex attribute but not a @gender attribute.
	+ We think that we should add both a \<gender\> element and a @gender attribute.
	+ Would \<trait\> or \<state\> do? Some discussion about the fact that we already have \<sex\> and @sex.
	+ MT: Rather than expand, creating new elements for every feature of a person that comes along that folks want to encode, perhaps we should lean towards collapsing to \<state\> \& \<trait\>.
	+ JJ: This is not the issue on which to stake a claim about TEI principles (more or fewer elements).
	+ JL: No one on Council is a gender and sexuality scholar (except some of us have worked on history of sex and gender projects). We need some queer studies and trans studies and bona fide gender studies people to weigh in. (Even if we end up with minimalist definitions, as PS had suggested; i.e. something like “\<gender\> is used to record the person or persona’s gender”.)
	+ JL: This isn’t the start of a slippery slope of imagining endless elements for various traits/characteristics; no one is suggesting \<fashionSense\>. Sex and gender are essential to human experience and are therefore reflected meaningfully in text.
	+ Ideas for simple definitions in guidelines: \<sex\> as distinct from \<gender\>; \<gender\> as distinct from \<sex\> (and then a project can mobilize its own definitions of sex and gender).
	+ Discussion: Should we take a very minimal approach, or is that too reductive?
	+ JL: We need to address the concerns of the community and invite discussion. Perhaps solicit input from TEI\-L and GitHub Discussions regarding definitions and examples.
	+ PS: Keep element definition simple. It will be a bit thornier to describe elements [in the chapter](https://tei-c.org/release/doc/tei-p5-doc/en/html/ND.html#NDPERSbp) (e.g., [¶13\.3\.2\.1 Personal Characteristics](https://tei-c.org/release/doc/tei-p5-doc/en/html/ND.html#NDPERSEpc))**.**
	+ HC: Maybe we should draft a tagdoc to propose the element with a very minimal description, and share it with the community for discussion and revision.
	+ teidata.sex: Why is this necessary? Should it be used for gender? SB: it’s a "hook" because people want this. HC: Why not make it teidata.enumerated (as a hint that you should have a value list here). SB: The definition of the hook should be teidata.enumerated, but still want the hook so customizers need change in only 1 place, not 4 (or, if we use same datatype for gender, 8\).
	+ What to do? Start by opening an issue. Possibly 3 issues.
		- \<gender\> element and @gender attribute
		- Alter the datatypes? (either 2 or 0\)
		- Revising chapter language
		- \[SB: Revising the chapter language goes hand\-in\-hand with creating the element and attribute. Altering datatypes could probably be done separately or at the same time.]
* JJ’s note to self: “Furthermore, while some characteristics will obviously change over time, hair colour for example, none, in principle—not even sex—is immutable.” → We need to rephrase that sentence! ([https://tei\-c.org/release/doc/tei\-p5\-doc/en/html/ND.html\#NDPERSbp](https://tei-c.org/release/doc/tei-p5-doc/en/html/ND.html#NDPERSbp))
* JJ’s note to self: Rethink this claim: “An actor does not change their persona when adopting a different role, but none of the personas associated with one person can properly be associated with another.” (https://tei\-c.org/release/doc/tei\-p5\-doc/en/html/ND.html\#NDPERSEpc)
* EBB opened tickets and assigned JJ, EBB, and HBS.


Reminder: [Checking pointers](https://docs.google.com/document/u/0/d/1nAi_6pB1ayTV3SYAsrf8InKL1T5n8DAdgdhf-o5RSM8/edit)
-----------------------------------------------------------------------------------------------------------------------


* Set deadline, self\-assign
	+ While we did not explicitly set a deadline, SB would like to see this published by 2021\-10\-31\.
* JJ will edit the prose of TCW32\.


Exemplum and language issue
---------------------------


* <https://github.com/TEIC/TEI/issues/1933>
* @xml:lang refers to the language of the example.
* In the processing it is used to decide to which translation of the Guidelines it belongs.
* If there is no example in the current language, the English examples appear in the specifications.
* If there is one example in the current language, only this example appears.
* Proposals so far:
	+ output all examples in all languages
	+ Introduce new \<exemplumGrp\> for grouping examples that are identical translations.
	+ Introduce new attribute on \<exemplum\>, meaning that this example should appear in all specs
		- @show\="true\|false"
		- @priority\="xs:integer"
		- with \<exemplumGrp\>, apply @newTargetLang\="language\-tag\|ALL" (BCP 47 already includes "mul" (multiple) so we could use that to mean "all")
			* @newTargetLang with \<exemplumGrp\> can help indicate fallback languages when the preferred is not available, or to group multiple preferred languages together.
			* Should we use the existing @targetLang attribute? As used on \<schemaSpec\>, it’s similar but not exactly what we need here.
			* We need this attribute to allow multiple values which isnot currently the case for @targetLang.
		- Possible names for the new attributes:
			* ~~@outputLangs~~
			* @targetLangs (Council’s decision)
			* ~~@reqLangs~~
			* ~~@inLangs~~


* +


* + Proposal (to solve language problem): \<exemplumGrp\>, content model { exemplum\+ } to be used for sets of redundant examples; it has Schematron check that one and only one child \<exemplum\> has @targetLangs of "mul". Heuristics are that the processor chooses one and only one child \<exemplum\> for the output, looking at @targetLangs and trying to choose best. If it can’t find a match at all, it chooses the "mul". (EBB added to ticket).


Schedule a blue\-sky discussion
-------------------------------


* Capacity to express the TEI in other ways: XML \+ TAGML \+ HTML \+ JSON \+ ?
* Issue of how difficult it is to "correct" content models for existing elements: MT: very complicated and fragile: "like pulling a thread and causing the fabric to unravel". Address things that are valid and don’t make sense. How to make TEI more manageable for the future?
* SB: Make it so classes are properly inherited.
* HC: If not inheritance, composability.
* MT: We could be writing position papers proposing new/alternative ways of organizing the TEI
	+ Call for Proposals for 2022 or 2023 TEI Conference.
	+ This will take multiple years.
	+ Talk to James Cummings first regarding planning for the 2022 Conference. Or Council could call for a panel.
* What is the “Durand conundrum”? Pure ODD vs. Relax NG. What if we used Relax NG as the underlying schema language rather than PureODD? Compare it with DocBook, which runs this way. Look at JATS for its documentation methodology (not its DTD schema).
* Also consider Laruent Romary’s “crystals” proposal (of 2012\).
* SB: If we are going to move to a P6, maybe we should not [rewrite the Stylesheets](https://wiki.tei-c.org/index.php?title=New_ODD_processing#goals).


AOB
---


* Restructure Council page on the TEI website: [https://tei\-c.org/activities/council/](https://tei-c.org/activities/council/)
	+ Would it be nice to add pictures of us? Or graphics? Caricatures?
	+ Council members should be able to opt out.
	+ This would be a new expectation to communicate to Council members.
	+ Idea to help us be approachable/recognizable to the TEI Community.
	+ Photos make us vulnerable to judgements about race, ethnicity, gender. Can also emphasize we are human beings and approachable.



### Guidelines issues


Group A: HC, MB, EB, SB, JL
Group B: PS, HBS, MS




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#1800 |  | [more on dictionary: The element \<usg\> inside \<def\>](https://github.com/TEIC/TEI/issues/1800) | Comment from last VF2F (May): Subgroup suggests that RV should go with brute force approach (proposal 1\). \[usg is already allowed in cit, so does not need to be taken care of anymore] → postponed until RV is back |
| \#1879 | A | [New element listNote as a wrapper for note elements](https://github.com/TEIC/TEI/issues/1879) | Comment from last VF2F (May): Remaining question is if we could use \<listAnnotation\> instead of implementing \<listNote\> as agreed earlier. Nevertheless, \<listAnnotation\> is only allowed in very specific contexts (related to standoff uses) and is also likely to have its content extended. For that reason, the subgroup thinks it’s better to keep things clearly separated and have \<listNote\> be a member of model.listLike with a narrow content model of \<note\> and usual \<desc\>, \<head\> etc. Comment from VF2F (October): Subgroup: Argument in favor of \<listNote\> in addition to the currently available \<noteGrp\> is that  \<listNote\> groups together a list of different notes, whereas \<noteGroup\> groups together a set of notes that are basically the same but are in alternate languages or are alternate versions (e.g., for different audiences). So, do we need \<listNote\>? Council: GREEN Council 2019 decided in favor of both \<noteGrp\> and \<listNote\> Council discussion: \<listNote\> should include \<noteGrp\>.* Allow \<listNote\> as child of \<front\>, \<body\>, \<back\>, and \<div\> * also more generally available in the \<teiHeader\> (as alternative to unstructured \<p\> content)? * Also, inside \<person\>, \<place\>, \<event\> * membership in model.listlike? * probably it’s not a good idea to make \<listNote\> available globally just like \<note\>. * Follow attributes used on other list elements. |
| \#1916 | A | [Corpus Exemplar should more explicitly state what it's for](https://github.com/TEIC/TEI/issues/1916) | Comment from last VF2F (May): Subgroup is in favour of removing Corpus from Exemplars. If someone has a community behind and wants to rework the example she/he should open a new issue. Comment from VF2F (October): SB suggests that everything labeled "template" on the table in this ticket should probably be removed. We should review these to make sure we agree — is there anything helpfully exemplary here? But we should consult Piotr Banski before deleting the corpus one, as he intends to write a replacement. Council discussion: is this just cleaning up a legacy mess? Maybe alert the TEI\-listserv and Piotr. Action on MS: Ask Piotr to develop his new file, and let him know we’re intending to remove this along with other old files. Should we remove some of these from oXygen and the Exemplars directory, but preserve them as sample ODD files elsewhere ([https://tei\-c.org/guidelines/customization/](https://tei-c.org/guidelines/customization/)).* Move to another directory like ODD\-Stubs * Find out whether oXygen is pulling directly from Exemplars/, and how. |
| \#1929 |  | [What is a paragraph, really?](https://github.com/TEIC/TEI/issues/1929) | Sub\-subgroup of HC and EB suggests we consider moving \<ab\> to core, and closing this ticket if there are no other actionable items. |
| \#1978 | A | [Documentation](https://github.com/TEIC/TEI/issues/1978) | Subgroup: We have some documentation in the Documents folder in the TEIC/TEI repo and some in the TEIC/Documentation repo.Issues: Should all the documentation be in TEI \[encoding]? How should it be organized? Should some of the older documentation be consolidated and made TCWs?Should TEIC/TEI/Documents be cleaned up and collapsed into TEIC/Documentation?Some things can be moved to the Vault. But check on things that have been kept hidden and should see the light of day.Subgroup proposes that we maybe form a Council subcommittee to work on this next year. |
| \#2053 | A | [naming and description of TEI Simple Print and TEI Lite](https://github.com/TEIC/TEI/issues/2035) | Discussion on the ticket does not lead to a clear action item. Subgroup proposes we check in with MT re: this ticket and last October’s Slack discussion of Vanilla and resulting meetings. If Vanilla conversations have evolved into something more clearly actionable, can we close the ticket? (Remember: texts are complex; data modelling is hard work.) |
| \#2045 | A | [calendar\= should not be in att.datable](https://github.com/TEIC/TEI/issues/2045) | Subgroup suggests Council review the [list](https://github.com/TEIC/TEI/issues/2045#issuecomment-731271583) of elements where @calendar is appropriate, and decide whether Duncan's objections are reasonable, and whether if we proceed, there should be a deprecation period. |
| \#2046 | A | [reports in jTEI](https://github.com/TEIC/TEI/issues/2046) | Action on EB to review if [PR](https://github.com/TEIC/TEI/pull/2057) appropriately addresses the issue and, if so, close ticket. EB: Yes, it does — **closed**. |
| \#2048 | A | [@who for \<span\>](https://github.com/TEIC/TEI/issues/2048) | SB suggests that @match might be a better resolution for the OP than @who. Value ought to be an XPath rather than a pointer. Subgroup veers toward close/wontfix, and posting more on the ticket to help OP.  SB suggests we consider adding span to att.scoping, though this may be tricky because it is already a member of att.pointing which has an @target. |
| \#2064 | A | [Tickets should be Triaged for Difficulty and Labelled.](https://github.com/TEIC/TEI/issues/2064) | Recognizing (1\) the increasing number of ticket labels already in use, and (2\) the subjectivity of “difficulty” for Councilmembers and users of varying expertise, subgroup believes this change would require more effort than it’s worth. closed/wontfix. |
| \#2067 | A | [@assertedValue of \<certainty\> should also accept pointers](https://github.com/TEIC/TEI/issues/2067) | Subgroup prompts original poster to respond to SB comment of 2020\-12\-13\. |
| \#2070 | A | [Make file points at non\-existent files](https://github.com/TEIC/TEI/issues/2070) | SB locates the problem spot in to.xsl, and gets himself added to the ticket. |
| \#2071 | A | [description of "URI" in idno/@type](https://github.com/TEIC/TEI/issues/2071) | HC suggests just pointing to the RFC for URI. |
| \#2072 | A | [change the content model of exemplum](https://github.com/TEIC/TEI/issues/2072) | Subgroup suggestion: Let’s introduce \<exemplumGrp\> because we have a considerable number of exempla with accompanying prose. Also this is analogous to \<noteGrp\>, etc. But this might open up a can of worms for processing. |
| \#2076 | A | [improvements to SG\-oth: order of sub\-sections, XML declaration, encoding](https://github.com/TEIC/TEI/issues/2076) | Subgroup expresses profound skepticism that LB addressed all of SB’s points on this ticket. Seriously, much of this language needs to be updated. Assign SB to pursue revisions, with JJ for proofreading. |
| \#2083 | A | [typos, encoding corrections, and word\-smithing SATS](https://github.com/TEIC/TEI/issues/2083) | Action on HC to continue with checklist (half already presumed finished). |
| \#2084 | A | [moderately problematic issues in SATS](https://github.com/TEIC/TEI/issues/2084) | Subgroup suggests additional Councilmembers join HC in reviewing the checklist, especially RV (if available). |
| \#2085 | A | [re\-defining Node in SATS?](https://github.com/TEIC/TEI/issues/2085) | ditto |
| \#2086 | A | [uber\-ticket for SATS](https://github.com/TEIC/TEI/issues/2086) | ditto \[here be dragons] |
| \#2089 | A | [Inconsistent prohibition of the use of \<p\> directly under \<div1\>](https://github.com/TEIC/TEI/issues/2089) | Close won’t fix |
| \#2090 | B | [per\-document defaults (of attribute values)](https://github.com/TEIC/TEI/issues/2090) | Totally sensible workflow\-wise but do we need it in the standard? This introduces some convenience but not something meaningful from a modelling perspective. |
| \#2093 | B | [Check consistency of tagdocs desc elements](https://github.com/TEIC/TEI/issues/2093) | status green, go ahead |
| \#2095 | B | [Update the prose for \<witness\>](https://github.com/TEIC/TEI/issues/2095) | There is room for improvement but nothing really wrong. Get back to Nicolas Cole about the original concern? Perhaps add an example illustrating the use of \<witness\> with msDesc/bibl/object children instead of just text description or mixed, unstructured content. |
| \#2098 | B | [Change title of 11\.3\.1](https://github.com/TEIC/TEI/issues/2098) | Make yellow green to come up with a proposal. |
| \#2106 | B | [broken links to non\-English bibliography entries from examples\-\* pages](https://github.com/TEIC/TEI/issues/2106) | Subgroup suggests to merge \<listBibl\> (with different @xml:lang) into one and move those @xml:lang one level down to the \<bibl\> element. Keep @xml:lang for historical reasons or nuke them? |
| \#2110 | B | [Ruby: Multiple ruby streams in the same orientation](https://github.com/TEIC/TEI/issues/2110) | Subgroup proposes to add those examples to the Guidelines but refrains from adding “right\-right” or similar to suggested values of @place. If one is interested in detailing topographic information, use @facs on \<rt\>. Or, when not wanting to rely on a document sequence, use @n in addition. |
| \#2111 | B | [Ruby Schematron rules result in warnings](https://github.com/TEIC/TEI/issues/2111) | Subgroup proposes to maybe leave the constraint at the attribute level but introduce a sch:rule with context to remedy these warnings, like \<sch:rule context\="tei:rt\[@target]"\> \<sch:report test\="@from \| @to"\>When target\= is present, neither from\= nor to\= should be.\</sch:report\> \</sch:rule\> still, file a bug report to the STF project |
| \#2114 | B | [@lang attributes missing in HTML output](https://github.com/TEIC/TEI/issues/2114) | Mark yellow green and stick with the language issues (no further improvements to accessibility yet). The accessibility issue should be a different ticket. SB: Could someone from the European subgroup explain the above comment a bit further? What is yellow “needs discussion” about this, and what should be a different ticket? |
| \#2132 | B | [Additional version/date attributes for gaiji description](https://github.com/TEIC/TEI/issues/2132) | How about renaming the att.styleDef into att.schemeDef with attributes @scheme and @schemeVersion, eg. CSS 2\.1 and Unicode 12\.0 and change the @schemeVersion datatype teidata.versionNumber to accommodate e.g semver ranges like \>\=1\.2\.7 \<1\.3\.0; alternatively @maxVersion @minVersion |
| \#2136 | B | [Use PureODD inside attribute lists](https://github.com/TEIC/TEI/issues/2136) | Subgroup recommends to deprecate @org on \<attList\> and use schematron rules instead. A few elements use \<attList org\=””\> at the moment, e.g. \<relation\>. These would have to be re\-written. |


 