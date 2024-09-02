---
layout: page.njk
title: "TEI Technical Council Teleconference, 2022-10-14"
---
# TEI Technical Council Teleconference, 2022-10-14
**Meeting times:**


* 7am PDT / 10am EDT / 3pm BST / 4pm CEST
* Started:     15:05Z    Ended:    16:38Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EBB)
* Hugh Cayless (HC)
* Patricia O Connor (TOC)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Peter Stadler (PS)
* Magdalena Turska (MT, arrived 15:17Z)
* guest: Piotr Banski


**Apologies/Not Present:**
* Helena Bermúdez Sabel (HBS)
* Elli Bleeker (EB)
* Janelle Jenstad (JJ)
* Raff Viglianti (RV)


 
Welcome Patricia
----------------


* mentor
	+ Co\-mentors to cover time zone issue and the installation process
	+ MS to help TOC to get Windows Subsystem for Linux installed.
	+ Action on MS to document the installation process and create documentation for new Council Members.
	+ SB grant/funding for a class/summer school for TEI enthusiasts wanting to join TEI Council \- purpose of class/school to train XML researchers on what they’ll need to know for Council.
	+ MS suggested we also invite Technical Council candidates to a conference call or short VF2F prior to the annual conference; general agreement that this is worth trying.


Ling SIG – Council liaison
--------------------------


* Invited guest: Piotr Banski
* Request a liaison with the Council.
* Not obvious that (computational) linguists are doing TEI.
	+ computational linguists are typically aiming for simplicity and efficiency; mostly CSV or TSV representation, avoiding XML
* TEI can form a bridge to the linguistics community. Keeping the bridge open is important.
* Also distinguishes the TEI to be thinking of linguistics and finding efficient methods, even if it introduces some tension in both communities.
* Piotr Banski would like a liaison to remind to work on TEI issues, rather than concentrate on primarily linguistics community issues.
	+ Should be someone who works with linguistics formally
	+ Who can talk about the issues because it is not always easy to communicate the subject in GitHub Issues; helps if this person is on Council
	+ PS has been excellent at this, and has agreed to mentor a new Ling SIG liaison
	+ Regular set of meetings e.g. quarterly
	+ Piotr hopes to revive the Ling SIG mailing list and find a co\-convenor
	+ HBS has volunteered to be liaison because her projects have grounding in linguistics; may be resuming work in validating feature structures. MT will help HBS
	+ **Action on PS*****,*** **HBS, MT, and Piotr** to meet and talk by November 18\. PS to organize the meeting.


Meeting times Nov \& Dec
------------------------


* Thursday, Nov 10 and Dec 8 (8am PDT / 11am EDT / 4pm BST / 5pm CEST)


Next release
------------


* Timeline
	+ Release on Tues. October 25
	+ Freeze: Thurs. October 20
* Release techs: SS, PS, \& MS.
* Action on SS, PS \& MS to have a look at TCW 22, *Building a TEI Release* in advance: [https://tei\-c.org/activities/council/working/tcw22/](https://tei-c.org/activities/council/working/tcw22/)
* Open issues and PRs
	+ Milestone “Guidelines 4\.5\.0”  [https://github.com/TEIC/TEI/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Guidelines\+4\.5\.0%22](https://github.com/TEIC/TEI/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Guidelines+4.5.0%22)
	+ Milestone “Stylesheets 7\.54\.0”: [https://github.com/TEIC/Stylesheets/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Release\+7\.54\.0%22](https://github.com/TEIC/Stylesheets/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Release+7.54.0%22)
		- [\#571](https://github.com/TEIC/Stylesheets/issues/571): In the Stylesheets meeting of 2022\-09\-29 we successfully added the language of the exemplum when it is different from the current one. This ticket was kept open so that in the next TEI Council meeting we could evaluate whether it looks good enough before the next release or if further enhancements are urgent. See [https://jenkins.tei\-c.org/job/TEIP5\-dev/lastSuccessfulBuild/artifact/P5/release/doc/tei\-p5\-doc/en/html/examples\-teiHeader.html](https://jenkins.tei-c.org/job/TEIP5-dev/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/examples-teiHeader.html)
			* Council notes this is an improvement and we don't need to back it out.
			* We can continue working on it on another ticket if further improvements are deemed appropriate
	+ Pull requests: TEI: <https://github.com/TEIC/TEI/pulls>, Stylesheets: [https://github.com/TEIC/Stylesheets/pulls](https://github.com/TEIC/Stylesheets/pulls?q=is%3Aopen+is%3Apr)
		- HBS \& SB both say [\#532](https://github.com/TEIC/Stylesheets/pull/532) is ready to merge; Council agrees to merge. DONE.
		- SB has sent ping to MH \& Nick Cole to review \#[525](https://github.com/TEIC/Stylesheets/pull/525)
	+ Nested \<ab\> element: issue [\#1856](https://github.com/TEIC/TEI/issues/1856), PR \#[2352](https://github.com/TEIC/TEI/pull/2352).
		- Trying to get this merged in for upcoming release; thus **action on all** by **Wed 10\-19** to read and post.
	+ ISO Cat references: <https://github.com/TEIC/TEI/issues/1866>, <https://github.com/TEIC/TEI/issues/2227>, <https://github.com/TEIC/TEI/issues/2340>
		- Elimination of ISO Cat references. Standard does not really define the attributes any longer, but it is referenced in the Guidelines.
		- With Piotr: discussion of work on datcat
			* remove dcr: namespace to make them native TEI attributes
			* \`\<equiv\>\` vs \`@datcat\`: \`\<equiv\>\` for tagdocs and taxonomies in the \<teiHeader\>. \`@datcat\` is for use anywhere else. This does not need to be a purely linguistic attribute. Could be used anywhere we need an external taxonomy.
			* Piotr has added attributes: \`@valueDatcat\` and \`@targetDatcat\`, like \`@targetLang\`
			* See [https://jenkins\-paderborn.tei\-c.org/view/LingSIG/job/TEIP5\-LingSIG\-deadISOCat/lastSuccessfulBuild/artifact/P5/release/doc/tei\-p5\-doc/en/html/ref\-att.datcat.html](https://jenkins-paderborn.tei-c.org/view/LingSIG/job/TEIP5-LingSIG-deadISOCat/lastSuccessfulBuild/artifact/P5/release/doc/tei-p5-doc/en/html/ref-att.datcat.html)
			* The branch is at <https://github.com/LingSIG/TEI/tree/deadISOCat>.
			* PR is [\#2359](https://github.com/TEIC/TEI/pull/2359).


New chair for 2023
------------------


* EBB volunteers. **Action on MS**: will send email as several council members are not present in this zoom, decision needed in December, one new chair or perhaps two co\-chairs (and then changing of bylaws).


Report on CMC
-------------


* SB: Slow progress being made — not much to report except that the release of the chapter in Spring 2023 is looking a bit less likely.


Guidelines production via TEI Processing Model
----------------------------------------------


* MT presents a [prototype](https://guidelines.teipublisher.com/), and requests testing and reporting of issues (i.e., discrepancies with existing Guidelines) and feature requests via [https://github.com/eeditiones/tei\-guidelines](https://github.com/eeditiones/tei-guidelines)
* At which point shall we move this repo to TEI?
* Consider branding and design (involving touch\-up of the TEI logo).
* MT suggests we get a new or updated logo.
* MT suggests we outsource design advice, if not work, on GLs (and website).


oXygen version 25
-----------------


* See plugin functionality as discussed in e\-mails by Martin Holmes.


AOB
---


* SB suggests we discuss (via Slack) the September issues (see table below) for which the subgroup suggested they be marked green.
* **Action on MS** to initiate the discussion on Slack.


Issues from the F2F meeting (September 2022\)
---------------------------------------------


Group D: SB, HB, SS
Group E: MT, MH, EBB


Group F: HC, MS, PS




| \#2300 | D | [restrict embedded transcription to sourceDoc / exclude text in zone and line as part of facsimile](https://github.com/TEIC/TEI/issues/2300) | We suggest marking it as green |
| --- | --- | --- | --- |
| \#2314 | D | [TEI example is old\-formatted](https://github.com/TEIC/TEI/issues/2314) | We suggest marking it as green |
| \#2315 | E | [example example discusses a possible future feature](https://github.com/TEIC/TEI/issues/2315) | Subgroup agrees that changing the item is a good idea to encourage best practices. |
| \#2327 | F | [teidata.unboundedInt should be named teidata.unboundedCount](https://github.com/TEIC/TEI/issues/2327) | Seems sensible. Group thinks we should merge the PR and close. Do we need deprecation of teidata.unboundedInt before nuking it?! |
| \#2331 | E | [bad link → consistent referencing needed to ISO 24611](https://github.com/TEIC/TEI/issues/2331) | Subgroup suggests green for go to create a new bibliography entry and fix all references to point to it. |


 