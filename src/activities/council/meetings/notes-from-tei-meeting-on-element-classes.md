---
title: "Notes from TEI Meeting on Element Classes"
creator: Syd Bauman
date: 2005-10-01
---
# Notes from TEI Meeting on Element Classes





This was a meeting of the subset of the TEI Council charged by the complete Council
 to
 examine and improve the TEI class system.


The meeting was held at the University Club at Oxford University. Thanks are extended
 to
 the members from Oxford (LB, JC, SR) for their efforts in organizing the meeting,
 and to
 SR for providing home\-grown apples.


Meeting started with SB, LB, JC, SR, JW, CW at 09\-26 09:25; LR arrived at 12:04; broke
 at
 \~17:00; continued 09\-27 starting at 09:04; ended at 16:57\. A subset (SB, JC, SR, CW)
 met
 the following morning (09\-28\) from 09:30 to 12:25 and worked on developing the guidelines
 for naming model classes.





Preliminaries
 
 CW chaired the meeting; notes of decisions taken were
 recorded by
 SB, LB, and JC. This document is based upon SB's notes with some additions from
 JC's, revised by LB.


First, the agenda was reviewed, and printed copies of ED W 84 were handed out. It
 was
 quickly realized that the current ED W 84 was insufficient for our purposes, so SR
 updated
 it so that part 1 also included a column for the class membership of each element.
 This
 new version was placed on the TEI website, and projected for the group.


LB provided a quick overview of how classes work, defining
 attribute, model, and content classes as (respectively)
 elements which share a set of attributes, which occur in the same
 places in content models, and which share the same content
 model.




 General Decisions.
 
 We began by reviewing several general questions circulated before
 the meeting.
 


* We agreed to distinguish attribute classes from model classes. (I.e., no more
 both classes, and the naming scheme should reflect the different purposes.)


We discussed whether or not we wanted another
 kind of class in order to group elements
 that share a content model ("content classes"), or for syntactic sugar issues.
 The following example was used to help anchor this question: 


	+ If we had a model class X w/ members A and B.
	+ A is a member of X, has content D\*
	+ thus there exists a content class DSTAR of which A is a member
	+ DSTAR has members A and others
	+ Now I want to change A so that it has E also: E\|D\*
	+ have I removed A from DSTAR, or have I changed DSTAR?We also considered whether it was helpful to divide classes
 into semantic and structural classes, noting that all
 current semantic classes are required to be subclasses of structural
 ones \-\- a semantic class such as tei.edit cannot combine
 elements which are members of different structural classes
 (say tei.phrase and tei.chunk).
 We decided that, at least for now, we would consider only
 attribute and model classes, although recognizing the
 potential usefulness of the 
 content class
 concept.
* We affirmed that although different modules may extend membership of
 classes, the TEI class namespace is global. Consequently,
 all TEI
 classes are declared in the same module (at present, 
 core, but possibly 
 textstructure).
* We developed three criteria for an element to directly reference elements instead
 of only
 classes in its content model. 


	+ the content does not already appear in some other TEI element, and we deem it
	 unlikely a customizer will want to use it in an added element; or
	+ we deem it very unlikely that a customizer will want to add other child elements
	 to the content model; or
	+ the content model includes occurrence indicators, or
	 sequence markers making it more complex than a simple starred alternation of elements
	 (in which case, it should probably be expressed as a
	 macro).Because attribute classes are global, it makes no sense for
 the same attribute to be declared by more than one
 attribute class, unless, we can be very
 sure that no particular element would want to be members of both classes.
* We agreed that greater use of classes was unlikely to result in
 significantly looser content
 models than those already in place. We also noted the
 desirability of making explicit constraints (beyond the
 content model) currently
 represented only by prose.


A 
 constraint element as a child of
 
 elementSpec might be needed to do this, rather than
 (as at present) including them in the general
 
 remarks element. It might also contain Schematron
 code.


We discussed putting 
 note into 
 tei.Incl but decided not to,
 based on argument that


* it can be a pain to process
* may cause content model problems (would not be able to have a 
 div of only
 
 notes; would need to fix lots of content models)
* the existing 
 note element represents both
 the content of a note and its point of attachment. It might
 be good practice to separate the two functions: in this
 case, the point of attachment would be represented by an
 
 anchor, and 
 anchor is already a member of
 
 tei.incl

 It was noted that the last argument implies a need for
 specific recommendations on how the anchoring element and
 the note should be linked (e.g., what the value of 
 type
 should be). 
 
 Participants were reminded that mixing leaf and non\-leaf nodes in a single class is
 generally frowned upon.


We agreed to the rule that if 
 S is a sub\-class of 
 C and element 
 E is a member of 
 S
 then it cannot also be a member of 
 C.




 Specific Decisions on Classes
 
 In going through the element list, the following specific changes and recommendations
 were agreed upon.


* move 
 addrLine into 
 tei.addrPart, and change
 
 address content model accordingly: `( tei.Incl*, ( tei.addrPart,
 tei.Incl* )+ )`
* add the elements referenced by 
 macro.glossSeq
 into a new class 
 tei.glossing;
 redefine macro.glossSeq to reference this class
* remove 
 analytic, 
 monogr, and 
 imprint from 
 tei.biblPart
* new class 
 tei.resp contains 
 author,
 
 editor, and 
 respStmt, so that threesome can be factored out of various
 places (
 tei.biblPart, 
 analytic, 
 monogr
 ×3, 
 titleStmt)
* new class, 
 tei.biblPhrases
 containing those phrase level elements which should be available
 within 
 bibl ( 
 title,
 
 date, 
 dateRange): this new class should be
 a subclass of 
 tei.biblPart. Content model of
 bibl should reference only 
 tei.biblPart.
 See email
 discussion of 1 oct 05
* need a new class, 
 tei.biblBoxes has members
 
 bibl\[Struct\|Item\|Full], many if not all references to 
 bibl should be
 to new class. — but 
 tei.bibl already does this.
* factor out repeating parts of the 
 fileDesc
 and 
 biblFull content model to a macro 
 macro.fileDesc. I.e.,
	+ `macro.fileDesc = titleStmt, editionStmt?, extent?, publicationStmt,
	 seriesStmt?, notesStmt?`
	+ `fileDesc.content = macro.fileDesc, sourceDesc+`
	+ `biblFull.content = macro.fileDesc, sourceDesc*`
* change name of 
 tei.refsys to 
 tei.refSys.
* new class, 
 tei.citable that currently contains only
 
 quote, and is referred to instead of `q | quote` in content of
 
 cit: `cit.content = ( tei.citable | tei.bibl | tei.loc | tei.Incl
 )+`
* change the content model of all various non\-empty members of 
 tei.edit except 
 choice, to 
 macro.paraContent. The list is 
 add, 
 app, 
 corr,
 
 damage, 
 del, 
 orig, 
 reg, 
 restore,
 
 sic, 
 supplied, and 
 unclear.
* tei.data should reference 
 tei.date, thus remove 
 date, 
 dateRange, and 
 dateStruct
 from it; i.e. `tei.data = ( abbr | address | tei.date | dimensions | eg | egXML |
 expan | geogName | lang | measure | name | num | orgName | persName | placeName |
 rs |
 time | timeRange | timeStruct )` (But note that more reductions should occur to
 this class later.)
* move 
 abbr and 
 expan from 
 tei.data to
 
 tei.edit
* move 
 gap into 
 tei.intervention, removing its
 
 resp
* make macro.glossSeq (or tei.glossing) the content for all those elements that
 used to have 
 desc (i.e., 
 certainty, 
 event,
 
 gap, 
 join, 
 joinGrp, 
 kinesic, 
 relation,
 
 respons, and 
 restore)
* headItem and 
 headLabel should not
 become a class; they may be removed during a reconsideration
 of the content model of 
 list
* define new 
 tei.imprint
 class for current
 children of 
 imprint (`pubPlace | publisher | date |
 biblScope` ); factor them out of 
 imprint, which becomes `(
 tei.imprint, tei.Incl* )+` (note that this model
 requires an element from 
 tei.imprint, which the previous did
 not); remove 
 imprint from
 
 tei.biblPart and make the content model of 
 bibl
 reference 
 tei.imprint
* Remove 
 indexTerm element, replacing it by
 
 term within 
 index; add 
 sortKey to 
 term.
 (yes, this gives 
 target
 and 
 cRef to the 
 term in an index) (no, we don't know
 where the 
 gloss that the 
 target points to goes).
* move 
 label from 
 tei.lists to 
 tei.inter and 
 tei.common.
* new class, 
 tei.metricalCompents … we
 did not decide whether this class contains only 
 l or
 both 
 l and 
 lg, or references to two
 other classes, one for potentially recursive
 (e.g. 
 lg) and one for 
 non\-recursive components (e.g. 
 l). This
 class is referenced as the content model of 
 lg; LR
 argued that the potential recursion should not be hidden.
* change content models of 
 list and 
 listBibl so that 
 head
 is replaced by 
 tei.divtop;
 also add 
 tei.divbot at the end. E.g., `( tei.divtop | tei.Incl )*, ... (
 tei.divbot | tei.Incl )*`
* take 
 measure out of 
 tei.names, remember to change
 example in Guidelines 
 addendum
 — all examples with 
 key
 or 
 reg are in 
 CO/co.odd or 
 CO/measure.odd
* new attribute class 
 tei.measured to contain 
 unit, 
 quantity, 
 commodity
(A
 different name is needed to avoid confusion with the
 existing tei.measured class defined for manuscript
 description)
* factor 
 persName and 
 orgName, out of 
 tei.naming into 
 tei.agent (which becomes a subclass of
 
 tei.naming), and change content of 
 respStmt
 accordingly:  `( ( tei.agent, resp ) | ( resp, tei.agent ) ),
 ( tei.agent | resp )*`
* factor 
 p elements out passim in favour of reference to 
 tei.paragraph, always putting 
 tei.paragraph first in the content model
* Class 
 tei.citable needs to be a
 subclass of 
 msItemPart (and
 possibly other elements currently directly referencing
 this class need similar treatment, e.g. making
 
 tei.bibl )
* make 
 choice content model `( seg | choice | tei.choosable )*`,
 removing 
 choice and 
 seg from 
 tei.chooseable,
 thus allowing it to be a pure subclass of 
 tei.edit
* new class 
 tei.spComponent used only in 
 sp, only
 current member is 
 stage; thus content of 
 sp becomes `... ((
 tei.paragraph | tei.metricalComponent | lg | tei.segment | tei.spComponent ),
 tei.Incl* )+`
* move 
 ab out of 
 tei.segment into 
 tei.paragraph
* add 
 time, 
 timeRange (if kept), and 
 timeStruct to 
 tei.date (perhaps rename to 
 tei.temporal)
* scriptStmt, 
 sourceDesc, 
 taxonomy, and 
 broadcast
 need to refer to 
 tei.bibl instead of directly to its elements
* rename 
 tei.front to 
 tei.extraBodyDiv and 
 tei.fmchunk to 
 tei.extraBodyChunk, but with something
 other than extraBody to
 indicate that this is stuff which can appear either at
 the front or the back. The content of 
 front and 
 back should be
 the same: boiling down to something akin to `(
 tei.extraBodyChunk | tei.chunk )*, ( tei.extraBodyDiv | div-stuff-here )+`
* transform the repetitive parts of 
 
 body content model into macros (and consider ways of abolishing numbered
 divs)
* define new class 
 tei.bookends with members `byline | dateline | epigraph | salute | signed`
 as content of 
 closer and 
 opener; factor
 these out of 
 divtop and 
 divbot
* put all the individual children of 
 publicationStmt into new class 
 tei.publicationComponents
* new content model defined for 
 change: move 
 date to a required
 attribute, change 
 item to 
 macro.specialPara, change
 
 respStmt to required 
 who, which points to a
 
 person or 
 personGrp, \[schematron rule
 ... pending work on prosopography]
* define new class 
 tei.recording
 with members  `respStmt | equipment | broadcast |
 date` . Then change content model of
 
 recording to use it: `p+ |
 tei.recording+`
* define new macro, 
 macro.rendition
 which contains 
 macro.paraContent and becomes the sole token in
 the content of 
 rendition; this makes it easier
 to modify content of 
 rendition eg to include an XML
 vocabulary
* try changing 
 sourceDesc to have content `tei.paragraph+ | ( tei.bibl |
 tei.sourceDesc )+`
* remove 
 tei.teiHeader and
 
 tei.teiText classes
* replace references to 
 note with references to 
 tei.notes in classes and content models
* setting should reference new 
 tei.temporal class




 Specific Decisions in Related Areas
 
 In going through each element in the core, textstructure, and header modules looking
 for
 improvements in the class system, we came across quite a few other areas where changes
 are
 needed.


* remove 
 p from content of 
 langUsage
* change content of 
 foreign to
 
 macro.phraseSeq instead of 
 macro.paraContent.
* change model of 
 teiCorpus to `teiHeader, ( TEI | teiCorpus )+`
* remember to fix tagdoc of 
 binaryObject: attributes need proper declarations
* add 
 mimeType attribute to 
 rendition
* consider making 
 encodingDesc and 
 tagsDecl require at least one
 child element
* remove 
 tei.Incl from 
 monogr, 
 biblFull,
 and all of 
 teiHeader
* suggested changing name of 
 tei.tpParts to 
 tei.model.titlePageComponents
* default position is to change 
 text to
 
 tei.text wherever it
 occurs. Only exception noticed so far is
 
 binaryObject but there may be others.



LR
 investigate merging 
 label and 
 lbl.
 
SR
 fix stylesheet so that namespace isn't lost from 
 xml:id
 and 
 xml:lang in examples
 
eds. \& SR
 sort out getting 
 g into all references to 
 text; i.e., make
 new class 
 tei.text with only one member, 
 g, new
 macro 
 macro.text which is `( text |
 tei.text)*`.
 





 On Naming
 
 We had time to discuss the major structural names, listed
 below.


datatypes* tei.data.\*
attribute class* tei.att.\*
model class* tei.model.\*
macro* tei.macro.\*
module* tei..\*


We agreed that both the actual name and the corresponding filename should be in
 camelCase. We did not resolve whether or not the tei. prefix would be included in
 filenames or not.


Several members (SB, JC, SR, and CW) met at OUCS 2005\-09\-28
 from \~09:30 to 11:57 and continued the naming discussion.
 The results of this meeting have been incorporated into
 [ED W 87](https://www.tei-c.org/Drafts/edw87.xml), thanks to SR.




 Further Work
 
 We agreed that work was needed in the following areas, but could not be taken up at
 the
 current meeting.


* tei.sourceDesc needs a new
 name
* whether or not the various 
 docXX elements are needed, and if so should they
 still be in 
 divtop and 
 fmchunk
* Need to manage two things in ND: the murky mess of names, and prosopographic data.
 Could be a complete WG or a quick hack
* fix the content model of 
 list, possibly dividing into two: 
 list
 and a separate 
 glossList
* tei.chunk needs to be broken up into subclasses




