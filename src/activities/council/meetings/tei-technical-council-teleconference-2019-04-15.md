---
title: "TEI Technical Council Teleconference 2019-04-15"
date: 2019-04-15
---
# TEI Technical Council Teleconference 2019-04-15
**Present:**


* Syd Bauman (SB \- joins @ \~13:18Z due to power failure)
* Elisa Beshero\-Bondar (EBB)
* Hugh Cayless (HC)
* James Cummings (JC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Sarah Stanley (SS)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux (VBJ)
* Peter Stadler (PS)
* Magdalena Turska (MT)


Started: 13:04Z, Ended: 14:32Z
F2F Washington
--------------


* Rough [Agenda](https://docs.google.com/document/d/1sE9B3xsMZvzaa4zszCrnXEuDfkvNuDCXGvKeOI5X73Y/edit#)
	+ put additional discussion items under “Collection of topics”
* Advertising Brown\-bag
	+ content of brown\-bag—orient to Folger people's interests
* Number of participants for book exhibit (presumed: all of us)
* **Action** on RV: ask Meaghan Brown about advertising brown\-bag, wifi, etc. **due 2019\-04\-15**.


TEI Conference in Graz
----------------------


* Mon 16 – Fri 20 September; workshops on Mon 16 and Tue 17
* Schedule Council meeting (3 days)
	+ Consensus is Sat, Sun, \& Mon (14–16\)
* Pre\-conference TEI Summer School (Tue 10 – Fri 13 Sep)
	+ Introductory level event; XML, TEI
	+ Presenters from Council:
		- SB
		- RV
		- JC
	+ **Action** on MS: to do the planning in a separate email **due 2019\-04\-17**.
* Submissions for the TEI conference from TEI Council?
	+ EBB/HC/RV/JC 4\-paper panel on crit\-app: (we need to finish writing it).
	+ EM and colleagues: IIP creating archival formats of files. Best Practices, FAIR principles
	+ If the program committee does not object to recycled papers, and if there are not a whole lot of TEI folks at Markup UK, SB plans to submit a mildly modified version of his Marup UK paper.
	+ JC: Submitting paper/short\-paper on problem of how to highlight \<teix:egXML\> for pedagogical purposes; c.f. <https://twitter.com/jamescummings/status/1113812154300424192>  and [https://github.com/TEIC/TEI/issues/1632\#issuecomment\-368456200](https://github.com/TEIC/TEI/issues/1632#issuecomment-368456200)
	+ JC: Also thinking of maybe submitting a short\-paper on “When is a place an object?” but not sure if this is useful.


* Is there a place where all of Council might stay? MS notes we should book hotel early due to conflicting big conference. **Action** on MS: recommend hotel(s) **due 2019\-04\-17**.
* **Council Venue:** Elisabethstraße 59/III, 8010 Graz (at Centre for Information Modelling), see [map](https://goo.gl/maps/xKNc6AEXM2p).


Next release in July
--------------------


* Release technicians are EBB and VBJ
* EBB's window: July 14–20 (EBB in Utrecht the week before: maybe stay in Europe? Check with VBJ)


Reschedule monthly Council calls?
---------------------------------


* We don’t want to change them if it is not necessary.
* **Action** on MS: send an email to those absent today **due 2019\-04\-17**.


RomaJS
------


* [Current Roma Features document](https://docs.google.com/document/d/11X2pBQ7zTvy-xXWYlJfWB1O9STEY-vau3Bd1nydkgVY/edit)
* Testing phase by the Council:
	+ When you get a chance, please test it again at<http://mith.us/romajs/>. RV created [a new clean document](https://docs.google.com/document/d/1tRqnGpvYctwNptzeAuTuzW_3qKUIpZQAe0Gy5obIXCY/edit) with the same prompts as last time.
	+ RV wants to do a soft launch to get people seriously stress\-testing it
* JC indicates that Roma JS is intro\-level Workshop ready, with caveats
	+ JC: Workshop tested this on 5 April (workshop of \~30 people using Roma JS concurrently). Only bug was occasionally it getting stuck at start (“3/3” stage). Hard refresh sorted this out. All tests we had them do succeeded. They added elements, building up, deleted attributes, made attribute content required and a closed list.
* RV: Plan for gradual movement toward new Roma JS replacing old Roma.
* What is it called? SB suggests we review our list, and vote on names. **Action** on JC: send a poll to vote for names, **due 2019\-04\-22**.


Infrastructure group report
---------------------------


* Google folder with minutes, inventory, etc.: [https://drive.google.com/open?id\=19jmQraBYKD0RU1JErB0wiSzo\_ir7fghn](https://drive.google.com/open?id=19jmQraBYKD0RU1JErB0wiSzo_ir7fghn)
* Domain transfer successful.
	+ HC has invited Luis to manage the DNS. Some complex name mappings that likely need to be simplified (is anyone using fr.tei\-c.org?) Maybe set up some redirects for these (check on French TEI list).
	+ Next meeting (of the Infrastructure Group) is scheduled for Tue 23 Apr.


Oxygen
------


* Oxygen plugin (see email from MH on 2019\-03\-26\): [https://github.com/TEIC/oxygen\-tei/issues/30](https://github.com/TEIC/oxygen-tei/issues/30)
	+ MH suggests to update the plugin now with wildcard lib settings and to abandon support for versions of oXygen prior to version 18\. This will future\-proof us for a while, but this cuts us off from providing a framework for versions prior to 18\. SB, noting possible hardship for those who do not want to or cannot afford to upgrade, and noting that the schemas are probably the most important part, suggests we could provide instructions on how to get latest schemas such that they could be used by earlier oXygens
		- Council thinks MH should go ahead and update the plugin, and we'll catch up on documentation at the F2F. Maybe a subgroup activity.
		- To write documentation, Council members need to install an old version of oXygen (EM notes oXygen goes back to 19\.1 on earlier versions page. JC has 18 on a laptop).
		- Where to post? JC: an HTML page in the oXygen directory in  the release/ hierarchy.
		- [https://www.tei\-c.org/release/oxygen/updateSite.oxygen](https://www.tei-c.org/release/oxygen/updateSite.oxygen) (Currently not working)
		- JC: suggests [https://www.tei\-c.org/release/oxygen/index.html](https://www.tei-c.org/release/oxygen/index.html) as a location for documentation about it. \[[https://tei\-c.org/Vault/P5/3\.5\.0/oxygen/](https://tei-c.org/Vault/P5/3.5.0/oxygen/) is where it lives now]
	+ What about plans to hire someone? MT was going to ask Radu to look after the plugin on a continuing basis. **Action** on MS: follow up with MT and MH **due 2019\-04\-15**. Meanwhile, MH can go ahead with the new plugin.


* 


Rub\-a\-dub
-----------


* Sad to report **no** progress. Zip. Zero. Nada.


Standoff\-Proposal
------------------


* Bad news: little progress, just recent. Good news: sub\-group meeting being scheduled for end of April (week of 27 Apr), hoping to have significant progress to report at F2F with updated proposal or similar. SB: July release is too early, but the next release after that. HC: we could do a phased release.


**Next Stylesheets Meeting**
----------------------------


* Fri 19 Apr at 13:00 PST / 16:00 EST / 21:00 GMT / 22:00 CET
