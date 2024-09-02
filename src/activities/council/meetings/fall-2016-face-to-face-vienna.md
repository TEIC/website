---
layout: page.njk
title: "Fall 2016 Face to Face, Vienna"
date: 2016-09-27
---
# Fall 2016 Face to Face, Vienna





 
 Face to Face Meeting, Vienna, 25–27 Sep 2016
 
 Present


* Hugh Cayless (HC)
* James Cummings (JC)
* Peter Stadler (PS)
* Elisa Beshero\-Bondar (EB)
* Magdalena Turska (MT)
* Elli Mylonas (EM)
* Raff Viglianti (RV) \[remotely from DC]
* Syd Bauman (SB)
* Stefan Majewski (SM)
* Lou Burnard (LB)
* Martina Scholger (MS)



### Agenda Items


* TEI Simple Finalization—Monday 11:00
* Report on first stylesheet hacking meeting
* Stylesheets Hacking / Knowledge Transfer—Sunday Afternoon
* Release Planning: MT \& JC release technicians with EB documenting the process
* Build a new (Pure)ODD processor?—Sunday Afternoon
* Support for ODD\-\>PDF output?
* F2F Meeting in Prague? Any presence from TEI Council for the XML Prague itself?
* Whither TEI Session / Martin's Paper / What Council does and should do
* Council Meeting Scheduling
* Feature to suppress examples from Guidelines in customized doc — SB



#### Sunday 09\-25, 09:30–17:00


Location: ACDH Meeting Room

##### Morning 10:00–13:00



* PS reports on the CMC SIG \- they are interested in some/a new elements. Should put
 in a feature request. Council has homework to read the TEI journal article.
	+ - [http://wiki.tei\-c.org/index.php/SIG:Computer\-Mediated\_Communication](https://wiki.tei-c.org/index.php/SIG:Computer-Mediated_Communication "http://wiki.tei-c.org/index.php/SIG:Computer-Mediated_Communication") \[beware: current ODDs are project customizations and need to be merged/gerneralized
		 for a FR]
	+ [http://jtei.revues.org/476](http://jtei.revues.org/476 "http://jtei.revues.org/476")
* Next release: when?
	+ Work on making releases less cumbersome
	+ Not ready for release before Members Meeting.
	+ LB wants to prepare anyXML as last stage in PureODD before next release\-\-this may
	 not need much work.
	+ Also clearance for TEI Simple. LB: this may take longer.
	+ [http://teic.github.io/TCW/anyXMLproposal.html](http://teic.github.io/TCW/anyXMLproposal.html "http://teic.github.io/TCW/anyXMLproposal.html")
	+ Proposal for release: 1st week of December
		- [http://teic.github.io/TCW/tcw22\.html](http://teic.github.io/TCW/tcw22.html "http://teic.github.io/TCW/tcw22.html") (editable at [https://github.com/TEIC/TEI/blob/dev/Documents/TCW/tcw22\.xml](https://github.com/TEIC/TEI/blob/dev/Documents/TCW/tcw22.xml "https://github.com/TEIC/TEI/blob/dev/Documents/TCW/tcw22.xml") )
		- MT \& JC release technicians with EB documenting the process
			* EB should document the requisite tools/components in use during the release
			* SB: add a step to the process: Review of Release Notes, together with Freeze (on release
			 branch)
			* Discussion of branches assoc with release HC: Master is always the latest stable branch.
			 Release branch \= candidate to become Master.
				+ Scripts need to be properly identifying the branch\-\-the release branch for each release
				 has a dedicated number: the numbering is hard on the Jenkins maintainers.
				+ Naming process of release branch needs better documentation. Give it one name without
				 a number, like releaseCandidate. HC: not good git policy but easier for Jenkins maintainers.
				 RV: It's potentially risky to keep reusing the same branch name.
				+ SB and HC: reverse concern: what if old release branch wasn't properly cleaned up\-\-and
				 these merge with your current release candidate branch?
				+ What is possible to make the process really streamlined, up to the point of having
				 just a single place to fill in the release number?
				+ (We decide to defer discussion as we prepare this release)
	+ Perhaps appoint people to tidy up the Release Notes before the release
		- PS: print out git logs and commit messages from last release. [https://www.atlassian.com/git/tutorials/git\-log/formatting\-log\-output](https://www.atlassian.com/git/tutorials/git-log/formatting-log-output "https://www.atlassian.com/git/tutorials/git-log/formatting-log-output") e.g. in mark down output \`git log \-\-pretty\="\* %cn: %s \[%h](https://github.com/TEIC/TEI/commit/%H)"
		 \-\-since\=2016\-04\-01\`
		- SM: label the commits to filter out the trivial ones
		- All of us on Council need to
			* read the Release Notes (TCW22\)
			* RV: List which issues have been closed, and which aren't related to the release. LB:
			 This used to be done years ago, when LB wrote the release notes\-\-it's hard to work
			 out which commits are relevant.
			* HC: If closed tickets are assigned to the release milestone that will make this easier.
			* How to write a git commit message: [http://chris.beams.io/posts/git\-commit/](http://chris.beams.io/posts/git-commit/ "http://chris.beams.io/posts/git-commit/")
			* Try not to pile lots of different alterations in one commit!
			* Use *git commit \-\-amend* to correct a mistaken commit message (unless you’ve already pushed of course)
* Issue handling recommendations (now included in TCW22\):
	+ Assign tickets to release milestone
	+ Use ticket reference in any commits addressing or fixing the issue
	+ At least for the final commit addressing the issue try to prepare the commit message
	 so it can be used for Release Notes
	+ Label the issue as Release Note (green label) if it’s important to include the note
	 about it in Release Notes


* ANY XML, discussion of LB's proposal
	+ [http://teic.github.io/TCW/anyXMLproposal.html](http://teic.github.io/TCW/anyXMLproposal.html "http://teic.github.io/TCW/anyXMLproposal.html")
	+ See also discussion of [https://github.com/TEIC/TEI/issues/1399](https://github.com/TEIC/TEI/issues/1399 "https://github.com/TEIC/TEI/issues/1399")
	+ New element spec for anyElement.xml. It's an empty element, like textNode.
		- Currently we can define the \<content\> element with RelaxNG, but in new proposal we
		 cannot use RelaxNG, only TEI ODD. This is a major change.
		- RV: This is going to be a problem, especially with MEI which needs RNG\-defined datatypes
		 (and element content e.g. wit rng:list). We still need Relax\-NG. LB: We have macro.schemaPattern
		 to define data types. RV: Testing necessary(!)
	+ First this needs to be tested, but if it passes, we should deprecate macro.anyXML
* Lou's suggestion for a template: \<xsl:template name\="matchanyElement"\> \<element xmlns\="http://relaxng.org/ns/structure/1\.0"\>
 \<anyName\> \<xsl:choose\> \<xsl:when test\="@except"\> \<except\> \<nsName ns\="{@except}"/\>
 \<!\-\-SB: This needs to be able to process multiple namespaces.\-\-\> \</except\> \</xsl:when\>
 \<xsl:when test \="@include"\> \<!\-\- need multiple anyName for this so prob. move up the
 xsl:choose several lvls \-\-\> \<!\-\- SB: I don’t think multiple \<anyName\> is allowed in
 RNG. \-\-\> \<xsl:attribute name\="ns"\> \<xsl:value\-of select\="@include"/\> \</xsl:attribute\>
 \</xsl:when\> \</xsl:choose\> \</anyName\> \<zeroOrMore\> \<attribute\> \<anyName/\> \</attribute\>
 \</zeroOrMore\> \</element\> \</xsl:template\>


Discussion: Need to write this code to be as generic as possible
Where does this belong in the Stylesheets?


##### Afternoon


Stylesheets!


* SB reports on the first meeting of the Stylesheets Self\-education Group
	+ Subgroup worked on [https://github.com/TEIC/Stylesheets/issues/161](https://github.com/TEIC/Stylesheets/issues/161 "https://github.com/TEIC/Stylesheets/issues/161")
* Need to improve the documentation to give a better idea of which stylesheets and what
 parts of them do what
* Need to know which versions of stylesheets are where (oxGarage, Saxon, oXygen)
* This link is for general users, but we need to find what generates it (the Makefile
 generates it!): [http://www.tei\-c.org/release/doc/tei\-xsl/\#start](/release/doc/tei-xsl/#start "http://www.tei-c.org/release/doc/tei-xsl/#start") Click on any of the profiles.
	+ Group by component, or group by mode.
	+ We need high\-level documentation of modes, and mapping of functions and purposes of
	 each stylesheet \[Kind of TEI Stylesheets Lite, Getting Started Manual]
	+ Need documentation of the order of processing.
	+ Knowledgeable people: SB, Martin Holmes, HC, JC, LB
	+ EM: How do we write this documentation that tells us how to begin?
		- SB: Martin Holmes gave a [presentation](http://hcmc.uvic.ca/people/martin/tei/anatomy_of_a_transformation.pdf "presentation") that provides a good start on this.
		- Possibly ask him to reprise and start doc based on his presentation
	+ Methods to document: internal comments and/or external overview document. Write in
	 the xsd:prose element so it's output as documentation. What, why, input, output.
* make test runs tests for the Stylesheets. There is another makefile in /tests that can be used
 to test a subset of the xslts (e.g. for odd, html, docx, etc)
* make doc puts the documentation into release/xslcommon/doc/tei\-xsl/index.html
* ACTION ITEMS: LB produces high level overview using Martin’s presentation from SC
 and other materials as a starting point. [http://hcmc.uvic.ca/people/martin/tei/anatomy\_of\_a\_transformation.pdf](http://hcmc.uvic.ca/people/martin/tei/anatomy_of_a_transformation.pdf "http://hcmc.uvic.ca/people/martin/tei/anatomy_of_a_transformation.pdf")
* Build a new (Pure)ODD processor (discussion that was part of the self\-education session)?
* Perhaps consider issues related to these tickets ( [\#1462](https://github.com/TEIC/TEI/issues/1462 "#1462") , [\#1473](https://github.com/TEIC/TEI/issues/1473 "#1473") ) when discussing this (RV) .
* Discussion about running TEI and Stylesheet make scripts locally \- on Mac and Windows
 respectively.
* ACTION ITEM: Hugh writes doc for installing components to allow making stylesheets
 on the Mac
* ACTION ITEM: \[Someone] writes doc for installing components to allow making stylesheets
 on Windows.




##### Monday 09\-26, 09:00–17:00


SM unavailable, MT dividing time between Council meeting and eXist\-db workshop

###### Morning


* Ticket Triage
 
 TEI Simple Discussion


	+ LB: If Council will support this, it needs good documentation; Getting examples from
	 EEBO would be good. The other question is about marketing: should this replace Lite?
	 Consensus: No.
	+ JC: Nexts steps to check documentation and go forward as we are.
	+ LB:
		- Is this meant to support EEBO TCP?
			* Not solely
		- To support 90% of users 90% of the time?
			* No. that is more lite’s job
	+ MT: meant to support a large number of projects
	+ JC: meant for modern, western printed books ‘*printed books by dead white men*’, (e.g. printed: not manuscripts, books: not weird non\-codex objects, dead: not modern
	 weird textual objects, white: vaguely western European in background, men: expressing
	 that it is a limited scope that doesn’t cope with a wide range of text or authors.
	 Clearly, this description isn’t meant to be exhaustive.
	+ LB: revised checklist of its aims:
		- it’s aimed at print not manuscripts
		- More early modern than other periods, not modern
		- Western European traditions and characters
		- Larger scale, shallow encoding projects, e.g. for libraries, archives
		- As soon as you need to do deeper encoding, then you should be using your own customisation
		- It can of course be used outside of these parameters, but not what it was mainly designed
		 for
	+ RV: Worried about how a beginner transitions from Simple to where they need to go
	+ RV: what Roma should be like is to have this help in making decision where to start
	 your customization: asking questions about the character of material and project
	+ Discussion of entry points and the difficulty of establishing "prescriptivist" approaches
	 for people new to TEI and how it might be a bad idea.
	+ Side note from LB: helping people decide on their starting point in the TEI world
	 with a ‘checklist’ or ‘decision tree’ approach
	+ Relationship with TEI BPL. Should the header chapter in Simple match recommendations
	 of TEI BPL? Probably not, but would be good to get Libraries SIG view on the TEI Simple
	 Header.
		- [https://github.com/kshawkin/Best\-Practices\-for\-TEI\-in\-Libraries](https://github.com/kshawkin/Best-Practices-for-TEI-in-Libraries "https://github.com/kshawkin/Best-Practices-for-TEI-in-Libraries")
		- Minutes from group meetings [http://wiki.tei\-c.org/index.php/Workgroup\_to\_revise\_the\_Best\_Practices\_for\_TEI\_in\_Libraries](https://wiki.tei-c.org/index.php/Workgroup_to_revise_the_Best_Practices_for_TEI_in_Libraries "http://wiki.tei-c.org/index.php/Workgroup_to_revise_the_Best_Practices_for_TEI_in_Libraries")
	+ Action on Council members to invite SIGs and community members to contribute their
	 exemplary ODDs
	+ Action on Council members to speak to Board about new home page for TEI website, re
	 how people "start" with TEI (meeting tomorrow):
		- Re how TEI Simple is presented
		- Other options for beginning (including redesigned ROMA when it's ready)
	+ Council agrees that it is not the marketing arm of the TEIC, while they are happy
	 to help the Board with some technical issues Council have more than enough Guidelines
	 issues, software development issues, etc. to keep them busy for a long time. (Especially
	 post\-SPQR, and now with LB leaving Council this will also have an effect.)
	+ Council should advise Board that new web maintainer should have some experience with
	 UX work.


Lunch break:
* Lou, Hugh, James \- Film backup video for Sebastian’s Event before joining others for
 Lunch. (We did this. Hopefully, it will never see the light of day.)




###### Afternoon


Work on tickets (see table below)



##### Tuesday 09\-27, 12:30–17:30


MS and PS at the Translatathon workshop
SM unavailable
MT partially unavailable in the afternoon for the XQuery workshop
* skype link up with [http://www.oerc.ox.ac.uk/sebastian\-rahtz](http://www.oerc.ox.ac.uk/sebastian-rahtz "http://www.oerc.ox.ac.uk/sebastian-rahtz") (10:50 their time) \-\- Hugh, Lou, James to present; Dress Code: Loud shirts.
* Then tickets


12:15–14:00, Joint lunch / meeting with Board


[http://wiki.tei\-c.org/index.php/Board\_Agenda\_2016\-09](https://wiki.tei-c.org/index.php/Board_Agenda_2016-09 "http://wiki.tei-c.org/index.php/Board_Agenda_2016-09")

###### 14:00–17:30


* **Note:** This is Lou’s last face to face TEI Technical Council meeting (since he didn’t stand
 for re\-election), Council wishes to thank him for his long service to the TEI Council.
 It fully expects to consult him as a member of the community.
* Tickets








Tickets for TEIC/TEI
--------------------





| **Group** | **Number** | **Status** | **Title** | **Notes** |
| --- | --- | --- | --- | --- |
|  | [1502](https://github.com/TEIC/TEI/issues/1502 "1502") | Go | \<desc\> and remark in TEI Guidelines | Closed |
|  | [1499](https://github.com/TEIC/TEI/issues/1499 "1499") | Go | Misuse of @extent in an example | MS: in progress |
|  | [1478](https://github.com/TEIC/TEI/issues/1478 "1478") | Go | Make attribute values in Guidelines examples match suggested values in attribute class  (related to \#1397\) | EM \- doesn’t need discussion |
|  | [1475](https://github.com/TEIC/TEI/issues/1475 "1475") | Go | Deprecated attribute @render discussion needs revision | EB: Will close once I remove the commented\-out portions. |
|  | [1468](https://github.com/TEIC/TEI/issues/1468 "1468") | Go | \<content\> examples need pure content | MS: No discussion needed |
|  | [1447](https://github.com/TEIC/TEI/issues/1447 "1447") | Go | Exemplar schema for ENRICH includes duplicate ids for Schematron constraint | JC: No discussion needed \- bug \- not investigated why yet. |
|  | [1446](https://github.com/TEIC/TEI/issues/1446 "1446") | Go | Solve base\-uri problem in Stylesheets before next release | Closed |
|  | [1441](https://github.com/TEIC/TEI/issues/1441 "1441") | Go | the future of the Debian packages | Ask Stefan (EM pinged via git) |
|  | [1436](https://github.com/TEIC/TEI/issues/1436 "1436") | Go | consider adding @xml:space as global attribute in Tite | MT: doesn’t need discussion |
|  | [1428](https://github.com/TEIC/TEI/issues/1428 "1428") | Go | Refine elements that can contain \<secFol\>, \<signatures\>, \<catchwords\> | EB: With commit [59f1f5a](https://github.com/TEIC/TEI/commit/59f1f5a909e57fb7ebac39cf0fd3e200afbdfda8 "59f1f5a") we added a deprecation warning, but modifications won't be made until end of deprecation  period (2018\-09\-30\). Changed status to Blocked and Deprecated. |
|  | [1427](https://github.com/TEIC/TEI/issues/1427 "1427") | Go | Restructure chapter 11 | Do we need to discuss this? Not yet ready for prime time inmho.label changed to orange.  Awaiting draft |
|  | [1425](https://github.com/TEIC/TEI/issues/1425 "1425") | Go | Allow \<bibl\> in \<witDetail\> | Prod MT; MT feeling duly prodded |
|  | [1420](https://github.com/TEIC/TEI/issues/1420 "1420") | Go | \<valItem\> should allow \<remarks\>, too | MS? |
|  | [1419](https://github.com/TEIC/TEI/issues/1419 "1419") | Go | \<lg\> and \<gap\> | \[SB to give quick report] |
|  | [1417](https://github.com/TEIC/TEI/issues/1417 "1417") | Go | Define useful constants for classSpecs, e.g. $MEMBERS | RV: SKIP, low priority |
|  | [1414](https://github.com/TEIC/TEI/issues/1414 "1414") | Go | ogrophy elements should be in att.canonical | MT: it’s Go to propose broader solution for dealing with ogrophy elements  SB: decision (reinforced today) is to go ahead with \<idno\> 1st child(ren) w/o waiting  for other ography element re\-org. |
|  | [1407](https://github.com/TEIC/TEI/issues/1407 "1407") | Go | abstract model constraint problems on model.pLike elements | SB no need to discuss (I had forgotten we already made it a “go”.) |
|  | [1373](https://github.com/TEIC/TEI/issues/1373 "1373") | Go | Need for some way to represent macro.anyXML in Pure ODD | Progressed yesterday: waiting for trial implementation in stylesheets |
|  | [1349](https://github.com/TEIC/TEI/issues/1349 "1349") | Go | odd4odds should be in Exemplars | SB — no need to discuss (but y’all should periodically send me complaints that this  isn’t done. :\-) |
|  | [1344](https://github.com/TEIC/TEI/issues/1344 "1344") | Go | data.temporal.w3c—taste the pain | SB—needs brief discussion; I had not realized it was assigned to me, and am not sure  what next step should be. |
|  | [1333](https://github.com/TEIC/TEI/issues/1333 "1333") | Go | Link checking in Examples |  |
|  | [1331](https://github.com/TEIC/TEI/issues/1331 "1331") | Go | examples combines @from with @notAfter | SB — more discussion needed. I thought this was done \& closed but, not surprisingly,  the constraints we added last time were objected to by at least on person: MH. |
|  | [1293](https://github.com/TEIC/TEI/issues/1293 "1293") | Go | hors d'oeuvre unpalatable in 9\.4 | Waiting on SM |
|  | [1290](https://github.com/TEIC/TEI/issues/1290 "1290") | Go | dated info on XML processors | SB— no need to discuss. SM and I are in middle of working on this |
|  | [1267](https://github.com/TEIC/TEI/issues/1267 "1267") | Go | TEILite has @calendar, but no \`\<calendar\>\` element it can point to | Fixed in source. Need to check that schemas for exemplars are generated correctly  during build |
|  | [1196](https://github.com/TEIC/TEI/issues/1196 "1196") | Go | \<attRef\> needs better documentation | MH did. Closed. |
|  | [1175](https://github.com/TEIC/TEI/issues/1175 "1175") | Go | use of modal verbs in Guidelines | JC: Since this is a periodic check, I'll go through large parts of more newly added  prose and review our use of modal verbs again. |
|  | [1082](https://github.com/TEIC/TEI/issues/1082 "1082") | Go | update ODD documentation on www.tei\-c.org and in Guidelines | Nothing to discuss here. Move along. |
|  | [1045](https://github.com/TEIC/TEI/issues/1045 "1045") | Go | Most attributes lack good examples | No visible progress. Close? Mark it Blocked |
|  | [960](https://github.com/TEIC/TEI/issues/960 "960") | Go | i18n revision due |  |
|  | [869](https://github.com/TEIC/TEI/issues/869 "869") | Go | half title pages in TEI Tite | No progress since March. Ask Kevin if we can reassign to someone else. Or mark it  blocked. |
|  | [618](https://github.com/TEIC/TEI/issues/618 "618") | Go | @expand example in att.lexicographic is incorrect. |  |
|  | [564](https://github.com/TEIC/TEI/issues/564 "564") | Go | create \<schemaRef\> element to give pointing to ODD. | JC: Creating \<schemaRef\> as agreed by Council, just need to time to do. |
|  | [548](https://github.com/TEIC/TEI/issues/548 "548") | Go | Give more structure to abstract | Closed for now |
|  | [543](https://github.com/TEIC/TEI/issues/543 "543") | Go | Make the content model of occupation more elaborate | HC: Done |
|  | [537](https://github.com/TEIC/TEI/issues/537 "537") | Go | Support for non\-ISO schematron (1\.4\) should be removed | SB — requires brief discussion in \*how\* to proceed. |
|  | [536](https://github.com/TEIC/TEI/issues/536 "536") | Go | Make @source global | JC: Complicated, agreed, nothing to discuss, just need to do it. |
|  | [533](https://github.com/TEIC/TEI/issues/533 "533") | Go | Add profileDesc as optional child biblFull | HC: Done |
|  | [527](https://github.com/TEIC/TEI/issues/527 "527") | Go | Replace current eXist for Roma with updated version | Closed |
|  | [498](https://github.com/TEIC/TEI/issues/498 "498") | Go | Permit new \<persona\> as a child of \<person\> | No progress on this since April. Prod LB! |
|  | [486](https://github.com/TEIC/TEI/issues/486 "486") | Go | deprecating members of a content model | Closed (yay!) |
|  | [464](https://github.com/TEIC/TEI/issues/464 "464") | Go | Need for some way to test the oxygen\-tei package before release |  |
|  | [379](https://github.com/TEIC/TEI/issues/379 "379") | Go | retaining punctuation marks in the text of a TEI document | No progress since March: blocked? Now assigned to EBB \& EM |



Groups for Monday


* **A:** PS, JC, MS
* **B:** LB, RV, EBB
* **C:** HC, EM, SB


Groups for Tuesday
* **F**: JC, SB, LB
* **G**: EBB, RV, EM, HC





| **Group** | **Number** | **Status** | **Title** | **Notes** |
| --- | --- | --- | --- | --- |
| A | [1505](https://github.com/TEIC/TEI/issues/1505 "1505") | Discuss | Use of \`@next/@prev\` versus \`\<join\>\` with \`@scope/@result\` and \`@exclude\` needs clarification | Use of @next here is unusual, but not forbidden by Guidelines, and we think we shouldn’t  change the current practice. The current suggested practice by Guidelines and examples  is to be preferred. No need seen for additional clarification of join/@scope unless  martinH produces concrete proposal. |
| B | [1500](https://github.com/TEIC/TEI/issues/1500 "1500") | Discuss | A plea for behaviourSpec | Needs more discussion and elaboration, we dont understand it |
| C | [1497](https://github.com/TEIC/TEI/issues/1497 "1497") | Discuss | Don't impose horrible algorithmic burdens on implementors | Lots of agreement on this one, it’s GO, and Syd writes minority opinion on ticket |
| A | [1496](https://github.com/TEIC/TEI/issues/1496 "1496") | Discuss | Don't punt on model semantics | Should still leave to implementor what happens but strongly recommend that any processor  will at least warn of ambiguous model elements. It is probably an error in the ODD  not in the implementation so the user should be made aware of this rather than the  processing be made automatically happy by hiding it. \[Council argues for a schematron  rule to forbid this unlikely occurrence.] |
| B | [1495](https://github.com/TEIC/TEI/issues/1495 "1495") | Discuss | Confusing note on modelSequence | We think we understand Magda’s comment, we’re not sure if we agree |
| C | [1494](https://github.com/TEIC/TEI/issues/1494 "1494") | Discuss | Clarify modelGrp semantics | Recommend: make it GO, change to modelSequence, fix wording |
| A | [1493](https://github.com/TEIC/TEI/issues/1493 "1493") | Discuss | Allow \<subst\> in \<line\> please | Subgroup thinks more interpretative elements should be \*removed\* from line, not more  added. To add more is madness. Council agrees completely that where \<substJoin\>, \<add\>, and \<del\> are allowed, \<subst\>  should be, too. However, there is significant disagreement as to the solution: allow  \<subst\>, or disallow the others (and \<app\> and ...)? Generally council thinks it should  remove all this bumf from line. |
| B | [1492](https://github.com/TEIC/TEI/issues/1492 "1492") | Discuss | Allow note in rdgGrp | We agree that note shdnt go in rdg unless it’s a part of the reading itself. Problem  is deciding what is being annotated: sequence is not very good way of linking note  with thing annotated. But its used elsewhere in this way. We agree to allow note in  rdgGrp. STATUS GO |
| C | [1489](https://github.com/TEIC/TEI/issues/1489 "1489") | Discuss | datatype of prefixDef/@ident | Recmend: Make Go, Syd fixes with Martin’s suggestions STATUS GO |
| A | [1487](https://github.com/TEIC/TEI/issues/1487 "1487") | Discuss | Schematron rule disallows perfectly good markup | Deprecation mechanisms not followed because we didn’t think anyone would be doing  this and it isn’t deprecation, it is extra constraint through schematron. And we think  Martin shouldn’t be doing this. STATUS CLOSED |
| B | [1486](https://github.com/TEIC/TEI/issues/1486 "1486") | Discuss | Location of ODD validation file for spec development | We agree with Hugh . STATUS GO |
| C | [1484](https://github.com/TEIC/TEI/issues/1484 "1484") | Discuss | person and place elements should allow 'name' child similar to org. | Needs discussion; Why shouldn't Simple just change the content models to permit \<name\>  STATUS GO |
| A | [1483](https://github.com/TEIC/TEI/issues/1483 "1483") | Discuss | parameters to the TEI media type (generalizing their usage \+ a repository) | Seems like a good idea, assigned to Piotr STATUS GO |
| B | [1477](https://github.com/TEIC/TEI/issues/1477 "1477") | Discuss | Merge 11\.3\.1\.6 and 11\.3\.4\.4 | We agree with Gerrit STATUS GO |
| C | [1476](https://github.com/TEIC/TEI/issues/1476 "1476") | Discuss | Source links for examples sometimes missing; all have disappeared from HTML output | Make it GO. Add schematron warning, divvy up 1514 examples and find sources or specify  no source or unknown source   Our thinking is to divvy ‘em up into sets of 100 un\-sourced \<egXML\>s, and hand each  Council member a set to do. |
| G | [1474](https://github.com/TEIC/TEI/issues/1474 "1474") | Discuss | Need to improve GIS/gazetteer encoding support in TEI |  |
| B | [1473](https://github.com/TEIC/TEI/issues/1473 "1473") | Discuss | PureODD may need other forms of datatype restrictions besides regular expressions | We would need a new pure ODD mechanism to do numeric testing. Needs work on a proposal.  Or we have to do it in schematron. |
| C | [1471](https://github.com/TEIC/TEI/issues/1471 "1471") | Discuss | new section on deprecated datatype macros | Let's have the discussion on deprecating datatype macros! |
| F | [1470](https://github.com/TEIC/TEI/issues/1470 "1470") | Discuss | Example from address spec file is weird |  |
| B | [1466](https://github.com/TEIC/TEI/issues/1466 "1466") | Discuss | Add @place to \<head\> | We agree. Add head to astt.placement, as an alternative to @rend. Example looks good.  STATUS GO |
| C | [1465](https://github.com/TEIC/TEI/issues/1465 "1465") | Discuss | Xenodata oddities | Closed |
| G | [1463](https://github.com/TEIC/TEI/issues/1463 "1463") | Discuss | Relation of @style and @rendition needs clarifying | Suggest that we accept HC’s wording |
| B | [1461](https://github.com/TEIC/TEI/issues/1461 "1461") | Discuss | Add new element \<unit\> | We are reluctant to add new element. Whats wrong with rs, or an ODD solution? STATUS  NO |
| F | [1459](https://github.com/TEIC/TEI/issues/1459 "1459") | Discuss | Description of \<textNode\> is insufficient | Dunno. |
| G | [1453](https://github.com/TEIC/TEI/issues/1453 "1453") | Discuss | \`\<path\>\` should exist alongside \`\<zone\>\` for non\-closed areas in facsimile | No, don’t do, look at SVG and IIIF, close or leave for discussion |
| B | [1452](https://github.com/TEIC/TEI/issues/1452 "1452") | Discuss | @class attribute on \<msContents\>, \<msItem\>, and \<msItemStruct\> should all be added  to an attribute class. | We agree. And note that other elements could be added to this class e.g. \<p\> STATUS  GO |
| F | [1431](https://github.com/TEIC/TEI/issues/1431 "1431") | Discuss | clarify how to encode short\-form citations | SubGroup thinks it is daft \- you should use \<ref\> and if not you could use @corresp.  Update existing examples to use \`\<ref\>\` and not \`\<bibl\>\`. |
| G | [567](https://github.com/TEIC/TEI/issues/567 "567") | Discuss | Allow \<relation\> to occur intermittently within parent elements | Prod SB |
| B | [562](https://github.com/TEIC/TEI/issues/562 "562") | Discuss | allow paras in various children of ographies | Which elements currently containing model.phraseSeq should become model.specialPara  ? LB says all, for simplicity’s sake. |
| F | [539](https://github.com/TEIC/TEI/issues/539 "539") | Discuss | New element annotatedU | Prod LB |
| G | [507](https://github.com/TEIC/TEI/issues/507 "507") | Discuss | create generic policy for the TEI on integration of external standards | Changed to blocked because not enough time |
| F | [386](https://github.com/TEIC/TEI/issues/386 "386") | Discuss | free\-standing attributes \-\> class | Prod EM \+ SB [https://docs.google.com/document/d/1Punte188LwdqBko8m8\-f9LzevP7EKoqhddUBlnXVSiA/edit](https://docs.google.com/document/d/1Punte188LwdqBko8m8-f9LzevP7EKoqhddUBlnXVSiA/edit "https://docs.google.com/document/d/1Punte188LwdqBko8m8-f9LzevP7EKoqhddUBlnXVSiA/edit") |
| G | [377](https://github.com/TEIC/TEI/issues/377 "377") | Discuss | Improve guidance and restrict usage of biblScope | Leave as is, but file bug report with zotero? JC notes they get it from us: [http://wiki.tei\-c.org/index.php/ZoteroToTEI](https://wiki.tei-c.org/index.php/ZoteroToTEI "http://wiki.tei-c.org/index.php/ZoteroToTEI") As documented here: [https://www.zotero.org/support/kb/tei](https://www.zotero.org/support/kb/tei "https://www.zotero.org/support/kb/tei") |
| F | [374](https://github.com/TEIC/TEI/issues/374 "374") | Discuss | Encoding of Standoff annotations | Prod PS |
| G | [367](https://github.com/TEIC/TEI/issues/367 "367") | Discuss | rationalize content models of org and place and person | Prod SB |
| F | [299](https://github.com/TEIC/TEI/issues/299 "299") | Discuss | att.editLike should not bring att.dimensions \& att.ranging | F: Group suggests it should be GREEN: GO; Do it with modification that Alexey recommended.  (I.e., we think the list of actual elements should be reviewed, and pending that review  this should just be done w/o any further ado — no further posts or deprecation needed.) |
|  | [1501](https://github.com/TEIC/TEI/issues/1501 "1501") | (Discuss) | Cannot generate valid DTD within oXygen | This is a release blocker!!! |
|  | [1400](https://github.com/TEIC/TEI/issues/1400 "1400") | (Discuss) | Remove numbered divisions | Agreed to make it a P6 issue |
|  | [1350](https://github.com/TEIC/TEI/issues/1350 "1350") | (Discuss) | some documentation wrong/missing for correspAction | PS: Already done |
|  | [1081](https://github.com/TEIC/TEI/issues/1081 "1081") | Blocked | fDecl doesn't allow att.datcat yet |  |
|  | [941](https://github.com/TEIC/TEI/issues/941 "941") | Blocked | GLs say add 'ns' decl, but roma objects |  |
|  | [820](https://github.com/TEIC/TEI/issues/820 "820") | Blocked | "Add new attribute" errors, etc. |  |
|  | [672](https://github.com/TEIC/TEI/issues/672 "672") | Blocked | video html to tei |  |
|  | [519](https://github.com/TEIC/TEI/issues/519 "519") | Blocked | precision should be a member of att.datable\* |  |
|  | [482](https://github.com/TEIC/TEI/issues/482 "482") | Blocked | The term strikes back \- terminology chapter |  |
|  | [470](https://github.com/TEIC/TEI/issues/470 "470") | Blocked | att.measurement and att.dimensions overlap |  |
|  | [325](https://github.com/TEIC/TEI/issues/325 "325") | Blocked | Allow certainty etc. inside milestoneLike elements |  |
|  | [293](https://github.com/TEIC/TEI/issues/293 "293") | Blocked | add SourceForge feeds to http://www.tei\-c.org/Activities/ |  |
|  | [290](https://github.com/TEIC/TEI/issues/290 "290") | Blocked | att.canonical for model.persTraitLike | CLOSED due to being overtaken by other tickets |







