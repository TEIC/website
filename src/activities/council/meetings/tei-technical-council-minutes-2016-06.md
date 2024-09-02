---
layout: page.njk
title: "TEI Technical Council Minutes 2016-06"
---
# TEI Technical Council Minutes 2016-06
Teleconference 2016\-06\-30 13:00 UTC


Present


* James Cummings (JC)
* Elli Mylonas (EM)
* Stefan Majewski (SM)
* Hugh Cayless (HC)
* Peter Stadler (PWS)
* Elisa Beshero\-Bondar (EB)
* Syd Bauman (SB)
* Martina Scholger (MS)
* Lou Burnard (LB)


Apologies


* Magdalena Turska (MT)
* Raffaele Viglianti (RV)



### Agenda


 
* TEI Simple state of play
	+ New simpler draft ODD is in repo at [https://github.com/TEIC/TEI/blob/dev/P5/Exemplars/tei\_simple.odd](https://github.com/TEIC/TEI/blob/dev/P5/Exemplars/tei_simple.odd "https://github.com/TEIC/TEI/blob/dev/P5/Exemplars/tei_simple.odd")
	+ Stylesheet fix to include display of proc mod info is still needed
	+ HC: Thanks to LB for all his work on this; LB more work to do, but better. Told Martin Mueller end of month, but end of July probably more likely. Would like to finish draft then hand off to someone else (Paul Schaffner?)
	+ Should validate most of the EEBO texts, even though this isn’t the official target..
	+ **Action on Council**: Please read LB's messages to Council List and comment.
	+ LB raises 1 more issue: \<particDesc\> — Some encodings have used it to record characters in a play. In Simple ODD there is 1 example that shows a take on this w/o \<particDesc\> **Action on JC**: ASAP: come up with a list of candidate elements for descendants of \<person\>, \<place\>, and \<org\> that don't use persName or placeName, etc.
* @defaultVal issues from SB:
	+ 1\. Any default attribute value of "unknown" (or similar) should be removed through deprecation. See [https://github.com/TEIC/TEI/issues/1456](https://github.com/TEIC/TEI/issues/1456 "https://github.com/TEIC/TEI/issues/1456")
		- LB: Don’t forget to alter the prose of the Guidelines when deprecating ex. Use of @render on \<rendition\> still used in examples in the Guidelines prose. [https://github.com/TEIC/TEI/issues/1475](https://github.com/TEIC/TEI/issues/1475 "https://github.com/TEIC/TEI/issues/1475") Action on EB to work on amendments of Guidelines re @rend.
	+ 2\. Thus, \<defaultVal\> should be a member of att.deprecatable. See [https://github.com/TEIC/TEI/issues/1467](https://github.com/TEIC/TEI/issues/1467 "https://github.com/TEIC/TEI/issues/1467")
	+ 3\. In which case the stylesheets need to DTRT with defaultVal/@validUntil. See [https://github.com/TEIC/Stylesheets/issues/158](https://github.com/TEIC/Stylesheets/issues/158 "https://github.com/TEIC/Stylesheets/issues/158")
	+ 4\. While we're at it, the default value of att.msExcerpt's @defective ("false") and of att.personal's @full ("yes") should also be deprecated and removed. See [https://github.com/TEIC/TEI/issues/1457](https://github.com/TEIC/TEI/issues/1457 "https://github.com/TEIC/TEI/issues/1457")
	+ Personally, I think the first three are completely uncontroversial, and we just need a pro\-forma "OK" from Council. As for the fourth one, I agree that they should be deprecated and removed.\[1] However, I don't think these are completely uncontroversial, they probably require discussion.
	+ \[1] BTW, I think the first is so brain\-dead obvious, we need only keep it in deprecated state for, say, 9 months. No need to go the full two years for something that obvious. The fourth one I would deprecate for the usual 2 years.
	+ Council OKs 1st three; as for 4th, **action on EM** : Ask on TEI\-L and MS\-SIG about whether people rely on the default value or not
	+ C raises issue of term of deprecation. **Action on all**: discuss this issue on list.
* Stylesheets online meeting schedule
* Stylesheets meetup at DH2016 in Krakow?
	+ Who will be there: JC, MT, HC, EB ...EM, MS (added later: RV)
	+ Who will not be there, interested in joining anyway: SB; LB (depending on date)
	+ EB arrives July 7 and will hunt for campus niches with network connections so people can Skype in.
* July telecon schedule
	+ Hugh will be unavailable on the 28th due to a conflicting meeting. Reschedule? Cancel? Carry on without him? **Action on HC**: Put up Doodle poll
* Translatathon @ Vienna, MS, SM, PS
	+ Brief report on current activities
	+ SM: Tuesday before conference; all day; room reserved; target German only.
	+ Council suggested to offer lunch.


* EM and SB: free\-standing attribute list
	+ HC has put a copy [here](https://docs.google.com/document/d/1Punte188LwdqBko8m8-f9LzevP7EKoqhddUBlnXVSiA/edit?usp=sharing "here") so comments can be collected
* SB: needed in oXygen:
	+ ISO Schematron generation
	+ odd4odds (i.e., needs to be in Exemplars/)
* F2f @Vienna:
	+ SM reserved rooms Sun–Wed
* Other business?
	+ Conference in memory of SPQR. (Sadly 27 September 2016\)
	+ East Asian SIG
		- [http://www.tei\-c.org/Activities/SIG/EastAsian/](https://www.tei-c.org/Activities/SIG/EastAsian/ "http://www.tei-c.org/Activities/SIG/EastAsian/"). The conveners felt it important at this stage to retain the "Japanese" part of the name in order to engage Japanese textual scholars, HC indicated the Council's preference for a more inclusive naming, but deferred to their expert opinion.


