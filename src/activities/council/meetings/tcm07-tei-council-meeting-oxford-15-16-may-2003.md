---
title: "TCM07: TEI Council Meeting, Oxford, 15-16 May 2003"
date: 2003-05-16
---
# TCM07: TEI Council Meeting, Oxford, 15-16 May 2003






Minutes of the TEI Council Meeting
Held at Rewley House, Oxford, 15 and 16 May 2003

18 May 2003


Present: Syd Bauman (SB), Alexandro Bia (AB), David
 Birnbaum (DB), Lou Burnard (LB), Matthew Driscoll (MD), David 
 Durand (DD), Tomaž; Erjavec (TE), Merrillee Proffitt (MP) \[Friday
 only], Sebastian Rahtz (SR), Susan Schreibman
 (SS), John Unsworth (JU), Perry Willett (PW), Christian Wittern
 (CW). Apologies had been received from Laurent Romary (LR).
 


* The previously circulated [agenda](tca01.html)
 was reviewed and the order modified; these minutes follow that
 revised order.
* Actions from the [previous
 meeting](tcm06.html) were reviewed; all have been completed, except
 those on CW, and on PW. The former to be addressed on today's
 agenda; the latter to be carried forward.
 
 PW6 Sept to set up
 discussion list on the IMLS grant proposal, to include all Council
 members not explicitly opted out
* CW presented documents [CEW01](https://www.tei-c.org/Vault/Workgroups/CE/cew01.html) and [CEW06](https://www.tei-c.org/Vault/Workgroups/CE/cew06.html) for review by the
 Council, noting that an additional working paper on language
 identification was yet to be folded in to CEW01, and that the
 version of CEW06 was only a preliminary draft. Council discussed
 these papers at some length. 


It was agreed that CEW01 was close to completion: the WG
 was asked to consider adding more discussion of beginners'
 problems; it was felt that some illustrations would make it more
 accessible (examples were offered from the [Menota project](http://www.menota.org)); some
 explicit discussion of typographic issues and in particular of
 scripts might also be useful. Maybe a section on output (as
 distinct from input and storage) of characters would provide
 an appropriate locus for these issues. Some explanation of
 character properties might also be helpful. Section 4\.5 (on XML
 issues) might perhaps be better located in Chapter 2 of the
 Guidelines: this was a matter for the editors to resolve. 
 


Turning to CEW06, a free\-standing replacement for chapter 25 on the
 WSD, Council noted that this paper was less complete but
 endorsed its approach. CW said that it was intended to add
 discussion of how encoded documents using the proposed scheme
 would be migrated once non\-Unicode characters had been
 standardized; and to review and expand ways of handling
 positional variant glyphs, and mapping rules for glyph
 rendering. There was some discussion of glyphs used to represent
 abbreviation; the scheme as proposed seemed adequate to the
 needs of medieval ms encoders in this regard. It was agreed that
 the proposed character description element might be placed in the
 Header, or as an external document linked to by a URI. It was
 noted that the reliance of this proposal on the availability of
 the 
 c element suggested that the latter should be in
 the core tagset rather than in the segmentation tagset. The
 names and documentation used for the specific elements proposed needed to be
 brought in line with common TEI practice, notably to include
 more examples 
 Editorsasap to provide sample tagdocs for charDesc
 elements to workgroup
 Combining characters such as ligatures should not be represented as
 nested 
 c elements: the content of a 
 c might be
 multiple codepoints. Council also requested more discussion of
 mapping issues in the document. 
 



Council next discussed the CDATA attribute issue, and reviewed
 document EDW79\. It was agreed that there was no viable
 alternative to the CE workgroup's proposal of
 converting attributes with textual content (which might therefore
 include 
 c elements) to daughter elements: it was less
 clear whether such conversion should be mandatory or
 alternative. Reviewing the following examples:
 
 



buck
duck
 (b) 
 
duckbuck
 
 (c) 
 buck
 (d) 
 buck
 ]]\>
 
 Council expressed a strong preference for (a) above (b) as an
 alternative method of encoding (c) or its analog (d), but
 recognised that there might not always be an appropriate outer
 "wrapper" element. Council decided that such methods must be
 made available in P5, but did not decide whether or not the
 P4\-style usage should continue to be available as an
 alternative, pending further examples. 
 
 EditorsJuly 2003 to revise and expand EDW79 to propose
 appropriate wrapper elements and to add more datatype
 information. 
Council thanked CW and the group for their work, and agreed that
 the group should continue for a further year. Council also
 agreed to recommend to the Board that funding should be made
 available for a further face to face meeting of the workgroup.
* In the absence of LR, LB reported on the proposed timetable for the
 joint ISO/TEI Activity on feature structures. Council asked
 whether, if this work was successful, ISO would take on the task
 of maintenance. If so, it might be appropriate for future
 editions of the Guidelines to cite the ISO document rather than
 duplicate its content. It was suggested that the TEI should
 recommend to ISO that the document should be freely
 distributable. 


Council was concerned that any changes necessary in the
 substance of the current proposals should be identified before
 production of the ISO document began: doubts were expressed as to the
 feasibility of keeping to the proposed timetable. 
 TE,
 LR, Editors6 Sept
 to review chapters FS and FD and propose any needed changes to Council
 



LB asked whether there was any need to retain the current TEI
 chapter on terminology. 
 Editors6 Sept to attempt to
 discover whether the terminology chapter is being used
* AB gave a progress report from the [Migration Work Group](/activities/MI/) reviewing
 the working papers so far available for its next meeting,
 scheduled for mid June. Council members briefly discussed the
 problems posed by recommending a migration procedure dependent
 on a single piece of software (osx) which was not
 consistently available across platforms and suggested that the
 documentation should be expanded to include exactly what was involved in
 making osx work, and should also consider other solutions in
 more detail. 
 Council noted that the various parts of MIW03
 were yet to be integrated into a single document. 
 
 LB6 Sept to add osx binaries to website and investigate 
 provision of an online conversion service
* SS gave a brief report from the Nomination Committee. The
 following have so far agreed to stand for election to the Council
 (6 vacancies): Mavis Cournane, Matthew Driscoll, Tomaž Erjavec,
 Steve Ramsay, Laurent Romary, Chris Ruotolo, Natasha Smith,
 Edward Vanhoutte, John Walsh, Perry Willet, Christian
 Wittern. The following have so far agreed to stand for election
 to the Board (2 vacancies): Patrick Durusau, David Gants, Kurt
 Gartner, Harold Short, John Unsworth. Michael Beddow and Marilyn
 Deegan were to be approached, for Council and Board
 respectively. It was noted that there was still a requiremnent
 for a defined nomination protocol. Nominations close on 1st June;
 any further suggestions to SS.
* AB presented his work on multilingual markup, also recently presented
 at XML Europe. In discussion, Council agreed that it would be
 desirable for TEI to provide 
 canonical translations for TEI element names,
 attribute names, and default values into as many languages as
 possible, whether by means of a distinct mapping document (as AB
 had done) or by additional information in the ODDs. Such mappings
 would be best developed by user communities rather than
 centrally by the TEI, which might lead to consistency and conformance
 problems. (Council noted in passing that the chapter on
 conformance was also in need of revision, but did not assign any
 action). It was agreed to form a taskforce to look into ways of
 defining and maintaining a TEI term bank, with initial
 membership of CW, AB, SR.
 
 CW, AB, SR6 Septto provide technical
 recommendations on definition and maintenance of TEI term
 bank
* SR reported on work of the Meta workgroup. Initial priorities
 had been to define the ODD format in a way consistent with the
 rest of the Guidelines, and to remove any residual SGML
 dependencies. More specifically, it was proposed to change the
 way content models were presented in tagdocs, and to define
 datatypes for attribute values more abstractly, mapping them to
 W3C schema datatypes where possible. The work was well in hand,
 though there were some current problems in
 generating DTD fragments from relaxng.


In the P4 ODDs, element content models were expressed by embedded DTD
 language, and attribute list specifications by specific ODD
 elements. The WG was now proposing to replace the former by 
 RelaxNG; it might also be appropriate to do the same for the
 latter. The decision to use RelaxNG for this purpose (rather
 than W3C Schema) did not preclude generation of W3C
 schemas. Council debated at some length which schema language
 should be used, and the extent to which it should be exposed to
 users of the Guidelines, before voting on the following
 propositions:
 


	+ The maintenance form for the definition of the TEI schema should
	 be RelaxNG
	+ In the printed form of the Guidelines, formal definitions for
	 elements should be given using the RelaxNG
	 
	 compact syntax
	+ In digital versions of the Guidelines, formal definitions should
	 be available in one or more of the available schema languages (DTD,
	 W3C schema, RelaxNG) as a user\-configurable option
	+ It should be possible for users to define extensions in any of
	 the three schema languagesEach of the above motions was carried unanimously. Council
 recommended, however, that further comment on these fundamental
 changes in P5 should be sought from the wider TEI
 community. 
 JU;
 Edsasapto report schema language proposals
 to TEI\-L and invite comment




The WG had also identified a problem in the use of
 namespaces. Definition of a TEI namespace while superficially
 attractive would have the undesirable effect of causing all
 existing TEI software to fail, since namespaces cannot be
 defaulted by e.g. XSLT processors. It was also unclear whether
 there should be a single TEI name space, or multiple
 ones. Council felt that both questions should be further
 investigated before any recommendation could be made.
 
 Meta WG6 SeptTo produce a
 working paper on the namespace problem
* At SR's request, Council discussed the current licensing
 conditions specified in the Guidelines and associated DTD
 files. It was agreed that the present situation was not
 satisfactory, chiefly because it gave users of the scheme no
 rights to modify or even to use the DTD. Council agreed to
 recommend to the Board that the Guidelines should be released
 under the GNU Free Documentation Licence, and that the derived
 DTDs or schemas should include an MIT\-style statement of acceptable use similar to
 that used by
 the Docbook DTD:
 

 
 Such a licence would enable TEI materials to be built into Linux
 distributions and other Open Source products, which Council felt
 highly desirable. 
 The Board was requested to review this issue at its conference call in
 June, and also to pursue the feasibility of getting sample TEI
 dtds and other materials built into commercial XML products.
* JU reported that there had been no further report from Patrick Durusau
 about his proposed work on revising the Tress and Graphs chapter.
* JU requested Council members to send him any recommendations concerning the next
 Chair of the Council by mid June. The new Chair would be
 appointed by the Board at its next meeting.
 
 All15 June to make
 proposals for new Council chair to JU
* JU noted that membership in the Consortium was still not increasing as
 rapidly as necessary.
* JU reminded Council members that the 2003 Members Meeting would be
 held in Nancy, France, 6\-7 Nov. The programme committee for the
 meeting, as agreed at the November Board meeting, comprised
 Peter Robinson, Laurent Romary, and Syd Bauman.
* MD reviewed the origins of the two sets of proposals for manuscript
 description under review by the MS Description Taskforce. 
 A major difference between the
 two sets of recommendations was that Master had been conceived of
 primarily for cataloguing 
 de novo, whereas the TEI\-MMSS had seen
 its role as being to facilitate retrospective conversion of
 existing print catalogues. MP noted that there was no
 pre\-existing data\-content standard for the area which Master
 addressed; MD that the intended user\-community for Master
 including manuscript scholars at least as much as manuscript
 librarians; DB noted that the recommendations agreed
 substantially, with only small differences in naming and
 functionality. 


Council agreed that the merged recommendations must
 support ways of encoding pre\-existing descriptions as effectively
 as possible. After further discussion, focussed on ways of supporting both a
 structured normative view and an unstructured low\-cost
 transitional view, Council suggested that the best way of
 reconciling the two sets of recommendations would be to define
 alternative elements, one for structured and one for
 unstructured elements, using identical low\-level access
 points. This would be analogous to the existing 
 biblStruct and
 
 bibl, or 
 entry and 
 entryFree elements.
 



MD agreed to take this suggestion further with the taskforce. He
 noted also that it might be possible to generalize the model
 further to include non\-manuscript material; it was agreed to
 postpone this work until a set of merged recommendations adequate
 to the handling of manuscripts in general (not simply
 Western medieval and renaissance materials) was
 available. Council re\-iterated its concern that this work should
 be completed without further delay and agreed that a face to
 face meeting of the Taskforce within the next three months
 might help to accomplish this.
 
 MD, MP, DB, Edsasapto
 fix date/place for MS ftf meeting
* DD reported that the [Standoff
 workgroup](/activities/SO) continued to meet regularly and was making
 slow progress; there were no major
 issues for Council to decide as yet. He briefly commented on
 the scope and status of the various working papers
 now available on the web
 site and clarified some questions about their intended
 coverage, for example that SOw04 was not intended to provide
 an exhaustive or authoritative list of recommended media
 formats, but merely to comment on the use of xpointer in
 combination with some
 commonly used formats. Council suggested that SOw05 on
 corpus applications needed to explicitly comment on the
 existing TEI recommendations for language corpora; and that
 SOw06 on standoff techniques similarly needed to review
 existing TEI proposals for accomplishing the same thing as
 xInclude. It was noted that (as mentioned above) the use of namespaces
 might be problematic. Council reviewed SOw08 on ways of
 supporting canonical reference schemes and agreed that these
 might be a generally useful alternative to the use of
 xpointer. Some method of supporting multiple schemes was
 necessary. Finally, DD reported that a paper on conversion
 between TEI extended pointer and Xpath was in
 production. Council approved the continued work of the group.
* The outgoing Chair reiterated his opinion that the root element for
 TEI documents should be 
 TEI rather than 
 TEI.2,
 and that the use of 
 camelCase identifiers
 should be reviewed. Council agreed to drop the .2 and to add a
 
 version attribute to the new 
 TEI
 element. The editors (and others) expressed strong opposition to
 the idea of dropping camel case identifiers.
* Council recommended to the Board that funding should be provided
 for one face to face meeting for each of CE, MS and Meta and
 rechartered their respective activities for the next year.
* Next meeting of the Council would probably be by conference call
 in September; no date was fixed. A face to face meeting might
 also be possible in conjunction with the Members Meeting in November.
* A vote of thanks to the outgoing Chair was proposed, seconded
 and carried unanimously.



