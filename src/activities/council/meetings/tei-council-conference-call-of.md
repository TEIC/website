---
layout: page.njk
title: "TEI Council Conference Call of Mon, 29 Nov 04"
---
# TEI Council Conference Call of Mon, 29 Nov 04
Initials Used for People


* SBSyd Bauman
* ABAlejandro Bia
* DBDavid Birnbaum
* LBLou Burnard
* JCJames Cummings
* MDMatthew Driscoll
* DDDavid Durand
* JFJulia Flanders
* SRSebastian Rahtz
* LRLaurent Romary
* SSSusan Schreibman
* NSNatasha Smith
* PTPaul Tremblay
* EVEdward Vanhoutte
* JWJohn Walsh
* PWPerry Willett
* CWChristian Wittern



All times are UTC unless otherwise noted.


Present were SB, DB, LB, JC, MD, DD, JF, SR, SS, NS, JW,
PW, and CW. Not present were AB, LR, and EV.


Call commendced at 13:00\.




 

Review of the [minutes from the call](/Activities/Council/Meetings/tcm13.xml)


* Revision of content model for
choice LB reported that some progress has
been made, and he thinks the action completed.
* Post updated version of SO W 09 to
Council Done.
* Check in updated version of SA SB
reports that this action was deliberately deferred due to
	+ expressions of concern that TEI should not be
	moving to URI References, and
	+ the need to have the style\-sheets updated
	simultaneously or before changing P5 source
* Finalize draft of MS MD reports that
the draft has been completed, but has not been announced
anywhere. It was noted that there has already been some
feedback, as it was announced as part of the Members'
Meeting [MS SIG
report](/activities/SIG/Manuscript/mssigr02.html). Council agreed that once the draft was
publicized, comments on it should receive rapid attention
from the MS taskforce, and urged MD to announce draft far
and wide immediately.
* propose a method of managing SF feature
requests so as to facilitate gathering of input from
Council members SB reported that LB has gone
through artifacts and assigned priority. LB expressed
doubt as to whether this was actually a good idea or not;
suggesting that Council members should feel free to look
at and comment on any items in which they were personally
interested. It was suggested that all Council members
should sign up for Sourceforge user accounts, such that
they could receive notification of updates to feature
requests. SB thought that after signing up, Council
members may have to sign up for notifications on an
artifact\-by\-artifact basis.



MM Baltimore reportLB reported that a general SIGs report, some individual
SIGs, and some talks are now [available on theweb](https://www.tei-c.org/Vault/MembersMeetings/2004-info/); SS believes the other SIGs should be reporting
soon. LB said the meeting was well attended, and lots of
good discussions were had over lunches \& in hallways,
etc.LB stated that prior to the Members' Meeting there had been
an expression of concern over the conversion of legacy data
to P5, and that in response to this he and SR had created a
P4 compatibility mode on the flight
over, which was presented to membership. The membership
present had expressed an overall feeling of why would I
want one of those?. There seemed to be general
agreement that we should keep P4 compatibility
mode in the background, and bring it out if and
when there is a call for it.

SanskritLB thinks the Sanskritters have a desire to use TEI for
general interchange, but also want detailed validation.
After some discussion, there seemed to be agreement that
there are three ways to achieve this:
* Schematron (either included as part of P5 or used
separately)
* raw schema (which would require significant changes
to ODD)
* syntactic sugar


and that it is a very general problem (relating to
those who wish to constrain subsections to exist only inside
sections, e.g.) The current suggestion is to agree to their
recommendations that seg be used, with some
validation mechanism to follow. CW draft a reply to
Sanskritters and post it to council This problem,
with a Sanskrit example, can show up in the Guidelines as an
example of how to use seg in choice.

MeetingsWe'd like to hold a face to face meeting in late April or
early May. The following expressed the possibility of
hosting:
* MD, Copenhagen
* JC, Oxford
* SS, Maryland


It was pointed out that cost will be a large concern
with this meeting.MD, JC,
SS each to post a brief summary to the council
list of the anticipated cost of hosting a meeting at his
her locale, in particular of lodging
With the upcoming departure of DD, the Council needs a new
host for conference calls. JW said he could host, using the
same mechanism PW has used in the past. This turns out to be
expensive for Europeans, but CW feels it is still probably
less expensive overall, and so graciously accepts JW's
offer.



Work\-groupsA brief report from PB has been sent, but not in time for
the call. No change in FS
xml colon thingYes, Council agreed on use of xml:id (declared as W3C suggests,
we think ID) and xml:lang (declared where possible
as xsd:language,
using the
Ghent improved Nancy Hack, i.e. an
ident on
language).
SO W 09SR raised a concern over the inconsistency of the target
attribute. It was pointed out that this inconsistency is
just a duplication of what is currently in P4, where all
targets attributes are
IDREFS, but not all target attributes are
IDREF, some are IDREFS. SB thought there
was a reason for some, if not all, of these apparent
discrepancies, but could not recall them. Council agreed
that this should be looked into with an eye to making names
consistent.Council agreed on the substantive issues brought up by
[SO W 09](https://www.tei-c.org/Vault/Workgroups/SO/sow09.html), with
the exception of the details of the new xpointer schemes,
concerning which discussion was deferred.

style\-sheetsCouncil raised a concern that SR's stylesheets are
mistakenly viewed by TEI community as intended to be
exemplary. JF suggested making the domain space of TEI
stylesheets larger, to provide more examples, perhaps
through a contest or call for submissions from the TEI
community. JW agrees. JF2004\-12\-15
send to council list a proposal for call or contest for
getting additional style\-sheets for TEI No one was
entirely sure, but SB thought it might be the case that the
current release of SR's style\-sheets are on Sourceforge, and
that those on the TEI site are out of date. SR Ensure that the version of
style\-sheets available from the TEI site is the current
release (even if that means that what is on the TEI site
is no more than a pointer to the download from
Sourceforge)
biblItemIt was suggested that a small group look at the broader
view around this issue, and recommend the best approach in
general. Specifically to consider whether some other
standard is sufficient, and if not, to examine the current
proposal and perhaps recommend changes. PW contact PT to research
broader problem of how P5 should encode
bibliographies.It was noted that we do not know who, other than PT,
participated in the creation of the current proposal.

 

all read artifacts on
TEI Sourceforge [feature
requests](https://sourceforge.net/tracker/?atid=644065&group_id=106328&func=browse) tracker and post comments, even if
comment is just I agree.


Next conference call scheduled for Mon 31 Jan at 13:00 UTC.


Call ended at 14:37



 