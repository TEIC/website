---
title: "TEI Technical Council Teleconference, 2019-12-10"
date: 2019-12-10
---
# TEI Technical Council Teleconference, 2019-12-10
**Meeting time:**


* EDT 9:00–10:30, GMT 14:00–15:30, CEST 15:00–16:30
* Started: 14:07Z; ended: 15:48Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB) (left @ 15:29Z)
* Hugh Cayless (HC)
* James Cummings (JC)
* Martin Holmes (MH)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Sarah Stanley (SS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux (VBJ)
* Nicholas Cole (NC)
* Jessica Lu (JL)
* Peter Stadler (PS)


 
Next Release 3\.7\.0
--------------------


* Release technicians: RV, EB (\+ newcomers shadowing)
* Release: Thu 02–13; Refrigeration: Thu 01–30, Freeze starts Mon 02–10
	+ \<uniHan\>
		- See the original issue: <https://github.com/TEIC/TEI/issues/1805>
		- Last successful builds:
		\<[https://jenkins.tei\-c.org/job/TEIP5\-branch\-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei\-p5\-doc/en/html/WD.html\#ucsprops](https://jenkins.tei-c.org/job/TEIP5-branch-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/WD.html#ucsprops)\>
		- and specifically the att.gaijiProp class: \<[https://jenkins.tei\-c.org/job/TEIP5\-branch\-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei\-p5\-doc/en/html/ref\-att.gaijiProp.html](https://jenkins.tei-c.org/job/TEIP5-branch-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/ref-att.gaijiProp.html)\>
	+ and the three elements \<localProp\>, \<unicodeProp\> and \<unihanProp\>:
	\<[https://jenkins.tei\-c.org/job/TEIP5\-branch\-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei\-p5\-doc/en/html/ref\-localProp.html](https://jenkins.tei-c.org/job/TEIP5-branch-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/ref-localProp.html)\>
	\<[https://jenkins.tei\-c.org/job/TEIP5\-branch\-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei\-p5\-doc/en/html/ref\-unicodeProp.html](https://jenkins.tei-c.org/job/TEIP5-branch-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/ref-unicodeProp.html)\>
	\<[https://jenkins.tei\-c.org/job/TEIP5\-branch\-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei\-p5\-doc/en/html/ref\-unihanProp.html](https://jenkins.tei-c.org/job/TEIP5-branch-unihan/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/ref-unihanProp.html)\>
	+ In att.gaijiProp, why does the @version not specify that it’s Unicode; or if it’s not intended to be only Unicode, then why are these precise version numbers listed?
	+ Rephrase @version in att.gajiProp: “specifies the version number of  the Unicode standard in which this property name is defined.” (And if we want to suggest other standards, we should provide some explanation.)
		- Instead of specifying a version number, should @version be pointing to a URI of the standard? Providing a standard URL would be ideal, but what if that isn't available?
		- Is there any reason to have @version on \<localProp\>?
	+ We are deprecating the old mechanism, but so far this has only been done with Schematron constraints; need to check to see what should be done with @validUntil instead.
	+ The Guidelines need more documentation: fully\-worked\-out examples in multiple scripts of how one would use this. Also examples that could benefit from using \<localProp\> where it's not a necessity. Brevigraph, ligatures (both! q\-et), examples. See also [Medieval Unicode Font Initiative](https://skaldic.abdn.ac.uk/m.php?p=mufi)
	+ **Action on MS** to call a subgroup meeting with Duncan Paterson in January: Ask Duncan to work up an example, and also have others of us create examples. MH suggests nonexperts be involved. MB volunteered.
	+ Be sure to properly deprecate and deal with elements that are disappearing from the Guidelines. Need to make a list of everything that needs to be fixed.
	+ Develop a stylesheet to convert old to new mechanism.
	+ There are lots of unihan branches in [Duncan's repository](https://github.com/duncdrum/TEI): check with PS and Duncan if we've been looking at the correct one. **Action on MS:** send this query by **2019\-12\-17** (this was not necessary, we found out during the call).
* \<standOff\>
	+ Action on **SB:** see what the world looks like if we factor \<TEI\> out of model.resourceLike, and create a new class for \<TEI\> and \<teiCorpus\>. (Perhaps model.root for now, to come up with a better name later; maybe model.container or model.containerLike)
	+ RV suggests \<teiCorpus\> should not be allowed as a descendant of \<TEI\>
	+ SB to do this in a new branch


Reminder: “TEI Local Build Processes: A Hands On Orientation”
-------------------------------------------------------------


* Wed 2019\-12\-18, 19:00Z/21:00Z (i.e., 11:00/13:00 PST, 14:00/16:00 EST, 19:00/21:00 GMT, 20:00/22:00 CET)
* MH says he can make it. SB 50% chance. MB 75% chance.
* Organisation/preparation of that meeting
	+ **Action on HC** to e\-mail PS to sort out which Docker image to use; one of them to send e\-mail to Council list with instructions **by 2019\-12\-11\.**


Next F2F meeting
----------------


* [previous discussion](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2019-11-19/)
* Our options are:
	+ XML **Prague**, February 13–15
	+ **Buenos Aires** (End of April / 1st week of May):
		- JL unavailable May 3ish–May 13 (advising student Capstone projects to completion)
	+ **Paderborn** (Beginning of March, after (or before) [https://dhd2020\.de](https://dhd2020.de)) — March 2–6
	+ Newcastle (the TEI conference 2021 is in Newcastle, so will be there in early September 2021\)
	+ Warsaw (mid\-May?)
	+ Timing concerns
		- Good weeks for EB are March 7–14, and after April 29\. (juggling classes)
		- March 9–21 are absolutely out for MB
* Annual Meeting: Lincoln October 27–30
* **Action on MS: post a Doodle poll on times (not place) by 2019\-12\-11; Action on ALL to fill out poll by 2019\-12\-13**


Broken oXygen plugin, oxygen issues
-----------------------------------


* Organize a dedicated call
	+ MT has been in touch with Alex Jitianu \& George Bina from SyncRO. They are amenable, but it is not clear yet what it will involve. Needs some guidance from MH / Council list for a detailed description of the problem. **Action on MT**: ask on list for detailed description of problem **by** **2019\-12\-17**
	+ [https://github.com/TEIC/oxygen\-tei/issues/30](https://github.com/TEIC/oxygen-tei/issues/30)
* ODD customization
	+ MH fixed


Report on Triangle SCI
----------------------


* See report in Google Drive
* One of the first goals would be establishing a TEI Workgroup.
* Inspiration / collaboration: <http://multilingualdh.org/en/>.


Proposal on Council terms
-------------------------


* The proposal is ready to be presented to the TEI Board
* **Action on HC \& MS: Raise issue of what is and is not covered for Council member who attends Members’ Meeting with the Board by 2019\-12\-13**


Council chair elections
-----------------------


* [https://wiki.tei\-c.org/index.php?title\=TEI\-Council\-FAQ\#TEI\_Technical\_Council\_Chair](https://wiki.tei-c.org/index.php?title=TEI-Council-FAQ#TEI_Technical_Council_Chair)
* No candidates standing other than Martina
* All in favor by acclamation (no opposed, no abstentions). Congratulations, Martina!


Goodbye to James Cummings, Elli Mylonas, and Sarah Stanley
----------------------------------------------------------


* **Issue for face\-to\-face**: Generate a list of things that should be checked when someone joins Council, and that should be dealt with when someone leaves Council (e.g., GitHub admin, logins to servers, etc.)
* **Action on JC, EM, \& SS**: Go through your own tickets, removing yourselves from those you do not expect to accomplish, leaving yourself on those you do **by 2019\-12\-31**


 