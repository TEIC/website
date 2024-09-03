---
title: "TEI Technical Council Teleconference 2019-02-18"
date: 2019-02-18
---
# TEI Technical Council Teleconference 2019-02-18
**Present:**


* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Vanessa Bigot Juloux (VBJ)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Magdalena Turska (MT)


Started: 14:06Z, Ended: 15:34Z
Spring F2F, 6–8 May at the Folger Library, Washington DC
--------------------------------------------------------


* Map: <https://goo.gl/bqEA4k>
* EM \& EBB: investigate AirbB\&B options or [https://www.folger.edu/folger\-housing](https://www.folger.edu/folger-housing) : EB (thanks to VBJ's research!): H\-Street Corridor looks good.
* Wendell and Kim recommend the Kimpton Hotels (The Topaz, for example)
* Also older hotels in Dupont circle area


Release follow up
-----------------


* HC \& EM kept “[Release minutes](https://docs.google.com/document/d/1fTrCQrC8tRTZWLGScXKb0R_brwhOoRA6uta4c1hCiu4/edit#heading=h.p9yd01rvss1i)” as they worked. ([https://docs.google.com/document/d/1fTrCQrC8tRTZWLGScXKb0R\_brwhOoRA6uta4c1hCiu4/edit\#heading\=h.p9yd01rvss1i](https://docs.google.com/document/d/1fTrCQrC8tRTZWLGScXKb0R_brwhOoRA6uta4c1hCiu4/edit#heading=h.p9yd01rvss1i))
* Status update TCW 22
	+ EM has finished editing. It needed clarification of some steps, including how GitHub manages releases of zip files: those steps have changed.
	+ Action on HC to review EM's edits in TCW 22 due Fri 2019\-04\-15\. He may also need to add a few notes.
	+ Reminder that one of the release techs should be comfortable with the needed technologies (e.g., command\-line) and have the needed privileges (e.g., Sourceforge login).
* Status of the services
	+ Roma is updated
	+ OxGarage is updated
	+ Debian packages: PS updated them and left note in TCW22 that you have to be running the correct Java environment. Used to put it in the .bashrc but it keeps being removed. We should ask Luis Meneses if there is any automated process that would tweak our startup files. **Action** on MS: send e\-mail to Luis Meneses, CC: Council list (if it’s working) asking if he knows what might be altering our .bashrc file. Due **2019\-03\-18**
	+ Oxygen: Martin is the only person doing that. We need to determine the status. HC isn’t able to build it.
		- SB to ask Martin Holmes to document the process (either in TCW22 or just as e\-mail to Council, whatever is easiest for him).
		- \[Update: Martin Holmes reminded me that we should see the [minutes from Tokyo](https://docs.google.com/document/d/1mR0MCspb3M7GNitnTkoozrf7I7n1kOVRKBv9aBCkWtA/edit#heading=h.gv4zmnv05r84). —SB.]
	+ Improve tests to prevent problems during release, e.g. <https://github.com/TEIC/TEI/issues/1853>
		- SB: Let's look into trying some [XSpec](https://github.com/xspec/xspec/wiki/What-is-XSpec) tests with MH. We need a good testing suite. \[Update: XSpec does not perform validation testing, only unit testing for XSLT or XQuery. Still a good idea to have a thorough test suite, of course. —SB.]
		- PS: What kinds of tests do we need? Tests on things that we've moved to different modules, for example.
		- SB: One possibility is to just post to TEI\-L a few weeks in advance of a published change that may break some ODDs. Another is to try to come up with a formal deprecation\-like method. PS: handle these changes as we do deprecations—much longer announcement period. MS: needs to be in the Release Notes. EM: Not everyone is reading the listserv, so longer\-range record is important.
			* We need a "change" flag in the Guidelines?
			* PS: seems like the problems we're seeing are mostly to do with moving between modules.
		- JC: Ask for stuff (like EEBO TCP, Simple Print, etc) to test on to accumulate in a Testing repo? But this has problems of its own. SB: While having big piles of data to use for testing is not a bad idea, it is a throw of the dice. Might be better to deliberately design test files to stress the system (as we do for the Stylesheets, particularly in Test2/.) For TAPAS I have just started to create the structure of such a test suite; haven’t really fleshed it out. But have a look at [how TAPAS's test suite is organized](https://github.com/NEU-DSG/tapas-TEI-files/tree/master/test_suite).
		- Let's add Testing to F2F Agenda. **Action on MS:** Make sure a chunk of time is set aside for discussing testing at F2F in DC. \[done]


Downtime ADHO server and HumaNum move?
--------------------------------------


* PS and Council concerns: Not much preparation/discussion/communication with Council.
* The situation was reactive.
* EM: Should we have a containerized backup system, like on Digital Ocean?
* HC: Infrastructure planning has been too complacent. JC: Overreliance on ADHO/other services. HC: If TEI managed this itself, we'd probably have to hire a sysadmin. EM: Why is ADHO not paying for a fail\-over system? HC: We don't have direct control over our DNS, we have to go through Christof Schöch. We should keep in mind that Christof is not an actual sysadmin.
* Communication issues: Unclear in the Board meetings where the boundary between exploring server solutions and going with HumaNum happened. So Council didn't know what was happening. Will HumaNum really be better? It's not a paid service, and they're not close to TEI yet, and Laurent is our only connection.
* PS: How can we as Council do a better job of helping with crisis management and sustainable solutions? How does Board make decisions like this and who are their advisors? Why are we not included? JC: We should be their technical advisors.
* Clarification on Luis's role: He's more of a sysadmin than his title suggests. EB and RV: Maybe Luis Meneses and the others (Christof) should be on Slack with us in order to remove some communication barriers.


RomaJS
------


* Test phase for Council: <http://mith.us/romajs/>
	+ RV to send prompts to us shortly for testing and providing feedback
* Raise issues on github <https://github.com/TEIC/romajs/issues>


Discussion on implementation of unihanProp
------------------------------------------


* Issue <https://github.com/TEIC/TEI/issues/1805>
* We received feedback from Lou Burnard and Christian Wittern on our proposal (sent on February 8\)
* MS to set up a meeting of the sub\-group to discuss the feedback we got from Lou, Christian (and maybe Espen), and make a proposal to Council.


Report on rub\-a\-dub\-dub (SB)
-------------------------------


* Little progress since ADHO servers went down; thus not much to report


Tickets
-------


* JC: Note – as triage person for February, I’ve today (February 14\) gone through and assigned unassigned tickets to someone from Council who has spoken on that ticket. If you don’t think that should be you, either unassign yourself and/or let me know.


**Next Stylesheets Meeting**
----------------------------


* Mon 18 Mar 19 at 14:00Z \= 09:00 EST / 14:00 GMT / 15:00 CET
