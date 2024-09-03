---
title: "TEI Technical Council Teleconference, 2023-10-13"
date: 2023-10-13
---
# TEI Technical Council Teleconference, 2023-10-13
### Meeting times


6:30am PST / 9:30am EST / 2:30pm UTC / 3:30pm CET
### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Hugh Cayless (HC)
* Patricia O'Connor (TOC)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


### Special Guests (new Council members starting terms January 2024\):


* Gustavo Riva (GR)


### Apologies/Not Present:


* Elli Bleeker (EB)
* Nicholas Cole (NC)


New Council members: welcome, mentoring
---------------------------------------


* MS and HBS volunteer as mentors for GR and TR


Next release
------------


* November 5–10 refrigeration, Thurs. Nov. 16 release.
* release technicians: RV, HC, and GR


Next F2F
--------


* JT proposes next F2F in Vancouver, his institution feels happy and welcoming to host the Council, dates would need to be settled;
	+ May or beginning of June would be pleasant weather\-wise and efficient for DHSI.
	+ RV cannot make end of May and most of June. EBB suggests all Council has a look
	+ Anytime in May **except** Mon 20 May 2024 would be OK for Vancouver.
* However(!) next year we would have many Europeans to the Western hemisphere twice–expensive
	+ SS suggests she could host at Potsdam to reduce expense
* EBB: virtual F2F a good idea? Perhaps a series of 3 weekends?
	+ MT: European subgroup and American subgroup could meet in person with specialized topics?
	+ EBB: subgroups meet in person and whole council meets virtually?
	+ SB and RV: dividing Europeans from Americans on Council seems problematic because we’re not evenly split. Maybe better if it’s just virtual all together, or in person all together.
* EBB is prepared to host a regional DH conference and will investigate also this as an option to meet F2F.
* HC: We’re spending more than we’re taking in lately. Possibly we might want to put Council on a budget per year to have meetings.
* **Action on EBB:** Arrange two polls to determine format and availability for Spring F2F: One about modality (online meetings vs. in person), the other poll about availability for each person.


Urgent! [TEI PR \#2473](https://github.com/TEIC/TEI/pull/2473) (RV and SB)
--------------------------------------------------------------------------


* How to handle deprecation of @calendar in att.datable
* We could remove it from att.datable now, but have to define @calendar on each of the other elements temporarily and provide a Schematron warning during the deprecation period
* Do we care about ODD\-writers’ experience with @calendar if they haven’t defined the source version of TEI in their ODD? Is it enough to warn them on the TEI\-L and release notes?
	+ JT: warning on the e\-mail list can’t hurt
	+ HBS: We’ve made it easy to write ODDs, so it’s not really just for “super\-users” / developers now. Providing warnings is helpful to our community.
	+ SB: Should we make such a warning every time we make a change to a  class? Discussion: Maybe only when we make a change that involves reducing/removing a usage that would be associated with a deprecation warning.
	+ SB: Any user complaints for changes that we have made to the class system? EBB: Should consider the ODD writers are not consulting the ODD changes as much as the Council.
* Or does it need a 6\-month deprecation warning? It’s really only relevant to ODD\-writers–and they should be aware of the TEI release notes.
* Policy on deprecation has not tended to worry about ODD\-writers b/c they could tie their ODDs to a particular release. But in this case there are 40\+ elements affected.
* JT: We should resolve the issue of the build being broken first and foremost. We can decide on the policy issues later
* SB and RV to implement the changes ASAP, and inform the TEI\-L.
* RV to open another ticket about handling class deprecation.


Process of Minute Reviewing
---------------------------


* folder Council minutes: lengthy minutes as discussed during meetings
* folder “Review” within folder Council minutes: trimmed and corrected minutes for publication, based on lengthy minutes
* EBB: minute reviewer should review both documents
* SB: Nomenclature to distinguish the distinction between the two documents:
	+ Notes \- The agenda take we write notes in during Council meetings
	+ Minutes \- The official record published on the website.


Ticket triage (priority tickets first)
--------------------------------------


* [\#2451](https://github.com/TEIC/TEI/issues/2451): Potentially straight forward ticket that needs quick Council perusal
	+ SB: need to be clear that the date range should refer to the existence of the place. Important to distinguish between \<place\> and \<placeName\> in this context (example: Istanbul and Constantinople).\<placeName\> and \<orgName\> already in att.datable.
	+ Opportunity to introduce confusion regarding where they should be placing the date range.
	+ JT and RV: More on the side of using \<event\> for clarity about the place ie. founding or dissolution etc.
		- \<birth\> and \<death\> as semantic sugar for \<event\>
		- James could use ODD to create elements for founding or dissolution
		- \<event\> conceptually allows you to be more precise about what you mean by the dates.
	+ JT and EBB: How would we handle \<entity\> once we introduce that? \<entity\> element yet to be implemented.
	+ Adding attributes on \<place\>, \<org\>, (and \<person\>) makes it easier to process. (Makes it easier to develop a timeline for example)
	+ HC proposes we add this to \<person\>
	+ One could define temporal bounding box at top level, and nuance on the elements
	+ also allow it for persons
	+ No resolution yet, but let’s continue discussing as we consider \<entity\>.
	+ It was not straightforward :)
* Need a French speaker for [\#2486](https://github.com/TEIC/TEI/issues/2486).


 
 


 


