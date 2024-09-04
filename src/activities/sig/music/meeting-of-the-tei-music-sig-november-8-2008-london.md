---
layout: page.njk
title: "Meeting of the TEI Music SIG: November 8, 2008, London"
creator: Raffaele Viglianti
---
# Meeting of the TEI Music SIG: November 8, 2008, London




The first meeting of the Special Interest Group in Music was held on the 8th of
 November 2008 within the TEI Members Meeting at King's College London.


During the meeting, the major pre\-existing XML\-based encoding formats for music
 notation have been considered. This includes: 
 
- [MEI](http://www.lib.virginia.edu/digital/resndev/mei/), which is currently developed by Perry Roland at the University
 of Virginia

- [MusicXML](http://www.musicxml.org/), which is developed by Recordare LLC (Michael Good)

- [MPEG\-4 part 23](http://www.interactivemusicnetwork.org/mpeg-ahg/), which was formerly known as Wedelmusic






The SIG will concentrate on MEI first, as it is designed for critical music
 editions. This decision does not exclude the other formats from further
 evaluations.



Long\-term agenda
 
 
 The SIG has to provide recommendations and examples for the integration of
 music encoding within TEI. This will start with music examples in Common
 Western Notation, but shall be extended to other notations as much as
 possible.


The question of integration v. collaboration of MEI and TEI was left open
 until further evaluations; it is not yet certain if the (digital\-)musicological
 community (which is not as large as the TEI community) will agree to
 definitively incorporate MEI into TEI. This political question will be
 addressed later.


In the long term the SIG will work on determining the actual similarity of
 the header parts and the textCrit / meiCrit modules. It would be desirable
 to allow TEI encodings in a MEI document (at appropriate locations) and vice
 versa. For example, a musical document with text considered worthy to be
 encoded in TEI could be represented as an MEI document with TEI inclusions,
 or it could be represented within TEI, where the 
 teiHeader is
 mandatory and the MEI element 
 mei:work could substitute or go
 alongside 
 text and/or 
 facsimile. On the other hand,
 a mainly textual document with music embedded could make use of the latter
 example. In order to reach this interoperability, the technical improvement
 of MEI is a first objective to be reached. 


For all of these tasks, Johannes Kepper suggested that the SIG might
 cooperate with the research project called Digital Music Notation Data Model
 and Prototype Delivery System (conducted by Roland and Kepper). This project
 will translate MEI from a one\-man\-show to a community\-based project, and
 will discuss the political issues concerned with the collaboration/integration with
 TEI. 


MEI will have to consider referring in its documentation to the authority
 lists and controlled values defined by the MPEG4\.23 standard wherever
 appropriate. This has no consequences for the concepts and model of MEI, but
 helps to standardize the interpretation of certain basic symbols and
 elements. For the MPEG4\.23 standard documentation please refer to:
 [http://www.interactivemusicnetwork.org/mpeg\-ahg/w8632\-MPEG\-SMR\-part\-23\-rev\-public.pdf](http://www.interactivemusicnetwork.org/mpeg-ahg/w8632-MPEG-SMR-part-23-rev-public.pdf). 
 Furthermore, the development of tools for WYSIWYG generation and dynamic
 rendering of MEI should be supported by the SIG as much as possible. 




 Short\-term agenda \- first steps
 
 
 For the further discussion about MEI's independence it is important to
 compare the headers. A first question to be addressed is: "Is it possible
 for MEI to use an extended TEI header?" 


A first attempt to answer that question might be to "oddify" MEI, as this
 allows an easier comparison of individual parts. At the same time, it allows
 the generation of different schemas as well as DTDs. 


At the same time, the primitive objects and values of MEI shall be compared
 to their equivalents (if existing) in the MPEG standard. 





