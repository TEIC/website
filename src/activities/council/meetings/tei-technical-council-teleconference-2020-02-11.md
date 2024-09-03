---
title: "TEI Technical Council Teleconference, 2020-02-11"
date: 2020-02-11
---
# TEI Technical Council Teleconference, 2020-02-11
**Meeting time:**


* EST 09:00–10:30, GMT 14:00–15:30, CEST 15:00–16:30
* Started: 14:06Z; ended: 15:34Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB, leaves at \~15:30Z)
* Hugh Cayless (HC)
* Nicholas Cole (NC, arrives at \~14:20Z, leaves at \~15:30Z)
* Jessica Lu (JL)
* Martina Scholger (MS, chair)
* Peter Stadler (PS, leaves at 15:05Z)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux (VB)
* Magdalena Turska (MT)


 
Next F2F meeting
----------------


* 1–3 May 2020
* Location will be Paderborn!
* **Action on PS**: send out travel information (hotels, airports, etc.) by **2020\-02\-18**
* **Action on HC**: send pointer to travel reimbursement instructions (to the Council list) by **2020\-02\-18**


Meeting times
-------------


* Tuesday mornings (ET) / afternoons (CEST) affirmed as just fine.


Next Release 3\.7\.0
--------------------


* What shall we name our release?
	+ EB suggests: "Galileo release"
* Issues that we want to close before the release:
	+ The deprecation messages for the new uniHan features are almost, but not completely consistent. See the [deprecation list](https://jenkins.tei-c.org/job/TEIP5-dev/lastStableBuild/artifact/P5/release/doc/tei-p5-doc/en/html/DEPRECATIONS.html).
		- **Action on SB by 2020\-02\-12** to change date to 2022\-02\-15 and change all the wordings to use the same form as the last.
	+ standOff
		- [https://jenkins.tei\-c.org/job/TEIP5\-dev/lastSuccessfulBuild/artifact/P5/release/doc/tei\-p5\-doc/en/html/SA.html](https://jenkins.tei-c.org/job/TEIP5-dev/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/SA.html)
		- The last bullet point in SA says “to contain the elements above, along with those that provide stand\-off annotation or contextual information (section \[ID SALDB in TEI Guidelines].”
		- **Action on SB** to revise wording an fix the link **by 2020\-02\-12**
	+ Pull request has already been approved by MT and MS, should we merge it now?
		- <https://github.com/TEIC/TEI/pull/1924>
		- Yes! (Done.)
	+ EB: Documentation updates to TCW20 (review: can we close these tickets?)
		- re [\#1654](https://github.com/TEIC/TEI/issues/1654) (how to refer to exempla)
			* yes, issue closed
		- re [\#1825](https://github.com/TEIC/TEI/issues/1825) (when to work in git branches, writing good git commits)
			* Consensus is yes, it can be closed, but we should also add detailed instructions on how to create a branch sometime.
	+ EB: Can we close [\#1708](https://github.com/TEIC/TEI/issues/1708)?
		- MS has two minor corrections for EB to implement, but otherwise yes, closed.


Internationalization Working Group Proposal
-------------------------------------------


* <https://docs.google.com/document/d/1EyAWLkKF5oBeueSoNaES3NGeA2f_AGLtn8Kx9hbx0VM/edit>
* Approved!


Stylesheets training session
----------------------------


* Agreed to Tuesday, 25 February 2020 @ 14:00Z.
* **Action on MS by 2020\-02\-12**: Add to our calendar (DONE — just added by PS)
* **Action on SB on 2020\-02\-23**: Send reminder to list
* **Action on SB \& MH on 2020\-02\-14: Set up a curriculum**


Japanese translations
---------------------


* Implementation—difficult because each translation requires checking.
* Add to Internationalization SIG tasks to meet with Martin Holmes and come up with a implementation plan.


Policy for inactive members to accompany change to 3\-year terms
----------------------------------------------------------------


* SB: suggests a small group of 3 convenes to craft a proposal
	+ RV points out it would be a good idea to have a section in the introduction\-to\-new\-council\-members about proper procedure for resignation/recusal.
	+ Committee formed: SB, EB, JL will work on a draft proposal for replacement policy, and will prepare and circulate draft at least 1 week before May face\-to\-face.
	+ Existing proposal to the BOD is: “Each Technical Council Member shall be elected for a **three**\-year term, or in the case of an election **or appointment** to fill a vacancy between regular elections, for the term remaining for the vacant position. Terms of office begin at the following January 1 and end on December 31\.”
		- Board has approved the above, but the Bylaws haven't been changed yet. BOD is figuring out whether or not the change requires membership vote.


Other issues
------------


* teidata.pointer equivalent to move/@where [\#1769](https://github.com/TEIC/TEI/issues/1769)
* Proposal to resolve with a new datatype which is basically a union of enumeration and URI, akin to: [https://www.tei\-c.org/release/doc/tei\-p5\-doc/en/html/ref\-teidata.namespaceOrName.html](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-teidata.namespaceOrName.html)
* Perhaps this can point the way to removing the duality of @x and @xRef attributes in the long range.


 