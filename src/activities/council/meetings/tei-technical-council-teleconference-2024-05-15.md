---
title: "TEI Technical Council Teleconference, 2024-05-15"
date: 2024-05-15
---
# TEI Technical Council Teleconference, 2024-05-15
### Meeting times


10:30am PDT / 1:30pm EDT / 5:30pm UTC / 7:30pm CEST
### Present:


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Patricia O'Connor (TOC)
* Torsten Roeder @ \~17:40Z (TR)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV) (17:46Z)


### Apologies/Not Present:


* Gustavo Riva (GR)


Transfer of the TEI Listservs
-----------------------------


* Transfer from Brown to Penn State, scheduled May 23, 2024
* Our first posts to the new location may be delayed \~10 minutes.


Next release
------------


* Release techs: **HBS, GR, TR**
* Dates (postponed by one week):
	+ Refrigeration: **Fri 14 Jun → Fri 21 Jun 2024** at Council meeting
	+ Freeze: **Sat 22 Jun → Sat 29 Jun 2024**
	+ Release: **Mon 24 Jun → Mon 01 Jul 2024**


Rescheduling the times and dates of Council/Stylesheets meetings
----------------------------------------------------------------


* When: this summer up to TEI Conference
* Council Tentative Plan to meet on Mondays: **10:00–11:30 PDT \|** **13:00–14:30 EDT \|** **17:00–18:30 UTC \|** **19:00–20:30 CEST**
* HBS will use our preferred date / time from the when2meet for Stylesheets Meetings.
* Next Stylesheets Meeting is Monday May 27 at this new time.
* Council decision to move June release dates forward by one week and June Council Meeting on 21st June (earliest available time)
* Meetings in July and August at designated new times:
	+ **July Council Meeting: Monday July 8**
	+ **August Council meeting: Tues Aug 13**


Buenos Aires F2F October 2024
-----------------------------


* Travel planning notes / updates
* Conference proposals were due May 10; review stage beginning
* Separate Slack channels for
	+ \#f2f\-planning
	+ \#tei\-conference (more general to share with board / non\-Council members in our Slack)


Council chat
------------


* Time to find something better than Slack for preserving our messages?
* See Slack anti\-Slack discussion
* Check out [Matrix](https://matrix.org/)
* HBS: Huma\-Num has a Mattermost instance: [https://documentation.huma\-num.fr/mattermost/](https://documentation.huma-num.fr/mattermost/)
* TR: Form a Task Force to investigate alternatives
	+ EBB, JT


CMC Chapter
-----------


* SVF2F April 27 Council decision: intention to include the CMC chapter in the next release
* [\#2554](https://github.com/TEIC/TEI/issues/2554)  Introduction of the new attribute class (planned for a mentoring session: May 17th)
	+ Where is this class to be available? Should not be limited to CMC module–put it in the tei module.
* **Action SB and EBB:** Update the cmc branch **before** the introduction of the new attribute: update before Fri 17 May 24\.


Odd2Odd (ODD Chaining) problems
-------------------------------


* JT working on [\#678](https://github.com/TEIC/Stylesheets/issues/678), [\#680](https://github.com/TEIC/Stylesheets/issues/680), and the PR [\#681](https://github.com/TEIC/Stylesheets/pull/681) \[But cf. [\#645](https://github.com/TEIC/Stylesheets/issues/645), which may also be related]
* Stylesheets are currently breaking customizations that weren’t broken before.
* JT’s PR is a simple fix, we hope
* Lou Burnard has some chained ODDs to test.
* **Action** on JT to post sample chained ODDs by 2024\-05\-16 — DONE
* **Action** on SB to test (on cmdline) by 2024\-05\-22 — DONE
* **Action** on JT to check with Martin Holmes on how to test in oXygen (without the published plugin) by 2024\-05\-22


Testing and Building Setup and Process
--------------------------------------


* Trouble for several Council members, especially when setting up on new computers
* What do we need to make this better?
	+ Mentoring session can't solve all problems in a 90\-minute call.
	+ What's going wrong for us
		- Windows OS
		- Problem is often for Docker to work in Windows OS
		- Docker container difficult to setup
	+ Variety of tests / builds we run
* **Who has good setup for tests just now?**
	+ - MT (on Mac \+ Docker)
		- MS on Windows (Linux under Windows with WSL2, following Hugh’s instructions on [Building and Testing the TEI Guidelines and Stylesheets](https://teic.github.io/Documentation/TCW/testing_and_building.html))
		- HBS (Ubuntu \+ Docker)
		- EBB (Mac \+ Docker)
		- SB (Ubuntu, but no XeTeX, so no PDF testing)
	+ Peter Stadler: Jenkins tests set on branches
	+ Peter Stadler can walk us through the Docker setup
		- **Action** on HBS to invite Peter Stadler to May 27 Stylesheets Meeting
		- Suggestion: have GitHub testing do more, i.e. entire test suite and building artifacts.
		- Make sure this meeting also addresses the GitHub testing / GitHub Actions environment. RV can assist with this but not until July. JT can also help out.


Tickets with Guidelines 4\.8\.0 release milestone
-------------------------------------------------


* Guidelines PRs
	+ [\#2509](https://github.com/TEIC/TEI/pull/2509) address \#1981 with SchXslt (aka mausatron) instead of skeleton
	+ [\#2540](https://github.com/TEIC/TEI/pull/2540) add missing \<sch:rule\> elements
	+ [\#2552](https://github.com/TEIC/TEI/pull/2552) constrain attributes of elementRef
	+ [\#1996](https://github.com/TEIC/TEI/pull/1996) align teidata.version with Semantic Versioning Specification


* Stylesheets PRs
	+ [\#682](https://github.com/TEIC/Stylesheets/pull/682) styling of new attr lists, fixes [\#657](https://github.com/TEIC/Stylesheets/issues/657)
	+ [\#681](https://github.com/TEIC/Stylesheets/pull/681) Fix regression: duplicate idents in \*Specs


Other Business
--------------


* Q: Why is \<idno\> (rather than \<name\>, \<head\>, or \<label\>) a child of \<moduleSpec\>?
	+ A: Because that is what we changed \<altIdent\> to, because \<idno\> made much more sense than \<name\> for an FPI, and this portion of the specification of a module is used in its FPI.
* tei\_simplePrint.odd still has two IDs duplicated (both “page1” and “OTASH” occur twice)
