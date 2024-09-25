---
layout: page.njk
title: "Customization"
tags: page
---
# Customization
Because the TEI Guidelines must cover such a broad domain and user community, it is essential that they be customizable: both to permit the creation of manageable subsets that serve particular purposes, and also to permit usage in areas that the TEI has not yet envisioned. Customization is a central aspect of TEI usage and the Guidelines are designed with customization in mind.

The TEI provides a number of basic, general-purpose customizations. One of the best-known of these is [TEI Lite](Lite/), which was originally designed as a demonstration of the customization mechanism, but has become popular as a simple TEI schema for basic encoding. Other basic customizations are listed below. To create your own customization, you can do one of the following:

* Use the [Roma](https://roma.tei-c.org) web tool to select TEI modules, add and delete elements, and make other choices.
* Write and maintain your own customization by hand using the TEI ODD language. For tutorials and guidance on how to do this, see
     * [TEI Customization Primer](https://www.wwp.neu.edu/outreach/resources/customization.html) by Syd Bauman and Julia Flanders, Women Writers Project
     * [Module 8: Customising the TEI, ODD, Roma](https://teibyexample.org/exist/tutorials/TBED08v00.htm) in TEI by Example.
     * Lou Burnard's resources:
         * [How to make an ODD automagically](https://teic.github.io/PDF/howtoGenerate.pdf) 
         * [How to Update your ODD](https://teic.github.io/PDF/purifyDoc.pdf) (especially for older ODDs produced before version 3.0 of the TEI Guidelines)
         * [ODD chaining for Beginners](https://teic.github.io/PDF/howtoChain.pdf)
         * [“Customizing the TEI”](https://books.openedition.org/oep/692) in <i>What Is the Text Encoding Initiative?</i>, OpenEdition Press, 2014,
     * [Using the TEI (Chapter 24 of the Guidelines)](/release/doc/tei-p5-doc/en/html/USE.html) 


## Customizations provided by the TEI Consortium

| Customization                                                                       | Description | Formats |
|-------------------------------------------------------------------------------------| --- | --- |
| [Lite](../../release/doc/tei-p5-exemplars/html/tei_lite.doc.html)                   | TEI Lite, the most widely used TEI customization; includes basic elements for simple documents | [ODD](../../release/xml/tei/custom/odd/tei_lite.odd), [DTD](../../release/xml/tei/custom/schema/dtd/tei_lite.dtd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_lite.rng), [XSD](../../release/xml/tei/custom/schema/xsd/tei_lite.xsd), [HTML](../../release/doc/tei-p5-exemplars/html/tei_lite.doc.html), [PDF](../../release/doc/tei-p5-exemplars/pdf/tei_lite.doc.pdf)  |
| [TEI Tite](../../release/doc/tei-p5-exemplars/html/tei_tite.doc.html)               | A constrained customization designed for use by keyboarding vendors | [ODD](../../release/xml/tei/custom/odd/tei_tite.odd), [DTD](../../release/xml/tei/custom/schema/dtd/tei_tite.dtd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_tite.rng), [XSD](../../release/xml/tei/custom/schema/xsd/tei_tite.xsd), [HTML](../../release/doc/tei-p5-exemplars/html/tei_tite.doc.html), [PDF](../../release/doc/tei-p5-exemplars/pdf/tei_tite.doc.pdf)  |
| [TEI simplePrint](../../release/doc/tei-p5-exemplars/html/tei_simplePrint.doc.html) | An entry-level customization, focused primarily on the needs of those encoding Western European early modern printed material | [ODD](../../release/xml/tei/custom/odd/tei_simplePrint.odd), [DTD](../../release/xml/tei/custom/schema/dtd/tei_simplePrint.dtd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_simplePrint.rng), [XSD](../../release/xml/tei/custom/schema/xsd/tei_simplePrint.xsd), [HTML](../../release/doc/tei-p5-exemplars/html/tei_simplePrint.doc.html), [PDF](../../release/doc/tei-p5-exemplars/pdf/tei_simplePrint.doc.pdf)  |
| [jTEI Article](../../release/doc/tei-p5-exemplars/html/tei_jtei.doc.html)           | A highly-constrained customization intended for creating journal articles, in particular for submission to the Journal of the Text Encoding Initiative | [ODD](../../release/xml/tei/custom/odd/tei_jtei.odd) |  | [RNG](../../release/xml/tei/custom/schema/relaxng/tei_jtei.rng) | [XSD](../../release/xml/tei/custom/schema/xsd/tei_jtei.xsd) | [HTML](../../release/doc/tei-p5-exemplars/html/tei_jtei.doc.html) | [PDF](../../release/doc/tei-p5-exemplars/pdf/tei_jtei.doc.pdf)  |
| Bare                                                                                | TEI Absolutely Bare, a very barebones schema with the absolute minimum of elements | [ODD](../../release/xml/tei/custom/odd/tei_bare.odd), [DTD](../../release/xml/tei/custom/schema/dtd/tei_bare.dtd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_bare.rng), [XSD](../../release/xml/tei/custom/schema/xsd/tei_bare.xsd) |
| All                                                                                 | TEI with all modules included | [ODD](../../release/xml/tei/custom/odd/tei_all.odd), [DTD](../../release/xml/tei/custom/schema/dtd/tei_all.dtd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_all.rng), [XSD](../../release/xml/tei/custom/schema/xsd/tei_all.xsd) |
| Corpus                                                                              | TEI for Linguistic Corpora, includes the modules for encoding linguistic corpora, [ODD](../../release/xml/tei/custom/odd/tei_corpus.odd), [DTD](../../release/xml/tei/custom/schema/dtd/tei_corpus.dtd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_corpus.rng), [XSD](../../release/xml/tei/custom/schema/xsd/tei_corpus.xsd) |
| MS                                                                                  | TEI for Manuscript Description, includes the elements for describing manuscripts and complex physical aspects of documents | [ODD](../../release/xml/tei/custom/odd/tei_ms.odd), [DTD](../../release/xml/tei/custom/schema/dtd/tei_ms.dtd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_ms.rng), [XSD](../../release/xml/tei/custom/schema/xsd/tei_ms.xsd) |
| Drama                                                                               | TEI with Drama, includes the TEI drama module | [ODD](../../release/xml/tei/custom/odd/tei_drama.odd), [DTD](../../release/xml/tei/custom/schema/dtd/tei_drama.dtd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_drama.rng), [XSD](../../release/xml/tei/custom/schema/xsd/tei_drama.xsd) |
| Speech                                                                              | TEI for Speech Representation, includes the TEI module for spoken language | [ODD](../../release/xml/tei/custom/odd/tei_speech.odd), [DTD](../../release/xml/tei/custom/schema/dtd/tei_speech.dtd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_speech.rng), [XSD](../../release/xml/tei/custom/schema/xsd/tei_speech.xsd) |

The following customizations use features which are not available in the DTD and XSD schema formats.

| Customization | Description | Formats |
| --- | --- | --- |
| Odds | TEI for authoring ODD, includes the TEI module for creating ODD files and customizations | [ODD](../../release/xml/tei/custom/odd/tei_odds.odd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_odds.rng) |
| allPlus | TEI with with all modules included, plus all external additions | [ODD](../../release/xml/tei/custom/odd/tei_allPlus.odd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_allPlus.rng) |
| TEI + SVG | TEI with SVG | [ODD](../../release/xml/tei/custom/odd/tei_svg.odd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_svg.rng) |
| TEI + Math | TEI with MathML | [ODD](../../release/xml/tei/custom/odd/tei_math.odd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_math.rng) |
| TEI + XInclude | TEI with XInclude | [ODD](../../release/xml/tei/custom/odd/tei_xinclude.odd), [RNG](../../release/xml/tei/custom/schema/relaxng/tei_xinclude.rng) |


## Customizations provided by the TEI community

Below are customizations that have been created by members of the TEI community.
To have your customization listed, please contact [web@tei-c.org](mailto:web@tei-c.org).

Best Practices for TEI in Libraries

* A guide for mass digitization, automated workflows, and promotion of interoperability with XML using the TEI ([ODD files](https://github.com/sydb/TEI-in-Libraries))

EpiDoc: Epigraphic Documents in XML

* A customization for encoding epigraphic materials ([Guidelines](https://epidoc.stoa.org/gl/latest/), [GitHub site](https://github.com/EpiDoc/Source), [ODD](https://epidoc.stoa.org/schema/latest/tei-epidoc.xml), [RNG](https://epidoc.stoa.org/schema/latest/tei-epidoc.rng)).

TEI with Music Notation

* A [customization](https://github.com/music-encoding/music-encoding/tree/develop/source/modules) allowing use of elements from the [Music Encoding Initiative (MEI)](http://music-encoding.org/).

Please see the [customizations category of the TEI wiki](https://wiki.tei-c.org/index.php/Category:Customization) for more customizations and more about the customization process.
