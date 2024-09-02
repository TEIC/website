---
layout: page.njk
title: "Notes from TEI Council Conference Call of 24 Feb 06"
date: 2006-02-24
---
# Notes from TEI Council Conference Call of 24 Feb 06




 
 All times are UTC unless otherwise noted.
 
 Call started at 12:06 with CW, DP, SB, JW, AB, LB, SR, MD,
 CT, DB; absent were MZ, SS, LR, JC, although JC had sent
 along his apologies in advance.
 
 
Review of the minutes and action itemsJC: Review and then disseminate the P5 howto
* + JC reported prior to the teleconference that while
	 there was still room for work on this document, it had
	 been reviewed and disseminated (posted to TEI\-L 22/23 Dec), and that no one had
	 commented upon it.LB
	 Ensure this document is easily accessible from P5
	 portion of website
	 completed


SB: Circulate summary report on SO work\-group outputs to date
* + SB reports this was accomplished. It was
	 agreed that Council members should review the current drafts
	 listed in [Syd's
	 summary](http://www3.iath.virginia.edu/pipermail/tei-council/2005/001163.html), and SB should revise them based on
	 comments received.All
	 Review [SO
	 Outputs](http://www3.iath.virginia.edu/pipermail/tei-council/2005/001163.html)2006\-03\-11


LB: to update the Activities web\-page
* + LB reports he has updated this page as much as he can


CW, LB: Draft charge for personography activity, including deadlines and workplan
* + Done


CT: Initiate and facilitate production of note on
 Page Image Management; report on progress to next Council
 meeting
* + CT (\& DP) report that work is progressing; see
	 . CT reports that after
	 some discussion and consideration he concluded that this
	 activity would be best situated as one of the [Manuscript
	 SIG](/Activities/SIG/Manuscript/index.xml?style=printable)'s activities, rather than creating a new SIG.
	 CT or DP
	 post to TEI\-MS\-SIG or TEI\-L requesting input
	 2006\-03\-12


LB: Ensure that ST corrections are completed
* + LB reports this item completed


SB: organize a proposal on how best to prosecute the class struggle
* + SB reports that while this item was completed (i.e., a
	 [proposal
	 was posted](http://www3.iath.virginia.edu/pipermail/tei-council/2005/001164.html)), neither he nor anyone else followed
	 up appropriately on the proposal, and thus the class
	 struggle has stagnated. It was agreed to follow LB's
	 counter\-proposal, using e\-mail on the entire Council list.
	 It was further agreed that rather than processing modules in
	 some sequential order, each member of Council will be
	 assigned some modules for which to propose what the class
	 structure should be. This process needs to be undertaken
	 quite soon.
	 CW w/ LB's help
	 create list of modules needing
	 class attention
	 2006\-03\-04CW
	 assign modules to Council members
	 2006\-03\-11


CW: Investigate options for holding council
 meeting/TEI training meeting in Kyoto, reporting back by
 next call
* + Done, discussion later on the agenda


SB/SS/NS: Report back from TEI Libraries meeting at
 next TEI Council call
* SB reported that the meeting went well. The DLF goals
 were to revamp the [TEI in
 Libraries](http://www.diglib.org/standards/tei.htm) document, and begin the process of
 creating a vendor DTD or
 TEI Tight which could be used for
 submitting texts to vendors for capture by those
 institutions without the resources to create such a schema
 on their own — this is the same schema that TEI
 would like to use when aggregating requests for
 digitization as a member benefit. The TEI goals were to
 ensure that the results of the DLF process were freely
 available to TEI users, to encourage participants to
 consider P5, to ensure that the P4 schemas produced were
 not egregiously problematic for upgrading to P5, and to
 solicit librarian input on P5\.
 SB
 post a pointer to the minutes of this meeting
 as soon as the minutes are available



Review of WG etc. progress
 
 PB
 MM \= Murray McGillivraySB reports that MM has posted some documents with some
 suggested sample encodings of collation formulae to the PB
 list, and that JF has commented on them, but no one else
 has. LB has put the documents on the website off the [Physical
 Bibliography Work Group](/Vault/Workgroups/PB/) page, under the headings
 Manuscript example and Print example. LB
 says that progress is being made, Council members should
 read \& comment.
 
 
personographyMD reports that the preliminary report by the graduate
 student Eva Wedervang\-Jensen, whom TEI paid to research
 other biographic XML schemes, has been put on the web at
 .
 Eva looked at \~10 systems for biographical data in XML
 (the list is in the document). MD notes that, because it
 started life as an MS Word document which was later
 hand\-converted to TEI, it has some significant formatting
 problems which he hopes to iron out soon; however, he does
 not want to post it to TEI\-L until these formatting
 problems have been fixed.
 
 The plan is to have a face\-to\-face meeting about this,
 hopefully soon. The exact reason for and makeup of this
 meeting was discussed. The intent would be to gather some
 non\-TEI folks who are practiced in this field, to solicit
 their opinions on our proposed scheme, in particular
 whether or not they would use it. We are looking for
 anxious implementors of this scheme.
 
 Council members should send names of individuals who
 should be involved in the personography face\-to\-face to
 the council list or directly to MD. End of March a
 possibility for this meeting. 


P5The newest pre\-release alpha\-test snapshot of P5, whose
 Sourceforge number is 0\.3\.1, was released 2006\-01\-30\.
 This is a significant improvement over the previous
 snapshot. LB apologized to Council for not having a written
 progress report prepared ahead of the conference call, but
 promised to have one ready for inclusion in these minutes,
 which he promptly did. For details see the [release notes](/release/doc/tei-p5-doc/readme-0.3.1.html).
 
 It was suggested that the newest snapshot should be
 included with oXygen.SB
 bundle up 0\.3\.1 for oXygen
 2006\-03\-18
 
 A revision of the TEI Lite tutorial, making it conformant
 with TEI P5, was also undertaken. A preliminary draft of
 this revision was circulated to Council mid February, and
 also to TEI\-L. Major differences are summarised in .
 
 
MeetingsNext conference call is tentatively scheduled for Tue 25 Apr @ 12:00 UTC.
 
 
MiscellaneaLB \& SB suggest that the Class
 Struggle is currently high priority.
 
 Council members reviewing documents should post their
 thoughts about the document reviewed, even if it is
 nothing more than It's OK.
 
 

 
 Meeting ended \~13:30\.
 
 
  
 
 Changes to TEI Lite (P5 version)
 
 * The element expan wasn't previously
 available. I have added it to complement abbr and
 revised the discussion of how abbreviation should be
 handled, in line with the revisions for corr,
 reg, orig, sic etc. (and
 introduced choice, obviously).
* The series element, although listed as
 available in U5, isn't actually present in any version of
 the teilite dtd since 2004\. I've removed discussion of
 it.
* The elements gi, code,
 ident, kw were previously added as
 extensions; all but the last are available from the
 tagdocs module, so I've taken them from there now, adding
 att and val (but not tag) for
 good measure. kw is gone.
* I added teiCorpus: it has always been
 discussed in U5, but not actually included in the DTD for
 no very good reason.
* Numbered divs are removed. This required a rather
 unpleasant manual hack of the ODD which should only be
 regarded as provisional.
* The discussion of linking and pointers was revised in
 line with the new P5 regime.
* The discussion of figures and graphics was also
 revised in line with how it is now presented in P5, and
 the elements graphic and binaryObject
 added.
* The discussion of character entities has been
 removed




