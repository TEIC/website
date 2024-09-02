---
layout: page.njk
title: "Teleconference 2016-11-17 14:00 UTC"
---
# Teleconference 2016-11-17 14:00 UTC





Present


* Hugh Cayless (HC)
* Syd Bauman (SB)
* Peter Stadler (PS)
* Martina Scholger (MS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)
* Elisa Beshero\-Bondar (EB)
* Elli Mylonas (EM)
* Lou Burnard (LB) joined at 14:15Z
* James Cummings (JC) joined at 14:19Z




Notes
-----



* Pre\-meeting discussion: MT searching for ticket on how a document declares what flavor
 of TEI it is; RV finds it: [https://github.com/TEIC/TEI/issues/564](https://github.com/TEIC/TEI/issues/564 "https://github.com/TEIC/TEI/issues/564")
* Meeting started at 14:03Z
* Council wishes HC a happy birthday
* Many leave between 15:00Z and 15:15Z.
* Meeting ended \~15:18Z. A few (HC, SB, RV, EB) remained and chatted:
	+ Should start thinking about hotels in Prague soon; action on HC to post a reminder
	 to everyone to do so
	+ We like Lou’s idea of a different name for anyElement/@include, but SB at least is
	 not keen on @require. How about @onlyFrom or @useOnly?




Agenda and minutes
------------------


* Naming "Simple" (see discussion from [previous meeting](https://docs.google.com/document/d/1YFW89NbqeSwXe3dNwtDjaSLqRJ10_K_Evorn8H-zR14/edit?usp=sharing "previous meeting"))
	+ JC: Simple\-Print seems easiest to me. Has benefit of partly maintaining current name
	 it is known by, and explaining it is only about Print.
	+ Suggestions include (asterisks indicate a ‘yes’ vote):
		- SimplePrint \-\*\*\*\-\-
		- simplePrint \*\*\*\*\-\*\*
		- simplePrinted \- \*\*\*\-
		- simple4printed \- \-\-\*\*\-\-
		- TEMPB \-\-\-\-\*\-\-
		- EMP \-\-\-\-\-\-\-
		- Bookish\-\* \*\-\-\*
	+ Lou changes name in the ODD, note that schema name is case sensitive.
	+ Decision is: simplePrint
* Release 3\.1\.0 remaining to\-dos:
	+ [https://github.com/TEIC/TEI/milestone/2](https://github.com/TEIC/TEI/milestone/2 "https://github.com/TEIC/TEI/milestone/2")
	+ anyElement: where to get namespaces/elements to exclude? Right now, from definition
	 of macro.anyXML, which is hacky.
		- Pure ODD vs. RelaxNG vs. DTD handle exclusions differently
			* Rename @include as @require
			* Example: See [https://github.com/TEIC/TEI/blob/dev/P5/Exemplars/tei\_allPlus.odd\#L101\-L106](https://github.com/TEIC/TEI/blob/dev/P5/Exemplars/tei_allPlus.odd#L101-L106 "https://github.com/TEIC/TEI/blob/dev/P5/Exemplars/tei_allPlus.odd#L101-L106")
			* Add @defaultExceptionNS attribute to \<schemaSpec\> and remove @reject/@except
		- Action on SB: write to SyncroSoft and see if we can get DTD compatibility mode turned
		 off by default
	+ SB still working on @minOccurs @maxOccurs
	+ JC: I think the global @source issue is important (even though I voted against it).
	 It is Green and agreed. I’ve just not got around to doing it. [https://github.com/TEIC/TEI/issues/536](https://github.com/TEIC/TEI/issues/536 "https://github.com/TEIC/TEI/issues/536") If I make the changes adding the new class etc., are there any volunteers to collaborate
	 and help sort out the inevitable jenkins/testing breakage?
	+ TEI Simple oxygen framework
		- How do we do it for TEI Lite or any other customization (if at all?)
		- What TEI Simple framework should contain:
			* TEI Simple document template
			* Transformation scenario following teisimple.odd
		- How should oXygen determine when to trigger TEI Simple framework (as opposed to default
		 TEI framework); related discussion at [https://github.com/TEIC/TEI/issues/564](https://github.com/TEIC/TEI/issues/564 "https://github.com/TEIC/TEI/issues/564") (This will be done in next couple weeks \-JC)
	+ [https://github.com/TEIC/TEI/issues/1492](https://github.com/TEIC/TEI/issues/1492 "https://github.com/TEIC/TEI/issues/1492") please have a look at the proposal (last comment)
	+ Current schedule: create release branch on Nov. 23, release on Dec 6\. Still viable?
* Face to Face: Prague, Charles U., Feb. 5\-7, meeting/workshop with local TEI on Feb
 8, XML Prague, Feb. 9\-11\. More details to follow, but those are the dates.
* Council Chair elections; [http://wiki.tei\-c.org/index.php/TEI\-Council\-FAQ\#How\_is\_the\_TEI\_Technical\_Council\_Chair\_elected.3F](https://wiki.tei-c.org/index.php/TEI-Council-FAQ#How_is_the_TEI_Technical_Council_Chair_elected.3F "http://wiki.tei-c.org/index.php/TEI-Council-FAQ#How_is_the_TEI_Technical_Council_Chair_elected.3F")






