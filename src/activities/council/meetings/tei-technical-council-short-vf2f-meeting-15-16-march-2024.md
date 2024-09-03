---
title: "TEI Technical Council Short VF2F Meeting, 15–16 March 2024"
date: 2024-03-16
---
# TEI Technical Council Short VF2F Meeting, 15–16 March 2024
### Meeting Times


 


| **Friday, March 15** | 16:00–19:00 PDT | North American break\-outs |
| --- | --- | --- |
| **Saturday, March 16** | 10:00–13:00 CET | European break\-outs |
|  | 07:00–11:00 PDT | Council meeting |


### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshe­ro\-Bondar (EBB, Chair)
* Gustavo Riva (GR)
* Torsten Roeder (TR)
* Martina Scholger (MS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


### Apologies/Not Present


* Elli Bleeker (EB)
* Patricia O’Connor (TOC)
* Sabine Seifert (SS)


Friday, March 15 (American break\-out session)
==============================================


Stylesheets Pull requests
-------------------------


* [\#651](https://github.com/TEIC/Stylesheets/pull/651) tidy up FPI generation
	+ merged prior to meeting
* [\#660](https://github.com/TEIC/Stylesheets/pull/660) Do not copy attrs from TEI constraint element to Schematron rule element
	+ merged prior to meeting
* [\#672](https://github.com/TEIC/Stylesheets/pull/672) Fix spelling
	+ merged prior to meeting
* [\#633](https://github.com/TEIC/Stylesheets/pull/633) make att.repeatable work for \<sequence\>, \<alternate\>, and \<anyElement\>
	+ merged
* [\#648](https://github.com/TEIC/Stylesheets/pull/648) overhaul tei:descOrGlossOutOfDate() function
	+ closed without merging because it was already corrected in dev
* [\#301](https://github.com/TEIC/Stylesheets/pull/301) Reordered stylesheets and addressed \#281
	+ **Action on EBB**: reach out to Ontologies SIG and request their advice as this is ancient PR
* [\#629](https://github.com/TEIC/Stylesheets/pull/629) Order of name components no longer imposed
	+ in “draft” state
	+ changes are definitely an improvement for a more culturally sensitive processing of parts of a name based on the source encoding
	+ JT: we should keep option to access the original template, it should be available at command line for users who work with teiGarage
	+ **Action on HBS**: update branch and request re\-review from reviewers to be sure it's okay to merge, and to decide whether to allow the option to access the original template


* [\#670](https://github.com/TEIC/Stylesheets/pull/670) Corrected typo for issue \#584
	+ merged by European break\-outs


 
Guidelines Issues
-----------------


* [\#2444](https://github.com/TEIC/TEI/issues/2444) Guidelines should clarify how fragmentary Schematron should be expanded
	+ conceptually tied to [\#2510](https://github.com/TEIC/TEI/issues/2510)
	+ closed ‘won’t fix’


* [\#2380](https://github.com/TEIC/TEI/issues/2380) Invalid specification document for egXML
	+ SB was hoping for 
		- a) someone would explain why it is a good idea to prevent \<egXML\> from occurring in \<egXML\>; or
		- b) people would express support for the idea of allowing \<egXML\> in \<egXML\> in tei\_all
	+ Martin Holmes just added a comment


* [\#2371](https://github.com/TEIC/TEI/issues/2371) Multiple \<attDef\>s with the same @ident in the same \<attList\> should be invalid
	+ see PR [\#2534](https://github.com/TEIC/TEI/pull/2534)


* [2444](https://github.com/TEIC/TEI/issues/2444) Guidelines should clarify how fragmentary Schematron should be expanded
	+ SB commented on ticket: issue conceptually tied to [\#2510](https://github.com/TEIC/TEI/issues/2510), and should be closed ‘won’t fix’ when that one is implemented
	+ **Action on JT**: close ticket


Saturday, March 16 (European break\-out session)
================================================


Guidelines Pull requests
------------------------


* [\#2511](https://github.com/TEIC/TEI/pull/2511) 2 of 3 requested improvements to gaiji descriptions
	+ merged
* [\#2513](https://github.com/TEIC/TEI/pull/2513) issue deprecation warning when assertion is made without context
	+ merged after tweaking of deprecation, removing of extraneous namespace declarations, and review from Martin Holmes
* [\#2527](https://github.com/TEIC/TEI/pull/2527) Update reg.xml
	+ merged after meeting


* [\#2532](https://github.com/TEIC/TEI/pull/2532) Updated prose and added deprecation information for ´superEntry´ element
	+ merged after tweaking of files according to the OP and adding proposed value in the example


Guidelines Issues
-----------------


* [\#2488](https://github.com/TEIC/TEI/issues/2488) Deprecate \<superEntry\>
	+ European subgroup (with [@sydb](https://github.com/sydb)), in particular [@tuurma](https://github.com/tuurma), prefers no @type on the wrapping \<entry\> (that replaces what we now call \<superEntry\>)
	+ closed after making changes (one example uses "wordFamily" and the other has no @type at all)


* Work on other PRs and issues, see full Council meeting


Saturday, March 16 (Full Council)
=================================


Guidelines Pull requests
------------------------


* [\#1996](https://github.com/TEIC/TEI/pull/1996) align teidata.version with Semantic Versioning Specification, closes \#1993
	+ Lengthy discussion on “semver”
	+ Main problem: versioning system (major\-dot\-minor\-dot\-patch followed by optional ‘a’ or ‘b’, or supposedly ‘α’, ‘Β’, “alpha”, or “beta”) is not permitted by the datatype used for TEI/@version and teiCorpus/@version
	+ datatypes for other version numbers need rationalization as well
	+ teidata.version should allow for multiple variations
	+ Should the TEI provide a datatype that is not used by any actual element or attribute defined by the Guidelines themselves?
	+ **Council decision:** development of a comprehensive system for datatypes of version numbers
		- An uber\-datatype (e.g. teidata.version or teidata.versionIndicator or teidata.versionNumber) should be defined as an alternation of various specific datatypes which match particular kinds of version numbering systems. E.g.:
			* teidata.semVer would match the major\-dot\-minor\-dot\-patch\-optional\-dash\-details kinda thing (TEI/@version, teiCorpus/@version)
			* teidata.calVer would match date\-like version numbers (e.g.: 20240315\)
			* teidata.unicodeVer would match theirs (att.gaijiProp)
			* teidata.version.versionNumber (e.g. 4\.7\.0\)
		- I.e., teidata.version would be defined as something like



> \<dataSpec ident\="teidata.version"\>
> 
> 
> \<content\>
> 
> 
> \<alternate minOccurs\="1" maxOccurs\="1"\>
> 
> 
>  \<dataRef key\="teidata.version.semVer"/\>
> 
> 
>  \<!\-\- follows semantic versioning syntax, see https://semver.org/ \-\-\>
> 
> 
>  \<dataRef key\="teidata.version.calVer"/\>
> 
> 
>  \<!\-\- follows calendar versioning syntax, see https://calver.org/ \-\-\>
> 
> 
>  \<dataRef key\="teidata.version.unicodeVer"/\>
> 
> 
>  \<!\-\- an enumerated list of Unicode versions (currently in att.gaijiProp)\-\-\>
> 
> 
>  \<dataRef key\="teidata.version.versionNumber"/\>
> 
> 
>  \<!\-\- for backwards comopatability \-\-\>
> 
> 
> \</alternate\>
> 
> 
>  \</content\>
> 
> 
> \</dataSpec\>


* original issue [\#1993](https://github.com/TEIC/TEI/issues/1993): value of @version on TEI / teiCorpus will be changed to teidata.version.semVer
* SB: a TEI schema should permit only 1 possible value on TEI/@version or teiCorpus/@version, namely that schema’s version number. That schema number might be derived by appending the schemaSpec/@ident to the version number of the schema pointed to by @source. \[This would be a related issue \>\> new ticket.]
* \[AFTER\-the\-meeting addition by SB: calVer does not define a syntax, but rather discusses many of the various syntaxes out there. Work on that needed.]


* [\#2431](https://github.com/TEIC/TEI/pull/2431) first draft for a TEI with RDFa exemplar
	+ **Action on MS and HBS**: work on this before the next VF2F, consult with Ontologies SIG


* [\#2442](https://github.com/TEIC/TEI/pull/2442) First crack at addressing \#2173 in a serious way
	+ PR can be closed “won’t fix” because [\#2513](https://github.com/TEIC/TEI/pull/2513) is a superset of this
	+ branch should not be deleted yet, as there are some other changes (particularly to Makefile and buid.xml) that we may want to keep


 
CMC chapter discussion
----------------------


* Discussion on Chapter draft for CMC (Computer Mediated Communication)
* [\#1955](https://github.com/TEIC/TEI/issues/1955) FR: TEI Features for CMC
	+ EBB: add encoding for reactions and quantity of reactions to posts (e.g. thumbs\-ups, hearts, etc) .
	+ **Action on SB**: Move cmc\-features branch from [CMC\-SIG](https://github.com/TEI-CMC-SIG/cmc-core) to Council repo


* PR [\#2537](https://github.com/TEIC/TEI/pull/2537) created, chapter review added to PR


* general remarks: 
	+ Be more explicit about what's in scope vs. out of scope 
		- What is better handled by TEI for correspondence? E.g. For e\-mail, should CMC be used or \<correspDesc\>? Or do we recommend mixing the approaches?
		- \<correspDesc\>
		- Handling listserv archives of e\-mail lists
		- Perhaps just an example or two
		- EBB: numbered subsection in the chapter for this
	+ Choice of systems/applications to mention in the chapter;
		- better not be too specific about platforms (thinking about the long future of the Guidelines)
		- Provide non\-Western diversity in the examples
	+ request for non\-trivial particular examples (where multimodality is expressed in a single post)
	+ Discussion of whether posts can nest
		- \<post\> as a specialized element that should inherit nesting from \<div\> 
			* MT: Nesting posts allows us to express that posts are part of other posts.
			* SB: Counterpoint: A post is a singular expressive act.
			* JT: Is post showing the object or the metadata about the object? Discussion: It's both.
			* MT: potential example of a "nested post", an online demonstration where the computer screen on which presenter interacts with a computer system as she speaks about it. So two or 3 modes are part of a single communication act. Other example: a chat message, unintentionally split into several parts because our finger slipped.
		- Should \<div\> be used instead for all of this, and simply supply the new attributes on \<post\> to \<div\>?
		- Argument against: \<div\> is too generic.
		- What does nesting of \<post\>s mean? 
			* Embedded posts as in re\-posting or quoting. Perhaps this is better handled with \<ptr target\="..."\>
			* Why is there no \<listPost\> to wrap threads and indicate their levels? 
				+ Would it imply a sequence, or just a collection of posts?
				+ TR: \<listPost\> possibly can express a treelike thread better than \<div\>, and also convey a linear feed 
					- Do "list" elements imply sequence or not?
					- The literal order of elements may not be strictly chronological when we are following branching threads.
					- Threading order might be more complicated than the timestamp\-\-how to disambiguate which posts came first or which ones respond to each other.
			* Main question: Does there need to be a new super element to contain posts?
			* Is this (or not) comparable to nesting \<ab\>s?
				+ No, it's more like \<s\> because it's delivered as a single expression.
				+ Counterpoint: A \<post\> is different from \<s\> b/c a post is conceptual rather than structural.
				+ JT: Maybe a \<post\> is most like a \<note\>, and we need to provide maximum flexibility for encoders.
			* What about photos of posts inside a post? Tag as \<img\> or as another \<post\>?
* **Action on all**: comment on PR to provide substantial edits to the prose, suggest examples
* **Action on EBB:** Invite CMC group to one of the next two VF2Fs
* Discussion resumed on 26–27 April 2024 VF2F meeting


 
TEI Lite2 discussion
--------------------


* Council spent a lot of time discussing this at the F2Fs in Guelph and Paderborn
* JT: make discussion more transparent by opening a ticket on GitHub for people to follow the actionable tasks that arise from the discussion
* MT presented overview of comparison between TEI Lite and SimplePrint elements
* See also [\#2493](https://github.com/TEIC/TEI/issues/2493) Review Library SIG ODDs for consideration in Lite2
* Council subgroup working on this, and then introduce their work to full Council: 
	+ MT, HBS, RV subgroup
	+ **Action on MT**: possibly invite a representative from e\-editiones


 
 


