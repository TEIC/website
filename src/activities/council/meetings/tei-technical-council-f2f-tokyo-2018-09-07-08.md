---
layout: page.njk
title: "Technical Council F2F Tokyo 2018-09-07/08"
---
# Technical Council F2F Tokyo 2018-09-07/08


| Council Meeting | Fri 09\-07 | full day |
| --- | --- | --- |
| Council Meeting | Sat 09\-08 | full day |
| Workshops | Sun 09\-09 | 09:30–17:30 |
| Open Council Session | Mon 09\-10 | 09:30–12:00 |


**Venue**
Our meeting takes place at the conference venue, at **Hitotsubashi Hall** (Room 201\) <https://goo.gl/maps/RPS254Gz6Ek>


**Present**


* Elisa Beshero\-Bondar (EB)
* Syd Bauman (SB)
* James Cummings (JC)
* Martin Holmes (MH on Saturday)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Meeting started 09\-07 09:30 localtime**
**Friday** **Morning (9:00\-13:00\)**
-------------------------------------


* **Next release**
	+ January 2019
	+ Discussion: twice a year is our usual pace, but we may have something significant to release by December.
	+ SB: suggests mid\-to\-late January, Mon 01\-21 or Tue 01\-22\.
		- Decide on release techs after the elections so new people could be involved.
	+ Pair with RomaJS release: Need a Stylesheets release ahead of time for RomaJS. Next release of TEI will have JSON output for RomaJS.
	+ PS: Stylesheets release maybe in the next week or two: OxGarage updates. Release techs for Stylesheets: SB and RV. Target: Fri 09\-28\.
		- May need to consult Ian Rifkin during release, he is in charge of root access to the ADHO server infrastructure.
* **F2F meetings 2019**
	+ Spring F2F:
		- MT expresses interest from Warsaw University for hosting our next meeting, perhaps in April or May?
		- XML Prague again?
		- Providence?
		- JC: Newcastle University?
		- Discussion: should we continue having Council F2F at the same time as Member’s Meetings? PS: suggests we disconnect—shorter travel, more time for us to meet. EM and EB think we should continue with it: good for transparency of Council business, and also to be sure Council members are present at conference. Travel budgets are an issue for us.
		- Action on MS to add Spring location and timing of F2F to agenda for 09\-27 Council meeting.
	+ Graz, TEI conference 16(–20 September 2019
		- Before would be better for Peter (start on Fri 2019\-09\-13 or Sat/Sun/Mon).
* **Should we still release on SourceForge**
	+ JC: TEI project on SourceForge (<https://sourceforge.net/projects/tei/files/>)  lets you download TEI release. JC: This has been our “official release” location. RV: we should change that. Let’s switch to the links on the TEI website to GitHub (<https://github.com/TEIC/TEI/releases>). We can then monitor whether people switch to GitHub or keep downloading from SourceForge. If few/no people use SourceForge then we can stop using it.
	+ PS: What’s the relationship with TEI Vault? Release binaries aren’t being stored there, but should be. Zip directories go there, so maybe this doesn’t matter. We need a stable linking mechanism to point to all available versions, and Vault is the place for that. JC: Checked file space on tei\-c.org recently and there was a fair bit. Reason to store binaries there: Canonical URI should be TEI\-C not third party service.
	+ Add instructions to put oXygen zip files in the Vault (Those are being released in a different TEI repo: [https://github.com/TEIC/oxygen\-tei/releases](https://github.com/TEIC/oxygen-tei/releases)).
* **Should we consider a migration to GitLab (see email LB on 2018\-06\-04\)**
	+ No reason to, unless GitHub changes significantly which it hasn’t.
	+ Transition to GitLab would be easier than last migration from Subversion.
	+ MT: GitLab is better at grouping subprojects within projects and can add estimated times for project tasks. Neither of these is really necessary for our operations.
	+ Our community of contributors (pull requests, tickets) is well ensconced in GitHub. Better to stay (for now).
* **Deprecation** **policy:**
	+ JC: The so\-called Birnbaum Doctrine ([http://www.tei\-c.org/activities/council/working/tcw09\-backward\-compatibility\-and\-the\-maintenance\-of\-the\-text\-encoding\-initiative\-guidelines/](https://www.tei-c.org/activities/council/working/tcw09-backward-compatibility-and-the-maintenance-of-the-text-encoding-initiative-guidelines/)) was created at the Kyoto meeting in 2006\. We later superseded this with TCW27 [http://teic.github.io/TCW/tcw27\.html](http://teic.github.io/TCW/tcw27.html) (in which we invented @validUntil, for example). But as we are back in Japan perhaps that serves as a reminder that we should occasionally re\-examine and possibly update our deprecation policy, where the holes are (what can’t we deprecate?), and our (necessary) license to break backwards compatibility when we judge it to be in interest of the TEI Community. I’m not proposing any major changes to the policy, merely that we re\-examine it and consider any gaps (e.g. should the policy also cover software?). For example, should we be archiving GitHub repositories? (This makes them read\-only.)
	+ JC: Some things can only be deprecated in the prose. TCW27 should contain a note that not all things can be deprecated through markup mechanisms (and some things may not yet have mechanism).
	+ EM: Worth considering that old projects that don’t use new versions of TEI aren’t affected. People running new projects or who want new features are most affected. We have to consider who is affected.
* **Archiving Github Repositories**
	+ JC: Already done. No bad side effects that I’ve noticed.
* **Review other TCWs**
	+ See <http://teic.github.io/TCW/> and [http://www.tei\-c.org/activities/council/working/](https://www.tei-c.org/activities/council/working/)
	+ We will need a new one for RomaJS.
	+ TCW 22 needs to be updated from last release in July: **action** on **PS** (check if updated) by **2018\-09\-26\.**
	+ Should we divide the working papers page on tei\-c.org to separate actively\-edited papers from older papers?
		- **action** on **MS \& JC** by **2018\-09\-27**: re\-work TCW page (e.g. divide into “current” and “legacy” or some such).
* **Tickets if time left**
	+ Current status (as of 2018\-09\-07, update just before):
		- TEI: 145 open issues
		- Stylesheets: 111 open issues
		- Roma: 15 open issues
		- RomaJS: 4 open issues
		- OxGarage: 15 open issues
		- CETEIcean: 2 open issues
		- oxygen\-tei: 8 open issues
		- Jenkins: 1 open issue


**Groups:**
* **A:** JC, EM, MT
* **B:** EB, SS, PS
* **C:** MS, RV, SB


**Status: Needs Discussion / Go and Needs Discussion**


| **Ticket Number** | **Breakout Group** | **Title** | **Notes** |
| --- | --- | --- | --- |
| \#327 | A | [an \<object\> element](https://github.com/TEIC/TEI/issues/327) | Choice is either to just add the \<object\> element to the Guidelines or more consultation by TEI\-L. **Action on JC:** merge branch into dev, send an email to TEI\-L. Could use examples of ”widely understood objects” and texts that reference them. |
| \#1431 (go/needs discussion) | B | [clarify how to encode short\-form citations](https://github.com/TEIC/TEI/issues/1431) | Greenlight JC and HC to act on this ticket. Action seems to be for providing examples in Guidelines for different uses of \<ref\> vs. \<bibl\>. What actions were taken already? (removing “needs discussion”—just “Go”.) |
| \#1531 | C | [rs should contain q and quote](https://github.com/TEIC/TEI/issues/1531) | Status: done—subgroup would like to see if JC can convince anyone that we should back it out. Close the issue because implemented with Syd’s commit. |
| \#1586 | A | [Domain of concept of cleanliness](https://github.com/TEIC/TEI/issues/1586) | On HC to schedule any discussion with Michael Sperberg\-McQueen  and Lou Burnard if needed. |
| \#1596 | B | [Pure\-ODD content model elements appear to be strictly weaker than regular languages \-\- intended?](https://github.com/TEIC/TEI/issues/1596) | Unclear whether there’s any problem with the current implementation. Close the ticket, but SB will discuss with Michael Sperberg\-McQueen. |
| \#1606 | C | [dataRef should not permit @restriction and @key](https://github.com/TEIC/TEI/issues/1606) | Need clarification from Lou Burnard, question posted on ticket. |
| \#1607 (go/needs discussion) | A | [xsl:\* (or other non\-sch:\*) not allowed within constraintSpec](https://github.com/TEIC/TEI/issues/1607) | Looks like it is done? Check with Martin Holmes and SB. |
| \#1617 | B | [dealing with multiple publication places](https://github.com/TEIC/TEI/issues/1617) | Distinguishing between \<place\> and \<placeName\> is significant here. A publication statement isn’t right for cataloging place data, but it is right for listing place names. Laurent Romary should respond to Lou Burnard and JC here about whether their proposals might work. We can’t currently put  \<list\> inside a \<publicationStmt\>: should we revise content model to include a generic list or a new listpubPlace? Decision: ACTION on PS, close. |
| \#1621 (go/needs discussion) | C | [Status of Schematron rules in TEI](https://github.com/TEIC/TEI/issues/1621) | Looks good, unless EBB wants to clarify some aspects of her work. Discussed edits—will check into dev.) |
| \#1626 | A | [request: accept xmlns\="http://standoff.proposal" where appropriate](https://github.com/TEIC/TEI/issues/1626) | Is this still a problem? Can we close this? |
| \#1632 | B | [egXML needs a way to highlight rendtitional aspects in the example](https://github.com/TEIC/TEI/issues/1632) | This is still a great idea but low priority. |
| \#1641 | C | [Change structure of supportDesc](https://github.com/TEIC/TEI/issues/1641) | Subgroup suggests to ask  @schassan to provide an example soon, otherwise the issue will be closed. Also wondering: would multiple \<supportDesc\> solve the issue? |
| \#1645 | A | [Alter Guidelines re “phrase\-level”](https://github.com/TEIC/TEI/issues/1645) | Don’t think EBB’s rephrasing actually fixes the problem.  And actually think current phrasing is clear enough. |
| \#1658 (go/needs discussion) | B | [\<q\> should be allowed in \<span\>](https://github.com/TEIC/TEI/issues/1658) | We suggest adding \<q\> directly to the content model of \<span\>. |
| \#1663 | C | [Things we'd like to do in ODD which haven't been implemented yet](https://github.com/TEIC/TEI/issues/1663) | Just close it |
| \#1695 | A | [example of \<roleName\> other than in \<persName\>?](https://github.com/TEIC/TEI/issues/1695) | Encourage EBB to add more examples, such as Attorney General (not pointing to a specific person). And maybe add prose about when you would have rolename inside \<persName\> and instead outside. |
| \#1698 | B | [The namespace could be mentioned more prominently in the guidelines](https://github.com/TEIC/TEI/issues/1698) | Are the places listed in the ticket still the best places to add commentary on TEI namespace? Or is the documentation we already have enough? If we were to do what original poster suggested (add intro to Appendix B,C), what would we say? |
| \#1707 | C | [How to encode measurement](https://github.com/TEIC/TEI/issues/1707) | Issue for Monday |
| \#1710 | A | [Review placement of classes, macros, and datatypes in modules](https://github.com/TEIC/TEI/issues/1710) | Assigned people just need to get on with it (RV, MS, JC). |
| \#1715 | B | [Clarify description of att.combinable's "mode"](https://github.com/TEIC/TEI/issues/1715) |  |
| \#1720 | C | [Improve description of att.lexicographic](https://github.com/TEIC/TEI/issues/1720) | Mark green, just do it |
| \#1746 | A | [jTEI schema should permit \<biblFull\> inside \<sourceDesc\>](https://github.com/TEIC/TEI/issues/1746) | Decision should be up to jTEI? |
| \#1755 | B | [incipit should be able to contain quote (and/or q?) and probably also cit](https://github.com/TEIC/TEI/issues/1755) | make green—add qlike and quotelike |
| \#1756 | C | [event should have ptr and idno in its content model](https://github.com/TEIC/TEI/issues/1756) | Good example for open session. |
| \#1757 | A | [remove P5/ReleaseNotes/ChangeLog](https://github.com/TEIC/TEI/issues/1757) | Agreed. Changed to Green “Go” |
| \#1776 | A | [add \<w\> to att.lexicographic](https://github.com/TEIC/TEI/issues/1776) | JC: Use \<choice\> within \<w\> for this kind of thing? Otherwise why did we have the war on text\-bearing attributes? Action on MT to write a clear response on the use of attributes. |
| \#1778 | B | [Make \<trailer\> a member of att.placement and att.written](https://github.com/TEIC/TEI/issues/1778) | Good example for open session. |


 
**Friday Afternoon (14:30\-18:00\)**
------------------------------------


* Planning of Open Council Session
* RomaJS (deferred to Monday)
* TEI Tickets / Pull requests
	+ Do lots of tickets
	+ Continue work on tickets (see table above)


**Saturday Morning (9:00\-13:00\)**
-----------------------------------


Started @ 09:17\. Chair thanks Martin Holmes for joining us.
* **Review ticket [\#1707](https://github.com/TEIC/TEI/issues/1707)**
	+ Should we have a Jenkins job for this branch? This raises issues of if we should do it for all branches.
	+ EB notes that we need to still do a lot of writing in the Guidelines to address this ticket (describe \<unitDecl\> and \<unitDef\>).
	+ RV: We could perform a discussion live like the one we’re doing today [https://github.com/TEIC/TEI/issues/1707\#issuecomment\-346844499](https://github.com/TEIC/TEI/issues/1707#issuecomment-346844499).
	+ EM: For Open Session focus on the proposed solutions rather than the various problems (and diversions) that were mentioned on the ticket. EBB will summarize on slides, and invite Naoki to add slides, too.


* #### Stylesheets tickets:
Possibly straightforward tickets:
* [\#326](https://github.com/TEIC/Stylesheets/issues/326), [\#322](https://github.com/TEIC/Stylesheets/issues/322), [\#321](https://github.com/TEIC/Stylesheets/issues/321): decision seems to be easy, implementation not so much
* [\#316](https://github.com/TEIC/Stylesheets/issues/316), [\#308](https://github.com/TEIC/Stylesheets/issues/308)\+[\#234](https://github.com/TEIC/Stylesheets/issues/234): same issue; fix simply requires deletion of code
* [\#287](https://github.com/TEIC/Stylesheets/issues/287): just needs to be closed
* [\#286](https://github.com/TEIC/Stylesheets/issues/286): good pull request exists, but discussion wandered away from the point
* [\#259](https://github.com/TEIC/Stylesheets/issues/259) proceed\-or\-not decision is easy
* [\#201](https://github.com/TEIC/Stylesheets/issues/201) simple decision, probably no
* [\#200](https://github.com/TEIC/Stylesheets/issues/200) simple tweak to Jenkins job


**Groups**
* **A:** MH, SS, MS
* **B:** SB, MT, EB
* **C:** PS, RV, EM, JC




| **Ticket Number** | **Group** | **Title** | **Notes** |
| --- | --- | --- | --- |
| [\#326](https://github.com/TEIC/Stylesheets/issues/326) | A | [Stylesheets do not pass xml:id of floatingText to HTML5](https://github.com/TEIC/Stylesheets/issues/326) | Assigned to MS |
| [\#322](https://github.com/TEIC/Stylesheets/issues/322) | B | [Example doesn't do what it says](https://github.com/TEIC/Stylesheets/issues/322) | Fix this by changing the datatype to teidata.count, and not with SB’s lovely regex. Fixed \& closed. |
| [\#321](https://github.com/TEIC/Stylesheets/issues/321) | C | [All Guidelines Pages should have dropdown menu in footer to go to other versions in the Vault.](https://github.com/TEIC/Stylesheets/issues/321) | see ticket |
| [\#316](https://github.com/TEIC/Stylesheets/issues/316) | A | [Stylesheet library includes some conversions which are not included in release](https://github.com/TEIC/Stylesheets/issues/316) | MH fixed and closed (still waiting to see if anything breaks) |
| [\#308](https://github.com/TEIC/Stylesheets/issues/308) | B | [from docx problem](https://github.com/TEIC/Stylesheets/issues/308) | Assigned to MT to remove refs to saxon9ee on the files listed and run tests |
| [\#234](https://github.com/TEIC/Stylesheets/issues/234) | C |  | same as \#308, didn’t handle |
| [\#287](https://github.com/TEIC/Stylesheets/issues/287) | A | [Roma and bin directory of Stylesheets](https://github.com/TEIC/Stylesheets/issues/287) | Didn’t receive necessary feedback; we don’t maintain this, so we propose closing. |
| [\#286](https://github.com/TEIC/Stylesheets/issues/286) | B | [\<ref\> inside \<listRef\>](https://github.com/TEIC/Stylesheets/issues/286) | Should we just merge this [pull request](https://github.com/TEIC/Stylesheets/pull/292)? Note: we may not be quite done with this issue: check to see if listRef/descendant::ref can work. Decision: ready to merge (EBB updated fork and pull request). Merged pull request. Opened a new ticket to deal with odd2lite. |
| [\#259](https://github.com/TEIC/Stylesheets/issues/259) | C | [What's wrong with binaryObject?](https://github.com/TEIC/Stylesheets/issues/259) | Subgroup recommends closing; HTML and FO have been fixed, and we don’t see the point in fixing docx and ODT |
| [\#201](https://github.com/TEIC/Stylesheets/issues/201) | A | [Output file naming from ODDs](https://github.com/TEIC/Stylesheets/issues/201) | Subgroup thinks that we should make the naming conventions the same as in oXygen (i.e. change to putting things in a directory called “out”). Decision:  Don’t change the “out” directory since we don’t all agree about it and it’ll cause fallout. Do change “.relaxng” to “.rng” and “.odd” to “.rng”. |
| [\#200](https://github.com/TEIC/Stylesheets/issues/200) | A | [CSS file is mysteriously missing from build results](https://github.com/TEIC/Stylesheets/issues/200) | MH to investigate and check with PS to see if his Jenkins is doing the same thing. |


**Saturday Afternoon (13:50\-18:00\)**
--------------------------------------


* **Stylesheets** testing \[MH (\& SB)]
	+ PS: Issue of circularity when trying to set up a new Jenkins—can Stylesheets test have its own data?
	+ What triggers the circularity problem?
	+ Should P5 builds use the tei\-c.org Stylesheets if there’s no local built copy?
		- Yes, but use the appropriate GitHub raw URI for the branch being built—but(!) how do we know what release number to use? We need the version number for the most recent release branch.
	+ SB and MH are working on an additional test, it’s Test2\. Input files, output files, and expected results. Modularized build files. Stylesheets \> Test2 in dev. This will replace Test. Rationalizing existing files, renaming them so that they express what they do. Should multiple files test tiny things or one big file test everything?
* **Docker**
	+ PS: Containers (tech via Linux) depends on a kernel mechanism. Applications require libraries and binaries and VM. Docker engine connects Host OS with the container’s internal stuff. Container contains everything necessary to run an application. Host OS can be anything, a “sandbox system”.
	+ Link from PS: [https://medium.freecodecamp.org/a\-beginner\-friendly\-introduction\-to\-containers\-vms\-and\-docker\-79a9e3e119b](https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b)
	+ One docker container for one thing: microcontainment. You can map almost anything from inside the container to the host. Host is like the ship. The container’s ports can be mapped to the host. Two containers can be working on their own port 80s, and they can speak to the outside world via being mapped to, say, port 80 and port 8080 on the Host OS. The host ports can be mapped to URLs—Host OS can be running its own Apache. You can run bash shells in the containers. And you can make data be stored outside in the Host OS.
	+ Docker client is connected to Docker Host, which has images that can run containers. (When you do “docker run” you map the ports.)
	+ Docker registry is a service via Docker Hub, a little like GitHub—a central provider and storer of community images. You can pull images from the common registry to your local host and run there.
		- Discussion: could there be something nasty in the community registry? Not a problem so much because you can shut down a container without affecting host system.
		- Integration of GitHub and DockerHub.
		- PS also shows Rancher (<https://rancher.com/>)—which manages Docker or other container images.
		- GitLab would work as well.
		- Dockerfile: You write instructions here for what you need to build. It builds/installs/configures the docker container.
	+ Webhooks designed to pull updates from e.g. Debian or Apache, etc.
	+ If you have a docker account, write to PS and he will add you to the TEI dockerhub.
	+ PS proposes:
		- reset the teic/jenkins image to an automated build \-\> Council agrees.
		- reset the teic/teidev\-docker image to inherit from the TEI Jenkins image and turn it into an automated build.


* + - optional: add the (dev version of the) Stylesheets to the  teic/teidev\-docker image for simplifying the docker call.
	+ Explore options for paid cloud services:
		- Talk to Ian Rifkin (ADHO): We want there to be multiple Jenkins for testing builds for redundancy. 3 Jenkins servers, 3 OxGarage, etc. in case one service goes down.
	+ Should Council members individually be testing the Guidelines? (Not really—we don’t want to be running tests on a laptop all night.) Workflow question—is it best to do locally, or in the cloud?
	+ Automatic Failover Redundancy and Geographic\-based load balancing.
	+ University servers hosting? Low bus number if institutional memberships depend on services—too much dependency on single institutions.
* **Jenkins**
	+ Posting notifications to Slack channel \#builds
	+ Reset the Docker Hub image to an automated build (Yes, see above)
* **oxygen\-tei plugin**
	+ We have a fairly urgent decision to make on [Issue 27](https://github.com/TEIC/oxygen-tei/issues/27). I think we should go with the plan as worked out with Alex Jitianu, but the result will be considerable complexity with regard to distributing and maintaining the plugin. An alternative would be to stop supporting older versions and tell people they should update oXygen if they want to use the plugin. But perhaps that would make the plugin pointless?
	+ Should we pay someone to do this? Would it be possible for oXygen to do this work? Probably it would take a couple of days of Alex’s time at first, and maybe a few hours every time we update. Ask Alex Jitianu and George Bina and approach the Board. **Action on: MT (2018\-09\-14\) to write the e\-mail.**
* **Internationali(s\|z)ation I18n**
	+ Procedures/support needed from Council. Should we build spreadsheets of translation updates needed as part of Jenkins builds, so they’re always available and up\-to\-date?
	+ Meeting in Mexico City with Susanna Allés, Kiyonori, Luis Meneses, Gimena del Rio Riande and various Council members (MS, JC, SB, etc.). Noted that there was a lot done around 2007—see [http://www.tei\-c.org/tools/i18n/](https://www.tei-c.org/tools/i18n/). Specs were translated then into Chinese, French, German, Italian, Japanese, Korean, and Spanish. Most of them are out of date and incomplete now.
	+ How do we give access to lots of people to help update translations? Workflow: web forms/JS to permit people to add an updated description—then goes for review to a designated person with TEI GitHub access, who can decide whether and how to implement.
	+ MS: Google Translate to help accelerate the process—turned out to be very helpful in last German translatathon.
	+ MH: Crowdsourcing invites inconsistency. MS: There are inconsistencies in English as well. We could raise new issues to clean up the English, but this takes time and hinders translation progress. JC: Perhaps appoint one person at translatathon as meta person to keep track of new tickets to raise.
	+ Discussion: This would really be managed (Gimena del Rio Riande and students, for example). Council’s role: define workflow for designated managers. MT: Maybe not—we expect XML in certain format, and managed spreadsheets are doomed to fail because of manual labour needed to convert/check. SB: Can we come up with something better than spreadsheets? MT: What we’d want would cost money and time. A graphic tool to highlight text content of an element and provide translation to submit for review. But such systems have communication issues.
	+ EM: Maybe this goes to a Workgroup (not a SIG)—tasked with finding good method. Still in purview of Council and have Council members, but doesn’t take Council time. MH: You need a leader for each language and support them as much as possible.
	+ MS: We cannot ignore a system we set up.
	+ RV: Can we use the new Roma for this? It will make it easy to add/supply new descriptions and deliver as ODD. Can we customize Roma to help with importing translations. Spreadsheet advantage is to eyeball changes.
	+ SB: What about web forms via XForms? We could consult Michael Sperberg\-McQueen about this. What are the hangups with the current process—re German?
	+ MS: Working with spreadsheet was okay—the hangup was moving into the Specs—this had to be done by hand. MH: There’s a merge.xsl file that’s supposed to handle that—never used.
	+ EM: Quick turnaround is important—orm\-based workflow which is easy to merge. RV: XForms could work if we hire someone. Re RomaJS it could be developed to do that kind of merging, too. It’s in scope for the application (eventually).
	+ MT: visual editor for TEI Publisher could work, too.
	+ XML / XML\-aware solutions are preferable.
	+ Who will be chairing the Workgroup? MS is supposed to write a working paper, and is in contact with Gimena del Rio Riande and Susanna Allés. SB: Workgroup is about exploring/defining the technical workflow and software. Council typically appoints a chair and gives them a charter. EM: Let’s wait for next Council meeting when new Council is established.
	+ Susanna Allés wants to meet people interested in internationalization for dinner on Sunday.
	+ Related Issues:
		- \#1780: [Inviting translation of descs, glosses, remarks: workflow](https://github.com/TEIC/TEI/issues/1780)
		- \#960: [i18n revision due](https://github.com/TEIC/TEI/issues/960)


**Monday Morning** **(Open Session)**
-------------------------------------


* **Hello and Welcome \[MS]**
* **Slide set “What TEI Council Does” \[EB]**
	+ <http://bit.ly/teiCouncil>  (15 min) Note: Slides also sum up work so far on \#1707
* **Work on [\#1707](https://github.com/TEIC/TEI/issues/1707) (max 45 min)**
	+ Naoki Kokaze and EBB introduce the ticket, are giving a summary of the ticket and where we are.
	+ EBB minuting: SB: @factor attribute being teidata.numeric is problematic. It should be an XPath (function)...and if that’s not powerful enough (MH says), we raise a problem with the XPath specification.
	+ How do we handle conversions in \<unitDecl\>?
		- Multiple \<unit\> elements inside \<unitDef\> (discussion). MT: This is analogous to multiple \<persName\> elements referring to the same \<person\> element.
		- SB: We need to be careful about the semantics of multiple \<unit\> elements in the same \<unitDef\>. SS: What if we handle this with a listRelation, which we hold outside the person elements? SB: People of course will want to move it inside the thing being defined (\<unit\>, \<person\>).
		- JC: Does \<unitDef\> nest? If it self\-nests, that will solve problems. Schematron rule for nested \<unitDef\> elements.
		- MH: What about creating \<unitDefGrp\>, instead of nesting?
		- MH: \<unitDef\> is designed to be helpful for conversion, say a \<unitDef\> for 2016 dollars.
		- At issue: Do conversions go inside the \<unitDef\>, or outside in the \<unitDecl\>? MT: What about two options?
		- MH: What about a \<conversion\> element. It behaves differently if it’s positioned inside and outside the \<unit\>. @fromUnit\=”unitDef”, @toUnit\=”unitDef” @formula\=”XPath”. If inside the \<unit\> element, you don’t need the @fromUnit.
		- JC: why not @from and @to? SB: because this is for completely different things.
		- Using XPath \+ regex is a) risky (XPath injection attack), b) never been done(!).
		- 4 attributes in TEI have a datatype of XPath...we need security warnings in the Guidelines...1 of these is seriously risky, the one on @param teidata.xpath should have a paragraph in the remarks describing the issue.
		- RV: Can we provide a simpler method for those who don’t need an XPath?
		- New actions on EBB: @factor should change to @formula. Add a \<conversion\> element, @fromUnit, @toUnit.
		- @formula gets its own new attribute class because it might have wider use. Don’t put @fromUnit or @toUnit in a class.
* **Tools supported by the TEI (max 20 min) \[PS and RV]**
	+ RomaJS with Council reporting back on roadmap, etc. \[RV]
		- Tickets should go on TEI RomaJS repo (not Guidelines).
	+ Docker Report \[PS]
* **Ticket reporting \[All Council]**
	+ Subgroups that examined tickets on Saturday reporting to full Council
	+ [\#1756](https://github.com/TEIC/TEI/issues/1756) [event should have ptr and idno in its content model](https://github.com/TEIC/TEI/issues/1756)
		- We agree with JC’s recommendation on the ticket. Really we need something at 1st level for inline tagging of event (all we have is \<rs\>, \<name\>, etc. New ticket for that?
	+ [\#1778](https://github.com/TEIC/TEI/issues/1778) [Make \<trailer\> a member of att.placement and att.written](https://github.com/TEIC/TEI/issues/1778)
		- Greenlight, and EM should implement.
	+ [\#1805](https://github.com/TEIC/TEI/issues/1805) [Suggestion for new uniHan element](https://github.com/TEIC/TEI/issues/1805)
		- Duncan Paterson is giving a paper on this tomorrow...Discussion: should this be more general than UniHan? UniHan is different from unicode, though maintained by the unicode consortium. Unicode is “baked into” text processing. MH: It’s syntactic sugar (like \<persName\> and \<name type\="person\>), and \<uniHan\> would be like \<name type\="uniHan"\>.
			* SB: Should there be a closed list of values for this element? MH: the analogy is @xml:lang, we could make an elaborate regex to cover all possible combinations (beyond just a closed \<valList\>) but new values could be proposed. MS: Add to agenda of next conference call after we hear Duncan’s and Martin’s papers tomorrow.
	+ [\#1795](https://github.com/TEIC/TEI/issues/1795) [Language of Schematron messages where @role\="nonfatal" and @role\="warning"](https://github.com/TEIC/TEI/issues/1795)
	+ Stylesheets [\#330](https://github.com/TEIC/Stylesheets/issues/330) [Adding schematron to xml:id results in bad id value in RNG](https://github.com/TEIC/Stylesheets/issues/330)


* 
