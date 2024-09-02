---
layout: page.njk
title: "TEI Technical Council Teleconference, 2021-08-12"
---
# TEI Technical Council Teleconference, 2021-08-12
**Meeting times:** 


* 10:30am–12:00pm PDT, 1:30pm–3:00pm EDT, 6:30pm–8:00pm BST, 7:30pm–9:00pm CEST
* Started: 17:36Z    Ended: \~18:15Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Magdalena Turska (MT)


**Apologies/Not Present:**
* Janelle Jenstad (JJ)
* Jessica Lu (JL)
* Raff Viglianti (RV)


 
Next VF2F meeting
-----------------


* Date of SVF2F is **Fri 01 Oct \& Sat 02 Oct**
* Agenda/collection of topics is available in a google document.


Next Release
------------


* Techs: HBS, MS, PS
* refrigerate: Wed 25 Aug
* freeze:  Sun 29 Aug
* release: Tues 31 August


Merge from release\-4\.2\.1 and release\-4\.2\.2\.
--------------------------------------------------


* The release notes from release 4\.2\.1 and 4\.2\.2 are missing from dev branch.
* Version numbers may be in conflict: be careful with merging. diff the branches before acting. **Action on MS** to investigate, report to Council mailing list **by** 2021\-08\-21\.


GitHub issues / PR’s to discuss before next release
---------------------------------------------------


* PR’s
	+ att.locatable issue 1910: <https://github.com/TEIC/TEI/pull/2168>
		- Original issue: <https://github.com/TEIC/TEI/issues/1910>
		- **Action on SB** to review PR **by** 2021\-08\-13
	+ FR for new \<ellipsis\> element: <https://github.com/TEIC/TEI/pull/2165>
		- Original issue ("elision"): <https://github.com/TEIC/TEI/issues/1877>
		- Maybe we should add one more example? E.g. one \<metamark\> with \<supplied\>. Possibly a \<table\> and ibid / ditto marks.
		- **Action on SB** to look at examples from the Women Writers Project (WWP), see if he can apply the content model to it.
		- Suggested code to try for HBS's example:
		
		```
		<metamark function="signalChorus">꜒</metamark>
		<l rend="nobreak" part="I">Por q<ex>ue</ex> nu<ex>n</ex>ca</l>
		<ellipsis>
		  <metamark rend="nobreak" function="ellipsis">·:—</metamark>
		    <supplied>
		      <l style="nobreak" part="F">co<ex>n</ex> el pode poer</l>
		      <l style="break">Queo podesse por amigauer</l>
		    </supplied>
		</ellipsis>
		```


* + - (Note that the above example is using @rend for its normal purpose, and @style to assert the rendition of supplied stuff.)
		**TEI ellipsis content model review:** EB, SB, MB, MT, HC slated for Tues. 08\-24 at 9 \- 10:20am ET \= 3 pm in Europe.
	+ PR for updating tei2html transformation to XHTML5: <https://github.com/TEIC/Stylesheets/pull/499>
		- Original issue: <https://github.com/TEIC/Stylesheets/issues/487>
		- Summary: [https://github.com/TEIC/Stylesheets/pull/499\#issuecomment\-892149611](https://github.com/TEIC/Stylesheets/pull/499#issuecomment-892149611)
	+ PR for modifying Schematron constraint in ab: <https://github.com/TEIC/TEI/pull/2161>
		- Original issue: <https://github.com/TEIC/TEI/issues/1988>
		- **Action on EBB** to provide test file and explain the situation with testing for \<floatingText\> inside an \<l\>.
		- more PRs <https://github.com/TEIC/TEI/pulls>
	+ inconsistent wording of descriptions of attr classes with only 1 attr
		- <https://github.com/TEIC/TEI/issues/2142>
		- **Action on MS**: to change the wording to plurals.
	+ Guideline issues milestone 4\.3\.0 [https://github.com/TEIC/TEI/issues?page\=1\&q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Guidelines\+4\.3\.0%22](https://github.com/TEIC/TEI/issues?page=1&q=is%3Aopen+is%3Aissue+milestone%3A%22Guidelines+4.3.0%22)
		- discuss which of those we want to tackle before freeze
	+ Stylesheet issues milestone 7\.52\.0
		- [https://github.com/TEIC/Stylesheets/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Release\+7\.52\.0%22](https://github.com/TEIC/Stylesheets/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Release+7.52.0%22)


Website navigation
------------------


* MS reminds HC to make sure the new WordPress menus work for the Guidelines.


Output of examples for all languages
------------------------------------


* postponed to next meeting
	+ \<gender\> or equivalent (or is this waiting for short VF2F?)


* It’s currently listed as an activity for VF2F on the brainstorming document


Checking Pointers document — SB (see [comment](https://github.com/TEIC/TEI/issues/1675#issuecomment-895225895) on issue)
------------------------------------------------------------------------------------------------------------------------


* Re Syd's questions:
* EBB agrees, and suggests linking the document from GitHub to TEI Wiki on ODD.


Report on OxGarage refactoring (PS)
-----------------------------------


* PS added his colleagues Daniel Röwenstrunk and Anne Ferger to TEIC organization on GitHub.
* Created a couple of new repos for OxGarage work.
	+ There is a new team for OxGarage work — add yourself if interested.
* Members of TEIC can now create repos (setting is changed).


Report on DockerHub Autobuilds trouble (PS)
-------------------------------------------


* There are no free DockerHub builds any more. PS applied for an open source membership at DockerHub but didn’t get a response yet. Now there is no way to build docker images automatically.
* PS plans to try GitHub actions, add these to Jenkins repo, etc. to also use GitHub package registry. From there we could also push to DockerHub (possibly two locations to store the image). We need a GitHub token for this (provided by James Cummings) for the TEI Council user. PS has added this  token to organizational secrets.
* This is a workflow change, more about the infrastructure of OxGarage and Roma which rely on Docker images. Not so much about Council's testing and building processes.


 