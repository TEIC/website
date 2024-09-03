---
title: "TEI Technical Council Teleconference, 2021-10-14"
date: 2021-10-14
---
# TEI Technical Council Teleconference, 2021-10-14
**Meeting times:** 


* 10:30am–12:00pm PDT, 1:30pm–3:00pm EDT, 6:30pm–8:00pm BST, 7:30pm–9:00pm CEST
* Started: 17:36Z    Ended: 19:12Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Martina Scholger (MS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Meaghan Brown (MB)
* Jessica H. Lu (JL)
* Peter Stadler (PS)


 
Link to the conference program
------------------------------


* [https://www.conftool.pro/tei2021/index.php?page\=browseSessions](https://www.conftool.pro/tei2021/index.php?page=browseSessions)


Joint Board/Council meeting
---------------------------


* Mon 25 Oct 21 at 15:00Z
	+ 8 am PDT
	+ 11 am EDT (: EBB sends regrets from her Text Encoding class)
	+ 12 pm ART
	+ 16 pm BST
	+ 17 pm CET
* Meeting venue? — Zoom, MS to supply link on Sun Oct 24\.
* How long will it be? — 1 hour
* Suggestions for topics:
	+ Compensation issue (JL)
	+ Premium version for Slack?
	+ Finalize decision about term lengths for new positions (how to decide post\-vote — see [Syd’s email](https://lists.tei-c.org/pipermail/tei-council/2021-June/026886.html) to the TEI Council list on Thu 10 Jun 21\)


Checking Pointers document
--------------------------


* SB (see [comment](https://github.com/TEIC/TEI/issues/1675#issuecomment-895225895) on issue, which points to [TCW 32](https://github.com/TEIC/Documentation/blob/master/TCW/tcw32.xml))
* JJ review \& edit of prose discussion.
* Roughly half of the constraints remain untested, especially now that there are two more constraints (for XIncluded content).
* SB still needs to write the generic URI bit, maybe


Reminder: [issue 2173](https://github.com/TEIC/TEI/issues/2173#issuecomment-917810897)
--------------------------------------------------------------------------------------


* The issue needs to be reviewed, tested, edited, updated.
* Action on HBS to review the issue in November.


Spec Translation Tool (HC)
--------------------------


* Tool that will translate spec pages in supported languages.
* Workflow needs discussion
* Question: When someone submits a translation, do we need to get it reviewed or do we just accept it? — Consensus seems to be a native\-language review is a good thing if we can get it, but not a requirement.
	+ RV: What basic checks should we implement? "Close enough" determination could be just via Google Translate.
	+ HC: Hopes to co\-opt members of the internationalization group to help review incoming translations.
	+ Work goes in a branch. When ready, a would\-be translator submits a PR to the TEI repo.
	+ Work is being done in TEI repo: [spec\_translator](https://github.com/TEIC/spec_translator)


Corpus Exemplars
----------------


* Piotr Banski will work on the tei\_corpus exemplars (starting in November).
* He asked to leave the way back open for the exemplar \[What does this mean? —SB] Probably he means a way to get access to the latest version even after we delete it. MS told him yes.
* Action on MS: remind Piotr in early November.


Issues from SVF2F meeting
-------------------------


* Council continued discussion of several tickets that had been on the agenda of our recent SVF2F meeting (October 1–2\).




| No. | Group | Title | Comment |
| --- | --- | --- | --- |
| \#1800 |  | [more on dictionary: The element \<usg\> inside \<def\>](https://github.com/TEIC/TEI/issues/1800) | Comment from last VF2F (May): Subgroup suggests that RV should go with brute force approach (proposal 1\). \[usg is already allowed in cit, so does not need to be taken care of anymore] Council Meeting 10\-14: Green for RV to proceed. |
| \#1929 |  | [What is a paragraph, really?](https://github.com/TEIC/TEI/issues/1929) | Sub\-subgroup of HC and EB suggests we consider moving \<ab\> to core, and closing this ticket if there are no other actionable items. HC: We should jettison "semantic baggage" phrase in the prose. Try a PR with \<ab\> in core . We can’t delete \<ab\> now, but in keeping \<ab\> we could at least acknowledge that it’s a core sort of thing. SB is okay with trying an action out (as opposed to just greenlighting). |
| \#1978 | A | [Documentation](https://github.com/TEIC/TEI/issues/1978) | Subgroup: We have some documentation in Documents folder in TEI repo and some in TEIC/Documentation repo.Issues: Should all the documentation be in TEI \[encoding]? How should it be organized? Should some of the older documentation be consolidated and made TCWs?Should TEI/Documents be cleaned up and collapsed into TEI\-C/Documentation? Some things can be moved to the Vault. But check on things that have been kept hidden and should see the light of day. Subgroup proposes that we maybe form a Council subcommittee to work on this next year. JJ suggests that we write a Records Management Plan (indicating what is stored where, who has access, and how to access it). SB said he’d help. HC said we could start it and get others to fill it in. |
| \#2053 | A | [naming and description of TEI Simple Print and TEI Lite](https://github.com/TEIC/TEI/issues/2035) | Discussion on the ticket does not lead to a clear action item. Subgroup proposes we check in with MT re: this ticket and last October’s Slack discussion of Vanilla and resulting meetings. If Vanilla conversations have evolved into something more clearly actionable, can we close the ticket? (Remember: texts are complex; data modelling is hard work.) |


 