---
title: "TEI P5 Guidelines version 2.8.0 released"
date: "2015-04-07"
author: "theteiadmin"
permalink: "/news/2015/04/07/tei-p5-guidelines-version-2-8-0-released/"
tags: ["News", "TEI Consortium", "TEI Council", "TEI guidelines"]
---



The TEI Consortium has released the TEI P5 Guidelines version 2.8.0 (Codename: Winking Petrarca). This release includes new elements and recommendations for the description of correspondence and resolves many community-submitted bugs and feature requests.


Our release technician was Raffaele Viglianti (Maryland Institute for Technology in the Humanities, UMD). Raff’s work has produced possibly the quickest release in TEI history, with able assistance from members of the TEI Council, especially James Cummings and Martin Holmes, and with help from former Council member Sebastian Rahtz.


All are encouraged to report bugs and make feature requests for changes to the Guidelines via theSourceForge site <http://tei.sf.net/>. This is how the Council knows what aspects of the Guidelines need working on, and we cannot do without your input! The software of the TEI Consortium such as the Stylesheets and Roma are managed on GitHub at <https://github.com/TEIC/>. Any software issues should be reported there. The updated version of the TEI Guidelines is available from all the usual places (such as the TEI website [http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html](/release/doc/tei-p5-doc/en/html/index.html) and the SourceForge site <<http://tei.sf.net/>>). Sebastian Rahtz has released version 7.34.0 of the TEI Stylesheets (available at <https://github.com/TEIC/Stylesheets>). The oxygen-tei package and TEI debian packages have been updated separately and may be downloaded from <https://sourceforge.net/projects/tei/files/>. The TEI P5 version 2.8.0 release notes are below, and are also available at [http://www.tei-c.org/release/doc/tei-p5-doc/readme-2.8.0.html](/release/doc/tei-p5-doc/readme-2.8.0.html).<br/>


**TEI P5 version 2.8.0 release notes**


This version of the TEI Guidelines introduces new features and resolves a number of issues raised by the TEI community. As always, the majority of these changes and corrections are a consequence of feature requests or bugs reported by the TEI community using the SourceForge tracking system. If you find something you think needs to change in the TEI Guidelines, schemas, tools, or website, please submit a feature request or bug ticket at <http://tei.sf.net/> for consideration. Lists of closed bugs and closed feature requests are available on the site.


Some of the more noticeable changes in this release include:


• New elements and recommendations for the description of correspondence using <correspDesc> have been added to the Guidelines.<br/>
• A new example ODD for the Journal of the TEI has been added.<br/>
• Hosting for the Oxygen-TEI plugin has moved to [https://github.com/TEIC/oxygen tei](https://github.com/TEIC/oxygen-tei).<br/>
• The deprecated type attribute on <biblScope> has been removed. See [http://sourceforge.net/p/tei/feature-requests/388/](https://sourceforge.net/p/tei/feature-requests/388/).<br/>
• resp and cert have been made globally available, per [http://sourceforge.net/p/tei/feature-requests/443/](https://sourceforge.net/p/tei/feature-requests/443/). The Guidelines now recommend that resp point to a <respStmt>.<br/>
• The type attribute on <teiHeader> was deprecated. See [http://sourceforge.net/p/tei/feature-requests/489/](https://sourceforge.net/p/tei/feature-requests/489/).<br/>
• A partial attribute, with possible values “true” or “false” was added to <tagsDecl>. See [http://sourceforge.net/p/tei/feature-requests/516/](https://sourceforge.net/p/tei/feature-requests/516/).<br/>
• An att.global.rendition class, containing rend, style, and rendition was added, per [http://sourceforge.net/p/tei/feature-requests/522/](https://sourceforge.net/p/tei/feature-requests/522/).<br/>
• The notation attribute was added to <pVar>, per [http://sourceforge.net/p/tei/feature-requests/523/](https://sourceforge.net/p/tei/feature-requests/523/).<br/>
• The type and subtype attributes are now permitted on <space>, per [http://sourceforge.net/p/tei/feature-requests/534/](https://sourceforge.net/p/tei/feature-requests/534/).<br/>
• The content model of the <signatures> element has been changed to macro.specialPara, per discussion on[http://sourceforge.net/p/tei/bugs/616/](https://sourceforge.net/p/tei/bugs/616/).<br/>
• Model.global has been added to the content model of the <org> element per [http://sourceforge.net/p/tei/bugs/675/](https://sourceforge.net/p/tei/bugs/675/).<br/>
• The datatype of the attribute type supplied by the class att.typed has been changed to data.word as per[http://sourceforge.net/p/tei/bugs/681/](https://sourceforge.net/p/tei/bugs/681/).<br/>
• The content model of <editorialDecl> in TEILite has been fixed per [http://sourceforge.net/p/tei/bugs/688/](https://sourceforge.net/p/tei/bugs/688/).<br/>
• A Schematron rule that enforces the presence of <label> in <list> where type = “gloss” was added, per[http://sourceforge.net/p/tei/bugs/694/](https://sourceforge.net/p/tei/bugs/694/).<br/>
• The remarks for <back> and <front> have been expanded, per <https://sourceforge.net/p/tei/bugs/702/>.<br/>
• The content model for <constraint> has been fixed, per [http://sourceforge.net/p/tei/bugs/704/](https://sourceforge.net/p/tei/bugs/704/).<br/>
• A subsection suggesting strategies to encode textual structures across verses was added to the Verse chapter of the Guidelines, per [http://sourceforge.net/p/tei/bugs/705/](https://sourceforge.net/p/tei/bugs/705/).<br/>
• And, of course, dozens of typos were corrected.


In addition, improvements have been made to the XSL stylesheets (which provide processing of TEI ODD files for Roma and OxGarage as well as other TEI conversions). The Stylesheets are maintained separately from the Guidelines and are at<https://github.com/TEIC/Stylesheets>.



