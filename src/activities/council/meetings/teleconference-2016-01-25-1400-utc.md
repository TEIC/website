---
layout: page.njk
title: "Teleconference 2016-01-25 14:00 UTC"
creator: TEI Technical Council
---
# Teleconference 2016-01-25 14:00 UTC






Teleconference 2016\-01\-25 14:00
 UTC



 Present
 
 
- Syd Bauman (SB)

- Elisa Beshero\-Bondar (EBB)

- Lou Burnard (LB)

- Hugh Cayless (HC)

- James Cummings (JC)

- Stefan Majewski (SM) 6min late

- Elli Mylonas (EM)

- Martina Scholger (MS)

- Peter Stadler (PS)

- Magdalena Turska (MT)

- Raff Viglianti (RV)






 Agenda
 
 
 Spring F2F
 
 
- No dates 100% of us can make it to. April 25–27 and May 5–7 look like best
 candidates. Pick one of those, or try June?
 
	
	- EM reports good chance that she can host F2F at Brown during the April dates.
	 She will check and report back by posting to list before Fri 01\-29\.
	
	- SB also to check if there are major conflicts.

- Nail down location \- I even found a neat hotel near the campus, but it doesn’t
 allow computers/devices at the breakfast room. or jeans...

- Answer: yes April dates, still checking on whether Brown works or not


 Schedule regular meetings
 
 
- Thursdays at 09:00 Eastern US / 14:00 UK / 15:00 Western Europe look most
 viable. Last Thursday of the month? (Feb 25, Mar. 31, May 26, June 30\)





 Pure ODD status
 
 
- macro.anyXML? <https://github.com/TEIC/TEI/issues/1373>
	
	- Currently macro.anyXML has to be defined in RelaxNG; we want a way to do it
	 in Pure ODD.
	
	- That is, instead of using \<macroRef name\=”macro.anyXML”/\>, we’d use a
	 new \<anyXML exclude\=”\[namespaces\-that\-cause\-problems]”/\>

- need for bug report on \<dataRef\> as child of \<content\> producing
 erroneous DTD and XSD

- LB: Need more tests, more testing with existing ODDs; JC: do you have an
 automated conversion? LB: You really should be doing this mindfully (but a
 conversion does exist). Requests all council members to test with an ODD of their
 own. By Valentine’s week (2016\-02\-16\), post results to Council list.

- LB: Need to look for holes in the documentation; a tutorial exists and Lou will
 look for it and try to bring it up to date

- Datatype names have changed. data.foo \-\> teidata.foo. Old ones still work,
 but should be changed. Old ones ought to be deprecated eventually

- <https://github.com/TEIC/Stylesheets/issues/135>\<elementRef key\="foo" minOccurs\="2" maxOccurs\="5"/\> is broken in
 XSD

- **Action** on everybody to give Pure ODD a workout and report
 bugs to council list by Valentine’s week (2016\-02\-16\)





 Processing Model and Simple
 
 
- JC: was awaiting final sign off on Pure ODD to reimplement. LB has made new
 branch lb42\-procmod with recrafted prose and valid examples. JC thanks LB for his
 hard work on this.

- SB will ask a WWP encoder to take a look at new TD chapter

- MT promises to read \& comment on the current prose and catch up on emails,
 asks others to join the discussion on tei\-council list.

- **Action**: post link to newly\-generated procmod GLs to TEI\-Simple list

- TEI Simple Mailing List has 42 (largely silent) subscribers: <https://web.maillist.ox.ac.uk/ox/info/teisimple> subscribe by
 email\+confirm to [teisimple\-subscribe@maillist.ox.ac.uk](mailto:teisimple-subscribe@maillist.ox.ac.uk).

- [http://teic.github.io/TEI](http://teic.github.io/TEI/)/ will have accessible version generated
 from procmod by hugh

- Need to clean the TEI Simple repo, possibly splitting into two repositories (or three):
 simple itself, processing model, project history.





 3\.0\.0 Release / Stylesheets 7\.41\.0
 
 
- Date: Aim to freeze February 29th. Confirm at next meeting.

- Contents? We should probably use the [GitHub Milestone](https://github.com/TEIC/TEI/milestones/Guidelines-3.0.0) (i.e. add tickets to
 the 3\.0\.0 milestone JC added to GitHub some time ago.)





Next meeting Thu 02\-25, 09:00 EST / 14:00 GMT / 15:00 CET








