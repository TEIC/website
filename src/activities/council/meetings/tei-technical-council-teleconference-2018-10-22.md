---
title: "TEI Technical Council Teleconference, 2018-10-22"
date: 2018-10-22
---
# TEI Technical Council Teleconference, 2018-10-22
**Meeting time:**


* 09:00\-10:30 EDT, 14\-15:30 BST, 15:00\-15:30 CEST
* Started @ \~13:06Z; ended @ 14:29Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Vanessa Bigot Juloux (VBJ)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM) leaves @ 14:00Z
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Magdalena Turska (MT)
* Raff Viglianti (RV) joins 13:10Z


**Apologies/Not Present:**
* Alex Bia


Spring F2F
----------


* Dates: We’re liking May 2–13\. (May 9 and 11 are bad for PS)
* EM: Brown University, Providence
	+ Long weekend Feb. 16–19
	+ Spring break Mar. 23–31 (German DHd conference Mar. 25–29, PS \+ MS probably unavailable)
	+ May is ok here as well.
* JC: Newcastle University
	+ TEI Workshop 01–05 April? (So week following that: 06–09ish April?) April is not good for VBJ. What about week before the workshop (end of March?) JC needs to check availability of buildings, etc. depending on dates. Could do May as well.
* RV: Folger Library, Washington
	+ April? or Late March. Would May work?
	+ Folger is a very cool place. Big TEI users. Joe Wicentowski is also in DC.
* MT: Warsaw: Two venues possible in the city center, University of Warsaw (Laboratory of Digital Humanities) or Polish Academy of Science (Centre of Digital Humanities at Literary Studies Institute).
	+ May
* **Action on MS**: set up a doodle for 02 May to 16 May.


F2F meeting Graz
----------------


* TEI Conference will be Mon 16 to Fri 20 Sep 2019, Workshops will be Mon \& Tue.
* Plan for either Fri.–Sun. or Sat.–Mon. before (overlapping with first day of workshops)
	+ Easier for EB and others teaching if Sat.–Mon for Council meetings.
* Do we need an official policy for having people on Council meetings? Consensus seems to be that ad hoc invitations are fine.


Monthly date for the teleconference
-----------------------------------


* Alternating e.g. 3rd Monday (December 17, 13:00Z) and 3rd Friday (November 16, 20Z) a month? VBJ (and RV) will not be available on Nov. 16th.
* Doodle every month? —no


Monthly schedule for Stylesheets group teleconferences
------------------------------------------------------


* Used to be one week after the Council meeting.
* We’ll shoot for opposite of Council meeting — those months when Council is on Mon 13Z, we’ll meet on Fri 20Z; when Council meets Fri 20Z, we’ll meet Mon 13Z.


TEI Council chair elections
---------------------------


* See bylaws: [https://wiki.tei\-c.org/index.php/TEI\-Council\-FAQ\#How\_is\_the\_TEI\_Technical\_Council\_Chair\_elected.3F](https://wiki.tei-c.org/index.php/TEI-Council-FAQ#How_is_the_TEI_Technical_Council_Chair_elected.3F)
* “Up until around the last Friday in November those who are Council  members for next year will consider whether they want to run to be Chair of the TEI Technical Council. Before that date those intending to stand should send a statement of some sort to the Council mailing list detailing why they think the council members should vote for them.”
* For reference the bylaws say only:
	+ The Chair of the Technical Council shall be elected by the voting Members of the TEI\-C Technical Council from its membership and shall serve as the chief technical officer of the Consortium. If no Technical Council Member is able or willing to assume the chair, the Technical Council may request the Board of Directors to second one of its elected members to the role, or it may nominate a non\-elected individual.
	+ The Chair of the Technical Council shall be an ex\-officio non\-voting Director, responsible to the Consortium for its technical activities, notably the maintenance and development of the Guidelines.
	+ The Council Chair shall, if present, preside at all meetings of the Technical Council and report on its activities to the Board of Directors and at Meetings of the Members.


Restructuring Chapter 11
------------------------


* MS: Meeting with Gerrit Brüning (new convener of MS SIG)
* Gerrit Brüning and Stephen McCormick are
* working on de\-emphasizing the heavy genetic emphasis in that chapter, see [https://github.com/SteveWLU/TEI\-MS\-SIG/blob/master/ch\-11\-issues.md](https://github.com/SteveWLU/TEI-MS-SIG/blob/master/ch-11-issues.md).
* Workflow for restructuring
	+ Structuring of the chapter in TEI\-MS\-SIG repo.
	+ Report on ticket (link to ticket?).
	+ Work in a branch: How do we work together with non\-Council members on a branch? Or just multiple people working together on a branch. Need protocols? Mandatory pull requests to dev. Pull requests should always be the way we merge branches to dev.
	+ They should try to preserve division xml:id’s even when moving material around.
	+ Request Jenkins build for the branch — because the chapter changes will be major.
		- PS: Travis is building every branch automatically — and you can see if and where the tests fail, but you don’t get the build artifacts.
		- If someone asks PS to check a dedicated branch on Paderborn Jenkins, that’s okay with him.
			* Same for MITH Jenkins (RV)
	+ VBJ: Adding examples on ancient Near Eastern cuneiform tablets.


Tickets from Tokyo
------------------


* <https://github.com/TEIC/TEI/issues/1795> \- Language of Schematron messages where @role\="nonfatal" and @role\="warning"
	+ EB: Related: Issue with merging <https://github.com/TEIC/TEI/issues/1621> into dev branch — apparently something breaks the Jenkins build — investigating. EB: to resolve before next Council meeting.
* <https://github.com/TEIC/TEI/issues/1707>: EB: quick update on measurement: Naoki Kokaze’s new sample code based on Tokyo decisions.
	+ Adding discussion to ticket: We need to make really clear that the @formula takes a value in @fromUnit and converts it to @toUnit (and not the other way around). And be really clear to disambiguate @from and @to (which are dates) from @fromUnit and @toUnit. We should present this is as a template for a function, rather than the function itself.
	+ Values should be pulled from @quantity on \<unit\> element.
* <https://github.com/TEIC/TEI/issues/1805>: Suggestion for new \<uniHan\> element
* <https://github.com/TEIC/TEI/issues/1756>: event should have \<ptr\> and \<idno\> in its content model
	+ JC will update this issue before next meeting.
	+ VBJ: want to check with my TEI preliminary hermeneutics of action since I shall be able to add further examples since I’m studying action (person/action/event/place).


AOB
---


* SB, HC, \& MT need 3 mins (after conference call is fine) to schedule a meeting to work on \<standoff\> proposal.
* TEI workshop for ancient Near Eastern (ANE) scholars during the international conference of Assyriologists in July (Paris) — [https://iaassyriology.com/past\-rencontres/](https://iaassyriology.com/past-rencontres/) —scheduled for the next monthly meeting.


Ticket triage
-------------


* please add yourselves




| **October 2018** | **MT** |
| --- | --- |
| **November 2018** | **SS** |
| **December 2018** | **AB** |
| **January 2019** | **MS** |
| **February 2019** | **JC** |
| **March 2019** | **SB** |
| **April 2019** | **RV** |
| **May 2019** | **SS** |
| **June 2019** | **SB** |
| **July 2019** | **EB** |
| **August 2019** | **HC** |
| **September 2019** | **EM** |
| **October 2019** | **MT** |


 