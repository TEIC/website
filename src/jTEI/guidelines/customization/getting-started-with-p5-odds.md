---
layout: page.njk
title: "Getting Started with P5 ODDs"
---
# Getting Started with P5 ODDs

## Introduction

 This document describes how to produce a customization of the TEI P5 schema. From
 the
 start, the TEI was intended to be used as a set of building blocks for creating a
 schema
 suitable for a particular project. This is in keeping with the TEI philosophy of providing
 a vocabulary for describing texts, not dictating precisely what those texts must contain
 or might have contained. This means that it is *likely*, not just
 *possible*, that you will want to have a tailored view of the TEI.

 What do we mean by a 'customization'? It is important to understand
 that there is no single DTD or schema which is the TEI; you always choose from the
 available modules (there are currently 23 of them, listed in the [module list](#tab_modlist) below)
 those that you want, with the caveat that the modules **core**,
 **header**, **textstructure**, and **tei**, when
 using RELAX NG) should always be chosen unless you are certain you know what you are
 doing. Components from these modules are referred to throughout the other modules,
 and hence
 these modules cannot be eliminated without careful adjustments.

 Although there is no default schema, TEI P5 does provide a number of example
 customizations which may very well meet your needs; these can be downloaded from [the TEI web site](https://tei-c.org/guidelines/customization/):

* tei_bare: TEI Absolutely Bare
* teilite: TEI Lite
* tei_corpus: TEI for Linguistic Corpora
* tei_ms: TEI for Manuscript Description
* tei_drama: TEI with Drama
* tei_speech: TEI for Speech Representation
* tei_odds: TEI for authoring ODD
* tei_allPlus: TEI with maximal setup, plus external additions
* tei_svg: TEI with SVG
* tei_math: TEI with MathML
* tei_xinclude: TEI with XInclude

 Choosing the basic set of modules may be sufficient, but it's also possible that you
 may want to tailor your TEI schema more tightly. For instance, once you have decided that
 your application will make use of the **msdescription** and **linking**
 modules, you may also want to

* remove elements from some of the modules which you do not expect to use, to reduce
confusion and avoid the accidental use of elements you don't need
* rename elements
* add, delete or change attributes for existing elements, perhaps to make the
datatype stricter
* add new elements, and insert them into the TEI class system

 We will be seeing examples of each of these in the following sections.

 Below is a table of all of the TEI modules. More information about each one is given
 in the TEI Guidelines; each module corresponds to a single chapter.

### The TEI modules
 
| module name | title | elements defined |
| --- | --- | --- |
| analysis | Simple analytic mechanisms | 14 |
| certainty | Certainty and uncertainty | 3 |
| cmc | Computer Mediated Communication | 3 |
| core | Elements common to all TEI documents | 89 |
| corpus | Header extensions for corpus texts | 14 |
| dictionaries | Dictionaries and other lexical resources | 41 |
| drama | Performance texts | 17 |
| figures | Tables, formulae, and figures | 8 |
| gaiji | Character and glyph documentation | 9 |
| header | The TEI Header | 76 |
| iso-fs | Feature structures and feature system | 29 |
| linking | Linking, segmentation and alignment | 15 |
| msdescription | Manuscript Description | 72 |
| namesdates | Names and dates | 62 |
| nets | Graphs, networks and trees | 12 |
| spoken | Transcribed Speech | 18 |
| tagdocs | Documentation of TEI modules | 65 |
| tei | Declarations for datatypes, classes, and macros available to all TEI  modules | 214 |
| textcrit | Text criticism | 19 |
| textstructure | Default text structure | 33 |
| transcr | Transcription of primary sources | 30 |
| verse | Verse structures | 6 |


## Writing ODD specifications

 'ODD' (One Document
 Does it All) is a TEI XML format used to express schema fragments, prose documentation, and reference
 documentation for any XML markup scheme as a single document. It is the language in
 which the TEI is itself defined, and which should also be used to express a customization of the TEI scheme.
 The concepts of ODD were devised and implemented by Lou Burnard and Michael Sperberg-McQueen early in
 the development of the TEI. The language developed over time as the TEI was put
 together, and one form of it was documented in the TEI Guidelines (versions 3 and 4);
 unfortunately, that version of the markup was not what was actually used to write
 the TEI Guidelines, which diverged into a more complex scheme. For version 5 of the TEI,
 the entire ODD language was revised and simplified by a working group led by
 Sebastian Rahtz, and the Guidelines themselves brought into conformance with it.
 An ODD specification is a normal TEI XML document which includes components from the
 **tagdocs** module. This module is fully described in
 the TEI Guidelines chapter [Documentation Elements](http://tei-c.org/release/doc/tei-p5-doc/en/html/TD.html). The Guidelines also describe in some detail
 how an ODD file should be processed: see chapter [Using the TEI](http://tei-c.org/release/doc/tei-p5-doc/en/html/USE.html). The current document is a tutorial introduction to the information more fully presented
 in the Guidelines.
 
 The recommended way to customize the TEI is to create a formal specification expressing
 your customizations, as an XML document using TEI ODD markup; this can then be compiled
 into a suitable DTD, RELAX NG schema or W3C Schema (together with the appropriate
 reference documentation), using the [Roma](http://roma.tei-c.org/)
 program. **Roma** is a web-based interface for creating TEI
 customizations, which allows you to fill in simple forms to choose modules, add and
 delete elements, change attributes, and make other customizations. More advanced users can
 also create or edit an ODD by hand using normal XML editing tools.

 There are several important reasons why this high-level method is recommended:

1. Ihe resulting specification can be used to generate a schema in any currently popular
schema language (DTD, RELAX NG schema, W3C schema).
2. The specification is expressed using the familiar TEI
markup.
3. The specification is complete in itself and can be transferred to other TEI-aware
applications or users without worrying about any dependencies


### Key concepts

 There are several core components in the TEI infrastructure which you should understand
 before creating or editing your own ODD files. The concept of *modules* has been
 explained above: TEI elements and attributes are organized into a set of modules which
 group them according to their purpose.

 *Elements* are normally defined in the context of modules. For example, the
 [castList](http://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-castList.html) element is defined in the **drama** module. An element is
 defined (or 'declared') using the `<elementSpec>` element.

 In addition to being defined in modules, elements are also organized into *model
 classes*. A model class is a method of grouping a number of elements together so
 that they can be referred to easily as a group. For example,
 **model.graphicLike**
 'groups elements containing images, formulae, and similar objects', such as
 `<formula>` and `<graphic>`. Other elements (for instance `<figure>`)
 can then make use of this model as part of their content definition. Model classes
 are
 defined using the `<classSpec>` element, with the attribute
 `type="model"`. The `<classSpec>` does not contain a list of elements
 which belong to the class; instead, elements "claim membership" of the class through
 `<memberOf>` elements in their own `<elementSpec>`s.
 
 *Attributes* are always defined using the `<attDef>` element, but they
 may be defined in two different contexts. Some attributes are defined directly on
 elements; in other words, their definition forms part of the definition of the element
 on which they appear. For example, the [age](http://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-age.html)
 element, which is used to specify the age of a person, has an attribute called
 `@value`, which holds the numeric value of the person's age. This attribute is
 defined directly as part of the definition of the `<age>` element itself.
 
 Other attributes are used on a range of different elements. It is not efficient or
 practical to define the same attribute multiple times, once on each element, so these
 attributes are defined as part of *attribute classes*. The Guidelines
 provides a [list](http://www.tei-c.org/release/doc/tei-p5-doc/en/html/REF-CLASSES-ATTS.html) of all the TEI attribute classes. Each class provides one or more
 attributes which are likely to be useful in a particular context or for a particular
 purpose. For example, the `@source` attribute, which is used to provide a
 pointer to a bibliographical source for a quotation or reference, is defined in the
 **att.source** class. The elements `<quote>`, `<q>`,
 `<writing>` and `<egXML>` each declare membership of the
 **att.source** class, and thus acquire the `@source` attribute.

 Attribute classes may be nested. In other words, one attribute class may be a member
 of another. This is a convenient way of grouping similar classes of attributes so that
 an element can claim membership of all of them in one operation. For example, there are
 three base attribute classes relating to dating attributes:
 **att.datable.iso** (providing attribute for expression of dates in ISO
 format), **att.database.w3c** (providing attributes for dates in W3C format),
 and **att.datable.custom** (for dates in non-Gregorian calendars). There is
 also the **att.datable** class, of which the other three are all members. An
 element which claims membership of **att.datable** (such as `<date>`)
 will acquire all the attributes in the three base classes. Attribute classes are defined
 using the **classSpec** element, with the attribute
 `type="atts"`.
 
 The final important concept is the idea of a **macro**. A macro is basically
 a method of re-using the same block of content in multiple places. The most common
 macros are those which define datatypes for TEI attributes. For example, the
 **data.count** macro provides the definition of a positive integer, which
 is used as the datatype for more than 20 different attributes. Defining this datatype
 in one location avoids duplication and provides consistency. Other macros are used to
 define content models which are useful in the definition of many different elements;
 for instance, the **macro.paraContent** macro 'defines the content of
 paragraphs and similar elements', and is used in the definition of 50 different
 elements. Macros are defined using the `<macroSpec>` element.

 With this basic introduction to how elements, attributes and their components and
 relationships are defined, you may now want to take a look at some example
 specifications from the TEI repository:

* The [`<age>`](http://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-age.html) element contains one attribute definition, as mentioned above; it is also a member of three attribute classes, and one model class. If you look at the root `<elementSpec>` element, you'll see the attribute `module="namesdates"`; this is what determines that this element is part of the **namesdates** (Names and Dates) module.
* The [**att.typed**](http://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.typed.html) attribute class defines two attributes, `@type` and `@subtype`. It is part of the **tei** module.
* The **model.orgPart** specification demonstrates how simple a model class specification can be.

### The basic structure of a `<schemaSpec>`


 A TEI schema is defined by a `<schemaSpec>` element containing an arbitrary
 mixture of explicit declarations for objects (i.e. elements, classes, or macro
 specifications) and references to other objects containing such declarations. In
 simplified form, the data model is

~~~txt
 schemaSpec = (moduleRef | elementSpec | macroSpec | classSpec )*
~~~

 where `<elementSpec>`, `<macroSpec>` and
 `<classSpec>` contain definitions of TEI objects. `<moduleRef>` references
 groups of existing definitions, in one of two ways:

 1. If the *key* attribute is provided, it refers to the TEI name for a module, and details of that are accessed from the TEI web service database (which may be a local installation).
 2. If the *url* attribute is provided, it refers to an external file of schema definitions in the RELAX NG language (this is used to pull in non-TEI schemas)

 In the simplest case, a user-defined schema might simply combine all the declarations
 from some nominated modules:

~~~xml
 <TEI>
  <teiHeader>
    <fileDesc>
      <titleStmt>
        <title>TEI with simple setup</title>
        <author>Sebastian Rahtz</author>
      </titleStmt>
      <publicationStmt>
        <p>freely available</p>
      </publicationStmt>
      <sourceDesc>
        <p>Written from scratch.</p>
      </sourceDesc>
    </fileDesc>
  </teiHeader>
  <text>
    <body>
      <schemaSpec ident="oddex1" start="TEI">
        <moduleRef key="header"/>
        <moduleRef key="core"/>
        <moduleRef key="tei"/>
        <moduleRef key="textstructure"/>
      </schemaSpec>
    </body>
  </text>
 </TEI>
 ~~~

 Note that this is a normal TEI document, with a TEI header to supply some metadata.
 In the
 other examples that follow, we will usually omit the outer TEI wrapper and just show
 the
 `<schemaSpec>` element.
 
 An ODD processor, given such a document, will combine the declarations which belong
 to the named modules, and deliver the result as a schema of some requested type. It might
 also generate documentation for all (and only) the elements declared by those modules.
 The **start** attribute of `<schemaSpec>` is used to specify which elements are valid entry points
 in a RELAX NG schema .

 You can address individual elements or classes by adding
 `<elementSpec>`, `<classSpec>` or `<macroSpec>` elements after
 `<moduleRef>`. Each of these must have a **mode** attribute on it,
 which can take four values:
 
**add** the object is entirely new.

**replace** the object entirely replaces the existing object with the same **ident**.

**delete** all references to the original object with the same **ident** are removed from the schema.

**change** child elements of the object which appear in the original
 specification are replaced by the versions in the new specification. This may be at
 any level, as we will see in examples below.

 It is an error to provide `replace`, `delete` or
 `change` versions for objects which do not already exist in the TEI, and an
 error to add something with the same **ident** attribute as an existing
 object in the TEI.

### Adding new elements

 A schema can include declarations for new elements, as in the following example:

~~~xml
 <schemaSpec xmlns:rng="http://relaxng.org/ns/structure/1.0" ident="oddex1.5" start="TEI"
 xml:base="examples/odd1.5.xml">
  <moduleRef key="header"/>
  <moduleRef key="core"/>
  <moduleRef key="tei"/>
  <moduleRef key="textstructure"/>
  <elementSpec ident="soundClip" mode="add">
    <classes>
      <memberOf key="model.pPart.data"/>
    </classes>
    <content>
      <textNode/>
    </content>
  </elementSpec>
 </schemaSpec>
 ~~~

 A declaration for the element
 `<soundClip>`, which is not defined in the TEI scheme, will be added to the
 output schema. This element will also be added to the existing TEI class
 **model.pPart.data**, and will thus be avilable in TEI conformant
 documents.
 
 In the following example we add a new element `<rebirth>` which is modelled on the
 existing `<birth>` element:
 
~~~xml
 <schemaSpec xmlns:rng="http://relaxng.org/ns/structure/1.0" ident="oddex4" start="TEI"
 xml:base="examples/odd4.xml">
  <moduleRef key="header"/>
  <moduleRef key="core"/>
  <moduleRef key="tei"/>
  <moduleRef key="textstructure"/>
  <moduleRef key="corpus"/>
  <elementSpec ident="rebirth" mode="add">
    <gloss>Rebirth details</gloss>
    <desc>contains information about a soul's rebirth, such as its
    date and place.</desc>
    <classes>
      <memberOf key="model.persEventLike"/>
      <memberOf key="att.editLike"/>
      <memberOf key="att.datable"/>
      <memberOf key="att.naming"/>
    </classes>
    <content>
      <macroRef name="macro.phraseSeq"/>
    </content>
  </elementSpec>
 </schemaSpec>
~~~

 There are usually four parts to
 such an element definition:

1. An identifier (in this case the value `rebirth` for the
 **ident** attribute).
2. Documentation (the `<gloss>` and `<desc>` elements)
3. Declaration of which classes this element is to be a member of
 (**att.datable** and **att.naming**); this is the same as
 `<birth>`, which we have to find out by looking at the definition of that
4. The content model for the element, here the general purpose pattern
 **macro.phraseSeq**

 There is no need to specify a module for the element to appear in, as this would
 not be used for anything.

### Removing elements

 Specifing that we do not want some of the elements to appear in our final schema is
 easy:

~~~xml
<schemaSpec ident="oddex2" start="TEI" xml:base="examples/odd2.xml">
  <moduleRef key="header"/>
  <moduleRef key="core"/>
  <moduleRef key="tei"/>
  <moduleRef key="textstructure"/>
  <elementSpec ident="headItem" mode="delete" module="core"/>
  <elementSpec ident="headLabel" mode="delete" module="core"/>
  <elementSpec ident="hyphenation" mode="delete" module="header"/>
</schemaSpec>
~~~
 Note that no child elements of the deleted object are needed, or taken notice of.

### Changing existing elements

 When we come to *changing* existing elements, the specification looks a
 little more complex:

~~~xml
 <schemaSpec ident="oddex3" start="TEI" xml:base="examples/odd3.xml">
  <moduleRef key="header"/>
  <moduleRef key="core"/>
  <moduleRef key="tei"/>
  <moduleRef key="textstructure"/>
  <elementSpec ident="div" mode="change">
    <attList>
      <attDef ident="type" usage="req" mode="change">
        <gloss>You must indicate the level of the section</gloss>
        <datatype>
          <dataRef key="teidata.enumerated"/>
        </datatype>
        <valList type="closed" mode="replace">
          <valItem ident="section">
          <gloss>1st level section</gloss>
        </valItem>
        <valItem ident="subsection">
          <gloss>2nd level section</gloss>
        </valItem>
        <valItem ident="subsubsection">
          <gloss>3rd level section</gloss>
        </valItem>
        </valList>
      </attDef>
    </attList>
  </elementSpec>
 </schemaSpec>
 ~~~

 In this example, we are changing the behaviour of the
 `<div>` element so that the **type** attribute (inherited from the
 class **att.divLike**) is mandatory and chosen from a fixed set of values.
 The `change` value for **mode** must be supplied on each
 identifiable part of the object which is to change. So the `<elementSpec>` itself
 is in `change` mode, plus the `<attDef>` for **type**, while
 the `<valList>` is in `replace` mode. The elements we have
 *not* specified any change for (examples, references, etc) are copied from
 the original.
 
 Change mode can apply to classes as well as elements. In the following example, we
 remove a set of attributes which are provided for any element which is a member of
 the
 **att.linking** class:

~~~xml
 <schemaSpec ident="oddex5" start="TEI" xml:base="examples/odd5.xml">
  <moduleRef key="header"/>
  <moduleRef key="core"/>
  <moduleRef key="tei"/>
  <moduleRef key="textstructure"/>
  <moduleRef key="linking"/>
  <classSpec module="linking" ident="att.global.linking" mode="change">
    <attList>
      <attDef ident="corresp" mode="delete"/>
      <attDef ident="synch" mode="delete"/>
      <attDef ident="sameAs" mode="delete"/>
      <attDef ident="copyOf" mode="delete"/>
      <attDef ident="next" mode="delete"/>
      <attDef ident="prev" mode="delete"/>
      <attDef ident="exclude" mode="delete"/>
      <attDef ident="select" mode="delete"/>
    </attList>
  </classSpec>
 </schemaSpec>
~~~

 If you want to change which elements *belong* to **add.linking**, you
 must change the `<classes>` element of each of the elements separately.

### Adding new elements in in a different namespace

 A good example of this would be if you wanted to use the W3C XInclude scheme in your
 XML. This is a way of referring to external files to be transcluded (DTD users will
 be familiar with the use of file entities to perform this job). This document, for example,
 pulls in a table (created by an automatic process) by using this piece of code:

~~~xml
<include href="examples/modules.xml" xmlns="http://www.w3.org/2001/XInclude"/>
~~~

 Since the `<include>` could occur anywhere, we want to add it to a TEI class which
 is referenced almost everywhere; **model.inter** does this job nicely. We
 could pull in an external schema which defines `<include>`, but it may be amusing
 to define it ourselves using this `<elementSpec>`:

~~~xml
 <elementSpec ident="xinclude" mode="add" xmlns:rng="http://relaxng.org/ns/structure/1.0"
 ns="http://www.w3.org/2001/XInclude">
  <altIdent>include</altIdent>
  <classes>
    <memberOf key="model.common"/>
  </classes>
  <content>
    <elementRef key="fallback" minOccurs="0" maxOccurs="1"/>
  </content>
  <attList>
    <attDef ident="href" usage="req">
      <datatype>
        <dataRef name="anyURI"/>
      </datatype>
    </attDef>
    <attDef ident="parse">
      <datatype>
        <dataRef key="teidata.enumerated"/>
      </datatype>
      <valList>
        <valItem ident="xml"/>
        <valItem ident="text"/>
      </valList>
    </attDef>
    <attDef ident="xpointer">
      <datatype>
        <dataRef key="teidata.text"/>
      </datatype>
    </attDef>
    <attDef ident="encoding">
      <datatype>
        <dataRef key="teidata.text"/>
      </datatype>
    </attDef>
    <attDef ident="accept">
      <datatype>
        <dataRef key="teidata.text"/>
      </datatype>
    </attDef>
    <attDef ident="accept-charset">
      <datatype>
        <dataRef key="teidata.text"/>
      </datatype>
    </attDef>
    <attDef ident="accept-language">
      <datatype>
        <dataRef key="teidata.text"/>
      </datatype>
    </attDef>
  </attList>
</elementSpec>
<elementSpec ident="fallback" ns="http://www.w3.org/2001/XInclude">
  <content>
    <anyElement except="http://www.w3.org/2001/XInclude" minOccurs="1" maxOccurs="unlimited"/>
  </content>
</elementSpec>
 ~~~

 Note the new **ns**
 attribute on `<elementSpec>` which says that this element is not to be defined in
 the default (TEI) namespace.

### Processing your ODD specification

 When you have finished writing your customization, you can turn your ODD into schemas
 or DTDs for use with XML editors or validators, or create schema documentation showing
 the specification for your elements and classes.

 There are a few options for carrying out both of these tasks:

* the [TEIGarage web-based application](https://teigarage.tei-c.org)
* the [Roma web-based application](https://tei-c.org/guidelines/customization/customizing-the-tei-with-roma/)
* the [command-line scripts that are part of the TEI stylesheet package](http://tei-c.org/release/doc/tei-xsl/#commandline)
* [oXygen XML Editor version 13.1 or later](http://tei-c.org/release/doc/tei-xsl/#oxygen)

## Making use of non-TEI schemas

 The TEI was designed to capture all the vagaries of literary and linguistic
 *text*; it does not attempt to describe other specialised descriptive
 languages, such as those for chemistry, mathematics, and vector graphics, or the technical
 vocabulary of fields like law, health care and computer science. Some of the areas
 have been addressed as thoroughly as the TEI in their own standards. But what if we want
 to write a composite document mixing material from two fields? Since all the TEI elements
 are in their own XML namespace, it is easy to write a document which interleaves TEI markup
 with markup from another namespace, as in this example of TEI and Docbook:

~~~xml
 <p>
 The button on our web page shows the the date of the manuscript:
 <guibutton xmlns:dbk="http://docbook.org/docbook-ng">
 <date calendar="Julian" when="1732-02-22">Feb. 11, 1731/32, O.S.</date>
 </guibutton>Note that the representation is as found in the text, not normalized.
 </p>
~~~

 But what about validating this XML against a schema? Using the [Namespace-based Validation Dispatching
 Language](http://www.nvdl.org/), we can validate the two languages
 separately, but we also want a TEI customization which checks where insert of
 'foreign' elements is permitted. This means importing another schema,
 and changing one or more TEI classes to allow for the new element(s). If it is also
 required that TEI elements be allowed inside the elements of the other namespace,
 we also have to modify the other namespace.
 
 Two common cases which do not require interleaving are:
 
1. redefining the content of `<formula>` to allow for MathML markup.
2. redefining the content of `<figure>` to allow SVG markup.

 In each case, we first need a `<moduleRef>` which loads the external schema in RELAX NG
 format:

~~~xml
<moduleRef url="mathml2-main.rng"/>
<moduleRef url="svg-main.rng"/>
~~~

These schemas can be downloaded
from [MathML](http://www.w3.org/Math/) and [SVG](http://www.w3.org/TR/SVG11/); note that they may each need a small fix to remove the RELAX NG <start>
pattern, as this causes a conflict with the TEI definition. These define respectively
two patterns called `mathml.math` and `svg.svg`, which we can proceed to add
to TEI content models.

For MathML, we redefine the content of the TEI `<formula>` element:

~~~xml
 <schemaSpec ident="tei_math" prefix="tei_" start="TEI teiCorpus" xmlns:teix="http://www.tei-c.org/ns/Examples"
 defaultExceptions="http://www.w3.org/1998/Math/MathML http://www.tei-c.org/ns/1.0
 teix:egXML">
  <moduleRef url="https://www.tei-c.org/release/xml/tei/Exemplars/mathml2-main.rng"/>
  <moduleRef key="header"/>
  <moduleRef key="core"/>
  <moduleRef key="tei"/>
  <moduleRef key="textstructure"/>
  <moduleRef key="figures"/>
  <elementSpec module="figures" ident="formula" mode="change">
  <content>
    <elementRef key="mathml.math"/>
  </content>
  </elementSpec>
 </schemaSpec>
~~~

For SVG, we need to change the model of `<figure>`, simply adding a reference
 to `svg.svg` at the end of a `<choice>` list:

~~~xml
 <elementSpec ident="figure" mode="change" xml:base="examples/addsvg.xml">
  <content>
    <rng:zeroOrMore xmlns:rng="http://relaxng.org/ns/structure/1.0">
      <rng:choice>
        <rng:ref name="model.Incl"/>
        <rng:ref name="figure"/>
        <rng:ref name="figDesc"/>
        <rng:ref name="graphic"/>
        <rng:ref name="head"/>
        <rng:ref name="p"/>
        <rng:ref name="svg.svg"/>
    </rng:choice>
    </rng:zeroOrMore>
  </content>
 </elementSpec>
~~~
