---
layout: page.njk
title: "Alex Catalogue of Electronic Texts"
tags: page
---
# Alex Catalogue of Electronic Texts



 
 


* **Host:** Infomotions, Inc.
* **URL:** <http://infomotions.com/alex2/>


**Description:** The is a full-text indexed collection of classic American and English literature as
 well as Western philosophy in the public domain and written or translated into English.
 
 **Implementation description:** I have been using TEI to mark up already digital items, specifically a small collection
 of American and English literature and Western philosophy.
 
 To assist with the creation and maintenance of my Catalogue I have been writing a
 set of object oriented Perl modules (Alex::Document, Alex::Ebook, Alex::Concordance,
 and Alex::Patron). Through Alex::Document I am able to download remote plain text
 files and convert them into rudimentary but valid TEI files. I then use my editor
 (BBEdit and a few BBEdit "glossary" scripts) to fill in some of the blanks of the
 header and mark up the body.
 
 Alex::Ebook is used to transform the TEI/XML into plain text files, XHTML, PDF, Palm
 DOC, Palm Reader, Rocket eBook, and Newton Paperback files. In the future I plan to
 create OEB files and hopefully .LIT files.
 
 Alex::Concordance provides really rudimentary concordance functions.
 
 Alex::Patron enables the system to remember things like a person's search history
 and interface preferences.
 
 Because the whole thing does not rely on a database application, and because the content
 is made up of well-known authors and titles, I will be able to distribute a CD containing
 all the items from the Catalogue and provide a simple author/title index to the collection.
 The index will provide access to all the transformed versions of the text. The CD
 won't support any searching functionality, nor will it be able to provide the concordance
 features, but if implemented well it will could function as a sort of Great Books
 collection available to just about anybody with a CD reader, XHTML browser, and the
 ability to access rather long file names.
 
 **Contact:** Eric Lease Morgan
 
 **Address:** 209 W. North Shore Drive South Bend, IN 46617, USA.
 
 **Tel:** 574/246-0639
 
 **Fax/Email:** [eric\_morgan@infomotions.com](mailto:eric_morgan@infomotions.com)
 

