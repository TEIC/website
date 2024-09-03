---
title: "TEI Technical Council Teleconference, 2018-07-09"
date: 2018-07-09
---
# TEI Technical Council Teleconference, 2018-07-09
**Meeting time:**


* 08:00 EDT, 13:00 BST, 14:00 CEST


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Alex Bia (AB)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Sarah Stanley (SS)
* Raff Viglianti (RV)


**Apologies:**
* Peter Stadler
* Magdalena Turska


F2F in Tokyo
------------


* Dates:
	+ September 7\-8: F2F
	+ September 10: Open Council meeting
		- Announcement — when?
* If we would like Martin Holmes to join us, when?
	+ When he’s available. Presumption is Friday \& Saturday mornings, but SB to ask — we can build agenda items involving him around his availability.


Timeline next release
---------------------


* Freeze: Wed July 18
* Create release branch: Thu July 19
* Actual release: Mon July 23 \& Tue July 24
* Release technicians: RV \& PS
* **Release Blocker**: <https://github.com/TEIC/TEI/issues/1783> !
	+ Fix the original home page to make it valid XHTML5\.
	+ Add more sets to the pre\-processing till all the invalidities have been fixed.
	+ Use HTML Tidy to clean up the page before passing it to xmllint.
	+ OR is it really a problem, if we don’t use the scraped info anymore?
	+ **Action on** JC and HC: attempt to fix (or develop a work\-around) by freeze (Jul 18\); if not, RV \& PS will find a manual hack\-around for the release itself.


Report on translation\-meet\-up at DH Mexico
--------------------------------------------


* MS: Susanna Allés, Gimena del Rio Riande, Luis Meneses, Kiyonori Nagasaki, various Council members (e.g. MS, JC, EM) were present.
* General strategy is necessary:
	+ need for Guidelines or Working Paper for how to organize: “Method (or ‘Procedure’) for Submitting Translations”
	+ **Action on** MS — start with paper
	+ Ticket about submission of individual translations by users, with suggestions for a submission \& review process: <https://github.com/TEIC/TEI/issues/1780>
	+ Kiyonori Nagasaki started with Japanese translations


Status report on RomaJS
-----------------------


* RV: working on distinguishing between editing elements and editing classes.
* On creating a new attribute: what behaviors?
	+ Suggest a new namespace?
	+ Invite to clone an existing attribute to customize (by actually cloning it, not with an hypothetical @mode\='clone' — see <https://github.com/TEIC/TEI/issues/1697>)
	+ Dropping editing/creating new datatypes for September.
	+ RV will set up (soon) an August RomaJS meeting.


Report on Standoff task force meeting
-------------------------------------


* not yet


SIG on Libraries
----------------


* EM and SB met with Kevin Hawkins: SIG is going dormant.
* Proclaim this SIG “dormant” on the website
	+ under: “Currently Active SIGs”
	+ Conveners: \[new appointments to be determined]
* Shop TEI SIG to the ADHO Libraries SIG? **Action on EM** to do so by 07\-13, report back by next conference call.
* Any news about the \<sourceDesc\> proposal [https://listserv.brown.edu/archives/cgi\-bin/wa?A2\=TEI\-L;93f8cf13\.1805](https://listserv.brown.edu/archives/cgi-bin/wa?A2=TEI-L;93f8cf13.1805).


Tickets
-------


* **Release Blocker:** <https://github.com/TEIC/TEI/issues/1783> !
* Tickets that should go into release 3\.4\.0 / need (just a little) discussion
	+ \[JC] copied from last minutes: JC notes that if we could finish ticket number \#1707 <https://github.com/TEIC/TEI/issues/1707> on encoding measurements before next release that would be good. Especially since meeting will be in Japan, but also because it arose from a poster at previous conference.
		- EM will do today: Do we need a call?
	+ \[JC] We should also do <https://github.com/TEIC/TEI/issues/1679> (for new @toWhom attribute; Assignee SS). I talked with the submitter of this at the DH2018 conference. He had previously thought that TEI Guidelines were sacrosanct rules submitted down from on high that were unchangeable, and was overjoyed that we had agreed to an attribute he has suggested. In talking about why he hadn’t realised the TEI was a community\-developed standard he agreed to write a blog post about his experience. We decided it would be better to wait until it was implemented and in a release so he can show the idea — ticket — agreement — implementation cycle as a post that the TEI can then point to. SS and SB to implement quickly.
	+ Pull requests: <https://github.com/TEIC/TEI/pulls> (esp.
		- \<path\> proposal from Martin Holmes:
			* <https://github.com/TEIC/TEI/pull/1764>
			* **Action on SB \& RV** to have a look by 07\-15
		- add \<figure\> to att.written
			* <https://github.com/TEIC/TEI/pull/1777>
	+ [Ticket 1782:](https://github.com/TEIC/TEI/issues/1782) Do we want to actually research when the \<desc\>s and \<gloss\>es of various languages were added to \<moduleDef\>s, or just presume the English has not been changed?
		- Decision: force these elements to come up for review. Set them all one day behind the English to force re\-evaluation during translatathons?
	+ Any Stylesheet tickets?


Next Council meeting: Thursday July 26
Ticket triage
-------------




| **July 2018** | **EB** |
| --- | --- |
| **August 2018** | **JC** |
| **September 2018** | **EM** |
| **October 2018** | **MT** |
| **November 2018** | **SS** |
| **December 2018** | **AB** |


 