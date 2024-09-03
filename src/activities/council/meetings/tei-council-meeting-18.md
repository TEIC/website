---
title: "TEI Council Meeting"
creator: Brett Barney
date: 2010-02-08
---
# TEI Council Meeting



Attendees: 


* Brett Barney (BB)
* Gabriel Bodard (GB)
* Lou Burnard (LB)
* James Cummings (JC)
* Kevin Hawkins (KH)
* Martin Holmes (MH)
* Daniel O'Donnell (DoD)
* Elena Pierazzo (EP)
* Dot Porter (DP)
* Sebastian Rahtz (SR) \- minutes
* Laurent Romary (LR) \- chair




 Introduction
 
 Teleconference started at 1600 CET. 


LR began by saying that, although there had been some discussion of possibly
 having a face\-to\-face meeting in October, the budget won't allow that. Therefore
 the April face\-to\-face meeting will be the only one this year. He encouraged
 Council members to economize when arranging travel to the meeting. 


LB noted that external funding for a second meeting might be available and hinted
 that he will pursue this possibility further.


LR noted that planning is proceeding for the one\-day symposium before the April
 meeting. The symposium will be an important event, during which he hopes that we
 can devise a strategic plan for the use of TEI in the process of scholarly
 publishing. He requested that in preparation for the meeting, each of the
 Council members give some thought to this issue and email discussion proposals
 to him.


DoD informed the group that the Board has received back from Apex corrections to
 TEI Tite, which he plans to share with a subcommittee of people for review. Lou
 said he should just bring them to the whole Council instead. Dan said that would
 be fine.




 Discussion of outstanding feature requests
 
 LB noted that during the last teleconference the Council deferred until this
 teleconference three ticket items they required a lot of further discussion.
 Since no progress has been made on these, he suggested that they be put on the
 agenda for the face\-to\-face meeting. All agreed, and Laurent volunteered to
 solicit volunteers to work on these in the meantime. 


For full details of each request, see the relevant ticket.







[2714682](https://sourceforge.net/tracker/index.php?func=detail&aid=2714682&group_id=106328&atid=644062)* biblScope as sibling, child, or both of
 
 imprint
: After discussion of how these elements are
 used, especially for journals, there was general agreement that
 
 biblScope should be allowed only as a sibling of
 
 imprint. It was further noted that the examples in the
 guidelines need to be vetted and that further examples might need to be
 generated. DoD suggested comparing with other encoding schemes to see
 how this is handled. 
 MH, KH and LR will follow
 up.

[2812634](https://sourceforge.net/tracker/index.php?func=detail&aid=2812634&group_id=106328&atid=644065)* adding @docStatus to 
 edition
: After discussion
 of where the desired information would be best supplied and whether the
 current 
 teiHeader already provides adequately for it in, say,
 
 revisionDesc (it doesn't), we agreed that a new attribute
 on 
 revisionDesc was warranted and that another new attribute
 could be added to 
 change. Example uses will need to be
 generated. 
 LB will propose specifics.

[2909766](https://sourceforge.net/tracker/index.php?func=detail&aid=2909766&group_id=106328&atid=644065)* adding 
 add and 
 del to att.datable:
 There was lively discussion of this item and its implications for other
 elements about which one might foresee similar arguments. EP noted that
 the genetic editions working group is currently discussing the
 desirability of making various elements datable and plans to have a
 specific proposal for discussion at the April meeting. It was decided
 that discussion of this ticket be postponed until we have a chance to
 consider that porposal.

[2925031](https://sourceforge.net/tracker/index.php?func=detail&aid=2925031&group_id=106328&atid=644062)* @ident data type problem with 
 valItem\>
: It was
 agreed that there needs to be a way to allow the values specified for an
 attribute to be something other than valid XML names; the best way to do
 this is less clear. Eventually, consensus was reached that this should
 be done by locally defining @ident for 
 valItem

[2940860](https://sourceforge.net/tracker/index.php?func=detail&aid=2940860&group_id=106328&atid=644065)* adding @xml:space to att.global: It was quickly agreed
 that it is reasonable to want to preserve spaces in some instances.
 Debate focused on whether this need is best met by reinstating
 @xml:space in att.global. It was agreed that, on balance, yes, it
 is.

[2919640](https://sourceforge.net/tracker/index.php?func=detail&aid=2919640&group_id=106328&atid=644065)* adding global @facsKey: Although the value of @facs is
 supposed to be "one or more URIs, separated by whitespace," folks seem
 to typically give it a value equivalent to @key—a "magic
 token" that is to be resolved later by a processor into a full URI. It
 was agreed that the addition of @facsKey, though not without
 disadvantages, was advisable, since doing so will not to break existing
 documents that use @facs as described.

[2925145](https://sourceforge.net/tracker/index.php?func=detail&aid=2925145&group_id=106328&atid=644065)* non\-Gregorian dates: TEI's @when is currently defined as
 @when\-w3c; some within the community, including LR, would like to define
 it instead as @when\-iso. Since @when\-iso is currently allowed,
 discussion centered on whether the "generic" option offered to TEI users
 should be the more permissive (ISO) or more restrictive (W3C subset). LB
 argued that switching to ISO would cause unnecessary headaches. No one
 disagreed strongly, so the status quo seems to have prevailed.

[2862151](https://sourceforge.net/tracker/index.php?func=detail&aid=2862151&group_id=106328&atid=644065)* allowing elements from the certainty module on 
 gap and
 
 space
: No objections.




