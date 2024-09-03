---
title: "TEI Council Meeting, Chicago 11-13 April 2011"
date: 2011-04-13
---
# TEI Council Meeting, Chicago 11-13 April 2011



Participants : Elena Pierazzo (EP), James Cummings (JC), Julianne
 Nyhann (JN), Gabriel Bodard (GB), Martin Holmes (MH), Kevin Hawkins (KH), Brett
 Barney (BB), Lou Burnard (LB), Martin Mueller (MM; day 2 only) , Piotr Banski (PB),
 Stuart Yeates (SY; by skype, periodically), Sebastian Rahtz (SR; day 2, am only, by
 video).


Location : The meeting was held at the Big Ten Conference Center, Higgins Road, Chicago Il.
 Council expresses thanks to Kevin Hawkins for facilitation, and for a guided tour
 of
 the Chicago downtown area on Tuesday evening, notably featuring dinner at Bistro
 110, a favourite dining spot for TEI Committees [since 1992](../../../Pictures/History/1992_0525_00.jpg). 



 Day 1
 
 Laurent opened the meeting at 0900 local time, welcoming Council members, and
 giving a brief overview of the Council's 
 modus operandi for
 the benefit of new members. The main object of this meeting would be to resolve
 as many of the outstanding amber tickets as possible, but also to discuss some
 procedural issues, notably those associated with the editorial process. SR would
 give an overview of the technical production line for P5 and a draft paper on
 Editorial Practice would be reviewed. It was important to reduce the number and
 complexity of tools we depend on, and to make the production and maintenance of
 the Guidelines automatic as far as possible. He also reminded those present that
 not all members were native British English speakers. 


An  [email dividing the currently amber tickets into groups](http://lists.village.virginia.edu/pipermail/tei-council/2011/012872.html) had been
 circulated and served as a basis for constructing the agenda. We would divide
 into small groups, each one focussing on one of the groups of tickets
 identified, and then report back with proposals for discussion or resolution in
 plenary.



 Tickets
 
 
 Group C1 correct usage of floating text
 (tickets [3106834](http://purl.org/TEI/FR/3106834),
 [3106829](http://purl.org/TEI/FR/3106829)) 
 
 We agreed that “completeness” as such was not a useful touchstone for
 deciding whether something should be tagged as quote or as floatingText.
 The existing references to “complete” should be removed, perhaps in
 favour of a word such as “substantial”, or simply removed. We noted that
 floatingText was permissible within quote, if the quoted material has a
 sufficiently complex internal structure. We agreed that “quotation” was
 a property relating to some section's narrative status, while
 “floatingText” related more to a passage's internal substructure.
 Rewording has subsequently been provided by MH, BB, KH, and LB (see
 ticket; see also [lengthy email from MM](http://lists.village.virginia.edu/pipermail/tei-council/2011/012890.html))




 Group C2 formalisation of
 
 availability (tickets [3086675](http://purl.org/TEI/FR/3086675)[3044329](http://purl.org/TEI/FR/3044329)) 
 
 We agreed that values for the existing 
 status attribute should not be
 changed. One possibility would be to complement this with an additional
 
 licence attribute, but we preferred the idea of proposing a new
 
 licence child element within 
 availability. In the
 simplest case, this might simply reference an existing licence agreement
 by means of its 
 target attribute. This might be complemented by prose
 content explaining any conditions about the applicability of the
 referenced licence, or stating the licence itself. Multiple
 
 licence elements might be supplied for a single 
 avail
 ability\> if different licences were applicable to the whole text in
 different situations. Multiple 
 availability elements should be
 supplied, and selected by the 
 decls atrtribute if different licences
 applied to different parts of the document. Additionally, having noted
 in discussion the need for such features as an embargo date, we agreed
 that the 
 licence element should be made a member of the datable
 class, with the specific semantics that the dates supplied would
 indicate the period during which the licence in question was applicable.
 We noted that we should not attempt to supply a complete rights
 management language.




 C3: usage of altIdentifier within
 
 msPart (ticket [3115238](http://purl.org/TEI/FR/3115238)) 
 
 
altIdentifier did not have the same substructure as
 
 msIdentifier, but was the only mechanism available for recording
 a former identifier for an individual 
 msPart. Reviewing this
 decision, council agreed that it would be better to permit
 
 msIdentifier within 
 msPart than to abolish 
 msPart and permit nested
 
 msDesc elements. We agreed to make the content model of
 
 msPart identical to that of 
 msDesc, and to make clear
 that the continued use of 
 altIdentifier as a sibling of
 
 msIdentifier rather than as a child of it should be
 deprecated.


We agreed to revisit the appropriate mechanism for recording and
 implementing deprecation later in the meeting.




 Group A1 : container element for musical
 notation (tickets [3086720](http://purl.org/TEI/FR/3086720),
 [3086726](http://purl.org/TEI/FR/3086726)) 
 
 The Music SIG had made several proposals for ways of embedding in a TEI
 document specialised representation of musical notation expressed for
 example using the MEI or other vocabularies. The existing
 
 musicNotation element might perhaps better be renamed
 
 musicNotationDesc since it documents the presence of music
 notation in a manuscript rather than actually representing it. Council
 sympathised with this view, but did not wish to perturb existing usage
 too much. We agreed that an appropriate name for the proposed container
 element would be 
 notatedMusic and requested the Music SIG to
 continue their excellent work by providing a preliminary ODD for the new
 element. This is now available in the SVN repository, along with a
 sample ODD embedding it; see further
 http://tei.svn.sourceforge.net/viewvc/tei/trunk/Documents/notatedMusic/
 ) 




 Group A2\. Proposed new grouping elements
 (tickets [3060867](http://purl.org/TEI/FR/3060867),
 [3147225](http://purl.org/TEI/FR/3147225)) 
 
 This proposal sought to organise and provide several new grouping
 elements within 
 person, 
 place, 
 org :
 
 stateGrp, 
 eventGrp, 
 traitGrp etc. Though
 sympathetic to the use case we felt that we needed to see more
 justification; we were also unable to reach consensus about the
 difference (if any) between xxxGrp and listXXX as element names. The
 ticket should remain open.





 Group A2: Proposed new 
 document element (ticket
 [3095637](http://purl.org/TEI/FR/3095637))
 
 We explored this proposal at length in a plenary session facilitated by
 EP. Council recognised and endorsed the use case for a view of the
 encoded physical object, comprising surfaces, zones, patches, and
 optionally lines of writing. 
 diploma was suggested as an alternative name. Discussion focussed chiefly on the
 distinction between the proposed 
 document and the existing
 
 facsimile elements. Some expressed concern that it would be
 difficult to explain and justify this distinction; others felt that the
 two were entirely discrete. It might be possible to regard the existing
 
 facsimile as a special case of the proposed 
 document,
 even though (for example) the 
 zones identified within a
 
 facsimile might be motivated by other factors than those
 identified within a 
 document. We agreed that it might be useful
 to find out whether the proposed user community would find it
 unacceptable to embed the image information currently managed by
 
 facsimile within the proposed 
 document element. 




 Group C4 : 
 epigraph content
 wrongly described (ticket [3227935](http://purl.org/TEI/bug/3227935)) 
 
 The description for 
 epigraph implies that it may contain only
 quotations. We agreed that this was a mistake, and that the wording
 should be changed to suggest an epigraph might contain a saying or
 motto. An example such as the Forster one cited in the ticket should be added to the
 element spec. 




 Group C5 : 
 geogName and
 
 placeName (ticket [3216049](http://purl.org/TEI/bug/3216049)) 
 
 There was a general feeling that there was a case for permitting 
 cert on
 
 geogName as well as on 
 placeName. LB proposed that this
 should be done as part of a general review of the attribute class
 memberships of these naming elements and undertook to document the
 situation.




 Group C6 : retaining formatting within
 
 code (ticket [3223636](http://purl.org/TEI/bug/3223636)) 
 
 Some way of retaining whitespace, tabs, line breaks, etc within the
 content of 
 code elements was needed. We felt that this should be
 done by using xml:space rather than by permitting e.g. 
 lb/\> or
 
 space/\> within its content. 




 Group F : various bibliographic issues 
 
 Ticket [2976715](http://purl.org/TEI/FR/2976715): We agreed to add 
 distributor to model.respLike,
 and to use model.respLike within content models passim. The distinction
 between intellectual responsibility and responsibility for distribution
 might be sorted out later.


Ticket [2984463](http://purl.org/TEI/FR/2984463) : We agreed to define a new att.sortable class providing
 
 sortKey, with initial members 
 bibl
biblStruct, 
 person, 
 place, and 
 event



Ticket [2493417](http://purl.org/TEI/FR/2493417) : This had already been implemented, but lacked
 documentation; KH agreed to provide documentation.




 Group D1: various attribute class membership modifications
 
 Ticket [3113682](http://purl.org/TEI/FR/3113682) : Make 
 ptr and 
 ref members of
 att.internetMedia. We agreed that this was desirable for documentary
 purposes, whether or not the server could deliver the goods. The
 datatype of 
 mimeType is a different question


Ticket [3060874](http://purl.org/TEI/FR/3060874)
 : Make 
 faith, and other
 model.persTraitLike and model.persStateLike
 elements members of att.canonical; other
 examples mentioned included
 
 nationality, 
 socecStatus,
 
 affiliation, 
 education,
 
 occupation. We agreed that this
 seemed reasonable. 


We also considered whether all elements currently using
 
 code and 
 scheme should systematically be made
 members of att.canonical instead,




 Group E1 : various technical issues
 
 Ticket [3118435](http://purl.org/TEI/FR/3118435) Expanding ODD 
 content element to support interleaving
 of content models and also specification of max and min. We were unclear
 about the purpose of this: LR to check with the poster.


Ticket [3156049](http://purl.org/TEI/FR/3156049) : We were not sure whether validation of examples which
 contained no single root element was feasibly valid. We agreed that
 recommended practice should be documented in tcw20 and in the
 specification for 
 egXML A further comment on the ticket
 clarifies the concerns expressed at the meeting. 


Ticket [3064757](http://purl.org/TEI/FR/3064757) : Not discussed through lack of time.






 Day 2
 
 
 TEI P5 Workflow and Toolkit
 
 Sebastian joined us by video conference to present the wonderful new Jenkins
 system. This web application constantly monitors updates to the TEI's
 sourceforge svn repository, automatically rebuilding and testing the
 


Guidelines and schemas in response to any changes. 
 
 Martin H agreed to investigate the possibility of providing a second Jenkins
 instance at Victoria. The process of doing so would hopefully show up any
 undocumented special\-case knowledge in the present installation and
 scripts.


Sebastian noted that W3C schema source is currently generated from the
 RELAXNG source, and that there is no direct ODD to W3C schema translator.
 Some W3C schema features cannot be generated from ODD.


Piotr suggested that svn commits might also trigger an email to a sf mailing
 list to which interested parties might subscribe themselves. The list
 tei\-notify
 lists.sf.net has now been set up accordingly (for instructions see [wiki entry](https://wiki.tei-c.org/index.php/TEI-Council-FAQ#How_can_I_find_out_about_every_time_a_change_is_made_in_the_TEI_subversion_repository)). 




 Tickets contd.
 
 
 Group F various bibliographic issues, continued
 
 Ticket [3177339](http://purl.org/TEI/FR/3177339) : We agreed that series and seriesStmt should permit the
 same child elements; the only difference being that the former permits
 TEXT data between child elements. 


Ticket [2987241](http://purl.org/TEI/bug/2987241) : We agreed that it would be desirable to provide some
 substructure within 
 bibl, for cases where 
 biblStruct is
 considered inappropriate. After consideration, it was agreed that the
 best way would be to allow 
 bibl within 
 bibl so that for
 example information about a conference volume could be grouped distinct
 from the title (etc) of an article in it. The 
 type attribute should be
 used to distinguish different use cases. Some examples were needed. We
 also agreed that 
 series as a child of 
 bibl should be
 deprecated in favour of a nested 
 bibl type\=”series”\> 




 Group D2: define generic dating class
 (ticket [2925145](http://purl.org/TEI/FR/2925145)); 
 calendar
 datatype (ticket [2994671](http://purl.org/TEI/FR/2994671))
 
 With some reluctance at the proliferation of attributes implied, it was
 agreed that some way of providing normalised date values using something
 other than the Gregorian calendar was needed, both on 
 date itself
 and on members of the current att.datable class such as persEvent. The
 datatype for such new attributes would probably need to be data.word .
 We felt that the name att.datable.custom would be better than the
 proposed att.datable.generic.


We agreed that the 
 calendar attribute should become a pointer element,
 pointing to some kind of definition for the calendar concerned. If not
 externally defined, such new definition would be provided by a new
 
 calendarDesc element within the 
 profileDesc



GB wrote up and implemented the calendar proposal. 


MH subsequently clarified the proposed implementation for generic
 dates as follows:
 The following attribute class should be created:
 att.datable.custom It should be added to att.datable, alongside
 att.datable.w3c and att.datable.iso. The following optional
 attributes should be added to the class, with a datatype of
 1\-to\-infinity of data.word: 
 when\-custom
from\-custom
to\-custom
notBefore\-custom
notAfter\-custom The following optional attributes
 should be added to the class, with a datatype of data.pointer:
 
 datingPoint
datingMethod In addition: 
 calendar should be moved
 from att.date to att.datable. 
 period should be moved from
 att.datable.w3c to att.datable. Finally, a new section needs to be
 added to the Guidelines to explain the use of these attributes. This
 can only be accomplished once action has also been taken on ticket
 [2994671](http://purl.org/TEI/FR/2994671) (
 calendarDesc). 





 Group B2: datatype issues 
 
 Ticket [3060919](http://purl.org/TEI/FR/3060919) : We agreed that "confidence" had a useful mathematical
 sense, and was quite distinct from the existing "low/medium/high" valued
 confidence specified by 
 cert. We agreed the existing att.ranging class
 should also provide an attribute 
 confidence to express it, expressed as a
 numerical value between 0 and 1\. 


Ticket [3060909](http://purl.org/TEI/FR/3060909) : We agreed to add 
 precision to 
 precision and
 
 cert to 
 certainty each having data.certainty values
 high,medium,low. Ticket has been updated and change made. 


Ticket [2994671](http://purl.org/TEI/FR/2994671) : Datatype for 
 calendar: agreed (and implemented)




 Group A4: new transcriptional elements for genetic markup (ticket
 [3095640](http://purl.org/TEI/FR/3095640))
 
 EP presented the purpose of each of these proposed new elements. We
 agreed that 
 modSpan was unnecessary if 
 mod was provided, and a
 member of att.spanning. We agreed that 
 rewrite might be better
 renamed as 
 retrace. We noted that 
 used was a special case of
 
 metamark. Some felt the need for greater clarity about the distinction between 
 undo and 
 redo. Discussion chiefly focussed on which of these elements,
 if any, should be permitted in the content of 
 document; EP felt
 strongly that all transcriptional elements (these, plus the existing
 ones) should be permitted in both 
 text and 
 document; others
 were less sure. Some of them seemed definitely non\-documentary, others
 less so. 




 Group A5: new 
 stage attribute and 
 stage element (ticket
 [3095641](http://purl.org/TEI/FR/3095641))
 
 We agreed that the idea of documenting writing stages in this way was
 useful and feasible. We noted that stages of this kind were not
 necessarily always chronological, but could be used for any kind of
 grouping; also that a given stretch of writing might be assigned to
 multiple "stages".


Mostly we found it difficult to decide on a better name than "stage"
 which was clearly too confusing in a TEI context. Alternatives proposed
 were "layer", "changeSet", "stratum" or "phase". LB attempted a straw
 poll, the results of which were as follows:




| name | Favourite | Acceptable | Possible | score |
| --- | --- | --- | --- | --- |
| actionGrp | 1 | 1 | 1 | 6 |
| changeSet | 2 | 1 | 0 | 8 |
| docStage | 1 | 0 | 0 | 3 |
| intervention | 0 | 1 | 1 | 3 |
| interventionGroup | 1 | 2 | 0 | 7 |
| juncture | 0 | 0 | 1 | 1 |
| layer | 3 | 1 | 1 | 12 |
| phase | 1 | 0 | 0 | 3 |
| revCampaign | 0 | 0 | 1 | 1 |
| stage | 0 | 0 | 2 | 2 |
| stratum | 0 | 3 | 0 | 6 |


 The scoring above gives 3 for a first place choice, 2 for a second, and
 1 for a third. Although
  layer comes out well
 ahead of the rest, there is also a sizeable vote for some kind of
 compound name, notably 
  changeSet. Combining the
 votes for 
 actionGrp and
 
 interventionGroup with those for
 
 changeSet gives a total of (4,4,1\) i.e. 21\.
 





 The Board Perspective
 
 Martin Mueller gave an overview of some of the major issues and challenges
 facing the TEI, from his perspective as Board Chair. Although the TEI is
 widely recognized as the de facto standard for serious scholarly editing
 amongst the digerati, mainstream literary scholars and "library folks" alike
 seemed largely ignorant of its importance to their work. This lack of
 perception and recognition needed to be addressed urgently if we were to
 overcome the current serious budgetary issues. 


He reported on some recent conversations with
 Google, and his own experience of the difficulty
 of reconciling widely varying encoding practice
 even within the TEI family. He noted that in 2015
 the EEBO TCP text collection would become public
 domain: perhaps this would be a good moment to aim
 for in making their texts P5 compliant. It was
 hard to make the case for good encoding practice
 when current text mining tools could not take
 advantage of it. In discussion, we noted that
 librarians, often operating with limited resources and needing to serve a wide range
 of scholars, tended to prioritize making content available and usable. Their focus
 was more likely to be on creating metadata to make content accessible, rather than
 on rich encoding of text, which often involves specialist knowledge of the material. In determining strategic
 objectives and priorities for the TEI we needed to
 consider traditional scholarly tools, but also how
 an industrial approach using baseline encodings
 might best contribute to scholarship. How feasible
 might it be to imagine a convergence amongst the
 many dialects of P5? He felt that we should
 seriously consider reducing the number of
 different ways of doing things at P6, though
 others felt that variety of approaches was a major
 strength of the TEI. We agreed that there was need
 to introduce a "deprecation strategy" to indicate
 clearly to the community the direction we
 envisaged for the TEI.


EP asked about the status of SIGs and workgroups; specifically, who would be co\-ordinating
 them in future and whether there would be a report from them at the next
 Members Meeting. LR noted that the SIG rules of engagement required them to
 report to the Council. 





 Day 3
 
 
 The 
 How to Edit P5 document.
 
 LB introduced the [working paper TCW20](/Activities/Council/Working/tcw20.xml). In discussion, it became
 apparent that the document needed more background
 information, for example that "the Guidelines"
 referred to the ODD sources, rather than the
 published outputs; also it provided no information
 about how one might construct a "local build
 environment" rather than relying on Jenkins for
 validation. Maybe some kind of sandbox
 environment would be useful. So far we didn't know
 of any build environments not running under Linux,
 though it would be excellent if someone developed
 one. 


Some gaps in the document were deliberate: it does not tell you how to use
 sourceforge or subversion. Any council member wishing to commit changes to
 the svn repository needs to be registered as a developer with the project;
 registration can be done by the current project admins (LB or SR) and there
 are currently about a dozen developers. 


To show what is involved in practice, GB then walked through his actions in
 implementing and testing one of the changes agreed yesterday (adding
 calendarDesc). 


LB agreed to update the document further,
 possibly adding some tutorial examples for
 common scenarios.


PB asked whether to add Polish translations to any specs he was working on.
 Although these would not appear in the Guidelines until the multilingual
 framework had been expanded to include Polish, this might be worthwhile. He
 should check this with SR, as translation co\-ordinator.




 Tickets: the final frontier
 
 Following publication of the minutes, Council members wishing to experiment
 with svn should volunteer to implement any changes specified in them. Any
 agreed changes not implemented within one week of publication of the minutes
 would be implemented by LB.


Reviewing the discussion of the genetic issues, Council agreed the need for
 some way to represent documentary structure was entirely accepted, as was
 the case for the additional elements discussed under A4 and A5\. Exact
 implementation details needed further discussion and clarification
 however.



 Group A6: Proposed 
 object
 element (ticket [2811239](http://purl.org/TEI/FR/2811239)) 
 
  This ticket appeared on the list in error, as it should have been closed
 since the substantive work has already been done (by providing the
 
 objectType element). If the ticket requestor
 wishes to propose a new 
 object element, a new ticket should be
 opened. 




 Group B1: review content model of
 
 subst (tickets [3080015](http://purl.org/TEI/FR/3080015),
 [2859355](http://purl.org/TEI/FR/2859355)) 
 
 Despite a lengthy and occasionally heated discussion, we were unable to
 reach consensus about the content model for 
 subst. Several felt
 that it was only useful as a simple grouping of 
 add and 
 del
 elements which the encoder wished to consider expressions of a single
 act of emendation, and that hence it could not contain anything other
 than those elements, In cases where this simple model did not work, for
 example because the addition and the deletion were not contiguous, it
 was suggested that a standoff 
 join type\="subst" element should be
 preferred. This seemed an excessively complex solution to the simple
 case where the addition and deletion are separated by a single unchanged
 word or by a linebreak, or (less plausibly) other milestone. Certainly
 the Guidelines needed more examples and clearer guidance on when this
 element should be employed. Eventually, it was agreed that a subgroup
 comprising JC, EP, GB would discuss further, preferably with input from
 others in the MS SIG such as Thorsten Schassen, and other commenters on
 the ticket, and then report back as soon as possible.





 Deprecation
 
 What does it mean to say that an element, attribute, value list etc is
 "deprecated"? At present we do this only in the prose of the Guidelines. We
 agreed that we should do more to make clear when this occurred. The 
 status
 attribute had been added to allow clear indication in the ODD source for any
 identifiable component, but was not being currently used, nor did any of the
 current ODD processing stack take note of it. 


We agreed that we should systematically add 
 status\="deprecated" for features
 having that status, and also investigate the possibility of making the
 odd2odd stylesheet ignore such components by default.


We discussed ways of announcing deprecation in advance of release notes, and
 agreed to add "deprecated" as a possible category value on the feature
 request and bug trackers (This has now been done). 




 Next face to face meeting
 
 LR confirmed that he believed there would be funding available for a further
 face to face council meeting before the end of the year. It was hoped to
 hold this in Paris in early November. LR would circulate a doodle to fix the
 date. 


The meeting closed at 1430 with renewed thanks to KH for local
 facilities.





