---
title: "TEI Technical Council Teleconference, 2022-11-10"
date: 2022-11-10
---
# TEI Technical Council Teleconference, 2022-11-10
**Meeting times:**


* 8am PST / 11am EST / 4pm GMT / 5pm CET
* Started:     16:02Z    Ended:    \~17:34Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Elli Bleeker (EB) (until \~16:30\)
* Hugh Cayless (HC)
* Patricia O Connor (TOC)
* Martina Scholger (MS)
* Sabine Seifert (SS)


**Apologies/Not Present:**
* Janelle Jenstad (JJ)
* Peter Stadler (PS)
* Raff Viglianti (RV)
* Magdalena Turska (MT)


Meeting minutes previous month ([October](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2022-10-14/))
 


Leave of absence
----------------


* EB will be taking an extended \~1\-year leave of absence.
* Council wishes her the best, and *really* looks forward to her return.
* Using the “Council can invite” clause of the by\-laws, we are planning to ask the next candidate from the election results, Joey Takeda (and if he declines, Nick Cole) to serve for 1 year (or perhaps more if needed).


Release report
--------------


* MS reports release went smoothly save the stress of merging in \#[2359](https://github.com/TEIC/TEI/pull/2359) at the last minute. (It took \~4 hours to debug a snippet of Makefile that was removing a namespace that was no longer there.)


Spring F2F meeting
------------------


* MS, JJ, EBB, TOC, and maybe RV have academic calendar restrictions, and thus (SB suggests) should put their heads together and propose dates.
	+ SS and MS plan to attend the DHd conference (2023\-03\-13/17\).
	+ EBB may not be able to travel in early March. She expresses a strong preference for early May.


New chair for 2023
------------------


* EBB volunteers — No objections (nor other volunteers) from anyone present, and we know JJ approves as well. Thus EBB is appointed Chair for calendar 2023\.


Possibility of new Jenkins at Penn State
----------------------------------------


* SB, MH, EBB to hold a meeting soon (**Action on EBB** to schedule a meeting, due **2022\-12\-08**).


Report on CMC
-------------


* SB reports slow progress being made; still hoping to have a full PR well before next release, but quite possible it would be the one after that.


Reminder Ling SIG — Council liaison
-----------------------------------


* Meeting scheduled for Thu 2022\-11\-17 at 16:00Z.
* Already added to the Google Calendar.


oXygen version 25
-----------------


* MS reports that the Saxon version problem has been fixed by replacing the hard\-coded version numbers with wildcards.
* SB reports (and MS details) that the plug\-in from Syncro has diverged from the TEI\-C plug\-in, in particular the CSS files are in a different place.
* Multiple copies / multiple locations of CSS due to multiple referencing locations.
* MH does not want to continue with the oXygen plugin issues.
* We should arrange a special Council meeting inviting someone from Syncro Soft to join us, even for a short while. Note that backwards\-compatibility is probably not Syncro Soft's highest priority.


Mailing lists
-------------


* SB: Brown is likely to cease support in months, not years, because Brown lists need to be sponsored by someone working at Brown, and (at the moment) no one in TEI\-C inner circles does.
* 17 TEI\-related listservs have been hosted at Brown. Most are dormant. We would want the archives for all of them.
* Transitioning TEI\-L from Brown to a new venue is the most potentially disruptive for the community.
* TEI\-L is transitioning to Sympa at Huma\-Num. The question is how to manage the transition. Transitioning subscribers will be difficult.
* Duke uses Sympa—HC can ask around to see if anyone has experience moving from LISTSERV to Sympa. (There has to be a Perl script!)
* SB can provide info on the \~17 lists: List name, number of subscribers, last post, rough size of archive. (Note: Both SB \& Elli Mylonas are owners of each TEI list at Brown.)
* MS will contact the appropriate people (at Huma\-Num via Laurent Romary)
* **Action on HC, SB**, and **MS** by **2022\-12\-08**.


Issue [\#2049](https://github.com/TEIC/TEI/issues/2049)
-------------------------------------------------------


* What do we do about [\#2049](https://github.com/TEIC/TEI/issues/2049) screw\-up in 4\.5\.0 release? Possibilities include:
	+ 1\) Create a 4\.5\.1 release with the deprecation date (2022\-07\-14\) bumped to sometime in the future.
	+ 2a) Create a 4\.5\.1 release with the deprecation removed (after all, it is after 2022\-07\-14\).
	+ 2b) Create a 4\.6\.0 release with the deprecation removed (after all, it is after 2022\-07\-14\).
	+ 3\) Nothing.
* Council likes option 3—we’ll deal with it in the next release.
* **Action on SB** to just remove the deprecation in the dev branch **by** the next Council meeting, **2022\-12\-08\.**


AOB
---


* November Stylesheets meeting: would it be possible to delay it one week?
	+ **Action on HBS**: send out Doodle poll (or equivalent) for scheduling it sometime other than Thu 24 Nov (which is also American Thanksgiving) **by 2022\-11\-15\.**


 