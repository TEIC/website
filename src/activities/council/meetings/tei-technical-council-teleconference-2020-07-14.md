---
layout: page.njk
title: "TEI Technical Council Teleconference, 2020-07-14"
---
# TEI Technical Council Teleconference, 2020-07-14
**Meeting time:**


* EST 09:00–10:30, GMT 14:00–15:30, CEST 15:00–16:30
* Started: 13:05Z; ended: 14:16Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Nicholas Cole (NC)
* Jessica Lu (JL)
* Martina Scholger (MS, Chair)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux (VB)
* Peter Stadler (PS)
* Magdalena Turska (MT)


 
Next release
------------


* Release techs: NC (note taker), HC (lead tech), JL (support tech)
* When: Week of 9–15 Aug, 2020\. Specific target: Tues 08\-11 \& Wed 08\-12
* Content model of \<standOff\>: <https://github.com/TEIC/TEI/issues/1977>
	+ examples for annotation in TEI that describes the use\-cases we envision.
	+ Council agrees: define the content model of \<annotation\> and add some attributes. There has to be a section on \<annotation\> in the Guidelines. RV, NC: will help with writing the documentation.
	+ RV, NC, SB, HC and anyone else who wants to help will meet Tuesday, 7\-21 at 9am EST / 2pm GMT / 3pm CEST to work on this
* Several issues with “Status:Go” added to milestone 4\.1\.0 [https://github.com/TEIC/TEI/issues?q\=is%3Aissue\+is%3Aopen\+label%3A%22Status%3A\+Go%22\+\-label%3A%22Status%3A\+Needs\+Discussion%22\+](https://github.com/TEIC/TEI/issues?q=is%3Aissue+is%3Aopen+label%3A%22Status%3A+Go%22+-label%3A%22Status%3A+Needs+Discussion%22+)


Git branch renaming
-------------------


* New name, timeline, responsibilities
* NC: suggests to use a descriptive name, e.g. “stable” to replace “master”
* RV: “main” is becoming the standard
* SB: descriptive name makes sense, but can we do better than “stable”?
* Proposals
	+ main
	+ **released**
	+ current\-release (most Council members prefer just one word)
	+ release (but better with the past tense)
	+ stable (but is that clear that this is the actually released?
* Consensus seems to be “**released**”, using “**rc\-**X.Y.0” for the branch the release techs are working on, and to keep each **rc\-** branch only until the next release. (i.e., release techs destroy the previous **rc\-** branch when they make the new one.)
* HC volunteers to create “released” branch prior to August release for the TEI and Stylesheets repos. (HC created “released” during the meeting.) Other repos that don't have dev branches (like Documentation) should be changed by someone who feels responsible for that repo (probably to “**main**”).


Report from labeling session
----------------------------


* With thanks to EB, SB, MH, PS, and MS, all the Stylesheets issues have labels now
* SB thinks that, in general, Ticket Triage person should  assign labels to each new Stylesheets ticket, but not assign them to people.


Report Stylesheets circularity
------------------------------


* In a group meeting of a subset of Council (SB, HC, Martin Holmes, MS \& PS) on 2020\-07\-03, and the Stylesheets group meeting of 2020\-07\-07 (SB, EB, MB, HC, NC, JL, MH, MS, \& RV), the Stylesheets circularity issue has been discussed. A working paper will be published as TCW.


SIG Manuscript description / restructuring Chapter 11
-----------------------------------------------------


* Gerrit Brüning volunteers to help with specific questions
* **Action on MS** to contact the current co\-convener Stephen McCormick first and then Yasmin Faghihi and Huw Jones to ask if they want to take over the group as conveners **by 2020\-07\-28**.
* MB and RV started with restructuring Chapter 11\. Expectation is that they will be far enough along to ask the Council, users on the tickets, and the MS\-SIG mailing list to look at their version within a week.


Reminder — Action on
--------------------


* **SB, PS**, and **JL** to discuss issue <https://github.com/TEIC/TEI/issues/1955>
* **SB** and **PS** to work on issue  <https://github.com/TEIC/TEI/issues/1918> (Investigate changing the class membership of \<q\>)
	+ almost done
* **SB:** to ask Piotr to provide ODD for corpus — done
* **SB**: provide a summary categorization of the Exemplar/ ODDs on ticket [\#1916](https://github.com/TEIC/TEI/issues/1916). — done, although not as readable as I might like
* **MS**: write email on @version issue to TEI\-L — send proposal to SB on **2020\-07\-16**.


 