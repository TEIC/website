---
title: "TEI Technical Council Meeting"
creator: TEI Technical Council
date: 2013-11-13
---
# TEI Technical Council Meeting,



Present:



- Brett Barney (
 BB)

- Syd Bauman (
 SB)

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

- and by skype on Wednesday morning: Stefanie Gehrke (
 SG) and Torsten Schassan (
 TS)

Minutes primarily by KH, MH and SB (but with input from all of the Technical Council).


The initial agenda was posted at at [http://wiki.tei\-c.org/index.php/Council\_agenda\_2013\-11](https://wiki.tei-c.org/index.php/Council_agenda_2013-1) but of course the
 meeting diverged from that.


Summary
 
 On Monday 11 November to Wednesday 13 November 2013 the TEI Technical Council met
 at Rewley
 House at the University of Oxford. This face\-to\-face meeting alternated between general
 issue discussion sessions and processing the feature request and bug tickets submitted
 by
 the TEI\-C community. There was a concerted effort in this meeting to clean up old
 tickets
 and resolve them wherever possible. The general discussion sessions included such
 issues as:
 


* reports on a variety of initiatives the Technical Council is
 investigating;
* resolving EEBO\-TCP to TEI P5 migration issues;
* the migration of the underlying TEI ODD language to so\-called 'Pure
 ODD';
* changes to the release process (to formalise 'alpha' and 'beta'
 releases);
* plans for a TEI hackathon;
* further work on TEI
 Internationalization;
* investigations into our examples of attribute
 usage;
* work on new Guidelines material such as Text Directionality;
* reports from SIGs including work cutting across the Ontologies and
 Manuscripts SIGs concerning Object Description, the Linguistics SIG, and the
 Correspondence SIG;
* Cheatsheets;
* processes for election of
 the new TEI Technical Council chair;
* planning for face\-to\-face and
 teleconference meetings in the new year;
* the continuation of a Board
 representative at Technical Council Meetings.


Feature requests and bugs were all discussed in groups and by the whole Technical
 Council,
 they were assigned, if possible agreed, and recategorised for implementation or further
 work. Many tickets were resolved by the Technical Council during breaks in the meeting,
 most
 were given due dates at which to have implemented or report back concerning the ticket.
 Some
 highlights include agreement that: 
 stage will have @place; the creation of
 
 abstract; better version information on Guidelines HTML footers;
 
 docDate allowed inside 
 dateline; content model of 
 salute
 loosened to macro.paraContent; regex pattern of @matchPattern better specified; better
 symmetry between head and trailer; members of model.respLike also become members of
 att.canonical (and so get @ref); @name on 
 relation no longer required; clarification
 on headings and commentary as part of a figure; decisions on TEI Website bugs; and
 many
 more.


A full list of actions and their current status is available from: [http://wiki.tei\-c.org/index.php/Oxford2013\-Actions2](https://wiki.tei-c.org/index.php/Oxford2013-Actions2)




 Monday 11 November 2013
 
 
 09:00 \- 10:30 Morning Discussion Session
 
 JC welcomed Council members and thanked them for attending, noting that the agenda
 is his suggestion as to how to proceed and that we can re\-arrange it as we progress.
 The agenda on the wiki is provided as reference, but the working version in the minutes
 will be kept up\-to\-date.



- EEBO TCP: Reaching consensus with EEBO TCP \[SR] (see <http://tei.oucs.ox.ac.uk/EEBO/> for summary of problem, and links to tickets)
 
 
	
	- SR: EEBO\-TCP is a gigantic resource that claims to be TEI but isn’t quite. The first
	 tranche goes public in about a year’s time, and we’d like to figure out a way for
	 it to be wholly conformant. It requires that we resolve a few tickets.
	
	- LB: But if the agenda is to make the Guidelines conform to EEBO\-TCP practice I think
	 that’s a dangerous thing.
	
	- SR: Perhaps, though they’ve found things that the Guidelines don’t fully address.
	 They have more data than any of us.
	
	- LB: I’d like to approach the question with an open mind rather than assuming that
	 the EEBO\-TCP always has the superior practice.
	
	- PS: Note that there are only four issues remaining. Many more things have already
	 been changed in EEBO\-TCP to match the TEI Guidelines, and a few things already agreed
	 to change in the Guidelines. What’s left are not so much issues based on attestations
	 of certain phenomena as my desire to make the encoding symmetrical.
	
	- JC: Yes, we are all duty\-bound to object if we think a change is not proper for the
	 Guidelines, but equally we’ve been working on resolving these for years and now is
	 the time to finish them off. The various feature requests will come up in discussion.
	
	- BB: Have we abandoned the idea of asking the community for comments on these proposed
	 changes?
	
	- LB: I think that’s a separate issue. Last time we discussed this (for div.liminal
	 elements), there was a sense that we should figure out what we think before we try
	 to discuss what others suggest.
	
	- SR: But note that the div.liminal work is likely to lead to non\-backwards\-compatible
	 changes (or an incredibly loose content model). So maybe we need to resolve that before
	 dealing with the related change needed for EEBO\-TCP.
	
	- JC: So do we try to solve these four tickets now or wait till we come across them
	 in the groupings of open tickets?
	
	- LB: Has anyone looked at more than two of the examples? (A few people raised their
	 hands.)
	
	- PS: The few I looked at were a mix of mistakes and genuine instances that don’t conform
	 to the TEI content models. I’d like to sort through them before tomorrow to find only
	 the latter to save you all time.
	
	- JC suggested PS do that for the discussion of tickets, but JC also showed us an example
	 of an attestation linked from FR 476\. He said it appeared to him to be clearly a stage
	 direction as note. LB said he felt that because it uses the past tense, it’s actually
	 just a note. SR: But the second example (linked from http://tei.oucs.ox.ac.uk/EEBO/
	 ) is more clearly a stage direction. LB agrees.
	
	- RW: So do we wait for someone else to request this change \[instead of addressing it
	 based on EEBO\-TCP data]? SR: I don’t think we’re actually denying that these phenomena
	 exist. The question is whether we are telling people to use @rend in all cases.
	
	- (discussion of various types of notes and stage directions: does rendering signal
	 a type?)
	
	- KH: dangerous territory to claim that footnotes/endnotes are different types \- depends
	 on text.
	
	- MH: Is the real problem that we’re uncomfortable with att.placement, and that extending
	 it makes our problems worse?
	
	- PS: That’s right, these notes seem to be behaving as if they need a placement recorded
	 in the encoding. (?) Others said they like @place on 
	 note.
	
	- LB: So are these things in fact notes? They are presented as if they are notes. MH:
	 And you could deal with this by putting 
	 stage within 
	 note? LB: Yes. PS: I’d be happy to ignore its “note quality” in its encoding and just
	 use \<stage type\="note"\>.
	
	- MH: Would we reject use of @place on 
	 stage?
	
	- LB: Does anyone strongly object to adding @place \[to 
	 stage]. No one did.
	
	- SR: So @place would end up as a special type of @rend. BB: To me placement doesn’t
	 feel like “rendition”. LB: Imagine you’re a 16th century printer. Your source manuscript
	 has a marginal note, but you decide to move it inline. Have you corrupted the text?
	 Or imagine that within the same text, some stage directions are inline and some are
	 in the margin. Is that significant distinction? BB: I think it is. So now we have
	 a stronger argument for including @place is that it’s actually different from @rend.
	
	- SB: One of these EEBO\-TCP texts has an asterisk anchoring it, so it looks like a special
	 type of 
	 note. If so, shouldn’t 
	 stage inherit everything from 
	 note? … Or should we just encode a 
	 stage within a 
	 note, as we suggested earlier but backed off from? That is, do we have instances of stage
	 directions that happen to be inside notes, or are stage directions really a type of
	 note?
	
	- JC noted that 
	 stage and 
	 note are in some ways meta\-textual, existing outside the textual stream.
	
	- HC: While one particular case might be encoded as a 
	 stage within a 
	 note, it doesn’t preclude adding @place to 
	 stage.
	
	- LB: Proposed adding @place to 
	 stage. All in favor. **Action: SR will implement the schema change of adding @place to 
	 stage and will document and provide an example.**
	
	- LB (consulting <http://tei.oucs.ox.ac.uk/EEBO/>): Do we really want to put 
	 stage in model.phrase? SR: This might be a mistake. I will investigate further.
	
	- SB reviewed uses of @place in the WWP corpus. LB: But you’re not obligated to use
	 @place instead of @rend.
	
	- MH: We need a clear example (of stage directions that don’t look at all like notes)
	 for implementing the ticket (to add it the element spec). SR: We don’t need an example
	 when adding an element to a class. SB: But it would be good to offer guidance to users.
	 He offered an example from WWP and agreed to add it to the ticket for SR when he implements.
	
	- (discussion of whether FR 478 has been previously agreed to by the Council) BB: It
	 seems that the first half is done but not the second half (which may be all that is
	 in this topic). I think it’s too much to discuss now.
	
	- JC: In brief, why is it a bad idea?
	
	- BB: Why do we have 
	 byline? PS offered one. BB: That feels like a bizarre distinction.
	
	- SB: So have we really given up on the fact that many stage directions have note\-like
	 qualities?
	
	- JC and MH: Yes, for now. It’s a separate question, and anyone is free to raise a ticket.

- Report on specification and estimated cost for XPointer resolver \[HC/SB]
 
 
	
	- JC reviewed what we had decided to do regarding XPointer.
	
	- HC: I think most reporting has been done. Drafts for the XPointer update have been
	 circulated in various places. There’s a Javascript XPointer resolver that people can
	 play with. What still needs to be done is figure out what would be needed to get
	 an XSLT implementation. It seems you can do it in the paid versions of saxon (but
	 not in the free version). You will be able to do it in XSLT 3\.0 as well, and you can
	 do it in exslt (in “XSLT 1\.0 land”). So basically you need an XPath resolver, which
	 was taken out of the free saxon implementation. Do we want a “gap filling” external
	 module (to XSLT) to allow for use of XPointer with the free saxon\-HE?
	
	- MH: Will XSLT 3\.0 resolve the problem with saxon\-HE lacking support? HC: It should
	 because it will become part of the specification, so saxon\-HE should support it.
	
	- JC: So the question is whether to ask for money from the Board to support this development
	 or simply implement it because it’s easy to do. HC: Yes. JC: So you’ll report at our
	 next meeting? **Action: HC to report on XPointer resolver and whether we should progress it.**
	
	- EM: Should we impose deadlines for ourselves before six months from now?
	
	- SB: Maybe one month from now, at the next conference call?
	
	- HC: And we should have conference calls more often.
	
	- JC: Agreed. Should we have another one before the end of the year? Council decided
	 that was probably unnecessary and meeting every two months (whether in person or teleconferencing)
	 would be sufficient.

- Report on specification and estimated cost for oXygen front end for ODD \[SB/EM]
 
 
	
	- EM: Syd and I discussed and came up with a few points. We decided to set the scope
	 of this as offering help to novices, so we’re not interested in supporting every possible
	 variation of TEI. That said, we’d still need a mechanism for generating a list of
	 modules \[such as what’s offered by Roma] within oXygen. Furthermore, we’d need to
	 create oXygen forms (perhaps with JavaScript in the CSS).
	
	- SR: The P5 build already creates various things, such as JSON representations, so
	 you might be able to use these.
	
	- EM: I think the work can be done by an unpaid TEI expert and a paid part\-time student
	 during one semester. The TEI expert would create the template and make sure the student
	 is up to speed on XML technologies. The student would need to be good at CSS(?) and
	 XML, and be prepared to get up to speed on TEI ODD. At the end, the code would need
	 to be rolled into an oXygen framework. That should be easy because we’ve done that.
	
	- SR: Note that DiXiT is paying for a researcher to go to Romania to work with the oXygen
	 developers for two months. This work could be done by this person. I also wonder how
	 this relates to the Roma replacement that we’ve been contemplating. LB and others:
	 The Roma replacement would be entirely open\-source whereas an oXygen framework requires
	 that you use oXygen. The two tools should be able to talk to each others.
	
	- JC: The oXygen framework wouldn’t be a full implementation.
	
	- SB: Since oXygen can create CSS for you, the tool doesn’t need to do this.
	
	- SR suggested revisiting this when we discuss the new Roma.
	
	- EM: The new version of 15 oXygen author mode looks quite different and might have
	 a different architecture that would influence how we do this.





 10:30 \- 10:45 Break
 

 10:45 \- 12:30 SourceForge Tickets
 
 
 
- Groups 1 \& 4 (SR, SB, RW, KH)
 
 
	
	- [FR 384](https://sourceforge.net/p/tei/feature-requests/384/): In April RW made a spreadsheet showing which elements she recommends moving into
	 att.typed. And in order to have varying lists of suggested values, we’ll use a new
	 capability introduced about 18 months ago. "n/a" means it's not applicable to move
	 it into att.typed. RW would like people to review her list before proceeding (to
	 see if any need wider discussion). SB volunteered for this. \_\_\_: But we also need
	 to figure out whether you can put something in att.typed but then override the @subtype.
	 
	 
		
		- LB: What criteria are you using to decide whether it goes into att.typed?
		
		- RW: I believe it was those cases where the @type seems to be a completely different
		 element.
		
		- LB: Then maybe it needs to be a different element.
		
		- SR: Did you take into account the possibility that the text of the description could
		 be overwritten?
		
		- RW: I may have been inconsistent about that.
		
		- LB: I would use a crude metric for whether to recommend including in att.typed: “do
		 I want to lose the text of the 
		 desc from the class?”
		
		- SB: If we can override a 
		 desc or attribute list, why couldn’t they all be part of att.typed? … I like Martin’s
		 criteria: figure out whether it’s an “actual type”; if so, move into the class, possibly
		 with overrides.
		
		- MH: I’d be suspicious of any element with a closed list of values for @type. **Action: SB and RW will review the list again.**
	
	- [FR 457](https://sourceforge.net/p/tei/feature-requests/457/):
	 
	 
		
		- KH: In the ticket I want to clarify what you use tagUsage for and what to put in a
		 project\-specific ODD. SB noted that tagUsage is defined in section 2\.3\.4 as an all\-or\-nothing
		 description (you have to use tagUsage for every element in a namespace), not selective
		 description of your usage of elements.
		
		- SR: No, that’s a narrow description.
		
		- KH: We could raise a separate ticket asking to clarify this. For this ticket, we will
		 recommend to Council that we figure out what we intend tagUsage to be used for (or
		 commission a subgroup to figure that out).
		
		- SB: Or maybe we change tagUsage so that it is only used for formal description, without
		 any prose description. Then the question in the ticket becomes irrelevant.
		
		- SR: Or maybe tagUsage is for use in a particular document, as opposed to the project
		 as a whole. In that case Lou’s statement on TEI\-L is misleading. **Action: KH, LB, and JC will review and make a recommendation to Council before the
		 next face\-to\-face.**
	
	- [FR 459](https://sourceforge.net/p/tei/feature-requests/459/): This is just waiting for implementation. **Action: SB will implement by end of January 2014\.**
	
	- [FR 465](https://sourceforge.net/p/tei/feature-requests/465/): Gabby and HC seem to agree on it, and the example looks sensible. LB’s comment could
	 be raised as a separate ticket.
	 
	 
		
		- HC: I think the answer to LB’s comment is that it’s unlikely because @resp and @source
		 are orthogonal matters. The person referenced in @resp did the research consulting
		 the thing named in @source.
		
		- LB: But that isn’t what GB is suggesting. He’s just saying that @source is when an
		 interpretation comes from a document whereas @resp is when it comes from a person.
		 We all agreed on that. **Action: HC will implement before end of January 2014\.**

- Group 2 \& 5 (BB, HC, JC)
 
 
	
	- [FR 453](https://sourceforge.net/p/tei/feature-requests/453/) a place for metadata that you can't fit into existing header elements AMBER open
	 Discussion talks more about standoff than the original ticket; Request is too vague
	 needs specific use cases; Council decides to leave AMBER after discussion.
	 
	 
		
		- LB: I think the ticket is precise but the discussion went off on tangents.
		
		- SB: I recall SIG on Libraries discussing in 2005 in Sweden and suggesting that it
		 be called 
		 otherDesc. The group felt that since the element are from a non\-TEI namespace, you could put
		 them wherever you want. But others are argue that there should be a separate element
		 for wrapping all of the non\-TEI elements because it allows you to find them easily.
		 It was a practical solution, but “lumpers”, who want to associate non\-TEI metadata
		 with related TEI elements, prefer to be able to put them anywhere. Maybe we should
		 say that if you have an 
		 otherDesc, you only need to look there for non\-TEI metadata; otherwise, it may be elsewhere
		 in the document.
		
		- JC: Is this analogous to 
		 notatedMusic where we fully expect people to put data in another namespace?
		
		- LB: What if you have both 
		 tei:title and 
		 dc:title that don’t match? How do you know which is correct?
		
		- KH: I think that’s out of scope.
		
		- SB: …
		
		- JC: But we want real examples.
		
		- LB: This discussion in the Guidelines might go in the place where we once had a mapping
		 to MARC fields.
		
		- MH: I have examples of DC data.
		
		- KH: Are we going to recommend putting non\-TEI XML elements as siblings or children
		 of the related TEI elements? And will we create a wrapper for non\-TEI elements? If
		 so, what will we call it? **Action: MH will offer DC examples and PS will offer MARC examples. LB will pull them
		 together into some text to be inserted into the Guidelines. Given this, Council will
		 reconsider the feature request and whether to create the wrapper element.** An advantage of 
		 otherDesc is that it makes validation via RELAX NG easier: anything here can be from any namespace.
		 But SR \& SB note that if you’re validating using NVDL, you can “easily” (in as far
		 as anything in NVDL is easy) ignore elements in other namespaces.
	
	- [FR 378](https://sourceforge.net/p/tei/feature-requests/378/) Encoding of Standoff annotations (AMBER open). Council has agreed 
	 standoff in principle but awaiting LingSIG meeting results in Jan/Feb.; Council discusses
	 this as a separate item later.
	
	- [FR 473](https://sourceforge.net/p/tei/feature-requests/473/) add @type to desc (AMBER open). Group decided this was GREEN; desc should claim
	 membership of att.typed, with usual caveat that @type is for the type of description
	 not its content.
	 
	 
		
		- KH: Add a comment to [FR 384](https://sourceforge.net/p/tei/feature-requests/384/) that once 384 is implemented, we’ll add a note on att.typed reminding people that
		 this is meant for the type of element, not type of scope, function etc. **Action: HC will implement \[DONE]. KH will add a comment to [FR 384](https://sourceforge.net/p/tei/feature-requests/384/) \[DONE].**





 12:30 \- 13:30 Lunch Break (in Meeting Room)
 

 13:30 \- 14:00 SourceForge Tickets continued
 
 
- Group 2 \& 5 (BB, HC, JC) continued
 
 
	
	- [FR 479](https://sourceforge.net/p/tei/feature-requests/479/) Adding the @place attribute to 
	 head and 
	 seg AMBER open JC noted that head is not meta\-textual or in different text stream like
	 stage/note and thinks @rend should be used in this instance; More/better use\-cases
	 needed. The breakout group did not support this ticket; the fact that 
	 head is in the left margin is merely rendering information.
	 
	 
		
		- RW: The distinction between two kinds of content makes sense.
		
		- SR: @place really means something is removed from the normal reading sequence.
		
		- PS: If something is part of the normal text stream (like 
		 head), it’s not appropriate for it to have @place.
		
		- LB: You’re not actually addressing the ticket, which has reasonable use\-cases: e.g.
		 titles of recipes which are written in the margin.
		
		- JC: But you could use \<head class\="margin"\> for this.
		
		- LB: What about the 
		 seg examples?
		
		- JC: We agreed 
		 seg is the right thing to mark it, but @rend can handle it.
		
		- BB: I dissented, but I think we need better use\-cases.
		
		- HC: If he has real examples, we should see them.
		
		- KH: Someone said this morning that the definition of a 
		 head was that it was in sequence, but I don’t believe that; there are examples of that.
		
		- EM: He isn’t claiming that these things are irrevocably 
		 heads, since he proposes that 
		 label could be used.
		
		- SB: He didn’t provide any code.
		
		- JC: We think he should provide examples showing why @place is needed.
		
		- SB: We should keep in mind that it’s possible to place elements on a page not in reading
		 order.
		
		- JC: Precisely, if I had a division where the 
		 head were at the bottom, I’d still encode it as 
		 head at the beginning with rend\=”bottom”. Or just because my 
		 div elements are in a particular order in my encoding doesn’t necessarily mean they were
		 that way in the source rendering (but sometimes I dispute the ‘O’ in OHCO).
		
		- SR: Doesn’t this work against our previous arguments on 
		 stage?
		
		- HC: No, because they’re outside the actual textual flow these are not.
		
		- EM: He wants to say that there are titles or heads for these recipes which happen
		 to be in the margin; that’s one thing he’s doing. We could just respond with help
		 on how to mark those up.
		
		- JC: To me, that’s a 
		 head. Council is unconvinced; we think he should be using @rend; but are open to him providing
		 more convincing use\-cases with encoding. **Action: SR to take the ticket, and get more examples from the submitter \[DONE].**
	
	- [FR 476](https://sourceforge.net/p/tei/feature-requests/476/) use of 
	 stage inside poetry, and using placement attribute (AMBER open). (Council agreed to @place;
	 
	 stage could occur almost anywhere should be allowed inside 
	 l either by being model.phrase or model.noteLike or whatever; GREEN).
	 
	 
		
		- JC: This is the ticket we discussed before, but we discussed the other half of it.
		 We think this should happen but we’re not quite sure how it should be done.
		
		- LB: 
		 stage is already a member of model.inter, so the problem has now gone away. HC has already
		 implemented the first half. **Action: JC to close ticket [FR 476](https://sourceforge.net/p/tei/feature-requests/476/) noting it has been resolved.**
		
		- SB: A metrical line has metre, scansion etc. If we stick a 
		 stage element in the middle of one of those, it will not be part of that. We don’t say
		 that explicitly.
		
		- LB: True, interesting, but not part of this issue.
	
	- [FR 481](https://sourceforge.net/p/tei/feature-requests/481/) check that all sibling att.translatable elements have @versionDate (AMBER open).
	 (Agreed that siblings of the same 
	 gi should have this; Syd to implement schematron; Make GREEN)
	 
	 
		
		- JC: If you have 
		 desc with @versionDate, all sibling 
		 descs must have @versionDate. **Action: SB to check whether this is implemented, and if not, get it implemented then
		 close the ticket.**

- Group 3 \& 6 (MH, EM, LB, PS) 
 
 
 
	
	- [FR 462](https://sourceforge.net/p/tei/feature-requests/462/) idno@type\='uri' for Linked Data AMBER open (We agreed. @type\=”URI” alongside @type\=”URL”)
	 
	 
		
		- EM: The suggestion is to have “uri” as a suggested value for @type on 
		 idno, and we agree. We should modify the spec to add UTI (upper\-case), and clarify the
		 distinction between URL and URI, where the latter is to be recommended especially
		 when a URI is used primarily as an identifier rather than a resolvable address (e.g.
		 namespaces, ISOCat values). **Action: HC to implement this and close the ticket [FR 462](https://sourceforge.net/p/tei/feature-requests/462/).**
	
	- [FR 471](https://sourceforge.net/p/tei/feature-requests/471/) extend the possible usages of 
	 argument (AMBER open). (If the intended use case is encoder\-supplied abstract, not part of
	 source document, which might belong rather to header than to front. Suggest new element
	 abstract in profileDesc. )
	 
	 
		
		- EM: We think that the suggested functionality is good, but the method for achieving
		 it is not. The use\-case is encoding independent articles where there is no abstract
		 in the text itself, but you want to add one, but if it’s not part of the text you’re
		 encoding, it probably belongs in profileDesc. The ticket says to use 
		 argument, but we don’t believe that’s appropriate. We discussed using 
		 summary, but that’s too simple a content\-model. So we suggest a new element 
		 abstract as a member of model.profileDescPart.
		
		- SR: Why profileDesc?
		
		- MH: Because that’s where other stuff like keywords goes.
		
		- JC: What about this restriction to one paragraph? \[General agreement that this might
		 be an issue.]
		
		- SR: Lots of existing project which are modern projects would also use this.
		
		- BB: So what’s the model?
		
		- LB: I originally said `model.specialPara`, but the need for multiple 
		 ps is a problem.
		
		- SR: `model.inter` will do it.
		
		- LB: `model.pLike` will give you 
		 ps and also 
		 abs. **Action on LB to create the new element; \[DONE]; MH to provide examples.**
	
	- [FR 472](https://sourceforge.net/p/tei/feature-requests/472/) docDate in dateline ?
	 
	 
		
		- EM: 
		 dateline does not allow 
		 docDate, but 
		 byline allows 
		 docAuthor. This is inconsistent. We agree with that. But the use\-case suggested by the submitter
		 involves using this to encode metadata in the text. We believe this is wrong. However,
		 there are good use\-cases from e.g. TCP texts which have no 
		 titlePage.
		
		- LB: It is odd in the first place that 
		 docAuthor can be both a child and a sibling of 
		 byline.
		
		- EM: Do we make this change, and if so, do we recommend this functionality? Do we go
		 for parallelism, but add strong wording to say that this is not the way to do metadata?
		 The other option is to reject and leave things as they are, but respond to the submitter’s
		 use\-case.
		
		- SR: Why was 
		 docAuthor in 
		 byline?
		
		- MH: It’s been manually added to the content model of 
		 byline, presumably in response to a previous ticket.
		
		- PS: Why do we have any of these elements in the first place?
		
		- JC: Isn’t this the same kind of thing as 
		 origDate and 
		 origPlace? Because we’re saying this is a special case where the generic elements are not sufficiently
		 distinct.
		
		- HC: I think we should do away with them.
		
		- SR: The excuse for them is that they do permit you to look at the front matter of
		 a document and pull out the metadata that matters.
		
		- EM: This is a document which has a header with all that info, and there are many divs,
		 each of which has this extra information. We’re suggesting putting 
		 persName in 
		 byline instead of using 
		 docAuthor.
		
		- SR: We could get rid of these elements, and for the generic elements provide a flag
		 of some kind that identifies them.
		
		- MH: The parallelism is a strong argument for me.
		
		- BB: On the one hand I agree, but I don’t like the fact that we now have more ways
		 of doing the same thing.
		
		- EM: This is the other half of the response: put it in, but tell him not to use it
		 for the purposes he describes. \[An examination of the example in 
		 dateline did not bring consensus.]
		
		- RW: The example makes it difficult to interpret.
		
		- EM: The use\-case is a series of components which have different dates. Can you imagine
		 a case where you have a 
		 dateline and you have both a docDate and a regular date? If so, what’s the difference?
		
		- JC: By MH’s reasoning, the docDate would be for the whole document, as it appears
		 in the original document. 
		 date would be some other date (such as a corrected date, if 
		 docDate is wrong).
		
		- SR (looking at SVN history): 
		 docAuthor has always been in the content model of 
		 byline.
		
		- LB: We agreed that if we were to put 
		 docDate in there, it was because it applies to the whole document, so we must provide a usage
		 note to this effect; and we should also make the same point re 
		 docAuthor, and explain how you would do what the submitter wants (a way to ascribe authorship
		 of sections to authors). **Action: MH to add 
		 docDate to 
		 dateline, and clarify with usage notes \[Done].**
	
	- [FR 360](https://sourceforge.net/p/tei/feature-requests/360/) New attribute @keepHyphen. Ticket open, ticket GREEN, it’s rejected throughout the
	 comments. **Action: PS to provide an example of the mechanism recommended to handle the use\-case.**





 14:00 \- 15:30 Afternoon Discussion Session
 
 
 
- Pure ODD
 
 
	
	- LB: Within the specification for every element is the 
	 content element, which is expressed using RelaxNG. The suggestion is that this content information
	 should be expressed in pure TEI. Council has previously said this is a good idea.
	 The question now is how we take it forward. We have not done much by way of making
	 incompatible changes in content models. After re\-expressing content models in pure
	 TEI, we might find ourselves tempted to change content models in ways which are not
	 backward\-compatible.
	
	- SR: We could deprecate the 
	 content element. I’ve added a new element for the new content model. There’s probably no
	 need, though.
	
	- SB: Could you review the difference in content model between the RelaxNG and the pure
	 TEI? What can we express in pure ODD that we can’t express in RelaxNG?
	
	- MH: If the new system does nothing different from the old, and we don’t dare make
	 it do so because of backward\-compatibility issues, are we then just preparing for
	 P6?
	
	- LB: We give two examples in the paper of things which we can do easily in pure ODD
	 but can’t do in RelaxNG.
	
	- JC: It’s fine for this pure ODD to express things that we can’t currently do, even
	 if you can’t currently generate a schema that can enforce it.
	
	- SB: Yes, and that’s also been a TEI position for a long time.
	
	- JC: What’s the proposal?
	
	- SR: To adopt the new system wholesale. The simplest thing would be to do that, and
	 move our own content models over to the new system.
	
	- JC: Have you encountered anything you can’t currently handle?
	
	- SB: How about non\-deterministic content models?
	
	- SR: We could handle them, but we don’t.
	
	- SB: I’m all in favour. How long do we want to leave the old stuff in place, and how
	 fast do we want to move the TEI Guidelines over?
	
	- JC: If it’s possible to automate a migration, we should do that.
	
	- SB: It should be two releases: one which implements the new elements, and the next
	 which moves the Guidelines over to using them.
	
	- SR: Adding the new elements is trivial.
	
	- SB: I don’t want us to be in the position of holding up pure ODD because there are
	 a couple of content models in TEI that are giving trouble.
	
	- SR: What’s difficult to know is whether we’ve slightly loosened or tightened content
	 models without knowing it. Suppose I’ve written a conversion script; how do we know
	 there are no bugs in it?
	
	- BB: The testing doesn’t have to be automated?
	
	- MH: We should have a tested conversion tool before we encourage the community to use
	 it.
	
	- SR: So SB is right: we should introduce the elements first, and only later convert
	 to them ourselves, and encourage the community. **Action: LB to add the new elements and the documentation ahead of the next release;
	 documentation need only be at the element level, along with some brief introduction
	 in the Guidelines, to be expanded to a full section later.**

- [TEI Roma Replacement Specification](https://docs.google.com/document/d/1766WTJV2xcfANh8HRZW5m520yrC1nCzQJzUgKpwiylI/edit)
	
	- JC: The existing Roma is dated and flawed, as we all know. Many tickets have come
	 up which we cannot answer until we develop a new Roma. We therefore want someone from
	 the wider community to take on a rewrite and contribute to maintenance of Roma, and
	 to do that we need a specification that we can take to the Board for them to finance
	 in a code\-bounty sort of way. The proposal for Council is: what do you think of the
	 specification and how could it be improved?
	
	- SR: Suppose I just write an XML editor or a plug\-in for Oxygen? Have I met the specification?
	
	- SB: It must be open\-source and free, and Oxygen\-dependent system would not be.
	
	- SR: I’m unhappy with the idea that we can’t depend on a paid\-for system.
	
	- EM: We want it to be generally usable and low\-cost by the widest variety of people.
	 The fewer restrictions the better on what you must have in order to use it.
	
	- SB: Yes, we want proposals to be as open as possible; if we end up with only one proposal
	 and it’s not open, we’ll have to evaluate it.
	
	- SR: So we need a clause which says “we will accept any proposal, but will prefer those
	 that do not depend on proprietary software”.
	
	- JC: At the moment, everybody can use Roma just by going to a website; we don’t want
	 anything which is much more restricted than that.
	
	- SR: What do people think about the requirement to be able to edit inside the 
	 schemaSpec?
	
	- SB: i.e. should the proposal require that you’re able to edit not just the 
	 schemaSpec, but also the prose that goes with it (a general TEI editor)? If we get 
	 schemaSpec only, that’s still good.
	
	- JC: As long as it doesn’t destroy anything else. If you can jump out to an XML editor
	 to edit the prose, then that’s an added bonus.
	
	- LB: The kind of document that this should operate on is a TEI\-for\-authoring document;
	 it doesn’t have to cover the whole TEI.
	
	- SR: This is not as simple as it looks; there’s a lot of the TEI that would still have
	 to be covered.
	
	- SB: It should be a requirement that it can read in a manually\-created ODD without
	 destroying any of it, even if it can’t provide editing capability for some of it.
	
	- KH: It may not be a requirement that it handle anything except ODDs that it has created.
	
	- SR: We don’t know how much money to ask for until we see the proposals that come in.
	
	- JC: The TEI Board might be able to provide a few thousand towards this.
	
	- SB: If I were a professional software company I’d request $250,000\.
	
	- EM: Why would a professional company quote on this? And CS people in a university
	 won’t go for it. A DH centre might go for it.
	
	- JC: Do people think this is a waste of time?
	
	- HC: No; even if we can’t find someone, it might be the basis for a good grant proposal.
	
	- JC: So we shouldn’t be rushing this out; we should make it as good as possible.
	
	- KH: Someone will have to figure out what we expect them to deliver in terms of a bid.
	
	- HC: We won’t get any realistic bids we can afford.
	
	- JC: I fear you may be right.
	
	- SR: What if somebody comes back and says “why don’t you fix the existing Roma?”
	
	- MH: I thought there were some fundamental architectural problems with it?
	
	- SR: If someone comes back and says they’d rather start from the existing Roma, then
	 there’s no reason not to allow that approach.
	
	- EM: This issue should be set next to the Oxygen proposal we discussed earlier.
	
	- Council discussed this further. **Action: ALL Council to go through the proposal again and discuss it, remembering to
	 look at the comments, and further refine it. JC to make sure it’s tidied up. Deadline:
	 next teleconference.**





 Plenary ticket discussion
 
 (JC felt these could be handled better in plenary session rather than breakout groups
 reporting back and duplicating discussion.)



- [FR 445](https://sourceforge.net/p/tei/feature-requests/445/) Conversion of ODD to HTML: Examples should be aware of element renaming closed\-fixed,
 implemented by SR. However (per SB and LB): there may also be 
 gi elements inline which should also be changed. **Action: SR to add 
 gi and 
 att renaming to complete the ticket. \[COMPLETED FOR 
 gi. Not possible for 
 att.]**

- [FR 443](https://sourceforge.net/p/tei/feature-requests/443/) @resp should be a member of att.global AMBER open. 
 
 
	
	- JC and SR: Global attributes should really not be encouraged.
	
	- JC: Council chair has a moral duty to set the bar high for the addition of any elements
	 to att.global since every element gets them.
	
	- MH: There’s a fundamental disagreement about what @resp is for. LB believes it’s just
	 for the person who decided to apply the tag; I think it’s a more general statement
	 of responsibility. (discussion of [FR 443](https://sourceforge.net/p/tei/feature-requests/443/): [Lou’s comment from July 10](https://www.google.com/url?q=https%3A%2F%2Fsourceforge.net%2Fp%2Ftei%2Ffeature-requests%2F443%2F%3Flimit%3D10%26page%3D3%23e578&sa=D&sntz=1&usg=AFQjCNG-OfpZm-AYaAL-LbkaHfjicL8Wyg) cites the part of the Guidelines supporting his position, whereas the other view
	 is supported by specification for att.responsibility.)
	
	- EM: This is related to (something about the source for evidence).
	
	- LB: Paragraph in \#PHHR beginning “The @resp attribute, by contrast” admits different
	 meanings of @resp on different elements. We first need to decide whether we are comfortable
	 with these various meanings (?) before we try to resolve this ticket. …
	
	- LB: I’d like to formalize the rule that \_\_\_\_ unless \_\_\_ is specified in the document.
	
	- SB: In other words, @resp means \[responsibility for] the markup and content except
	 when the element in question is a transcriptional element, in which case the content
	 \[of the element on which @resp is located] comes from source. Would we then need a
	 list of transcriptional elements?
	
	- LB: We have a class for that. **Action: MH and LB to agree on clarification to Guidelines to say that @resp means
	 different things: responsibility for markup and content except when the element in
	 question is a transcriptional element, in which case the content of the element is
	 marked as coming from the source.**

- [FR 468](https://sourceforge.net/p/tei/feature-requests/468/):
 
 
	
	- HC: 
	 precision expresses false precision that’s not real probability. It’s something more like certainty.
	 Precision is a measure of how far off a measurement is.
	
	- LB: The @degree attribute is defined as the probability that you’re correct.
	
	- SB: Whoever defined this only used data.probability because they wanted 0 to 1\.
	
	- LB: Nevertheless it ought to mean the degree of probability that you’ve got it right.
	
	- SR: Has anyone ever used this?
	
	- EM: I found a set of editorial descriptions which used numbers everywhere, almost
	 at random, as labels.
	
	- LB: This attribute is out there.
	
	- HC: Which is why it should be deprecated.
	
	- JC: So the proposal is to deprecate @degree on the 
	 precision element.
	
	- SB: Should we provide a conversion to att.ranging for people using @degree?
	
	- HC: You can’t convert meaningless to meaningful. **Action: KH to add to the deprecation document the requirement to announce to the community
	 that we plan to deprecate something and to get in touch if you object.****Action: HC to email TEI\-L.****Action on SB to add the @validUntil attribute.**





 15:30 \- 15:45 Break
 

 15:45 \- 17:30 SourceForge Tickets
 
 
 
- Group 7 (BB, JC, MH)
 
 
	
	- [FR 303](https://sourceforge.net/p/tei/feature-requests/303/) check the apache logs for frequent 404s (AMBER open). 
	 
	 
		
		- **Action: JC to ask DS to make the TEI\-C webserver logs available somewhere we can see
		 them; then action on MH to write script to generate lists of bad links of various
		 types. JC also to check google analytics/Webmaster tools. Deadline to report back
		 by next conference call.**
	
	- [FR 305](https://sourceforge.net/p/tei/feature-requests/305/) Updating info on projects page (AMBER open).
	 
	 
		
		- Project pages go out of date. There is a way to submit corrections, on the main Projects
		 page, but that info should be on each individual project page. **Action: JC to ask DS to make that correction info available on each project page,
		 along with its last\-updated date if possible (and the latter should also show up on
		 the bullet\-point list).** Should we manually check them periodically? Should this be Council’s job, or the
		 webmaster’s job? Logically the webmaster, but would he have time? Should the TEI
		 even be maintaining this list of projects? Should we push that decision up to the
		 Board?
		
		- EM: Is the project info any different on our site than it would be on the project’s
		 own site?
		
		- KH: In the submission form, we include some TEI\-specific information that would not
		 necessarily be on their site.
		
		- SR: We could have project info expire after a certain period, and send them a reminder
		 ahead of time. If we move it to the wiki, we still end up responsible for it.
		
		- EM: Actually even obsolete projects are relevant; they just need to have a last\-edited
		 date.
		
		- LB: How does this relate to the lists of TEI projects that other people produce?
		
		- JC: Those are sample files or examples.
		
		- HC: We’re maintaining a list of openly\-available TEI project code that’s not available
		 on github. They’re not lists of projects.
		
		- LB: One of the objectives was to offer TEI projects a validation/labelling that wouldn’t
		 come from a wiki.
		
		- MH: That only makes sense if we’re offering peer review, which we’re not.
	
	- [FR 466](https://sourceforge.net/p/tei/feature-requests/466/) Make it possible to add SIG labels to tickets (AMBER open).
	 
	 
		
		- **Action: JC as SIG Coordinator to tell the SIGs that if they wish, we can make their
		 SIG convener a developer on SF and make it possible to assign SIG labels to tickets.
		 Deadline: next teleconference.**
	
	- [FR 470](https://sourceforge.net/p/tei/feature-requests/470/) att.measurement and att.dimensions overlap (AMBER open).
	 
	 
		
		- We are not really sure why all of these attributes don’t belong in one class. We recommend
		 adding @commodity to att.dimensions, deleting att.measurement and add 
		 measure and 
		 measureGrp to att.dimensions, unless anyone knows of a reason not to.
		
		- SR: We should define @commodity only on 
		 measure
		measureGrp; there’s no reason for all these other elements in att.dimensions to get @commodity.
		 **Action: MH to move @commodity into its own class, and move 
		 measure and 
		 measureGrp to att.dimensions. Ticket to GREEN, assign to MH. \[Subsequent study suggests to MH
		 that this may be more complicated than it seems, and may have to wait on our having
		 the ability to override valLists in attributes from attribute classes at the element
		 level.]**

- Group 8 (PS, RW, LB, SR)
 
 
	
	- [FR 442](https://sourceforge.net/p/tei/feature-requests/442/) Allow 
	 foreign to contain 
	 q (AMBER open).
	 
	 
		
		- The group felt this should be rejected. **Action:SR to close ticket because it’s rejected \[DONE].**
	
	- [FR 433](https://sourceforge.net/p/tei/feature-requests/433/) loosen content model of 
	 salute (AMBER open).
	 
	 
		
		- SR: Underlying this was a desire for symmetry between several pairs of elements. We
		 recommend normalizing 
		 salute so it’s like 
		 signed. This will, for example, allow lists of individuals. **Action: SR will carry this out \[DONE].**
	
	- [FR 477](https://sourceforge.net/p/tei/feature-requests/477/) lines of poetry inside trailer (AMBER open).
	 
	 
		
		- The request is for symmetry between 
		 head and 
		 trailer. The difficulty. **Action: SR to find a good way to achieve this, since what was done before with 
		 head was rather strange. \[DONE; HAVE COPIED WHAT WAS DONE WITH 
		 head.]**
		
		- BB: None of the examples in the ticket were actually trailers.
		
		- LB: 
		 trailers are analogous to 
		 heads. We’ve previously decided to permit lines of verse in 
		 head, so we’re now committed to allowing it in 
		 trailer.
		
		- EM: The Decameron has lots of examples of 
		 trailers with songs in them.
		
		- BB: These are not necessarily 
		 trailers.
		
		- PS: The history is that there are undoubted use\-cases for 
		 heads, and when we allowed 
		 l in 
		 trailer lots of things in TCP got put into 
		 trailer because that capability was there.
		
		- SR: There are other examples that do not involve 
		 l; there’s a 
		 q with a 
		 floatingText inside 
		 trailer (K112795\.002\.tei). Is it reasonable to have a 
		 q inside a 
		 trailer?
		
		- SR: There’s one with a 
		 closer and a 
		 trailer, A49188\.tei.
		
		- PS: I think there are relatively few verse trailers, but one definite one is A87070\.
		 Many others are mistakes, but genuine ones exist.
		
		- BB: I don’t think that’s a 
		 trailer; it says it is, but it’s actually a 
		 closer.
		
		- LB: One of the frequent examples of a trailer is things that say “FINIS”; this one
		 says “instead of “FINIS”.






 Tuesday 12 November 2013
 
 
 09:00 \- 10:30 Tickets and Morning Discussion Session
 
 
 
 Finishing tickets from Monday
 
 
 
 Group 9 (KH, HC, EM, SB)
 
 
 
- [FR 383](https://sourceforge.net/p/tei/feature-requests/383/) where to put 
 idno within 
 biblStruct? (AMBER open)
 
 
	
	- This is one of three tickets where KH could not figure out how to carry out the schema
	 deprecation.
	
	- HC: Create a new ticket to figure out how to deprecate content models?
	
	- KH: I’m not sure the other two tickets also involve deprecating content models.
	
	- SB: Maybe the new (“pure”) ODD element will allow it? Until then, maybe add a 
	 remarks saying this.
	
	- KH: Not sure who could be responsible for the implementation.
	
	- SR: You’d have to have two content models, each with a start date or an end date.
	 How often is this going to actually happen, though?
	
	- LB: Returning to the subject of this ticket: All we need is a Schematron rule saying
	 that 
	 idno is not valid in some locations in 
	 biblStruct.
	
	- SR: You’re just recommending immediate invalidity rather than deprecation. Council
	 wants to do deprecation here.
	
	- SR: We could have the Schematron message.
	
	- MH: Except that lots of people don’t use the Schematron.
	
	- JC: And as Oxygen gets updated people will be using Schematron whether or not they
	 know it.
	
	- SR: But we need a convention that allows us to go back and actually make the change
	 we’ve warned of in the Schematron.
	
	- JC: We need a way to detect those things.
	
	- SR: Perhaps we could have @validUntil on 
	 constraintSpec so that we pick this up later.
	
	- KH: This all started because I couldn’t find the element on which I should put the
	 @validUntil. **Action: KH will create a new ticket pointing to this and the other two tickets with
	 deprecation problems (as listed on the wiki) saying we need a way to deprecate members
	 of content model and reassign to SB to solve the three tickets using a Schematron
	 warning, and to add @validUntil on 
	 constraintSpec.****Action: SR to check how @validUntil makes the build fail when out of date, and if
	 necessary update this mechanism so it can handle @validUntil on 
	 constraintSpec \[DONE. It applies to tei:\*\[@validUntil], so should just work.] . (Ticket 383 will
	 wait on all this, along with the two other tickets.)**

- [FR 366](https://sourceforge.net/p/tei/feature-requests/366/) rationalize content models of org and place (etc) (AMBER open).
 
 
	
	- Group thinks a small group of people including JC should discuss this further.
	
	- JC: 
	 place, 
	 org and other entity ref elements have messy content models because they’ve arisen by
	 accretion. Gabby believes we should streamline these, which makes sense. They have
	 overlapping content models which could be handled by model classes. I did create a
	 very rough proposal which is probably now out of date. Recommendation: a group of
	 people should discuss this and come up with a proposal for Council. **Action: JC to make ticket red, should stay with JC, and he should initiate the process,
	 working with LB and SB.**

- [FR 458](https://sourceforge.net/p/tei/feature-requests/458/) Make 
 listBibl and `model.biblLike` member of `model.personPart` (AMBER open).
 
 
	
	- Lou has already done items (a), (b), (c), and (d) at revision 12279 on 2013\-06\-18,
	 and it appears that (e) has been done as well. It appears that no one has addressed
	 Martin's concern on (c). We see no obvious backwards\-compatibility issues, so we
	 are content for the ticket to be closed.
	
	- **Action on LB: close the ticket.**






 Discussion Topics
 
 
 
- Release Process (see [bottom of wiki agenda page](https://wiki.tei-c.org/index.php/Council_agenda_2013-11#More_Details_on_Agenda_topics))
 
 
	
	- SR: Why are we proposing using alpha and beta?
	
	- MH: Because we were proposing asking the community to help us proof the release, so
	 we want to be able to distinguish between a development version (immediately after
	 a release) and a beta (on which we’re inviting feedback).
	
	- JC: One drawback might be that we don’t know what version number we might be releasing
	 until we get closer to it.
	
	- MH: we can always miss out a number if necessary.
	
	- SR: What if we move to a major version alpha, and later realize we have to go back
	 and fix a few typos, we’d have to change the version number back for that release,
	 then forward again.
	
	- JC: At least two different people have now asked me: P5 keeps changing; could we have
	 a stable version to target for their projects.
	
	- MH: But P5 is the “long term support” version. We just bugfix, basically.
	
	- JC: We do more than bugfix. I worked with some foreign linguists who needed to settle
	 on a specific version in order to have a stable translated source, so they chose P5
	 1\.0\.0 and so are missing out on lots. If they knew 3\.0\.0 would be a good stable candidate
	 they might choose that for their next version.
	
	- LB: What evidence is there that our current practice needs to change?
	
	- SR: If there was a concrete instance of our having dropped support for something…
	
	- KH: I’m quite sympathetic to the idea, on the basis that people may want to cite Jenkins,
	 and it would help people distinguish what is being cited.
	
	- SB: I see this as more straightforward, not as a complication.
	
	- JC: We still have the problem of when we might increment our number assuming a schema
	 change, then have to roll back for a minor release.
	
	- SR: We could (painfully) fork in Subversion if we wanted to, for the minor release
	 . Resolved: we should add the alpha and beta to the build/release process.
	
	- LB: Problem: our data.version will not allow the use of “a” and “b”.
	
	- SR: The TEI release version number is actually just from a text file.
	
	- MH: We never release an “a” or “b” version so that’s not an issue.
	
	- KH: So we need a step in the release process notes to make sure the version number
	 is correct before release.
	
	- MH: There’s also the problem of the release date and/or build date.
	
	- SR: The build date should be correct, and the “Last updated” date should be the date
	 of the last change to the SVN source of the Guidelines. \[Some discussion of moving
	 to GitHub.]
	
	- SR: The idea of building in the SVN date is complicated, especially if someone is
	 building the Guidelines for themselves.
	
	- JC: We don’t want to do anything that slows down our build process unless we get significant
	 benefit from it. **Action: Assign MH to update the release documentation re alpha and beta, and investigate
	 how we might add the SVN last changed date and the rev number to the bottom of pages.
	 \[Latter bit done by SR 2013\-11\-14\. Documentation in TCW22 updated by MH 2013\-11\-14\.]**

- Ideas on how to run an experimental TEI Hackathon \[SR]
 
 
 
	
	- SR: The Board say we’re not doing enough to encourage people to build software around
	 TEI, and it would be a good idea if we could organize hackathons for this purpose.
	 DH 2014 might be a good venue for this, and we were asked to come up with a proposal
	 for how this might work.
	
	- HC: Perhaps this is not exactly Council’s job.
	
	- LB: As Board rep, I’d say that they would say that if something like this were to
	 happen, Council would be miffed if they had not been involved in it.
	
	- JC: Yes, that makes sense.
	
	- EM: Could we go back to them with a request for help with organization and PR, while
	 we go forward with producing datasets and targets.
	
	- LB: Yes, this is a very practical response. Actually putting something like this on
	 does require a lot of organizational effort. Part of the Board’s view is that the
	 Council could spend more time doing this kind of thing and less splitting hairs about
	 version numbers.
	
	- SR: And the Board doesn’t have any resources and has fewer people than we do.
	
	- JC: True, just noting the cost\-benefit analysis: if we have a choice of spending our
	 effort organizing a hackathon as opposed to finishing off work to make a release,
	 I’d rather do the release.
	
	- RW: Perhaps there should be a separate group of people doing this, rather than either
	 the Council or the Board; it could have representatives from both Board and Council․a
	 task force.
	
	- SR: Who would it report to?
	
	- EM: We haven’t yet decided whether we think this is a good idea or not. If we do,
	 we should figure out a way to get it done.
	
	- JC: I do think overall this is a good idea and that Council should be involved in
	 it, but Board should have an organizational role.
	
	- SR: What would Council;’s role be?
	
	- JC: Members would be at the event, with some prepared datasets, targets we’d like
	 people to produce, etc.
	
	- MH: I agree.
	
	- EM: We also need to discuss what happens at DH 2014\. Unless you have very good preparation,
	 a hackathon is unlikely to produce anything. Doing things actually at DH 2014 would
	 not be realistic; things have to be set up and start well beforehand.
	
	- JC: And doing it badly would be worse than not doing it.
	
	- PS: It appears people think this is primarily a good idea for PR purposes.
	
	- SR: Not necessarily; TEI has been primarily theoretical in many ways; this sort of
	 things provides real testing and feedback for us; we’ll learn that there are things
	 we could be producing as part of our build process that would be helpful for developers.
	
	- SB: I don’t yet have a position, but unless it’s previously defined what will be accomplished
	 at a hackathon, you’d spend the whole day figuring out what to do.
	
	- JC: As EM says, you’d have to have all that sorted out ahead of time and people would
	 be bringing the results of their work.
	
	- SR: John Unsworth’s idea was to concentrate on D3\.js visualizations of texts, with
	 everyone in the same room working on the same sort of thing, there’d be a lot of cross\-fertilization.
	
	- JC: Then you can target the PR more effectively. So people would be doing visualizations
	 of ODDs and the Guidelines, as well as document instances?
	
	- EM: We would also want to specify the outcome: the outcome can be a web page, or a
	 method, or a mini\-tool, or something widget\-like.
	
	- SR: A concrete example of this was my work in the summer to use D3\.js to visualize
	 TEI tree elements.
	
	- JC: This would help to make it possible for people actually to use the tree elements
	 in TEI, where currently they wouldn’t because of the rendering difficulties.
	
	- SB: I think we should go forward with RW’s idea. Who should be involved? \[SR, HC and
	 EM volunteered.]
	
	- SR: Is DH 2014 the right venue for this?
	
	- JC: DH 2014 gets a much wider net of people than we’d get at (say) the TEI meeting.
	
	- EM: D3\.js is definitely a winner; it will be popular.
	
	- SR: How would we do this․as a proposed workshop for DH 2014?
	
	- JC: We should ask them whether we should go that way. **Action: JC to approach the DH 2014 committee and find out how they would prefer us
	 to do it, and whether it’s a good idea; and tell the Board that HC, SR and EM are
	 prepared to be involved in organizing this along with one or more Board members.****Action: EM to make sure this happens.** Deadline is December 12 to report back.

- i18n: take forward updating translations
 
 
 
	
	- SR: I’ve done some of the infrastructure work to allow us to produce spreadsheets
	 for each language which we could allow people to work on, to provide updated translations.
	 Moving that data back may have to be done manually.
	
	- LB: All this does is to give us the mechanism to identify the bits that need work.
	
	- SR: We don’t have to commit ourselves to writing an automated method to move data
	 back into the specs from the spreadsheet.
	
	- EM: In a group of people working on translations, you might expect to have one person
	 who could move the data back into the specs.
	
	- SB: We have some issues with keeping the spreadsheets up to date, as specs change
	 while translations are being done.
	
	- LB:I have already been talking to Florence Clavaud about translations; I could go
	 back to her and ask her if the spreadsheet would be easier; if not her, I might be
	 able to find other people.
	
	- SB: The process of using the spreadsheet needs to be thought out. Testing it out with
	 a small group would be a good thing to do.
	
	- SR: In the case of French, we have LB who will be able to keep the process going,
	 but for the other languages, we’ll need to find someone in charge of each language
	 to push it forward.
	
	- JC: You don’t want just anyone doing this; we need some quality control.
	
	- SB: That’s true. We can either use the vetted model where someone is in control, or
	 we could use the wiki model where individuals are responsible for their own contributions.
	
	- MH: I don’t mind being responsible for manually merging the translations.
	
	- LB: We need to put out another call for action and provide oversight for the translation
	 groups. \[MH volunteers for this.]
	
	- SB: Didn’t we have funds for this before?
	
	- SR: We had a small amount. We could offer a bounty for someone willing to complete
	 a particular partially\-finished translation.
	
	- MH: Are we only trying to update the translations we have already, or solicit new
	 ones?
	
	- SR: The Board is rightly concerned that we don’t get on with internationalization.
	 We have to be more active.
	
	- LB: We have to go out and find more people willing to do this work. Part of our problem
	 is that the Council is dominated by English speakers.
	
	- MH: We could target French (through LB), and Italian (when Fabio comes onto Council).
	
	- EM: Do we have tools for making translation easier? Could we provide existing examples
	 that people can work from?
	
	- SR: That is already in the spreadsheets. See http://www.tei\-c.org/Tools/I18N/index.xml
	 for contact details of translators. **Action: MH to get contact info on original groups and activate if possible, probably
	 starting with French and Italian****Action: LB to testdrive the spreadsheet.**






 10:30 \- 10:45 Break
 
 

 Discussion Topics continued: 10\.45\-11\.00
 
 
 
- Attributes without examples
 
 
	
	- RW: For a long time we’ve been talking about the absence of examples for many attributes.
	 About a year ago we generated a list on the wiki of attributes needing examples, but
	 few were addressed. BB and RW were tasked with prioritizing the list, which is now
	 done. The process revealed that half or more were very low priority because what you
	 can put in the attribute is so constrained that examples don’t necessarily help. A
	 few are classified as medium or high priority. Anyone on Council can now revisit those
	 and do them. There are still more where we think that definitions could be improved,
	 and BB and RW will turn those into tickets.
	
	- LB: How many are there in that class?
	
	- RW: 5 to 10\.
	
	- SB: Should we authorize BB and RW to assign those tickets to people?
	
	- RW: Many of them we may just do ourselves, because they’re just ambiguous.
	
	- BB: I noticed that there are five @hand attributes, which raises a red flag for me.
	
	- JC: These are probably instances where we need local modification. Put in a bug report.
	 **Action: BB and RW to turn into bug reports those attributes that are without examples
	 that are high priority or need new/updated definitions.**
	
	- The list of attributes without examples is at [http://wiki.tei\-c.org/index.php/AttsWithoutEgs](https://wiki.tei-c.org/index.php/AttsWithoutEgs).





 11:00 \- 12:30 SourceForge Tickets
 
 
- Group 10
 
 
	
	- [FR 326](https://sourceforge.net/p/tei/feature-requests/326/) an 
	 object element (AMBER open).
	 
	 
		
		- This has been waiting for a proposal from the Ontology SIG. They met in Rome and have
		 sent minutes to SR, who is supposed to present a proposal to Council. This will be
		 dealt with later on the agenda. Leave as Amber.
	
	- [FR 482](https://sourceforge.net/p/tei/feature-requests/482/) The term strikes back \- terminology chapter (AMBER open).
	 
	 
		
		- The ISO is working on a standard for terminological databases, and would like TEI
		 to collaborate. We agree this would be a good idea. LR submitted an ODD, which SB
		 has tweaked a bit. The next stage would be to propose two members of Council to sit
		 on a joint ISO/TEI workgroup. Any volunteers or suggestions? Once we’ve decided, we
		 should respond to LR as soon as possible. LB is ISO representative and volunteers,
		 but ISO groups always meet in remote places and funding would be required. We used
		 to have a TBX chapter; we would be aiming to create a new one.
		
		- KH: I looked at his proposed chapter, and would reorganize it a bit. He hasn’t explained
		 why we aren’t fitting terminological dictionaries into our existing dictionary content.
		
		- MH: Perhaps if it’s to be a joint standard with ISO, it would be better as a separate
		 chapter.
		
		- SR: Do we want to take on this level of work? Why would we do this if there’s already
		 an existing external standard?
		
		- SB: The existing ISO standard is not an ODD\-based standard. LR wants to make it ODD\-based,
		 and for us to integrate it into the standard.
		
		- JC: Under what circumstances do we want chapters in the TEI Guidelines to be also
		 ISO standards?
		
		- KH: If this standard is maintained by a separate standards group, then I’m inclined
		 to say that this should remain in a separate namespace.
		
		- JC: We should go back to him with this question \-\- why should we incorporate this
		 into the TEI namespace, as opposed to keeping it separate as we do with e.g. SVG?
		
		- LB: If we had a chapter that was compatible with TBX, that would also be good for
		 the TEI. What maintenance difficulties would there be? The feature structures have
		 serious problems, specifically in fsd, where the ISO have been too slow in moving
		 forward, but TBX has been stable for a long time now.
		
		- JC: Have we ever made changes that have caused changes to feature structures which
		 would put them out of sync with the original ISO standard?
		
		- SR: If we adopt LR’s proposal, we might be constrained in how we could develop our
		 own 
		 term element because we might take it out of sync with the ISO standard.
		
		- LB: We would not want to adopt the whole text of the ISO standard into the existing
		 Guidelines, because this would be an editorial problem.
		
		- SR: and there would be naming convention issues (
		 descrip instead of 
		 desc).
		
		- LB: So we could instead propose a TEI equivalent of the TBX standard. If we’re going
		 to do it, my vote would be to do it properly (i.e. our way \-\- changing element names
		 etc.). **Action: LB, KH and SB to articulate a more generic policy for TEI on the integration
		 of external standards and will generate a one\-page proposal for this policy. This
		 should be provided to Council ahead of the next teleconference. In addition, LB, KH,
		 and SB will check with Laurent that he wants TBX incorporated into the Guidelines
		 as is or kept in sync in the future and what he thinks about melding into the rest
		 of the TEI Guidelines (in language, approach, element naming conventions) or keeping
		 it self\-contained.**
	
	- [FR 405](https://sourceforge.net/p/tei/feature-requests/405/) Wrong schema generated (AMBER pending\-accepted).
	 
	 
		
		- This is due to a bug in the current version in Roma, which cannot handle attribute
		 overrides very well. The specific problem raised might be avoided temporarily by re\-adding
		 @subtype to 
		 abbr and 
		 title. It looks like this might have been done already.
		
		- SB: Do we have a general rule that we don’t make local modifications in the ODD source
		 which add an element to a class and then remove attributes from that class.
		
		- JC: I thought that was one of the benefits of this override feature.
		
		- SR: I got told in a previous Council meeting that I should not have done that. All
		 the more reason we need a new Roma. **Action: MH to see if it has been fixed, and if so, close the ticket \[DONE].**

- Group 11
 
 
	
	- [FR 294](https://sourceforge.net/p/tei/feature-requests/294/)altIdentifier is deprecated within 
	 msPart (AMBER open).
	 
	 
		
		- **Action: KH to change to Green and add to the ticket about deprecation using Schematron
		 along with 383, if not already done.**
	
	- [FR 264](https://sourceforge.net/p/tei/feature-requests/264/)altIdentifier in 
	 msPart (AMBER pending\-accepted). 
	 
	 
		
		- **Action: JC to change to Green and assign to himself, then nudge Torsten for an example
		 of an 
		 altIdentifier within an 
		 msPart.**
	
	- [FR 300](https://sourceforge.net/p/tei/feature-requests/300/) Move 
	 witStart et al. to model.milestoneLike (AMBER pending). 
	 
	 
		
		- **Action: EM to change to red and assigned to EM to chase up or otherwise close ticket.**
		
		- SB: `model.milestoneLike` may not be the class to add 
		 witStart to, assuming there are good use\-cases.

- Group 12
 
 
	
	- [FR 371](https://sourceforge.net/p/tei/feature-requests/371/) Extend the enumerated values for list/​@type (AMBER open\-rejected).
	 
	 
		
		- Breakout group said we just need to close the ticket. DONE.
	
	- [FR 377](https://sourceforge.net/p/tei/feature-requests/377/) retaining punctuation marks in the text of a TEI document (AMBER open\-accepted).
	 
	 
		
		- RW says she has added the element spec but that it isn’t yet being referenced. She
		 needs to figure out what’s wrong and then add associated prose in the documentation.
		 **Action: RW to finish the work and ask for help if necessary.** Ticket is now Green.
	
	- [FR 345](https://sourceforge.net/p/tei/feature-requests/345/) members of `model.respLike` should be members of `att.declarable` (AMBER open\-later).
	 
	 
		
		- Breakout group instead suggests adding `att.canonical` to all members of `model.respLike` so that 
		 sponsor et al. behaves like 
		 editor. If Laurent still thinks `att.declarable` is needed for something, he can say so on the ticket. The group feels that the use\-case
		 would use @ref; nevertheless, we should go ahead with this anyway, because it makes
		 sense.
		
		- SB: It still strikes me that the better encoding is to put the @ref on a 
		 persName, 
		 orgName or whatever, not on 
		 author or 
		 editor.
		
		- KH: But we’ve long sanctioned this approach, so we should be consistent. **Action: SR to make the ticket Green and go ahead and implement it, including some
		 documentation/examples. \[DONE]**

- From Group 13 (since those doing Group 12 had time)
 
 
	
	- [FR 480](https://sourceforge.net/p/tei/feature-requests/480/) Adding the @hand attribute to all (or most) text\-containing elements (AMBER open).
	 
	 
		
		- Breakout group wants to ask Lou what he thinks since he has feelings about the true
		 meaning of @hand.
		
		- SR: We originally believed that 
		 handShift was the way to do this, but it can be very clumsy, and a more generally\-available
		 @hand might be much more elegant.
		
		- SB: 
		 handShift may be clumsy, but it also runs into trouble when you don’t know for instance whether
		 it applies to 
		 note or not.
		
		- SR: It’s difficult to know what you wouldn’t want to add @hand to.
		
		- KH: We talked about a large class of elements constituting all those which are descendants
		 of 
		 text, which could get attributes like this.
		
		- HC: How would the @hand attribute interact with 
		 handShift?
		
		- JC: Perhaps if you can use @hand on an element, do that, but in the absence of an
		 appropriate element, you can use 
		 handShift.
		
		- LB: The reason for introducing 
		 handShift is that the logical structure of your text might not correspond with an XML hierarchy․in
		 fact it most likely doesn’t. Thus the most natural way to do this is 
		 handShift, but there are circumstances in which @hand is needed. **Action: LB to respond to the ticket [FR 480](https://sourceforge.net/p/tei/feature-requests/480/).**

- Group 14
 
 
 
	
	- [BUG 276](https://sourceforge.net/p/tei/bugs/276/) internationalisation links (AMBER open).
	 
	 
		
		- Language links at bottom of a page should take you to same page, but with examples
		 in the target language. **Action: JC to make Green and allocate to SB.**
	
	- [BUG 594](https://sourceforge.net/p/tei/bugs/594/) TEI\-C website menu points to wrong index page for Guidelines (AMBER open).
	 
	 
		
		- Fixed, will appear in next release. \[But note pulldown menu problem in Chrome] **Action: EM to create a ticket on the Chrome problem.**
	
	- [BUG 619](https://sourceforge.net/p/tei/bugs/619/) tei\_allPlus.rng: conflicting ID\-types for attribute "id" of element "partialdiff"
	 from namespace "http://www.w3\.org/​1998/Math/MathML" at 10862:191 (AMBER open).
	 
	 
		
		- Not able to reproduce (probably due to using older TEI framework in Oxygen 10\). Ticket
		 closed. **Action: SB to double\-check whether able to reproduce and report back on ticket if
		 able to.**





 12:30 \- 14:00 Lunch Break (in Dining Room)
 

 14:00 \- 15:30 Afternoon Discussion Session
 
 
 
- Text Directionality Workgroup: look at [first draft of new Guidelines sections](https://wiki.tei-c.org/index.php/Text_Directionality_Draft) and [questions](https://wiki.tei-c.org/index.php/Text_Directionality_Draft_Questions) \[MH]
 
 
	
	- MH summarized the genesis of this text from Providence. He noted that not only the
	 working group but also Richard Ishida at the W3C and fantasai, one of the authors
	 of the CSS specification, have offered feedback. I’d like us to confirm that we’re
	 going in the right direction with this and figure out where it might be inserted in
	 the Guidelines. Various other Council members said they thought it should go in section
	 10\.6\.6 and that as an author this was the place they would expect to find it there.
	 JC thought it gave quite a lot of detail. MH noted that the specs that it refers to
	 are quite confusing and unlikely to become clearer. LB is concerned that the writing
	 style doesn’t match the other parts of chapter 10\. He also notes that it gives more
	 detail than other topics in that chapter. MH suggested that the rest needs more expansion
	 or that the topics might be simple enough not to require such detail. BB says he’s
	 found the Guidelines vary in the level of detail given. SB said that the lack of balance
	 doesn’t bother him as much as it did when we printed.
	
	- KH: It reads more like a tutorial than a typical Guidelines chapter, but I couldn’t
	 figure out which part would become a cheatsheet. EM(?) pointed out that 10\.6\.6 is
	 in a chapter on manuscript description. Once LB realized that, he felt that even this
	 section needs to be moved out of chapter 10 since it’s not specific to manuscripts.
	 He suggested that it go into “Languages and Character Sets”. We discussed whether
	 this should remain a front matter section. In general, front matter sections don’t
	 define any modules, but they also assume that you don’t know any specific TEI elements
	 yet.
	
	- RW: If we incorporated Martin’s text into this front matter section, could it be modified
	 in a way that it referred to where these elements are defined in other chapters? LB
	 proposed renaming chapter 5 (WD) to “Characters, Glyphs, and Writing Systems” and
	 inserting Martin’s text there. KH added that we should try to fit section 10\.6\.6 into
	 this chapter as well. Everyone agreed, but JC said that we should all read Martin’s
	 draft before then. **Action: Entire Council to (re)read MH’s draft before next face\-to\-face meeting. Once
	 we’ve done that and agreed, someone will rewrite chapter 5 (WD) to include MH’s draft
	 and the current section 10\.6\.6\. LB volunteered.**
	
	- RW: This is the first time I’ve seen a large chunk of prose being incorporated into
	 the Guidelines. How do we attribute authorship?
	
	- MH: I attributed one person who provided an example.
	
	- LB: In the past, we’ve agreed not to credit individuals because the TEI Guidelines
	 are a group effort.
	
	- JC: But we can still thank people in the release notes for major contributions.
	
	- PS: Would you be willing to accept suggestions for concision?
	
	- MH: Absolutely.

- Into the blue yonder: is it time to have a TEI P6 discussion again? \[SR]
 
 
	
	- SB: The only point in moving to P6 is if we make the TEI more expressive. RDF doesn’t
	 easily offer that, but LMNL does, for example.
	
	- HC: We might turn the TEI into an abstract model that could be expressed in various
	 syntaxes: XML, JSON, etc.
	
	- JC: I point you to [http://www.tei\-c.org/Activities/Council/Working/tcw09\.xml](/Activities/Council/Working/tcw09.xml) where we expressed the reasons we might move to P6: the emergence of new technologies
	 or a new architecture:
	
	- Council may break backward compatibility in a more substantial and comprehensive way
	 (as happened with the transition to P4 to P5\) only with the transition to a new major
	 version (e.g., P6, but not P5\.99999\). Such transitions should happen only in response
	 to the emergence of new technologies (e.g., the transition from SGML to XML) or the
	 development of a new architecture that conveys substantial benefit (e.g., the development
	 of the new class system).
	
	- EM: Does “P5” include both the Guidelines prose, the specifications, and the infrastructure?
	
	- JC: Yes, Guidelines, Specs, and ODD, but not software.
	
	- LB: I would not include the stylesheets.
	
	- JC: Is the development of a new ODD enough of a new architecture to warrant P6? I
	 think not. If we wanted to express in RDF, that would be enough to move to P6?
	
	- SB: Why is SR interested in P6?
	
	- JC: Partly he is interested in locking down the TEI into a specific set of choices
	 so that a processing model can be developed and thus software is easier to write.
	 We can do all that with a P5 Customization.
	
	- SB: It sounds like he wants P6 in order to be able to break backwards compatibility.
	
	- MH: If we were to write P5 today, we’d eliminate some things we currently allow. That
	 would be P6\. (?)
	
	- SB: Venturing to P6 just to break backwards compatibility feels like it would cause
	 unwanted trouble for our users. We could, however, develop a customization that removes
	 options for people.
	
	- LB: All proper customizations do this.
	
	- LB: Have a 
	 Journal of the Text Encoding Initiative special issue on how things would work differently if designed from scratch?
	
	- KH: By [tcw09](/Activities/Council/Working/tcw09.xml), we might say that the emergency of JSON warrants the creation of P6 with TEI as
	 a purely abstract model.
	
	- HC: Right. Even though a TEI\-to\-JSON converter exists, is such a JSON document really
	 TEI?
	
	- JC: If TEI were expressed solely as an abstract model, each example and declaration
	 might be able to be expressed in XML or JSON with a toggle button (like the schema
	 syntaxes in the specs).
	
	- EM: It’s incredibly easy to find JavaScript developers but hard to find XSLT people.
	 So an advantage to facilitating the use of JSON is that it would be easier to find
	 developers.
	
	- HC: And it would work better with TEI Boilerplate.
	
	- MH: Would you ever actually edit in JSON, or would you just output to it?
	
	- EM: You would edit if you used some front\-end rather than a text editor.
	
	- JC: I wouldn’t, JSON is an output format to me.
	
	- HC: Still, even if we reworked P5 as an abstract model but the model itself didn’t
	 really change, we need not call it P6\.
	
	- JC: Yes, we wouldn’t meet the requirements for that and so it wouldn’t really be P6\.
	
	- MH: Who has written TEI\-to\-HTML5 conversion already?
	
	- JC: It’s part of the stylesheets package.
	
	- HC: And TEI Boilerplate essentially does this.
	
	- MH: But someone wrote a serialization that does not embed any TEI element or attribute
	 names, and there’s even round\-tripping. But I forget who. In any case, this all depends
	 on a processing model.
	
	- SB: But I think this is a separate matter.
	
	- JC: I would be fine with separating the abstract model and XML syntax in order to
	 allow multiple serializations.
	
	- SB: This would make the Guidelines harder to comprehend (like taking out XML\-specific
	 terms like “element” and “attribute”).
	
	- JC: Those aren’t necessarily specific to XML, they can be understood in a more general
	 way.
	
	- EM: What’s a productive way to continue thinking about this? Collecting examples?
	
	- LB: Maybe a topic for the hackathon?
	
	- MH: I can talk to the Journal of the Text Encoding Initiative editors about a special
	 issue on envisioning P6\.
	
	- LB: Didn’t we once produce a proposal for a workshop to brainstorm on P6? Would be
	 worth looking for it.
	
	- JC: Yes, we asked for funding for it but didn’t get it. We also have the [P6\-dev wiki page](https://wiki.tei-c.org/index.php/P6-dev) to record things we think aren’t suitable in P5\. Though note that our thinking about
	 these does change as P5 evolves.
	
	- MH: Now that we have a solid deprecation model, we could actually handle half of the
	 things on the P6\-dev wiki page!
	
	- JC: Yes, we should periodically look at this page.
	
	- SB: In fact, I think we’ve done a few of the things there already.
	
	- HC: A lot of the resistance to TEI I’ve seen over the years has been to XML as a whole.
	 It’s a barrier as long as we require use of XML.
	
	- LB: We had this same conversation in the SGML years. Our response then was that if
	 a better tool came along, we’d consider it.
	
	- EM: Well, maybe that tool has arrived \[i.e., JSON].
	
	- HC: And if we moved to the abstract model, those people would not resist TEI any more.
	
	- MH: I still don’t see how anyone would use JSON unless we offered an editor.
	
	- EM: But we are spending effort creating a forms\-based interface to constrain options
	 within oXygen. We are already going down that road.
	
	- HC: The TEI’s toolchain essentially depends on XSLT, which limits implementation options.
	
	- LB: I agree that it would be great to find developers who know other tools besides
	 XSLT. But that’s not the same as giving into people who refuse to work with XML.
	
	- SR: How do people manipulate HTML?
	
	- HC: Using JavaScript.
	
	- SR: Then you could do this with TEI as well? HC. Yes, but it’s a problem of perception.
	
	- LB: I actually always describe the TEI as an abstract model which we express in XML
	 for convenience though could be expressed in other syntaxes.
	
	- HC: I agree that it already is.
	
	- SR: We don’t actually try very hard to express an abstract model independent of XML.
	
	- LB: I think we need to blow the trumpet more loudly about SR’s existing TEI\-to\-JSON
	 conversion.





 15:30 \- 15:45 Break
 
 

 15:45 \- 17:30 SourceForge Tickets
 
 
 
- Group 15
 
 
	
	- [BUG 288](https://sourceforge.net/p/tei/bugs/288/) deprecate use of 
	 gram except as a child of 
	 gramGrp (AMBER open\-accepted). 
	 
	 
		
		- \[This is pending creation of new ticket on creating a mechanism for deprecating parts
		 of a content model. Note that 
		 entryFree and 
		 dictScrap can contain either gram or gramGrp as at present. **Action: SB to create the new ticket and write the Schematron for this particular deprecation.**]
	
	- [BUG 515](https://sourceforge.net/p/tei/bugs/515/) Bad example of feature/​@fVal (AMBER open).
	 
	 
		
		- \[Change this to RED as it’s not clear what needs changing for compatibility with LAF
		 (Linguistic Annotation Framework)—e.g., in Guidelines it’s already changed.] **Action: JC to check that’s been changed to RED \[DONE].**
	
	- [BUG 578](https://sourceforge.net/p/tei/bugs/578/) partial and recursive segmentation of s\-units (AMBER open).
	 
	 
		
		- \[The Guidelines text is clear enough. The restriction of 
		 s self\-nesting is implemented only by a schematron constraint; MH offers to revise
		 content model to enforce it. Change to GREEN] **Action: MH will revise content model to match the prose.**
		
		- SB: But note that if we ever change the content model of `macro.phraseSeq`, we will need to remember to update this content model. After discussion, we agreed
		 that we’ll just have to live with this.
	
	- [BUG 298](https://sourceforge.net/p/tei/feature-requests/298/)`att.editLike` should not bring `att.dimensions` \& `att.ranging` (AMBER open\-accepted).
	 
	 
		
		- \[MH to ask Gabriel to implement; go GREEN]. **Action: MH to ask Gabby to implement.**

- Group 16
 
 
	
	- [BUG 302](https://sourceforge.net/p/tei/bugs/302/) version ignores @source (AMBER open).
	 
	 
		
		- This is a Roma issue. Recommend marking as closed won’t fix because it’s beyond the
		 scope of Council activities. **Action: SR to try reproducing this and set as closed\-won’t fix.**
	
	- [BUG 583](https://sourceforge.net/p/tei/bugs/583/) Adding new attribute fails in Roma schema generation (AMBER open).
	 
	 
		
		- Same as 302\. **Action: SR wil set as closed\-won’t fix and check that it has the Roma tag.**
	
	- [BUG 434](https://sourceforge.net/p/tei/bugs/434/) issues with ePub conversion (2/3\) (AMBER open).
	 
	 
		
		- Any issue not dealing with ODD processing should be reported on the GitHub issues
		 page and not be discussed by Council. **Action: SR will ask poster kindly to post there (explaining why) and close this issue.**
		
		- HC: If stylesheets are the Council’s responsibility, how do you want people to contribute
		 to them. Tell people to fork and do a pull requests? Or do we add people to GitHub’s
		 TEIC project?
		
		- SR: Maybe we do the former (the convention) and then invite them to the latter if
		 they contribute a lot? KH agrees.
		
		- HC: Someone currently on Council should always be an administrator on TEIC.
		
		- JC: And the Coucnil Chair should always also be.
	
	- [FR 212](https://sourceforge.net/p/tei/feature-requests/212/) Generic dating class (AMBER pending\-accepted).
	 
	 
		
		- Gabby claimed in 2011 that it’s done except needs some more prose documentation. **Action: HC to investigate whether it’s actually been done. MH offered examples if
		 needed.**

- Group 19
 
 
	
	- [BUG 528](https://sourceforge.net/p/tei/bugs/528/) consistency in "the Guidelines" vs. "these Guidelines" (AMBER open).
	 
	 
		
		- This should be green. **Action: KH to do this.**
	
	- [BUG 548](https://sourceforge.net/p/tei/bugs/548/) use of modal verbs in Guidelines (AMBER pending\-later).
	 
	 
		
		- Already assigned to KH. RW agreed to help. It might lead to a list of questionable
		 cases, which should be put in a new ticket. **Action: KH and RW to create a new, detailed ticket with all questionable cases. In
		 the meantime, LB will fix the edits that KH made at r12525\.**
	
	- [BUG 568](https://sourceforge.net/p/tei/bugs/568/) "How to edit the Guidelines" and chapter organization (AMBER open).
	 
	 
		
		- SR: What MH found looks distinctly weird to him. He can’t think of any special circumstances.
		 Should check with LB and SB. But looking at the latest code, it seems that it’s already
		 been fixed! **Action: MH to replace references to entity references with explanation of XIncludes
		 in “How to edit the Guidelines” \[DONE].**

- Group 17
 
 
	
	- [BUG 585](https://sourceforge.net/p/tei/bugs/585/) Precision element missing `att.ranging` class (AMBER open).
	 
	 
		
		- Working group closed. **Action: EB to ask Gabby to open a new one about clarifying this element and relevant
		 parts of the chapter on dating, to explain and exemplify the use of these attributes.**
	
	- [BUG 589](https://sourceforge.net/p/tei/bugs/589/) add 
	 respons and 
	 space to `att.responsibility` (AMBER open).
	 
	 
		
		- Working group triage: Is it ok to add have @cert piggyback into these elements because
		 of adding to `att.responsibility`? Is @resp significantly semantically different on 
		 space? It is, after all, described quite differently on this element.
		
		- LB: It’s not semantically different. **Action: EM will get rid of locally assigned @resp by adding to `att.responsibility` (thereby getting @cert as well). Will change to GREEN.**
	
	- [BUG 506](https://sourceforge.net/p/tei/bugs/506/) Meaning of @corresp rather in dispute (AMBER open).
	 
	 
		
		- Working group triage: needs to be discussed: Is @corresp strict or general purpose?
		 If @corresp is the general case, then it can be applied ubiquitously. If it’s special
		 case, then need to provide a general attribute to handle the other case.
		
		- SB: If we can find a constituency for a more specific attribute, we should create
		 that.
		
		- \_\_\_: But is there such a community?
		
		- JC (sarcastically): What if we change @corresp to “@relates”?
		
		- LB: I feel that the definition in the Guidelines is quite vague and being used in
		 a way not intended. I feel people should use in more strictly, but given that people
		 are using loosely, we may need to continue allowing it.
		
		- SB: \_\_\_\_\_
		
		- JC: Or we instead tighten the definition and break backwards compatibility.
		
		- EM: The problem is that the example is of one type of correspondence, whereas the
		 prose implies that there are other types of correspondence, whereas Lou feels that
		 it should be used more narrowly. So I don’t feel we can do what JC suggested.
		
		- JC: Perhaps we add a note on @corresp to say that it is intentionally vague in its
		 usage?
		
		- MH: Better yet, add a second example showing how else it could be used. **Action: MH to create an example and run it by tei\-council before adding to the Guidelines.**

- Group 20
 
 
	
	- [BUG 563](https://sourceforge.net/p/tei/bugs/563/) inconsistent encoding of citations to sources of examples (AMBER open).
	 
	 
		
		- Working group recommends assigning ticket to SB who will enlist help to clean this
		 up. (BB, EM, and PS have volunteered to help). **Action: BB, EM, and PS to work on the ticket by mid\-February 2014\.**
	
	- [BUG 582](https://sourceforge.net/p/tei/bugs/582/) Need for consistency in terminology relating to TEI conformance (AMBER open).
	 
	 
		
		- Working group: Agreed \- need to assign to someone.
		
		- LB: I actually think “TEI\-conformable” is a dangerous notion implying some sort of
		 intermediate stage between TEI\-conformant and non\-TEI\-conformant.
		
		- MH: We should raise a separate ticket about possibly doing away with “TEI conformable”.
		 \[Some consensus on the idea that the three paras in USE dealing with TEI\-Conformable
		 are somewhat undesirable.]
		
		- JC: I have a project in which all elements were renamed and put in another namespace,
		 but all with 
		 equivs that point back to TEI elements, and easy to convert to TEI algorithmically. It’s
		 also helpful to be able to call “TEI\-conformable” on a grant application.
		
		- EM: But a lot of people use this terminology to claim conformability.
		
		- LB: We have a clear definition of conformance, and nobody questions that; do we now
		 need the conformable definition at all? **Action: MH to deal with the ticket narrowly, using a hyphen and lowercase but leaving
		 both “conformant” and “conformable” \[DONE].****Action: JC will create a ticket to reconsider the discussion of “conformable” and
		 “conformant” in the Guidelines.**
	
	- [BUG 460](https://sourceforge.net/p/tei/bugs/460/) list/​@type\="unordered" is not recommended, but used often (AMBER open).
	 
		
		- Working group: This bug has had a lot of discussion and a lot of work has been done.
		 Final comment suggests revisit to see if it’s still got work on it. **Action: MH to follow the last comment on ticket to figure out our current situation.**
	
	- [BUG 468](https://sourceforge.net/p/tei/bugs/468/) Order of elements in 
	 publicationStmt (AMBER open\-accepted). Group discussion:
	 
		
		- SB: Despite Lou’s comment on the ticket, I think the content model I propose will
		 accomplish what we want.
		
		- LB admitted that he had misunderstood but that his prose expresses the same thing
		 but noted that we need to test SB’s content model to make sure it’s deterministic.
		 **Action: SB will do the content model and LB will do the prose. They’ll work out the
		 specifics.**






 Wednesday 13 November 2013
 
 
 
 09:00 \- 10:30 Morning Discussion Session
 
 
 
- Council reviewed object description wiki pages before bringing Torsten Schassen online.
 The main purpose of our discussion will be about chartering WG or not. What does “element
 sharing element is part of the issue that the workgroup will address” mean? Refactoring
 some existing elements for more generic purpose. NEDIMAH a European project that has
 a WG on ontologies and linked data which Christian\-Emile and SR chair. They might
 be able to pay for a face\-to\-face of this group. An 
 object element might be analogous to 
 person or 
 place.

- \[Added Stefanie Gehrke via Skype; eventually added Torsten Schassan via Skype]

- - From 09:30: Discussion with Torsten Schassan and Stefanie Gehrke (via Skype) about
	 need for Object Description Chapter (see http://wiki.tei\-c.org/index.php/Council\_agenda\_2013\-11\-OntologySIG
	 and http://www.tei\-c.org/SIG/Ontologies/meetings/m20131003\.html)
	
	- TS: Idea of generalizing 
	 msDesc has been around since at least 2008, finally decided to go for WG. Questions include
	 which wordings in MS need to be changed and which element structures need to be modified.
	 The least that could be done would be to re\-define semantics of some MS description
	 elements. But we don't know yet is whether or not some of the constraints for MS would
	 not apply to non\-MS objects.
	
	- JC: Question: Why TBO instead of any object regardless of whether it has text?
	
	- TS: Answer․says "well, it's the \*T\*EI"
	
	- JC: But what about references from within the text to non\-textual objects.
	
	- Two issues: TBOs and objects in general; we need clarity as to which of these two
	 (or both) this WG is to be working on. Epidoccers have been using 
	 msDesc for non\-MS inscriptions for awhile. MS definition even includes.
	
	- TS: The WG should address this at the very beginning.
	
	- MH: Group that is not addressing generic entity is only solving ½ the problem. 
	 msDesc is not a weird orphaned parallel of 
	 person. A particular MSS might be described by one project as a manuscript and another as
	 a generic object. There is a need for blue\-sky thinking of objects in general; there
	 is also a need to make 
	 msDesc less MSS\-specific. TBOs are a subset of "objects". Thus suggestion (MH) to solve
	 them at the same time.
	
	- SR/SB: observation that describing a TBO is harder, or at least involves more information,
	 than a non\-TBO.
	
	- RW: Maybe the issue is not TBO vs non\-TBO, but rather "what is object's relationship
	 to the TEI document".
	
	- SB: 
	 msDesc in 
	 body is an answer to a particular problem for a particular constituency, it is not parallel
	 to other treatments of metadata. (disagreement on this)
	
	- EM: Would like to base this on examples of problems.
	
	- PS: There are existing practices for describing objects we should pay attention to
	 (e.g., museum folks)
	
	- TS: E.g., our paintings catalogue. Tried to fit into 
	 msDesc, and most of it worked save one issue (which was or is a ticket).
	
	- LB: This WG might take a look at specific examples and see what is missing in TEI
	 to address?
	
	- SG: has data to contribute as well
	
	- JC: Action going forward?
	
	- TS: 2 things: reading chapter, try to find out what wordings should be changed in
	 what way; call to community to bring up areas where current scheme is insufficient.
	 EM requests higher\-level description of problem in general. SR suggests we already
	 have this in FR for 
	 object and use of 
	 msDesc for non\-MSS. TS never thought of this distinction as he always thought it useful
	 to have same elements for metadata and transcription. **Action: TS to come up with a more detailed problem description and what the WG should
	 attempt to solve by 2014\-01\-01\.**
	
	- Problem: one issue or two. EM suggests we need TS to submit document scoping problem
	 space. TS asks if minutes of Rome meeting are sufficient? JC responds not really,
	 need higher\-level scoping document that includes budget request, if any. Council will
	 discuss minutes on list (which TS can read), as a collaborative effort to forge this
	 document before the end of this year.





 10:30 \- 10:45 Break
 

 10:45 \- 12:30 SourceForge Tickets
 
 
- Group 18
 
 
 
	
	- [BUG 581](https://sourceforge.net/p/tei/bugs/581/) \`
	 attRef\` needs better documentation (AMBER open).
	 
	 
		
		- **Action: SR to implement either removal of attRef, MH to adjust documentation.**
	
	- [BUG 405](https://sourceforge.net/p/tei/bugs/405/) XPointer schemes may not nest, but see ch. 16 (AMBER open).
	 
	 
		
		- **Action: SB to fix documentation.**
	
	- [BUG 601](https://sourceforge.net/p/tei/bugs/601/)`att.patternReplacement`/@matchPattern should be XPath regex, not XML Schema (AMBER open).
	 
	 
		
		- **Action: JC to close as a dupe of [FR 432](https://sourceforge.net/p/tei/feature-requests/432/).**

- Group 23
 
 
	
	- [FR 432](https://sourceforge.net/p/tei/feature-requests/432/) Change regex flavor on @matchPattern (GREEN open).
	 
	 
		
		- Agreed, XPath. **Action: MH Write to TEI\-L list, if no negative feedback, change.**
	
	- [FR 469](https://sourceforge.net/p/tei/feature-requests/469/) add extent to `att.dimensions` (GREEN open).
	 
	 
		
		- Agreed. **Action: LB to provide an example in HD chapter (2\.2\.3\) and close ticket.**
	
	- [FR 460](https://sourceforge.net/p/tei/feature-requests/460/) Use of geogFeat in transcription? (GREEN open).
	 
	 
		
		- Ok. **Action: JC to do it before next teleconference.**

- Group 21
 
 
	
	- [BUG 605](https://sourceforge.net/p/tei/bugs/605/) clarifying 
	 add vs. 
	 supplied and 
	 del vs. 
	 surplus (AMBER open).
	 
	 
		
		- **Action: HC to emend the prose of the paragraph beginning "The add element should not
		 be used" to reference the surplus element also; LB points out that the specList can't
		 be modified, because supplied/surplus aren't defined in Core.**
	
	- [BUG 609](https://sourceforge.net/p/tei/bugs/609/) "lemma" used in a confusing way in `CriticalApparatus.xml` (AMBER open).
	 
	 
		
		- **Action: LB to remove the phrase "on any one lemma" from the @varSeq description.**
	
	- [BUG 610](https://sourceforge.net/p/tei/bugs/610/) "lem" used in a confusing way in CriticalApparatus.xml (AMBER open). 
	 
	 
		
		- **Action: BB to remove the last clause of the sentence in question, beginning ", or
		 to make clear".**
	
	- [BUG 558](https://sourceforge.net/p/tei/bugs/558/) name/​orgName (AMBER open). 
	 
	 
		
		- **Action: RW to ask PS where he is on this; change ticket status to GREEN.**

- Group 24
 
 
	
	- [FR 474](https://sourceforge.net/p/tei/feature-requests/474/) add an 
	 exemplum for @ref (GREEN open).
	 
	 
		
		- **Action: JC to poke JC; deadline by next teleconference.**
	
	- [FR 475](https://sourceforge.net/p/tei/feature-requests/475/) Stop using attributes to store space\-delimited values (GREEN open).
	 
	 
		
		- Nothing wrong with space\-delimited attribute values. **Action: JC to Close as Closed\-rejected.**
	
	- [FR 461](https://sourceforge.net/p/tei/feature-requests/461/) Two small improvements to \`
	 recording\` (GREEN open).
	 
	 
		
		- **Action: LB to do this by next teleconference.**
	
	- [FR 467](https://sourceforge.net/p/tei/feature-requests/467/) Make @name optional on tei:relation (GREEN open).
	 
	 
		
		- **Action: SR has already done this.**

- Group 22
 
 
	
	- [BUG 216](https://sourceforge.net/p/tei/bugs/216/) half title pages in TEI Tite (AMBER open\-postponed).
	 
	 
		
		- KH has to finish comparing TEI\-Tite with the Apex version. Then all the problems can
		 be fixed. He says he will get to this in 2014\. **Action: KH to resolve Tite problems and report regularly to Council on progress.****Action: Council to ask for reports before each meeting.**
	
	- [BUG 228](https://sourceforge.net/p/tei/bugs/228/) when and where to capture line breaks (AMBER open\-postponed).
	 
	 
		
		- Same as [BUG 216](https://sourceforge.net/p/tei/bugs/216/)
	
	- [BUG 231](https://sourceforge.net/p/tei/bugs/231/) how to handle forme work (AMBER open\-postponed).
	 
	 
		
		- Same as [BUG 216](https://sourceforge.net/p/tei/bugs/216/)
	
	- [BUG 234](https://sourceforge.net/p/tei/bugs/234/) use of @n on divs (AMBER open\-postponed).
	 
	 
		
		- Tite documentation (or maybe just the example) needs to be clarified to express better
		 practice; otherwise, similar to [BUG 216](https://sourceforge.net/p/tei/bugs/216/).

- Group 25
 
 
	
	- [FR 478](https://sourceforge.net/p/tei/feature-requests/478/) loosening content and model of \`
	 signed\` (GREEN open).
	 
	 
		
		- Agree that is is green. Though would `model.divWrapper` work as well? **Action: SR to implement 
		 signed at top as well as bottom \[DONE].**
	
	- [FR 280](https://sourceforge.net/p/tei/feature-requests/280/) clarification of 
	 colloc (GREEN pending\-accepted).
	 
	 
		
		- \#1 is already done. \#2: Breakout group agreed that the value of @type in the example
		 is meant to indicate the part of speech of the collocate, not the type of collocate.
		 We can add an explanation in section 9\.3\.2 and in remarks in the colloc element spec.
		 \#3: We think that 
		 colloc’s content model should allow \<pos type\="prep"\> inside, or we should remove the @type
		 in the example. If the latter, we shouldn’t do the action recommended for \#2\. **Action: KH to remove @type from both examples, etc.**
	
	- [FR 389](https://sourceforge.net/p/tei/feature-requests/389/) clarify definition of @from on locus and biblScope (GREEN open).
	 
	 
		
		- EM admits to sloth and will do so. **Action: EM to do before next teleconference.**
	
	- [FR 401](https://sourceforge.net/p/tei/feature-requests/401/) extend and clarify use of particDesc and settingDesc (GREEN open).
	 
	 
		
		- JC admits sloth and will implement. **Action: JC to implement before next teleconference; Council decides it might be better
		 to add these (model.**listLike) directly to `model.profileDescPart`. JC to confirm and implement.





 12:50 \- 14:00 Lunch Break (in Meeting Room)
 

 14:00 \- 15:30 Afternoon Discussion Session
 
 
 
- [Cheatsheets: Short best/recommended practice documents](https://wiki.tei-c.org/index.php/TEI_Cheatsheets)
	
	- EM: Not cheatsheets \- negative implication.
	
	- RW: Quick Start.
	
	- HC: Quick Reference;
	
	- SB: “Guidelettes”
	
	- LB: How\-Tos . **Action: EM to ask MB to clarify what she wants from Council with regard to helping
	 cheatsheets.**
	
	- We agree that this is a community effort in which Council has no direct role. Council
	 members may well contribute, of course. We should (not “must”, mind you) keep abreast
	 of them, and if we notice something we disagree with we should speak up, bring it
	 to the author’s attention, or edit it (after all, it is a wiki). We recognize that
	 suggestions are likely to go out of date, but feel there is no direct responsibility
	 for Council to keep these up to date.
	
	- EM points out that these are different from project documentation that has been slightly
	 modified for public consumption, which are also good things.
	
	- MH suggests culling TEI\-L for encoding snippets and advice. SB wonders if that wouldn’t
	 be a good student project — we should ask a DH professor.

- Terminology Chapter, TBX, and [FR 482](https://sourceforge.net/p/tei/feature-requests/482/)
	
	- Earlier we decided:**Action: LB, KH and SB to articulate a more generic policy for TEI on the integration
	 of external standards and will generate a one\-page proposal for this policy. This
	 should be provided to Council ahead of the next teleconference. In addition, LB, KH,
	 and SB will check with Laurent that he wants TBX incorporated into the Guidelines
	 as is or kept in sync in the future and what he thinks about melding into the rest
	 of the TEI Guidelines (in language, approach, element naming conventions) or keeping
	 it self\-contained.**

- LingSIG Meeting and Modelling / Serializing standoff (c.f. [FR 378](https://sourceforge.net/p/tei/feature-requests/378/); c.f. [A Generic Formalism for Encoding Standoff annotations in TEI](https://sourceforge.net/p/tei/feature-requests/_discuss/thread/1e0e4acb/13db/attachment/A%20Generic%20Formalism%20for%20Encoding%20Standoff%20annotations%20in%20TEI.pdf)).
 
 
 
	
	- **Action: JC to ask Peter Stadler if he’d like to attend as Council rep; otherwise any
	 interested members of Council (HC,SB) are encouraged to attend virtually.** Council is interested in ensuring that the results are not just dedicated to linguistic
	 annotation, but address a wider issue. Council feels that the experience of Laurent
	 and Piotr are more than enough to understand workings of the TEI and they can report
	 back to Council if no one is able to attend.

- Correspondence SIG:
 
 
	
	- [http://wiki.tei\-c.org/index.php/SIG:Correspondence/task\-force\-correspDesc](https://wiki.tei-c.org/index.php/SIG:Correspondence/task-force-correspDesc)
	
	- [http://wiki.tei\-c.org/index.php/SIG:Correspondence/draft\-minutes\-rome\-meeting](https://wiki.tei-c.org/index.php/SIG:Correspondence/draft-minutes-rome-meeting)
	
	- [http://wiki.tei\-c.org/index.php/SIG:Correspondence/RequestForModule](https://wiki.tei-c.org/index.php/SIG:Correspondence/RequestForModule)
	
	- JC Thanked the SIG for the update and reported on it with the help of SB. **Action: SB and LB would like to (re?\-)join the task force. Council advises them to
	 keep in mind the work by the Ontology/MS SIGs, in particular Torsten Schassan, on
	 an ‘object’ or ‘objectDesc’ element.**

- Next face\-to\-face meeting
 
 
	
	- Discussion of costs of hosting in various locations considering composition of Council
	 beginning in 2014\. EM offered Brown again. Said that if people will give talks for
	 the Boston\-area DH event, that organization might be able to give honoraria that could
	 be paid to TEI\-C to defray travel reimbursement. (Would need to talk with John Unsworth.)
	 This would take a lot of work to organize, so she would need help. HC said he might
	 be able to host at Duke. EM added that she can host quite a few people at her house.
	 PS said he also has two guest rooms. KH points out that the “Big 10 Center” near O’Hare
	 is another possibility. Oxford remains an attractive option for all the usual reasons
	 (central location, three members on site, convenient transportation.)

- Teleconference
 
 
	
	- JC: We have to have a teleconference early in 2014 with the new members. Do we need
	 one in November or December? EM and HC: The end of the year is really difficult. JC:
	 Maybe incoming/returning Council members can agree to a set schedule of conference
	 calls for the whole year, occurring approximately once every other month. SB: Have
	 a Doodle poll right after a call to schedule the next one? JC: I worry that for some
	 of us that is not enough notice. MH: But others will have an unavoidable conflict
	 that arises even after agreeing to a certain time! Council agrees to try to set up
	 several doodle polls for several months in advance.

- Election
 
 
	
	- Need to elect a new chair. JC has put a [list of steps to follow](https://wiki.tei-c.org/index.php/TEI-Council-FAQ#How_is_the_TEI_Technical_Council_Chair_elected.3F) in the wiki. SB has already modified, others should feel free to do so. Council agrees
	 that the general process should be used this time and then refined as needed.

- Board representative
 
 
	
	- LB: I am a Board member for another year. If Council wishes me to return as a Board
	 rep, I can do that for another year. If the Council decides to no longer invite a
	 Board representative, he will stop joining our meetings.
	
	- SB: The difficulty is that someone might say that having a Board member attend twice
	 a year is a waste of money, but we might also say that LB’s experience specifically
	 is valuable to council.
	
	- PS: So we need to separate the person from their role.
	
	- JC: We don’t have to decide now. We can tell the Board that we would like the Board
	 representative and would like LB in particular. Council also has the right to approach
	 any experts it wants to assist it.
	
	- EM: While LB has actively participated in discussions, he hasn’t really represented
	 the Board very much; instead, he’s just participated in technical discussions.
	
	- SB: I don’t think a Board rep per se is useful or cost\-effective, but we should have
	 the ability to invite experts to help with our discussions.
	
	- LB: Indeed, the Bylaws allow the Council to bring in any experts it likes.
	
	- KH: The chair of the Council can represent the Board to the Council as the Board rep
	 supposedly had been doing.
	
	- JC: We could also have different reps for different meetings: no need for it to be
	 the same person all year.
	
	- SB: I think having a Board rep is not important to have. LB’s sage advice is useful
	 but not in the capacity of a Board rep. After further discussion, and lauding of LB’s
	 support and assistance, Council confirmed that it will defer the decision till later.




15:30 \- 15:45 Break
15:45 \- 16:30 SourceForge Tickets
 
 
 
- Group 26
 
 
	
	- [BUG 229](https://sourceforge.net/p/tei/bugs/229/) Check desc of all xs:anyURI atts for in\-doc restrictions (GREEN pending).
	 
	 
		
		- We got rid of data.code already, but we still need to check all xsd:anyURI attributes.
		 **Action: JC to check prose discussion all xsd:anyURI attributes by next teleconference.**
	
	- [BUG 281](https://sourceforge.net/p/tei/bugs/281/) value of date@when (GREEN open\-postponed).
	 
	 
		
		- This is another Tite ticket being intentionally postponed.
	
	- [BUG 312](https://sourceforge.net/p/tei/bugs/312/) i18n revision due (GREEN open).
	 
	 
		
		- **Action: MH, when he completes action on related ticket (perhaps after moving notes
		 from minutes into tickets), to update this ticket.**
	
	- [BUG 442](https://sourceforge.net/p/tei/bugs/442/) update ODD documentation on www.tei\-c.org and in Guidelines (GREEN open).
	 
	 
		
		- **Action: MH to finish it.**
	
	- [BUG 336](https://sourceforge.net/p/tei/bugs/336/) AdBlock blocks 'msad' ID (GREEN pending\-later).
	 
	 
		
		- Per last comment, time has passed and nothing else has happened. We’ll close the ticket.
		 **Action: JC to close ticket.**
	
	- [BUG 587](https://sourceforge.net/p/tei/bugs/587/) Guidelines version info on pages should link better (GREEN open).
	 
	 
		
		- **Action: JC to carry out his last comment on the ticket.**

- Group 28
 
 
	
	- [BUG 524](https://sourceforge.net/p/tei/bugs/524/) @perf on 
	 tech should be data.pointer(s) (GREEN open\-accepted).
	 
	 
		
		- Done by MH before the meeting.
	
	- [BUG 519](https://sourceforge.net/p/tei/bugs/519/) Make lb, pb, cb, gb consistent (GREEN open\-accepted).
	 
	 
		
		- Council decided to close. **Action: JC to close \[DONE].**
	
	- [BUG 441](https://sourceforge.net/p/tei/bugs/441/) fDecl doesn't allow `att.datcat` yet (GREEN open\-accepted).
	 
	 
		
		- **Action: MH to prod Piotr.**

- Group 29
 
 
	
	- [BUG 525](https://sourceforge.net/p/tei/bugs/525/)citedRange and 
	 biblScope should share att class (GREEN open).
	 
	 
		
		- SB admitted to sloth.
		
		- **Action: SB to complete.**
		
		- **Action: MH to check Allura settings to make sure that the owners of both bugs and
		 feature requests receive email notifications. \[JC and KH looked into this during a
		 break and might have fixed it through another mechanism. MH to check with JC].**
	
	- [BUG 418](https://sourceforge.net/p/tei/bugs/418/) Names and Dates chapter does not mention calendar (GREEN open).
	 
	 
		
		- **Action: JC will add the prose before the next teleconference.**
	
	- [BUG 401](https://sourceforge.net/p/tei/bugs/401/) Most attributes lack good examples (GREEN open\-accepted).
	 
	 
		
		- This was previously discussed. **Action: RW to follow up.**

- Group 30
 
 
	
	- [BUG 314](https://sourceforge.net/p/tei/bugs/314/) deprecated tickets should be accessible from website (GREEN pending\-accepted).
	 
	 
		
		- This is no longer needed under our new deprecation policy, so we closed the ticket.
	
	- [BUG 387](https://sourceforge.net/p/tei/bugs/387/) clarifying heading or title of a graphic (GREEN open).
	 
	 
		
		- LB recently posted a comment approving of the wording. **Action: BB will implement the ticket.**

- Group 31
 
 
	
	- [FR 160](https://sourceforge.net/p/tei/feature-requests/160/) Alignment and documentation of sound files (RED open).
	 
	 
		
		- Assigned to LB, left RED open.
	
	- [FR 176](https://sourceforge.net/p/tei/feature-requests/176/) Cater for audio/video facsimile (RED open).
	 
	 
		
		- Closed\-duplicate of [FR 160](https://sourceforge.net/p/tei/feature-requests/160/).
	
	- [FR 464](https://sourceforge.net/p/tei/feature-requests/464/) Need for some way to test the oxygen\-tei package before release (RED open).
	 
	 
		
		- New ticket on MH — no one knows how to do it yet.
	
	- [FR 342](https://sourceforge.net/p/tei/feature-requests/342/) New section on encoding text directionality (RED open).
	 
	 
		
		- MH work\-in\-progress, changed to AMBER.
	
	- [FR 396](https://sourceforge.net/p/tei/feature-requests/396/)ptr (RED open).
	 
	 
		
		- Closed\-invalid.
	
	- [FR 289](https://sourceforge.net/p/tei/feature-requests/289/)`att.canonical` for `model.persTraitLike` (RED open\-accepted).
	 
	 
		
		- Left RED.

- Group 32
 
 
	
	- [FR 292](https://sourceforge.net/p/tei/feature-requests/292/) add SourceForge feeds to http://www.tei\-c.org/Activities/ (RED open\-later).
	 
	 
		
		- Left RED.
	
	- [FR 324](https://sourceforge.net/p/tei/feature-requests/324/) Allow certainty etc. inside milestoneLike elements (RED open).
	 
	 
		
		- Left RED.
	
	- [FR 369](https://sourceforge.net/p/tei/feature-requests/369/) \*Spec elements could have 
	 keywords or use @ana (RED open).
	 
	 
		
		- Closed\-out\-of\-date.
	
	- [FR 387](https://sourceforge.net/p/tei/feature-requests/387/) allow 
	 head in more places in div\*, table, and list (RED open).
	 
	 
		
		- Made Amber; Assigned PS.
	
	- [FR 393](https://sourceforge.net/p/tei/feature-requests/393/) availability (RED open).
	 
	 
		
		- Made amber; Assigned LB.
	
	- [FR 422](https://sourceforge.net/p/tei/feature-requests/422/) teitoX: support passing configuration to saxon (RED open).
	 
	 
		
		- Made amber; Assigned SR.




Closing remarks
 
 
- JC: Council thanks those members departing at the end of the year, with a fond and
 appreciative farewell. They will, of course, still be expected to complete their tickets
 as active ongoing members of the TEI community. Thank you, all of Council, for your
 hard work over the last 3 days, and for the future.








