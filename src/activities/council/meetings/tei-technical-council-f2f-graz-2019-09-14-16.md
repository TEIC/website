---
layout: page.njk
title: "TEI Technical Council F2F Graz 2019-09-14/16"
---
# TEI Technical Council F2F Graz 2019-09-14/16
**Venue** 


Centre for Information Modelling \- Austrian Centre for Digital Humanities, University of Graz


Elisabethstraße 59/III, 8010 Graz




| **Saturday, Sep 14** | 09:00–12:30 | Council meeting |
| --- | --- | --- |
|  | 14:00–17:00 | Council meeting |
| **Sunday, Sep 15** | 09:00–12:30 | Council meeting |
|  | 14:00–17:00 | Council meeting |
| **Monday, Sep 16** | 09:00–12:30 | Council meeting (\+invite people standing for Council) |
|  | 14:00–16:00 | Standoff meeting (Guests: Laurent Romary, Georg Vogeler, Lou Burnard, Piotr Banski) |
|  | 17:00–18:00 | Joint Board\-Council Meeting |
| **Thursday, Sep 19** | 19:00 | Infrastructure Group Meeting |


**Present**
* Elisa Beshero\-Bondar (EB)
* Syd Bauman (SB)
* Hugh Cayless (HC)
* James Cummings (JC)
* Martin Holmes (MH)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


Saturday, Sep 14 \- Morning Session (9:00\-12:30\)
--------------------------------------------------


* **Organisational**
* **Ontologies / LOD SIG**
	+ Council should charge the formation of a working group.
	+ Working Group, entirely independent of Ontologies SIG:
		- work on new practical material for Guidelines (where do we add info for LOD: which attributes, etc.)
		- Council wants to make a working group to implement this. We want to see Connie Crompton's proposal on what she’d like to do with the TEI.
	+ Co\-convene with Council member – Council can help organize.
	+ **Action on** MS to write to Connie Crompton.
* **Report at the Members’ Meeting**
	+ Responsibilities of the TEI Council
	+ Thank outgoing Council members
	+ ROMA beta
	+ Guidelines
	+ Stylesheets
	+ Infrastructure Group
	+ SIGs
* **Michael Beddow**
	+ Council discusses its “threshold” for commemoration on the “Dedications” page. Remind Board that posts on TEI\-L may be sufficient, and remembrance during membership meeting.


* **Preparation for standoff meeting**
	+ make time on Sunday afternoon.
* **Meeting times and dates**
	+ Council meeting:
	Tuesdays 08:00 ET, 13:00 GMT, 14:00 CEST
	+ Stylesheets meeting:
	Tuesdays 06:00 PST, 09:00 ET, 14:00 GMT, 15:00 CEST
* **Miscellaneous notes from ticket discussion**
	+ unrelated to specific tickets
	+ For those who don’t yet have the ability to do local builds, have a look at the TCW paper on Building and Testing the TEI Guidelines: <http://teic.github.io/TCW/testing_and_building.html>
	+ Possibility of updating the Testing and Building document?


Saturday, Sep 14 \- Afternoon Session (14:00–17:00\)
----------------------------------------------------


* Review Guidelines issues \-\- see table below


Sunday, Sep 15 \- Morning Session (09:00–12:30\)
------------------------------------------------


* Review Guidelines issues \-\- see table below


Sunday, Sep 15 \- Afternoon Session (14:00\-17:00\)
---------------------------------------------------


* **Report on MEIGarage**
	+ <https://meigarage.edirom.de>
	+ PS presents an early pre\-release view of MEI Garage to Council
* **Mailinglists@Brown University**
	+ EM: Still okay to keep the current Brown TEI mailing lists at Brown, at least for the near future. Running on Listserv.
	+ Transferring from Brown (Listserv) to Pipermail (what TEI\-C is using on lists.tei\-c.org) is possible but non\-trivial.
	+ Make sure there’s not a single point of failure – Council chair (at least) should be able to make/manage/admin mailing lists if desired.
	+ Infrastructure group: Huma\-Num will use a different mailing list software.
	+ JC: per month at least one can download gzipped per month / year, e.g. on the [tei\-council mailing list](https://lists.tei-c.org/pipermail/tei-council/) ([https://lists.tei\-c.org/pipermail/tei\-council/](https://lists.tei-c.org/pipermail/tei-council/)).
	+ JC: This looks like it is in unix mbox format so should just be able to be imported by any sensible mailing list software. In a Huma\-Num version of lists.tei\-c.org should we switch mailing list software?
* **Stylesheets circularity**
	+ MH suggests a solution: Stylesheets get released \> 1 month ahead of P5, and the CI servers build dev P5 against released Stylesheets; meanwhile, Stylesheets dev builds against the released P5\.
	+ PS: The real problem is that Stylesheets tests are working on dated P5 subset. We’ll still have a problem with an early release of Stylesheets with the tests failing. A Guidelines release breaks the Stylesheets tests.
		- July 2019 release: still release Guidelines with Stylesheets. Release both at the same time, and update the Stylesheets tests.
		- Or try this: build of Stylesheets Master just skips the tests temporarily.
	+ Tests issue: MH: We’re currently testing by git diffs, but should be doing that with dedicated Schematron.
		- Diff is important: include it into the process to review all diffs. It’s currently plain\-text diffing. What about XML diffing?
		- Pulling P5 subset from release branch rather than current vault P5\. Increment the source version forward when we realize tests are out of date. DEFAULTSOURCE is a “moving target”. Need a version number hard\-coded in the makefile that makes it possible to move the target forward.
		- Tests need to prove against old AND new. This is good practice.
		- Test 2 test basis is better.
	+ Action on PS to write up last release process with Paderborn Jenkins, so other Jenkins can do the same. When exactly do we update the defaultsource? (We need TCW 22 release notes for Jenkins maintainers!)
		- Bump the version when you’re introducing a new feature, such as update to tagDocs, with new processing which isn’t caught by the old source.
		- Ordinary process of inventing new elements shouldn’t cause the tests to break. But Guidelines tests may still break.
		- Jenkins points at both dev and master.
* **Preparation for standoff meeting**
	+ introduce \<standoff\>
		- as a child: \<listAnnotation\>
		- Children of \<listAnnotation\>: \<annotation\> (doesn’t exist yet) and \<annotationBlock\> (already exists).
		- \<annotation\> needs to be recognizable as expression of open web annotation standard. The annotation body might be a pointer with @target pointing to another document. No inline annotation body.
		- \<annotation\> content model hasn’t been defined yet.
		- Where does metadata about standoff go?
			* Earlier expectation from Ann Arbor that this metadata goes inside \<standoff\>, in something like a \<teiHeader\>.
			* But standoff group Council members want this to go in a real \<teiHeader\> child of \<TEI\>, not a child of \<standoff\>.
			* You could have a whole series of these bundled in \<teiCorpus\>, or in nesting \<TEI\> elements.
		- Question of where \<listApp\>, \<listPerson\>, etc. could go: at same level as \<listAnnotation\>?
		- \<standoff\> was originally conceived to accommodate \<link\>, \<linkGroup\>, and other things. It wasn’t ever supposed to be just for linguistic purposes.
		- Link to Syd’s Standoff Proposal: <https://github.com/sydb/stdfSpec>.
		- Link to Laurent’s standoff proposal: <https://github.com/laurentromary/stdfSpec/blob/AnnArbor/Scenarios/StandOffScenarios.xml>.
		- Issues with multiple teiHeader or standoffHeader: confusion in levels of metadata. But probably auto\-generated and meant to indicate software that generated the standoff markup.


Monday, Sep 16 \- Morning Session (9:00–12:30\)
-----------------------------------------------


* **ROMA**
	+ [http://romabeta.tei\-c.org](http://romabeta.tei-c.org)
	+ It is great!
	+ RV will do a new release today, and create a public announcement. Important to note it only works with pure ODD (not schemas with RNG content).
	+ Will Docker containers be updated? – yes
* **zenodo**
	+ PS: Release Guidelines on zenodo
	+ DOI for the Guidelines
	+ [https://blog.zenodo.org/2017/05/30/doi\-versioning\-launched/](https://blog.zenodo.org/2017/05/30/doi-versioning-launched/)
	+ Create a “community” on zenodo; administrator has to accept release.
	+ Initial zenodo release is online at [https://doi.org/10\.5281/zenodo.3413524](https://doi.org/10.5281/zenodo.3413524)  BUT zenodo orders the releases in order of addition, not by version number. PS will first add all releases and then ask zenodo support to reorder the releases by version number.
* **Review Stylesheets issues**
	+ Action on Stylesheets group in the next Stylesheets meeting  in October: <https://github.com/TEIC/Stylesheets/pull/327>.
	+ PS created a new milestone <https://github.com/TEIC/Stylesheets/milestone/7> for Release 7\.49\.0\.
* **Review Guidelines issues**
	+ PS created a new milestone <https://github.com/TEIC/TEI/milestone/8> for Release 3\.7\.0 and added (almost) all tickets that are “status:go” (without those “status:needs discussion” and/or “priority:low”.


Monday, Sep 16 \- Afternoon Session (14:00–17:00\)
--------------------------------------------------


* **\<standOff\> discussion**
	+ Guests for the discussion on \<standOff\>: Piotr Banski (PB), Lou Burnard (LB), Laurent Romary (LR), Georg Vogeler (GV)
	+ Presentation from MT (available in Slack)
		- Overview of history, use cases, progress
		- Proposing implementing W3C Web Annotation Data Model (WADM) with \<annotation\>.
		- Open questions/unfinished activities:
			* Elaborating on examples from different disciplines
			* Where and how to store metadata
		- Proposed steps
			* Minimal scaffolding for \<standOff\>
			* Implement linguistic\-specific features
			* Incrementally elaborate \<standOff\>
	+ Discussion
		- Clearly differentiate targetAnnotation and body
		- LR’s comments
			* Is \<standOff\> recursive? (addressed in discussion of \<teiCorpus\>) (possibly by making TEI recursive).
			* Concern about multiple use\-cases blurring the model.
		- \<standOff\> \- version of record document \- text that you leave untouched without altering the content. So it needs a header.
		- Is this something that we should address today or form a working group?
		- MT: create general structure today and hold off on details, so that \<standOff\> is available for use ASAP.
			* \<annotationBlock\> is already available, so this is feasible
		- PB’s Comments
			* standOff annotation does not originate with linguistics (e.g. Amaya – in\-browser annotations with no source modification) and there are many competing variants.
			* Try to be aware of this history and keep it separate from resource (like lists of bibliography, person, etc.)
		- TEI is already rich in pointing mechanisms.
		- HC: personography can be standoff, with resource \- body \- annotation.
		- LR wants a \<resource\> element (that we have previously discussed as \<ldb\>).
		- MT: This is the “hinge” concept: Annotation is a singular act of that associates a passage of text with its interpretation (interpretation inlined in the annotation or pointed to and gathers additional metadata about this association.
		- PB: Compare this with Xlink.
		- GV: Can’t we just do this with the W3C model so that the TEI doesn’t have to invent something that already exists?
		- PS: Instead of calling it \<standOff\> then, just call it \<resource\>? JC: That ship has sailed.
		- PB: In Nancy Ide’s time, there were two versions of standoff. One is compressed, the other is dissociated as a (MH supplies: pure link). Merged standoff: annotation together with linking that points to text. And pure link that connects to resources, whether parallel corpora, or text on one side and some other resource on the other. Resource is not the same as standoff, because you can remove a resource.
		- LB: One of the oldest and earliest approaches to this was the element \<join\>: for a structure you can’t represent with the XML hierarchy, implemented with lots of pointers. Is that a use case for annotation or resource? (\<join\> was used for interrupted speech, for example.)
		- PROPOSAL 1:
			* \<standOff\>
				+ model.listLike or \<listBibl\>. Put \<listPerson\>, \<listEvent\>, other lists here at this level. Automated named entity recognition. \<linkGrp\>, \<joinGrp\>, etc. feature structures, \<taxonomy\>. Is the target a person element, or a web resource for more info? HC: body of an annotation can be a pointer.
				+ \<listAnnotation\>
					- \<annotationBlock\>
					- \<annotation\>
		- PROPOSAL 1A
			* \<standOff\>
				+ model.listLike\+\+ or \<listBibl\>. Automated named entity recognition. \<linkGrp\>, \<joinGrp\>, etc. Is the target a person element, or a web resource for more info? HC: body of an annotation can be a pointer.
				+ \<listAnnotation\>
					- \<annotationBlock\>
					- \<annotation\>
		- PROPOSAL 2:
			* \<standOff\>
				+ \<listAnnotation\>
					- \<annotationBlock\>
					- \<annotation\>
			* SomeResourcesWrapper not called ‘resources’ maybe ldb
				+ model.listLike, listPerson, etc.


* + - MH: What do we do with things that belong in both? \<listApp\>, \<listTranspose\>, \<listNote\> for example? Maybe we could put them in the content model of both? Discussion: JC: No, that's making things worse by clouding categories.
		- GV: make \<listAnnotation\> conform as much as possible to web annotation model.
	+ LB: Perhaps we don’t need to create boundaries where they aren’t needed. The second proposal puts the linguists in charge of \<standOff\> and excludes other applications.
	+ PS: We need separate sections in the Guidelines for personographies, gazetteers, etc. And another section on how to do unmerged standOff. Clearly distinguish sections for use\-cases.
	+ HC: Disagrees: There’s no clear separation of these use\-cases. During the process you are identifying the entities to which you want to point. And there are distinct ways to write a personography. One may be a standoff way. Another may not, and there may be varying degrees of remoteness of resources.
	+ GV: Think about the ‘Text as Graph’ community, and how they would apply Proposal 1\.
	+ General appreciation of the simplicity of Proposal 1\.
	+ LR reiterates that the name of the \<standOff\> element needs a capital ‘O’.
	+ PB says he now accepts proposal 1 (with mild preference for proposal 2\) but not enough to argue for it. He feels the second is more analytic and preserves more of the original sense of standOff. GV: It’s a distinction between the analytic and the practical. RV: Some of these lists really would apply to both places (resources vs. standOff). JC: we are doing better future\-proofing. The analytical form is not necessarily the better one when the analysis will inevitably break.
	+ We choose proposal and there is much rejoicing!
	+ \<standOff\> will contain \<listAnnotation\> and model.listLike, \<listPerson\>, \<listEvent\>, \<listBibl\>, \<taxonomy\>, \<linkGrp\>, \<listTranspose\>, \<fs\>, \<taxonomy\>, etc. These should not be constrained in order and are all alternatives of minOccurs\=”0” and maxOccurs\=”unbounded”.
	+ Recursiveness of standOff?


Proposal 1:

```
<TEI>
   <teiHeader>
   <text>
   <standOff>
```

or
Proposal 2:



```
<TEI>
   <teiHeader>
   <text>
   <TEI>
      <teiHeader>
      <standOff>
   <TEI>
      <teiHeader>
      <standOff>
   <TEI>
      <teiHeader>
      <standOff>

or
```

Proposal 3:



```
<TEI>
  <teiHeader>
  <text>
  <standOff>
     <standOffHeader>
```

* \<teiHeader\> can be associated with each \<standOff\>, and recursiveness works because \<TEI\> can nest.
* Can there be some kind of header information within standOff, so there’s a header say for a \<listAnnotation\>?
* EM: What about \<standOffHeader\>?
* At issue: Capacity for plugging and unplugging standOff layers.
* **Council and StandOff Group consensus is for \#2 with nested TEI elements.**
* Certain members like LB and JC and some others were against this idea. Others pointed out the considerable advantages of this model for handling other types of documents in contexts outside the linguistic annotation use\-case.
* LR brilliantly summarized the actionable items. MTs recollection is: to implement nesting \<TEI\>, \<standOff\> element with \<listAnnotation\> and \<annotationBlock\> and add \<annotation\> as an element conformant with the WADM.


Monday, Sep 16 \- Joint Board\-Council Meeting (17:00–18:00\)
-------------------------------------------------------------


* Board Council Meeting


### Stylesheets issues


#### Stylesheets pull requests


Group A: RV, EBB, MT
Group B: MS, JC, MH, EM


Group C: HC, SS, PS, SB


 




| **Ticket** | **Group** | **Description** | **Notes** |
| --- | --- | --- | --- |
| \#377 | B | [Add instructions on how to build documentation](https://github.com/TEIC/Stylesheets/pull/377) | PR merged MH asked Luis to fix two broken links in the documentation and to turn on directory browsing. |
| \#369 | C | [Improve error handling for faulty moduleRef uri](https://github.com/TEIC/Stylesheets/pull/369) | F2F subgroup is just going to implement this one. It’s a minor change. |
| \#327 | B | [use ODT 'Author' style to specify author](https://github.com/TEIC/Stylesheets/pull/327) | PS to implement. Green for Go. |
| \#301 | C | [Reordered stylesheets and addressed \#281](https://github.com/TEIC/Stylesheets/pull/301) | PS has already addressed this difficult to discern PR on the PR itself. Main problem is we do not have sufficient CIDOC\-CRM knowledge to evaluate some bits. Suggest that someone from Council ask Ontologies SIG for input. |
| \#109 | A | [Fix missing first text node, a \[, in certain references.](https://github.com/TEIC/Stylesheets/pull/109) | Fixed! |


 
### TEI Guidelines issues under discussion


**Group A:** JC, HC, EB, SB
**Group B:** MH, MT, PS, MS


**Group C:** EM, RV, SS


 




| **Ticket** | **Group** | **Description** | **Notes** |
| --- | --- | --- | --- |
| \#1813 | A | [examples in ODD example page do not use ODD pure](https://github.com/TEIC/TEI/issues/1813) | Nudge LB to finish this ticket. Check if he needs write access to this page, which isn’t in the Guidelines. |
| \#1823 | B | [teiCorpus: make guidelines and data model consistent](https://github.com/TEIC/TEI/issues/1823) | Subgroup (from GitHub comment): Subgroup suggests changing the content model to exclude text from \<teiCorpus\> and prescribe one or more \<TEI\> \| \<teiCorpus\> children Considered corrigible error, made green for PS to fix. (He plans to fix by changing content model of \<teiCorpus\> directly — we may wish to submit another ticket to factor \<text\> out of model.resourceLike at a later date. |
| \#1824 | C | [Guidelines: customized ODD examples based on teiCorpus?](https://github.com/TEIC/TEI/issues/1824) | We think that Vanessa’s question about actual encoding may be handled within TEI, but at the same time, examples for customization (and other parts of the TEI) are very western and could benefit from a broader set of examples. |
| \#1825 | A | [Revision of TCW\-20 re branching in TEIC GitHub Repo](https://github.com/TEIC/TEI/issues/1825) | Prod EBB to do this. |
| \#1826 | B | [migrate to travis.com](https://github.com/TEIC/TEI/issues/1826) | PS did the migration today. We just need to watch to see that everything goes OK. Close the ticket if the builds and notifications run well. |
| \#1830 | C | [\<derivation\> should allow \<bibl\> in its content model](https://github.com/TEIC/TEI/issues/1830) | MS: I agree with LB that the information about the original text should be supplied in \<sourceDesc\> Council discussion: Is \<sourceDesc\> actually right for describing the origin of a translation? \<textDesc\> not used very much Group C \- might be reasonable to have a place for bibliography, not \<sourceDesc\>, but external to \<derivation\>. Then again it can contain everything else, so why not \<bibl\> These elements can contain text but all the examples are empty, perhaps worth reconsidering how they (should) work? Related to this, these elements are contained within \<profileDesc\> which is not supposed to encode bibliographic aspects Finally \<sourceDesc\>  describes the source from which an electronic text was derived (so not what that text was derived from) **Conclude** \- add example of this type to \<sourceDesc\>. Assign to MH |
| \#1834 | A | [Guidelines page links broken](https://github.com/TEIC/TEI/issues/1834) | Only a problem in Jenkins. Changed to low priority, and added a TEI Build label. This is really about build processing. Also seems to be working Paderborn Jenkins. |
| \#1838 | C | [allow \<g\> in \<zone\>/\<line\>](https://github.com/TEIC/TEI/issues/1838) | yes, and make zone and line xtext as noted by Lou. |
| \#1842 | A | [\`setting\` should contain \`placeName\`](https://github.com/TEIC/TEI/issues/1842) | Subgroup notes that you can add this in locale. But larger group discussion ends up agreeing with Dario, and will add \<placeName\> and tweak examples to use it. |
| \#1844 | C | [Remove @type from att.interpLike and use att.typed](https://github.com/TEIC/TEI/issues/1844) | is this part of the @type reconciliation? Is green so will implement. |
| \#1847 | A | [move free\-standing minOccurs\= and maxOccurs on elements to class?](https://github.com/TEIC/TEI/issues/1847) | Go for green. |
| \#1848 | B | [Allow titlePage and other block\-level elements in rdg](https://github.com/TEIC/TEI/issues/1848) | We already allow div and \<floatingText\> so we’ve already gone down the slippery rabbit hole, so why not \<titlePage\> and \<text\>? Council says yes to \<titlePage\> and also to all its children. Go for green. |
| \#1851 | A | [msContents/msItem should be replaced in tei:object with something non\-MS specific](https://github.com/TEIC/TEI/issues/1851) | Subgroup recognize this has larger implications for more generalized description of objects. We \*could\* change this and Subgroup doesn’t know how yet. Full Council: SB notes that the content model of \<msDesc\> is problematic because you have to choose between paragraph description OR structured content, and you can’t do both. We don’t want to continue that problem in a non\-MS specific model. JC:* Should we build a new model based on \<msContents\>? * Or move to an entirely new model with help from object ontologists? |
| Afternoon session \- same groups | | | |
| \#1849 | C | [Add more discussion of editorial practice to TC chapter](https://github.com/TEIC/TEI/issues/1849) | We suggest double status: Go, then review. |
| \#1843 | B | [\`dateline\` should be a member of \`model.pLike.front\`](https://github.com/TEIC/TEI/issues/1843) | Council subgroup agrees in principle with the equivalence between \<byline\> and \<dateline\>; where one is available, the other should be. Both are available at the end of \<front\>, but only \<byline\> is available at the beginning of \<front\>, which makes no sense. Green: add \<dateline\> to model.pLike.front, and add a good example showing both \<byline\> and \<dateline\> together, or get one from Dario. |
| \#1837 | B | [improve explanation of @defaultExceptions on schemaSpec](https://github.com/TEIC/TEI/issues/1837) | MH considers @defaultException to be an ugly cludge to solve TEI’s own problem and would ideally see it automatically handled by schema\-generating software. Council: We need to investigate how to process @defaultException in odd2rng Stylesheet, which currently throws bizarre ID errors over namespace issues. Figure it out, decide whether to get rid of @defaultException, and then write up the documentation called for in the ticket. |
| \#1852 | B | [Define semantics of witDetail without @target](https://github.com/TEIC/TEI/issues/1852) | Subgroup tends to disagree with that and recommend to do this on a project level. Full Council: agrees that we should add prose that \<witDetail\> when a child of \<app\>, when a sibling of \<rdg\> or \<lem\>, without @target, should conventionally refer to the first preceding sibling witness (\<rdg\> or \<lem\>). Add prose that projects may change this with documentation. |
| \#1854 | C | [Deprecations Appendix is seriously ugly](https://github.com/TEIC/TEI/issues/1854) | yes \- either make list with sub\-items for cell values (mobile compatible) or fix table, fix column heads, move “component type” to column 4, remove or clarify deprecation statement which looks like an element name, etc. (another suggestion: shorten to “withdrawn after”). Poke Hugh to define new look and tell MH, SB. (this is automatically generated, right? – yes) |
| \#1856 | A | [\`\<ab\>\` should be able to nest](https://github.com/TEIC/TEI/issues/1856) | Subgroup agrees to disagree and punt this to full Council. Council: semantically nested block\-level text perhaps has consequences for processing: forcing some to add constraints to prevent nestable ab’s when they don’t want them. Perhaps introduce a new element (\<nb\> for nesting block) to prevent this trouble? \<nb\> sounds too much like nota bene. Better name? \<nestBlock\> or just permit \<ab\> to self\-nest anyway? |
| \#1857 | B | [\`\<egXML\>\` should be able to nest](https://github.com/TEIC/TEI/issues/1857) | see comment in ticket |
| \#1858 | C | [\<q\> should be allowed in \<byline\>](https://github.com/TEIC/TEI/issues/1858) | Subgroup thinks we should implement this the way that SB outlines in the comment and should mark in green. Although we may want to consider the implications of putting things like \<floatingText\> in \<byline\> Full group: To be fixed with a redesign of \<q\> (new ticket: [\#1918](https://github.com/TEIC/TEI/issues/1918)) |
| \#1859 | A | [\<altIdent\> should never be empty](https://github.com/TEIC/TEI/issues/1859) | \<altIdent\> should only permit XML names, but it’s currently allowed in \<category\>, \<taxonomy\> and \<joinGrp\> (where perhaps \<gloss\> would be a better choice?). This is a corrigible error, but we should do a deprecation period anyway in case people are using this in the wrong way. |
| \#1860 | EM, MH, JC, MS | [Encoding RDF relationships in TEI (TEI\+RDFa and alternatives)](https://github.com/TEIC/TEI/issues/1860) | should be discussed by the workgroup on LOD, and ensure some Council members are involved with that. |
| \#1861 | C | [Feature Request: \<listFigure\> element](https://github.com/TEIC/TEI/issues/1861) | Yes? Maybe? We aren’t *opposed* to the idea, but we aren’t sure if it needs its own element, or if \<list\> (in \<sourceDesc\>?) would suffice. Would this also be something that gets generated by processing (akin to \<divGen\>?) Full Council: action on EBB to work with Joey Takeda on some use cases for Council to consider. Look at \<object\> to see what it might need to refer to graphics the way \<figure\> does. |
| \#1862 | A | [Element content models with valList should not have any other content](https://github.com/TEIC/TEI/issues/1862) | Sub\-group thinks this constraint certainly belongs in p5odds (the schema P5 itself uses) and in tei\_customization (the schema for writing TEI customization ODDs). We are unconvinced, however, that it belongs in P5 itself. If you want to define a markup language using ODD that allows this weird kind of data, power to you. |
| \#1864 | B | [Feature Request: Expand the content model of \<catDesc\>](https://github.com/TEIC/TEI/issues/1864) | solution 3 implemented |
| \#1868 | C | [listWit should also allow msDesc and object](https://github.com/TEIC/TEI/issues/1868) | Subgroup thinks that it would be best to keep things as they are so that \<listWit\> contains a list of \<witness\> elements, which can in turn describe witnesses using \<msDesc\>, \<object\>, etc. We don’t see an issue with the nesting that this requires. |
| \#1869 | A | [ODD spec elements should have their own source attribute](https://github.com/TEIC/TEI/issues/1869) | Subgroup likes solution 2, and LB’s @lib attribute. (In large part because the obvious way to handle \#1 doesn’t work here, because one of the attributes is global.) Full Council: We recommend calling it @specSource, but processing will have to support both @source and @specSource when pointing to an ODD source. We don’t know what elements get the special new attribute yet. |
| \#1871 | C | [restore explanation of TEI namespace](https://github.com/TEIC/TEI/issues/1871) | JC: Note, best solution is probably to redirect the namespace URL to a different documentation URL, which is then https. (There saying it has been redirected.) F2F subgroup: agrees with JC HC: I don’t know how to do what JC suggests, but I have tried adding pages for the namespaces, and they seem to work. JC: No, they don’t work! They redirect to https which is completely wrong. What I’m saying is that the [https://www.tei\-c.org/ns/1\.0](https://www.tei-c.org/ns/1.0) should redirect somewhere else precisely because we don’t want to confuse people with putting https in the namespace. |
| \#1872 | A | [Multiple sibling remarks in the same language cause translation issues](https://github.com/TEIC/TEI/issues/1872) | Subgroup favours solution 2\. Solution 1 may be more robust, but too much work to implement. This involves changing the stylesheets so that in a tagdoc the \<remarks\> are labeled “Notes” (plural). Full Council: Add schematron rule to say only one \<remark\> per language. |
| \#1873 | B | [Create Website Documentation Specifically Aimed at Developers](https://github.com/TEIC/TEI/issues/1873) | Full Council: Maybe start working on this in the TEI wiki. Assign PS to make the space on the TEI wiki. |
| \#1875 | C | [sentence on tables merges style and rend attrs](https://github.com/TEIC/TEI/issues/1875) | Good idea. Council approves if they agree and RV does it. |
| \#1876 | A | [att.pointing and att.scoping overlap](https://github.com/TEIC/TEI/issues/1876) | Make att.pointing claim membership in att.scoping. Full Council: @match (with XPath) may be obsolete now that we have XPointer? @target takes you to known processible stuff. @match used to be use for uncertainty. Questions: Are we overcomplicating the class system in trying to reduce the number of permitted attributes. Or is it more daunting for the user to have to choose from among a long list of attributes CLOSED\-WON’T\-FIX. All simple solutions are worse than doing nothing. |
| \#1878 | C | [datatype of @name of \<attRef\> too loose](https://github.com/TEIC/TEI/issues/1878) | yes. |
| \#1879 | A | [New element listNote as a wrapper for note elements](https://github.com/TEIC/TEI/issues/1879) | Subgroup: Wait until standoff proposal figures out what’s going on with annotations |
| \#1881 | C | [Repair ambiguous language referring to figures, tables, and examples](https://github.com/TEIC/TEI/issues/1881) | Should be set to go: should be cleaned up for clarity. Sarah wants to do this. |
| \#1883 | A | [simplePrint ODD has duplicate lines](https://github.com/TEIC/TEI/issues/1883) | already fixed and closed |
| \#1885 | C | [Update teidata.temporal.iso (and teidata.duration.iso?)](https://github.com/TEIC/TEI/issues/1885) | We should be conformant with ISO. So we should update our datatypes. Council: This needs more review to see how it affects our current practice of encoding ambiguous dates. |
| \#1889 | A | [why cant i define a PM in terms of model classes rather than individual elements?](https://github.com/TEIC/TEI/issues/1889) | JC: Sounds like a great idea. Hard to implement. MT: Probably not that useful.If we had inheritance\-based classes it might be easier. But it might not benefit users to have to study the model classes and their various dependencies. |
| \#1902 | C | [Add model.bibl to model.entryPart.top](https://github.com/TEIC/TEI/issues/1902) | Not clear whether OP wants \<bibl\>, model.biblPart, or model.blblLike. SS to ask on ticket. |
| \#1906 | A | [repositories and manuscripts in multiple locations](https://github.com/TEIC/TEI/issues/1906) | JC: Original Poster is mistaken in what they are doing. Council: JC will make a final response to close this ticket |
| \#1907 | B | [Datatype example doesn’t do what prose implies it does](https://github.com/TEIC/TEI/issues/1907) | Sub\-group (SB,HC,PS,SS) thinks that SB’s (2\) is the better solution, and leaves it to assignee (EBB) to improve the wording. |
| \#1909 | A | [non\-formulaic formula](https://github.com/TEIC/TEI/issues/1909) | Closed |
| \#1910 | B | [Add location information to the new \`\<conversion\>\` element](https://github.com/TEIC/TEI/issues/1910) | SB—Not sure I understand entirely, and I agree with @duncdrum’s request for examples. But I suspect an attribute that points to a \<place\> is better than a child \<placeName\> |


 