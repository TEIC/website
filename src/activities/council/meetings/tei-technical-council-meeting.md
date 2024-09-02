---
layout: page.njk
title: "TEI Technical Council Meeting"
---
# TEI Technical Council Meeting





The TEI Technical Council held a teleconference on Tuesday 29 February from 18h00
 to 19h00 UTC.


Participants: Gabriel Bodard (GB); Brett Barney (BB); Lou Burnard (LB:
 minutes), James Cummings (JC: chair); Kevin Hawkins (KH); Martin Holmes (MH); Sebastian
 Rahtz (SR); Paul Schaffner (PS); Rebecca Welzenbach (RW); Stuart Yeates (SY); .


Apologies: Piotr Banski. 


Agenda: [http://wiki.tei\-c.org/index.php/Council\#Teleconference\_\-\_Tuesday\_28\_February\_2012\_at\_18:00\_GMT](http://wiki.tei-c.org/index.php/Council#Teleconference_-_Tuesday_28_February_2012_at_18:00_GMT)




Brief Reports previously circulated* + KH reported that he and MH were still working on the ideas about bibliographic
	 citation summarized in their [article on the wiki](https://wiki.tei-c.org/index.php/Ad-hoc_committee_on_encoding_of_bibliographic_citations)
	+ KH's [pre\-meeting report](http://lists.village.virginia.edu/pipermail/tei-council/2012/015174.html)  also addresses the current state of TEI Tite. He believed
	 that the Tite schema as documented at [http://www.tei\-c.org/release/doc/tei\-p5\-exemplars/html/tei\_tite.doc.html](http://www.tei-c.org/release/doc/tei-p5-exemplars/html/tei_tite.doc.html)
	 was now consistent with the Apex DTD, but agreed to check. SR asked whether Tite was
	 defined with reference to a specific version of P5 and if so which. It appears not.
	 This means that there may be unexpected changes when the schema is regenerated against
	 a different version of P5\. The schema is defined by inclusion so this will only affect
	 unspecified value or attribute lists however. A question was raised about the
	 ownership of the Apex DTD which Apex are thought to believe to be their property.
	 
	 KH to investigate and report back at next meeting.
	+ MH's [previously circulated report](http://lists.village.virginia.edu/pipermail/tei-council/2012/015185.html) discusses the blacklisting of URLs derived from
	 some TEI identifiers such as \#MSAD. After reflection, Council agreed with his
	 recommendation that all existing identifers should be given a unique prefix such as
	 "TEI\_" ; it was also agreed that this could be done at the next available release.
	 since it would not involve any schema change. 
	 SR and MH to confer on
	 implementation before next P5 release.
	+ KH summarised what was known about the current state of work within Google on
	 producing a TEI conformant version of some large number of scanned Google Books. The
	 algorithms and code concerned were proprietary to Google, but the outputs would be
	 publicly available. No correction of OCR errors in the input text was envisaged. JC
	 reported that he and SR had also been in discussion with Google about making available
	 "good" TEI versions of texts from the Oxford Text Archive. KH reiterated that this
	 project constituted "big news" for the TEI and we should be ready to maximize
	 publicity arising from it. KH was asked to try to find out more about the project
	 as
	 soon as possible, e.g. how many titles were envisaged, and of what quality; were any
	 features for collation or correction of reported errors envisaged? etc
	+ GB spoke to the agenda item concerning the extended pointers workgroup . MH opined
	 that the uses originally proposed for XPointer extensions within the TEI were of
	 little practical use for most TEI users; LB questioned this, citing eg Piotr's use
	 of
	 them in support of stand\-off linguistic markup. Syd Bauman had suggested the TEI might
	 improve the situation by funding development of a specialized XInclude processor;
	 others disagreed. MH reported that little was happening on the group's discussion
	 list; it was agreed that the 
	 Chair should ask the group to propose a date by
	 when they might have some recommendations for Council's consideration. See further
	 [GB's brief post\-meeting report](http://lists.village.virginia.edu/pipermail/tei-council/2012/015199.html).
	+ [MH's report](http://lists.village.virginia.edu/pipermail/tei-council/2012/015185.html) summarizes ongoing work in connexion with several SF tickets
	 related to attribute datatypes. He has now checked the proposed 
	 datatype of
	 each P5 attribute against its supposed 
	 dataDesc, and believes they are now
	 all consistent, with the sole exception of the 
	 form attribute on
	 
	 quotation which has no 
	 datatype at all. However since this
	 attribute has been marked as deprecated for several releases, it should probably be
	 removed at the next one.
	+ [KH's report](http://lists.village.virginia.edu/pipermail/tei-council/2012/015174.html) touches also on the proposal to revive the Physical Bibliography
	 Workgroup for which a chair had to be found. Council discussed the names proposed,
	 and
	 encouraged KH to pursue these possibilities, and report back as soon as
	 possible.
	+ In [his pre\-meeting report](http://lists.village.virginia.edu/pipermail/tei-council/2012/015185.html) MH reported that recent work on documenting the [TEI release
	 process](/Activities/Council/Working/tcw22.xml) in better detail appeared to be as complete as was feasible for the
	 moment. RW promptly reported a typo in the document; this has now been fixed.
	+ Following acceptance of the proposed "Future of TEI ODD" panel for the DH2012 conference,
	 
	 JC asked 
	 Council members to suggest other possible participants for a workshop on the 
	 Saturday and Sunday following DH2012 on the Future of TEI ODD as
	 soon as possible, so that the work of preparing the workshop (which he is coordinating)
	 might begin.
Other business on the agenda* For lack of time, items 2 (discussion of [MH's
 long posting](http://lists.village.virginia.edu/pipermail/tei-council/2012/015190.html) concerning use of 
 ref and 
 key) and 3 (issues
 raised by the 
 TEI in Libraries Best Practice document) were both deferred
 to the next meeting.
April face to face meeting* The remainder of the meeting was devoted to practical arrangements
 for the April face to face meeting in Ann Arbor. RW reported that rooms had been now
 been
 reserved in the Bell Inn for all Council members. JC asked for 
 input from Council in updating and
 amplifying the draft agenda topics for the meeting in the Wiki. LB undertook to perform the
 traditional triage of outstanding sourceforge issues by the third week of March; MH
 undertook to nag him if this was not done by that date.


Meeting concluded at 19h10, UTC.



