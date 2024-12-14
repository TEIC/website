---
layout: page.njk
title: "Introducing the Guidelines"
tags: page
---
# Introducing the Guidelines
This section provides a very basic conceptual introduction to the TEI Guidelines for new users. It should be supplemented by the documentation, tutorials, and other informational links provided on this site.


The term TEI Guidelines has some built-in ambiguity. On the one hand, it can refer
to the formal documentation, printed or online, produced by the TEI Consortium to
define and describe the encoding system. On the other hand, it is also used to refer
to the markup language and tag set described in that documentation. Informally,
TEI is often used as a synonym for the more cumbersome encoding scheme defined in
the TEI Guidelines, for example in a sentence like ‘if I have an article written in
[DocBook](http://docbook.sourceforge.net/) or XHTML, how do
I convert it to TEI?’ In this section, TEI Guidelines is used as the umbrella term
referring to both the TEI markup language and its documentation, along with the
formal schemas and tools provided by the TEI Consortium to make use of them.


Versions of the TEI Guidelines are referred to using a major release number (always prefixed by
P) and sometimes also by a three-digit number (such as 2.0.2) to refer to a particular version.


Encoding Scheme
---------------



The TEI Guidelines define an encoding scheme rendered in a
formal [markup
language](http://en.wikipedia.org/wiki/Markup_language). The original TEI language (P1 through P3) used SGML syntax.
With P4, users were given a choice of using SGML or XML; with
P5, SGML is no longer an option. Furthermore, P5 relies heavily
upon XML standards such as schema languages and
programming tools like XSLT and XQuery.


Like other markup languages, the TEI language defines a tag
set of XML elements that are used to encode texts,
along with attributes used to modify the elements. Because
the TEI Guidelines seek to provide a framework for encoding (in theory) any
genre of text from any period in any language, the full TEI tag set is extremely
rich, consisting of nearly 500 elements (by comparison, DocBook has around 400,
XHTML 1.0 around 90). In practice, most TEI users routinely use a much smaller
subset of the full language. (For example, the documentation section you are
reading was composed in TEI using about 30 unique tags.)


Elements in the TEI tag set fall into two broad categories, those used to capture
metadata about the text being encoded (authorship and
responsibility, bibliographical information, manuscript description, revision
history, etc.), and those used to encode the structural features of the document
itself, such as sections, headings, paragraphs, quotations, highlighting, and so
on.



Modularity and Customization
----------------------------



The TEI language is not monolithic. Because TEI encoding can be applied to many
different kinds of texts, it has been designed to be highly modular: users can
choose to incorporate sets of features tailored for specific genres, such as
dramatic texts, early manuscripts, transcribed speech, print dictionaries,
critical editions, and many others. In earlier versions of the Guidelines this
was accomplished by defining a required core tag set, several base sets corresponding to top-level genres (prose, verse, drama, etc.), and a few
additional tag sets for specialized features like names and dates or
linguistic analysis. The P5 revision is even more radically modular; it retains
the notion of a core module with essential common elements, and considers all
further tagsets as additional modules which can be combined, modified, and
trimmed to suit the user's needs. The TEI Consortium also provides tools to facilitate this
process.


The TEI language is also designed to be extensible. The
TEI Guidelines describe procedures by which users may add, redefine, or rename
elements and attributes to meet their needs. It is also
possible to incorporate other XML languages such as MathML or RDF into a
TEI-encoded document. The TEI Consortium has developed software tools to
simplify the task of creating a TEI customization: the tool for P5 is [Roma](/Roma/).



Guide to Best Practices
-----------------------



Just as memorizing the English meaning of every word in a French-English
dictionary will not enable one to speak intelligible French, using the TEI
language involves more than knowing the definition of each element and attribute
in its tag set. The TEI Guidelines, and the community documentation and support
that accompany them, provide a detailed exposition of agreed-upon requirements
and best practices in applying TEI encoding to texts.


In the print edition of the Guidelines, about
one-third of the pages are given to an alphabetical reference list of all TEI
elements, but two-thirds are devoted to explanation of concepts, descriptions of
proper usage, and examples of tagging.


### Validity and Conformance



The fundamental commonality among best practices for any
TEI-encoded document is established by the Guidelines; it is 
TEI conformance. TEI conformance is defined
formally in such a way that much of it can be checked via software.
Although its precise definition has changed over the course of TEI
revisions, essentially an encoded document is TEI-conformant if:


* it is a well-formed XML document;
* it validates against a standard
TEI schema, or against a schema that has been generated via
customizations as permitted in the TEI Guidelines
documentation;
* all modifications to the TEI tag set are correctly
documented, typically in the files used to create the
customization.



### Recommended Usages



Just as a syntactically correct sentence in a natural language may be
meaningless, so a TEI document may be formally conformant and yet fail to
encode a text in an optimal way. For example, if the lines of a prose paragraph are encoded with
l tags (which are intended for metrical lines in
poetry), the resulting document may well be valid, but does not
follow the intended use of the elements nor the spirit of TEI
encoding, and could hardly be called conformant, let alone a
best practice.


It is often observed in the TEI community that there is no one correct way to
encode any given text. Different projects and researchers will analyze texs
differently, and the TEI language was designed to be flexible enough to
allow a wide variety of local practice in encoding. However, the Guidelines
offer detailed advice about the recommended usage for TEI elements and
attributes, based on the TEI community's two decades of practical experience
applying them. In addition, TEI subcommunities with special requirements
often create shared standards for usage; for example, the library community
has established best practices for recording bibliographic information in
the TEI document header. It is common (and highly encouraged) for projects
using TEI encoding to develop their own consistently applied standards for
choosing among the encoding options that the Guidelines permit.


Informal community-wide discussion of what constitutes best practices is
carried out [on the TEI discussion list](../index.xml#tei-l); the
[TEI Council](..//activities/Council/) is ultimately responsible for decisions
about standards that are recommended officially by the TEI Consortium in
editions of the Guidelines and other publications.




 