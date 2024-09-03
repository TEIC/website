---
title: "TEI Council Meeting"
creator: David Sewell
date: 2009-10-15
---
# TEI Council Meeting






The TEI Council teleconference meeting took place on Tuesday 15 October 2009 from
 14:00
 to 15:45 UTC.



Participants: Gabriel Bodard (GB), Peter Boot (PB), Lou Burnard (LB), James
 Cummings (JC), Elena Pierazzo (EP), Dot Porter (DP) Sebastian Rahtz (SR), Laurent
 Romary
 (LR, Chair), Paul Schaffner (PS), David Sewell (DS, minutes).


Council members unable to participate: Dan O'Donnell.





 Change in Council terms?
 
 LR introduces a proposal from TEI Board to increase TEI Council terms from 2 to 3
 years.
 Board is concerned that there is too much turnover with the 2\-year terms, and that
 a large
 election slate is required at each election. Consensus of Council is that the status
 quo
 is working; we just need to encourage good candidates to stand for election and to
 continue in office so long as they are willing. 


LR will report to Board that we recommend no change


 Member resignation
 
 LR reports that Arianna Ciula has recently tendered her resignation from Council,
 citing
 the demands of her new position which remove her from active involvement with TEI.
 Council
 accepts with sympathetic regrets, appreciation for Arianna's past service, and best
 wishes.




 Discussion of Sourceforge bugs and feature requests
 
 We discussed open [Sourceforge](https://sourceforge.net/tracker/?group_id=106328) bugs and feature requests, in that order, categorized using our
 color\-code conventions ("green" for clear action, "amber" needing moderate discussion,
 "red" complex or problematic issues).



 Bugs
 
 Open items assigned to SR were not discussed as he is addressing them independently.
 See also the comments for each item, linked from the item number.


[2812295](https://sourceforge.net/tracker/?func=detail&aid=2812295&group_id=106328&atid=644062), 
 graphic should allow 
 desc child* Accept LB's proposal
[2714682](https://sourceforge.net/tracker/?func=detail&aid=2714682&group_id=106328&atid=644062), 
 biblScope in Imprint?* LB wants to leave for more consideration. LR says essential for next release.
 Agree to leave as amber; needs more work.


Open "green" bugs: LB is clear on how to implement fixes. 
 LB: fix
 and close green bugs.





 Feature Requests
 
 [2830815](https://sourceforge.net/tracker/?func=detail&aid=2830815&group_id=106328&atid=644065), vesta: convert multiple schemata* SB: Vesta is still experimental, not a core deliverable. It doesn't affect next
 release, hold off on action.
[2859355](https://sourceforge.net/tracker/?func=detail&aid=2859355&group_id=106328&atid=644065), 
 subst should permit textual data* EP explains rationale for the request. Should be classed as amber, needing more
 discussion. 
 EP: supply use case examples
[2859183](https://sourceforge.net/tracker/?func=detail&aid=2859183&group_id=106328&atid=644065), Make all milestoneLike elements spanning* Needs more discussion. Amber.
[2242434](https://sourceforge.net/tracker/?func=detail&aid=2242434&group_id=106328&atid=644065), element for text suppressed by the editor* LB wants specification w/examples of use and some text. 
 SR \+
 EP: draft something for further discussion
[2728061](https://sourceforge.net/tracker/?func=detail&aid=2728061&group_id=106328&atid=644065), Add 
 target to 
 relatedItem* PB says we did decide to implement this; we just need examples. Main question is
 to decide whether 
 target and element content are mutually exclusive. PB
 feels that 
 target is for simple cases, content used for complex elements.
 LR has found precise use cases. LB agrees to greenlight, under mild protest.
[2728068, suggested values for relatedItem/@type](https://sourceforge.net/tracker/?func=detail&aid=2728068&group_id=106328&atid=644065)* We need examples. 
 PS: supply examples
[2783323](https://sourceforge.net/tracker/?func=detail&aid=2783323&group_id=106328&atid=644065), add 
 from and 
 to to 
 choice* LB sees problems with the proposal, we agree to defer discussion.
[2794512](https://sourceforge.net/tracker/?func=detail&aid=2794512&group_id=106328&atid=644065), move 
 space to core module* LB doesn't think good idea; not convinced it's common enough in texts to warrant
 the change. JC: why not just include transcription module in customizations? LR: any
 bad side effects of moving it? LB: core module is already bloated. LR: we need to
 discuss the general nature of core modules. PS: we need more discussion of the
 semantics of textual spaces. Keep this amber. 
 DS \+ PS prepare a
 short discussion of issue for our next FTF meeting.
[2798963](https://sourceforge.net/tracker/?func=detail&aid=2798963&group_id=106328&atid=644065), add 
 role to 
 author* Previously, 
 role was added to 
 name, so there is some
 precedent. If 
 author were member of att.naming, it would get 
 role.
 LR: for scientific publishing, 
 biblStruct is OK except for a few things, this
 is one. It's important to be able to identify corresponding author. We keep this
 amber, will discuss further.
[2811234](https://sourceforge.net/tracker/?func=detail&aid=2811234&group_id=106328&atid=644065), add 
 ref to 
 material* LB has noted that there's nothing obvious to point to from 
 ref her. GB:
 it is useful to be able to point to a description of a material from individual
 
 material elements. LB: we don't have clear consensus, defer to FTF.
 Agreed.
[2811239](https://sourceforge.net/tracker/?func=detail&aid=2811239&group_id=106328&atid=644065), new element 
 object* Merge with preceding and consider jointly.
[2812634](https://sourceforge.net/tracker/?func=detail&aid=2812634&group_id=106328&atid=644065), 
 docStatus on 
 edition* Request for this arises mostly from born\-digital documents, to indicate the state
 of a document (edition). LR thinks we should use attributes the same way in
 revisionDesc. Keep this amber, needs description and examples. 
 SR
 will work up a suggested implementation
[2834505](https://sourceforge.net/tracker/?func=detail&aid=2834505&group_id=106328&atid=644065), 
 cert on 
 choice and model.choicePart* JC: the point would be to allow nested 
 choice elements, assigning
 relatively probablities to each. LB has concerns and requests amber status. LB
 suggests that this discussion incorporate [2862161](https://sourceforge.net/tracker/?func=detail&aid=2862151&group_id=106328&atid=644065) (Allow certainty etc. in "empty" elements)


In connection with the preceding ticket, we need to revisit the use of 
 match
 and related attributes to indicate certainty. 
 GB: create a new
 ticket.



[2411994](https://sourceforge.net/tracker/?func=detail&aid=2411994&group_id=106328&atid=644065), Define canonical way of referencing TEI element definitions* Awaiting implementation of proposed Vault archiving.
[2507305](https://sourceforge.net/tracker/?func=detail&aid=2507305&group_id=106328&atid=644065), Alignment and documentation of sound files* Presents some of same issues as 
 facsimile. Needs further discussion.
 Should be merged with [2724997](https://sourceforge.net/tracker/?func=detail&aid=2724997&group_id=106328&atid=644065), "Cater for audio/video facsimile"
[1934586](https://sourceforge.net/tracker/?func=detail&aid=1934586&group_id=106328&atid=644065), Chapter Revision: Critical Apparatus* LB wonders why this is a Sourceforge ticket. Essentially, it's a reminder of
 needed work. EP: MS SIG wants to undertake a revision w/a working group. Need to
 identify a chair. We agree to close the ticket and ask the MS SIG to submit specific
 tickets as needed.



Of the Green items, per LB the only problem is [2531384](https://sourceforge.net/tracker/?func=detail&aid=2531384&group_id=106328&atid=644065), "Rationalise application of 
 target". (The basic issue is
 that 
 target is defined in several different ways for different elements, and
 differs in optionality and data type.) LR: it would be nice to have a single
 
 target attribute with a defined syntax. It would clarify TEI to outside
 world to have single mechanism for pointing with 
 target. SR: we can still use
 Schematron to constrain to a single token. Q: what do we do about the existing
 
 targets, allowed on 3 elements? Consensus: we deprecate. Convert to
 Amber.





 2009 Members Meeting: Council Report, etc.
 
 LR ask that all Council members report to him via email their 2008–9 activities within
 the next two or three days, along with other items that should be added to the report.
 LR.
 will compile and send to Council.


All: send notes to Laurent.
LR will be giving a paper on the future of ODD. We should also monitor discussion
 of TEI
 in publishing. LB raises the issue of the ACLS (North America) Humanities E\-Book project,
 which uses a non\-TEI DTD; should we get involved?LR notes that this is causing issues
 for
 e.g. European publishers like [revues.org](http://revues.org/) who are
 wondering why to use TEI if Americans are doing something different. One of our goals
 should be to compose a single recommendation for academic publishing. (DS and others
 pursued this on Council email following the telco.) We agree to mention this in our
 Meeting report.


All: send LR examples of TEI in publishing (especially scholarly /
 scientific).


 Final Points; Next Face\-to\-Face Meeting
 
 * Status of 
 valList content model? SR says the update has been implemented;
 
 valList is a sibling of 
 content. Any further changes will need more
 discussion.
* HTML 5: any action we need to take? SR: it doesn't affect TEI per se, rather it will
 affect best practices for TEI\-to\-Web output; we may need to target HTML 5 in future.
 This wouldn't impact core markup, but would impact stylesheets if we decide to generate
 HTML 5\. HTML is not a fixed target.
* Next FTF. If funding comes through for the ESF workshop, it might be attached to
 that. Otherwise, we plan for a spring meeting in Paris. (Finland was previously
 discussed but the potential sponsors may not have received funding.)





