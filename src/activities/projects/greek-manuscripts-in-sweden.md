---
title: "Greek Manuscripts in Sweden"
---




* Host: Uppsala University Library
* Other institutions involved:
 Funded by the Central Bank of Sweden
 Tercentenary Foundation (Riksbankens Jubileumsfond).
* URL: <http://www.manuscripta.se>
* Main language: Multilingual



General description: The aim of the project is to publish
 an online catalogue of all the Greek manuscripts in Swedish
 libraries and archives. This will also entail a full
 digitization of the manuscripts, some 36 000 pages in total.
 Libraries that will contribute material to the database
 include Gothenburg University Library (4 MSS), Linköping
 Diocesan Library (28), Lund University Library (5), The
 National Gallery, Stockholm (1), The Royal Library, Stockholm
 (5), The Skokloster Castle Library (3), and Uppsala
 University Library (74), in all 120 manuscripts.
 

 The Greek manuscripts, in the form of bound parchment and
 paper volumes, include a rich and diverse collection of texts
 from antiquity and the Byzantine period. They originate
 mainly from the Byzantine cultural area from the tenth
 century onwards, but some are Renaissance or early modern
 manuscripts from Western Europe. The existing
 nineteenth-century catalogue is outdated and in many cases
 incorrect. Furthermore it does not cover all manuscripts. It
 is therefore essential to create a new catalogue according to
 modern principles, including detailed codicological
 descriptions. Combined with a comprehensive digitization of
 the manuscripts this will facilitate and encourage new
 research on the material among Swedish and international
 scholars.



Implementation description:
 The manuscript descriptions are
 encoded in TEI P5 using a customised ODD schema which, to a
 certain extent, was influenced by the ENRICH schema
 (http://projects.oucs.ox.ac.uk/ENRICH). However, some
 modifications have been necessary, which means that our
 schema and the ENRICH schema are not completely compatible.
 Our schema also provides cataloguing guidelines with
 examples, and documentation of the elements and attributes
 used. In order to eliminate inconsistencies in the encoding,
 we enforce strict limits regarding the attributes and their
 values. We also make use of Schematron rules to check that
 the content is valid in certain elements. The manuscript
 descriptions are structured around the notion of
 codicological units: the intellectual content, physical
 description, and history, where applicable, of each unit is
 described in separate <msPart> elements, whereas
 information common to all units, e.g. the binding,
 provenance, and bibliography, is described outside the
 <msPart> elements, directly under the <msDesc>
 element. In each manuscript description the items will be
 linked to specific folios of the digitized manuscripts using
 the @facs attribute in the <locus> element. This will
 enable image retrieval from the image server.
 

 The Uppsala University Library digital repository, ALVIN,
 will host the TEI-files, schema, style sheets, and images of
 the digitized manuscripts. The images will be stored both in
 the original TIFF-format, and in the JPEG2000-format for
 display on the web. The JPEG2000 images will be saved in a
 multi-resolution tiled pyramidal format to enable fast
 zooming and panning capabilities in the image viewer.
 

 The manuscript descriptions are published continuously on the
 project web site as the project advances
 (http://www.manuscripta.se). The web interface for the
 catalogue is built with the eXist-db open source software
 (http://exist-db.org) which provides powerful search and
 browsing capabilities for the catalogue. To facilitate
 user-friendly orientation, the images are displayed adjacent
 to the manuscript description in the interface.



Related resources: The TEI-files, schema, style sheets,
 and source code for the eXist-db interface are also stored in
 the project GitHub repository
 (https://github.com/manuscripta).



Contact:
 



Eva Nyström & Patrik
 Granholm


Section for Manuscripts and
 Music
 
 Carolina Rediviva
 
 Box 510
 
 751 20 Uppsala
 
 Sweden



Telephone: +46 18 471 3995



Email: [info@manuscripta.se](mailto:info@manuscripta.se)





