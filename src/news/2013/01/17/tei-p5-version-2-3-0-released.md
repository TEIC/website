---
title: "TEI P5 version 2.3.0 released!"
date: "2013-01-17"
author: "theteiadmin"
permalink: "/news/2013/01/17/tei-p5-version-2-3-0-released/"
tags: ["News"]
---



Dear TEI Community,


TEI P5 version 2.3.0 (Codename: Betty White) is now available from all the usual sources, such as the TEI-C website and SourceForge. The debian packages, TEI-C XSL, and oxygen-tei framework will be updated fairly soon. This release introduces both textual and schema-related changes, new features and a significant number of bug fixes. Mostly these are based on bug and feature request tickets submitted to SourceForge by the TEI community. If you notice anything that has changed in error, or want to submit additional changes, please do so on the http://tei.sf.net/ website.


We have continued in our aim of opening up the release process to as many different people on Council and in this case the newly elected Hugh Cayless (NYU Digital Library Technology Services) was the release technician. Able assistance was also given by several other council members on the TEI IRC channel (see http://wiki.tei-c.org/index.php/IRC for more information). As always this has produced a set of notes for how to improve the release process that will be fed back into http://www.tei-c.org/Activities/Council/Working/tcw22.xml for future releases. The greatest thanks are due not only to the TEI Technical Council for undertaking the work, but the TEI community for submitting tickets!


A text version of the release notes is below, but a version (with links) is available at: http://www.tei-c.org/release/doc/tei-p5-doc/readme-2.3.0.html


Many thanks to all,


James Cummings<br/>
(TEI Technical Council Chair)<br/>
====




# TEI P5 version 2.3.0 release notes


This version of the TEI introduces new features and resolves a number of issues raised by the TEI community. As always, the majority of these changes and corrections are a consequence of feature requests or bugs reported by the TEI community, using the SourceForge tracking system. If you find something you think needs to change in the TEI Guidelines, schemas, tools, or website, please submit a feature request or bug ticket at <http://tei.sf.net/> for consideration.


Since the last release (25 October 2012), the TEI Technical Council has closed 93 tickets entered in the SourceForge tracking system. During the same period 77 new tickets have been opened by the community according to <https://sourceforge.net/projects/tei/stats/tracker?tracker=&dates=2012-10-25+to+2013-01-17>.



Some of the highlights of the TEI P5 2.3.0 release include:

* The creation of an [att.source](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-att.source.html) class resulting from <http://purl.org/tei/bugs/3572502> in order to standardise the provision of the @source attribute for pointing to one or more sources of a bibliographic reference. Currently, the elements [quote](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-quote.html), [q](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-q.html), [writing](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-writing.html), and [egXML](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-egXML.html) claim membership in this class.
* A change of the [att.sourced](/Vault/P5/2.2.0/doc/tei-p5-doc/en/html/ref-att.sourced.html) class to [att.edition](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-att.edition.html) (to avoid confusion with the above), and the creation of an @edRef attribute to provide one or more pointers to the source edition in which the associated feature (e.g. page, column, or line break) occurs.
* The addition of a schematron constraint to check that there is a @type attribute if there is a @subtype attribute; also [abbr](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-abbr.html) and [title](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-title.html) now get their @type from [att.typed](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-att.typed.html) and so will now get a @subtype attribute as well.
* The creation of a [media](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-media.html) element to indicate the location of any form of external media (such as an audio or video clip); also the creation of a new [att.media](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-att.media.html) class which provides@width, @height, and @scale attributes.
* A change to [label](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-label.html) to claim membership in [att.placement](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-att.placement.html) (for the @place attribute) and [att.typed](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-att.typed.html) in response to <http://purl.org/tei/fr/3527821>
* A tightening up of the use of morphological elements inside [cit](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-cit.html) necessitating some of them to be wrapped in the [gramGrp](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-gramGrp.html) element in response to <http://purl.org/tei/bug/3547289>
* Revising section [1.3.1.1.5 on XML Whitespace](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ST.html#STGAxs) for further clarity in response to a community contribution.
* Removal of the default value from the definition of the @marks attribute on [quotation](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-quotation.html). It was decided that a default value is unhelpful since the element is optional and affects the interpretation of the whole document; also the content model of [quotation](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-quotation.html) was changed from one or more [model.pLike](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-model.pLike.html) elements to zero or more of these allowing it to not have any child elements.
* The creation of [listPrefixDef](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-listPrefixDef.html) and [prefixDef](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-prefixDef.html) to define prefixing schemes used in [data.pointer](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-data.pointer.html) values, showing how abbreviated URIs using the scheme may be expanded into full URIs. This is a powerful mechanism for providing a method allowing full documentation of private URI schemes which are then able to be dereferenced using the information in the [prefixDef](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-prefixDef.html) element. New prose was added to describe this at [16.2.3 – Using Abbreviated Pointers](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/SA.html#SAPU)
* A change to elements which claim membership in [model.certLike](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-model.certLike.html) in that this class has been added to the content model of [space](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-space.html) in response to <http://purl.org/tei/bugs/3565137> allowing them to now be used here.
* The @type attribute on [biblScope](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-model.certLike.html) has been deprecated and replaced with a @unit attribute for greater clarity. The @type attribute will be removed at a future release.
* The [locusGrp](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-locusGrp.html) element has been added to the content model of [msItemStruct](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-msItemStruct.html), giving encoders a choice between [locus](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-model.locus.html) or [locusGrp](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-locusGrp.html), in response to <http://purl.org/tei/fr/3575433>
* The [citedRange](/Vault/P5/2.3.0/doc/tei-p5-doc/en/html/ref-citedRange.html) element has been added inresponse to <http://purl.org/TEI/FR/3555191> in order to enable users to document in a bibliographic reference the range within a larger text that is being cited.
* Many tickets reporting small bugs such as typos, inconsistencies, or places where greater clarity was needed in the Guidelines. The TEI Technical Council would encourage any such reports, so if you spot a problem, please do let us know by filing a bug at <http://purl.org/tei/bug>.




====



