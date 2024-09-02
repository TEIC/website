---
layout: page.njk
title: "Teleconference 2017-05-25 13:00 UTC"
---
# Teleconference 2017-05-25 13:00 UTC





**Present:**
* Hugh Cayless (HC)
* Elisa Beshero\-Bondar (EB)
* Sarah Stanley (SS)
* James Cummings (JC)
* Magdalena Turska (MT)
* Elli Mylonas (EM)
* Syd Bauman (SB)
* Alex Bia (AB)


**Apologies:**
* Raffaele Viglianti (RV)
* Peter Stadler (PS)
* Martina Scholger (MS)



### Agenda / Notes


Meeting started @ \~13:03Z.
* Ticket Triage
	+ Is the following ok?





| Jun | Jul | Aug | Sep | Oct | Nov |
| --- | --- | --- | --- | --- | --- |
| RV | SB | SS | JC | PS | MS |




* Ticket Review
	+ [New "unit" element](https://github.com/TEIC/TEI/issues/1461 "New \"unit\" element")
		- After initial skepticism, there seems to be support for this. The main issue is whether
		 to adopt Laurent's suggestion of @norm (and the other [att.lexicographic](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.lexicographic.html "att.lexicographic")attributes?), or some flavor of @unit, or something new. Lou suggested @si, but LR
		 argues they will want non\-SI units too. Is this just the common problem of needing
		 to refer to some taxonomy? Or is it more subtle than that?
		- Council says yes to \<unit\>, and thinks we should import @unit from att.measurement
		 (but not all the other attributes). EM will be responsible.
	+ [Unassigned Tickets](https://github.com/TEIC/TEI/issues?utf8=%E2%9C%93&q=is%3Aopen%20is%3Aissue%20no%3Aassignee%20-label%3A%22Status%3A%20Blocked%22%20-label%3A%22Status%3A%20Reconsider%20For%20P6%22%20 "Unassigned Tickets")
		- HC: I've been through and assigned most of these. The remaining ones are things I
		 find mysterious or which can maybe just be closed with 5 minutes review by the group.
* Nail down release date / timeline. SS and SB are the release technicians. Add issues
 to [https://github.com/TEIC/TEI/milestone/3](https://github.com/TEIC/TEI/milestone/3 "https://github.com/TEIC/TEI/milestone/3")
	+ JC has added a bunch of his assigned issues to this milestone to encourage him to
	 do as many as possible before then. He’ll remove those he doesn’t get to just before
	 we ‘freeze’ changes. ;\-)
	+ SB \& SS have agreed on:
		- Refrigeration starts: Mon 06\-26
		- Freeze starts: Mon 07\-03
		- Release day: Mon 07\-10
	+ Reminder: refrigeration\= prose open for modification, only urgent changes to schemas;
	 freeze\= only urgent changes to prose, no changes to schemas except release blockers
* [SIG proposal “Graph](https://www.tei-c.org/Activities/Council/Meetings/heading=h.2b46lynisgd "SIG proposal “Graph")Technologies \[Note: I'd find it very interesting to have a SIG on "Graph Technologies". But in
 my opinion, the goals of the SIG should be expanded, e.g.(\+) as far as I understand,
 the proposal is to model TEI 1:1 in graphs. Another approach is to extract statements
 from TEI, model these statements in RDF \-\> LOD. I would be happy to see that represented
 through the SIG as well (\+) and I agree with James that the SIG should take the existing
 graphs/networks/tree module into account, take position on it, probably work on improving
 it, etc.] \[Note: I agree with Martina. ;\-)][”](https://www.tei-c.org/Activities/Council/Meetings/heading=h.2b46lynisgd "”")
	+ HC has emailed Andreas that Council approves the SIG, with some caveats and recommendations.
	 Have not heard back yet. Council members should feel free to comment on the linked
	 document.
* Lou would appreciate any further feedback on his evolving document about TEI Conformance
 ([http://lb42\.github.io/W/conformance.html](http://lb42.github.io/W/conformance.html "http://lb42.github.io/W/conformance.html"))
* MT asks about [https://www.archives.gov/nhprc/announcement/publishingcoops](https://www.archives.gov/nhprc/announcement/publishingcoops "https://www.archives.gov/nhprc/announcement/publishingcoops")
	+ HC is involved in this, so if you have questions, ask!
	+ MT thinks that TEI and TEI PM is worth championing if anyone’s involved in these cooperatives
	 and MT personally and eXist would be interested in partnering where suitable, not
	 just for the future implementations but in the initial planning stages
* **Jenkins\-oxford.tei\-c.org**: This is down owing to a security upgrade, since it will disappear in August, JC
 says he isn’t going to put it back up. (We are all using jenkins.tei\-c.org which is
 jenkins\-victoria.tei\-c.org.) He will be archiving stuff on tei.it.ox.ac.uk somewhere
 before he disappears from Oxford in August.
* Meeting ended @ \~14:18Z.







