---
title:  "TEI Technical Council P5 Teleconference, 2026-05-06"
date: 2026-05-06
---

# TEI Technical Council P5 Teleconference, 2026-05-06

9am PDT | noon EDT | 5pm BST | 6pm CEST

#### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)  
* Martina Scholger (MS)  
* Joey Takeda (JT)  
* Raff Viglianti (RV) 

#### Apologies:

* Elli Bleeker (EB)  
* Ulrike Henny-Krahmer (UHK)  
* Torsten Roeder (TR)

#### Next P6 Meeting
* Next Council meeting: Wednesday May 20 at this time.  
* Council P6 homework: Explore [PlantUML](https://editor.plantuml.com/uml/) and experiment with blueprints / visualizing / writing.  
      
#### TEI Conference / F2F Meeting  
  * 2026-08-10 – 2026-08-17: Conference + F2F 
    * Mon 10 Aug: workshops  
    * Tue 11 Aug: workshops  
    * Wed 12 – Fri 14 Aug: conference  
    * Sat 15 – Mon 17 Aug: Council F2F

#### Next P5 release  
  * Sometime last week of July (27th – 31st)   
  * Release technicians: MH, EBB, MS  
  * Exact refridge and freeze dates to be set by release techs as soon as they have agreed on release date

#### ATOP tickets 
  * [\#2729](https://github.com/TEIC/TEI/issues/2729): ODD processing for glosses and descs  
    * Main question is whether the "only-one-each-lang" constraint should be moved from p5odds to P5. (That is, are customizers and people who use the TEI ODD system to write non-TEI markup languages allowed to have multiple `<gloss>`es or `<desc>`s in a given language for a particular construct?)  
    * Marked status "Go" to move this processing to P5. 

  * [\#2826](https://github.com/TEIC/TEI/issues/2826): There should only be one `<remarks>` element per language and [\#2729](https://github.com/TEIC/TEI/issues/2729): ODD processing for glosses and descs  
    * JT \+ Council discussion: Is it a problem to include a `<remark>` with `@mode="add"`in addition to remarks brought in from the same language from the Guidelines?    
    * MH: Bear in mind ODD chaining: once this is allowed, the base ODD for the next level of the chain will have two `<remark>`s with the same lang, presenting the same problem again.  
    * `<remarks>` has an `@ident` so it should be required   
    * MH: Lots of projects add extra remarks to the TEI remarks  
    * HBS: In favour of more restrictions rather than add  `@ident` attributes as part of the pre-processing.   
    * Council decision: Create sub ticket [\#2896](https://github.com/TEIC/TEI/issues/2896) to add `@ident` to all `<remarks>.`
    
 * [\#2442](https://github.com/TEIC/TEI/pull/2442): Addressing [\#2173](https://github.com/TEIC/TEI/issues/2173) (Add warning when using `<constraintSpec>` inside `<classSpec>`): Closed. 
 
* [\#2877](https://github.com/TEIC/TEI/issues/2877): Action on SB to review the ODDS that have multiple schemaSpec elements and contemplate their use-cases before proceeding.

#### P5 Guidelines Tickets + Pull Requests

* [\#2887](https://github.com/TEIC/TEI/issues/2887): Add `<del>` and `<add>` to `att.datable`  
  * Fixes Stylesheet [\#677](https://github.com/TEIC/Stylesheets/issues/677)  
    * SB: Already has `@change` attribute, might be permitting two different mechanisms for achieving the same thing  
    * HBS: Change is datable but is meant to point to a \``<change>`\` element for changes specifically.   
    * RV: Consult decision history for objections to adding to `att.datable`?  
    * Original aim was to identify revisions, see [12.7 Identifying Changes and Revisions](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html#PH-changes)  
    * Parameter in the stylesheets to fix: processChangeInformation  
    * Council decision: Instead of using the `processChangeInformation` parameter, just write proper processing for change and always apply it (comments added to both the TEI and Stylesheets issues).

##### Pull Requests  
  * [\#2538](https://github.com/TEIC/TEI/pull/2538): **Action on SB:** Update deprecation date `sequence/@preserveorder`  
      * Done: Deprecation date updated after meeting  
      * Merged.  
    
  * [\#2890](https://github.com/TEIC/TEI/issues/2890): Merged in meeting.
  
  * [\#2876](https://github.com/TEIC/TEI/issues/2876): Deprecate the use of `valList` as a direct child of elementSpec  
      * Action on MH: Include a constraint.
         
  * [\#2882](https://github.com/TEIC/TEI/pull/2882): Adding `<listOrg>` to `<event>`  
      * Action on TOC: Add a constraint.
      
  * [\#2855](https://github.com/TEIC/TEI/pull/2855): most oddDecl elements must be descendant of `<schemaSpec>` or `<specGrp>`  
      * Branch conflicts need to be resolved  
      * Deprecation date needs to be updated  
      * Check to see if anything breaks after resolution of related ticket [\#2306](https://github.com/TEIC/TEI/issues/2306).
        
  * [\#2821](https://github.com/TEIC/TEI/pull/2821): Adding optional third coordinate to teidata.point  
      * Council agree to proceed with mixing 2D and 3D on the same attribute.  
      * Merged in meeting.  
      * **Action on TOC:** Add prose and examples.  
      
  * [\#2712](https://github.com/TEIC/TEI/pull/2712): End Italian descriptions with full stops  
      * MS: Possible inconsistent use of full stop, needs discussion.  
      * **Action on SB:** Merge dev into branch and resolve Git conflicts. **Done after meeting.**  
      * **Action on TOC:** Merge after conflicts are resolved. **Done after meeting.**  
      * Council also agrees to open a new ticket to fix the inconsistent period usage (potentially) in `<desc>`.  
      * Council might need to determine a formula for using periods in `<desc>`. 

  

