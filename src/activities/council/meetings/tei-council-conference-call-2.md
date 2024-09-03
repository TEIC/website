---
title: "TEI Council Conference Call 25 Jul 06"
date: 2006-07-25
---
# TEI Council Conference Call 25 Jul 06




 
 Times are UTC unless otherwise noted.
 
 Started at 12:03 with MD, SB, AK, SS, LB, CW, JC, DB, MZ,
 DP; SR \& LR sent apologies prior to the call, and JW had
 indicated he would likely be unavailable due to a delayed
 flight.
 
 
  
 
 Review of the minutes and action itemsJC: Update HOWTO to reflect the new structure and
 check that the discussion of SVN procedures introduced in
 it are all correct
* + JC reports this was done, but had not been announced
	 to Council (until now)


JC: suggest new file names.
* + JC reports this item was done approximately 10 minutes
	 ago. Council comment
	 on the short names version near the
	 end of JC's post [Possibilities
	 for new file names.](http://lists.village.virginia.edu/pipermail/tei-council/2006/001580.html) of earlier
	 today. eds. implement JC's short
	 names suggestion unless objections are
	 raised 2006\-09\-01


CT and DP: Come up with a proposed text of how to link texts and images
* + DP reports this item is still being worked onCT \& DP
	 Post proposal of how to link texts and images
	 2006\-09\-01


SB: See if an similar xpointer has been provided in W3C
* + SB reports that CT had completed this item before the
	 end of the meeting in KyotoThe answer is yes,
	 there is already an xpointer scheme for pointing at a
	 particular part of an SVG\-wrapped image (whether the image
	 itself is JPG, PNG, SVG, or whatever). It is the svgView scheme using the
	 viewBox parameter. E.g.
	 `http://www.picsRus.org/path/to/pic.svg#svgView(viewBox(10,10,640,480))`.
	 \[CT—did I get that right??]


Council must read chapt 14\.9\.1 p5\.
* + This item was interpreted to mean that all Council
	 members were supposed to have read P5 chapter 14\.9\.1; only a
	 few did. The item was expanded slightly with a new due
	 date.Council
	 Read P5 chapter [14\.9](/release/doc/tei-p5-doc/en/html/SA.html#SASO) and report
	 that you've done so to the list. (Even if you have
	 nothing particular to say.)
	 2006\-08\-12


CW: follow\-up on previous request to MM for more prose
 describing the desired goals, the meaning of elements, the
 intended usage, etc.; also perhaps suggest a conference call
 for PB group.
* + CW reports MM has sent new material to him, which had
	 been forwarded to [the
	 list](http://lists.village.virginia.edu/pipermail/tei-council/2006/001526.html) and generated some discussion


JW and MZ: Look at both dictionaries drama modules, post to list
* + This item was interpreted to mean that these modules
	 were to be looked at with respect to the class system. MZ
	 reports this was done while Council was still in Kyoto.


DB: Look at TD (documentation elements, aka
 "tagdocs"), post to list.
* + DB reports will do this soonDB
	 Report on TD (documentation elements) with respect
	 to the class system, and post to the list.
	 2006\-08\-05


LB: motions that the Council identify within a week a
 list of specific items in the current proposals that need to be addressed.
* + LB reports this was action has been disposed of \[?...?]


SB: fix listRef from `ptr*` to
 `ptr+`
* + SB reports this was completed


SB: merge date and dateStruct.
 Same with timeStruct?
* + SB reports that this was done, but there are still
	 questions pending which had been posted and
	 generated [some discussion](http://lists.village.virginia.edu/pipermail/tei-council/2006/thread.html#1399).
	 SB
	 Repost a summary of the questions pending, if
	 possible with a definitive suggestion which will be
	 implemented if no one objects


LB: Solution: macro.xtext doesn't cut it. Needs to be
 reviewed. What, if anything, should replace it?
* + This item arose from our discussion in Kyoto of the
	 sub\-components of dateStruct and
	 timeStruct (in particular, day,
	 geog,
	 hour,
	 minute,
	 month,
	 second,
	 week, and
	 year), each of which currently has content macro.xtext. It was pointed out in Kyoto
	 that
	 this content model is far too limited — it is
	 impossible to encode that some letters are supplied in the
	 name of the month, e.g. One suggestion was to replace macro.xtext with macro.phraseSeq.
	 In Kyoto it was agreed that
	 macro.xtext provided
	 insufficient flexibility, but there was some concern that
	 macro.phraseSeq permitted too
	 much. LB agreed to review the situation and report back to
	 Council with a recommendation. LB reports that he has since
	 changed his mind, and now believes that
	 macro.xtext is sufficient.
	 Furthermore, it seems that many on the call believe that
	 these elements (except perhaps for geog) serve no
	 useful purpose. It was suggested that we investigate the
	 removal of these and perhaps other elements. (See [below](kill).)


SB: Change region, country to
 macro.phraseSeq instead of
 marcro.paraContent
* + SB reports this has been completed


LB: Add model.phrase to
 [TCW07](/Activities/Council/Working/tcw07.xml)
* + LB reports that this was done, and that he posted some
	 questions on 10 Jun


Editors: Improve wording. Where does the personography stuff go?
* + LB reports this item is partially done —
	 personography has been inserted into into ND (names \&
	 dates), but it may need to be moved elsewhere, and further
	 work on the chapter is needed.


Editors: Fix manuscript desc modules dependencies on
 names and dates in current architecture
* + LB reports this has not been done, but that he has a
	 plan for accomplishing it


Editors: see if there are other interdependencies
* + LB reports this has not been completed, but there
	 has been discussion on list in this area


SR: see if there is a way to implement moral dependencies.
* + LB reports that some discussion has occured on this
	 topic. After some discussion on the issue, the
	 general consensus is that we do not need module
	 dependency


SB: find out places were an element is place like and datalike
* + SB explained that this item refers to part of the
	 header\-phrase class project. While
	 there has been much discussion about what a reduced
	 phrase\-level model class would look like, we have not yet
	 ascertained where such a class could be used. SB
	 reports that, per his previous post on agenda
	 items, this has not yet been done.SB
	 find places where a
	 header\-phrase class would be useful.
	 2006\-08\-08


Editors: Make a new class model.setting part contain
 model.pLike ... \-rs
* + LB reports this was done on 12 Jun


Editors: make a new class whose only member is desc
 that would replace some of the occurrences of macro.glossSeq
* + SB explained that this action item arose in Kyoto when
	 it was pointed out that there are many content models that
	 use the macro macro.glossSeq or the class model.glossLike where many of the
	 permitted elements do not make sense, probably only
	 desc is desirable. LR was a main proponent of
	 this position.LR
	 Explain where macro.glossSeq or model.glossLike is not a good idea,
	 but desc is.


DP: contact the overlap group and give them a report and get
 feedback on span
* + DP reports she had been waiting for SB to update NH (the
	 multiple hierarchies chapter)
	 DP
	 post to TEI\-OL\-SIG about span alone, deferring
	 information about the chapter
	 2006\-07\-25


JW: discuss biblItem, biblStruct, and MODS
* + This has not yet been accomplished. CW
	 Remind JW about posting biblItem,
	 biblStruct, and MODS discussion.
	 ASAP


DB: draft document of guiding principles for further
 dev of p5
* + DB reports he has solicited input from Council, and has started
	 work on a document, which is not quite complete
	 DB
	 post draft of guiding principles for further
	 development document
	 2006\-08\-01


LB: report on Terminology Chapter
* + No one can recall what was supposed to be reported on
	 for this item, so LB is unsure whether it has been
	 accomplished or not. What LB knows about the status of this
	 chapter and the editors' opinions can be found in [TC W 08](/Activities/Council/Working/tcw08.xml)


LB: Replace the current TEI core module with smaller cores
* It was generally thought this was not an action item
 intended for near\-future implementation. Some thought it was
 not truly intended as an action item at all, others that it
 was intended as a post\-1\.0 item. In either case, it was not
 supposed to have been done, and has not been.



Review of WG etc. progress
 
 PBMD thinks that Peter Kidd, Richard Gartner, \& LB's
 [document
 of 1997](http://users.ox.ac.uk/~lou/wip/MS/msodd.htm#MSCOLL) may describe a more sensible approach. Council
 read [PB
 document](http://www.ucalgary.ca/~mmcgilli/PB/PBdraft%2014%20July.htm), post to list even if only "I read it,
 it's fine"
 2006\-08\-01 MD \& DP think that the PB draft MM posted
 covers a lot of ground, and that perhaps something
 more general would be better. MD
 Rewrite the examples MM provides in the PB
 document using a more generic mechanism
 none
 MD also suggests looking at
 Prague's MASTER\+.
 DP
 review her own manuscript description work to see
 if anything there would be helpful, and report back to list
 2006\-09\-20MD \& DP
 Look at MASTER\+ to see if anything there would be
 helpful, and report back to list
 2006\-09\-20LB
 ask PB group if MD \& DP could be
 added to group
 
 
PERSMD reports that the personography activity has USD 2500
 in funds allocated but not spent. The group could spend
 some of this money working on places, place names,
 pointing to canonical form of a name (i.e.,
 regularization).MZ
 Check whether the monies personography has not
 spent was pre\-budgeted, and whether Council
 reimbursements have been processed yet
 
 

Towards 1\.0 release prioritiesOn the issue of a re\-write of TC (Critical Apparatus),
 Council decided we could postpone the re\-write until after
 1\.0 if needed, with the idea that if a new mechanism for
 text\-critical markup is introduced, the old one would still
 kept for compatibility, and thus would not break any
 existing P5 documents.
 
 Council discussed the issue of backward compatibility and
 what it means for future releases of the Guidelines. No
 particular decisions were reached, but some of the ideas
 discussed will likely be incorporated into [the document DB is
 working on](principles).
 
 After some discussion, the following general deadlines were
 suggested.
 SB
 post to TEI\-L, announcing that the deadline for a
 feature request to be considered for P5 1\.0 is 2006\-09\-01
 2006\-07\-28Council
 come up with a list of elements to be
 considered for execution, and submit as a feature
 request on [Sourceforge](https://sourceforge.net/tracker/?func=add&group_id=106328&atid=644065)2006\-09\-01eds.
 class system review and touch\-up
 2006\-09\-01MZ
 Submit first draft of re\-writes of chapters CF
 (conformance) and MD (modifying) to editors
 2006\-09\-18eds.
 survey or triage of feature requests
 2006\-09\-21
 
 It was noted that chapter review is an on going action, and
 won't be finished until everything is finished
 
 
Other businessNo other major items were brought up for Council's
 consideration.
 
 
MeetingsNext telephone conference call is scheduled for Wed 27 Sep 06 at 12:00\.
 
 
  
 
 
 
 Wrapped up at 13:28\.
 
 
  
