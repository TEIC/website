---
title: "TEI Technical Council virtual “F2F”, 2020-05-01 / 05-03"
date: 2020-05-03
---
# TEI Technical Council virtual “F2F”, 2020-05-01 / 05-03
TEI Technical Council virtual F2F meeting: 1–3 May 2020 plus add\-on sessions on May 5, 12, and 19\.




| **Friday, May 1** | 09:00–13:00 EDT  / 14:00–18:00 BST / 15:00–19:00 CEST | Council meeting |
| --- | --- | --- |
| **Saturday, May 2** | 9:00–12:00 BST / 10:00–13:00 CEST | European break\-outs |
|  | 09:00–13:00 EDT / 14:00–18:00 BST / 15:00–19:00 CEST | Council meeting |
|  | 15:00–18:00 EDT | American breakouts |
| **Sunday, May 3** | 09:00–13:00 EDT / 14:00–18:00 BST / 15:00–19:00 CEST | Council meeting |


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Nicholas Cole (NC)
* James Cummings (JC, non\-voting guest)
* Jessica Lu (JL)
* Martina Scholger (MS, Chair)
* Peter Stadler (PS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux (VBJ)


Friday, May 1 (full Council)
============================


started \~13:13Z, finished \~16:58Z
Next release
------------


* Release technicians: NC (note taker), HC (lead tech), JL (support tech)
	+ Release techs rotation discussion: SB suggests that folks rotate through releases, 1st as note taker, 2nd as support release tech, 3rd as lead release tech; JL fears that having 2 'new' councillors may be too much but also valuable to do a thorough check if release is really following the documented procedure; JL and EB suggest that doing 3 releases in a row is a bit cruel; SB suggests that maybe it's enough if notetaker moves to a release tech, not necessarily both support and lead.
* When: Week of Aug 9–15, 2020; Target: Tues 08–\-11 \& Wed 08–\-12
* Amending release practice: We should create the release branch earlier than we have been. More than one day, less than one week? Making the release branch can define when we move from refrigeration to freeze.
* What do we want to release in August?
	+ \<standOff\>, \<listAnnotation\>, \<annotation\> content model
	+ remaining work from uniHan issue \#[1805](https://github.com/TEIC/TEI/issues/1805)
		- Duncan Paterson will create a pull request


Guidelines for Recusal from the TEI Technical Council
-----------------------------------------------------


* Draft Proposal prepared by JL, EB, SB
* Proposal should be published as TCW.


Restructuring Chapter 11
------------------------


* MS was talking to Gerrit Brüning. No progress has been made since Tokyo.
	+ **Action on MS** by 2020\-05\-15: Check status of MS SIG. Conveners: Stephen McCormick and Gerrit Brüning. MS SIG meeting in Graz was well attended, Huw Jones and Yasmin Faghihi leading it.
* Discussion on establishing a working group on restructuring chapter 11\. A working group receives a mandate in the form of a charter from Council on  something specific to accomplish.
	+ Council would appoint a chair; possible experts to ask:
		- Gerrit Brüning
		- Brett Barney
		- Elena Pierazzo
		- Marjorie Burghart
		- Elli Bleeker
		- Wout Dillen
	+ Interested Council members: EB, SB, NC, JL, MB, RV
	+ **Decision:** **Action on RV and MB** to start work on actual rewriting in the week of July 13\. (Send message to MS SIG about this closer to the date).
* MS SIG started a restructuring proposal
* Draft: [https://github.com/SteveWLU/TEI\-MS\-SIG/issues/5](https://github.com/SteveWLU/TEI-MS-SIG/issues/5)
	+ Restructuring Ch. 11 ticket: <https://github.com/TEIC/TEI/issues/1427>


Framing discussion: `standOff`, annotations, Web Annotation Model, and `extraTextual`
-------------------------------------------------------------------------------------


* Finalize the content model of \<standOff\>: <https://github.com/TEIC/TEI/issues/1977>
* MT: historical report on \<standOff\> and [WADM](https://www.w3.org/TR/annotation-model/)  <https://github.com/TEIC/TEI/issues/1745>
* SB: \<extraTextual\> is not a priority for upcoming release; \<annotation\> content model (and thus WADM) is.
* For our meeting on Sunday, familiarize ourselves with [\<listAnnotation\>](https://jenkins.tei-c.org/job/TEIP5-branch-sydb-standOff/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/ref-listAnnotation.html): Do we agree with SB's implementation?
* IIIF example of web annotation: The mapping between TEI \<zone\> system and IIIF is not particularly difficult. A larger problem is extracting TEI data into a IIIF manifest losing its context. Need a pointing mechanism from the manifest to the TEI XML file (Web Annotation has support for XPath selectors — though not XPointer). Shouldn't be forced to cut up the TEI to suit the manifest.
	+ We need to be able to implement the TEI data model in \<standOff\>
	+ Web annotation model has a “select” option (and “selector”)
	+ See [description of IIIF annotations](https://iiif.io/api/annex/openannotation/#selectors)


Roma
----


* Ron van den Branden did some intensive testing, he found some issues.
* Update module on ODD and customization for TEI by example.
* RV wants to discuss replacement of old Roma with new Roma. By next TEI conference meeting (?)
* romabeta does not support RelaxNG.
* PS asks how many people do alter the content model. He points out that romabeta should become main roma.
* RV reminds Council that we agreed on classicroma.
* RV points out that full support for source is a requirement.
* Needs a sanity checker like old Roma (though that was disabled in old Roma). People still like it.
	+ New sanity checker ideas: check for element isolation, check attribute values, datatypes, issue warnings if required elements are deleted, if you had list but not item, etc. No list of enumerated datatypes, etc.
	+ vdB's suggestion: When you add a new element, you also learn what classes it's a member of...this might eliminate the need of more detailed sanity checking.
	+ Or should sanity checking be removed from Roma and be done by… XSLT and Schematron?
	+ **Action on HC:** make an issue for Sanity checker work: <https://github.com/TEIC/TEI/issues/1991>
* Issue with generating ISO\-Schematron: OxGarage generates an error instead of ISO Schematron: <https://github.com/TEIC/oxgarage/issues/14>
* We need to update the documentation for Roma on the TEI website: [https://tei\-c.org/guidelines/customization/customizing\-the\-tei\-with\-roma/](https://tei-c.org/guidelines/customization/customizing-the-tei-with-roma/)
* RV created a checklist on old Roma features and their implementation in romabeta: [https://docs.google.com/document/d/11X2pBQ7zTvy\-xXWYlJfWB1O9STEY\-vau3Bd1nydkgVY/edit\#heading\=h.bn1o0dodsg3i](https://docs.google.com/document/d/11X2pBQ7zTvy-xXWYlJfWB1O9STEY-vau3Bd1nydkgVY/edit#heading=h.bn1o0dodsg3i)


Report on OJS migration
-----------------------


* PS: OJS is used by the TEI Consortium for JTEI journal. RvB is hosting OJS, currently migrated to HumaNum server. Created a Docker file, PS wants to move that to official TEI\-C GitHub. Council agrees.


Stylesheets issues triage
-------------------------


* separate meeting at the end of May
* Either SB \& PS and MH \& EB, or (if EB cannot then) SB \& MH and MS \& PS.
	+ goal is to go through all the tickets, categorize and perhaps assign them. **Action on** SB \& MH to develop a system.
* **Action on SB** to talk with MH **next Friday (2020\-05\-08\)** about categorizing Stylesheets issues to aid in triage. E.g., separate those that are no longer relevant, already fixed, untested; also perhaps priority and dependencies.


Saturday, May 2
===============


European break\-outs
--------------------


started \~10:05, ended \~12:58
* Guidelines Issues with [Status: Needs discussion](#needsDiscussion)
	+ Group A: MS, MT, JC
	+ Group B: NC, PS


Full Council meeting
--------------------


started \~13:07Z, ended \~17:12Z
* Discuss issues from European break\-out group
* oXygen plug\-in with MH? — SB recommends we skip this and invite Martin Holmes to an upcoming conference call to discuss the perennial plug\-in issues.
	+ Request help from Radu Coravu and Alex Jitianu of oXygen.
	+ Oxygen plugin communication with Alex Jitianu of oxygen
* MS asks Council to review open [Pull requests](#pullRequests)
* MS asks Council to review issus labeled as [Status: Needs discussion and Go](#needsDiscussionGo)


American break\-outs
--------------------


started \~19:06Z, ended \~22:07Z
* Guidelines Issues with [Status: Needs discussion](#needsDiscussion)
	+ Group C: EB, HC, MB
	+ Group D: SB, JL, RV


Sunday, May 3
=============


Full Council meeting
started \~13:06Z, ended \~17:06Z


Discuss issues from American break\-out group
---------------------------------------------


\<standOff\>, annotations, and the Web Annotation Model
-------------------------------------------------------


* see framing discussion from Friday for more details
* MT: historical report on \<standOff\> and WADM  <https://github.com/TEIC/TEI/issues/1745>
* HC and SB: What do we want to include from the WADM?
* RV: Start with what's essential and build up. Needs to be easily mappable from TEI to WADM (so it can be viewed by WADM tools, etc.), but not necessarily the other way around.
* SB: Just because it's in WADM doesn't mean it needs to be in TEI.
* MT: Annotation is a hinge that connects a certain interpretation with a portion of an existing TEI document. Standoff annotations (in the \<standOff\> element, in the same or a separate external document) documents the act of such interpretation, storing information on these interpretations with references to the portion of the document being interpreted and metadata about the act itself (e.g. the agent responsible, date of annotation creation, type of the annotation). Body and target always need to be perfectly clear.
* What do we already have that's relevant? Prosopography referencing, relation/listRelation for example)?
* Council discusses the history of the issue and the initial request coming from the linguistic community.
* MT: there are some applications and we shouldn't be limiting our proposal to the linguistic community because there are well defined use cases for \<standOff\> already. E.g. earlyPrint project (presentation of solutions implemented by earlyPrint ensues)
* MT's example: [https://github.com/TEIC/TEI/issues/1745\#issue comment\-368322629](https://github.com/TEIC/TEI/issues/1745#issuecomment-368322629) — practical applications for annotating documents stored elsewhere.
* Target, body are separated; metadata has to be clearly defined in the body.
* Question to MT: what would you change now in the earlyPrint annotation structure? MT: make metadata a repeatable child element to allow storing information about subsequent changes of status, updates, etc.
* PS: wouldn't any change just constitute a new annotation? MT: you could see it this way but then some trace of 'connected' previous annotations would be useful, so one way or another...
* What's appropriate to be in the body of an annotation?
	+ \<note\>, critical apparatus (\<listApp\>), \<orig\>/\<reg\>, etc.
* HC: Do we \*already\* have mechanisms for annotations that are sufficient to support WADM? Or do we need something more elaborate?
* What use\-cases do we envision?
* NC: Let's collaborate on a [shared document](https://docs.google.com/document/d/15lPVs89ehDNpQQ3Qf79kfRAECSN-MT_SpBlQpHUqyLI/edit#heading=h.eapsje2s6t2s) that describes the use\-cases we envision, what we need to support WADM, and what we're already doing?
* SB: What did Laurent Romary and Piotr Banski ask for?
	+ See [\#1977](https://github.com/TEIC/TEI/issues/1977)
* HC’s proposal:



```
<annotation>
  <ptr type="target" target="https://example.com/target"/>
  <ptr type="body" target="https://example.com/target"/>
</annotation>
```


```
<annotation>
  <ptr type="target" target="https://example.com/target"/>
  <note type=”body">I am the body (but Schematron limits me to sanity)</note>
</annotation>
```

* + Suggestion: add \<ptr type\="meta" target\=”\#creator \#date \#foo”\> to HC’s example
* **Action on HC** to continue the existing use\-case document and elaborate examples:
* [https://docs.google.com/document/d/15lPVs89ehDNpQQ3Qf79kfRAECSN\-MT\_SpBlQpHUqyLI/edit\#](https://docs.google.com/document/d/15lPVs89ehDNpQQ3Qf79kfRAECSN-MT_SpBlQpHUqyLI/edit#)
* Old Standoff workgroup notes with some use cases (some further extracted from LR proposal) [https://docs.google.com/document/d/1rloyaZzQJQIsBkCC\_1BC33lrTQIvZ3FC\-YUXL0bpwdk/edit\#heading\=h.9oq34odpmpgh](https://docs.google.com/document/d/1rloyaZzQJQIsBkCC_1BC33lrTQIvZ3FC-YUXL0bpwdk/edit#heading=h.9oq34odpmpgh)


Discussion on TEI\+RDFa issue
-----------------------------


* [See https://github.com/TEIC/TEI/issues/1860](https://github.com/TEIC/TEI/issues/1860)
* PS: They want inline annotations that conform to RDFa. PS recommends a customized ODD to add attributes to the TEI for this purpose. **Action on PS and MS** to work on this ODD customization.


Collaborative TEI editor (presentation NC)
------------------------------------------


* people are seeking more visual ways to do transcription markup
* How do you represent changes to documents when done collaboratively (as with a Google Doc)?
* Collaborative editors in the web world don't tend to edit the web document itself, but use internal mapping...
* There was a 2002 paper about multiple people doing XML encoding together...but we don't really do this now. Instead, collaborative editing is working on flattened markup, JSONic.
* Example from Quill project — works with character offsets.
* Most approaches are really limited. NC wants to address: How would you turn TEI into this structure and returning it to TEI—how do you roundtrip it? NC wants to work on the intermediate format that would be workable for the TEI.
* MB: Folger Dromio (transcription platform): looked at comparing different coders' application of markup. Dromio does not output valid TEI, but does reconcile the various decisions.
* JC: To compare, things like CWRC\-writer aren't simultaneously collaborative, but linked to GitHub. [https://cwrc\-writer.cwrc.ca/](https://cwrc-writer.cwrc.ca/) (but are working on the TEI).
* MT: Most people want to work in Word, and we can go from named styles to TEI (via Publisher, etc.)
* What NC wants is a more visual editor in the HTML DOM. See <https://www.quillproject.net/quill>


Documentation
-------------


* proposal on how to organize the documentation is needed
* MS recommends to discuss this in our next Council call


Tue, 05 May
===========


Council extended its VF2F meeting by another 1\.5 hours.
Started: \~13:04Z.


* MS: Board Chair has asked if there is content Council wants to add to the email sent to potential nominees of the elections. “Workload” portion of our new recusal document suggested. No objections from Council.
* Suggestion to rename resignation document to “Workload and Guidelines for Resignation”, but Council decided against.
* Fall F2F:
	+ Conference and Members’ Meeting is 27–30 Oct 2020, thus we were scheduled for 24–26 Oct.
	+ Council decides to keep that date.


Tue, 12 May
===========


Started @ 13:05 with: SB, EB, MB, HC, JL, MS, PS, RV
* Continue with discussing issues from VF2F


Repeating sub\-group information for ticket charts:
* Group A: MS, MT, JC
* Group B: NC, PS
* Group C: EB, HC, MB
* Group D: SB, JL, RV


Tue, 19 May
===========


Started @ 13:05 with: SB, EB, MB, HC, NC, JL, MS, PS, MT, RV
* Continue with discussing issues from VF2F


 
Status: Needs discussion
------------------------


 


| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| European Group: | | | |
| \#1582 | A | [phrase\-level TEI elements should be allowed inside \<sch:assert\> and \<sch:report\>](https://github.com/TEIC/TEI/issues/1582) | Group A thinks that this should be green and that model.phrase.xml should be allowed. |
| \#1604 | B | [\`@source\` on schemaSpec should be only a single pointer](https://github.com/TEIC/TEI/issues/1604) | Has anyone tested Lou’s assertion that multiple values work? —SB Looks like an approach was agreed: continue to allow multiple values, document, and check that it works. Already assigned to SB. |
| \#1606 | A | [dataRef should not permit @restriction and @key](https://github.com/TEIC/TEI/issues/1606) | Have a Schematron rule to enforce that @key or @ref and @restriction cannot be used together, e.g  ``` <sch:rule context="tei:dataRef[@key]”>    <sch:report test="@restriction"    role="nonfatal">The attribute @restriction cannot be used in conjunction with @key.</sch:report> </sch:rule> ``` |
| \#1632 | B | [egXML needs a way to highlight rendtitional aspects in the example](https://github.com/TEIC/TEI/issues/1632) | c.f. \#[1928](https://github.com/TEIC/TEI/issues/1928) Looks like it should probably be a \<standOff\> annotation to me (NC). Low priority? |
| \#1658 | A | [\<q\> should be allowed in \<span\>](https://github.com/TEIC/TEI/issues/1658) | This may be solved with issue \#[1918](https://github.com/TEIC/TEI/issues/1918), subgroup not against the idea. |
| \#1661 | B | [Need \<surplus\> in \<subst\>](https://github.com/TEIC/TEI/issues/1661) | Why is \<surplus\> inside \<subst\>?  Wouldn’t that mean that \*all\* \<surplus\> tags are inside a \<subst\> (logically?) (NC). We agree with Lou’s comment from 2017\. Recommend to close. |
| \#1675 | A | [Check teidata.pointer attribute values starting with \# to ensure they are proper xml:id's](https://github.com/TEIC/TEI/issues/1675) | We agree with JC’s proposal. Raise warnings only. Make Green for Go. (MT: cf [https://github.com/eXist\-db/exist/issues/540](https://github.com/eXist-db/exist/issues/540) and related [https://github.com/relaxng/jing\-trang/issues/188](https://github.com/relaxng/jing-trang/issues/188)) |
| \#1698 | B | [The namespace could be mentioned more prominently in the guidelines](https://github.com/TEIC/TEI/issues/1698) | Add a new appendix. Not over\-kill — it would be clearer. Make this ticket green. Should mention [http://tei\-c.org/ns/examples/](https://tei-c.org/ns/examples/) as well as [http://tei\-c.org/ns/1\.0/](http://tei-c.org/ns/1.0/). |
| \#1710 | A | [Review placement of classes, macros, and datatypes in modules](https://github.com/TEIC/TEI/issues/1710) | Recommend **deprecation period** for changes which move classes from tei module to only specific module; rule of thumb would be to investigate candidates from classes only used in a single module but still evaluate one by one if they are potentially to be used more general e.g.* att.damage seems to be only applicable in the transcr module so should not be by default available in tei * att.datable.custom should probably stay in namesdates, even though it is used in tei indirectly via other classes because you don’t want it unless you are doing specialised stuff |
| \#1721 | B | [multi\-lingual tei and xml](https://github.com/TEIC/TEI/issues/1721) | This should probably be discussed by the i18n working group? NC: This seems to be an edge\-case, but if TEI is XML, we should probably align more closely with the XML spec — though I’m not totally clear how we are deviating. Syd’s [comment on 6 Dec. 2017](https://github.com/TEIC/TEI/issues/1721#issuecomment-349773394) appears very sensible.  This could take up a lot of time for an edge\-case. NC: Michael Sperberg\-McQueen says in [28 Nov 2017](https://github.com/TEIC/TEI/issues/1721#issuecomment-347398105) that: “The XML spec does not require that the value of @xml:lang be interpreted as applying to all attributes \-\- I take the intent to be that it applies to those with free natural\-language content.” Case closed. |
| \#1722 | A | [Warnings in Jenkins based on TEI\_to\_odd4odds.xslt](https://github.com/TEIC/TEI/issues/1722) | Set to status\=Go. Prod SB. |
| \#1724 | B | [inconsistency in datatypes of key\= and ident\=](https://github.com/TEIC/TEI/issues/1724) | Would be nice to align those datatypes. Our proposal would be to choose teidata.name since it’s the superclass (thus keeping backwards compatibility) and allows for future namespacing of modules etc. |
| \#1729 | A | [inconsistency in reason attribute definition for gap and unclear](https://github.com/TEIC/TEI/issues/1729) | Status\=Go. Prod SB to provide description for eccentric\_ductus. |
| \#1745 |  | [Standoff: annotation microstructure](https://github.com/TEIC/TEI/issues/1745) | See discussion on Sunday |
| \#1776 | B | [add \<w\> to att.lexicographic](https://github.com/TEIC/TEI/issues/1776) | Looks as if it should be green; ask MT and EB about the current status. (Council greenlights this with requested modification to @bansp's pull request) |
| \#1781 | A | [Mysterious schematron constraint in simplePrint](https://github.com/TEIC/TEI/issues/1781) | Easy: Just remove [https://github.com/TEIC/TEI/blob/dev/P5/Exemplars/tei\_simplePrint.odd\#L4540\-L4547](https://github.com/TEIC/TEI/blob/dev/P5/Exemplars/tei_simplePrint.odd#L4540-L4547) constraintSpec entirely. We don’t think we want it. |
| \#1787 | B | [Feature Request: \`\<projectDesc\>\` content model needs to be richer](https://github.com/TEIC/TEI/issues/1787) | Responsibility statements about the project can be captured in a structured way in the title statement.  \<projectDesc\> is defined by the Guidelines as a prose field. The proposed tags in the proposal fit well into the \<titleStmt\>. Implementing this would mean that there is a confusion about where things should go. The naming of the prose field has caused confusion — the whole *formal* description of the project is the title statement and this additional prose field. Recommend close. (NC) |
| \#1800 | A | [more on dictionary: The element \<usg\> inside \<def\>](https://github.com/TEIC/TEI/issues/1800) | \<usg\> should be allowed inside \<def\>, no reason not to do it. Recommend Green Status |
| \#1851 | B | [msContents/msItem should be replaced in tei:object with something non\-MS specific](https://github.com/TEIC/TEI/issues/1851) | P6\-dev? Ask JC. JC: Should be done as soon as possible. Having hybrid is problematic. Planning to get around to it over summer for a first draft proposal at least. |
| \#1856 | A | [\`\<ab\>\` should be able to nest](https://github.com/TEIC/TEI/issues/1856) | Close ticket: discussion has been going for a long while but all the examples presented still remain unconvincing; recommend closing the ticket with a note to that effect and softening remark that obviously issue could be reopened if new examples, less controversial, are provided. MS intends to revisit her material to search for use cases that would justify the need for nested \<ab\>. At that point she may reopen the ticket. |
| \#1857 | B | [\`\<egXML\>\` should be able to nest](https://github.com/TEIC/TEI/issues/1857) | The final comment on <https://github.com/TEIC/TEI/issues/1798> was this was actually already valid. JC says that we should **not** encourage this further (except for examples of egXML). Unclear what the consensus is or was, or what the technical challenge of validation is. Council notes that \<egXML\> should contain anything, so why wouldn't this be allowed? SB notes that it's definitely not allowed...but we should investigate why: probably a Stylesheets processing issue. |
| \#1858 | A | [\<q\> should be allowed in \<byline\>](https://github.com/TEIC/TEI/issues/1858) | While this may be solved with issue \#[1918](https://github.com/TEIC/TEI/issues/1918), we might as well go ahead and do it now. Status\=Green/Go. |
| \#1860 | B | [Encoding RDF relationships in TEI (TEI\+RDFa and alternatives)](https://github.com/TEIC/TEI/issues/1860) | RDFa is a set of attributes that could well be incorporated as an attribute class (with prefixed attributes names, e.g. \`rdfa:about\`) in TEI. Or add an customization TEI\+RDFa in exemplars. Needs discussion with the whole Council. What about not including it, but rather using it as an example for how TEI can be mixed with other standards? (see discussion on Sunday) |
| \#1861 | A | [Feature Request: \<listFigure\> element](https://github.com/TEIC/TEI/issues/1861) | Ask Joey Takeda and EB to come up with a proposal with pros/cons. Options include just using \<list\>, adding \<figure\> to \<listBibl\>, or new \<listFigure\> element. Council notes that we should go ahead and work on this, probably use @copyOf on \<figure\>,  added MS to the ticket. |
| American Group: | | | |
| \#1769 | C | [teidata.pointer equivalent to move/@where](https://github.com/TEIC/TEI/issues/1769) | Group thinks HC's suggestion would work, and he should emend the pull request accordingly. |
| \#1805 | D | [Suggestion for new uniHan element](https://github.com/TEIC/TEI/issues/1805) | Ongoing. MS identified phases on 4/15/20\. Action on RV to check in with Duncan Paterson. re: movement on phase 3 onward. |
| \#1869 | C | [ODD spec elements should have their own source attribute](https://github.com/TEIC/TEI/issues/1869) | Ask SB why decision wasn’t implemented? Subgroup suggests remove needs discussion label. Discussion 5\-12: Some concern that introducing this new attribute will break people's ODDs. Connection to [\#1604](https://github.com/TEIC/TEI/issues/1604) |
| \#1870 | D | [seriesStmt needs better examples, use of biblScope](https://github.com/TEIC/TEI/issues/1870) | Subgroup thinks EB can move forward with updating \<biblScope\> example and prose for \<seriesStmt\>. Further discussion of relevant elements for \<biblScope\> and its distinction from \<citedRange\> needed. **Action on RV** (or better MS) to reach out to Daniel Schwartz re: multiple \<seriesStmt\> for his project. \[Daniel Schwartz has since replied on the ticket.] 05\-12 discussion: Council thinks we may want to permit multiple \<seriesStmt\>s in the TEI header (open a new ticket for this, and indicate Council is in favor, but invite discussion from the community.) **Action on EB** to come up with an example that uses more than the standard limited things we've been using in examples of \<biblScope\>. |
| \#1877 | C | [FR for new \`\<elision\>\` element](https://github.com/TEIC/TEI/issues/1877) | Council subgroup ultimately likes the proposed element and its content model, so long as we have a clear explanation that this is material purposefully omitted in the source. But we're still uncertain of the appropriate name: \<elision\>, \<ellipsis\>, or \<omitted\>? Council favors \<ellipsis\> |
| \#1879 | D | [New element listNote as a wrapper for note elements](https://github.com/TEIC/TEI/issues/1879) | Subgroup suggests broader all\-Council discussion. 5\-12 Council discussion: Make sure we're clear on the difference between \<noteGrp\> and \<listNote\>. \<noteGrp\> would be clustering notes about the same thing. Also it needs to be clear how this relates to / collides with \<listAnnotation\>. (Is \<listAnnotation\> confined to WADM?) In general it's confusing to understand the semantics of \*Grp Usually we use \*Grp to associate the same things (except for \<personGrp\>). |
| \#1880 | C | [investigate adding note to macro.limitedContent](https://github.com/TEIC/TEI/issues/1880) | Subgroup thinks this probably isn't going to hurt anything, though macro.limitedContent is already probably overused. Council discussion 5\-12: We can't/shouldn't really do this because \<note\> is in model.global. Close wontfix. |
| \#1891 | D | [Extend the content model of cit to include model.segLike](https://github.com/TEIC/TEI/issues/1891) | Subgroup thinks allowing \<pc\> is good idea, but not on board with model.segLike. May also want to consider \<cit\> definition \& examples vs. common usage. Full Council agrees to green light for adding \<pc\> only. |
| \#1908 | C | [Bad examples for definition of org/@role](https://github.com/TEIC/TEI/issues/1908) | Titular issue is resolved, but subgroup also approves of JC’s suggestion of adding teidata.enumerated. We recommend greenlighting for this alteration. Council greenlights JC's suggestion to change the datatype or @role to teidata.enumerated. |
| \#1910 | D | [Add location information to the new \`\<conversion\>\` element](https://github.com/TEIC/TEI/issues/1910) | Subgroup suggests closing ticket, unless OP returns with additional issues following \<listPlace\> solution. After discussion, most of Council agrees with implementing @where on \<conversion\>, and we want an attribute class for @where to be used as it is on \<event\>. But putting multiple values on @where seems problematic for keeping this definition consistent with its use on \<event\>. We are considering an attribute class, att.locatable and will open a new ticket about this. MT wants to work up a couple of examples to see if `@where` really makes sense here. SB to post examples changing to single value for @where. |
| \#1911 | C | [material element should be in att.typed](https://github.com/TEIC/TEI/issues/1911) | Subgroup recommends defining @function on \<material\>. Council discussion: We favor adding @function as well as adding \<material\> to att.typed. We need to further investigate how @function aligns with its use on \<metamark\> and att.segLike. |
| \#1914 | D | [Add modelGraphic.Like to the content model of \<cit\> (allow \<media\> in \<cit\>)](https://github.com/TEIC/TEI/issues/1914) | Subgroup thinks model.graphicLike should be added to content of \<cit\> to allow for media. Council after long discussion (considering whether \<figure\> would be enough, and deciding it would not be) finally agrees to greenlight this and add model.graphicLike to \<cit\>. |
| \#1955 | C | [FR: TEI Features for CMC](https://github.com/TEIC/TEI/issues/1955) | Subgroup likes this, and wonders if this should be a new chapter to the Guidelines, and should Council task a working group to prepare it? VF2F2020: Council decides those assigned to this ticket will meet to review the proposal carefully, see how it best fits into the Guidelines—perhaps as a new chapter—and return to the working group with a proposal for how to proceed. **Action on** SB, PS, JL. |
| \#1967 | D | [\<linkGrp\> needs \<head\> and \<desc\>](https://github.com/TEIC/TEI/issues/1967) | Subgroup is generally okay with adding \<desc\> but suggests some further discussion, esp. re: need for \<head\>. |
| The following issues were discussed by the American break\-out\-groups, but there was no time to review them with full Council. This will be done in the monthly meetings. | | | |
| \#1916 | C | [Corpus Exemplar should more explicitly state what it's for](https://github.com/TEIC/TEI/issues/1916) | Subgroup agrees with Martin Holmes, we should recommend oXygen proceed with changing the template file names on disk. Open a ticket on oXygen or contact Radu Coravu? |
| \#1917 | D | [Guidelines "XML syntax" button is broken](https://github.com/TEIC/TEI/issues/1917) | Ticket closed. Suggest Martin Holmes to open a new ticket for getting rid of JQuery and allowing info for attributes in content models. |
| \#1918 | C | [Investigate changing the class membership of \<q\>](https://github.com/TEIC/TEI/issues/1918) | Done. Green. |
| \#1919 | D | [category, taxonomy, and joinGrp should not have model.glossLike in their content models](https://github.com/TEIC/TEI/issues/1919) | Subgroup thinks this is low priority, but should investigate removing \<altIdent\> from \<category\>, \<taxonomy\>, and \<joinGrp\> (but perhaps not via model changes). |
| \#1921 | C | [Remove \<schemaSpec\> from model.divPart and add to small set of elements](https://github.com/TEIC/TEI/issues/1921) | Subgroup totally agrees with JC. We really need to de\-class\-ify this. |
| \#1925 | D | [\<equiv\> should get the @predicate attribute](https://github.com/TEIC/TEI/issues/1925) | Subgroup suggests Status:Go, with @predicate put in a class. |
| \#1928 | C | [Substring highlighting for egXML](https://github.com/TEIC/TEI/issues/1928) | Great idea (JC). We should close one of these tickets as superfluous. See also [\#1632](https://github.com/TEIC/TEI/issues/1632). |
| \#1929 | D | [What is a paragraph, really?](https://github.com/TEIC/TEI/issues/1929) | Subgroup greenlights EB to revisit definition/description of \<p\>, but any concrete change to the Guidelines would warrant further discussion. |
| \#1931 | C | [Examples in P5 are unnumbered](https://github.com/TEIC/TEI/issues/1931) | Subgroup recommends that we rethink how we deal with examples generally (connected with highlighting, too, and i18n group's needs to prioritize examples in particular languages). For now, we should consider it low priority. JC notes he is writing an article for jTEI about some of the issues with examples. |
| \#1933 | D | [exemplum and language](https://github.com/TEIC/TEI/issues/1933) | Subgroup suggests this ticket for consideration by i18n group. |
| \#1934 | C | [Categories of uncertainty](https://github.com/TEIC/TEI/issues/1934) | Greenlight to add to att.typed |
| \#1937 | D | [slightly expand \<content\> descendants' namespace to a:](https://github.com/TEIC/TEI/issues/1937) | Subgroup suggests closing ticket unless OP returns with objections. |
| \#1939 | C | [Content models for \<front\> and \<back\> identical?](https://github.com/TEIC/TEI/issues/1939) | Subgroup agrees that \<front\> and \<back\> should be identical, and that model.divBottom does indeed belong in \<front\> as well as \<back\>. We should greenlight to try to implement. |
| \#1942 | D | [Unused test files should be removed](https://github.com/TEIC/TEI/issues/1942) | Subgroup changed to Status:Go. |
| \#1943 | C | [Allow \<bibl\> in \<label\>](https://github.com/TEIC/TEI/issues/1943) | HC will write to Scott to prod him for an example. |
| \#1945 | D | [lg element content model prevents accurate encoding](https://github.com/TEIC/TEI/issues/1945) | Subgroup thinks this ticket can be deferred in favor of \#[1877](https://github.com/TEIC/TEI/issues/1877), which may solve the issue. |
| \#1946 | C | [No column\- nor row\-spanning examples?](https://github.com/TEIC/TEI/issues/1946) | Subgroup likes the example and thinks this needs to be greenlighted. |
| \#1947 | D | [Two more values for teidata.certainty](https://github.com/TEIC/TEI/issues/1947) | Subgroup suggests closing ticket unless OP returns with objections. |
| \#1951 | C | [Wrong article?](https://github.com/TEIC/TEI/issues/1951) | Subgroup greenlights as this is super simple. |
| \#1953 | D | [improve example](https://github.com/TEIC/TEI/issues/1953) | Subgroup suggests change Status: Go. Note: very American example |
| \#1956 | D | [Broken/misdirecting links](https://github.com/TEIC/TEI/issues/1956) | Subgroup suggests change Status: Go to fix SourceForge reference, noting that  OP’s issues have already been resolved (links fixed). |
| \#1957 | C | [FR: Declarative Citation Structure](https://github.com/TEIC/TEI/issues/1957) | Subgroup likes this and observes we need to review HC's PR. **Action on** EB, MS, and PS to review. |
| \#1961 | D | [inconsistent indication of elided content in examples](https://github.com/TEIC/TEI/issues/1961) | Subgroup suggests greenlighting this ticket and assigning it to a new Councilmember (JL). |
| \#1962 | C | [Make Licensing explicit in repo](https://github.com/TEIC/TEI/issues/1962) | Subgroup totally agrees with this; it should be green. We need to add BSD\-2 and CC\-BY to the TEI repo. Should it apply to other repos in TEI\-C as well? There is one already on Stylesheets repo. |
| \#1963 | D | [WD should refer folks to the Script Encoding Initiative](https://github.com/TEIC/TEI/issues/1963) | Subgroup suggests change Status:Go, no further discussion needed. |
| \#1966 | C | [Inconsistency in character representation](https://github.com/TEIC/TEI/issues/1966) | Subgroup agrees with SB that this needs careful investigation to determine whether some of these inconsistencies are actually appropriate/deliberate. |
| \#1973 | C | [add class att.normalized for att.lexicographic and att.linguistic to include](https://github.com/TEIC/TEI/issues/1973) | Subgroup notes we already discussed this in connection with [\#1776](https://github.com/TEIC/TEI/issues/1776). |
| \#1984 | C | [Guidelines TOC page should use HTML5 summary/details elements instead of JS](https://github.com/TEIC/TEI/issues/1984) | Subgroup thinks this is a great idea. Stylesheets might complicate its implementation, but we should greenlight to try it. |
| \#1986 | C | [add altIdentifier to att.datable](https://github.com/TEIC/TEI/issues/1986) | Subgroup agrees that \<altIdentifier\> should be added to att.datable, but NOT \<msIdentifier\> because that should always be the current one. No\-one asked for it (HC wants this to become a new doctrine). |
| \#1987 | D | [Remove unnecessary comments from ODD customization exemplars](https://github.com/TEIC/TEI/issues/1987) | Set as Green? |
| \#1988 | C | [Schematron constraint for ab is too crude](https://github.com/TEIC/TEI/issues/1988) | Subgroup agrees with the recommendation to amend the Schematron to recognize the special "floating\-text\-like" contexts for things like \<ab\> and \<p\>. Recommend greenlighting. |


 
Status: Needs discussion and Go
-------------------------------


This means that we have already discussed this issue and that the assignee will come back to Council with a proposal on how to implement the issue. Please check (initials of assignees are in the comment) if there has been some progress since we last discussed this. If not, we don’t have to discuss this during the F2F.
 




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#1586 |  | [Domain of concept of cleanliness](https://github.com/TEIC/TEI/issues/1586) | HC |
| \#1715 |  | [Clarify description of att.combinable's "mode"](https://github.com/TEIC/TEI/issues/1715) | RV |
| \#1744 |  | [Add co\-occurrence constraints to ODD](https://github.com/TEIC/TEI/issues/1744) | RV |
| \#1837 |  | [improve explanation of @defaultExceptions on schemaSpec](https://github.com/TEIC/TEI/issues/1837) | SB, PS |
| \#1849 |  | [Add more discussion of editorial practice to TC chapter](https://github.com/TEIC/TEI/issues/1849) | HC |
| \#1852 |  | [Define semantics of witDetail without @target](https://github.com/TEIC/TEI/issues/1852) | HC |
| \#1871 |  | [restore explanation of TEI namespace](https://github.com/TEIC/TEI/issues/1871) | PS |
| \#1873 |  | [Create Website Documentation Specifically Aimed at Developers](https://github.com/TEIC/TEI/issues/1873) | PS |
| \#1885 |  | [Update teidata.temporal.iso (and teidata.duration.iso?)](https://github.com/TEIC/TEI/issues/1885) | HC, SB, MH |
| \#1902 |  | [Add model.biblLike to model.entryPart.top](https://github.com/TEIC/TEI/issues/1902) | MB (MS: I think this can be marked as green?) |


 
Pull requests
-------------


 


| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#1920 |  | [WIP: draft implementation of noteGrp](https://github.com/TEIC/TEI/pull/1920) | MT: I would like to ask review, if the approach to just copy \<attList\> from \<note\> since \<noteGrp\> should have the same is the correct solution, or should these be factored out by means of an attribute class or other (@anchored and @targetEnd) |
| \#1972 |  | [add att.normalized to hold @orig and @norm, and documentation to DI and AI](https://github.com/TEIC/TEI/pull/1972) | MT briefly reviewed already and asked changes from att.normalized to att.lexicographic.normalized as discussed during the VF2F |


 