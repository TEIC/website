---
title: "Notes from TEI Council Conference Call of 08 July 05"
date: 2005-07-08
---
# Notes from TEI Council Conference Call of 08 July 05




 
 Call started at 13:03 UTC with
 
 * Syd Bauman
* Lou Burnard
* James Cummings
* Matthew Driscoll
* Julia Flanders
* Sebastian Rahtz
* Natasha Smith
* Perry Willet
* Christian Wittern



  
 
 Review of ActionsThe following action items from the [previous minutes](/Activities/Council/Meetings/tcm17.xml)
 were reviewed:JC: stylesheet HOWTO
* + Progress has been made, although the document is not
	 finished. Parts of the underlying technology that the
	 document describes may be changing soon. Unless there
	 are major such changes, James expects the stylesheet
	 HOWTO to be complete by 01
	 Aug.JC
	 Finish HOWTO for stylesheet module
	 2005\-08\-01


MD: post summary of comments received on
 MS, with proposed responses
* + The summary of comments received was posted
	 immediately before the conference call, and a more
	 thorough one is expected in one week. MD post more thorough
	 version of comments received, and also proposed
	 responses 2005\-07\-15 The comments
	 received so far identify lots of small problems, but no
	 major issues overlooked or gotten wrong were pointed
	 out. Lots of classic problems that have been discussed
	 repeatedly were also brought up. In addition, there were
	 reports of problems (in particular missing features)
	 that were false, i.e. the system does permit the desired
	 encoding; this indicates either that the reviewer did
	 not carefully read the documentation, or that the
	 documentation insufficient. It was suggested, without
	 dissent, that MD produce a consolidated report
	 addressing comments received divided into those three
	 broad categories: corrections made, documentation
	 improved, well\-trodden paths.


MD revisions to manuscript description
 chapter
* + Due before members
	 meeting, MD certainly hopes it will be done by
	 then


Roma under Windows
* + deferred, AB not present


P5 instructions for XMetal \&
 XMLSpy
* + deferred, AB not present


JW: P5 instructions for oXygen
* + Have been posted to list and then to [TEI website](../Software/oxygensetup.xml).
	 JW will be adding a section on handling already existing
	 files (as opposed to creating new ones) on the basis of
	 useful feedback from JC.


MD: create some examples demonstrating
 the different approaches (of assassinating
 attributes)
* + MD had not done so, in the belief that the examples
	 included in footnotes 2, 3, \& 4 of the minutes from
	 the Paris meeting were sufficient. LB would like
	 examples that are of real encodings of real\-world
	 problems. LB look at
	 list of attributes that need to be assassinated,
	 report back to Council which ones are trivial (e.g.,
	 because element is empty and there is only 1 such
	 attribute), not difficult, or present real problems
	 that might need this approach 2005\-08\-01


SB: attributes \& datatypes
* + Discussion deferred to [below](sai3.4).


JF \& PW: post discussion of various
 methods for handling reg
 of the various naming elements
* + Not completed yet, but JF \& PW expect to post by
	 end of day today.


LB: Report on progress of discussions of
 index attributes
* + Done.


JF \& EV: rationalization of cert attribute
* + JF reports that with EV having dropped out and no
	 one stepping up to replace him, she has been somewhat
	 delayed. Nonetheless, she is hoping to send out a draft
	 by next week. JF
	 post draft document discussing rationalization of
	 cert attribute (see
	 first item in section [Some
	 open issues](https://www.tei-c.org/activities/council/meetings/tei-council-meeting-2/) of previous minutes).
	 2005\-07\-16


SB: make all resp attributes into
 pointers
* + Scheduled for end of August, still planning to do so
	 then.


LB: research whether loc performs the same function
 as cref
* + LB reports this has not been done; will do so before
	 next call. LB Report
	 to Council on results of research whether loc performs the same
	 function as cref1 week before next call


SB \& DD: finish SA discussions of
 XPointer
* + SB reports this was deliberately delayed due to
	 attribute \& datatype project. Syd \& David have a
	 meeting scheduled for Mon 11
	 Jul. CW is looking for a plan for how we expect
	 to move forward on surrounding issues (e.g., MIME type
	 and XPointer schema registry). SB with DD produce brief report on
	 process for getting XPointer schemes registered
	 2005\-07\-22


SB: fix P5 bibliography using
 bibl, report on usability of
 bibl
* + SB reports, like SA, deliberately delayed due to
	 attribute \& datatype project.SB BIBL 2005\-09\-08


JW \& NS: quick report on progress of
 the header element mapping
* + A very brief report has been posted. JW reports that
	 they are not expecting to recommend actual significant
	 changes to header, but do expect to recommend the need
	 for, and to write, instructions on using namespaces and
	 where to put other metadata. CW wonders of TEI documents
	 should point to their parent METS
	 documents.


CW: Look at current epigraphical
 standards, report findings
* CW has made some progress and posted results. CW had
 informed the epiDoc project folks of the project in HD
 and a plan to produce a customization for that project,
 with a focus on how to describe the objects. Tom Elliot
 responded today and said that this sounds interesting.
 He sent some information about what he and others are
 doing and said that their main aim is more towards a
 best practice approach, in other
 words to guide epigraphers with the encoding, rather
 than with the description. There are, according to Tom,
 debates about where to put the descriptive metadata
 (header vs. body) and how to do them, so any development
 here would be welcome. He was also happy seeing the TEI
 move in this direction and would welcome (and
 collaborate on) a possible epDescription chapter in the
 future.




 
 Review of WG etc. progress
 
 
 
 Standoff MarkupSee
 
 
Feature StructuresLB reports that chapter is still out for review in ISO
 process. Meeting to resolve comments garnered during this
 process will be Mon 22 Aug
 in Warsaw.
Physical BibliographyJF reports that Murray McGillivray has hit the ground
 running, posting several interesting questions in the past
 few days. JF has responded and will ping others in the
 group to respond or to drop out.JF wants to know how closely PB should interact with
 MS.
 It was pointed out that most of the work of MS is
 currently in the hands of its chair (MD), and that further
 work is needed. It was also pointed out that the MS
 chapter has gaps, including collation, which it would make
 sense for PB to fill. CW suggests PB report to Council,
 which can then see if they wish to charter new group or
 take other action.
 
 
biblItemSB reports that per request of Council he has made no effort in
 this area, pending the results of the BIBL action item
 (see ).

 
 IHSItem was covered in , above.
 
 


 
 P5 progress
 
 principles for publication of snapshotsAfter some discussion, there was general agreement
 that
 Sourceforge releases (as opposed to
 the continuing maintenance in the CVS tree) of the source
 ODDs, the derived HTML, and the stylesheets that convert
 the former to the latter can be made without explicit
 Council approval. There were three suggestions on when
 such releases would occur: a pre\-defined timetable; when
 significant updates occur or have accrued, based on the
 editors' judgement; and at Sebastian's readiness to do so.
 This issue was left unresolved, but it was agreed by all
 that a new release should be orchestrated very soon,
 probably within a week or two.Eds
 ensure that P5 is in sufficient condition for a
 release
 2005\-07\-19SR
 after Eds give go\-ahead, create new release
 2005\-07\-22It was generally agreed that the HTML version of P5 that
 is available on the TEI website should be the same as the
 most recent Sourceforge released version.
 
 
directory layoutCouncil agreed to pursue the two\-directory structure
 recently outlined by SR, presuming Debian does not object.
 SB \& SR will hammer out the details over the weekend
 in the hopes of having a structure ready (for use by
 SyncRO Soft) by Monday.SR \& SB
 Hammer out details of directory layout
 2005\-07\-11

 
 infrastructure for translations of gloss and descNot discussed.
 
 
on Attributes and DatatypesConcern was expressed over the use of W3C pattern facets,
 particularly in the
 datatype tei.data.duration.
 There was disagreement about the general principle of
 whether or not the TEI should force itself to stick to
 strict W3C datatypes, but it was clear that the issue
 required more discussion.It was generally agreed that further evaluation of the
 proposals would be needed before fruitful discussion could
 occur. It was suggested (separately) that these issues be
 resolved both at the class meeting at
 the end of September and before that meeting.
 
 

Other businessCouncil agreed that an element to go inside figure
 and contain binary data was acceptable. However, the
 consensus was to use a more descriptive name than
 bob. It was suggested we look at what METS calls
 binary objects.Council placed a standing action on the editors to produce
 list of changes that have been made to (the CVS source tree
 of) P5 one week before each conference call or meeting of
 Council.
 
 

 
 Next CallSeveral dates were discussed, without final resolution.
 
 
  
 
 
 
 Call ended at approximately 14:30\.
 
 
  
