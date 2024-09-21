---
title: "TEI Technical Council Short VF2F Meeting, 26–27 April 2024"
date: 2024-04-27
---
# TEI Technical Council Short VF2F Meeting, 26–27 April 2024
### Meeting Times




| **Friday, April 26** | 16:00–19:00 PDT | North American break\-outs |
| --- | --- | --- |
| **Saturday, April 27** | 10:00–13:00 CEST | European break\-outs |
|  | 07:00–11:00 PDT | Council meeting |


### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Patricia O’Connor (TOC)
* Gustavo Riva (GR)
* Torsten Roeder (TR)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


 
### Apologies/Not Present


* Elli Bleeker (EB)


Friday, April 26 (American break\-out session)
==============================================


* Discussion of problems with updating P5 subset
	+ Related problems:
		- “Canon” error
		- “Attribute: the definition of the @mind attribute in the no\_duplicate\_attrs\_3\_valid elementSpec should have a closed valList or a datatype” errors
	+ Suggested way forward: See SB’s notes at the end of step documentation


Saturday, April 27 (European break\-out session)
================================================


Guidelines Issues
-----------------


* [\#2542](https://github.com/TEIC/TEI/issues/2542) Allow @place in postscript
	+ Agreed to add \<postScript\> to att.placement
	+ GR: Overview of members of att.placement to see what the members have all in common
	+ one characteristic is that placement is an indicator for the semantic element, i.e. placing allows us to identify a postscript
	+ Together with \<postScript\>, add it to all the other members of model.divBottomPart (\<closer\>, \<postscript\>, \<signed\>, \<trailer\>) plus \<opener\> and \<salute\>


* [\#2544](https://github.com/TEIC/TEI/issues/2544) allow \<quote\> in \<bibl\>
	+ If we allow \<q\> should we also allow \<quote\>?
	+ Discussion of difference between \<q\> and  \<quote\> and when to use one over the other
	+ \<q\> may have graphical markers, e.g. quotation marks, so it can be applicable for terms as well as actual quotations, whereas \<quote\> is specifically for quotations
	+ \<q\> is superset which can contain quotations contained by  \<quote\>
	+ EU subgroup agrees on allowing \<quote\> in \<bibl\>


 
* [\#2548](https://github.com/TEIC/TEI/issues/2548) Rationalize mechanisms for extending pure ODD
	+ discussion of external pointing mechanism for [\#2282](https://github.com/TEIC/TEI/issues/2282) attributes of \<attRef\>
	+ Suggestion to create new attribute called @pattern to point to an external module, e.g RELAX NG pattern
	+ SB: name collision with @pattern of \<metDecl\>? SB not worried about that


 
* [\#2550](https://github.com/TEIC/TEI/issues/2550) Allow @hand in \<emph\>; Allow @hand in \<dateline\>
	+ discussion about interpretation of @hand as in who wrote it
	+ @hand is allowed in \<hi\>, therefore it should be allowed in \<emph\>
	+ MT and HBS: @resp is a better approach for given use case
	+ discussion of \<hi\> and its application, how it refers to content of element
	+ @hand could be a subset of att.global.rendition
	+ SS: Perhaps common ‘misunderstanding’ of \<hi rend\=”underline”\>: It does not only refer to the underlining of the content of the element but to the whole content of the element (i.e. the words and the underlining). Is that a problem?
	+ MT: Suggestion of using metamark instead for the underlining


 
* [\#2551](https://github.com/TEIC/TEI/issues/2551) Allow @place in \<div\>
	+ \<div type\="writingSession"\> not considered a good example (treating CMCs as a series of writing episodes rather than transmitted posts)
	+ use case where allowing @place in \<div\> would make sense?
	+ Suggestion to ask Janelle Jenstad to expand her example in [\#2542](https://github.com/TEIC/TEI/issues/2542#issuecomment-2021567982)
	+ discussion on using \<zone\> instead of \<div\>
		- HBS: \<zone\> does not convey same semantic meaning as \<div\>
	+ Difference between @rend and @place? When would you use each? 
		- @rend and @place are different data types
	+ MT: Make @place a subset of @rend?
	+ discussion on @rend and @rendition
		- @rendition has CSS information attached
		- @rend is permitted everywhere and so a subset of @place should be allowed, i.e. adding att.placement to att.global.rendition
		- MS: Need to specify how and when to use it
	+ discussion that att.global.rendition shouldn’t be global, since it shouldn’t be allowed within elements of TEI Header
	+ Suggestion: 
		- 1\) Move @place to att.global.rendition
		- 2\) Consider if we should move @rendition from global to just being in elements that describe the source (basically leave out teiHeader)


 
Saturday, April 27 (Full Council)
=================================


CMC chapter discussion
----------------------


* resumed CMC chapter discussion from March 15\-16 VF2F meeting
* attendance of CMC group for this discussion: Michael Beißwenger, Harald Lüngen, Peter Stadler
* **Action on all:** comment on PR: <https://github.com/TEIC/TEI/pull/2537>
* [\#1955](https://github.com/TEIC/TEI/issues/1955) FR: TEI Features for CMC, assigned to SB and Peter Stadler


 
* Discussion: Why should \<post\> elements not nest?


* Posts that are quoted in posts is an intentional act
* A post is posted on a server in a moment and becomes a product that cannot contain another product
* @part currently not allowed on \<post\> (membership in att.fragmentable), but there seems to be general agreement that it should be
* Identification of a post should be without interpretation


* TR: Is "post" a good comprehensive term?


* The "post" concept is currently missing from the TEI, other units will be better represented


* Discussion of the definition about \<post\>


* Questions about the term ‘internet’
	+ Update prose: Communication transmitted through a computer network
* Questions about the term ‘private’ 
	+ Private activity: when you cannot see the production/composition process until the post is sent/published
	+ This is a distinct difference from spoken discourse
	+ MT: Can we rephrase it to specify that we are not interested in the composition stage but when it has been sent/published.
	+ SB: Usage of the term ‘private’ complies with a definition of the word according to the OED
	+ Peter Stadler: The transmission is integral to a \<post\>, it is not a \<post\> before it gets transmitted
	+ RV: The term “draft” is generally used in CMC contexts in this scenario when composing before transmission like emails
* Questions about the term ‘ongoing communication’
	+ SS: not only “ongoing communication”, a post can also start a communication.
	+ Suggestion: “to initiate as well as contribute to an ongoing” or to remove the word ongoing.
* Current Definition: \<post\> a written (or spoken) contribution to an ongoing CMC interaction which has been composed (or recorded) by its author in its entirety as part of a private activity, and has been transmitted through the internet and is made available on the monitor or screen of the other parties en bloc.
* Proposed Definition: \<post\> a written (or spoken) contribution to a CMC interaction which has been composed (or recorded) by its author in its entirety before transmission through a computer network and is made available to the other parties as a product en bloc.


* Discussion name of attribute: @indentLevel, other methods that can be used to convey nesting depth


* Michael Beißwenger: Indentation is used for Wikipedia corpora encoded with TEI. People use indentation to convey hierarchical level. Useful to have as an attribute for scenarios when the replyTo level and indentation level do not match.
* Indentation is not always intentional, or used systematically
* Marking indentation level helps to identify reply relationships.
* MT and TR: This discussion of @indentLevel is a marking of rendition (@rend, @rendition or maybe @ana)
* Harald Lüngen: Purpose of @indentLevel is to have an integer value. It is a special feature of these kinds of corpora to indicate the internal reply structure
* RV: Different perspective on @indentLevel \- trying to capture ambiguous or perhaps semantically incomplete hierarchical structure.
* Does it capture an approximate hierarchical structure, like maybe @threadDepth?
* Semantics vs rendition: If it's just about how it was displayed, it's just rendition. But if it's more meaningful maybe we need a special attribute.
* Michael Beißwenger: @threadDepth could also be ambiguous in relation to structure level, @threadDepth implies structure within a sequence
* Before something is established a thread, it is indented.
* MT: Would @level work? SB: Already in use in TEI “[The nesting level of the sense](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-sense.html)”: (from dictionary module) and it takes teidata.count 
	+ no examples of its use in the Guidelines
	+ Perhaps broaden its application in the Guidelines by introducing it to CMC?
* Peter Stadler: \<space\> in TEI for encoding indentation as significant white space from the rendition perspective
* Is the @indentLevel more than representational because it's a feature of a platform?
* Peter Stadler: We want something that facilitates processing, provide a datatype and make it optional in customizations
	+ teidata.count won't work in @rend
	+ Need a reference so people don't invent their own data type
	+ Can @rend be expressed as a kind of token that could be used for processing, it needs to convey the hierarchical level.
	+ Michael Beißwenger: Notion of intention in the post is also important, how the author wanted the post to be rendered
	+ Should be easy to convert from HTML rendering to the TEI
	+ Harald Lüngen: What about other rendering info that you might want to encode? Are we loading @rend with a lot, so would it get lost with all the other attributes
	+ HBS: Indentation is really rendition since we already have @replyTo
	+ MT: Proposal to add a new attribute, @indentLevel, and make it available on att.global.rendition
	+ RV: shouldn’t be added at the global level, but should only have a few elements in att.placement included and expand as required
	+ MT: att.placement can be a subset of global rendition
	+ RV: it's dangerous to make this global.
	+ MT: Difference between @indent and @place: indent might only apply to 'blockish' elements
	+ @indentLevel is renditional and we could use it elsewhere
	+ SB: Indentation of posts implies that every line of the post is indentation
	+ Indentation of \<l\>s and \<p\>s and what indentation means in this context, also in relation to verse
	+ Peter Stadler: Need to clarify if the indentation level being applied to the entire block level and if so, it needs to be added at line level instead of at paragraph level.


* RV: Put @indentLevel in a class, and define it as generically as possible
* possible attribute class: att.indentation?


* Discussion name of attribute: @indent with datatype teidata.integer (non negative integer value)


* @indentLevel seems more numeric (not something measured)
* gloss entry suggestion: to consider it as a level/mark of indentation with an integer value, no need to specify the unit
* @indent is the easiest to write, but @indentLevel is more precise
* att.indentation with @indentLevel value as an xs:integer datatype.


* Can we include a second attribute distinct to first\-line indentation? (consider later)
* Where to introduce att.indentation? \<post\> is the only member for now, but it can be expanded if required by the community.


* **Council decision:** intention to include the CMC chapter in the next release 
	+ Introduction of the new attribute class in a mentoring session: May 17th
	+ **Action SB and EBB:** Update the branch **before** the introduction of the new attribute
	+ **Action on EBB:** Open ticket, assign to HBS, TR, GR, MS, SS, TOC, connect it to the PR for continued work on the branch


Next release
------------


* Release techs: HBS, GR, TR
* Dates
	+ Refrigeration: **Fri 14 June 2024** at Council meeting
	+ Freeze: **Sat 22 June 2024**
	+ Release: **Mon 24 June 2024**


 
Guidelines Issues
-----------------


* [\#2119](https://github.com/TEIC/TEI/issues/2119) teidata.interval problems
	+ Discussion NA subgroup: 
		- Define what we mean by ‘interval’ in teidata.interval specs
		- Deprecate @interval's use of float (b/c it allows negative numbers)
		- deprecate @unit
		- instead add xsd:duration as datatype for teidata.interval along with the old string values "regular," "irregular," and "unknown"
		- This move to a better datatype justifies a greater intervention in our view
		- By switching to xsd:duration, negative durations will be allowed, but based on the definition of \<timeline\>, intervals need to be positive in time. So we will have to facet xsd:duration somehow or use schematron.
		- special case of “\-1” as a numerical stand\-in for “unknown” (currently only expressed in the Guidelines, not the specs), suggestion of removing this
		- Some discussion of testing the boundaries with non\-linear time concepts, but considered out of scope with current usage in the TEI
	+ Council discussion: 
		- HBS: Concern with not sustaining backwards compatibility
		- Maybe just patch: to permit positive integers, \-1, and the existing possibilities
		- ask community whether we should switch to xsd:duration (and drop @unit)
		- Important: use teidata.duration.w3c (not xsd:duration)
		- provide better explanation of examples of teidata.duration.w3c


 
* [\#2533](https://github.com/TEIC/TEI/issues/2533) ODD allows an attList with @org\="choice" with @mode\="delete" attributes
	+ Discussion NA subgroup: 
		- Isn’t the following a way to remove one of the choices?



> \<elementSpec ident\=”myel” mode\=”change”\>
> 
> 
>      \<attList org\=”choice”\>
> 
> 
>        \<!\-\- but it should work without org\=choice too →
> 
> 
>          \<attDef ident\=”blah” mode\=”delete”/\>
> 
> 
>     \</attList\>
> 
> 
> \</elementSpec\>


* + What happens when the source element has an attList/@org\="choice" but the customization intends to change it to attList/@org\="group"?
	+ perhaps decide default priority: Maybe the source ODD should determine the outcome. Your choice could be down the line in chained odds, but maybe you should default to the previous change.
	+ Or the processor should flag this expression as ambiguous and fail?
	+ Or we can have a flag that tells the processor which changed allList to give priority to? (source vs customization)
	+ Should \<attList\> have @mode in order to change @org? Thus no need for @mode\="replace" on the entire elementSpec
	+ **Action on RV:** respond on ticket to Martin Holmes
* [\#2541](https://github.com/TEIC/TEI/issues/2541) silly Schematron in simplePrint
	+ Discussion NA subgroup: 
		- SB has solved this already in a previous commit
		- there just remains a bit more work to delete the "choiceSize" constraint
	+ Commented on ticket


 
* [\#2543](https://github.com/TEIC/TEI/issues/2543) Need Schematron to constrain attribute co\-occurrence on \<elementRef\>
	+ Discussion EU subgroup:
		- agrees with constrictions
		- no deprecation period is necessary
	+ Council decision: status green


Organisational matters
----------------------


* Buenos Aires F2F October 2024: travel planning notes / updates
	+ Full day **Sun 6th**, **Mon 7th**, and ½ day **Tues 8th**
	+ Local organisers arranged a room for the Council to meet
	+ Renamed Slack channels for organising F2F meetings and conference preparations


* Workshop Testing and Building Setup and Process
	+ Some Council members have problems with the testing and building setup and process
	+ Council mentoring session for this on different computers being used to see what the issues are and how to overcome it.
	+ Overview of the variety of the different tests that we run
	+ Suggestion to re\-write and update the build set\-up
	+ When: a council or stylesheets meeting before next release


* Council/Stylesheets meetings
	+ Rescheduling the times and dates of Council/Stylesheets meetings needed
	+ **Action on EBB:** Council poll for determining new dates and times for meetings


* Minute reviewing: SS


 