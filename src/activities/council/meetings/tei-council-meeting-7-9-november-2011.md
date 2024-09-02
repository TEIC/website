---
layout: page.njk
title: "TEI Council Meeting, 7-9 November 2011"
---
# TEI Council Meeting, 7-9 November 2011




Present in person:  Laurent Romary (Chair, LR), Piotr Banski (PB), Brett
 Barney (BB), Lou Burnard (LB), James Cummings (JC), Kevin Hawkins (KH), Martin Holmes
 (MH),
 Elena Pierazzo (EP)


Guest (day 2 only): Brian L. Pytlik Zillig (BZ) 


Present remotely: Gabriel Bodard (GB), Sebastian Rahtz (SR), Stuart Yeates
 (SY)


Location:  INRIA, Paris, France



Day 1: November 7 2011
 
 
 1\.1 Morning
 
 
 1\.1\.1 Green Tickets
 
 
 Review of green feature requests and bugs previously discussed by email.



 1\.1\.1\.1 Feature Requests
 
 
 * [3415411](http://purl.org/TEI/FR/3415411): Split
 
 certainty/
 precision/
 respons from
 model.glossLike. Straightforward ticket: LB will do it and close ticket.
* [3411906](http://purl.org/TEI/FR/3411906): Ticket was already
 implemented by LR. Ticket now closed.
* [3408683](http://purl.org/TEI/FR/3408683): Hyphenation
 section doesn't reference 
 pc/
 force. Decided, and MH
 has already proposed wording. MH will implement and close ticket.
* [3296398](http://purl.org/TEI/FR/3296398): Add 
 hi
 to 
 figDesc. Looks trivial, but actually quite complicated. SR's
 comments make sense. LB volunteers to test whether SR's proposal works.
* [3293070](http://purl.org/TEI/FR/3293070): Enhancement of
 notes and examples in ref\-del. EP disagrees with KH's comment; she
 maintains that there is a difference between 
 gap reason\="deleted" and
 
 gap reason\="cancelled". So "deleted" needs to be added to the list as
 well. GB will be asked to implement the proposed changes.
* [3282689](http://purl.org/TEI/FR/3282689): Replace 'file'
 with 'document'. Even SY agrees that it might not be worth it to
 implement the ticket; anyone can replace individual usage where they come across
 it. The ticket will be closed.
* [3275613](http://purl.org/TEI/FR/3275613): Make
 
 textLang usable in bibliographies. Proposal now is to move
 
 textLang to core, and move all the corresponding discussion of the
 element. LB objects a bit because core is too big, but that's a different issue.
 JC will actually implement it.
* [3266021](http://purl.org/TEI/FR/3266021): Dictionary
 entries with a single 
 sense. LR says this is a consistent
 repeated request from users. LB is unconvinced; PB thinks that much broader
 changes must be undertaken in the dictionaries module in the future, and is uneasy
 with this because of his practice of building up markup progressively.
 Nevertheless, it will be implemented; KH will do it, and will leave in one example
 of the practice we now deprecate (not using 
 sense), so as not to
 absolutely de\-legitimate it.
* [3210946](http://purl.org/TEI/FR/3210946): Examples for
 digital facsimile. We will defer this until we talk about the genetic
 module.
* [3064014](http://purl.org/TEI/FR/3064014): Provide
 suggested values for 
 rs/
 type. Over objections by SR
 and LB, the Council agree that it's a good idea in any discussion of
 
 type\-like attributes to provide a pointer to an existing ontology or
 taxonomy. We have a current practice in which syntactic sugar 
 type
 values are taken from the names of the corresponding elements; we should express
 this clearly under 
 type's explanation. There should also be a comment
 on the general definition of 
 type to the effect that we recommend the
 use of existing taxonomies where suitable. We should also ensure that all our
 examples in the Guidelines are consistent with this practice, so one example in
 3\.5\.1 needs to be changed ("organization" becomes "org"). However, rs defines its
 own 
 type, so the same text needs to be added there. The reference to
 the BBN taxonomy belongs in 
 rs/
 type, not the general
 
 type. KH will implement this.
* [3051750](http://purl.org/TEI/FR/3051750): Choice of
 schema language when using the TEI. The only comments are against the
 ticket, and KH was initially OK with closing it unimplemented, but the general
 sense of the Council is that there should be some information about the various
 advantages and disadvantages of particular schema types. KH believes this belongs
 in 23\.3\.2\. LB points out that there is a basic discussion in the General
 Introduction. LB suggested a rewording of the second para of 23\.3\.2, moving the
 first sentence after the second, and modifying it somewhat. A broader discussion
 belongs elsewhere, either on a wiki page or in Roma. The consensus is that it
 belongs in Roma, on the Generate Schemas page; SY suggests it should take the form
 of a link to a Wikipedia page. JC will write the sentence, and insert it into
 Roma.
* [3046288](http://purl.org/TEI/FR/3046288): Allow
 
 f to contain PCDATA. LR will implement this, getting examples
 from documents created by the group requesting the change.
* [3041605](http://purl.org/TEI/FR/3041605): Update list of
 Council members. The Council agrees that the current list of members
 should be updated, and that a complete list of current and former Council members
 should be maintained and included in the Guidelines. KH will collect info from LB
 and elsewhere to create the list, and MH will then take over to create a more
 robust and formal collection of info based on a 
 listPerson; a template
 
 person can be sent out to TEI\-L. LB reminds us about privacy concerns.




 1\.1\.1\.2 Bugs
 
 
 * [3432216](http://purl.org/TEI/bug/3432216): i18n revision
 due. Deferred in favour of a broader discussion of translations.
* [3400295](http://purl.org/TEI/bug/3400295): Inconsistent
 definitions for some elements. MH will provide LB with examples of
 
 label used to mark topic transition in prose text.
* [3304622](http://purl.org/TEI/bug/3304622): Invalid
 
 xml:lang values. EP and PB: We must use two\-letter codes
 where they exist, and where they don't, three\-letter codes can be used; locations
 should be in upper\-case. PB will recheck Syd Bauman's list (on the ticket) and fix
 all bad examples.
* [3289073](http://purl.org/TEI/bug/3289073): Many missing
 references in Guidelines. SY will implement; KH will handle the three
 references he added.
* [3285020](http://purl.org/TEI/bug/3285020): Irregularities
 in 
 gram syntactic sugar variants. LR suggests that we create a
 new attribute class for 
 dcr:datcat, apply it to all the model.gramPart
 elements, and then wait for other requests for the same attribute. PB will
 implement this, and make a list of other elements that might also want it (in
 collaboration with the linguistic SIG).
* [3223544](http://purl.org/TEI/bug/3223544): Use of
 
 head and 
 p within 
 figure. Solution: remove
 "Figure 1: " from the second example, to reduce confusion. LB has implemented and
 closed the ticket.





 1\.1\.2 General Discussion
 
 
 LR commented that he would like to see many people in the community implement tickets
 in future, based on OK from Council. 


Who should assign colours to tickets? At the moment it's LB who assigns colours, but
 others could/should. The submitter shouldn't, but the first commenter perfectly well
 could. For clarification: 


* GREEN: It's clear what needs to be done, or is being
 requested.
* AMBER: It's not yet clear what action is requested.
* RED: It's completely unclear what's being requested or
 suggested.





 1\.2 Afternoon
 
 
 1\.2\.1 Amber Tickets
 
 
 * [3423687](http://purl.org/TEI/FR/3423687): A general purpose
 
 description alongside 
 traits/
 states. LR, PB:
 The proposal for a new 
 description element is rejected. However, there is
 still an issue to deal with. 
 trait and 
 state are essentially the
 same, the only difference being ontological (essential vs incidental). The content
 model is the same, and they are both timed. In the long run, we would want to keep
 
 trait only, and when you need to differentiate essential and incidental,
 you rely on the 
 type attribute, and the possible temporal attributes you
 may use to limit applicability. Should we deprecate 
 state in favour of
 
 trait; or use the Guidelines text to explain that if you're confused
 about the difference, use 
 trait, and that 
 state is syntactic sugar
 for 
 trait type\="state"? We recommend that 
 trait is the default
 element to represent semantics of properties etc.; this will require an adjustment
 to the definition of 
 trait to make it broader, so that it can be used for
 temporally\-bounded characteristics. After some discussion, we decided that
 
 state makes a more obvious default, because it can handle both temporal
 and non\-temporal properties. So: in immediate response, we will suggest
 
 state as the default choice, purify the 
 trait examples in the
 Guidelines to remove the temporal attributes, check all the 
 trait examples
 to see which need to be changed to 
 state, and raise a new ticket to
 consider the merging of model.traitLike into model.stateLike.
* [3412198](http://purl.org/TEI/FR/3412198): JC, MH: make
 
 listPerson and 
 listOrg members of model.personLike. We
 should add 
 listPerson, 
 listPlace and 
 listOrg to
 
 org; and add 
 listOrg to 
 particDesc. LB suggested
 creating a new model.orgPart, which would make the changes to 
 org simpler,
 and adding 
 listOrg to the content model of 
 particDesc. LB will
 implement it.
* [3408897](http://purl.org/TEI/FR/3408897): KH, EP:
 
 role for 
 publisher. To deal with this ticket, we
 should allow 
 respStmt within 
 imprint. We would then have ways to
 handle more than just publisher\-like roles within 
 imprint. This requires
 broadening the definition of 
 resp and 
 respStmt to allow them to
 apply to organizations. We should also consult with the workgroup who looked at
 physical bibliography for more guidance on requirements in this area. LB objected
 that there was little distinction in the past between the functions we now
 distinguish (printer, bookseller etc.); EP objected that this is certainly not the
 case for early printed books, and gave examples. The Council decided that KH \&
 EP's solution should be implemented, and MH will implement it.
* [3311604](http://purl.org/TEI/FR/3311604): att.coordinated
 language. BB, LB: Point 2 is agreed: we need more examples of
 
 start. Point 1: should be rejected because we can think of good
 use\-cases where both may be required; Point 3: We can't really make much sense of
 the comment, except that we do need more examples of the use of 
 points.
 MH will look for (or create) more examples of 
 start and
 
 points.
* [3086675](http://purl.org/TEI/FR/3086675): Expand note on
 
 availability. Assigned to MH to finish implementation.
* [3113682](http://purl.org/TEI/FR/3113682): Make 
 ptr
 \& 
 ref members of att.internetMedia. Assigned to MH to finish
 implementation.
* [2834511](http://purl.org/TEI/FR/2834511): Add more elements
 to att.spanning with schematron constraint. LR, JC: This introduces a
 parallel method of doing spanning for elements (
 add, 
 del) which
 already have a method (
 addSpan and 
 delSpan), so it's unlikely that
 anyone would have a need for it right now, unless we implement it for all of
 model.pPart.transcriptional. Everyone likes the longer\-term vision of implementing
 spanning through att.spanning being added to many elements, but is unwilling to
 implement only a part of it that gives us nothing new. A working group of GB, BB and
 LB will go away and a) check which elements they believe should be included, and b)
 write an explanation of what it means when these spans cross element boundaries such
 as paragraphs.
* [2925145](http://purl.org/TEI/FR/2925145): Generic dating
 class. MH, KH: This ticket has a detailed implementation strategy, which
 was only waiting on the implementation of two other tickets before it could proceed;
 those have now been done, so it should be implemented. The new objection by ianrons
 is basically that up to now, people have been abusing 
 calendar because
 
 datingMethod did not exist, so these two attributes may be confused;
 our response would be that now 
 datingMethod will be available, there is
 no need to abuse 
 calendar, and existing abuses can be fixed, or not, at
 the discretion of their perpetrators. Assigned to GB to implement.
* [3060867](http://purl.org/TEI/FR/3060867): Grouping
 traitlike, statelike, and eventlike elements. LB, PB: We should create a
 new 
 listState element, to be added to the content models of
 
 person, 
 place and 
 org, and which would have a content
 model of model.stateLike (assuming that's the one we recommend in the other ticket).
 Assigned to PB for implementation.
* [3393244](http://purl.org/TEI/FR/3393244): Simplify content
 model of 
 subst to 
 add and 
 del only. EP, BB:
 This ticket arose out of an old ticket which was previously discussed and assigned
 to JC, but was not implemented. The proposal is to deprecate the current model of
 
 subst (model.pPart.transcriptional); create a new content model that
 allows only 
 add, 
 del and milestone elements (starting with adding
 the milestones, removing model.pPart.transcriptional and replacing it with the
 individual elements, and then removing the others at the expiry of the deprecation
 period); and create 
 substJoin to allow the grouping of a range of elements.
 The Council gradually came round to the view that we should actually remove
 model.pPart.transcriptional elements now, and avoid the deprecation period, because
 the original inclusion of those elements was wrong, and therefore this is a bug and
 should be fixed. GB suggests we should actually use this as an exercise to work out
 how we should do deprecation. In the end we came down in favour of implementing it
 right now. GB will implement it.
* [3210946](http://purl.org/TEI/FR/3393244): Examples for
 digital facsimile. We will defer this until we talk about the genetic
 module.






 Day 2: November 8 2011
 
 
 2\.1 Morning
 
 
 2\.1\.1 Genetic Transcription
 
 The transition between the discussion of 
 facsimile and the explanation of
 
 sourceDoc, and when you would use the latter, needs to be expanded (EP, MH
 and LB). The content models of 
 surface, 
 zone etc. are identical
 whether they appear within 
 facsimile or 
 sourceDoc. This could lead
 to confusion. EP: The idea is to discourage 
 facsimile. MH: But the genetic
 workgroup believes that 
 facsimile and 
 sourceDoc are different; if we
 remove the former, those who need that will surely complain. JC: 
 facsimile
 and 
 sourceDoc are different, and have different use cases. LB: We should
 provide schematron rules to say that if you use e.g. 
 line, it should have
 ancestor::sourceDoc. LR: three points: We have ended up with a double mechanism, when
 a single mechanism would be simpler; some people like 
 facsimile and want to
 keep it; some people would pursue the goal of coherence and want to remove one of
 them. MH: can we make 
 facsimile an actual alias for 
 sourceDoc
 through a technical mechanism? LR: Yes, through 
 equiv in the description of
 
 facsimile, in the ODD. We could provide two ODDs, one for
 
 sourceDoc and one for 
 facsimile, and the latter could be defined
 as a subset of the former. This is not yet possible in ODD. MH, summarizing: For now,
 we're stuck with using both elements, explaining the difference between them, and
 explaining the long\-term strategy. 


EP: There are some major problems with the chapter as it stands: 


* The opening with two facing pages, with a patch crossing the two pages, or where
 the author has considered the opening as a single surface (e.g. Proust's working
 texts). EP proposed to the Goethe working group that a single 
 surface be
 used in this case; this means that 
 surface is being used as a
 psychological construct. The working group responded positively to this, and Council
 thinks
 it's uncontroversial. EP has examples, and will provide one from Proust, because the
 chapter should have one. BB: the chapter currently reads as though a
 
 surface is a physical object, or exists prior to interpretation, but we
 need to modify that description so that it allows for, or even specifies, the fact
 that a 
 surface is a psychological construct of the encoder, presumably
 based on the assumed perception of the original author who chose to use it that way.
 JC: Why shouldn't this situation be handled by nesting 
 surface? EP: In this
 case, you could represent the page 
 surfaces side\-by\-side, rather than
 nesting them. There is no need for nesting.
* A mini\-
 surface within an existing 
 surface is represented as a
 
 patch. If the patch is written on both sides, then it's
 
 flippable, but how do we distinguish that from two separate patches?
 JC, LR: We need nested surfaces to handle this. LB: 
 patch is just a special
 kind of 
 surface. Should we collapse it into the definition of
 
 surface? LB suggests we kill 
 patch, and we introduce something
 called 
 surfaceGrp, of which the prototypical case is a "leaf"; another
 example is a pile of post\-it notes on top of each other. A 
 surfaceGrp is
 not a matter of interpretation; it's a physical object which includes multiple
 
 surfaces. EP objects to the idea of physical objects, because all
 determination of 
 surface is by the encoder; we can't really express
 physical reality. MH, JC: A 
 surfaceGrp could not have a single coordinate
 space because it is not a single two\-dimensional space; a 
 surfaceGrp can
 have a location within the coordinate space of its parent 
 surface, and its
 child 
 surfaces have their own coordinate spaces. The group consensus now is
 that what we were thinking of as a patch could be represented either as a nested
 
 surface (in the case of a single pasted object with only one significant
 face) or a 
 surfaceGrp (in the case of a flippable two\-sided object, or a
 multi\-page booklet pasted onto the parent surface). Both 
 surface and
 
 surfaceGrp therefore need to be able to express their dimensions within
 the coordinate space of their parent 
 surface; in the case of a nested
 
 surface, it may also define its own coordinate space which act as the
 context for 
 zone elements defined within it. 
 surfaceGrp may be a
 child of 
 facsimile or 
 sourceDoc.
* The leaf concept has been largely covered with 
 surfaceGrp, but there's
 the issue of transparency; a writer may interact with something visible from the
 other side of a leaf, by e.g. doodling around it. MH: this might be handled through
 an attribute on 
 zone, such as "bleedThrough".
* EP: BB raised the issue of 
 alt on the list; exactly what did he mean?
 BB: I'll have to go back and look at that again.


SUMMARY: LB will rework the draft, and do it as fast as possible;
 he'll then ask all Council members to read the whole thing again. We should allow
 three working days, including if possible a weekend, to do the appropriate level of
 proofing. 




 2\.1\.2 Amber Tickets
 
 Three amber FRs were assigned to LB and set to Pending because they relate to the
 genetic proposal already in process: 


* [3095641](http://purl.org/TEI/FR/3095641): New elements to
 document stages in the writing process.
* [3095640](http://purl.org/TEI/FR/3095640): New
 model.pPart.transcriptional elements for genetic markup.
* [3095637](http://purl.org/TEI/FR/3095637): New
 
 document
patch
line elements for genetic view.


Two tickets were postponed till the afternoon EEBO session. The following tickets
 were addressed: 


* [3293316](http://purl.org/TEI/FR/3293316): Move
 
 witStart et al. to model.milestoneLike. This topic is being
 addressed by a working group right now, so the ticket is assigned to EP with a note
 to that effect.
* [3115238](http://purl.org/TEI/FR/3115238):
 
altIdentifier in 
 msPart. Assigned to EP, who
 will nudge Torsten to provide the required examples.
* [3118435](http://purl.org/TEI/FR/3118435): Classes in
 interleave mode and cardinality membership. This is an ODD3 request; MH
 asks if the suggested functionality in ODD would be implementable in XSD, or whether
 it would reduce us to only RelaxNG as a fully\-working output schema language. There
 are actually two tickets here; the cardinality issue has been moved to another
 ticket, while this ticket is now addressing only interleave. We will post a comment
 asking gaiffe to create a new ticket only about interleave, and close this ticket.


The following tickets were dealt with: 


* [3290834](http://purl.org/TEI/FR/3290834): 
memberOf
 with cardinality restrictions. \[Related to above.] We will make this green
 and accepted. It is assigned to SR.
* [3258912](http://purl.org/TEI/FR/3258912): Clarification of
 
 colloc. Marked as green, accepted and pending, and assigned to
 LR.
* [3156049](http://purl.org/TEI/FR/3156049): Managing
 
 egXML content (validation and presentation). JC, PB: There are
 two separate issues. First, does the prose need to be tidied up with respect to the
 last two comments. We agree, and this should be done. Second, should the
 
 teix:show attribute be handled. LB commented on the ticket to say that
 
 tei:rend could be used both for showing and for specialized rendering
 to e.g. highlight part of some code for teaching purposes. Therefore JC and PB
 propose using the 
 tei:@rend attribute inside 
 teix:egXML to
 specify rendering requirements etc. So: a) correct the prose according to the last
 two comments on the ticket, and 2\) add 
 tei:@rend to all elements within
 the teix namespace. The implication of 
 tei:@rend in this context is that
 a processor will act on the attribute as a rendering instruction, rather than show
 it as part of the example. Set to green and assigned to JC.
* [3147225](http://purl.org/TEI/FR/3147225): New element
 
 spGrp. EP, LB: The proposal is that there are sub\-div\-level
 structural groups of speeches etc., as in e.g. shared arias or musical numbers, or
 play\-within\-a\-play situations, and that a new 
 spGrp element should be
 created to handle this. The content model would require a minimum of two
 
 sps, along with anything else that can appear between 
 sps. But is
 this too specific? Should we instead introduce a new 
 floatingDiv element
 that would handle other cases too? However, this is a simple case with a simple
 proposed solution which everyone understands, so we accept it. Marked as accepted
 and green, and assigned to LB.
* [3188679](http://purl.org/TEI/FR/3188679): Change content
 model of 
 ident. MH, LR: LB's use\-case is actually a use\-case for
 
 idno, not for 
 ident. For instance, he uses URLs and filenames,
 and both of these should be 
 idno. However, 
 idno also does not
 permit internal structure, and there are other use\-cases where that would be a good
 idea (for instance ISBNs and ISSNs). At the same time, 
 ident does have a
 specific purpose, which is tagging formal identifiers in e.g. programming languages,
 and these do 
 not typically have internal structure. Finally, we are
 sympathetic to Sebastian's objections related to processing. Therefore we propose
 that 
 idno should be made recursive, allowing internal structure, examples
 of recursive 
 idno should be supplied, and LB should be encouraged to use
 
 idno instead of 
 ident for his purposes. EP strongly objected
 that the subdivisions of 
 idno are not necessarily 
 idnos. LB says
 that the difference between 
 ident and 
 idno definitely needs some
 clarification. Assigned to MH to clarify the guidelines on the difference between
 
 idno and 
 ident, and close the ticket, and to LR to raise a new
 ticket for the nesting of 
 idno so the council can address it at length.
* [3305016](http://purl.org/TEI/FR/3305016): Make
 
 graphic available within 
 table and 
 formula.
 BB, KH: The current content model of 
 formula allows text or graphics. It
 turns out that table has similar requirements: it may (need to) be represented by
 a
 graphic element. So the proposal is to extend the model of table to include
 
 graphic. The prose should be revised not only for table but also for
 
 formula to explain that this is allowed. LB pointed out that you could
 use 
 facs, but MH replied that you should be able to choose between doing
 things in the same way as is done with 
 formula if you wish, or use
 
 facs throughout if that is your encoding practice. MH also pointed out
 that there is a use\-case for more than one graphic (tables printed over several
 pages), so it should be one or more graphics. Set to pending, accepted and green.
 Assigned to KH (with help from LB for the content model change) to implement.
* [3106834](http://purl.org/TEI/FR/3106834) and [3106829](http://purl.org/TEI/FR/3106829)
floatingText issues. (Discussed in the afternoon, but added
 here for clarity.) KH summarized that we appear to have a pointless prohibition
 against using 
 floatingText for incomplete texts. The practical problem is
 that you can't use 
 quote for a quote of a lengthy part of a text, because
 its content model is too restrictive, but the description/definition of
 
 floatingText specifies "complete". The Council had discussed and agreed
 on the second ticket in Chicago, but implementation was held up by another ticket,
 which has now been resolved, so we can go ahead with minor adjustments to the
 proposed wording to remove the example of a musical number, which we now recommend
 handling through 
 spGrp (see above). Council created a new, improved
 formulation of the change to the text. Set to agreed, green and pending, and
 assigned to KH for implementation, although he will assign it to BB when SourceForge
 settings have been changed to permit this.





 2\.2 Afternoon: ECCO/EEBO Discussion
 
 
 Brian L. Pytlik Zillig (BZ) from EEBO joined the meeting all day, and in the afternoon
 Council worked with him on a number of issues regarding the possible convergence of
 TCP
 and TEI. The EEBO corpus will contain several billion words, and will be freely
 available in the future, so it's in our interests to make sure that interoperability
 between TCP and TEI is maximized. 


There are a number of areas in which moving from TCP to TEI P5 is complicated. Three
 groups of issues were identified by Martin Mueller (MM): 



 2\.2\.1 First Group of Issues
 
 * Accept the EECO model for 
 figure wholly or in part.
The Council first looked at the following items from MM's spreadsheet in
 GoogleDocs: 


	+ figure/
	 l
	+ figure/
	 lg
	+ figure/
	 quote
	+ figure/
	 signed
	+ figure/
	 sp
	+ figure/
	 stage
	+ figure/
	 table We discussed possible approaches that involve an intermediary element that would
 allow the required elements inside it, but eventually settled on allowing these
 elements inside 
 figure because this expansion of the content model of
 
 figure is likely to benefit many other projects too (BB). SR proposes
 that we change the content model of 
 figure to match that of the prototype
 of 
 floatingDiv. LB suggests that 
 figure should have the same
 content model as div. The Council agrees that this should be enacted and JC has
 created ticket [3434973](http://purl.org/TEI/FR/3434973) for it.
* Add 
 opener and 
 closer to the P5 
 postscript
 model. (This is our ticket [3232942](http://purl.org/TEI/FR/3232942).) 
 EP: The current content model of 
 postscript makes it
 useless anyway, so if we're going to change its model we might as well try to make
 it truly useful, by adding all elements allowed in 
 div. It became
 apparent to the Council that the current content model of 
 postscript is
 ridiculous because it's simultaneously over\-permissive (
 camera,
 
 elementSpec) and overly restrictive (no 
 opener or
 
 closer). SR proposed a more sophisticated content model which has been
 added to a comment on the ticket. SR volunteers to implement this.
* Permit 
 l as a direct child of 
 head.
EEBO has lots of examples of 
 l inside head, but P5 does not permit this.
 Some members of council felt we should allow 
 l in 
 head; others
 thought we should allow 
 lg, and require that 
 lg wrap the
 
 ls; still others thought that no line\-group could possibly constitute a
 
 head. Council agrees that both 
 lg and 
 l should be
 allowed inside 
 head, because elsewhere both 
 lg and 
 l
 are allowed alongside each other. How to implement this is not yet clear. LB has
 raised ticket [3434992](http://purl.org/TEI/FR/3434992) for this,
 and it is not yet assigned to anyone.
* Permit 
 stage as a direct child of 
 lg.
The justification for this is convincing, and SR suggests adding model.stageLike
 to the content model of 
 lg, which the Council approved. LB has raised
 ticket [3434996](http://purl.org/TEI/FR/3434996) for this.
* Permit 
 floatingText and 
 table as direct children of
 
 sp (which would also align 
 sp with 
 said, which does
 allow those elements). 
Council agreed that, since a letter can be read out by a speaker, and a letter is
 a 
 floatingText, then 
 sp should allow 
 floatingText; the
 case for 
 table is harder to make, especially since it can be avoided
 simply by wrapping the 
 table in 
 sp. SR could not find any
 examples of 
 table in 
 sp in ECCO, but found one of a
 
 sp/
 p/
 table, which looks quite convincing, and Council
 came to the view that 
 table should be allowed. The Council's decision is
 that we want to allow both 
 floatingText and table within 
 sp, and
 a ticket should be raised and someone assigned to discover the best approach to
 this, since it's not immediately obvious. This has not yet been assigned to
 anyone.




 2\.2\.2 Second Group of Issues (EEBO's responsibility)
 
  Council looked at the following five items, and concluded that all seem reasonable,
 and are the responsibility of whoever is tranforming the EEBO texts: 


* headnote and 
 tailnote can be expressed as
 
 notes with type attributes.
* Single 
 p elements inside 
 cell can be deleted making the
 content of 
 p the immediate content of 
 cell.
* The EEBO 
 element can be expressed as 
 floatingText
 type\="letter".
* The rare 
 above and 
 below can be expressed as 
 hi
 class\="above" or perhaps some different ways.
* postscript elements as last children of 
 closer can be
 turned into right siblings of 
 closer.




 2\.2\.3 Third Group of Issues (unaddressed)
 
 There was no time to consider the third type of issue identified by MM, exemplified
 in the following items: 


* Cases in which 
 list appears as child of 
 label in EEBO
 texts should be remodeled as two\-column tables or expressed in some other
 way.
* The few instances in which 
 cell has a complex content model
 along the lines of 
 item should be rethought.
* In addition to these problems, the encoding of signatures in early modern
 texts may require additional discussion.


Council noted that it would also like to request access to the current state of EEBO
 in its "lossless XML" form, as well as the facsimiles, so that we can generate a list
 of issues that we believe EEBO might wish to address, and made that request to BZ.
 






 Day 3: November 9 2011
 
 
 
 3\.1 Morning
 
 
 The council started with a brief review of the last ticket discussed at the end of
 the
 preceding day, to bring LR up to date on its resolution.



 3\.1\.1 Amber Tickets
 
 
 * [3432520](http://purl.org/TEI/FR/3432520)Introduce standard attributes to refer to ISOCat. This ticket has
 been assigned to PB. The original proposal was to add the new
 
 dcr:valueDatcat attribute to global attributes, but instead we will
 create an attribute class called att.datcat for it, and add that class to elements
 only in response to specific requests. Initially, all the members
 ofmodel.gramPartand 
 gram will get the attribute. Set to Pending and
 assigned to PB.
* [3434990](http://purl.org/TEI/FR/3434990) Require minimum of
 two lines or 
 lg inside 
 lg. JC believes the definition of
 
 lg requires that there be more than one 
 l in a 
 lg.
 Others (LR, MH) believe that there are good use\-cases for a single 
 l inside
 
 lg. Assigned to LR to gather and express arguments on both sides of the
 issue.
* [3064757](http://purl.org/TEI/FR/3064757)XML construct encoding within Schematron. This was assigned to SR,
 asking him to check whether it's a simple fix or something very complicated because
 of processing requirements.
* [3376456](http://purl.org/TEI/BUG/3376456)Deprecate use of 
 gram except as a child of 
 gramGrp
 (
 gramGrp is allowed as a child of both 
 form and
 
 sense, but 
 gram is allowed only as a child of
 
 form.) (Submitter would like it added to 
 sense as well
 in keeping with feature request 3266021 and in keeping with section 9\.3\.2, which
 implies that you can encode grammatical information either way.) Assigned to KH to
 implement; he will then open a deprecation ticket, on which we'll eventually act.
* [3270162](http://purl.org/TEI/BUG/3270162)
profileDesc: one or more 
 catRef. KH: We should
 either use one 
 catRef or explain the reasons for using more than one. LB:
 We can't enforce a single 
 catRef without breaking backward compatibility.
 The consensus is that this is a matter of stylistic preference, and the Guidelines
 should make this clear. PB provided good use cases for both styles. KH: We should
 recommend one approach in the interests of interoperability. SY: Picking one makes
 writing stylesheets easier. The Council generally agrees, with one exception. PB:
 We
 should not recommend use of a single 
 catRef because it's difficult to
 maintain. Council agrees that we should recommend that people use multiple
 
 catRefs, because multiple targets can be cumbersome. KH was asked to
 propose a wording for this, and the ticket was assigned to him.
* [3223636](http://purl.org/TEI/BUG/3223636)
xml:space vs. CDATA for blocks of code. MH, PB: A careful
 reading of the definition of 
 xml:space fails to reveal what its value of
 'default' implies, although 'preserve' should act as an instruction to a processor
 to preserve whitespace in the hosting element and all its descendants (meaning that
 LB's determination, in the TEI\-L discussion, that it's meaningless in the context
 of
 text\-only elements is presumably wrong); but evidence from actual implementations
 in
 browsers suggest that it only applies to the whitespace between child elements in
 element\-only content elements (meaning that LB would be correct). So for various
 reasons 
 xml:space may be a red herring anyway. The problem raised by KH
 on the ticket is one of rendering. In the TEI stylesheets, 
 tei:code is
 simply converted to 
 xhtml:code. We recommend that someone draft an
 explanation of 
 xml:space and its meaning in TEI. PB recommends that we
 remove the one sentence referring to 
 xml:space from the Guidelines, but
 LB suggests instead supplementing it with an explanation of the difficulties we see
 with regard to using it. LR suggests making a request to the W3C to clarify their
 specification. In the context where it appears, though, that sentence is irrelevant
 because it will have no effect on the element concerned, so we should remove it, but
 we should still add an explanation of difficulties with 
 xml:space
 wherever 
 xml:space is defined. Assigned to PB, but left as Open, not
 Pending, because it's not urgent.
* [3216049](http://purl.org/TEI/BUG/3216049)Normalize attributes and classes on
 
 placeName/
 geogName. JC, LB: There is some rationale
 behind the absence of these attributes from 
 geogName, but it doesn't really
 hold up. The content model for 
 placeName is a bit suspect (e.g.
 
 dimensions), but that's a different issue. The Council agrees to give
 
 geogName the same attribute set as 
 placeName, and then raise a
 second ticket to deal with the problems in that set of attributes. Assigned to LB.
* [3423686](http://purl.org/TEI/FR/3423686)An 
 object element. KH, EP: KH and EP suggest asking the
 Ontology SIG to go ahead and draft a proposal for creating 
 object,
 
 listObject and 
 objectName, and accompanying details and
 Guidelines text, and submit them to Council for consideration. The ticket will is
 assigned to SR and left open.
* [3309894](http://purl.org/TEI/FR/3309894)Encoding RDF relationships in TEI. SR: 
 relation is nearly
 adequate to enabling the extraction of RDF triples. 
 relation was originally
 for people, but should be extended for more general applicability, and adding
 
 ref and 
 key on it. SY objects on the basis that RDF can be
 embedded in TEI anyway, but the submitter and the SIG are strongly in favour. The
 submitter strongly recommends renaming the 
 active and 
 passive
 attributes to 
 subject and 
 object, and removing
 
 mutual, but Council feels it's not worth breaking backward
 compatibility just to rename attributes. The SIG will be asked to raise a new ticket
 if they feel very strongly about the naming issue. 
 relationGrp will also be
 added to model.biblLike. Assigned to SR to implement, and set to Pending and green.




 3\.1\.2 Other Issues
 
 
 EP asked that we create a link on the TEI site to a filtered list of SF tickets
 including only the deprecation tickets, so people can easily see what is currently
 deprecated. MH suggested there be two lists, one showing open deprecation tickets
 and
 one showing closed (because enacted) deprecation tickets. LB opened a ticket for this,
 and assigned it to JC.





 3\.2 Afternoon
 
 
 3\.2\.1 Discussion Topics
 
 
 * Dealing with SPAM on the wiki. Right now anyone can create an account
 on the wiki, and this results in spam. If we change this to submitting an email,
 then there may be a significant delay before people get logons, and we may still not
 easily be able to tell genuine requests from spammers. The Council recommends that
 the webmasters (DS and JC) investigate possible alternative solutions to these
 problems.
* P4 survey report. JC did a survey of usage of P4, in advance of its
 scheduled end\-of\-life: <http://blogs.oucs.ac.uk/jamesc/2011/10/27/tei_p4_support/>. JC: this
 basically gives us encouragement to start moving P4 to the Vault over the next year.
* \*Grp vs. 
 list\*. BB, LB, PB: The current situation
 is horrible:
	list\*.xml:
	 
	 + listBibl.xml
	+ listChange.xml
	+ listEvent.xml
	+ listNym.xml
	+ listOrg.xml
	+ listPerson.xml
	+ listPlace.xml
	+ listRef.xml
	+ listWit.xml
	+ list.xml
	\*List.xml:
	 
	 + attList.xml
	+ castList.xml
	+ specList.xml
	+ valList.xml
	\*Grp.xml:
	 
	 + altGrp.xml
	+ forestGrp.xml
	+ gramGrp.xml
	+ interpGrp.xml
	+ joinGrp.xml
	+ linkGrp.xml
	+ locusGrp.xml
	+ measureGrp.xml
	+ personGrp.xml
	+ rdgGrp.xml
	+ relationGrp.xml
	+ spanGrp.xml
	+ specGrp.xml
	+ transposeGrp.xml
	\*Group.xml:
	 
	 + castGroup.xml
 
 EP: We could try to use 
 equiv to make element aliasing work, and then
 rationalize the names; we could push this problem forward to P6, and develop an
 explicit strategy for naming these things; or we could throw up our hands and do
 nothing. PB: We should fix 
 transposeGrp while we can. We should develop a
 clear set of naming principles for these things. LB: There is a general section in
 the Guidelines on naming of elements. A description should go there. LR: It should
 go in tagDocs because people use that when writing ODDs. LB: All but a handful of
 the 
 \*Grp elements are syntactically correct as groups; the exceptions are
 
 transposeGrp, which we've agreed to change, 
 forestGrp, and
 
 relationGrp. LB will raise a ticket for this.
* Magic tokens. JC, KH, LR: The consensus is that we could integrate
 within 
 ref all the usages currently covered by 
 key, so the
 vision for the future is that we don't need 
 key. However, 
 key
 is widely used right now, so we should not remove it or deprecate it. We should
 modify the Guidelines to make the point that people should switch to 
 ref
 wherever 
 key is mentioned. KH will create a ticket and start implementing
 it.
* Translations. MH, EP: First, how should we realign the translations
 from 2007? Second, how do we put a system in place to ensure that translations don't
 get too far behind? Before we can act, though, we need to know whether the TEI
 prioritizes it or not, and is willing to put some money into it. To do that, we
 really need to do a survey of the community; such a survey would have to be
 multilingual, and we would need to make sure we can reach non\-English\-speaking
 users, so we'll have to issue a multilingual call, and ask TEI\-L users to circulate
 it among their communities. PB: Adding requirements for translation of every change
 can actually make the maintainers of a project reluctant to make needed changes. We
 could also go for a wiktionary approach for element definitions, but that would be
 another environment to maintain. LR: The first action is to issue a multilingual
 survey; the second action is to implement models for translation environments and
 tools; and thirdly, we need to find a way to officially validate or certify
 translations. We should report our intentions to the Board through EP, and we will
 raise a ticket that ensures we return to the issue at the next meeting.
* Architecture of TEI/ODD. LR, JC, LB: There are three main
 orientations that the TEI should follow in the medium\- and long\-term. First, we
 should make ODD feature\-complete (getting rid of external vocabularies etc.).
 Second, we should start by working on the inheritance model to deal with the
 
 type issue (enable the overriding of an attribute description inherited
 from a class). We should have a traditional class inheritance structure for e.g.
 content models. Finally, we should derive modules from this class inheritance.
* Tools. PB, KH, SR: The web Roma (not the command\-line processor)
 needs a rewrite. Much of its functionality has been taken over by OxGarage. It can
 be done with JavaScript/AJAX. There are two ways to do this: get some money and pay
 an intern to do it, or apply for outside grant money. However, if we are going for
 outside money, we should have greater ambitions. Roma should be more generalizable,
 as LR wants, to use with non\-TEI ODDs. The whole of the processing could actually
 be
 written in JavaScript and run on the client, so no server back\-end is required. EP
 asked what about Vesta? SR notes that most of its functionality is available in
 OxGarage. Vesta was an experiment to see if we could write a desktop version of
 Roma, and it was never finished, and now can no longer be built. We no longer need
 it because we can do the same work in oXygen. Council concluded that we should look
 around for possible granting agencies that might give us a substantial grant for
 this, and earmark some time at the next meeting to polish a formal grant
 application. All council members should do this. We should also add OxGarage to the
 Tools page on the TEI site. KH will do that.
* Workflow for Community and Council. MH, EP, BB: First, the SF ticket
 system is only comfortable for programming types, so there should be an intermediate
 mechanism to enable people to submit a request to the Council mailing list, so one
 of us can pick it up and turn it into a ticket. This should be on the TEI website,
 and have a captcha. Second, the [TEI by
 Example](http://tbe.kantl.be/TBE/) site is not linked from the TEI website; it should be prominent.
 This should be submitted as a FR. Third, our website is not helpful at all. It needs
 to be reimagined or restructured from the point of view of new users, in accordance
 with usability guidelines. For workflow with regard to Council, can we reduce the
 volume of messages and in particular the noise and trivialities. LB 's guide to
 editing the source needs to be expanded, and complemented by a semi\-formal mentoring
 system to enable new members to become effective. We should also attempt to express
 formally the institutional knowledge we now share about e.g. tasks to be completed
 by the Council Chair and members prior to a ftf meeting. Actions: We will make
 public all the current expectations of members of Council prior to the next call for
 candidates. The Council page on the website should make this clear. JC will add EP
 as an admin on the TEI website so that she can make changes.




 3\.2\.2 SIG Report from Linguistics SIG (PB)
 
 PB has sent to the Council a report on the [TEI/linguistic
 bibliography list](https://www.zotero.org/groups/tei-lingsig/items/), created and maintained in the context of LingSIG. Action
 for JC: Before Council meetings, email the SIG lists to ask for reports or issues
 to
 discuss. 




 3\.2\.3 Thanks to Laurent Romary
 
 
 All members of the Council expressed their sincere gratitude and admiration for the
 leadership and vision Laurent has provided over many years as Council chair. He was
 presented with a card and suitable token of our appreciation in liquid form.




 3\.2\.4 Priorities for the Coming Year
 
 
 We should have regular telcos every two months, and deal with tickets at all of them.
 Telcos should not be more than an hour. 


The next ftf will take place mid\-to\-late April 2012\. The date will be finalized
 before the end of the year. 


The strategy for Roma is a priority (see above). We might be able to prod someone
 with the right skill\-set to apply for a grant from the Board to do it; calls for
 applications will go out from the Board soon. 


We should create a SIG for the ideas around the future of ODD, and invite likely
 experts and interested community members to join it. 


Solve all outstanding problems regarding conversion from EEBO/ECCO. 


Investigate methods of allowing element and attribute name aliasing, so that we could
 rename elements without breaking backward compatibility. 






