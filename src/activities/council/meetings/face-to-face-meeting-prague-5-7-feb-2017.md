---
layout: page.njk
title: "Face to Face Meeting, Prague, 5–7 Feb 2017"
date: 2017-02-07
---
# Face to Face Meeting, Prague, 5–7 Feb 2017




### Topics for Discussion



* Roma replacement (RV asks if we can find room in the agenda (1 hour or so) to go over
 some [RomaJS wireframes](https://docs.google.com/presentation/d/1sUESuY9pF3DkHoQMJJjrVMV2SPFQYE1YqmGrpA3wrMM/edit?usp=sharing "RomaJS wireframes")(UI)) (Sunday AM)
* SB: New ODD processor for the Guidelines? (with Martin Holmes) (16:00 Monday)
* RV: Researching Chapter 11 [http://www.tei\-c.org/release/doc/tei\-p5\-doc/en/html/PH.html](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html "http://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html")(Sunday AM after Roma)
* Finally resolving Package Distribution (16:00\)
* SB: Report on, and new partner for, work on [Chapter vi. Languages and Character Sets](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/CH.html "Chapter vi. Languages and Character Sets")? (Monday after TEI2German)
* Getting TEI into other XML Editors (Tuesday 09:00\)
* TEI2German (MS to report on translatathon) (Monday 09:00\)
* What else are we going to do with the Processing Model besides TEI simplePrint? (Tuesday
 09:\-\-, after Other XML Editors)
* Tickets




### Sunday, 5 Feb


Meeting started @ \~09:20 local time
**Attending:**
Alejandro Bia (AB)
Syd Bauman (SB)
Elisa Beshero\-Bondar (EB)
Hugh Cayless (HC)
James Cummings (JC)
Elli Mylonas (EM)
Martina Scholger (MS)
Peter Stadler (PS)
Sarah Stanley (SS)
Magdalena Turska (MT)
Raffaele Viglianti (RV)
* Council takes this opportunity to acknowledge the absence of Lou Burnard — this is
 the first Council meeting which he has not attended since the founding of TEI Council,
 and he had worked for the TEI for at least 10 years before that. Thus we would like
 to publicly thank Lou for his tireless wisdom and leadership.


09:00–09:30: Convene, set agenda
* Council convenes and sets agenda in draft
* Curating Council minutes:
	1. Minutes are still in Google Docs from Oct/Nov onward
	2. New TEI webmaster, Luis Meneses; can reach both Kevin and Luis on the [webmaster e\-mail](mailto:web@tei-c.org "webmaster e-mail").
* TICKETS!


09:30–12:30:
* Roma replacement: [RomaJS wireframes](https://docs.google.com/presentation/d/1sUESuY9pF3DkHoQMJJjrVMV2SPFQYE1YqmGrpA3wrMM/edit?usp=sharing "RomaJS wireframes")
	1. RV reports on development of RomaJS. Using technologies ‘react’ similar to what is
	 behind facebook, etc. He has been sketching out the processes and actions needed without
	 worrying too much about the front end. Now he needs to think about UI. He has created
	 some wireframes.
	2. JC: Can we store decision tree separate from the ODD Editor implementation? RV: Not
	 sure yet: Could be JSON or XML
	3. MT: I think we should aim to make it configurable. Every question positively answered
	 should probably result in an element or module or set thereof to be included. Take
	 some time to work out the questions for "Help me decide". EM: Prior to decision tree,
	 do some customizing of modules first.
	4. RV: We could divide up the work of the decision tree/ customization process. Questions
	 should be Y/N and about the user's project.
	5. Option to load any ODD that is accessible via a URL
	6. Application runs totally in browser, other than what OxGarage does, which is server
	 side. \-RV hasn't tested validation yet (via ODD for ODDs). (JC and HC: This is not
	 the same as the old "sanity check", which walked the graph to look for orphan elements
	 without modules). SB: What approaches can we take to validating the schema?
	7. RV: Related problem: Pure ODD vs RELAX NG. PS: Drop it and just support ODD. SB: Might
	 be good if the system could tolerate RELAX NG output. HC: If it's hard to implement,
	 probably not worth the effort. Just make sure to retain a modular architecture, get
	 a simple robust implementation to begin with and add other bits later. JC: Conformance
	 can’t be tested fully. But we can note conformance errors. Statistics: also count
	 modules/elements/classes/etc.
	8. AB: Roma: handling of language (for different purposes) was unclear in Roma’s interface.
	 There are three different uses of language: language of Roma’s interface, language
	 of the element glosses (generated documentation), and language of the generated schema
	 (use TEI tags in LOTAs). The last may have never been implemented into Roma. SB: Descriptions
	 should be in language of choice. The gloss description is what should be customizable
	 (not element names). MS and AB: Clarify the distinction between the Language of element
	 glosses (documentation) and language of the application interface (unclear in Roma).
	 May not build ability to change interface language right away. Roma does this, but
	 won’t be easy to use Roma’s tables for translations. Keep interface language choice
	 separate from the customization forms (e.g. top right of the window). Allow choice
	 for element documentation language. HC: A flag \= standard icon for documentation now.
	9. SB: Support dependencies of elements (e.g. if user selects addrLine, automatically
	 include address): for any element with only one parent, make sure that parent exists.
	 Or check for any element, make sure that at least one of its possible parents exists.
	 (This is what the old sanity check used to do—check for orphans.)
	10. EM: Should interface show you whether a parent exists? PS: Merge modules \+ elements.
	 Also choice of working by inclusion vs. exclusion. SB: Capability of loading an ODD
	 and changing it, module by module, from include to exclude. PS: Interface should prioritize
	 the decisions that 80% of users will be making: just select modules and make closed
	 valLists. Adding new elements is for advanced users. RV: The interface can make suggestions:
	 (what next? Close your valList?) MS: Simplify the first interface page to be welcoming
	 to new users: 2 choices, not 4 (Help me Decide \| Everything Else).
	11. For modifying elements: SB: suggestion, just concentrate on elements and not modules.
	 RV: Search boxes let you hunt for an element or attribute, and pull up info on classes.
	 HC: Good to push people into the Guidelines as much as possible. SB: graphically represent
	 hierarchy of classes.
	12. PS: how to point to documentation from other customizations? EB: Allow users to import?
	 RV and JC: certain standard customizations could have some basic documentation worked
	 in.
	13. Documentation will be live\-updated as Guidelines change. User can customize Guidelines
	 examples.
	14. Show the code you're generating: "XML view" vs. "Edit view" so users can see/interact
	 with code. "Groups": Try drag 'n drop to set up alternating elements or elements in
	 sequence.
	15. Attribute definitions: Specifying datatypes: SB: we could provide closed list; PS
	 and EB: new users need to learn what datatypes are—need linked documentation. SB:
	 should be able to see/modify what elements hold an attribute. May need to break up
	 element classes and model classes (users frequently don't understand the distinction,
	 and think of attributes as just sitting on particular elements)
	16. HC: Get TEI to hire a UX expert to help? EM: Need a UX designer who is accustomed
	 to complex technical decisions for knowledgeable people (not one who builds a shopping
	 interface).
	17. Organization: EB: Much of this may be reproducing and remixing the Guidelines. Discussion:
	 this will be helpful for people to read in process of implementing). SB: need way
	 to flag which "steps" are optional. EM: How to save midway? RV: Save implementation
	 in browser memory, download ODD at any point.
	18. Modifying datatypes: need closed val list to conform to a pattern
	19. Visualizations provide overview by color bars of what/what proportion of modules/elements/classes/datatypes
	 are added vs. changed. Suggestions: be careful of accessibility re colors (and connotations
	 of green vs. red).
	20. PS: Can we save ODD in progress on server, to make it easy to reference when users
	 needs help? RV: Might be too complicated...JC: Like GitHub and Gist, make a place
	 where user can paste in code...SB: Maybe just upload your saved ODD. PS: Let's make
	 this as easy as possible: when user clicks "HELP!" a process runs that invites upload/mailing
	 of ODD to Council list, etc. RV: best if it's not a server\-dependent thing. Google
	 Analytics use? Privacy issues: On click, "Do you want to make your ODD public?"
* RV: Researching Chapter 11 [http://www.tei\-c.org/release/doc/tei\-p5\-doc/en/html/PH.html](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html "http://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html")
	1. [https://github.com/TEIC/TEI/issues/1427](https://github.com/TEIC/TEI/issues/1427 "https://github.com/TEIC/TEI/issues/1427"): Can we keep the rewriting simple? Or defer so RV can concentrate on romajs?
	2. Issue of Guidelines' handling of text\-focused vs. document\-focused approach. EM: Change
	 name of chapter to deal with primary sources?
	3. Action on MS: write to Gerrit Bruening about helping with redrafting Ch. 11 for Council
	 review by November 2017 F2F. Report on progress in March meeting.
* TICKETS!


12:30–13:30: lunch
13:30–17:00:
* TICKETS.
* Finally resolving Package Distribution (17:00\)
	1. Move to a new distribution point—on the tei\-c site.
	2. Several package systems: which should maintain? Definitely debian. SB: Packages make
	 life easier for wary users.
	3. PS volunteers to talk to new webmaster to migrate package distribution, and to figure
	 out key situation, test. Need to review and update documentation.
	4. Currently documented [on TEI wiki](https://wiki.tei-c.org/index.php/TEIDebian "on TEI wiki")
	5. Debian package analysis, list of what’s in there [https://docs.google.com/spreadsheets/d/1w3ObgtqxpwYLrfaF\-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit?usp\=sharing](https://docs.google.com/spreadsheets/d/1w3ObgtqxpwYLrfaF-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit?usp=sharing "https://docs.google.com/spreadsheets/d/1w3ObgtqxpwYLrfaF-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit?usp=sharing")


* Decision Tree brainstorming
	+ [Doc with questions](https://docs.google.com/document/d/1r33QbY7O0HqOHvTxZtOq_-MrYqtIE572YqPEY3JrQr0/edit?usp=sharing "Doc with questions")
	+ [Mind map for graph](https://www.mindmeister.com/840952489?t=2pbfugeKDY "Mind map for graph")




### Monday, 6 Feb


09:00–12:30:
* TEI2German (MS to report on translatathon)


Report: [https://docs.google.com/document/d/10KOHtX3GvZwN6qgtRhQPw3pIaBL9gyt02bkXbJMwvlg/edit](https://docs.google.com/document/d/10KOHtX3GvZwN6qgtRhQPw3pIaBL9gyt02bkXbJMwvlg/edit "https://docs.google.com/document/d/10KOHtX3GvZwN6qgtRhQPw3pIaBL9gyt02bkXbJMwvlg/edit")
[https://drive.google.com/open?id\=0B1ww0LfaUAcvQXpwd25iVGxETG8](https://drive.google.com/open?id=0B1ww0LfaUAcvQXpwd25iVGxETG8 "https://drive.google.com/open?id=0B1ww0LfaUAcvQXpwd25iVGxETG8")
Issue with @xml:lang set to "und" in arbitrary(?) ways due to processing.
Apply Google Translate to help populate international examples, as a stage 1 to prompt
 work in correction/revision? (Easier than starting from scratch in a new language.)
"Translate this page" button
SB: suggestion: make a special GitHub for TEI internationalization
PS: Make it more openly accessible (not burden on Council), crowd\-sourcing TEI translation
AB: automatic updating of all language exemplars when one is updated—will require
 some programming to implement.
 
Where to begin: "Translate this page" to the reference pages first.
* [https://translate.google.com/manager/website/](https://translate.google.com/manager/website/ "https://translate.google.com/manager/website/")may be an option for low\-level basic translations for languages we don’t have


\=\=\=Google embed code for ‘Select Language’ plugin\=\=\=
**\<div id\="google\_translate\_element"\>\</div\>\<script type\="text/javascript"\>**
**function googleTranslateElementInit() {**
**new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
 multilanguagePage: true, gaTrack: true, gaId: 'UA\-4372657\-1'}, 'google\_translate\_element');**
**}**
**\</script\>\<script type\="text/javascript" src\="//translate.google.com/translate\_a/element.js?cb\=googleTranslateElementInit"\>\</script\>**
\=\=\=
MS will generate google translations for a few languages (Fr, DE, EL, SP, IT, HE,
 AR) for about 10 glosses, to look at the quality. The various speakers of these languages
 in Council will evaluate the translations. If they seem good, we can try to add a
 “translate with Google” button to the spec pages or parts of the spec pages.
* SB: Report on, and new partner for, work on [Chapter vi. Languages and Character Sets](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/CH.html "Chapter vi. Languages and Character Sets")? (Monday after TEI2German)
	1. HC will work on updating this.
* TICKETS!


12:30–13:30: lunch
13:30–16:00:TICKETS!
16:00–17:00:
* SB: New ODD processor for the Guidelines? (with Martin Holmes from Victoria) (16:00
 Monday)
	1. Council acknowledges the difficulties in maintenance of current stylesheets, due to
	 lack of specs and documentation
	2. Council in principle supports the idea of a new implementation with a defined specification
	3. Scope: processing ODD files to create schemas and documentation
	4. Prerequisites: coming up with specs what are desired outputs


(all agreeing that using xslt is the best idea)
MT: how to start? ie the current XSLTs don't easily give us a full overview because
 of their complexity
SB: we don't want something that mimics what the current s/s do. ie don't ask: how
 did sebastian do this, ask instead: what's the correct implementation according to
 the guidelines?
SB: not every step needs to be in XSLT \- depending on the task
MT: one approach would be to start with specs outline and proof of concept implementation,
 possibly investigating not only XSLT but also XQuery
as long as things are streamlines, e.g. managed via maven \+ ant
* TICKETS!




### Tuesday, 7 Feb


09:00–12:30:
* **Action item:**Discuss short\-form bibliographies, cRef, and @ref on bibl (make sure council reads [ticket \#1431](https://github.com/TEIC/TEI/issues/1431 "ticket #1431")before discussion)


[http://jenkins.tei\-c.org/job/TEIP5\-dev/lastSuccessfulBuild/artifact/P5/](http://jenkins.tei-c.org/job/TEIP5-dev/lastSuccessfulBuild/artifact/P5/ "http://jenkins.tei-c.org/job/TEIP5-dev/lastSuccessfulBuild/artifact/P5/")always has the last build
* ODD for ODD schema
	1. Schema to facilitate ODD writing (by hand) in a manner that prescribes certain practice;
	 aimed primarily at workshop audience.
		1. Group thinks this is very impressive
		2. Suggestion that errors that are ODD for ODD constraints be indicated as non\-fatal,
		 or warnings.
		3. Name \- pick one that makes it easier to understand what this is, especially if users
		 encounter it in an Oxygen framework list.


*Discussion:*JC: is this something that Council wants to adopt and support? It represents a particular
 view of ODD writing. It also implies continued maintenance. So we should actively
 decide to take it on or not. SB replies that the build process is very simple now,
 could be part of build process. PS will it have tests?
Need to resolve: naming, whether to put in in Exemplars and/or somewhere else, and
 testing. How to indicate what it's for in oXygen: a template. **Action on SB:** have in oXygen build and present on this at TEI Members' Meeting.
URLs:
* [HTML documentation](http://www.wwp.neu.edu/outreach/seminars/_current/handouts/ODD_exercise_support/schemas/odd4odds.html "HTML documentation")
* [RELAX NG (compact syntax)](http://www.wwp.neu.edu/outreach/seminars/_current/handouts/ODD_exercise_support/schemas/odd4odds.rnc "RELAX NG (compact syntax)")
* [Schematron](http://www.wwp.neu.edu/outreach/seminars/_current/handouts/ODD_exercise_support/schemas/odd4odds.isosch "Schematron")
* [XSLT that generates ODD file](http://www.wwp.neu.edu/outreach/seminars/_current/handouts/ODD_exercise_support/toctoc_generation/TEI_to_odd4odds.xslt "XSLT that generates ODD file")


* Getting TEI into other XML Editors (Tuesday morning) (skip?)
	1. XMLmind ([http://www.xmlmind.com/xmleditor/](http://www.xmlmind.com/xmleditor/ "http://www.xmlmind.com/xmleditor/")), XML copy editor
		1. **Action on AB:** Alex tries to contact them
* What else are we going to do with the Processing Model besides TEI simplePrint? (Tuesday
 morning, after Other XML Editors)
	1. Models not directly tied to elementSpecs (**Action on MT** to open a ticket)
		1. Specify a default model?
		2. Models for text nodes? Add model to schemaSpec...
	2. Planned extensions to models (report on work\-in\-progress ideas by MT)
		1. outputRendition to cover other media types/languages beyond CSS (eg document\-level
		 settings for XSL\-FO)
		2. nested models or parametrized templated to accommodate more complex output structures
	3. JC noted that there were two large pieces of work based on processing model developments:
		1. Create much better XSLT output from it (e.g. with simplePrint) — high quality output
		 was always one of the aims
		2. In rewriting/improving Stylesheets for Guidelines production: use processing model
		 internally to the Guidelines build process to determine its output
	4. Marjorie Burghart suggests a funded task force for an exemplar ODD like simplePrint
	 that includes critical apparatus (with medieval manuscripts as its first target area)
	 called simpleCritApp or similar. This group (JC, MT, MB) \- very fresh idea, it will
	 develop. Proposal will appear following small group discussion.


* Standoff element / Linked Data Block
	1. Seems to be general consensus that we want this.
	2. Previous standoff proposal? PS: haven’t been in contact with Laurent, so no progress
	 at the moment: [https://github.com/laurentromary/stdfSpec](https://github.com/laurentromary/stdfSpec "https://github.com/laurentromary/stdfSpec")Is standoff enough?
	3. Do we need a separate initiative for \<ldb\>?
* SIG/workgroup/task force idea for Integrating other Vocabularies into TEI (MS and
 EB)
	1. JC: Isn’t there already a SIG on Text and Graphics? EB: SIG needs to be revived: emphasis
	 from lone active member at the moment is on figural placement on page, not semantics
	 of image. JC: Can’t you change the SIG focus? It has been fairly inactive.
	2. Need better examples to support other vocabularies (SVG, IIIF, GIS vocabs), taking
	 into account what other vocabularies exist and how to integrate them with TEI
	3. Need to get in contact with reps of other vocabs. RV: Identify people who work with
	 TEI and SVG/IIIF, etc. Martin Holmes, Jeff Witt, RV, MS, etc. Make presentation to
	 Text and Graphics SIG? Or take it over?
	4. [The SIG list](https://listserv.brown.edu/?A0=TEI-GRAPHICS-SIG "The SIG list")has not had much activity, but [the last msg](https://listserv.brown.edu/?A2=TEI-GRAPHICS-SIG;5fb3bb40.1610 "the last msg")refers to several tickets.
	5. RV: propose something for TEI Conference? Or speak to relevant SIGs (Manuscripts SIG,
	 Text and Graphics) EM: Perhaps emphasis should be on integrating standards rather
	 than IIIF in particular. RV: Perhaps a Council presentation to membership. (SB question:
	 With or without program\-committee/peer review endorsement?) HC: could be either, we
	 have to make up our minds what we want
	6. **Two actions for TEI Conference**
		1. Get SIG (communicate with Martin de Iglesias) to sponsor workshop with open call for
		 participants and
		2. Organize a Council\-selected panel of authorities on vocabularies


[http://teic.github.io/TCW/testing\_and\_building.html](http://teic.github.io/TCW/testing_and_building.html "http://teic.github.io/TCW/testing_and_building.html")has instructions for installing Docker and using it to build the Guidelines and Stylesheets.
* TICKETS!


13:30–lunch

### Wednesday 8 February


The public day will take place on February 8th 2017 at the Faculty of Arts, Charles University, room P104 (first floor), nám. Jana Palacha 2, Praha 1 ( [map](https://goo.gl/maps/h9ej1k34ak42 "map")).
[http://www.ff.cuni.cz/methodologies\-in\-dh/](http://www.ff.cuni.cz/methodologies-in-dh/ "http://www.ff.cuni.cz/methodologies-in-dh/")


### Discussion topics unresolved (from the whole week)


(Listing all the things we didn’t get around to here)
* Decision Tree brainstorming
	+ [Doc with questions](https://docs.google.com/document/d/1r33QbY7O0HqOHvTxZtOq_-MrYqtIE572YqPEY3JrQr0/edit?usp=sharing "Doc with questions")
	+ [Mind map for graph](https://www.mindmeister.com/840952489?t=2pbfugeKDY "Mind map for graph")
* Discuss short\-form bibliographies, @cRef, and @ref on bibl (make sure council reads [ticket \#1431](https://github.com/TEIC/TEI/issues/1431 "ticket #1431")before discussion)
* Follow up for [ticket \#1453](https://github.com/TEIC/TEI/issues/1453 "ticket #1453")
* “ODD for ODDS”
	+ Rename
		- TOCTOC (TEI ODD customization for TEI ODD customization)
		- tei\_customization
	+ Tests?
	+ Decide where it goes (Exemplars/? elsewhere?).
	+ Do we adopt and support it? What are the plans for maintenance?
	+ How to frame/market so that it is clear what it is for.
* Getting TEI into other XML Editors (discuss during future call; AB to contact people
 at [XMLMind](http://www.xmlmind.com/xmleditor/ "XMLMind"))
* Standoff element (specifically, [this](https://github.com/laurentromary/stdfSpec "this")) and the Linked Data Block



#### Bugs Needing Discussion


Groups:
A: MS, SS, EBB, SB
B: JC, HC, EM, AB
C: PS, RV, MT
"\>\<listRelation\> as child element of \<body\>Add listRelation to model.listLike;
JC suggests this is an example of the “Argumentum ad ‘In inferno ignem quidni?’” fallacy;
PUNTING THIS TICKET: suggestion of a new \<ldb\> element named after Lou, that although
 it stands for "linked data block" officially, only does so as a cover for Louis Derryck
 Burnard.
**C**1542ND[Extended Structure for \<additions\>](https://github.com/TEIC/TEI/issues/1542 "Extended Structure for <additions>")No change. We suggest to use list. If the additions are considered substantial and
 therefore need more specific encoding, we suggest to encode them directly with msItems
 within msContents**A**1534ND[move sample values from description of gap/@reason to \<valList\>](https://github.com/TEIC/TEI/issues/1534 "move sample values from description of gap/@reason to <valList>")Semi\-open valList (add “deleted”), and type should be data.enumerated \- Assign it
 to Syd**B**1531ND[rs should contain q and quote](https://github.com/TEIC/TEI/issues/1531 "rs should contain q and quote")Suggest giving rs membership in model.qLike. Syd will investigate and report back.**C**1530ND[Add \<postscript\> to att.written, add \<handShift/\> to global](https://github.com/TEIC/TEI/issues/1530 "Add <postscript> to att.written, add <handShift/> to global")Allow \`@hand\` on \`postscript\`. Agree with @peterstadler that there should be another
 ticket for moving \`handshift\` up a level.**A**1524ND[Schematron inside ODD files should be more precisely specified](https://github.com/TEIC/TEI/issues/1524 "Schematron inside ODD files should be more precisely specified")Syd and group suggest to not worry about this for now until schematron processing
 becomes a problem. Don’t things work ok now?**B**1521ND[actor should be member of att.canonical](https://github.com/TEIC/TEI/issues/1521 "actor should be member of att.canonical")Subgroup agrees with LB. Go, Green!**C**1519ND[Sort out TEI@version please](https://github.com/TEIC/TEI/issues/1519 "Sort out TEI@version please")Yes. See comment**A**1515ND[placement of nested \<figure\>s: allow \<zone\> in \<figure\>](https://github.com/TEIC/TEI/issues/1515 "placement of nested <figure>s: allow <zone> in <figure>")Should use zone, but outside of figure, sibling (within surface for ex.)**B**1514ND[Expand att.notated to all elements commonly used in linguistic markup: \<quote\>, \<s\>,
 \<cl\>, \<phr\>, \<w\>, \<m\>, \<c\>, \<seg\>](https://github.com/TEIC/TEI/issues/1514 "Expand att.notated to all elements commonly used in linguistic markup: <quote>, <s>, <cl>, <phr>, <w>, <m>, <c>, <seg>")Go Green!**C**1512ND[Adapt \<etym\> to allow for encoding of typed and complex etymological processes: (i)
 add to att.typed class; (ii) allow recursion;](https://github.com/TEIC/TEI/issues/1512 "Adapt <etym> to allow for encoding of typed and complex etymological processes: (i) add to att.typed class; (ii) allow recursion;")Green: sounds good.**A**1510ND[Make orth member of att.notated](https://github.com/TEIC/TEI/issues/1510 "Make orth member of att.notated")If the information being recorded is just the script, then it should be in the @xmlLang
 attribute. But there seems to be more information that may be recorded (accented,
 unaccented). @notation seems like a good suggestion. But first check that script is
 insufficient.**B**1474ND[Need to improve GIS/gazetteer encoding support in TEI](https://github.com/TEIC/TEI/issues/1474 "Need to improve GIS/gazetteer encoding support in TEI")F2F subgroup sees no issues with adding @crs and @geoEncoding to the place and placeography elements, but suggests we need a working group with
 interest and practical experience to work on developing introductory documentation
 for the Guidelines.**C**1461ND[Add new element \<unit\>](https://github.com/TEIC/TEI/issues/1461 "Add new element <unit>")No. (see comment)**A**1453ND[\`\<path\>\` should exist alongside \`\<zone\>\` for non\-closed areas in facsimile](https://github.com/TEIC/TEI/issues/1453 "`<path>` should exist alongside `<zone>` for non-closed areas in facsimile")Options in order of preference:
1\. Not allow new element \<path\> and suggest that he use SVG which is an external standard
 that works perfectly well for that purpose.
1a. Suggest that IIIF as an alternate solution instead of SVG.
2\. Look at SVG solution more carefully to make sure that it isn’t problematic to interact
 with TEI (global attributes?) for ex. HC points out that the SVG coordinate system
 may not translate into the zone/facsimile coordinate system.
3\. Allow \<path\> (but the group does’t recommend this one)
4\. We don’t like @path attribute on \<zone\> at all.
 
 JC notes some ppl interested in IIIF might like[http://dmt.bodleian.ox.ac.uk/](http://dmt.bodleian.ox.ac.uk/ "http://dmt.bodleian.ox.ac.uk/")
**B**1431ND[clarify how to encode short\-form citations](https://github.com/TEIC/TEI/issues/1431 "clarify how to encode short-form citations")Subgroup still agrees with last subgroup and that ppl should use \<ref\> for references.
 Add clarifying text and update existing examples.
See also [\#1579](https://github.com/TEIC/TEI/issues/1579 "#1579")
**C**1415ND[\`\<taxonomy\>\` should allow both description elements and categories](https://github.com/TEIC/TEI/issues/1415 "`<taxonomy>` should allow both description elements and categories")All seems well to us\- Done567ND[Allow \<relation\> to occur intermittently within parent elements](https://github.com/TEIC/TEI/issues/567 "Allow <relation> to occur intermittently within parent elements")1578ND[floatingText being ignored inside p: abstract model violation \#1578](https://github.com/TEIC/TEI/issues/1578 "floatingText being ignored inside p: abstract model violation #1578")

#### Other Needs Discussions which aren’t bugs or feature requests





| **Group** | **Number** | **Title** | **Notes** |
| --- | --- | --- | --- |
| A | 1574 | [New Problem with Installing TEI Framework Plugin for oXygen](https://github.com/TEIC/TEI/issues/1574 "New Problem with Installing TEI Framework Plugin for oXygen") |  |
| B | 1577 | [Appendix C: Element Spec Reference Pages could have navigation through all elements](https://github.com/TEIC/TEI/issues/1577 "Appendix C: Element Spec Reference Pages could have navigation through all elements") | Seems reasonable to subgroup. They think SB should implement. |
| C | 1568 | [typeNote is member of header module but only useable in typeDesc (msDescription module)](https://github.com/TEIC/TEI/issues/1568 "typeNote is member of header module but only useable in typeDesc (msDescription module)") | Yes, it should be moved to the right module |
| A | 1561 | [Mysterious maven stuff in the build](https://github.com/TEIC/TEI/issues/1561 "Mysterious maven stuff in the build") | HC says he will kill it with fire and a big sharp stick.. |
| B | 1540 | [Remove or rewrite TEI\-Minimal](https://github.com/TEIC/TEI/issues/1540 "Remove or rewrite TEI-Minimal") | JC volunteers to rewrite, making it the absolute minimal possible TEI |
| C | 1536 | [Support for @context](https://github.com/TEIC/TEI/issues/1536 "Support for @context") | We suggest to drop this unimplemented feature silently. |
| A | 1508 | [zone used with JSON, etc: need examples in Guidelines](https://github.com/TEIC/TEI/issues/1508 "zone used with JSON, etc: need examples in Guidelines") | EB should link with larger discussions re text/image and integration of vocabs, including  \#1453 |
| B | 1506 | [remarks in specification of \`\<att\>\` have an ambiguous reference](https://github.com/TEIC/TEI/issues/1506 "remarks in specification of `<att>` have an ambiguous reference") | Subgroup agrees it should be clarified. It has suggested some wording on the issue. |
| C | 1463 | [Relation of @style and @rendition needs clarifying](https://github.com/TEIC/TEI/issues/1463 "Relation of @style and @rendition needs clarifying") | HC will clarify the prose. |
| A | 1459 | [Description of \<textNode\> is insufficient](https://github.com/TEIC/TEI/issues/1459 "Description of <textNode> is insufficient") |  |









