---
title: "TEI P5 Guidelines version 2.6.0 is released!"
date: "2014-01-23"
author: "theteiadmin"
permalink: "/news/2014/01/23/tei-p5-guidelines-version-2-6-0-is-released/"
tags: ["News"]
---



```
Dear TEI Community,

Today, Monday 20 January 2014, your TEI Consortium has released 
TEI P5 Guidelines version 2.6.0 (Codename: Rosetta). This release 
has involved some major changes: some are things the people will 
notice, e.g. where we now enforce things the Guidelines have said 
for a very long time (see publicationStmt below), and others 
might not be noticed by most users but are helping us build 
towards a more robust TEI future, e.g. more for 'pure ODD'. 
Simultaneously we have improved some of the mechanisms through 
which we manage the development of the Guidelines, e.g. with this 
release we have moved to timing them after having given TEI-L 
warning and encouraging the community to proofread the pending 
release. (Thank you to all who sent in corrections.)

With this release we have a newly elected member of the TEI 
Technical Council, Peter Stadler from the University of 
Paderborn, who has acted as the release technician. As the 
[http://www.tei-c.org/](/) server moved to a new infrastructure since 
the last release we suspected that there might be some problems 
in our scripts automating the release. Even though we tested 
everything we thought could go wrong, there were indeed some 
minor problems that delayed the release slightly. Peter managed 
solve the problems with the dedicated help of the TEI Technical 
Council, especially that of Sebastian Rahtz and Martin Holmes to 
whom we are all indebted.

As always, please do report bugs and make feature requests for 
changes to the Guidelines or its other outputs (preferably via 
the SourceForge site) since this is how the TEI improves. The 
updated version of the TEI Guidelines are available from all the 
usual places (such as the TEI website 
[http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html)](/release/doc/tei-p5-doc/en/html/index.html). 
The TEI P5 version 2.6.0 release notes are below, but also available at 
[http://www.tei-c.org/release/doc/tei-p5-doc/readme-2.6.0.html](/release/doc/tei-p5-doc/readme-2.6.0.html).

James Cummings
Chair, TEI Technical Council
=====

  TEI P5 version 2.6.0 release notes

This version of the TEI Guidelines introduces new features and 
resolves a number of issues raised by the TEI community. As 
always, the majority of these changes and corrections are a 
consequence of feature requests or bugs reported by the TEI 
community using the SourceForge tracking system. If you find 
something you think needs to change in the TEI Guidelines, 
schemas, tools, or website, please submit a feature request or 
bug ticket at<http://tei.sf.net/for> consideration. Lists ofclosed 
bugs 
<[http://sourceforge.net/p/tei/bugs/search/?q=status%3Aclosed-wont-fix+or+status%3Aclosed-rejected+or+status%3Aclosed-out-of-date+or+status%3Aclosed-accepted+or+status%3Aclosed-works-for-me+or+status%3Aclosed+or+status%3Aclosed-duplicate+or+status%3Aclosed-invalid+or+status%3Aclosed-fixed](https://sourceforge.net/p/tei/bugs/search/?q=status%3Aclosed-wont-fix+or+status%3Aclosed-rejected+or+status%3Aclosed-out-of-date+or+status%3Aclosed-accepted+or+status%3Aclosed-works-for-me+or+status%3Aclosed+or+status%3Aclosed-duplicate+or+status%3Aclosed-invalid+or+status%3Aclosed-fixed)>andclosed 
feature requests 
<[http://sourceforge.net/p/tei/feature-requests/search/?q=status%3Aclosed-wont-fix+or+status%3Aclosed-later+or+status%3Aclosed-rejected+or+status%3Aclosed-out-of-date+or+status%3Aclosed-accepted+or+status%3Aclosed-remind+or+status%3Aclosed+or+status%3Aclosed-duplicate+or+status%3Aclosed-invalid+or+status%3Aclosed-fixed](https://sourceforge.net/p/tei/feature-requests/search/?q=status%3Aclosed-wont-fix+or+status%3Aclosed-later+or+status%3Aclosed-rejected+or+status%3Aclosed-out-of-date+or+status%3Aclosed-accepted+or+status%3Aclosed-remind+or+status%3Aclosed+or+status%3Aclosed-duplicate+or+status%3Aclosed-invalid+or+status%3Aclosed-fixed)>are 
available on the site.

Some of the more noticeable changes inthis release 
<[http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html](/release/doc/tei-p5-doc/en/html/index.html)>include:

  * Footnotes in the Guidelines now appear in a popup box when
    you click on them, rather than causing a jump to the bottom
    of the page. (This function depends on JavaScript; if you
    have JS turned off, the old behaviour will still work.)
  * The prose restriction that
    the<pubPlace>,<address>,<idno>,<availability>,
    and<date>children of<publicationStmt>occur in that order has
    been removed.
  * The content model of<publicationStmt>has been updated to
    reflect the restrictions detailed in the prose of
    section2.2.4 Publication, Distribution, Licensing, etc.
    <[http://www.tei-c.org/release/doc/tei-p5-doc/en/html/HD.html#HD24](/release/doc/tei-p5-doc/en/html/hd.html#hd24)>.
    For more information on this please
    see[http://wiki.tei-c.org/index.php/PublicationStmt-Changes](https://wiki.tei-c.org/index.php/PublicationStmt-Changes).
  * <stage>now claims membership of att.placement (and thus gets
    the@placeattribute) as
    per<https://sourceforge.net/p/tei/feature-requests/476/>.
  * <docDate>is now available as a child
    of<dateLine>([https://sourceforge.net/p/tei/feature-requests/472/)](https://sourceforge.net/p/tei/feature-requests/472/%29),
    and the content models of<signed>and<salute>have been
    loosened
    (<https://sourceforge.net/p/tei/feature-requests/433/;https://sourceforge.net/p/tei/feature-requests/478/>)
    to allow more flexibility in the‘top’‘tail’of sections
    (prompted by experience in EEBO TCP)
  * <l>is now allowed in the<trailer>
  * Usage of@corresphas been clarified
    ([https://sourceforge.net/p/tei/bugs/506/)](https://sourceforge.net/p/tei/bugs/506/%29).
  * The value of the@matchPatternattribute is now defined as W3C
    XPath syntax rather than W3C XML Schema Language
    ([https://sourceforge.net/p/tei/feature-requests/432/)](https://sourceforge.net/p/tei/feature-requests/432/%29). This
    allows for more powerful regular expressions.
  * @perfon<tech>now has the datatype 1+ data.pointer, instead of
    data.enumerated ([http://sourceforge.net/p/tei/bugs/524/)](https://sourceforge.net/p/tei/bugs/524/%29).
  * Support for ‘pure ODD’: it is now possible to define content
    models using TEI XML constructs only, as an alternative to
    the use of RELAX NG. This change is discussed further in a
    paper by Burnard and Rahtz presented at2013's ACM Document
    Engineering conference <<http://www.doceng2013.org/programme>>.
    Support for the new syntax in ODD processing scripts is
    incomplete, however, and not yet fully tested.
  * Use of the element<valDesc>throughout the TEI specifications
    code was rationalised: mostly this involved removal of
    redundant commentary, but in some cases element or attribute
    descriptions have been extended or modified.
  * A new<abstract>element has been added to support descriptive
    metadata about a ‘born-digital’ item (such as a journal
    article in a review) to be stored in the TEI Header
    per<https://sourceforge.net/p/tei/feature-requests/471>
  * @namehas been made optional (previously required)
    on<relation>as
    per<https://sourceforge.net/p/tei/feature-requests/467/since> a
    Schematron test is in place to check whether one
    of@name,@ref, or@keyis available.
  * <forest>and<forestGrp>,<colloc>and others are examples of
    elements which used to have locally-declared@typeattributes
    which benefit from the ability to now modify class-provided
    attributes locally to the element. They now claim membership
    of att.typed (and thus get@typeand@subtypeattributes).
    Similarly<desc>is now also a member of att.typed as
    per<https://sourceforge.net/p/tei/feature-requests/473/>.
  * The<s>element has been modified to not allow it to self-nest
    as per<https://sourceforge.net/p/tei/bugs/578>

There are also some changes to the way the Council is managing 
the Guidelines:

  * Pre-release versions of the TEI P5 development tree are now
    tagged as ‘alpha’ and ‘beta’ in their version information.
  * In preparation for a program to get translations of reference
    documentation up to date, all<desc>and<gloss>elements have
    been dated. This allows us to easily generate lists of
    translated blocks which need revising.
  * More examples were added or corrected in this release and
    improvements to the overall way examples are maintained is
    under consideration by the TEI Technical Council.

In addition, the XSL stylesheets which provide processing of TEI 
ODD files for Roma and OxGarage have been updated, notably 
providing better support for multi-namespace ODD. The Stylesheets 
are being maintained separately from the Guidelines and are 
at<https://github.com/TEIC/Stylesheets>.

-- 
Dr James Cummings, James.Cummings@it.ox.ac.uk
Academic IT Services, University of Oxford
```


