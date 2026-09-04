---
title: "Release of TEI 1.9.0"
date: "2011-02-26"
author: "theteiadmin"
permalink: "/news/2011/02/26/release-of-tei-1-9-0/"
tags: ["News"]
---



The new release of the TEI Guidelines in all its forms is now complete. You can find it by:

* visiting the TEI Web site and reading the Guidelines at[http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html](/release/doc/tei-p5-doc/en/html/index.html)
* using the schemas etc direct from the web site eg [http://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_all.rng](/release/xml/tei/custom/schema/relaxng/tei_all.rng)
* using Roma at [http://www.tei-c.org/Roma/](/roma/)
* downloading a zip archive from Sourceforge (<https://sourceforge.net/projects/tei/files/TEI-P5-all/>)
* subscribing to Ubuntu/Debian packages via [http://tei.oucs.ox.ac.uk/teideb/](http://packages.tei-c.org/deb/)
* checking out the source files using Subversion from Sourceforge (see <https://sourceforge.net/scm/?type=svn&group_id=106328>)

The nice folks at oXygen will include it all in their next release, I am sure.


The release notes can be found at [http://www.tei-c.org/release/doc/tei-p5-doc/readme-1.9.html](/release/doc/tei-p5-doc/readme-1.9.html)


Please note that this is an interim, largely procedural, release, and has no major additions or changes in functionality.  The TEI Council has been working to simplify the maintenance and releasing of the Guidelines, and it seemed sensible to clear the decks now and resolve any problems in implementation. This could mean another procedural release if something goes hideously wrong :-{


The TEI Council meets in April and expects to make a release after that which addresses some of the backlog of feature requests.


There are two important points to bear in mind:


a) as discussed a few weeks ago, the implementation of global attributes has changed. Each element is now explicitly a member of the att.global class. If you have an ODD which adds new elements in the TEI namespace, it will no longer have global attributes (xml:id, rend etc) added by default.


b) the web Roma tool has now switched to pass all processing to the OxGarage server, which runs a later (improved) set of ODD-processing stylesheets. You may notice changes (I hope not!). The XSLT 1.0 ODD-processing stylesheets are now removed from the Stylesheets package as they will no longer give the right results.


The 1.9.0 release of the TEI is accompanied by release 5.50 of the TEI Stylesheets package and release 4.3 of Roma. These are intimately connected, because of the global attributes, so don’t attempt to mix and match unless you know what you are doing.


—<br/>
Sebastian Rahtz     <br/>
Head of Information and Support Group, Oxford University Computing Services<br/>
13 Banbury Road, Oxford OX2 6NN. Phone +44 1865 283431



