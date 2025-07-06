---
layout: page.njk
title: "TCR03: Report of the TEI Council to the Members Meeting 2005"
---
# TCR03: Report of the TEI Council to the Members Meeting 2005




 Report of the TEI Council activities to the Members Meeting 2005
 
 
 Executive summary
 
 The TEI Council is in charge of overseeing the technical development of the TEI
 Guidelines. As in the past, during the current year, all energy was devoted to develop
 P5, slated to become the next major revision of the Guidelines. While in the past
 development took place mainly in workgroups charged by the Council, this year the
 Council took on more and more tasks by itself and did not charge any new workgroups.
 The Council held one face\-to\-face meeting with all its (available) members and
 another meeting, dubbed the "class meeting", of interested members to tackle the long\-due
 overhaul of the structure of the TEI class system. The Council also conducted its
 regular business through telephone conferences, a mailing list and through an IRC
 channel.


The highlights of the TEI development work in the period since the previous Members
 meeting can be summarized as follows: 


TEI releases at Sourceforge* Starting in January 2005, the TEI is issuing development releases of its
 upcoming P5 revision at the TEI's project file release area on Sourceforge (see [Project:
 Text Encoding Initiative: File List](https://sourceforge.net/project/showfiles.php?group_id=106328)). The TEI Council intends to have point
 releases of all TEI packages at least once every 6 months.
TEI Workgroups quick update* The 
 Character Encoding Workgroup, chaired by Christian Wittern, the
 
 Metalanguage Workgroup, chaired by Sebastian Rahtz, the
 
 Manuscript Description Workgoup, chaired by Matthew Driscoll and the
 
 Migration Workgroup, chaired by Chris Ruotolo all completed their
 tasks in early 2005\. The Council expressed its thanks to the chairs and members of
 these workgroups.
Review of the Guidelines* The Council started an internal review process with the aim to bring the prose
 of the Guidelines up\-to\-date with respect to the changes in the schema. This is an
 ongoing effort.


Information about the status of P5, how to use it and much more is available at the
 [P5 section](/P5/) of the TEI website.





 Work of the Council
 
 As indicated above, the work of the Council focused this year on ironing out the many
 messy details that will hopefully provide a stable infrastructure for the future
 development of the TEI schema. This whole process can be likened to a restoration
 project
 of a venerable piece of architecture: When I grew up in the small southwest German
 town of
 Tübingen, conservation and re\-creation of the medieval town centre was a major project
 there. This resulted in many a half\-timbered house being completely redone from within
 without actually taking down the structure, but resulting in a totally new interior,
 with
 the facade and most exterior face\-lifted, but essentially the same as before. Something
 similar is happening at the moment with P5, which will be a similarly re\-furbished
 version of P4, with all the amenities a modern inhabitant does expect, but without
 sacrifying the time\-proven and time\-honored facade.


For the purpose of this report, I will focus on three areas that witnessed
 particular intensive development this year: 


* Datatypes for TEI attributes
* The ODD system to describe TEI schemas
* A renewal of the TEI class system



 Datatypes for TEI attributes
 
 One of the major goals for TEI P5 has become the systematic and thorough removal of
 plain CDATA attribute values. In the new P5 world, attribute values will be of a defined
 datatype wherever possible, while many of P4 CDATA attribute values that used to hold
 textual values (for example @sic on 
 corr) have been moved to element nodes of
 their own. This became necessary to overcome limitations inherent to the XML
 recommendation with respect to indicating a language for attribute nodes and markup
 contained in attribute nodes. 


It became thus necessary to review all attributes on all elements defined within the
 TEI scheme and decide what datatype to use for them. The document used as a base for
 these decisions, [ED W 90](/Drafts/edw90.html)
 is available, as well as the [table of attribute
 values](http://dev.stg.brown.edu/staff/Syd_Bauman/edw90.php). TEI members are encouraged to look at these documents and give feedback to
 the Council or Editors. 




 The ODD system to describe TEI schemas
 
 The 
 ODD system refers to the new chapter in P5 [Documentation Elements](/release/doc/tei-p5-doc/en/html/TD.html),
 which describes a module of the TEI schema that can be used to document and declare
 XML
 elements and element classes. It is also used in the TEI Guidelines to describe the
 TEI
 schema itself and can, with the help of an 
 ODD processor (which is known under the name 
 roma, available both as a [web service](/Roma) and as a shell script for UNIX\-like environments from Sourceforge) be used to
 generate machine readable schemas in DTD, RNG or XSD format, as well as the accompanying
 documentation. 


Work of the Council in this area concentrated on the generalization and abstraction
 of
 the whole system, as well as its processor, to enable it to serve as an easy and
 convenient tool to describe TEI customizations and to make sure that it will be
 extendable to support future multilingual versions of such customizations.




 A renewal of the TEI class system
 
 Work on the ODD system made it clear that the whole TEI class system, which was build
 to support the old 
 Chicago Pizza Model, needed a complete overhaul.
 Members of the Council devoted a whole meeting to this question and considered both
 general rules for creating and naming classes as well as implications of this for
 the
 elements of selected modules. The work done so far is reflected in the most recent
 release, but it has to be considered experimental and further experience is required
 here.



Other work items
 
 Apart from the major issues mentioned above, many issues
 of smaller scale have been tackled as well. This includes
 [a proposal of a group of scholars](https://www.tei-c.org/Vault/Workgroups/CE/cew12.pdf) working with Sanskrit
 texts, which will allow multiple conflicting analytic
 descriptions of a text, work on aligning the various
 elements and recommendations for bibliographic records to
 modern practice and an attempt to map metadata standards to
 the elements in the TEIHeader systematically (this has been
 taken care of by Natasha Smith and John Walsh). 


The Council also worked with vendors of XML editors willing to include TEI schemas
 and stylesheets with the products and developed a recommended directory tree structure
 for the TEI deliverables, the canonical location for this is http://www.tei\-c.org/release/
 and is committed to the continued maintenance of its bundle tei\-emacs, available from
 the [TEI Software page](/Software).





 Status of the Workgroups charged by the Council
 
 
 Stand\-Off Markup Workgroup
 
 Chaired by David Durand, charged May 2002
Progress on this workgroup has been slow, and there remain many things yet to do.
 The
 work is carried on by email list and conference call. Energetic volunteers are
 encouraged to contact the chair if they want to participate.


A list of documents produced by this workgroup is available in the [SO section of the Activities](/Activities/SO/) area on the TEI website.




 ISO/TEI Workgroup on Feature Structures
 
 TEI Liaison: Lou Burnard, charged March 2003
This is a joint activity of the TEI together with the ISO TC37/SC4 workgroup on Feature
 Structures. The workgroup met in Warszaw Aug. 2005 , where it was reported that the
 results of their work is now officially a draft international standard, and that it
 received almost unanimous support. Much of the credit goes to the chair of the ISO
 workgroup, Kiyong Lee, who shepherded this chapter through the sometimes daunting
 challenges of ISO procedure. There was also agreement that there should be a new work
 item for ISO to do a revision in a similar way for the feature system declaration.
 This
 will be part 2 of ISO 24610\. This might start again with the TEI chapter as a basis,
 but
 other ontology definition languages, automatic validation tools, etc. will also be
 investigated. Lou Burnard will continue to be the TEI liaison. 


A list of documents produced by this workgroup is available in the [FS section of the Activities](https://www.tei-c.org/Vault/Workgroups/FS/) area on the TEI website.




 Collaboration of the TEI Council and the W3C ITS working group
 
 TEI Liaision: Sebastian Rahtz
Sebastian Rahtz has been invited to join the W3C workgroup on internationalization
 of
 tag sets, which is chaired by Richard Ishida. The group held a meeting in Nice in
 September 2005\. For more information about this effort, please see [the website of the WG.](http://www.w3.org/International/its/)




 Workgroup on Physical Bibliography
 
 Chaired by Murray McGillivray, charged May 2004
The chairing of this group was handed over to Murray McGillivray in an attempt to
 refocus the work. The council has however given higher priority to other tasks that
 needed its attention so no progress has been made here. 





