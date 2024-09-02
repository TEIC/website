---
layout: page.njk
title: "Teleconference 2016-03-31"
creator: TEI Council
---
# Teleconference 2016-03-31




 13:00 UTC
 
 
 Present
 
 * Hugh Cayless (HAC)
* Elli Mylonas (EM)
* Syd Bauman (SB),
* Elisa Beshero\-Bondar (EBB),
* Raff Viglianti (RV),
* Martina Scholger (MS),
* Magdalena Turska (MT),
* Peter Stadler (PWS)
* James Cummings (JC)
* Stefan Majewski (SM)
* And special guest Martin Holmes (MH, left @ 13:56\)




 Apologies
 
 Lou Burnard (LB)


Meeting started on time, ended \~14:24Z.




 Agenda
 
 
 Release 3\.0\.0 debrief
 
 
- What documentation updates do we need?
 
	
	- Current TCW setup is really not working!

- Can we cope better with the interdependencies between the Stylesheets and
 TEI?

- Is Git Flow branching working for us?

- Things to consider:
 
	
	- multi\-day instead of 1\-day
	 
		
		- JC reminds us one reason we have 1\-day process: so dates look the same
		 on output. Might look weird to have build date be 1 April 2016 and release
		 date be 5 April 2016 or something. We don’t want someone announcing it \*for\*
		 us.
		
		- MH (and others) questions why that matters?
		
		- HC points out that “release” is when you push to master
	
	- complete preparation of readme\-3\.X.Y well in advance (as we’ve always asked
	 for)
	
	- common editing of TCW22 (see above)
	
	- stream\-line burden on poor Mr. Jenkins
	
	- Pushing to SourceForge should happen at the very end?
	
	- Inefficiency of code pushing to SourceForge downloading multiple zip
	 files...
	
	- Don't build anything on release day. We need a build day and a release day.
	 Discussion: Good to have a couple of days in between.
	
	- Need three days: Readme day, Build day, and Release day. JC: The whole point
	 of the ‘freezing’/’chilling’ bit a couple weeks before was to have that whole
	 period be a Readme.
	
	- Readme day should be a conference call with multiple council members
	 involved with writing and review.
	
	- Name the release branch just "release", and still nuke the release branch
	 after release.
	
	- By the time of Release Day, the release branch should already be folded into
	 master.
	
	- Editing TCW\-22! Down with open CMS. We need to edit this in a collab
	 environment. Wiki? Wordpress? Google Docs? (Only the last of these is truly
	 collaborative)
	
	- SB suggests moving TCW 22 to current GitHub repository for now, while we
	 debate a more permanent home post website .
	 **Action on SB to do so, moving to** <https://github.com/TEIC/TEI/tree/dev/Documents> (TCW/
	 subfolder)
	
	- Move of TEI website to Wordpress is supposedly imminent. JC: note that we’ve
	 been told this before, but will Board be consulting Council about this? (Yes)
	 Our migration of TCW\-22 should be consistent with this(?)

- Followup: Fixing .mobi download; No Kindle mobi version on Martin's Jenkins yet,
 but he is setting it up today/tomorrow.

- Should we drop Kindle support? A policy decision for Council in re\-examining all
 its outputs?


- Debian packages
 
	
	- SM: not much progress; can host Debian packages; some concerns about
	 bandwidth. Good if these were on tei\-c.org. JC: packages.tei\-c.org could be
	 located anywhere. (or some other subdomain, better suggestions?) We can’t rely
	 on Oxford for hosting things like this though, sadly, given the current
	 institutional climate.
	
	- Debian packages can be built on any Debian machine. Signing and releasing
	 depends on a single named person/organisation: one private release key. Should
	 that private key be with one release technician? And not leave the machine with
	 the key
	 
		
		- Encrypted keys can be shared between trusted individuals with <https://keybase.io/> e.g. <https://keybase.io/raffazizzi>
		
		- [http://teijenkins.hcmc.uvic.ca/job/TEIP5\-master/lastSuccessfulBuild/artifact/P5/](http://teijenkins.hcmc.uvic.ca/job/TEIP5-master/lastSuccessfulBuild/artifact/P5/)
		 has the packages
		
		- SM: We have a new signing key from last Council meeting, so we don't
		 have to impersonate Sebastian.
		
		- Suggestion to have DNS packages.tei\-c.org for the moment forward to SM’s
		 machine, later will acutally point to tei\-c.org.
	
	- JC: At the moment tei\-c.org is running CentOS 6\.3 which means that all the
	 debian/ubuntu packaging tools are not available there.

Martin Mueller asks whether we could do some sort of session at the Conference that
 goes beyond the Annual Report



- RV: another open session like last year?

- SB thinks that’s a different issue.

- P6 talk? Q\&A?

- SB (and EBB): Try a Q\&A in which we ask the audience what they think about a
 set of things we want to go to the TEI list with anyway. This could be very useful
 to us\-\-we did something like this in the past (2005 in Bulgaria) and it was
 immensely beneficial to Council.

- Presenting something particular about TEI?

- What is it like to work on a Council? What does it take?

Marjorie Burghart asks if we might consider a Council meeting in Prague in Spring
 2017



- MT: good for me, perhaps around the time of XML Prague (mid\-February or so) (SB,
 JC, PWS, and EBB would love to go to XML Prague, too)

- XML Prague might be interested in a presentation from us: contact the conference
 committee? Check with the oXygen and eXist people?

- MT: pre\-conference TEI workshop? Post\-conference Council mtg

F2F Prep: what do we want to get on the agenda?



- TEI Simple: MT and JC to prepare an overview for F2F listing decisions to be
 made to bring this customisation exemplar under Council support. We’ve already
 agreed to do so but can modify Simple in the process. \[JC]

- TEI ProcMod implementation: do we want to maintain any reference implementation?
 \[MT]

- Should we have some ‘strategic planning’ part of the f2f, so as not to use up
 all the time on short\-perspective issues? \[MT]















