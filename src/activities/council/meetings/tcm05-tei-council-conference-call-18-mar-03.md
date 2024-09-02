---
layout: page.njk
title: "TCM05: TEI Council Conference Call 18 Mar 03"
creator: Lou Burnard
date: 2003-03-18
---
# TCM05: TEI Council Conference Call 18 Mar 03



The following were present: Syd Bauman (SB), David
 Birnbaum (DB) in part, Lou Burnard (LB), Matthew Driscoll (MD), David 
 Durand (DD), Laurent Romary (LR), Chris Ruotolo
 (CR) in part,
 Susan Schreibman (SS), John Unsworth (JU), Perry Willett (PW),
 Christian Wittern (CW).
 


Actions from [previous meeting](/activities/council/meetings/tcm04-tei-council-conference-call-21-jan-03/): all actions not deemed already complete are on today's
 agenda. It was agreed to defer to the next meeting the
 question of who should succeed JU as chair.
 
 Council approved the procedure defined in [EDW78](../Drafts/edw78.html), and
 actioned the editors to begin implementing them.
 * CR reported progress from the [Migration Work Group](/activities/MI/). The expert
 group has finished its draft and repository representatives had begun
 testing. There had been a useful joint meeting in College Park. The biggest
 problem so far identified was what should replace SDATA
 entities in XML DTDs. A structure has been defined for writing
 up the final reports, which included a template for
 individual case studies. Plans for surveying existing TEI 
 projects had been scaled back somewhat but would continue. It
 was planned to hold a further meeting (of the whole group if
 funds permit) June 16/17th in
 Alicante, and the reports should be ready in time for TEI
 AGM. Council thanked CR for her report and for the Group's
 good progress.

* Reporting on the [Character Encoding workgroup](/activities/CE/), CW said that
 


	+ he had drafted a working paper on SDATA entities which had
	 been discussed in some detail, but which the workgroup had not
	 been able to endorse; work on this had now been suspended.
	+ the group was instead making substantial progress towards
	 recommendations for a
	 markup scheme for character set extensions (see
	 [CE W06](https://www.tei-c.org/Vault/Workgroups/CE/cew06.html)). Although only a preliminary draft, this was now
	 undergoing test implementation
	+ the group had requested the new ML workgroup to consider whether
	 or not it was realistic to disallow any kind of CDATA content
	 in attribute values. Without such a prohibition,
	 representation of non\-Unicode characters in TEI documents by
	 elements would be at best problematic.SR reported that the ML Workgroup has briefly considered this
 question. It seemed advisable to get a sense of the scale of
 the problem, and he suggested the editors should review all
 existing TEI attributes, characterising each as tokenizable,
 numeric, or textual. In DTD world, the textual ones should be
 left unchanged; in schema world, however, equivalent child
 elements could be generated. 


Council agreed that further work was needed to decide whether this
 proposal was necessarily restricted to schemaland, how the
 content models and attributes for generated elements should
 be determined, and whether such a scheme might generate name
 clashes. Proposals should be sent to the ML list for further
 discussion. 
 
 Editors1 May to produce categorised
 list of attributes and investigate possible name clashes
CW1 May to propose content models for generated sub\-elements

DD reported that the [Standoff workgroup](/activities/SO) continued to make slow
 progress. Some papers were now available on the web
 site, ([SO W01](/activities/SO/sow01.html) discusses use of Xpointer and gives an overview of the groups
 major concerns; [SO W02](https://www.tei-c.org/Vault/Workgroups/SO/sow02.html) is a discussion of the
 canonical reference scheme described in the Guidelines;
 [SO W03](/activities/SO/sow03.html) is a working paper on graph description); several
 others are in progress and should be available by end of
 April in time for d1scussion at the Council's May meeting. 
 Council was requested to review SO W01 as soon
 as possible.
 
 SB1 Aprilto update SO website with details of papers
 as they become available
DD30 Aprilto make remaining work group drafts available to
 Council
* MP reported that Consuelo Dutschke had now delivered
 extensive documentation of the original TEI MS Description Workgroup's proposals for
 mss
 description, which were now available in MS Word format
 from [MD's
 website](http://www.merrilee.org/tei-mss/). In line with the Manuscript Taskforce's [charge](https://www.tei-c.org/Activities/Council/Working/tcw04.xml), Council now
 requested DB, MD, and MP to review these drafts and identify
 an achievable programme of work for harmonizing them and 
 the [MASTER
 scheme](../../Master/Reference/). This should fall somewhere
 between simply producing a list of differences
 between the two sets of proposals and merging them to a
 single coherent scheme. LB agreed to set
 up a web\-site area for this Task force (Now done: </activities/MS/>) 
 MP, MD,
 DBasap to review available drafts and
 initiate task force activity

* SR reported that the Metalanguage Taskforce had been set up, as
 per [its charge](https://www.tei-c.org/Activities/Council/Working/tcw03.xml), with
 himself as chair, and membership of CW, DD,
 Norm Walsh and Michael Sperberg\-McQueen and the
 editors. In
 discussion it has endorsed the existing 
 literate
 programming model of the Guidelines, and has 
 produced a proof\-of\-concept protype for P5, in which schema definitions using 
 RelaxNG are generated from an extended version of the
 current ODD model. SR is currently working on a replacement
 for the pizzachef (called Roma) which will deliver TEI
 conformant schemas as DTDs or in RelaxNg. Council was
 suitably impressed. Taskforce working documents are
 maintained at </activities/META/>.

* Council endorsed the [charge](https://www.tei-c.org/Activities/Council/Working/tcw01.xml) to set up a joint wg on
 Feature Structures as a new work item for ISO TC37\-SC4\. LR's proposal
 has now been progressed within ISO: an official letter requesting
 status of liaison was to be sent. ISO member bodies have
 three months to comment on the new work item proposal;
 there will be a short meeting on 6/7 July in Sapporo which
 should compile the comments received and instruct an
 editorial workgroup to work on the proposed document. JU will
 be in Japan and may be able to attend the meeting. SR noted
 that producing a free\-standing feature\-structure validation
 module would be an interesting exercise for the new
 metalanguage taskforce.
 
 LR? to send current draft documents to LB
 for the website.
LB/JUimmediate to progress letter requesting liaison
 status
SR? to investigate feasibility of embedding
 Feature Structures eg in Docbook

* Council discussed [documents submitted by Patrick Durusau](/activities/GD/) (PD)
 proposing to set up a work group to redraft current chapter
 on graphs networks and trees. It was felt that the chapter was
 more concerned with
 graphs as an abstract formalism than with
 graphs as lines, and that the basis on which graphic formats were
 selected for discussion in PD's drafts was not clear. The immediate need for
 the TEI was to decide whether or not a chapter on this topic
 should be retained in the Guidelines.
 
 JU and LRimmediate to produce detailed feedback which JU would
 pass to PD

* PW reported that the IMLS Grant application had been submitted on time, and
 that a response should be expected before September. Some
 
 pre\-grant activity would be expected
 before then. JU suggested setting up an e\-mail discussion list
 to include
 Martha Crowley (the program officer). 
 
 PW1 May to set up discussion list, to include all council
 members who did not explicitly opt out

* LR reported that there would be a European call for
 proposals for "e\-content creation" in December for which he was
 working with Alois Pichler on a project called Lyric that
 would involve use of FS and standoff.

* LB reported that optimism about Marie Curie funding had
 proved unfounded. The TEI was named in at least two competing
 EU FP6 bids (ECHO and Hyper). Outcomes would be known in May.






