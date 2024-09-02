---
layout: page.njk
title: "TEI Technical Council Teleconference, 2020-06-09"
---
# TEI Technical Council Teleconference, 2020-06-09
**Meeting time:**


* EST 09:00–10:30, GMT 14:00–15:30, CEST 15:00–16:30
* Started: 13:06Z; ended: 14:35Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Hugh Cayless (HC)
* Nicholas Cole (NC, until \~14:21Z)
* Jessica Lu (JL)
* Martina Scholger (MS, chair)
* Peter Stadler (PS)
* Raff Viglianti (RV, until 14:26Z)


**Apologies/Not Present:**
* Vanessa Bigot\-Juloux (VBJ)
* Meaghan Brown (MB)
* Magdalena Turska (MT)


 
Planning next release
---------------------


* Release technicians: HC (lead technician), JL (support technician), NC (note taker)
* When: week of 9–15 Aug 20; Target: Tue 11 \& Wed 12 Aug
* Finalize the content model of \<standOff\>: <https://github.com/TEIC/TEI/issues/1977>
	+ SB: We really want to tackle the Web Annotation Data Model for the next release.
	+ HC presents shared document that describes the use\-cases we envision and what we need to support WADM.
	+ HC, SB: we want to have a mapping on parts of the WADM that make sense.
	+ NC: what are the open questions that those examples raise?
	+ HC says his motivation was to convince himself that we can use WADM without inventing new elements. It works with existing TEI elements (except \<assert\> in \#7\).
	+ SB points out that the WADM has other features we need to consider, e.g. allowing multiple targets or bodies (or both), or allowing selection by CSS or XPath (or anything else)?
	+ RV affirms that there can be multiple bodies and targets in WADM: [https://www.w3\.org/TR/annotation\-model/\#cardinality\-of\-bodies\-and\-targets](https://www.w3.org/TR/annotation-model/#cardinality-of-bodies-and-targets). “It is also possible for an Annotation to have multiple Bodies and/or Targets. In this case, each Body is considered to be equally related to each Target individually, rather than to the set of all of the Targets.”
	+ EB suggests we add examples that discuss whitespace issue.
	+ Council agrees: define the content model of \<annotation\> and add the necessary attributes for the next release. There has to be a section on \<annotation\> in the Guidelines too. RV \& NC volunteer to help with writing documentation.
* Several issues with “Status:Go” [https://github.com/TEIC/TEI/issues?q\=is%3Aissue\+is%3Aopen\+label%3A%22Status%3A\+Go%22\+\-label%3A%22Status%3A\+Needs\+Discussion%22\+](https://github.com/TEIC/TEI/issues?q=is%3Aissue+is%3Aopen+label%3A%22Status%3A+Go%22+-label%3A%22Status%3A+Needs+Discussion%22+) that might go into the release. Should we add those to the [Milestone 4\.1\.0](https://github.com/TEIC/TEI/milestones/Guidelines%204.1.0)?
	+ **Action on MS** to add milestone to “Status: Go” issues
* Aim to finish tickets at the end of July.
* **Action on MS** to send email to TEI\-L on next release schedule **by 2020\-06\-25**.


Next (virtual) F2F meeting
--------------------------


* Sat 24–Mon 26 Oct


Report from labeling session
----------------------------


* the two groups have made good progress; more sessions are needed.


@version issue
--------------


* <https://github.com/TEIC/TEI/issues/1993>
* **Action on MS:** write to the TEI list about @version **by 2020\-06\-25\.** Ask if and how the attribute is used; if it would affect projects if we removed it; if \<schemaRef\> and its attributes would be sufficient.


Reminder: “elections — terms — rotation”
----------------------------------------


* James Cummings (summary in Board discussion): To move to a 4, 4, 3 structure of 3 year terms, I believe that in the elections this year we should have 4 Council members elected for 3 years, and 1 Council member for 2 years.
* Next year we elect 4 Council members for 3 years, and 2 Council members for just 1 year. The year after that we elect 3 Council members and are in a solid 4,4,3 repeating pattern.


Ticket discussion \#1916
------------------------


* [\#1916: Corpus Exemplar should more explicitly state what it's for](https://github.com/TEIC/TEI/issues/1916): This ticket  was discussed by subgroup C (HC, MB, EB) at the VF2F. Their comments were “Subgroup agrees with Martin Holmes, we should recommend oXygen proceed with changing the template file names on disk. (Open a ticket on oXygen or contact Radu Coravu?)”.
* Council notes there has been significant discussion on the ticket since then.
* There has also been discussion on TEI\-L recently.
* Address confusion over use of the Corpus customization for non\-linguists. Generally we need to rethink the exemplars (i.e., the ODD files, etc., in P5/Exemplars/).
* PS suggests we keep the teiCorpus exemplar, but suppress it from being delivered to oXygen.
* SB asserts it is a useless exemplar, as it does nothing but supply a set of \<moduleRef\>s.
* MS notes a similar issue on dictionaries.
* SB notes that we have several such exemplars \[that he called “template exemplars” in his jTEI paper].
* **Action on SB**: provide a summary categorization of the Exemplar/ ODDs on the ticket **by 2020\-06\-30**. They could be eliminated or reduced to a single example. If reduced to a single example, then corpora may be a good test case, as it requires @start of \<schemaSpec\> (to allow \<TEI\> or \<teiCorpus\> as the root).
* Piotr Banski has volunteered to create a new, more realistic exemplar for encoding linguistic corpora (but could take a while.) SB: The customizations on dictionaries, drama, math, speech don't seem necessary now (or then). **Action on SB** to ask Piotr to provide ODD for corpus **by 2020\-06\-20**.


Reminder
--------


* SB, PS, and JL to discuss issue <https://github.com/TEIC/TEI/issues/1955>.
* MS to contact Gerrit Brüning regarding MS SIG about not declaring it dormant **by 2020\-06\-15**.


 