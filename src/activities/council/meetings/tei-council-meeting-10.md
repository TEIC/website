---
layout: page.njk
title: "TEI Council Meeting"
creator: James Cummings
---
# TEI Council Meeting






The TEI Council teleconference meeting took place on
 Tuesday 23 October at 12:00 UTC.



Participants: Arianna Ciula (AC), Syd Bauman
 (SB), Lou Burnard (LB), James Cummings (Minutes; JC), Matthew
 Driscoll (MD), Dan O'Donnell (DO), Dot Porter (DP), 
 Sebastian Rahtz (SR), Laurent Romary
 (LR), Conal Tuohy (CT), John Walsh (JW), and Christian
 Wittern (Chair;CW).


Council members unable to participate: David Birnbaum (DB),
 and Tone Merete Bruvik (TMB).





Open action items
 
 
 CW reviewed the action items from the previous minutes.
 
 All action items must be completed by 2007\-10\-26 12:00
 UTC unless otherwise noted.



Action items
 
 
LB contact workgroup participants and
 others who have helped on P5 to check spelling of names
 and current affiliations. 2007\-09\-30 * LB reported on work done on AB and FM1 and that FM1
 would change to become more of an acknowledgements
 section. He would point Council at new drafts of this
 material in the next few days. 
 LB Point Council to new drafts of
 AB/FM1/etc. 
 2007\-10\-25

JW to provide additional e.g.s and read
 through existing ones in rendition 2007\-09\-30 * JW reported that this had been completed.

ALL read through the proposed list of
 rendition attribute values and provide feedback to LB
 2007\-09\-30 * LB reported that he had received no comments and
 taken this as assent. CT mentioned that he felt the
 suggested @scheme values were appropriate.

SB to finish revisions of NH by end of
 month 2007\-09\-30 * Discussion of NH postponed until later in the
 agenda.

All review NH, which has yet to be read in
 its new form by anybody other than the authors
 2007\-09\-30 * Discussion of NH postponed until later in the
 agenda.

ALL Report any last minute major
 suggestions for changes to web design (if you absolutely
 must) to JC and DP 2007\-09\-28 * Discussion of Guidelines Formatting postponed until
 later in the agenda.

JC, DP Begin integration process with main
 site with Chris Ruotolo (ongoing) * Discussion of Guidelines Formatting postponed until
 later in the agenda.

DO  Facilitate communication between the
 two web teams 2007\-09\-25 * Discussion of Guidelines Formatting postponed until
 later in the agenda.

LB  Expand explanatory prose in USE
 concerning which elements are mandatory and how a user
 can know this as Arianna described it in her email
 today. 2007\-09\-30 * LB reported that he had still to do this and it
 would be done today.
 LB Expand explanatory prose in USE
 concerning which elements are mandatory and how a user
 can know this as Arianna described it in her email
 today. 
 2007\-10\-23

SB  read and comment if nec. on solution to
 mode attribute on 
 classes. 2007\-10\-10 * SB reported that this had been completed.

LB deal with
 
 hand/
 handDesc issue in MS 2007\-09\-30 * LB reported that he believed this had been done.

CW contact CT and discover status of PH * CW reported that this had been done.

CW contact DB and discover status of ND * CW reported that this had been done.

DP finish review of CO 2007\-09\-30 * DP reported that she had not entirely finished
 this, but that she would do so today.
 DP Finish review of CO and submit
 comments to editors 
 2007\-10\-24

CW contact JC and discover status of DS * CW reported that he had done this, and that JC had
 already finished his review and submitted notes to the
 editors.

JW complete review of SA 2007\-09\-30 * JW reported that he had not completed this yet and
 he would do so in the next day or two.
 JW Complete review of SA
 and submit comments to editors
 
 2007\-10\-25

JW complete review of AI 2007\-09\-30 * JW reported that he had not completed this yet and
 he would do so in the next day or two.
 JW Complete review of AI
 and submit comments to editors
 
 2007\-10\-25

LR complete review of FD 2007\-09\-30 * LR reported that he had completed this.

SR complete review of DI 2007\-09\-30 * SR reported that he had not only completed this but
 had made the corrections in the source.

DP Compare Reading List and Works Cited and
 remove duplicates from the Reading List. 2007\-10\-15 * DP reported that she had delayed on this until the
 bibliographic descriptions were reformatted. She will
 now progress. LB offered to liaise with her concerning
 the needed rationalization.
 DP
 (\& LB) Rationalize Reading List and
 Works Cited removing
 duplicates
 2007\-10\-26

LR Convert Reading List to StructBibl
 2007\-10\-15 * LB reported that this had been done, though there
 was some disagreement over handling of
 
 relatedItem

AC Finish extracting sources for list of
 sources for examples 2007\-10\-15 * It was reported that this had been completed.

SR Connect sources of examples bibliography
 to examples in text 2007\-10\-15 * SR reported that this had been completed.

SR/LB Convert 
 bibl in the text of
 the guidelines to 
 ref pointing at the works
 cited list 2007\-10\-15 * LB reported that had been completed, and in
 summarizing other work on the Bibliography noted that
 there several instances of examples which he believed
 were not fabricated but for which he could not find a
 source and that these should be investigated/changed at
 some future date.



 
 State of NH
 
 
 DO summarised the work done on NH and what he felt the
 main issues were. This was followed by a far\-ranging
 discussion on the intricacies of overlap and especially
 its relation to TEI Conformance. Although there was some
 disagreement, Council sentiment was generally that the TEI
 should not recommend non\-Conformant methods of encoding
 and thus the discussion of HORSE should be further
 relegated to make it clear that there are these non\-TEI
 and even non\-XML ways to deal with this, but that they do
 not result in TEI Conformant documents. DO is to rewrite
 some portions concentrating on their relation to
 Conformance and avoiding pollution of the TEI namespace in
 all examples. 
 DO
 Rewrite some prose and examples of NH with TEI
 Conformance and pollution of TEI Namespace in mind.
 
 2007\-10\-25







 
 Reports
 
 
 
 
 
 State of P5
 
 
 LB reported on the changes that have been done recently
 to the source as well as some he wished to make
 immediately but which would result in significant changes
 to the schema. These included: 


* The reinstating of the @generate attribute on
 
 schemaSpec: Council approved this.
* The removal of @xml:space from att.global, and its
 addition to a new class. @xml:space is contrary, in
 some ways to the TEI way of doing things and perhaps
 should be mentioned as deprecated in the TEI
 Guidelines. Council approved the creation of the new
 class and that at minimum 
 eg and
 
 egXML should be members. 
 LB Create a class for xml:space
 with 
 eg and 
 egXML as members, and
 note that it is not globally available in the TEI
 scheme. 
 2007\-10\-26
* The removal of @xml:base from att.global and its
 addition to att.global.linking, thus it only appears as
 a global element when the linking module is
 selected. Council did not approve this, observing that
 it was useful for e.g. facsimiles even without the
 linking module . 
 LB
 Leave @xml:base as
 is. 
 2007\-10\-26
* The adding of a new element for boundary marking
 to deal with the NH\-related problems raised in earlier
 discussion. Council did not approve this and suggested
 that it be reconsidered for P5 1\.1
* That an @xsi:schemaLocation in the W3C xsi
 namespace be added to 
 TEI on the generation
 of schemas by ODD processors. Although it was agreed
 this was a bad mechanism chosen by the W3C, it was
 felt that it should be supported and documented in IM.
 
 SR Add
 @xsi:schemaLocation to all schemas generated by Roma
 and document that an ODD processor has the option of
 doing this in IM.
 
 2007\-10\-24

 LB continued to report that he had dozens of egs
 in MS for which he didn't have accurate bibliographic
 information. 
 MD Furnish
 LB with appropriate bibliographic references for 
 examples in MS.
 
 2007\-10\-26

LB noted the IPR problem with respect to the PH chapter.
 That is, that he has illegally used scans of photographs
 which we do not have copyright permission to use, and
 especially not distribute under a GPL licence. LB noted
 that he was sourcing some images from the Robert Graves'
 Diary project, but others would be welcome. SB noted that
 he might have some images that are suitable which we could
 freely use and redistribute under GPL. 
 SB Furnish LB with appropriate image
 for use as examples in PH.
 
 2007\-10\-25




LB continued to note that SA was getting long as a
 chapter and was in need of a good spring clean, but that
 this might have to wait for P5 1\.1




 
 Guidelines Formatting and Web Design
 
 
 DO reported on the problems with regard to a slow server
 (to be replaced) at Virginia as explanation why the full
 TEI\-C new website was not live. JC and SR reported on the
 formatting of the Guidelines and that this had now been
 merged as cleanly as possible with the TEI\-C web design.
 SR noted that, although a readable one is available now,
 the proper PDF rendition will probably not be available
 until January. Council agreed that print versions were not
 the priority, but SR also reminded them that the HTML
 version of the Guidelines had a CSS stylesheet for print
 as well (which removes much of the navigation) which look
 fairly good in print.





 
 Other Business
 
 
 DO requested that anyone who considered they would be
 unable to finish their assigned tasks should notify the Council
 list by Friday. JC further suggested that all Council
 members report on all action items by Friday at 12:00 UTC.
 
 ALL Report to council
 list on progress of all of your action items by 2007\-10\-26
 12:00 UTC, noting especially if you don't think you will
 complete them.
 2007\-10\-26




LB thanked all members of council, past and present, who
 had worked so hard to bring TEI P5 to fruition; 
 their hard work and dedication to the task of this major
 revision of the Guidelines was much appreciated.




 
 Next Meeting
 
 
 The next teleconference was not scheduled, but many Council
 members will be attending the TEI Members' Meeting in
 Maryland.
 






