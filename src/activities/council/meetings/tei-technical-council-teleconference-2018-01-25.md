---
title: "TEI Technical Council Teleconference, 2018-01-25"
date: 2018-01-25
---
# TEI Technical Council Teleconference, 2018-01-25
**Meeting time:**


* 08:00 EST, 13:00 UK, 14:00 CET
* Started: 13:06Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EBB)
* Alex Bia (AB)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Raff Viglianti (RV)


**Apologies:**
* Magdalena Turska


Next release: January 31
------------------------


* Release branch
	+ HC will create a release branch today or tomorrow.
	+ People should still commit minor updates to dev.
* Issue [\#299](https://github.com/TEIC/TEI/issues/299): HC has gone ahead and removed some elements for the release; others should check that we agree with him. HC suggests we close this one and open a new ticket for the scope of @precision.


F2F meeting in Cologne
----------------------


* [https://docs.google.com/document/d/1CgyTW1lRTy\-\_32TbVJVJpmg9399bgWnjteiExC2neZw/edit\#](https://docs.google.com/document/d/1CgyTW1lRTy-_32TbVJVJpmg9399bgWnjteiExC2neZw/edit#heading=h.nehbrcp8xfmn) F2F Agenda
* The two meeting places are very close to one another.
* Have people booked hotels, which ones? Dates of arrival \& departure
	+ RV and JC will leave on Monday noon.
* Organisation of “Meet the TEI Council”
	+ Monday morning we will organize an open Council session.
	+ Keep some low hanging fruits which we decide beforehand
		- eg. chap 11? (Isn’t that a bit complicated?)
	+ Should we solicit topics? We can also ask people who notify that they want to come, if they have an issue that they are particularly interested in. Some Council members suggest that we control the agenda so as to get work done.
	+ Do participants have to sign up? The room capacity is 30 at a maximum.
	+ PS will talk to organizers about the room and announcement.


Decommissioning jenkins\-oxford.tei\-c.org
------------------------------------------


* JC: Definitely good idea, Jenkins on there has been gone for almost a year now. Just ask Ian Rifkin or Luis Meneses to remove the subdomain. \[DONE: JC has emailed Luis]
* PS: We should have several Jenkins at several institutions. Victoria and Paderborn. Good if we had at least 3, and we could provide tei\-c subdomains pointing to these several services. Oxford is gone. Maybe Pittsburgh coming?


Report on current OxGarage (PS)
-------------------------------


* Tag OxGarage versions (starting with the next TEI release)?
Discussion: Version numbers shouldn’t correspond because we won’t release OxGarage when TEI Guidelines are released.
* Set up OxGarage servers elsewhere and ask Ian Rifkin for tei\-subdomains.
* Docker image available from <https://hub.docker.com/r/teic/oxgarage/> (with Hugh’s latest XSLT3 additions) Saxon 9\.8 installed.
* Issue with TCP test.
* Start version number at 1\.0\.0
* Long range: we need more tests (currently only integration tests; no unit tests).


Report on Pittsburgh supercomputing Jenkins
-------------------------------------------


* EB: (working with Martin Holmes and SB): Consulting with PS about issues with singularity and public web access.


Report on RomaJS
----------------


* Need CSS and UI help
	+ EM: Discuss institutional involvement: ask someone at one of our institutions to devote, say, 10 hours of their work time to CSS/UI stuff.


Report on TEI in Libraries BPGs
-------------------------------


* SB: Getting close, looks like new version will be released well before the Members’ Meeting and Conference, but probably not before our next F2F meeting.
* EM: we have a Feb 1 deadline for all but 1 ticket. This ticket recommends including a \<sourceDoc\> element with ALTO info. We are finishing everything else, reserving this one for the end, as it is a big addition, and also worth doing. See [https://github.com/kshawkin/Best\-Practices\-for\-TEI\-in\-Libraries/issues/27](https://github.com/kshawkin/Best-Practices-for-TEI-in-Libraries/issues/27)


Report on Stylesheets rub\-a\-dub
---------------------------------


* SB: nothing to report


AOB
---


* Next Stylesheets meeting Tue, January 30 14:00Z
* Next week Stand\-Off conference call with Laurent Romary: February 1, 14:00 UTC
