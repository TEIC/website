---
layout: page.njk
title: "Biblioteca Digital del Pensamiento      Novohispano"
tags: page
---
# Biblioteca Digital del Pensamiento      Novohispano



 
 


* **Host:** Universidad Nacional Autónoma de
 México
* **URL:**<http://www.bdpn.unam.mx/>
* **Main language:** Spanish


**General description:** The Biblioteca Digital del Pensamiento Novohispano (BdPn) has been conceived as a
 laboratory for the academic research of modern texts in New Spain. In this regard,
 it is composed in two levels. In the first one, the BdPn is a collection of digital
 editions of diplomatic transcripts of texts taken from books and documents of the
 17th century on the practices of astrology and astronomy in Mexico. These editions
 are marked in TEI/XML. On the second level, the BdPn is a group of digital tools for
 research that offers: The automatic indexing of terms, references, names and dates
 marked in texts. A group of resources that utilizes indexes to offer information on
 the people, works, quotes, old Spanish words and astronomical and astrological terms
 that appear in the works.
 
 **Implementation description:** The categories used by the Biblioteca Digital del Pensamiento Novohispano are a specific
 application of the TEI Lite version. The decision to use this version is based on
 two reasons. Firstly, it presents a simplified TEI version that is enough to cover
 all the needs of the Library. Moreover, it does so in such way that it illustrates
 the text markup process with enough clarity to be followed by those who don’t have
 a background in TEI and the markup process. Its open structure and the possibility
 to add different types of attributes to the categories enable the generation of the
 necessary variants to practically mark everything we wanted to inside the texts. To
 mark up the text, the following categories are used:
 
 a) The text <text></text> this shows the beginning and ending of the marked text.
 
 b) The cover <front></front> this marks the cover or front of the document in print.
 
 <titlePage></titlePage> marks the page that contains the title of the work, which
 may coincide with the cover.
 
 <docTitle></docTitle> marks the title of the document as seen on the cover.
 
 <docImprint><docImprint> marks the place and publisher of the text.
 
 <docDate></docDate> marks the date of the text.
 
 c) The body of the document <body></body> corresponds to the body of the text in its
 entirety.
 
 <p></p> is a central category. It marks the beginning and ending of each paragraph.
 On the documents of the library, when paragraphs don’t end within the same page they
 started in, it is still necessary to use this tool to mark the ending of the paragraph
 on the first page, right before the inclusion of the </div> command. A new paragraph
 must be marked in the following page, after <div>, to complete the paragraph.
 
 <div></div> marks the start of a division. In the library, it is used to separate
 texts into folia. Folia are,
 along with the paragraphs, the reference unit in the texts of this library.
 
 <term></term> marks a word, a group of words, a symbolic designation or the use of
 a technical term. It is a central markup category, as it allows for the identification
 of words and expressions that are used in the text and whose study and recovery are
 relevant. This command accepts 7 Type attributes: medical (Med), astrological (Astro),
 astronomical (Astron), philosophical (Philo), mathematical (Mathe), theological (Theolo)
 and Old Spanish (OldSp). In all cases, a “reg” may be included to unify terms using
 modern spelling as a basis. This is especially important in the case of old Spanish
 words, in which the use of “reg” is compulsory.
 
 Examples:
 
 <term type="astro" Reg="Juicio">juizio</term>
 
 <term type="astro" Reg="Venéreo">Venereo</term>
 
 <term type="med">peste</term> (this doesn’t need “reg" as there is no need for the
 standardization of the spelling of the word)
 
 <foreign></foreign> identifies terms or groups of terms in a language that is different
 to the one the text was written in. It accepts the lang attribute (language). For
 the most commonly occurring language, Latin, we use the lat attribute.
 
 Examples:
 
 <foreign lang="lat">Laus Deo</foreign>
 
 <date></date> allows us to mark dates on the text. When we find expressions such as
 “the year of the Lord 1654” or “the year of 1204”, we will only mark the number. When
 we find expressions such as “the past year”, or “two years ago”, we will mark the
 entire expression, but a “reg” attribute must be used too to mark the year in number
 format. When the expression of the date includes days and/or months, these elements
 will be marked, too.
 
 Examples:
 
 Este año de <date>1682</date>
 
 …año del Señor de <date>396</date>
 
 As most comets mentioned in the texts were named in regard to the dates they were
 seen, we will use “type” and “comet” to mark this information.
 
 Examples:
 
 como el del año del señor de <date type="comet">396</date>
 
 <abbr></abbr>marks an abbreviation. Abbreviations are not regularized nor expanded
 in the mark-up; in other words, they are marked up just as they appear in the text.
 
 <abbr>Vmd.</abbr>
 
 <abbr>N.S.R.E.</abbr>
 
 <pb></pb> marks the number of the folia or of the page, if this information is available
 in the text.
 <name></name> marks the proper names of people, gods, and places; it accepts the use
 of the “type” attribute along with the following: person, planet, place, inst (institution),
 constellation, zodiacal, CathDiv (catholic divinity). Also, “reg” is used to standardize
 names according to their contemporary usage.
 
 Examples:
 
 <name type="person" reg="Aristóteles">Aristoteles</name>
 
 <name type="constelation"">Capricorno</name>
 
 <name type="planet">Saturno</name> En todos los casos se marcan como planeta Luna
 y Sol, además del resto de los planetas mencionados
 
 <name type="place" reg="Holanda">Olanda</name>
 
 <q></q> identifies the textual citing that appears within a text and in which bibliographical
 references
 don’t occur. These attributes must be placed at the beginning and at the ending of
 each quotation.
 
 <cit></cit> is used to mark the title of a work that is mentioned within a text. In
 the marking of these
 titles, “reg” may be used to make a standardization based on the modern name of the
 work.
 
 <refTitle></refTitle> Se utiliza para marcar el titulo de una obra dentro de un texto.
 Acepta reg para estandarizar el nombre moderno de la obra.
 
 <head></head> is used to identify subtitles in the text.
 
 **Related resources:** Transcription Criteria
 <http://www.bdpn.unam.mx/criteria>
 Documentation <http://www.bdpn.unam.mx/documentation>
 Sobre astros, astrónomos y computadoras.Biblioteca Digital del Pensamiento Novohispano
 <http://www.revista.unam.mx/vol.12/num7/art67/>
 Editores amigos de la tecnología: cómo pasar del PDF a la verdadera edición digital.
 <http://www.revista.unam.mx/vol.11/num5/art52/>
 Wikipedia. Biblioteca Digital del Pensamiento Novohispano
 <https://es.wikipedia.org/wiki/Biblioteca_Digital_del_Pensamiento_Novohispano>
 
 BIBLIOTHECA MEXICANA: VIRTUE, CONDEMNATION, POSSIBILITY
 <http://dayofdh2014.matrix.msu.edu/redhd/tag/biblioteca-digital/>
 
 TEI como una nueva práctica de lectura
 <http://www.janusdigital.es/anexos/contribucion.htm;jsessionid=63CCC5737EDC75121BE696914AB4D522?id=34>
 
 Finding support for disruption: developing a digital humanities project in Mexico
 DOI (Permanent URL): [10.1108/00012531211196738](http://10.1108/00012531211196738)
**Copyright information:** Creative Commons Attribution Non Commercial
 
 **Contact:** Ernesto Priani Saisó
 
 **Address:** Facultad de Filosofía y Letras, Circulito Escolar S/N Ciudad Universitaria, 04510
 Coyoacán,
 Distrito Federal.
 
 **Telephone:** 01 55 5542 1612 12
 
 **Email:** [epriani@gmail.com](mailto:epriani@gmail.com)
