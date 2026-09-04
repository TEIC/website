---
title: "P5 release 1.7 now available"
date: "2010-07-08"
author: "theteiadmin"
permalink: "/news/2010/07/08/p5-release-1-7-now-available/"
tags: ["News", "News"]
---



TEI P5 release 1.7.0  is now available from Sourceforge at <https://sourceforge.net/projects/tei/files/> and also online at  [http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html](/release/doc/tei-p5-doc/en/html/index.html)


This release introduces significant additional features to the way in which the ODD system for TEI customization may be expressed. The new features introduced allow a customization to be expressed by inclusion (specifying only the elements it requires) rather than by exclusion (specifying the elements which it does not require). They also permit specification of a particular version of the Guidelines as source for a schema.





Support for this entailed a number of changes, including definition of new attributes for <moduleRef>, and new elements <elementRef>, <macroRef> and <classRef> as well as revision to the prose of the relevant Guidelines chapters. Some clarification of the way the odd-to-odd transformation process works, for example when generating pattern prefixes for RelaxNG, was also necessary. The new features greatly simplify the process of generating user specific customizations, while retaining all the existing behaviours. In addition, the test suite has been revised and extended to check that the new facilities worked as intended. Expanded tutorial material for the revised system will be the subject of a Workshop to be taught at the 2010 General Meeting.


As usual, several minor clarifications and corrections were made to the wording of the Guidelines in response to Sourceforge tickets (e.g. 3025031 3025032 3025017 3010481 2989088 2982439 2942469 2965680 2981703 2982056) and discussion on Council and TEI-L mailing lists.


The work of the AFNOR group providing and correcting French translations and examples also continued; in particular during May and June substantial work on a new suite of French language examples was undertaken.


A small number of other minor changes are listed below in reverse date order:


*  2010-07-02 : add constraint to prevent <relateditem> supplying both a @target and some content (2728061)
*  2010-05-08 : add new source attribute and revise datatype of  existing version attributes for consistency
*  2010-05-06 : add new att.docStatus attribute class (2812634)
*  2010-05-06 : add <material> to att.canonical class (2811234)
*  2010-05-01 : rationalise and make consistent datatype of the @target attribute (2531384)
*  2010-05-01 : revised class memberships for consistency amongst elements which can appear within choice (2834505)
*  2010-04-30 : new attribute @points  added to att.coordinated to enable definition of non-rectangular zones in facsimile (2971316)
*  2010-04-30 : added <idno> to model.nameLike, thus permitting use of standard identifiers of various kinds in <person, <place etc. (2949985)
*  2010-04-30 : add <ref> wherever <title> is permitted in high level components of <biblstruct> (2976608)
*  2010-04-06 : make @url mandatory and scaling attributes optional for all graphic elements (2965521)



