---
title: "Teleconference 2016-10-27 13:00 UTC"
date: 2016-10-27
---
# Teleconference 2016-10-27 13:00 UTC





Present


* Syd Bauman (SB)
* Sarah Stanley (SS)
* Elli Mylonas (EM)
* Hugh Cayless (HC)
* Magdalena Turska (MT)
* Elisa Beshero\-Bondar (EB)
* Raff Viglianti (RV)
* Martina Scholger (MS)


Apologies


* Lou Burnard (LB)
* James Cummings (JC)
* Peter Stadler (PS)
* Stefan Majewski (SM)




Notes
-----


Begun 14:03Z
Introductions (new member \= SS!)
Notes taken in\-line, below.
LB joined \~14:45Z


Agenda and minutes
------------------


* Finalizing the TEI That Dare Not Speak Its Name (née Simple)
	+ oxygen framework entry
	+ Adding more examples
	+ Stylesheet support





|  | DISLIKE | TOLERABLE | SUPPORTED |
| --- | --- | --- | --- |
| Bookish | JC, MT, LB | HC, EM, SB | EB, KT, RV |
| Go | LB, EB, JC | SB, HC | PS, MT |
| Print | MS, JC | RV, EB, LB, MT | EM, HC |
| Simple | RV, HC, SB, EB | MT | MS, JC, LB |
| Simple\-Print |  | EB | EM JC |



The decision is really between The Customization as on\-ramp, vs. a regular customization.
 (But every customization is potentially an onramp, so LB don’t think this distinction
 is helpful.)
If Simple becomes a way of alluding to the existence of the Processing Model in the
 customization, then we can use the hyphenated form of the name (simple\-print, simple:epidoc!!)
 etc. to identify those customizations. Also, not necessary to refer to the processing
 model in the forward facing doc, so as not to confuse users. (The equation of “uses
 PM” and “Simple” is one I find a little counterintuitive! LB) JC: Yes. I would stop
 talking about the Processing Model with regard to Simple \-\- most people won’t be using
 the PM, just its results. (Just as most people don’t modify the ODD of TEI Lite, just
 use it.)
(Several operating systems barf on colons in filenames, thus my preference for hyphen
 or CamelCase or whatever. — SB)
The customization is an example of our nascent on\-ramp strategy, so the name ought
 to capture both the strategy and the specific customization:
* Go\-Print?
* Simple\-Print?
* EZ\-Print?


JC: Simple\-Print seems easiest to me. Has benefit of partly maintaining current name
 it is known by, and explaining it is only about Print.

* Release 3\.1\.0
	+ [https://github.com/TEIC/TEI/milestone/2](https://github.com/TEIC/TEI/milestone/2 "https://github.com/TEIC/TEI/milestone/2")
	+ Release blockers? Suggest candidates for release blockers asap, for ex. By Thursday
	 Nov 3\. ACTION ON EVERYONE
	+ Tue 06 Dec 2016 (codename Sinterklaas) is our expected release day. JC \& MT are release
	 techs)
	+ When do we create a release branch (Wed 11\-23 by MT)
	+ What is a release blocker: ex: ticket so important that it would push the release
	 date back (e.g., name for Simple)
	+ Release doc: [http://teic.github.io/TCW/tcw22\.html](http://teic.github.io/TCW/tcw22.html "http://teic.github.io/TCW/tcw22.html")([https://github.com/TEIC/TEI/blob/dev/Documents/TCW/tcw22\.xml](https://github.com/TEIC/TEI/blob/dev/Documents/TCW/tcw22.xml "https://github.com/TEIC/TEI/blob/dev/Documents/TCW/tcw22.xml")) Action on EB to observe Release and record revisions for tcw22
	+ Important to have the customization known as SIMPLE in the Oxygen framework for this
	 release; MT to research the state of TEI Simple framework for oXygen and report back
	 to Council via email
* Spring Face to Face meeting
	+ Suggested venue is Prague, around the time of XMLPrague Feb 9–11 [http://www.xmlprague.cz](http://www.xmlprague.cz/ "http://www.xmlprague.cz") , with a day spent working with local TEI\-ers.
	+ HC did hear back from Marjorie Burghart, suggesting we meet before. (After also a
	 possibility.)
	+ Council 5\-7, then day in\-between and doing ‘TEI for developers’ on 9th at the XML
	 Prague conference?
		- Ideas for presentation: types of users and use\-cases, documents in the TEI, ODD, approaches
		 to processing
* Fall Face to Face meeting
	+ Martin Holmes says if we want to meet at UVic, we should nail the dates down early,
	 as room reservations are liable to be tough.
	+ TEI Conference is Nov 12–14; F2F hold afterwards, Nov 15–17
* Other business
	+ Remove support for p4 from oxygen framework (see [https://github.com/TEIC/oxygen\-tei/issues/8\#issuecomment\-255604849](https://github.com/TEIC/oxygen-tei/issues/8#issuecomment-255604849 "https://github.com/TEIC/oxygen-tei/issues/8#issuecomment-255604849"))
	+ Martin’s post from that ticket is about Minimal, not P4\. See [the post itself](https://listserv.brown.edu/?A2=tei-l;8ef50537.1610 "the post itself")
	+ LB: Support for "Simple" would also be nice to have in Oxygen. ACTION on MT to investigate
	 the state of the Simple Oxygen plugin and report back to Council. Might have to do
	 just a simple (ha!) template and wait on fuller support. JC: A simple template already
	 exists.






