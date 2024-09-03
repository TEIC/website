---
title: "TEI Technical Council F2F Meeting in Guelph, 7-9 May 2023"
date: 2023-05-09
---
# TEI Technical Council F2F Meeting in Guelph, 7-9 May 2023
Meeting Times
-------------


 


| **Date** | **Time** | **Meeting of** | **Location** |
| --- | --- | --- | --- |
| **Sunday, May 7** | 11am\-13:00 14:00\-17:30 | Full Council meeting | MacKinnon 132 |
|  | *Dinner* |  |
| **Monday, May 8** | 09:30–11:00 11:30–13:00 14:30–16:00 16:30–17:30 | Full Council meeting | THINC Lab (second floor of Library. Take elevator or stairs behind and to the left of the desk. Turn left coming out of stairwell and take an immediate right. |
| 17:30–18:30 |  |
| 17:15 | *Dinner* | [*Bread Bar*](https://breadbar.ca/) |
| **Tuesday, May 9** | 09:00–13:00 | Full Council meeting | THINC Lab |


 
\>Present
---------


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Patricia O'Connor (TOC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)
* James Cummings (non\-voting guest)


\>Apologies/Not Present:
------------------------


* Elli Bleeker (EB)
* Hugh Cayless (HC)


 
\>Eating
--------


Council thanks Michaela Rye for assistance in choosing a local restaurant for dinner Monday.
\>Council Members involved in conferences/workshops
---------------------------------------------------


* Sunday 05\-07, 09:00–10:15: TEI and Linked Data panel at [LINCS conference](https://lincsproject.ca/events/making-links-2023/)


 
Sunday, May 7: Morning session
------------------------------


\>Approval/Revision of the agenda and ticket triage
---------------------------------------------------


EBB leads “Assigned Ticket Triage” session. Each of us goes through our assigned Guidelines tickets and
* Add those for which we want input to the agenda, below: on [Monday May 8 morning session](https://docs.google.com/document/d/1Gh7IkulpsNA5rOoTynwuEFdHE-00SHPk1LSt2iSzPto/edit#heading=h.i64z7qjgss59)
* Highlight your ticket if it shows up in the [Guidelines Triage Table](https://docs.google.com/document/d/1Gh7IkulpsNA5rOoTynwuEFdHE-00SHPk1LSt2iSzPto/edit#heading=h.kkeyj6o1sodc) below.


\>ATOP report
-------------


* SB is confident that before Members’ Meeting in September ATOP Task Force will have pruned localized ODD (PLODD) → RNG finished, and probably have → RNG \+ ISO Schematron finished.
* Chaining of ODDs → PLODD will probably be available in some pre\-release “alpha” state by then
* Let's prioritize \#atop tickets to this end \[Addendum by SB — We did not prioritize them at this F2F; I am hoping we can dedicate the entire monthly conference call in June or July to \#atop issues.]


\>epub2 deprecation
-------------------


* Ticket: [\#576](https://github.com/TEIC/Stylesheets/issues/576)
* Rationale: epub3, which, unlike epub2, supports HTML 5 and SVG, has been around for more than a decade and there is plenty of multiplatform free software (and even browser\-based applications) that will convert epub3 to older versions
* We have several epub2 issues to correct and we should consider if it’s really worth it
* Council greenlights for HBS to proceed:
	+ teitoepub → will perform epub3 processing
	+ teitoepub3 → will perform epub3 processing
	+ teitoepub2 → will issue “no longer maintained” message and then perform epub2 processing
	+ This will require the minor release number be incremented on release.


\>TEI Customizations and Processing Model
-----------------------------------------


* Martin Mueller's proposal (2023\-04\-19\) to phase out teiSimplePrint and attach the Processing Model to a version of TEI Lite:
	+ Phase out the current TEI\-SimplePrint customization.
	+ Merge its elements with those of TEI\-Lite into TEI\-Lite 2\.0 (there is little difference between the tag sets of TEI\-Lite and simplePrint).
	+ Attach the Processing Model to TEI Lite 2\.0 and create an updated version of the venerable TEI customization that in the context of the 2020’s will realize the original goal of creating a subset of TEI that would “meet the needs of 90% of the users 90% of the time”.
* Martin Mueller's follow\-up: revise TEI Customization Page's description of TEI Lite and simplePrint:
	+ dislikes that these customizations are described in terms of "what you cannot \[or can] do with them"
	+ Seems to be a revival of [closed \#2035](https://github.com/TEIC/TEI/issues/2035)
* Discussion:
	+ MT: The name simplePrint represents an unwanted compromise
	+ Which models should be prioritized?
	+ In TEI Publisher, MT has already done some merging of Lite and simplePrint
		- Can we merge the TEI Publisher ODD with TEI Lite\-\-to update it as a TEIC\-approved customization?
		- Alternative: a community customization like Epidoc
		- Martin Mueller thinks more people will trust it if it's endorsed by TEIC
	+ SB: There's good reason to add the Processing Model to TEI Lite. Old projects will still use old Lite, but we're not really taking that away.
	+ Lite 2\.0
	+ Mostly new features aren't there.
	+ Should Lite change with each new release? Every time we make a change to Guidelines, those changes should be reflected. But the use of inclusions makes that updating complicated.
	+ We should be updating the prose as well. Last updated in 2016?
	+ We could support Lite 1\.0 and Lite 2\.0
	+ What's wrong with simplePrint anyway? Lots of us use this in projects and teaching. The objection is really the name\-\-it seems to reduce the complexity of our projects
	+ JC notes that the simple is about printed texts that are straightforward, not about TEI complexity. This seems to be a misunderstanding of the person proposing this change.
	+ JJ: simplePrint's documentation is excellent\-\-we don't want to lose that. Move it to community customizations
	+ JT: Consider calling it TEI Publisher
		- MT: Maybe not: makes it seem too locked in to the publishing software, but it should have broader applicability
	+ Lite customizations commit a lot of tag abuse (sigh)
	+ Customization Page needs work: [https://tei\-c.org/guidelines/customization/](https://tei-c.org/guidelines/customization/)
		- Historicity of the customizations needs to be taken into account now:
			* Lite 1\.0
			* Lite 2\.0
			* simplePrint (\~2016\)
		- We should remove language like Lite is "the most widely used".
	+ What about calling simplePrint earlyPrint instead?
	+ RV: If we revive Lite, we also need to take responsibility for endorsing the kinds of documents that it’s able to encode as the starting point for TEI users.
	+ Shouldn't the Customization page also include more specific customizations for distinctive kinds of texts?
		- More customizations might be better optics for us
		- oXygen gives users TEI\-All as a starting point\-\-so should that be changed?
* Work on Customization Page
* Move simplePrint to community customization area?
	+ Council doesn't maintain these: Would the community maintain it like EpiDoc?
		- Maybe that's like getting rid of it
		- We shouldn't do this unless there's actually a community group that agrees to support it.
	+ Better to move simplePrint's documentation into Lite 2\.0
	+ EBB suggestion: Could we make simplePrint a Legacy ODD and \*also\* fold it into Lite 2\.0\. A revised version of simplePrint’s documentation becomes the documentation for Lite 2\.0
		- JT: We'd need to pin Legacy simplePrint to 4\.6\.0 to keep it stable. RV: we've never done this before, so we need to work out a policy and groundwork for support.
		- These customizations need to be versioned.
	+ TEI Lite absorbs simplePrint into its schema.
		- RV: Don't call it 2\.0 b/c it conflicts conceptually with our other versioning system
		- Original Lite should be renamed (something like what we did with Roma Antiqua)
		- MT: Make it Lite 2\.0 (SB points out that we're using version numbers in the 4's now)
		- Lite Two Point Oh.
		- Lite Two
		- Lite2: Council moves for this without the space. That is NOT a typo.
		- We find the phrasing of serving 90% of the needs of 90% of the community outdated and suggestive that most projects are alike.
			* When this was proposed, it was meant to emphasize that no customization can serve 100% of the community!
			* It is \*necessary\* to tweak it to get it to work for you.
			* Lite2 should be more like an "on ramp" that doesn't cover all cases but takes us quite far as common ground.
			* JJ volunteers to get us started drafting a paragraph for the Customization page and the [TEI Lite](https://tei-c.org/guidelines/customization/Lite/) page that Council can review this summer.
			* Lite and other customisations also mentioned in Chapter 22 at: [https://tei\-c.org/release/doc/tei\-p5\-doc/en/html/USE.html\#MDlite](https://tei-c.org/release/doc/tei-p5-doc/en/html/USE.html#MDlite)
		- For next Fall's release?
			* So we get started this summer.
* Blue Sky: What about peer reviewing project ODD customizations to be featured on the TEI website?
* Community models of ODDs
	+ JT: Could be part of an “Awesome TEI” list (i.e. list of TEI resources—possibly mentioned by RV in past Council meeting?)
* Would they need to be updated upon release where there have been backwards incompatible changes?


 
Sunday, May 7: Afternoon session
--------------------------------


\>Guidelines PRs:
-----------------


* + SB: [\#2423, changes the content model for msDesc, msPart, and msFrag](https://github.com/TEIC/TEI/pull/2423)
		- Summary:
		When originally developed, it was presumed that order of semantic children of \<msDesc\> (and friends) was not important. So, in order to make it easy to have a DTD\-compatible content model that limited each of those 4 elements to 0 or 1 occurrence each, the designers simply picked an order (\<msContents\>, \<physDesc\>, \<history\>, \<additional\>). TS has argued on the ticket (if not the list, too) that htis content model is too tight, i.e., there are people in the MS description world that really want to be able to use a different order.
		- That is, the desired content model would allow 0 or 1 each of those 4 elements, in any order. SB notes that the XML DTD language has no mechanism for expressing that, but RelaxNG does (‘\&’ aka \<rng:interleave\>).
		- SB question for msDesc users: Should msPart and msFrag be at the end? Is there any reason why that would be an issue for users of msDesc?
			* JC: msPart in its original conception was for parts of a manuscript that were originally separate but now bound together as a single manuscript. Using it for other things is strange, but feasible.
			* SB: Proposes that msPart and msFrag remain at the end of the content model (as long as it is not a problem for msDesc users). JC agrees that it makes sense for these elements to come near the end after the other elements.
		- HBS notes that students find it challenging to have read about the elements that are allowed and then find that the element wasn’t allowed because they don’t have the order right.
		- SB suggests 3 possible solutions (2 of which were already [mentioned on the ticket](https://github.com/TEIC/TEI/issues/2214#issuecomment-1532477940)):
			* Simply list the possible combinations in the content — This works very well for 2 elements, and is not bad for 3; it is somewhat cumbersome for 4, gets a bit out of control for 5–6, and is probably not reasonable much beyond that. SB has implemented this solution in [a branch](https://github.com/TEIC/TEI/blob/sydb_2214/P5/Source/Specs/macro.msDescPart.xml). SB asserts this would work very well unless the MS\-SIG really wants \<msPart\> and \<msFrag\> in the same group of order\-not\-important elements.
			* We drop support for DTD (and maybe XSD), and then use \<rng:interleave\> (or preserveOrder\="false" or its replacement ala [\#2154](https://github.com/TEIC/TEI/issues/2154) in PureODD).
			* Loosen the content model to be ( msContents \| history \| history \| additional )\* \[Addendum by SB: or, better yet, minOccurs\="0", maxOccurs\="4" of that same alternation.], and then use an added \<constraintSpec\> to enforce the “no more than 1 each of \<msContents\>, \<physDesc\>, \<history\>, and \<additional\>” constraint.
			* Most everyone liked that last option the most. Furthermore, JT, who is strongly in favor, gave a very nice summary of it, so we are now calling the general\-purpose approach — loosen the content model to something a DTD can handle and constrain further with Schematron — the Takeda Strategy.
		- SB suggests that in order to implement Takeda Strategy it would be useful to make explicit our unwritten rule that Schematron validation is required, and that RNG validation happens before Schematron check. \[Addendum by SB: In retrospect, it is not really clear to me that Schematron need occur after RNG.]
		- XSD use: Lots of users
		- Torsten wants multiple elements, but he erroneously suggests a content model that would only allow for one.
		- JT: Processing question \- If you were to use the \`interleave\` approach what is produced for DTD users?
			* SB: fatal error message is generated
			* \[Addendum by SB: Depending on what JT meant by the question, answer was incorrect — it seems that the regular P5 build simply summarily ignored preserveOrder\=false. No error, but the DTD requires order.]
		- Reasons why we have not explicitly required Schematron and required RNG first in the past: 1\) didn’t know at the time that you could make the stylesheets do something different, 2\) afraid that the user might not have the Schematron.
	+ <https://github.com/TEIC/TEI/issues/2154> \- Related to preserve order sequence
		- An example of RNG Interleave being used for this issue.
		- Sequence is not a good name for an unordered sequence, because it is not an order/ not a sequence
		- JT happy with Interleave if it is the general consensus
		- Status Go for creating Interleave element for ticket \#2154 then return to [ticket \#2214](https://github.com/TEIC/TEI/issues/2214) to PR [\#2423](https://github.com/TEIC/TEI/pull/2423)
		- What needs to be done:
			* Rename github issue to say we should create interleave element (as per \#2154\)
			* Add a stylesheets issue for converting \<tei:interleave\> to \<rng:interleave\>
			* Deprecate \<tei:sequence preserveOrder\=”false”\>
			* Allow any of msContents/physDesc/history/additional in any order any number of times, but then create a Schematron Warning to suggest any of these only used once.
		- Need to reject Torsten’s PR (politely) to apply the changes required. SB will respond to the PR.
	+ SB: [\#2427, Proposal for event and eventName](https://github.com/TEIC/TEI/pull/2427)
		- Created a new element \`\<eventName\>\` and ensured that it worked with the Guidelines
		- Proposed change is reasonable to have this completed — i.e., ready for Council to review — within a week
		- Lots of people want this newly created element which would replace the \<label\> element that is currently being used in the examples.
		- The change is to make it applicable to “any other event”
		- Problem of backwards compatibility if you remove \<label\> element from \<event\> entirely. Possible for users to stick with the older versions of TEI
		- Should \<eventName\> become a member of \`model.nameLike\`?
		- Needs to be a member of \`att.canonical\` so it gets \`@ref\`
		- SB: volunteers to work on correcting the errors until this outputs correctly.
		- JT: \<event\> in its current configuration it quite constrained, take this opportunity of reconfiguring the \<event\> content model to make this a more open and less arbitrarily constrained model. (Make sure that what we want for event is fully represented in the proposed change.)
		- Checking [\<place\>](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-place.html) and [\<org\>](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-org.html) content models as comparisons, both get \`model.headLike\`
		- JC: although \<event\> developed out of something happening in relation to people/place/orgs, its content model should be considered as a first order entity in its own right as an event can occur without people, places being connected.
		- EBB: Leaving a comment that expresses how impressed Council are by much work went into creating this proposal and that it will be incorporated into the next release and want to make sure that he gets exactly what he wants out of the proposed change. JT: To comment on the PR to make sure that the changes meet his expectations.
		- MT: Comment to ask him if he would like to work further on this issue himself to incorporate it into dev or if he would like the Council to finish this on his behalf
		- SB: We need write access to modify his branch and repo and he has also explicitly asked Council to make changes.
		- EBB: We can suggest examples for him to demonstrate the functionality of \<elementName\>
		- JT: Agreed with JC to put his proposed changes into a new branch, a Council branch, that we can grant him write access to so it includes his original changes and enables Council to add the proposed examples (JC and JJ have examples to contribute). Advantages: This protects dev and prevents any potential breaks to the build.
		- SB: Let people have access to the repo when they have made a great effort to contribute to the Guidelines
		- James Cummings: We can also remove the write access after the changes have been made. JT: Having a fork is another option.
		- **Action**: Make requester a contributor **after** we have made a new branch for incorporating his changes and adding our contextual examples for \<eventName\>.
		- James Cummings: Not many changes, so we could copy all his changes and then invite him to write to that branch.


* [\#1996](https://github.com/TEIC/TEI/pull/1996) \- MT: Version numbering has nothing to do with the semantic numbering. Only realistic way to ensure it is to have prefixes on every commit. Need to have some means of keeping track
	+ HBS: Volunteers to work on this, RV you can express version in the way that you understand and the way that you need. HBS we need to update the description of version though to ensure that version is being used correctly, even if it is just specific to your requirements.
	+ HBS question about the fixing version to allow people to use it in any way that they want, so do we reject the pull request.
	+ SB: Reject the pull request but preserve the regex.
	+ JT: Keep it in the backpocket so it there is a need then we have it.
	+ EBB: Open a ticket to keep the regex? HBS there is a ticket already for Unicode (add ticket number here), so we can add the regex to a comment under that ticket.
	+ SB: version does not move but its definition needs to be changed
	+ JT: Have a paragraph in Default Text Structure (include link) in the Guidelines that clarifies how to use it but also that you can use it as you need to use it?
* [\#2132](https://github.com/TEIC/TEI/issues/2132) kind of related: proposition to change version attribute to express range of versions for gaiji descriptions
	+ teidata.versionNumber: up to 3 possible
	+ JT: If we override it and just have a single version attribute that captures all instances of version use? Having a min version and a max version is overkill. Seems reasonable to have them using it as they need but to have good documentation to explain their usage of versionNumber
	+ EBB: Should  teidata.versionNumber be deprecated? What should we do with it, do we loosen it up for application?
	+ HBS: proposal in \#2132 has option without constraints.
	+ SB: Is schema version allowed? That we make a single version and data types to allow users to use a variety of versions for different needs?
	+ RV: Problem with schema version is that Council have to change the code.
	+ JT and RV: Deprecation period is reasonable.
	+ EBB: Where have we been using teidata.versionNumber?
	+ SB: Just rename the attribute from \`@schemaVersion\` to \`@version\`. Council only need one ticket to clarify and connect all this.
	+ **Action: JT** volunteers to open a ticket to update the TEI Community on our proposal to rename version and to allow the outside community to offer further comments on renaming of the version attribute. Then, in September F2F, Council can discuss this again in relation to the original and new ticket opened by JT to see if there is more input from the wider TEI Community.


\>Council Discussion of Contributor Guidelines
----------------------------------------------


* MT: Community PRs should be prioritised
* JT: We should draft Contributor Guidelines to know what to do for new contributors that do not have connections to people on Council
* SB: MS gave a great talk on how to contribute to the Guidelines \- possible base for a draft of the contribution guidelines
* James Cummings: Not everyone will want to contribute code, so our contributor guidelines need to allow for other ways of contributing.
* EBB: Can we make it mandatory to have at least two peer\-reviewers prior to merging a branch from an outside contributor? Consensus seems to be that this is overkill.
* RV: we could [protect release and dev branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches): “when you enable branch restrictions, only users, teams, or apps that have been given permission can push to the protected branch. You can view and edit the users, teams, or apps with push access to a protected branch in the protected branch's settings.”
* MT: Example of a stipulation \- only merge if you have had the branch peer\-reviewed positively by two members of Council at least. EBB: You can create a branch but not merge into dev. SB and RV: Need to test this to be sure.
* EBB: We could also use the role function too to specify the limits of access for specific contributors.
* Council agrees to protect the release and dev branches and to update the roles. **Action on RV:** volunteers to protect the dev and release branches.
* JT: We should make a ticket for TEI Documentation for documenting the contributor guidelines. JT and MT volunteer to work on the ticket, James Cummings creates the ticket on the Documentation repo. \[Continuing discussion on Monday May 8: Try a Github repo in the organization.]


Monday, May 8: Morning session
------------------------------


* Council meets at [THINC Lab](https://www.uoguelph.ca/arts/dhguelph/thinc) 2nd floor of the McLaughlin Library


\>Discussion of high priority Guidelines tickets
------------------------------------------------


* EBB: [\#2389 rs should be datable](https://github.com/TEIC/TEI/issues/2389) Update to yesterday’s discussion of \<eventName\>. Referencing string \<rs\> **should** be datable \#2389 \- EBB communication with Stefan \<rs\> is specifically not \<name\> but the set of attributes are identical to \<name\> so \<eventName\> should have the same set of attributes. Council agrees that all of these should be datable. EBB: If we’re going to leave one be datable then the others should be datable too. RV: Name of countries change too and can be datable ie. It was called X before a certain date and called something Y afterwards. HBS: \<country\> is datable.


* RV:  [\#1744 Add contextually\-variant content models to ODD](https://github.com/TEIC/TEI/issues/1744)
	+ Suggestion to add a set of co\-occurence constraint capability to ODD language
	+ RV: JC put together 6 steps proposal, Council requested a more fleshed out technical proposal.
	+ MT: Declarative option is a good thing to have, even if informally enforced because this possibility may occur in the future
	+ SB: If Council votes yes today we have to implement it in this version but if we wait 6 months we can implement it with ATOP (using the Takeda Strategy to be able to use RelaxNG syntax while providing schematron fallbacks for XSD and DTD)
	+ EBB: Decision today to defer until we can implement with ATOP
	+ JC: How are you going to do this with ATOP? Need to have an actionable plan in place in order to ensure that we can implement this in ATOP.
	+ RV: Do we have to add the attributes to the right place? Best to decide on how to do this together now as well as deciding on the implementation plan. Sketch both out now so it is ready to go when we want to implement it.
	+ EBB: Need to note this decision on the ticket.
	+ RV: Volunteers to comment on the ticket.
	+ JT: Is this the path to P6? Having a really good version to justify P6\.
	+ JT: Did we talk about val lists that are grouped by org or choice or group or alternate? It’s an existing co\-occurence constraint so relevant to this discussion.
	+ EBB: Do we need to add more detail about the next steps in the comment to the ticket. RV: making sure that we have the attributes in the right place first in order to specify the co\-occurence and then to do the modelling work on the Guidelines.
	+ MT: This should go ahead but the redefining / re\-modeling of limited element classes throughout TEI Guidelines as a whole needs to be a P6 thing but this process paves the way to p6\. We'll look at our class system carefully\-\-possibly redo it so it's not so much like "club membership". Remodeling is an opportunity to revise the class system.
	+ RV: P6 may possibly drop numbered \<div\>s and DTDs.
* RV: [\#1710 Review placement of classes, macros, and datatypes in modules](https://github.com/TEIC/TEI/issues/1710)
	+ Summary: Why are classes in strange places instead of where they belong
	+ SB: Classes are defined in the Guidelines, elements and model classes can declare what model classes they are members of. In RNG it reads all patterns and then processes it, order does not matter, but in DTDs the classes need to be in the right order or else it breaks. Lots of effort went into explaining the need for the order of classes in the Guidelines to avoid this issue in DTDs. Now, this is silly. A) Drop support for DTDs or B) It’s up to the software to put them into the correct order not the human. Have a rule that the software reads the classes and recognises the necessary order/hierarchy.
	+ JC: Is there a danger of the software making an impossible decision between the different classes?
	+ SB: List all the classes and its membership, write the rule to process the class and its membership in order to determine the correct order ie. having a rule to search if you have specified the necessary higher level classes have already been processed before a lower level class?
	+ HBS: Restructuring of the classes \- ATOP resolves this, so why should we bother? RV: TEI shared module for globally available classes and other classes for specific modules that are not shared globally.
	+ RV: Need to offer users the leanest model of TEI instead of the fullest. We analyse where these classes go before adding them. It either goes in TEI or it goes into a different module. If that logical system is of no benefit to us, then it is probably not worth it. Classes that are not in use are still processed but discarded since they are not in use.
	+ EBB: The class system makes things difficult to determine where these attribute classes go.
	+ JT: When designing ODDs, JT looks at every single class and attribute included and deletes any that are not going to be used. Worried about backwards compatibility.
	+ RV: Where there is a lot of impact is when you call elementRef.
	+ EBB: Do the users understand the class system when writing ODD customisations? This could be the reason more people don’t write ODDs.
	+ RV: Historically Council did think it was fair to expect that users would understand the class system. Might not be the case now.
	+ JT: Does it have to be that an attribute class can be in only one module\-\- can we imagine attribute classes in multiple modules?
	+ SB: Problem with the IDs. No one thought of using classRef to enable the inclusion of classes in multiple modules.
	+ RV: We should instead concentrate on reorganising our class system, we will be processing differently so then we won’t bump into all of the problems we have now
	+ RV: We will still have to offer support XSD so we will still encounter these problems even if we drop DTDs. Maybe we need a distinction between modules for elements and modules for classes? Classes are more abstract than elements.
	+ JC: Noted historical reason for putting classes into TEI rather than into a specialized class was the *suspicion* that they might be used more generally in the future.
	+ EBB: Tendency now to lump new classes into TEI is a sign of the problem we need to solve.
	+ RV: Moving towards a final decision on this, the risk of classRef making things worse than what it already is if we do not fix the processing now. Maybe too much effort even though the idea is valid.
	+ SB: Defer ticket until we are reorganising everything together, as this is related to the other ticket.
	+ EBB: Update to Status: Blocked and keeping Status: Needs Discussion to make sure that we come back to this
	+ HBS: Add a cross reference to both related tickets \#1710 and \#[1744](https://github.com/TEIC/TEI/issues/1744) to make sure that they are linked for the reorganisation.


Monday, May 8: Afternoon session
--------------------------------


\>TEI Website and Documentation
-------------------------------


* Emerging issue. JJ, MS, HC working on the question of Council's representation to the community.
* Input from the Board, the Documentation subgroup, the community, the Internalisation group
* MS giving report and overview of work done by the Documentation subgroup:
* [Figma visualisation](https://www.figma.com/file/9pBdvnNOoBZF0rEVMbreBN/TEI-Documentation?type=whiteboard&node-id=0%3A1&t=twkF6Fg8BIFlS2yB-1) of documentation in the TEI Wiki, WordPress, GitHub Documentation Repo and the Google Docs.
* Red indicates information that should be deleted
* Pink indicates information that should be moved somewhere else
* Blue indicates information that needs to be deleted or updated/needs to be read
* Green indicates that he can be left where it is.
* Wiki mostly used by the special interest groups eg. LingSIG uses it
* Minutes from Board are still in the Wiki, most importantly there is a link to the FAQ which links to the Council FAQ which should be moved to the Documentation repo.
* Need people that know more about the Wiki to assist in moving documentation from the Wiki to the Documentation repo.
* Wiki should be obviously NOT Council\-driven – should be community\-driven
* Banner indicating that material is outdated
* JC: Recent changes suggest that two SIGs are using it actively. No page to register for the TEI Wiki.
* JJ: What belongs on the website, and what belongs on the Wiki. **Action:** Proposes a new page to enable users to register to access the TEI Wiki
* JJ: MH and DJ and Board want to migrate from WordPress to a static site. Only put things on the website that is only the responsibility of the Board or Council.
* JJ website index card exercise \- idea is to achieve a preliminary consensus on what information/content goes where. EBB: HC wants to work on this website but the Board encourages the Council’s input in order to help with this. Current issue is the inaccurate placement of menu items, ie. top level menus that ought to be lower level menu items, information duplication (the same information is in two different places on the website).
	+ Use the top\-menu area judiciously. Put our best stuff first and top.
	+ Footer area is for important but boring stuff: E.g., Contact, Society
	+ News: MT: To have the feeling of being alive, you need someone to maintain the content, particularly for the featured material (a small selection of the most important current information, e.g. the latest release info or conference cfp announcement). This requires editing titles, leads and perhaps some visual imagery specifically for the front page position.
	+ JT: Suggests a GitHub feed as a source of constantly changing content.
	+ A Twitter feed? Facebook? A carousel
	+ What puts our best foot forward? Guidelines release announcements. Material from previous conference. Feature *jTEI* articles. News (which no one sees right now).
	+ Lead with the most recent stuff.
	+ Image carousel from conferences and meetings
	+ Socials: Mastodon, Facebook, and Twitter (should have a third\-party service that posts the same thing to all three services)
	+ Organize History by year: who was on Council and Board each year, minutes from each year, conference archive from that year, annual meeting report, releases from that year.
		- Or organize by activity (Board, Council, Conference)?
* JJ and MT continued to work on the menu structure and captured the results in a Miro story (see [Miro board](https://miro.com/app/board/uXjVMKjUk40=/?share_link_id=511256359246)).
	+ Playing with the idea of the following top menus:


**About   Guidelines   Activities   Learn  Records   Resources   Community**


* **Records** could go under **Resources**. Could also go in Footer area. Will put a link from **Society**.
* **Learn** could go under **Activities**
* In the footer area:


**Society   Code of Conduct   Socials  Contact**


* Suggest some usage of buttons and icons for GitHub, Join, Social, Donate, Guidelines
* Suggest that we commission a special icon for Guidelines or find a suitable icon that is the same scale/detail as the GitHub and Twitter icons.
* Ideas from [https://www.e\-editiones.org/](https://www.e-editiones.org/)
* Next steps for a potential working group:
	+ Decide on a repository for content (probably GitHub)
	+ Decide on encoding language (if not TEI – MD is an obvious alternative)
	+ Decide on publication mechanism to replace WordPress with an Endings\-compliant website (for example, [11ty](https://github.com/11ty/eleventy-base-blog))
	+ Finesse structure of the website (started in Miro)
	+ Decide on content to migrate/rewrite/write \[BIG job]
	+ Set policies and practices for maintenance and updating.


Tuesday May 9: Morning session
------------------------------


\>Website task force discussion
-------------------------------


* Should this proposal go to the Infrastructure group next?
* JJ: Yes, because we need to decide on a static website framework.
* MS: the infrastructure group may need to be re\-formed / re\-convened after a hiatus.
* EBB: If HC were here, he would likely say that he wants to work on the groundwork for a static website
	+ We need to have input on the technologies for the static site
* MT: Website redesign is a different job than the Infrastructure group does
* EBB points out there's an obvious connection between the website and the infrastructure
* SB says the design work is different from the technology delivery of said website (infrastructure)
* JJ: Suggests we convene a Website Working Group with representation from the Board and the Council and that calls on the Infrastructure Group and other people with necessary expertise.
* JT: What does the new website need, how often updated? Does it need to support e.g. vending, etc.
* JT: Who decides in a Working Group
	+ We're not making a working group but a Task Force
	+ (working group is a group of Council working on the Guidelines)
* Do we need a charge?
* JJ and EBB don't want to see multiple groups duplicating efforts
* JJ: we could form a task force for the website, also good for early career scholars to put on their CV
* **Action on EBB by 2023\-05\-16:** Take this to Board and newly forming Infrastructure Group: Advise Board (via Diane) that we would like JJ to chair a new Task Force (and also talk to HC to advise him to wait and work with the group on the website.)
	+ Form the Task Force by June.
	+ Plan to get community input in Paderborn.
	+ Possibly via a poster session.
	+ Plan to rollout the new website within (roughly) a year.
	+ EBB to ask the Board: what is your view of the purpose of the website? Is one of the main goals of the website to promote and encourage membership?
	+ MS: Also ask Board: What is the Wiki for? (Share Council's view that projects/educational resources not writ by Council or Board, move to the wiki. Ask the Board, do you agree?)


* RV: Maybe the name isn't important\-\- maybe call this thing the website task force and re\-cast it as infrastructure group at a later stage (since our other tech infrastructure is doing OK right now)
* MS: we turn next meeting of Infrastructure Group (with Doodle) into meeting for organizing Groups and organizing Group for Website
* **Action on Council by 2023\-05\-18** to read over and comment on the Miro board [minutes](https://miro.com/app/board/uXjVMKjUk40=/) by JJ and MT on the website redesign. In relation to the feedback to the Miroboard,the comments should be broader, **N.B.** if something big has been missed entirely in the redesign, or if there are other goals that the website is not representing clearly to the users.
* JJ: there could be a poster at the TEI conference in Paderborn with the menus to get feedback, sticky notes for ideas of people etc., also good to have a proposal for people to react to
* MT: Have a set of notes from ourselves to present to the website group for consideration.
* MT: request for EBB to bring to the Board the question of strategic goals for the website, e.g. should it aim to promote and encourage the TEI membership, or "pitch" the use of TEI to various audiences
* **Action on JJ** to turn the Miro board into a PDF that we can circulate and a JPEG that we can include in the Council minutes.


* Help Wanted with Minute Review
	+ SB: Leave this document open for 10 days
	+ **Action on Everyone by May 19 2023**: Work on cleaning up, editing, fixing hierarchies. Editing directly is okay when you're sure something is just incorrect. Move to Suggest mode only when uncertain.
	+ Those listed in Minute Review on table below for May 2023 then tidy this up for publication on the TEI website. This group works in Suggest Mode together. This may be the Scholger Protocol.
* Review of [yesterday’s break\-out groups working on Guidelines tickets](https://docs.google.com/document/d/1Gh7IkulpsNA5rOoTynwuEFdHE-00SHPk1LSt2iSzPto/edit#heading=h.2sghzaho9b70)
* Leftover tickets of importance (if any)
* Features in next release?
	+ SB thinks that CMC will *not* be ready; another meeting was postponed for over a month (due to illness, he thinks)
	+ Should we be pushing CMCers harder?


Ticket Triages
==============


\>Guidelines pull requests
--------------------------


### PR Triage Groups


Group A: TOC, JT, EBB, HC (JC on Sun)
Group B: HBS, SB, SS, JJ


Group C: MT, RV, MS




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#1996 |  | [align teidata.version with Semantic Versioning Specification, closes \#1993](https://github.com/TEIC/TEI/pull/1996) | Discussion: MT: Version numbering has nothing to do with the semantic numbering. For SemVer: Only realistic way to ensure it is to have prefixes on every commit. Need to have some means of keeping track. JT: Automatic numbering generation for new versions. Issue ticket is [\#1993](https://github.com/TEIC/TEI/issues/1993) EBB: To close \#1993 do we need a solution to `@version` attribute? Update the branch and assign someone to write the documentation to explain that it is influence by semantic versioning. SB: Does it need a `@version` attribute? Idea of removing `@version` attribute is not feasible.The attribute is needed but does not need to be pointed to a schema? JC: The [note](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-TEI.html) on the version attribute of the \<TEI\> page means that the example is incorrect, meaning people have being using the version attribute incorrectly. RV: `@version` on TEI will die tomorrow unless someone wants to preserve it tomorrow morning. HBS and JT: Why kill it instead of leaving it alone? Let it live in peace. But change description to say that it’s a number you can use somewhat freely and maybe you shouldn’t use it. EBB: We should note that people should use SchemaRef instead. Agreed not to remove it.* JT to add ticket with HBS to propose harmonizing @version across |
| \#2143 | B | [new langKnown example \+ bib ref](https://github.com/TEIC/TEI/pull/2143) | * RV: will make small required fix and integrate \-\- done. |
| \#2245 |  | [Translation from CarmendeSantiago/TEI](https://github.com/TEIC/TEI/pull/2245) | HBS notes that some of these PRs are just tests and not meant to be pulled in. HBS to review and gently close, or repair. Review by HBS finished: \#2245 was closed with a comment, \#2320 was merged, and \#2321 was repaired and pulled in |
| \#2320 |  | [Translation from dh\-miami/TEI](https://github.com/TEIC/TEI/pull/2320) |
| \#2321 |  | [Translation from joloor2/TEI](https://github.com/TEIC/TEI/pull/2321) |
| \#2384 | C | [Update example and bibliographic item](https://github.com/TEIC/TEI/pull/2384) | merged |
| \#2393 | A | [constrain att.translatable elements when used in the Guidelines](https://github.com/TEIC/TEI/pull/2393) | Subgroup A thinks this is ready to go. JT reviewed schematron changes and approves them. JT's requests appear to be resolved now. JT should re\-review and perhaps approve. We also approve HBS's translations to English. Approve this PR. Then open a new ticket to revise the wording about pointing @who to \<role\> or \<person\>. |
| \#2409 | B | [changed content model for content, \#2381](https://github.com/TEIC/TEI/pull/2409) | Schematron has already been written; PR [\#2428](https://github.com/TEIC/TEI/pull/2428) needs review \& merge, [\#2381](https://github.com/TEIC/TEI/issues/2381) Leave open until next year because of the deprecation. |
| \#2416 | C | [guidelines.xsl generation update](https://github.com/TEIC/TEI/pull/2416) | subgroup says JT should merge this JT merged PR. |
| \#2418 | C | [(a) French version of tutorial (b) minor typos in release notes](https://github.com/TEIC/TEI/pull/2418) | Left some comments for Lou for some minor changes that are needed before we can merge. |
| \#2422 | A | [add \<taxonomy\> and \<category\> to att.datcat (issue \#2419 )](https://github.com/TEIC/TEI/pull/2422) | In response to issue [\#2419](https://github.com/TEIC/TEI/issues/2419). PR isn’t finished, last update 2 weeks ago. Subgroup A decision: Leave PR open, work still in progress as noted on ticket. LingSIG fork needs to be updated to merge to TEI dev. Ticket \#2419 assigned to HBS. HBS and MT assigned to review the PR. |
| \#2423 | B | [changes the content model for msDesc, msPart, and msFrag](https://github.com/TEIC/TEI/pull/2423) | Talked about this ticket on Sunday. |
| \#2424 | C | [Updated the title of 2\.2\.8 for \#2415](https://github.com/TEIC/TEI/pull/2424) | subgroup says SB should merge this \[done] |


 
\>\>Guidelines issues
---------------------


### Priority Issues \+ Needs Discussion only


### Guidelines Issues Triage Groups:


Group A: TOC, JT, EBB,
Group B: HBS, SB, SS,


Group C: RV, MS, JC


MT and JJ are working on website plan


 


 




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#672 | A | [\#672 video html to TEI](https://github.com/TEIC/TEI/issues/672) | Subgroup: We should close this ancient ticket and open a new ticket on Stylesheets to review and see if things work the same way now. Discussion: MT's suggestion on ticket to use \<choice\> isn't good due to its limited placement. SB: Suggestion to use \<alt\> instead. JT: MH’s suggestion to let media nest is a good solution. RV: Meant to be in alternation. MT:\<noteGrp\> purpose of the element the notes that represent the same comment but expressed in different languages, JT also something in common but different formats or intending for different audiences. SB: Having a \<mediaGrp\> might be beneficial. Using nested \<media\> could be problematic\-\-it might mean a composite of multiple medias. RV: Figures can be grouped, need to study what TEI already does for media and be sure what we proposes is consistent with the existing model. Possible solution to expand \<figure\> to incorporate \<media\> since it is already allowed in the [\<figure\>](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-figure.html) spec page. Discussion about using \<altGroup\> but this approach would involve using StandOff and might be complicated. Also, you will need to target it to point to alternates since it is self\-closing. EBB and SB: \<alt\> is too permissive. \<figure\> is the most feasible option. **Action on HBS and MT**: Assigned to HBS and MT to reword the description of figure to incorporate graphic and figure\>. Update ticket status from Blocked to Status: Go and Status: Needs Discussion so we can revisit this ticket discussion in the Paderborn F2F. |
| \#2345 | B | [\#2345, msIdentifier should be changed to allow only an idno or msName](https://github.com/TEIC/TEI/issues/2345) | MS SIG proposes to have just \<idno\> or \<msName\> as the minimal identification of a ms (this is the minimal content of \<msIdentifier\>). However, currently we consider that \<msName\>, \<repository\> or \<location\> are the minimal identification (see [\#2258](https://github.com/TEIC/TEI/issues/2258)) After some discussion, we agree that the minimal identification of \<msIdentifier\>:* msName (with something on it) * idno \+ @type * idno \+ repository \| location \| institution   Make a Schematron to accommodate the 2nd option. (3rd option is already covered.) **Action on HBS and SB:** Merge \#2345 with [\#2258](https://github.com/TEIC/TEI/issues/2258) to correct the Schematron errors. |
| \#2285 | C | [\#2285, just the question of \<altIdent\> in other stuff](https://github.com/TEIC/TEI/issues/2285) | SB and James realized that \<altIdent\> isn’t used or it’s used incorrectly in a number of elements and propose deprecating it. RV suggests keeping the element so that all the \*Spec elements have a similar content model and feels that this would remove an instrument from future uses of ODD specs. Suggest to follow solution 2, but let’s discuss because solution 1 also seems rather reasonable. Discussion: Need to revisit the reason why we have [\<altIdent\>](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-altIdent.html) in the first place and its definition. EBB: \<altIdent\> is more constrained than we were led to think. \<equiv\> inside classSpec can handle the use cases of pointing to related classes in other XML languages. JT: Why have only one \<altIdent\>? SB: Creating from scratch, just using \<id\>s and getting rid of \<altIdent\>. JT: For ATOP \- Add responsive message that you have an \<altIdent\> that is not doing what you think it is. **Action on SB:** Comment Council’s decision on ticket, to keep \<altIdent\> and to add clarification on the usage of \<altIdent\> in p5 and update to Status: Go and remove Needs Discussion. |
| \#2279 | A | [\#2279, Constrain translatable elements in TEI ODDs](https://github.com/TEIC/TEI/issues/2279) | Already discussed with related PR above. (leave open til branch is tidied). **Action on SB:** Leave open until branch is updated and tidied then close. |
| \#2214 | B | [\#2214, sequence of top level elements within msDesc](https://github.com/TEIC/TEI/issues/2214) | already discussed |
| \#2420 | C | [\#2420, On the content model of \<revisionDesc\>](https://github.com/TEIC/TEI/issues/2420) | Subgroup agrees to point 1 (allow multiple listChange), but not point 2 (allow empty \<revisionDesc/\>) \-\- kinda like you cannot do an empty commit in git, or like you must add something to a \<sourceDesc\> Discussion: SB: The proposed content model to have a revisionDesc but have nothing in it, change the content model to use pluses instead of stars to require one of: element revisionDesc { ( list\+ \| listChange\+ \| change\+ ) } This change encourages you to not leave it empty but allows you to leave it empty if you want to (you can capture your changes with @type). **Action on SB and TOC:** to update the ticket with the content model with pluses instead of stars and implement the change. TOC updated ticket status from Needs Discussion to Status Go. |
| \#2045 | A | [\#2045\. @calendar\= should not be in att.datable](https://github.com/TEIC/TEI/issues/2045) | Subgroup notes that this seemed to be decided in Dec. 2021 but no one has acted on it. Need to set deprecation period and a milestone? Question: Which elements should get @calendar? What would the new class be called (att.dated seems a bit off....att.dateLike or something?) Note the examples of @calendar on \<date\> in [att.datable spec](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.datable.html)page. We need more documentation of when and how @calendar is appropriate.Which elements contain date content other than \<date\>? (See MH’s comment with table: [https://github.com/TEIC/TEI/issues/2045\#issuecomment\-731271583](https://github.com/TEIC/TEI/issues/2045#issuecomment-731271583))**Discussion on calendar:** JT: The attribute is currently badly named, not clear what its purpose is. Already have a datingMethod already and closely related to att.datable.Possible new attribute names for calendar: att.calendrical, att.calendarSystem, att.datingSystem, att.datingMethodAttribute datingMethod already there (in [att.datable.custom](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.datable.custom.html)). Vote for att.calendarSystemSB: Argument against deprecating calendar since it is a corrigble error, but Duncan argues that it needs to deprecated because the change will cause errors in the code.JT: Which elements do we deprecate calendar from?RV: Query regarding period attribute within att.datable, should it move with calendar into the new attribute class.JT: Evaluate the notes/remarks on the att.datable attributes to ensure that the usage of these attributes is clear for users.**Action on calendar attribute ticket:** EBB: added a comment on Council’s decision to the ticket. Keep calendar only for \<date\>, \<time\>, \<origDate\>, \<docdate\>, deprecate calendar from other elements with att.datable for a 18 month period and proceed to make the new class att.calendarSystem for calendar and link the attributes to it (to Nov 9ish, 2024\). **Action on RV:** to set up the deprecation using the validUntil mechanism to every attribute that it is being deprecated from. Need to update the table list of the elements that use calendar attribute currently. Incorporate following note from the att.datable page in the deprecation comment: “Note that the calendar attribute (unlike datingMethod defined in [att.datable.custom](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.datable.custom.html)) defines the calendar system of the date in the original material defined by the parent element, *not* the calendar to which the date is normalized.” **Action: EBB** updated title of issue [\#2213](https://github.com/TEIC/TEI/issues/2213) from att.datablecustom to datingPoint. **Action: JT** is looking at documentation on dating and is opening an omnibus ticket to connect all the related calendaric/datable tickets we need to cope with. **Related discussion on \<docDate\> ticket:** Why is docDate not in att.datable? JT has opened ticket [\#2432](https://github.com/TEIC/TEI/issues/2432). RV and SB we want this for only one situation, intentionally more restrictive to be specialised otherwise you could use \<date\>, see [\<docDate\> spec page](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-docDate.html). EBB and JJ: Need calendar to be added to \<docDate\>. JT: We need more than just calendar under \<docDate\>. SB: Any examples where the context can not be converted to a single Gregorian date. \<docDate\> is insufficient to encode the dates. JJ: Has example title pages to add to the ticket. EBB: has added an example of an date on a title page that can not be expressed in a Gregorian date. **Action on RV:** Status Go on docDate ticket. |
| \#2370 | B | [\#2370](https://github.com/TEIC/TEI/issues/2370) Datatypes using 'token' permit whitespace even when they probably shouldn't | HBS and SB: asking Council which way to go — allow leading \& trailing whitespace or not? Discussion: EBB wrote to Hugh on the ticket if we should just revise the remarks on teidata.word. |
| [\#1744](https://github.com/TEIC/TEI/issues/1744) | C | Add contextually\-variant content models to ODD | discussed this in the Monday morning session. Status is go for implementation. |

