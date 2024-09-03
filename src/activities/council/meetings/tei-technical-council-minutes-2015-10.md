---
title: "TEI Technical Council Minutes 2015-10"
creator: TEI Technical Council
date: 2015-10-28
---
# TEI Technical Council Minutes 2015-10




TEI Technical Council
 Agenda and Minutes, 2015\-10-28
 
 
Present:
 
 - Syd Bauman (SB)

- Lou Burnard (LB)

- Hugh Cayless (HC)

- James Cummings (JC)

- Stefanie Gehrke (SG)

- Martin Holmes (MH)

- Stefan Majewski (SM)

- Paul Schaffner (PFS)

- Peter Stadler (PWS)

- Raffaele Viglianti (RV)

- Fabio Ciotti (FC) \- from 4 pm Sun







GUESTS ON WEDNESDAY MORNING:
 
 - Elisa Beshero\-Bondar (EBB)

- Antonio Rojas Castro (ARC)

- Martina Scholger (MS)









 Sunday 25 October, 09:00–17:00
 
 venue: [Mama Shelter](https://www.google.com/maps/place/Mama+Shelter+Lyon/@45.7458268,4.8387803,15.89z/data=!4m7!1m4!3m3!1s0x47f4ea411d5dbddd:0x89b42b659826e561!2sMama+Shelter+Lyon!3b1!3m1!1s0x47f4ea411d5dbddd:0x89b42b659826e561), Atelier
 3


SSID: Mama Shelter, login: Visitors; 5821191761


09:00–10:30: Agenda setting, etc.


10:30: Coffee Break


13:00–14:00: Lunch at hotel



 Items for discussion
 
 
- What is wrong with anyXML, and how can we fix it? (RelaxNG, Jing and
 @xml:ids)
 
	
	- Content model for macro.anyXML
	 has not changed. Nevertheless, the introduction of
	 \<xenoData\> has caused a problem to occur. The macro has
	 been moved from tagdocs to tei module, which may be one reason.
	 We need to find out whether the move to another module caused
	 it, or its use in \<xenoData\>. It’s possible that the order
	 of modules in an ODD may cause this; if so, we could constrain
	 that with Schematron. HC has turned off one of the tests in the
	 build process to avoid the problem for now. **Action on LB to do testing and report back to Council.**
	 due 2015\-11\-25
	
	- **Action on HC to
	 figure out what specific test caused the problem and why.
	 Also to create an Issue for this. Done.**
	
	- For
	 Schematron to check ID uniqueness, see [wiki
	 example](https://wiki.tei-c.org/index.php/Xmlid_uniqueness.sch)

- Release scheduling:
 
	
	- We don’t have to
	 release on schedule, perhaps we should not feel forced to have a
	 release when we’re still discussing issues? (but how does that
	 pair with our desire to always have a release some time before
	 members meeting)
	
	- “release\-candidate”? or work on
	 three levels in github : a/branches \- b/development (all work
	 there) \- c/master 
	 
		
		- git fetch \+ git
		 merge [https://git\-scm.com/book/en/v2/Git\-Branching\-Branches\-in\-a\-Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

What is a release?



- Guidelines and Schemas

- Oxygen Packages

- Debian Packages? Which ones?

- HC suggests a new process taking better advantage of natural git
 methods of working. This would involve creating a new development
 branch, which would be where we branch from and merge to, and then build
 the development branch on Jenkins. The master branch (renamed to
 release?) would be where releases come from; merges are made from
 development to master before release. We should make the development
 branch the default on GitHub, and document this in the readme document.

- **Decisions after discussion:**- copy current master branch to new dev branch
	
	- make the dev branch the default (on GitHub)
	
	- master branch is our new stable branch (aka release)
	
	- Ticket is closed when in dev branch
	
	- whole dev branch is merged into master once ONLY for release and
	 tagged
	
	- Jenkins monitors dev branch.
	
	- When a tag is created for a release candidate (with a version number
	 ending in e.g. rc1 for “release candidate 1”), the zip of the products
	 built by Jenkins is pulled down and pushed to tei.github.io, where it is
	 public and we can ask for feedback.
	
	- No one pushes to the Master unless making a release.


- Adding and improving release processes and documentation

- Jenkins: Victoria and Oxford or tei\-c?
 
	
	- Or
	 Amazon AWC? It’s a cost that the board would have to approve.
	 Pricing: <https://aws.amazon.com/ec2/pricing/> though
	 note the costing is dependent on the number of back builds we
	 keep, etc.
	
	- We need a stable URL for the Jenkins
	 server, wherever it is, so that this can be changed once for all
	 in all the spec files.
	
	- Consensus seems to be that we
	 should get: jenkins.tei\-c.org (redirected at tei\-c.org to
	 wherever it needs to be whether a local hosted copy or AWS or
	 whatever)
	
	- **Action: JC to get
	 jenkins.tei\-c.org (as soon as Martin configures his server
	 to have it pointed at) also jenkins\-backup.tei\-c.org for
	 another server.**
	
	- **Action: PWS
	 will set up a Jenkins at upb.de; done.**
	
	- SM:
	 Travis\-CI? any experiences. MH we are currently hitting the
	 30Min limit. SM could do a Tue hackathon on this. Would need
	 reduction of build time because of limits.

- Stylesheets management
 
	
	- What parts of the
	 Stylesheets repo should Council be responsible for?
	 
		
		- LB argues: All of it (all needed for
		 co\-products like guidelines)
		
		- prioritize :
		 docx; pdf; html ; odf
		
		- develop workflow for
		 stylesheets
	
	- Suggestion that
	 “every issue should have an Issue” (e.g. both in Guidelines and
	 Stylesheets if it affects both?)
	
	- Branch workflow in
	 Stylesheets repository: we’ll use the same “dev” and “master”
	 2\-main\-branch system we decided upon for the Guidelines, above.
	
	- **HC to send e\-mail to non\-Council Stylesheets contributors** \[turns
	 out the only contributor with push access is Magdalena Turska,
	 who's about to join Council anyway]
	
	- **HC to actually change repo to the 2\-main\-branch system**
	 \[done]

- Debian packages?
 
	
	- several packages
	 involved: stylesheets, Guidelines, etc.
	
	- Need a
	 stable location for the packages, e.g. packages.tei\-c.org (could
	 then transparently to users be hosted at any of our
	 institution).
	
	- Need a TEI gpg key for signing debian
	 packages
	
	- [http://tei.it.ox.ac.uk/teideb/](http://packages.tei-c.org/deb/)
	
	- list of packages, status: [https://docs.google.com/spreadsheets/d/1w3ObgtqxpwYLrfaF\-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit?usp\=sharing](https://docs.google.com/spreadsheets/d/1w3ObgtqxpwYLrfaF-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit?usp=sharing)
	
	- **Action on SM, SB, and MH to learn how to build
	 \& sign packages, and set up a repository, with a view to
	 replacing the existing repository with a new one and
	 creating a new build/sign/release process. Also to
	 investigate if/which old packages could be dropped (TEI\-P4
	 f.ex). Investigate whether we can use PPAs; By 2015\-11\-30\.
	 This should be tracked with an
	 Issue.**

- Jenkins setup:
 
	
	- **Action on
	 JC and MH to set up virtual hosts on their Jenkins machines
	 for jenkins.tei\-c.org and jenkins\-backup.tei\-c.org. Action
	 on JC after this is done to ask Ian Rifkin to set up
	 pointers on tei\-c to point the first to the Oxford server
	 and the second to the Victoria one. BY
	 2015\-11\-30\.**

- Year\-end release
 
	
	- Pure
	 ODD
	
	- Processing Model Documentation
	
	- TEI
	 Simple
	
	- Consensus: Release when ready but would be
	 preferable to release Pure ODD and PM
	 together.

- Git / GitHub tutorial?
 
	
	- Too many labels on
	 GitHub. **Action on RV to review, report to
	 council, and clean up (or mentor new council member).
	 Between election and Jan? Or do we feel it’s needed sooner?
	 By 2015\-12\-25**

- Ticket Review
 
	
	- BUGS










 Monday 26 October, 09:00–17:00
 
 venue: [L'École normale supérieure de
 Lyon](https://www.google.com/maps/place/ENS+de+Lyon+-+Site+Descartes/@45.7411221,4.8316472,15z/data=!4m2!3m1!1s0x47f4ea2eb874b39d:0x3138a4e7dc6840c5), 
 Institut
 français de l’Éducation, meeting room 3 ([conference venue page](http://tei2015.huma-num.fr/en/venue/))


09:00–12:30 Ticket Review


12:30–13:30: Lunch (delivered)


13:30–17:00: Ticket Review




 Tuesday 27 October 
 
 HACKING DAY: Some TEI Council members sat in a computer room at ENS and worked on
 their tickets and other TEI\-related activity.




 Wednesday 28 October, 09:00–12:30
 
 venue: ENS again; guests (listed above) present


from 9:15



- Round of introductions

- HC introduces minutes document and general council workflow

- Tickets
 
	
	- Vote on @source in
	 att.global.responsibility carried in favour against all sensible
	 reason.

- Stylesheets tickets
 
	
	- **Action on
	 all**: Please look at Stylesheets issues and choose a ticket
	 or two by 2015\-11\-08; those tickets not assigned will be handed out
	 at random (to MH, JC, SB, LB, RV, PS, HC, SM, keeping in mind those
	 that have already taken tickets) by Chair on or about
	 2015\-11\-09\.

- TEI Simple
 
	
	- **Action on all**:
	 Read docs pointed at below by 2015\-11\-12, and if you don’t want to
	 actually edit it send comments to list or LB.
	
	- PM stuff:
	 [http://htmlpreview.github.io/?https://github.com/TEIC/TEI\-Simple/blob/master/tei\-pm.html](http://htmlpreview.github.io/?https://github.com/TEIC/TEI-Simple/blob/master/tei-pm.html)
	 (for the \-\-summaryDoc version or for the full odd version see) [http://htmlpreview.github.io/?https://github.com/TEIC/TEI\-Simple/blob/master/tei\-pm.odd.html](http://htmlpreview.github.io/?https://github.com/TEIC/TEI-Simple/blob/master/tei-pm.odd.html)

- Pure ODD
 
	
	- Main job left is getting the display
	 to look right, which is on HC.
	
	- LB asks that people check
	 out the branch and test things

- Next Release
 
	
	- Year end or wait until Simple\-PM
	 and Pure ODD are ready?
	 
		
		- Test suite for
		 processing model needs to be understood: we would like to
		 ensure there is a test suite that properly exercises the
		 structures and capabilities of the PM
		
		- JC
		 believes that SPQR built these tests into the development of
		 Simple. The [https://github.com/TEIC/TEI\-Simple/blob/master/build.xml](https://github.com/TEIC/TEI-Simple/blob/master/build.xml)
		 has a ‘pm’ target (as does the Makefile) which runs a series
		 of test files through the PM.
		
		- Action: JC to
		 make a branch off of LB’s pureODD branch, add new tests
		 there.

- anyXML
 
	
	- Guidance on this problem belongs to the
	 tagdocs chapter (specifically, a new para at the end of [http://www.tei\-c.org/release/doc/tei\-p5\-doc/en/html/TD.html\#TDeg](/release/doc/tei-p5-doc/en/html/TD.html#TDeg))
	 , perhaps using the svg: example, linked to from a note in the
	 header chapter (re: xenoData where the problem could conceivably
	 arise, whereas egXML is a more likely locus for the
	 problem.)
	
	- explanation should include a sample of
	 Schematron that can be used for ID uniqueness
	 checking

- Meeting adjourned 11:31Z, with Council expressing its best wishes to
 Sebastian Rahtz and his family





