---
layout: page.njk
title: "TEI Technical Council Meeting,"
creator: TEI Technical Council
---
# TEI Technical Council Meeting,





Present: James Cummings (JC \- Chair), Syd Bauman (SB), Hugh
 Cayless (HC), Elli Mylonas (EM), Sebastian Rahtz (SR), Stefanie Gehrke (SG), Martin
 Holmes (MH), Paul Schaffner (PFS), Peter Stadler (PWS), Lou Burnard (LB), Fabio
 Ciotti (FC).



Amber FR: <http://tinyurl.com/teiCouncilAmberFR>


Amber Bugs: <http://tinyurl.com/teiCouncilAmberBugs>


Green FR: <http://tinyurl.com/teiCouncilGreenFR>




 Actions Arising
 
 Please note that this list of actions only includes actions arising from discussions
 outside of tickets, 
 actions for individual tickets should be recorded on the tickets themselves.


* Action on SR and JC: Report back to Council on progress of
 TEI Simple.
* Action: All of Council: read the correspDesc proposal ([wiki page](https://wiki.tei-c.org/index.php/SIG:Correspondence/task-force-correspDesc), [github](https://github.com/TEI-Correspondence-SIG/correspDesc)) by Aug. 1 and
 send comments to Council list, Discussion ensues on Council list for 1
 month, PWS will synthesize back to the corresp group after that.
* Action: HC to report back on preparations for face\-to\-face
 in next few weeks.
* Action: on all Council: Read [http://hal.inria.fr/hal\-00950862](http://hal.inria.fr/hal-00950862)[http://sourceforge.net/p/tei/feature\-requests/482/](https://sourceforge.net/p/tei/feature-requests/482/) add
 comments to ticket before face2face.
* Action: on all Council: Read ISO Speech transcription
 proposal (<http://bit.ly/1jyZC37>) before next F2F meeting.
* Action: MH/LB/HC to write a position paper on global
 applicability of 
 resp ([FR443](https://sourceforge.net/p/tei/feature-requests/443/)) 
 before next F2F meeting.
* Action: LB/HC/SR: write brief report before next f2f on 
 [FR504](https://sourceforge.net/p/tei/feature-requests/504/) 
 examining options including 1\) using 
 relation; 2\) embedding
 \<rdf:RDF\>; 3\) co\-opting 
 arc; 4\) using another existing
 mechanism; 5\) creating a new mechanism altogether.
* Action: on HC/JC/MH (and other interested parties): discuss
 appPart on ticket [FR492](https://sourceforge.net/p/tei/feature-requests/492/).
* Action: on HC to encourage MS SIG to comment on this
 ([FR492](https://sourceforge.net/p/tei/feature-requests/492/)) 
 and other relevant tickets.
* Action: on SB to nail down date of release in next couple
 weeks.
* Action: on JC: Ask TEI Board: Should we continue to support
 so many languages? Should we prioritize translation into other 
 less
 obvious languages eg Arabic, Hindi, Hebrew? How can the Board best
 support the community of translators?
* Action: on MH/JC/SB/HC: Discuss among each other and each
 create a 20 minute presentation for the next F2F on some aspects of
 stylesheets or other arcane TEI processing that may be difficult for
 others to understand.
* Action: on all Council to read the [wiki page](https://wiki.tei-c.org/index.php/List_types_and_rendering) on [FR460](https://sourceforge.net/p/tei/bugs/460/) (list/@type feedback to MH \& SB within a week.




 Monday
 
 
 TEI Simple (SR)
 
 Summary \- Our work on TEI Simple:


* A TEI subset will be created on the model of TEI Lite and Tite focussed on early
 modern books.
* It will include a new processing model that will be documented in the
 ODD.
* All elements will be mapped to CIDOC\-CRM and FRBR\-OO.
* It will also include a mechanism for encoding a machine readable distinction 
 between what’s (not) encoded and
 what is actually (not) present in a document.


Council asked to agree that changes be made to ODD language made to handle document
 processing models and also to commit to look after the ODD file, as TEI
 evolves. 


Main new part for the guidelines infrastructure is notation for processing
 rules. There will also be a set of rules for this customization. Discussion
 focusses on the need to develop a new meta\-language to express processing.
 Is it necessary, and what support would it require? (SR) This language is
 likely to be more similar to the declarative nature of schematron than to XSLT.
 Precisely how it will work and be expressed is not yet determined as that is
 part of the project, but TEI Council members are involved in it and will
 report back to Council.


Discussion about what Council is agreeing to maintain, especially in the area
 of the processing model. JC: Council will be discussing and approving as it
 is being developed. SR: Council approval is a mark of success for the
 project.. FC: Comment that this project is implementing a particular
 representation of the “book” — especially a western european anglo\-centric
 viewpoint. Assuming it will also be widely used, a de facto standard, after
 it is released. Suggests some more input on whether it will handle other
 forms of book. Also, was a formal ontology taken into account in formulating
 the book model? JC: I think that is merely reflected in the nature of the
 TEI as a whole. FC: And might the project produce a standard set of XQuery
 functions that could then be customized to aid in discovery/search. JC: I
 think that is out of scope for this project but would enable people to do so
 more easily.


Some reactions: HC: it would be nice if the processing model could be
 extensible, so used by other customizations (Epidoc, e.g). Currently the
 Epidoc processing model is expressed in the stylesheets. EM: Simple is one
 of many customizations for different disciplinary or special interest
 groups. SR: XQuery \- good idea, not in scope and hope someone will do this.
 PFS: This is based on a particular corpus of English early modern books that
 already exists. Could be expanded to handle other texts. JC: Simple can form the
 basis for further customization; as part of the DiXiT project one of the
 first chained ODD customisations to Simple will be to handle scholarly
 digital editions (e.g. include critapp stuff). MH: most interesting part of
 this for TEI is the processing model because it opens the possibility of
 creating a whole project from the ODD. SB: will it be able to create
 multiple outputs? JC: it would be a failure, in my opinion, if it didn’t. \-
 but project still has to work this out and propose to Council. After
 discussion, Council unanimously approves.


Council unanimously agrees to maintain and support the TEI Simple
 output as part of the TEI infrastructure.


Action on SR and JC: Report back to Council on progress of TEI
 Simple.




 Pure ODD (LB)
 
 Summary: 


What is Pure ODD? An attempt to redefine TEI content models using only TEI,
 without embedding pieces of Relax NG, Schematron and other languages. First
 presented at DH 2012\. SR, LB worked on initial implementation. Needed to
 balance the constant tension between developing a functional (effective and
 efficient) way of specifying structure and structural constraints, and
 developing a general\-purpose language wholly independent of current
 processing languages. 



- Q: Does it makes sense to have 
 allowText on
 sub elements of 
 content? 
 A: LB says no.
 
 allowText indicates that text fragments can appear within that element
 that bears it. In XML Schema, because of the non\-deterministic parsing
 model it assumes, there are many restrictions on where text fragments
 can appear. The use of XML restricts this feature. 
 Discussion: if we are trying to enable the future possibility
 of getting away from XML as the only language, then this might not be a
 restriction. SR: actually, we should either forbid it or define what
 happens when a non\-deterministic model occurs. LB: one way to handle it
 is to only allow 
 allowText on either the sub\-element or on
 
 content but not on both. 
 allowText and PCData content models
 don’t mix.

- Q: What does a set of 
 elementRef as direct children of
 
 content mean? 
 A: It can have one of each child,
 otherwise have to use sequence or alternation. 
 Discussion: consensus seems to be appearing that having a
 mixed content element called 
 mixedContent is appealing to
 everyone as well as one called 
 textNode. 
 mixedContent
 would specialcase traditional non\-deterministic mixed content model of
 (pcdata\|x\|y)\*.

- Q: What does the same thing mean with 
 allowText? 
 A:
 further investigation shows that actually RNG and WSD do permit
 non\-deterministic content models, so we do want to allow 
 allowText on
 
 sequence and 
 alternate.

- Q:  When and how should we convert Guidelines to Pure
 ODD? 
 A: SB \- language decided upon, testing should
 happen first. Target release: Summer 2015, tentative. SR: how to express
 Pure ODD in Guidelines doc. JC: As an alternative next to RelaxNG
 versions.

SR: Pure ODD is mostly implemented, except for some of the items discussed
 above. 






 TEI DH2014 HackAThon (EM)
 
 EM summarised the TEI HackAThon preparations, participants, and proposed
 projects. Would\-be participants include both non\-technical TEI users and
 programmers; projects range from quite narrow and specific projects to ideas
 of broader interest. Projects are listed on the wiki ([http://wiki.tei\-c.org/index.php/DH2014Hackathon\-Projects](https://wiki.tei-c.org/index.php/DH2014Hackathon-Projects)). Council
 members are welcome to visit the hackathon page on the wiki and comment
 there.


EM reminds us that the hack\-a\-thon results are not directly related to the
 prize for TEI development being offered by the Board. SG suggests a link to
 the projects page from the main page; EM agrees and will implement. EM:
 DONE.




 TEI Correspondence Module (PWS)
 
 The proposal is available via Github, see [https://github.com/TEI\-Correspondence\-SIG/correspDesc/blob/master/proposal.xml](https://github.com/TEI-Correspondence-SIG/correspDesc/blob/master/proposal.xml).


In addition to developing a customization for correspondence, the group is
 also developing an interchange format, by including a linked data
 representation in the 
 correspDesc element \- which is a wrapper for a short
 version of the salient features of a piece of correspondence. There is a
 sample implementation that allows cross repository searching. 


Discussion around issue of the formulation of 
 correspDesc as both a
 descriptive element that allows textual description and as a highly
 structured element that enables the interchange format and the
 sub\-customization that generates the interchange format. 


SB suggests that Council be given a date by which to comment more thoroughly
 on the proposal ([wiki page](https://wiki.tei-c.org/index.php/SIG:Correspondence/task-force-correspDesc), [github](https://github.com/TEI-Correspondence-SIG/correspDesc)). PWS would like comments of any kind. 


Action: All of Council: read this proposal by Aug. 1 and send
 comments to Council list, Discussion ensues on Council list for 1 month, PWS
 will synthesize back to the corresp group after that.




 Amber BUGS
 
 

| Ticket Number | Description | Notes/Resolution |
| --- | --- | --- |
| [675](https://sourceforge.net/p/tei/bugs/675/) | [org should  allow model.global](https://sourceforge.net/p/tei/bugs/675/) | Group A. Obviously correct. Do. |
| [674](https://sourceforge.net/p/tei/bugs/674/) | [Example for  sequence element does not contain sequence element](https://sourceforge.net/p/tei/bugs/674/) | Group A. Already done. Close |
| [673](https://sourceforge.net/p/tei/bugs/673/) | [Wrong  datatype for sequence/​  preserveOrder](https://sourceforge.net/p/tei/bugs/673/) | Group A. Already done. Close |
| [671](https://sourceforge.net/p/tei/bugs/671/) | [Schematron  mis\-tests whitespace for separator  (  targert,  from,  to)](https://sourceforge.net/p/tei/bugs/671/) | Group B make it green, make it happen |
| [670](https://sourceforge.net/p/tei/bugs/670/) | [Attribute  definitions are slightly inconsistent](https://sourceforge.net/p/tei/bugs/670/) | Group B make it green, James should have already done it (JC:  Agreed.) |
| [667](https://sourceforge.net/p/tei/bugs/667/) | [Consistent  case in Guidelines headings](https://sourceforge.net/p/tei/bugs/667/) | Group B we agree that heading should be consistent. Recommend a  Council Vote  TEI Journal recommends title case for  bibliographic citation and seems to use title case for section  headings. We recommend going along with TEI journal. Also  probably fewer to fix. |
| [661](https://sourceforge.net/p/tei/bugs/661/) | [outdated  schematron constraint 'msId\_minimal'?!](https://sourceforge.net/p/tei/bugs/661/) | Group C — Not decided   Note — this is related to the FR on  msPart  Undecided — Council close this one and merge with the FR  Council reopens discussion with the FR further down. |
| [658](https://sourceforge.net/p/tei/bugs/658/) | [listRelation can't occur in    listRelation](https://sourceforge.net/p/tei/bugs/658/) | Group C — agreed |
| [655](https://sourceforge.net/p/tei/bugs/655/) | [examples of    org,   person, and   place should have    xml:id](https://sourceforge.net/p/tei/bugs/655/) | Group C — agreed |
| [654](https://sourceforge.net/p/tei/bugs/654/) | [bad date  attrs in   education example](https://sourceforge.net/p/tei/bugs/654/) | Group A. stet. It's a possible example. Council decides SB  will add an additional example. |
| [647](https://sourceforge.net/p/tei/bugs/647/) | [data.enumerated !\= valItem/​  ident](https://sourceforge.net/p/tei/bugs/647/) | Group A. try changing to data.name and seeing what breaks. ACTION  ON SR: test |
| [636](https://sourceforge.net/p/tei/bugs/636/) | [extraction of  Schematron code from within   classSpec](https://sourceforge.net/p/tei/bugs/636/) | Group A. should be raised as a Github issue on Stylesheets. not a  TEI bug. ACTION ON SR: move issue. Done. |
| [634](https://sourceforge.net/p/tei/bugs/634/) | ["TEI\-conformable" is meaningless](https://sourceforge.net/p/tei/bugs/634/) | Group B recommend we drop it and replace with nothing. Needs  significant editing. Council agrees. |
| [633](https://sourceforge.net/p/tei/bugs/633/) | [source in  att.editLike is overly constrained](https://sourceforge.net/p/tei/bugs/633/) | Group B Make it green and implement (change comment only to  recommend other sources). Comment might indicate that   witness and    msDesc are appropriate for textual apparatus, and the other targets  are also options. Council agrees. |
| [632](https://sourceforge.net/p/tei/bugs/632/) | [sloppy  language in specs for att.datable.w3c and  att.datable.iso](https://sourceforge.net/p/tei/bugs/632/) | Group B green and implement. SB?  Council agrees. Action  on SB to go through chapter/specs and normalize  references. |
| [630](https://sourceforge.net/p/tei/bugs/630/) | [use of    listRef in specs](https://sourceforge.net/p/tei/bugs/630/) | Group C — Go Green. LB to do. (Council agrees) |
| [629](https://sourceforge.net/p/tei/bugs/629/) | [dollar sign  escaping in canonical references](https://sourceforge.net/p/tei/bugs/629/) | Group C — Recommend to Council $$; Council agrees. |
| [627](https://sourceforge.net/p/tei/bugs/627/) | [Encoding  example from Drama chapter uses   corresp instead of    synch](https://sourceforge.net/p/tei/bugs/627/) | Group C — Example needs to be updated to use   spGrp; Council  agrees. |
| [626](https://sourceforge.net/p/tei/bugs/626/) | [Top bar menus  don't work in Chrome from Guidelines TOC page](https://sourceforge.net/p/tei/bugs/626/) | Group A. Probably resolved by using new UDM Javascript last week.  Council Agrees. SR to test. Done. Ticket closed. |
| [621](https://sourceforge.net/p/tei/bugs/621/) | [expand  example in att.lexicographic is incorrect.](https://sourceforge.net/p/tei/bugs/621/) | Group A. True. but we don’t know what a good example would be. Do  we even still need   expand? It looks like the dictionaries module  violates the "no content in attributes" principle all over the  place. Ripe for a re\-write? PFS to implement suggestions he documented  on ticket. |
| [620](https://sourceforge.net/p/tei/bugs/620/) | [which part of  TEI Guidelines takes precedence](https://sourceforge.net/p/tei/bugs/620/) | Group A. Close the ticket politely. Council Agrees. |
| [616](https://sourceforge.net/p/tei/bugs/616/) | [cit  and   quote not allowed within    summary](https://sourceforge.net/p/tei/bugs/616/) | change to macro.specialPara; Council  Agrees. |
| [610](https://sourceforge.net/p/tei/bugs/610/) | ["lem" used in  a confusing way in CriticalApparatus.xml](https://sourceforge.net/p/tei/bugs/610/) | Group B Amber… HC to explore and report back |
| [581](https://sourceforge.net/p/tei/bugs/581/) | [\`  attRef\` needs better documentation](https://sourceforge.net/p/tei/bugs/581/) | Group B \[not fully discussed] |
| [563](https://sourceforge.net/p/tei/bugs/563/) | [inconsistent  encoding of citations to sources of examples](https://sourceforge.net/p/tei/bugs/563/) | Group C; Council agrees, PFS/EM to complete ticket. |
| [548](https://sourceforge.net/p/tei/bugs/548/) | [use of modal  verbs in Guidelines](https://sourceforge.net/p/tei/bugs/548/) | Group C \[not fully discussed] |
| [468](https://sourceforge.net/p/tei/bugs/468/) | [Order of  elements in publicationStmt](https://sourceforge.net/p/tei/bugs/468/) | Group C; SB to complete ticket. |
| [460](https://sourceforge.net/p/tei/bugs/460/) | [list/​  type\="unordered" is not recommended, but used  often](https://sourceforge.net/p/tei/bugs/460/) | Council decides this is release blocking. MH and SB to carry it  out. All of Council to read the wiki page and feedback to M \& S  within a week. |
| [234](https://sourceforge.net/p/tei/bugs/234/) | [use of   n on  divs](https://sourceforge.net/p/tei/bugs/234/) | closed\-fixed |
| [231](https://sourceforge.net/p/tei/bugs/231/) | [how to handle  forme work](https://sourceforge.net/p/tei/bugs/231/) | closed |
| [228](https://sourceforge.net/p/tei/bugs/228/) | [when and  where to capture line breaks](https://sourceforge.net/p/tei/bugs/228/) | open\-postponed. |
| [216](https://sourceforge.net/p/tei/bugs/216/) | [half title  pages in TEI Tite](https://sourceforge.net/p/tei/bugs/216/) | open\-postponed |





 Tuesday 
 
 
 Autumn Face\-to\-Face meeting (HC)
 
 Currently scheduled for Nov 5\-7 (Wed\-Fri). Moved to 17\-19 November. TEI MM
 October 22\-24\.


East Coasters will try to arrange some invited talks.


Action: HC to report back on preparations for face\-to\-face in
 next few weeks




 Text directionality additions: final reading and approval (MH)
 
 Most of the Council has read the latest version of the text directionality
 document. MH asks if there are no comments/objections, otherwise it will be
 in the next release. 


Council accepts the text directionality section of the guidelines. A big
 thank you to MH and LB, who got a lot of input from the text directionality
 working group: Marcus Bingenheimer, Stella Dee and Deborah Anderson, as well
 as Richard Ishida from the W3C.




 Update on TBX ODD (LB)
 
 Terminological Databases. [http://sourceforge.net/p/tei/feature\-requests/482/](https://sourceforge.net/p/tei/feature-requests/482/) Originally the
 Guidelines were intended to have a section on semasiological and one on
 onomasiological dictionaries. This wasn’t quite done, and the rump was
 therefore removed in P5\. The TBX ODD (see trunk/Incubator/TBX/TEI\-TBX.odd)
 is Laurent Romary’s initiative towards replacing the terminological
 component, being developed with a terminological working group. It’s ongoing
 work, the group meets regularly and the ODD keeps developing. When complete,
 it should be in good shape and ready for inclusion. Question is where it
 belongs in the Guidelines \- section of dictionary chapter? new chapter?
 module? 


Here’s a background article [http://hal.inria.fr/hal\-00950862](http://hal.inria.fr/hal-00950862).


Laurent welcomes comments or feedback, best to put it into the ticket.
 Council tasked with reading this before the next F2F. MH says it should be
 discussed in relation to Taxonomy and Feature Structures. 


Action: on all Council: Read [http://hal.inria.fr/hal\-00950862](http://hal.inria.fr/hal-00950862)[http://sourceforge.net/p/tei/feature\-requests/482/](https://sourceforge.net/p/tei/feature-requests/482/) add comments
 to ticket before face2face




 Update on ISO Speech transcription proposal (<http://bit.ly/1jyZC37>) (LB)
 
 WG headed up by Thomas Schmidt. Objective is to define an ODD for applying
 the script transcription model to being an interchange format between the
 commonly used speech transcription systems (done in software). Transcription
 is hard, tends to be done using specialized tools which tend to differ in
 theoretical premises (as to what exactly should be captured), etc. The field
 therefore tends to fall into isolated camps based on proprietary tools and
 the standards they employ.


Schmidt published article in TEI journal describing how competing systems of
 speech transcription have a lot of overlap, and identifying commonalities
 between the various transcription systems and showing how TEI, slightly
 modified, can provide an interchange format.


Need a few new features/extensions \- for example to indicate some event or
 change in the flow of speech, or a container for a speech chunk and its
 annotation. 


Council urged to read the document and provide feedback to the group or to LB
 who works with the group. MH: try to get buy\-in from SIL. LB will do so,
 with MH’s help. PWS: is there overlap with the standoff group? Yes, in terms
 of work/interests, not people. JC: time estimate for when this will be a
 concrete proposal for Council to consider? LB: it’s sufficiently complete to
 start absorbing. We could discuss it at the next F2F, get Thomas to present
 it. In scale, amounts to a large\-scale feature request: a customization
 destined to be folded into P5 in its entirety. As the product of an ISO
 group, it is well on its way to becoming an official ISO standard and
 document, which would make it, like the TEI feature structures chapter, effectively
 part of a joint ISO\-TEI standard, and therefore more difficult to change,
 except in tandem with ISO.


Action: on all Council: Read ISO Speech transcription proposal
 (<http://bit.ly/1jyZC37>) before
 next F2F meeting




 Global Applicability of att.responsibility (MH)
 
 related tickets:


[https://sourceforge.net/p/tei/feature\-requests/443/](https://sourceforge.net/p/tei/feature-requests/443/)


[https://sourceforge.net/p/tei/feature\-requests/490/](https://sourceforge.net/p/tei/feature-requests/490/)


[https://sourceforge.net/p/tei/feature\-requests/509/](https://sourceforge.net/p/tei/feature-requests/509/)


MH argues that almost all elements occasionally need a 
 resp, which would be
 available if it were in att.global. There has been a ticket about this for
 several years now, and the case gets stronger each time it comes up on
 TEI\-L. One reason against is that that there is too much random stuff in
 att.global, so it shouldn’t be added. JC wants to discourage Council from
 adding things to att.global in order to keep the guidelines stable and not
 put anything into global which isn’t truly needed there. (If he had his way
 we’d be removing some of the things from att.global.) This was discussed in
 the Nov. 2013 Council meeting, and voted down because 
 resp can mean
 different things when used with different elements, so it would not be
 clearly defined. JC: same discussion as with 
 type... under what situations
 would we add it (or anything else) to att.global. Not everyone agrees with
 that. 



resp is used to document the responsibility for the markup 



resp is used to document the responsibility for the content



resp is used to document the responsibility for both markup and content



resp is used for tracking responsibility inside an institution


MH would like 
 resp to apply globally so that it can be the basis of a system
 for expressing credit in TEI/encoding projects. LB agrees that it’s useful
 in that particular case, but that it’s not a strong enough case to add 
 resp
 to att.global. SR: att.global contains attributes that are generally
 applicable, but not necessarily used by everyone at all times. 


The confusion that is already present in the definition of 
 resp could be
 clarified in the Guidelines, which would go a long way to explaining how it
 could be used and when it isn’t powerful enough to handle some cases.
 Suggestion is also that it not be in basic att.global, but in a module, so
 users who only want the most basic TEI wouldn’t see it. 


LB: Motion: need to think through where 
 resp is made available. as well as
 its relationship with 
 source and 
 cert. 


MH: suggests forming a workgroup to look at all 3 attributes, think through
 how they apply in different circumstances, not break backwards
 compatibility, and how they might be more clearly defined (see also FR [http://sourceforge.net/p/tei/feature\-requests/465](https://sourceforge.net/p/tei/feature-requests/465)). Some discussion 
 of using 
 resp to point to 
 respStmt elements, as a way of 
 avoiding the ambiguity with regard to what it means. MH, LB, HC
 come up with a position paper, Council can then decide who will be on the
 subgroup to write up a recommendation.


Action: MH/LB/HC to write a position paper on global
 applicability of 
 resp before next F2F meeting.




 Amber Feature Requests
 
 

| Number | Description | Notes |
| --- | --- | --- |
| [513](https://sourceforge.net/p/tei/feature-requests/513/) | [\`  resp\` should be a member of att.datable](https://sourceforge.net/p/tei/feature-requests/513/) | Group A: group recommends accepting and adding examples of the  multiple ways of doing it. Council agrees: Assign to SB, make  green |
| [512](https://sourceforge.net/p/tei/feature-requests/512/) | [Make   new obligatory attribute of   shift](https://sourceforge.net/p/tei/feature-requests/512/) | Group A: We think we should not make this mandatory, owing to  backwards compatibility of document instances, but that we  should strongly recommend (and use in all our examples) a    new\=unmarked (or   new\=normal or whatever makes sense). But we  will reconsider when the transcription of speech proposal is  fully made.  Council agrees: Green. Add a schematron  constraint to work as a   validUntil to remove the optionality of    new and make it mandatory. |
| [511](https://sourceforge.net/p/tei/feature-requests/511/) | [New element   transcriptionDesc as a possible child of    encodingDesc](https://sourceforge.net/p/tei/feature-requests/511/) | Group A: We worry about confusion with non\-speech  transcription; But we believe that T. Schmidt’s situation would  likely be well handled by a new child of   editorialDecl,  perhaps   convention or some such. We’d like to ask  Schmidt what he needs and if this would solve his case, but  given that we are expecting a significant transcription of  speech proposal from Schmidt, we’ll wait to see.  Council:  Wait for final draft of proposal. |
| [510](https://sourceforge.net/p/tei/feature-requests/510/) | [add a correspondence module and elements for capturing  correspondence specific meta data](https://sourceforge.net/p/tei/feature-requests/510/) | Group B: discussed briefly but felt that not ready for decision  yet; Council agrees to feed back suggests as and when asked. |
| [509](https://sourceforge.net/p/tei/feature-requests/509/) | [cert not allowed for rs](https://sourceforge.net/p/tei/feature-requests/509/) | Group B: agree with this, to be implemented, even though it  will be affected by longer\-term discussion over   resp  Council agrees: Green;   rs should have same attributes as  name. |
| [507](https://sourceforge.net/p/tei/feature-requests/507/) | [create generic policy for the TEI on integration of external  standards](https://sourceforge.net/p/tei/feature-requests/507/) | Group B: felt that the draft guidelines are not ready yet,  think it should stay with SB to edit more and explain.   Council: Agrees, SB/LB to edit, explain, and propose to  Council. |
| [506](https://sourceforge.net/p/tei/feature-requests/506/) | [pubPlace for the TEI Guidelines as a document](https://sourceforge.net/p/tei/feature-requests/506/) | Group C: yes, [http://www.tei\-c.org/release/doc/tei\-p5\-doc/en/html/TitlePageRecto.html](/release/doc/tei-p5-doc/en/html/TitlePageRecto.html)  change \- to Arlington MA? or elsewhere?. While we’re at it,  change “edited by Lou Burnard and Syd Bauman” as well? To the  Council as a corporate author? Or are Lou and Syd still the  authors of P5 as such?  Council: Green, assigned to LB.  (editors already changed) cf http://bits.nsms.ox.ac.uk:8080/jenkins/job/TEIP5/lastSuccessfulBuild/artifact/release/doc/tei\-p5\-doc/en/html/TitlePageRecto.html  for current state of source |
| [505](https://sourceforge.net/p/tei/feature-requests/505/) | [Redefine   msPart](https://sourceforge.net/p/tei/feature-requests/505/) | Group C: Yes, redefining   msPart in order to handle a single ms  that has been torn asunder is probably the easiest strategy with  fewest adverse consequences. Easiest just to change definition  of   msPart as noted in the FR. If we do that, we might also want  to make some elements of the parent   msDesc optional, so as not  to force people to name the hitherto nameless quasi\-abstract  object. Alternative strategies are possible, eg adding another  element that actually means the re\-composed object in order to  wrap multiple msDescs which each describes a part; or a linking  element that associates multiple parts with a virtual whole; or  even allowing msDesc itself to nest instead of repurposing  mspart. In any case the Guidelines [http://www.tei\-c.org/release/doc/tei\-p5\-doc/en/html/MS.html\#msid](/release/doc/tei-p5-doc/en/html/MS.html#msid)  needed to be corrected for the “scattered” part. The definition  needs to change to not require originall distinct or composite.   If no   msPart with   msIdentifier:   msIdentifier  required. Council has not decided and will investigate  this further (PWS/SG) and survey the community.  Action: on PWS/SG to investigate [FR505](https://sourceforge.net/p/tei/feature-requests/505/), survey  community, and report back to Council. |
| [504](https://sourceforge.net/p/tei/feature-requests/504/) | [Replace   active and   passive on relation with   from and    to](https://sourceforge.net/p/tei/feature-requests/504/) | Group C: TLDR; Council: to discuss later (see below). |
| [503](https://sourceforge.net/p/tei/feature-requests/503/) | [remedy the prose\-structure\-antagonism within the content model  of person](https://sourceforge.net/p/tei/feature-requests/503/) | Group A: We still suggest following the “hack” suggested on the  wiki page (use note) for now. This will be reconsidered when  rationalising person/place/org/event/object ;  Council:  won’t fix this but may reassess when rationalising named entity  elements. |
| [501](https://sourceforge.net/p/tei/feature-requests/501/) | [Add notion of model.resourceLike to description of  teiHeader](https://sourceforge.net/p/tei/feature-requests/501/) | Group A: Definition of ‘TEI’ needs to change, then ticket can  be closed.  Council:PWS to summarise changes needed to  Council list. |
| [500](https://sourceforge.net/p/tei/feature-requests/500/) | [Allow note within sourceDesc](https://sourceforge.net/p/tei/feature-requests/500/) | Group A: The ticket does not make a convincing (semantic) case  for the need for a change here, so we propose closing the ticket  without action. An alternative proposal for handling  born\-digital documents specifically might be raised (e.g. making    sourceDesc optional, with the express implication that  if you omit it, you are declaring that your document is  born\-digital).  Council: Agrees. |
| [499](https://sourceforge.net/p/tei/feature-requests/499/) | [change semantics of   except and   include on  moduleRef](https://sourceforge.net/p/tei/feature-requests/499/) | Group B: rejected. stick to what the guideline says, which is    except and   include only apply to elements. ACTION ON SR to  make sure that this is what is actually implemented in odd2odd,  i.e. remove hacks.  Council: agrees;  closed\-wontfix |
| [498](https://sourceforge.net/p/tei/feature-requests/498/) | [Permit new   persona as a child of    person](https://sourceforge.net/p/tei/feature-requests/498/) | Group B: agreed to ask proposer to submit a spec for    persona. Broad agreement that its a good idea.   Council: Mostly agrees, give us an   elementSpec to  consider. |
| [497](https://sourceforge.net/p/tei/feature-requests/497/) | [Change   role to allow one or more values](https://sourceforge.net/p/tei/feature-requests/497/) | Group B: this looks a corrigible error. make it Green and  implement Council: agrees. |
| [496](https://sourceforge.net/p/tei/feature-requests/496/) | [\`  taxonomy\` should be allowed as a child of  \`  category\`](https://sourceforge.net/p/tei/feature-requests/496/) | Group C: Clarification? the example seems to be mixing two  different axes of information. Shouldn’t these be two different  taxonomies (objection: this loses hierarchy; but present example  and use case is not really hierarchical in any case). Could this  be a special category that doesn’t inherit? Discussion of  concept of including non\-inheriting categories inside a  taxonomy. MH will produce his actual use case or a trimmed\-down  version of same, rather than the present made\-up example which  is not persuasive.  Council: agrees to reexamine when MH  elaborates. |
| [495](https://sourceforge.net/p/tei/feature-requests/495/) | [Allow   listRelation in   biblStruct](https://sourceforge.net/p/tei/feature-requests/495/) | Group C: the argument could be made for consistency reasons BUT  the inclusion of   listRelation to modeel.biblPart seems like a  bug   whereas listRelation should be allowed in   listBibl (since  listRelation is allowed in several other list\*). Additionally,  there are at least two other existing possibilities to link  bibls:   relatedItem (either used to point to or to  contain the   biblStruct of the realted item), or    link.  Council: doesn’t think it should be in    biblStruct. closed\-wontfix; But is happy to add   listRelation to    listBibl. SB to implement. |
| [492](https://sourceforge.net/p/tei/feature-requests/492/) | [Allow bibl inside app](https://sourceforge.net/p/tei/feature-requests/492/) | Group A and C: See discussion of FR491 below. |
| [491](https://sourceforge.net/p/tei/feature-requests/491/) | [Allow ref inside app](https://sourceforge.net/p/tei/feature-requests/491/) | Group A and C: This represents an attempt to use the TEI  apparatus system to capture all the literals of a printed  apparatus, essentially duplicating the functionality of    app by using   ref within   app to capture  the literal reference to the edited text. This is a bit  troubling. Partly in general, because this seems an  unsatisfactory halfway house (one should either use   app  to recast the apparatus, or capture the existing apparatus as    list within   note or sim.); partly for  slim\-end\-of\-the\-wedge reasons: how, for example, would the  introduction of   ref allow the tagging of a reference to  a line span? (as   app does using   from and   to)? Would we  then be asked to add   from and   to to   ref? And finally,  for logistical reasons: how exactly would one introduce   ref and    bibl (see [FR492](https://sourceforge.net/p/tei/feature-requests/491/)) using the existing content models? (See  below.) On the other hand, perhaps we have already conceded this  one by allowing   wit and other general elements  (model.global). One approach to acceding to this request would be  to create model.appPart, add wit, ref, model.rdgLike,   rdgGrp,  and   bibl (and model.pPart.transcriptional?!) to it, and simplify  the content model of   app based on this. Council: Reached  no clear consensus on this. JC to report back to Council. But  see discussion below on 492\. |
| [490](https://sourceforge.net/p/tei/feature-requests/490/) | [un\-bundle   cert and   resp](https://sourceforge.net/p/tei/feature-requests/490/) | (Discussed separately as part of   resp discussion) |
| [489](https://sourceforge.net/p/tei/feature-requests/489/) | [Make teiHeader/  type explicitly map to dc:type by using terms  from DCMI](https://sourceforge.net/p/tei/feature-requests/489/) | Group A: ok, at least as a suggestion option. Council  agrees. |
| [488](https://sourceforge.net/p/tei/feature-requests/488/) | [Add   points to att.coordinated](https://sourceforge.net/p/tei/feature-requests/488/) | Group B: agreed, this looks like a corrigible error. Implement  it. MH will raise separate ticket to point out that surfaceGrp  should be stripped of its data\-holding attribute classes.   Council: Agrees. |
| [486](https://sourceforge.net/p/tei/feature-requests/486/) | [deprecating members of a content model](https://sourceforge.net/p/tei/feature-requests/486/) | Group B: will be done using Schematron  Council:  Agrees. |
| [482](https://sourceforge.net/p/tei/feature-requests/482/) | [The term strikes back \- terminology chapter](https://sourceforge.net/p/tei/feature-requests/482/) | Discussed Separately |
| [443](https://sourceforge.net/p/tei/feature-requests/443/) | [resp should be a member of att.global](https://sourceforge.net/p/tei/feature-requests/443/) | Discussed Separately |
| [666](https://sourceforge.net/p/tei/bugs/666/) | video html to tei | Council agrees there is a problem. Use case: You have a .mp4 and a  .mov and a .avi and a .png and a .jpg. Show the mp4 if possible, or  other video, then fallback to the images, png preferred. Council  wonders whether it should invent a new grouping element. SR to make  a more concrete proposal to Council. |





 Wednesday
 
 
 TEI Standoff and Linked Data representations
 
 HC started off by explaining the background of the following ticket:




| [504](https://sourceforge.net/p/tei/feature-requests/504/) | [Replace   active and   passive on relation with   from and    to](https://sourceforge.net/p/tei/feature-requests/504/) | Group C: TLDR; Council: to discuss later. |
| --- | --- | --- |


Council discussed the difference between making things easier for RDF\-users
 and renaming these attributes. LB suggests that the ticket be re\-framed in
 the form of a proposal to re\-purpose 
 graph and 
 arc for this
 purpose, since they’re already closer to the proposed purpose and have 
 from
 and 
 to; there would just need to be either a new attribute or a method of
 using one of the existing ones (
 ana?) to characterize the relation. SB
 suggested simply embedding RDF XML in your TEI. HC objects that RDF XML is a
 terrible format, and that embedding elements from another namespace is not
 ideal. JC tasks LB \& HC \& SR to write a brief report examining:


* using 
 relation
* embedding \<rdf:RDF\>
* co\-opting 
 arc
* using another existing mechanism
* creating a new mechanism altogether


Action: LB/HC/SR: write brief report before next f2f on FR504
 examining options including 1\) using 
 relation; 2\) embedding
 \<rdf:RDF\>; 3\) co\-opting 
 arc; 4\) using another existing
 mechanism; 5\) creating a new mechanism altogether




FR492 (bibl in app).
HC and JC argued it was a corrigible bug.


Discussion centred on allowing a looser content model of app vs retaining it
 as the structured element it was intended as. MH suggests rationalising
 content model of app to make inclusion of new elements here easier as
 needed. FC wants to preserve the distinction between new digital apparatus
 and transcription of print critical apparatus. (HC notes a task force from
 MS SIG was meant to be investigating this, but has not made any progress.)
 FC would accept this request but purely as a starting point to rethinking
 the apparatus. HC suggests putting the 
 ref in the 
 lem, but
 
 bibl should be add. JC tasks HC, JC, MH and other interested parties
 to discuss on the ticket (492\) to sort out appPart.


LB notes “Global is as Global does”.


HC to poke the MS SIG working group on Crit App and get them to comment on
 these relevant tickets.


Action: on HC/JC/MH (and other interested parties): discuss
 appPart on ticket FR492


Action: on HC to encourage MS SIG to comment on this (FR492\) and
 other relevant tickets.




 TEI Release
 
 This is intended to be after the 7th of August. EM and SB to jointly be
 release managers. JC notes he is willing to send out the release notice on
 his holiday but will be otherwise out of contact.


SB to suggest a date within 1 week.


May have to push to early Sep.


Action: on SB to nail down date of release in next couple of weeks




 Guidelines Translation
 
 MH on Guidelines translation (with help from FC): Italian and German teams
 are not making much progress. Is there anything we can do?


MH summarised the problem of getting volunteers to provide translations. FC
 suggested possible sources of getting the funding to do this. FC expects to
 talk to DARIAH folks at a meeting soon, and will try to find some funding.
 JC offers to ask Board for money if we have a concrete proposal. SR notes
 that we did this before, and finding money for a one\-off solution is what
 got us into this position. MH: Council should do this (maintenance of
 existing translations) now since it has foreign language speakers. EM
 suggests that the reference pages should indicate when a description is out
 of date (potentially linking to english version, and form to submit new
 translation).


[https://docs.google.com/spreadsheet/ccc?key\=0AhciBT9b4XaZdGxVaXY3UkEtQUdJVkktMzI5ZjE2TGc\&usp\=drive\_web\#gid\=0](https://docs.google.com/spreadsheet/ccc?key=0AhciBT9b4XaZdGxVaXY3UkEtQUdJVkktMzI5ZjE2TGc&usp=drive_web#gid=0)


[https://docs.google.com/spreadsheet/ccc?key\=0AvMzvVg\_yrT8dG9tX2lLRGdXcDRYbUU3MTliR3hnenc\&usp\=drive\_web\#gid\=0](https://docs.google.com/spreadsheet/ccc?key=0AvMzvVg_yrT8dG9tX2lLRGdXcDRYbUU3MTliR3hnenc&usp=drive_web#gid=0)


FC thinks management of it will be fine. (And volunteers to still do Italian
 translations even when off Council.) PWS: wants to crowdsource with an app.
 EM: Who will proofread? FC: Must have an editor. PWS: A web based editor
 will help attract people to do this.


Council reached no clear consensus on what to do about maintenance or
 expansion of translations because of the problems involved in doing so. This
 will be raised again.


James to ask the Board:



- Should we continue to support so many languages?

- Should we prioritize translation into other “less obvious” languages
 eg Arabic, Hindi, Hebrew?

- How can the Board best support the community of translators?

MH wishes to relinquish the ticket to someone more qualified to engage
 directly with one of the target languages.


Action: on JC: Ask TEI Board: Should we continue to support so
 many languages? Should we prioritize translation into other “less obvious”
 languages eg Arabic, Hindi, Hebrew? How can the Board best support the
 community of translators? 






 TEI Future Developments \& Bluesky thinking 
 
 
 
 Council Meetings
 
 Are F2F meetings the best use of money every time? Generally accepted by
 Council that F2F is indeed significantly beneficial for various reasons.
 Partly it makes discussion easier, partly it forces us to get work done,
 partly it encourages knowledge exchange of technical aspects of Council
 duties? EM suggested attempting to use video conferencing technology
 again for teleconferences. Generally agreed that we could try this again
 (But that many people have problems in doing so.) 




 Council departures
 
 How do we ensure continuity of maintenance of our outputs, given the
 inevitability of Council departures? Specifically: how best to cope with
 things such as SR’s upcoming departure from Council (e.g. maintenance of
 stylesheets; Roma; OxGarage; and thorough knowledge of occult magic in
 ODD processing). 


JC: Should we be training people up in maintenance of the Stylesheets?
 MH: Yes. Should we be prepared to abandon support of stylesheets that
 TEI never formally undertook to develop to begin with? E.g. docx, doc,
 epub? Or are they so inextricably tied to TEI that we must maintain
 them?


SR: not a unique problem: every software project requires that one
 acquaint oneself with someone else’s code. JC: But the Stylesheets
 model Sebastian’s understanding and even experienced XSLT programmers
 find some aspects difficult. More documentation needed! Currently
 scattered and incomplete; needs to be put in a form that is genuinely
 useful to as many people as possible. SR: Perhaps Magdalena (JC’s DiXiT
 Fellow) could contribute.


MH suggests: Ahead of the next Council meeting, MH, JC, HC?, and SB
 should be tasked each with creating a 
 20 minute
 presentation on some aspect of the stylesheets or processing, which will
 be presented to the group with Sebastian as respondent (at his final
 Council meeting). This should go some way towards generating and
 propagating more expertise in bugfixing and development of the
 stylesheets codebase. These will be of permanent value if (and probably
 only if) the presentations themselves can serve as pieces of
 documentation that interlock into a working paper such as MH’s paper on
 Jenkins. EM: in order to spread the knowledge, assign stylesheet issues
 on github to someone other than SR, to Council members who have enough
 XSLT to have a chance at success, but enough ignorance of the
 stylesheets to benefit from the experience.


Action: on MH/JC/SB/HC: Discuss with each other and each
 create a 20 minute presentation for the next F2F on some aspects of
 stylesheets or other arcane TEI processing that may be difficult for
 others to understand.


Council summarises some of the software it has some responsibility
 for:



- Roma: Council discusses Roma’s increasing
 out\-datedness and continued desire for a replacement. Recall old
 discussions of TEI paying for Roma replacement; or, perhaps better,
 a clean new ODD editor and processor. [Unfinished draft requirements\-document for such a replacement
 exists](https://docs.google.com/document/d/1766WTJV2xcfANh8HRZW5m520yrC1nCzQJzUgKpwiylI/edit?usp=sharing). Should it be finished? made public? In present
 form (as a list of functional requirements) or as a proper IT
 specification? Does [Byzantium](http://tei.it.ox.ac.uk/Byzantium) (<https://github.com/sebastianrahtz/Byzantium>) supply a
 good start? Design of UI and Implemention are two separate tasks.
 Have a UI design competition?

- Jenkins: MH has nicely documented this in
 [the wiki](https://wiki.tei-c.org/index.php/Setting_up_a_Jenkins_server) and in a working paper linked therefrom.

- OxGarage: MH sets one up in Victoria and
 documents it.

- Stylesheets: Council will follow MH’s
 suggestion above; ODD processing stylesheets are a priority.







 Remaining Tickets
 
 
 Remaining Amber FR
 
 

| [490](https://sourceforge.net/p/tei/feature-requests/490/) | [un\-bundle   cert and   resp](https://sourceforge.net/p/tei/feature-requests/490/) | (Discussed separately?)  Council: delegated to global  applicability of   resp taskforce. |
| --- | --- | --- |
| [489](https://sourceforge.net/p/tei/feature-requests/489/) | [Make teiHeader/​  type explicitly map to dc:type by using terms  from DCMI](https://sourceforge.net/p/tei/feature-requests/489/) | Group A: ok, at least as a suggestion option. Council:  Initially agrees as suggested values, but then worries about  whether   type of   teiHeader is accurately being  classified. PFS to implement. |
| [485](https://sourceforge.net/p/tei/feature-requests/485/) | [add element rs as member of model.linePart](https://sourceforge.net/p/tei/feature-requests/485/) | Group B: N, reject; closed\-wontfix.  Council:  agrees. |
| [484](https://sourceforge.net/p/tei/feature-requests/484/) | [\`  availability\` should be a member of  model.biblPart](https://sourceforge.net/p/tei/feature-requests/484/) | Group C: seems sensible. Go green.;  Council: Agree, add  to monogr/series/analytic as well. |
| [483](https://sourceforge.net/p/tei/feature-requests/483/) | [change datatype of   medium to "1–∞ occurrences of data.name  separated by whitespace"](https://sourceforge.net/p/tei/feature-requests/483/) | Group A: Agrees.  Council  agrees it should be one to infinity but not data.word, still  data.enumerated. |
| [482](https://sourceforge.net/p/tei/feature-requests/482/) | [The term strikes back \- terminology chapter](https://sourceforge.net/p/tei/feature-requests/482/) | Discussed Separately |
| [480](https://sourceforge.net/p/tei/feature-requests/480/) | [Adding the   hand attribute to all (or most) text\-containing  elements](https://sourceforge.net/p/tei/feature-requests/480/) | Council does not think   hand should be global; LB  to see if tighter FR possible. |
| [479](https://sourceforge.net/p/tei/feature-requests/479/) | [Adding the   place attribute to   head and    seg](https://sourceforge.net/p/tei/feature-requests/479/) | \>Requestor needs to provide more examples,  otherwise SR to close. |
| [470](https://sourceforge.net/p/tei/feature-requests/470/) | [att.measurement and att.dimensions overlap](https://sourceforge.net/p/tei/feature-requests/470/) | Council agrees. MH to implement. |
| [459](https://sourceforge.net/p/tei/feature-requests/459/) | [warn user of dropped constructs](https://sourceforge.net/p/tei/feature-requests/459/) | Group B: Yes, we need to make schematron rules, but have a way  to do that now. Close this ticket.  Council: Agree, SB to  implement Schematron |
| [457](https://sourceforge.net/p/tei/feature-requests/457/) | [make explicit difference between tagUsage and ODD  documentation](https://sourceforge.net/p/tei/feature-requests/457/) | Group B: We believe the answers to Kevin’s 4 questions are  clear. LB to summarise. Council: Current usage: 1\) Yes..if you  need more, do it in your ODD. 2\) Yes, if you use   tagUsage you  must do it for all elements as it says in the prose of the  guidelines. 3\) No. It is to put in notes if you want. 4\) It is  about specific usage in a particular document.  Council  discussed whether to change   tagUsage requiring one for each  element in the text — separate FR. Close ticket. |
| [453](https://sourceforge.net/p/tei/feature-requests/453/) | [a place for metadata that you can't fit into existing header  elements](https://sourceforge.net/p/tei/feature-requests/453/) | Group B: closed\-reject — but we should produce more crosswalk  use cases / demonstrations. Council: SB/FC think we should have  this and use NVDL to validate it. Much discussion. FC wants a  task force to reexamine our relationship with other metadata  cases/demonstrations.  Council: FC to make a proposal.  Close ticket in meantime. |
| [422](https://sourceforge.net/p/tei/feature-requests/422/) | [teitoX: support passing configuration to saxon](https://sourceforge.net/p/tei/feature-requests/422/) | Council: Stylesheets issue, move to github; close  ticket. |
| [393](https://sourceforge.net/p/tei/feature-requests/393/) | [availability](https://sourceforge.net/p/tei/feature-requests/393/) | Council: LB seems to have completed ticket; close. |
| [387](https://sourceforge.net/p/tei/feature-requests/387/) | [allow   head in more places in div\*, table, and  list](https://sourceforge.net/p/tei/feature-requests/387/) | Council: PFS to investigate |
| [384](https://sourceforge.net/p/tei/feature-requests/384/) | [free\-standing attributes \-\> class](https://sourceforge.net/p/tei/feature-requests/384/) | Council: PFS to follow up. |
| [378](https://sourceforge.net/p/tei/feature-requests/378/) | [Encoding of Standoff annotations](https://sourceforge.net/p/tei/feature-requests/378/) | Council should comment. |
| [360](https://sourceforge.net/p/tei/feature-requests/360/) | [New attribute   keepHyphen](https://sourceforge.net/p/tei/feature-requests/360/) | Group B: PFS maybe find an example, add to guidelines, close  ticket.  Council: Close ticket. |
| [342](https://sourceforge.net/p/tei/feature-requests/342/) | [New section on encoding text directionality](https://sourceforge.net/p/tei/feature-requests/342/) | Group B:Done.  Council: Done. |
| [326](https://sourceforge.net/p/tei/feature-requests/326/) | [an   object element](https://sourceforge.net/p/tei/feature-requests/326/) | Group B: We’re waiting for a proposal.  Council: keep  ticket open. |




 Red Bugs for review
 
 

| \# | Summary | Description / Actions /Descions |
| --- | --- | --- |
| [666](https://sourceforge.net/p/tei/bugs/666/) | [video html to  tei](https://sourceforge.net/p/tei/bugs/666/) |  |
| [515](https://sourceforge.net/p/tei/bugs/515/) | [Bad example  of feature/​  fVal](https://sourceforge.net/p/tei/bugs/515/) | Council: Close ticket. |
| [440](https://sourceforge.net/p/tei/bugs/440/) | [mssing error  if an object with the same identifier exists](https://sourceforge.net/p/tei/bugs/440/) | Council: agrees to close. |
| [292](https://sourceforge.net/p/tei/bugs/292/) | [GLs say add  'ns' decl, but roma objects](https://sourceforge.net/p/tei/bugs/292/) | Council: Tasks SB to check if still a problem, if not close  ticket. |




 Red FR for Review
 
 
Showing 8 results of 8





| \# | Summary▾ | Description/decision/actions |
| --- | --- | --- |
| [502](https://sourceforge.net/p/tei/feature-requests/502/) | [Stored TEI tag after convert](https://sourceforge.net/p/tei/feature-requests/502/) | Council: Close adding an issue in GitHub |
| [464](https://sourceforge.net/p/tei/feature-requests/464/) | [Need for some way to test the oxygen\-tei package before  release](https://sourceforge.net/p/tei/feature-requests/464/) | Council: close in despair… only able to test manually. |
| [366](https://sourceforge.net/p/tei/feature-requests/366/) | [rationalize content models of org and place (etc)](https://sourceforge.net/p/tei/feature-requests/366/) | Council: waiting on JC |
| [324](https://sourceforge.net/p/tei/feature-requests/324/) | [Allow certainty etc. inside milestoneLike elements](https://sourceforge.net/p/tei/feature-requests/324/) | Council: Action on Council to read and comment by 1  October. |
| [300](https://sourceforge.net/p/tei/feature-requests/300/) | [Move witStart et al. to model.milestoneLike](https://sourceforge.net/p/tei/feature-requests/300/) | Council: discussed in depth; these belong in rdgPart; other  techniques should be used for outside app. close\-wontfix |
| [292](https://sourceforge.net/p/tei/feature-requests/292/) | [add SourceForge feeds to  http:/​/​www.tei\-c.org/​Activities/​](https://sourceforge.net/p/tei/feature-requests/292/) | Council: close, pending new CMS |
| [289](https://sourceforge.net/p/tei/feature-requests/289/) | [att.canonical for model.persTraitLike](https://sourceforge.net/p/tei/feature-requests/289/) | Council: Waiting on JC. |
| [160](https://sourceforge.net/p/tei/feature-requests/160/) | [Alignment and documentation of sound files](https://sourceforge.net/p/tei/feature-requests/160/) | Council: close. |




 Conclusion
 
 JC thanked Council for coming to Oxford and working so hard on all the
 tickets and additional discussions. He noted minutes might take a while to
 arrive since DH2014 and DHOxSS are imminent and so apologises for that in
 advance.


Some weirdos then proposed a vote of thanks to the chair, who got all
 embarrassed and suggested they go to supper.






