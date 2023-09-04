---
layout: page.njk
title: "Tarsian - A Digital Edition of First Corinthians in Vaticanus Arabicus 13"
---
# Tarsian - A Digital Edition of First Corinthians in Vaticanus Arabicus 13




* Host: Swiss Institute of Bioinformatics, Vital-IT
* Other institutions involved:
 Fonds national suisse/Swiss National Science Foundation (FNS 143810, led by Claire
 Clivaz)
* URL: <http://tarsian.vital-it.ch>
* Main language: Other
* TEI Encoding Guidelines used: P5 (2007-present)



General description: The aim of the project is to edit First Corinthians in Arabic as found in Vat. Ar.
 13, a 9th century manuscript. The edition proposes the display of the images in high-quality
 (300 dpi); two versions (“layers”) of the Arabic text: diplomatic and standardized/vocalized;
 a French translation (English forthcoming). It used an open source editorial tool
 developed by Vercelli Book Digitale project, EVT, which reads TEI files. At the end
 of the project, we will have encoded in TEI XML 33 folios of the manuscript. 



Implementation description:
 Considering the manuscript as our starting point, we used the embedded transcription,
 made possible by the development of XSLT-based TEI XML formatting in EVT. As we had
 two different versions of the text and not only character or word changes, we chosen
 to use the element <choice> and the sub-element <orig> and <reg> for each line. It
 allows the reader to easily compare the diplomatic and standardized/vocalized version.
 In addition, we marked the biblical verses with the <milestone> element, a very “neutral”
 way of marking something not present in the manuscript. We used other common elements
 for diplomatic edition as <unclear> or <add> in case of a scribal intervention.



Related resources: See the Vercelli project:
 
<http://vbd.humnet.unipi.it>
About EVT, see the article Rosselli Del Turco R., Buomprisco G., Di Pietro C. et al.
 Edition Visualization Technology: A Simple Tool to Visualize TEI-based Digital Editions.
 Journal of the Text Encoding Initiative. 2014-2015;8:
 
<http://jtei.revues.org/1077>
About Tarsian, see the article Claire Clivaz, Sara Schulthess, Martial Sankar, “Editing
 New Testament Arabic Manuscripts on a TEI-base: fostering close reading in Digital
 Humanities”, submitted to a special JDMDH number on Computer-Aided Processing of Intertextuality
 in Ancient Languages, ed. M. Büchler, L. Mellerin, 2016:
 
<https://hal.archives-ouvertes.fr/hal-01280627/>
About the SNF project:
 
<http://www.unil.ch/nt-arabe>



Copyright information: The folios are reproduced by permission of Biblioteca Vaticana Apostolica, with
 all rights reserved; no copy allowed.
 
 The Arabic text and translation are in CC BY 4.0 (<https://github.com/msank/tarsian-tei>).
 
 Open source editorial tool (EVT) developed by Vercelli Book Digitale project (<http://vbd.humnet.unipi.it>).
 



Contact:
 



Sara Schulthess


Vital-IT
 
 Swiss Institute of Bioinformatics
 
 Unil - Génopode 2016
 
 CH-1015 Lausanne
 



Telephone: +41 21 692 40 33



Email: [sara.schulthess@sib.swiss](mailto:sara.schulthess@sib.swiss)





