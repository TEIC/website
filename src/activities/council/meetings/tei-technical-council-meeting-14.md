---
layout: page.njk
title: "TEI Technical Council Meeting,"
creator: TEI Technical Council
---
# TEI Technical Council Meeting,



**Participants:** Syd Bauman (SB), Lou Burnard (LB), Hugh Cayless
 (HC), Fabio Ciotti (FC), James Cummings (JC) (Chair), Martin Holmes (MH), Elli
 Mylonas (EM), Paul F Schaffner (PFS), Peter W Stadler (PWS)


**Intermittently participating remotely:** Sebastian Rahtz (SR),
 Stefanie Gehrke (SG)



 Actions
 
 * **Action: All members of council interested in TEI Simple to
 join the mailing list** <https://web.maillist.ox.ac.uk/ox/subscribe/teisimple>
* **Action: on LB Set up a mailing list to discuss ODD/Pure
 ODD**, etc. (Done; see [https://sourceforge.net/p/tei/mailman/?source\=navbar](https://sourceforge.net/p/tei/mailman/?source=navbar))
* **Action: on ALL interested in ODD/Pure ODD, join tei\-odds
 mailing list** [https://sourceforge.net/p/tei/mailman/?source\=navbar](https://sourceforge.net/p/tei/mailman/?source=navbar)
* **Action: LB to continue development/implementation of Pure
 ODD with SR and report back to council on new developments**
* **Action: JC to try to find a co\-organiser for DH2015 TEI
 HackAThon.**
* **Action: PWS to revise the draft correspDesc proposal and
 draw attention to council for final review before implementing as part
 of the TEI Guidelines.**
* **Action: SB/MH/LB to offer themselves as TEI mentors to
 members of Council and encourage new members to ask them (or council)
 questions.**
* **Action: MH to post to council mailing list making
 suggestions for mentorship programme**
* **Action: LB volunteers to mentor Stefan.**
* **Action: MH to act as JTEI liaison for now, reporting on
 any major changes to JTEI Schema and authoring package.**
* **Action: MH to separate out anything that shouldn’t be
 public in the JTEI Schema, merge in schematron constraints,
 documentation, etc. and add to TEI Sourceforge Repository. Add JTEI
 Authoring environment to the oxygen\-tei framework.**
* **Action: on MH to implement @resp changes, and update prose
 and examples in Guidelines to have @resp point to respStmt
 (etc.)**
* **Action: SB to inform council in future about developments
 of this draft (LOC date attrs) e.g. if it might be adopted by ISO or W3C
 etc.**
* **Action: LB to create tickets for the 2 new
 elements**
* **Action: ALL to read the draft (link above) and be ready to
 comment on it at next conference call (or soon thereafter)**
* **Action: JC to create a proposal listing those parts which
 are required for generation of the TEI products (Guidelines, schemas
 etc.)**
* **Action: JC to add each council member as a member of a
 team with admin powers to the TEI\-C github organization**
* **Action: PWS/MH to update SVN Documentation and include
 information concerning GitHub**
* **Action: PWS to return to Council mailing list with call
 for testing or suggestions on improvement for a TEI Checker web service
 in the next few weeks, and Council to respond with suggested
 improvements.**
* **Action: HC to produce an updated Critical Apparatus ODD
 and redraft document for Council discussion.**
* **Action: on JC, MH, HC, SB consider wherever possible
 writing additional documentation, blog posts, or similar on the
 technical aspects presented, and notify council or TEI\-L.**
* **Action: On ALL to look at tickets assigned to them and
 update them with latest status, and implement where
 possible.**




 Monday 2014\-11\-17
 
 
 TEI Simple
 
 
- JC reports on TEI Simple and notes his TEI Conference paper, at [https://github.com/TEIC/TEI\-Simple/blob/master/advisory/report\-teimm\-2014\.pdf?raw\=true](https://github.com/TEIC/TEI-Simple/blob/master/advisory/report-teimm-2014.pdf?raw=true)

- The TEI Simple proposal will be presented to Council toward the end of
 the project. If approved by Council, it has been previously agreed (and
 is an explicit part of the bid) that TEI Simple will be integrated into
 the TEI structure thenceforth, i.e. it will become something to be
 maintained by Council as part of TEI. The character of the documentation
 has yet to be fully determined, but it would take the advice of Council
 on the creation of it. SR notes that novice documentation is the first
 priority. JC:Mellon funding goes until through July of 2015, by which
 time it is to be expected that the project will have created a
 processing model, at least minimal documentation, and ‘TEI performance
 indicators’.

- The primary means of access to the project is the TEI Simple mailing
 list at <https://web.maillist.ox.ac.uk/ox/subscribe/teisimple> All of
 council were encourage to join.

- A discussion of how best to cope with a perceived need to upcode TEI
 Simple, perhaps by including the names of specific (non\-Simple) elements
 among the permitted values of the type attribute of more generic
 elements, reached instead the opposite consensus: that users of Simple
 should be encouraged to use specific elements, not generic ones; that
 Simple is designed to avoid ambiguity and excessive choice, not to keep
 the element count down to (e.g.) less than a hundred; and that if enough
 users of Simple need a specific element, that element should be added to
 Simple rather than depending on seg type\=”foo”. This has always been the
 mantra of TEI Simple, that “Simple does not necessarily mean small, but
 powerful.”

- **Action: All members of council interested in TEI
 Simple to join the mailing list** <https://web.maillist.ox.ac.uk/ox/subscribe/teisimple>





 Pure ODD
 
 
- LB: Apologies: discussion of contextual dependency issues not yet
 started. E.g. I have \<p\> in both header and text, and I want them
 to have different content models. This will be done soon.

- **Action: on LB Set up a mailing list to discuss
 ODD/Pure ODD**, etc. (Done; see [https://sourceforge.net/p/tei/mailman/?source\=navbar](https://sourceforge.net/p/tei/mailman/?source=navbar))

- **Action: on ALL interested in ODD/Pure ODD, join
 tei\-odds mailing list** [https://sourceforge.net/p/tei/mailman/?source\=navbar](https://sourceforge.net/p/tei/mailman/?source=navbar)

- Do we need \<textNode\>? or \<mixedContent\>? Decision is
 holding up completion of[introductory tutorial](http://tei.it.ox.ac.uk/Oxford/2014-10-odds/pureODDtutorial.xml). At our last discussion of this, we
 agreed that using @allowText for mixed content models was not a good
 idea. We liked the idea of \<mixedContent\> for text and element
 content arranged in the traditional way. However, later, it was argued
 that this was special\-casing something which wasn’t special; actually
 text nodes should be the special case. We have been representing text
 nodes with a macro, but we might instead use an element
 \<textNode\>. This allows the definition of content models which
 can’t be represented in current schema languages. SB comments that you
 can’t have a macro unless you have a primative \<textNode\> anyway.
 LB hopes Council will agree that we should have \<textNode\>, and if
 we have it, we no longer need the idea of \<mixedContent\>, which we
 all agreed to in Oxford. 
 




 stands for

- SB points out that \<mixedContent\> saves a bit of typing and
 provides an easy way to get an XML DTD\-compliant content model, but in
 no way is required. The general consensus was that \<mixedContent\>
 is going to be more trouble than it is worth, and that a separate
 \<textNode\> element is a good idea.

- LB points out that ODD uses two different types of macros:
	* standing in for datatype
	* standing in for a bit of ODD

- SR has proposed that we invent \<dataRef\> for the former purpose,
 to make the distinction clearer (ticket 530 later in meeting). In the
 short term it would point to W3C datatypes, but in future, SB points
 out, we can use it to point to other datatype libraries/systems; he
 points out that Jeni Tennison has created a language for describing
 datatypes. (See <http://www.jenitennison.com/datatypes/DTLL.html> for the
 Datatype Library Language.)

- LB notes the latest version of Pure ODD tutorial developed for recent
 tutorials: [http://tei.it.ox.ac.uk/Oxford/2014\-10\-odds/pureODDtutorial.xml](http://tei.it.ox.ac.uk/Oxford/2014-10-odds/pureODDtutorial.xml)
 for Council consideration. SR reports on the ODD workshop at Evanston,
 that there weren’t major misunderstandings about Pure ODD. LB discusses
 timescale for future improvements and development including when to
 convert the guidelines to Pure ODD. Converting the content models to
 Pure ODD will involve lots of testing. Also Stylesheets will need to be
 updated, particularly in the presentation of reference documentation. We
 shouldn’t have major upgrades to documentation at the same time. The
 reference pages currently toggle content models between the two syntaxes
 of RELAX NG but this would be problematic in Pure ODD. What do we show?
 Pure ODD, or option to see that in schema language of your
 choice?

- After the meeting the SB noted that Council’s much earlier decision of
 [Fri 2003\-06\-16 (point 8\)](/Activities/Council/Meetings/tcm07.xml) still makes sense to him: 
 
Council debated at some length which schema language should be
 used, and the extent to which it should be exposed to users of
 the Guidelines, before voting on the following propositions:



	
	- The maintenance form for the definition of the TEI schema
	 should be RelaxNG
	
	- In the printed form of the Guidelines, formal definitions
	 for elements should be given using the RelaxNG ‘compact’
	 syntax
	
	- In digital versions of the Guidelines, formal definitions
	 should be available in one or more of the available schema
	 languages (DTD, W3C schema, RelaxNG) as a user\-configurable
	 option
	
	- It should be possible for users to define extensions in
	 any of the three schema languages
	
	Each of the above motions was carried unanimously.

- JC, also after the fact, noted that these decisions are entirely up
 for review as part of the development, implementation, documentation,
 and adoption of Pure ODD and we shouldn’t feel bound by them, but if SB
 wants to make this argument then the TEI ODDs mailing list is the
 appropriate place.

- Does the Big Push to Pure ODD wait until contextual constraints are
 solved? Discussion of what these would be, and how they’d be
 implemented. MH suggests “if we are going to do it, lets do it right”.
 Bootstrapping problem that we don’t have enough experience with Pure
 ODD, so not sure we have enough knowledge of the problems yet.

- Roadmap: Once Pure ODD has \<textNode\> and \<dataRef\>
 functionality then that should be considered Pure ODD version 1\.0\.
 Adding contextual dependency, perhaps as a 2\.0 release, requires
 notation and implementation.

- **Action: LB to continue development/implementation of
 Pure ODD with SR and report back to council on new
 developments**





 TEI DH2015 HackAThon
 
 
- Syd, James, Martin plan to be at DH 2015\. Conal Tuohy will presumably
 be there too, as well as others from Australia with a technical TEI bent
 who could be approached as well.
 
	
	- LB suggests a build\-a\-TEI\-website project (50 texts with
	 images, use some standard CMSes, eXist, etc.)
	
	- ODD Visualization
	 
		
		- MH suggests a tool that compares two project ODDs or
		 RELAX NG schemas and shows how they intersect. SB thinks
		 Michael Sperberg\-McQueen has already created a version
		 of such a tool for DTDs.
	
	- FC suggests a TEI XQuery function library.
	
	- EM suggests instead of “hackathon” we could call it the “TEI
	 Build an XQuery Library” workshop if it’s going to be focussed
	 in this way — the TEI is determining the task in advance.
	
	- Who will run it? Can we find an Australian to (co\-)organize
	 it?

- Consensus is generally that building a TEI XQuery function library (to
 create all sorts of interesting output) would be a good topic.

- **Action: JC to try to find a co\-organiser for DH2015
 TEI HackAThon.**





 Correspondence
 
 
- Some pointers:
 
	
	- SF Ticket: [https://sourceforge.net/p/tei/feature\-requests/510/](https://sourceforge.net/p/tei/feature-requests/510/)
	
	- Evanston talk: [https://docs.google.com/document/d/16DTp789wkrhPXH\_79zexSy8wHWZId7W\-RZkO4e1BAGM/edit?usp\=sharing](https://docs.google.com/document/d/16DTp789wkrhPXH_79zexSy8wHWZId7W-RZkO4e1BAGM/edit?usp=sharing)
	
	- GitHub repo: [https://github.com/TEI\-Correspondence\-SIG/correspDesc](https://github.com/TEI-Correspondence-SIG/correspDesc)

- PWS summarised current state of Correspondence proposals.

- Council nit\-picked over details hoping tease out a generalised
 solution.

- The general consensus seems to be:
 
	
	- \<correspDesc\> will be repeatable because it will be a
	 member of model.profileDescPart.
	
	- \<correspDesc\> will contain one or more
	 \<correspAction\> elements in sequence representing
	 correspondence actions such as sending, receiving, signing, etc.
	
	- Each of those elements should contain an identifier such as
	 \<persName role\=”something”\> (but potentially orgName,
	 name, etc.), places and dates and possibly an element describing
	 the transmission.
	
	- \<correspDesc\> will be a member of att.declarable so that
	 each can be pointed at by a specific letter, in the case where
	 you have a single document containing multiple letters.
	
	- The documentation will give clear guidelines on how to use the
	 range of different options to represent correspondence in
	 different configurations (single letter in a single TEI file,
	 anthology in a single TEI document with \<group\>,
	 etc.).
	
	- Council agrees in principle to the proposal (with changes
	 suggested) and action on PWS to revise the draft and draw
	 attention to council for final review.
	
	- The idea of a separate Module was rejecting feeling that this
	 should just become part of the header module.
	
	- Documentation should go into the Header chapter at
	 2\.4\.6
	
	- Elements and classes are to be defined in the header
	 module

- **Action: PWS to revise the draft correspDesc proposal
 and draw attention to council for final review before implementing
 as part of the TEI Guidelines.**





 Ticket Processing
 
 Council broke into groups to discuss tickets and report back. Notes on
 deliberations over tickets are at the bottom of this document organised by
 colour (Amber / Green / Red) and type (FR / Bug). In this first day we got
 to just before Group A’s Amber FR 516\.





 Tuesday 2014\-11\-18
 
 
 Council Mentoring Programme
 
 
- Suggestion of assigned mentors for new members to help new council
 members gain familiarity with setup of TEI working practices and
 technologies.

- SB, MH, and LB volunteer **Action: SB/MH/LB to offer
 themselves as TEI mentors to members of Council and encourage new
 members to ask them (or council) questions.**

- JC noted that any general questions could be put on: [http://wiki.tei\-c.org/index.php/TEI\-Council\-FAQ](https://wiki.tei-c.org/index.php/TEI-Council-FAQ)

- PWS suggests direction should come from the Mentor to the mentoree,
 i.e. not passively wait for questions but make sure the person
 understands workflows etc.

- MH suggests working through a straightforward ticket with new members,
 and pointing to clear case study of ticket done correctly.

- **Action: MH to post to council mailing list making
 suggestions for mentorship programme**

- **Action: LB volunteers to mentor Stefan.**





 JTEI Schema and authoring package
 
 
- MH describes JTEI Schema and authoring package

- Discussion over policy of adoption of customizations: under what
 circumstances does the TEI Council adopt maintenance of customizations.
 Should there be a council liaison to JTEI? General consensus that there
 should be. **Action: MH to act as JTEI liaison for now,
 reporting on any major changes to JTEI Schema and authoring
 package.**

- Should the schema be adopted as an "official" customization, and
 should the authoring package be integrated into the oxygen\-tei plugin?
 (MH)

- Council agrees to adopt customization assuming JTEI continues to
 support it and the authoring package.

- Council thinks that it should only adopt things created by the TEI
 Consortium (lite, tite, jTEI, TE\-Simple all fit).

- **Action: MH to separate out anything that shouldn’t be
 public in the JTEI Schema, merge in schematron constraints,
 documentation, etc. and add to TEI Sourceforge Repository. Add JTEI
 Authoring environment to the oxygen\-tei framework.**





 Global @resp and friends (MH, LB, HC)
 
 
- Notes from sub\-council working group are available at: [http://wiki.tei\-c.org/index.php/Global\_@resp\_attribute](https://wiki.tei-c.org/index.php/Global_@resp_attribute)

- Discussion concerning global @resp, global @cert, and possibility of
 global @source

- Choices for @resp seem to be:
	* rename att.responsibility (including @cert)
	 att.global.responsibility; make att.global inherit it
	* *Create new global attribute @respRef with
	 enforcing with schematron that it must point to a respStmt* \[not popular]
	* Modify @resp to have schematron rule that it should point to a
	 \<respStmt\> and warn when this isn’t the case

- A majority of Council voted in favour of approach (a), and furthermore
 to re\-visit (c) in \~ 1 year. The chair abstained but his voice would
 have not swayed Council from letting more attributes become global. We
 will also change the prose and examples in the Guidelines to indicate
 that best practice is to point from @resp to a \<respStmt\> or other
 things inside \<titleStmt\>. **Action: on MH to
 implement @resp changes, and update prose and examples in Guidelines
 to have @resp point to respStmt (etc.)**

- We will separately address the @source proposal on the wiki page at a
 later meeting. (HC)





 LOC date attrs (SB; see LOC draft standard)
 
 
- See [LOC
 draft standard](http://loc.gov/standards/datetime/pre-submission.html) ([http://loc.gov/standards/datetime/pre\-submission.html](http://loc.gov/standards/datetime/pre-submission.html))

- "*This specification defines features to be supported
 in a date/time string, features considered useful for a wide variety
 of applications. It takes the form of a profile of / extension to
 ISO 8601, the International Standard for the representation of dates
 and times. ISO 8601 describes a large number of date/time formats.
 On one hand some of these formats are redundant and/or not very
 useful; to reduce the scope for error and the complexity of
 software, it seems worthwhile to restrict the supported formats to a
 smaller set. On the other hand, there are a number of date and time
 format conventions in common use that are not included in ISO 8601;
 it seems worthwhile to normalize these.*"

- SB draws attention of Council to this ISO 8601 extension for future
 consideration.

- Questions include: What it includes? What is its status? and can we
 create a regex for it?

- The date formats have a formal expression using BNF syntax in the
 draft document.

- **Action: SB to inform council in future about
 developments of this draft (LOC date attrs) e.g. if it might be
 adopted by ISO or W3C etc.**





 ISO\-TEI Workgroup on Speech Transcription 
 
 (LB; see <http://bit.ly/1jyZC37>
 “final draft oct 2014") recommends two new elements:



- \<transcriptionDesc\> “describes the set of transcription
 conventions used”; FC points out that the tag name evokes different
 connotations with philologists; maybe think of changing the name or make
 it work genericly

- \<annotatedU\> “groups an utterance with the annotation layers
 associated with it”

- **Action: LB to create tickets for the 2 new
 elements**

- **Action: ALL to read the draft (link above) and be
 ready to comment on it at next conference call (or soon
 thereafter)**





 XSLT Stylesheets on Github
 
 
- Council reiterated that they were not moving Guidelines development to
 GitHub but had generally finished moving any associated software
 development to GitHub. However, we need to specify what part of the
 Stylesheets are under maintenance of the TEI Council. **Action: JC to create a proposal listing those parts which are
 required for generation of the TEI products (Guidelines, schemas
 etc.)**

- We have added a label to GitHub so issues can be labelled
 "CouncilResponsibility".

- **Action: JC to add each council member as a member of a
 team with admin powers** \[Done]

- Set up best practice guidelines for working with the GitHub repo(s)
 and SVN repo and use them in the same way.

- **Action: PWS/MH to update SVN Documentation and include
 information concerning GitHub**





 Ticket Processing
 
 Council initially discussed remaining tickets in plenary that were discussed
 by groups on the previous day, starting at Group A’s Amber FR 516\. Ending at
 C 384\.




 Happy Birthday Hugh Cayless
 
 Council sang Happy Birthday, slightly out of tune, to HC. Happy Birthday
 Hugh! Later that evening at supper at a colleague of Hugh’s house, a cake
 mysteriously appeared with \<hugh/\> element on it because Council
 informed the host in advance that it was Hugh's birthday.





 Wednesday 2014\-11\-19
 
 
 Tweet Chat
 
 
- TEI\-C Tweet Chat from the Libraries SIG. starts at 10AM Duke
 time

- Council participated productively in the Tweetchat while undertaking
 other discussions.





 TEI Validation/Checker Service (PWS)
 
 
- Formally specify what a TEI conformant document is?
 
	
	- there was some controversy about this and also about whether
	 the validator should be checking for conformance or validating
	 or profiling.
	
	- JC: Notes that true conformance checking is more than
	 validating and probably impossible to programmatically determine
	 since it involves proper adherence to the prose based abstract
	 model.

- A service for non\-TEI people to get details of the TEI document

- Not just a question of validation against tei\_all.

- PWS describes infrastructure of the checker and types of validation it
 does.

- JC notes the potential relationship to the ‘performance indicators’ of
 TEI Simple. Possibility to have it work inside teh oxygen\-tei framework
 as well?

- Consensus favourable about TEI\-C hosting such a service, though some
 uncertainty about its useability.

- **Action: PWS to return to Council mailing list with
 call for testing or suggestions on improvement for a TEI Checker web
 service in the next few weeks, and Council to respond with suggested
 improvements.**





 Critical Apparatus proposal update (HC)
 
 
- [https://docs.google.com/document/d/10R5FfpvCh9v2c2zeG1hgYMcyuT8o\-PfHiaWYVrLf56k/edit](https://docs.google.com/document/d/10R5FfpvCh9v2c2zeG1hgYMcyuT8o-PfHiaWYVrLf56k/edit)

- Council discussed the document.

- HC will produce an experimental ODD and a redraft of the document for
 further discussion

- The MS\-SIG plans to spawn a working group to work on drafting a
 thoroughly revised Critical Apparatus chapter of the TEI Guidelines.

- **Action: HC to produce an updated Critical Apparatus
 ODD and redraft document for Council discussion.**





 Technical Presentations On TEI Infrastructure (Various)
 
 
- JC presents on the mechanics of OxGarage using a presentation designed
 for teaching other things: [http://tei.it.ox.ac.uk/Talks/2014\-11\-warsaw/talk\-tc\-oxgarage.pdf](http://tei.it.ox.ac.uk/Talks/2014-11-warsaw/talk-tc-oxgarage.pdf)

- MH presents on the nature of the teitoX stylesheets and how parameters
 are passed through them to underlying xslt via ant. This presentation
 traced a very simple transformation (teitotxt) through its initiation at
 the command line to transformtei, to ant, and to Saxon. Then he
 demonstrated how a single parameter finds its way through the process,
 acquiring a couple of different names on the way.
 <http://hcmc.uvic.ca/people/martin/tei/anatomy_of_a_transformation.pdf>

- HC presents on the use of git/github for forking and doing a major bit
 of work for the Guidelines. git\-svn used.

- SB presents on tracking down extract\-isosch.xsl and where it gets its
 parameters, and how Schemtron is extracted, and how deprecation gets
 built. This includes mentioning that we do not (and perhaps cannot?)
 build the @context for a \<constraint\> (that does not itself
 already have an @context) inside an \<attDef\> inside a
 \<classSpec\> properly.

- Consensus was that having some short technical infrastructure
 presentations was a positive thing.

- **Action: on JC, MH, HC, SB consider wherever possible
 writing additional documentation, blog posts, or similar on the
 technical aspects presented, and notify council or
 TEI\-L.**





 Ticket Processing
 
 
- Council reviewed a number of specific and difficult tickets to finish
 the morning. After lunch several members of Council adjourned to the
 hotel to work on tickets, discuss implementation options, and depart for
 flights home.





 Thanks
 
 
- JC: Thanked all members in person and remote who participated, and
 especially HC for being the local organiser. JC reminded council members
 to look over draft minutes and he would edit them slightly and post to
 the TEI\-C website. Also **Action: On ALL to look at
 tickets assigned to them and update them with latest status, and
 implement where possible.**






 Tickets 
 
 Remit: Break into groups, discuss ticket, come to decision (implement, reject,
 further discussion) or summarise any problems with implementing (why are we
 waiting) and what can be done about it. If trivial feel free to implement
 immediately.



 Amber Feature Requests
 
 See <http://tinyurl.com/teiCouncilAmberFR> for an up\-to\-date list of
 Amber Feature Requests.
 Groups:


A \= HC, SB, FC


B\= LB, PFS, EM


C\= PWS, MH, JC




| GRP | \# | Summary | Owner | Creator | Created | Updated | COUNCIL NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | [534](https://sourceforge.net/p/tei/feature-requests/534/) | [add \<space\> to att.typed](https://sourceforge.net/p/tei/feature-requests/534/) |  | Wout Dillen | 2 days ago | 2 days ago | **Closed\-fixed by SB** |
| A | [533](https://sourceforge.net/p/tei/feature-requests/533/) | [Add profileDesc as optional child biblFull](https://sourceforge.net/p/tei/feature-requests/533/) | HC | Laurent Romary | 2 days ago | 2 days ago | add queries to ticket (HC); **assigned to  HC** |
| A | [532](https://sourceforge.net/p/tei/feature-requests/532/) | [tag major xslt releases so specific versions can be  identified](https://sourceforge.net/p/tei/feature-requests/532/) | Sebastian Rahtz | Elli Mylonas | 2014\-10\-31 | 2014\-11\-07 | **Council agrees, there should be discrete  identifiable releases that projects like EpiDoc and our own  Guidelines can refer to.** |
| B | [531](https://sourceforge.net/p/tei/feature-requests/531/) | [New element for secluded text](https://sourceforge.net/p/tei/feature-requests/531/) | Hugh A. Cayless | Hugh A. Cayless | 2014\-10\-17 | 2014\-10\-18 | is this too rare? \[LB] Are there alternative generic means to mark  a span of displaced text as being of uncertain original placement?  \[PFS] Also, if accepted, the element name “\<secl\>” is a  non\-starter (LB). \<misplaced\>? **Council agrees  \<setAside\> Green, assign to HC to come up with a content  model and example(s).** |
| B | [530](https://sourceforge.net/p/tei/feature-requests/530/) | [a new ODD element for pointing at datatypes](https://sourceforge.net/p/tei/feature-requests/530/) |  | Sebastian Rahtz | 2014\-10\-06 | 2014\-10\-06 | note in ticket. Yes; **Council agrees, assigned to  LB** |
| B | [529](https://sourceforge.net/p/tei/feature-requests/529/) | [A method for marking a feature as "beta" in the  Guidelines](https://sourceforge.net/p/tei/feature-requests/529/) |  | Martin Holmes | 2014\-10\-05 | 2014\-10\-05 | Council believes beta features should never make it into a  release, so this feature is not required. Close the ticket  won’t\-fix. **Action on HC/MH/SB to document different  ways to make/build proposals.** |
| C | [528](https://sourceforge.net/p/tei/feature-requests/528/) | [TEI Vault page has no info on recent releases](https://sourceforge.net/p/tei/feature-requests/528/) |  | Martin Holmes | 2014\-09\-22 | 2014\-09\-22 | **Done. Closed the ticket.** |
| C | [527](https://sourceforge.net/p/tei/feature-requests/527/) | [Replace current eXist for Roma with updated  version](https://sourceforge.net/p/tei/feature-requests/527/) |  | Martin Holmes | 2014\-09\-18 | 2014\-09\-19 | **Make Green; Assign to PWS.** |
| C | [526](https://sourceforge.net/p/tei/feature-requests/526/) | [Create a Jenkins job for building oxygen\-tei](https://sourceforge.net/p/tei/feature-requests/526/) |  | Martin Holmes | 2014\-09\-18 | 2014\-09\-18 | **Make Green; Assign to MH.** |
| A | [525](https://sourceforge.net/p/tei/feature-requests/525/) | [translated from](https://sourceforge.net/p/tei/feature-requests/525/) |  | Fxp33 | 2014\-09\-14 | 2014\-09\-14 | Group suggests that Council take no action until requestor  re\-formulates the request.**Agreed** |
| A | [524](https://sourceforge.net/p/tei/feature-requests/524/) | [assign \<summary\> to a content model like  noteLike](https://sourceforge.net/p/tei/feature-requests/524/) |  | Torsten Schassan | 2014\-09\-01 | 2014\-09\-01 | **has already been fixed (on 2014\-06\-30 in r12920 by  Stephanie). Ticket closed.** |
| A | [523](https://sourceforge.net/p/tei/feature-requests/523/) | [Allow @notation in \<pVar\> element](https://sourceforge.net/p/tei/feature-requests/523/) |  | Jack Bowers | 2014\-08\-17 | 2014\-08\-17 | SB to ask LR; **Assigned to SB.** |
| B | [522](https://sourceforge.net/p/tei/feature-requests/522/) | [Create att.global.styling for @rend, @rendition, and  @style](https://sourceforge.net/p/tei/feature-requests/522/) |  | Martin Holmes | 2014\-07\-31 | 2014\-09\-25 | **go for it; Agreed.** |
| B | [521](https://sourceforge.net/p/tei/feature-requests/521/) | [Allow \<lem/​\> to Contain Chunk\-Level Markup](https://sourceforge.net/p/tei/feature-requests/521/) |  | Gregor Middell | 2014\-07\-31 | 2014\-08\-26 | this is a major change, fraught with possible unintended  consequences, but it’s important and useful and many people want  it.; **Council: More thought needed assign to HC to  look at with text critical proposals.** |
| B | [520](https://sourceforge.net/p/tei/feature-requests/520/) | [@selector attribute for the \`\<rendition\>\`  element](https://sourceforge.net/p/tei/feature-requests/520/) |  | Martin Holmes | 2014\-07\-15 | 2014\-07\-15 | At first glance, a clever way to smuggle an entire CSS (\+xpath)  style sheet (perh for display really rather than rendition proper)  into the TEI. Reproduces existing functionality (by reversing the  direction of the reference between element and style), but adds  considerable efficiency. \[PFS] The additional suggestion of  selectorScheme may be pushing things too far \[LB]. What is the  default selectorScheme if none is specified? CSS? \[pfs] How to  handle local overrides (or cumulative additions?) Or other conflicts  between style selected at the global level and style selected at the  level of the individual element instance. \*Eligible for group  discussion.\* Alternatively, omit the xpath option, but include only  @selector (defined as CSS); leave addition of an xpath @match  attribute to possible later addition if needed. **Assigned to MH to follow up, especially with regard to the  tagusage/@render mechanism.** |
| C | [519](https://sourceforge.net/p/tei/feature-requests/519/) | [precision should be a member of att.datable\*](https://sourceforge.net/p/tei/feature-requests/519/) | MH | Frederik | 2014\-07\-10 | 2014\-07\-10 | **Make Green, assign to MH** |
| C | [518](https://sourceforge.net/p/tei/feature-requests/518/) | [state (or model.\*StateLike) should contain  precision](https://sourceforge.net/p/tei/feature-requests/518/) |  | Frederik | 2014\-07\-10 | 2014\-07\-10 | **Make green, assign to PWS** |
| C | [517](https://sourceforge.net/p/tei/feature-requests/517/) | [transcription of quranic "end of ayah"\-sign](https://sourceforge.net/p/tei/feature-requests/517/) |  | Tobias J. Jocham | 2014\-07\-07 | 2014\-07\-07 | Not Sure. Lou made good suggestions about ways to answer the  requirement on the ticket. **Assigned to  EM** |
| A | [516](https://sourceforge.net/p/tei/feature-requests/516/) | [tagsDecl needs to be explicit as to whether it documents all  tags present in a document](https://sourceforge.net/p/tei/feature-requests/516/) |  | Lou Burnard | 2014\-07\-02 | 2014\-07\-02 | Subgroup thinks implementing w/ default partial\=false makes sense;  bringbefore whole Council; **Council dislikes the  default value, but otherwise supports ticket to create a  @partial attribute. Assigning to SB, GREEN.** |
| A | [515](https://sourceforge.net/p/tei/feature-requests/515/) | [re\-think model.global's membership and use in  \<line\>](https://sourceforge.net/p/tei/feature-requests/515/) |  | Syd Bauman | 2014\-07\-02 | 2014\-07\-02 | We can’t find any minutes on how or whether we decided to  implement 485, the ticket this was created in response to. (MH  suggests signalling the change between types of transcription in the  chapter.) **Assigned to LB.** |
| A | [511](https://sourceforge.net/p/tei/feature-requests/511/) | [New element \<transcriptionDesc\> as a possible child of  \<encodingDesc\>](https://sourceforge.net/p/tei/feature-requests/511/) |  | Thomas Schmidt | 2014\-06\-26 | 2014\-07\-01 | Ticket status unchanged: still waiting on spoken language  proposal. **Assign to MH; set to  open\-later.** |
| B | [510](https://sourceforge.net/p/tei/feature-requests/510/) | [add a correspondence module and elements for capturing  correspondence specific meta data](https://sourceforge.net/p/tei/feature-requests/510/) | Peter Stadler | Peter Stadler | 2014\-06\-20 | 2014\-07\-01 | **PWS to make note on ticket** |
| B | [507](https://sourceforge.net/p/tei/feature-requests/507/) | [create generic policy for the TEI on integration of external  standards](https://sourceforge.net/p/tei/feature-requests/507/) | Syd Bauman | Kevin Hawkins | 2014\-05\-10 | 2014\-07\-01 | **Agreed; kick syd.** |
| B | [505](https://sourceforge.net/p/tei/feature-requests/505/) | [Redefine \<msPart\>](https://sourceforge.net/p/tei/feature-requests/505/) | Stefanie Gehrke | Caroline T. Schroeder | 2014\-04\-29 | 2014\-07\-01 | Stefanie sent a [document](https://docs.google.com/document/d/1bpBPughQp5sOoB13iTMHMeRd88Mjv12_eGZiQXY-na8/edit?usp=sharing) to PWS; **Action: All Council need  to read document** |
| C | [504](https://sourceforge.net/p/tei/feature-requests/504/) | [Replace @active and @passive on relation with @from and  @to](https://sourceforge.net/p/tei/feature-requests/504/) | Hugh A. Cayless | Hugh A. Cayless | 2014\-04\-21 | 2014\-08\-16 | HC is in discussion with SR LB. This ticket is in process, but  nothing to do now. **HC to summarize current  discussion on ticket.** |
| C | [501](https://sourceforge.net/p/tei/feature-requests/501/) | [Add notion of model.resourceLike to description of  teiHeader](https://sourceforge.net/p/tei/feature-requests/501/) | Peter Stadler | Peter Stadler | 2014\-03\-17 | 2014\-03\-18 | **Agreed: PWS goes on to identify those locations  and puts them in the ticket. Asks council to look and then fixes  them.** |
| C | [498](https://sourceforge.net/p/tei/feature-requests/498/) | [Permit new \<persona\> as a child of  \<person\>](https://sourceforge.net/p/tei/feature-requests/498/) | Lou Burnard | David J Birnbaum | 2014\-02\-22 | 2014\-07\-01 | Last action was to ask DJB to provide a proposal for a persona  element. Has this been done? Any idea on the status? **LB to follow up.** |
| A | [496](https://sourceforge.net/p/tei/feature-requests/496/) | [\`\<taxonomy\>\` should be allowed as a child of  \`\<category\>\`](https://sourceforge.net/p/tei/feature-requests/496/) | Paul Schaffner | Martin Holmes | 2014\-01\-31 | 2014\-08\-16 | Was awaiting better example from MH. Has provided one, will  provide one more. **Assign to MH.** |
| A | [492](https://sourceforge.net/p/tei/feature-requests/492/) | [Allow bibl inside app](https://sourceforge.net/p/tei/feature-requests/492/) | James Cummings | Hugh A. Cayless | 2014\-01\-16 | 2014\-09\-04 | Action recommended looks good: create model.appPart. **Council: make green and leave as assigned (to  JC).** |
| A | [490](https://sourceforge.net/p/tei/feature-requests/490/) | [un\-bundle @cert and @resp](https://sourceforge.net/p/tei/feature-requests/492/) | Martin Holmes | Hugh A. Cayless | 2013\-12\-18 | 2014\-07\-02 | Closed this; it’s obviated by earlier decisions about @resp  etc. |
| B | [489](https://sourceforge.net/p/tei/feature-requests/489/) | [Make teiHeader/​@type explicitly map to dc:type by using terms  from DCMI](https://sourceforge.net/p/tei/feature-requests/489/) | Paul Schaffner | Lou Burnard | 2013\-12\-16 | 2014\-05\-19 | Already assigned.; Recommendation: Close ticket. Add new ticket  for deprecation of @type on header **Action on PFS to  open ticket to deprecate @type on header, but then just do  it.** |
| B | [486](https://sourceforge.net/p/tei/feature-requests/486/) | [deprecating members of a content model](https://sourceforge.net/p/tei/feature-requests/486/) | Syd Bauman | Kevin Hawkins | 2013\-12\-08 | 2014\-07\-01 | **Make GREEN, assign others to SB to implement in  schematron** |
| B | [485](https://sourceforge.net/p/tei/feature-requests/485/) | [add element rs as member of model.linePart](https://sourceforge.net/p/tei/feature-requests/485/) | Martin Holmes | Oliver Gasperlin | 2013\-11\-26 | 2014\-05\-19 | **Closed** |
| C | [482](https://sourceforge.net/p/tei/feature-requests/482/) | [The term strikes back \- terminology chapter](https://sourceforge.net/p/tei/feature-requests/482/) | Lou Burnard | Laurent Romary | 2013\-11\-06 | 2014\-08\-26 | Still waiting on a formal proposal. **Action on FC  to poke LR** |
| C | [480](https://sourceforge.net/p/tei/feature-requests/480/) | [Adding the @hand attribute to all (or most) text\-containing  elements](https://sourceforge.net/p/tei/feature-requests/480/) | Lou Burnard | Ville Marttila | 2013\-10\-29 | 2014\-10\-25 | this is very messy, needs to be discussed and probably broken out  into several discrete proposals: 1\. @hand is used in many ways 2\.  proposer wants to add it to more elements; **LB to  prod.** |
| C | [479](https://sourceforge.net/p/tei/feature-requests/479/) | [Adding the @place attribute to \<head\> and  \<seg\>](https://sourceforge.net/p/tei/feature-requests/479/) | Sebastian Rahtz | Ville Marttila | 2013\-10\-29 | 2014\-08\-26 | **SR to prod Ville** |
| A | [459](https://sourceforge.net/p/tei/feature-requests/459/) | [warn user of dropped constructs](https://sourceforge.net/p/tei/feature-requests/459/) | Syd Bauman | Syd Bauman | 2013\-06\-17 | 2013\-12\-08 | Largely handled by deprecation. Might relate to ‘validation  service’ issue? Close?**Council: Make Pending, Nag  SB.** |
| A | [457](https://sourceforge.net/p/tei/feature-requests/457/) | [make explicit difference between tagUsage and ODD  documentation](https://sourceforge.net/p/tei/feature-requests/457/) | Lou Burnard | Kevin Hawkins | 2013\-05\-24 | 2014\-06\-06 | This should go to a Council discussion of Kevin’s four questions.  Recommend doing this tomorrow morning, led by Lou, who has the  ticket, because tagUsage is fresh in our minds. … ended up talking  about it anyway. **Council:LB to follow  up.** |
| A | [453](https://sourceforge.net/p/tei/feature-requests/453/) | [a place for metadata that you can't fit into existing header  elements](https://sourceforge.net/p/tei/feature-requests/453/) | Paul Schaffner | Kevin Hawkins | 2013\-05\-13 | 2014\-01\-05 | Previous action (undone) from 2013 f2f: "Action: MH will offer  DC examples and PS will offer MARC examples. LB will pull them  together into some text to be inserted into the Guidelines.  Given this, Council will reconsider the feature request and  whether to create the wrapper element." Sub\-group thinks this  should be GREEN and implenteted: \<externalMetadata\> as a  member of model.teiHeaderPart; **Council: Assign  to SB / GREEN pending name. exoData xenoData** |
| B | [443](https://sourceforge.net/p/tei/feature-requests/443/) | [@resp should be a member of att.global](https://sourceforge.net/p/tei/feature-requests/443/) | Martin Holmes | Martin Holmes | 2013\-03\-11 | 3 days ago | **Already decided.** |
| B | [422](https://sourceforge.net/p/tei/feature-requests/422/) | [teitoX: support passing configuration to saxon](https://sourceforge.net/p/tei/feature-requests/422/) | Sebastian Rahtz | Louis\-Dominique Dubeau | 2013\-01\-10 | 2013\-11\-13 | **SR to report on status** |
| B | [387](https://sourceforge.net/p/tei/feature-requests/387/) | [allow \<head\> in more places in div\*, table, and  list](https://sourceforge.net/p/tei/feature-requests/387/) | Paul Schaffner | Kevin Hawkins | 2012\-09\-19 | 2013\-11\-13 | **solved with addition of trailer to  list/table/etc.** |
| C | [384](https://sourceforge.net/p/tei/feature-requests/384/) | [free\-standing attributes \-\> class](https://sourceforge.net/p/tei/feature-requests/384/) | Paul Schaffner | Sebastian Rahtz | 2012\-09\-15 | 2014\-05\-28 | Work for @type at least has been queued up by Rebecca in the  linked Google Doc. One question is how we should indicate suggested  values if @type is moved to att.typed. Council needs to make a plan  to implement this. **Council: PFS to report on  this.** |
| C | [378](https://sourceforge.net/p/tei/feature-requests/378/) | [Encoding of Standoff annotations](https://sourceforge.net/p/tei/feature-requests/378/) | Piotr Banski | Javier Pose | 2012\-08\-26 | 2014\-08\-20 | We have no idea what the status of this is. The last artifact  we have is [the minutes of the WG meeting in Berlin](https://docs.google.com/document/d/1QqJK08sff4ral0tadmNXs0j0VN5Yp-O7_mIsv2f-WjQ/edit#heading=h.odkayr64o4dg) from PWS.  **We need a formal proposal in order to  proceed.** |
| C | [360](https://sourceforge.net/p/tei/feature-requests/360/) | [New attribute @keepHyphen](https://sourceforge.net/p/tei/feature-requests/360/) | Paul Schaffner | Martin de la Iglesia | 2012\-05\-03 | 2013\-11\-11 | **Prod PFS to provide an example.** |
| A | [326](https://sourceforge.net/p/tei/feature-requests/326/) | [an \<object\> element](https://sourceforge.net/p/tei/feature-requests/326/) | Sebastian Rahtz | Sebastian Rahtz | 2011\-10\-14 | 2014\-08\-18 | **SR to poke SIG** |




 Amber Bugs
 
 See <http://tinyurl.com/teiCouncilAmberBugs> for an up\-to\-date
 list of Amber Bugs.




| GRP | \# | Summary | Owner | Creator | Created | Updated | COUNCIL NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | [699](https://sourceforge.net/p/tei/bugs/699/) | [self\-reference in macro.anyXML](https://sourceforge.net/p/tei/bugs/699/) |  | Jens Østergaard Petersen | 2014\-11\-05 | 2014\-11\-05 | **CLOSED. not a bug. SR answered.** |
| A | [697](https://sourceforge.net/p/tei/bugs/697/) | [sequence of  declaration info is lost when making an ODD](https://sourceforge.net/p/tei/bugs/697/) |  | Lou Burnard | 2014\-10\-31 | 2014\-11\-03 | MH \& SB to sort out before dinner and suggest a plan of  action… **Discussed and resolved over  dinner.** |
| A | [696](https://sourceforge.net/p/tei/bugs/696/) | [macro.paraContent doesn't contain l](https://sourceforge.net/p/tei/bugs/696/) |  | Hugh A. Cayless | 2014\-10\-18 | 2014\-10\-19 | This ticket appears to be submitted only the basis of symmetry,  not a real use\-case, so although it might be logical, we can reject  it unless or until there’s a real demonstrated need. Especially  since it brings up again the controversial addition of LG to P. **Closed.** |
| B | [695](https://sourceforge.net/p/tei/bugs/695/) | [distributed  spec files point at wrong schema location](https://sourceforge.net/p/tei/bugs/695/) | Peter Stadler | Peter Stadler | 2014\-10\-12 | 2014\-10\-12 | Proposal: Needs adding to the release process to replace to  relative or absolute location of schema: **PS/MH to  investigate and report back on correct solution.** |
| B | [693](https://sourceforge.net/p/tei/bugs/693/) | [allocation  of elements to module transcr](https://sourceforge.net/p/tei/bugs/693/) |  | Sebastian Rahtz | 2014\-09\-26 | 2014\-09\-26 | module fragmentation, **close\-wont\-fix.** |
| B | [692](https://sourceforge.net/p/tei/bugs/692/) | [Pointing  between terms and glosses](https://sourceforge.net/p/tei/bugs/692/) |  | Martin Holmes | 2014\-09\-23 | 2014\-09\-24 | Add at least an extra example other way around using @ref; **Assign to LB** |
| C | [691](https://sourceforge.net/p/tei/bugs/691/) | [Incorrect  note in model.phrase](https://sourceforge.net/p/tei/bugs/691/) | Hugh A. Cayless | Hugh A. Cayless | 2014\-09\-23 | 2014\-09\-23 | fix and close unless someone speaks up now; **HC to  implement** |
| C | [690](https://sourceforge.net/p/tei/bugs/690/) | [Misplaced  periods after examples](https://sourceforge.net/p/tei/bugs/690/) | MH | Martin Holmes | 2014\-09\-16 | 2014\-09\-16 | We don’t know where these are, but by all means, let’s fix them.;  **MH to fix.** |
| C | [688](https://sourceforge.net/p/tei/bugs/688/) | [TEILite  \`\<editorialDecl\>\` has bad example and weird content  model](https://sourceforge.net/p/tei/bugs/688/) | MH | Martin Holmes | 2014\-09\-09 | 2014\-09\-11 | Martin says it’s a corrigible error. **Assign to MH,  make green** |
| A | [687](https://sourceforge.net/p/tei/bugs/687/) | [TEILite has  @calendar, but no \`\<calendar\>\` element it can point  to](https://sourceforge.net/p/tei/bugs/687/) | LB | Martin Holmes | 2014\-09\-08 | 2014\-09\-08 | **Assign to LB** |
| A | [686](https://sourceforge.net/p/tei/bugs/686/) | [TEILIte  example shows cit/​quote, but quote is not allowed](https://sourceforge.net/p/tei/bugs/686/) | LB | Martin Holmes | 2014\-09\-08 | 2014\-09\-08 | **Assign to LB** |
| A | [684](https://sourceforge.net/p/tei/bugs/684/) | [multiple  lems in an app](https://sourceforge.net/p/tei/bugs/684/) | HC | Hugh A. Cayless | 2014\-09\-02 | 2014\-09\-08 | Modify note; **Assign to HC.** |
| B | [683](https://sourceforge.net/p/tei/bugs/683/) | [Wording for  \`\<add\>\` and \`\<del\>\` needs to be tightened  up](https://sourceforge.net/p/tei/bugs/683/) | MH | Martin Holmes | 2014\-08\-25 | 2014\-08\-25 | Should clarify description of supplied, note on add, and prose.  **Assign to MH** |
| B | [681](https://sourceforge.net/p/tei/bugs/681/) | [Datatype  change for att.typed](https://sourceforge.net/p/tei/bugs/681/) | PWS | Greg Murray | 2014\-08\-12 | 2014\-08\-12 | Change data.enumerated to data.word? (Why is valItem/@ident  data.text?!;**Assign to PWS** |
| B | [675](https://sourceforge.net/p/tei/bugs/675/) | [org should  allow model.global](https://sourceforge.net/p/tei/bugs/675/) | Fabio Ciotti | Martin Holmes | 2014\-06\-09 | 2014\-06\-30 | **Prod FC to report to Council, or just  implement.** |
| C | [647](https://sourceforge.net/p/tei/bugs/647/) | [data.enumerated !\= valItem/​@ident](https://sourceforge.net/p/tei/bugs/647/) | Syd Bauman | Syd Bauman | 2014\-02\-25 | 2014\-02\-26 | should be data.name. **SB to implement** |
| C | [630](https://sourceforge.net/p/tei/bugs/630/) | [use of  \<listRef\> in specs](https://sourceforge.net/p/tei/bugs/630/) | Lou Burnard | Kevin Hawkins | 2013\-12\-28 | 2014\-05\-19 | **LB to implement.** |
| C | [581](https://sourceforge.net/p/tei/bugs/581/) | [\`\<attRef\>\` needs better documentation](https://sourceforge.net/p/tei/bugs/581/) | Martin Holmes | Martin Holmes | 2013\-06\-24 | 2014\-09\-09 | LB SB MH this one is hard to understand, pls explain; **MH to report to council** |
| A | [563](https://sourceforge.net/p/tei/bugs/563/) | [inconsistent  encoding of citations to sources of examples](https://sourceforge.net/p/tei/bugs/563/) | Paul Schaffner | Kevin Hawkins | 2013\-04\-12 | 2014\-05\-30 | **JC to prod KH to comment.** |
| A | [548](https://sourceforge.net/p/tei/bugs/548/) | [use of modal  verbs in Guidelines](https://sourceforge.net/p/tei/bugs/548/) | Kevin Hawkins | Kevin Hawkins | 2013\-04\-08 | 2014\-05\-10 | **JC to chase up** |
| A | [216](https://sourceforge.net/p/tei/bugs/216/) | [half title  pages in TEI Tite](https://sourceforge.net/p/tei/bugs/216/) | Syd Bauman | Kevin Hawkins | 2010\-08\-09 | 2014\-06\-30 | **SB to chase up** |




 Green Feature Requests
 
 See <http://tinyurl.com/teiCouncilGreenFR> for an up\-to\-date list of
 Green Feature Requests




| GRP | \# | Summary | Owner | Creator | Created | Updated | COUNCIL NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B | [383](https://sourceforge.net/p/tei/feature-requests/383/) | [where to put \<idno\> within  \<biblStruct\>?](https://sourceforge.net/p/tei/feature-requests/383/) | Syd Bauman | Kevin Hawkins | 2012\-09\-08 | 2014\-09\-11 | **SB to do** |
| B | [377](https://sourceforge.net/p/tei/feature-requests/377/) | [retaining punctuation marks in the text of a TEI  document](https://sourceforge.net/p/tei/feature-requests/377/) | Paul Schaffner | Kevin Hawkins | 2012\-08\-12 | 2014\-05\-28 | **PFS to do** |
| B | [298](https://sourceforge.net/p/tei/feature-requests/298/) | [att.editLike should not bring att.dimensions \&  att.ranging](https://sourceforge.net/p/tei/feature-requests/298/) | Martin Holmes | BODARD Gabriel | 2011\-04\-22 | 2013\-11\-28 | **MH to do** |
| C | [264](https://sourceforge.net/p/tei/feature-requests/264/) | [altIdentifier in msPart](https://sourceforge.net/p/tei/feature-requests/264/) | James Cummings | Torsten Schassan | 2010\-11\-22 | 2013\-11\-12 | **JC to do** |




 Green Bugs
 
 See <http://tinyurl.com/teiCouncilGreenBugs> for an up\-to\-date list of
 Green Bugs




| GRP | \# | Summary | Owner | Creator | Created | Updated | COUNCIL NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C | [670](https://sourceforge.net/p/tei/bugs/670/) | [Attribute  definitions are slightly inconsistent](https://sourceforge.net/p/tei/bugs/670/) | Stefanie Gehrke | Martin Holmes | 2014\-05\-22 | 2014\-08\-27 | **(done)** |
| C | [634](https://sourceforge.net/p/tei/bugs/634/) | ["TEI\-conformable" is meaningless](https://sourceforge.net/p/tei/bugs/634/) | Paul Schaffner | Martin Holmes | 2014\-01\-08 | 2014\-06\-30 | **PFS to report** |
| A | [627](https://sourceforge.net/p/tei/bugs/627/) | [Encoding  example from Drama chapter uses @corresp instead of  @synch](https://sourceforge.net/p/tei/bugs/627/) | Fabio Ciotti | Martin Holmes | 2013\-12\-20 | 2014\-06\-30 | **FC to do** |
| A | [621](https://sourceforge.net/p/tei/bugs/621/) | [@expand  example in att.lexicographic is incorrect.](https://sourceforge.net/p/tei/bugs/621/) | Paul Schaffner | James Cummings | 2013\-11\-13 | 2014\-09\-02 | **PFS to do** |
| A | [620](https://sourceforge.net/p/tei/bugs/620/) | [which part  of TEI Guidelines takes precedence](https://sourceforge.net/p/tei/bugs/620/) | Fabio Ciotti | Kevin Hawkins | 2013\-11\-11 | 2014\-06\-30 | **FC to report** |
| B | [616](https://sourceforge.net/p/tei/bugs/616/) | [\<cit\>  and \<quote\> not allowed within  \<summary\>](https://sourceforge.net/p/tei/bugs/616/) | Stefanie Gehrke | Ville Marttila | 2013\-10\-29 | 2014\-09\-19 | **(done)** |
| B | [558](https://sourceforge.net/p/tei/bugs/558/) | [name/​orgName](https://sourceforge.net/p/tei/bugs/558/) | Paul Schaffner | Jens Østergaard Petersen | 2013\-04\-09 | 2013\-11\-19 | **PFS to report** |
| B | [528](https://sourceforge.net/p/tei/bugs/528/) | [consistency  in "the Guidelines" vs. "these Guidelines"](https://sourceforge.net/p/tei/bugs/528/) | Kevin Hawkins | Kevin Hawkins | 2013\-02\-02 | 2013\-11\-12 | **JC to prod** |
| C | [442](https://sourceforge.net/p/tei/bugs/442/) | [update ODD  documentation on www.tei\-c.org and in Guidelines](https://sourceforge.net/p/tei/bugs/442/) | Martin Holmes | Kevin Hawkins | 2012\-09\-20 | 2014\-10\-03 | **MH to report** |
| C | [441](https://sourceforge.net/p/tei/bugs/441/) | [fDecl  doesn't allow att.datcat yet](https://sourceforge.net/p/tei/bugs/441/) | Piotr Banski | Menzo Windhouwer | 2012\-09\-20 | 2013\-10\-10 | **JC to prod** |
| X | [418](https://sourceforge.net/p/tei/bugs/418/) | [Names and  Dates chapter does not mention calendar](https://sourceforge.net/p/tei/bugs/418/) | James Cummings | Martin Holmes | 2012\-07\-06 | 2012\-08\-09 | **CLOSED** |
| C | [405](https://sourceforge.net/p/tei/bugs/405/) | [XPointer  schemes may not nest, but see ch. 16](https://sourceforge.net/p/tei/bugs/405/) | Syd Bauman | Piotr Banski | 2012\-05\-02 | 2013\-11\-13 | **SB to report** |
| A | [401](https://sourceforge.net/p/tei/bugs/401/) | [Most  attributes lack good examples](https://sourceforge.net/p/tei/bugs/401/) | Paul Schaffner | Martin Holmes | 2012\-04\-23 | 2014\-05\-28 | **PFS to report** |
| A | [312](https://sourceforge.net/p/tei/bugs/312/) | [i18n  revision due](https://sourceforge.net/p/tei/bugs/312/) | Martin Holmes | Sebastian Rahtz | 2011\-11\-02 | 2014\-10\-03 | **MH to report** |
| A | [288](https://sourceforge.net/p/tei/bugs/288/) | [deprecate  use of gram except as a child of gramGrp](https://sourceforge.net/p/tei/bugs/288/) | Syd Bauman | Kevin Hawkins | 2011\-07\-23 | 2013\-12\-08 | **SB to report** |
| B | [281](https://sourceforge.net/p/tei/bugs/281/) | [value of  date@when](https://sourceforge.net/p/tei/bugs/281/) | Kevin Hawkins | Kevin Hawkins | 2011\-05\-25 | 2014\-08\-14 | **JC to prod** |




 Red Feature Requests
 
 See <http://tinyurl.com/teiCouncilRedFR> for an up\-to\-date
 list of Red FR




| GRP | \# | Summary | Owner | Creator | Created | Updated | COUNCIL NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B | [470](https://sourceforge.net/p/tei/feature-requests/470/) | [att.measurement and att.dimensions overlap](https://sourceforge.net/p/tei/feature-requests/470/) | Martin Holmes | Lou Burnard | 2013\-08\-25 | 2014\-09\-09 | **MH to report** |
| B | [464](https://sourceforge.net/p/tei/feature-requests/464/) | [Need for some way to test the oxygen\-tei package before  release](https://sourceforge.net/p/tei/feature-requests/464/) | Martin Holmes | Martin Holmes | 2013\-07\-05 | 2014\-07\-02 | **MH to report** |
| C | [366](https://sourceforge.net/p/tei/feature-requests/366/) | [rationalize content models of org and place (etc)](https://sourceforge.net/p/tei/feature-requests/366/) | James Cummings | BODARD Gabriel | 2012\-06\-19 | 2014\-01\-26 | **JC to report** |
| C | [324](https://sourceforge.net/p/tei/feature-requests/324/) | [Allow certainty etc. inside milestoneLike elements](https://sourceforge.net/p/tei/feature-requests/324/) | BODARD Gabriel | BODARD Gabriel | 2011\-09\-30 | 2012\-06\-03 | Let’s discuss briefly, but we are inclined to close it and not do  anything: **Not discussed, comments to be put on  ticket, or closed.** |
| C | [292](https://sourceforge.net/p/tei/feature-requests/292/) | [add SourceForge feeds to  http:/​/​www.tei\-c.org/​Activities/​](https://sourceforge.net/p/tei/feature-requests/292/) | Kevin Hawkins | Kevin Hawkins | 2011\-04\-13 | 2013\-11\-13 | **JC to prod** |
| A | [289](https://sourceforge.net/p/tei/feature-requests/289/) | [att.canonical for model.persTraitLike](https://sourceforge.net/p/tei/feature-requests/289/) | James Cummings | James Cummings | 2011\-04\-11 | 2013\-11\-09 | **JC to report** |




 Red Bugs
 
 See <http://tinyurl.com/teiCouncilRedBugs> for an up\-to\-date list of
 Red Bugs




| GRP | \# | Summary | Owner | Creator | Created | Updated | COUNCIL NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | [666](https://sourceforge.net/p/tei/bugs/666/) | [video html  to tei](https://sourceforge.net/p/tei/bugs/666/) | Sebastian Rahtz | javad | 2014\-04\-27 | 2014\-08\-14 | **SR to close** |
| A | [292](https://sourceforge.net/p/tei/bugs/292/) | [GLs say add  'ns' decl, but roma objects](https://sourceforge.net/p/tei/bugs/292/) | Sebastian Rahtz | Syd Bauman | 2011\-08\-20 | 2013\-11\-10 | **SR to close** |





