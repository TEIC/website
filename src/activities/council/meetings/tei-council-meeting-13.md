---
layout: page.njk
title: "TEI Council Meeting"
creator: David Sewell
---
# TEI Council Meeting






The TEI Council teleconference meeting took place on Thursday 21 August 2008 at 13:00
 UTC.



Participants: Gabriel Bodard (GB), Peter Boot (PB), Tone Merete Bruvik
 (TMB), James Cummings (JC), Lou Burnard (LB; Oxford editorial support group), Dan
 O'Donnell (DO), Elena Pierazzo (EP), Laurent Romary (LR; Chair), Paul Schaffner (PS),
 David Sewell (DS; minutes), Manfred Thaller (MT), and John Walsh (JW). Susan
 Schreibman (SS) also joined in briefly.


Council members unable to participate: Arianna Ciula. (JW entered the conference
 after 1 hr.)





 TEI P5 Bugs and Feature Requests from SourceForge
 
 
 Overview
 
 
 Lou Burnard led a discussion of outstanding items on our [SourceForge project](https://sourceforge.net/projects/tei/) bug
 tracker. Previously the Oxford editorial support team had prepared a three\-way [triage](/Activities/Council/Working/tcw15.html)
 of the items: 
 green items that have been agreed to by at least
 one Council member, 
 amber items that have not been fully
 considered and which needed further discussion, and 
 red items
 that need substantial discussion or clarification before they can be acted upon.


Council members assented to the division and agreed with the proposal that approved
 green items be incorporated into the next Guideline release; amber items be
 considered for inclusion in the next release; and red items not be considered for
 inclusion. 




 Green items
 
 Except as noted in the following summary of discussion, all green items were
 okayed for implementation. 
 LB will proceed to
 implement green items



1848442: Attributes missing* EP noted that 
 extent in 
 gap is connected with one of the
 amber items (1925125\) and suggested that we discuss it in connection with that
 item.
1852100: nameLink element should not have @ref or @key
 attribute* EP said that 
 persName does need to retain
 
 sort. LB clarified why 
 nameLink should not have
 
 key: that attribute in a naming element points to a person. A
 
 nameLink may have an onomastic referent, but that is what
 
 nymRef is for.
2055116: Add typeDesc, analogous to
 handDesc* LR notes that it will be important to document exactly
 how the new 
 typeDesc element is to be used. The question arose whether
 
 handDesc and 
 typeDesc should be mutually exclusive; as use
 cases were imagined for both, they should be treated as
 complementary.
2055122: Permit title page elements within msItem
 and msContents* EP objected that this proposal is essentially a
 
 patch to allow extra elements, when the real need is to
 revisit 
 physDesc usage as a whole. There was some sentiment (JC) to go
 ahead and implement this patch now, with the understanding that further work is
 needed on description of manuscripts and early printed books, but when it was
 noted that at the next Members' Meeting there will be at least one paper on
 this topic (by Dot Porter), Council agreed to defer action on this item.
 
 Status changed to “amber”.
2055820: change content model of \<w\>* DO noted a
 possible objection to the proposal: the content model of 
 w was
 initially intended to be purely linguistic, so that allowing it to contain
 typography would represent a philosophical change. LB noted that we have two
 communities of users for 
 w now, those interested purely in linguistic
 phenomena and the community of manuscript editors who want to be able to
 identify word\-like objects for their own purposes; we may as well permit the
 use of the tag for both purposes. LR agreed; the proposed of 
 w will
 not break existing linguistic uses, simply enable new ones.




 Amber Items
 
 2033641: erroneous "Empty element" statement in
 documentation* This appears to be an artefact of a minor bug in the
 way the documentation is generated via our XSLT stylesheets. 
 Sebastian Rahtz should tweak the stylesheet as
 needed.
1925125: Review usage and precision of
 @extent* Based on discussion between LB and JC, it is proposed that
 
 extent be reserved for values of arbitrary text that are not
 precisely quantifiable. In addition, the attributes 
 quantity and
 
 unit should be allowed on elements qualified by a measurement,
 with 
 quantity constrained to be a number. Documentation will explain
 how to decide which alternative to use. Council agreed that we should try to
 implement this for the next release.
 LB will
 come up with a detailed proposal. 
 Subsequently, JC and GB
 submitted a formal proposal regarding this ticket and ticket
 1933198
2055864: Remove redundant iso\-\*
 attributes* LB noted that this item has a lengthy SourceForge
 discussion. DO raised the concern that we will create confusion if we remove
 several of the 
 iso\- attributes but leave
 
 iso\-when; as 
 when would remain in
 
 att.datable.w3c, users might expect all the parallel
 
 att.datable.iso attributes to be available. So if we remove
 attributes as proposed, we should perhaps rename 
 iso\-when (which
 will in any case have an expanded functionality). (As an aside, DS noted that
 
 period should be an independent attribute, not classed under
 
 att.datable.w3c,) 
 DS will
 confer with Syd Bauman on the ticket and return to Council with a
 proposal.
2055891: Placement of Schematron
 rules* LB explains that there are four alternate proposals for
 governing the placement of Schematron rules in ODD files:
	+ Status quo (as children of 
	 content)
	+ as direct children of 
	 elementSpec (original Sebastian Rahtz
	 proposal)
	+ as children of a new ODD element like 
	 constraint
	+ allow them to occur anywhere. LB asked whether Schematron rules shouldn't be freed from the
 requirement to be attached to a single 
 elementSpec. since they can
 refer to multiple elements or attributes. LR favors 
 content as the
 container; PB noted that in Roma, users fill in 
 content via a form
 field, so that if we add a new element like 
 constraint, Roma will need
 to be extended. Council agreed that action on this item needs to be deferred
 pending discussion with Sebastian. 
 SR will
 create a formal proposal on Schematron rule placement.




 Red Items
 
 The only red item we discussed individually was "2002418: New element \=
 
 clarification?" TMB feels this is an important item and would like us
 to move on it. 
 TMB will contact Ellen Nessheim
 Wiger for additional background and examples, and will report back to
 Council.



DO asked about the status of red items; LB said that action on them will not be
 taken before the next release, but Council members are encouraged to think about
 them and add comments on SourceForge.





 Other Items
 
 
Getting Started Document
 
 PB has shared a document with proposed goals and strategy for a 


Getting
 Started with TEI document. Council members were requested to read over
 the document and to return comments to the Council list for incorporation into the
 minutes (see subsection below). Based on the feedback and offers of assistance, PB
 as editor\-in\-chief will convene a group of authors and editors who will begin
 dividing work and establishing timelines. We will aim to have a draft available by
 the time of the Members’ Meeting, and will distribute the draft via TEI\-L for
 feedback from the community (with a request that they share the draft with new
 users of the TEI for response if possible).
 
 
ALL are asked to provide responses to PB’s
 outline on the tei\-council list.




 Preliminary Feedback
 
 References: [http://lists.village.virginia.edu/pipermail/tei\-council/2008/009919\.html](http://lists.village.virginia.edu/pipermail/tei-council/2008/009919.html),
 [http://lists.village.virginia.edu/pipermail/tei\-council/2008/009921\.html](http://lists.village.virginia.edu/pipermail/tei-council/2008/009921.html).


EP suggests a chapter on text analysis, and notes that if we refer to specific
 software platforms we will need to keep the document updated as software
 evolves.


DS observes that the outline has a natural gradation from beginning to
 intermediate\-advanced topics, and suggests that this be made explicit to
 readers (not all will need to work through the more advanced chapters). He
 agrees with EP that presenting software usage will be one of the trickier tasks
 in composing the document, and questions whether it is best to start with RELAX
 NG XML syntax as proposed by PB.


In post\-meeting discussion, consensus was that RELAX NG XML syntax does need to
 be the base (possibly with the option to toggle compact syntax, as in the
 online P5 Guidelines); and that we should use a single software platform
 (oXygen) for examples, while linking to discussions of how to use other
 software to accomplish the same tasks.





 Formal Support for XML Schema Versions of Guidelines
 
 DS explained that this item grew out of [an observation on TEI\-L from Romain Roure](https://listserv.brown.edu/archives/cgi-bin/wa?A2=ind0806&L=TEI-L&T=0&F=&S=&P=59) that the tei\_all.xsd schema in
 the Guidelines release software is invalid. Sebastian responded that the problem
 involves more than a missing file called via inclusion but didn’t complete a
 diagnosis of the problem. In addition, DS noted that the W3C schemas generated by
 Roma for certain customizations (ones with multiple namespaces) cannot be fully
 downloaded because they comprise two or more .xsd files, while Roma offers only
 the single main file for download. DS and SR have discussed whether the TEI should
 continue to maintain formal support for W3C XML Schema versions of the Guidelines;
 if so, our tools for generating them must be fixed. DS and SR thought we might
 want to survey membership on schema usage, but consensus from Council was that we
 should first determine whether the bugs are easily fixable.



SR will be asked to report back on the severity
 of the problems.





 Physical Bibliographies
 
 This item has to do with the [series of comments
 on TEI\-PB](https://listserv.brown.edu/?A1=ind0805&L=TEI-PB) from Murray McGillivray assessing the strengths and
 weaknesses of P5 for physical bibliography. LR proposes that someone from
 Council should review the discussion thread and report back on anything we need to
 take into account. As Physical Bibliography is a licensed workgroup, it is
 appropriate for us to appoint a Council liaison to work with them on proposals. PS
 was proposed, and agreed to take this role.



PS will review the messages on TEI\-PB, confer
 with Dot Porter, and report back to Council.





 Next Council Face\-to\-Face Meeting
 
 At our Galway meeting, sentiment was expressed for having two Consortium\-funded
 face\-to\-face Council working meetings per year. Earlier this summer, LR had
 suggested an early October meeting in Paris as the most economical and feasible
 possibility. However, discussion on this topic began with a caveat from DO that
 existing TEI funds most likely make a second funded meeting impossible. Costs for
 the Galway meeting came in somewhat over budget, and we also have the expense of
 printing physical copies of the P5 Guidelines. Funding a second face\-to\-face would
 use up Consortium reserves. 


DS noted that, cost aside, it would be difficult for some Council members (those
 in North America in particular) to schedule long\-distance travel in both October
 and November (for the Members’ Meeting). Consensus was that a physical meeting
 this October is not feasible, but we should make a formal proposal to the Board to
 permit two face\-to\-face Council meetings in 2009, probably one in February/March
 and a second around September.



LR and DO will make a concrete proposal to the
 Board for the addition of a second FTF meeting in 2009\.





 Next Teleconference
 
 We will aim for at least two more teleconferences before the Members’ Meeting, one
 to agree on our priorities for tasks to complete before the meeting, and another
 to report back on implementation of the tasks and Guidelines fixes, along with a
 progress report on the 


Getting Started guide.
 



