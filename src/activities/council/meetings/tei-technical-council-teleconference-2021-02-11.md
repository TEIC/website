---
layout: page.njk
title: "TEI Technical Council Teleconference, 2021-02-11"
---
# TEI Technical Council Teleconference, 2021-02-11
**Meeting times:** 


* 11am\-12:30pm PST/2pm\-3:30pm EST/7pm\-8:30pm GMT/8pm\-9:30pm CET
* Started:    19:05Z    Ended:    \~20:25Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB \~19:50Z)
* Hugh Cayless (HC)
* Nicholas Cole (NC \~19:30Z)
* Janelle Jenstad (JJ; assistant notetaker this month)
* Jessica Lu (JL)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Magdalena Turska (MT)


**Apologies/Not Present:**
* Raff Viglianti


**Note:** ticket triage table is near the end of this document.
Meetings
--------


* Stylesheets call in February
	+ postponed to March 4
* Short virtual F2F meeting
	+ April 9/10 (no JL) or April 16/17 (no EBB)
	+ May 7/8 works for everyone on the call. We need to ask RV
		- May 7/8


Next release
------------


* Release timeline
	+ Refridge: Fri 2021\-02\-12
		- For new folks (JJ and HBS): It's supposed to mean that we stop working on issues and turn to typos and reviewing. No more changes to the schema. Ticket owners: Relabel tickets that we can't deal with for this release and label them for the next milestone.
	+ Freeze: Fri 2021\-02\-19
		- Means that we definitely should not change anything except typos, but it's harder because the freeze techs make a new branch.
	+ Release: Thu 2021\-02\-25
* Release techs: NC (lead), PS (assist), MB (note taker)
* Open Guidelines issues with milestone 4\.2\.0: [https://github.com/TEIC/TEI/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Guidelines\+4\.2\.0%22](https://github.com/TEIC/TEI/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Guidelines+4.2.0%22)
* Open Stylesheets issues with milestone 7\.51\.0: [https://github.com/TEIC/Stylesheets/issues?q\=milestone%3A%22Release\+7\.51\.0%22](https://github.com/TEIC/Stylesheets/issues?q=milestone%3A%22Release+7.51.0%22)


Review before next release
--------------------------


* teiCorpus: make guidelines and data model consistent
	+ <https://github.com/TEIC/TEI/issues/1823>
	+ We need to solve this by 4\.3\.0, but it is too big a topic to discuss here and now.
* deprecation of locations of schemaSpecs
	+ <https://github.com/TEIC/TEI/pull/2041>
* Review: FR: Declarative Citation Structure
	+ <https://github.com/TEIC/TEI/issues/1957>
	+ <https://github.com/TEIC/TEI/pull/1983>
* Proposal: new element \<persPronouns\>
	+ <https://github.com/TEIC/TEI/issues/2010>
	+ <https://github.com/TEIC/TEI/pull/2104>
* problems with match\= (part of att.scoping)
	+ <https://github.com/TEIC/TEI/issues/2078>
* Warn if an attDef with a non\-colonized @ident has a @ns attribute
	+ <https://github.com/TEIC/TEI/pull/2069>
	+ SB says we probably don't want to pull this in because maybe we need to handle this in Stylesheets. Connected to Stylesheets [\#237](https://github.com/TEIC/Stylesheets/issues/237) or it seems another Stylesheets conversation. NOT for this release–needs discussion. **Action on HC** to add comment to PR.
* encoding of ruby glosses
	+ <https://github.com/TEIC/TEI/issues/2054>
	+ status: CLOSED
* type\= on interpLike elements
	+ <https://github.com/TEIC/TEI/pull/2053>
	+ **Action on PS and MS** to review
* add new class "att.predicate"
	+ <https://github.com/TEIC/TEI/pull/2105>
	+ **Action on SB** to review


GitHub guidelines
-----------------


* Discussion of GitHub merge protocols. Who should merge? Do we need guidelines on how to do the ticket review and merge? Perhaps, but not rules. PS likes contributing guidelines in a repo. New folks like JJ would appreciate them.


AOB
---


* SB reports on regular meetings with CMC group and the plan to get issue into the next release.
* NC will open a discussion on "diplomatic" – meaning, origins – or not?
	+ Shillingsburg, Peter L. 1986\. *Scholarly Editing in the Computer Age: Theory and Practice*. The University of Georgia Press. p. 170\.
* PS notes new feature of GitHub called "Discussions"
	+ Maybe inaugurate it as a new space of conversation at the TEI Conference
	+ Not quite opening new tickets, and also not quite going to the email list.
	+ Beginner friendly!
