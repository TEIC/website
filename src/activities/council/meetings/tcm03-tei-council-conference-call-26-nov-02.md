---
layout: page.njk
title: "TCM03: TEI Council Conference Call 26 Nov 02"
creator: Lou Burnard
date: 2002-11-26
---
# TCM03: TEI Council Conference Call 26 Nov 02






TEI Technical Council: conference call 26 Nov 2002

Lou Burnard


After some initial technical problems caused by LB ill\-advisedly
 trying to use a headset instead of a telephone, the call
 commenced 1305 GMT, 26 Nov. 


The following were present: Syd Bauman (SB), Alex Bia (AB), David
 Birnbaum (DB), Lou Burnard (LB), Matthew Driscoll (MD), David 
 Durand (DD), Tomaz Erjavec (TE), Merrilee Proffitt (MP), Sebastian
 Rahtz (SR), Laurent Romary (LR), Chris Ruotolo (CR),
 Susan Schreibman (SS), John Unsworth (JU), Perry Willett (PW),
 Christian Wittern (CW).
 


* Minutes of the last conference call at [http://www.tei\-c.org/Council/tcm01\.xml](http://www.tei-c.org/Council/tcm01.xml) are in need of
 revision; 
 SB
30 Nov
 02 to revise tcm02\. LB agreed to take notes
 for this one, and to update the [list of TEI Council members](/Consortium/TEI-TEI-C.html#TEI-council. ) on the website.
* CR gave an update on activities of the SGML\-XML Migration Working 
 Group 
 See materials at [http://www.tei\-c.org/Activities/MI/](http://www.tei-c.org/Activities/MI/). Drafts for
 the tech reports were due in two weeks; full meeting of the two
 groups will be 7/8 Feb 03 at MITH. A third meeting would be held
 to coincide with the Council's ftf meeting in May. SR asked
 at what stage the technical writer would be needed; CR said
 their involvement as early as the February meeting would be
 useful, and wouild be essential from March onwards. LB said that
 Oxford were still hoping to recruit a replacement for Stuart
 Brown within that timescale. JU said that a suitable candidate
 was also available at UVA. 
 LB/JU
31 Dec
 02 to resolve technical editor position
* CW gave an update on activities of the Character Encoding
 Workgroup, and posed some specific questions
 
 
 "In the reports of the workgroups at MM2 in Chicago, and also in the
 discussions of the migration WG immediately after that, it became
 clear (at least to me) that there are some architectural decisions
 that have to be made on the road to P5\. It would make the work of
 these WG's much easier if some of these decisions could be made in a
 timely way. What I have in mind here are the following issues, but
 this is just from my own perspective, whereas the problem area is
 clearly much larger:
 
 \- Can we expect entities to be available in P5?
 Background: The various XML schema languages have to my knowledge
 decided to abandon entities. What to we do? (My concern is here
 more with the TEI 'user space', as opposed to the use of entities
 internal to DTD processing, which probably would not be affected.)
 One of the many areas affected would be "Section 6\.2 Treatment of
 Punctuation", which will need some revision anyway.
 
 \- Should/could P5 limit the content of attribute values to tokens
 (and similar material) as opposed to the many attribute values in
 P4, which allow essentially the same content as in PCDATA.
 Background: Attribute values are different from PCDATA in that they
 can not contain other markup constructs. This makes it impossible,
 for example, to specify language, writing system, readings and the
 like for the content of attribute values. Additionally, there is some area of
 conflict between XML:lang and language specification in TEI, which
 could be cleared up as well.
 To make this possible, things like
 \<corr sic\="foo"\>bar\</corr\> would have to be expressed as
 \<seg\>
 \<corr\>bar\</corr\>
 \<sic\>foo\</sic\>
 \</seg\>
 Since this would require a considerable change to the architecture
 of TEI and the view of its underlying text (which could not be
 considered to be 'simply a concatenation of all \#PCDATA in a
 document', I would appreciate a statement from the council on this."
 

 In answer to the question Can we expect entities to be available in
 P5?, Council noted that P5 would not define entity sets, but
 that character entities could be declared as a component of any
 TEI XML document type declaration. In answer to the question Should/could P5 limit the content of attribute values Council
 requested clarification from the Workgroup as to what was
 intended. It was suggested that a document recommending best
 practice with respect to attribute usage would be helpful. DD
 reported that there was a possibility that the use of SDATA entities
 within XML might be included in a forthcoming revision of the
 standard, and that the TEI should be encouraged to join others
 in expressing this requirement to W3C.
 
  CW and workgroup 31 Janto draft document on
 attribute usage
* DD gave an update on the workplan of the Stand\-Off Markup
 Working Group, a revised version of which had been circulated the
 day before. Key points included recommendations to replace the use
 of ID/IDREF attributes by xlink/xpointer mechanisms; extended
 documentation of the usage of different media formats and Xpointer;
 recommended good practice for corpus applications and referencing
 mechanisms; a single
 mechanism for implementation of standoff markup. Drafts were due by
 15 Jan 03\. In discussion, the Council noted that there was a need
 to review the overall content of P5, for example, to decide on
 whether or not the current chapter on networks and trees should be
 retained; and there was also a need for best practice guidelines on
 the use of non\-TEI namespaces. These would be considered by the
 Council, by email. 
 All
before next
 meeting to articulate namespace policy and review P5
 contents. It was noted that the ODD mechanism could be
 modified to make the choice of linking mechanism (id/idref or
 xpointer) a user option. It was also noted that the Xpointer
 framework itself was now a stable W3C standard, though details of
 its implementations remained controversial.
* PW reported on the proposed TEI in Libraries Working 
 Group, which had been set up in the wake of JPW's presentation to the
 Chicago Members Meeting. 
 

 TEI in Libraries Working Group
 
 Objectives:
 
 To create a suite of TEI\-approved materials and tools to support
 the use of TEI in a digital library setting, including:
 
 1\. A set of guidelines for the use of TEI in libraries, building on
 the existing document "TEI Text Encoding in Libraries Guidelines"
 from 1999, and enhancing it by considering library\-specific encoding
 needs and approaches, by updating it to include P4 and XML dtds, and
 by adding examples and enhanced explanations, recommendations for
 headers, linking page images to text, use by vendors, etc.;
 2\. A set of specific dtds for various encoding levels;
 3\. XSL stylesheets;
 4\. a working system for search and display, using lightweight,
 open source components;
 5\. a set of training documents, with training workshops for
 librarians.
 
 To do this, the working group will
 
 1\. Investigate grant opportunities, particularly with the IMLS
 for drafting the guidelines, and NEH for training and development
 activities. (We'll have to restrict the working group to U.S.
 participants for these grants.)
 2\. Survey current use of the TEI among digital libraries. We will
 coordinate with the TEI SGML/XML Conversion Working Group on this
 activity.
 3\. Survey development of metadata standards such as METS, MODS, Dublin
 Core, MARCXML, and others, to give recommendations for their use in
 conjunction with TEI\-encoded files.
 
 Administrative
 Chair of the workgroup is Perry Willett (Indiana University)
 
 Deadlines
 \* By December 6, working group membership is set.
 \* By January 10, a draft grant proposal for IMLS is finished
 to be reviewed by working group members.
 \* By January 20, the final draft is readied for submission
 to IMLS
 
 By March 1, decision to pursue grant funding from the NEH
 for training component (with a series of short deadlines,
 ending July 1 with submission of application).
 
 Work via email and perhaps meet as opportunities arise in
 conjunction with conferences."
 

 Council was very supportive of the proposal, but questioned use of the
 term 
 workgroup, since the proposal did not involve production
 of technical input to the Guidelines. Agreed to term it a
 
 task force (the term 
 special interest
 group was also considered but rejected). It was noted
 that an explicit association with the TEI of this kind
 assisted in the project's fundability. Concern was expressed
 that the group should seek, funding permitting, to involve
 participation from outside North America.
* LR reported an initiative to work on the current
 Feature Structure chapters, as a joint TEI/ISO
 workgroup, under
 the auspices of ISO TC37/SC4\. Members would include Simons and
 Langendoen, Tomas Erjavec, and representatives from a number
 of significant research groups active in NLP in France and
 Germany. Council was supportive of this proposal, noting that
 it did not require additional funding from TEI. There was some
 inconclusive discussion about the conduct and status of TEI chartered
 workgroups not funded by the TEI; would the group have to
 follow both ISO and TEI procedures, for example.
 LR was requested to draft a
 charter for the proposed Group for consideration by the
 Council. 
 LR
15 Dec 02 to draft
 charge for the proposed feature structure workgroup and circulate to Council
* Editors' proposal for handling nontrivial changes to the Guidelines 
 ([http://www.tei\-c.org/Drafts/edw78\.html](http://www.tei-c.org/Drafts/edw78.html)): this item
 was held over to next meeting
 due to lack of time
* TEI Adoption/Endorsement of Project Materials. 
 Council discussed suggestions from Charles Faulhaber
 
 the DTD for medieval manuscript transcription is now finished and is
 available, along with instructions on how to use it at
 <http://sunsite.berkeley.edu/Scriptorium/transcription.html>
 We would like to submit it formally for vetting by TEI in the hopes of
 having it adopted as an official DTD. We're pretty happy with it. I just
 wish that we had a good character set to go along with it.
 and David Chesnutt
 MEP materials: [the MEP dtds](http://adh.sc.edu/MepDTDs.html);
 [the MEP guidelines](http://adh.sc.edu/MepGuide.html);
 [the MEP tag library](http://adh.sc.edu/meptsdv1.html);
 Although developed specifically for the historical editing community, the
 DTDs are currently being used by similar literary projects like the Mark
 Twain letters at UCB and the Thomas Carlyle letters at Duke. Needless to
 say, I'm very pleased to see the work go beyond our small group of
 historical editors.
 following some discussion on the [TEI\-Council list](http://lists.village.virginia.edu/lists_archive/tei-council/) October 
 23rd et seq. Council noted that the TEI was not, formally, an archive
 and could not guarantee to maintain materials on its website
 indefinitely. It was also noted that Faulhaber's request was
 apparently for some kind of authentication or endorsement
 of his specific customisation of the DTD, a concept which several
 members of the Council found problematic. It was noted that the
 website already provided a showcase for such TEI applications
 and would be pleased to accept more.
* Review of [workplan and timetable for TEI P5](/Drafts/p5.html): held over to next meeting
* Status of Master/manuscript description work: held over to next
 meeting.
* Date and time of next meetings: conference call provisionally
 scheduled for the same time on 21 Jan 2003; Face\-to\-Face: May 16
 and 17, 2003 (a Friday/Saturday) Rewley House, Oxford. Next Members' Meeting: Friday/Saturday,
 November 7/8, 2003, Nancy, France.



