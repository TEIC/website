---
title: "TEI Technical Council Meeting"
date: 2012-04-16
---
# TEI Technical Council Meeting,




Present in person:  Piotr Banski (PB), Brett Barney (BB), Lou Burnard (LB),
 James Cummings (JC, chair), Kevin Hawkins (KH), Martin Holmes (MH), Sebastian Rahtz
 (SR), Paul
 Schaffner (PS), and Rebecca Welzenbach (RW) 



Present Remotely:  Gabriel Bodard (GB) (via Skype), Stuart Yeates (SY) (via
 Skype) 



 Monday April 16th 2012
 
 
 1\.1 Morning
 
 
 1\.1\.1 TEI \- Google Books
 
 * KH and JC reported on progress with Google Books output of TEI.
* After the last meeting, KH emailed Ranjith (the Google contact) with some
 questions, but hasn’t got responses yet. Ranjith also asked questions about TEI
 which would help him to market the service internally to Google, and JC created a
 Google doc to help answer those. All help with that appreciated \- email JC for the
 URL. JC and KH may also be able to add metadata from the original MARC files from
 the public domain ECCO\-TCP files which would make it easier for Google to process
 those files.
* LB suggested developing some tutorial material showing how you can use Google
 Books\-generated TEI as the starting\-point for an encoding project.
* There was some discussion about the level of error and accuracy, both in
 encoding and in OCR, to be expected from Google. SR wondered Why should we care
 whether Google gets TEI right or not? Just use whatever the best they can
 produce.


Action (KH, LB, PS, and JC): Get more examples from Ranjith of the current state
 of the output so that we can calculate some statistics on accuracy, and encourage
 Google towards making this output format public.




 1\.1\.2 TEI \- EEBO / ECCO \-TCP
 
 
SR:
There are three specific problems remaining in the conversion from EEBO\-TCP to P5,
 two of which are in the spreadsheet from MM:



* signed : Is this a phrase\-level element for only a signature, or is this
 a block\-level element that is really a signature block? If the latter, then more
 structure is required within it. If there are multiple signatures, EEBO\-TCP
 encodes them as a list, which TEI doesn’t allow. The proposed action is to loosen
 up the content model of 
 signed.



LB:
Once we loosen it up, we open the door to it having a lot of extra
 structure.




JC:
The Guidelines are very inconsistent on this; they show examples of
 
 signed inside 
 closer preceded by 
 salute, as well as
 
 signed containing the salutation within it.




PS:
In many examples, there is considerable overlap between the signature and the
 name.;




MH:
There are two distinct issues: the Guidelines problem ([bug 3439980](http://purl.org/tei/bug/3439980)), and the
 issue of converting the EEBO\-TCP encoding to TEI.




JC:
We should decide one way or the other, for example we could choose the
 block\-level 
 signed option.




LB:
 In the case of the “RICHARD CUFF” example, how would we tag it if
 
 signed were a block element?




JC:
Just as a 
 name





LB:
The purpose of 
 salute is to mark a formulaic phrase which is some sort
 of expression of politeness, whereas 
 signed (in this new view) is the
 whole block of stuff at the end of the document that attests that someone has
 appended their name to it.




RW:
Is a name required for a signed?; LB: No: “Yours etc.”.




BB:
This raises the issue of the difference between 
 signed and
 
 closer.




SR:
We could extend 
 signed and not worry about anything else, so older
 documents won’t be broken, but “soft\-deprecate” other usages by removing
 examples of it from the Guidelines.




MH and JC:
We should look at the content model of all of these things.



Action: Create a council working group to look at this issue, and come back
 with a clear recommendation before next council face2face.
* Lists inside labels: 
 
SR:
We can’t remember the context of that, so we’ll have to come back to it.




PS:
It’s a minor issue that we can ignore it; it was an aberration in EEB\-TCP



Action: No action needed at this time.
* byline inside 
 figure: Illustrations are signed or attributed
 all the time, so we need a way to encode that; in EEBO\-TCP this is done with
 
 byline.



JC:

figure can contain 
 signed.




PS:

signed is a performative claim of authorship, whereas 
 byline
 is an attribution.




MH:
Are we trying to solve the EEBO\-TCP import issue, or address broader concerns
 about the content model of 
 figure?



Action: SR will convert the EEBO\-TCP 
 byline to 
 signed,
 which solves the issue of the EEBO\-TCP import; the broader issue of
 
 figure will be addressed in the discussion of 
 floatingDiv
 later.
* trailer/@type is used in EEBO\-TCP, by analogy with 
 head.



JC:
If something is repeatable, then it needs @type. All agree and the record
 should show this is a general principle when deciding whether something should
 get att.typed.



Action: SR will implement this.




 1\.1\.3 TEI Bugs and FR: (Green)
 
 * [3480609](http://purl.org/tei/bug/3480609): wrong license
 description on some documents

JC:
Someone needs to volunteer to check that every place where licensing is
 mentioned are correct.



Action: RW will do this, and will report back about any inconsistencies. JC
 will close the bug, and a new one will be opened for any issues which
 emerge.
* [3472477](http://purl.org/tei/bug/3472477): AdBlock blocks
 'msad' ID

JC:
We agreed on the telco to add a tei\_ prefix to all ids.




LB:
We could change all the ids in the actual source.




JC:
This would be a major task, wouldn’t it?



Action: MH will undertake to change the stylesheets to implement
 this.
* [3471119](http://purl.org/tei/bug/3471119): em and en dashes
 in the Guidelines
Action: MH will implement the consensus (no spaces around em dashes used
 parenthetically). RW will create the styleguide document with help from KH who
 knows the CMS system already. The text style guide will be deleted.
* [3395448](http://purl.org/tei/bug/3395448): 
 Action: JC
 will try to discover whether Virginia is technically still a partner or not.
 When it’s resolved, KH will implement any changes to the website.
* [3511134](http://purl.org/tei/fr/3511134): html:@id on
 reference pages showing attributes
General consensus that it would be a good idea.



JC:
 Should we include something to distinguish atts from elements as in MH’s
 suggestion on the ticket?




GB:
We could use a prefix such as \#tei\_att\_type or \#tei\_el\_type.




JC:
Another obscure format for people not to understand? Maybe simpler
 solution?



Action: JC and MH will conspire to implement this or something like this in
 the stylesheets.
* [3437509](http://purl.org/tei/fr/3437509): soft deprecation
 of @key
The proposal has already been accepted to soft\-deprecate @key, by suggesting that
 people switch to @ref. LB initially objected strongly to the deprecation of @key,
 but was reluctantly convinced that gentle encouragement to use @ref instead (with
 a private URI scheme) might be tolerable.



KH:
 There is no clear consensus on exactly what format magic tokens should take in
 @ref, but we seem to be tending towards private URI schemes. General discussion
 reveals that uses of @key in the Guidelines and in examples reveal some of the
 disadvantages of it: it’s not clear in many contexts what @key values refer
 to.



Action: KH will review the whole thread and make a recommendation about the
 form of @ref, and make the soft deprecation changes to the Guidelines; these will
 be reviewed by LB.
* [3432520](http://purl.org/tei/fr/3432520): Introduce
 standard attributes to refer to ISOCat
SR and PB have almost finished implementing this.


Action: SR and PB to finish implementing this.
* [3046288](http://purl.org/tei/fr/3046288): allow f to
 contain pcdata

JC:
This has been implemented, but is awaiting some further examples for the
 Guidelines.



Action: PB will contact LR and ask him to provide further examples.
* [3041605](http://purl.org/tei/fr/3041605): update list of
 Council members

KH:
This is mostly done, but there are some historical details or old meetings
 which need to be added, and it’s not clear where this could be placed. There’s
 no place to mention the Kingston meeting, so it won’t be mentioned.



Action: KH will close the ticket.




 1\.1\.4 Amber Bugs/FRs:
 
 These were divided into topical groups as suggested by email to council list as of
 2012\-03\-25


* Group A: LB, JC, GB, MH.
	+ [3497369](http://purl.org/tei/bug/3497369)(TEI Guidelines, p. 396 \- XPath):
	
	MH:
	The original typo is fixed, but the ticket is the only one relating to the
	 larger discussion of TEI Pointers.
	
	
	
	LB and JC suggest dealing with the topic on this ticket right now.
	
	
	LB’s suggestion on the ticket is “I think the specific use of XPath in the
	 context of the location\-referenced method for critical apparatus needs to be
	 considered and (if it's applicable) exemplified in the Guidelines.” Expanding
	 on this, what it really means is that the @from and @to attributes, which are
	 xsd:anyUri, could take xpath(), and we should suggest and exemplify this in
	 the Guidelines. Use of @from and @to is possibly better than @loc (which is
	 data.word\+).
	
	
	Action: (JC) Strike the sentence that’s under discussion, because then
	 the paragraph is less confusing. We should also add a new section (12\.2\.4\),
	 which explains that you don’t have to use ids in @from and @to; you can also
	 use any URIs and XPointers with TEI XPointer schemes.
	+ [3497356](http://purl.org/tei/bug/3497356)(5 TEI Guidelines, p. 394 \- external apparatus):
	The suggestion is that 
	 app should be able to be organized into a
	 
	 listApp element. The group consensus was that there is no
	 organizational principle by which different sets of 
	 app would likely
	 be listed separately, so there’s no need for a special element.
	
	
	Action: MH will ask the submitter (and the TEI\-L, pointing to the ticket)
	 for any examples of the use of 
	 div which suggest that
	 
	 listApp might be useful (for instance, organization of
	 
	 apps into multiple 
	 divs with @type).
	+ [3496998](http://purl.org/tei/bug/3496998)(TEI Guidelines, p. 393 \- 
	 lacunaEnd):
	Action: LB will add an additional example of how to combine
	 
	 lacunaEnd inside a 
	 rdg. Ticket will be closed.
* Group C: BB, KH, RW.
	+ [3475748](http://purl.org/tei/bug/3475748)(inaccurate example in dictionary chapter):
	The group agreed that in this ticket, Laurent’s proposal is consistent with
	 an example given in the reference page for 
	 usg, which explicitly
	 suggests using 
	 usg type\=”style” to indicate usage such as “literal”,
	 so we recommend accepting this change. This should be implemented.
	
	
	Action: KH will implement this change in the guidelines offers to do
	 this.
	+ [3440771](http://purl.org/tei/bug/3440771)(Multiple 
	 geo tags in 
	 location ):
	While the prose of the Guidelines says “All uses of geo within a document are
	 required to use the same coordinate system,” prompting this ticket, which
	 wants to be able to have more than one, we found it actually is already legal
	 to have multiple 
	 geo tags in a 
	 location, as well as to have
	 multiple 
	 geoDecl tags in the header.
	
	
	
	KH:
	the discussion comes down to: can you have multiple 
	 geos within
	 
	 location, or if you want to use multiple 
	 geos, do you
	 actually need to use more than one 
	 location element to contain
	 them
	
	
	
	Council wants to better understand whether all geographic coordinate systems
	 are really capable of being converted from one to another (i.e., From any one
	 coordinate system can you truly derive the place’s value in another, making it
	 truly redundant to encode a location according to more than one system?)
	
	
	PFS pointed out that in a single document you might need to use more than one
	 system (e.g. American Grid and British Grid)
	
	
	Council agreed that it might be necessary to use more than one coordinate
	 system within a document, and since 
	 geoDecl is repeatable, it is
	 already possible to declare more than one coordinate system
	
	
	Council recommends one 
	 location containing more than one
	 
	 geo if the location is really the same place in the universe, but
	 different systems are being used to refer to it. If there is really lack of
	 consensus about the location (for example, Camelot), use more than one
	 
	 location, each with its own 
	 geo
	
	
	
	Actions: SR to coordinate, KH and GB to assist:
	
	
		- document how to point from a 
		 geo to the 
		 geoDecl in
		 order to indicate which coordinate system is being used.
		- Remove from the Guidelines the statement that “All uses of geo within a
		 document are required to use the same coordinate system.”
		- edit the definition of 
		 location to say something like “defines
		 the location of a place as \*one or more\* sets of geographical
		 coordinates...” to indicate that more than one system may be used at
		 once
		- clarify relationship between 
		 location and 
		 geo in the
		 prose of the Guidelines
	+ [3458222](http://purl.org/tei/bug/3458222)(
	 choice as child of 
	 pc )
	add 
	 pc to either pPart.edit or pPart.editorial (both were suggested
	 in the Sourceforge comments), but we aren’t sure which one
	
	
	In sourceforge, Lou noted some text in the guidelines that would also need to
	 be revised—the implementor should take this into account
	
	
	Action: LB will add 
	 pc to pPart.edit and revise the prose
	 accordingly
	+ [3439980](http://purl.org/tei/bug/3439980)(content model of 
	 signed)
	There is inconsistency in how signed and salute are used.
	
	
	One proposal is that signed and salute are siblings, you decide what goes in
	 each, and they are both contained by closer;
	
	
	There certainly needs to be more distinctive definition of 
	 signed
	 and 
	 salute, which right now are nearly identical. In particular: if
	 we agree that 
	 signed depends on the presence of a name or the
	 stand\-in for a name, this should be made clear in the definition of the
	 element
	
	
	The "thine to command" example should be adjusted so that "thine to command"
	 is within 
	 salute, rather than 
	 signed. The same for “thy
	 repentant husband for his diloyaltie”
	
	
	It was agreed that there is ambiguity between 
	 signed and
	 
	 salute, but accept that there will probably always be ambiguity
	 here. For example, “thy repentant husband” might arguably go in either
	 place
	
	
	When it comes to block of signatures: either 
	
	
		- expand closer to include list, and enclose each 
		 signed inside
		 an 
		 item in the list or
		- Expand 
		 signed to allow a list, in which each name would be an
		 itemSR wants to know why we insist on sibling 
	 salute and
	 
	 signed, since we all acknowledge its ambiguous/subjective. “What does
	 it buy us?”
	
	
	A new 
	 sigBlock element was proposed, which would be a child of
	 
	 closer.; A more general action would be to allow 
	 list
	 within closer. If instead we create 
	 sigBlock, we don’t need it; We
	 seem well\-disposed to the idea of 
	 sigBlock, but BB asks us to
	 consider the name (and implications of ‘block’) to make sure its rational
	 across the other elements.; (MH and some others like the name)
	
	
	Action: LB to chair an ad hoc council working group to report back on
	 this, KH, LB, and PS to be members, others as necessary. (confirmed later in
	 minutes)
	+ [3500088](http://purl.org/tei/bug/3500088)(French example of 
	 metDecl seems wrong)
	Original ticket pointed out an error in an example, which has already been
	 corrected
	
	
	In the comments, discussion turned to whether one might define more than one
	 metrical syntax by including more than one 
	 metDecl in the header. 
	
	
	Council agreed that this could be done (as with 
	 geoDecl above). In
	 order to point from an instance of meter to the appropriate 
	 metDecl,
	 use the @decls attribute. If this is not already stated in the Guidelines, it
	 should be added. the guidelines if it's not already there. Need to assign
	 someone to do this.
	
	
	In the SourceForge comments, MH suggested that the 
	 metDecl should
	 also specify what flavor of regex is being used, but KH pointed out that this
	 is already defined sufficiently in the definition of @pattern, so nothing
	 needs to be done here.
	
	
	Action: MH to re\-visit to determine what's unclear and correct
	 Guidelines.
* Group E: PS, SR, PB.
	+ [3423686](http://purl.org/tei/fr/3423686)Action: SR will nag the Ontology group as on the ticket.
	+ [3288293](http://purl.org/tei/fr/3288293)Action: PB will add a new attribute to app.pointing, called
	 @targetLang.
	+ [2724997](http://purl.org/tei/fr/2724997) and [2507305](http://purl.org/tei/fr/2507305): These relate to
	 the linking of TEI texts to audio and video. The consensus is that there
	 should be at least a simple way to do this, but it’s not clear how best to
	 approach it.
	
	PB:
	
	timeline works for audio, and 
	 facsimile works for static
	 images; what’s required for video is some clever combination of the two.
	
	
	
	Consensus is that we need to create a working group to make
	 recommendations.
	
	
	
	KH:
	We should make an open call on the TEI list for people who could
	 participate in the group.
	
	
	
	Action: JC will write to TEI\-L asking for people who are interested in
	 this area to get in touch. He will run the message by Council first. These
	 people will join a Council working group to come back with a consistent
	 proposal to be discussed later at this meeting.





 1\.2 Afternoon
 
 
 1\.2\.1 TEI and Schematron Tests
 
 SR provided an ad\-hoc lecture with slides in an effort to educate MH and others on
 how Schematron fits into the TEI build process.


* elementSpecs have 
 constraintSpecs. 
 constraintSpec has
 a scheme (normally isoschematron). Inside 
 constraintSpec,
 
 constraintss have 
 assert elements, which have @test attributes,
 which are xpath; if the xpath tests false, the assertion will be fired, and its
 contents will appear on the console when you build or validate. There is also a
 
 report element which is similar, but fires when true. In Roma, you will
 also get a schematron schema which you can also use to test your document against.
 This document is essentially a compilation in Schematron of all the TEI
 constraints.
* P5 has a Test directory in which there are test instance documents for specific
 features, and ODD files which can be used to generate schematron which will be run
 against the test document. There are also “detest” documents which are designed to
 fail. When these fail, the results are compared against a number of known error
 messages, to confirm that the expected errors occur. The error messages expected are
 stored in “detest.log”. They have to be in the correct order, so the recommended way
 to do this is to run the process locally, and then copy the resulting log back into
 the detest.log. These are not well documented, and scrappily implemented; we need
 to
 be more methodical about how to do this, and in making sure that when we add or
 change elements, classes and attributes, we make an effort to imagine possible
 errors and write tests for them. There are also hand\-crafted XSLT testing routines
 in e.g. Utilities/validator.xsl. Also remember that you don’t need to create tests
 for things which can be covered by your examples; the better and more extensive your
 examples are, the more problems will be caught initially anyway, because the
 examples themselves are validated at compile time.


Action: MH will write a new section for “How to edit the Guidelines” which
 explains all this in more detail; this will then be checked by SR and LB.




 1\.2\.2 TEI Exemplars (e.g. Tite)
 
 
JC:
Who owns the existing exemplars, and who should be keeping them up to date?




KH:
With a TEI example like Tite, there’s no mechanism by which a change in the TEI
 which should precipitate a change in Tite will in fact do so. There probably should
 be. If your define your customization by inclusion, you won’t get new elements, but
 if by exclusion, you will inherit more changes. This makes no difference, though,
 to
 the prose in the customizations, which ought also to be updated.




JC:
Only Lite and Tite have prose text associated with them. They are also the only
 examples (at present) which are maintained by the TEI.




JC and LB:
We undertake to try not to break any of the other exemplars, and they are tested
 during the build process.




KH:
The contradiction is: even if we think we’re not going to maintain the prose of
 Tite and Lite, we are updating the ODDs themselves, so they can get out of sync.




SR:
We should also remember that e.g. Tite might add its own element.




LB:
Lite is definitely a document of its time. It could be orphaned.




KH:
Tite has some bugs and frs on it, but is not actively under development.




MH:
Can we make a decision about the future of Lite now?




LB:
We should mothball Lite, and add a note to the effect that it’s old and no longer
 actively maintained, and that while he schemas will continue to change, the prose
 will not keep up with them. There is a version of Lite which is defined by
 inclusion, but the exclusion version is currently used to generate the schemas
 
 Actually, according to tei\-council discussion in Julhy 2012, we have been 
 using the inclusion version for quite a while., so
 the schemas will keep changing with the addition of new elements, taking it out of
 sync with the prose (e.g. 
 pc and 
 postscript).




MH:
We should make sure the inclusion odd is up to date, regenerate the schemas, then
 carefully update the prose to match. At that point, we can package it and archive
 it, as a stable and unchanging resource for those who want to use it.



Action: LB and MH to make sure a new\-style inclusion ODD is up to date,
 regenerate schemas and update prose to match. The result should be packaged and
 archived as a stable and unchanging resource.



KH:
We should do the same thing with Tite as above, because there’s no more funding for
 its development. There were different versions of Tite—the vendor Apex made some
 customizations—but the process of reconciling them is nearly complete. I would
 like to revisit Tite in future, but it should be archived first.



Action: KH will collaborate with LB and MH to carry out the same process of
 freezing with Tite.




 1\.2\.3 Best Practices for TEI in Libraries
 
 
KH:
The SIG on libraries produced this document to emphasize interoperability, make
 more specific recommendations than the main Guidelines, and encourage TEI’s use in
 libraries. Now the question is whether the Council should be involved, and if so,
 how much; should we adopt the document and continue to maintain it, or should it be
 the responsibility of the original community?




SR:
We could look for external funding to find ways of integrating the document into
 existing TEI practices.




LB:
We could treat it as a case study, just as we did with the Genetic Editing group.
 But there are aspects of the document (such as the concept of levels) which may not
 have general application in the guidelines.




SR:
It wouldn’t be unusual to have material in the Guidelines which is specific to one
 community. There are things in the customization that are more specific than could
 ever go in the Guidelines.




KH:
Yes, the ODD is very restrictive. But that is useful in itself, as an exemplar. We
 could make the best practices ODDs, which are very restrictive, available from the
 TEI website list of community customizations, but not maintained by the TEI.
 Meanwhile, the Best Practices document could be examined by Council and all use
 possible made of it in moving forward with P5\.




GB:
The case of EpiDoc is parallel, in that it’s (now) a conformant customization of
 TEI which is highly prescriptive and restrictive.




JC:
EpiDoc has a community willing to keep supporting it, but the libraries document
 seems to lack that community support.




GB:
There is a large community of people using EpiDoc, and I produce a new EpiDoc
 schema every time there’s a new TEI schema.



Action: KH will make the customization available through the TEI website (we will
 not incorporate it into our build process because it’s too restrictive); the document
 itself will be mined for good ideas, and turned into a set of recommendations for
 changes to the Guidelines.


Action: KH to submit tickets for items to be added to the main Guidelines, since
 most of the items are likely to be independent and can be assessed separately.




 1\.2\.4 TEI Bugs and FR
 
 * [3496958](http://purl.org/tei/bug/3496958)(number of 
 rdgs in 
 app):
GB added a note to the ticket saying that the availability of a single
 
 rdg is intentional and required.


Action: (MH) We leave the content model alone (it’s horrible), but we use
 this as an example for Council to collaborate on the creation of one or more
 Schematron constraints which will enforce the presence of at least one
 
 rdg, to everyone’s edification.
* [3496954](http://purl.org/tei/bug/3496954)"or where no witness exists":
Action: None required, ticket closed.
* [3496951](http://purl.org/tei/bug/3496951)(@wit on 
 rdgGrp):
The only reason we can imagine for the use of @wit on 
 rdgGrp is as a
 shorthand way to list all the witnesses who show up in a 
 rdgGrp (although
 this information can easily be derived from parsing the content
 
 rdgs).



LB:
The availability of @wit on 
 rdgGrp is an accidental byproduct of the
 class system. We should modify att.textcritical so that it no longer supplies
 @wit; then we add @wit explicitly to 
 lem and 
 rdg.




JC:
We should actually define a new class att.witnessed which has @wit, and add
 
 lem and 
 rdg to it.




MH:
This breaks backward compatibility, so we should send a message to TEI\-L first,
 to check that no\-one is using it.



Action: LB will carry this out.
* [3496949](http://purl.org/tei/bug/3496949)("
 wit\[unattested]
 /wit"):
Action: GB will review the particular example mentioned on the ticket, and
 revise and expand it: firstly, use a straightforward witness; secondly add an
 example for the "unattested" case.






 Tuesday April 17th 2012
 
 
 2\.1 Morning
 
 
 2\.1\.1 Report from GB
 
 GB re\-opened a ticket closed yesterday: he believes that an 
 app with no
 
 rdg at all is acceptable and deliberate. It might contain a 
 ptr or
 
 note or 
 lem, and maybe also 
 ref. He would like the
 Schematron rule to not require a single 
 rdg




MH:
if GB can supply what the minimal requirements for 
 app should be, then MH
 can write the Shematron rule to test for \*that\*, instead of specifically for
 
 rdg






 2\.1\.2 TEI Namespaces and Conformance
 
 
KH:
found guidelines confusing: in what cases, when you customize, should you put an
 element or attribute into a new namespace? Identified a few errors in text, at least
 one of which has already been corrected. Is it true that \*any\* customization that
 is
 \*not\* a pure P5 subset requires a new namespace? 




JC:
Yes, because you’re modifying the elements that are there, which have been agreed
 upon by the council. It’s no longer the TEI element; LB and SR agree with JC




MH:
Say you added an attribute (like type) to an attribute class that didn’t have it
 already. Can you do this in a new namespace? SR says you can; JC agrees. 




JC:
benefits of long\-term clarity outweigh the annoyance of having to put namespaces
 everywhere





 2\.1\.3 Chapter/module fragmentation and consolidation (e.g. should things like
 'dates' become a chapter of its own)
 
 JC suggests Group E people report back if they discussed this.



SR:
the group didn’t address this in break out because we planned to discuss as a
 group




JC:
realized that “dates” is only a small piece of the Names/Places chapter. Instead,
 should “dates” information throughout the guidlines be pulled into its own
 chapter?




PB:
points there are other places where this this is an issue




LB:
Guidelines are full of cross references for this very reason




JC:
If separation this could de\-couple the relationship between chapters and
 modules




MH:
if it’s fine to de\-couple the guidelines from the modular structure of the schemas,
 we can instead think of them in terms of user\-friendliness. Chapter 11
 (Representation of Primary Sources), e.g., which was proofread by the council in
 November is just too long




LB:
the Guidlines aren’t meant to be read through (though SR suggests that chapter
 structure suggests reading is suggested). This would be a major job—not a
 small/minor change; JC agrees.




SR:
we can’t just do this piecemeal, by splitting dates and times into its own chapter.
 We would need to investigate the whole structure of the guidlines. Where would we
 begin? 




JC:
the original suggestion was indeed to create a module just for dates, which would
 correspond to the new chapter. THis would break people’s ODDS/not backwards
 compatible. Such reorganisation maybe should wait until major structural changes are
 being suggested.



GB and SY both recommend a more piecemeal approach. GB says we can go forward with
 dates and places without re\-assessing the whole thing


SR, JC, LB recommend instead an overall analysis to establish
 principles/approach.



JC:
main concern is for the html output of the guidelines to change—but from his point
 of view this could then lead to a change in modules




SY:
If tags are used together, they should be explained together. If documents that use
 date also use place, then it makes sense to document them in the same place.




JC:
Almost all combinations of elements could be used with each other, sometimes
 semantic groupings make sense, other times element usage cuts across genres and
 types of encoding.




LB:
the Guidelines are deliberately top\-down, because each element/attribute can be
 used in many different circumstances. The Guidelines explicitly are \*not\* meant to
 be derived from specfic use cases.




JC:
statistical analysis of documents or schemas might be interesting, SR agrees it
 should be part of the big picture




LB:
if you go along with the assertion that the Guidelines are organized in a top\-down
 matter, then a good reason to break off a section is that it doesn’t fit where it
 is




JC:
This was exactly the motivation for the discussion of breaking off ‘dates’.




MH:
two models of organization: semantic areas, and levels of complexity. These
 compete.




LB:
some usage of date and time is used in all documents—this should be in core (but
 core chapter is too big). Could do a whole chapter on “common features” 




MH:
break core into a group of smaller modules like names, dates. Core could then pull
 these in




LB:
core should get you simple bibliography, dates and times, etc. (something like TEI
 Lite). Then you could pull in more sophisticated/advanced modules as needed (for
 dates only, for example)




JC:
if you have “basic dates” and “advanced dates” that’s even more confusing. Instead,
 wouldn’t be good to go to one page and get everything about dates and time




PB:
LB’s suggestion (above) might be an interesting way of maintaining TEI Lite




LB:
dating information is very relevant to name and place issues (e.g. birth,
 death...)




SR:
ODD dependency: if you’ve got places, you’ve also got dates (an old problem never
 solved)




LB:
if you pull out dates, why wouldn’t you also separate names, persons, places?



Action: JC will close the ticket with “will not fix” for now, and keep this in
 mind of P6


Action: JC will start a wiki page or ticket to discuss P6


Action: SY will send an email to tei\-l to encourage people to add their docs to
 the samples page to keep open the statistical approach in the long term.




 2\.1\.4 TEI Examples
 
 
JC:
this refers to our use of examples, and gaining more consistency in how we use
 them, and doing a better job to really typify the element they are meant to
 exemplify 




SR:
want a way of filtering examples that truly exemplify the element you are
 interested in, and those that just happen to have a particular element in them; We
 want a way of indexing when an example is (or happens to be) a good example of a
 particular element




MH:
examples could be sorted according to rank/usefulness




JC:
when people use the guidelines, the first thing they do is look at an example and
 just try to find one that applies to their situation and copy it 




SR:
is it a better use of time to assess/rank our existing examples, or come up with
 new ones?




JC:
if each element had several examples, including some more complex ones, that would
 be good—if they don’t get too long 




SR:
should there be a way of pointing to longer examples? Consensus is that fully
 worked examples would be beneficial.




MH:
examples are down at the bottom, so is length really an issue?




KH:
At some point do we decide that the Guidlines are not suitable for
 print/typesetting in PDF format 




SR:
there’s already a mismatch between web and PDF: the “see all examples,” available
 on the web, no such thing in PDF



Main conflict here seems to be that to do this well, need TEI experts to assess—but
 this will be a long, monotonous task. Is it a good use of time?



JC:
There’s a disconnect between examples in chapters and examples in element spec




KH:
actually, the examples in the chapters tend to be complex edge cases, rather than
 good examples for teaching 




LB:
 principle of beginning with a simple example, and either adding more complex
 examples or adding complexity to the initial example




JC:
One possibility would be to keep all examples separate in a corpus, and then
 include them into the guidelines or reference page 




LB:
this doens’t work where the example is part of the exposition of the guidelines
 




JC:
It could still work, just duplication of examples.




MH:
need a way of identifying and prioritizing the “canonical” examples—whether in the
 element spec or prose 




SR:
start with the ones in the spec, which are by definition canonical, and then add
 ones from the text when appropriate




SR:
change the algorith that generates the “all examples” page to distinguish between
 canonical examples and “incidental mentions”




JC:
But what about cases that might be “canonical” for more than one element




LB:
how are we defining canonical?




MH:
Maybe it’s canonical if it is complete—that is, the last stage of a tutorial
 example, that has all of the complexity in it (not the stripped down version that
 you might see at the very start)




JC:
spec is meant to exemplify one particular element, examples in guidelines are meant
 to exemplify how you might encode a particular phenomenon. (so would involve good
 examples of using several different needed elements and attributes)




MH:
danger of included examples falling out of sync with prose




SR:
when you look at the reference page for 
 p, pull in the relevant examples
 from chapter docs. This is what is done now, but we need a way to discriminate among
 the examples




LB:
how to decide whether to put an example in the spec or the chapter? Examples might
 appear in element spec, chapter text, and “list of all examples”



JC, MH: we want the list of all examples to be more useful—prioritized or sorted in
 some way



JC:
for many people, the element reference is their only view/use of the Guidelines




LB:
we don’t currently exemplify attributes as opposed to elements—we could/should do
 this




MH:
would this cause the attribute examples to show up in “list all examples” of
 whatever element the attribute is on?




SR:
could we have a third set of larger, more complex examples. Instead of canonical,
 think of significance: to look at all examples of 
 p, is useless; 




PS:
noisy examples can actually be useful in revealing what you can do if you need
 to




LB:
if an example is bad, we should get rid of it, not rank it lower or try to hide it
 in some way




RW:
is there some way to “reduce the noise” of examples by not displaying many examples
 of exactly the same usage? Problem is: this would be very difficult to do




MH:
if there’s a single example that excellently exemplifies more than one element, we
 only want to have to maintain this one in place, not repeat it in each element
 spec




MH:
one complaint: “I hit show all examples and there’s too much there to make sense of
 it”




JC:
people get here by just jumping right into the element reference, and scroll down
 to the examples, where there’s either one, overly simple example, or they click show
 all, there’s too much there to make sense of. 




MH:
dense English prose is difficult for many people, so even if they click to the
 chapter (which they may not), they won’t read it




SR:
put the examples from the chapter at the top of the "see all examples" list—this
 might get us closer to relevant examples at the top. Consensus was this was worth
 doing.




JC:
should we increase the number of examples in the element spec




SR:
as more and more people are writing element specs, much of the "intelligence" goes
 into the element spec, and not into the text of the guidelines. 




MH:
We don’t provide many examples for attribute classes. att.Ascribed has no examples,
 and where would he go to look? 
 said has examples, but none of them has a
 @who on them.




LB:
every element that is a member of att.ascribed



Action: MH look at existing pages for attribute classes and see if there are
 any examples, try adding an example to att.ascribed class spec to see if it
 works


Action: Sebastian will tweak "show all example" so that at the top it lists
 examples from the appropriate chapter, and links to that chapter.


Action: MH to create a wiki page to coordinate adding examples to attribute
 classes. Since most attribute classes do not have examples, all of us should
 generate examples to be added to attribute class pages. Someone should coordinate
 this work? KH: create a wiki page where each class can be listed that is missing
 examples (or that needs more) and people can sign up


Action on SR: change build process so that you can't build without examples on
 attribute classes (this would have to be implemented later)




 2\.1\.5 Group E: PS, SR, PB.
 
 Reporting on tickets from grouping H


* [3434990](http://purl.org/tei/fr/3434990)Can 
 lg contain only one 
 l
JC/PB: suggested that we change the prose to read “a 
 lg contains “one or
 more 
 L” (LB has already changed)


PS: it could be the case that in a damaged source, lines are missing even if
 there’s an 
 lg there


Action: MH will write a Schematron rule requiring that 
 lg contains
 
 l, 
 lg, or 
 gap
* [3305016](http://purl.org/tei/fr/3305016)
table containing 
 graphic
can you have two 
 graphics?


Kevin proposed a content model in Sourceforge, SR and group felt it was fine.


Action: SR will implement the content model proposed by KH.
* [3416130](http://purl.org/tei/fr/3416130)allow for 
 certainty within milestoneLike elements
putting content inside empty elements might break processors? SR doesn’t think
 so



LB:
not persuaded by argument to change content model of 
 : concern that
 allowing any content will open up a can of worms




GB:
adding 
 certainty allows for using @match to use relative XPaths to
 point to a parent element




SR:
this would bring milestoneLike elements in line with 
 gap, which does
 allow 
 certainty




What about allowing 
 desc? GB sees this as different: a way of adding
 content to an empty element. SR says no, it’s a way of adding documentation to an
 empty element



BB:
what does this mean for editing the guidelines? Onus on us to describe how this
 might be used. This would be in the attribute class.




MH:
Would have to find every instance of, e.g., “
  is an empty element’ and
 change in (and do this for every element in milestoneLike)




SR:

certainty is an empty element—so even adding it to an empty element,
 the element remains “morally” empty: it has no human readable content



PB it is an overgeneralization to say that something milestoneLike must be an
 empty element. Rather, it is a \*point\*—not a span, division, or section. PS adds
 that it contains metadata about the text or document (not anything from the text
 stream). Also distinctions to be made between human\-readable meaning of “empty”
 and schema requirement that there are no child elements. That is, to a reader,
 
 pb remains an empty element, even though it may have a child.



GB:
perceives adding an element like 
 certainty as adding an “enhanced”
 attribute



Action: GB will survey the guidelines to see what kind of changes this would
 involve. He will report back via email, unless there is great disagreement the FR
 should be approved and implement. If there is disagreement, address at our next
 teleconference


Action: JC will update the ticket in sourceforge to assign to GB and add a
 note about our decided action
* macro.paraContent out of place in 
 gram etc \[cf 
 u discussion]
 
 link to ticket is broken, so group E did not discuss;


Action: JC to find out what happened to this ticket.




 2\.1\.6 TEI Bugs and FR
 
 Group F: PS, KH, JC, GB


* [3500566](http://purl.org/tei/fr/3500566)revise handling of ISBNs in 
 idno
Didn't like b because we can't come up with a short definitive list of @type
 values.


Action: KH to implement proposal ‘a’ on the ticket: add new example to
 
 idno elementSpec
* [3497079](http://purl.org/tei/fr/3497079)clarify and rationalize encoding of pagination in bibliography
GB uncomfortable with not using 
 biblScope in a bibliography (as opposed
 to in a footnote)


Proposal seems not to deal with difference between part and whole of article
 (analytic item) and part and whole of thing that article is in (monographic
 item).


Action: GB to write a comment on the ticket giving examples of citations that
 would be problematic or confusing according to this proposal. Paul can also
 provide example citations from his U\-M CV project. Kevin will discuss with Gabby
 and incorporate marked\-up examples into proposal and revise proposal if
 appropriate. Leave ticket open for now
* [3440977](http://purl.org/tei/fr/3440977)Add idno to person (maybe also place)
Action: Agreed: Suggest LR to implement. JC will contact him and report back
 to us if he will not implement.
* [2493417](http://purl.org/tei/fr/2493417)
idno coverage
Action: Agreed. Already agreed and implemented, KH to add more
 examples/prose
* [3480057](http://purl.org/tei/fr/3480057)Allow 
 idno inside 
 monogr without restrictions
Action: KH to close.
* [3439587](http://purl.org/tei/bugs/3439587)Problems introduced by content models of bibl and imprint.
Action: MH will revise definition of 
 titleStmt to no longer imply
 responsibility for intellectual content only.
Action: MH will investigate adding 
 distributor and
 
 publisher to model.respLike, noting that last time he tried to do
 something like this, it got messy.
* [3513147](http://purl.org/TEI/fr/3513147)biblStruct for Patent citations: we found this recently opened and yet
 related ticket but didn’t have time to look at it





 2\.2 Afternoon
 
 
 2\.2\.1 TEI Bugs and FR
 
 Group G: LB, RW, PB


* [3496494](http://purl.org/tei/fr/3496494)make attributes 
 from and 
 to (as pointers) part of a
 class
Proposal is to create a class for 
 from and 
 to so that these
 are defined and used consistently in all cases where they are defined as
 data.pointer. Currently they are described inconsistently. 
 arc should not
 be a member because the semantics are slightly different. 
 biblScope
 should not be a member because @from and @to are used totally differently—not as
 pointers, but to express start and end points of a citation. The explanation of
 the usage of @from on 
 span seems problematic (for example, there is
 reference to “the end of the passage,” without explaining what is meant by
 “passage”. However, the usage of @to and @from is slightly different for each of
 these elements. So ticket will be closed once language is tidied up by RW.


Action: RW will adapt defintion of 
 span to take better wording from
 17\.3
* [3495987](http://purl.org/tei/fr/3495987)members of model.respLike should be members of att.declarable
MH’s case for what we think is described here: You have an orgList and want to
 transclude the name of each 
 org elsewhere in the document. You could do
 this using @decls. But JC said that you would instead do this using @ref or a
 similar from att.canonical.


Action: LB will ask Laurent for examples in case we are assuming incorrectly
 and will look at TEI\-L archives.
* [2834511](http://purl.org/tei/fr/2834511)Add more elements to att.spanning with schematron constraint
If this was implemented, you would need both a way of rendering whatever the span
 wants to do only on the text/content, or also on the markup (e.g., if a paragraph
 ends and another begins within the span, is the rendering applied to 


 as
 well as the content? Call for reassessment of this ticket. Nothing has happened to
 it for three years, and meanwhile there has been other development of genetic
 editing work.


Action: LB will add proposed Schematron rules but not add any other elements
 without clear use cases.
* [3291540](http://purl.org/tei/fr/3291540)att.editLike should not bring att.dimensions and att.ranging
According to ticket, because att.editLike gives you att.dimensions and
 att.ranging, lots of elements end up getting unneeded attributes. Ticket proposes
 removing certain attributes from certain elements.


We all agree with the proposal.


Action: SR will take the ticket. We’ll leave it to SR to decide which of the
 second list of elements should be included as well. Sebastian will send a list to
 TEI\-L so people could comment on any elements where it would be removed. If, in
 the future, we might decide we “got it wrong” for some of these, so we could
 change our mind if needed, but better if we don’t need to.
* [3284816](http://purl.org/tei/fr/3284816)att.canonical for model.persTraitLike
While some elements in the list already have the attributes requested, others
 don’t. We accepted. SR will do any that don’t have them already.


Action: SR to implement.


Group J: MH, BB, SR


* [3415801](http://purl.org/tei/fr/3415801)Allow modification of attributes belonging to a class
This a valid thing to do, and we should implement it. We need to go through the
 Guidelines and find places where a) an attribute is defined locally simply because
 it has a valList or its own desc, and could go back to the att class, or b) the
 constraint is expressed only in prose.


Action: SR will implement.
* [3118435](http://purl.org/tei/fr/3118435)classes in interleave mode and cardinality membership.
We cannot do this now, because it would stop us using DTDs. It is desirable, but
 is a P6/ ODD3 feature. it should be recorded on P6 wiki page, and discussed at the
 ODD3 meeting in Hamburg. Noted that it would mean revisiting a lot of content
 models to see whether interleave was what was intended. Also not clear how
 interleave in XSD is supported.


Action: LB will close ticket.
* [3426828](http://purl.org/tei/fr/3426828)more coherence on mode attribute on classes and attList
Action: SR to close this ticket noting that requestor hasn’t
 responded.
* [1650195](http://purl.org/tei/fr/1650195)Need Header element to reference or embed schema/odd
We can recommend use of [http://www.w3\.org/TR/xml\-model/](http://www.w3.org/TR/xml-model/) in order to reference a
 schema. Separately, if you want to embed a schema, use the new 
 schemaSpec
 (which will be added to model.encodingDescPart)


Action: MH to implement adding 
 schemaSpec to
 model.encodingDescPart.




 2\.2\.2 TEI FR: Floating Div
 
 A wide ranging discussion took place concerning the floating div proposal which
 council had reviewed. PS presented many examples of cases where it might be
 useful.


Do we want to:


* Loosen definition 
 floatingText to allow anything besides a full
 text?
* Create new element for 
 floatingDiv for anything besides a full
 text?
* Tell them that what they think is a “floating div” is actually a
 
 floatingText, 
 spGrp, or a 
 div that hasn’t been properly
 identified?
* Remove the word ‘whole’ from element description of 
 body?


Consensus emerged that many of the PS proposed use cases were solved with
 
 spGrp; and the rest with 
 floatingText as more loosely defined. It
 was difficult to categorise a way to distinguish 
 floatingText from proposed
 
 floatingDiv; more information and examples are needed.


Action: JC will reply to the message on TEI\-L: In light of the current text and
 examples in the Guidelines on 
 floatingText and 
 spGrp, we’d like
 examples of proposed “floating divs” and how they would differ from
 
 floatingTexts.




 2\.2\.3 TEI ODD Meeting
 
 Will be a panel at DH2012 discussing problems with ODD and future of ODD. TEI\-C is
 funding a post\-conference meeting (July 21\-22\) for room and some travel expenses to
 continue the discussion (about how to develop ODD3, which might happen before or with
 P6\).


JC invited a number of people to attend and encouraged them to suggest others to
 invite. Approximately 15 attendees who will have expenses covered. JC will send
 invitaiton to TEI\-L to allow others to attend at their own expense.


JC asked us what we would like the people at the meeting to address. Should they
 theorize about what ODD3 would look like if starting from scratch? Or offer concrete
 proposals for improvements to ODD?


We’d like to avoid just a list of complaints about how things currently work.



SR:
do we want only things that are backwards\-compatible? Are we open to requests for
 things like tools for processing ODDs that don’t require changing ODD itself?




JC:
anything that is backwards\-compatible could become a feature request in SourceForge
 now.




PB:
perhaps we can ask them to propose solutions to particular problems we’ve
 identified?




MH:
solicit topics in advance?



JC pointed us to a [list in the wiki](https://wiki.tei-c.org/index.php/ODD-dev) which
 lists problems in ODD.


LB said he has started but not finished a proposal for resolving the Durand
 Conundrum.



BB:
we might be asked to produce training and support materials for ODDs.; What other
 systems do people use for maintaining XML standards?




KH:
NLM/JATS maintains a homegrown system developed by Mulberry Technologies.



A list of other people, not yet invited, was suggested by Council to make sure were
 targetted with the public announcement. \[JC has note of all individuals, but seems
 sensible not to minute them here.]



SR:
worries that everyone at the meeting will agree with each other. We need a skeptic
 \[SR suggested some].




JC:
We could ask others (Balisage folks, literate programming folks) after the meeting
 to comment on any proposals.




LB:
Kevin Hawkins should invite Kevin Reiss.




SR:
what we’re really looking for is prose to put into a funding application for what
 we want to develop. Need to list problems that need to be solved and the likely
 direction for the solution.




JC:
please add additional suggestions to [http://wiki.tei\-c.org/index.php/ODD\-dev](https://wiki.tei-c.org/index.php/ODD-dev) .





 2\.2\.4 TEI Release Process
 
 
JC:
We need to make sure that all the steps are included and everything is explained
 for GB who is next release technician.




MH:
There are problems in the stylesheets release process that depend on SR, but JC, MH
 and SR are fixing that process.




SR:
GB doesn’t have access to a Linux machine, so that will be a problem/benefit in
 testing.




MH:
Also need to make sure the process will work with Ubuntu Precise.




SR:
A lot of documentation needs to be written about the testing process. Are there
 tests that we should be running but aren’t?



Actually, our priority should be rewrite of Roma. If a pending Oxford JISC grant
 doesn’t come through, we should shop our application around to other granting
 agencies.






 Wednesday April 18th 2012
 
 
 3\.1 Morning
 
 
 3\.1\.1 TEI Outreach and Education
 
 
JC:
It has been suggested that the Technical Council should do more education/outreach
 activities, such as a newletter to go to sponsors reporting on technical and other
 updates



JC suggests that the job of the Council is primarily the development and maintenance
 of the guidelines. Outreach is good, we’re all in favor, and while it is part of our
 mission, it’s not the main focus/mission of the Technical Council.



SR:
we have a “moral” responsibility to step up if asked to, say, write about the
 current state of ODD; Consensus was that we would participating as individuals is
 a
 good idea.




LB:
why did we fail to deliver on the tutorial last time we were asked? lack of
 resources, etc.




GB:
the way to get the council to do something like this would be to make it a council
 duty. The question is, do we think this is high enough on our priorities to make it
 a duty? (The way to get it on the agenda is to put it on the agenda)




SR:
this would be at the expense of something else.




BW and JC:
this is a good thing to do, but many people can do it. The development work done by
 the Council can’t be done by someone else.




SR:
points out that there is some gray area: Council \*does\* spend time trying to make
 the examples and other reference materials more sensible and accessible




MH:
maybe Council should be focusing on developing the relationship with with the
 intermediate user




SR:
we’re responsive to tickets, but not proactively reaching out




JC:
sees marketing and outreach as primarily board activity; the kind of
 education/outreach that is being suggested seems closer to a Board activity. A
 report from Council and report from the Board could be included in each issue of the
 TEI Journal, but I wonder if that is really appropriate. KH thinks this is possible.
 BB is interested participating in outreach activity




SR:
No one can make the guidelines better without the involvement of the Technical
 Council, so there’s a level on which we must engage in some level of
 outreach/engagement




PS:
suggests training is most useful in the context of a specific project, and that
 abstract training is not so useful or desirable; MH and JC disagree




JC:
there’s a gap in knowledge/training at the intermediate level—that’s where it gets
 hard because of the specificity of any given project. It’s straightforward to teach
 intro level, and harder things like Schematron and ODD.



KH reviewed bylaws: duties do include development of training materials and
 tutorials, or to make recommendations to the board about such things. JC would be
 happy to make recommendations Council developed.



SR:
we develop and maintain educational tools like Roma which can be used as a training
 tool.



General consensus: The technical council is entirely open to some degree of
 involvement in outreach and education activities but it generally views these as a
 board\-led activities. We believe such activities are worthwhile, but don't have the
 resources to drive any such effort and don't feel it is or should be the core activity
 of the council. We are more than happy to contribute to such activities to some
 degree, especially on technical aspects. Individual members of the council may also,
 of course, participate separately as members of the TEI community if they have time
 available.




 3\.1\.2 Creating small working groups:
 
 * The dreaded signed/salute/closer/trailer/sigBlock ‘Div\-Liminal’: 
 JC proposes
 an ad\-hoc council working group for this. LB suggests the remit be a “div\-liminal
 working group” (covering divTop and divBottom). Lou will convene, Paul asked to
 participate, will work on email and produce a report for the Council before next
 FTF


KH suggests working on this this afternoon to produce a new report; JC could the
 proposed group have an initial conversation about remit this afternoon;



LB:
remit is to review all relevant elements and classes, determine whether they
 are defined properly and whether their placement in the content model is
 correct




PS:
has a sense of a proposal that will preserve much ambiguity where necessary



Working group will be: PS, LB, BB, KH (with advice from rest of council where
 necessary).


Action: LB to chair working group will report back by next teleconference,
 concrete proposal by next face to face meeting with status reports at
 teleconferences.
* Audio/Video Facsimiles: 
 SR will head up the council’s contribution to the
 working group. LB and MH also interested



PS:
Need to know more about existing practices and competing standards from outside
 experts/users




LB:
Thomas Schmidt has looked most at how to use TEI for encoding speech




PB:
suggests Andreas Witt and people from Edinburgh




LB:
Linguists tend to be interested in this problem. Sociologists, folklorists,
 local historians, may also may be good sources




KH:
Faith Lawrence also suggested by GB




PB:
start with a firmly known problem (e.g., what linguists need), and expand from
 there.



Action: Working group to be chaired by SR, with LB, MH, and possibly PB; to
 approach TEI\-L and others doing work in this area to get outside expertise; an
 initial proposal or detailed report of progress at next FTF with status reports at
 teleconferences.
* TEI and URIs @target/@cRef/@ref/@key: 
 
MH:
Some way to declare what you mean by your private URI in the header. There
 should be a documented way to do this, that is machine\-readable; Two separate
 issues here: deprecation of @key and documentation of private URI scheme. We
 might agree on the latter even though there is likely disagreement on the
 former. JC would like to see both handled together.




MH:
if we are suggesting that people use private URIs instead of magic tokens,
 because they can be validated, we ought to offer a place to explain the URI
 scheme; cRefPattern is the model of what MH would like to do here



SR suggests that GB has knowledge of the classical world where this is
 particularly of interest; KH proposes that MH write up what he has in mind, then
 shop it around for reactions/suggestions


Action: MH will chair this going to be working group, bring in GB, SY, and
 outside people suggested by GB. They will develop concrete proposals for next FTF
 meeting with status reports at teleconferences.




 3\.1\.3 Any Other Technical Council Business
 
 * Autumn meeting will likely be in Oxford, perhaps before or after the EEBO\-TCP
 conference (September 17\-18\)
* SR:
what else is lurking that we need to prepare to address/work on for Autumn? Is
 there something we should be aware of that has work being done on it? 




GB:
there was a working group to re\-write critical apparatus chapter but no word on
 progress here; JC: a mailing list was set up with some conversation, but didn’t
 progress further; Particularly hard to fix—some suggestions are on a wiki
 page



GB thinks the chapter may be OK as it is; LB: we could go through the proposals
 on the wiki page ourselves. LB: proposes asking Marjorie for a report on the
 status of this work


Action: James will prod the critical apparatus working group before next
 teleconference.
* BB:
Has there ever been a TEI SIG for periodicals (capturing existing)? MH says
 there is a scholarly publishing SIG, but this is not the same as a working group
 for capturing newspapers, for example




JC:
if such a group produced a best practices document or similar, that would be
 welcome; MH is working on something with 19th century journals. MH and BB could
 start a SIG.
* Why does the stylesheet build keep breaking? 
 
MH:
want it to be the case that the stylesheets are built first and checked, and
 then used in the rest of the build (this is not the case now—the reverse); want
 it to be the case that a change in the stylesheet build will trigger a build of
 everything




SR:
this is all part of the process making the build and release process more
 transparent and better documented. Aim is to get away from the fact that
 Sebastian is the only one who can make stylesheet changes take effect in the
 whole guidelines
* Council Meeting preparations: 
 PB noted that in Paris, JC assigned an action
 to email SIG lists for a report before Council meetings, but this didn’t happen;
 JC apologised and will rectify this before next teleconference.


PB suggests a checklist or similar for Council meetings preparations to make sure
 everything is done, including asking SIG conveners for report; JC agrees. 


Action: JC to produce a Council meeting/telco checklist on TEI\-C Wiki
* Report from LingSIG (by PB): 
 developing bibliography in Zotero (tei\-lingsig).
 Meant to engage the linguistics community even outside of TEI. Currently 153
 items.


Special issue of jTEI guest\-edited by conveners (including article about the
 bibliography)


PB will talk at ILIT (Eastern Michigan University) on TEI for Linguists; Opened a
 project on SourceForge (beta)—hopes to make it easy for people to move around and
 experiment in this space, create a space/sense of belonging for members, that is
 more cohesive than just being on mailing list
* Report on TEI and linguistic data analysis tools (such as UIMA) (by SY)
 
 SY wants to bridge the gap
 between the output of [UIMA](http://uima.apache.org/) and [GATE](http://gate.ac.uk) and TEI; UIMA throws out everything that isn’t a
 string of words in the document—metadata, comments, etc. They use XML, but rely
 on multiple levels of stand\-off/byte\-offset markup—good for applying multiple
 kinds of POS tagging and comparing differences; not so easy to roundtrip back to
 TEI; SY has plans to develop a way to do this and bring it back to council for
 review; LB: recommends existing literature on stand\-off markup—how does this
 project fit in? PB recommends papers he wrote with a colleague, recommending
 almost purely TEI conformant approach for stand\-off analysis of text, that handles
 precisely this issue of multiple kinds of linguistic tagging. e.g. See LingSig
 bibliography


Action: SY will follow up offline w/ LB, PB


Action: PB will put SY in touch with others working in UIMA and interested in
 converting to TEI


Action: PB and SYreport back to Council on progress by next FTF




 3\.1\.4 Bugs and FRs: any remaining
 
 * [3454814](http://purl.org/tei/bugs/3454814)Prune comments from TEI source
There are huge numbers of comments sprinkled through the Guidelines, dating back
 to 1992 or before. While many of these are historically interesting, most are
 irrelevant. Cleaning them out would be beneficial, but this must be done
 carefully. In particular:


	+ Comments inside 
	 egXML must be preserved (they are
	 displayed).
	+ Commented biblio items can be removed after checking that there is a
	 
	 bibl or 
	 biblStruct for them.
	+ Informative/useful comments should be turned into notes.
	+ Some comments (e.g. "\<!\-\- Better example needed \-\-\>") are useful and may
	 remain.When new comments are added (and especially when we commenting out blocks of
 existing code because we’re nervous about deleting them), they should be
 initialled and dated. Old code should be deleted after a week.


Action: LB will write up guidelines for purging comments and distribute to
 TEI\-Council list, including describing first passes to deal with low\-hanging fruit
 and suggested format for how we should comment going forward


Action: from there, work of reviewing and purging comments or turning them
 into notes will be divided among council members


Action: RW will incorporate language from LB’s guidelines into the style
 guide when appropriate
* [3454803](http://purl.org/tei/bugs/3454803)Review of language, script and region code recommendations
Action: MH will compare Chapter CH against the latest version of BCP 47 for
 inconsistencies
* [3432216](http://purl.org/tei/bugs/3432216)i18n revision due
There should be a list of translators and contact information for them so we can
 reach them with translations need to be reviewed (KH reports that this does exist
 in FM1, but it’s not up to date) GB: as a practice, he has been going ahead and
 updating glosses in any language that he knows, as well as English. SR: if you
 make a confident revision in another language, update the date of the
 translation?



SR:
the person who did the translation once, may not have ongoing responsibility
 for the translation 




LB:
if the translator is credited, others should not edit the translation without
 that person’s involvement? Disagreement about whether our credit of translators
 constitutes acknowledgment of a one\-time translation task our ongoing editorial
 responsibility for translations



Agreed Policy: if you feel very comfortable about updating an element spec
 translation, proceed with caution. Do not change the date in 
 gloss
 version\=””. This way, the translator will see the change when they review
 again.


Action: SR: double check FM1 to see if list of translators is up to
 date


Action: KH will add this policy to the “how to edit the guidelines” working
 paper
* [3223636](http://purl.org/tei/bugs/3223636)@xml:space vs. CDATA for blocks of code

MH:
when investigating how xml:space is supposed to work, it became clear that
 there are contradictory explanations in the spec




MH:
because processors handle xml:space differently, it is difficult to describe
 how this should be used;




SR:
Ask Oxygen and Saxon teams to make sure xml:space is being treated consistently
 with (their interpretation of) the W3C spec?




MH:
people keep losing white space where they need to keep it. xml:space should be
 a solution for this, but it isn’t.



Action PFS and RW: Expand our explanation of xml:space in the
 Guidelines:
 


	+ in note: expand to acknowledge that many parsers may not handle xml:space
	 properly
	+ clarify definition of xml:space’s “default” value to match the XML spec
	 (that is, “whatever the processor would normally do)
	+ remove sentence in prose of guidelines in chapter 22 "the global @xml:space
	 is available to indicate that white space should be preserved within the content
	 of these elements"
* [3393781](http://purl.org/tei/bugs/3393781)@version in examples

SR:
@version was intended to link updates to translations to releases of the
 English guidelines. Indicates the date of the state of the English guidelines
 when this translation was updated.



Leave @version as it is; change the attribute that we are using to indicate
 revisions to translations to @versionDate


Action: on SR per LB’s comment on Sourceforge: Agreed to rename @version in
 att.translatable as @versionDate and give it a date datatype. We don’t want all
 the possibilities of att.datable.


Action: JC to add TEI Sourceforge site to the TEI category so all TEI sourceforge
 projects can be located at once





 3\.2 Afternoon
 
 
 3\.2\.1 Hacking for those working on things who don’t need to catch flights right
 away.
 
 Div\-liminal group (minus BB, plus SR) began brainstorming:


* LB defined the scope of the group to include assessment of elements in
 model.divWrapper, model.divTopPart, and model.divBottomPart (and their
 children).
* In looking at the content models of 
 opener and 
 closer, he
 suggested that new model classes be created for these: model.openerPart and
 model.closerPart.
* PS said he had been pondering the problem and think it’s best solved by the
 following:
	+ Create a new 
	 signatory element for use of only designations of
	 signatories (names and phrases like “the late sergeant” that go with names). It
	 would have the content model that 
	 signed currently has.
	+ The current 
	 signed element would have an expanded content model
	 including 
	 salute and 
	 list.
	+ The 
	 salute element would be left just for “polite phrases” that
	 tend to occur before a signatory.
	+ For example, this example in the Guidelines: 
	 
	
	I have the honour to remain, dear sir, your obedient servant 
	
	RICHARD CUFF (late sergeant in the Detective Force, Scotland
	 Yard, London).
	 
	
	 would become: 
	 
	
	I have the honour to remain, dear sir, your obedient servant 
	
	RICHARD CUFF (late sergeant in the Detective Force, Scotland
	 Yard, London).
	+ Another way to summarize his proposal is that he proposes to create a new
	 "super signed" or "signed block" (the new 
	 signed) and turn the old
	 
	 signed into a 
	 signatory.
* Implications of PS’s proposal:
	+ Everybody who has a 
	 signed containing only text or phrase\-level
	 elements could (but need not) change this 
	 signed to
	 
	 signatory.
	+ Optionally, they could (but need not) choose to wrap the new
	 
	 signatory and any 
	 salute in 
	 signed.
* KH proposed an addendum to add 
 dateline to the new 
 signed as
 well. PS didn’t like this because then there would be essentially no difference
 between 
 signed and 
 closer. KH said he thinks of 
 signed as
 being equivalent to 
 closer type\=”signed”.
* Lou noted that under KH’s addendum we would have to remove “as a kind of heading
 or trailer” from the definition of 
 dateline in order to turn this into a
 purely semantic element.
* KH and SR debated whether 
 dateline is structural or semantic. SR said
 it’s easier to write stylesheets if it can be assumed to be structural and
 block\-level, but KH said he thought of it as semantic and phrase\-level.


JC Thanked all those remaining Council members for participating.






