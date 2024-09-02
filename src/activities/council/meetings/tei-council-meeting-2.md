---
layout: page.njk
title: "TEI Council Meeting 28–29 Apr 05"
---
# TEI Council Meeting 28–29 Apr 05



 Times are local time (CEST, \+02:00\) unless otherwise noted.
 
 

 
 Members present were:
 
 * Syd Bauman
* Alejandro Bia
* Lou Burnard
* James Cummings
* Matthew Driscoll
* Julia Flanders
* Laurent Romary
* Susan Schreibman
* Natasha Smith
* Edward Vanhoutte
* John Walsh
* Perry Willett
* Christian Wittern


 Which is to say that all Council members were
 present (including the ex\-officio editors), except for
 Sebastian Rahtz, who had indicated before the meeting had
 even been arranged he would not be available.
 
 Meetings were held at [AFNOR](http://www.afnor.fr/portail.asp) (room
 34\), from 14:15 to 18:00 on Thu
 28 and from 09:05 to 16:51 on Fri 29, with a lunch break from
 12:30 to 13:45\. Because her purse had been stolen in Paris,
 Susan Schreibman was unable to attend on Friday; Laurent
 Romary left at 12:28 on Friday.
 
 
  
 
 
 
 Council extends its heartfelt gratitude to AFNOR for
 hosting our meeting, and to Laurent Romary for organizing
 it. An essentially flawless operation at a nice, clean,
 well\-run institution helped provide for a successful
 meeting.
 
 Council also extends its condolences to Susan Schreibman,
 who had to suffer through the (all too common) frustration,
 stress, and annoyance of having her passport, money, and
 credit cards stolen when her purse was snatched in
 Paris.
 
 With consultation of the group, Chair inserted two new
 agenda items and swapped the order of two others. The added
 items were a discussion of equiv, which never
 occurred, and of edw89\. Two items were swapped such that
 chapter reviews were discussed prior to new work items, in
 order to accommodate Laurent Romary's departure.
 
 
Review of ActionsThe following action items from the [previous conference call](/Activities/Council/Meetings/tcm16.xml) were
 reviewed.wiki \& call for stylesheets
* + Julia Flanders reports TEI now has a wiki, set up by
	 Sebastian Rahtz, Matthew Zimmerman, James Cummings, Daniel
	 Pitti, and others at Oxford. Anyone with valid e\-mail
	 address can register and edit the wiki. All that is on the
	 wiki now is the call for stylesheets. By meetings end an area for submission of
	 P5 customizations had been created by James Cummings
	 \& Syd Bauman; no customizations were deposited,
	 though. James Cummings and Daniel Pitti will be
	 submitting model stylesheets. There have been two
	 responses to the Call for Stylesheets so far, neither one
	 of which was actually a stylesheet, but one indicated
	 excitement about the plan.


P5 Editing Environment HOWTO Document
* + Lou Burnard reports P5 HOWTO has been circulated, and
	 that he is seeking feedback on it. John Walsh \&
	 Christian Wittern have both read the document \& tried
	 the procedure outlined, but each of them had difficulties
	 which have been reported to Lou Burnard.


README for P5 source files
* + James Cummings reports that the README is only for the
	 p5 module. Christian Wittern suggests, and it
	 was generally agreed, that the README should provide
	 sufficient instruction to facilitate a local installation,
	 which would require the stylesheets module,
	 too. Council discussed whether or not the stylesheet
	 information should be in the same README or a separate
	 one, but decided it was not fruitful to make a decision at
	 this time, as Sebastian is changing how the two modules
	 interact. JC Create a
	 HOWTO for the stylesheet module however he prefers (as
	 part of current HOWTO or separately) , will be combined
	 or separated later.2005\-07\-01


Physical Bibliography Report
* + Julia Flanders reports that she had indeed circulated
	 reports.


Report on biblItem Proposal
* + Perry Willett's report is on today's agenda


Draft Report for Posting on Website
* + John Walsh reports that the draft report on MARC/TEI
	 crosswalk had been.


Review Procedure for MS
* + Matthew Driscoll reports that a set of reviewers for
	 the MS chapter had
	 been contacted; all have responded
	 affirmatively, except for one (a contact at the Ecole des
	 Chartes who would be followed up by Laurent Romary). Consuelo Dutschke has
	 als sent in detailed comments. Council agreed that Matthew
	 Driscoll should review the critiques that he receives, and post as soon as possible
	 a list of items that
	 need to be addressed and perhaps a proposal for further
	 work for Council's consideration.MD
	 post summary of comments received on MS, with
	 proposed responses
	 MD
	 finish revisions to manuscript description chapter
	 (MS)
	 2005\-10\-21\.


Chapter Review Assignments
* Christian Wittern reports that the assignments of
 chapters to members of Council for review has been
 accomplished.


 The editors both point out that it is very important that
 all council members become familiar with creating P5
 customizations with the ODD language (either using Roma web
 interface, or otherwise).
 
 Council discussed some details of the
 documentation needed to make effective use of P5\. It was suggested
 that three different documents are needed:
 
 * a reference document on the ODD tagset —
 already done, the [DocumentationElements](/release/doc/tei-p5-doc/en/html/TD.html) (aka TD) chapter
* a tutorial guide on using ODD — already begun:
 [edw88](../Drafts/edw88.xml)
* a reference document discussing the principles to
 follow when
 modifying TEI — the [Modifying andCustomizing the TEI DTD](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/TD.html) (aka MD) chapter, which
 needs major surgery


 Currently instructions for installing and running the
 standalone Roma utility only
 apply to a generic (Debian\-like) system. It was suggested that
 this was easily confused with the web\-hosted Roma application,
 and maybe the two should have different names. It was agreed
 that modifying the standalone shell script to run in other
 environments would be very useful. AB
 attempt to get standalone Roma working locally under
 Windows2005\-07\-01
 
 It was suggested and agreed that
 instructions for using P5 should include some guidance for how
 to use it in particular environments, for example basic high\-level
 instructions, such as which folder should contain the P5
 grammar fragments (DTD or schema); how to tell the application which grammar
 you want to use for a given document; how to add new grammars etc.
 AB
 Instructions for using a P5 grammar in XMLSpy \&
 XMetal 2005\-07\-01JW
 Instructions for using a P5 grammar in oXygen
 2005\-07\-01
 
 In response to a question from John Walsh, Council
 discussed whether users should be advised to specify TEI
 grammars by defining an ODD or by manipulating grammar
 fragments in a particular schema language such as RelaxNG
 or DTD. Both are permitted, but for modifications in
 particular the consensus was that the ODD route was
 preferable, assuming the availability of reliable tools.
 
 
 The subject of extending the manuscript description
 capability to stone rubbings was raised. Council was
 reminded that we had explicitly decided to handle
 manuscripts first, before all other Text Bearing
 Objects ( TBO
 text bearing objectss).
 
 
Principles of Attribute Usage in P5Council discussed [ED W
 86](../Drafts/edw86.xml) in detail. The first item discussed was the
 general proposal for handling of textual attributes on
 elements that have content.
 
 Real text and where to put itA recommendation for an internal wrapper element around
 the
 elements that represent what used to be
 attributes was considered.E.g., something
 like
 
 \<supplied\-prime\>
 \<attrs\>
 \<agent\>ablah\</agent\>
 \<reason\>rblah\</reason\>
 \</attrs\>
 \<supplied\>whatever\</supplied\>
 \</supplied\-prime\>
 Use of a generic wrapper element,
 rather than different wrappers for each content\-bearing
 element which currently has textual attributes (i.e., the
 equivalent of ISO TC37/SC4's
 brack element, was also considered.E.g., something like
 
 \<prime\>
 \<agent\>ablah\</agent\>
 \<reason\>rblah\</reason\>
 \<supplied\>whatever\</supplied\>
 \</prime\>
 The editors objected to both of these
 proposals because it would be impossible to
 constrain which attributes go with which elements.
 
 It was also suggested that the wrapper element retain the
 same name as in P4 name, and have a generic
 content child element. E.g., something like
 
 \<supplied\>
 \<agent\>ablah\</agent\>
 \<reason\>rblah\</reason\>
 \<content\>whatever\</content\>
 \</supplied\>
 . This could only work if all elements
 had the same content: it was agreed that investigation
 of real cases was needed to decide the issueMD
 to create some
 examples demonstrating the different approaches. This proposal was thought to be
 sufficiently promising as to merit further investigation. It
 may also be useful for other similar problems, particularly
 with the naming set of elements.
 
 
generic datatypes and further constraintsCouncil discussed some of the issues surrounding
 the
 simplified datatype system suggested in ED W 86\.Concern was expressed  that relying solely
 on the use of the
 valList element limited our ability to constrain
 attribute values (you cannot define a valList to say that an
 attribute must be a positive integer less than 42, for
 example). It was not clear how many such cases there were:
 if they are few in number, a small set of patterns might
 suffice for that need.
 
 Overall, Council endorsed the general approach in favour of having
 fewer, more general,
 datatypes as presented in ED W 86\. SB
 review all current attributes, attempt to
 classify each as a particular datatype, looking for
 attributes that need a new datatype, are eligible for
 requiring a \<valList\>, or need extra
 constraint; also consider use of tei.tokens vs.
 rng:text, particularly with respect to
 rend attribute
 2005\-06\-01\.
 
 A suggestion was made that a datatype
 tei.enumerated be created which would be
 similar to tei.token, except that it would
 require a valList (i.e., a documented closed list
 of possible values), whereas tei.token
 permits, but does not require, a valList. It was
 suggested that when Syd goes through the list, he would
 report if any seem eligible for requiring
 valList; also if any need extra constraints (like
 pattern or positive integer).
 
 
 
 It was agreed that tei.enumerated might be
 useful even though a schema designer
 could just change it to tei.token.
 
 Council briefly discussed whether or not every
 element that bears a type
 attribute should automatically get a subtype as well: it was noted that
 deciding this issue was a matter of how the typed class
 should be defined.
 
 
MiscellaneousIt was noted that some of the elements in ED W 79 are
 already handled, and thus are not listed in the table at
 the end of ED W 86 (e.g. the sic attribute of
 corr).Council briefly discussed, but did not endorse, a
 suggestion for a capture schema, and a stylesheet for
 transforming to vanilla TEI.
 
 It was suggested  that we look at
 the three methods so far proposed
 (and perhaps
 others) for handling reg on
 the various naming elements.Those three solutions are:
 
 wrapping
* + \<choice\>
	 \<name\>Bill Clinton\</name\>
	 \<reg\>Clinton, William J.\</reg\>
	 \</choice\>
	 Recommended by ED W 79


pointing
* + \<reg id\="rn17"\>Clinton, William J.\</reg\>
	 \<!\-\- above \<reg\> element may be somewhere in \<teiHeader\> or \<hyperDiv\>,
	 and may be part of a new prosopographic element, and may end
	 up being something other than \<reg\> ... all undetermined as
	 of yet \-\-\>
	 \<!\-\- ... \-\-\>
	 \<name reg\="\#rn17"\>Bill Clinton\</name\>
	 Suggested as a
	 possibility by ED W 79


using child element
* \<name\>
 \<reg\>Clinton, William J.\</reg\>
 \<content\>Bill Clinton\</content\>
 \</name\>


JF \& PW
 look at the various methods for handling reg of the various naming
 elements, and report back to Council
 2005\-07\-01\.
 
 The index element has the three attributes for
 specifying the index headings under which the current spot
 should be indexed (level1,
 level2, and level3\). Lou Burnard reported on
 recent discussion among Lou Burnard, Syd Bauman, Sebastian
 Rahtz, James Cummings, Christian Wittern, and others on
 what to do with these attributes; and presented a further
 suggestion using seg children of label; more to follow. LB
 Report on progress of discussions of
 \<index\> attributes
 
 Council discussed some of the implications of using
 tei.tokens rather than
 rng:text for the datatype of the global
 rend attribute. It was
 agreed that this issue should be addressed in Syd's report on
 datatypes.
 
 

 
 Some open issuescert vs. certainty
* + ED W
	 86 asks whether these two perform the same function, and
	 thus whether or not both are needed. Council recommended
	 that certainty of
	 date and exact
	 of dateStruct become precision. Council noted that
	 cert means different
	 things in different places, and thus this issue needs
	 urgent attention. JF \&
	 EV look at cert attribute on different
	 elements and think about how they might be
	 rationalized, and report results
	 2005\-07\-01


key
* + Council suggests renaming key to sortKey when used for that
	 purpose.


On resp
* + The
	 ref attribute is declared
	 IDREF when it occurs on some elements, but for others is
	 declared as a token. Council thinks all should be made
	 pointers.SB
	 Change P5 so that all RESP attributes are declared
	 as pointers.
	 2005\-09\-01


canonical references
* Canonical references
 were briefly discussed with respect to
 loc of app; it seems
 we could simply remove loc in
 favor of a cref (which would
 likely be used in alternation with from \& to) but we need to look into
 location\-reference meted etc. LB
 research whether or not LOC performs same function as
 CREF
 2005\-07\-01


 It was suggested that examples of usage of various new
 encodings of the attributes will be useful.
 
 

Principles for rationalization of TEI classesCouncil discussed [ED W
 87](../Drafts/edw87.xml).Classes are all declared globally, but are instantiated
 (i.e., populated) by individual modules. Classes can be
 hierarchical. Creation of a class system from the bottom up
 (deciding that a group of elements have a common semantic
 and thus belong together) and from the top down (finding
 commonalities in syntax of content models) are both
 necessary.
 
 Council directly addressed the first three of nine rules
 for revising the class system.
 
 * Council changed


possible
* to


reasonable
* .


 Council agreed, but decided to entertain the
 suggestion that every attribute (whether 2
 exist or not) be in a class.
 
 On suggestion of the editors, Council reworded
 this to ... should reference TEI datatypes (which
 are themselves derived from W3C datatypes) directly ...
 .
 
 Chapter reviewers
 should consider the
 existing
 classes, and make suggestions as to what new ones are required,
 if any2005\-07\-01
 
 Council to ask Matthew Zimmerman and Wendell Piez if either
 would be interested in writing a visualization tool to make
 class system more tractable.
 
 Council decided that a meeting to straighten out the TEI
 class system should be held; it is tentatively scheduled to
 occur in Oxford on or about Mon 26
 Sep. At least Lou Burnard, Syd Bauman, Sebastian
 Rahtz, Laurent Romary, Christian Wittern to attend.
 
 Next Council conference call was scheduled for Fri 08 Jul 13:00 UTC.
 
 
equivDiscussion of Sebastian Rahtz's suggestion
 on use of equiv made in e\-mail to Lou
 Burnard, Syd Bauman, \& Laurent Romary on 28 Apr was deferred (but
 LR has subsequently made some comments).
Associating a Schema with an InstanceSyd Bauman presented [ED W
 89](../Drafts/edw89.xml), with an emphasis on the fact that this is
 hopefully going to occur in cooperation with at least
 DocBook, if not OASIS. Concerns were raised that this
 was not a TEI core concern, since it was an issue common to
 any XML application.
 Council agreed Syd Bauman should continue this activity at
 least until next conference call, when he should report
 and Council will again decide.
Chapter ReviewsChair expressed concern over the process for activities
 that include work on a chapter.During chapter review, potential corrigible errors
 should
 be reported to the [council
 list](mailto:tei-council@lists.village.Virginia.EDU).
 
 Reviews may ignore occurrences of global
 changes that have not been effected yet,
 including:
 
 * ID/IDREF
* DOCTYPE declarations
* references to additional or base
 tagsets or the pizza model


 However, reviewers should note places where entity
 references are suggested.
 
 SASyd Bauman reports that the prose in the [Linking, Segmentation,and Alignment](/release/doc/tei-p5-doc/en/html/SA.html) explaining XPointer and TEI
 extensions thereof still needs a lot of improvement.
 SB
 \& DD
 finish writing SA discussions of pointing \&
 XPointer extensions; identify external reviewer/s for the chapter.
 2005\-07\-01 Also noted that
 what used to be a chapter on canonical references (aka CR)
 is now a section of this chapter; it is not clear whether
 ot not this should be its permanent placement. Council
 suggested approaching Michael Beddow as a reviewer for this
 chapter.
Laurent RomaryTE Laurent Romary reports that the specification of
 chapter TerminologicalDatabases is done, but prose not written yet.TS Laurent Romary reports that a member of
 his research group (Mathieu Quignard) had made some
 proposals for extension of the chapter on [Transcriptions ofSpeech](/release/doc/tei-p5-doc/en/html/TS.html).
 
 DI Laurent Romary is still working on
 revising the chapter om [PrintDictionaries](/release/doc/tei-p5-doc/en/html/DI.html).
 
 
Edward VanhouttePR Edward Vanhoutte suggests that as the chapter Base Tag Set for Prose had been dropped
  a sentence should be added to a paragraph
 in [Structure of theTEI Document Type Definition](/release/doc/tei-p5-doc/en/html/ST.html) describing how
 the Guidelines can be used for prose. Furthermore, this
 sentence should be indexed under prose.
John Walsh \& Natasha Smith on HD, SH, and COCO The editors particularly request that
 John Walsh \& Natasha Smith consider ways of
 restructuring the material now thrown
 together in the chapter [Elements Available in AllTEI Documents](/release/doc/tei-p5-doc/en/html/CO.html), as this chapter
 is getting unmanageably large.
James Cummings \& PWJames Cummings \& Perry Willett report that their
 current impressions are that:DR
* + [Base Tag Setfor Drama](/release/doc/tei-p5-doc/en/html/DR.html) probably will be unchanged


ND
* [Names andDates](/release/doc/tei-p5-doc/en/html/ND.html) may need a lot of work; Council suggested
 that the Ontologies SIG may be a useful source of
 input


 It was noted that much of the work
 likely to be needed for ND ties in with task Julia
 Flanders \& Perry Willett are charged with, above. Also
 classes need attention in this area.
 
 SG does not need to be reviewed at this time, but is
 still in need of expansion.
 
 
Christian WitternDI Christian Wittern has deferred his
 review of the [PrintDictionaries](/release/doc/tei-p5-doc/en/html/DI.html) chapter, pending Laurent Romary's
 work on it.DS \& AI Christian Wittern reports he
 has made notes on the [Default TextStructure](/release/doc/tei-p5-doc/en/html/DS.html) and [Simple AnalyticMechanisms](/release/doc/tei-p5-doc/en/html/AI.html) chapters, and will write them up and
 post to the council list soon.
 
 
Julia FlandersCE Julia Flanders believes that the chapter Certainty and
 Responsibility has some areas of
 underspecification or ambiguity that need attention, and
 that the chapter provides insufficient capability compared
 to overhead needed. She plans to do further research into
 whether the appropriate solution is to abandon the attempt
 or put the effort into doing it right. Council discussed
 the fact that this somewhat experimental chapter may in
 fact be utterly unused. Research into whether or not
 anyone is using it (or would like to use an improved
 version) seems worthwhile.VE Julia Flanders's initial
 recommendation for the chapter [Base Tag Set forVerse](/release/doc/tei-p5-doc/en/html/VE.html) is that Council consider ditching numbered
 lgs. Most, if not all, members thought this was a
 good idea. The editors are interested in what else can or
 should be done in this chapter — should rhymes be
 encoded more explicitly; are there other useful constructs
 that should be marked up; more examples are always good.
 
 
Alejandro BiaCH Alejandro Bia reports that the new
 Languages and
 Character Sets chapter is excellent. The chapter
 has lots of typos \& mistakes, and thus Alejandro Bia
 has lots of corrections which he will send to [the editors](mailto:editors@tei-c.org). The
 language that explains how to use ISO 3066 tags needs
 improvement; in particular the fact that 2\-letter codes
 are preferred over 3\-letter codes when available is not
 mentioned.

biblItemPerry Willett, Syd Bauman, and Lou Burnard reported that a
 small
 group of (2 or 3\) individuals have formed [xml\-biblio](http://xml-biblio.sourceforge.net/),
 a Sourceforge project expressly to investigate use of TEI
 for bibliographies. It is not clear whether any members
 of this group are bibliographers, cataloguers, or have any particular
 librarian expertise. The group suggested that
 biblStruct be altered to remove monogr,
 analytic, and series and to permit
 self\-nesting structures rather than the traditionally flat
 bibliographic structure  They also propose a
 few extra attributes with which to encode the relationship
 between nested entries. They propose that the various
 bibliographic child elements be permitted in any order, but
 that no PCDATA be allowed. Syd Bauman pointed out that it
 could no longer be called biblStruct, as it was no
 longer rigidly structured, and so the new element was named
 biblItem.The group has developed an [examples
 file](http://xml-biblio.sourceforge.net/examples_ver.4.xml)Latest version should be
 available from .
 from the
 
 Chicago Manual of Styleexamples.
 While Syd Bauman has tried to improve it a little, this file still
 proves to be somewhat unhelpfully inconsistent and poorly
 encoded.
 
 The main differences between bibl and
 biblItem are the additions of attributes for
 semantically informative nesting and the removal of PCDATA. It
 was pointed out that, were some minor changes to be made to
 bibl, biblItem would not be needed. It was
 countered that the exclusion of PCDATA is an important constraint.
 
 There was overall discontent with the idea of having 4
 bibliographic citation elements. SB
 get back to BIBL using \<bibl\>, with as little
 change as possible2005\-07\-08
 
 teiHeader's relationship to other standardsJohn Walsh reports that he and Natasha
 Smith have created
 a spreadsheet with one entry for each
 header\-element\-in\-context, and that this the list is being
 sent to catalogers at IU and UNC so that they can fill in
 the corresponding MARC \& DC fields for each record.
 Perhaps MODS will be added later. Council suggested that
 after the catalogers at IU and UNC have had a crack,
 perhaps others should also be consulted —
 particularly a European.They are expecting to be able to move on to next phase
 (i.e., after feedback from the cataloguers) as early as mid\-June. JW \& NS
 write\-up a quick report on
 the progress of the header element mapping to other
 standards project and post to council
 list 2005\-07\-01
 
 
physBibAt Council's suggestion, Julia Flanders did contact Murray
 McGillivray, asking him to take over as chair of the
 physical bibliography workgroup; he has expressed interest
 insofar as he asked to see the PB materials, but hasn't
 gotten back to her yet.It was noted that Anne Mette
 Hansen has finished defending her dissertation, and thus
 may now have more time to devote to this WG. Julia
 Flanders is a little bit optimistic that a group may be
 able to be formed.
 
 Matthew Driscoll reports that Zdenek Uhlir and Jindrich
 Marek in Prague are working on a page element
 which contains the description of the page. Jindrich Marek
 recently presented a paper at a Bulgarian conference on
 this approach, which he believes is much better than that
 of msDesc.
 
 Dr Georg Vogeler has recently organized a workshop on the
 encoding of medieval charters, dealing both with the physical and
 informational content. He presented a paper on
 this Charter Encoding Initiative
 at DRH 2004 (see [the
 abstract](http://drh2004.ncl.ac.uk/abstract.php?abstract=215)), but its current status is unknown.
 
 Council was reminded that the PhysBib group has a clearly
 defined set of goals: collation \& page descriptions. Lots of
 other nifty things can \& perhaps should be done, but
 not necessarily by this group.
 
 
RomaThe new version (installed a few days ago) is broken. The
 current version is working but there is an incorrect
 redirect in effect at the UVA server (now fixed). Lou Burnard updated
 Council on Roma changes.
Stone RubbingsChristian Wittern is interested in seeing TEI support
 some epigraphical encoding. Julia Flanders recommends
 speaking to Elli Mylonas, who knows both epiDoc and their
 rival.CW
 Look at current epigraphical standards, contact
 Elli Mylonas, report on findings to list
 2005\-07\-01 Epigraphical
 encoding should be considered in light of what MS will be
 doing with TBOs.
Changes between P4 and P5People are asking about the differences between P4 and P5
 on TEI\-L. It was pointed out that several documents (P5
 publicity page, P5 mission statement, edw81, etc.) need
 updating.It was suggested that some sort of high\-level summary
 would be appropriate for the present, and that a more
 detailed comparison, perhaps with some commentary on the
 advantages of P5 and suggestions on who should upgrade,
 would not be possible or appropriate until P5 is
 complete.
 
 

WG reportsISO/FS is still awaiting ballot. The chapter will use the
 xml:id attribute (as opposed
 to id). There will be a
 meeting in Warsaw in August.
Council Work ProceduresDiscussion of audibility during conference calls —
 speak slower and more clearly; headsets \& mute buttons
 are our friends.In order to try to make the calls themselves shorter, we
 will try reviewing action items via e\-mail the day before
 the call.
 
 Julia Flanders suggests that every report to be considered be
 accompanied by a question or items for discussion.
 
 Several council members would prefer not to need to pay for
 conference calls. AB
 investigate alternative conference call
 systems
 2005\-07\-01
 
 Council needs to be responsible for supervising the work
 being done on the Guidelines.
 
 

