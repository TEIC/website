---
title: "TEI Technical Council Meeting, 11-13 April 2013"
creator: TEI Technical Council
date: 2013-04-13
---
# TEI Technical Council Meeting, 11-13 April 2013



Present:



- Brett Barney (
 BB)

- Syd Bauman (
 SB)

- Gabriel Bodard (
 GB)

- Lou Burnard (
 LB)

- Hugh Cayless (
 HC)

- James Cummings (
 JC)

- Kevin Hawkins (
 KH)

- Martin Holmes (
 MH)

- Elli Mylonas (
 EM)

- Sebastian Rahtz (
 SR)

- Paul Schaffner (
 PS)

- Rebecca Welzenbach (
 RW)

- and by skype on Friday morning: Elena Pierazzo (
 EP)

JC:Initial agenda was posted at at [http://wiki.tei\-c.org/index.php/Council\_agenda\_2013\-04](https://wiki.tei-c.org/index.php/Council_agenda_2013-04)  but of course the
 meeting diverged from that.



 Thursday 11 April 2013 
 
 
 08:30 – 09:00: Refreshments
 
 
- Delicious snacks provided by EM at library.

- TEI Council members socialised and discussed agenda and TEI activities
 generally.





 09:00 – 10:00: Opening Discussion
 
 
- Called to order @ 09:01\. JC thanks everyone for coming.

- JC: Agenda alternates between discussions and ticket breakout groups.

- JC: Discussion of how ticket discussion and feedback will work for new
 members.

- LB: In the new system, all tickets get a default classification of
 Amber. Some, however, get no classification. Some of the Ambers right now
 were not assigned that setting; they got it automatically. We should be
 alert to the fact that the Amber label may not mean that anyone has looked
 at it.

- JC: Any comments on how we should proceed?

- KH: If we're reviewing previous actions through the wiki page, and
 updating it, we need to make sure only one person is editing the wiki table
 at the same time. I volunteer to do that.

- JC: At some point we will specify a release date, and an implementation
 date by the time of which we should have all tickets assigned to us
 completed.

- JC: "Code Bounty" \= some funds we have to perhaps spend on
 community\-based code development that benefits the work of Council

- JC: Anything else missing from the agenda?

- SR: Will there be another meeting this year?

- JC: We have budgeted for one and that has been approved by the Board.

- SR: We should decide when and where, in that case.

- JC: We'll discuss that later.

- Review of any outstanding issues from previous action lists: 
 
	
	- [http://wiki.tei\-c.org/index.php/AnnArbor2012\-Actions](https://wiki.tei-c.org/index.php/AnnArbor2012-Actions) 
		
		- KH: Re Google: An engineer at Google has been working on TEI
		 output of public domain books. There is a group of people led by
		 Peter Gorman at Wisconsin pushing this forward. We have looked
		 at some sample files, and provided feedback and tips on the
		 output, conformance with Best Practices etc. The engineer has
		 now disappeared, and things appeared stalled, but PG has
		 recently restarted the process; the engineer (Ranjith)
		 re\-appeared; and KH and others have been invited to join the
		 Google quality group, so we should be able to push this forward
		 without there being any official Council involvement. At one
		 point, it seemed that the code was basically ready and Ranjith
		 needed to get corporate buy\-in to get it into the Google output
		 pipeline, but since then things have moved slowly.
		
		- JC: One of the previous concerns was related to quality of
		 Google output; It looked as good as one could expect from OCR'ed
		 text.
		
		- LB: This action has been treading water for some time. I
		 suggest we create a wiki page in which people recount their
		 experiences in converting Google\-sourced texts into TEI.
		
		- PS: Has anyone actually done that?
		
		- SR: We can't get access to their code, so we can't test it
		 ourselves.
		
		- KH: They also use structural information accessible to them
		 but not in their public documents.
		
		- We need to demonstrate our own interest in this to keep it
		 moving forward.
		
		- MH: Does our own work converting Google OCR to TEI have
		 anything to do with Ranjith's project to produce it
		 automatically?
		
		- LB: The wiki page would be about people's own experience
		 doing this.
		
		- EM: We should put out a call to TEI\-L to see who has done
		 this, and how successful it has been.
		
		- PS: What are the existing Google Books outputs?
		
		- KH: ePub, PDF.
		
		- JC: If you ask nicely, they may give you OCR text.
		
		- JC: So: We've removed this action from Council, and we'll
		 just keep a watching brief, and receive reports from KH and
		 others on the working group when they're available.
		
		- KH: I don't want to cut Council out, and I want to keep
		 pointing back to the work we did but I will note that the action
		 to review samples and provide feedback. Anyone still interested
		 should look at the email and examples and provide feedback if
		 you can. Those samples should still be current.
		
		- **Action on KH: to email Council to solicit
		 volunteers for TEI Google work, and provide a link to the
		 samples again.**
		
		- **Action on LB: to liaise with Mr Schmidt re audio
		 and video ODD.**
		
		- KH and Best Practices for Libraries — work ongoing.
		
		- Schematron constraint on contents of \<app\>: ticket
		 still open. Original agreed action reversed; ticket is with GB,
		 and only outstanding action is to add examples.
		
		- **Action on GB: to add examples of schematron
		 constrains on contents of \<app\> as the (Green) ticket
		 says.**
		
		- LB: Re Attributes without examples: I spent a month looking
		 at French translations, and it became apparent that in the
		 English there are huge inconsistencies in how attributes are
		 described and exemplified. We should standardize this before
		 following KH's suggestion to ask TEI\-L readers to submit
		 examples. The table is overly alarming because many attributes
		 don't really need examples.
		
		- SB: We should break the table up and divide it amongst
		 ourselves; then we should use a new column to assign priority to
		 those which really need examples.
		
		- **Action on RW and BB: to categorize the table of
		 attributes without examples by adding a column with
		 priorities of high, medium and low.**
		
		- EM: What we need to establish is what we mean by "important".
		 If reading a reference page as a newcomer does not give you
		 enough information to be able to use the attribute, it needs an
		 example.
		
		- Discussion of div.liminal stuff — LB had written spec for
		 "flashy" website to solicit community input, which MH had said
		 he could not implement (w/o funds) because of the authentication
		 framework. LB/s should have come back w/ simpler suggestion; MH
		 suggests Code Bounty to implement as written.
		
		- SB asks for background on the ticket and the proposed
		 application, and LB explains it.
		
		- LB: The number of people likely to want to contribute to this
		 is a handful, so we probably don't need the authentication
		 framework. We could have a couple of Council members volunteer
		 to field these items, and then insert them into the
		 database.
		
		- SB: How many examples are there?
		
		- PS: There are a few dozen.
		
		- JC: How about setting it up so that you have to email someone
		 to get an account?
		
		- SB: If you put this call out on TEI\-L, you could have dozens
		 of people volunteering.
		
		- JC volunteers to be the person who creates/administrates the
		 account for individual users in order to get some progress on
		 this issue.
		
		- GB: Could we leave it open for anyone to edit?
		
		- MH: Too many security issues.
		
		- JC: So let's build the application.
		
		- **Action on LB/PS/KH/MH (Div.liminal working group): to build
		 the survey application for community markup method.**
	
	- [http://wiki.tei\-c.org/index.php/Oxford2012\-Actions](http://wiki.tei-c.org/index.php/Oxford2012-Actions) 
		
		- JC: Re Allow certainty in milestone elements: This ticket is
		 red and requires more discussion.
		
		- KH: Should we put this in a breakout group discussion?
		
		- JC: Yes, if there's time at the end.
		
		- JC: Specification for a Roma rewrite: I started on the spec,
		 but haven't finished it yet, so that's ongoing.
		
		- KH: Liaising with the Physical Bibliography workgroup: they
		 never finished doing their work, and I tried to get a group
		 going that was interested in this. Lots of people were
		 interested but no\-one has really stepped up, so we should
		 probably form a workgroup to deal with this.
		
		- SB: The thing the original group got hung up on was: are we
		 encoding the collation formula as it exists in the world, or are
		 you encoding the information that collation formula contains?
		 Are you encoding the catalogue formula itself, or the info from
		 it? EpiDoc has managed to handle this, so we might be able to
		 learn from that.
		
		- KH: I can't take the lead on this, because I lack the domain
		 expertise. I think if there were other Council members able and
		 willing to lead the interested people, we would make more
		 progress.
		
		- EM: If despite our leadership the people concerned don't
		 produce anything, would we not care?
		
		- JC: For instance, if we were able to add elements or
		 attributes that make msDesc look more friendly to encoding early
		 printed books, that would help. (e.g. typeDesc)
		
		- LB: Marjorie Burghart's work on cheatsheets would be useful
		 here.
		
		- LB: I know a Portuguese person working in France who do this
		 work regularly.
		
		- EM: The way physical bibliography is done differs from
		 country to country.
		
		- KH: Perhaps we could ask LB's friend to produce
		 cheatsheets.
		
		- LB: Actually I know two specialists in bibliography we could
		 ask. They are both French speakers and their work would have to
		 translated.
		
		- **Action on EM and SB: to take over from KH and
		 get something from the phys bibl group, and/or encourage the
		 generation of cheatsheets for encoding physical bibliography
		 to go on the wiki.** \[— addendum, 2013\-04\-14 by Syd: I
		 believe this action was on EM and SB (or perhaps EM, LB, SB); in
		 any case, I have already spoken to Richard Noble who is not only
		 on board but eager. —]
		
		- PS: Annotated examples are a good way to proceed. It's easier
		 to ask for "an explained example of what you're doing".
		
		- KH: I'll get in touch with the old members of the group and
		 have them look at the wiki pages when they're available.
		
		- **Action on SB: send KH details about TEI\-PB list**  \[done 2013\-04\-21]
		
		- JC: Standoff markup container: we agreed on the idea at
		 Oxford, but there is a need for a working group to decide on
		 some aspects including the element name.
		
		- SB: There are other things we want to include a place for
		 which are not strictly standoff — linked data block — should
		 this be more generic?
		
		- **Action on JC and SB: to encourage Piotr to get
		 some people into a room in Rome to discuss this. SB will
		 attend to push the more generic viewpoint.**
		
		- Several tickets relate to the placement of idnos inside
		 biblio records, especially in the TEI Guidelines bibliography
		 itself. We'll double\-check those later.
		
		- RW: New element called punctuation: this is ready to go, and
		 straightforward, but I just need help creating the elementSpec
		 itself.
		
		- RW: XML whitespace issue: I've brought the Guidelines into
		 conformance with our understanding of the rules, but J McCaskey
		 is still not happy with the results. Ticket is closed,
		 though.
		
		- SR: That relates to our handling of whitespace in the
		 Guidelines output.





 10:00 – 11:30 Amber Feature Requests
 
 
- A)\[SR MH SB]

	
	- [https://sourceforge.net/p/tei/feature\-requests/446/](https://sourceforge.net/p/tei/feature-requests/446/) 
	 @schemeVersion should be added to specify the version of a style
	 scheme. 
	 We agree with the ticket and MH will implement. SB holds
	 that there is an argument in principle for concatenating the two
	 pieces of information, but it's not strong, and doesn't overcome the
	 convenience of having two. Datatype could be taken from
	 application/@version, or LB's new data.versionNum (see below).
	
	- **Action on MH: to implement** [https://sourceforge.net/p/tei/feature\-requests/446/](https://sourceforge.net/p/tei/feature-requests/446/)
	
	- [https://sourceforge.net/p/tei/feature\-requests/447/](https://sourceforge.net/p/tei/feature-requests/447/) 
	 model.gLike should be added as member of model.linePart
	 We agree
	 with the ticket and have implemented. The actual problem is caused by
	 the erroneous use of "text" instead of macro.xText in the content
	 model for line, which we have fixed. Ticket closed.
	
	- [https://sourceforge.net/p/tei/feature\-requests/402/](https://sourceforge.net/p/tei/feature-requests/402/)  A note
	 about white space in \<persName\> et al.
	 The ticket as it
	 stands makes no sense, because 3\.2\.1 has no connection with
	 whitespace; however it is possible that JM meant that the note should
	 be added to the \<persName\> spec. We should check with him, and
	 if so, it should be sufficient to add a link to the discussion of
	 @xml:space in ST.html\#STGA, where \<persName\> is used as an
	 example. If JM really meant 3\.2\.1; if so, we will reject.
	
	- **Action on MH: to contact JM and resolve the ticket** [https://sourceforge.net/p/tei/feature\-requests/402/](https://sourceforge.net/p/tei/feature-requests/402/)  one way
	 or the other.

- B) \[JC PS BB]

	
	- [https://sourceforge.net/p/tei/feature\-requests/449/](https://sourceforge.net/p/tei/feature-requests/449/)  am and
	 ex should claim membership of att.typed 
	 
		
		- Recommendation: We believe there are use cases for having
		 @type on \<am\> but are as yet unconvinced that there are
		 types of \<ex\> that are not handled by other attributes. We
		 recommend adding att.typed to \<am\> but leaving it off of
		 \<ex\> for now pending a compelling use case. 
		 KH
		 suggested the possible options of expanding to modern or
		 contemporary spelling, no\-one has asked for it yet, so there is
		 no use\-case.
		
		- **Action on JC: to implement** [https://sourceforge.net/p/tei/feature\-requests/449/](https://sourceforge.net/p/tei/feature-requests/449/) 
		 add \<am\> to att.typed.
	
	- [https://sourceforge.net/p/tei/feature\-requests/438/](https://sourceforge.net/p/tei/feature-requests/438/)  Have
	 fileDesc claim membership of att.docStatus 
	 
		
		- Recommendation: We are unconvinced that this would be useful
		 to anyone.
		
		- **Action on JC: to close ticket  [https://sourceforge.net/p/tei/feature\-requests/438/](https://sourceforge.net/p/tei/feature-requests/438/)  as won't\-fix.**
	
	- [https://sourceforge.net/p/tei/feature\-requests/421/](https://sourceforge.net/p/tei/feature-requests/421/) 
	 Guidelines front pages are confusing 
	 
		
		- Recommendation: We agree that this needs to be done, and
		 suggest option ‘b' of merging the intro page and the
		 table\-of\-contents. Serge's comments on rewording and LB's
		 comments on having the languages at the top.
		
		- **Action on MH: to implement a draft of a new
		 combined TOC and allow Council to comment** [https://sourceforge.net/p/tei/feature\-requests/421/](https://sourceforge.net/p/tei/feature-requests/421/)

- C) \[GB LB RW]

	
	- [https://sourceforge.net/p/tei/feature\-requests/448/](https://sourceforge.net/p/tei/feature-requests/448/)  Improve
	 discussion of \<substJoin\> element 
	 
		
		- We agree with the ticket.
		
		- **Action on RW: to add proposed wording on
		 \<substJoin\> to guidelines (and look for photograph of
		 MS).** [https://sourceforge.net/p/tei/feature\-requests/448/](https://sourceforge.net/p/tei/feature-requests/448/) 
		 (update to text is already done; remains to be seen whether the
		 image can be found)
	
	- [https://sourceforge.net/p/tei/feature\-requests/443/](https://sourceforge.net/p/tei/feature-requests/443/)  @resp
	 should be a member of att.global 
	 
		
		- LB: still objects to idea of resp being global: this is the
		 job of a version control system
		
		- GB: Can we discuss this and the new ticket on @source
		 together?
		
		- GB now realizes that all(?) circumstances in which @resp
		 might be used should be using @source.
		
		- LB: My principled reason for resisting expanding the global
		 class is that it's already very large, and puzzling, and we need
		 to be very careful before extending that class. Also, there is a
		 thin\-end\-of\-the\-wedge argument; and finally, there is the
		 argument that tracking responsibility is better handled by a
		 version\-control system.
		
		- SB: Would \<respons\> not be appropriate instead?
		
		- EM: \<respons\> is for the markup of the element.
		
		- KH: If \<respons\> should have this wider sense, then we
		 should rewrite it.
		
		- EM: The example also has the word "value" in it; the intent
		 is clearly responsibility for markup, not for the information
		 contained in it.
		
		- KH: OK, so we should first decide whether we want
		 \<respons\> to have this broader use.
		
		- LB: The guidelines text supports the broader interpretation
		 for \<respons\>.
		
		- GB: We need to make this explicit, not only in the chapter
		 but also in the element specification.
		
		- EM: This element seems to me to require editing. Everywhere
		 there are terms that focus people on the markup.
		
		- **Action on MH: to come up with a very concrete
		 set of use cases for groups of elements and make very
		 specific arguments for their needing @resp.**[https://sourceforge.net/p/tei/feature\-requests/443/](https://sourceforge.net/p/tei/feature-requests/443/)
		
		- **Action on SB: to improve the elementSpec desc
		 and add one or more examples.** [https://sourceforge.net/p/tei/feature\-requests/443/](https://sourceforge.net/p/tei/feature-requests/443/)
	
	- [https://sourceforge.net/p/tei/feature\-requests/440/](https://sourceforge.net/p/tei/feature-requests/440/) 
	 Attribute datatypes should be defined indirectly 
	 
		
		- all agreed that LB should implement, with no implications on
		 users. 
		 **Action on LB: to add new layer of abstraction
		 for TEI datatypes.** [https://sourceforge.net/p/tei/feature\-requests/440/](https://sourceforge.net/p/tei/feature-requests/440/)

- D) \[KH EM HC] More details added to SourceForge tickets

	
	- [https://sourceforge.net/p/tei/feature\-requests/389/](https://sourceforge.net/p/tei/feature-requests/389/)  clarify
	 definition of @from on locus and biblScope 
	 
		
		- @from by itself should denote a start point with an
		 undefined endpoint, such as p3ff.
		
		- a single node/point should be unambiguously defined, so
		 council can choose between @from and @to both required with same
		 value or perhaps using @n
		
		- Using @from without @to really should mean "from here on".
		
		- The goal is to decide how one should indicate a single spot:
		 either: 
		 
			
			- @from and @to have the same value.
			
			- @n could be used, but there would be ambiguity about
			 what it refers to.
		
		- SB: My instinct is to reverse the first option, and say that
		 @from without @to means the single node, and we need a way of
		 specifying "to the end".
		
		- EM: Bear in mind it's not a pointer, it's data.word. But
		 whatever we should do, we need to differentiate.
		
		- KH: Even if it isn't a pointer, it needs to work the same
		 way as all the other @from and @to cases, where @from alone
		 means "to the end".
		
		- LB: Because the semantics of the attribute are so different,
		 we should deprecate @from and @to here, and create different
		 attributes.
		
		- EM: If you say p5ff, you don't mean all the way to the end;
		 you mean "until no longer relevant".
		
		- JC: The problem is just that the definition needs to be
		 clarified.
		
		- All now agree that for a single page, both @from and @to
		 should be supplied, with the same value. Where @from is provided
		 alone, we need to clarify that the range starts there, but its
		 end is not known or declared.
		
		- KH We should do this with a note on the elementSpecs for
		 biblScope and citedRange.
		
		- **Action on EM: to clarify the description on
		 elementSpec on biblScope, citedRange and locus to clarify the
		 use of @from and @to.** [https://sourceforge.net/p/tei/feature\-requests/389/](https://sourceforge.net/p/tei/feature-requests/389/)
	
	- [https://sourceforge.net/p/tei/feature\-requests/429/](https://sourceforge.net/p/tei/feature-requests/429/) 
	 biblScope@unit \& citedRange@unit: consistency \& sugg. values
	 
	 
		
		- All agreed to make the suggested values singular, and to
		 expand the abbreviations for page and line to the full words. We
		 don't care whether the other abbreviations (vol. and chap.) are
		 expanded. Similarly, when "column" is added, it could be
		 abbreviated as "col". "pp" and "ll" should be expanded to "page"
		 and "line".
		
		- LB: The reason we have pp and ll is that you're more likely
		 to cite page\- and line\-ranges, in contrast to vol, where you
		 usually cite one.
		
		- EM: Column is not in the list, and we think it should be
		 added.
		
		- JC: Part of the action should be to go through the
		 Guidelines and check that we're being consistent with the new
		 values.
		
		- SB: Changing the valList to mandatory temporarily would be
		 one way to check.
		
		- **Action on HC: to change values in @unit to
		 singular, spelled\-out forms, add column, and update
		 Guidelines examples and text for consistency with the new
		 values. Leave @type alone because it's deprecated.** [https://sourceforge.net/p/tei/feature\-requests/429/](https://sourceforge.net/p/tei/feature-requests/429/)
	
	- [https://sourceforge.net/p/tei/feature\-requests/437/](https://sourceforge.net/p/tei/feature-requests/437/)  Allow
	 relatedItem in biblFull 
	 
		
		- All agreed to add relatedItem so biblFull matches its less
		 detailed peers, biblStruct and bibl.
		
		- **Action on LB: to implement ticket fr 437** [https://sourceforge.net/p/tei/feature\-requests/437/](https://sourceforge.net/p/tei/feature-requests/437/)
		
		- LB: We also need to clarify when and why people would use
		 \<biblFull\>.
		
		- JC: You could use \<sourceDesc\> to contain it.
		
		- KH: But then it would apply to the source, not the current
		 item.
		
		- KH We should also add it to \<fileDesc\>.
		
		- JC: \<fileDesc\> and \<biblFull\> are identical
		 except for some attribute classes which don't make sense on
		 \<biblFull\>.
		
		- KH: If we add it to \<fileDesc\>, it should go after
		 \<sourceDesc\>.
		
		- SB: If it's repeatable (which it should be), it should
		 appear after \<sourceDesc\>.
		
		- LB: If we add it to \<biblFull\>, it should be added as
		 a child of one of \<biblFull\>'s children.
		
		- KH: But if we do that, it applies at the level of its
		 parent, not at the level of the whole \<biblFull\>. In the
		 bibliographic world, it would not be a child of something else.
		
		- JC: So why not put it in a \<notesstmt\>?
		
		- KH: We have created an element called \<relatedItem\>,
		 and told people to use it for this purpose.
		
		- HC: It is a sort of note, so it belongs in
		 \<notesStmt\>.
		
		- KH: So \<relatedItem\> is a sort of semantic sugar for
		 \<note type\="relatedItem"\>. So the modified proposal is to
		 add \<relatedItem\> as a repeatable child of
		 \<notesStmt\>. We add it separately (not adding it to
		 model.noteLike, to avoid its showing up in other places where we
		 don't want it. That handles \<fileDesc\> and
		 \<biblFull\>





 11:30 – 13:00: Discussion
 
 
- [Deprecation](https://wiki.tei-c.org/index.php/Deprecation) 
	
	- KH introduced the history of the discussion, and brought it down
	 to the distinction between "hard" and "soft".
	
	- JC: Soft means that we don't exemplify it, and we encourage other
	 ways to do whatever it is. Hard means we will get rid of it. But
	 really these terms are imprecise and we should talk about deprecation
	 and ‘dis\-recommended'.
	
	- SB: Doesn't "hard" mean P6?
	
	- JC: Not necessarily, but we have a wiki page for things we think
	 should only be changed in P6\.
	
	- GB: Do we really want soft deprecation at all?
	
	- JC: The canonical example is @key, which we should stop suggesting
	 and exemplifying, but not actually remove.
	
	- KH: We have an attribute status\="deprecated" which we can use in
	 specs, and this is rendered into a red "deprecated" statement. Do we
	 want this to appear for both soft and hard?
	
	- SB: So the difference is that for hard deprecation, we intend to
	 remove the item from P5 at some stage.
	
	- SB: Hard deprecations should actually have a date associated with
	 them.
	
	- MH: A date allows people to stop building schemas against current
	 releases at the latest point compatible with keeping the item.
	
	- JC: Should this be dates or version numbers?
	
	- LB: Version numbers would be better.
	
	- SB: Ordinary users don't know what the version numbers are.
	
	- JC: But the only reason for the version numbering changing is to
	 account for this sort of change.
	
	- GB: But we cannot predict what the number will be. Dates are more
	 reliable. It should be a date, and it should always be at least a year
	 out from the release in which the deprecation itself is enacted.
	
	- MH: We should add a Schematron warning for items removed from the
	 system.
	
	- KH: Summary: First decision: hard or soft deprecation. Soft: no
	 change till P6, but we will use status\="deprecated", and add to the
	 wiki page about P6 dev. We pledge not to remove it in P5\.
	
	- HC: Deprecation warnings for soft and hard should be distinct, but
	 not just using colours.
	
	- SB: We want to discourage people starting new projects from using
	 the item, but not prevent those who already are using it and have
	 toolchains based on it from continuing.
	
	- BB: How about "scorned" instead of "deprecated" for soft?
	
	- EM: We really do want to discourage people from using the item in
	 both cases.
	
	- JC: We should have two values, "deprecated" and "no longer
	 recommended".
	
	- EM: This (soft deprecation) is wishy\-washy. If something is going
	 to go away, then we should be clear about it.
	
	- GB: The example of @key is a good one; we no longer recommend it
	 because @ref can do the same job.
	
	- RW: We should stop using the word "deprecated" for the soft
	 version.
	
	- SB: For hard deprecation, we should just use the actual date of
	 the proposed removal rather than a status value.
	
	- JC and MH don't like using a date in @status.
	
	- KH: @status\="deprecated" @when\="\[proposed\-removal\-date]".
	
	- GB: Schematron should also force the use of @when when
	 @status\="deprecated".
	
	- SR: That's ugly — two interdependent attributes.
	
	- MH: how about @removalDate? We wouldn't then need @status for
	 that, but it could be there.
	
	- MH: I still think we need the two attributes, one for the status
	 and one for the date.
	
	- RW: Re intention: I think the intention behind soft is that we
	 think there's a better way to do what you're doing; the intention
	 behind hard is that ???
	
	- SB: "Soft" means I shouldn't have to go back and change my
	 project...
	
	- EM: Is hard deprecation something that is morally obnoxious, or
	 something that will cause other things to break? Or is it just that
	 keeping something is out of step with the way the Guidelines are
	 moving, so there's a good reason for removing it?
	
	- LB: Hard means there's a principled reason for removing it. Soft
	 is for situations in which multiple ways to do something exist, and we
	 recommend one of them, but we understand that a large number of users
	 are happy using it.
	
	- GB: Softness should be replaced by a note. Let's get rid of it
	 from the discussion.
	
	- General agreement. We are back to only hard deprecation.
	
	- KH: Summary: Type 1 (formerly "soft deprecation", now "no longer
	 recommended"): We have identified a preferred alternative way of doing
	 something. We do not currently plan to remove the non\-preferred way
	 from the Guidelines. We're not going to use an attribute for this;
	 we're going to use one or more notes in the spec. Type 2 (formerly
	 "hard deprecation", now just "deprecation"): This item is to be
	 removed in P5, and a notBefore date is specified. A Schematron rule
	 will be added.
	
	- Further discussion suggested replacing @notBefore with
	 @removalDate or @validUntil. We settled on @validUntil. Our practice
	 would be for the date provided to not be any sooner than two years
	 from the date on which you are adding the deprecation to the spec.
	
	- GB: Should this just be a 4\-digit year, in most cases?
	
	- MH: A precise date is better.
	
	- KH: It's easier for us to know that the date should be a specified
	 time from today.
	
	- EM: We should give a full date, to help users plan properly.
	
	- **Action on KH: to go through recent soft and hard
	 deprecations and decide whether they're correct (hard) or not, to
	 remove @status and add @validUntil attribute.**
	
	- **Action on SB: create @validUntil as a class and write
	 Schematron checks for deprecations.**
	
	- EM: When we deprecate something, we should always announce it on
	 the TEI\-L list.
	
	- SR: We should also list deprecations on a wiki page or as part of
	 the Guidelines release.





 13:00 – 14:30: Lunch
 
 
- Lunch





 14:30 – 15:30: Discussion
 
 
- TEI SourceForge Environment:

	
	- Change in TEI sourceforge environment: any residual problems? any
	 potential benefits? Discuss  [remaining questions (under "to decide going forward")](https://docs.google.com/document/d/1E0aV-E75VOLE_TCrEXVVqaez-9zlyDcpCTeF5QP2BPI/edit)  Any
	 suggestions on how to find old\-style URLs on the wiki? Can anyone
	 search the wiki db to find pages with links that contain "106328"?
	 
	 
		
		- JC: The purl.org URL redirects are very useful because
		 they're short and stable, but now obsolete. Is it worth mapping
		 the old ones to the new ones? SF currently maps them
		 automatically, but we don't know how long that will last. Should
		 we create a new purl syntax, or just use the SF one? The new
		 URLs are short enough.
		
		- Everyone agrees that we don't need to create a new set of
		 purl.org redirects.
		
		- KH: Could we write to SF and get a mapping of the old to the
		 new ids?
		
		- JC: We have an XML dump of the pre\-Allura SF content.
		
		- KH: We should put a copy of that in the Vault. It would be
		 helpful to have that in the future.
		
		- **Action on JC: to put a copy of the SF XML dump
		 in the Vault.**
		
		- There are links on the wiki to the old URLs.
		
		- SB: How big is the problem?
		
		- KH: Mediawiki searching seems to ignore the bits of the URL
		 we want.
		
		- JC: purl.org is used three times in the wiki.
		
		- KH: But that's not finding the instances where the link text
		 is different from the link.
		
		- HC: Google finds 67 links on the TEI wiki.
		
		- KH: Searching for the 106328 finds only three instances.
		
		- GB: If we decided this was important, how difficult would it
		 be to change these links? A Python script could follow each link
		 to find out where it ends up, and make the change. It would have
		 to be done on the db.
		
		- **Action on JC: to talk to DavidS and ShayneB to
		 find out if we'd be allowed to dump the wiki db, make
		 changes, and re\-upload. For the OpenCMS we could do it
		 manually.**
		
		- SR: We'd have to change history in SVN to change the commit
		 messages.
		
		- KH: Did all ticket s get migrated in the end? The resulting
		 number seemed small.
		
		- JC: I believe they were. Every one I looked for I found.
		
		- LB: The ignoring of angle\-brackets in tickets is making them
		 incomprehensible.
		
		- SR: What can we do about it?
		
		- **Action on JC: to email sourceforge and find out
		 if we can turn this off and investigate the
		 implications/options.**
	
	- Splitting out additional resources such as Stylesheets to their
	 own projects/repositories 
	 
		
		- JC: As part of our tidying up the repository, we had
		 Sebastian remove some things which weren't expressly maintained
		 by Council. Should we now split out other things? The
		 Stylesheets are a good example of this. Currently if we give
		 people write permissions on the repo, they have permission to
		 change everything. We would rather like to encourage a broader
		 development community to work on the Stylesheets, so it might be
		 good to split it out into a separate project.
		
		- SB: I see no problem.
		
		- MH: The Jenkins builds are currently set up to build
		 everything using the Stylesheets latest build; if we make it
		 easier for people to break the Stylesheets, that's a risk.
		
		- SB: We can decouple those processes on Jenkins.
		
		- KH: Is there a risk of people breaking the main builds by
		 introducing errors into the Stylesheets? Would it be better to
		 have a branch\-and\-merge approach, so commits are approved before
		 ending up in trunk?
		
		- JC: There is another option: we could fork the Stylesheets
		 so we have one version for building the Guidelines only.
		
		- SR: But for e.g. DTD generation, both sides (projects) would
		 need it, so it should be central.
		
		- LB: If we are going to make a division, it should be between
		 production/processing of ODDs and everything else. We hope there
		 will be more and more people wanting to process ODDs, whether or
		 not they're connected to the Guidelines.
		
		- SB: My instinct is to ask Sebastian what he wants to do.
		
		- SR: Why this comes up is that want to make it possible for
		 other people to collaborate on the Stylesheets.
		
		- We all vaguely agree that TEI doesn't need to own all sorts
		 of things (such as docx to TEI) which aren't really TEI
		 business.
		
		- SR: A more interesting target is to get more people involved
		 in playing with the Stylesheets. But it's not clear how we can
		 separate it from the main trunk.
		
		- **Action on SR: to continue work on separating the
		 Stylesheets from the guidelines into separate projects and
		 solve problems with the Guidelines build process as a
		 consumer of these. Any separation should be concentrating on
		 making the latter more amenable to community development,
		 reporting on back to Council.**
	
	- Since we have both Specs/ and Specs\-Unused/ , what if we create a
	 Guidelines\-Unused/ to complement Guidelines/ ? (And then we'd move
	 SH\-OtherMetadataStandards.xml to there.) Or we could just rename
	 "Specs\-Unused" to "nowDefunct" and keep all the old superseded garbage
	 in there. 
	 
		
		- SB: The main point is to ensure that we can find the
		 revision history of each file.
		
		- LB: As a matter of historical fact, that chapter was never
		 used, so it wasn't in the Guidelines.
		
		- MH: Would it be useful to have deprecated/removed specs
		 available for people who might want to re\-include them?
		
		- SB: They can find it in the Vault anyway.
		
		- KH: The repository is already full of things which are
		 partial or abandoned.
		
		- GB: When you realize something is not going to be used,
		 should you delete it or put it somewhere like the Unused
		 folder(s)?
		
		- KH: Should we take everything out of the Specs\-Unused folder
		 and put it in the Vault?
		
		- SR: You can never remove it from SVN; that's the idea of
		 SVN.
		
		- SB: But how long would it take someone to find the version
		 which included the thing they're looking for?
		
		- SR: There is the changelog file which tracks what was done.
		
		- JC: We could agree that anything in the Defunct folder
		 should never be resurrected.
		
		- KH: The proposal is to rename the Specs\-Unused directory to
		 Defunct, and move the SH file into it.
		
		- **Action on SB: to rename the Specs\-Unused
		 directory to Defunct, and move the SH file into it.**





 15:30 \- 16:30: Amber Bugs Part 1
 
 
- E)\[SR EM RW]

	
	- <https://sourceforge.net/p/tei/bugs/501/> att.typed overlaps
	 confusingly with many other definitions 
	 
		
		- Agreed that it is desirable to go ahead and add individual
		 elements with @type to the att.typed class, with local examples
		 and descriptions, where it is appropriate to do so. But someone
		 needs to go through the list and figure out which definitions of
		 @type differ from att.typed. See list at (eg) <http://tei.oucs.ox.ac.uk/atts.html> which shows that we
		 need to consider all the following:  [teiHeader](http://www.google.com/url?q=http%3A%2F%2Fwww.tei-c.org%2Frelease%2Fdoc%2Ftei-p5-doc%2Fen%2Fhtml%2Fref-teiHeader.html&sa=D&sntz=1&usg=AFQjCNFH2lgN4LxsN37AEa2TR7XZJFy1dA)  ;  [idno](/release/doc/tei-p5-doc/en/html/ref-idno.html)  ;  [distinct](/release/doc/tei-p5-doc/en/html/ref-distinct.html)  ;  [q](/release/doc/tei-p5-doc/en/html/ref-q.html)  ;  [num](/release/doc/tei-p5-doc/en/html/ref-num.html)  ;  [measure](/release/doc/tei-p5-doc/en/html/ref-measure.html)  ;  [abbr](/release/doc/tei-p5-doc/en/html/ref-abbr.html)  ;  [list](/release/doc/tei-p5-doc/en/html/ref-list.html)  ;  [title](/release/doc/tei-p5-doc/en/html/ref-title.html)  ;  [biblScope](/release/doc/tei-p5-doc/en/html/ref-biblScope.html)  ;  [stage](/release/doc/tei-p5-doc/en/html/ref-stage.html)  ;  [divGen](/release/doc/tei-p5-doc/en/html/ref-divGen.html)  ;  [titlePage](/release/doc/tei-p5-doc/en/html/ref-titlePage.html)  ;  [titlePart](/release/doc/tei-p5-doc/en/html/ref-titlePart.html)  ;  [metDecl](/release/doc/tei-p5-doc/en/html/ref-metDecl.html)  ;  [castItem](/release/doc/tei-p5-doc/en/html/ref-castItem.html)  ;  [move](/release/doc/tei-p5-doc/en/html/ref-move.html)  ;  [sound](/release/doc/tei-p5-doc/en/html/ref-sound.html)  ;  [tech](/release/doc/tei-p5-doc/en/html/ref-tech.html)  ;  [recording](/release/doc/tei-p5-doc/en/html/ref-recording.html)  ;  [form](/release/doc/tei-p5-doc/en/html/ref-form.html)  ;  [orth](/release/doc/tei-p5-doc/en/html/ref-orth.html)  ;  [gram](/release/doc/tei-p5-doc/en/html/ref-gram.html)  ;  [iType](/release/doc/tei-p5-doc/en/html/ref-iType.html)  ;  [usg](/release/doc/tei-p5-doc/en/html/ref-usg.html)  ;  [lbl](/release/doc/tei-p5-doc/en/html/ref-lbl.html)  ;  [xr](/release/doc/tei-p5-doc/en/html/ref-xr.html)  ;  [oRef](/release/doc/tei-p5-doc/en/html/ref-oRef.html)  ;  [oVar](/release/doc/tei-p5-doc/en/html/ref-oVar.html)  ;  [dimensions](/release/doc/tei-p5-doc/en/html/ref-dimensions.html)  ;  [fw](/release/doc/tei-p5-doc/en/html/ref-fw.html)  ;  [app](/release/doc/tei-p5-doc/en/html/ref-app.html)  ;  [witDetail](/release/doc/tei-p5-doc/en/html/ref-witDetail.html)  ;  [relation](/release/doc/tei-p5-doc/en/html/ref-relation.html)  ;  [constitution](/release/doc/tei-p5-doc/en/html/ref-constitution.html)  ;  [derivation](/release/doc/tei-p5-doc/en/html/ref-derivation.html)  ;  [domain](/release/doc/tei-p5-doc/en/html/ref-domain.html)  ;  [factuality](/release/doc/tei-p5-doc/en/html/ref-factuality.html)  ;  [interaction](/release/doc/tei-p5-doc/en/html/ref-interaction.html)  ;  [preparedness](/release/doc/tei-p5-doc/en/html/ref-preparedness.html)  ;  [purpose](/release/doc/tei-p5-doc/en/html/ref-purpose.html)  ;  [fsDecl](/release/doc/tei-p5-doc/en/html/ref-fsDecl.html)  ;  [fsdLink](/release/doc/tei-p5-doc/en/html/ref-fsdLink.html)  ;  [fs](/release/doc/tei-p5-doc/en/html/ref-fs.html)  ;  [graph](/release/doc/tei-p5-doc/en/html/ref-graph.html)  ;  [node](/release/doc/tei-p5-doc/en/html/ref-node.html)  ;  [forest](/release/doc/tei-p5-doc/en/html/ref-forest.html)  ;  [listForest](/release/doc/tei-p5-doc/en/html/ref-listForest.html)  ;  [tag](/release/doc/tei-p5-doc/en/html/ref-tag.html)  ;  [classSpec](/release/doc/tei-p5-doc/en/html/ref-classSpec.html)  ;  [macroSpec](/release/doc/tei-p5-doc/en/html/ref-macroSpec.html)  ;  [valList](/release/doc/tei-p5-doc/en/html/ref-valList.html)
		
		- **Action on RW to do a first pass and return to
		 Council with recommendations to do a first pass through the
		 elements listed above and pick out those which could be added
		 to at.typed.**
	
	- <https://sourceforge.net/p/tei/bugs/516/> Documentation of
	 \<equiv\> is confusing 
	 
		
		- In 3\.3\.4, there is a paragraph: 
		
		
		 "Another group of elements is used to supply different kinds
		 of names for objects described by the TEI. Examples of this
		 are documentation of elements, attributes, classes (and also
		 attribute values where appropriate), and description of
		 glyphs. 
		
		
		
			
			- altIdent (alternate identifier) supplies the
			 recommended XML name for an element, class, attribute,
			 etc. in some language.
			
			- desc (description) contains a brief description of the
			 object documented by its parent element, including its
			 intended usage, purpose, or application where this is
			 appropriate.
			
			- equiv/ (equivalent) specifies a component which is
			 considered equivalent to the parent element, either by
			 co\-reference, or by external link.
			
			- uri (uniform resource identifier) references the
			 underlying concept of which the parent is a representation
			 by means of some external identifier filter references an
			 external script which contains a method to transform
			 instances of this element to canonical TEI
			
			- name a single word which follows the rules defining a
			 legal XML name (see
			 http://www.w3\.org/TR/REC\-xml/\#dt\-name), naming the
			 underlying concept of which the parent is a
			 representation.
			
			 Along with the gloss element mentioned above, these elements
			 constitute the model.glossLike class."
		
		- This should be moved to Chap. 22 and filled out a bit. 3\.3\.4
		 might need a bit of patching. SR offers to do this.
		
		- **Action on SR: to move the prose re
		 \<equiv/\> from the core chapter into the tagdocs
		 chapter, and tidy up.** <https://sourceforge.net/p/tei/bugs/516/>
	
	- <https://sourceforge.net/p/tei/bugs/515/> Bad example of
	 feature/​@fVal
	
	- It is fixed but the est needs to be looked at by someone who can
	 make sense of it (the question dcr:datcat\="[http://www.isocat.org/datcat/DC\-1345](http://www.isocat.org/datcat/DC-1345) "), probably PB. It may
	 or may not be a problem.
	
	- **Action on MH: to carry the remaining issues forward
	 with Lou and Laurent to help as needed.** <https://sourceforge.net/p/tei/bugs/515/>
	
	- <https://sourceforge.net/p/tei/bugs/551/> contained
	 by/​contained in
	
	- Ticket implement and closed. Agreed that it was obvious, did not
	 need much discussion
	
	- F) \[JC MH HC]
	
	- <https://sourceforge.net/p/tei/bugs/504/> An illogicality in
	 styleDefDecl \& styleDef
	
	- We should change the remark to: "If no value for the @scheme
	 attribute is provided, then the default assumption is that CSS is in
	 use."
	
	- Already done while talking in rev 11871\.
	
	- **Action on JC: <https://sourceforge.net/p/tei/bugs/504/> implement
	 (already done.) Close Ticket.**
	
	- <https://sourceforge.net/p/tei/bugs/539/> @scheme on
	 \<styleDefDecl\> and \<rendition\> should be a class
	
	- Agreed.
	
	- **Action on MH: to remove @scheme from \<rendition\>
	 and replace it with the class; also it will then pick up the new
	 @schemeVersion.** <https://sourceforge.net/p/tei/bugs/539/>
	
	- <https://sourceforge.net/p/tei/bugs/544/> Whitespace handling
	 in Guidelines examples
	
	- **Action on HC and SR: to test the use of @xml:space to
	 solve this specific problem, and to see whether that's the correct
	 solution in the long term. DONE;** <https://sourceforge.net/p/tei/bugs/544/>
	
	- SB: \<eg\> and CDATA islands are one solution.
	
	- LB: How would non\-pretty printing affect line\-wrapping and the
	 issue of horizontal scrolling in examples?
	
	- <https://sourceforge.net/p/tei/bugs/552/> races
	
	- Wording was indeed a bit objectionable, so we've fixed it and
	 closed the ticket.
	
	- **Action on GB: to re\-read the section and
	 rephrase/rewrite if necessary.** <https://sourceforge.net/p/tei/bugs/552/>
	
	- G) \[GB PS SB]
	
	- <https://sourceforge.net/p/tei/bugs/496/> nconsistencies in
	 app@from and app@to
	
	- small corrections: (1\) "if necessary" should be deleted: agreed
	 (and fixed); (2\) we don't see the problem. Where does it say "allowed
	 value is "any valid identifier"" — ask Kevin for clarification. Kevin
	 suspects that the change was already made, so (2\) should be ignored.
	
	- <https://sourceforge.net/p/tei/bugs/528/> consistency in "the
	 Guidelines" vs. "these Guidelines"
	
	- Agreed but lowest priority. Assign to Kevin? SB also willing to
	 take it on if you like.
	
	- **Action on KH: to address the original issue at his
	 leisure.** <https://sourceforge.net/p/tei/bugs/496/>
	
	- SB: is low priority \#1, and \#9 high? SF is not clear.
	
	- GB: Yes, it was explicit before the Allura move.
	
	- **Action on JC: to investigate the Allura system if
	 possible to make the meanings of the numbers explicit.**
	
	- <https://sourceforge.net/p/tei/bugs/543/> Use of \`\<add\>\`
	 etc for "authorial" interventions
	
	- The issue is the ambiguity of the word "editor", because to us the
	 current GL text doesn't seem contradictory. GB thinks the distinction
	 is between "modern editors/encoders" and "historical/ancient/whatever
	 authorial interventions". PS suggests "contains letters, words, or
	 phrases inserted in the \_source\_ text by an author, scribe, annotator,
	 or corrector", and "should not be used for additions made \_to the
	 current TEI electronic edition\_ by editors or encoders. In these
	 cases, either the \<corr\> or \<supplied\> element should be
	 used." The distinction between the two is the responsibility of each
	 individual project, but the TEI recommendation once that decision is
	 made should not be ambiguous.
	
	- LB: Old versions of the Guidelines explicitly permitted the use of
	 \<add\>, \<del\> etc. for changes made by editors of the
	 electronic TEI edition of the text. The distinction in usage was
	 introduced subsequently.
	
	- GB: Perhaps this is not our business; the distinction between
	 changes made by different editors at different times is an issue for
	 the project itself, not for the TEI.
	
	- LB: In that case, we're re\-asserting the fact that you should only
	 use these elements for changes to the original source.
	
	- EM: But now, according to GB, the transcriber/creator of the
	 edition could be a medieval monk working on a text from antiquity.
	
	- GB: The question is what your source is.
	
	- HC: So the only case in which it's forbidden to use \<add\> is
	 when it's you making the change.
	
	- GB: Yes, but that's not the only case where you shouldn't use it.
	
	- **Action on GB to propose a more effective wording
	 incorporating all the nuances.** <https://sourceforge.net/p/tei/bugs/543/>
	
	- **Action on SB: to implement the current wording
	 suggested above, as an interim measure.** <https://sourceforge.net/p/tei/bugs/543/>
	
	- <https://sourceforge.net/p/tei/bugs/553/> relationships
	 between objects
	
	- reject this ticket, because (1\) we may be about to add an
	 \<object\> element; (2\) "object" can be taken as a loose term,
	 including texts (as the SAWS project are using it currently), so the
	 current formulation is both correct and nicely inclusive.
	
	- **Action on GB: to close the ticket with explanation, and
	 possibly revise the text to clarify. \*DONE\*** <https://sourceforge.net/p/tei/bugs/553/>
	
	- H) \[KH LB BB]
	
	- <https://sourceforge.net/p/tei/bugs/288/> deprecate use of
	 gram except as a child of gramGrp
	
	- Summary from group meeting: Original ticket was for one issue,
	 which has been taken care of. The new topic of the ticket (based on
	 the title) has been mostly resolved, except we noticed that gram is
	 still allowed as a child of etym, which is not what's intended. Check
	 for others as well. Per the last comment on the ticket, the loose ends
	 to be tied up once new deprecation policy (decided this morning)
	 becomes official.
	
	- Summary from reporting back: KH: The ticket is only still open
	 because I was waiting for clarification of the deprecation policy; in
	 the meantime, though, we discovered that there are some places where
	 \<gram\> is allowed outside \<gramGrp\>
	
	- **Action on KH to complete the ticket and close.** <https://sourceforge.net/p/tei/bugs/288/>
	
	- <https://sourceforge.net/p/tei/bugs/493/> value of
	 biblScope@type in example in seriesStmt spec
	
	- After much discussion, decided to just leave as is. If it's a
	 biblScope, you always have to process (e.g., "vol. 2" vs. "vol. ii").
	
	- **Action on KH: to close ticket wontfix.** <https://sourceforge.net/p/tei/bugs/493/>
	
	- <https://sourceforge.net/p/tei/bugs/541/> canonical
	 references: imprecise language about software handling and errors
	
	- 1\) Change to "\[. . .] of the @cRef attribute, It might follow the
	 following sequence of steps to transform it into URI reference:"
	
	- While we're at it, it would be nice to revise the phrasing around
	 "cRef" in the list below to be cleaner (always say "the @cRef
	 attribute" or "\[the value of] the @cRef attribute" as appropriate).
	
	- 2\) Change to "A cRef pattern should not reference more matched
	 substrings". Also change "would produce an error" to "is faulty."
	
	- Also remove the paragraph beginning "It is quite reasonable".
	
	- SB \& MH: But the regular expression flavour is actually
	 prescribed as part of the datatype, so the processing is expected to
	 behave in a specific way. But we still like the revised wording.
	
	- **Action on KH: to implement the wording changes.** <https://sourceforge.net/p/tei/bugs/541/>
	
	- <https://sourceforge.net/p/tei/bugs/555/> counting people
	
	- Obvious typo. Should be fixed.
	
	- **Action on JC: to fix this (change "seven" to "four").** <https://sourceforge.net/p/tei/bugs/555/>





 16:30 – 17:30: Discussion
 
 
- Next release date, and lead\-up dates for implementing tickets etc.
 Next Council Meeting: 
 
	
	- JC It would be fiscially irresponsible to hold the next meeting
	 anywhere other than Ann Arbor, Providence or Oxford, unless anyone has
	 any cheaper suggestions?
	
	- PS: Coinciding with TCP conference would help cover PS and RW
	 coming to Oxford.
	
	- JC: Do we agree in principle that Oxford would be a good thing?
	
	- SR: If we do a next release in July, we could push the meeting to
	 November and have a subsequent release.
	
	- JC: I favour your July release and a meeting after the TEI
	 meeting.
	
	- SR: Can we agree to target the end of June for the next release.
	 We should choose a release technician, and then work out the best
	 timing etc.
	
	- SB: I'd like to be Release Technician, but the timing would be
	 crucial. I could do the last week of June or the first week of July.
	
	- SR: So tickets should be finished by the middle of June.
	
	- Resolved that: SB will be the next Release Technician, the closing
	 date will be June 17 for tickets, and the release will be the
	 beginning of July.
	
	- **Action on SR and JC: to investigate dates for next
	 Council meeting, and set up a Doodle Poll.**





 18:30 –: Supper
 
 
- Supper (Meal at EM's)






 Friday 12 April 2013 
 
 
 09:00 – 12:00: Discussion
 
 
- Skype call with Elena; Re: Board Proposals

	
	- greetings and discussion of the weather
	
	- recap of new governance document
	
	- New document focuses on:
		* how board/council should work individually and together:
		 bestow equal responsibility for governance/big decisions on the
		 two bodies. This adds to the council's work load, but may be of
		 more benefit to all.
		* how TEI should interact with members
	
	- SB: is this a re\-org that re\-apportions responsibility among
	 council and board? or does it manage communications among them? EP:
	 both, but board has less control over council in the new scheme. One
	 big change is that board no longer chooses the council chair. Council
	 chooses its own chair. This also makes the chair less
	 powerful/important. And anyone elected to council should be ready to
	 serve as chair.
	
	- SB: abbreviated term of office of chair (could be as short as 1 or
	 2 years) \- might be a problem. Earlier meetings had discussed making
	 council terms longer, even. Worth trying, but worth revisit. EP: if
	 council thinks 3 year terms are desirable they can make a proposal to
	 Council next year, after new system has been in place.
	
	- SB: Finds change in \# of board members mind boggling. Explanation:
	 Bylaws say 12 members. We've been electing 10, but have 3 appointees
	 (Chair and board rep, and Board chair) \- actually 13\. So would
	 actually lose 2 appointed members \- Council chair and the Board chair,
	 for a total of 11\. Martin: odd number of voting members is better.
	
	- NB: next election will have 1 fewer positions, in order to bring
	 number of annual new council members to 5 each year.
	
	- SR: conflating 2 issues (democracy and $) are we changing the
	 number to achieve accountability? or to save $? EP: this is ratifying
	 an existing condition. 10 elected members.
	
	- SB: points out that appointed people have worked very hard in
	 response to EP's point that elected council members have more skin in
	 the game.
	
	- SR suggests wording change since this is going to the membership:
	 don't beg question about why the council is reducing members. EP: very
	 amenable to new wording. send it on
	
	- SR, SB and others suggest it's better for Council to be given a
	 budget, not to change the number of council in the bylaws.
	
	- EP: Clarification. change in number of council members has as its
	 goal to make bylaws match practice. This is also more economical.
	 Change in how Chair ie selected is a separate issue, and is motivated
	 by a desire to make council more autonomous
	
	- Suggestion that Council counter\-propose 11 elected members. \- JC:
	 too many members may end up forcing us to have fewer meetings,
	 especially as budgets are tightening. HC: let's wait until this is a
	 problem. EP: Board prefers to prepare for the future, and budget will
	 definitely shrink, because of abolition of partners.
	
	- EP: summarizes \- She will take proposal of 11 members back to the
	 Board. MH: adds that council has done a good job shepherding its
	 budget, and has leftovers. EP: This is expected. JC: and add that we
	 won't ask for an increase in budget.
	
	- Move on Proposals about Members and Partners. Elena summarizes
	 them.
		* give members the right to vote \- (issue is very open, not
		 adopted.) \- no taxation without representation.
		* Eliminate Partners. They feel that they have been offering
		 services but not getting anything back. has been discussed with
		 partners
	
	- SB: why not give partners a vote? SR: what would make them happy?
	
	- EP: TEI isn't good at thanking institutions that contribute even
	 if they aren't partners.
	
	- KH: Tension \- making TEI fully democratic vs. letting institutions
	 who are contributing in a big way have a voice.
	
	- EP: Explains that a lot of contributions to the TEI now come from
	 individual. So worth giving them a vote, as well. LB: points out that
	 it's good to separate voting from financial support.
	
	- EM: Do we have analogies for these two issues? I have no idea why
	 Brown, which is trying to cut right and left, would give in a
	 philanthropic way to the TEI. Brown isn't going to see why they should
	 be supporters.
	
	- LB: I don't think the ability to vote would make any difference to
	 this.
	
	- EP: Brown for example could pay $250 and have the same vote. It's
	 not that it buys you more votes. The current issue is how we can
	 recognize the contributions of major contributors, which we don't
	 currently do. The situation is already such that the money you pay
	 doesn't get you votes. The money you pay is to support something you
	 think is important We do expect that institutions paying $5,000 will
	 stop doing so; six or seven have already dropped out. We'd like
	 members to tell the TEI what they want from us, and get more feedback
	 than we've had. Currently, all you do is get an invoice and pay; the
	 person that votes is not the same person who pays, necessarily We're
	 trying to build a different relationship with the members.
	
	- KH: (is this still consortial?) \- There is a risk that the change
	 may make institutions feel that instead of supporting a group of peer
	 institutions, they are instead supporting a group of individuals
	 pursuing their own interests. PS: Libraries are used to be in
	 consortia, they join them along with peer libraries. They don't fund
	 standards or other external activities.
	
	- LB: two kinds of memberships: Consortial and member based. EP: a
	 possible alternative: individual members might get to elect a member
	 for council, consortial members may elect the Board.
	
	- SR: what if anyone who is a member on the list gets a vote. Ex.
	 Digital Medievalist. JC: This works there because DM has no financial
	 remit.
	
	- EP: explained what she'd do to poll institutional members, get
	 feedback from them, find out what they find attractive. Individual
	 contacts, polls.
	
	- KH: intrigued by bi\-cameral solution. Institutional members elect
	 board, ratify bylaws, membership elects council. There is general
	 support for this idea.
	
	- EP, SB: clarify that in bylaws, changes can be passed by
	 membership quorum or board. this may have to be adjusted.
	
	- EP: summary:
		* council feels that membership should be 11, to preserve
		 defacto numbers, and to have odd number to break tie votes.
		* council supports bicameral voting for board and council.
	
	- JC Thanked EP for attending via Skype to clarify the
	 proposals
	
	- EP's report back to the TEI Board (included with her permission)
	 summarized this as:
	
	
	 I had today a very fruitful discussion with the Council about the
	 proposed reforms to the governance of the TEI. Our discussion has
	 centred in particular on two aspects of the document which I report
	 to you for discussion. 
	
	
		* Number of members of the Council. The proposal is to go from
		 12 to 10, ratifying what has been in practice the situation in
		 the past and to have them to choose a chair among the elected
		 members. This latter aspect has the consequence of the Council
		 to downsize from 11 (10 \+ chair) to 10 and this has actually
		 been not taken easily be the Council. They object to any
		 reduction of the number of their members because they strongly
		 believe that even losing one person would be detrimental to the
		 activities of the Council. Again, they stand on the position
		 that they will work with whatever budget we set for them, so if
		 the reason for reducing the number is financial, they simply
		 said they will live with whatever we will be able to give them.
		 So their proposal is to have a Council of 11 members, which will
		 also have the positive effect of solving hanging discussions as
		 it is a nice odd number.
		* Vote for individual subscribers. While all the members of
		 the Council felt that in principle to enlarge the base of the
		 voters and to recognise the fact that the TEI is evolving into a
		 scholarly community as well as consortium is a very good thing,
		 many voices, in particular Council members coming from partners
		 such as Brown and Michigan, thought that his is very risky as it
		 may convince partners to withdraw their support. In particular
		 they thought that establishing the equivalence between
		 institutions and individuals will effectively stop the TEI from
		 being a Consortium of Institutions and therefore will make
		 impossible for libraries to support it. Their counterproposal is
		 to have the elections split in two: the Institutional members
		 will vote for the Board and any change on the Bylaws, while
		 individual members will vote for the Council. In this way, the
		 TEI will keep its status as consortium, with members controlling
		 its policies and finances, while individual members, for which
		 day\-to\-day contribution the TEI as a standard and as a scholarly
		 community lives, will control the development and maintenance.

- Code Bounties

- We have worked hard saving money in council expenses, especially through
 institutional contributions towards council members expenses, the Board has
 given us permisssion for us to use this for technical development that will
 benefit the Council's work. We need to decide .

- Proposals:
	* community\-developed Roma replacement
	* translations. OmegaT is an open\-source translation workbench, i.e.
	 software to help professional translators. Small amount of
	 money
	 JC: So the benefit would be not only that OmegaT would have
	 a small TEI module in it, but the people doing translations would
	 understand it and do a better job.
	 SB: And the first advantage is
	 that you can do translation of TEI documents with out understanding
	 TEI itself.
	 JC: We're confusing two things here: the ODD editing
	 environment is not the same thing as tweaking the Stylesheets to
	 produce better docs.
	 JC: Part of the limitation of the code
	 bounties is that we're looking for small, modular projects that we can
	 fund.
	 LB: What we need is a young (\=cheap) person who is
	 incentivized to learn about the Stylesheets.
	 SB: So someone who
	 has advanced XSLT skills. If the rewrite of Roma were to go ahead,
	 this would be obviated.
	 KH: There is a tool called Thutmose II
	 partially developed by Michael Sperberg\-McQueen to convert MARCXML
	 records to TEI headers; it would be great if Council could fund that
	 work.
	 JC: How does that work help Council? Other proposals are
	 directly related to Council's work but this isn't.
	* New ODD processor 
	 
		
		* need to be sufficiently different from current. What if it's
		 in Python?

- SB: technical writer to write more better doc. Response to MM's
 comments. 
 
	
	- MH: council should be doing doc. JC: but this is totally
	 new. Not maintenance.
	
	- BB: Board has been talking about this. Laura Mandell
	 proposed at an earlier meeting to create screencasts. There is
	 also the document that was started as a beginner's guide. JC:
	 Marjorie proposes "Cheat sheet," also similar.
	
	- JC, LB: Code Bounties should further work of the council, so
	 the doc is good, but not as germane. ‘

- SB: URI resolver that understands xpointer. it would be ok if it
 were in XSLT. JC: clarify, this could be a stylesheet modification
 
 
	
	- HC: has been doing some work on this. It requires being able
	 to parse xpaths \- means extensions to xslt2\.
	
	- JC: do we have a need for this? MH: there is a pat of the
	 guidelines that is essentially theoretical without something
	 like this.

- Discussion
	* if ODD editor is a good idea, what would it cost?
	* why update Roma? there are deficiencies in how Roma works. \-
	 SB/JC: Roma doesn't let you do everything that you can do in ODD. SR:
	 ex. no way in Roma to add an \<equiv\>. many more similar issues.
	 SB: integration. BB: what about oxgarage? not so much oxgarage as the
	 implementation of ODD\-\>RNC. not enough testing.
	* LB, SR: if someone else is going to do this, will require that a
	 spec be written, which will provide clarity and force disambiguations.
	* KH: propose to instruct a few people to decide what these bounties
	 would cost. \[LB looks at OmegaT, JC and one other look at Roma
	 updates, someone to look at xpointer tool]
	* MH: Roma: do we start with the backend first, make an API (command
	 line Roma) or start by working on the front end. SR: not convinced
	 that back\-end processor needs much.
	* SB: Translation tool would be great not only for the Guidelines,
	 but also for any TEI document.
	* SB: suggests Oxygen front end project by investigated by SB, EM.
	 SR: commercial product. brouhaha over licensing.

- ACTIONS: the following come up with specs and estimated cost
	* **Action on SB and EM: specification and estimated cost for oxygen front
	 end for ODD.**
	* **Action on JC and LB: specification and estimated cost for new web Roma,
	 etc.**
	* **Action on LB: specification and estimated cost for OmegaT**
	* **Action on HC and SB: specification and estimated cost for Xpointer
	 resolver**

- Report on TEI SIGs activities (JC)

- Report from the Music SIG: Activity at the Music SIG is very low at the
 moment. Though I know of a couple of projects that are using
 tei:notatedMusic and I am working with Frieschuetz Digital for a coordinated
 edition of score and libretto sources. I am planning a SIG meeting in
 October, so I hope to re\-establish some community activity in summer.

- Linguistics SIG: Not much to report so far. The convener intends to stir
 the SIG somewhat and populate its SourceForge space, well before the TEI
 Conference where we're planning an extended SIG meeting there.

- Overview from JC: JC with SB resurrected the TEI\-SIGS mailing list, went
 back to SIG leaders, and did housekeeping. Two responses above. Goal to see
 what kind of technical demands they need and whether they have anything to
 report that should be brought to the Council's attention.

- LB: follow up on non\-responsive sigs. JC: trying not to crack the whip
 too much LB: but if they are not doing anything, should see what's going on.
 JC: there is a mechanism for this. He will use the mailing list to confirm
 that they still consider themselves to be active.

- NB: SIGs can take 2 forms: one is a a group that is producing focused
 work. the other is group of people with shared interests

- There is currently a SIGs that has a mailing list, but no conveners.

- **Action on JC: get back in touch with SIG conveners to
 encourage them to become active.**





 12:00 – 13:15: Amber Bugs Part 2
 
 
- I)\[JC LB RW]

	
	- <https://sourceforge.net/p/tei/bugs/506/> Meaning of @corresp
	 rather in dispute 
	 
		
		- Unable to reach consensus after lengthy discussion
		
		- **Action on LB: will request examples of use of
		 @corresp on TEI\-L**
	
	- <https://sourceforge.net/p/tei/bugs/468/> Order of elements in
	 publicationStmt 
	 
		
		- Constraint on order isn't in schema because schema needs to
		 allow for members of model.publicationStmt to repeat. However,
		 SB's comment might offer a way to do this in the schema rather
		 than in a Schematron rule.
		
		- **Action on LB: look into this and will clarify
		 the note in element spec for publicationStmt to no longer
		 imply that order of publisher, place of publication, etc. is
		 mandatory if you use \<p\> inside of
		 \<publicationStmt\>.**
	
	- <https://sourceforge.net/p/tei/bugs/557/> Category mistake
	 
	 
		
		- Ticket agreed; RW to fix.
		
		- **Action on RW: Fix** <https://sourceforge.net/p/tei/bugs/557/>





**13:15 \- 14:30: Lunch** Lunch 




 14:30 – 15:30: Amber Bugs Continued
 
 
- J) \[KH EM SB]

	
	- <https://sourceforge.net/p/tei/bugs/448/> Bibliography: use of
	 \<idno\> needs checking 
	 
		
		- agreed that these fixes need to be made. \<idno\>
		 wrapped in \<analytic\>, \<monogr\> \<series\>, will
		 change @type\="url" to \<ref\>
		
		- Some discussion over whether \<idno type\="url"/\> might
		 be intended as an identifier and as a reference you would click
		 on to get somewhere. Some believe it's possible that this use of
		 \<idno\> is merely an identifier. Why is \<idno\> used
		 in this case?
		
		- SB: when the URI/URN is supposed to be a link, could be an
		 \<ref\> or \<ptr\> otherwise should be an \<idno\>.
		 What about DOI? does it fall clearly into one or the other ex?
		
		- There are some former tickets, inconclusive.
		
		- **Action on SB: make \<ptr\>, \<ref\>
		 consistent in component parts of \<biblStruct\>**
		
		- **Action on SB: remove our own dis\-recommended use
		 of \<idno\> in the bibliography**
		
		- **Action on KH: change \<idno\> to \<ref\>
		 or \<pointer\> as appropriate. The criterion to apply is
		 whether the URL in question is an identifier or a link.**
		
		- BB: \<ptr\> not allowed in \<analytic\>,
		 \<monogr\> or \<series\> is this on purpose or
		 oversight? We need to wait for ticket mentioned above before
		 resolving
	
	- <https://sourceforge.net/p/tei/bugs/512/> Generate statistics
	 in the Guidelines rather than hard code 
	 
		
		- Agree that this is a problem, but this seems like a low
		 priority to fix correctly
		
		- Propose that someone hand edit in the meantime
		
		- SR: Do we have a list somewhere? How do we find them. KH:
		 make a wiki page, add them as we encounter them.
		
		- SR: what would be the best way to implement. He suggests PI,
		 JC suggests \<ptr\>
		
		- **Action on MH: investigate where we say these
		 kinds of things and find a way to implement in XSLT, insert
		 it into the make file so that it generates a \<div\> in a
		 file, and XInclude that file into the first Guidelines
		 chapter.** <https://sourceforge.net/p/tei/bugs/512/>
	
	- <https://sourceforge.net/p/tei/bugs/558/> name/​orgName 
	 
		
		- This tagging doesn't seem to us to be incorrect. the
		 \<name type\="project"\>Brown University Women Writers
		 Project\</name\> , more likely was intended to refer to WWP
		 as a project, and could be glossed in order to clarify.
		
		- **Action on PS: make new example for the
		 \<listOrg\> section ND.html\#NDORG. Add another example to
		 the element spec for \<listOrg\> that refers to more
		 typical listorgs.** <https://sourceforge.net/p/tei/bugs/558/>

- K) \[SR MH BB]

	
	- <https://sourceforge.net/p/tei/bugs/549/> Uses of
	 \<person\> element
	 We have rewritten the paragraph to include
	 Jens's suggested type of encoder, and tidied up some other
	 infelicities. 
	 
		
		- **Action on SR: to rewrite the paragraph again, to
		 address other comments on the ticket.**<https://sourceforge.net/p/tei/bugs/549/>
	
	- <https://sourceforge.net/p/tei/bugs/550/>
	 prescription/​description
	 The paragraph is possibly ambiguous. We
	 suggest changing "the degree of prescription" with the single word
	 "approach", which makes the whole paragraph more vague but less
	 ambiguous. An alternative would be to remove the entire paragraph,
	 which is a bit patronizing anyway. 
	 
		
		- LB explains that this paragraph came up during the WG
		 meetings. Intent is to acknowledge that there are multiple
		 approaches to encoding MSS.
		
		- **Action on SR: rewrite the paragraph** <https://sourceforge.net/p/tei/bugs/550/>
	
	- <https://sourceforge.net/p/tei/bugs/560/> Arne Magnusson,
	 again
	 We have written to Matthew Driscoll again to get a
	 definitive answer. 
	 
		
		- **Action on SR: when he gets the answer, he'll fix
		 it, and definitive response will be sent to Jens.** <https://sourceforge.net/p/tei/bugs/560/>

- L) \[GB PS HC]

	
	- <https://sourceforge.net/p/tei/bugs/405/> XPointer schemes may
	 not nest, but see ch. 16 
	 
		
		- GB: closing ticket: fully incorporated in HC's proposal for
		 revision/reboot of xpointer section
		
		- **Action on GB: Close** <https://sourceforge.net/p/tei/bugs/405/> if fully
		 incorporated into HC's proposal
	
	- <https://sourceforge.net/p/tei/bugs/548/> use of modal verbs
	 in Guidelines 
	 
		
		- GB: We agree that following RFC 2119 for the definition of
		 these terms should be adopted in the style guide. We do not
		 propose to task anyone to go through the guidelines and check
		 every example at this point, but it should be an ongoing task
		 alongside proofreading etc., and new prose should follow these
		 rules. 
		 
			
			- LB points out that conscious decision was made not to
			 use "must" because these are guidelines.
			
			- SB: points out that there is an understood "if you
			 want to be compliant with the TEI" at the end of each
			 sentence with must/should etc.
			
			- **Action on KH: to add text to tcw24\. Will
			 look at how things are written in the introductory
			 section about terminology. See if it needs adjustment.** <https://sourceforge.net/p/tei/bugs/548/>
	
	- <https://sourceforge.net/p/tei/bugs/527/> move citations from
	 \<note\>s to BIB 
	 
		
		- GB: need to clarify in what cases a full citation as opposed
		 to an "ad hoc URL" should be used. Once that is understood, then
		 adding the comment about bare urls to tcw20 is a good idea. What
		 is the scale of going back to fix all of these? (And therefore
		 who should do it and what priority task is it?)
		
		- PS: what is the extent of this problem? Mainly relevant in
		 \<egXML\>
		
		- **Action on SB: to implement <https://sourceforge.net/p/tei/bugs/527/>**
		
		- **Action on KH:**  look for \<note\> near
		 \<egXML\>, see which are just URL, change them to citations.
		 KH will update tcw20\.





 15:30 – 16:30: Discussion
 
 
- Approval of TEI\-SIG for "Computer\-Mediated Communication" (JC) 
 
	
	- any objections to approve the SIG? All were in favor
	
	- RW asks if there is any case in which we would not approve a SIG?
	 JC: only if their purpose is antithetical to TEI, or if they overlap
	 an exisitng SIG.
	
	- JC: Approved SIGS get wiki space, SVN space, web space
	
	- **Action on JC: Inform CMC SIG of their acceptance.**

- Translation of Guidelines : what practical issues are needed to
 facilitate it ? 
 
	
	- LB: Proposal from Florence Clavaud \- work on it with her students.
	 To achieve this, propose to split guidelines files up according to top
	 level divs inside a chapter.
	
	- MH explains one reason to break down to segments because can use
	 SVN to diff them and know when they have to be re\-translated. If it
	 was at the chapter level, then prompts to re\-translate will be too
	 frequent.
	
	- JC: is this needlessly complicated? SB: small price to pay
	
	- LB has meeting at the end of the month w/ person at Uni. Bordeau \-
	 interested in translating guidelines into French and Arabic.
	
	- JC: why did these issues not come up? LB: Earlier efforts were a)
	 one offs. b) only element descriptions. these new suggestions are
	 different, as it applies to all the prose. For ex. what to use for
	 examples. \- from real sources, equivalent.
	
	- Recommendations for how to translate the guidelines.
	
	- EM: When translations are offered, especially in languages we
	 don't know, how do we know whether the translation bears any
	 relationship to the TEI? How do we evaluate the Guidelines in Arabic,
	 say?
	
	- LB: Good question. But we shouldn't discourage people from making
	 translations.
	
	- JC: We have lots of TEI material out in the world that's written
	 in other languages, and we're not curating the foreign versions of TEI
	 Lite; should we be accommodating the translations of the Guidelines,
	 or should we keep them at arm's length?
	
	- KH: And we aren't in a position to vet the translations of specs
	 in all the languages. The original plan was that the English version
	 would remain canonical; maybe what we need is for any translations we
	 might be hosting, we need some sort of disclaimer saying it's not an
	 official translation.
	
	- MH: The responsibility rests with the community that generates the
	 translation to maintain and vet it.
	
	- EM: This is where the community can actually make the Guidelines
	 apply to their own problems.
	
	- SB: Note. breaking up into files for major \<div\>s not
	 necessary for the translation, but for its maintenance.
	
	- **Action on LB and MH: Suggest idea of breaking up the
	 chapters, \<divs\> into files with FlorenceC, report back on
	 desirability or lack thereof. MH: suggests that there would be
	 Canadian contributors to a French translation if that gets off the
	 ground. MH to liaise or introduce them to FlorenceC**

- TEI @sex attribute [https://sourceforge.net/p/tei/feature\-requests/425/](https://sourceforge.net/p/tei/feature-requests/425/) 
	
	- JC: summary of ticket and background to ticket and original change
	 with P5 from m/f/u/x to 0/1/2/9 values. Ticket raised as community
	 feedback on principle rather than a specific use case. Reason for
	 adopting ISO 5218 is that TEI tries to adhere to applicable standards
	 when they exist. The argument is not only that the standard has
	 failings which as they can be found offensive the TEI should not
	 promote but also that it is not suitable because of its own
	 limitations. The affected attributes are sex/@value, person/@sex, and
	 personGrp/@sex as well as any example and the prose of the Guidelines.
	
	- GB: problematic not only because potentially offensive, but
	 ISO5218 is inadequate. He suggests that @sex could be locally defined.
	 This doesn't break previous use of ISO5218, and allows people to
	 extend as required.
	
	- EM: Most of what we're dealing with is cultural objects so gender
	 identity is likely to be what @sex encodes, and this is a good example
	 of a case where we're trying to make TEI inclusive and accepting, so
	 locally\-defined attributes are an easy and effective option here;
	 chromosomes are certainly a bad way.
	
	- Proposal: GB: we change data.sex to be data.word. Also need to
	 change prose and examples.
	
	- LB: suggests that @sex was intended as normative and therefore
	 useful for encoding and processing thus LB suggests deprecating @sex.
	
	- JC: Although these values are normative I feel that this is such a
	 complicated area where the community wants to record many values which
	 are not catered for by this ISO 5218 standard. I believe it was a
	 mistake for us to adopt this standard.
	
	- **Action on GB: look at other suggested standards
	 recording sex, gender, and gender identity for inclusion in the
	 notes.** [https://sourceforge.net/p/tei/feature\-requests/425/](https://sourceforge.net/p/tei/feature-requests/425/)
	
	- As discussion appeared likely to be length a quick straw vote to
	 circumvent even lengthier discussion as held:



| **Num** | **Proposal** | **Votes** |
| --- | --- | --- |
| 1\. | Do nothing, but change prose slightly to indicate the reason for ISO  5218 use and stress the numbers are not meant to indicate order or  precedence of any sort. |  |
| 2\. | Change datatype for @sex and \<sex\>/@value to data.word and  update prose and examples; explain possible use of ISO5218 by those  wishing a numerical normalization | 9 |
| 3 | Leave this attribute alone, make new attribute that doesn't refer to  iso | 0 |
| 4\. | Remove @sex from \<person\> and \<personGrp\> entirely and  rename \<sex\>/@value to become @iso\-value | 2 |



- JC: It is decided then, are there any other issues relating to this we
 need to consider? For example is there any benefit to maintaining 2 levels
 of indirection of data.sex to data.word?

- SB, SR: low cost, allows for easy customization it is data.sex that
 should be maintained but loosened.

- JC: There will never be a standard that satisfies everyone...so it is
 best to leave it to users to customise this. It might be beneficial to use
 this attribute as an example of how to customise attribute \-\- whether that
 uses words, letters, numbers or some other set of strings.

- **Action on GB: Implement** [https://sourceforge.net/p/tei/feature\-requests/425/](https://sourceforge.net/p/tei/feature-requests/425/)  changing
 data.sex to be datatype data.word, providing changed Guidelines prose and
 notes to other standards.

- **Action on SB: add new tickets for the data.enumerated and
 valItem/@ident needing to be data.word not rng:text and xs:NCname,
 respectively.**







 16:30 – 17:30: Discussion
 
 
- Update on proposals to extend ODD : LB/SR have papers in pipeline 
 
	
	- Write\-ups pending at DocEng 2013, XML London 2013, and Journal of
	 the Text Encoding Initiative Anyone want to take a look?
	
	- **Action on SR: Circulate ODD\-related papers to
	 Council**

- Attributes without examples: [http://sourceforge.net/p/tei/bugs/401/](https://sourceforge.net/p/tei/bugs/401/)  and [http://wiki.tei\-c.org/index.php/AttsWithoutEgs](https://wiki.tei-c.org/index.php/AttsWithoutEgs) 
	
	- MH: Attributes don't have examples. Sometimes, there's an example
	 in an instance, sometimes not at all. Good way to get up to speed with
	 editing the guidelines.
	
	- RW and BB were assigned on Thursday to categorize the table items
	 into priorities of high, medium and low for adding examples.

- Look over Red/Green Bugs/FRs decide how to handle them tomorrow.

- Following a discussion on lists and @type values \- 
 
	
	- The consensus is that we want to separate out
	 values of @type which were legitimate ("gloss", "encoders", "speakers",
	 "index", "attendance") from those which were clearly renditional
	 ("simple", "bulleted", "bullets", "ordered"), and change the latter in
	 our usage, our examples, and our explanations, to use @rend.
	 **Action MH: add proper description to ticket, make a
	 clear proposal about \<list\> @type. with respect to suggested
	 values.**<https://sourceforge.net/p/tei/bugs/460/>





 19:00 –: Supper
 
 
- Supper






 Saturday 13 April 2013
 
 
 09:00 – 13:00: Discussion
 
 
- Update on the work of the Text Directionality Working Group (MH) 
 
	
	- MH presented slides ([http://wiki.tei\-c.org/images/4/48/Text\_directionality.pdf](https://wiki.tei-c.org/images/4/48/Text_directionality.pdf) )
	 to give background on text directionality in order to present three
	 proposals for us to consider. Slides show that we need to address
	 three properties of a run of text: line orientation, block flow
	 direction, inline glyph orientation
	
	- GB: We might need to account for writing that starts at the center
	 and spirals outward, and to handle writing that goes around a bell in
	 a helix.
	
	- MH (continuing slides): I think those are edge cases that can be
	 reduced to the three properties of a run of text. We need to deal with
	 directionality and rotation (including idiosyncratic exceptions).
	 Unicode handles horizontal directionality quite well. There's a
	 bidirectional ("bidi") algorithm for working out rules on which
	 direction text should run in, yet there are five codepoints designed
	 purely to force directionality for a text run (when the algorithm is
	 insufficient). Unicode 6\.3 will add four new "bidi isolate" codepoints
	 to override this. But this all deals with mixed\-mode horizontal
	 directionality.
	
	- UTN \#22 deals with vertical text layout, but very little progress
	 has been made since it was written. UTR \#50 addresses glyph
	 orientation in vertical text, but the only thing to come out of it is
	 adding one new property of a codepoint for default glyph orientation
	 for when a horizontal glyph appears as part of a vertical text run.
	 That's all that Unicode has done for vertical directionality!
	
	- Proposal \#1: Ignore what Unicode is doing. Their own UTR \#20 says
	 not to use control characters for bidi writing in XML markup. After
	 all, inherent directionality from the Unicode Character Database is an
	 issue for text editing tools (like \<oXygen/\>), not for markup
	 (like TEI).
	
	- LB: What happens when you search? MH: You That type characters in
	 the order they you expect them appear in the file (the logical
	 sequence).
	
	- MH: We would need to warn people about possible interactions
	 between bidi characters and markup. Should the TEI's stylesheets
	 remove those characters during transformations?
	
	- Note that the CSS Writing Modes module will handle much of what we
	 are trying to do except there's no support for bottom\-to\-top writing
	 for some reason.
	
	- Proposal \#2: Adopt or recommend the CSS Writing Modes module. It
	 covers most of what we need. Can just use with @tei:style. Lacks
	 bottom\-to\-top.
	
	- But it's not supported in tools yet. PS: Most browsers support
	 basic ??directionality control characters??.
	
	- This is still really hard. We can cover a lot of simple
	 requirements with better rotation features (like zone rotation in TEI
	 encoding).
	
	- Proposal \#3: @rotate\-x, @rotate\-y, and @rotate\-z. This would
	 handle many of the examples previously given in the slides.
	
	- None of these proposals deal with writing along paths (like in a
	 spiral). SVG is probably better for this.
	
	- LB: Since none of the options does everything, what if we do
	 nothing and tell people just to use SVG? MH: It's a cop\-out for people
	 who are trying to encode texts.
	
	- JC: Why not store the path order using TEI's points in a zone?
	
	- EM: Is there a distinction between text as text and layout? While
	 the proposal keeps them straight, our discussion is muddling them.
	
	- MH: We can handle bottom\-to\-top using rotation, and
	 glyph\-orientation.
	
	- KH: Could we just lobby the W3C to expand CSS Writing Modes to
	 include bottom\-to\-top writing?
	
	- MH: Not sure. Afraid that we would complicate it and they would
	 back away, just as Unicode did with their implementation.
	
	- SR: Reimplement CSS Writing Modes in TEI?
	
	- SB: Suggests talking to W3C working group about CSS. The spec
	 could add bottom\-to\-top and still allow software to ignore. MH: But
	 W3C won't recommend anything unless there are at least two
	 implementations. SB: But we have friends in the W3C, like Liam Quin.
	 MH: I would like to ask them why they abandoned bottom\-to\-top. Is it
	 just because there are few languages that use this direction which are
	 already in Unicode? There are a number of such scripts which are
	 candidates for inclusion in Unicode, so maybe it's also a matter of
	 time. KH: This seems like the direction to go to me.
	
	- GB: I don't like using directionality for boustrophedon because
	 boustrophedon is not inherently left\-to\-write or right\-to\-left. SB:
	 But a scholar encoding it could choose either as the default with the
	 other is the exception. How this is handled now: just encode the text
	 in the reading order and provide a facsimile.
	
	- LB: There are texts for which there isn't one clear reading order,
	 and you might want to represent this in the encoding.
	
	- MH: We could say to use CSS Writing Modes for direction and then
	 use a rotation attribute for character rotation. PS: Or use a
	 \<g\> for these characters.
	
	- LB: I agree with ignoring the Unicode directionality documents. We
	 already allow people to use CSS in TEI, so you just need for the
	 guidelines a clear statement of scope (what you can do with your TEI
	 markup after you've created it).
	
	- RW: You are trying to say things about the pattern for the whole
	 text, not specific characters.
	
	- LB: You transcribe in reading order? MH. Yes. This is important to
	 say.
	
	- SB: If you are encoding a boustrophedon text in \<sourceDoc\>
	 using \<line\> and \<zone\>, do you put the characters in
	 reading order or as arranged on the page?
	
	- LB: You put them in reading order. GB: Do so as long as you can
	 tell what the order is.
	
	- LB: Proposal \#3 is inadequate since it doesn't handle many things.
	 MH: Yes, you just have to tell people to use SVG for anything that's
	 not simple.
	
	- JC: Need to make clear when describing this to users that we are
	 talking about describing the text, not how to render output from it. I
	 know we know this, but because we're using CSS and SVG people easily
	 fall into the assumption that it is output\-related. MH: And CSS is for
	 more than just superficial rendering issues: it can include things
	 that are intrinsic to the document.
	
	- EM: Once you go beyond a raster representation, you head down a
	 slippery slope for knowing the reading order of a text. MH: Yes, and
	 when you decide on this order in the encoding, you are creating a
	 theory of the text. EM: And we should allow people different ways of
	 representing the text. MH: It's dangerous for us to draw these lines
	 too clearly. Most of any recommendations we add will be exemplary
	 rather than prescriptive.
	
	- RW: Any value in having indirection that describes writing
	 direction? Something like declaring a language and elsewhere saying
	 that it is written in a certain direction? \[much discussion followed]
	
	- **Action on MH: Summarize to tei\-council mailing list
	 the text\-directionality proposals and share the slides.**

- Quick planning for Lunch, afternoon, evening.

- Update on the work of the div.liminal working group (LB/KH/PS) (Also
 partly discussed earlier). 
 
	
	- LB and MH will create the system for trials in eXist. JC will
	 approve users who want to create accounts to do the trials.
	
	- SR expressed skepticism that anyone would do our exercise. We
	 might just send one example to the list and ask people to reply with
	 their encoding. If we actually get responses, then maybe it's worth
	 setting up the site for trials.
	
	- **Action on LB: Draft a message to TEI\-L asking people
	 to encode just a few samples by emailing back to TEI\-L as a interim
	 measure.**
	
	- **Action on PS: Select \~6\-10 samples for div.liminal
	 which evince the confusions we want help with.**

- Update on XPointer Proposals (HC) — see draft proposal at <http://goo.gl/AwPs6> , see  [http://isaw2\.atlantides.org/cts](http://isaw2.atlantides.org/cts)  for a demo implementation in Javascript that works with TEI
 Boilerplate 
 
	
	- He's been railing against the section of the Guidelines because it
	 doesn't give enough information to implement it in any software. A
	 working group has worked on it on and off over the years. He has the
	 beginning of a proposed rewrite to this section of the Guidelines.
	 Needs feedback. It's very complex and takes a while to understand in
	 order to comment on it. Please let him know if it doesn't make any
	 sense.
	
	- His implementation lets you highlight a section of a document that
	 is annotated and scroll to it. SB: Note that demo just shows source
	 documents in first two bullets; later bullets include proposed pointer
	 syntax in the URL.
	
	- MH: How do you get Javascript to not interpret that as an ID? HC:
	 It interprets after loading.
	
	- HC: His use of TEI Boilerplate uses HTML5 instead of XHTML5\.
	
	- Highlights of the proposal: 
	 
		
		- XPath would be redefined to encompass XPath 2\.0\. SB: Or just
		 use XPath 2\.0 instead!
		
		- Guidelines don't make it clear that you shouldn't nest other
		 XPointers as the parameters to an XPointer, but they should. SB:
		 That's because at the time we wrote the Guidelines this wasn't
		 included in the spec. HC: So the ID has to be an XML Pointer or
		 an absolute XPath. MH: Would that also be XPath 2\.0? HC: Yes.
		
		- You should be able to match a regular expression, not just a
		 bare string.
		
		- Add string\-index in order to pop into the middle of a text
		 node.
		
		- SB: Do we need the match pointer any more? Can we get away
		 with Xpath functions? HC: No. The match function doesn't return
		 a node. The XPath must return a node, not an atomic value. MH:
		 Can't it return true or false? HC: Yes, but that's an atomic
		 value (which has no context). \[further discussion]
		
		- JC: Instead of specifying XPath 1\.0 or 2\.0, why not just say
		 to use the latest version adopted by W3C? KH: Do we elsewhere in
		 the TEI say to use the latest version of a standard? Others:
		 yes.
		
		- We discussed Hugh's comment in his Google Docs document
		 about returning the element containing the match. We think we
		 have a way around it.
		
		- We discussed the definition of a "point". It's just a
		 location between two things. SB: But is it to the left or right
		 of a tag? Can be hard to process. HC: But you can't retrieve a
		 point.
		
		- When specifying a range, you can say that something begins
		 before or after certain characters or tags.
		
		- **Action on HC: Nudge NH, SB, and PB for
		 input.**
		
		- **Action on All of Council: read and comment on
		 the document (even if it's "this bit doesn't make sense to
		 me").**
		
		- MH: Can we add something saying why you can't just
		 accomplish these things using XPath? HC: Yes, I should add that.
		 In short, you can accomplish most things using XPath, but there
		 are enough edge cases to warrant the existence of the XPointers.
	
	- EM: General question: Do we set deadlines on actions? SB: Maybe
	 the person tidying up the notes should get to impose them? JC: We try
	 to leave these flexible where possible since we all have busy work
	 schedules. However, we will try to be implementing most tickets
	 decided here before the next release.
	
	- SB: Do we have conf calls between face\-to\-face meetings? JC: We do
	 but haven't had one for a little while, but we will be having one on
	 road to next release.
	
	- **Action on JC: Decide on deadlines for actions, but add
	 them to the wiki not official minutes.**
	
	- **Action on JC: Schedule next teleconference.**

- P5 longer\-term development roadmap brainstorming (JC) 
 
	
	- We've been discussing medium\-term actions (e.g. P5 3\.x.x) but not
	 where we want P5 to go in the long run (in P5 version 5\.x.x and
	 6\.x.x)?
	
	- MH: I want to drop DTDs. Various: Amen!
	
	- KH: Do you mean simply not allowing Roma to create them, or are
	 there content models we've wanted to implement in the ODDs but haven't
	 because we couldn't in a DTD.
	
	- SR: There's a difference between not being able to and it being
	 hard.
	
	- But do you really think we should? SB and MH: Yes! JC: While I
	 wouldn't have said this in 2005, I'm tempted to agree that we should.
	
	- LB: We should separate discussion of expressibility of the ODD
	 language and generation of DTDs. SB: I think that's reasonable. MH:
	 Our assumption is that DTD, XSD, and RELAX NG are equivalent. SB and
	 LB: But it's already the case that each expresses different
	 constraints from the ODD.
	
	- In designing the ODD language, we only tried to implement
	 something that could be expressed in all three languages ("the
	 intersection"). But now we're now proposing for a major revision of
	 the TEI that we instead expand ODD to allow for expression of content
	 models allowed in only one schema language. This would put a burden on
	 customizers and the ODD processor to handle things that today aren't
	 in the intersection.
	
	- JC: The ODD meeting also suggested that we support things in ODD
	 that aren't yet implemented in any schema language.
	
	- SR: Why go out of our way to antagonize people by removing DTDs?
	 We've already paid the price of implementing. SB: But if we have
	 someone do a new ODD implementation (apart from Roma), it will be a
	 lot harder for them to do if they have to output DTDs as well.
	
	- LB: Ambiguous content models are a pain, but they're a good pain
	 because they force us to clarify our thinking.
	
	- KH: We don't say anywhere that if you implement an ODD processor,
	 it must output DTDs. So if another implementation doesn't support
	 DTDs, we could choose to be okay with this.
	
	- SB: The question of whether to continue supporting DTDs is not
	 really about future major revisions to the TEI; rather, it's about
	 community relations.
	
	- JC: Other areas of the Guidelines for future growth? 
	 
		
		- SB: Support for epistolary correspondence
		
		- PS: Liturgy
		
		- BB: Lack of support for historical journals and newspapers.
		 MH: There's a lot of overlap between journals and
		 correspondence: overlap and reference to each other.
		
		- BB: Ephemera
		
		- SB: Handwriting on forms.
		
		- KH: Ongoing assessment of wiki cheatsheets to see if there's
		 text that should be added to the Guidelines to fill in gaps.
		
		- KH: For historical journals and newspapers, there are two
		 problems: complex layout (which is now handled using the genetic
		 editions methods) and metadata of articles versus an issue or
		 journal as a whole. SB: You can do this with @decls. KH: Maybe
		 we need a cheatsheet. LB: Or if we invent the proposed "linked
		 data block", you could possibly put this in the \<front\>.
		 JC: Or do this as a \<teiCorpus\> with each article as a
		 \<text\>.
		
		- SB: Add better support for having separate files for
		 components of a text?
		
		- EM: Is the problem with using \<teiCorpus\> and separate
		 headers for each article is that there's so much to type?
		
		- BB: Some want metadata for text\-bearing objects.
		
		- JC: For each of these areas it would be good to get some more
		 concrete proposals written up
		
		- SR: Matthew Driscoll wants a way to markup things that don't
		 exist (I checked and it doesn't exist, as opposed to I'm not
		 sure.) JC: I have in the past suggested using an empty element
		 for such uses. SB: But then people can't use empty elements as
		 placeholders. LB: In \<msDesc\>, there are two categories of
		 elements: those that talk about things, and those that represent
		 them.
		
		- MH: You could have a global attribute on an element to say
		 that it's not present in the text.
		
		- RW: This is like what bothered me about text directionality:
		 how do you encode an expectation that's not fulfilled? EM: Or,
		 more generally, the things that don't conform to pattern. This
		 is different from presence versus absence.
		
		- MH: I'm worried that Matthew is trying to encode rendering.
		 You should instead do that through your encoding toolchain.
		
		- JC: Perhaps another example might be: you have a set of
		 illuminated manuscripts but one doesn't have the illuminated
		 letter as expected. PS: I have a paper from 17 years ago
		 ("Encoding Silences") about cases of missing expected data from
		 the Middle English Dictionary. MH: Our use of @notBefore and
		 @notAfter is an additional way of encoding silence, so we do
		 have a precedence for asserting absence through the encoding.
		 SB: And \<supplied\>. But PS wants to express a default.
		
		- BB: The genetic editions stuff is missing the genetic part
		 (relations among genetically related documents: the revision
		 campaigns). It's mostly the diploma stuff that got implemented.
		 Others: this is in fact there. JC: listChange; however this
		 relates aspects of a single TEI file or node, not amongst them.
		 LB objects to the use of the word ‘file' to describe what most
		 operating systems call a file.
		
		- Discussion of representing genetic relations and relations
		 among \<TEI\> nodes. You could use Graphs, Networks, and
		 Trees for this. JC: That is ridiculous. We need simple
		 mechanisms for relating one \<TEI\>
		 element/node/digitalRepresentationOfADocument with others or
		 other resources, or showing their place in a series or
		 collection of these. The limitation of the genetic material is
		 not in relating stages in a single document but stages as
		 recorded in multiple TEI files.
		
		- SR: Need to expand support for contextual information: not
		 just persons, places, and organizations. For example, trees
		 (actual plants, not a computer science concept!). JC: Is this a
		 general purpose description of objects? SR: The \<object\>
		 element could eventually be used for this. (The SIG has gone
		 dormant.)
		
		- JC and MH: Overhaul of the TEI header. JC: Could do this in
		 a Birnbaum\-friendly way that allows you to chose between the old
		 and new header structures.
		
		- SB: Being able to express non\-TEI metadata in some sort of
		 "other metadata" element in the header (and not just strewn
		 about in other places but in another namespace).
		
		- JC thanks Council for the brainstorming and we will attempt
		 to return to some of these issues on the mailing list. But JC
		 notes that there doesn't seem to be obvious targets that we're
		 all agreed on.

- Any Other Business 
 
	
	- SR: Status of proposal for linked data block for standoff markup?
	 JC: Per [FR 378](https://sourceforge.net/p/tei/feature-requests/378/)  , we need people to be on a working group. MH: It's with Piotr
	 Banski. JC: I believe he still wishes to be involved in it.
	
	- **Action on JC: to prod PB on all tickets assigned to
	 him.**
	
	- SR/JC: Someone could take up Marjorie's laudable cheatsheet
	 initiative to show where you might put \<listGrp\>,
	 \<listPlace\>, \<interpGrp\>, etc. in the TEI document. HC,
	 MH, and SB agreed to join the working group proposed in  [FR
	 378](https://sourceforge.net/p/tei/feature-requests/378/)  .
	
	- **Action on SB: post @rend, @rendition, @style class
	 FR**

- JC Thanks Council for attending, their hard work, and acting as elected
 representatives for the TEI community.

- **Action on JC: Ensure minutes are tidied up, posted online,
 summarised and that summary posted to TEI\-L.**





 13:00 – 14:00
 
 
- Lunch (optional)








