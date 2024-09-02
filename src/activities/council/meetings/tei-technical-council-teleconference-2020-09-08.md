---
layout: page.njk
title: "TEI Technical Council Teleconference, 2020-09-08"
---
# TEI Technical Council Teleconference, 2020-09-08
**Meeting time:**


* EST 09:00–10:30, GMT 14:00–15:30, CEST 15:00–16:30
* Started: 13:05Z     Ended: 14:33Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Nicholas Cole (NC)
* Jessica Lu (JL)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Magdalena Turska (MT) only joining late
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux


Debriefing Release
------------------


* HC reports that the Oxygen release was successfully performed. He recalls that he manually tweaked the updateSite.oxygen file. HC expects a write\-up in a week or so.
* Council discusses the need to continue releasing the Guidelines on sourceforge. Statistics about downloads from sourceforge
	+ [https://sourceforge.net/projects/tei/files/Stylesheets/stats/timeline?dates\=2020\-06\-01%20to%202020\-09\-01\&period\=monthly](https://sourceforge.net/projects/tei/files/Stylesheets/stats/timeline?dates=2020-06-01%20to%202020-09-01&period=monthly)
	+ [https://sourceforge.net/projects/tei/files/TEI\-P5\-all/stats/timeline?dates\=2020\-06\-01%20to%202020\-09\-01\&period\=monthly](https://sourceforge.net/projects/tei/files/TEI-P5-all/stats/timeline?dates=2020-06-01%20to%202020-09-01&period=monthly)
* Release minutes 4\.1: [https://docs.google.com/document/d/1PJryKNeKIzUEpdFlaQaJAhO9F3XM23IU66lB3QRQmCU/edit?usp\=sharing](https://docs.google.com/document/d/1PJryKNeKIzUEpdFlaQaJAhO9F3XM23IU66lB3QRQmCU/edit?usp=sharing)
* Action on HC to update the release documentation from the release minutes.


Update tests in Stylesheets repo
--------------------------------


* When you make schema\-changing alteration to the Guidelines, a test is necessary.
* When does the P5 subset need to be updated after schema changes?
* We need to copy the P5 subset from the Guidelines repo to the Stylesheets repo and fix/update the tests. This should not happen too close to the release day.
* We should be creating new tests when we create new elements / attributes. We’ll often forget to do that. And we have two different test repos / two places to make changes: tests vs. test2\.
* PS proposes to automate generation of P5: have a bot issue a PR to Stylesheets that we periodically review?
* Now we can see all the test results at once—this is an option now (DIFFNOW\=1\).
* TCW 22 should indicate that tests need to be updated when we freeze. And periodically. Quarterly? Or part of the monthly triage system?
	+ Copy P5 subset file to Stylesheets and run tests (This can be automated).
	+ How to update the tests / write new ones? May need consultation on Council list.
* **Action on PS** (with HC \& NC) to set up a bot, report back **next month.**


ISO invitation
--------------


* The TEI consortium received an invitation from Detlef Reineke, the current chair of the ISO subcommittee ISO/TC 37/SC 3 "Management of terminology resources". At their last SC 3 meeting they agreed to officially address an invitation to TEI to become a liaison member of our Subcommittee. [https://www.iso.org/committee/48136\.html](https://www.iso.org/committee/48136.html)
* Next meeting is June 2021 in Brussels (attendance not required). ISO doesn’t pay (TEI would pay).
* Probably some knowledge exchange going both ways? Some of TEI (Feature Structure) is based on ISO.
* Plus: If TEI is involved with ISO and there’s a joint release, we at least could make a new standard publicly available.
* Minus: ISO procedures are slow  (and not public). Unknown amounts of work.
* **Action on MS:** Ask Laurent to join us to discuss this with us. What are they doing, what would we be involved with? Maybe arrange a special meeting?


Proposal to encode ruby glosses for Japanese texts
--------------------------------------------------


* Add \<ruby\>, \<rb\>, and \<rt\>
* [https://docs.google.com/document/d/1rRgBRYpxUlsnMEHbOPW\-92u\_AIMNwq9axGtpI1UGgz8/edit\#heading\=h.xjusjhhdlit2](https://docs.google.com/document/d/1rRgBRYpxUlsnMEHbOPW-92u_AIMNwq9axGtpI1UGgz8/edit#heading=h.xjusjhhdlit2)
* We need to transform the proposal in an ODD (SB volunteers) and open a ticket to get started.
* Ask if it’s okay to share the Google Doc publicly from the github issue.
* **Action on MS** to get permission to share the google doc and open an issue.
* Invite proposers to VF2F in October.


Normalization of dates
----------------------


* Revisited by SB, giving a brief report on [\#1885](https://github.com/TEIC/TEI/issues/1885), ISO 8601\-2:2019, and the lack of need for @from\-iso, @to\-iso, @notBefore\-iso, and @notAfter\-iso. (See “sydb\-new\_ISO\_8601” branch.)
* ISO has mechanisms for expressing seasons and approximate date ranges.
* LOC standard (on which ISO is based) lacks processing software but is written in a formal grammar.
* Temporal\-ISO (newest one: 8601\): regex needs to be fixed.
* See [https://news.ycombinator.com/item?id\=23786192](https://news.ycombinator.com/item?id=23786192) regarding possible implementations.
* Our @from\-iso, @to\-iso, @notBefore\-iso, @notAfter\-iso can be expressed in ISO without using separate attributes. Would we want to phase out our attributes on this with a long deprecation period?
* ISO 8601 costs \~$560 USD and the license is utterly restrictive.
* **Action on Council** to check out SB’s branch and comment on it.
* Continue discussion on attributes next time.


[@version](https://docs.google.com/document/d/1xAlmpnLuL8-JPRNLbu6vwLCacxiNcnzCyJhpT27N8Eg/edit): re\-send email
----------------------------------------------------------------------------------------------------------------


* SB suggests to send very brief e\-mail should again on or about Tue 15 Sep. Just something like “Would anyone care if we removed the @version attribute from \<TEI\> and \<teiCorpus\>?”. *Someone* will answer that “I don’t use it myself, but it is important to be able to say the version \#” to which one of us will reply “but you can with \<?xml\-model?\> or with \<schemaRef\>”.


 