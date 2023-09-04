---
layout: page.njk
title: "Tools"
---
# Tools



 
 


 Tools for creating, editing, transforming, and publishing TEI documents and schemas
 are essential to using the TEI Guidelines. Since the TEI rules and recomendations
 are expressed in XML, TEI users can take advantage of the abundance of XML tools developed
 for general use. In addition, the TEI community develops and distributes TEI-specific
 tools.
 
 Some tools are maintained and distributed directly by the TEI: for instance, the Roma
 tool for schema customization is an integral part of the publication of the TEI Guidelines,
 though the underlying tool may also be installed and used separately. Similarly, the
 stylesheets that are used by the TEI itself to convert TEI documents into various
 formats are distributed here for use and adaptation by others. Tools maintained by
 the TEI are described in more detail below and are open-source, [made available under the terms and conditions of both Creative Commons Attribution-ShareAlike
 3.0 Unported License and a BSD 2-Clause license](../Guidelines/access.xml#licensing).
 
 Others tools are contributed by members of the TEI community and are not maintained
 by the TEI. These might include tools for authoring and editing, for publishing collections
 of TEI documents online, or for generating visualizations of metrical structure. The
 community is strongly encouraged to contribute tools that may be generally useful,
 to [inventory them on the TEI wiki](https://wiki.tei-c.org/index.php/Category:Tools), and to adapt or improve existing tools when allowed under an open-source license.
 Note that the TEI does not endorese any particular tool that it does not maintain
 and distribute.
 
 There is also a [Special Interest Group on Tools](/activities/SIG/Tools/).
 
 
 
 Generation of schemas and documentation: Roma
 
 [Roma](https://roma2.tei-c.org/) is a web-based application which allows TEI users to
 generate P5-compatible schemas and documentation. Roma is useful for all TEI customization
 development, whether you want to create a simple TEI schema by selecting a few of
 the most relevant TEI modules for your project, or want to do a more complex customization
 involving modifications to specific elements. Roma can also help you generate TEI
 documentation in languages other than English (for more detail, see the section on
 internationalization below). For detailed instructions on using Roma, see [Customizing the TEI with Roma](../Guidelines/Customization/use_roma.xml). A command-line version of Roma (called roma) is also available and can be installed
 and run locally; a description and instructions for use can be found [here](../Guidelines/Customization/odds.xml#romacommandline). The source code for Roma
 is available from the [TEI Sourceforge site](https://sourceforge.net/project/showfiles.php?group_id=106328&package_id=141128). Roma is the P5 equivalent of the
 older
 [TEI Pizza Chef](/Vault/P4/pizza.html)
 a web-based tool that builds customized
 TEI DTDs compatible with P4 and earlier versions of the Guidelines.
 
 

 
 Stylesheets for converting TEI documents to various formats
 
 The TEI maintains a library of [XSL stylesheets](./Stylesheets/) developed by Sebastian Rahtz,
 which can convert TEI XML files to HTML, LaTeX, or XSL:FO documents. These stylesheets
 are designed for specific purposes and are not intended as general-purpose conversion
 tools. Other
 XSL and CSS stylesheets are listed in the stylesheets section of the [TEI wiki](https://wiki.tei-c.org/index.php/Stylesheets), and
 all TEI users are encouraged to contribute their own stylesheets to this collection.
 
 

 
 Conversion to and from TEI:
 
 [OxGarage](https://oxgarage2.tei-c.org/) is a web, and RESTful, service to manage the transformation of documents between
 a variety of formats. The majority of transformations use the Text Encoding Initiative
 format as a pivot format. It is a good tool for conversion from TEI to Word (.docx),
 or Word (.docx) to TEI, but also does many other formats.
 
 

 
 Internationalization of the TEI
 
 One important tool developed by the TEI is the system for generating versions of the
 Guidelines in languages other than English. This initiative, funded in part by the
 [ALLC](http://www.allc.org/), provides a framework for managing translations of the TEI reference documentation,
 element names, attribute names and values, and potentially the prose of the TEI Guidelines
 themselves. Work is currently under way to translate the reference documentation and
 the element and attribute names into five languages: French, Spanish, German, Chinese,
 and Japanese. Other languages to be covered in the future if funding and effort permit
 include Hindi, Italian, Polish, Romanian, Slovenian, and Tibetan. With this framework
 in place, TEI users will be able to generate internationalized versions of the TEI
 using the Roma interface described above. Click [here](I18N/) for more information.
 
 
  
