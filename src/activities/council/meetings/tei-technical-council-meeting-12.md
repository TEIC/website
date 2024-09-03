---
title: "TEI Technical Council Meeting"
creator: TEI Technical Council
date: 2014-08-01
---
# TEI Technical Council Meeting,


TEI Council Teleconference Draft Minutes 2014\-08\-01
 
 **Present:**  James Cummings (JC \- Chair), Hugh Cayless (HC), Lou
 Burnard (LB), Martin Holmes (MH), Paul Schaffner (PFS), Stefanie Gehrke (SG), Syd
 Bauman (SB)


**Apologies:**  Fabio Ciotti (FC), Peter Stadler (PWS), Sebastian
 Rahtz (SR), Elli Mylonas (EM)



* Draft Agenda at: [http://wiki.tei\-c.org/index.php/Council\_agenda\_2014\-08](https://wiki.tei-c.org/index.php/Council_agenda_2014-08)
* Amber FR: <http://tinyurl.com/teiCouncilAmberFR>
* Amber Bugs: <http://tinyurl.com/teiCouncilAmberBugs>
* Green FR: <http://tinyurl.com/teiCouncilGreenFR>




 Actions Arising
 
 * **Action on SB to confirm release date.**
* **Action on everyone to look at their tickets and prioritize
 those which are release\-blocking, and those which are desiderata.**
* **Action on SR to report again on TEI Simple after the Oxford
 meeting.**
* **Action on HC to put up a Doodle poll for attendance, arrival
 and departure to assist in booking. Action on HC to confirm who will pay
 initially (Duke or attendees), and then reclaim the cost from the TEI.**
* **Action on JC to email Martin Mueller and all involved in
 organizing the last one to see if they have suggestions on how/whether
 to organize this.**
* **Action on MH to raise a bug on the Stylesheets project about
 localising @rend.**




 Next Release (SB/EM); release cut\-off\-date
 
 Tentative schedule, pending approval (mostly by Elli):



- refrigeration (i.e., code lock\-down) starts Sat 2014\-09\-06: no code
 commits on that day through thaw

- freeze (i.e., prose lock\-down) starts Sat 2014\-09\-13: only typo fixes on
 that day through thaw

- release day Tue 2014\-09\-16

**Action on SB to confirm this.****Action on everyone to look at their tickets and prioritize those
 which are release\-blocking, and those which are desiderata.**






 TEI Simple (SR)
 
 JC: Funded by Mellon. Week\-long meeting planned in Oxford in September with some
 key participants (week of the 20th). This will start looking at the processing
 model proposal. **Action on SR to report again after this
 meeting.**


Reminder to feed back thoughts on CorrespDesc (PWS)
 Some feedback has been
 submitted, keep it up! Discussion on TEI\-CORRESP\-SIG list suggests that the spec
 is still in flux. List archive: [https://listserv.brown.edu/?A0\=TEI\-CORRESP\-SIG](https://listserv.brown.edu/?A0=TEI-CORRESP-SIG). LB: Is
 anyone looking at what CMC SIG is doing? JC looked at this before Rome meeting.
 LB believes their proposals are getting more mature, and there is substantial
 overlap. JC: We suggested to PWS that he contact them; we should make sure that
 happens. LB: They are dealing with large corpora including email, collaborative
 products (wikipedia), and online chats. JC: Shall we propose that the TEI Board
 provide funds to send PWS to their meeting \[where? when?]. Action on JC to ask
 PWS if he can attend, and if so, ask Board for funding.




 Autumn Face2Face (HC)
 
 Confirmed: Mon 2014\-11\-17 through Wed 2014\-11\-19\.


HC needs to know a general estimate of numbers, and will reserve a block of rooms
 at one of the local hotels or conference centers. **Action on HC
 to put up a Doodle poll for attendance, arrival and departure to assist in
 booking. Action on HC to confirm who will pay initially (Duke or attendees),
 and then reclaim the cost from the TEI.** There are no plans as yet for
 Council members to participate in public presentations around the meeting, but
 if they’re going to happen, dates will need to be confirmed soon.




 List Types (MH/SR)
 
 MH values of @rend are suggested in prose, not \<valList\> because of tech
 problem. All uses have been changed. Stylesheets updated. Prose updated in CO to
 suggest use of @rend or @style (@rend rather than @rendition because it is a
 more straightforward conversion, of documents or of practice, from @type). Sole
 remaining recommended value for @type is ‘gloss.’ SB wants to clarify that we
 aren’t specifically recommending @rend but any of @rend/@rendition/@style


MH eventually to add a schematron to warn that use of our formerly recommended
 values of @type is bad practice.


PFS and SB ask about different @type of list and what other values this might
 have? JC: ‘Shopping’, ‘Laundry’; MH: These are really just arbitrary values; it
 seems strange to include them in a suggested value list. @type\=”gloss” is a
 special case because a large part of the chapter is devoted to elaborating its
 usage.


\[Discussion of various types of list and analogies with other elements]


Action on SB: Look at modified chapter and feed back any suggested changes to
 chapter.




 HackAThon at TEI Conf?
 
 HackAThon at DH was successful; however, we might get more useful outcomes from
 holding one at the TEI conference. Should we do this, or is there not enough
 time to prepare? LB is unenthusiastic; if the objective is PR, we don’t need
 that at the TEI conference. SB: If it’s potentially useful, though, it could be
 held at the conference as an experiment. We could give it a try. **Action on JC to email Martin Mueller and all involved in organizing the
 last one to see if they have suggestions on how/whether to organize
 this.** HC points out that the Chicago Colloquium is starting immediately
 afterwards; SB points out this may prevent people from attending both
 hack\-a\-thon and Colloquium.




 Reminder of tickets, actions, etc.
 
 Amber FR: <http://tinyurl.com/teiCouncilAmberFR>


Amber Bugs: <http://tinyurl.com/teiCouncilAmberBugs>


Green FR: <http://tinyurl.com/teiCouncilGreenFR>


Actions from last meeting: [http://www.tei\-c.org/Activities/Council/Meetings/tcm60\.xml\#actions](/Activities/Council/Meetings/tcm60.xml#actions)




 AOB?
 
 LB: Can I carry out ticket <https://sourceforge.net/p/tei/bugs/680/> , which is a
 corrigible error? Council agreed.


SB: gap/supplied/surplus/unclear have locally defined @reason and SB wants to
 factor them into a class; but deleting local deletes version he has added in
 class. LB/SB discuss options. 


MH: Problem with localising @rend in guidelines, but should be able to do things
 like this in the source. LB: Problem is in generation of DTDs (LB explains DTD
 generation problem). **Action on MH to raise a bug on the
 Stylesheets project.**


JC requests a volunteer (preferably someone not standing for election this year)
 to sit on the committee to manage elections for Council and Board. He will email
 continuing members of Council to ask again, since some are absent.


JC thanks everyone for attending and taking minutes.




