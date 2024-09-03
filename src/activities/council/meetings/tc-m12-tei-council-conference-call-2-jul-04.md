---
title: "TC M12: TEI Council Conference Call 2 Jul 04"
date: 2004-07-02
---
# TC M12: TEI Council Conference Call 2 Jul 04



The following were present during the call which started at
 13:02 UTC: Syd Bauman (SB), David birnbaum (DB), Lou Burnard
 (LB), Matthew Driscoll (MD), David Durand (DD), Julia Flanders
 (JF), Sebastian Rahtz (SR), Laurent Romary (LR); Susan
 Schreibman (SS); John Smith (JS; for first item only), Natasha
 Smith (NS), Edward Vanhoute (EV); Perry Willett (PW);
 Christian Wittern (CW).
 


Alejandro Bia was unable to join the call, being in transit.


* John Smith presented a working paper from the Sanskrit Task
 Force ([http://www.tei\-c.org/Activities/CE/cew11\.pdf](http://www.tei-c.org/Activities/CE/cew11.pdf)). Its goal was to find
 an acceptable compromise between making an overly general
 recommendation and one that was too specific to a particular language
 or domain. He noted a minor error in the working paper (in exampes \[c]
 and \[d], the type attribute with values `wordgroup` or
 `compound` 
 should be supplied on the
 
 sequence element, not on its children). LB asked in what
 respect the existing general mechanisms for segmentation and analysis
 (in chapters SA and AI of the Guidelines) were inadequate to the
 problem in hand, and agreed to demonstrate how they might be used for
 the cited examples. 
 LB e\-mail one
 of Sanskrit examples re\-encoded with \<seg\> and \<ana\>.
 1 aug
 04
 
 Noting that the Taskforce was uneasy with the implied
 semantics of the choice tag (since the intent in this case was to mark
 a segmentation plus an interpretation, rather than to present two
 alternative ways of doing the same thing), LB suggested it might be
 useful for JS to join the recently\-set\-up TEI\-choice list. 
 LB add JS to TEI\-choice discussion list
 
 7 jul 04

 LB also asked whether Unicode tokenization was not an adequate way of
 handling word\-segmentation for these languages; CW and JS explained
 that it was not, because the same character might be shared between
 two words in a compound. LR noted that ISO TC37/SC4 ([http://www.sc37sc4\.org](http://www.sc37sc4.org)) had an active workgroup on
 morpho\-syntactic annotation, which had produced a detailed working
 paper of relevance to the discussion 
 LR circulate reference to TC37/SC4
 workgroup on paper on this issue to council list
 
 7 jul 04
Actions from the [previous meeting](/Activities/Council/Meetings/tcm10.xml) were reviewed: 
 
 + JF reported that the likely cost of trademarking the TEI in the US
 would be around $700: the Boardhad the matter in hand.
+ The call for assistance in drafting the
 
 choice mechanism had been issued on
 TEI\-L in early June. Response had been very good amongst
 members of the newly set up Digitial medievalist list; in
 the last few days, a
 special purpose list on source forge had been set up to work
 on the proposal ([http://sourceforge.net/mailarchive/forum.php?forum\=tei\-choice](http://sourceforge.net/mailarchive/forum.php?forum=tei-choice))
+ LR reported that he would be working inter alia on
 applicability of the TEI terminology proposals to the
 internationalization of the Guidelines, during his
 forthcoming visit to Oxford; Alejandro Bia would also be in Oxford at
 the same time.
+ Material not intended for the MS module had been
 removed from the current draft for the chapter, but not yet
 added to other parts of the P5 draft: action continues.
+ No new written examples had been added to the MS
 draft, but the existing ones were being revised: action
 continues: see later agenda item.
+ JF reported that she had asked DD for clarification of
 theis action (registering TEI as a MIME type) and that the
 process was now in hand: action continues.
+ The P5 page on the website had been revised 
 immediately after the Gent meeting: JF expressed thanks to SR.
+ LB had drafted a second section in the working paper
 on current state of TEI P5 ([../Drafts/edw81\.html](../Drafts/edw81.html)) which included the beginnings
 of the requested list of actions: however, progress on structuring
 and prioritizing these to form a proper work plan had been
 held up. Editors agreed that the plan should include some
 clear milestones. 
 editorswork on project plan in EDW81 
 2004\-08\-01


Noting the intention to remove the chapter on the Independent
 Header, PW commented that members of the Libraries SIG attached considerable
 importance to the material presently in that chapter about the
 relationship between the TEI Header and other metadata schemes, which
 should be maintained and updated. Council noted that there was a need
 for such comparative information, whether or not the independent
 header module was retained as a distinct schema. It was agreed that
 the editors should try to draft a discussion of related issues which might become
 part of
 the header chapter or a free standing document.
 
 editors 
 draft document discussing relationship of TEI Header to
 other meta standards on the basis of material already
 available, to be handed to the TEI Libraries SIG for
 improvement and updating. 
 1 sep 04




* DD gave a brief update on StandOff Markup WG.
 It was still planned to have a draft of a replacement for
 chapter SA by end of July. DD and SB would be working on this
 during July.

* LR reported that the TEI\-ISO workgroup meeting planned for
 the last week of August in Paris would start work on the
 Feature System Declaration chapter. The technical work on the
 Feature Structure recommendation for P5 was essentially
 complete; LR reported that implementors reported no problems
 after the changes made in Lisbon. Some work remained to be done on the additional
 tutorial material in ISO DIS 24610, which Kiyong Lee has in hand.

* Reporting from the Manuscript Description Taskforce, 
 MD announcd that a new draft fascicule for P5 was now
 available on the website ([http://www.tei\-c.org/Activities/MS/Draft\-fs.pdf](http://www.tei-c.org/Activities/MS/Draft-fs.pdf))
 together with a brief summary of outstanding issues ([http://www.tei\-c.org/Activities/MS/msw04\.txt](http://www.tei-c.org/Activities/MS/msw04.txt)). These
 documents had not yet been reviewed by the other members of
 the taskforce, but MD was hopeful that this draft could still
 be completed by mid\-July.

* Reporting on progress from the Metalanguage Workgroup, SR
 highlighted three points:
	+ The 
	 Durand conundrum first
	 voiced at dinner in Gent had raised some fundamental
	 questions which had been presented to the workgroup for
	 discussion. SR continued to feel
	 that the additional abstract layer provided by the ODD
	 formalism was useful. LB would attempt to address
	 this question in a presentation at Extreme Markup this
	 year.
	+ LB had suggested that we might simplify the whole concept of
	 modules by letting each element and class say which module it is a
	 member of. In lieu of disagreement, this has now been implemented. It
	 has some implications for the customization process, which are not
	 yet fully worked out in the TD documentation.
	+ A major activity since Gent has been a complete
	 rewrite of Roma, the P5 schema generator (<http://tei.oucs.ox.ac.uk/Roma>) by Arno Mittelbach: this is
	 rewritten in PHP5 and accesses P5 via an eXist database. This implements
	 language customization, creation of customized documentation, and editing of
	 existing customizations (plus the code is available from Sourceforge, of course).
	 The application will be tested by Alejandro during July; it does not
	 yet reflect some of our more recent ideas about customization.LB noted that OUCS was providing the server on which Roma
 was running on an experimental basis; eventually the TEI would
 have to consider issues of long term funding and support for its online servers.


The request for feature requests on SourceForge had not met with
 much response, but the mechanism was available for use. This led to
 some discussion about ways of improving involvement and awareness
 of the TEI community in current development activities. It was
 suggested that a regular news feed from the TEI Chair might be one way
 of meeting this and JF agreed to look into doing this.
 
 JF
 to consider drafting of regular news items for distribution to membership, readership
 of TEI\-L, posting as news feed to TEI website.
 
 1 Aug 04

* Reporting on the new Physical Bibliography workgroup, 
 SB said that Terry Catapano had initiated a discussion
 list ([http://listserv.brown.edu/tei\-pb.html](http://listserv.brown.edu/tei-pb.html));
 that a new European member (Anne\-Mette Hansen) had joined the
 group; and that Terry, Richard Noble, and JF had make a
 well\-received presentation about the workgroup at a recent
 American Library Association meeting.

* Under AOB,
 SS reported on expected speakers at the 2004 Members Meeting. It was noted that a
 single written report from the Council would be made, for which CW
 needed input from all active workgroups. 
 
 all
 send material for Council report to CW
 
 30 Sep 04



A provisional date of 
 Mon, 20 Sep
 04 was set for the next call.



