---
title: "TEI Technical Council Teleconference, 2023-02-10"
date: 2023-02-10
---
# TEI Technical Council Teleconference, 2023-02-10
### **Meeting times**


* 6:30am PST / 9:30am EST / 2:30pm UTC / 3:30pm CET
* Started: \~14:33Z Ended: \~16:04Z


### Present:


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS) \~ 8 minutes late
* Elisa Beshero\-Bondar (EBB, Chair)
* Hugh Cayless (HC)
* Patricia O'Connor (TOC)
* Sabine Seifert (SS)
* Joey Takeda (JT) \~ 20 minutes late
* Raff Viglianti (RV)


### Apologies/Not Present:


* Elli Bleeker (EB)
* Martina Scholger (MS)
* Janelle Jenstad (JJ)
* Magdalena Turska (MT)


Meeting minutes previous month ([January 2023](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2023-01-13/))
Spring F2F meeting
------------------


* May 7–9 at University of Guelph: working at [THINCLab](https://www.uoguelph.ca/arts/dhguelph/thinc) [(McLaughlin Library)](https://goo.gl/maps/wyf6RJ7grWwdAncMA)
* Before our F2F is the LINCS Project Conference (May 5–7\): [CFP](https://lincsproject.ca/events/making-links-2023/). Proposals from Council members are highly encouraged!
* Afterwards 4\-day DH@Guelph Workshops: (May 9–12\). [Call for Workshop Proposals](https://www.uoguelph.ca/arts/dhguelph/summer2023) (due 1 March).
* Will we be able to attend both Council meeting \& DH@Guelph on Tue 09 May?
	+ Find out about the timing
	+ Is it okay to submit a proposal?
* **Action on EBB by 2023\-02\-13:** Find out about accommodations and overlap with the other 2 events (LINCS before, DH@Guelph after).
	+ EBB (updating these minutes on 2023\-02\-19\): Yes, it is okay for Council to book accommodations through the entire conference.
	+ See details sent to TEI\-Council mailing list on 2023\-02\-19\.


Fall F2F meeting
----------------


* Mon 04 Sep to Fri 08 Sep at Paderborn is TEI/MEI Conference (see [save the date notice](https://www.uni-paderborn.de/forschung/forschung-im-profil/digital-humanities/nachricht/save-the-date-joint-tei-and-mei-conference-2023)):
* Council may meet before or after the conference (PS)
* Best if Council meets before the conference begins
* Workshops: Mon 04 Sep and Tue 05 Sep
	+ Will be held in a different part of town than the main conference
* Council meetings: Fri–Sun, Sat–Mon, or Sun–Tue. Obviously the former means a longer trip, but allows Council members to attend workshops. The last is shorter, but overlaps workshops a lot. The middle one is, well, in the middle.
* **Action on EBB** by **2023\-03\-10**: Poll council about selection of days.
* Mon 04 Sep is Labour Day in US \& Canada


TEI/MEC Conference planning
---------------------------


* RV is committee chair, puts together program committee
* CFP to be posted possibly by Friday 2023\-02\-17, but no later than Friday 2023\-02\-24\.
* Local organisers pushing for not using ConfTool, but instead using an [alternative tool called Indico](https://indico.cern.ch/). They believe this change would make conference attendance 20% less expensive than using ConfTool (but unclear if less expensive than previous conferences).
* Indico needs to be tested. Not sure if it generates the conference program as well as handling the conference submissions and submission review.


Planning the next release
-------------------------


* Last release: October 2022
* Next release: We agreed to circa April 2023
* Planning on Tue 04 Apr (perhaps start on Mon 03 Apr; either way release techs should meet the week before)
* Release techs: JT, HC, SB


Board question on updating the TEI Website’s Tools and Projects page
--------------------------------------------------------------------


* Last month we proposed that the Board prepare a Google Form with guidance (descriptions of no longer than *N* words) for TEI members to describe TEI tools. (This would allow us to list things like FairCopy, LeafWriter, etc.)
* Perhaps another form or the same form to be used for TEI projects.
* EBB discussed this with the Board. They like the idea, but raised a question for us: What do we think of distinguishing Tools maintained by TEI\-C from those that are not?
	+ Council thinks this reasonable
	+ RV suggests something like Awesome DH Tools ([https://dh\-tech.github.io/awesome\-digital\-humanities/](https://dh-tech.github.io/awesome-digital-humanities/)) for interactive GitHub site
	+ HC: We should consider: what is most likely to encourage us (Council and Board) to engage with updating the site?
* The website is not Council Responsibility but Council (esp. Chair) needs to work with it
* Wordpress is a security risk and upkeep is challenging.
* The infrastructure group could be revived (with a combination of Board and Council members) around the website.


Rendering “Attributes” section of tagdocs
-----------------------------------------


* [Stylesheets \#592](https://github.com/TEIC/Stylesheets/issues/592) We need a better way to render attributes in the “Attributes” section of the tagdocs for elements and classes.
* Example: <https://guidelines.teipublisher.com/ref/acquisition/> and [https://tei\-c.org/release/doc/tei\-p5\-doc/en/html/ref\-acquisition.html](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-acquisition.html)
* From the 2022\-12 Stylesheets meeting (which was held 2023\-01\-05\): “General consensus is that this needs to be improved, and a vertical listing with meaningful indentation is probably a good idea. We should do this more like MEI with optional alternative views. [https://music\-encoding.org/guidelines/v4/elements/abbr.html\#attributes](https://music-encoding.org/guidelines/v4/elements/abbr.html#attributes)”
* Vertical arrangement would be more readable
* Revising punctuation—dealing with parentheses in confusing places.
* Total overhaul of spec pages? Well, maybe not right away, but:
* Start with nesting lists to improve legibility
* SB: Try for the compressed hierarchical, vertical arrangement on the ticket.
* Some council members to work on this at next Stylesheet meeting


Another TEI ODD Processor (ATOP):
---------------------------------


* Request that people pay attention to tickets with [atop label](https://github.com/TEIC/TEI/labels/atop). While most are not actually blocking progress, resolution would speed things up.
	+ SB asks for Council members to read and comment on:
		- [\#2306](https://github.com/TEIC/TEI/issues/2306) — See below; can we agree within the next week?
		- [\#2330](https://github.com/TEIC/TEI/issues/2330) — only if you disagree with the consensus we came to at this meeting (see below and the comment on the ticket)
		- [\#2381](https://github.com/TEIC/TEI/issues/2381) — can we agree within the next week?
	+ SB on \#2306: As no one has objected to removing model.oddDecl from model.inter, one has given it a thumbs up (Laurent Romary), and several of us (at least SB \& MH, probably others) think it is a really good idea; and since at least 2 people (SB and Piotr Bansk) think it needs to be deprecated, SB thinks this should be made GREEN for deprecation. See ticket for precise listing.
	+ Discussion of [\#2330](https://github.com/TEIC/TEI/issues/2330):
		- The main issue is how does a user specify which query language they wish to use, and what happens with conflicting bindings?
		- The \<constraintDecl\> solution (\#2, “adventurous” on the ticket) would allow resolution of potential conflicts
		- HC notes that it is likely that later versions of XSLT would be backwards\-compatible with earlier versions. SB notes this is generally, but not always, true; and Schematron defines quite a few possibilities, although in practice only **a few** are ever used: exslt, stx, **xslt**, **xslt2**, **xslt3**, xpath, xpath2, xpath3, xpath31, xquery, xquery3, and xquery31\.
		Addendum: Note that “xslt” (meaning XSLT 1\.0\) is the default, so in fact our Stylesheets are doing this incorrectly.
		- What if there's just one central constraintDecl for now to define the binding globally?
			* We could decide later to allow for multiple contraintDecls if called for.
		- Council decides on the \<constraintDecl\> option but a simpler implementation of it. SB updates the ticket.


RomaJS/Roma Beta Update
-----------------------


* Should we make RomaJS the new Roma with the next release?
	+ Present council members agree.
* Update from RV: preparation for the new release, internationalization work, link relocation, etc.
* Will be finished by April 2023 (next TEI release)
	+ will have German, Italian, Spanish, French translations ready.
	+ Kiyonori's students working on Japanese translations (but probably not ready yet)
	+ some bugs to squash yet
* Council approves of releasing the new version of Roma with internationalization as v 1\.0\.0 and out of beta
	+ Old Roma not being maintained by anyone at the moment.
	+ Old Roma would stay under a different domain name (possible alternative domain names: Roma Classic, Roma Antiqua)
	+ **Action HC and RV** to work on DNS switch. (It should happen sooner, but can be announced with the next release.)
	+ **Action on EBB** to write the announcement to stop using old Roma and start on the new Roma when its released


TCW for TEI GitHub Webhooks and Secrets
---------------------------------------


* Update? **Action on HC and JT:** to write up TCW on webhooks and GitHub dependencies
* (Re See [Stylesheets PR \#588](https://github.com/TEIC/Stylesheets/pull/588): Tests fail due to failed Slack webhook action on external PRs)
* EBB opens [Stylesheets ticket \#594](https://github.com/TEIC/Stylesheets/issues/594) about this.


Status of TEI mailing lists
---------------------------


* Board will consult Council with a proposed solution, before engaging the membership.
* Options Board is considering:
	+ Keep at Brown,
	+ Move to another university (that uses listserv) \- Northeastern?
	+ Find a professional hosting solution like [L\-Soft](https://www.lsoft.com/go/default.asp)
	+ Other options?
* Consensus was to investigate L\-Soft options and independent hosting expense
* Will also need to speak to Brown librarians and tech infrastructure staff whether we decide to stay or move.


 