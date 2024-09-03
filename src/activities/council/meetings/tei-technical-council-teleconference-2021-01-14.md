---
title: "TEI Technical Council Teleconference, 2021-01-14"
date: 2021-01-14
---
# TEI Technical Council Teleconference, 2021-01-14
**Meeting times:** 


* 6:00–7:30 PST, EST 09:00–10:30, GMT 14:00–15:30, CET 15:00–16:30
* Started:    19:04Z    Ended:    \~20:45Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HS)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Nicholas Cole (NC, invited guest)
* Janelle Jenstad (JJ, \~19:26Z)
* Martina Scholger (MS)
* Peter Stadler (PS, \~19:06Z)
* Magdalena Turska (MT, \~19:13Z)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Jessica Lu (JL)


 
**Note:** ticket triage table is near the end of this document.


Welcome
-------


Mentors for new Council members
-------------------------------


* EB is JJ’s mentor (with SB as backup and Martin Holmes nearby)
* MT is HS’s mentor


Ticket Triage/Minute review
---------------------------


* MS: There is a new ticket triage/minute review table, please add your initials.


New meeting times
-----------------


* Monthly Council call: Second Thursday of each month at
	+ 11:00–12:30 PST
	+ 14:00–15:30 EST
	+ 20:00–21:30 CET
* Monthly Stylesheets call: Fourth Thursday of each month, at the same time as the Council meeting.
* Short virtual F2F meeting: Fri 29 \& Sat 30 January
	+ Invite Martin Holmes, Kiyonori Nagasaki, Satoru Nakamura, and Kazuhiro Okada to main meeting, Sat 30 Jan at 11pm JST.


Next release
------------


* Release timeline
	+ Refridge: Fri 2021\-02\-12
	+ Freeze: Fri 2021\-02\-19
	+ Release: Thu 2021\-02\-25
* Release techs: NC (lead), PS (assist), MB (note taker)
* Goals for the next release
	+ Ruby: **action** on **MS** to write to Kiyonori Nagasaki  and ask if we can get this done in 1 month by **2021\-01\-16\.**
	+ Open issues: [https://github.com/TEIC/TEI/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Guidelines\+4\.2\.0%22](https://github.com/TEIC/TEI/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Guidelines+4.2.0%22)
	+ New element for grouping notes \- \<noteGrp\>: <https://github.com/TEIC/TEI/pull/1920> (MT to rebase before retesting and merging)
	+ Deprecation of locations of \<schemaSpec\>: <https://github.com/TEIC/TEI/pull/2032>
	+ Remove \<altIdent\> from some unsuitable places: <https://github.com/TEIC/TEI/pull/2041>
	+ **Action on EB, MS, and PS** to review feature request on declarative citation structure <https://github.com/TEIC/TEI/issues/1957>; pull request:<https://github.com/TEIC/TEI/pull/1983>
	+ **Action on EB:** check if this is resolved or if it does need an example. Ask reviewers to verify (@where in att.locatable) <https://github.com/TEIC/TEI/pull/1958>


Report on CMC meeting
---------------------


* Needs to be rescheduled.


Notification on pull requests
-----------------------------


* See <https://github.com/settings/notifications> for notification settings.


Pull requests pending
---------------------


* SB created a TEI Council pull requests summary: [https://bauman.zapto.org/\~syd/temp/4TEICouncil/GHPRs.html](https://bauman.zapto.org/~syd/temp/4TEICouncil/GHPRs.html)


Open pull requests
------------------


* <https://github.com/TEIC/TEI/pull/2069>
* Connected to Stylesheets issue \#237
	+ Suggestions: test if the example on the ticket works in a proper ODD. On \<schemaSpec\> add hal:n as @prefix  and also try using it as the @ident on \<attDef\>.


AOB
---

