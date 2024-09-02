---
layout: page.njk
title: "Technical Council F2F Washington 2019-05-06/08"
---
# Technical Council F2F Washington 2019-05-06/08
**Present:**


* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EBB)
* Meaghan Brown (Folger Representative) (MB)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Remote:**
* Vanessa Bigot Juloux (VBJ)


Organizational
==============


Timeline
--------




| Monday May 06 | 9:00–12:00 | Council meeting |
| --- | --- | --- |
|  | 12:00–13:00 | Open invite brown bag lunch with Folger staff and others—Foulke Conference Room (301 East Capitol St) |
|  | 13:00–17:00 | Council meeting |
|  | *Evening plans* |  |
| Tuesday May 07 | 9:00–13:00 | Council meeting (continuing over lunch) |
|  | 13:00–14:30 | Guided Folger book exhibit for Council members (optional) |
|  | 14:30–17:00 | Council meeting (with Martin Holmes teleconferencing in) |
|  | *Evening plans* |  |
| Wednesday May 08 | 9:00–13:00 | Council meeting |
|  | 13:00 | Lunch |
|  | 14:00–17:00 | Council meeting |
|  | *Evening plans, 19:00* | Dinner at Raff’s |


Folger Library, Washington D.C.
-------------------------------


201 E Capitol St SE, Washington, DC 20003\.
Meeting Location: Foulke Conference Room, in 301 East Capitol St., SE. This building is across the street from the main Folger building, and is **swipe access only**. Meaghan Brown (Folger staff) will be meeting us each day and monitoring the door.
Monday 06
---------


### **Morning (09:00–12:00\)**


* **Council thanks MB and RV for local organising.**
* **General issues**
	+ F2F Graz, September 14**–**16
	+ Elections
		- MT raises issue of same people being re\-elected repeatedly; JC and EM are not planning to run for Council so it will ensure we have at least 2 new members on the Council.
		- EM raises the question of specific roles that are always needed for the Council to continue operation: infrastructure, stylesheets, Guidelines editing, teaching perspective. We could ask the nominating committee to work on the slate proactively so that we have candidates to fill these roles.
		- EM also reminds us that there should be some capacity to recognize “invited member/expert” status like e.g. continued access to tei\-council list.
	+ Release in July (EBB \+ VBJ)
		- Timeframe: between July 14**–**20; MT is hosting EBB in Warsaw
			* July 16th is the tentative release date
			* Codename: Rebel release
			* Refrigeration on June 30
			* Freeze starts on July 9
			* Create release branch on July 14
		- With move away from ADHO server, there will likely be issues.
		- MS notes that someone from infrastructure team should be on the release.
		- Important is to review if release managers have all the necessary credentials.
		- PS suggests we revisit the infrastructure status in 2 months to check where we are.
		- PS: release of (old) Roma and OxGarage? Wants to release in a week or two. Currently it only works on dev branch, so it would make sense to do a release; increment Oxgarage to v2\.11\.0\. **Action on PS**
		- Stylesheets release?
			* SB: Wants to complete rub\-a\-dub first. Try to do the release in June.
* **ROMA JS (Report and Naming)**
	+ RV gave a report on RomaJS for which Council is deeply indebted.
	+ RV: time to put this on tei\-c.org domain and promote it!
		- SB: As long as we add caveats.
			* This is a “beta release”
			* Use in a standard\-compliant browser
			* Add note in Safari: please don't refresh the page
		- JC used in teaching and had no major problems and students liked it better than old Roma
		- Discussion of content blockly feature
			* Some disagreement about benefits of drag\-and\-drop interfaces, although this seems to be commonly used
		- PS: It would be good to have a footer or logo indicating where it's being hosted. **Action on PS**
		- RV accepting suggestions for content to put in the blank space on the main page
			* JC volunteers to help write this (but happy to have someone else help)
			* EBB: Think about mirroring, and announcing where is it mirrored? (Or auto load balancing / geographical mirroring?)
			* EM: suggests subgroup address this later during our F2F
			* **Action on subgroup**: JC, EBB, RV, EM
		- RV points out problem with pointing to an element in an external RNG (e.g. SVG).
			* SB: suggests possibility of a \<link\>\-like solution of pointing to both things. (Though how we point to something in an RNG schema we don’t control will be something we need to overcome…)
		- In discussing docLang translations, RV suggests using RomaJS as translation interface for changing descs
			* Might be good to test to see if/how people use it
		- RV is working on internationalizing the interface
		- DNS update for the new name is necessary. HC may be able to switch over the DNS entries this week.
			* RV can host on MITH server, with their new Jenkins server
			* RV needs to pull TEI data from the Vault
			* RV is using development version of oxgarage from Stylesheets (since it needs odd2json that is in dev). It might be necessary to make further changes to odd2json
			* MS: old Roma should feature a banner link to direct people to try out the new beta RomaJS interface
				+ We need to release old Roma to host the new banner, and a status bar to announce (gradual stages of) aspects of old Roma no longer working or being updated: **Action on PS**
	+ Naming for new Roma:
		- JC, as tasked, ran a shortlisting election which left us (in no particular order) with:
			* Roma (Keep it the same)
			* RomaJS (Keep the name we’ve been using)
			* Okonomiyaki (along the same line as Pizza Chef)
			* LuXor (with or without capital X)
			* ODDly
		- JC notes that maybe RV should just decide.
		- Council discusses their favourite ones.
		- RV prefers “Roma”. Calling the old one “Old Roma” or “Roma Classic” or “Retro Roma” or “Roma Antiqua”
		- PS: We're going to need a different subdomain to distinguish the two.
			* RV: for now romabeta.tei\-c.org
			* When not beta anymore, switch over to roma.tei\-c.org
			* (and old roma becomes ‘roma\-old.tei\-c.org’ or similar)
* **Standoff proposal**
	+ <https://github.com/sydb/stdfSpec/tree/linkDataBlock/Specification>
	+ \<teiCorpus\> → \<TEI\>
		- Council agrees changing \<teiCorpus\> to \<TEI\> is a good idea, and feels that it would be beneficial if Laurent Romary should instigate discussion concerning it on TEI\-L and other places as appropriate.
		- Council also agrees that the messier interleaving content is fine given the clarity of underlying content model it provides.


### **12:00–13:00** Open invite brown bag lunch


* Brown bag lunch with folger staff and others
* Some topics that have come up:
	+ Workshops and training resources
	+ Updating and fixing the “Projects that use the TEI” page
	+ Resources for transforming TEI


### **Afternoon (13:00–17:00\)**


**Continuing standoff discussion**
* + nonlinear textual features (was called “extratextual”):
		- SB notes examples like acrostics, anagrams, solutions to crossword puzzles, ciphers, codes, etc.; JC and EBB: we don’t need specific elements for these use cases.
		- EBB: Maybe a single generic element that indicates text that is not read in the expected sequence. Give a @type with suggested values.
		- EM: need a standoff wrapper/holder, like \<nonlinear\>
		- EBB: ergodic (a text that is meant to be entered from multiple places and read in multiple directions, like George Herbert's poem, "Angel Wings".) RV: But does that confuse things with ergodic literature. EBB: it's maybe one use case for this generic element, whatever it is.
		- JC: An example is Wilfred Owen’s letters home to his mother, he has a code word ‘Mistletoe’ in the text which then signals that the second letter of the next lines on the page will spell out the location he is currently stationed at. The point being we need not only to point to the individual letters in the text, but the piece of text which signals this (similar to the ‘clue’ in the crossword). Also ways to signal that indicates text is to be read non\-linearly after a certain point.
	+ \<ldb\> vs. \<standoff\>: Is it really a “linked data block” in our current understanding of linked data (in the semantic web sense)? Also ldb is less clear than standoff.
		- RV: \<standoff\> works as an overarching concept inclusive of linked data
		- JC and SB voted for \<ldb\>
	+ annotations
		- MT: Following [Web Annotation](https://www.w3.org/TR/annotation-model) standard with body and target. Annotation unit is a hinge connecting two ends. Indicate what is annotated, and what is said.
		- Laurent Romary at first wanted to repurpose \<interp\> element. In the course of discussion, the group decided on a new element, called \<annotation\> with two attributes, maybe: @body?, @target? which could each accept multiple pointers.
		- HC: there are two styles for web annotation: 1\) body is property of annotation (string or markup), or 2\) that it is a pointer to somewhere else. We would want versatility of either.
		- RV: Consider that body is the body and it can be a pointer, why not express that as \<ptr\>, and have the possibility for multiple of these



```
             <annotation>
                 <ptr target="#ldb" type="body"/>
                 <ptr target="#w1" type="target"/>
                 <ptr target="#w17" type="target"/>
             </annotation>
```

* + - Here the “body” is composed of the \<ptr\> elements.
		- We should be able to include a \<p\> to explain this annotation.
		- MT: We should keep this as flexible as possible.
		- HC: You could have annotation that has just a target without a body. Perhaps not the other way around (not possible to have body without annotation). Maybe \<ptr\> isn’t semantically rich enough for the w3c model?
		- RV: If this is TEI, it should include TEI features people are used to.
		- Laurent Romary wants an annotation block—for specific linguistics use cases.
		- Council looks at \<annotationBlock\> proposal, and its unusual (possibly abusive?) use of \<span\> for indicating the body portion of an annotation, only because of its use of pointing attributes (avoiding what the element is supposed to do). RV: perhaps we can expand the model of \<span\>?
		- The discussion on \<annotationBlock\> and nontextual might take a while.
		- But we can work with the simpler \<annotation\> as a working proposal.
		- RV: asks about whether we’re implementing the “motivation” for making an \<annotation\> (a part of w3c annotation model). HC: also, who made the \<annotation\> (@resp). What are the TEI correspondences to these aspects of the w3c model?
	+ taxonomies
		- JC: When do we put them here vs. inside of \<classDecl\>?
	+ examples for ancient near eastern scholars
		- (Postpone until VBJ is available)
	+ Related issues:
		- \#374 [Encoding of Standoff annotations](https://github.com/TEIC/TEI/issues/374)
		- \#1745 [Standoff: annotation microstructure](https://github.com/TEIC/TEI/issues/1745)
* **Tickets / Git Issues****Status: Needs Discussion / Go and Needs Discussion**


* + Group A: SB, HC, EM, MS
	+ Group B: MT, EBB, RV
	+ Group C: PS, SS, JC, MB




| **Ticket Number** | **Breakout Group** | **Title** | **Notes** |
| --- | --- | --- | --- |
| \#1740 | A | [regularize suggested values of unit\= attribute](https://github.com/TEIC/TEI/issues/1740) | “line” and “char” should be singular. Mark green |
| \#1744 | B | [Add co\-occurrence constraints to ODD](https://github.com/TEIC/TEI/issues/1744) | Subgroup likes the idea because it improves documentation. Wants to see JC or somebody develop a proposal to implement. Council: Greenlighted for JC to develop a proposal, with further discussion. |
| \#1747 | C | [Schema problem with (msPart \| msFrag)](https://github.com/TEIC/TEI/issues/1747) | *related item: \#1832; \#1835* JC argues that HC is correct and \<msFrag\> and \<msPart\> should not be interspersed; fragments bound in a manuscript should be considered \<msPart\>. Recommend to close the issue with no action unless a more compelling example is provided. Council adds: we should include a reason for closing the tickets. |
| \#1750 | A | [Make \<q\> a member of att.fragmentable](https://github.com/TEIC/TEI/issues/1750) | subgroup is inclined to suggest no change, that OP use @next and @prev. |
| \#1756 | B | [event should have ptr and idno in its content model](https://github.com/TEIC/TEI/issues/1756) | Implement solution f on the ticket. Council agrees to greenlight. |
| \#1766 | C | [examples of selector\= attr of \<rendition\> wrong?](https://github.com/TEIC/TEI/issues/1766) | Yes, just add the commas. Change to green |
| \#1769 | A | [teidata.pointer equivalent to move/@where](https://github.com/TEIC/TEI/issues/1769) | EM to post on ticket her suggestion for a method to indicate location instead. Council: After much discussion, resolved: create 1 class for both @where (event, move), to take infinity data.pointer |
| \#1770 | B | [GLs seem wrong about commonness of co\-occurrence](https://github.com/TEIC/TEI/issues/1770) | Subgroup: Let’s scrap the sentence in question. We don’t need it. Greenlight. |
| \#1771 | C | [\<desc\> as child of model.listLike](https://github.com/TEIC/TEI/issues/1771) | We suggest other possibilities, such as \<note\>, but no particular objection to this feature request. If we add this, we should update the definition of \<desc\> to be more expansive than it currently is. Remove everything after “typically a documentation...” Council: \<desc\> at the top of a list could be useful in standoff applications. Greenlighted, add at the top of all model.listLike elements. Also rewrite \<desc\>’s \<desc\>. |
| \#1772 | A | [Allowing listBibl, listPlace and similar in \<particDesc\>](https://github.com/TEIC/TEI/issues/1772) | This will be solved by the standoff proposal and will be closed at that point. Can add this info to ticket. PS will do and close ticket. |
| \#1776 | B | [add \<w\> to att.lexicographic](https://github.com/TEIC/TEI/issues/1776) | Subgroup agrees to this, and to add clarification that @norm and @orig are not the same as their element counterparts and have precise linguistics use. Council: Add a warning (for the teitext datatype attributes): The attributes in this class are meant to be lexicographic use not intended to be used for editorial interventions. |
| \#1784 | C | [\`bibl\` as loose model is not loose enough](https://github.com/TEIC/TEI/issues/1784) | subgroup agrees to (directly) add \<incipit\>, \<decoNote\> and \<explicit\> to the content model of \<bibl\>. Mark green |
| \#1787 | B | [Feature Request: \`\<projectDesc\>\` content model needs to be richer](https://github.com/TEIC/TEI/issues/1787) | Subgroup thinks that \<encodingDesc\> is NOT the place for naming a project and those involved in it. \<projectDesc\> inside \<encodingDesc\> is meant to describe encoding methods in the project. The information presented in the ticket belongs in \<fileDesc\>, which clearly is about describing those involved in the project. Council discussion: \<encodingDesc\> is not the right place for the info described on this ticket. EM and EBB will come up with some example headers to provide gentle guidance and close the ticket. |
| \#1786 | C | [improve module descriptions](https://github.com/TEIC/TEI/issues/1786) | Subgroup agrees with proposed changes. Mark green |
| \#1789 | B | [Clarify description of @points in att.coordinated](https://github.com/TEIC/TEI/issues/1789) | Subgroup thinks this should be greenlighted. Green |
| \#1791 | C | [Dictionary: an entry element in a sense element](https://github.com/TEIC/TEI/issues/1791) | Make green and add to model.entryPart.top |
| \#1800 | C | [more on dictionary: The element \<usg\> inside \<def\>](https://github.com/TEIC/TEI/issues/1800) | Ask again for a clear example so that we can better understand the problem (possibly ask for other lexicographers to weigh in) |
| \#1807 | C | [How to make \<defaultVal\> deletable?](https://github.com/TEIC/TEI/issues/1807) | Greenlight |


Tuesday 07
----------


### **Morning (09:00–12:00\)**


* Continue with reviewing issues from break\-out groups on Monday
* Tickets
	+ Group A: HC, EM, MS, RV
	+ Group B: MT, EBB, SB
	+ Group C: PS, SS, JC, MB




| **Ticket Number** | **Breakout Group** | **Title** | **Notes** |
| --- | --- | --- | --- |
| \#1785 | A | [Content model of rdgGrp](https://github.com/TEIC/TEI/issues/1785) | Council agrees to allow \<lem\> followed by a \<rdgGrp\>. Mark green. |
| \#1788 | A | [location of model.ptrLike elements within biblStruct](https://github.com/TEIC/TEI/issues/1788) | change wording to say “ref may also be used to refer to the item’s online location” make edits as noted in the ticket The \<ptr\> element may be used as a child element of \<biblStruct\> to refer to the online catalog record of this bibliographic item: Green |
| \#1795 | A | [Language of Schematron messages where @role\="nonfatal" and @role\="warning"](https://github.com/TEIC/TEI/issues/1795) | ask EBB, SB for very quick confirmation of our understanding. Using Syncro vocab seems good. Change non\-fatal error messages  to Warning or Error as needed. |
| \#1798 | B | [\<egXML\> not allowed in \<egXML\>?](https://github.com/TEIC/TEI/issues/1798) | This is working as it should be. P5 itself isn’t valid against tei\-all.rng, for the same reason that it’s not working in compiled ODDs. Note that it is valid with P5\.nvdl (or P5\.valid.nvdl?) |
| \#1803 | A | [make listRef member of att.typed](https://github.com/TEIC/TEI/issues/1803) | no objection on att.typed for \<listRef\>, but agree with  James that allowing \<ref\> as direct child of \<listBibl\> is preferable to abusing \<listRef\> Green |
| \#1804 | B | [problems with content model and example of unicodeName](https://github.com/TEIC/TEI/issues/1804) | Subgroup discussion: This involves dependence on an external unicode schema, we’re in theory okay with this. |
| \#1809 | A | [create a model.sensePart class and change content model of \<sense\> accordingly](https://github.com/TEIC/TEI/issues/1809) | makes sense. Greenlight |
| \#1816 | C | [n\="added gathering" in XML examples](https://github.com/TEIC/TEI/issues/1816) | mark green: add underscore |
| \#1823 | A | [teiCorpus: make guidelines and data model consistent](https://github.com/TEIC/TEI/issues/1823) | mark it “blocked” until we have a final decision on \<teiCorpus\> |
| \#1832 | C | [Clarifying the definition of \<msFrag\> in Guidelines](https://github.com/TEIC/TEI/issues/1832) | related issues: \#1835; \#1747 Subgroup recommends rephrasing description of \<msFrag\> as: “msFrag contains information about a fragment described in relation to a prior context, typically as a description of a virtual reconstruction of a manuscript or other object of which fragments are now catalogued separately” |
| \#1833 | A | [New element for grouping notes: \`\<noteGrp\>\`](https://github.com/TEIC/TEI/issues/1833) | Subgroup: Agree with Magda that \<listNote\> is the right approach here (and would go in \<standoff\> as well) Discussion with full council: We are going to add a \<noteGrp\> element as a member of model.noteLike to close this ticket and open another to add \<listNote\> |
| \#1835 | B | [clarify that msDesc can be used for all text bearing objects including (early) printed books](https://github.com/TEIC/TEI/issues/1835) | related issue: \#1832; \#1747; JC: (not in this subgroup) – Yes, wherever we can clarify that \<msDesc can be used for early printed books. Other objects we should recommend \<object\> |
| \#1836 | C | [Content model of \<institution\>, \<repository\> and \<collection\>](https://github.com/TEIC/TEI/issues/1836) | Greenlight. Add macro.phraseSeq.limited |
| \#1841 | C | [Request for \`\<desc\>\` in \`\<listBibl\>\`](https://github.com/TEIC/TEI/issues/1841) | Will be fixed by \#1771 |
| \#1844 | C | [Remove @type from att.interpLike and use att.typed](https://github.com/TEIC/TEI/issues/1844) | subgroup recommends: mark green and remove @type from att.interpLike. Instead add \<interp\>, \<interpGrp\>, \<span\> and \<spanGrp\> to att.typed. |
| \#1850 | C | [Height/Width/Depth: loosen descriptions](https://github.com/TEIC/TEI/issues/1850) | Greenlight, James ***is*** a genius. |
| \#1851 | A | [msContents/msItem should be replaced in tei:object with something non\-MS specific](https://github.com/TEIC/TEI/issues/1851) | James should try to get some community consensus by asking on TEI\-L/TEI\-MS\-SIG |
| \#1854 | C | [Deprecations Appendix is seriously ugly](https://github.com/TEIC/TEI/issues/1854) | Agree. Make it into a list with sub\-items not a table. |
| \#1856 | A | [\`\<ab\>\` should be able to nest](https://github.com/TEIC/TEI/issues/1856) | No, it shouldn’t. |
| \#1829 | B | [PM for list in tei\_simplePrint.odd only lets item through](https://github.com/TEIC/TEI/issues/1829) | solved, including other similar cases where simplePrint too greedily constrained the content to be processed |
| \#311 |  | [Encoding RDF relationships in TEI](https://github.com/TEIC/TEI/issues/311) | HC: I commented and closed this |


* Intensive discussion on \#1769: [teidata.pointer equivalent to move/@where](https://github.com/TEIC/TEI/issues/1769)
	+ Options:


1. 1. ~~keep data.enumerated create new @whereRef (4\)~~
	2. **create class for both @where (event, move), 1 to infinity data.pointer (9\)**
	3. ~~@where data.enumerated or data.pointer (just on move) (2\)~~
	4. ~~same as 2, but rename current @where to @whereStage (teidata.enumerated) (1\)~~
	5. ~~do nothing, own ODD (7\)~~


### **Afternoon (14:30–17:00\)**


With Martin Holmes on Skype at 14:30
* **Japanese translations**
	+ Related ticket: Multiple sibling remarks in the same language cause translation issues: <https://github.com/TEIC/TEI/issues/1872>
	+ \#960: [i18n revision due](https://github.com/TEIC/TEI/issues/960)
	+ Hanna McGaughey has agreed to help by checking the translations, doing some work every Friday. If she moves quickly, we should be able to merge everything before July; if not, MH will come back to Council for a decision on whether we should merge translations without checking them or we should just continue reviewing them slowly.
* **Infrastructure group**
	+ HC brief report: got control of domain hosting. Switch\-over may entail down\-time. Switch DNS provider first, and then list of hosts. HC and LM have control.
	+ Related ticket: Infrastructure documentation: <https://github.com/TEIC/TEI/issues/1743>
	+ Currently hosted by a Canadian server LM has access to. This is a temporary solution.
	+ journal.tei\-c.org is still down—can’t do editorial reviewing. Reading articles at <https://journals.openedition.org/jtei/> is not affected.
	+ journal.tei\-c.de has OJS installed, but no—it’s the editorial workflow that is affected (no one could submit new material or do reviews), not our ability to read the articles.
		- Someone needs to make a decision about where the jtei home will be now. Ron Van den Branden’s server seems the best option, providing he can propagate his backups to wherever backups need to go.
		- PS: we shouldn't have to pay for a new service. Use ADHO server as hub for backups.
		- Perhaps we should invite Ron Van den Branden to the Infrastructure Group to evaluate options.
	+ JC: What about mailing lists on tei\-c.org? Are they back up?
		- Only two SIG mailing lists are affected. Most other mailing lists are at Brown.
		- MS: All the other ADHO listservs are running again; what's wrong with TEI?
			* HC: It's probably a DNS issue
			* Probable fix: changing MX record to point to correct domain name. **Action** on **HC** to try this by 2019\-05\-10, also alert people.
	+ tei\-c.org website: Luis has set it up at HumaNum. Infrastructure group needs to be in regular communication with HumaNum. Is this sustainable in the long term? Are we going to see the same problems again? Laurent has said that much support is going into HumaNum—it's probably sustainable?
		- What about site backups and some redundancy? JC/HC: Perhaps best to pay for service\-level agreements. The “free” service of HumaNum might come at a cost. HC favors PS’s docker containment solution for releases/vault. PS: HumaNum seems much better than previous ADHO server.
* **oXygen Framework**
	+ Related ticket: <https://github.com/TEIC/TEI/issues/464>
	+ MH has changed our bleeding\-edge plugin to use the library setup that only works with oXygen 18\.0\+.
	+ [https://teijenkins.hcmc.uvic.ca/job/oxygen\-tei\-bleeding/lastSuccessfulBuild/artifact/oxygen\-tei/updateSite.oxygen](https://teijenkins.hcmc.uvic.ca/job/oxygen-tei-bleeding/lastSuccessfulBuild/artifact/oxygen-tei/updateSite.oxygen)
	+ [https://jenkins.tei\-c.org/job/oxygen\-tei\-bleeding/lastSuccessfulBuild/artifact/oxygen\-tei/updateSite.oxygen](https://jenkins.tei-c.org/job/oxygen-tei-bleeding/lastSuccessfulBuild/artifact/oxygen-tei/updateSite.oxygen)
	+ Council will test as they have a chance, and if there are problems they will raise issues on the oxygen\-tei repo.
	+ [https://github.com/TEIC/oxygen\-tei/issues/](https://github.com/TEIC/oxygen-tei/issues/)
* **Rub\-a\-dub report**
	+ SB asks whether we should use booleans internally: answer\=yes; also asks if we should continue to allow users to express boolean params as strings; answer\=yes.
* **Continued with ticket review**


Wednesday 08
------------


### **Morning (09:00–12:00\)**


* **Stylesheets Tickets / Pull requests:**
	+ Group A: SB, EM, JC, MS
	+ Group B: HC, PS, SS, MB
	+ Group C: EBB, MT, RV




| **Issue** | Group | Title | Comment |
| --- | --- | --- | --- |
| **\#369** | A | [Improve error handling for faulty moduleRef uri](https://github.com/TEIC/Stylesheets/pull/369) | Change to error message. PR *looks* fine, as yet untested. |
| \#348 | B | [Consider page ranges given as attributes in biblStruct//biblScope](https://github.com/TEIC/Stylesheets/pull/348) | Create a ticket for this one. This needs to be restructured to print the content as\-is when content exists, and use @from and @to (as the pull requester outlines) in other cases. Possibly also address @from alone? Close pull request since this requires a decent amount of change. |
| \#343 | C | [fix processing of multiple schema specs (in one TEI document)](https://github.com/TEIC/Stylesheets/pull/343) | We further fixed the issue to correctly merge \*Spec\* elements within the selected \<schemaSpec\>. Jenkins tests passed, we’re ready to merge! RV tested during Council session with \<specGrps\>, and all is well. Ready to merge. |
| \#336 | A | [adding rendering of ref, gi and att inside desc](https://github.com/TEIC/Stylesheets/pull/336) | PR accepted. Needs to be tested |
| \#327 | B | [use ODT 'Author' style to specify author](https://github.com/TEIC/Stylesheets/pull/327) | We agree with the original request. Slightly confusing due to GitHub issues (unrelated file changes included in pull request; hard to review) Peter will continue looking at this one. |
| \#301 | C | [Reordered stylesheets and addressed \#281](https://github.com/TEIC/Stylesheets/pull/301) | Hugh will have a look at it |
| \#240 | A | [added a section on prerequisites and two links to documentation](https://github.com/TEIC/Stylesheets/pull/240) | SB fixed. |
| \#239 | B | [added checks for trang, ant and xetex to \`make check\`](https://github.com/TEIC/Stylesheets/pull/239) | Can’t accept as\-is. Need to make xetex a warning, add check for ant, and fix (remove?) jing |
| \#114 | C | [regularise display of attribute values](https://github.com/TEIC/Stylesheets/pull/114) | PR from 2015\. Seems to be already fixed. |
| \#109 | A | [Fix missing first text node, a \[, in certain references.](https://github.com/TEIC/Stylesheets/pull/109) | Needs comment to OP that we need test Word document again. The OP posted the needed document immediately, so let’s look at this! F2F Subgroup (RV, MT, EBB) looked at this together and found a better way to handle these refs that doesn't drop the first square bracket and preserves \<hi\> as expected. |
| \#67 | B | [template makeQuote disable\-output\-escaping](https://github.com/TEIC/Stylesheets/pull/67) | We think it’s convenient enough to just insert the character, rather than using the codepoint. Not enough justification to use @disable\-output\-escaping. Close, won’t fix. |
| GL \#1748 | SS, MS, JC | [added \<fLib\> and \<fvLib\> to \<fsdDecl\> as per \#1726](https://github.com/TEIC/TEI/pull/1748) | Merged pull request, leave \#1726 open; asked Peter to test it. PS has tested and closed \#1726\. |
| GL \#1665 | SB, HC | [att.referring for \<span\>](https://github.com/TEIC/TEI/pull/1665) | Syd and HC both think @referringMode is problematic, so the pull request can’t be accepted as\-is. There’s also a dependency on the new standoff stuff in the examples, so perhaps discussion of this should be rolled into the standoff working group discussions. Needs a proposal, not a pull request. Also discussion in a separate Council call, and fold it into the standoff proposal. |


### **Afternoon (13:00–17:00\)**


* **Free\-standing attributes**
	+ Issue: <https://github.com/TEIC/TEI/issues/386>
	+ Duplatts (duplicate attributes): <https://docs.google.com/spreadsheets/d/1k6rB7SSvWlZQKtOFDUJhpNVUDc>
	+ EM and SB will start changing the non\-controversial attributes—adding them to classes with modifications to suggested values, for example. They will make tickets for more controversial cases to put them forward for discussion by Council. **Action on** EM and SB
* **Improve testing**
	+ Original discussion during February meeting: improve tests to prevent problems during release (see [February minutes](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2019-02-18/))
	+ Simple Print: We need better exemplar testing
	+ Maybe it will be easier to add tests when MH works on his test suite?
	+ JC: Can we do different levels of testing? Not just testing each checked\-in change, but more rigorous testing before a release? Just testing by diffing expected results is … fragile to say the least.
	+ SB: Test2 directory in Stylesheets dev branch does speedier testing, but doesn’t do everything in Test1 yet.
	+ MS: What about co\-dependency loop of Stylesheets \-\- Guidelines. Build process for the one is missing something needed in the other. How do PS and MH make this work?
		- JC: Should we have a folder in TEI that holds the latest stable Stylesheets version that we use for the release? This way we don’t rely on the current Stylesheets for a release.
		- PS: We can run the build with different Stylesheets versions. master built with master, and dev with dev.
		- SB: Why were the repos separated in the first place? JC: Perhaps because there are things in Stylesheets that aren’t directly TEI related.
		- PS: Not clear what our dependencies are. We should sort that out very clearly; putting a directory of Stylesheets in TEI repo is making this more complicated.
		- ODD processing is needed for other things than TEI, even though written in TEI ODD language.
		- JC: We have saxon and ant, etc. in TEI\-c repo lib. TEI Guidelines should be a consumer of the TEI Stylesheets in some similar way (using a stable version) … PS: We have several versions of jing floating around and it’s hard to know where to find the right ones. It would better to have a defined way to bring these in.
		- PS: Run Guidelines build with Stylesheets master. Should be releasing Stylesheets more frequently
		- HC/MS: Reason to release Stylesheets after Guidelines(!): you need to edit expected results of tests following the latest updates to the Guidelines. New Guidelines release can break the Stylesheets just because of breaking the tests.
		- Stylesheets tests breaking is a guarantee.
			* Add to release process—rewrite expected results files
			* Would be helpful if we could see all the errors with expected results files at once
		- Infrastructure issues for right now: No place for release techs to login to server and deploy the new release. Luis may need to do this for us manually. (Luis will be 9 hours behind EBB and MT).
		- PS: Stylesheets build can pull results from last successful Guidelines build.
	+ Stylesheets work: best always to work in a branch and keep it updated; only check it into dev branch when it passes local tests. Make sure dev is always building without fail.
		- MT suggests using git rebase instead of just git merge, based on experience with eXist.
		- **Action on PS:** to set up Dev Stylesheets pulling from lastSuccessfulBuild of Dev Build of Guidelines.
* **Modal verbs in the Guidelines** ([see January minutes](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2019-01-18/))
	+ Original discussion during January meeting: JC is already working on adjusting and rephrasing modal verbs in the Guidelines. A further improvement would be to mark them.
	+ JC will continue work on that. Second step is to mark modal verbs, but for that we should open a new ticket.
* **TEI release @ zenodo**
	+ provides versionable DOIs.
	+ PS: put our old releases there as well.
	+ How to generate a DOI for a GitHub repository: [https://guides.github.com/activities/citable\-code/](https://guides.github.com/activities/citable-code/)
	+ In general Council agrees to release Guidelines at zenodo. Action on **HC/MS/SS volunteers** by June 2019 to have a closer look at the account management, etc. Or take a look at Open Science Framework (OSF) for DOI and release? See [http://help.osf.io/m/sharing/l/524208\-create\-dois](http://help.osf.io/m/sharing/l/524208-create-dois)
		- To investigate: versionable DOIs? Or a distinct DOI for each release?
* **Tickets to prioritize for the July release**
	+ [\#1707](https://github.com/TEIC/TEI/issues/1707): How to encode measurement
		- EBB: wants to work on this ticket for the July release
	+ [\#1661](https://github.com/TEIC/TEI/issues/1661): Need \<surplus\> in \<subst\>
		- EM presented ticket to Council. Suggestion: raise following proposed solution on TEI\-L:
		- Change description of \<subst\> to say “groups one or more deletions (whether explicit, encoded with \<del\>, or implicit, encoded with \<surplus\>) with one or more additions when the combination is to be regarded as a single intervention in the text.”
		- Change content model of \<subst\> to
		( add \| del \| surplus \| model.milestoneLike )\+
		and Schematron accordingly, OR
		( ( add\+, ( del \| surplus )\+ ) \| ( ( del \| surplus )\+, add\+ ) ), ( add \| del \| surplus )\*
		removing Schematron (with model.milestoneLike).
		- Change Guidelines prose to match
		- Create an example \<subst\> that uses \<surplus\>
		- EM \- after the fact \- do we still want to send this out to the list? or is it broad enough that no one will object?


* 1.
