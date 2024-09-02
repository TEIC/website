---
layout: page.njk
title: "TEI Technical Council Teleconference, 2018-12-17"
---
# TEI Technical Council Teleconference, 2018-12-17
**Meeting time:**


* 09:00\-10:30 EST, 14\-15:30 GMT, 15:00\-16:30 CET
* Started: 13:09Z; Ended: \~14:31Z


**Present:**
* Elisa Beshero\-Bondar (EB)
* Syd Bauman (SB)
* Vanessa Bigot Juloux  (VBJ)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)



Spring F2F
----------


* 6–8 May at the Folger Library, Washington DC.
* Do we plan a meeting with the local organizers or a workshop?
* What else, if anything, should we do? A day of lightning talks?
* We will have a meeting with Folger staff. And a Folger staff member will be with us much of the time.
* **Action on RV:**To organize an evening meet up on day 2\.


Next Release
------------


* Release technicians: (HC \& EM)
* January 2019: 21–22? Or can we move it 1 week forward to 28–29 Jan 2019? **Action on MS:** ask EM if that’s OK (HC says it’s OK with him)
	+ Release blocker is Measurement/Unit ticket(s): try to get it finished but could also put release back a few weeks.
	+ Another good ticket to check before the release: ticket [\#1834](https://github.com/TEIC/TEI/issues/1834): List of elements page has sections for every initial letter, and doesn’t work if you have JavaScript turned off. This happens on Jenkins only, not on current released Guidelines. Check to be sure all the anchors are set.
	+ Refrigeration 2 weeks (Mon 07 Jan 19\): no changes to code but small changes like fixing typos in Guidelines (VBJ) OK; freezing 1 week ahead (Mon 14 Jan 19\) when release branch will be made.


Program Committee for TEI conference 2019
-----------------------------------------


* Volunteers for Program Committee: EBB, JC, VBJ, SB, MT


Chair elections
---------------


* MS is willing to continue, and no one else wants to run. MS is elected by fiat.
* Council thanks MS for her year of service.


Report \<standoff\> proposal
----------------------------


* SB, HC, \& MT are working on a counter\-proposal, and have questions for Laurent Romary. SB will be talking to Laurent on Fri. 12/21\.
* Anyway, see [SB’s fork of Laurent’s repo](https://github.com/sydb/stdfSpec/tree/linkDataBlock), the “linkDataBlock” branch
* Laurent will be asked for more use cases that conform to the new model. Specific questions for Laurent. (SB to send with CC to HC, MT, PS, \& RV.)
* Laurent Romary has asked to join sub\-group — Council has no objection. Adding RV to subgroup.


Stylesheets rub\-a\-dub
-----------------------


* Going along almost as scheduled; SB expecting (or at least hoping) to work on it mid\-Jan to mid\-Feb. **Action on SB:** send e\-mail to VBJ (CC: JC) with more info on rub\-a\-dub project by 2018\-12\-24\.


Skype meeting on uniHan element
-------------------------------


* Issue <https://github.com/TEIC/TEI/issues/1805> (RV, HC, SB, MS)
* Want to do a second call with Duncan Paterson and Martin Holmes.


Roma JS
-------


* RV has updated [GitHub issues](https://github.com/TEIC/romajs/milestone/3) so we can see what’s in progress.
* Has working system in place for I18N.
	+ RV will be needing translations eventually. Strings in different languages will be read from a JSON file. Probably ask people to work with the JSON file directly (or convert to XML to convert back easily).
		- VBJ for French
		- MS for German
		- RV for Italian (current test second language)
* MS will have people at her center willing to test ROMA JS.
* Loading time of data into system is still slow, seems to hang for several seconds. Trying to improve this—while loading data, still display lists of elements that people can work with for example. Partly/likely due to OxGarage—let’s see if we can find out where the lag is coming from.


Report on DARIAH theme call
---------------------------


* Marjorie Burghart on developing a TEI XML editor [https://www.dariah.eu/2018/11/05/dariah\-theme\-funding\-call\-2018\-2019\-meet\-the\-winning\-projects/](https://www.dariah.eu/2018/11/05/dariah-theme-funding-call-2018-2019-meet-the-winning-projects/)
* MS reports M. Burghart’s project was funded, but for a lesser amount.


AOB
---


* VBJ will join next 2019 meeting on lexicography in Lyon in order to report remarks of lexicographers (members of Consortium Cahier <https://cahier.hypotheses.org>) using TEI. Geoffrey Williams—20\-year user of TEI (he was also the president of [EURALEX](https://euralex.org)). VBJ will be present to relay perspective to TEI Council.


Tickets
-------


* <https://github.com/TEIC/TEI/issues/1834>: Guidelines page links broken
* <https://github.com/TEIC/TEI/issues/327>: An \<object\> element
	+ Most of us are objecting to \<objIdentifier\>. Either \<objectIdentifier\> or \<objectId\> (more complex than \<idno\>).
	+ Discussion: \<msContents\> and \<msItem\> go here, but what else?
	+ MS asks whether \<msDesc\> is a valid member of \<object\>? Currently it appears to be valid—is that what’s expected? SB: should be \<objectDesc\> instead?
	+ Worry that this work is on the dev branch: is it going to be ready for release? Check with JC if he can move it to a branch, or finish it by early January for next release.
		- Need to test new elements, dependencies, comb the new language for the Guidelines carefully.
		- Maybe this is more ready to go than Unit/Measure and Council should concentrate its energies on preparing this for release.
		- Special call in early January? Or nudge to have work done by 10 January.
		- **Action on HC and MS** to study and test this.


**Next Stylesheets Meeting** at 16:00 EST Friday 21 Dec.
Ticket triage
-------------




| **November 2018** | **SS** |
| --- | --- |
| **December 2018** | **SB** |
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
| **November 2019** | **MS** |
| **December 2019** | **VBJ** |


 