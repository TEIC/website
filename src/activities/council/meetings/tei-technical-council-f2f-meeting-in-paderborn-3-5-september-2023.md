---
layout: page.njk
title: "TEI Technical Council F2F Meeting in Paderborn, 3-5 September 2023"
---
# TEI Technical Council F2F Meeting in Paderborn, 3-5 September 2023
Meeting Times
=============


 


| **Date** | **Time** | **Meeting of** | **Location** |
| --- | --- | --- | --- |
| **Sunday, September 3** | 09:30–12:45 14:00–17:30 | Full Council meeting | Heinz Nixdorf Institut, room F0\.225 |
| 18:30 | *Dinner* | Peter Stadler’s place |
| **Monday, September 4** | 09:30–11:00 11:15–13:00 14:00–16:00 16:15–17:30 | Full Council meeting Meeting with TEI Board | Heinz Nixdorf Institut, room F0\.225 |
| 17:30–18:30 | Break |
| 19:00 | *Dinner* | Deutsches Haus |
| **Tuesday, September 5** | 09:00–13:00 | "Full" Council meeting |  |


 
Present
-------


* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Hugh Cayless (HC)
* Patricia O’Connor (TOC)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


### Joining over Zoom


* Nicholas Cole (NC)
* Syd Bauman (SB)


Council Members involved in conferences/workshops
-------------------------------------------------


* RV (Tuesday morning)
* EBB, RV, HC (Tuesday afternoon)
* MT (Tuesday full day)
* SS, TOC (participating in workshops, Tuesday full day)


Sunday Sept. 3: Morning session
-------------------------------


\>Approval/Revision of the agenda and ticket triage
---------------------------------------------------


EBB leads “Assigned Ticket Triage” session. Each of us goes through our assigned Guidelines tickets and adds those for which we want to prioritize.
\>TEI Features for CMC update
-----------------------------


* [\#1955](https://github.com/TEIC/TEI/issues/1955): not ready yet for next release, chapter in the process of being written
* branch: [https://github.com/TEI\-CMC\-SIG/TEI/tree/cmc\-features](https://github.com/TEI-CMC-SIG/TEI/tree/cmc-features)
* CMC group will meet in October:
	+ Examples and chapter prose needed
	+ Produce outline to provide underlying structure of prose for the chapter
	+ Balance between specific use case and general overview of the chapter
	+ Suggestion: Council could contribute to CMC group’s GitHub branch


\>Guidelines Issues
-------------------


* [\#2392](https://github.com/TEIC/TEI/issues/2392) Add att.canonical to \<bibl\>so that \`@ref\` is allowed in \<bibl\> for consistency instead of \`@corresp\`
	+ RV: it is not clear enough when to use \<ref\> within a \<bibl\>
	+ \<bibl\> is allowed as an inline element in contrast to \<biblStruct\> and \<biblFull\>
	+ Inline \<bibl\> is dominant way of encoding, allows to wrap a full reference in a text as a bibliographical citation
	+ \<ref\> element does not give that level of clarity so \<bibl\> is better than \<ref\> for someinstances
	+ HC: News article excerpts as example of inline \<bibl\> encoding: here, \<bibl\> elements enable marking up of issue information etc.
	+ LB’s argument for using \`@corresp\` and definition of \`@corresp\` is for more hypertextual connections and much looser than \`@ref\`
	+ Argument for \`@ref\`: bibliographical entries should be referenced canonical since they contain canonical information: [https://tei\-c.org/release/doc/tei\-p5\-doc/en/html/ref\-att.canonical.html](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.canonical.html)
	+ Council agrees that \<bibl\> should be within att.canonical as it is more appropriate to use att.canonical on inline uses of \<bibl\> given the definition of [att.canonical](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.canonical.html), \`@corresp\` does not apply as precisely as the definition of \`@ref\`
	+ **Action on MT:**
		- Review chapter 3\.12 prose to make the dual use of \<bibl\> clear and rearrange chapter (move it earlier in the chapter)
		- Discuss and provide examples for use of inline \<bibl\> (with \`@ref\`), and for use of \<ref\>
		- Change the example in the Guidelines to show \`@ref\` rather than \`@corresp\`:
			* \`@corresp\` used for linking and indicating correspondence
			* att.canonical has definite application to linked data
			* explain why \`@corresp\` is insufficient (specifically because of [this Guidelines section](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/CO.html#index-egXML-d54e48295) that will need to be changed)
		- Discuss how \<bibl\> is like \<persName\> and also how it is not


\>Visualization of attributes in TEI Guidelines
-----------------------------------------------


* See ticket  [\#592](https://github.com/TEIC/Stylesheets/issues/592) and JT codepen: <https://codepen.io/jtakeda/pen/OJabxjX> 
	+ Council agrees that the Proposed Vertical Compressed view should be the default view
	+ Proposes a multiview option for those who would prefer to use the original but corrected view
	+ Should be easy to implement because the Stylesheets are already generating the lists
	+ Issues for consideration in the implementation of the Proposed Vertical Compressed View:
		- For the att.list: better to use literal text, though if handled through CSS it's easy to change the handling of text separators though this text would not be selectable
		- RV: General usage of copying and pasting, you would want to maintain the nested list structure but also the commas
		- HBS: We need to apply the changes to the Stylesheets XSLT (to keep the semantic separators)
		- HBS: The Vertical View is what is actually in the XSLT (without the semantic separators)
		- JT: Advantage of the CSS, it doesn’t change anything in the Stylesheets
		- Council agrees that the CSS is the feasible approach, it eliminates the copy and paste issue
		- MT: Could we do something to add a logic to ordering the attributes within a class alphabetically, maybe? 
			* HC: Is there an implicit order of importance for the attributes within a class?
			* RV: The order of the classes is important so we can’t do that alphabetically. Maybe we should clean up the Specs?
			* Council agrees to NOT sort attributes alphabetically because e.g. \`@type\` should not come before \`@subtype\`.


* Applications of JS to Guidelines interface: how far should this go / what would be endings\-compliant. See for example tickets [\#2350](https://github.com/TEIC/TEI/issues/2350) and [\#2336](https://github.com/TEIC/TEI/issues/2336)
	+ Endings\-compliant usage: Use JS only where its absence would not be critical (where we can do without it)
	+ We should use only JS compliant browsers
	+ JT: columns were done in JQuery so there is some work to do to get it to look Endings compliant with JS
	+ Cite This Discussion \- Citing the Guidelines as a whole, and the URL of the page that you are viewing, over the specific XML document which is a different document
	+ RV: Prioritise making the Guidelines future\-proof over usability in this instance?
	+ Question is whether we want a Cite This for every example in every chapter? What is the most sustainable and feasible way of implementing this?
	+ MH: to be Endings compliant, we do want a Cite This for every example
	+ JT: Need to determine what the generation of each example citation requires
		- RV: We could provide details in a user readable caption on each example
		- Add JS then to generate the Cite This at the position of the example caption?
		- RV: We need a content model on the client side to provide multi\-citations
		- MT: Processing model can supply all this without a problem
		- RV: Can we output less rather than more?
		- JT: If we move towards a processing model, anything we add to the HTML will not output only what is static in the Guidelines
		- MT: Starting from the end result and work backwards?
			* Streamline the implementation process and limit the client side
		- RV: Need to focus more carefully on the implementation process and reduce the complexity of the HTML
		- Of the 1,460 HTML files that make up the *Guidelines*, only 23 have ≥ 100 “eg” examples, only 4 of which have ≥ 200 of them, only 1 of which has ≥ 300 (examples\-p.html, which weighs in at 640!)


Sunday Sept. 3: Afternoon session
---------------------------------


\>TEI Lite 2 \- Discussion pt. 1
--------------------------------


* MT presents spreadsheet comparison of TEI Simple and Lite, and Proposals for Lite 2: [Comp Simple and Lite](https://docs.google.com/spreadsheets/d/1ft7Pm6MUksHemB9-33RHIyVua4KBXYkG_XV0xCocXSQ/edit#gid=2138908288)
	+ MT's Radical but Tentative Proposal for TEI Lite (spreadsheet tab 2\)
		- Propose a schema that might be an 80/20 solution that we might endorse at the cost of some documents that might not be compatible or as compatible
		- Green colour: elements that should be contextually available (only in the TEI Header section)
		- Grey colour: elements for potential elimination with proposed replacement specified (column E)
		- Orange colour: elements missing from both Lite and Simple (at the end of the list)
* HC: Documentation elements like \<gi\> in Lite were used in intermediary capacity for generating documentation
* NC: With these constraints, would every radical proposal for the TEI Lite result in a valid TEI document? Concern about conflicting restraints, the importance of a clean output
* MT: Applying basic container elements for content to facilitate navigation provides a degree of interoperability.
	+ Questions and discussion about constraints on having everything in \<div\>: 
		- Any element should have a \<div\> ancestor?
		- The \<body\> should have nested \<div\>s
		- Not valid against TEI All if you don’t have \<body\>, so keep \<body\> but perhaps get rid of \<front\> and \<back\>
		- Revisit groups of elements that are similar semantically, do we want to distinguish them by a distinct name?
		- most elements allow \<div\> but some don’t, e.g. \<titlePage\>
		- RV: \<titlePage\> only occurs in \<front\> or \<back\> so if we get rid of \<front\>/\<back\> then that gets rid of \<titlePage\>
		- Discussion of applicability and necessity for special kind of \<div\> to be resumed later
* Basic question of whether TEI Lite 2 should be valid against TEI All or whether there is no need for this
* \<hi\> and \<distinct\> are not the same category (\<distinct\> is quite linguistically distinct!), \<soCalled\> is more related to \<q\> than \<distinct\>
* Group visualisation of the top categories to result in a leaner P6


\>TEI P6 (Discussion moved from TEI Lite 2 to TEI P6\)
------------------------------------------------------


* Useful for us to consider if an element is a specification/further specialisation of a particular category / of another element (e.g. \<measure\> and \<mile\>)
* RV: Can we freely identify the "streams that go through TEI" and try to holistically capture it all?
* MT: Basic structure would benefit from object\-related patterns?
* Potential start point: Graphical visualisation
* Processing model for certain documentation sets would allow us to see the behaviour for specific elements? presentational aspect of the element as well as the semantic function
* RV: Elements may have the same semantic function but occur differently in the presentation of the text
* What aspect of TEI as it currently is will be honoured in TEI P6, what will anchor us?
* NC: Similar to the debate in dictionaries (prescriptive vs descriptive)


\>TEI Lite 2 \- Discussion pt. 2
--------------------------------


* NC: struggles with TEI subsets and thinks about just to have the choice of all elements where you can tick the ones you want to have and then your schema is being generated
* MS: people who don’t know much about the TEI cannot randomly pick what they need without being lost
* NC: The usefulness of TEI Lite for those daunted by TEI All is questionable
* MT: Explicit request for an easy onboarding for the TEI for those with zero experience, needs to be an easier root and it is much easier to cut back on the number of elements that you already have
	+ Customization of a pre\-existing advised\-on customization
	+ Encourage interoperability by validating against TEI Lite 2
* SB: Danger of tag abuse within a narrower schema that is Simple and Lite merged
* JT: TEI for libraries and the hierarchy of different levels / inheritance is similar to what is envisioned for TEI Lite 2
* Some means to navigate the different levels of granularity from more generic to more specific can be brought into a library context (for processing)
* HC: If people had this mechanism, a machine operable way of extending the TEI, then they might not be so scared of customising/extending the TEI (make a project\-specific \<mile\> as an extension of a generic \<measure\>)
* JT: Tools like Leaf useful for encouraging people to use TEI for this
* MT, HC: Fear of non\-conformance with TEI All if we add project\-specific elements. Funders demand that the project is in TEI and if it is highly customised is it even still TEI?
	+ EBB: P6 needs to rethink conformance
* MT: Automated processing path to get you to TEI All conformity?
* JT: Do we use \<equiv\> more to indicate in some processable way what relationships are embedded in the schema?
	+ RV: This may not work. See EBB re Frankenstein Variorum, purposefully abusing \<seg\> to nest in levels it wasn't originally intended for.
	+ Lots of projects want to express something that scholars cannot find in the TEI.
	+ \<equiv\> is not enough when we encounter something that has no equivalence in TEI. This will happen regularly
* NC: In Lite 2, are definitions going to follow the original definition? What happens when TEI is updated? How do we ensure that Lite 2 stays in sync? 
	+ Lite is linked to every release, so it will naturally evolve with the TEI itself
* **Summary of discussion so far:** We agree that we don’t want to merge TEI Lite with Simple. Only disadvantage: By expanding Lite 2, we risk delaying it substantially.


\>TEI Lite 2 and path to TEI P6
-------------------------------


* How do we continue to work on P6? What visual aid do we use?
	+ Discussion: SB thinks a subgroup/task force needs several days of face to face meeting dedicated towards P6\. (Subgroup sprints rather than revisiting at each Council meeting). EBB: Council as a whole started to think about P6 together, we should continue.
	+ MT: Big projects need time to sleep on things. We do need a shared space to conceptualize:
		- Something that lets us see what groups fit together? Rethinking class hierarchies
		- It should allow to see what each person categorizes
		- Software should let us see the areas/points where people disagree as well
		- Proposed visualization aids: 
			* [Miro](https://miro.com/): import of CSV possible (e.g. of all elements)
			* [Mural](https://www.mural.co/)
		- Proposed task triage: Every month, someone tidies up the vision board and writes a short report on progress


* Discussion: How do we divide elements and attributes? SB: What Schema language will be used? Will the class system change / be similar to the one we have now? Underlying questions need to be addressed first
	+ HC, RV: No, we need to decide what we'd like to do, and then decide our mechanism to do it afterwards. Start with abstract patterns before moving to formalizing decisions. Each of us could start with a notion of formalisms, but be aware of them as a matter of choice to be determined. EBB, JT: Think of the semantics first. Start with the most abstract questions first? Put in words what we're striving to create
	+ HBS: Write down everything we hate about the TEI right now as a starting point
	+ RV: Having an initial vision will spur on progress like MT’s spreadsheet prompted productive discussion
	+ Bottom up approach: start from the individual elements
	+ Top\-down approach: TEI as a conceptual system of analyzing texts
	+ What are your research questions and your theory of text that you start with?
	+ RV: inclined to think of functionality, What are the operations you want to do?


* Incorporate different means of visualisation of the information beside graphical \- ODD? XML? Spreadsheet? Every conceptualisation should be expressable in the other formats to facilitate collaboration
	+ HC: Danger of getting lost in a graphic because of vastness of TEI
	+ MT: Graphic would need different levels of granularity that you can select/deselect
	+ RV creates [Miro board](https://miro.com/app/board/uXjVMopTUHY=/?share_link_id=7939356576) for us to begin work.


* Council discussion and decision: work together on conceptualizing P6\. 
	+ SB: Should we ask stable groups of specialists in areas of expertise to work on pieces of this, with us merging and aligning the results?
	+ MT dissents: It's not a scholarly exercise in encoding but in abstract data modeling of an encoding system. Council maintains an overview of the holistic system
	+ HC: Charge a task force later, pick 4 people when we're ready to draft a proposal, to figure out what we want to do, it's too preliminary
	+ HBS: Even a few minutes per meeting will help us move toward a place where we can charge task force(s).
	+ JT: we need a space of experimentation and discussion first
	+ EBB creates new folder for P6\-Work in Council Google Drive, with Miro Board link.


* TEI Lite 2 is a nearer\-term project, while working on it, we develop generalizations / patterns that we can apply to P6
* TEI Lite 2 doesn’t break P5 but in the process we may see what we could develop for P6


\>TEI Lite 2 \- Discussion pt. 3
--------------------------------


* Should Lite 2 apply contextually variant content models and/or Schematron constraints? 
	+ Discussion: What's the difference? 
		- James Cummings provides example of contextually dependent content models: What's allowed inside a paragraph (e.g. not a caesura)?
		- SB: Idea of contextually varying content model is subset of co\-occurrence constraints. Content varies based on the ancestor. Schematron defines context relationships by XPath. Most co\-occurence constraints can be defined by Relax NG.
	+ EBB: Is it always better to define in RELAX NG before you do it in Schematron? 
		- JT: is it better for people to be able to see content model in a drop\-down?
	+ Question for Lite 2: Importance of pop ups for onboarding beginners
	+ HC: The rule for TEI content models is that they should be expressed in RELAX NG as well as XSD and DTD. Schematron definitions would mean a step away in terms of our conformance for content models
		- Discussion of DTDs still in use. DTDs can be lossy, XSD is more expressive / less lossy
		- JT: \<interleave\> element discussion is relevant to this
	+ SB: Contextually variant content models could probably be added to our system now for Lite 2\. Full\-fledged co\-occurrence constraints can't be handled now, better for P6
	+ MT: Difficulty in distinguishing between content models, seeking perfection should not prevent us from implementing what we can with reasonable time and effort
	+ JT: See Guidelines [\#1744](https://github.com/TEIC/TEI/issues/1744) \- Conversation from Guelph F2F which outlines the path towards P6
* JT: What would be useful to comment on in relation to Lite 2 to help move forward toward P6?
	+ MT: Add comments to spreadsheet
	+ Co\-occurrence constraints would be helpful, but maybe Lite 2 doesn't express them yet / at first (if Lite 2 is something we can prepare in the next 6 months)
	+ \<distinct\> is missing


* MT: What do we think is best practice for what goes in the TEI Header? 
	+ This is particularly scary for beginners
	+ What kind of TEI header would be useful in Lite 2 for aggregate library systems?
	+ Something equivalent to Dublin Core for TEI certifiable for the minimal metadata?
	+ Example: when to use \<titleStmt\> vs \<editionStmt\>?)
	+ What's reasonably simple but robust enough?
	+ Start from existing library systems to see what generic metadata they are using to get a sense of what the basic TEI Headers should all have at the very minimum
	+ Look for what most of these share in common as our guidance
	+ Do we need to be researching to survey projects? What are libraries paying attention to, not limited to TEI projects? 
		- Is this basically the work of the TEI for Libraries SIG and their "Best Practices for TEI in Libraries"? 
			* It wasn't specific enough about metadata handling
			* Produced four different ODD customizations, did any of these concentrate on the teiHeader? Any selection work?
			* Libraries SIG is dormant
		- EBB: Task in summation, how are libraries serving metadata? Do they offer enough metadata to result in a helpfully streamlined TEI Header?
		- **Action on EBB:** Open a ticket to review what has been done in the 4 ODDs and distill that information for TEI Lite 2
			* Consider Best Practices for TEI in Libraries: [https://tei\-c.org/extra/teiinlibraries/4\.0\.0/bptl\-driver.html\#index.xml\-body.1\_div.2](https://tei-c.org/extra/teiinlibraries/4.0.0/bptl-driver.html#index.xml-body.1_div.2)
				+ SB: See bptl\-header.odd
				+ Last update 5 years ago
			* JT volunteers to keep an eye on library activities


\>Schematron in XSLT
--------------------


* Updating Schematron constraints to SchXSLT? ([\#1981](https://github.com/TEIC/TEI/issues/1981))
* SB: switch to mausatron (aka SchXSLT) implemented in a branch, everything seems fine apart from some (minor?) errors, no high\-level discussion necessary


Monday Sept 4: Morning session
------------------------------


\>Discussion of GitHub infrastructure
-------------------------------------


* Ticket procedure and labeling
	+ Statuses: Blocked (12\), Go (106\), Needs Discussion (91\), Pending (1\), Reconsider for P6 (3\)
		- 36 Go \+ Needs Discussion: What does Council mean by this combination of categories? 
			* JT suggests we implement a rule of only one status per ticket, and treat it like a TEI attribute.
			* JT: "Pending" might better fit what we mean by "Go \+ Needs Discussion", but we only use it once. Definition for pending: “pending an action described in a comment before further action will be taken”
				+ Perhaps we should save “Needs Discussion” for something that needs to be discussed at a Council meeting or F2F
				+ EBB, MS, RV: Council have discussed using “Status Pending”
				+ Green (Go) and Yellow (Needs Discussion) is a special kind of Pending to signal that the Council member is given the go ahead to do the action but needed to discuss this again after you are done implementing the action.
			* Discussion: Pending might imply that Council hasn’t discussed this yet
			* MS: Council created the “Status Pending” but rarely ever used it
			* RV: having a single label will be clearer for Council and for the TEI community to understand what is going on with the ticket
		- EBB: There is also ambiguity with labelling of tickets as “Blocked” because no one responded to the ticket in a while and someone marked as "blocked" because of no action.
			* HC and HBS: Blocked means it is dependent on an action such as when an issue with the Stylesheets is fixed. There should be a link to the other ticket that needs to be fixed before.
			* Lou did block three tickets that were quite old, EBB did unblock one of these
		- RV: We need to provide better descriptions for the different labels used on the TEI GitHub. JT: This would be good practice for documentation in general.
			* SB: Priority Low also means that it might not be as important for Council matters but still important for the person that added the ticket.
			* EBB: We could assign someone to review the labels on GitHub and add definitions for all labels. Only “Pending” has a definition at the moment.
		- **Council decisions on the appropriate use of the Pending label:** 
			* Tickets labelled as “Needs Discussion” are updated to “Pending” to signify that this ticket has a pending action to be implemented by a Council member.
			* Once the action has been implemented, the ticket reverts back to the “Needs Discussion” label to indicate that the tickets needs to be re\-discussed by Council.
			* **Decision**: “Status: Pending” will replace “Status: Go \+ Status: Needs Discussion” combination
			* **Action on RV**: (Ticket triage person this month) Volunteers to update the tickets labelled with combined “Status Go” and “Status Needs Discussion” to Status Pending.
* EBB: Should we review old tickets across all the repos (organization) perhaps regularly every 6 months?
	+ General consensus that this is probably not needed, tickets will find their way to Council
* Ticket Triage: Issues and Pull Requests for TEI and Stylesheets repos: 
	+ HBS and SB: Needs to be clear to the ticket triage person that you consider both the pull requests as well as the issues for both the TEI Guidelines and the Stylesheets repos.
* Discussion/review of TEI GitHub repos: branch protection, actions, secrets. 
	+ We already have protected branches so must have decided this already.
	+ Slack notifications cause build failures when triggered from a Pull Request as secrets cannot be passed to a request from a pull request. The simplest way to fix this would be to make the step conditional
		- Decision: All agree to JT’s proposal to get rid of Slack notifications.
		- GitHub Action is replacing Travis so we can remove it
	+ DockerHub secret:
		- **Actions on JT:** 
			* Discuss the DockerHub secret with Peter Stadler
			* Remove Travis
			* Write general documentation concerning GitHub actions


\>Guidelines Pull Requests
--------------------------


\>\>[\#2422](https://github.com/TEIC/TEI/pull/2422) \- add taxonomy and category to att.datcat (issue \#2419 )
--------------------------------------------------------------------------------------------------------------


* RV: Seems fine but the prose could be revised
* EBB: Prose is a bit wordy and repetitive but the model looks good.
* EBB: Update branch with a few recommended changes to the prose
* HC: Merge and update prose later
* EBB: Posting comment to PR to notify Piotr that we are missing a reference.
* **Decision:** Merge after the reference is added.


\>\>[\#2435](https://github.com/TEIC/TEI/pull/2435) \- Moved calendar to its own class
--------------------------------------------------------------------------------------


* This is supposed to be merged before the next release as it includes a deprecation.
* **Decision:** Add a notification for TEI Council Google Calendar to remove \`@calendar\` \#2045 and \#2432 PR \#2435 on 12\-11\-2024 and PR merged


\>\>[\#2427](https://github.com/TEIC/TEI/pull/2427) \- [Proposal for event and eventName](https://github.com/TEIC/TEI/pull/2427) and Related ticket [\#2382](https://github.com/TEIC/TEI/issues/2382)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


* Resuming discussion commenced in [Guelph F2F](https://docs.google.com/document/d/1J7N_6F1hmvktpOHsB8qaoEgSNCgTMIRuQute3AzCbEo/edit#heading=h.tq6plr4wtfle) (see page 8 for discussion).
* Council discussion whether we actually want that element
* RV: shouldn’t the content model for \<event\> be similar to the \<person\> model if we are going to upgrade the \<event\> content model? It would be helpful to look at the top tier elements like \<person\> or \<place\>
* JT: Breaking backwards compatibility because of idno
* NC: The proposed example about registration is troubling. Legislation is a document and while it is understandable that  a Treaty can be understood as an event we need to be clear that it does not mean we are stating that legislation is an event in itself.
* Relevant Blocked Ticket [\#367](https://github.com/TEIC/TEI/issues/367) \- related to org, place and person
* EBB: Potential issue caused by our multiple ways of modelling content
* RV: Allow the list person as it is consistent with how we are modelling other entities
* **Decision:** Take eventName from the PR content model cluster and move it up to the model.pLike and model.labelLike line (this avoids breaking backwards compatibility caused by an ambiguous idno)
* **Action on JT:** To post the agreed content model on GitHub.


Monday Sept. 4: Afternoon session
---------------------------------


\>\>Continued Discussion [\#2427](https://github.com/TEIC/TEI/pull/2427) \- [Proposal for event and eventName](https://github.com/TEIC/TEI/pull/2427) and related ticket [\#2382](https://github.com/TEIC/TEI/issues/2382)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


* Discussion to simplify the prose for event and eventName:
	+ Simplified the definition of the gloss for \<event\>
	+ SB: Question about the tense in the definition for the gloss for \<event\>
	+ SB: We should probably have a policy to order these: place att.global first or last in the ordering of the attributes.
* **Decision:** Revise the examples to change use of \<label\> to include \<eventName\> instead
	+ Using \<label\> for a change of state ie. the marriage example
	+ Using \<eventName\> when the event has a specific name.
	+ Discussion of the The Great Fire of London example to change from \<head\> to \<eventName\>? 
		- Two methods of encoding the information structured encoding using \<event\>\<eventName\> or \<label\> versus prosaic encoding \<head\> \<p\>
		- Argument for keeping using \<head\> and \<p\> \- Prosaic form of representing this information
		- **Decision:** Council agrees to keep as \<head\>
	+ Discussion of the Battles of the American Civil War: Kentucky
		- **Decision:** Council agrees to keep as \<label\> because they are indeed more labels than names, e.g. ”Barbourville” for The Battle of Barbourville.
* Discussion of the standoff Treaty example:
	+ One event with two different names but only one \<label\> in use and the other name is given in the prose using \<name type\=””\>.
	+ HC: \<name type\=”event”\> should be replaced by \<eventName\>
	+ EBB: Change the example that lists the \<name type\=”event”\>Treaty of the Delawares\<name\> to \<label\> like the other name of the event.
* **Decision:** Merge the PR and then create a new ticket to revise the event examples to ensure that the use of label and eventName is consistent
	+ **Action on JT:** Merge the fork
	+ MS: Reviewing the Graz 2019 example before merging


\>ATOP Ticket Discussion
------------------------


\>\>[\#2444](https://github.com/TEIC/TEI/issues/2444) \- Guidelines should clarify how fragmentary Schematron should be expanded
--------------------------------------------------------------------------------------------------------------------------------


* HC: Where would we put the documentation for the processing, as a note on constraint Spec or in the tagdocs chapter?
* **Decision:** Remove Needs Discussion and mark as Status Go
* **Action:** Request documentation for processing (see comment)


\>\>[\#2371](https://github.com/TEIC/TEI/issues/2371) \- Multiple attDef elements with the same @ident in the same attList should be invalid
--------------------------------------------------------------------------------------------------------------------------------------------


* EBB: In favour of a Schematron rule to guide people
* \<altIdent\> approach does it work?
* HBS: \<altIdent\> is useful for the internationalisation context
* **Action:** Mark as Pending to test the \<altIdent\> approach first.


TEI Board \& Council Meeting to discuss website infrastructure and TEI\-L migration
-----------------------------------------------------------------------------------


\>Migrating TEI Listservs
-------------------------


* Query raised by James Cummings on behalf of Board: “I seem to have missed that these would end up at [lists.psu.edu](http://lists.psu.edu/) rather than an aliased [lists.tei\-c.org](http://lists.tei-c.org/). Doesn't that just replicate the problem of having it at Brown? (That it is institutionally hosted?) With some domain alias wouldn't it be technically feasible to move it to another institution but keep all the addresses and URLs the same in the future?”
	+ Overview of the TEI\-L Archive links issue:
		- **Summary:** Complete transfer of the intellectual context of the listserv from Brown to Penn State but the links in these messages will break once transferred to the new institutional host
		- **Action:** Notify people that the links in the Archive will break
		- EBB and SB: We should postpone the date of the transfer because of the persisting link issues with the archive.
		- Sample Brown archive URL: https://listserv.brown.edu/cgi\-bin/wa?A2\=ind2308\&L\=TEI\-TRANSFER\-TEST\&P\=677
		- Sample PSU for *same post* on the *same list:*
		https://lists.psu.edu/cgi\-bin/wa?A2\=TEI\-TRANSFER\-TEST;fc69cc62\.2308\&S\=
		- SB: it would be possible, perhaps, to set up a redirect from Brown to Penn State, but it will be time consuming enough that it will likely have to be paid.
		- DJ: Discussion of using cloud hosting service that can support listservs, arose from concerns over institutional hosting. Not free, but we could pursue this path if it eliminates the risk of losing links in the Brown hosted archive
		- RV: Using an alias (as proposed by JC) to help with long term stability (so that no matter where it is hosted, folks could post to TEI\-C lists in the same seamless way no matter who is hosting)
		- DJ: Concern about Brown being eager to release the TEI\-C mailing list. Have we more time with Brown?
		- Discussion on whether we should postpone the migration or not:
			* MT: Talk to Brown and Penn to see if an alias could be a feasible approach to eliminating this problem in the future (should we need to migrate to a different institution again)
			* JT: Can you export the archive? There should be an archive independent of the lists using XML or XSLT. Even if the redirect doesn’t work there will be a copy of the archive/listserv preserved.
			* WM: Brown will need to handle the redirect, but would they be willing to handle it?
			* DJ: Question of documenta tion of lessons learnt while transferring the 18 lists from Brown to Penn State (for whenever next transfer is needed)
			* EBB: yes, there is such documentation (add link here?)
			* \~30,700 posts in total on TEI\-L mailing list
			* JT: the two previous mirrors are gone
			* SB: TEI documentation, second only to nuclear weapon documentation.
			* SB: Possible to have the web interface of the old archive co\-existing with the new Penn State listserv at the same time, **but** if we do this then you lose the mail forwarding functionality of the mail list serve, i.e. anyone that accidentally messages Brown will get a message failure error and have to resend that message to Penn State because there is only a list in Penn State;
			* DJ: Postpone the list serv migration to give time to resolve the problems
			* SB: The ultimate problem is that we don't have forwarding immediately to PSU if we persist the old web interface to the archives.
* **Board and Council Decision:** We have a plan and an institutional host. We are figuring out some finer details. We will make a big announcement when it’s going to happen. We still might find a way to have a scripted change for the URLs (switching from old links to Brown to new links to PSU)


\>TEI infrastructure group: website redesign
--------------------------------------------


* Proposed website redesign by HC in its current state: [http://new.tei\-c.org/](http://new.tei-c.org/)
* New design is responsive so it looks good and is functional on a smart phone
* Guidelines XSLT needs to be updated, maybe the whole Guidelines publication workflow too, to enable this
* Website design is in Markdown: [Github/teic/website](https://github.com/teic/website)
* MT: How complete is this website design, ready for collaborative edits/changes?
* HC: Partially complete with a workflow in place for finishing the export from WordPress
	+ **Note:** Legacy pages may not be worth exporting from WordPress
	+ “Look and feel” tickets would be welcome
* **Decision:** Board concurs to appoint HC to oversee the website redesign for a year.
* **Action:** Council appoints HC to work solely on the website redesign for a year after which HC reports back
* **Action:**  To update the [Council webpage](https://tei-c.org/activities/council/) to acknowledge and thank HC for his continued work on Council’s infrastructure


Tuesday Sept 5: Morning session (9:00–13:00, break at \~11:00\)
---------------------------------------------------------------


EBB, HC, MS, SB, and NC are the only Council members not involved in workshops available to work on tickets.
They form a subgroup and work on Guidelines tickets.