---
layout: page.njk
title: "TEI Technical Council Teleconference, 2022-02-11"
---
# TEI Technical Council Teleconference, 2022-02-11
**Meeting Times:**


* 7am PST / 10am EST / 3pm BST / 4pm CEST
* Started:     \~15:04Z    Ended:    16:36Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS, Chair)
* Sabine Seifert (SS)
* Peter Stadler (PS)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Elli Bleeker (EB)
* Magdalena Turska (MT)


Meeting minutes previous month ([January](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2022-01-14/))
 


Next release
------------


* JJ (notetaker), HC, RV release technicians
	+ Get SS in the next release? Or have her join in when the times work for her?
* Refridge on Sunday, April 10\.
* Freeze on Saturday, April 17\. (Create release branch. Do checks.)
* Start release on Monday, April 19\.


Next Council meeting
--------------------


* March 11, conflict with [DHd conference](https://www.dhd2022.de/).
* Proposed move to March 18\.


Stylesheets meeting times
-------------------------


* 4th Friday of each month, 8am PST / 11am EST / 5pm CET.
* Separate mailing for DST switch next month.


SVF2F meeting 2022
------------------


* **April 1 and 2**


Stylesheets task force
----------------------


* EBB, HBS, JJ, and SS have written the charge for the task force.
* PS, RV, HC: Concerned that ODD processing really is better positioned in its own repo because it is used by multiple communities (e.g. MEI).
* We should see ODD as processing metalanguage distinct from TEI.
* RV: Keeping TEI and ODD in the same repo represents a mixing of concerns (data vs. processing logic)
* HC: ODD processing isn't only for the TEI.
* The circularity issue is the key problem.
* Council can decide where the Stylesheets belong.
* PS: Question of where to draw the line between what belongs in TEIC Guidelines processing vs. what processes ANY ODD.
* SB: What should the Task Force be doing? Create something flexible for the multiple communities who may use it as well as something specific to the TEI?
* HC: Amend charge to be “resolving the circularity problem without inconveniencing other users of ODD”.
* Possible rephrase of objective 2: Work on solutions to the circularity problem.  Determine the optimal location for ODD processing and testing that separates the concerns of processing from data representation.
* In the charge, replace *“Develop the new Stylesheets to be a functional part of the TEI/TEIC GitHub repository.”* with *“Refactor the Stylesheets to separate the concerns of processing from data representation for the TEI…”*
* Need to address this point: March 2022: Create fork of the TEI/TEIC GitHub repo and create space for new Stylesheets.
* **Action on Council:** Bring the Council’s concerns (\+ notes on Task Charge from today's meeting) to the next Stylesheets meeting on February 25\.
* **Action on JJ**: Put Martin Holmes’ slides in the TEI General channel.


Migration of mailing lists
--------------------------


* Migrate to something controlled by TEI on the TEI HumaNum server (something we have always wanted to do).
* Does anyone know how much LISTSERV costs? (Didn’t we look that up last time?)
* Infrastructure group met and discussed the issue of migrating the mailing list from ADHO and Brown to Huma\-Num. Laurent Romary will be getting in touch with Huma\-Num administrators to find out if we can get help with migrating.
* Huma\-Num uses Sympa, ADHO \= mailman, Brown \= LISTSERV.


Presentation of the translation tool (HC)
-----------------------------------------


* [https://translate.tei\-c.org/user.html](https://translate.tei-c.org/user.html)
* GitHub: TEIC/spec\_translator (Please open issues as we spot things that are out of date/missing or come up with ideas/improvements to suggest.)
* Red X with a calendar icon means a translation is out of date.
* Red X means that there is untranslated material.
* The translation tool uses the GitHub API. Form filling creates a fork on the TEIC/TEI repo, and generates a pull request on completion. (Every save is a commit.)
* We can organize people to do a “translate\-a\-thon”.
* Spec pages could provide a button inviting visitors to check or update an out\-dated translation.
* Eventually add information on the translation tool to the Guidelines Documentation page.


TCW32
-----


* [https://bauman.zapto.org/\~syd/temp/4TEICouncil/tcw32\.html](https://bauman.zapto.org/~syd/temp/4TEICouncil/tcw32.html)
* Publish end of February


Issues
------


* Disposition of tickets assigned to ex\-Council members
	+ Should the ticket triage person just re\-assign them, or should someone ask assignees if they would like to continue on any or all tickets first?
	+ JL TEI issues: ∅
	+ JL TEI PRs: [\#2143](https://github.com/TEIC/TEI/pull/2143), [\#2187](https://github.com/TEIC/TEI/pull/2187)
	+ JL Stylesheets issues: [\#382](https://github.com/TEIC/Stylesheets/issues/382), [\#447](https://github.com/TEIC/Stylesheets/issues/447), [\#479](https://github.com/TEIC/Stylesheets/issues/479)
	+ JL Stylesheets PRs: ∅
	+ MB TEI issues: ∅
	+ MB TEI PRs: [\#2156](https://github.com/TEIC/TEI/pull/2156), [\#2193](https://github.com/TEIC/TEI/pull/2193)
	+ MB Stylesheets issues: [\#401](https://github.com/TEIC/Stylesheets/issues/401), [\#495](https://github.com/TEIC/Stylesheets/issues/495)
	+ MB Stylesheets PRs: ∅


Jenkins house cleaning
----------------------


* **Action on PS** to send a list of candidates for removal to the tei\-council list **by 2022\-02\-25** so that folks can say “no, please keep” or “go ahead and nuke”
* PS: list is here: [https://jenkins.tei\-c.org/view/various%20branches/](https://jenkins.tei-c.org/view/various%20branches/)
* EBB: Please nuke [TEIP5\-branch\-ebb\_SchematronExplan2](https://jenkins.tei-c.org/view/various%20branches/job/TEIP5-branch-ebb_SchematronExplan2/) (PS: done!)


Topics for upcoming SVF2F meeting
---------------------------------


* \<gender\> — reminder to SB: long discussion last time, see [\#2189](https://github.com/TEIC/TEI/issues/2189).
* issue [2213](https://github.com/TEIC/TEI/issues/2213) on att.datable.custom
* CMC revival


 