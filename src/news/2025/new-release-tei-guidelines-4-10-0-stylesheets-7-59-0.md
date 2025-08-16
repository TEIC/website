---
title: "New Release: TEI Guidelines 4.10.0 / Stylesheets 7.59.0"
date: 2025-08-15
---
# New Release of the TEI Guidelines 4.10.0 / Stylesheets 7.59.0

On 15 August 2025, The TEI Consortium released [version 4.10.0 of the TEI Guidelines](https://tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/index.html), codenamed “The Olinguito Release” celebrating the discovery of the olinguito in South America which was announced by the Smithsonian Institution on this date in 2013 <ptr target="https://www.si.edu/stories/olinguito-discovery"/>. This release includes [version 7.59.0](https://github.com/TEIC/Stylesheets/releases) of the TEI Stylesheets. 

Helena Bermúdez Sabel, Elli Bleeker, and Patricia O’Connor were our release technicians, and the release process was helped along by our ever-vigilant Council members and friends, with special thanks to Syd Bauman, Hugh Cayless, Martin Holmes, and Peter Stadler. For details about what has changed in the new version, please see the release notes below. 

You will find the new release of the TEI Stylesheets, made in conjunction with the 4.10.0 release, at <https://github.com/TEIC/Stylesheets/releases/tag/v7.59.0>. The Debian package has been updated at <http://packages.tei-c.org/deb/>, and the TEI Guidelines and the Stylesheets are available for download at <https://sourceforge.net/projects/tei/files/>. 

The oXygen TEI plugin has been updated with the latest version as well. A description on “How to automatically update your TEI framework in oXygen” can be found at  <https://github.com/TEIC/oxygen-tei/blob/master/oxygen-tei-plugin.md>.

## TEI P5 version 4.10.0 and Stylesheets version 7.59.0 release notes

Release 4.10.0 is codenamed ‘The Olinguito Release’.

This release introduces new features and resolves a number of issues raised by the TEI community. The majority of these changes and corrections are a consequence of feature requests or bugs reported by the TEI community using the GitHub tracking system. A full list of the issues resolved in the course of this release cycle may be found under the [4.10.0 milestone](https://github.com/TEIC/TEI/milestone/20?closed=1). Many thanks to the community contributors who reported issues, sent bug fixes, and helped with the drafting that led to this release, including: GitHub user a1ix2, John Bampton, Piotr Bański, Lou Burnard, Hugh Cayless, Ash Clark, Tomaž Erjavec, David Maus, Natsuko Nakagawa, Matija Ogrin, Klaus Rettinghaus, and GitHub user rvdb.

The following changes are particularly worth highlighting in this release:

### Changes to content models

* The [facsimile](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-facsimile.html) element is now permitted to self-nest to represent relationships among collections of manuscripts. ([\#2565](https://github.com/TEIC/TEI/issues/2565) and [PR \#2654](https://github.com/TEIC/TEI/pull/2654)).  
* The [byline](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-byline.html) element has been added to [closer](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-closer.html) ([\#2658](https://github.com/TEIC/TEI/issues/2658) and [PR \#2735](https://github.com/TEIC/TEI/pull/2735)).  
* The content models of [place](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-place.html), [event](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-event.html), [person](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-person.html), and [org](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-org.html) now include [ref](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-ref.html) in addition to [ptr](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-ptr.html) ([\#2651](https://github.com/TEIC/TEI/issues/2651) and [PR \#2689](https://github.com/TEIC/TEI/pull/2689)).  
* The value of the rotate attribute has been changed from teidata.count to teidata.numeric in order to permit negative and non-integer values ([\#2637](https://github.com/TEIC/TEI/issues/2637) and [PR \#2638](https://github.com/TEIC/TEI/pull/2638)).

### Changes to the build process for publishing the Guidelines

* With this release, the Guidelines are no longer served in the outdated and proprietary Kindle .mobi format, since they can be read in the EPUB format in the Kindle application ([\#2574](https://github.com/TEIC/TEI/issues/2574) and [PR \#2600](https://github.com/TEIC/TEI/pull/2600)).  
* We have updated the Guidelines build process to apply [SchXslt](https://codeberg.org/SchXslt/schxslt/src/branch/main), which implements Schematron validation with XSLT ([PR \#2509](https://github.com/TEIC/TEI/pull/2509)).

### ODD-breaking change and deprecation

The following change introduced with this release could invalidate ODD customizations in TEI projects. Those maintaining ODD customizations of the TEI should be aware of the following change, and may need to adapt their ODD files accordingly.

* Writers of Schematron in ODD customizations will find that Schematron assert and report tests must be established within a rule with a context attribute. A missing context was previously deprecated with a warning, but now generates an error ([PR \#2680](https://github.com/TEIC/TEI/pull/2680)).

### Improvements of prose and examples

* The [Dedication](https://tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/dedication.html) and the [Preface and Acknowledgments](https://tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/FM1.html) have been significantly revised with this release. The dedication now includes our founding editor of the TEI consortium and Guidelines, C. Michael Sperberg-McQueen (1954-2024), and provides ‘about’ links for each person listed. The Preface and Acknowledgments are now updated for the first time since the launch of P5 in 2007, and they now list TEI Board members who have served over the past two decades ([\#2741](https://github.com/TEIC/TEI/issues/2741), [\#2284](https://github.com/TEIC/TEI/issues/2284), [\#2688](https://github.com/TEIC/TEI/issues/2688), and [PR \#2743](https://github.com/TEIC/TEI/pull/2743)).  
* This release provides a revision and a new example of dictionary encoding adapted from the TEI Lex-0 specification ([\#2718](https://github.com/TEIC/TEI/issues/2718) and [PR \#2746](https://github.com/TEIC/TEI/pull/2746)).  
* An example in Core Tags for Drama has been revised to replace [p](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-p.html) with [ab](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-ab.html) as better suited to encode a passage without asserting whether the passage is either prose or verse ([\#2719](https://github.com/TEIC/TEI/issues/2719) and [PR \#2731](https://github.com/TEIC/TEI/pull/2731)).  
* XPath examples were corrected in Chapter 3 ([\#2690](https://github.com/TEIC/TEI/issues/2690)).  
* This release revises an existing dictionary example to help clarify the difference between ed and edRef ([\#2653](https://github.com/TEIC/TEI/issues/2653) and [PR \#2730](https://github.com/TEIC/TEI/pull/2730)).  
* The definition of ident on [remarks](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-remarks.html) has been modified from teidata.text to teidata.name and its description had been revised ([\#2681](https://github.com/TEIC/TEI/issues/2681) and [PR \#2682](https://github.com/TEIC/TEI/pull/2682)).  
* Many element specifications have been revised to list reference locations indicating where they are mentioned in the Guidelines ([\#2652](https://github.com/TEIC/TEI/issues/2652) and [PR \#2722](https://github.com/TEIC/TEI/pull/2722)).  
* German translations have been added to glosses and descriptions of global attributes ([PR \#2674](https://github.com/TEIC/TEI/pull/2674)).  
* Attribute descriptions in multiple languages have been harmonised for consistency ([\#2663](https://github.com/TEIC/TEI/issues/2663) and [PR \#2695](https://github.com/TEIC/TEI/pull/2694)).

### Documentation

* Improvements to TEI Council Working Papers (TCW) 22 and 31 (Documentation [PR \#18](https://github.com/TEIC/Documentation/pull/18) and [PR \#19](https://github.com/TEIC/Documentation/pull/19)).

### Housekeeping

* The encoding of [list](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-list.html) elements in the Guidelines has been revised to apply the rend attribute consistently for ordered lists ([\#2683](https://github.com/TEIC/TEI/issues/2683) and [PR \#2693](https://github.com/TEIC/TEI/pull/2693)).  
* Broken links have been repaired ([PR \#2673](https://github.com/TEIC/TEI/pull/2673) and [PR \#2679](https://github.com/TEIC/TEI/pull/2679)).  
* Improvements in the JavaScript handling of pop-up notes ([PR \#2692](https://github.com/TEIC/TEI/pull/2692)).

### TEI Stylesheets

In addition, many improvements have been made to the XSLT stylesheets (which provide processing of TEI ODD files for [Roma](https://romabeta.tei-c.org/) and [TEIGarage](https://teigarage.tei-c.org/) as well as other TEI conversions). The Stylesheets are maintained separately from the Guidelines at [https://github.com/TEIC/Stylesheets](https://github.com/TEIC/Stylesheets). A full list of the issues resolved in the course of this release cycle may be found under the [7.59.0 milestone](https://github.com/TEIC/Stylesheets/milestone/18?closed=1).

Highlights of this release follow.

* Repairs to teitohtml.xsl to ensure the type of [ab](https://www.tei-c.org/Vault/P5/4.10.0/doc/tei-p5-doc/en/html/ref-ab.html) is output as the value of an HTML class (Stylesheets [723](https://github.com/TEIC/Stylesheets/issues/723) and [PR \#724](https://github.com/TEIC/Stylesheets/pull/724)).  
* The transformtei bin file can now process filenames with spaces (Stylesheets [PR \#738](https://github.com/TEIC/Stylesheets/pull/738)).  
* Improved processing of Schematron in ODD processing (Stylesheets [PR \#731](https://github.com/TEIC/Stylesheets/pull/731), [\#749](https://github.com/TEIC/Stylesheets/issues/749), [\#750](https://github.com/TEIC/Stylesheets/issues/750), [PR \#751](https://github.com/TEIC/Stylesheets/pull/751), and [PR \#762](https://github.com/TEIC/Stylesheets/pull/762)).  
* Repairs of broken links pointing to information about deprecation warnings (Stylesheets [\#694](https://github.com/TEIC/Stylesheets/issues/694) and [PR \#747](https://github.com/TEIC/Stylesheets/pull/747)).  
* Improvements in the Stylesheets test suite (Stylesheets [\#728](https://github.com/TEIC/Stylesheets/issues/728), [\#755](https://github.com/TEIC/Stylesheets/issues/755), and [PR \#756](https://github.com/TEIC/Stylesheets/pull/756)).  
* Emendations of broken links in the Stylesheets README (Stylesheets [\#703](https://github.com/TEIC/Stylesheets/issues/703) and [PR \#710](https://github.com/TEIC/Stylesheets/pull/710))  
* Modification of odd.css to modify the styling of new attribute lists in HTML ODD documentation (Stylesheets [\#657](https://github.com/TEIC/Stylesheets/issues/657) and [PR \#682](https://github.com/TEIC/Stylesheets/pull/682)).



