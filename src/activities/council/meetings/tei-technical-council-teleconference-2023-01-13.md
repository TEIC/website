---
title: "TEI Technical Council Teleconference, 2023-01-13"
date: 2023-01-13
---
# TEI Technical Council Teleconference, 2023-01-13
### **Meeting times**


* 6:30am PST / 9:30am EST / 2:30pm UTC / 3:30pm CET
* Started: \~14:33Z Ended: \~16:02Z


### **Present:**


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Patricia O'Connor (TOC)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


### **Apologies/Not Present:**


* Elli Bleeker (EB)


Meeting minutes previous month ([December 2022](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2022-12-08/))
Spring F2F meeting
------------------


* 7–9 May at University of Guelph: working at [THINCLab](https://www.uoguelph.ca/arts/dhguelph/thinc)  [(McLaughlin Library)](https://goo.gl/maps/wyf6RJ7grWwdAncMA).
* There's a conference before for the LINCS Project (5–7 May). CFP forthcoming; JJ will circulate. Proposals from Council members encouraged!
* After our meeting there is a 4\-day event “DH@Guelph” scheduled (9–12 May).


Fall F2F meeting
----------------


* The TEI Conference is Mon 04 Sep to Fri 08 Sep at Paderborn (see [save the date notice](https://www.uni-paderborn.de/forschung/forschung-im-profil/digital-humanities/nachricht/save-the-date-joint-tei-and-mei-conference-2023))
* Council may meet before or after the conference (per PS).
* General consensus it is probably better if Council meets before the conference begins.
* **Action on EBB by 2023\-02\-01:** Find out when workshop days are.


Stylesheets Group meetings
--------------------------


* Reminder to vote timeslot preference: [poll](https://tei-c.slack.com/archives/C607Y6YAE/p1672944261007979) (\#general).


Council Workflow Review
-----------------------


* Ticket Triage
	+ Nick Cole’s program to show how many tickets we each have is in [a repository of his](https://github.com/npcole/teiutils).
* Minute review (and what becomes of minutes)
* [Update P5 subset](https://docs.google.com/document/d/1UhCg76_AgnS5PW0g_EN6zPZE4tTUs0bNeMXFVmZ4VuQ/edit#heading=h.yg4zfkshniwp)


Status check: TEI GitHub Webhooks and Secrets
---------------------------------------------


* See [Stylesheets PR \#588](https://github.com/TEIC/Stylesheets/pull/588): the tests fail due to failed Slack webhook action on external PRs.
* Who maintains these now? How shall we maintain them going forward?
	+ Peter Stadler may have set them.
	+ HC may be able to modify them.
	+ General agreement that it would be helpful to have internal documentation aimed at the TEI Council: that describes our webhooks and how we get into them.
	+ **Action on HC and JT by 2023\-03\-14:** to write up a TCW on webhooks and GitHub dependencies.


Key for signing Debian packages
-------------------------------


* Peter Stadler has updated the key to be valid until 2025\-01\-12\.
* Signing is an authentication process that makes it easier on users to install our packages, and gives the user confidence they are getting the right thing. However, unsigned packages can still be installed.


Status of TEI mailing lists
---------------------------


* Huma\-Num does not have sufficient personnel available to help; thus new options are on the table.
* Elli Mylonas is maintaining TEI LISTSERVs while in her retirement (she and SB are the list owners). She reports that we need a Brown sponsor, but that person does not have to do the work of list management. Brown may be interested in maintaining the TEI listserv, given that they are an institutional member of TEI; they may not if they do not actually do much TEI anymore.
* Note that a LISTSERV list can be migrated without loss to another LISTSERV server. (We have over 1000 subscribers on TEI\-L, so this would be nice.)
* Board can discuss when they meet next week.


Documentation subgroup (HC, MS, JJ)
-----------------------------------


* Council receives an update from the subgroup based on their January 12 meeting, notes from from which are at [https://docs.google.com/document/d/1LCQgwRSueT8EOwsZRfL8353F\-tgqMPYowAtTrgMRa8I/edit](https://docs.google.com/document/d/1LCQgwRSueT8EOwsZRfL8353F-tgqMPYowAtTrgMRa8I/edit).
* What to do about the [TEI Wiki](https://wiki.tei-c.org/index.php?title=Main_Page)?
	+ In some places it is very outdated
	+ FAQs may still be useful.
	+ MS is considering asking the authors of various pages if the content is still needed or can just be deleted.
	+ E.g., we have an old [list of projects in WP](https://tei-c.org/activities/projects/), and a very old [list of projects in the wiki](https://wiki.tei-c.org/index.php?title=Category:Projects).
	+ TEI Minutes from 2008 to 2012 are on the TEI Wiki and need to be uploaded to the WP.
		- Nice to have an XML basis for the minutes
		- After some brief discussion we concluded that there is no need to keep minutes in a version\-controlled repository.
	+ Decisions to be made about the wiki
		- What's archival here—e.g., to be made static and moved to the Vault?
		- What should just be removed and not archived?
* We need just one place for all TCWs. Subgroup suggests TEIC Documentation repo.
* HC: JJ has suggested we need a records management TCW.
	+ Subgroup needs to have another meeting before suggesting actions for Council.
* **Action on HC before next Council meeting** to work on publishing from [Documentation repo](https://github.com/TEIC/Documentation); perhaps rendering with CETEIcean.
	+ The documentation should look and feel roughly like the current documentation on the TEI website.
* Discussion: Do we need only one place for documentation, or does the Wiki serve a special purpose?
	+ What is the purpose of the TEI Wiki or what should it be now in 2023 and going forward?
		- When the Wiki becomes outdated, messy, and difficult it reflects poorly on TEI, and the Council particularly, as the Community may assume it is the Council’s responsibility to maintain it. (It is not.)
		- Should there be someone outside of Council and Board that maintains the TEI Wiki?
		- We could archive the old TEI Wiki (Wayback Machine) and keep what is still relevant.
		- HBS points out that people have cited the TEI Wiki in article bibliographies.
		- HC asserts we would need an archival function — we would need to put a redirect in place for those still wishing to cite obsolete TEI Wiki pages.
* TEI Wordpress website:
	+ [Tools page](https://tei-c.org/tools/) badly outdated: e.g., CeTEIcean \& TEI Publisher are not listed.
	+ Check access to WordPress website. If any member of Council is having trouble accessing, or can not remember how to access, the WordPress source of the TEI website, ping EBB.
	+ HBS suggests we develop a short Google Form with text input (no longer than *N* words) for people to use to describe their tools. Then we contact the TEI list and invite people to submit information about their projects.
		- Google Form for TEI Projects could be a good template for the Tools page.
		- Can we find the original Google Form for TEI project input?
		- After we have a Google Form established, we will have an **action** on each of us to submit blurbs about TEI tools we know.
	+ **Action on EBB:** take this to the next TEI Board meeting to discuss and report back to Council in February.


RomaJS updates
--------------


* Five years old already!
* RV proposes that we are ready to drop the beta label with the next release; thus to update the version number from 0\.3\.1 to 1\.0\.0\.
	+ Some believe it is urgent to switch out the old Roma and call it Roma Legacy (or some such) for lack of maintenance.
	+ It was previously suggested to name it Roma Classic.
* RV has internationalized RomaJS, and both Italian and French localizations have been provided (thanks Lou Burnard!).
* Also German, Spanish, Japanese, and Chinese have been added by the Deepl API, but need to be checked by a human. Gimena del Rio Riande began the revision of Spanish. Kyonori Nagasaki will involve some of his students for the revision of Japanese. MS offered to review the German translations.
* The [Roma beta URL](https://romabeta.tei-c.org/) will need to be redirected to the new RomaJS page.
* **Action on RV** by **2023\-02\-10** to prepare for the new release, check in on the ongoing internationalization work, and update Council.


Internationalization
--------------------


* TEI [Spec Translator](https://github.com/TEIC/spec_translator)
	+ HC reports we have complete translations for Spanish, but not for any other languages, yet.
	+ **Action on HC** to prepare a) instructions for users who wish to add translations, and b) a call for contributions  of translations in other languages.


Rendering "Attributes" section of tagdocs
-----------------------------------------


* [Stylesheets \#592](https://github.com/TEIC/Stylesheets/issues/592) We need a better way to render attributes in the “Attributes” section of the tagdocs for elements and classes.
* SB briefly introduced this, to be discussed more in a future meeting.
* Example: <https://guidelines.teipublisher.com/ref/acquisition/> and [https://tei\-c.org/release/doc/tei\-p5\-doc/en/html/ref\-acquisition.html](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-acquisition.html)
* From the 2022\-12 Stylesheets meeting (which was held 2023\-01\-05\): “General consensus is that this needs to be improved, and a vertical listing with meaningful indentation is probably a good idea. We should do this more like MEI with optional alternative views. [https://music\-encoding.org/guidelines/v4/elements/abbr.html\#attributes](https://music-encoding.org/guidelines/v4/elements/abbr.html#attributes)”


 