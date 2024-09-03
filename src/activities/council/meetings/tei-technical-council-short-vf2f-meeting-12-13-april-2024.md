---
title: "TEI Technical Council Short VF2F Meeting, 12–13 April 2024"
date: 2024-04-13
---
# TEI Technical Council Short VF2F Meeting, 12–13 April 2024
### Meeting Times


 


| **Friday, April 12** | 16:00–19:00 PDT | North American break\-outs |
| --- | --- | --- |
| **Saturday, April 13** | 10:00–13:00 CEST | European break\-outs |
|  | 07:00–11:00 PDT | Council meeting |


### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshe­ro\-Bondar (EBB, Chair)
* Patricia O’Connor (TOC)
* Gustavo Riva (GR)
* Torsten Roeder (TR)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Raff Viglianti (RV)


 
### Apologies/Not Present


* Elli Bleeker (EB)
* Magdalena Turska (MT)


 
Friday, April 12 (American break\-out session)
==============================================


Guidelines Pull requests
------------------------


* [\#2547](https://github.com/TEIC/TEI/pull/2547) Fix remaining contextless constraints
	+ merged


* Work on other PRs and issues


Saturday, April 13 (European break\-out session)
================================================


Guidelines Pull requests
------------------------


* [\#2511](https://github.com/TEIC/TEI/pull/2511) 2 of 3 requested improvements to gaiji descriptions
	+ merged prior to meeting
* [\#2527](https://github.com/TEIC/TEI/pull/2527) Update reg.xml
	+ merged prior to meeting
* Work on other PRs and issues


Saturday, April 13 (Full Council)
=================================


CMC chapter preview
-------------------


* CMC group will join next VF2F meeting: 27th April 2024
* Peter Stadler, Michael Beißwenger, Harald Lüngen
* **Action on all**: Read chapter and comment on PR: <https://github.com/TEIC/TEI/pull/2537>


ATOP
----


* order of processing concerns in derivation stage
* ATOP group (SB \& HBS) will come up with a proposal for an order of operation


Guidelines Issues
-----------------


* [\#2282](https://github.com/TEIC/TEI/issues/2282) use of @class and @name of \<attRef\> 
	+ Discussion of comment [https://github.com/TEIC/TEI/issues/2282\#issuecomment\-1870484267](https://github.com/TEIC/TEI/issues/2282#issuecomment-1870484267)
	+ **Council decision, added to ticket:**
		- For 1\) Add a short deprecation period for making the @name and @class attributes mandatory.
		- For 2\) new attribute to point to RNG patterns will be created
			* discussion on name: @rngPattern not generic enough (there could be the need to point to a different schema language), e.g. @externalRef, @externalName, or @ref
			* JT created [\#2548](https://github.com/TEIC/TEI/issues/2548) Rationalize mechanisms for extending pure ODD, for naming the mechanism
			* Pure ODD related discussion needed on whether to use RNG elements after it was decided to not use them, aim: enable people to use only ODD to do everything instead of using RNG
		- For 3\) Council against allowing \<classRef\> in \<attList\>
			* Linking to classes using only @class does not do anything, even if it is allowed right now
			* the possibility of using it should be deprecated


* [\#2369](https://github.com/TEIC/TEI/issues/2369) Need to clarify the relationship between classSpec/@generate and classRef/@expand


* Council decision: 
	+ Deprecate @generate of \<classSpec\>, implement a 6 month deprecation period
	+ Replace @expand of \<classRef\> in the 4 instances where it is mentioned in the Guidelines
	+ Then deprecate @expand of \<classRef\> (*after* it has been replaced in the Guidelines)
	+ Make \<classRef\> a child of \<interleave\> ([\#2538](https://github.com/TEIC/TEI/pull/2538) Add interleave element) or \<alternate\> instead. However, adding \<classRef\> inside \<alternate\> is problematic.
		- Add guidance in release and deprecation notes on the new approach regarding ordering sequence
		- Drop \<sequence\> values to avoid the ordering issues with \<classRef\>. For those needing to specify an order, it should be done by defining a macro or grouping \<elementRef\>s


* [\#2306](https://github.com/TEIC/TEI/issues/2306) tagdocs elements are available in silly contexts
	+ Discussion: Does it need deprecation or can we just change the schema?
	+ deprecating would be difficult, while doing this without deprecation is very easy
	+ SB: Introduce a Schematron rule/constraint to search for this and issue a warning to facilitate the deprecation
	+ HBS and SB: If this cannot be done with one simple Schematron rule, then having no deprecation is a more practical option given the significant work involved and the urgency of the ticket
	+ SB: No way to add to the Deprecations.xml automatically, would need to add it manually?
	+ **Action on SB and HBS:** attempt to deprecate this easily and update Council on outcome


* [\#543](https://github.com/TEIC/Stylesheets/issues/543) Multiple file extensions are a bad idea
	+ Issue relating to removing teitorelaxng without a deprecation period
	+ **Council decision:** Not to revert this change but to apologise for the lack of notice and inconvenience caused by the change
	+ SB: Use Bash to update the string teitorelaxng to teitorng
	+ ticket closed


* [\#2436](https://github.com/TEIC/TEI/issues/2436) standOff should be allowed to contain xenoData
	+ approved even if (or maybe precisely because) it could provide an escape hatch from using TEI elements
	+ it can enhance the TEI's expressive capacity
	+ **Council decision:** Status Green, Proposal approved


Guidelines Pull requests
------------------------


* [\#2534](https://github.com/TEIC/TEI/pull/2534) no duplicate \<attDef\>s allowed
	+ discussion of comment [https://github.com/TEIC/TEI/pull/2534\#issuecomment\-2001990233](https://github.com/TEIC/TEI/pull/2534#issuecomment-2001990233)
	+ European subgroup: 
		- need to verify the relevant commits for this issue
		- need to discuss specifically the behaviour wanted for @org
		- discuss possibility to have different \<attDef\> with the same @ident
		- To our understanding, \<attList org\=”choice”\> could contain two \<attList\> elements, and these two lists could share \<attDef\> elements with the same @ident. This is invalid with the Schematron rules on this PR
		- following example would be valid against the new Schematron rules but it doesn’t generate valid RELAXNG:



> \<attList org\="choice"\>
> 
> 
> \<attDef ident\="failure"\>
> 
> 
> \<valList type\="closed"\>
> 
> 
>       \<valItem ident\="great"/\>
> 
> 
>        \<valItem ident\="small"/\>
> 
> 
> \</valList\>
> 
> 
> \</attDef\>
> 
> 
> \<attDef ident\="failure"\>
> 
> 
>         \<valList type\="closed"\>
> 
> 
>                  \<valItem ident\="big"/\>
> 
> 
>                 \<valItem ident\="oops"/\>
> 
> 
>            \</valList\>
> 
> 
> \</attDef\>
> 
> 
> \</attList\>
> 
> 
> * + following example fired as error where the outer \<attList org\=”choice”\> is incorrectly flagged as invalid:
> 
> 
> \<attList org\="choice"\>
> 
> 
> \<attList\>
> 
> 
> \<attDef ident\="failure"\>
> 
> 
>             \<valList type\="closed"\>
> 
> 
>                 valItem ident\="great"/\>
> 
> 
>                 \<valItem ident\="small"/\>
> 
> 
>             \</valList\>
> 
> 
> \</attDef\>
> 
> 
> \</attList\>
> 
> 
> \<attList\>
> 
> 
>          \<attDef ident\="failure"\>
> 
> 
>                 \<valList type\="closed"\>
> 
> 
>                       \<valItem ident\="big"/\>
> 
> 
>                        \<valItem ident\="oops"/\>
> 
> 
>                \</valList\>
> 
> 
>          \</attDef\>
> 
> 
> \</attList\>
> 
> 
> \</attList\>


* also the Stylesheets do not process org\="choice" correctly


 
* [\#2540](https://github.com/TEIC/TEI/pull/2540) add missing \<sch:rule\> elements
	+ European subgroup commented asking about why the constraintSpec is within the \<attList\>/\<attDef\> and not a child of elementSpec?
	+ Approved PR with that one minor query to be answered
	+ **Action on SB and MS:** resolve conflicts and merge


 
* [\#2509](https://github.com/TEIC/TEI/pull/2509) address \#1981 with SchXslt (aka mausatron) instead of skeleton


* NA subgroup: ONVDL is raising errors on our abstract patterns
	+ How to validate against an ONVDL schema, which can't handle abstract patterns?
	+ attempt to validate using the latest Jing (2022\.05\.10 from https://github.com/relaxng/jing\-trang): validation doesn't seem to happen
	+ P5/p5\.nvdl: commenting out line 105 (removing reference to p5odds.isosch and rerunning tests, this branch succeeds and we're able to process abstract patterns
	+ further testing of schema lines on Guidelines chapters pointing to nvdl, vs. rng, vs sch files. nvdl has probably not been working in a long time to validate multiple namespaces. It is also in the way of applying more modern implementations
	+ other schema validation files do work on their own
	+ Options: 
		- find someone to fix nvdl validation
		- take this broken experiment with validating abstract patterns to the XML Slack for help?
		- If we continue to use NVDL, then we will need to fix the production of the NVDL in the release, e.g. https://tei\-c.org/Vault/P5/4\.1\.0/xml/tei/Exemplars/tei\_all.nvdl does not work as it cannot find referenced resources (e.g. ../schematron.rng)
		- Stop using nvdl entirely:
			* remove the nvdl files (because they just don't work)
			* Or stop using the nvdl files in build process
			* (Also get advice on this from XML Slack (Is nvdl just defunct?)
		- Continue using nvdl with line 105 commented out, but then need to fix the produced NVDL documents
* European subgroup getting the same errors in the document
* Pursue 1\) within a reasonable timeframe
* **Action on SB**: get an update on oNVDL at Balisage. If there has been no further work on oNVDL then we could proceed with getting rid of it since no\-one is using it.


 