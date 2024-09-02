---
layout: page.njk
title: "TEI Technical Council Teleconference, 2021-03-11"
---
# TEI Technical Council Teleconference, 2021-03-11
**Meeting times:** 


* 11am\-12:30pm PST/2pm\-3:30pm EST/7pm\-8:30pm GMT/8pm\-9:30pm CET
* Started:    19:08Z    Ended:    \~20:29Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HS)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Jessica H. Lu (JL)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Note:** ticket triage table is near the end of this document.
Short virtual F2F meeting
-------------------------


* May 7 and 8


TEI conference/MM
-----------------


* Dates not fixed yet, but tentatively week of 25 Oct 2021\.
* Will be virtual, not physical.


Release debriefing
------------------


* oXygen release
	+ Add instructions for the oXygen plugin to TCW 22 (HC and Martin Holmes will work on this.)
	+ Backwards compatibility \- how long should we sustain compatibility? Should we do a formal request to oXygen with a contract? Or ask oXygen to help us identify what features need to be supported to maintain compatibility?
		- Maven repository issue: ideally we don't host the jar file(s) ourselves but draw directly on their Maven repo?
		- oXygen would probably be willing to help us when they have major API changes.
		- Can we trust the version of the plugin produced by Jenkins?
		- What version of the oXygen library should we build against (to set the compatibility frame of reference)?
			* Now the plugin is building from 18\.1, so we're compatible with oXygen versions 18\.1 – 23\.1\.
			* Maven repo goes back to 2014, but we may not want the hassle of having to support 2 versions of the plugin.
* Updates of release minutes (NC wants to add more detail.)


Saxon upgrade
-------------


* Upgrading Saxon 9 HE → Saxon 10 HE.
* ½ done for the [Stylesheets repo](https://github.com/TEIC/Stylesheets/issues/490); expecting to do [TEI repo](https://github.com/TEIC/TEI/issues/2117) tomorrow.
* By “done” we mean done in a branch; PRs not issued yet.
* Want to merge the branches as close together in time as possible(!)
* PS suggests running the upgrade on Stylesheets first.


Report from Computer Mediated Communication (CMC) meeting
---------------------------------------------------------


* Met on 5 March to continue discussions toward consensus regarding the schema
	+ \<post\>, @indentLevel vs. @rend or @rendition or @style, encoding emoji, @creation→@generatedBy
* Next meeting: 31 March, to begin drafting prose for new chapter
* Still anticipating bringing CMC to Council for review during Summer 2021, with a hope to get it into the early 2022 release (the \~August 2021 release would be great, but we doubt that will be a reasonable goal).
	+ Will be submitted as a request for a new chapter.


New feature of GitHub called “Discussions”
------------------------------------------


* Did anyone have a look at this new feature or have experience with it?
* PS suggests that we could release it now silently or after the next members meeting.
* A Discussion board is easier to explore for people investigating information, and is less intimidating than a listserv where you "push" questions forward.
* We could launch it with a question, like who is still using oXygen 17?
* Who is using oXygen 11 or earlier? (JJ noted that the BC Provincial Government is using oXygen 11 to encode Hansard \[the legislative proceedings] and that they are shifting from custom XML to TEI.)


Placement of classes, macro, and datatypes in modules
-----------------------------------------------------


* See issue [\#1710](https://github.com/TEIC/TEI/issues/1710)
* How does Council feel about doing a mini\-release?
* An \<elementRef\> that includes an element that is from a module that is *not* being included, you may run into trouble if it is a member of a **class** that you did not remember to include. (Is this a solution to that problem?)


AOB
---


* MT demonstrates TEI Processing Model\-based version of the *Guidelines*, to be released as a package for eXist (tentatively for Ides of March).


Tickets
-------


* [on altIdent](https://github.com/TEIC/TEI/issues/2049)
	+ Particularly [Council input requested](https://github.com/TEIC/TEI/issues/2049#issuecomment-725088683)
	+ **Action** on **SB** by **2021\-03\-15**: Reduce that large table to just those about which there is some disagreement, and repeat request for input from Council.


 