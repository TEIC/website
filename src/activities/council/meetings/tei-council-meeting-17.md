---
title: "TEI Council Meeting"
creator: Sebastian Rahtz
date: 2009-12-07
---
# TEI Council Meeting



Attendees:
 


* Brett Barney (BB)
* Gabriel Bodard (GB)
* Peter Boot (PB)
* Lou Burnard (LB)
* James Cummings (JC)
* Matthew Driscoll (MD)
* Kevin Hawkins (KH)
* Martin Holmes (MH)
* Julianne Nyhan (JN)
* Daniel O'Donnell (DoD)
* Elena Pierazzo (EP)
* Dot Porter (DP)
* Sebastian Rahtz (SR) \- minutes
* Laurent Romary (LR) \- chair
* Paul Schaffner (PS)
* David Sewell (DS)



 Introduction
 
 Teleconference started at 1600 CET after a fair amount of to\-ing and
 fro\-ing with the Cisco Webex system being trialled at
 Oxford. Not a universally\-admired setup :\-} 


LR welcomed new council members as well as ones staying and those
 leaving.


PB updated the meeting on the 


Getting Started
 document; as he will leave the Council shortly, he suggested that he
 do a final review the current draft and then hand it over to someone
 else. LB suggested JN might like to merge this with work on the TEI
 education journal. LR asked whether each topic in *GS* might be
 suitable for separate articles in TEI\-EJ; 
 JN agreed that they might (pending the agreement of her co\-Editor also).
 
 
 The meeting was suspended at 16\.18 due to impossible amounts
 of interference, with a request to
 reconvene at 16\.30\.


The meeting reconvened 16\.32 via hispeed\-conferencing as
 in previous meetings. The vast howlings and noises as if of
 Chesil Beach in a storm subsided, except for people who
 appeared to amuse themselves during the boring bits by moving furniture or performing
 motorcycle maintenance.


It seemed to be generally accepted that using the
 *GS* articles in TEI\-EJ was probably the right way forward, but
 needed discussion. 
 PB will liaise with JN.





 Discussion of outstanding feature requests
 
 
 In the record, the initial in \[XX] indicates the council member
 first speaking to the ticket. For full details of the request, see the
 relevant ticket.



 Bibliography related
 
 [2881416](https://sourceforge.net/tracker/?func=detail&aid=2881416&group_id=106328&atid=644062)* add meeting to model.respLike
 \[DS]: agreed to be non\-controversial. Go GREEN
[2714682](https://sourceforge.net/tracker/?func=detail&aid=2714682&group_id=106328&atid=644062)* permit 
 biblScope as child or as
 sibling of imprint \[KH]: more controversial. Eventually agreed
 that KH, LR and LB would clear this up. Go GREEN\-ish.
[2798963](https://sourceforge.net/tracker/?func=detail&aid=2798963&group_id=106328&atid=644062)* add @role to author \[MH]: It was argued that the
 concept of author types does exist (eg composer or lyricist for a
 musical, coder or designer for a computer programmer). LB
 counter\-argued that 
 author is deliberately specialist, and we
 have other ways of showing contributions; noted that 
 respStmt
 is a general\-purpose element for any intellectual contributions. In
 the end, no\-one actually objected to @role on 
 author, by
 making it a member of att.naming. Go GREEN. For the longer\-term,
 
 KH agreed to create a feature request analyzing the
 relationship between 
 author, 
 editor, and
 
 respStmt.
[2812634](https://sourceforge.net/tracker/?func=detail&aid=2812634&group_id=106328&atid=644062)* @docStatus on 
 edition
 \[JC]: why isn't it in 
 resptStmt, it was asked? DoD
 wondered whether @xxStatus might not be wanted all over the
 shop; and is @status the same as @type or not? Sufficient confusion to put
 this decision off. Stay AMBER.
[2728068](https://sourceforge.net/tracker/?func=detail&aid=2728068&group_id=106328&atid=644062)* suggested values for 
 relatedItem@type
 \[PS]. OK. Go GREEN.
[2728061](https://sourceforge.net/tracker/?func=detail&aid=2728061&group_id=106328&atid=644062)* Add @target to relatedItem \[LB]: are content and
 @target combining, or mutually exclusive? Generally agreed that the
 latter is what we want — presence of @target means that the content must be
 empty. Go GREEN.
[2493417](https://sourceforge.net/tracker/?func=detail&aid=2493417&group_id=106328&atid=644062)* idno coverage \[JN]: the issue not seem to
 have got any simpler since last discussed at the F2F in Lyon. It needs a larger
 discussion around identifying authors. 
 LR and JN agreed to take
 this away and beat it around some more.




 Certainty/target/match issue
 
 
[2862151](https://sourceforge.net/tracker/?func=detail&aid=2862151&group_id=106328&atid=644062);
 [2877940](https://sourceforge.net/tracker/?func=detail&aid=2877940&group_id=106328&atid=644062)* Revisit use of @target;
 
 Allow certainty etc in empty elements: the discussion was
 rehearsed again as to whether we needed both @match and @target (ie
 can we just use @target and XPointer), and whether @match should be
 anchored at the document root or the current context. No\-one really
 seemed able to remember why we set the context to be the document
 root; possibly a misunderstanding of XPath (cf long discussion on
 TEI\-L with Wendell Piez etc). LR asked whether
 anyone had tried to implement the current setup (no answers; JC
 admitted, however, he knew how to evaluate arbitrary XPath in XSLT 2\.0
 using the saxon:evaluate() extension function; see [http://blogs.oucs.ox.ac.uk/jamesc/2009/06/05/evaluate\-a\-string\-as\-an\-xpath/](http://blogs.oucs.ox.ac.uk/jamesc/2009/06/05/evaluate-a-string-as-an-xpath/)). GB and
 SR pointed out that assuming the current context gives users a
 valuable new facility of pointing at here. Vague agreement.
 
 LB to discuss with GB and SR, check that changing the default
 context of @match would definitely work. Go GREEN if agreed.




 Manuscript/transcription\-related
 
 [2900430](https://sourceforge.net/tracker/?func=detail&aid=2900430&group_id=106328&atid=644062)* datatype of @scribe and @script \[EP]: agreement
 that URI pointing to a script record would be useful; might need a
 
 scriptNote in the header (or the existing
 
 taxonomy). Suggested that new pointing attributes @scriptRef
 and @scribeRef should be added, to avoid breaking existing
 documents. No objections. 
 EP and MD to provide
 examples. Go GREEN.
[2907038](https://sourceforge.net/tracker/?func=detail&aid=2907038&group_id=106328&atid=644062)* permit collections to nest/repeat within msIdentifier
 \[EP]: controversial, drawing in of breath by some. Others like
 the idea of nesting. Go GREEN\-ish. LB needs examples.






 Next meeting
 
 The meeting ended at 18\.05 CET. Agreed to reconvene in w/s
 January 11th. LB requested people to be ready to discuss:
 


* 2811239: new element 'object' \[\*DP]
* 2811234: add @ref to 'material' \[\*DP]
* 2724997: Cater for audio/video facsimile




