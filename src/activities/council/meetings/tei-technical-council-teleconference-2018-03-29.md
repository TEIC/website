---
title: "TEI Technical Council Teleconference, 2018-03-29"
date: 2018-03-29
---
# TEI Technical Council Teleconference, 2018-03-29
**Meeting Time:**


* 08:00 EDT, 13:00 BST, 14:00 CEST


**Present:**
* Syd Bauman (SB, late: \~14:50\)
* Elisa Beshero\-Bondar (EB)
* Alex Bia (AB, connected late)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Raff Viglianti (RV)


**Apologies:**
* Magdalena Turska (MT)


TEI conference in Tokyo (September 9–13, Sun–Thu)
-------------------------------------------------


* Workshops are on Sept 9 and 10 the actual conference is Sept 10–13; Board meeting is currently scheduled for Sept 10\. JADH is 9–11\.
* Schedule F2F meeting
* Options:


1. Thu 6th–Sat 8th (EB, JC, MS)
2. Fri 7th–Sun 9th (EB, RV/3, JC, SB, MS, AB)
3. Thu 13th afternoon–Sat 15th (RV/1, MS)
4. Fri 14th–Sun 16th (AB)
5. to split our meeting (RV/2, HC, SB, MS, AB) (tentative choice for now)
	* Fri/Sat: Council meeting
	* Sun: Workshops
	* Mon: Open Council Session


* TEI Council workshop?
	+ Workshops (proposals due April 9\):
		- MT, HC, and EM
		- TEI Introduction/Update (with JADH?) EBB, EM, and MS could reprise their workshop from Mexico City. Shop this to JADH.
	+ Should there a Short Paper or Paper submission on Roma JS?
	+ Poster on [TEI infrastructure](https://github.com/TEIC/TEI/issues/1743)
* Do we want to organize a joint Board\-Council meeting?
	+ Council thinks good as both a meeting followed by a social event.
* Open Council meeting
	+ MS to plan with program chair and local organizers.


ROMA JS report
--------------


* New channel on slack.
* Discussion: interface should clarify that an attribute is \*modified\* on an element vs. \*defined\* there (which should only be the case when a custom attribute is added).
* Clarify what the X’s do: delete the attribute or delete the specification you’ve been defining?
* How to “undo” an action?


OxGarage report
---------------


* PS: Successfully set up new domain [oxgarage\-paderborn.tei\-c.org](https://oxgarage-paderborn.tei-c.org/) (thanks to Ian Rifkin).
* It’s up and running with the [docker image](https://hub.docker.com/r/teic/oxgarage/) from the [oxgarage dev branch](https://github.com/TEIC/oxgarage).
* There is still an [issue with the isoschematron conversion](https://github.com/TEIC/oxgarage/issues/14) (and other minor bugs).
* PS would like to do an OxGarage release, though
	+ start version number at 1\.0\.0 (see minutes [2018\-01\-25](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2018-01-25/)).
	+ JC: Go ahead! Do we have a release documentation for OxGarage release? If not, we should. PS agrees to make a documentation as he undertakes the release. The documentation should make it possible for other Council members to release OxGarage. Post documentation to TCW.
	+ Release on GitHub.  But don’t immediately release on tei\-c.org site until meeting with Ian Rifkin (see below).
* Does anyone have experience with updating OxGarage on tei\-c.org?
	+ JC: I just remember SPQR copying it into place and restarting tomcat / apache. (Not sure we have rights to do that in the new setting?), HC: it looks to me like we have right to (re)start tomcat on tei\-c.org.
	+ We need a meeting with Ian Rifkin to determine if tomcat / jetty can be updated, server specs etc. Note: TEI and ADHO on same server.


Reminder / report on action items from F2F in Cologne
-----------------------------------------------------


* MS: access to website to update minutes
* PS: LingSIG tickets
* EM: measurement proposal
* HC/SB/MH: move to new oXygen jar:
	+ In oxygen\-tei/oxygen\-tei/lib/ there is an oxygen.jar version 2015042116 (probably 16\.1 or 16\.2\). We use that because using a newer version would mean that people with older oXygen versions could not update to the newest TEI framework.
	+ Currently both stable (oxygen\-tei/oxygen\-tei/tei\-c.org/updateSite.oxygen) and bleeding edge (oxygen\-tei/oxygen\-tei/jenkins/updateSite.oxygen) plugins claim (probably correctly) that they are usable with oXygen 15\.2\+. This version number can be queried or reset using the updateSite.xsl in the same directory.
	+ We do not know how old a version one could use with a new oxygen.jar in this position.
	+ We do not know how many users are using the stable plugin, and with what versions of oXygen they are using it. (Could we ask SyncRO for this info?)
	+ There is also a copy of oxygen.jar needed in the build process, and thus lying around on Jenkins (except for Paderborn, as PS notes), which is used only for building the Stylesheets documentation files. I (Syd) do not know what version this is or whether upgrading is required, a good idea, or a bad idea.
* MT/HC/SB: Standoff\-Proposal — have not met yet (and won’t until mid\-April), so no progress to report
* tei\_customization: how do we want to solve conflicting IDs?
* [Infrastructure documentation](https://github.com/TEIC/TEI/issues/1743) (MT, JC, PS, and HC)


Small group meetings outside teleconferences
--------------------------------------------


* Have a look at pull requests
* Discuss / solve tickets
* Address stylesheets issues
* PS: we could upgrade the ticket triage system to 3 people per month; these guys would then do more than just assigning tickets?


Blue sky thinking
-----------------


Tickets
-------


* [1756](https://github.com/TEIC/TEI/issues/1756) event should have ptr and idno in its content model
	+ Most people seem to be in favour. Should JC just go implement?


Ticket triage
-------------




| **March 2018** | **RV** |
| --- | --- |
| **April 2018** | **SS** |
| **May 2018** | **MS** |
| **June 2018** | **HC** |
| **July 2018** | **EB** |
| **August 2018** | **JC** |
| **September 2018** | **EM** |
| **October 2018** | **MT** |
| **November 2018** | **SS** |
| **December 2018** | **AB** |


 