---
title: "TEI Council Conference Call 25 Apr 06"
date: 2006-04-25
---
# TEI Council Conference Call 25 Apr 06




 
 Times are UTC unless otherwise noted.
 
 Started at 12:07 with SB, DB, LB, JC, MD, SR, SS JW, CW,
 and MZ present. CT had sent mail stating he was ill and
 could not attend; AB sent mail as call was supposed to start
 stating not only would he not be present, but that he was
 resigning from Council. 

  
 
 Previous Minutes
 
 * LB: Ensure \[JC's [P5 HOWTO](/Activities/Council/Working/tcw06.xml)] is
 easily accessible from P5 portion of website LB
 reports done. Editors \& SR reported that subsequent
 to moving from use of
 CVS to use of Subversion (SVN) as content management
 system at
 Sourceforge, we are in the process of reorganizing the
 file structure, chiefly to facilitate the inclusion of
 internationalized version of the Guidelines.
 eds.Resolve remaining unresolved issues
 about new file organization at Sourceforge asap, and report
 on status at Kyoto Council meeting
 JC
 update [HOWTO](/Activities/Council/Working/tcw06.xml) to
 reflect the new structure and check that the
 discussion of SVN procedures introduced in it are all correct.
 as soon as structure decided
* All: Review [SO
 Outputs](http://www3.iath.virginia.edu/pipermail/tei-council/2005/001163.html) Council agreed that SO outputs contain a lot of good, useful stuff,
 much of which needs to be migrated to the
 Guidelines. Some of the material had been already
 incorporated but not yet fully reviewed; other parts it
 was felt would need a fuller technical discussion. One item discussed at some length
 on the
 call was the suggestion to use elements from the SVG
 namespace as the content of
 figureSB
 update his report on SO output
 documents to include recommended dispositions, as a working paper for discussion in
 Kyoto.
 2006\-05\-08
* CT or DP: post to TEI\-MS\-SIG or TEI\-L
 requesting input DT \& CT both absent, so
 discussion of this item was deferred
* CW w/ LB's help: create list of modules needing
 class attention CW reports
 this action has been completed
* CW: assign modules to Council members
 CW reports this action has been completed; LB had posted  [a summary of input received so fartogether with suggested dispositions](/Activities/Council/Working/tcw07.xml), to be
 reviewed later on the agenda.
* SB: post a pointer to the minutes of \[DLF\-TEI]
 meeting SB reported DLF's minutes not yet
 available, but expected later this week.
* SB: bundle up 0\.3\.1 for oXygen SB
 reports that this item was accomplished almost immediately
 — it was easier than anticipated, as SyncRO Soft was
 able to do much of it themselves. Thus oXygen 7\.1 comes
 with TEI 0\.3\.1\.



Physical Bibliography WorkgroupLB expressed concern that the chair of this workgroup
 appeared to be working in isolation, with only a few comments
 from JF appearing on the list. The material posted was of a
 very specialist nature, reflecting the expertise of the PB
 group, but seemed to lack input from TEI experts. all
 review [PB
 documents](/Vault/Workgroups/PB/), and post thoughts (even if only
 "looks fine to me") to Council list.
 2006\-05\-16Such expertise was certainly present in the
 membership of the Group, but perhaps needed some
 encouragement to discuss Murray's proposals in terms of
 how they might relate to the rest of the TEI scheme. Concern
 was expressed that the work had been inadequately publicized.
 CW
 follow\-up on previous request to MM for more prose
 describing the desired goals, the meaning of elements,
 the intended usage, etc.; also perhaps suggest a
 conference call for PB group
 2006\-05\-02
 
 
PersonographyMD reported that a meeting to discuss the  [workingpaper](https://www.tei-c.org/Vault/Workgroups/PERS/persw02.html) prepared by Eva\-Wedervang\-Jensen will meet in Oxford in two day's time.
 He is hoping to have a report, perhaps even with a concrete
 proposal, available for Council to consider in Kyoto.
 
 Attending this meeting will be
 
 * Gabriel Bodard, CCH, King's
* John Bradley, CCH, King's
* Lou Burnard, OUCS
* Charles Crowther, Classics, Oxford
* James Cummings, OUCS
* Matthew Driscoll, Arnamagnæan Institute
* Elaine Matthews, Classics, Oxford
* Fiona Oliver, Ministry for Culture and Heritage, NZ
* Sebastian Rahtz, OUCS
* Paul Spence, CCH, King's
* Eva Wedervang\-Jensen, Arnamagnæan Institute


 Council is grieved to hear that Charlotte Roueché
 (Byzantine and Modern Greek, King's) will not be able to
 attend due to a recent injury, and wishes her a speedy
 recovery.
 
 
Class StruggleCouncil reviewed [TCW 07](/Activities/Council/Working/tcw07.xml). This summarizes issues raised by
 individual reviewers of modules,
 together with suggested dispositions provided by the
 editors. It was noted that this document did not include comments made by SS and DP
 on the
 transcription module, which had not been received; also that
 some of the modules assigned had not yet been commented on.
 SS
 post comments from DP and SS on the transcription module to list
 12:57:01
 
 Reviewing outstanding modules, the following assignments
 were agreed: JW \& MZ
 Look at both dictionaries \& drama modules, post
 to list
 2006\-05\-02DB
 Look at TD (documentation elements, aka
 tagdocs), post to list
 2006\-05\-02DB \& MD
 Look at ND (names \& dates), after personography
 meeting, post to list
 2006\-05\-09
 
 LB agreed to incorporate this material into the document as soon as
 it was received. Council was requested to consider two major issues
 raised so far: the need for a class representing a simpler subset
 of phrase\-level elements for use in the header and other
 meta\-data\-like places; the need for a class similar to the
 existing att.Spanning for use in all cases where
 "Horse\-like" markup was proposed.
 
 SB
 Develop proposal for a new class of phrase level elements
 for use in the content model of elements (e.g. those that only occur in
 teiHeader) which represent metadata rather than
 the full complexity of document markup, for further
 discussion in Kyoto
 2006\-05\-18
 
 It was agreed that the att.Spanning class should be used
 for all cases of cross\-structure pointing, but noted that the
 present proposal (used only in the index element)
 needed further development.
 
 Because it involved a decision made by the class
 subcommittee at its Oxford meeting 2005\-09, the
 question of where note should be allowed, recently
 raised on TEI\-L by Espen Ore, was briefly discussed. It
 seems we need to revisit the decision the class subcommittee
 made in Oxford. At least two separate questions need to be
 considered:
 
 * should foreign have model.phraseSeq as its content,
 and
* should note be in model.phraseSeq


 . LB
 reminded Council briefly of the rationale for the former
 decision and offered to post to TEI\-L in response to John
 Young's query on TEI\-L.
 
 In answer to a query from SB, LB explained that g was
 needed within c since the latter referred to a lexical
 character which might be represented as a combination of Unicode and
 non\-unicode characters.
 
 
Meeting in KyotoWe will be meeting at the Kyoto International Community
 House, which is 2\-3 subway stops from the hotels at which we
 will be staying. We will be housed in two separate hotels
 near to each other, as there was not enough room in any one
 hotel.
 
 Council thanks CW and his colleagues for organizing the
 meeting.
 
 
  
 
 
 
 Council issues a get well soon to the feverish CT.
 
 Call ended at 13:19\.
 
 
  
