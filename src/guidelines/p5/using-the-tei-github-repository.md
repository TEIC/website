---
layout: page.njk
title: "Using the TEI GitHub Repository"
---
# Using the TEI GitHub Repository
Introduction
------------


The TEI makes its development files openly available on <https://github.com/TEIC> so that users can try out
the latest developments and provide feedback about how they
think the TEI should develop. This document aims to give a
brief introduction to using these files directly from the TEI
GitHub git Repository in which they are kept. However, it is not
necessary to learn how to use the Repository if you simply want
to use the most stable versions of the various TEI products.

About Version Control
---------------------


The Repository uses a Version Control System known as
git. This tool, like its predecessors CVS
(Concurrent Versions System) and SVN (Subversion),
is a content versioning tool used
by many software developers to keep track of changes within
their source code tree. Git provides the means to store
not only the current version of a file, but a record of all
changes (and who made those changes) that have occurred to that
file. Use of git is particularly common on projects
whose development is being undertaken by those in disparate
geographical locations, or with multiple developers, since it
ensures that changes made by one person are not accidentally
removed when another person posts their changes to the source
tree.
The GitHub site provides more detailed [information
about Git](https://help.github.com/articles/set-up-git/) and how to use it.




Checking files out of the Repository
------------------------------------


To check out the contents of a TEI GitHub Repository
with a simple Unix git client, enter a command like
this:
`git clone https://github.com/TEIC/TEI.git ./TEI`
This will copy all files from the TEI repository into the
directory ./TEI.


You can also browse the whole Repository using
GitHub's [web\-based Repository viewer](https://github.com/TEIC/TEI).




TEIC Packages
-------------


The TEIC Repository contains files which are grouped into a
small number of discrete packages for release. The following
packages are currently maintained:
* [TEI P5](#P5)
	+ TEI P5 Guidelines and Schema
* [Stylesheets](#Stylesheets)
	+ TEI XSLT Stylesheets Development Module
* [Roma](#Roma)
	+ TEI\-Conformant Validator (DTD, RELAX NG or W3C Schema)
	Creator Development





### Prerequisites for use of TEI Modules


These packages and their associated Makefiles and scripts are
all developed and tested on a Debian Linux system. While they
should work (possibly with customization) on other \*NIX
systems (including OSX), they are not designed to work on Microsoft Windows.
If you want to use the scripts provided with these packages,
we recommend you to install the following additional software
packages:


* ant
* jing
* perl
* saxon
* trang
* xmllint
* xsltproc




### P5 Guidelines and Schema Development Package


This package contains the source files for the development
version of the TEI Guidelines and associated schemas. Inside the
TEIC/TEI repository the sources of the English chapters of the Guidelines are in
`P5/Source/Guidelines/en/`. To allow for
internationalization, if translations of the
Guidelines are made available they will be located in the same
place but under their ISO two\-letter language code. The source
files of the Guidelines also reference separate specifications of
elements, attributes and classes which are maintained in a
separate directory `P5/Source/Specs/` with
internationlization handled internally. All of these files are
in the TEI ODD (One Document Does it all)
format. This is a TEI format specifically intended for writing
guidelines about encoding, from which schemas and reference
documentation can be automatically generated.
As part of the P5 module, a Makefile is provided to
help generate HTML versions of the TEI
Guidelines, create compiled schemas, and various other
possibilities. There are a number of variables that one can
change at the beginning of the Makefile. Some of the more
important of these are:


PREFIX


* + This is the default location under which you wish to
	install files locally if you use the
	'install' target. By default this is: /usr


XSL
* + This is the location of the XSLT stylesheets required
	for the transformation of ODD files. By default this points
	to the location of the stylesheets as installed by the TEI
	Debian Packages: /usr/share/xml/tei/stylesheet however, if you want to
	use a remote copy of the stylesheets you may wish to change
	this. One option is to use the stylesheets on the TEI
	website: [http://www.tei\-c.org/release/xml/tei/stylesheet/](/release/xml/tei/stylesheet/) as
	the value of this variable.


ROMAOPTS
* + This variable is used to pass options to Roma such as the
	local source file for the TEI Guidelines. By default this is
	"`--localsource=${DRIVER}.xml`"


DRIVER
* This points to the available local source file for the
TEI Guidelines. By default this is
"`${LANGTREE}/guidelines-${LANGUAGE}.xml`", and changing
LANGTREE and LANGUAGE would allow the generation of the
guidelines in different languages if the source files for
those languages exist.


The makefile has a number of requirements, these include
internet access (or a local copy of the stylesheets), and
up\-to\-date versions of the ant, perl, jing, trang, saxon, xmllint and
xsltproc programs. If you do not have these installed then many
of the make targets will not work. Fortunately, there is a target
which will check to make sure you have these installed:
`make check`. Some of the more important targets are
listed below:
* Makefile Targets
	 + checkUsage: `make check`This target checks to see whether you have ant perl, jing,
	trang, xmllint, saxon, and xsltproc installed.
	+ defaultUsage: `make`This is the default target and creates the TEI P5 schemas
	in RELAX NG \& DTD and the HTML version of the
	Guidelines.
	+ convertUsage: `make convert`This target creates the TEI P5 schemas in RELAX NG
	\& DTD.
	+ dtdsUsage: `make dtds`This target creates DTDs for TEI P5 in the DTD/ directory.
	+ schemasUsage: `make schemas`This target creates RELAX NG Schemas for TEI P5 in the
	Schema/ directory.
	+ html\-webUsage: `make html-web`This target creates an HTML version of the TEI Guidelines
	in the Guidelines/ directory.
	+ xmlUsage: `make xml`This target creates a TEI Lite (P5\) XML version of the
	Guidelines as Guidelines.xml in the current directory (i.e.,
	P5/) as well as also making the exemplars discussed
	below.
	+ splitUsage: `make split`This target creates a set of TEI P5 ODD files, with entities
	resolved, that are a version of the Guidelines split into
	chapters, in the split/ directory.


