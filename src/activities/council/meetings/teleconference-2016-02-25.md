---
title: "Teleconference 2016-02-25"
creator: TEI Council
date: 2016-02-25
---
# Teleconference 2016-02-25




 14:00 UTC
 
 Present
 
 * Elisa Beshero\-Bondar (EBB)
* Hugh Cayless (HC)
* James Cummings (JC)
* Magdalena Turska (MT)
* Elli Mylonas (EM)
* Peter Stadler (PWS)
* Lou Burnard (LB)
* Syd Bauman (SB, \~14:20\)
* Martina Scholger (MS)
* Raff Viglianti (RV)


Apologies
 
 * Stefan Majewski (SM)



 Agenda:
 
 
 Processing Model and Simple
 
 
- <http://teic.github.io/TEI/> has
 current state of procmod branch

- Does this go in 3\.0\.0 or wait?
 
	
	- go ahead for Processing Model elements
	
	- Simple: wait until later release
	
	- Pending meeting between MT, LB, and JC this weekend; they will report back
	 and we will decide how to proceed
	 
		
		- Raff will test and write a long feedback e\-mail on Fri. prior to
		 meeting
		
		- there is some introductory material (leaning more towards eXist\-db
		 implementation, but may be helpful [http://showcases.exist\-db.org/exist/apps/tei\-simple/doc/documentation.xml?odd\=documentation.odd](http://showcases.exist-db.org/exist/apps/tei-simple/doc/documentation.xml?odd=documentation.odd))
	
	- review emails and outstanding questions on the subject
	
	- TEI can be agnostic as to implementation of it, merely provide the elements
	 to do so, trying not to limit things too much prematurely (eg being cautious
	 with closed value lists and similar).
	
	- Some are already using it in production, but limited scope of application
	 (see [http://showcases.exist\-db.org/exist/apps/Showcases/index.html](http://showcases.exist-db.org/exist/apps/Showcases/index.html) and EEBO
	 \& Shakespeare’s Plays app linked from there)





 Release 3\.0\.0 ([https://github.com/TEIC/TEI/milestones/Guidelines\-3\.0\.0](https://github.com/TEIC/TEI/milestones/Guidelines-3.0.0))
 
 
- Blockers other than Jenkins building master ([\#1411](https://github.com/TEIC/TEI/issues/1411))? Anything missing
 from the milestone?
 
	
	- something about P5 now using pure ODD passim et seriatim would be nice
	
	- What's the state of the documentation? 
	 
		
		- integration of tutorial with description
		
		- James writing up a new ODD documenting common things people do in
		 customising which will also exemplify some of the new Pure ODD features.
		 He’ll be making this into a blog post with links to ODD and generated
		 documentation.
		
		- Lou has teaching materials; as have Syd and Julia
		
		- Everyone review the ODD chapter!
	
	- <https://github.com/TEIC/TEI/issues/539> (annotatedU) and <https://github.com/TEIC/TEI/issues/511> really need to be dealt with in
	 3\.0 (see [https://drive.google.com/file/d/0B0acbcG32rCuLWxVUFNoRjhnbTQ/view?usp\=sharing](https://drive.google.com/file/d/0B0acbcG32rCuLWxVUFNoRjhnbTQ/view?usp=sharing)
	 \-\- will go away) 
	 
		
		- Lou looks at the tickets 539 and 511 and document, decides if ticket
		 should be green.
	
	- Do we expect any Roma oddities when switching to PureODD?
	 
		
		- HAC: I’d be surprised if there weren’t something! It should just work
		 since uses underlying updated stylesheets. But uploading a Pure ODD might
		 cause problems (at present, attribute datatypes don't appear correctly
		 because underlying stylesheet library needs updating)
		
		- Roma would give old\-style ODD: doesn't know how to produce the content
		 model
		
		- Roma just lets you change classes; must use an existing content
		 model
		
		- need to replace current eXist db of P5
		
		- List of debian packages: [https://docs.google.com/spreadsheets/d/1w3ObgtqxpwYLrfaF\-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit\#gid\=0](https://docs.google.com/spreadsheets/d/1w3ObgtqxpwYLrfaF-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit#gid=0)
		
		- What to do with Roma and oXgarage: big discussion for next
		 face\-to\-face
		
		- oXgarage stylesheets: are they updated on new release automagically?—JC
		 isn’t sure but thinks they might use local ones. JC thinks the
		 tei\-install.sh script can install the release of guidelines in right place,
		 but also be used to update Roma. While tei\-database\-rebuild.sh updates the
		 eXist database used by Roma. JC thinks oXgarage has to be updated manually.
		 But this needs to be checked. JC has added a fork of sebastian’s OxGarage
		 repo to the TEIC organisation on github. Action on $releaseTechnicians:
		 Check before release whether scripts are up to date and how each part gets
		 updated with new stylesheets and guidelines.
		
		- Can we continue to support debian packages? Action on SB by 2016\-02\-28:
		 ask Stefan.
		
		- SB asked about <https://github.com/TEIC/TEI/issues/1331>
			
			- JC and others had commented on council list.

- Choose a date \& release technician
 
	
	- there are other roles involved such as ‘debian package maintainer’ who
	 should be doing these things? It is noted that SM (not present) was last looking
	 at debian package creation and management.
	
	- Release technicians: Syd and Elisa on March 22nd with a freeze date of
	 Tuesday March 8\.

- Release documentation / procedures has had some updating and certainly needs
 more [http://www.tei\-c.org/Activities/Council/Working/tcw22\.xml](/Activities/Council/Working/tcw22.xml)

- Should freeze be delayed a bit to see outcome of LB/MT/JC Processing Model
 documentation discussion?
  (Consensus: Yes)

- Builds: need a release X.X.X build and a master build for both TEI and
 Stylesheets.

- Action on
 HC: Make the release branches or help release technician to do so, etc.

- Action on HC: after we have release branches: tell Martin what
 we're planning re release and Jenkins







