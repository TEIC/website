---
title: "TEI Technical Council Teleconference, 2021-09-09"
date: 2021-09-09
---
# TEI Technical Council Teleconference, 2021-09-09
**Meeting times:** 


* 10:30am–12:00pm PDT, 1:30pm–3:00pm EDT, 6:30pm–8:00pm BST, 7:30pm–9:00pm CEST
* Started: 17:35Z    Ended: 19:02Z


**Present:**
* Syd Bauman (SB) — departed @ \~18:16Z)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Jessica Lu (JL) arrived \~18:00Z
* Martina Scholger (MS)
* Peter Stadler (PS)


**Apologies/Not Present:**
* Magdalena Turska (MT)
* Raff Viglianti (RV, parental leave)


 
Next VF2F meeting
-----------------


* Date of SVF2F is **Fri 01 Oct \& Sat 02 Oct.** See agenda/collection of topics in a separate google document.


Release debriefing
------------------


* HBS did a great job thanks to the close supervision of MS and PS. Applause!
* The Oxygen plug\-in was not an issue this time.
* There were some issues with the merge to dev: point releases had not been merged to dev, which caused some trouble. **Files from point releases need to be merged back to dev.**
	+ It was not clear what the problem was because git diffs didn’t make sense.
	+ Point releases had been done in the released (main) branch. It was folded into release but not dev.
	+ The second point release had been done from the previous released branch.
	+ Add to TCW22: After we tag a release in the released branch, we need to merge from there back to the dev branch.
	+ **Action** on **SB** by 2021\-09\-16: To make it easier on others to run, perhaps add a “test2” target to Stylesheets/Makefile — DONE.
	+ **Action** on **Jenkins maintainers** to add a Test2 job by 2021\-09\-23\.
	+ **Action** on HBS, PS, and MS to update TCW22 with notes from the release. See separate document.
		- add merge from released branch to dev as last bullet point.
	+ **Action on HC:** Code \& CSS isn't consistent for [teic.org publication](https://tei-c.org/Activities/Council/Working/tcw22/) vs. [teic.github.io publication](http://teic.github.io/TCW/tcw22.html) (CETEIcean) of TCW22\. Replace the code/ CSS for teic.org to apply the GitHub CSS because it numbers the steps. This seems to be more than CSS.
		- We should also try to consolidate the documentation so it’s easy to find in one place (legacy papers, etc).


CMC
---


* Subgroup ([@luengen](https://github.com/luengen), [@Beisswenger](https://github.com/Beisswenger), [@lujessica](https://github.com/lujessica), [@sydb](https://github.com/sydb), and [@peterstadler](https://github.com/peterstadler)) is working on the CMC module based on [https://github.com/TEI\-CMC\-SIG/cmc\-core](https://github.com/TEI-CMC-SIG/cmc-core). Fork of the Guidelines is in the CMC\-SIG repo: [https://github.com/TEI\-CMC\-SIG/TEI/tree/cmc\-features](https://github.com/TEI-CMC-SIG/TEI/tree/cmc-features) (branch 'cmc\-features').
* The HTML version—for facilitating review—is built at the TEI’s Jenkins server: [https://jenkins.tei\-c.org/job/TEIP5\-CMC\-features/lastSuccessfulBuild/artifact/P5/release/doc/tei\-p5\-doc/en/html/CMC.html](https://jenkins.tei-c.org/job/TEIP5-CMC-features/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/CMC.html).


Output of examples (in Specs) for all languages
-----------------------------------------------


* Some examples are just translations in other languages, or copies of the English examples.
* We are missing examples distinct to specific languages.
* If there is one example from a specific language (say, German), you only see that language’s examples. And if reading a different language, you won’t see the German language examples.
* Our collective (perhaps flawed) recollection is that we have not decided yet how to proceed, but are seriously considering some sort of grouping element (current proposals are: nested \<exemplum\> elements? \<egXMLgrp\>? \<exemplumGrp\>?) to allow a group of examples to be grouped together with the idea that the processor picks the most appropriate of that set (by which is the output language, comparing to @xml:lang attributes).
* See original issue on GitHub: <https://github.com/TEIC/TEI/issues/1933>
* SB’s idea: an exemplum group with only one example should always be displayed.
* HC: Put every exemplum in a group to make sure exempla are properly processed. But what does an exemplum group with only one example mean?
* What do multiple (mul) or undetermined (und) values mean? It picks English or “und” if other languages aren’t present. “mul” ends up being displayed everywhere and so does “und”.
* MB: Maybe we need a “pickMe” attribute to specify applicability, to mark which examples are most generalizable across languages? Maybe @type\=”preferred”?
* PS: perhaps this is useful for people’s ODD customizations, too. Suggested value should be 0 or 1\. Perhaps @select (the default checked version), except that takes a URI. We probably need a new attribute. Argument in favor of a new attribute includes limiting its effect to the parent element, rather than the document.


Checking Pointers document
--------------------------


* SB (see [comment](https://github.com/TEIC/TEI/issues/1675#issuecomment-895225895) on issue, which points to [TCW 32](https://github.com/TEIC/Documentation/blob/master/TCW/tcw32.xml))
* Regarding Syd's questions:
	+ EBB agrees, and suggests linking the document from GitHub to TEI Wiki on ODD.
* **Action on MS** to ask SB if we can close the issue by 2021\-09\-13\.
	+ SB reply: Depends on whether we want to wait until the document is published to close the issue. I suspect it will take quite a bit more work before we are ready to publish. It needs proofreading, testing, editing, Stylesheet fixing (because it looks ugly) etc.


Compensation
------------


* Travel coverage has been a sort of compensation for Council members, but has been absent during the pandemic. Not compensating people for their labor can be a gatekeeping mechanism and a barrier to entry to the TEI Council.
* JL: This should not be about what we, as current Councilmembers, need/prefer. Instead, our focus should be on who is unable to  join us because of this issue. \*If\* Council wishes to become a more inclusive organization, the conversation must focus on anticipating the needs and limitations of folks who have not yet been able to access this space, and the perspectives of people who are not yet in this “room”‚—or could not ever be under the current labor model. There should be a default policy to compensate people for their labor. People could privately decline it, but it should be expected. As it stands, the current model has serious implications for Council membership; JL is the only person of color on Council and is additionally a contingent worker, but is not seeking re\-election at the end of term largely due to this issue.
* Issues: TEI can’t afford to pay Council members what they are worth. There will be conflict of interest issues for some, too. Some members of the community might want to ratchet up expectations on our time if we are being compensated financially for time/labor.
* TEI Board asked if the Council could write a proposal about this. The Board will cover travel costs for Conference for pandemic\-era Council members even if they are not on Council any more.
	+ How much compensation would be sufficient? Modest stipend: the equivalent of an international trip?
	+ JL: It is important to start where we are. Need to review the budget and see what TEI could afford to pay the Council. Begin there. The act of instituting compensation as a default policy would already be an important move toward a different ethical orientation in Counci’s labor model, but removing an extra cost (reimbursing travel for TEI work) is not the same as compensating people for labor.
	+ Suggestion: remove the language about institutional support in the application form to stand for elections.
	+ Suggestion to add a stipend: $1,000 USD?
* MS: Asks JL to address Board during the next Board/Council meeting (during the conference in October) regarding this issue. JL consents to speaking to the Board.


 