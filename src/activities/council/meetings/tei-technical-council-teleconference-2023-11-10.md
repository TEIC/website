---
layout: page.njk
title: "TEI Technical Council Teleconference, 2023-11-10"
---
# TEI Technical Council Teleconference, 2023-11-10
### Meeting times


6:30am PST / 9:30am EST / 2:30pm UTC / 3:30pm CET
### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Patricia O'Connor (TOC)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


### Special Guests (new Council members starting terms January 2024\):


* Gustavo Riva (GR)


### Apologies/Not Present:


* Elli Bleeker (EB)
* Hugh Cayless (HC)


Nicholas Cole (NC)
Mentoring new Council members
-----------------------------


* MS and HBS beginning mentoring for GR and TR


Next release (4\.7\.0\)
-----------------------


* November 5–10 refrigeration, Thurs. Nov. 16 release.
* release technicians: RV, HC, and GR
* Is the information regarding the incrementation of the release numbers written into TCW 22 somewhere?
	+ Action on EBB or RV: Add something to TCW 22 about the automagic updating of specLists.json
* Be sure before release to update Preface and Acknowledgements with new Council members. Also add information about the working groups may need to double check with Syd. **Action on MS and EBB** to collaborate on this.
* For example, 5\.0 would be for when something significant occurs like a chapter is removed or a new one added


Workflow discussion about setting release milestones
----------------------------------------------------


* Shouldn’t be entirely automated to “punt” tickets to next release if not closed
* But if PR is closed it should be assigned to the current milestone (if this could be automated that would be helpful.


HCMC Jenkins build broken
* looks like a problem with rng/to.xsl:
* [https://teijenkins.hcmc.uvic.ca/job/TEIP5\-dev\-all\-with\-Stylesheets\-release/](https://teijenkins.hcmc.uvic.ca/job/TEIP5-dev-all-with-Stylesheets-release/)
* Was fixed but HCMC  Jenkins broke again after a RELAX NG change
* This won’t pass until after the release.
* dev with dev should work; release with release **must** work; dev with release won’t work yet …
* Schedule a session on best practice for testing branches for the virtual F2F for all Council members to make sure they are up to speed.
* Tests are being renamed to ensure that Council members know what the tests do


Solving release\-blockers
-------------------------


* The ePub3 problem…
* + Solved — I (SB) had failed to limit the XPath to "atts" classes.
* SB \& RV merged quite a few PRs and made other fixes yesterday. Remaining tickets to consider include
	+ [Stylesheets 525](https://github.com/TEIC/Stylesheets/pull/525) \- already merged
	+ [Stylesheets 615](https://github.com/TEIC/Stylesheets/pull/615) — merged!
	+ [Stylesheets 618](https://github.com/TEIC/Stylesheets/pull/618) — merged! milestone added to the related issue.
	+ [TEI 2440](https://github.com/TEIC/TEI/pull/2440) \- already merged hurrah
	+ [TEI 2450](https://github.com/TEIC/TEI/pull/2450) \- RV resolving conflicts and merging PR. — merged!
	+ [TEI 2470](https://github.com/TEIC/TEI/pull/2470) let’s try and look at this closely for this release — merged
		- Proposed change is mostly text related so should not break the build
		- Prose only mentions p and not ab, a simple commit and push to dev to update the prose accordingly to solve this. **Action on MS** to do this today after the Council meeting.
	+ [TEI 2500](https://github.com/TEIC/TEI/pull/2500) — merged!
		- TEI conformant document, what does this entail exactly?
		- Chapter needs revision
		- This PR does not address everything on the original issue [\#2179](https://github.com/TEIC/TEI/issues/2179), just one aspect of it.
	+ [TEI 2276](https://github.com/TEIC/TEI/issues/2276) RV is okay with SB and TOC working on this for 4\.7\.0 release before Tuesday and do a PR — DONE, see \#2501 \- merged
	+ [2447](https://github.com/TEIC/TEI/issues/2447) to be resolved also for 4\.7\.0 Action on TOC.
* [\#2447](https://github.com/TEIC/TEI/issues/2447) Ling SIG related ticket, an easy fix for release 4\.7
	+ Add release techs and SB to PR to push this through to the release.


Inclusion of e\-editiones liaison (WM and Rolf Wissman) in TEI Lite review
--------------------------------------------------------------------------


* E Editiones society has had a call for someone to come and work on the project, Rolf Wissman is working on it and will be working on the council and joining Council discussions to discuss TEI Lite


Next F2F
--------


* EBB arranged poll about modality of the F2F:**Result**: Roughly equivalent time of F2F in 2–2½ VF2F meeting sessions.
* **Action on EBB:** Arrange second poll to help figure out when to do the VF2F sessions. Maybe do one in winter, stretched out over a few months rather than concentrated. Having all of them in May is too late.


Transfer of mailing lists update
--------------------------------


* Paused while transfer team tries to figure out if pointers to archives at Brown can be mapped to their new location at PSU.
* Found 3 different kinds of URLs and figured out how to map those.
* Permalinks problem
* Archive problems sorted out in January and resume mailing transfer after that.


[\#2496](https://github.com/TEIC/TEI/issues/2496) How to handle deprecation affecting the writing of ODDs?
----------------------------------------------------------------------------------------------------------


* The kinds of changes Council makes that affect only ODD writers: usually we list breaking changes in our release notes, but don’t do a deprecation
* We asked the community–should there be a deprecation period? (No one answered.) So since everyone was quiet, Council agrees, we think we don’t really need to deprecate.
* JT suggests we add an “ODD\-breaking” label to the issues about this. (Consensus agreement) — He will be adding it to his re\-vamping of issue labeling per Paderborn.
* SB suggests also having a separate section in the release notes of ODD\-breaking changes are useful. (Consensus agreement)
* RV: Adjust the TCW 22 \& 27 (about deprecation) accordingly. (For changes that break ODD but don’t break anything else.) **Action on RV** to describe this in the issue with a comment.


 