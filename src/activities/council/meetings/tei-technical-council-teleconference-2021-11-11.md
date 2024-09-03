---
title: "TEI Technical Council Teleconference, 2021-11-11"
date: 2021-11-11
---
# TEI Technical Council Teleconference, 2021-11-11
**Meeting times:** 


* 10:30am–12:00pm PDT, 1:30pm–3:00pm EDT, 6:30pm–8:00pm BST, 7:30pm–9:00pm CEST
* Started:     18:37Z    Ended:    20:06Z


**Present:**
* Syd Bauman (SB)
* Helena Bermudez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS, chair)
* Sabine Seifert (SS)
* Peter Stadler (PS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)
* with guests:
	+ James Cummings (JC)
	+ Anne Ferger (AF)
	+ Daniel Röwenstrunk (DR)


**Apologies/Not Present:**
* Elli Bleeker (EB)
* Meaghan Brown (MB)
* Jessica Lu (JL)


 
OxGarage/TEIGarage/MEIGarage
----------------------------


* Invited guests: Anne Ferger, Daniel Röwenstrunk, James Cummings
* Slides: [anneferger.github.io/OxTEIMEIGarage](http://anneferger.github.io/OxTEIMEIGarage)
* Interest from multiple communities on their own ‘garage’: MEI, art historians, EpiDoc?
* Retire OxGarage repo and replace it with TEIGarage
* \~4 more years of funding for continued work on OxGarage in Paderborn.
* [https://teigarage.tei\-c.org/](https://teigarage.tei-c.org/) redirect from [https://oxgarage.tei\-c.org/](https://oxgarage.tei-c.org/)
* JC reminds us that the idea for ‘garage’ came from a discussion about the game Grand Theft Auto between Sebastian Rahtz and James where you could drive your car (Document) into it and it would come out ‘pimped’ with new coats of paint or features.
* PS suggests, and consensus seems to be, to send mail (after vetting by Council) to TEI\-L announcing a cut\-over from OxGarage to TEIGarage in roughly 7–8 weeks. JC suggests there should be a CSS change of some sort so people know which they are using, aside from the name change.


Welcome to our new Council members
----------------------------------


* Three initials are now necessary to disambiguate some people and to honour others’ personal preference.
* SB acknowledges EBB’s early wisdom.
* We need mentors for our new members. Membership works out better when mentor/mentee are in the same time zone. Proposed mentorships: PS will mentor SS, SB and HBS will mentor EB.
* PS wants this to be his last year on Council. Would like to follow Martin Holmes’ path, work on TEI from outside, and make room for new people.


Council chair elections
-----------------------


* JJ will be interested “in a year or two” (esp. if MS is willing to mentor JJ this year), but otherwise no one present expresses interest in being Chair, except MS, who would graciously consider staying on for at most 1 more year.
* We need some role documentation — a Chair’s manual, or at least guide.
* And a collection of links for “getting started on Council.” We have [https://wiki.tei\-c.org/index.php?title\=TEI\-Council\-FAQ](https://wiki.tei-c.org/index.php?title=TEI-Council-FAQ), which is good for TEI Council practices, but it’s a bit outdated.


Reminder TCW32
--------------


* Checking pointers document: [https://docs.google.com/document/d/1nAi\_6pB1ayTV3SYAsrf8InKL1T5n8DAdgdhf\-o5RSM8/edit?pli\=1](https://docs.google.com/document/d/1nAi_6pB1ayTV3SYAsrf8InKL1T5n8DAdgdhf-o5RSM8/edit?pli=1)
	+ 1 or 2 more examples to write (SB)
	+ testing examples \#10 and \#15 (EBB)
	+ testing examples \#17, \#18, \#19
	+ proofreading prose (JJ)
	+ MS \& SB need to talk about errors example \#09 (and \#08\) (SB \& MS)
	+ checking over the entire document
		- JC apologises for being very distracted from TEI things and this is on his todo list.
	+ work on \#11 and new, similar but more thorough, example, if necessary (SB and RV will evaluate this).
* **Deadline for above work: Monday, 29 Nov 21\.**


**tei\-to\-markdown**
---------------------


* Should we have a priority list which XSLTs we maintain? This came up during the last Stylesheets group meeting (<https://github.com/TEIC/Stylesheets/pull/432>). Is tei\-to\-markdown.xsl something that we can maintain?
	+ Discussion: probably not necessary since we can transform to HTML, and then have pandoc generate the markdown.
	+ And this can be something we simply set aside with the new reorganization of the Stylesheets group meeting.


SIGs
----


* MS reports there are currently no active conveners for the MS SIG. Gerrit Brüning thinks it should be dormant, but the Council does not agree.
* What’s the procedure for getting new convenors?
* There is also a slight discrepancy between the MSSers who are into cataloging or MSS description vs those who are interested in transcription.
* Reach out via mailing list.


Stylesheets re\-work
--------------------


* SB (on behalf of SB \& Martin Holmes) believes time is now to rewrite the Stylesheets entirely (see [https://wiki.tei\-c.org/index.php?title\=New\_ODD\_processing](https://wiki.tei-c.org/index.php?title=New_ODD_processing) for notes on the burgeoning plan).
	+ JC fully supports the ideas in that document as of today.
	+ RV feels we should support Relax NG in ODD.
* Rewrite the XSLT that processes the subset of the TEI Guidelines into RNG, HTML, etc. ODD chaining is important, too.
* Eventually we archive the original Stylesheets repository.
* Charge a Task Force (with at least one member of Council),
	+ with an assigned Chair.
	+ Council charters this Task Force with deliverables to make, due dates, etc.
	+ SB proposes himself as Chair for this Task Force.
	+ SB, Martin Holmes, and David Maus, and perhaps others, would be the Task Force.
	+ In this case, SB would step down from chairing the Stylesheets group (probably in the next 2–6 months).
* MT would like to progress working with the ODD processing model for releasing the Guidelines without as much pre\-processing.
* MT: ODD chaining support, ideally as a separate module or service will be critical.


 