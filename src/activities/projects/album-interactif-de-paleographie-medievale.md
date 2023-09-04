---
layout: page.njk
title: "Album interactif de paléographie médiévale"
---
# Album interactif de paléographie médiévale



 
 


* **Host:** CIHAM UMR 5648
* **URL:** <http://ciham.ish-lyon.cnrs.fr/paleographie/>
* **Main language:** Multilingual


**General description:** Mediaeval Palaeography is a science in its own right, and a long learning process
 is necessary to master it. It is not only the art of reading writings of the past,
 but it also encompasses the history of writing, the analysis of forms and contexts
 of writing (material culture,
 social History, etc.). The purpose of this interactive album, consisting in a collection
 of transcription exercises, is not to be a substitute for a proper learning of this
 science, but simply to allow students or amateurs (genealogists, History enthusiasts,
 etc.) to train themselves in the practical aspect of palaeography, that is reading
 manuscript texts.
 
 **Implementation description:**
 To create those exercises, the areas have been placed on the images and associated
 with their transcription in Image Markup Tool (IMT), a free software. Then, the Text
 Encoding Initiative (TEI) XML files created in IMT have been trnasformed into XHTML
 with an XSLT program. A CSS stylesheet and a javascript file control how the exercises
 work. This "palaeography exercise creation kit" is
 freely available on the IMT website, under "Paleography" (free software). The exercises
 of the album on this website have been created with this version of IMT, that generates
 XML TEI source files. But rather than publishing a static HTML export of those exercises,
 the XML TEI source files have been uploaded
 in a native XML database, eXist-db.
 
 The website interface is written in PHP, that interacts with the eXist-db database
 via XML-RPC. The search function is provided by XQuery.
 
 The XML TEI retrieved from the database is transformed into XHTML on the fly, through
 XSLT.
 
 **Copyright information:** Review in Digital Medievalist Journal, 7, 2011:
 <http://www.digitalmedievalist.org/journal/7/porter/>
**Contact:** Marjorie Burghart
 
 **Address:** CIHAM UMR 5648, 14 avenue Berthelot, 69007 Lyon, France.
 
 **Email:** [marjorie.burghart@ehess.fr](mailto:marjorie.burghart@ehess.fr)
 
  
