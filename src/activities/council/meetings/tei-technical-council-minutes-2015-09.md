---
title: "TEI Technical Council Minutes 2015-09"
creator: TEI Technical Council
date: 2015-09-24
---
# TEI Technical Council Minutes 2015-09




 Teleconference 2015\-09\-24 14:00 UTC
 
 Present
 
 * Hugh Cayless (HC)
* James Cummings (JC)
* Lou Burnard (LB)
* Fabio Ciotti (FC)
* Raffaele Viglianti (RV)
* Syd Bauman (SB)
* Stefanie Gehrke (SG)
* Martin Holmes (MH)
* Peter Stadler (PWS)
* Paul Schaffner (PFS)


Apologies
 
 * Stefan Majewski (SM)



 Agenda
 
 
- F2F in Lyon
 
	
	- Sun 25 October: Mama Shelter (From 9am)
	
	- Mon 26 October: [Ecole Normale Superieure](http://www.ens-lyon.eu/informations-pratiques/acces-a-l-ens-de-lyon--81546.kjsp?RH=ENS-LYON-FR)
	
	- Wed 28 October: [ENS](http://www.ens-lyon.eu/informations-pratiques/acces-a-l-ens-de-lyon--81546.kjsp?RH=ENS-LYON-FR)

- Releasing from GitHub: any blockers? 
 
	
	- JC will test creation of deb files. \[Done, to sign, needs @rahtz
	 passkey]
	
	- Upcoming Oxygen release 17\.1; should this block? MH is not keen on a
	 potentially risky release process that might result in the need for a rapid update
	 being perhaps taken up by the Oxygen folks in their release process. We don’t want
	 to force Oxygen to do a 17\.2 rapidly to fix our issues.
	
	- Need to release on SourceForge as well
	
	- PureODD is not merged yet
	
	- TEISimple depends on PureODD. Could it be rewritten using RelaxNG? Yes, it
	 could, but hopefully shouldn’t.
	
	- Date of freeze and release: Freeze should be October 1(?) and release around
	 8(?). This will be 2\.9 (because of the inclusion of \<xenoData\>). The
	 subsequent release which includes Pure ODD will be 3\.0\.
	
	- MH points out that we haven’t been checking the Stylesheets to see if all our
	 P5 changes are appropriately handled; and that the normal process involves SR
	 doing a Stylesheets release immediately after the P5 release; we’ll now have to do
	 that, and the process is not documented. JC will try to test the release script,
	 which is on the Oxford TEI server, to make sure it will actually run without e.g.
	 currently\-unknown passwords. JC notes that this should be built into a build
	 process somehow so it doesn’t depend on any particular server or person at
	 Oxford.

- What’s in / out of the next release?
 
	
	- \<xenoData\>: Yes.
	
	- TEI Pure ODD: Not ready.
	
	- TEI Simple infrastructure (processing models): Not ready.
	
	- block\-level apparatus — SB doesn’t think so; HC does!; Not fully tested?! HC
	 thinks this should be ready to go; there are virtually no changes required to the
	 existing prose, although JC suggests that more material be added. HC is planning
	 to add examples. Suggestion that some discussion of what is not allowed (e.g.,
	 head/name/app/rdg/div) should be included in addition to Schematron. SB posits
	 that generation of Schematron should be automated at build\-time, not static.
	 General agreement that he is right, but that this is a separate feature that
	 should not prevent release of block\-level \<app\>.
	
	- what else?
	
	- tweak of xml:lang language
	
	- removal of att.identified/@status
	
	- removal of: @degree from internal use
	 The degree construct becomes outdated on 2015\-11\-12: 
	 
		* Location:
		 /TEI\[1]/text\[1]/body\[1]/div\[21]/div\[1]/div\[2]/div\[4]/specGrp\[1]/elementSpec\[1]/attList\[1]/attDef\[1]
		* WARNING: use of deprecated attribute — @degree of the precision element will
		 be removed from the TEI on 2015\-11\-12\.
		* Location:
		 /TEI\[1]/text\[1]/body\[1]/div\[21]/div\[1]/div\[2]/div\[4]/specGrp\[1]/elementSpec\[1]/exemplum\[1]/egXML\[namespace\-uri()\='http://www.tei\-c.org/ns/Examples']\[1]/precision\[namespace\-uri()\='http://www.tei\-c.org/ns/Examples']\[1]
		* WARNING: use of deprecated attribute — @degree of the precision element will
		 be removed from the TEI on 2015\-11\-12\.
		* Location:
		 /TEI\[1]/text\[1]/body\[1]/div\[21]/div\[1]/div\[2]/div\[4]/specGrp\[1]/elementSpec\[1]/exemplum\[1]/egXML\[namespace\-uri()\='http://www.tei\-c.org/ns/Examples']\[1]/precision\[namespace\-uri()\='http://www.tei\-c.org/ns/Examples']\[2]

- Release date and personnel
 
	
	- 2\.9\.0
	
	- Any problem with sticking with original dates? freeze Thu 10\-01 release Thu
	 10\-08 / Fri 10\-09\. Some danger of collision with oXygen, but this will be
	 minimized by deferring inclusion of PureODD and Simple; and Martin will talk to
	 oXygen to try to preclude even this risk.
	
	- Available: Martin, Raff, Hugh, Peter,Lou , Syd (more on Fri than Thu)

- Next steps with migration
 
	
	- Freeze on SF Feature Requests \& Bugs \+ Migration of FRs and Bugs to GitHub
	 
	 
		
		- RV to do this during release freeze week.
		
		- Look at the TEI website menu structure (hard\-coded in OpenCMS) and the
		 equivalent menu\-constructing stuff for the Guidelines; we should probably add
		 GitHub links alongside SF links soon, then retire the latter at release
		 time.






