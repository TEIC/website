---
layout: page.njk
title: "Draft minutes of  Council meeting"
date: 2010-04-29
---
# Draft minutes of  Council meeting



Attendees: 


* Brett Barney (BB)
* Lou Burnard (LB)
* James Cummings (JC)
* Matthew Driscoll (MD)
* Kevin Hawkins (KH)
* Julianne Nyhan (JN)
* Daniel O'Donnell (DoD)
* Elena Pierazzo (EP)
* Dot Porter (DP)
* Sebastian Rahtz (SR) \- minutes
* Laurent Romary (LR) \- chair
* Susan Schreibman (SS)



morning of 2010\-04\-29
 
 
 Review of Symposium
 
 
Meeting started at 9:30 WET.



JN presented an overview of the public Googledocs document, in which she had
 recorded notes from the previous day's [Symposium on TEI and Scholarly
 Publishing](http://dho.ie/node/673). From the various presentations and discussing, she has distilled
 points under two main headings: "Emerging themes" and "Specific issues with
 P5\." She briefly summarized these.


LR asked the group to consider what implications these points have for the
 Council. DO clarified a point raised about open\-source publication and
 anti\-trust concerns, suggesting that US anti\-trust laws present no real
 barrier for cooperation of the kind the Council wants to promote.


LR noted that several projects are trying to create a TEI customization to
 fit their publication workflows and wondered whether we should we put effort
 into such a customization. SR asked whether, in doing so we would be, in
 effect, re\-creating the tagset of the National Library of Medicine (NLM). LR
 noted that both Martin Holmes and LR have both worked with NLM mappings, so
 we could start there. SR suggested the alternative of re\-expressing the NLM
 in a TEI ODD. KH noted that NLM is DTD only and therefore cannot use
 namespaces. SR said that mapping NLM to TEI would require the use of lots of
 attributes, which users don't like to be forced to do. LR, however, said that
 because NLM is so closely modeled upon TEI the mapping is really easy.
 DO suggested that what we may need is a cooperation with NLM: We might get
 the user community together first to discuss needs and then build the
 customization, a la TEI TIte. LR argued that the features and needs for a
 customization are already well\-identified because customizations have
 already been done in different places, so it might be the time to take what
 each group has done, work out a single customization for consideration, and
 present it for consideration. DO suggested that the real issue is to find
 Council members who have the energy to drive the work. KH said that it's not
 a question of will but an uncertainty about what to do. He noted that in the
 US, academic publishers' prime concern is to do something that lets them
 lose less money. JC asked why, in the last 20 years, the movement toward a
 standard hasn't come from the presses themselves. DO said that he was struck by
 the fact that everyone in publishing has been/is focused on the page but
 that, even so, there are a lot of people working at the presses who
 
 are interested in the kinds of things we are interested in.
 The problem is that no one has the money to fly people around to
 collaborate. If we take the responsibility of guiding collaboration, things could
 happen. Our role would be getting tool\-makers together to talk about how
 they're doing what they're doing. He sees Dot's work on image markup as a
 model. LR thinks we could pretty easily put on the table a first draft of an
 ODD for publication. DO asked what it is they're lacking, then, since in
 doing what LR is proposing we would essentially be looking at their problem
 and solving it for them. LR responded that what's lacking are answers to
 questions such as Where do you put the abstract? How do you structure author
 attribution/citation/bibligraphical notations? What should be used as
 standardized type attribute values for divs? etc. DO suggested that the best
 way to address these issues would be to bring together energetic and
 interested Council members with some of the people at the symposium. LR
 disagreed, saying that there's already a publishing SIG. Some discussion
 followed about the advisability of putting out a call that would allow
 people from both groups to volunteer. KH argued that we will only get buy\-in
 from publishers if the customization we produce comes with good tools (e.g.,
 stylesheets for producing PDFs or Kindle\-formatted texts), since the
 publishers don't have the luxury to support long\-term development of such
 tools. SR argued that TEI doesn't have the resources to support tool
 development either. DO argued that that's where the people we saw yesterday
 (i.e., those who are making workflows) come in. DO proposed that we convene
 a summit of people from NLM, TEI, etc. LR acknowledged that we don't have
 the budget to implement tools, but noted that we have people who are working
 on these issues, so we wouldn't have to promise tools; we could just make
 sure they're on the agenda. SS suggested that an NEH startup grant might be
 a good opportunity to get the thing off the ground. EP noted that she has
 been involved in a project to convert CML (Cambridge) to TEI. There followed
 short discussion of procedural matters involved in coordinating work on this
 issue with the SIG and whether it would be best to structure the work
 through the existing SIG, some sub\-group of the Council, folks from
 industry, or some combination of these. In general, DO favored asking
 publishers to provide input so that we can build something appropriate, and
 LR favored producing something to present to publishers. SR favored first
 defining a manifesto before attempting a customization. KH proposed that a
 sub\-group of the Council (viz., JC, LB, SR, Martin Holmes, LR, and DO) write
 up a vision (using Googledocs), present it for feedback, and then maybe
 apply for grants. All agreed.


\-\-10 minute break\-\-




 Discussion of "green" feature requests
 
 
[2971316](https://sourceforge.net/tracker/index.php?func=detail&aid=2971316&group_id=106328&atid=644065) \- Add @svg:points to att.coordinated* No objections; much rejoicing.

[2969870](https://sourceforge.net/tracker/index.php?func=detail&aid=2969870&group_id=106328&atid=644065) \- 
 surrogates for digital \& its
 examples* General agreement.

[2949985](https://sourceforge.net/tracker/index.php?func=detail&aid=2949985&group_id=106328&atid=644065) \- 
 idno in more than just bibliographic
 elements* Following a brief discussion in which LR et al. parsed the similarity
 of 
 idno, 
 num, and 
 term; in which LB opined
 that a phrase\-level 
 idno would not be a good idea; and in which
 the classes 
 idno might be added to were discussed, it was
 agreed that 
 idno should be added to model.nameLike.

[2728061](https://sourceforge.net/tracker/index.php?func=detail&aid=2728061&group_id=106328&atid=644065) \- Add @target to relatedItem* LB has restricted the scope of the original proposal, so the issue at
 hand is whether the Council agrees with the proposed restriction. After
 quite a lot of discussion, mostly about whether text and/or references
 should be allowed within relatedItem, LB noted that there seemed to be
 broad support for allowing for content within 
 relatedItem and
 that we should generate examples.




 Discussion of "green" bugs
 
 




[2946056](https://sourceforge.net/tracker/index.php?func=detail&aid=2946056&group_id=106328&atid=644065) \- Order of children of 
 profileDesc* After some debate such things as whether 
 creation should
 be repeatable, Council agreed to add it to model.profileDescPart,
 perhaps also adding a Schematron rule to prevent its being repeated.

[2863331](https://sourceforge.net/tracker/index.php?func=detail&aid=2863331&group_id=106328&atid=644065) \- 'Used by' section empty in
 model.physDescPart* Not controversial; SR knows has this on his to\-do list to
 investigate and fix.




 Discussion of "amber" feature requests
 
 




[2976608](https://sourceforge.net/tracker/index.php?func=detail&aid=2976608&group_id=106328&atid=644062) \- Add 
 ref as a child of
 
 analytic, 
 monogr and 
 series* Numerous example use cases were put forth, and the Council agreed
 to the change as proposed.

[2973254](https://sourceforge.net/tracker/index.php?func=detail&aid=2973254&group_id=106328&atid=644062) \- Allow @target (or 
 ptr) on
 
 divGen* DO et al. argued that this request would amount to a hack for
 replicating the functionality of XInclude. JC pointed out that the
 TEI website uses OpenCMS, which doesn't allow XInclude. Council
 members generally agreed that, while hacks could be countenanced in
 such situations, they shouldn't be written into the spec.

[2940838](https://sourceforge.net/tracker/index.php?func=detail&aid=2940838&group_id=106328&atid=644062) \- CALS for TEI* This request grows out of a discussion between LR and SR regarding
 Sebastian's use of CALS in ISO. LR clarified that the request isn't
 that we take up responsibility for CALS itself. In response to KH's
 question whether the proposal is that we "make CALS available" just
 via a reference in the prose of the guidelines, LR responded that he
 would like to see, at minimum, something in Roma to allow CALS. SR
 opined that perhaps no action by the Council was needed. After
 further discussion of whether we should support CALS through the TEI
 Sourceforge site. It was decided that this request should be added
 to the roster for further discussion later in the meeting.

[2925145](https://sourceforge.net/tracker/index.php?func=detail&aid=2925145&group_id=106328&atid=644065) \- Generic dating class* Following a summary of the request by LB, JC noted that it's not
 the TEI that's saying you have to use the Gregorian calendar, but
 ISO. DO pointed out that we've done this sort of things for
 
 dimension (@unit). Observing that the request obviously
 warrants debate, LR moved the request to the roster for later
 discussion.

[2919640](https://sourceforge.net/tracker/index.php?func=detail&aid=2919640&group_id=106328&atid=644062) \- Global @facsKey* It was agreed to close this ticket, as @facs currently permits any
 of the 3 options Sebastian outlined in his comment. The Council
 favored Sebastian's choice "a" and agreed that the guidelines should
 be amended to include recommendations and/or examples regarding how
 to implement this suggestion.

[2909766](https://sourceforge.net/tracker/index.php?func=detail&aid=29097660&group_id=106328&atid=644065) \- Make 
 del and 
 add (etc)
 dateable* On the advice of SR, the Council decided to defer further
 discussion of this request until they had an opportunity to consider
 the recommendations of the working group on genetic editions.

[2890254](https://sourceforge.net/tracker/index.php?func=detail&aid=2890254&group_id=106328&atid=644065) \- Ability to define new element with same name as
 an existing* It was decided to defer further discussion of this request until
 after the discussion of ODD.

[859355](https://sourceforge.net/tracker/index.php?func=detail&aid=859355&group_id=106328&atid=644065) \- 
 subst should permit textual
 data* It was decided to defer further discussion of this request until
 after consideration of the recommendations of the working group on
 genetic editions.

[2859183](https://sourceforge.net/tracker/index.php?func=detail&aid=2859183&group_id=106328&atid=644065) \- Make all milestoneLike elements
 spanning* It was decided to defer further discussion of this request until
 after consideration of the recommendations of the working group on
 genetic editions.

[2834511 2834511](https://sourceforge.net/tracker/index.php?func=detail&aid=2834511 2834511&group_id=106328&atid=644065) \- Add more elements to att.spanning with
 schematron constraint* It was decided to defer further discussion of this request until
 after consideration of the recommendations of the working group on
 genetic editions.

[2834505 2834505](https://sourceforge.net/tracker/index.php?func=detail&aid=2834505 2834505&group_id=106328&atid=644065) \- @cert on choice and
 model.choicePart* JC clarified the rationale and LB suggested that the desired
 facility already exists. As there was some disagreement, it was
 decided that this request should be added to the roster for further
 discussion later in the meeting.

[2812634 2812634](https://sourceforge.net/tracker/index.php?func=detail&aid=2812634 2812634&group_id=106328&atid=644065) \- @docStatus on 
 edition* All that we need is for someone to write some prose for the
 documentation.

[2811239 2811239](https://sourceforge.net/tracker/index.php?func=detail&aid=2811239 2811239&group_id=106328&atid=644065) \- New element 'object'* There were quite a few different opinions expressed about what's
 desired and/or proposed. Lou suggested making the request red. LA
 suggested, instead, that we ask Gabby to provide clarification,
 after which the Council will reconsider the request.

[2811239 2811234](https://sourceforge.net/tracker/index.php?func=detail&aid=2811239 2811234&group_id=106328&atid=644065) \- Add @ref to 'material'* No objections.

[2794512 2794512](https://sourceforge.net/tracker/index.php?func=detail&aid=2794512 2794512&group_id=106328&atid=644065) \- Move 
 space to core
 module* LB suggested a revised proposal: a new element (perhaps named
 "spacer") be added to the core module. After some discussion of
 whether 
 milestone is what's wanted, it was agreed that the
 request warrants more discussion.

[2783323 2783323](https://sourceforge.net/tracker/index.php?func=detail&aid=2783323 2783323&group_id=106328&atid=644062) \- Add @from and @to to choice* It was decided that this request should be added to the roster for
 further discussion later in the meeting.

[2531384 2531384](https://sourceforge.net/tracker/index.php?func=detail&aid=2531384 2531384&group_id=106328&atid=644065) \- Rationalise application of
 @target* It was decided that this request should be added to the roster for
 further discussion later in the meeting.

[2493417 2493417](https://sourceforge.net/tracker/index.php?func=detail&aid=2493417 2493417&group_id=106328&atid=644065) \- 
 idno coverage* It was decided that this request should be added to the roster for
 further discussion later in the meeting.

[2298442 2298442](https://sourceforge.net/tracker/index.php?func=detail&aid=2298442 2298442&group_id=106328&atid=644065) \- ODD should customize ODD* It was decided that further discussion of this request should be
 deferred until after discussion of ODD\+.




afternoon of 
 2010\-04\-29

Presentation of Genetic Workgroup Proposal (EP)


3 parts to proposal:


* Sections 1\-5: Addition of documentary view of text to main TEI
 structure
* Sections 6\-10: proposals for additions to transcription module
* Genetic encoding




 Discussion
 
 DP pointed out problem that @reason is almost exactly the same as @cause.


Discussion of whether tei:subst should be able to contain cdata: general
 reluctance.


Issue of @instant: this indicates immediate correction at given stage;
 values\=true\|fault


DO notes relative rarity of attributes with true\|false values in TEI;
 suggests that it might be better to have a more generic attr for which
 "instantaneous" is a value as this will allow for the inevitable request for
 additional values from the community.


Proposals on Genetic Encoding per se (i.e. stages and the like). This will
 await the finishing of the collation and apparatus modules.


Issue with naming of proposed stage elements noted: stageNote, for example,
 is a well\-known type of text structure in theatre.




 Action and Next Steps
 
 
* The council accepts transcription group report in principle,
 recognising that significant changes may be still necessary.
* The council would like to publish the proposal for use by the
 community, on condition that it is recognised that changes may still
 be made that break initial material.
* The council will break the sections into SF tickets as proposed by
 Lou (broad terms) and James and Elena (specific items that could be
 broken off into non\-controversial tickets).



 Bibl Report (LR, KH, MH)
 
 Most of the council discussion focussed on reviewing the
 principles proposed by the group.


Council disagreed with proposal to use examples to suggest
 good practice (by suppressing examples of alternate coding). It
 felt it was important to be explicit in the text as well about
 what was good and bad practice. 


To avoid breaking existing documents (and recognising that
 bibliographic data can come in a variety of forms, some of which
 make it necessary to accept less than optimal encodings), we
 will recommend rather than require the practices suggested by
 the sub\-committee.


The following are tied to the corresponding points in the
 committee's report:


* 1\) The above meta principles apply
* 2\) DITTO
* 3\) Accepted with the exception of name\-internal punctuation: e.g.
 O'Donnell, Smith\-Marbles, E. B. White
* 4\) Same as 1: yes subject to meta\-conditions.
* 5\) accept
* 6\) \[Get Kevin's summary]
* 7\) Leave as is but acknowledge that life is difficult: e.g. you might
 well have mixed blbstruct and bibls. Leave example.
* 8\) The failure to reflect the proposed values for @type as listed in the
 guidelines was a bug. But the larger issues about article scope vs.
 actual citation is more complicated and is to be reexamined by the
 sub\-committee.


Lou and Kevin are to work and implement the easy issues in the odds;
 sub\-committee is to clean up document in light of discussion and return
 to council with a clean version by June 15, with comments to follow by a
 deadline to be determined.





morning of 2010\-04\-30

 Reports of small\-group discussions of feature requests
 
 Council members met in groups of two or three to discuss various tickets
 that were unresolved after yesterday's discussions. Below are notes from
 reporting back.



[CALS for TEI (2940838\)](https://sourceforge.net/tracker/index.php?func=detail&aid=2940838&group_id=106328&atid=644065)* Laurent reported that he, Dan, and Kevin decided on these
 things to do: (1\) add a reference to CALS in the Guidelines as
 an alternative way to encode tables and (2\) use Sebastian's ODD
 that he developed for CALS as part of his work with ISO \[?] to
 include in the TEI (much like MathML and SVG in the TEI). 


Sebastian noted that we actually have a private re\-implementation
 of MathML and SVG by incorporating these from the standard \[at
 the time of ODD generation?]. He also noted that "CALS" can mean
 many things, not all of which are clearly defined, but most
 people use it to refer to the CALS exchange model, which is
 well\-specified. He said we need to talk to Norm Walsh \[who is
 our best contact for CALS].


Laurent said the third thing to do is to contact Norm Walsh.


Dan asked Sebastian whether his ODD needs polishing before public
 distribution. Sebastian replied that \_\_\_\_and said he just needs
 a namespace to use for CALS elements.


Lou asked to clarify that there was consensus not to include CALS
 elements in the Guidelines. Everyone agreed that we would not do
 so at this time.

[Generic dates (2925145\)](https://sourceforge.net/tracker/index.php?func=detail&aid=2925145&group_id=106328&atid=644065)* Dot reported that she, Elena, and James discussed a ticket
 proposing to create att.datable.generic for normalizing dates
 using non\-Gregorian calendars and dating systems. She said they
 like the idea but are unsure of implementation. James added that
 the datatype would need to be so loose that it basically becomes
 free text.


Elena said that \_\_\_\_ would need a new date element.


James said that the ticket proposes a new form of canonical
 referencing, which Elena noted would need to be defined in the
 header.


Laurent asked whether we should attempt to rework the proposal or
 send it back to the author to re\-propose in a different form.
 Dan replied that there's a risk that a new proposal would be
 less TEI\-like.


After a discussion, it was agreed that Elena would summarize the
 possible ways forward \[for the proposer of the ticket]. Lou
 asked her to monitor the ticket for future discussion and
 proposals.

[Allow @cert on choice and model.choicePart
 (2834505\)](https://sourceforge.net/tracker/index.php?func=detail&aid=2834505&group_id=106328&atid=644065)* Julianne reported that she and Brett discussed this ticket,
 which included an alternative suggestion in the comment to allow
 @cert on seg. She and Brett did not like the latter idea, but
 they also didn't like the original proposal since too many
 attributes would be allowed on choice and model.choicePart.


Instead, Julianne and Brett proposed to make all elements in
 model.choicePart members of att.responsibility.

[Allow @to and @from on choice (2783323\)](https://sourceforge.net/tracker/index.php?func=detail&aid=2783323&group_id=106328&atid=644065)* Julianne reported that she and Brett also discussed this
 ticket. She said the proposal is in the spirit of the TEI, but
 she noted that some good alternative encodings were also
 suggested on the ticket. She said they would like to know what
 Christian Wittern (who proposed the ticket) thinks of the
 alternative encodings. She noted that the Guidelines give no
 examples of @to and @from on app, so it's hard to compare the
 alternatives.


Dan said that @to and @from are on app because of the possibility
 of there being a lemma, whereas choice doesn't have these
 because it doesn't assume the existence of a lemma.


Brett summarized the use case given in the ticket. Elena noted
 that the proposal provides a simple mechanism for accomplishing
 something like stand\-off markup, but she said it's not clear why
 we wouldn't allow these attributes on all elements. Laurent and
 Lou agreed that we need a more generic standoff mechanism and
 shouldn't create a hack for use only on choice.


Dan noted that, for the use proposed, that there are existing
 mechanisms (@ref and @key) for pointing to controlled
 vocabularies and an existing mechanism (app) for encoding a
 lemma.

[Allowing non\-numbers in 
 idnos and allowing 
 idno in 
 author
 (2493417\)](https://sourceforge.net/tracker/index.php?func=detail&aid=2493417&group_id=106328&atid=644065)* Sebastian reported that his group discussed a proposal to allow
 
 idno to contain non\-numeric identifiers such as URIs and DOIs.
 His group agreed with this proposal to add 
 idno to
 model.nameLike.


As for allowing 
 idno in 
 author, the group realized that 
 author
 already has a content model that appears more flexible than
 desired (for example, allowing 
 add and 
 del), so they proposed to
 correct this by changing the content model of 
 author of
 model.limitedPhrase. Kevin gave a use case for 
 add and 
 del
 within 
 author: encoding a typewriter manuscript of a draft of a
 work with a bibliography, where the bibliographic citations are
 encoded using 
 bibl or 
 biblStruct, in which the author made
 corrections to author names.


After discussion, consensus was reached to no longer change the
 content model to model.limitedPhrase but still allow 
 idno in 
 author. Sebastian noted that this will have the side\-effect of
 allowing people to use 
 idno anywhere they might use 
 author (not
 just within a 
 bibl or 
 biblStruct). He questioned whether we
 really want to do this. There was discussion.


Lou noted that having 
 idno as a child of 
 author goes against the
 principle voiced yesterday that elements should describe their
 parent. Kevin said there are many ways in which markup requires
 human inference to fully understand it and that this surely is
 not the only place where a TEI element does not describe the
 parent.


It was decided to create a separate feature request for \_\_\_\_.

[Space in core module (2794512\)](https://sourceforge.net/tracker/index.php?func=detail&aid=2794512&group_id=106328&atid=644065)* Dan said the issue is that the example is actually a
 transcription: the space is important because it appears in the
 layout not because it has a rhetorical or linguistic
 meaning\-\-e.g. the leading space in a indented paragraph. So if
 it is important, you should invoke transcription. The confusion
 is that 
 gap has two meanings one appropriate to transcription
 and one appropriate to non\-transcription circumstances (such as
 sampling). Gap was originally omit (sampling) but rename
 expanded semantically to cover the transcription situation in
 the move from P2\-P3\.


We need to indicate in the Guidelines that 
 gap has two distinct
 meanings: one appropriate strictly to transcription
 (illegible//missing) and the other (sampling) more generally
 applicable. We might also want to consider resurrecting P2's
 omit for the sampling application and say that gap should be
 used only for transcription (reversing the P3 decision).


Dot said that we want to recommend to David Sewell (the ticket
 submitter) that he use 
 space (from the transcription
 module).

[target/targets (perhaps
 ticket number 2531384?)](https://sourceforge.net/tracker/index.php?func=detail&aid=2531384&group_id=106328&atid=644065)* Lou reported that there are 8 cases in the Guidelines in which
 @target takes a single value and 8 others in which it takes 2\.
 Only 4 of these instances have the attribute value defined by an
 attribute class. His group proposed to introduce an attribute
 class for all instances of this attribute which would allow 1 to
 many values. However, the prose of the Guidelines will need to
 explain that for some elements, it doesn't make sense to have
 multiple values for @target.


Once this change is made, it will no longer make sense to use the
 @targets attribute. We will leave this attribute in the
 Guidelines but discourage its use. The three elements that have
 the @targets attribute should be added to the new attribute
 class.


It was also agreed that the discussion of cRef on the ticket
 should be "spun off" into a different ticket.





 Hyphenation (and orthographical changes at line breaks)
 
 
 Lou summarized the debate on appropriate use of the soft hyphen character,
 which is closely related to the question of how to encode hyphenation when
 also encoding line breaks.


As he explained, if you are transcribing early printed books with hyphens at
 the end of lines, there are a number of ways to do it. If your goal is to
 transcribe text, including hyphens, faithfully or to encode the text in a
 way that will allow you to process lexical items (generally speaking, words)
 without marking up these words with w elements, you will need to represent
 hyphenation in the source document.


If your encoding will mark line breaks (using 
 lb), this complicates the
 method for encoding hyphenation and requires any tokenization software to be
 capable of ignoring elements that can appear within words (like 
 lb).
 Alternatively, a derived text with 
 lb and other intraword elements removed
 could be produced for the concordance software from the master encoded
 text.


In short, the Guidelines are currently not helpful in giving guidance on
 encoding hyphens that appear to be accidents of line breaks (where a hyphen
 would not appear in the word had there not been a line break). It has been
 suggested to use the Unicode soft hyphen character for these cases, and Lou
 initially thought this would be appropriate; however, Deborah Anderson asked
 senior Unicode people about this and they told us that use of the soft
 hyphen for such cases is inappropriate. (The soft hyphen is meant for cases
 where processing software might choose to break a word, not where it was
 previously broken.)


If we instead used the 
 lb element, how would you indicate whether the word
 was broken across lines? You might use the type attribute to indicate
 whether a lexical unit has been broken by the hyphen \[as recommended in
 \[http://www.tei\-c.org/release/doc/tei\-p5\-doc/en/html/ref\-lb.html] the element
 definition for the 
 lb element], use whitespace before the element, or use
 the rend attrbute to describe the hyphenation. Lou suggested using the type
 attribute to indicate whether the hyphen marks the boundary between lexical
 items and the rend attribute to describe how this boundary is indicated
 (using a hyphen, semicolon, etc.). With this method, no hyphen is left as
 character data in the XML document.


Elena said this is exactly how the Austen project handled hyphenation.


\[Alternatively, the hyphen could be left in the text and no rend attribute
 used.]


Lou continued that this leaves the problem of handling hyphenation of words
 across line breaks in languages like Dutch and German, where letters within
 the word are sometimes duplicated before and after the hyphen. Juliana noted
 that Old Irish did something similar.


After discussion, it was decided to use the choice element to handle such
 cases.


Lou said that it's not clear where to put the lb element and said it would
 seem you would need to repeat it. Brett suggested a standoff choice element.
 Elena said that the Austen project used xml:id and corresp. Matthew said
 that \[some project he was involved in] used sameAs with xml:id.


Brett noted that we still haven't given advice on how to handle ambiguous
 cases (where it's not clear whether the source document's author would have
 used a hyphen had there not been a line break).


After discussion, it was decided that users could use any of the following
 values for the rend attribute for cases of ambiguity:



* hyphen
* soft or hard hyphen
* ambiguous
* \-


Lou asked whether the Council needs to give advice to \_\_\_\_ or to those
 revising the Best Practices for TEI in Libraries (both of which had
 questions about this issue). Kevin said those working on the Best Practices
 would use the Council decision in order to revise their work.




 ODD (r)evolutions
 
 Sebastian said several tickets have been submitted for problems with and
 suggestions for the ODD architecture. A mailing list \["tei\-meta"] was formed
 to discuss the future of the ODD system, but there was little discussion. He
 summarized the desired changes that were detailed in a message to the list
 on 2010\-04\-02\.


Laurent noted that the proposal for including and excluding elements
 individually assumes that there's something behind \_\_\_\_ that is pointed
 to.


There was discussion of the proposed changes.


Dan noted that these changes work best for elements that are in classes but
 asked how it would affect elements not in classes. There was further
 discussion, during which Sebastian said that there would need to be a "magic
 module" \-\- a TEI module that would automatically select \_\_\_.


There was further discussion.


Laurent asked whether we should provide an explicit mechanism to say which
 \_\_\_ \[is/are] in the TEI \[module?].


There was much further discussion.


Dan and Laurent said we need to have the source \[of what?] specify itself to
 avoid ambiguity. Sebastian disagreed that there's any ambiguity.


Brett asked whether all elements would be included or excluded by default.
 Sebastian said that currently \_\_\_\_\_.


There was a discussion on the merits of including or excluding elements as
 you go while constructing a project\-specific schema.


Council agreed to support the the further development of ODD.


Sebastian noted that we will have a problem with combining elements with the
 same name from different namespaces. Currently, our classes are named after
 exemplary elements, but it wouldn't be clear which namespace these exemplary
 elements belong to. He suggested three ways to fix this:


* Change the way model classes are specified in the ODDs. This
 unfortunately breaks any ODDs currently in use.
* Use namespaces in the names of model classes. This would not be valid
 RelaxNG, but it's perhaps such a feature could be suggested to the
 RelaxNG developers.
* Create fake namespaces within the names of model classes, perhaps
 using the raised dot Unicode character as a delimiter (since it's one of
 the few characters allowed where needed).


Kevin suggested choosing the first option but adding a feature to Roma that
 will upgrade any existing ODDs when they are uploaded to use the new system
 of model classes.


Dan asked whether the first solution still leaves the problem of the third
 solution. He suggested a fourth solution: adding an attribute (perhaps
 called "prefix") to the element specification in the ODD language.


After discussion, Council decided that Sebastian will choose the best way to
 handle homonymous elements from different namespaces. Dan added that he
 should strive to make ODD mechanisms generalizable beyond the TEI.




 afternoon of 2010\-04\-30
 
 
Reconvened at app. 1:15



On LR's suggestion, the council reviewed the amber bug reports and summarized
 each.



[2964254](https://sourceforge.net/tracker/?func=detail&aid=2964254&group_id=106328&atid=644062)* KH summarized, saying that according to element definition of
 
 keywords, "term" is misused. Short discussion regarding the
 location of the problem in the guidelines followed.

[2963461](https://sourceforge.net/tracker/?func=detail&aid=2963461&group_id=106328&atid=644062)* SR: This is an implementation problem.

[2955059](https://sourceforge.net/tracker/?func=detail&aid=2955059&group_id=106328&atid=644062)* Discussion of history of use. Conclusion is for LB to clear up
 discussion of use cases in the guidelines.

[2945206](https://sourceforge.net/tracker/?func=detail&aid=2945206&group_id=106328&atid=644062)* Problem with Vesta

[2938882](https://sourceforge.net/tracker/?func=detail&aid=2938882&group_id=106328&atid=644062)* Problem with Vesta

[2938735](https://sourceforge.net/tracker/?func=detail&aid=2938735&group_id=106328&atid=644062)* LB: For historical reasons, @hand of att.transcriptional is declared
 as data.pointer, but the @new 
 handShift is declared as
 data.code. It was decided that this would be treated further in the
 break\-out sessions

[2932853](https://sourceforge.net/tracker/?func=detail&aid=2932853&group_id=106328&atid=644062)* Agreed to make consistent (see LB's comment at SF)

[2915506](https://sourceforge.net/tracker/?func=detail&aid=2915506&group_id=106328&atid=644062)* LB summarized J Walsh's use case, which involved use of 
 bibl
 in tabular data. LB opined that this was tag abuse. Council members were
 unable to imagine alternative scenarios in which label as described
 might need 
 bibl. SR floated alternative suggestion of including
 
 bibl in macro.phraseSec. No need for changes of any kind at
 this time.

[2900430](https://sourceforge.net/tracker/?func=detail&aid=2900430&group_id=106328&atid=644062)* EP and DO favor first proposal. LB noted that redefining will break
 backward compatibility. EP noted that the second proposal
 (
 scriptNotes with 
 scriptNote children) wouldn't
 break backward compatibility. LR proposed that for now we agree that a
 mechanism is needed but that we defer a decision about the specifics
 until the key/ref decisions have been made. Agreed.

[2714682](https://sourceforge.net/tracker/?func=detail&aid=2714682&group_id=106328&atid=644062)* KH: Compassed by the proposals and actions put forth yesterday.



Breakout





Reconvened at 2:05





 First report (EP)
 
 * Propose using @hand and deprecate @new on 
 handShift
* Propose rejecting the request to make @hand global attribute. Reason:
 doesn't solve the overlapping problem.
* Propose revising the guidelines to recommend using 
 handShift
 at the beginning if you will use it later.
* Propose revising the guidelines to recommend similar use of all
 milestone elements.


LB brought up the use\-case of the First Folio, but he agreed after discussion
 that it doesn't present a problem.


Propose a new element for quire\-breaks. 


* \[Some debate]
* LR Noted that this has already been added as a SF ticket
* EP also noted that the issue of uncertainty whether a hand is A or B
 was not addressed.




 Second report (KH)
 
 
[2900430](https://sourceforge.net/tracker/?func=detail&aid=2900430&group_id=106328&atid=644065)* Decided they prefer having one or more 
 term elements w/in
 
 keywords. Should you believe that there are nested terms in
 a compound subject term like "History \-\- Russia", such is already
 allowed by nesting term elements. Examples in guidelines will need to be
 changed.


LR: We have thus dealt with all of the amber bugs \& feature requests.


2:20


LR: Would like to treat @key / @ref and deprecation mechanisms.



\-\-small break\-\-



LR: We need a way to have a "soft" deprecation, a way of explaining to the
 community that they shouldn't use a certain practice that was formerly
 allowed/recommended. We don't want to enforce a strict mechanism (one that
 breaks compatibility). Proposes that in future (minutes, etc.) we use
 "deprecation" in this way.


\[Discussion of where the deprecation takes place. DO, e.g., floats idea of an
 appendix in which all things marked as deprecated are gathered.]


General agreement that we need a formal way of marking the deprecation (e.g.,
 
 note type\="deprecated").


DO: proposes a small working group, but this proposal was not met w/
 enthusiasm.


Discussion of creating some way to flag not only deprecated practice but also
 recommended practice. Reference to ISO and W3C uses of "required" etc.


LB: We had two ways of noting the canonical home of an item: @key or @ref.
 John Walsh wanted a "magic token" pointer for @facsKey. Occurred to folks
 that URIs need not be URL. Proposal is to deprecate @key and make clear that
 @ref can be used.


SB: If there are places where only @key is available, do we add @ref
 (moduleRef)? Do we recommend a way to compose the "magic token"?


LB: There's a syntax for URN's, so that's one option.


LR: What are the opinions of folks outside the TEI?


LB: Some geeks have said it's OK. Objections incl. that we should use
 registered URNs.


Discussion about \- persistence assumption in URN scheme.


LB: Proposal is to continue to allow @ref to use A URI, which can be a URN,
 but it doesn't have to be.


JC: Do people think that the TEI should be registering themselves as a proper
 URN?


\[Seems to be affirmation]


SR: Original problem that John Walsh raises can be solved other ways, too.
 E.g., he can use a local web service that resolves an arbitrary
 identifier.


KH: Or we could also recommend that users register a URN.


\[People seem to like this option]


KH: Are we OK withLou's recommendation that we prefer @ref?


\[Unanymous agreement]


LR: Issue of synonyms (e.g., @lemmaRef vs. other elements that just use
 @ref).


KH: We should probably also change examples in the guidelines that use (only)
 @key (to add also examples w/ @ref).


LR: Summary: We have a set of guidelines for dealing w/ @key at large. This
 will allow us to deal with several outstanding issues: 


* If the semantics of the @ref are implied, you just call it @ref;
 otherwise, (e.g., scribeRef, @lemmaRef).
* We recommend anchoring URN mechanism when possible, but
 unregistered URNs are allowed (and allowed by W3C as well).
* We will change the guidelines.




 Wrap\-up
 
 SR: Do board members have anything they want to the Council to consider?


SS: Encouraging participation of Council members in the SIGs.


DO: Proposes assigning new Council members to a SIG and expect a report.


\[Discussion of the problem that comes from people rotating off]


DO: will put in a feature request to have a more formal system of rep. of
 Council members on the SIGs:


* correspondence
* education
* libraries
* manuscripts
* music
* ontologies
* scholarly publishing
* text and graphics
* tools


JN: the journal's publication of the "getting started" document.


LR: It was a great idea, but probably too ambitious to take on as a Council
 project. But the existing TOC and what's already there are good.


JN: What about authorship attribution of the existing material?


LB: No sense that there is a strong feeling on the Council that they want to
 retain ownership.


JC: Does the council want to have a regular place in TEI\-EJ to say, "This is
 what's been happening"?


LR \& JN: Probably not a good idea.


\[Discussion of the maintenance of the TEI website (stable URIs to bits of the
 guidelines; new newsServer; status of material in the vault)]



SR will contact David Sewell about putting search box in
 guidelines on the TEI site



LR: We've made good progess. The publishing issue: Our wrap\-up after the mtg.
 didn't completely satisfy him. He will need to talk more with Ken.
 Hyphenation was a productive discussion.


EP: Having the manuscripts proposals accepted in principle is satisfying.
 Thinks it is essential that the SIG has space to put things (put up
 different versions of the documents, acknowledge people who have
 contributed, etc.).


DO: Action has already begun to have this happen.


LR: Plan is to use the "feature request" system, right?


ER: Yes, will do this with Lou. There are certain existing feature requests
 that should be closed because we've decided on other protocols for handling
 them.



LB will close these.






