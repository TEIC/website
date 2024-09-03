---
title: "TEI Council Meeting"
creator: David Sewell
date: 2009-04-03
---
# TEI Council Meeting





All times are local (Central European Summer Time, UTC \+2\) unless otherwise noted.


In attendance, from TEI Council: Laurent Romary (LR; chair), Peter Boot (PB), Arianna
 Ciula (AC), James Cummings (JC), Daniel O'Donnell (DO; Board Chair), Dot Porter (DP),
 Sebastian Rahtz (SR), Paul
 Schaffner (PS), and David Sewell (DS; minutes). Representing Oxford editorial support
 group: Lou Burnard (LB). Not present: Gabriel Bodard, Elena
 Pierazzo, Manfred Thaller.


The meetings were held at [l'Ecole normale supérieure
 Lettres et sciences humaines](http://www.ens-lsh.fr/), Lyon, France. Most
 Council members were also present for the [Public
 Meeting](https://listes.cru.fr/wiki/tei-res/public/tei_council_2009_a_lyon) held at ENS on April 1, the day prior to the Council meeting, and several
 served as session chairs. The TEI Council wish to thank our hosts at ENS\-LSH for their
 hospitality, and acknowledge in particular Serge Heiden for going beyond the call
 of duty
 in arranging back\-up facilities during the Thursday 
 jour de grève at
 ENS.


The meeting was called to order on Thursday at
 approximately 09:10 and continued until approximately 18:30; it resumed on Friday at
 approximately 09:00 and continued until approximately 16:00.





 TEI Website
 
 
 Discussion under this heading focused on two topics: general organization and workflow
 of the TEI website; and maintenance of the TEI "vault", i.e. historical versions of
 the
 Guidelines and archived versions of releases going forward. LR summarized the four
 main
 issues:


* updating our tools
* updating files
* keeping the vault in a stable place
* reorganizing the website



 Vault, archiving
 
 
 Council agreed that users of the TEI website should be able easily to find the
 current version of the Guidelines along with clearly labeled archives (the 
 vault).
 At present, this material is too scattered. JC notes that "cool URIs do not change";
 ours too often do, which is not best practice. Council agreed that there must be an
 addressable version of the Guidelines for each release. Going forward, this includes
 our point releases (i.e., our sub\-releases currently on a six\-month cycle). So the
 vault should contain full snapshots of each of these releases.


LR asks whether it makes sense to release only the HTML pages of the Guidelines
 without releasing the corresponding schemas or file environment necessary for
 generating schemas. Consensus is that we should make available at least a 
 tei\_all
 environment so that users would be able to validate documents against arbitrary
 versions of the Guidelines.


Consensus: Council should request for reorganization of the Vault on tei\-c.org, and
 should then take responsibility for ongoing maintenance of releases. Council should
 be
 licensed (DO) to work on this as part of our day\-to\-day activity, with a workflow
 that includes direct access to the technical staff at U of Virginia who can implement
 changes on the server side. We agree that we start Vault versioning as of the June
 2009 point release of the P5 Guidelines, and implement retroactive versioning as soon
 as possible thereafter.




 General website organization and workflow
 
 
 LB and DO note that there are outstanding needs for TEI website reorganization and
 enhancement that need to be addressed by the Web Committee. For example (LB), the
 new
 project list needs to be brought up to date, and should be more dynamic, with RSS
 feeds available. DO adds that in the near future we will be needing new Web
 functionality, namely an e\-commerce server (for membership, ordering publications,
 etc.). \[DS notes: this will need to be done so as to satisfy any U of Virginia
 policies for e\-commerce hosting on University servers.] In addition, with the
 migration of the Vault to www.tei\-c.org, which represents the major intellectual
 property of the TEI, we need formal agreements from Virginia for the commitment of
 resources to insure maintenance and preservation.


**DO** will convey to the TEI Board the consensus that
 Council needs more formally defined access to tei\-c.org, and will also propose adding
 LR to the Web Committee



 Guideline Annotations
 
 
 Question: should there be a formal facility to allow user comments on the Guidelines
 (primarily or only the element/attribute/class reference sections), along the lines
 of
 the "user contributed notes" feature on www.php.net? The purpose would be to allow
 users
 to provide examples of how they use TEI features, notes on best\-practice usage, etc.
 Council agrees that (unlike the case on php.net) this should not be done within
 reference pages themselves, but rather via links to dedicated areas on the TEI Wiki.
 This can easily be done by batch\-creating template pages on the Wiki, and having the
 Guidelines stylesheet generate links to them for each reference page. The only tricky
 technical issue is whether we can easily differentiate links to Wiki pages that have
 comments versus ones that are empty.


**SR and JC** will investigate implementation and report
 back to Council


 TEI Tite
 
 
 This item was an update on the status of [TEI Tite](https://wiki.tei-c.org/index.php/TEI_Tite).


There is some urgency over finalizing the recommended format of the TEI Tite
 customization, as the TEI Consortium received Mellon funding with a deadline to put
 out
 an RFP to conversion vendors interested in bidding on bulk conversion work using the
 Tite specifications. However, there is some confusion over how final recommendations
 for
 change have been gathered and implemented. The TEI in Libraries SIG has been working
 on
 this and forwarding suggestions to Perry Trolard, but PT is not able to implement
 them
 directly on Sourceforge.


Council agreed that as Tite is a formally recommended TEI customization, Council has
 technical authority over it. We need to vet and approve changes, then commit them
 to
 SourceForge.


There was some discussion and disagreement over whether Tite should be seen as a static
 object or as a basis for customization. Consensus was that (1\) Tite as formally
 recommended by the TEI will be static within the context of a given contractual
 agreement between content owners and conversion vendors (as in the main RFP), but
 (2\)
 individual projects may wish to customize Tite for their own purposes, and that is
 something we encourage.


**DO** will issue a final call on TEI\-L for comments on
 Tite. Council formally asserts control over Tite, and DO will ask PT to collect proposed
 changes to the existing Tite customization and forward them to Council for
 approval.


 Proposal for new SIG: scientific bibliographies
 
 
 LR presents this proposal, which is to approve a new Special Interest Group on
 scientific bibliographies with the goal of providing recommendations for the use of
 
 biblStruct for bibliographies in scientific/technical literature. LR notes
 that people are already using TEI for scientific publishing, so we need to put forth
 best practice recommendations and possibly schema modifications. The strategy is to
 demonstrate the usefulness of 
 biblStruct as a way of demonstrating the power of
 TEI to other communities, as 
 the XML format for these document structures. Council
 agrees on the utility of doing this; AC notes that we'll want to provide a specific
 tutorial on this use case.


APPROVED. As LR is already part of the proposed SIG, LB volunteers to be the official
 Council liaison.




 Report on activities of Manuscript SIG
 
 
 Elena Pierazzo (in absentia) presents a report on activities of the MS SIG. They have
 proposed some tweaks to manuscript elements, and will have a [workshop on
 genetic editions](http://www.i-d-e.de/genetic-editions-in-a-digital-framework) in May 2009\. 


No action item, just be aware SIG is active.




 Possible SIG on speech transcription
 
 
 LB notes that two different communities in France are interested in working on
 improvements to Guidelines in this area. LR thinks that most people are quite happy
 w
 the current state of the Guidelines chapter, but there is a need for more work on
 marking synchronization with audio files. LB adds that a separate German group also
 feels there is serious need for revision. \[action item??]




 SIG grants
 
 
 DO reports on the grants approved this year to provide funding for SIGs to support
 activities toward defined goals; Susan Schreibman issued a call for applications in
 March 2009\. Two Council members, JC and DS, are serving on the committee that will
 evaluate and approve requests. This is an experimental program; if it works, the Board
 hopes to expand it.


Some discussion follows on other types of TEI funding. DO notes that funding is in
 principal available for any chartered TEI group, e.g. working groups. However, as
 LR
 points out, Council needs to have supervision over the funding of anything related
 to
 the TEI technical mission. Any grant involving tools, software, or the Guidelines
 is
 Council\-related.




 Stylesheets and Roma/Vesta
 
 
 SR reported on his work with the new Vesta release, and the current transition to
 XSLT
 2\.0 stylesheets for schema generation. (In the aftermath of Council discussion in
 Lyon
 and on tei\-council, SR formally released to TEI\-L the [roadmap / project plan for Roma and ODD processing](https://listserv.brown.edu/archives/cgi-bin/wa?A2=ind0904&L=TEI-L&T=0&O=D&P=5859) based on Council agreement
 about our goals. The following paragraph briefly summarizes the Lyon portion of that
 discussion.)


Basic issue: once work began on Vesta, it was necessary to fork the XSLT stylesheets
 to
 XSLT, for use with Saxon in a Java environment. But Roma runs on libxslt, which supports
 only XSLT 1\.0 \[and which may remain there indefinitely—DS]. So: do we want to
 maintain the forked stylesheets, or are we willing to commit our ongoing resources
 to
 Vesta's XSLT 2 environment, with the goal of an eventual rewrite of Roma?


Council agrees it is undesirable to maintain more than one set of stylesheets. On
 the
 other hand, we do want to retain OpenOffice transforms as a TEI deliverable. SR proposes
 that we call WebRoma the 
 ODD editor; Vesta has a different function. We should also
 make a distinction between TEI 
 services and 
 interface \[one service might be
 instantiated in more than one interface]. DO suggests that the strategic direction
 as
 seen from our users' perspective is: there should be single locus for all TEI\-related
 services; the technical backend should be opaque. LR: We implement it as an SOA
 (service\-oriented architecture), meaning that we identify the processors that are
 behind
 the scene as services. DO: output services (in the non\-technical sense) need to be
 bundled together, but not necessarily input services. The set of people who actually
 author and compile ODDs is much smaller than people who use TEI and generate output.


**SR** will come up with a roadmap for the Roma family,
 propose it to Council, then disseminate it on TEI\-L. \[DONE as of 11 April].


 Proposed Workshops on TEI
 
 
 Most of the discussion focused on submitting a proposal to the European Science
 Foundation (ESF) for one of their [Exploratory
 Workshops](http://www.esf.org/activities/exploratory-workshops.html).


LB suggests that we could use a workshop as a way of beginning the planning for P6;
 we
 could also focus on the role of TEI with respect to various communities of research.
 AC
 says there is funding for science\-driven research workshops (
 science in the sense of
 Wissenschaft) with a maximum 30 participants (who must be specified in advance),
 lasting 1\-3 days. Deadline for proposals for the current grant cycle 30 April. The
 location is flexible. Requirements include wide representation from across Europe,
 and
 no more than five participants from the proposing country. Maximum funding available
 is
 €15K. AC feels that participants should be people who will be involved in future TEI
 development.


Strasbourg would be a possible host site; LR has access to space in the Tour
 Montparnasse, so Paris would be another. We might also investigate cosponsorship,
 e.g.
 with Adonis. 


**LB and LR** will draft a workshop proposal. AC will not
 be involved in writing the proposal, to avoid conflict of interest.


 SourceForge bug and feature requests
 
 
 (As secretary was participating in discussions on these items, notes are sketchy.
 See
 also any comments on SourceForge.)


[2209933](https://sourceforge.net/tracker/?func=detail&aid=2209933&group_id=106328&atid=644065) content model of 
 am* Argument from use cases. Cannot put 
 unclear etc. outside the 
 am
 if you're using diplomatic transcription. LB objects that 
 am includes a
 marker of abbreviation, seen on page but not used in transcription. Prototypical
 abbreviation is '.'. But use case is: 3\-letter abbreviation marker where one is
 unclear. JC: let's modify documentation so people don't abuse this. We agree that
 usefulness outweighs the possibility of abuse.


APPROVED
[2493417](https://sourceforge.net/tracker/?func=detail&aid=2493417&group_id=106328&atid=644065)idno coverage.* We agree on the simple application \+ corresponding change in the prose. Change
 definition of 
 idno to say it can be used to identify 
 any part of
 a bibliographical description; 2nd, add it as a possible content model for author.
 LB/SR are
 not happy about 
 idno as a child of 
 author. LR suggests that in the
 scientific world we want to be able to create bibliographical entries that include
 
 idno's that connect to our data, e.g. standard number for publication or
 author. LB: there are two solutions. Either we say we've changed our mind about
 
 idno and don't restrict; or we restrict the places where it is allowed.
 JC suggests: why can't we use 
 ident for this purpose as it is already
 allowed? ... maybe we need a special bibliographical phrase class (in order to get
 
 ident inside 
 author). There are various other elements inside a
 bibliography that can take identifiers. Consensus: we will add a bibl.Phrase model
 class, which will contain 
 idno.


APPROVED
[2517629](https://sourceforge.net/tracker/?func=detail&aid=2517629&group_id=106328&atid=644065) Guidelines: 
 type and 
 resp in
 
 note* OK, accept as proposed.


APPROVED
[2607768](https://sourceforge.net/tracker/?func=detail&aid=2607768&group_id=106328&atid=644062)figure should be global* Rationale: 
 graphic when not inline should be wrapped in a 
 figure
 as best practice. Accept as proposed.


APPROVED
[2673045](https://sourceforge.net/tracker/?func=detail&aid=2673045&group_id=106328&atid=644065) new attribute 
 rational on 
 num* This was discussed in detail on tei\-council and SF. The majority voted for adding
 
 valueType. Consensus: we implement, with a closed value list:
 "decimal", "float", "ratio".


APPROVED
[2672530](https://sourceforge.net/tracker/?func=detail&aid=2672530&group_id=106328&atid=644065) Remove repository element requirement in msIdentifier* Fine; we will add to documentation of 
 repository that it is not meant to
 indicate just any geographical location.


APPROVED
[2242434](https://sourceforge.net/tracker/?func=detail&aid=2242434&group_id=106328&atid=644065) element for text suppressed by the editor* The proposal was for an element like 
 suppressed with a function opposite
 to that of 
 supplied. After discussion, council comes around to point of
 view that yes, 
 supplied does perhaps require symmetry. But
 
 suppress is not the best name; how about 
 omit. This is
 semantically more neutral. Council does not totally agree that 
 omit is
 needed when 
 sic exists, but in the interest of flexibility, we can add it.
 We need actual use case examples.


DEFERRED: we will ask the proposers for actual use cases (and in particular, cases
 where typed 
 sic would not be sufficient).
[1954920](https://sourceforge.net/tracker/?func=detail&aid=1954920&group_id=106328&atid=644065) (
 role to be returned to att.naming)* Agreed, add 
 role to att.naming. \[As LB notes in SF ticket, att.naming
 needs reorganization].


APPROVED.
[1925127](https://sourceforge.net/tracker/?func=detail&aid=1925127&group_id=106328&atid=644065): Provide discussion of taxonomical names* Council sense is that it's too complex. LR: is it really role of TEI to figure this
 out? Or solicit advice from specialists? We don't have a proper TEI tool to
 represent full taxonomy. Suggest we leave open for now. No one has come up with a
 strong proposal. We need stronger set of use cases.


DENIED: close ticket
[1933481](https://sourceforge.net/tracker/?func=detail&aid=1933481&group_id=106328&atid=644065): ODD needs a way to indicate deprecation at next major
 release* LR suggests that we simply add a 
 status attribute in ODD to
 
 elementSpec or 
 attributeSpec. Discussion was inconclusive; the
 whole issue ties in with larger discussion about ODD format.


DEFER: leave ticket open.
[1962972](https://sourceforge.net/tracker/?func=detail&aid=1962972&group_id=106328&atid=644065): new members for model.quoteLike* PB explains the context. LB thinks there's a good case to be made for using
 classes. All agree.


APPROVED
[1999652](https://sourceforge.net/tracker/?func=detail&aid=1999652&group_id=106328&atid=644065): Add 
 who to 
 quote* LB thinks this is just a resurgence of basic problem that people mistakenly believe
 
 q and 
 quote are the same. But when 
 quote is rightly
 understood as part of a bibliographic construct with 
 cit available, a new
 attribute isn't needed.


DENIED
[2055891](https://sourceforge.net/tracker/?func=detail&aid=2055891&group_id=106328&atid=644065): Placement of Schematron rules * SR summarizes his proposal to add 
 constraint as a child of
 
 schemaSpec, 
 elementSpec, 
 attDef. Consensus is that we
 should implement; SR will come up with details before the next June release, in
 conjunction with Council. \[See also below, Friday discussion; and discussion on
 tei\-council, first week in April].


APPROVED pending implementation
[2525586](https://sourceforge.net/tracker/?func=detail&aid=2525586&group_id=106328&atid=644065): 
 scope attribute on 
 rendition/ for CSS
 pseudo\-elements* Was discussed in some detail [via email](http://lists.village.virginia.edu/pipermail/tei-council/2009/010618.html). Accept. LB will incorporate DS's response in the SF ticket.


APPROVED
[2531384](https://sourceforge.net/tracker/?func=detail&aid=2531384&group_id=106328&atid=644065): Rationalise application of 
 target* DP presents. She likes Lou's suggestions. After discussion, decide we have to keep
 
 target so as not to break things. Define a class to define
 
 target values as one or more tokens; in cases where there must be only
 one, use Schematron. What about 
 cRef? Leave it alone. Lou's ticket note:
 make 
 target point to 1:n, and define as class; enforce in
 Schematron.


ACCEPTED
[2594174](https://sourceforge.net/tracker/?func=detail&aid=2594174&group_id=106328&atid=644065): dimensions needs loosening up slightly* Per Lou's resolution on SF ticket: Added new 
 dim element, and class
 model.dimLike. Redefined 
 dimensions content as `( dim*,
 model.dimLike_sequenceOptional)`. Updated discussion in MS accordingly. Updated at
 rev 5985.


ACCEPTED




 Complex Sourceforge items
 
 
 
[2372570](https://sourceforge.net/tracker/?func=detail&aid=2372570&group_id=106328&atid=644065): element for punctuation marks
 
 
 
 (In the course of long discussion of this request, we invited Alexey Lavrentev in
 to
 answer some questions and expand on his published remarks.)


We begin with discussion of what 
 c represents. Is it a portion of a word, a
 subset of the hierarchy of linguistic characters; or is it "any character"? We need
 to
 discuss this to explain why we would have both 
 c and 
 punct if we add
 the latter. PS observes that we already have 
 am as a special kind of
 character(s). Alexei is asking for things that mark syntactic boundaries. One problem
 is that boundary between syntactic and intraword punctuation is fluid. LR suggests
 the
 default solution is 
 c, typed. People will have their own typology of
 punctuation marks. Also, we don't want to impose a Western view of punctuation on
 all
 texts. LR: we can identify a fringe of applications where 
 c takes more than
 one grapheme. 


(Here Alexei \[AL] joined the meeting.) AL: you could say that all the tags
 
 w, 
 m, 
 s, etc. are syntactic sugar for 
 seg.
 
 c is a building block for larger units. ... One basic issue is two views:
 
 c is subset of 
 w; 
 c is also a segment that can alternate
 with 
 w. ... AL makes the case that 
 c is a 
 brick unit, whereas
 punctuation is like 
 mortar. 


Discussion of attributes on 
 punct. 
 direction is just intended as
 a statement of position; it doesn't establish the correspondence between two marks
 \[which can be handled by existing mechanisms].


LR notes that there are existing projects that use
 
 w
c
w
c. So we must not break or deprecate that
 structure. LB wants to be sure that if we introduce 
 punct we should make very
 clear what appropriate use cases. Avoid the 
 q/
 quote confusion.


LR: the proposal would cause no harm, and we should also clarify use of 
 c
 with some more examples. DS notes that the word "stop" in a telegram would be
 
 punct. LR says we want to identify specific sequences as characters seen
 as symbols with a specific role. In SMS language, etc. there are symbols that no
 longer count as 
 punct. Would it be good to avoid 
 punct as ambiguous
 with 
 c, but instead add a more general\-purpose 
 symbol character?
 Discussion ensues on whether we do need the specific punctuation marker or a more
 general\-purpose marker for symbolic language. LR would like a more general\-purpose
 symbol marker. PS: 
 symbol scares me because within human
 textuality, there are all sorts of uses for symbols. If we have 
 symbol it
 should be on level of 
 g maybe, low\-level rather than high\-level. LR: whatever
 our choice, we need to make our recommended usage clear to community in the
 Guidelines. LR: the natural language processing community has complained about TEI
 as
 not adequate for analysis. We should remember this community and make clear usage
 recommendations. LB: yes, what we need to say is 
c has been used for this
 purpose, but 
 c is inherently ambiguous; 
 punct is absolutely clear,
 etc.. We don't want to deprecate 
 c type\="punct", but strongly suggest that
 the new element be used when people are doing natural language processing.


We must allow 
 punct to have text in it. We should comment that segmentation
 for part\-of\-speech tagging is 




]]\>

.
 
 
 CONDITIONAL APPROVAL. Adopt, but we need to refine the proposal and usage guidelines.
 \[LB has since proposed that the new element be called 
 pc.]




[2411994](https://sourceforge.net/tracker/?func=detail&aid=2411994&group_id=106328&atid=644065) Define canonical way of referencing TEI element definitions
 
 
 
 DS had previously [submitted a
 note](http://lister.ei.virginia.edu/~drs2n/DOI/) with a proposal for a possible implementation of DOIs for the Guidelines.
 However, group discussion showed that we feel DOIs are (1\) too expensive and (2\)
 probably overkill for our current needs. DS noted that a 
 cool URI approach to
 canonical references, for example the way the W3C handle versions of their
 Recommendations, is in any case perhaps more in line with the needs of the Guidelines.
 We could always add DOIs at a later stage to an implementation of stable URIs (or
 adopt a different handle system altogether, if a promising candidate emerges).


How would we implement cool URIs?. Would the URL for the current version always be
 a
 redirect to an archived version? JC: The moment SR makes a release, the version
 gets added to the 
 current place and also to a static location
 in the vault. (Thus the current version would always be addressable at two URLs;
 referencing the vault version assures stability.) When displayed in HTML, every piece
 of the Guidelines bearing an 
 xml:id would come with a version number.


DO suggests we look into the W3C semantic recommendations for cool URIs. PB: One of
 the elements of the cool URI spec is that it shouldn't include something external.
 SR
 suggests that the cool URIs should not include '.html'. AC suggests that identifiers
 for subtopics should not be semantic, per recommendation in ["Report on
 Persistent Identifiers"](http://nbn-resolving.de/urn:nbn:de:gbv:7-isbn-90-6984-508-3-8) from CERL. \[But DS tends to disagree: the W3C, for
 example, use semantic fragment identifiers like
 `http://www.w3.org/TR/xquery/#id-path-expressions`]


**DS and JC** will come up with recommendations for
 implementation.


[1949503](https://sourceforge.net/tracker/?func=detail&aid=1949503&group_id=106328&atid=644065): 
 relatedItem
(proposal to allow 
 biblScope as a child of 
 relatedItem, LR)


Long discussion on this \[which your secretary didn't transcribe well, sorry]. The
 consensus was to reject this proposal, but to make explicit that the correct usage
 is
 



...]]\> In addition, we
 will open a feature request to add 
 target to 
 relatedItem (done:
 see [https://sourceforge.net/tracker/?func\=detail\&aid\=2728061\&group\_id\=106328\&atid\=644065](https://sourceforge.net/tracker/?func=detail&aid=2728061&group_id=106328&atid=644065)
 and also [https://sourceforge.net/tracker/?func\=detail\&aid\=2728068\&group\_id\=106328\&atid\=644065](https://sourceforge.net/tracker/?func=detail&aid=2728068&group_id=106328&atid=644065)).
 
 
 DENIED but provided for




[2002418](https://sourceforge.net/tracker/?func=detail&aid=2002418&group_id=106328&atid=644065) New element \= 
 clarification?
 
 
 
 We don't feel it that the proposal is generalizable. We should expand discussion in
 Guidelines to cover encoding of such cases using the current tagset. (We also don't
 know how we could clearly explain usage of the proposed element.)


DENIED




 2055891: Placement of Schematron rules (additional discussion, SR).
 
 
 SR has identified a problem with 
 constraint as proposed. If a
 
 constraint sits inside 
 elementSpec, then redefining a constraint
 will replace the default constraint(s). So we will need to have an add/change mode.
 The 
 constraint element should be able to contain various constraint
 languages; we have only Schematron right now. LB: question: are P5 Schematron
 constraints part of TEI Conformance? If so, then if someone redefines a constraint,
 wouldn't documents using the resulting schema be non\-conforming? Another question:
 should the Guidelines prose duplicate the rules contained in the Schematron? Some
 disagreement: LR points out that in the past we have removed duplication in prose
 of
 rules provided by content model. BUT we can't expect people to understand Schematron
 rules. LR: shouldn't we decouple the issue of conformance from technical
 implementation? We should leave the possibility to delete constraints. JC: what about
 multiple constraint lists? LB: sure, you could have constraints in more than one
 language.


LR summarizes the requirements: 


* constraint with 
 ident
* constraintList
* scheme appears only at the level of constrainList


LB: what happens if you put a constraint list in an attribute list? SR: should we
 allow 
 constraint within an attribute class? (might have bad subeffects) A
 good use case: in att.typed, 
 type and 
 subtype should not be
 same. JC: we should certainly have 
 constraint available on \*Spec. 


LR: we should let SR go ahead and implement the basic aspects. We agree about
 
 constraint at the 
 elementSpec level; we can wait on
 
 classSpec and 
 schemaSpec until we're sure they are doable.


AC: because we may allow other constraint languages, we should not permit abbreviated
 fragments of schema languages (i.e. ones that would not parse by themselves).


**SR**: develop an initial implementation within the next
 month.


[1933198](https://sourceforge.net/tracker/?func=detail&aid=1933198&group_id=106328&atid=644065): 'precision' element needed
 
 
 
 We have discussed this previously and there has been lengthy discussion on TEI\-L.
 We
 take no action now, but


**all**: Look again at the SourceForge proposal, get back
 to Council with any objections; solicit input from Tim Finney. \[See followup
 discussion on tei\-council, first week of April.]



 Report on "Getting Started with TEI" (PB)
 
 
 The document has not progressed as far as we wanted; 7 of 13 sections are drafted
 and
 ready for comments. PB proposes that if no one else volunteers, he will write the
 remainder. DS asks whether we should go outside Council for authors; PB thinks not.
 LB:
 do we want to internationalize the translation? JC/LR: we can think about it, don't
 want
 to have anyone start on it.




 TEI and the "Standards World" (AC)
 
 
 There is room for TEI to become better known in standards communities. There are
 various European agencies that have an interest in TEI; we should pursue our roles
 in
 them. On a higher level, we could promote TEI by giving funders more info on TEI,
 TEI
 best practices. (DO: this was mentioned by funders at the 2007 Members Meeting.) DO:
 we
 should be doing this, and also identifying agencies that are not requiring TEI, and
 explaining the benefits to them. But we are 
 not in a position to do TEI certification.
 We're not an agency, don't have paid staff that can do this. 


DO suggests that we prepare a package on digital resources and the TEI to share with
 agencies, and offer to give workshops. The TEI can profile itself as a meta\-research
 infrastructure. ... We should be a research NGO. \[DS nominates this as the Quote of the
 Meeting.]


**AC, DO, LR \[with JC and Julia Flanders]**: talk further
 about drafting communications to outside agencies (approval for these will have to
 come
 from Board however)


 Making TEI Examples more accessible
 
 
 JC: As a follow\-up from our Galway meeting, we might want to come up with a framework
 for indexing/retrieving TEI examples in the Guidelines (or even external ones). We
 want
 to be able from a reference page to be able to point to uses of examples. All examples
 in Guidelines should have 
 xml:id and 
 xml:lang. \[SR feels the
 latter is unneeded because 
 xml:lang is inherited. But LR feels that we should
 decouple the language of examples and the language of the enveloping Guidelines for
 modularity. JC notes that there are some examples that incorrectly inherit
 xml:lang\="en"]. LR suggestion we might move away from inherited examples in XML to
 a
 library stored outside and pointed to, carrying 
 xml:lang. JC proposes
 decoupling examples from Guidelines and making them referenceable. 


Counterarguments: (SR) this is not our most important task right now; (LB)
 decontextualized examples don't always make sense. (SR): The bigger problem is that
 examples we have are too small. LR: so we need some kind of way to externalize examples.
 DO: The first thing to do is to file a bug report on incorrect 
 xml:lang on
 examples; then add a feature request to add 
 xml:lang to all egXMl
 examples.


Council agrees it would be good to have an index to examples in the HTML format as
 well
 as in PDF. Also, a "click on show me other examples" link, to show all (?) available
 examples. \[Since implemented by SR.]


SR points out that our HTML rendering of Guidelines is just one possible rendering;
 the
 reason we make our source open is so people can build on it if they want. So let's
 separate out HTML presentation from the collection of more examples.


**DS** will gather a list of examples with incorrect
 (explicit or inherited) 
 xml:lang values; JC, submit feature request to add
 
 xml:lang to all egXML elements.


 TEI\-ISO Project Report (SR)
 
 
 The first stage of Oxford's work for the ISO was to show that TEI could describe an
 ISO
 standard; the second stage was lossless bidirectional translation between TEI and
 MS
 Word. This was achieved and demo'ed to standards bodies. The proposal then is to go
 on
 to a pilot project to implement some of the standards. (LR asks if there wasn't a
 standard prepared in XML recently; SR: yes, but not validated by ISO.) There were
 objections in stage 1 about the TEI table model (probably CALS tables would need to
 be
 used instead) and questions about math. LR notes that Vesta supports an ISO\-looking
 document (but not ISO\-approved, as SR notes). SR isn't sure that this project will
 go
 any further; Council should perhaps not spend more time on it right now. LR: can we
 say
 that the experiment shows that a subset of TEI is an appropriate tool for the task?
 SR:
 yes, because we understand the necessary structure and terminology, plus have the
 ability to customize. And the MS Word stuff demonstrates that there is a stylesheet
 framework available Word\-TEI adequate for authoring.




