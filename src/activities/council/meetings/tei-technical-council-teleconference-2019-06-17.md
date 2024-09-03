---
title: "TEI Technical Council Teleconference, 2019-06-17"
date: 2019-06-17
---
# TEI Technical Council Teleconference, 2019-06-17
**Meeting time:**


* EDT 9:00\-10:30, GMT 14:00\-15:30, CEST 15:00\-16:30
* Started @ 13:06Z


**Present**
* + Syd Bauman (SB, left @ 14:28\)
	+ Elisa Beshero\-Bondar (EB)
	+ James Cummings (JC)
	+ Elli Mylonas (EM)
	+ Martina Scholger (MS)
	+ Peter Stadler (PS)
	+ Sarah Stanley (SS)


* Raff Viglianti (RV) (left at 14:15Z)


**Apologies/Not Present**
* Vanessa Bigot Juloux
* Hugh Cayless
* Magdalena Turska


 
Follow\-up **F2F Washington**
-----------------------------


* Release of RomaJS
	+ Current status
		- Switchover from old Roma to new RomaJS—with appropriate notes on landing page, need to make banner on Roma announcing new Roma JS and asking for feedback. Wants to do this as soon as possible, so Stylesheets can be tweaked before next release as needed.
		- Name will be Roma. Call it “Roma Classic”. Call the new one "Roma Beta" or “Romaβ” for a while.
		- RV will start a google doc with some prose  to put in the blank space on the main page and reach out to JC, EBB, and EM
* Oxygen testing
	+ Martin Holmes asked us to test Oxygen plugin
	+ [https://jenkins.tei\-c.org/job/oxygen\-tei\-bleeding/lastSuccessfulBuild/artifact/oxygen\-tei/updateSite.oxygen](https://jenkins.tei-c.org/job/oxygen-tei-bleeding/lastSuccessfulBuild/artifact/oxygen-tei/updateSite.oxygen)
	+ [https://teijenkins.hcmc.uvic.ca/job/oxygen\-tei\-bleeding/lastSuccessfulBuild/artifact/oxygen\-tei/updateSite.oxygen](https://teijenkins.hcmc.uvic.ca/job/oxygen-tei-bleeding/lastSuccessfulBuild/artifact/oxygen-tei/updateSite.oxygen)
	+ Please test if you haven’t done so far
		- JC: testing in 18\.1 (using jenkins.tei\-c.org link above): Complains that it can’t get ‘[https://tei\-c.org/release/oxygen/updateSite.oxygen](https://tei-c.org/release/oxygen/updateSite.oxygen)’
		- MS: works with version 19\.1
		- EM: just tried to add the add\-on to 20\.1 and the URL is not found.
	+ We need to write a documentation that it won’t work on old versions of oXygen. And centralize that documentation (from JC’s blog site) in a good visible place from the TEI site ([https://tei\-c.org/guidelines/p5/\#section\-3](https://tei-c.org/guidelines/p5/#section-3)). Add new item at the top of this page “oXygen Plugin” and fill in documentation for how to get the plugin, what versions of oXygen it works with and how to update. **Action on EB** to start this so it’s part of next release. Write this in the [TEIC/Documentation](https://github.com/TEIC/Documentation) repo. Make a new folder rather than use the TCW/ folder: exDoc/ (for “external documentation”) or end\_user\_doc/ or some such; or put it in a TEI wiki which is backed up in GitHub.
* Standoff proposal
	+ **Action on MS:** Ask Laurent Romary to instigate discussion on the TEI\-list on deprecating \<teiCorpus\>.
	+ Next step is on SB to incorporate \<TEI\>\-as\-\<teiCorpus\>, but he will not have any time for TEI until after WWP publication, scheduled for Thu 20 Jun.
* TEI release @ zenodo
	+ In general Council agrees to release Guidelines on Zenodo. Action on **HC/MS/SS volunteers** by June 2019 to have a closer look at the account management, etc. and take a look at Open Science Framework (OSF) for DOI and release? See [https://help.osf.io/hc/en\-us/articles/360019931013\-Create\-DOIs](https://help.osf.io/hc/en-us/articles/360019931013-Create-DOIs)
		- To investigate: versionable DOIs? Or a distinct DOI for each release?
		- Discussion: we need a way to automate the release process. Porting new release into Zenodo via API instead of manual upload?
		- CORE (MLA Humanities Commons Repo) FAQ is here: <https://hcommons.org/core/faq/>
* OxGarage release
	+ PS merged dev branch into master, tagged, and drafted release notes  at <https://github.com/TEIC/oxgarage/releases> — ready to go.
	+ Version number issue: we've jumped from version 1 to version 3 (due to old version documentation inside “version 1”).
* Free standing attributes
	+ EM and SB will start changing the non\-controversial attributes— adding them to classes with modifications to suggested values, for example. They will make tickets for more controversial cases to put them forward for discussion by Council. There's a change\-blocking issue to address first in the Stylesheets: [\#370](https://github.com/TEIC/Stylesheets/issues/370). This will be addressed in the next Stylesheets meeting on Fri 21 June.


**TEI Conference in Graz**
--------------------------


* September Mon 16–Fri 20; workshops on Mon 16 and Tue 17
	+ Pre\-conference TEI Summer School (Tue 10–Fri 13 Sep)
		- The wonderful group of people: SB, RV, \& JC on Fri 13
	+ Council meeting Sat 14 Sep–Mon 16 Sep:
		- JC: should we invite people standing for Council? If they happen to be there early. Yes: on Monday AM, **action on MS** to invite as soon as bios and statements are in; they are due 06\-26\.
		- Make sure we invite people we need to have present for high priority issues (like Laurent Romary, Martin Holmes). Martin Holmes will join us for the entire meeting. Luis and Laurent are needed for Infrastructure (as contact with HumaNum), which may be a separate meeting during Council meeting. **Action on MS:** contact Luis and Laurent about when they could come**.** Laurent also needed for LingSig issues.
		- Joint Board and Council meeting on Mon 16?
		- Open Council session? (No, not this year.)
	+ Discussion of agenda for joint Board and Council joint meeting: Invited experts should be posted prominently on the TEI website so their work is listed and they’re credited (and encourages us to involve others who perhaps stood for election and didn’t make it). People like Martin Holmes, Laurent Romary, Duncan Paterson, but others also.
		- **Action on MS:** Ask Board for their agenda, what they want to discuss with us. Also ask about funding our invited experts to join us. Also, let's formalize this: How best to present requests about this in future? Board should expect we’ll always/often want to invite outside experts.
	+ Dinner at MS’s on Sunday evening (Sep 15\)
	+ **Venue for** Council meeting: Elisabethstraße 59/III, 8010 Graz (at the Centre for Information Modelling)


**Next release in July (EBB, MT, and VBJ)**
-------------------------------------------


* Release dates:
	+ Refridge: June 30–July 8
	+ Freeze: July 9–13
	+ Create release branch: July 14
	+ Release: July 16
* Issues that we want to have ready for the July release:
	+ Measurement (EBB: Yes, starting back to work on this!) <https://github.com/TEIC/TEI/issues/1707>
	+ Maybe nesting \<TEI\>
	+ Pull request re \#1621: EBB: make sure this doesn't break build: <https://github.com/TEIC/TEI/pull/1886>
	+ EBB requests Councilors mark issues expected to be in this release by applying “release 3\.6\.0” milestone. Will check in with VBJ to determine her availability to participate.


**Infrastructure group report**
-------------------------------


* Ron Van den Branden is now part of the group
* Luis Meneses is in the process of moving services to HumaNum


**Rub\-a\-dub (SB): no progress**
---------------------------------


**Stylesheets Meeting** Fri 21 June at 13:00 PST / 16:00 EST / 21:00 GMT / 22:00 CET