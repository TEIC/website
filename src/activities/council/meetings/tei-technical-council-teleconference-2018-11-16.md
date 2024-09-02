---
layout: page.njk
title: "TEI Technical Council Teleconference, 2018-11-16"
---
# TEI Technical Council Teleconference, 2018-11-16
**Meeting time:** 


* 16:00–17:30 EST, 21:00–22:30 GMT, 22:00–23:30 CET
* Started @ 21:03Z.


**Present:**
* Syd Bauman (SB)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Elisa Beshero\-Bondar (EB)
* Alex Bia (AB)
* Vanessa Bigot Juloux (VBJ)
* James Cummings (JC)


Info: Spring F2F
----------------


* 6–8 May at the Folger Library, Washington DC.
* Meaghan Brown booked a room.
* Eastern Market is close to the venue, Chinatown has lots of hotel options but it’s a bus or metro ride away.


Report \<standoff\> proposal
----------------------------


* SB, HC, \& MT are working on a counter\-proposal, and have questions for Laurent Romary.
* SB: HC \& MT — was I supposed to ask Laurent before bringing this to Council or after?
* Anyway, see [SB’s fork of Laurent’s repo](https://github.com/sydb/stdfSpec/tree/linkDataBlock), the “linkDataBlock” branch.
* Main changes (so far):
	+ Change in default text structure. See summary which is both in the ODD file (and thus can be read in the [HTML](https://github.com/sydb/stdfSpec/blob/linkDataBlock/Specification/standoff-proposal.html) output thereof), and better (because GitHub won’t show you that file directly) in the README on the [specifications](https://github.com/sydb/stdfSpec/tree/linkDataBlock/Specification) page — scroll down to the first sub\-heading, “Default Text Structure”.
	+ Change in scope. We had originally thought this proposal and the \<ldb\> proposal would be entirely different things. But on looking at the proposed content model for \<standOff\>, it is almost exactly what we would want for \<ldb\>. Thus I (SB) have combined them. (I’m calling the element \<ldb\>, but we can discuss this later.)
	+ Annotations (which, as per Laurent’s proposal, are always wrapped inside \<listAnnotation\>) may be encoded either with \<annotationBlock\>s or \<note\>s.
	+ We think these changes are sufficient to address the needs which triggered Laurent’s proposal, thus that we can defer contemplation of a more profound model for annotations in general.
	+ As a first step towards broader annotation model we’d need use cases to determine what the content model for annotation should exactly be. However, we agree that whatever it is, it should be influenced by the [Open Annotation model](http://www.openannotation.org/) (i.e., should be easy to map from our model to OA).
		- Suggestion that it is not necessary to do this yet, better to wait until someone is coming up with a proposal..
	+ Laurent will be asked for more use cases that conform to the new model. Specific questions for Laurent. (SB to send with CC to HC, MT, \& PS.)
	+ The implications of this include deprecating \<teiCorpus\>. We'll consider a longer deprecation period than usual.


TEI Workshop (ANE)
------------------


* VBJ: TEI workshop for ancient Near Eastern (ANE) scholars during the international conference of Assyriologists in July (Paris) — [https://iaassyriology.com/past\-rencontres/](https://iaassyriology.com/past-rencontres/)


Future thinking
---------------


* SB \& MH are still planning to have the Stylesheets/Test2/ directory in good enough shape by 01 Jan for SB to do rub\-a\-dub on Stylesheets/odds/odd2odd.xsl during Jan 2019\.


AOB
---


* Note from AB that he is unable to continue on Council. MS will contact VBJ about assuming duties now and not in January. Also contact Luis Meneses to manage mailing list memberships etc.


Tickets from Tokyo
------------------


* <https://github.com/TEIC/TEI/issues/1805>: Suggestion for new uniHan element
	+ Action MS: schedule call with Duncan Paterson, Martin Holmes, RV, SB, HC, MS.
* <https://github.com/TEIC/TEI/issues/1756>: event should have ptr and idno in its content model
	+ JC will update this issue before next meeting. JC will update Council by email soon.
	+ VBJ: want to check with my TEI preliminary hermeneutics of action since I shall be able to add further examples since I’m studying action (person/action/event/place).


Other tickets
-------------


* <https://github.com/TEIC/TEI/issues/1769> \- teidata.pointer equivalent to move/@where
* Council recommends to do a customization.


Ticket triage
-------------




| **November 2018** | **SS** |
| --- | --- |
| **December 2018** | **SB** |
| **January 2019** | **MS** |
| **February 2019** | **JC** |
| **March 2019** | **SB** |
| **April 2019** | **RV** |
| **May 2019** | **SS** |
| **June 2019** | **SB** |
| **July 2019** | **EB** |
| **August 2019** | **HC** |
| **September 2019** | **EM** |
| **October 2019** | **MT** |


 