---
title: "TEI P5 version 2.2.0 is released!"
date: "2012-10-26"
author: "theteiadmin"
permalink: "/news/2012/10/26/tei-p5-version-2-2-0-is-released/"
tags: ["News"]
---



Dear TEI Community,


TEI P5 version 2.2.0 (Codename: Primrose Path) is now available from all the usual sources, such as the TEI-C website and SourceForge. The debian packages and TEI-C XSL will be updated soon. This release introduces both textual and schema-related changes, mostly based on bug and feature request tickets submitted to SourceForge by the TEI community. If you notice anything that has changed in error, or want to submit additional changes, please do so on the <http://tei.sf.net/> website.


We have continued in our aim of opening up the release process to as many different people on Council and in this case Piotr Bański (Institut für Deutsche Sprache in Mannheim and Institute of English Studies at the University of Warsaw) was the release technician. Able assistance was also given by Martin Holmes (University of Victoria) who updated the oxygen-tei package. As always this has produced a set of notes for how to improve the release process that will be fed back into [http://www.tei-c.org/Activities/Council/Working/tcw22.xml](/activities/council/working/tcw22.xml) for future releases. The greatest thanks are due not only to the TEI Technical Council for undertaking the work, but the TEI community for submitting tickets!


A text version of the release notes is below, but a version (with links to tickets) is available at: [http://www.tei-c.org/release/doc/tei-p5-doc/readme-2.2.0.html](/release/doc/tei-p5-doc/readme-2.2.0.html)


Many thanks to all,


James Cummings<br/>
(TEI Technical Council Chair)


====<br/>
TEI P5 version 2.2.0 release notes


This version of the TEI introduces new features and resolves a number of issues raised by the TEI community. As always, the majority of these changes and corrections are a consequence of feature requests or bugs reported by the TEI community, using the SourceForge tracking system. If you find something you think needs to change in the TEI Guidelines, schemas, tools, or website, please submit a ticket at <http://tei.sf.net/> for consideration.<br/>
Since the last release (16 June 2012), the Council has closed at least 82 tickets entered in the SourceForge tracking system, from 25 different members of the TEI community (10 more than in the previous release!). Full details may be found at <http://tei.sf.net/> and an active list sorted by ticket number is also available. Ticket numbers are also referenced in the subversion ChangeLog, as usual, which records around 490 commits during this period.


1  Schema Changes


Some of the important or interesting schema-related changes include:<br/>
* After much discussion, the datatype and usage of the global attribute @rend was clarified. In response to 3519866, a new global @style attribute was created to allow local description of the source document’s appearance using a formal style definition language such as CSS<br/>
* Increasingly, the Technical Council is attempting to provide more consistent Schematron constraints for additional validation (3557497, 3548772, 3064757)<br/>
* A new <listApp> element was added, along with other improvements for recording critical apparatus (3497356)<br/>
* The model.glossLike class was subdivided, to ensure that only members such as <desc>, <precision>, or <equiv> appear in the content of appropriate elements. (3565137)<br/>
* The @scheme attribute on <keywords> was made optional (3554050)<br/>
* A new att.milestoneUnit class was created to ensure consistency in use of @unit (3537452)<br/>
* Tighter restrictions were imposed on the content model of <gi> and <att> (3535672)<br/>
* The content model of <table> was changed to allow model.divBottom (footers, etc.) at the bottom (3531957)<br/>
* The <idno> element is now allowed inside <person> and <place> (3440977)<br/>
* The <lg> element, after much debate, is now allowed inside <p> (3532022)<br/>
* In the content model of <editionStmt>, explicit reference to <respStmt> has been replaced with model.respLike for greater flexibility (3439587)<br/>
* <biblStruct> can now be used for patent citations: the <monogr> element now allows an <authority> and an <idno> but no <title>, and <imprint> now allows <classCode> and <classRef>. (3513147)


2  Textual Changes


Some of important textual changes in the Guidelines include:<br/>
* Correction of typos, clearer explanations, or provision of new examples in various sections of the Guidelines: (e.g. 3576189, 3573757, 3572375, 3571101, 3561766, 3553911, 3552973, 3549757, 3547934, 3545113, 3539329, 3538141, 3537574, 3536504, 3535717, 3522019, 3521714, 3521288, 3519772, and others)<br/>
* Standardization of use of em and en dashes in the Guidelines (3471119)<br/>
* Clarification on the use of XPath to point to readings from an external apparatus (3497369)<br/>
* New section (23.1) added referencing the application/tei+xml IANA-registered media type (3565152)<br/>
* Greater clarification of ISO language codes and consistency in our recommendations and use of @xml:lang (3454803)


3  Environment Changes


The TEI Technical Council continually strives to improve the underlying infrastructure used to edit, store, test, and publish the outputs it creates. During this release cycle some of these infrastructure changes include:<br/>
* The TEI source code now references its component parts by means of XInclude rather than by using system entities (3547869)<br/>
* TEI ODD processing now supports local modification of classes, so an element can claim membership of an attribute class (e.g. att.typed) while still redefining an element provided by the class locally (e.g. the @type attribute’s value list)<br/>
* The HTML generated from the Guidelines now uses relative links to make browsing them in the Jenkins continuous integration servers easier (3556966)<br/>
* Various improvements to ODD processing, improvements to the TEI build infrastructure, especially in the testing framework and Schematron constraints<br/>
* The marking of TEI P4 as ‘deprecated’ in oxygen packages<br/>
* Improvements to the handling of exemplars during the build process<br/>
* Provision of additional outputs (e.g. JSON and JSONP see release/xml/tei/odd/) as default release items<br/>
* Many changes have been made to the TEI-C Stylesheet library to support these changes, fix reported bugs, and provide new features


4  New release of TEI Lite


An updated version of the ever-popular TEI Lite tutorial has been included with this release in the Exemplars directory. This new version has been updated to take advantage of the many new features introduced in the TEI since its first appearance in 1996, but has not changed in its original design goal, of aiming to specify the 50 or so TEI elements likely to be useful to 90% of TEI projects. There are no plans to update this tutorial, but we will continue to check that it remains compatible with future releases.


Sincerely,


James Cummings<br/>
Chair of the TEI Technical Council



—<br/>
Dr James Cummings, [James.Cummings@it.ox.ac.uk](mailto:James.Cummings@it.ox.ac.uk)<br/>
Research Support, IT Services, University of Oxford



