---
layout: page.njk
title: "TEI Technical Council Teleconference, 2020-11-10"
---
# TEI Technical Council Teleconference, 2020-11-10
**Meeting time:**


* EST 09:00–10:30, GMT 14:00–15:30, CET 15:00–16:30
* Started: \~13:06 Ended: \~14:40Z


**Present:**
* Syd Bauman (SB, arrived @ \~13:07Z)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Nicholas Cole (NC, arrived @ \~13:17Z)
* Jessica H. Lu (JL)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Magdalena Turska (MT)


**Apologies/Not Present:**
* Vanessa Bigot Juloux
* Raff Viglianti


Business Meeting
----------------


* Thursday, 19 November 2020, EST 11am, 4pm BST, 5pm CET
* Report from the TEI Council
	+ Statistics for Guidelines and Stylesheets issues
	+ Releases
	+ Meetings


Next release
------------


* Next release on February, 25 (Thursday); Refridge: Friday 2021\-02\-12; Freeze: Friday 2021\-02\-19\.
* Release techs (tentative): NC (lead technician), PS (assist), MB (note taker).
	+ JL: would be third release in a row; happy to volunteer as lead tech next summer.
	+ MB volunteers for documentation.
	+ NC agrees to be lead technician if he is re\-elected to TEI Council.
	+ If NC is in Utah, we may want a North\-American assist — SB volunteers.
	+ Revisit after elections.


Reviewer for VF2F meeting minutes
---------------------------------


* Since he missed part of this meeting, SB volunteers to minute\-assist the VF2F if someone else would minute\-assist this meeting. EBB volunteers to handle this meeting. NC volunteers to handle December teleconference, as that had been EBB’s.


Council chair elections
-----------------------


* [https://wiki.tei\-c.org/index.php?title\=TEI\-Council\-FAQ\#TEI\_Technical\_Council\_Chair](https://wiki.tei-c.org/index.php?title=TEI-Council-FAQ#TEI_Technical_Council_Chair)
* Up until around the last Friday in November those who are Council members for next year will consider whether they want to run to be Chair of the TEI Technical Council. The current Chair will facilitate this process by answering any questions about the post. Before that date those intending to stand should send a statement of some sort to the Council mailing list detailing why they think the council members should vote for them.


Stylesheets patch release — status
----------------------------------


* SB reports that he repaired a bug (code that wasn't properly fixing something) [https://github.com/TEIC/Stylesheets/releases/tag/v7\.50\.1](https://github.com/TEIC/Stylesheets/releases/tag/v7.50.1)
* Appears to be released in all the usual locations.
* Status of the oXygen plugin? SB: No need to update this.
* HC: We should add a note about the reason for the patch release on GitHub
	+ Should this be appended to the tag for the release, or a file in the repo (establish a place for it)? Maybe a pointer to the release notes would go in the README.md
	+ Look at Stylesheets changelog?
	+ We decided to investigate making a ReleaseNotes/ directory in the Stylesheets repo, roughly parallel to what we have in the Guidelines repo. The idea is to publish a combined set of release notes on TEI\-L, etc., but to store them separately. We may want a pointer from the README.md file to the release notes; but perhaps not, since the release notes will be XML.
	+ **Action on MS** to investigate a) how the release notes get published, and b) the best place and means to set this up in the Stylesheets repo **by 2020\-12\-31\.**
	+ **Action on SB:** Add a note of explanation to the latest [Stylesheets release](https://github.com/TEIC/Stylesheets/releases/edit/v7.50.1) tag **by 2020\-11\-30\.**
* Martin Holmes added updates to TCW 22 about login process for Infrastructure Group members.
* MS: Do we need new documentation for the Stylesheets release: How\-to guide?
	+ We could use the information about how to release either Stylesheets or Guidelines individually (i.e., how to release one when you are not also releasing the other).
	+ Also need to document in TCW 22 the new workflow with when to update the P5 subset in the Stylesheets repo.
	+ PS: Still an open question how we update P5 subset: when that should happen in the timeline toward release.
	+ PS is working on a semi\-automated process for this — we plan to wait until he has made more progress.


Update tests in Stylesheets repo
--------------------------------


* PS working on semi\-automating the update of p5subset in StyleSheets/ so that tests are run and (if no errors) issue a pull request. Issue for that at <https://github.com/TEIC/Stylesheets/issues/457>.


[altIdent](https://github.com/TEIC/TEI/issues/2049)
---------------------------------------------------


* see [\#2049](https://github.com/TEIC/TEI/issues/2049)
* \#1: Decide on an alternate encoding of FPIs. SB's current favorite is to use an \<idno type\="FPI"\> exactly where we currently use \<altIdent type\="FPI"\>.
* \#2: Decide which elements should, and should not, have \<altIdent\> in their content model. It is allowed in too many places and needs to be reviewed: which should have and which should not.
* FPI is an "old\-school" system of identifiers, primarily used in DTDs.
* Used in coding in multiple languages (e.g. Arabic and English), and in localized customizations.
* Modules use the FPI as identified in the \<altIdent\> and that is not a good use.
	+ \<altIdent\> is in model.glossLike
	+ Discussion of using \<idno\> for the FPIs: need to change examples, explanation, Stylesheet change for processing of the modules.
	+ Other contenders: \<label\>, \<ident\> (\= maybe not quite the same thing as \<idno\>?)
* We need to review the places allowing \<altIdent\>, and decide whether to remove, and whether deprecation is required.
* **Action on SB:** Make tables on ticket for subgroup to vote on \<altIdent\> alternative and places it goes **by** **2020\-11\-17\.**
* Action on Council to respond \#1 and \#2 on the ticket. **Subgroup volunteers: EB, NC**. SB will ask Martin Holmes if he would like to join the subgroup.


Evaluation copious examples
---------------------------


* During the Stylesheets meeting we (SB) created a version of the specs containing all examples, independent of the chosen language.
* [https://bauman.zapto.org/\~syd/temp/4TEICouncil/html\_GLs\_all\_eg\_en/](https://bauman.zapto.org/~syd/temp/4TEICouncil/html_GLs_all_eg_en/)
	+ EB reports that \<bibl\> examples are far more diverse; \<byline\> has improved; \<gap\> includes Asian examples, but duplicates French and English examples — (MS: same for \<abbr\>); \<ab\> has only one example and needs improvement.
* Open tickets for issues that we encounter (see email from Martin Holmes to Council list).
* Continue discussion at next Stylesheets / Council meetings.


Proposal on CMC
---------------


* Subgroup scheduled a meeting with CMC group—Friday, December 4 (and 11, if needed).


TEI “Vanilla” — Potential Next Steps
------------------------------------


* Discussion during the VF2F meeting in October
	+ SB suggested to change the name
	+ TEI Council should review the current introductory material and try to curate and filter some of the older material to ensure that it is relevant to current Guidelines.
	+ Encourage creation of ‘Road Not Taken’ examples? Explanations of decisions and alternates not chosen.
	+ Can we encourage some material to be written on presenting TEI documents (as a technical matter).
* MT: meeting summary [https://e\-editiones.org/tei\-vanilla\-meeting\-summary/](https://e-editiones.org/tei-vanilla-meeting-summary/)
* Continue discussion next meeting


Outdated directory “genetic”
----------------------------


* get rid of outdated directory “genetic” from the TEI directory, see <https://github.com/TEIC/TEI/issues/2043>
* postponed to next meeting


Reminder — Action on
--------------------


* List of liaisons (please add your liaisons)
	+ <https://docs.google.com/document/d/19BYJYSEzUhLXTQ4k4YHp_eAJmH3OD0OUNHcpD4adhT0/edit>
* **Action on NC and HC** to write\-up Oxygen release process.
* **Action on HC** to update the release documentation from the release minutes.
* **Action** on **MS, HC, RV**: Circulate (to TEI Council) a draft proposal to the TEI Board for funds for consulting help (particularly with accessibility) of the Guidelines **by Tue 01 Dec 20**.
* **Action on HC or EB** to prod James Cummings about [\#1632](https://github.com/TEIC/TEI/issues/1632) if he wants to develop it. If not close [\#1632](https://github.com/TEIC/TEI/issues/1632)  and continue work in [\#1928](https://github.com/TEIC/TEI/issues/1928).
* **Action on EB, MS, and PS** to review <https://github.com/TEIC/TEI/issues/1957>.
* **Action on JL** to close issue [\#2029](https://github.com/TEIC/TEI/issues/2029) if LB hasn't responded / invite LB to respond in closing.


