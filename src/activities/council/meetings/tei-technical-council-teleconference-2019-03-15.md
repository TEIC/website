---
layout: page.njk
title: "TEI Technical Council Teleconference 2019-03-15"
---
# TEI Technical Council Teleconference 2019-03-15
**Present**


* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Peter Stadler (PS)
* Sarah Stanley (SS)
* Raff Viglianti (RV — departed 22:00Z)


**Apologies/Not Present**
* Vanessa Bigot Juloux (VBJ)
* Magdalena Turska (MT)


Started: 20:39Z; ended: 22:12Z
F2F Washington
--------------


* Discuss rough outline of agenda
	+ RV summarizes current plans for the meeting and interaction with the Folger Library. Brown bag lunch on Monday, library Tour on Tuesday. If there are particular materials people wish to see, then let RV know.
	+ RV summarises the options for a public event:
		- a) reception at Folger at a cost
			* expensive room rental only 6pm to 8pm on Monday May 6 (only availability)
			* catering extra and we have to use the one Folger has already contracted for this period
		- b) restaurant in DC which could be hard to organize until we know number of guests; would TEI pay, or deal with splitting bills?
		- c) no public event, reach out directly to a few local friends to join us at dinners or something
		- **Consensus seemed to be for (c).**


TEI Conference in Graz
----------------------


* September Mon 16 – Fri 20; workshops on Mon 16 and Tue 17
* Schedule Council meeting (3 days)
	+ Fri\-Sat\-Sun (13–15\)
	+ Sat\-Sun\-Mon (14–16\)
	+ Fri\-Sat\-Mon (13,14,16\)
* Pre\-conference TEI summer school (Sep 9–12\). Council member(s) available on Thursday? If you think you might be available and want to present add your name here:
	+ JC
	+ SB
* In choosing days for Council Meeting it is noted that some Council members might want to do workshops, and **if possible these should be scheduled on the Tuesday**. PS notes that it would be good for the TEI Infrastructure Group to meet.
	+ Potentially include infrastructure group meeting on Monday(?) as a breakout group style meeting. Select infrastructure folks meet with Luis and Martin while the rest of Council works on other topics. Report\-backs by infrastructure group during Council meeting
* **Consensus for the Council Meeting seems to be Sat\-Sun\-Mon (14–16\)**
* **Action on MS**: write to MT about scheduling workshops and when Council meeting is; **due 2019\-03\-22**.
* Discussion of Open Council Meeting: do we want to reprise for Graz?
	+ Consensus that we *do not* want to be on display (i.e. no audience)
	+ Possible informal session where we invite specific folks (active community members? people running?)
* Potential future topic of discussion: Council members presenting on thorny tickets? (i.e. paper\-like format where they are actively seeking input). Submit these as papers to the conference, or make arrangements with program committee?


Stylesheets meeting — change time?
----------------------------------


* + Do we want to change time for the Stylesheets meeting this coming Mon, 18 March?
	+ To check times: [https://www.timeanddate.com/worldclock/meetingtime.html?iso\=20190318\&p1\=198\&p2\=1327\&p3\=318\&p4\=734](https://www.timeanddate.com/worldclock/meetingtime.html?iso=20190318&p1=198&p2=1327&p3=318&p4=734)
	+ **Action on SB**: check with Martin Holmes, pending his approval we will switch to 09:00 ET, 14:00 CET, **due 2019\-03\-16**.


RomaJS
------


* Help with [Current Roma Features document](https://docs.google.com/document/d/11X2pBQ7zTvy-xXWYlJfWB1O9STEY-vau3Bd1nydkgVY/edit)
	+ **Action on MS**: look at the document, due Mon 2019\-03\-18\.
* RV will focus on RomaJS almost exclusively next week
* After that: another testing phase by the Council and (perhaps) others
* JC will be having students test it in the wild (option of that or old Roma) on 5 April.


Infrastructure group
--------------------


* MS reports on meeting of the Infrastructure Group.
* Status ADHO server:
	+ control over DNS is still an issue
	+ TEI to move to its own space, but need to establish access to ADHO server first
	+ TEI homepage identifies backup locations
	+ Steps to take to affirm the infrastructure is holding:
		- reporting regularly to the community (Kathryn issues a message with specifics at least once per week?)
		- Council members/infrastructure committee could prepare templates with detailed information (seems to be missing from overly general memos)
		- Advise on more sustainable decision making, e.g. vendor agreement
* Next meeting to be organized soon and Council gives them permission to flog more deceased equines.


News on build (PS)
------------------


* Stylesheets can now take an arbitrary remote source
* Update to https for several resources


Update on Japanese translations
-------------------------------


* Update from Martin Holmes (MH): Last year he made a spreadsheet, worked with Kiyonori Nagasaki. MH has begun implementing and checking the translations. This is very time consuming. It would be helpful to implement the Japanese translations before our next release in July. Can't incorporate the translations easily/automatically: problems with things like alignment of paragraph and content.
* Can anyone help? Or implement first and check later?
* It's difficult to keep translations up to date, and the work is error\-prone. MH worried it won't be checked.
* EM suggests we may not be able to do this before July to test/proof, but that we incorporate a feature indicating that the translation is in draft.
* EBB asks what we can do to help implementation sometime before July.
* MH asks if Christian Wittern might be asked to help. Maybe Duncan Paterson?


Follow\-up from uniHan call
---------------------------


* Subgroup decided to go with the proposed version with attributes instead of elements. **Action on MS**: add proposal to GitHub issue on Mon 18
* We want to provide conversion scripts for that, which leads to the question where to store conversion scripts


current encoding method:

```
<char>
   <charProp>
      <unicodeName>character-decomposition-mapping</unicodeName>
      <value>circle</value>
   </charProp>
</char>
```

new encoding method:

```
<char>
   <unicodeProp name="Decomposition_Mapping" value="circle"/>
</char>

```

Tickets to discuss
------------------


* SB: To whom should issue [Encoding RDF relationships in TEI (TEI\+RDFa and alternatives)](https://github.com/TEIC/TEI/issues/1860) be assigned? It probably deserves someone who understands RDF better than I do. I may be wrong, here, but I think of RDF as a *framework* and as an input format used by some tools to represent relationships. I.e., as the *output* of a process over a TEI document. I think this whole ticket may boil down to loosening the definition of \<link\> so that it does not seem to be limited to pointing to XML elements.
	+ Assigned to MS. Maybe should be a working group.


**Next Stylesheets Meeting**
----------------------------


* Mon 18 Mar at 14:00Z \= 09:00 EST / 14:00 GMT / 15:00 CET
