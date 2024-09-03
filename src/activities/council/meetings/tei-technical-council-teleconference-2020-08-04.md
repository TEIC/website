---
title: "TEI Technical Council Teleconference, 2020-08-04"
date: 2020-08-04
---
# TEI Technical Council Teleconference, 2020-08-04
**Meeting time:**


* EST 09:00–10:30, GMT 14:00–15:30, CEST 15:00–16:30
* Started:    13:08Z     Ended: 14:29Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Nicholas Cole (NC)
* Jessica Lu (JL)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux (VB)
* Magdalena Turska (MT)


**Note:** ticket triage table is near the end of this document.
Next release
------------


* Release techs: NC (note taker), HC (lead tech), JL (support tech)
* Timeline: freeze on Sun 08\-12, release branch: Mon 08\-17, release: Wed 08\-19
* Release version: 4\.1\.0 (Guidelines), 7\.50\.0 (Stylesheets)
* Guidelines issues to discuss/review for the upcoming release:
	+ Content model of \<standOff\>: <https://github.com/TEIC/TEI/issues/1977>
		- PR <https://github.com/TEIC/TEI/pull/2018>
		- Sample suggested TEI encodings of WADM and preliminary notes from SB, HC, NC meeting. [https://docs.google.com/document/d/15lPVs89ehDNpQQ3Qf79kfRAECSN\-MT\_SpBlQpHUqyLI/edit](https://docs.google.com/document/d/15lPVs89ehDNpQQ3Qf79kfRAECSN-MT_SpBlQpHUqyLI/edit)
		- HC, NC, RV, SB will work on the issue.
	+ Restructure chapter 11: <https://github.com/TEIC/TEI/issues/1427>
		- pull request: <https://github.com/TEIC/TEI/pull/2014>
		- related issue: <https://github.com/TEIC/TEI/issues/1477>
		- RV is waiting for further feedback, **action on Council** to review issue and supply feedback by 08\-09\.
		- **Action on MS** to review related issue and make suggestions on how to implement.
	+ Add \<surplus\> to \<subst\>: <https://github.com/TEIC/TEI/issues/1661>
		- <https://github.com/TEIC/TEI/pull/2005>
		- PS says it’s good to go
		- Action on SB to review and EB to merge branch into dev.
	+ Investigating changing the class membership of \<q\>: <https://github.com/TEIC/TEI/issues/1918>
		- pull request: <https://github.com/TEIC/TEI/pull/2008>
		- **Action on EB** to push one more update to the wording (today) to respond to SB.
		- We need reviewers on this to approve the language, and then add some translations for the new class.
			* **Action on MB** and NC to review pull request with a particular eye to the wording of descriptions.
			* **Action on MS and RV** to add translations.
	+ tei.datapointer equivalent to move/@where: <https://github.com/TEIC/TEI/issues/1769>
		- pull request <https://github.com/TEIC/TEI/pull/1958> is a start of an implementation that EB thinks may be obsolete — **Action on EB** to take a look and either close or propose this PR **by 2020\-08\-06\.**
		- pull request: <https://github.com/TEIC/TEI/pull/1974> is HC’s implementation using the (agreed to) datatype teidata.authority that can be either an enumeration or a URI.
		- EB wonders if we want att.locatable? Will review both.
	+ New element for grouping notes \<noteGrp\>: <https://github.com/TEIC/TEI/issues/1833>
		- PR <https://github.com/TEIC/TEI/pull/1920>
		- **Action on SB** to review if enough time after reviewing other issues for the release.
		- HC is inclined to allow note\+ (in content model of \<annotation\>)
		- Clarification on \<noteGrp\>: a group of notes that is somehow similar, e.g. translations bundled together; different output media etc.
	+ Review placement of classes, macros, and datatypes in modules
		- <https://github.com/TEIC/TEI/issues/1710>
		- This should probably be a release of its own, **just** addressing this issue. Probably in a few months time, as an interim release.
		- We should consider numbering this a major release: 5\.0\.0 or whatever.
		- Customization ODDs that explicitly pull classes from modules will break or have incorrect documentation (or both).
	+ Examples in ODD example page do not use ODD pure
		- <https://github.com/TEIC/TEI/issues/1813>
		- Should everything be copied to the Wordpress or does the new version of the [ODD Introduction](https://github.com/TEIC/TEI/blob/dev/Documents/ODDintro/2020-version.xml) from Lou Burnard belong in the Documentation repo, and we link to it from there. EB: Or set an iframe on the Wordpress page to show the XML from the Documentation repo?
		- RV: it should be possible to create a simple plugin to render a TEI doc with CETEIcean, but we’d need to write it. HC has been looking at this. General sadness over the “cruftiness” of TEI content in Wordpress.
		- Council agrees to update the content directly in wordpress as a temporary solution. But we need a workable solution to display XML content directly in Wordpress including the header, navigation etc. of the TEI website.
	+ Stylesheets issues to discuss/review
		- Release blocker: A jquery file with vulnerabilities <https://github.com/TEIC/Stylesheets/issues/433>
			* HC and PS think we should just update jquery. **Action on PS** to look at the jquery\-related issues. Not sure we actually need the jquery library—if we need it we should update. PS will review the ticket to see if it can be closed. Note: The Guidelines do use jquery and it may be a security issue? Maybe we don't need it—RV might be able to remove dependency on it, but not immediately.


Git branch renaming
-------------------


* Consensus (from the last meeting) is to rename the “master” branch to “**released**”, using “**rc\-**X.Y.0” for the branch the release techs are working on, and to keep each **rc\-** branch only until the next release.
* HC created “released” branch for Guidelines. Branch for Stylesheets repo is needed. For the other repos, use “main”. **Action on PS** to do the renaming of all other repos (under https://github.com/TEIC) as well. Or wait to see if GitHub automates this process.
* Need to protect those new “released” branches so we can’t merge to these branches (as we’ve done for the old master branches).


Question on usage of @version
-----------------------------


* MS sent an email to TEI\-L on July 16 — no reply.
* [http://tei\-l.970651\.n3\.nabble.com/survey\-on\-version\-usage\-td4032787\.html](http://tei-l.970651.n3.nabble.com/survey-on-version-usage-td4032787.html)
* Try raising it again in much simpler and more dire terms: We’re thinking about removing the @version on TEI, does anyone care?
* Repost short version in September (we deliberately defer this to the next release because the TEI list was too quiet in July).


Reminder — Action on
--------------------


* **SB, PS**, and **JL** to discuss issue <https://github.com/TEIC/TEI/issues/1955>.


 
Ticket Triage (and minute review) assignment table
--------------------------------------------------




| **Month** | **ticket triage** | **minute review/assist** |
| --- | --- | --- |
| **August 2020** | NC | SB |
| **September 2020** | JL | NC |
| **October 2020** | RV | JL |
| **November 2020** | NC | SB |
| **December 2020** | SB | EB |

