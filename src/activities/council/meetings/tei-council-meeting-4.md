---
title: "TEI Council Meeting 26 and 27 April 2007"
date: 2007-04-27
---
# TEI Council Meeting 26 and 27 April 2007





All times are local (CEST, UTC \+2\) unless otherwise noted.
All expected participants were present: Syd Bauman, David Birnbaum, Tone Merete Bruvik,
 Lou Burnard, Arianna Ciula, James Cummings, Matthew Driscoll, Dan O'Donnel, Dot Porter,
 Sebastian Rahtz, Laurent Romary, Conal Tuohy, John Walsh, and Christian Wittern (chair).
The meetings were held at the [Berlin\-Brandenburgische Akademie der Wissenschaften](http://veranstaltungszentrum.bbaw.de/anfahrt/ "Berlin-Brandenburgische Akademie der Wissenschaften"), Gendarmenmarkt, Berlin. Immediately prior to the meeting Council received a presentation
 about the BBAW by Alexander Geyken, and thanks its hosts for the opportunity to meet
 in such a lovely and historic place. Council also expresses its gratitude to Council
 member LR for again being the local host (he hosted the [2005 Council Meeting](https://www.tei-c.org/Activities/Council/Meetings/tcm17.xml "2005 Council Meeting") as well).
 
 Meeting per se called to order Thursday approximately 09:20 and continued until approximately 17:50;
 resumed Friday approximately 09:10 and continued until approximately 17:38\.

* Appendix A: [Additional Notes for Future Work](https://www.tei-c.org/Activities/Council/Meetings/tcm30.xml#back.1_div.1)



I
-



### Adoption of Agenda


No major changes; as expected, some items were added to the list of issues in [Resolution of outstanding issues](https://www.tei-c.org/Activities/Council/Meetings/tcm30.xml#RES "Resolution of outstanding issues").


### Minutes, work items, progress since last meeting



SR: move outstanding … to TRAC
done
CW: write to PB … P5 1\.0
done; Murray McGillivray says it's a good opportunity to work further on proposals
LB: Post … TEI\-L to solicit comment
Consensus was this was done, and that there has been no public outcry; note also [Tom Elliot's comments](http://icon.stoa.org/trac/pleiades/wiki/TEIPlaceDraft "Tom Elliot's comments"). There has been no significant objection to either \<listPlace\> or \<nym\> proposals.
all: Attempt to encode a place …
DO, AC, JC report they've done this, and during the ensuing discussion the issue of
 dating attributes was raised. Council felt that any element that required either the
 attributes in att.datable or those in att.dateTime would also need the other. Thus
 it was decided to merge these two classes, with the recognition that any element that
 needed dating attributes would now have 5 attributes with which to do so, unless the
 module on names and dates is loaded, in which case there would be 10\.
**Action 1**: *SB TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/329>. Merge att.datable and att.dateTime, using new name for value/dateValue*
 \[Note: What about duration? Should it also be in this combined attribute class?]However, it was agreed that when the classes were merged neither the current name
 of the attribute supplied by att.dateTime (value) nor the previously proposed name
 (dateValue) were good names for this attribute, the former because it carries insufficient
 semantic information when used on elements other than \<date\> and \<time\> , and the latter because it is too clumsy for use on \<date\> and \<time\> .
**Action 2**: *LB Come up with a new name for value/dateValue*

all: Review the \[conformance] draft …
done; discussion of details deferred until chapter review
JC: Produce revised draft
JC reports this was accomplished, and furthermore that the draft was then revised
 again by LB.
SR, LB: Draft request for chapter reviewers
done
SR: Allocate chapter reviewers
done
LB, SB: … list of outstanding issues …
not really done, but the the moment passed by



### Reports on Chapter reviews



#### FM1\-IntroductoryNote.xml


JC reports that he has reviewed FM1, and that, not surprisingly, it needs to be entirely
 re\-written. JC has opened a [ticket in Trac](http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/326 "ticket in Trac") for the re\-write and has assigned it to LB. Council notes that this includes updating
 the list of contributors to the Guidelines. LB notes that traditionally, and for good
 reason, this section is produced last.
Along with contributions, it was pointed out that the current editors' names do not
 appear on the title page (only the names of the original editors of P1, P2, and P3
 appear). It was agreed that how credit for editing is attributed on the title page
 is an issue for the Board of Directors.
**Action 3**: *DO Raise issue of editors' names on title page w/ Board*


#### AB\-About.xml


DO reports that this section also needs to be almost completely re\-written. There
 are quite a few changes needed that DO feels he can do himself, but there are also
 sections requiring re\-write, that he does not feel comfortable doing. It was agreed
 that DO should ‘tweak’ those parts of the chapter which should remain in place (and
 send the results of this effort to [the editors](mailto:editors@tei-c.org "the editors")), and indicate the sections which need to be re\-written entirely (by posting to the Trac
 ticket).
**Action 4**: *DO TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/330>. Work on AB*


#### SG\-GentleIntroduction.xml


AC reports basically that there is too much discussion of DTDs. Council discussed
 what the goals of SG should be — the consensus was that SG is to discuss*only* that which is needed to understand the Guidelines, i.e., discuss Relax NG compact
 syntax to the exclusion of other schema languages. Discussions of Relax NG XML syntax
 and DTDs (if they continue to be supported) should be elsewhere, perhaps USE.
**Action 5**: *LB TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/327>. Trim down SG to RNC only*


#### CH\-LanguagesCharacterSets.xml


TMB reports that she has reviewed this chapter, and considers it in good condition
 except for Unicode 5 updates. Editors report that very recently (i.e., later than
 the copy TMB was reviewing) all updates suggested for Unicode 5 have been made except
 for those needed to update the format of language tags from RFC 3066 to RFC 4646\.
**Action 6**: *SB Finish 3066 to 4646 update*
Council considered where in the Guidelines this information should be placed, and
 decided it would be better if CH were the last part of the front matter, rather than
 the first chapter. (This change would simultaneously make ST the first chapter, which
 seemed fitting, and move discussion of character sets, which is arguably not directly
 a TEI topic, out of the sequence of chapters.)
**Action 7**: *LB move CH to \<front\> after SG done*
DB reports one possible confusing point in CH — summed up with the question ‘should cœur be considered to be 4\- or 5\-characters long?’.


#### ST\-Infrastructure.xml


DB reports overall it looks fine. It discusses all 3 schema languages (Relax NG, W3C
 XML Schema Language, and XML Document Type Definitions), and he suggests moving discussion
 of schema languages \& fragments out of this chapter.
Council was not prepared to commit one way or the other on this issue, in large part
 because there are other major issues to consider with respect to ST, including what
 it should contain and what is its position in the Guidelines. Council thus deferred
 a definitive decision pending action item on all to re\-read and re\-think [ST](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=ST "ST") and its position in the Guidelines
**Action 8**: *DB TRAC [Re\-think ST and its position in the Guidelines](http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/341 "Re-think ST and its position in the Guidelines")soon*


#### HD\-Header.xml


JW \& MD. JW reports he will send list of DTD references. Suggests changing ‘computer
 file’ to something more modern, e.g. ‘digital object’. JW thinks we should remove
 ‘machine\-readable transcription’ vel sim from the suggested value of \<title\> .
**Action 9**: *DPRecommend keeping ‘machine\-readable transcription’ or not*
 He does not believe ISBDCF (perhaps ISBDER now?) would normally create a title like
 this. It was agreed that *\[? missed something here? ?]* would find out what ISBD category TEI files are, and how they *\[? who are they? ?]* recommend this be done, and then recommend a re\-wording of the entire paragraph in
 HD accordingly.
 
 **Action 10**: *DP find out ISBD recommendations, and suggest re\-wording of paragraph in HD*
 JW also points out that a \<specList\> precedes a list of elements with prose descriptions near the beginning of section [HD.3\.3](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=HD#HD53 "HD.3.3"); he suggested, and Council agreed, that the \<specDesc\> s be broken out of list and put with the prose.
 
 **Action 11**: *Eds TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/337>. Merge lists in HD.3\.3*
It was also pointed out that the content of \<gloss\> es in the Guidelines are inconsistent, e.g. in use of case.
**Action 12**: *SB TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/338>. Regularize glosses*
There was lots of discussion on \<rendition\> and rend, the details of which are not currently in these minutes, but rather are
 to be written up by JW; this write\-up should include discussion of:
 
 * mechanism to indicate a default rendition
* style (suggestions to processors as to how the TEI file should look on output) vs
 rendition (recording how the source document looks)
* mechanism for stating in what language (e.g., CSS, XSLFO, DSSSL, WWP rendition ladders)
 renditions are recorded


**Action 13**: *JW TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/334>. Write up his thoughts \& today's council discussion on rendition*
 . The main immediate result of this discussion was to add a mimeType attribute to \<rendition\> .
 
 **Action 14**: *Eds add a mimeType attribute to \<rendition\> 2007\-05\-04*

DO points out there is a protected namespace ‘example.TLD’.
**Action 15**: *Eds. update examples like scheme that use URIs to use example.edu*
JW pointed out some further particular deficiencies:
 
 * [HD.2\.7](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=HD#HD3 "HD.2.7") has no reference to \<msDescription\>
**Action 16**: *LB Put a discussion of \<msDesc\> into HD*
* In [HD.4\.2](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=HD#HD41 "HD.4.2") the discussion of the \<language\> element does not mention ident up front.
 
 **Action 17**: *SB add ident to atts of \<specDesc\> for \<language\> in HD.4\.2\.*



A brief discussion about the necessity of having the target of a pointer that is in
 an example also present in an example (possibly the same one). Council noted that
 if the target is not in the same or a nearby example, it should be mentioned in the
 prose that discusses the example to what kind of element the attribute points. E.g.,
 ‘In the following example, the values of the who attribute refer to \<castItem\> elements in the TEI header’.
Council changed name of \<msDescription\> to \<msDesc\> .
**Action 18**: *Eds change name of \<msDescription\> to \<msDesc\> .*
MD supplied a list of typos to in HD to LB.
**Action 19**: *LBfix MD\-reported typos in HDdone*


#### CO\-CoreElements.xml


DB reported that overall this chapter is in good shape, with no references to DTDs.
 He has [several comments](http://lists.village.virginia.edu/pipermail/tei-council/2007/002860.html "several comments") which were posted (via SB) to the Council list.
Council discussed the current mechanism of indexing. While the thought was expressed
 that perhaps duplicating the indexing mechanism that is used for printed books (with
 the capability of handling a span added on) is not ideal, no one thought it would
 be a good idea to re\-think how indexing works for P5 1\.0\.
Council decided that the prose of the Guidelines should explicitly say you can either
 put multiple names in \<author\> or use multiple \<author\> s, with an example of each near where \<author\> is defined.


#### DS\-DefaultTextStructure.xml


AC reports she has noted references to P4 architecture on the [Trac ticket](http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/61 "Trac ticket"), and that LB has already fixed them.
Council reviewed and discussed \<floatingText\> , with approval and support for the Guidelines current handling of it, but the desire
 for more examples.
The problem with content in \<divGen\> was discussed (i.e., that deterministic content models can not be generated for \<divGen\> with the content Council has requested — att.divTop and att.divBottom). Since several
 Council members thought use cases requiring \<head\> were clear, but no one had any, or could readily come up with any, use cases for the
 other elements, it was decided that the content could be limited to a new class (model.headLike),
 which should be created and used in places (like \<divGen\> and \<castGroup\> ) rather than \<head\> directly.
**Action 20**: *SB create model.headLike*
Council also recommended that the discussion of the use of \<divGen\> in the Guidelines (i.e., [CO.8\.2\.2](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=CO#CONOIX "CO.8.2.2") should also discuss the use of PIs for the same purpose.
**Action 21**: *LB Add discussion of PIs to CO.8\.2\.2*


#### VE\-Verse.xml


JW has noted some typographical errors, which he will post.
**Action 22**: *JW post errors noticed in VE*
 He also noticed that the first occurrence of met in section [VE.2](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=VE#VEST "VE.2") should instead be rhyme, and that the last paragraph of this section has some problems
 (the word as is missing, the implication that \<lg\> s may not contain headings is incorrect).
 
 **Action 23**: *LB fix VE.2 errors JW reported done*


#### DR\-PerformanceTexts.xml


JC points out that his comments have been posted to the [Trac ticket](http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/82 "Trac ticket"), and that he has had some conversation with LB about this chapter. Very little of
 importance has changed or needs to change, except the addition of discussion of the
 new \<floatingText\> element.


#### TS\-TranscriptionsofSpeech.xml


DP reports that there is a reference to a character entity (sp) in [TS.7\.2](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=TS#TSBA "TS.7.2"). \[Note: No action was assigned during the meeting; the note\-taker has assigned them
 to the editors.]
**Action 24**: *SB Remove entity reference from example in TS.7\.2\.*
 She also reports that one of the examples is ‘a bit confusing’ *\[? which one? ?]*, and that the use of \<del\> in an example is also confusing, if appropriate at all.
 
 **Action 25**: *LB improve wording discussing use of \<del\> in an example transcription*


#### DI\-PrintDictionaries.xml


LR reports that while significant progress has been made on this chapter, there is
 still much to be done, and raises the question as to how to proceed. He has a full\-time
 person, Eva Radermacher, working on this chapter for the next 6 months.
Per the chair, Council deferred for 2–3 months any final decision as to whether we
 
 * include the revised chapter in P5 1\.0 (for which a necessary but not sufficient condition
 is that we accept the results of Eva Radermacher's efforts
* keep the current chapter, but put a health warning on it
* drop the chapter entirely


**Action 26**: *LR TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/340>. Present DI revision progress to Council list 2007\-07\-31*

DB suggests changing the name of this chapter to ‘Dictionaries’.
**Action 27**: *edsChange name of DI to ‘Dictionaries’ done*


#### MS\-ManuscriptDescription.xml


DO wonders about whether \<dimensions\> and its 3 special children could just be \<measure\> s, about which there was much discussion.
Eventually, and not without controversy, it was decided that a new element, \<measureGrp\> , should be introduced to contain measures. Only two use cases have become apparent
 so far: dimensions and blood pressures. The new element will be placed in the core
 module, and its ‘suggested values include’ list will have to move from the \<dimensions\> tagdoc into the MS discussion.
**Action 28**: *LB TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/328>. Generalize \<dimensions\> to \<measureGrp\>*
In [MS.4](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=MS#msid "MS.4") there is a discussion of \<institution\> that disagrees with the general prose. A wording change to the prose \& the definition
 of \<institution\> was suggested.
**Action 29**: *LB Implement change to discussion of \<institution\> *done**
The question was raised whether \<custodialHist\> is a special case of a \<placeEvent\> ? It was quickly concluded that it is not, and it was suggested that it is a \<thingEvent\> . \[Note: This author thinks that both \<placeEvent\> and \<custodialEvent\> are instances of the non\-existent general \<event\> element.]
It was pointed out that the examples and discussion in this chapter still refer to \<q\> rather than \<quote\> , although the tagdocs use \<quote\> .
**Action 30**: *SB Change \<q\> to \<quote\> in MS*
The question was raised as to whether or not \<institution\> should self\-nest. *\[? missed something here? ?]*


#### SA\-LinkingSegmentationAlignment.xml


DP found several minor errors.
**Action 31**: *LB fix minor errors DP found in SA *done**
**Action 32**: *LB fix reference to extendedTarg *done**
 Those that were not fixed during the meeting will be posted to the Council list.
 
 **Action 33**: *DP send rest of errors to Council list*


#### AI\-AnalyticMechanisms.xml


CT reported that he found no references to DTDs, SGML, or P4, nor any other glaring
 problems in this chapter.


#### FS\-FeatureStructures.xml


JW reported that he found no references to DTDs, SGML, or P4; however, as he does
 not use feature structures, he did not feel qualified to comment further.


#### CE\-CertaintyResponsibility.xml


CW reported that he found no references to DTDs, SGML, or P4, nor any other glaring
 problems in this chapter. It was noted that there have been calls to significantly
 re\-work this chapter, but as details have not been expressed, and there is no clear
 avenue for how such work would get done, let alone done in time for P5 1\.0 release,
 it was decided to leave this chapter as it is.


#### PH\-PrimarySources.xml


DO reported *\[? missed something here? ?]*
There was some discussion around the recurring issue of substitution, and how \<add\> , \<del\> , and \<supplied\> interact. It was suggested that we should consider adding a \<suppress\> element, or perhaps the generic \<ed\> . A smaller group will directly address the \<add\> / \<del\> / \<supplied\> / \<suppress\> /\<substitution\> / \<ed\> issue, including checking the wording of this chapter closely.
**Action 34**: *LB, MD, DO, TMB, SB TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/331>. Solve the substitution et al. issue*
**Action 35**: *LB report back on results of substitution group's effort*
In [PH.1\.2](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=PH#PHAB "PH.1.2") the word confidence is used to describe resp and again in [PH.1\.3](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=PH#PHCC "PH.1.3") (slightly differently) where it probably shouldn't.
**Action 36**: *eds. remove wording of description of resp in prose PH.1\.2 \& PH.1\.3*
It was generally agreed that \<handShift\> should be treated as a full\-fledged milestone element, and thus the wording of the
 description needs to change and the old attribute needs to be dropped.
**Action 37**: *eds. improve \<handShift\> , including dropping old*


#### TC\-CriticalApparatus.xml


It was generally agreed that the chapter on critical apparatus should come before
 the chapter on primary sources.
**Action 38**: *SB reverse TC and PH*
There was a suggestion that we explicitly say \<app\> is a special form of \<choice\> , but no decision to do so was made.
The example with ‘hord beweotode,’ (which is in [TC.1\.2](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=TC#TCAPLR "TC.1.2") was found confusing, but explained by LB.
**Action 39**: *LB Add a note added in TC.1\.2 to explain 1st Beowulf example better *done**
Council briefly discussed whether or not a \<witDetail\> should be considered a special form of \<note\> . It was decided to solicit a concrete proposal before further discussing the issue.
 DO volunteered to write a proposal for dropping \<witDetail\> , complete with a mechanism for replacing the functionality of wit. He will post the
 proposal to the Council mailing list.
**Action 40**: *DO proposal for dropping \<witDetail\>*
**Action 41**: *LB TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/332>. Change \<witList\> to \<witGroup\> , allow it to self\-nest, and drop included.*
Council briefly discussed the perceived difference between charters and manuscript
 descriptions, but concluded we need more expert input from those who deal directly
 with charters.
**Action 42**: *LB work out what Gautier Poupeau really wants.*
 DB and MD agreed to experiment with using the tagset in GD for representing a MS stemma.
 
 **Action 43**: *DB, MD TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/339>. Stemma modeling using graph elements*


#### ND\-NamesDates.xml


AC has already posted her comments to [Trac](http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/159 "Trac"), and LB has acted on many already. It was further noted that in the prose of the
 chapter there is no mention of the fact that we have no mechanism for regularizing
 dates in non\-(proleptic\-)Gregorian calendars, nor of the calendar attribute,
**Action 44**: *SB Discuss calendar in the prose*
**Action 45**: *SB point out no regularization of other calendars in the prose*
**Action 46**: *SBexplain W3C vs ISO date attrs in prose*


#### GD\-GraphsNetworksTrees.xml


Council revisited the concern that the entire chapter may not be useful to any users,
 but again decided to keep this chapter in the Guidelines.


#### FT\-TablesFormulaeGraphics.xml


CT reports that there are several references to TEI table and other DTDs, most if
 not all of which should probably say ‘schema’.
CT also pointed out that the Guidelines should give more information on how to use
 other markup languages (in particular SVG) in a TEI document here, or at least reference
 MD
DB suggests a completely different model for table representation (each cell has the
 property of being a member of that which is on top of it and to its left). General
 agreement that this should be deferred until after 1\.0\.
The question arose as to where the new work on facsimiles should go? Possibilities
 include primary sources (PH), linking (SA), and graphics (GD).


#### CC\-LanguageCorpora.xml


DP reported that she noticed a few details, and these were discussed briefly. Among
 other things, she had noticed a reference to ‘TEI dtd’.
**Action 47**: *LB fix reference to DTD in CC *done**
DP suggested that perhaps more guidance should be provided in section [CC.5](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=CC#CCREC "CC.5"), but no definitive recommendations arose *\[? missed something here? ?]*.
It was noted that the \<teiCorpus\> element is defined in the core module. A suggestion was made to move the entire discussion
 from this chapter into [DS](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=DS "DS"), as \<teiCorpus\> is used for collections other than corpora. A further suggestion was made to rename
 it to \<teiGroup\> .
**Action 48**: *LB TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/333>. Merge corpus chapter into DS.*


#### WD\-NonStandardCharacters.xml


LR reports he did not look at it, but since it was written afresh for P5, there will
 be no vestigial references to DTDs, SGML, or P4\.


#### FD\-FeatureSystemDeclaration.xml


CW reports that he found some references to DTDs in this chapter which he has fixed
 and LB has checked in.
LB reports that he \& LR will be meeting with Kiyong Lee, the chair of the ISO work\-group
 that is working on FSDs, on 2007\-05\-10\.
**Action 49**: *LR report back on meeting*
 The expectation is that the ISO group will use the current P5 chapter as its starting
 point, and will have a finished version ready in time for P5 1\.0\.

#### TD\-DocumentationElements.xml


DB reports that he found a few typographical errors that he has posted *\[? where? ?]*. He further notes that description of \<egXML\> says it contains well\-formed XML, but in fact it constitutes well\-formed XML.
**Action 50**: *Eds fix wording in description of \<egXML\>*
He notes a formatting error in an example which LB fixed immediately. He also noticed
 an error in the table describing the behaviors for the various values of mode with
 value "delete". CT pointed out another problem with the table.
**Action 51**: *SR go through mode table near end of TD done 2007/05/05*
SB suggested moving \<gi\> , \<att\> , \<val\> , and \<tag\> out of TD; there was general agreement that it may be a good idea, but there are lots
 of other such re\-arrangements we might want to do, and we certainly can't do them
 all.
SR wonders if it would be better if users could delete an entire class at once — consensus
 was yes, but it was not clear how or if it could be done for P5 1\.0\.


#### SH\-OtherMetadataStandards.xml


MD recommends chapter be dropped. JW (co\-author of the re\-write) concurs. JW was assigned
 to draft a few paragraphs discussing the relationship between the TEI Header and other
 standards (including MARC and Dublin Core) in general terms, without detailed mappings.
**Action 52**: *JW TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/336>. Draft paras on metadata standards 2007\-05\-05*
**Action 53**: *SB put JW paras in appropriate place at end of HD 2007\-05\-12*


#### USE


Council discussed newly synthesized [USE](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=USE "USE") chapter, and expressed significant misgivings about the presence of NH. Council desired
 to re\-arrange the order of the main sections to: DT, MD, CF; as previously decided
 to drop SH, and decided to keep NH at the end of USE, at least for now.
**Action 54**: *SB TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/308>. Re\-arrange USE and rewrite introduction to match*


#### NH\-MultipleHierarchies.xml


TMB reports that she has reviewed the chapter, and believes as an introduction to
 the problem it is a good idea to keep it in the Guidelines. She has found some errors,
 problems, and omissions which she will post to Trac tickets [236](http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/236 "236"), [237](http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/236 "237"), and [238](http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/236 "238").
TMB says that the prose of NH must be far clearer about which solutions are available
 in P5, which are implementable in P5, and which are not. She suggests there be pointers
 to template or exemplar ODDs demonstrating how to implement those solutions that can
 be.
LB expressed concerns that the chapter is incompletely revised. ‘It promises one thing
 and doesn't deliver.’
Suggestion to move NH back to full chapter\-hood with an associated module that has
 next, prev, \& part, and perhaps other overlap\-specific specifications.
**Action 55**: *SB TMB re\-work NH*


#### CF\-Conformance.xml


JC briefly presented the section on conformance, and significant discussion ensued.
The 5th bullet point in the definition of TEI Conformant was re\-worded.
Suggestion to change ‘conformable’ to ‘algorithmically conformant’ and ‘conformant’
 to ‘identically conformant’.
There was a brief discussion on the use and meaning of the concept of interoperability versus interchangeability, and a suggestion to change the nomenclature to reflect the P4 concept that extensions
 were conformant (as long as they meet certain criteria).
Council discussed the implications of the phrasing ‘ *Extensible Markup Language (XML) 1\.0 (Fourth Edition)* or successor editions’, noting that this phrasing exists specifically to permit a
 TEI document to use a future edition of XML 1\.0 (but does not license use of XML 1\.1
 or other versions).
Council discussed the implications of the [validation constraint](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=USE#CFVL "validation constraint"), with the result that the wording of the second paragraph was changed. This included
 a significant discussion as to whether conformance requires validation against the
 instantiation of an ODD in *a* schema language (e.g., the DTD), or *all* of them (currently Relax NG, W3C XML Schema language, and DTDs — although SB posited
 that this is the same as validation against Relax NG, as there are no additional constraints
 expressed in either W3C Schema or DTD; LB disagreed, and SR was unsure this is the
 case). Council voted, and by an overwhelming majority (11 to 3, including editors)
 decided that the use of *a* schema was sufficient for this stage of conformance checking (as errors caught by
 one schema language but not another would fail to pass later stages), and thus kept
 the wording ‘one or more’.
It was pointed out that this section does not yet discuss the use of the Schematron
 constraints.
This discussion also included the topic of whether DTDs should be mentioned at all
 in this section and correspondingly whether the 1st sentence or at least clause of
 the 2nd paragraph of [validation constraint](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=USE#CFVL "validation constraint") should be deleted.
**Action 56**: *Eds. TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/308>. Revise section and submit to Council list*


#### MD\-ModifyingCustomizing.xml


Council briefly discussed the issue of ‘clean’ vs ‘unclean’, and quickly decided that
 the concepts were sound, but that we need to come up with better, non\-controversial
 terminology.
Concern was expressed that the phrase ‘… all existing TEI names’ (near the end of
 the 3rd paragraph of MD.1\.2\) may be interpreted to imply that a document with renamed
 elements meeting this constraint was conformant; it was suggested that we add a sentence
 indicating that this would not be the case. *\[? was this already done or is there an action here? ?]*
It was suggested that more discussion of the limitation of DTDs occur in MD.1\.2\.
There was some discussion on the topic of attribute namespaces. It was suggested that
 one way to think of the concept of cleanliness is that it refers to a document only after removal of elements and attributes that
 are from other namespaces. That is, the concept only applies to elements in the TEI
 namespace (including TEI examples namespace for \<egXML\> ) and their attributes as declared in the Guidelines.
It was suggested that we add discussion of other methods for constraining an attribute
 value (besides \<valList\> ; e.g., use of facets) in [MD.1\.4](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=USE#MDMDAL "MD.1.4").
It was noted that the last paragraph of [MD.1\.4](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=USE#MDMDAL "MD.1.4") needs to be rewritten based on the new definition of clean.



### Conformance Draft


Most of this had already been covered during [, however at LB's request Council reviewed the list of steps for checking conformance
 near the beginning of](https://www.tei-c.org/Activities/Council/Meetings/tcm30.xml)[CF.6](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=USE#CFCATSCH "CF.6").
It was suggested that the use of the word ‘claim’ in item \#4 and \#5 is inappropriate
 — it was argued briefly that putting an xmlns attribute on an element does not make
 a ‘claim’ that an element is in a given namespace, but rather (like a performance
 act) puts it there. However, the consensus was that no change is needed.
It was agreed that item \#6 needs to be reworded.


### Formatting of Guidelines


JC reported that he \& DP are beginning work on the formatting of the HTML version
 of the Guidelines. It was suggested and accepted that they should be simultaneously
 working on the formatting of the HTML documentation of a customization. JC requested
 that each member of Council send in his or her top 5 (or more) suggestions for improvements
 to the formatting of the HTML Guidelines and customization documentation. If the suggestion
 could be accompanied by specifics (e.g., snippets of CSS code) that would be even
 better, but is not required.
**Action 57**: *all send suggestions for improvements to formatting*
 After receiving the suggestions JC and DP will filter out the inappropriate ones,
 combine those that are essentially the same, etc., and report back to Council. They
 will implement those changes they can, and write up those that require, e.g., changes
 to the XSLT architecture.
 
 **Action 58**: *JC, DP TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/276>. Collect, filter, formatting improvements; implement that which they can; report
 back*



II
--



### Resolution of outstanding issues



#### proposal to add a metadata element to record application information


MH's suggestion was presented. LB indicated disagreement with the proposal.
After some discussion, Council decided to create a ‘protected’ place inside the TEI
 Header of application\-generated metadata, but to not populate this space.
Resolved: A new \<tei:appInfo\> element will be created that is a member of model.encodingPart, which contains one
 or more occurrences of a new element, \<application\> that can be used by programs to record information intended for other programs. The
 content of \<application\> , like \<egXML\> , must be well\-formed XML, but no further constraints are placed on it at this time.
 It is a future work item to develop a mechanism to associate an \<application\> with an actual particular program.
**Action 59**: *SR TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/315>. Write the \<appInfo\> ODD*


#### nyms


There was general agreement that the proposal seemed sound. LB pointed out that the
 semantics of the structure was quite different than that of other names: a \<nym\> inside a \<nym\> expresses an alternative form of its parent \<nym\> . There was some discussion (mostly explanation) of the issue, but no sustained objections.
It was pointed out that the structure may be thought of as similar to \<app\> .


#### proposal for places \& placenames


MD reported that the proposal may not need more work, but that we have not received
 the level of feedback desired.
MD and AC are hoping to put together a meeting soon in London of MD, Oxfordians, Londoners,
 and Alex Czmiel to work further on the proposal once participants have put it to the
 test of encoding real data.
**Action 60**: *MD*TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/307>. Report on place\-name meeting

**Action 61**: *CW Get information from Alex Czmiel about why they find personography recommendations
 unusable*


#### facsimile markup


CT presented work so far; rough notes have been integrated into an ODD which was shown
 to Council along with a sample encoding. It was pointed out that everything being
 done could also be represented in METS.
The question was raised, why point from the TEI document instance to the graphic image,
 rather than from graphic image to the word in the instance, or use stand\-off (e.g. \<link\> )? It was pointed out that the current proposal includes an \<area\> that performs exactly that function: graphic\-to\-word pointing.
There was a consensus that the prose accompanying any such suggestions should explain
 when and why an encoder might prefer to use one method or the other.
Council briefly discussed whether the Guidelines should recommend this mechanism at
 all, or rely on methods already listed in [SA](http://tei.oucs.ox.ac.uk/Guidelines/Source/Guidelines/en/guidelines-en.xml.ID=SA#SACSXA "SA"), or on METS, or perhaps put METS elements directly into TEI. Council believes this
 is worthwhile work, especially for the ‘lightweight’ case. Council did not feel that
 that the proposed facsimile markup is a requirement for 1\.0\. It is not even clear
 to Council that this will necessarily go into a later release — the idea that it might
 end up a user extension was mentioned. However, Council reiterated its desire for
 a simple mechanism to handle the ‘lightweight’ case, and furthermore is seeking from
 the proposal's authors suggestions on how it integrates with existing material, and
 into which module it would go.


#### (other essential items collected in Part I)


No other essential items were collected in [I](https://www.tei-c.org/Activities/Council/Meetings/tcm30.xml#partI). However, several items inadvertently did not make the agenda, and were hastily discussed.

##### TEI Tite


DO presented TEI Tite issues: 2 elements have been added, \<ornament\> and \<cols\> , which DO would like to either pull into P5 or change such that we don't need. It
 was suggested that \<ornament\> is equivalent to \<graphic\> , but this turned out not to be the case, as \<ornament\> is intended for markings made with standard Unicode characters, and \<graphic\> is intended for non\-character images. It was noted that it is important that we spell
 out the details of what the semantics of \<equiv\> are and how it works. Thus DO and SR volunteered to rework the [TEI Tite proposal](http://artsci.wustl.edu/~ptrolard/tite.tgz "TEI Tite proposal") so that it is a ‘clean’ TEI P5 customization, making appropriate use of \<equiv\> .
**Action 62**: *DO, SR TRAC <http://tei.oucs.ox.ac.uk/trac/TEIP5/ticket/321>. Rework Tite and deal with new elements one way or another.*
**Action 63**: *DO report on Tite revamp progress*


##### postscript


SB advised Council that, along with the change unwrapping model.divWrapper and model.divWrapper.bottom
 into model.divWrapper, model.divTop, and model.divBottom, he has implemented a first
 draft of a \<postscript\> element for the encoding of postscripts. These changes are ready to be checked in,
 but have not for lack of a reliable, inexpensive internet connection. After a brief
 discussion about whether or not this element was important and should be included
 in P5 1\.0 (the consensus was that it is and it should), and whether or not it was
 properly introduced (it was not — SB failed to create a Trac ticket until last week),
 Council requested that SB extract the \<postscript\> element from the other changes and create a free\-standing ODD proposal for Council's
 review.
**Action 64**: *SB move \<postscript\> to a free standing ODD*


##### \<q\> and \<said\>


SB reported that work on a proposed solution is almost complete, and quickly described
 the two proposals that have been put forth [on the list](http://lists.village.virginia.edu/pipermail/tei-council/2007/002805.html "on the list"). Council did not wish to try to decide between them with out concrete proposals including
 ODDs.
**Action 65**: *SB create 2nd \<said\> proposal, post both*




### Adoption of Resolutions


Due in part to the hour, Chair suggested without objection that rather than go through
 action items and assign due dates as a group, the planning committee (CW, DO, SR)
 would prioritize the actions on their own.
**Action 66**: *CW, DO, SR order priority of these action items*



Appendix A: Additional Notes for Future Work
--------------------------------------------


During discussion several issues which are important future work items were mentioned,
 but were not directly apropos to the subject being discussed. They are recorded here
 at request of Chair.
* Horizontal review — people going through multiple chapters looking for special cases
 that can or should be generalized.
* Consider splitting dates out of ND into separate module, chapter, or both?
* In the light of DB's suggestion, Council should consider establishing a small work\-group
 to study tables sometime after the release of P5 1\.0
* The delete\-a\-class\-at\-a\-time proposal is a potential post\-1\.0 project involving re\-write
 of ODD.




