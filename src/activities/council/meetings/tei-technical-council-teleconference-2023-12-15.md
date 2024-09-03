---
title: "TEI Technical Council Teleconference, 2023-12-15"
date: 2023-12-15
---
# TEI Technical Council Teleconference, 2023-12-15
### Meeting times


6:30am PST / 9:30am EST / 2:30pm UTC / 3:30pm CET
### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Hugh Cayless (HC)
* Patricia O'Connor (TOC)
* Martina Scholger (MS)
* Joey Takeda (JT)
* Raff Viglianti (RV)


### Special Guests (new Council members starting terms January 2024\)


* Gustavo Riva (GR)
* Torsten Roeder (TR)


### Apologies/Not Present


* Elli Bleeker (EB)
* Nicholas Cole (NC)
* Magdalena Turska (MT)
* Sabine Seifert (SS)


Next Meetings
-------------


* Polls on Slack to determine dates from January 2024 onward
* Still need to schedule the date and time for virtual F2Fs


Council Chair Elections
-----------------------


* Supposed to elect the chair at this meeting so the new chair can start in January. (Usually the nominations are in November and elections are in December).
* **EBB** accepts nomination to continue as Council chair. Yay!
* If anyone is interested in being chair in the future, let EBB know as there is a significant amount of mentoring involved for the role.


GIS working group and [\#1474](https://github.com/TEIC/TEI/issues/1474)
-----------------------------------------------------------------------


* JT volunteers to lead a working group investigating TEI and GIS, to see if we can update the TEI to better handle GIS applications
* TEI could be more supportive of GIS applications. Concerns regarding how far the TEI has to go to accommodate this since technologies keep changing.
* How much geographic information does the TEI have to represent while staying interoperable (eg KML, geoJSON, handling planetary projections/models, dateline representation, etc)
* Reminiscent of the annotation working group discussion which resulted in the creation of an implementation to enable people to go back and forth between TEI and other standards.
* In addition to specifying the graphical information that the TEI can accommodate, we should also provide recommendations for encoding the other kind of graphical information that the TEI does not represent.
* **Action on JT** to choose the GIS/TEI work group. There are MEI people also interested in the GIS/TEI work group, JT will reach out to those interested.
	+ JT will draft charge in Council's Google Drive and wll workshop it together.'
	+ Council will issue our charge by January.
	+ EBB will formally appoint work group when JT's ready


ODD havoc and [Stylesheets \#645](https://github.com/TEIC/Stylesheets/issues/645)
---------------------------------------------------------------------------------


* Deprecation issue within att.calendar, added a new desc with deprecation warning but schema outputted an error for the English warning (multiple descs in the same language are not allowed, so we introduced an exception).
* Need to narrow down why it is happening.
* Potential solution \- change the Schema to stop blocking the \<desc\>
* To avoid this issue in the future \- move away from using \<desc\> for deprecation warnings and using \<remark\> or \<note\> instead to solve the issue.
* SB suggests to remind MH to move forward on this ticket, his input is needed on the ODD.
* EBB: Would fixing it require a patch release? The process may take enough time to keep us occupied until the next official release.
* SB: Patch release might be a good idea for fixing this given the number of users affected. HBS: Most of the users actually use Oxygen for this, after the recent Oxygen update they should not be affected. It’s only the ‘bleeding edge’ users that will be affected.
* SB someone should test changing gt to \> to see if that works. (simplest fix). Still does not resolve the multiple \<desc\>s issue though.
	+ JT provided the link to to the XPath spec defining the difference between the \`gt\` operator and the \`\>\` operator (often written \`\&gt;\`): [https://www.w3\.org/TR/xpath\-31/\#id\-comparisons](https://www.w3.org/TR/xpath-31/#id-comparisons)
* We’ve used this deprecation mechanism for years, so what has prompted this issue?
	+ We’ve recently introduced the possibility of multiple English \<desc\>s because we use them for deprecation warnings.
	+ Multiple \<desc\> in the same language should be allowed as long as the \`@type\` is different.
* We should compare \<desc\>s by type, not try to explicitly avoid the Schematron just for deprecations.
* Is \<desc\> the appropriate element for depreciation warnings or is \<remark\> the more semantically appropriate element
	+ It would not be subjected to the same constraints as \<desc\>


Next TEI Stylesheets meeting?
-----------------------------


* Move to the next week to the 4th January?
	+ Try the new time?


Contextless Schematron, [\#2510](https://github.com/TEIC/TEI/issues/2510)
-------------------------------------------------------------------------


* In every case where there is an \<sch:assert\> or \<sch:report\> the Schematron should be wrapped in an \<sch:rule\> (ie. schematron rules should be present in all cases).
* RV: not a deprecation scenario as we are adding a requirement not removing something.
* If we add this then there is the issue of backwards compatibility with older ODDs, users will get errors.
* HBS: Both current Stylesheets and ATOP implementation will accommodate this without producing errors. There will be new ODDs fulfilling the requirements, so there is no need to change the current Stylesheets.
* JT: Write a script to transform the contextless ODDs to make it compliant with the rule?
* Two options:
	+ Embed Schematron QuickFix in that removal rule, but we should test whether and how to implement Schematron Quick Fixes in the context of a TEI ODD. Issue with namespaces that could be problematic and difficult to do in SQF. For more on namespace handling, see : [http://dh.obdurodon.org/schematron\-intro.xhtml](http://dh.obdurodon.org/schematron-intro.xhtml).
	+ Alternatively: Create an XSLT for transforming context\-less rules in ODDs
* **Council decision:** Do not deprecate on [\#2513](https://github.com/TEIC/TEI/pull/2513), and create a new ticket for a Schematron QuickFix or an XSLT pgm to help users comply with new rule.


Test Suite: task force or big ticket?
-------------------------------------


* HBS: Started to investigate what is being tested in the Test/ and Test2/. There are two options: Option one was to use the Stylesheets meetings for this since it is pressing and option two is to create a specific task force to work on this issue separately.
	+ What is being tested in Test/ ?
	+ Of that, what is *not* being tested in Test2/ ?
	+ Do we want them tested, if so put into Test2/ .
* Should be a specific file for each test and renaming the test file should include meaningful names to indicate the function/purpose of each test.
* **Action on HBS** to open a Stylesheets issue for this.


Header comments (SB)
--------------------


* We have header comments in every source file the vast majority of which take 7 lines of the file, SB wants to condense them to 1 line to make it shorter and easier to read.
* However, XML software that was used to do this in a branch (in this case xmlstarlet) introduced changes such as omitting whitespace used for improving the legibility of attribute values.
* It is much faster to write such a script in xmlstarlet than Perl.
* JT suggests that maybe XSLT \<xsl:output indent\=”no”/\> would avoid whitespace change in attr value.
* Could there be a simple fix by checking the settings of starlet?
	+ No. The XML specification *requires* that any whitespace character in an attribute value be converted to U\+0020\. Thus anything that performs XML parsing will lose newlines within (and usually between) attribute values.
* Alas, our pretty predicates... :\-/
* Unfortunately, it looks like it is necessary to repeat the process in Perl.
* HBS: In git: Revert all changes except for the first lines in Git. **Action on HBS:** to find the command to commit certain lines but revert all the other lines. It is possible in Studio Code.
* SB notes that there are only four comments other than our boilerplate header comments that are not within the outermost element (i.e., are children of the document node). Can we move these to be children of the outermost element? Would likely make the Perl program easier if we go that route.


Vale Atque Ave, HC!
-------------------


* **Farewell to HC!** But he is still in range.
* Website redesign: We will summon HC in January to report on the TEI website task.
