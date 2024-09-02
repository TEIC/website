---
layout: page.njk
title: "TEI Technical Council Teleconference, 2023-08-11"
---
# TEI Technical Council Teleconference, 2023-08-11
### Meeting times


* 6:30am PST / 9:30am EST / 2:30pm UTC / 3:30pm CET
* Started: 14:35Z Ended: 16:05Z


### Present:


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Patricia O'Connor (TOC)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


### Apologies/Not Present:


* Elli Bleeker (EB)
* Martina Scholger (MS)


Previous meeting minutes: [July 2023](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2023-07-17/)
Paderborn F2F preparations
--------------------------


* Dates: Sunday 03 (morning)–Tuesday 05 (midday) September
* SIGs planning
	+ **Action completed by EBB** to ask SIG conveners for short presentations/reports for the Annual Meeting


Text and Graphics SIG revival
-----------------------------


* John Walsh and Martin de la Iglesia are the previous co\-conveners
* **Action on EBB**: check on status of room for SIG with Peter Stadler / conference organizers by 2023\-08\-12
* **Action on SB**: check on status of their Listserv and if they are on SIG conveners list by 2023\-08\-18
* RV reports probably room on Wednesday for them to meet


Janelle Jenstad (JJ) resignation
--------------------------------


* Farewell from JJ, who resigns from council activity a few months before the end of her term, on 2023\-08\-31\.
* **Action on SB and TOC**: re\-assign JJ’s GitHub tickets during normal ticket assignment this month, i.e. **by** 2023\-08\-31
* RV notes we may wish to remind nominating committee to nominate women next year.
* Election thoughts:
	+ JT is filling in for EB until at least 01 January 2024
	+ JT is running for election, too
	+ We have an extra role from 01 September 2023 – 31 December 2023
	+ If JT is **not** elected, he either remains or departs depending on EB’s schedule
	+ If JT **is** elected, we may need someone else to fill in for EB if she does not return on 01 January 24
	+ **Action completed by EBB**: Ask Nicholas Cole to fill JJ slot 01 September – 31 December 2023\. (Nicholas accepted.)


Infrastructure Group update
---------------------------


* Listserv transfer update
	+ EBB reports that transfer of lists from Brown to PSU has been tested and is scheduled to occur **Thursday October 19**
	+ Brown mailing address will stay the same for years/decades probably, mails get forwarded to PSU
	+ people might want to update their mail filters etc., as the new mails will come from a different address
	+ **Action completed by EBB:** send a notice about these changes on mailing lists
	+ **Action completed by EBB:** Confirmed with Diane J. that there will be an infrastructure report at the Members’ Meeting in Paderborn.
* Website
	+ HC working on setting up an Eleventy version of TEI website
		- Trying to deal with JavaScript chaos to avoid outdated dependencies
		- **Action completed by EBB:** Arranged for an hour at F2F agenda on Sunday, 03 September 2023 for HC to report and Council to discuss \[Confirmed **by** 2023\-08\-25].


What's up with GitHub dependabot?
---------------------------------


* Question raised by Martin Holmes on Slack: <https://github.com/TEIC/teic.github.io/security/dependabot>
	+ HC/RV: just deleting will probably be fine, no security problem, just client functions
	+ RV volunteers to have a look at it
	+ HC/RV: Seems to be associated with an old attempt to build the Guidelines with GitHub Pages so we could potentially get rid of it or have an action in place to build it regularly
		- JT: Should be resolved with the new website but to be aware that the TCWs and some PDFs (including Lou Burnard’s “ODD Chaining” Guide) are served at teic.github.io—the TCWs are accessible via tei\-c.org, but the PDFs are only available through teic.github.io (and have been cited, so should either stay or be redirected if the teic.github.io repo is deleted).
		- RV: Potential solution: Put an index in place to redirect people to the TCWs.
	+ SB: We don't need to be building from dev branch as much as building of *other* branches. HC says should not be hard to do.


* Error flags an old version of JQuery in guidelines/de/html (<https://github.com/TEIC/teic.github.io/tree/master/guidelines/de/html> ), maybe an old build product? (Why only “de” version and not other languages?)
* Should we just remove the old build of the Guidelines being referenced?


Updating documentation re TEI P5 subset (SB, SS, TOC)
-----------------------------------------------------


* SB, TOC, \& SS met Friday 07\-28 in an attempt to update p5subset from SS \& TOC machines.
* Session was unsuccessful, see the issues specified in section “[p5subset update problems](https://docs.google.com/document/d/1lhwICFL9NB8EuxUKQLw2m1sf_YEFxnRQyPXmtaASHe8/edit#heading=h.4t18qejcd2nk)”.
* Running Test2 in a docker failed for SS because when the file inputFiles/invalidInstances/testAttValQuantInvalidInstance.xml is validated the output file (of error msgs) has replaced the character ‘Ǖ’ with the character ‘?’ in attribute names. (This does not happen on SB’s local machine.)
* problem for TOC on Win Laptop: curl not working from within Docker (possibly a problem for other Win Laptop users?)
* HC: perhaps security problem/configuration problem of Docker in Windows, perhaps because of tighter security rules. Need to get a configuration within Docker to resolve this particular issue. Potential easy solution: Change http to https?
* problem SS on Win Laptop: error message “../bin/teitorelaxng: 1: transformtei: not found” in the “oddFileToRng” target. Thus it seems that when Test2/build\_odds.xml tries to run transformtei via the teitorelaxng symlink the system is not properly following the symlink.
* **Action on EBB**: Block time to have a group session on Docker to test and troubleshoot issues.
* **Action on EBB:** Test subset generation process on Windows machine, to see if she gets the same pointing error.
* **Action on Council:** help test docker build before Paderborn


ATOP tickets
------------


* [\#2454](https://github.com/TEIC/TEI/issues/2454): Which ODD processors should be magic?
	+ ATOP group's favored answer: (1\), no magic!
	+ Council votes to close ticket in agreement with ATOP’s favored approach.


rnv version problem (SB)
* Issue 1981 updates are not ready for PR yet due to this problem
* rnv is one of the Relax NG validators we use in the build process
* rnv 1\.7\.8 correctly validates xsd:boolean
* rnv 1\.8\.0 (which is what is in docker) **incorrectly**(?) flags “1” (and “0”, presumably) as an error.
* Anyone know if XSD changed? — RV checked and affirms it has not
* In tests SB got error from oXygen 25\.1 when no schema explicitly associated
* test file(s) are attached to ticket [\#2455](https://github.com/TEIC/TEI/issues/2455)
* **Action on HBS:** Test to see if it is a general issue.


TEI Lite2 customization
-----------------------


* Reminder: Resolved at Guelph F2F: discuss / assign actions before next TEI release
	+ Absorb simplePrint into TEI Lite schema
	+ Updates to [https://tei\-c.org/guidelines/customization/](https://tei-c.org/guidelines/customization/) ?
* Update / actions so far on:


* Lite2 should be more like an "on ramp" that doesn't cover all cases but takes us quite far as common ground.
* Getting started drafting a paragraph for the Customization page and the [TEI Lite](https://tei-c.org/guidelines/customization/Lite/) page that Council can review **(JJ, or reassign?)**
* Lite2 customization progress
* (Review from last month): MT merging teipublisher.odd with teiSimplePrint.odd: a few "default" models are added, while superfluous teiSimplePrint ones removed.
* Next up: "Diff" TEI Simple and TEI Lite so Council can decide what to do about them. MT's proposal is to largely include the elements from Simple which were not present in Lite (but remove numbered divs if they are present in Lite).
	+ Question: What's the most efficient way to get a list of the elements from RNG ? Answer: Use XML syntax and XPath
* Need to update Lite and other customisations also mentioned in Chapter 22 at: [https://tei\-c.org/release/doc/tei\-p5\-doc/en/html/USE.html\#MDlite](https://tei-c.org/release/doc/tei-p5-doc/en/html/USE.html#MDlite)
