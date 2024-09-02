---
layout: page.njk
title: "TEI Council Conference Call 27 Sep 06"
date: 2006-09-27
---
# TEI Council Conference Call 27 Sep 06



  
 
 
 
 Times are UTC unless otherwise noted.
 
 Started \~12:04 with SB, SS, AK, LB, SR, JC, CW, CT, JW, DP, LR
 
 MD had sent his apologies earlier.
 
 
  
 
 Minutes from last meetingCouncil: comment on the ‘short names’ …
* + done


eds.: implement …
* + Implemented except for French — agreed (LB
	 dissenting) to go w/
	 LR's proposal to rename fr/ files to same as en/. SB
	 change French filenames, too
	 2006\-10\-11


CT \& DP: Post proposal of how to link texts and images
* + completed


Council: Read P5 chapter 14\.9 Stand\-off Markup …
* + No one read the chapter and reported. CW suggests we
	 can close this issue.


DB: Report on TD (documentation elements) with
 respect to the class system …
* + DB not present, deferred


SB: Repost summary of the questions pending …
* + SB reports this item has been completed. Furthermore,
	 the changes to the Guidelines that were suggested have
	 been enacted. The only outstanding issue from this round
	 of discussion is that of certainty, accuracy, confidence,
	 exactness, precision, etc. However, another issue has
	 since been raised: how to encode regularizations of
	 non(\-proleptic)\-Gregorian dates. P4, while recommending a
	 specific format for (proleptic\-)Gregorian dates permitted
	 users to use other systems so long as they were documented
	 in a particular manner. After some discussion on this
	 issue we were able to reject some possibilities (e.g.,
	 that the W3C syntax be retained, but without the
	 restriction to (proleptic\-)Gregorian dates), but were not
	 able to definitively conclude how to proceed. Both use of
	 one set of attributes with their semantics declared in the
	 header (ala P4\) was suggested, and two parallel sets of
	 attributes.SB
	 summarize dating attributes issues for Council, with
	 firm recommendations where possible. 2006\-11\-07


SB: find places where a ‘header\-phrase’ class would be useful.
* + Done, see [the result](https://www.tei-c.org/Council/limited_phrase.xml#body.1_div.3). However, after some discussion, we were
	 reminded that there are really two different questions of
	 interest:
		- what elements in the current system would be
		 better if their content models included a limited
		 version of model.phrase;
		 this group includes some elements that are not found
		 in the teiHeader (like figDesc), but
		 excludes many that may appear in the
		 teiHeader because they also can be used as
		 descendants of text in a manner that would
		 require the full model.phrase (e.g. p
		 and name)
		- what parts of the teiHeader would be
		 better if their content models included a limited
		 version of model.phrase,
		 regardless of whether or not it is currently possible
		 (because they might also appear in the transcription,
		 i.e. as a descendant of text)
	 SB had interpreted the action item as only
	 referring to the first of these questions. Council
	 discussed both issues; it was decided that both are worth
	 pursuing. Two
	 mechanisms were identigied for verifying which elements can make use of
	 the limited phrase class, and
	 which require the complete model.phrase. The
	 first was for Council members to scan the list SB produced
	 looking for obvious errors or elements of concern. The
	 second was to produce a schema that makes use of the
	 limited phrase class, and for Council
	 members to use this schema and large quantities of data
	 looking for problems. Council chose the former
	 method, without ruling out use of the latter later (did I get that right? —SB).Council
	 consider list of limited phrase elements and propose
	 refinements if needed
	 2006\-10\-11SB
	 Implement
	 limited phrase system using the
	 elements in the refined version of the list.
	 2006\-11\-08


LR: Explain where macro.glossSeq or model.glossLike
 is not a good idea, but \<desc\> is.
* + LR indicated that he needed a better method of
	 querying TEI to look for these. He was referred to
	 [ED W
	 84](../Drafts/edw84.xml?style=printable); a newer version of this is available
	 from .
	 LR
	 post to Council a list of elements which contain
	 either macro.glossSeq or model.glossLike in their content
	 model, but really should have only desc2006\-09\-29


DP: post to TEI\-OL\-SIG about span alone, deferring
 information about the chapter.
* + Done


CW: Remind JW about posting \<biblItem\>,
 \<biblStruct\>, and MODS discussion
* + CW reports he did so. JW reports he has some notes
	 that he will get out to the group this week.
	 JW
	 Write a document discussing: 1\. bibliographic
	 elements (bibl, biblFull,
	 biblItem, and biblStruct) 2\. How to
	 incorporate MODS into a TEI document 3\. his own and
	 perhaps others' opinions on extent.
	 2006\-10\-01 He reports that MODS is much more of a cataloging
	 approach.


DB: post draft of ‘guiding principles for further development’ document
* + discussion deferred, see [below](backCompat)


Council: read PB document, post to list even if only "I read
 it, it's fine". 
* + Not done. Discussion deferred, see [below](PB).


MD: Rewrite the examples MM provides in the PB
 document using a more generic mechanism
* + discussion deferred, as MD not present


DP: review her own manuscript description work to see
 if anything there would be helpful, and report back to
 list
* + Discussion deferred, see [below](PB).


MD \& DP
* + Discussion deferred, see [below](PB).


LB
* + Discussion deferred. Note: this item was accomplished,
	 DP \& MD are now on the [PB
	 list](https://listserv.brown.edu/archives/tei-pb.html) — SB


MZ: Check whether the monies personography has not
 spent was pre\-budgeted, and whether Council reimbursements
 have been processed yet
* + discussion deferred as MZ not present


SB: post to TEI\-L, announcing that the deadline for a
 feature request to be considered for P5 1\.0 is
 2006\-09\-01
* + SB reports this was done


Council: come up with a list of elements to be
 considered for execution, and submit as a feature request
 on Sourceforge
* Not discussed. Note: this was not done — SB



WGs
 
 PBDP reports that her comments were posted to the PB list,
 and that MM replied. DP has been thinking about this,
 thinks LB's response echoes some of her own concerns.
 Consensus is to keep the conversation going, perhaps with
 DP demonstrating her system. It should be pointed out that
 marking up the formula limits processing as compared to an
 abstract representation.
 
 
PERSCW suggests another meeting, but we're unsure of funds.
 CW
 ask MD if he is willing to take personography
 forward into places/ontologyCW
 ascertain whether or not
 we have funding for a meeting
 
 There is some overlap between
 this WG and the planned activities of the ontology SIG. SR suggests that
 group decide via e\-mail whether or not moving forward
 would significantly change the existing work.
 
 

Document review
 
 MaintenanceConsensus that [DB's
 document](http://lists.village.virginia.edu/pipermail/tei-council/2006/001597.html) is pretty reasonable, and should be
 published. Some suggested that it should be presented in Victoria. LB with DB
 revise DB's draft document as a working paper for Council TC W 08
 2006\-10\-20
 
 
TEXT \+ IMAGE encodingCouncil discussed the [document](http://www.rch.uky.edu/image_encoding.html)
 recently posted by DP \& CT, and then discussed somewhat
 on the list.
 
 It was generally agreed that the document is divided into
 two parts:
 
 * linking text \& image
* incorporating SVG into TEI


 The general feeling was that the first part is
 significant work that requires only a concrete formal
 proposal to be added, a bit more revision before being
 handed to the editors to be folded into the Guidelines
 (either as part of PH or FT).DP \& CT
 revise document somewhat, with an eye towards what
 parts are intended for Guidelines.
 by MM
 
 As for the second part, the consensus was  that SVG should not be incorporated in the
 TEI Guidelines directly, but that instead a sample ODD
 demonstrating how to do this be made publicly
 available.
 
 JW suggests a name other than fax for the attribute that
 points to an element's image.
 
 

Open issues
 
 conformance— action still on MZ and JC; LR has points
 he intends to contribute. All Council members should continue to
 contribute to discussion. all
 contribute to conformance discussion
 2006\-11\-15
 Will be on agenda for next conference
 call.
 
 

Other business
 
 feature requestsLack of time precluded full discussion of this initial
 digest. LB asked for Council's endorsement of his
 provisional prioritization: this was given, modulo some
 corrections (see appended list). Further topics noted:
 
 extent
* Three uses: how big (for librarians), like
 biblScope, or structured data. Action on JW
 (see above) to discuss the issue.



 next call 11\-22; reports CW to discuss w/ editors, and post to council
 
 

Meetings
 
 MMAs we are out of time, very little discussion of reports
 took place. CW will discuss them with the editors and post
 to the Council.
 
 
next callNext conference call is tentatively scheduled for Wed 22 Nov 06 at 12:00\.
 
 


 
 SF Feature requests
 
 LB had posted to the list a number of items the following summary
 of issues for resolution. The agreed resolution is indicated as
 follows:
 
 * 1540221: Add age as a child of person analogous to sex (YES)
* 1524368: Change content model of msIdentifier to reference class
 model.placeLiLike\_sequenceoptional (YES, if MJD and DB agree)
* 1442353: Add listPerson to att.typed class (YES)
* 1550795: Change content model of catDesc to reference
 model.glossLike (MAYBE, at SB's request)
* 1058736: Add new stamp element to MS module analogous to seal
 (MAYBE; or generalise?)
* 1007370: Add new theorem element as specific kind of ab (not clear
 in which module to put it) (MAYBE: council requested more information)
* 1551357: Relax the content model of app to permit generic note
 element as well as or instead of the structured rdglem
 pairs. This probably needs a class. (MAYBE)
* 1007369: Define a set of default values for rend to indicate block
 and numbering options (NO)



  
 
 
 
 Call ended at 14:06\.
 
 
  
