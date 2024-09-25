---
title: "TEI Technical Council Teleconference, 2024-09-03"
date: 2024-09-03
---
# TEI Technical Council Teleconference, 2024-09-03

10:00–11:30 PDT | 13:00–14:30 EDT | 17:00–18:30 UTC | 19:00–20:30 CEST

### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Patricia O'Connor (TOC)  
* Gustavo Riva (GR)  
* Torsten Roeder (TR) (19:10)  
* Sabine Seifert (SS)  
* Joey Takeda (JT)   
* Magdalena Turska (MT)  
* Raff Viglianti (RV — until \~18:00Z)

### Invited Guest: 

* Hugh Cayless (until \~17:30Z)

### Apologies/Not Present: 

* Martina Scholger (MS)

## Hugh Cayless: website and 4.8.1 patch release update  
  *  There's a new website\! (much rejoicing\!)  
  * All council members can edit new website: [https://github.com/TEIC/website](https://github.com/TEIC/website)   
  * Any changes or edits such as typos can be made directly via the GitHub  
  * There is a GitHub submodule for the documentation repo, and any edit to the documentation repo should trigger a rebuild of the website  
  * Old website is still available at [old.tei-c.org](http://old.tei-c.org/) \- HC's plan is to make it read-only  
  * Some content still needs to be migrated to the new website eg. Board minutes (Council minutes have been migrated over but the most recent Council minutes are not there)  
  * Minor bugs detected, e.g. some of the links do not work, due to changes in capitalization e.g. an old link [https://www.tei-c.org/activities/council/Meetings/](https://www.tei-c.org/activities/council/Meetings/)  only works when changing the uppercase M in Meetings to lowercase: [https://www.tei-c.org/activities/council/meetings/](https://www.tei-c.org/activities/council/meetings/)  
  * Need to implement a redirect for those that have the capitalised versions bookmarked so that they are directed to the correct lowercase version instead.  
  * Question: Where to put the minutes now? Should they go to the documentation repo? Minutes are currently available here: [https://github.com/TEIC/website/tree/main/src/activities/council/meetings](https://github.com/TEIC/website/tree/main/src/activities/council/meetings)  
  * Suggested solution: put them on the website as markdown files. Google docs and other environments allow for md export version. Alternatively one can set up an extension to export the minutes to Markdown to expedite the process  
  * Workflow questions:  
    * JT: Should we work primarily in branches, like we do with contributions to other TEI GitHub organization repositories?  
    * HC: Smaller updates, bits of news and similar could just go straight to main, extensive code and styling changes should go to a branch for a more thorough testing and review process  
    * JT: Will the repo become public at some point? And who will be responsible for the website?  
    * EBB: Previous Councils have felt that there was enough work for Council already with just focusing on Guidelines work. With Website in GitHub organization it is easier for Council to help maintain.  
    * Increasingly Council members are involved with Infrastructure maintenance, with the Infrastructure Group (including volunteers outside Council.  And several  Council members are interested and willing to help on both content and implementation. (See Infrastructure Group upcoming meeting.)  MT: Luckily thanks to Hugh's  work on the new website, both aspects are significantly easier now.  
    * JT: We need to devise a plan in place where the responsibility of the website is clearly attributed to someone  
  * Site is running on Eleventy and Apache.   
  * Hugh did NOT do a Guidelines patch release (no 4.8.1): will do the merges this afternoon, but no need for a release.   
    * Remove the patch milestone? \- Hugh did not merge the website branch into dev yet but will do so later this evening.  
    * Hugh will announce the new website publicly

## Infrastructure Group 
  * Next meeting scheduled on **Thu 26 Sep 24 at 9am PDT, 12pm EDT, 6pm CEST.**

## Buenos Aires F2F October 2024 
  * Travel planning notes / updates  
  * Internet connectivity concerns / expectations
      * Was fine for previous workshops/ events at Buenos Aires location
      * Can purchase SIM cards in the city.
  * F2F agenda planning

## In Memoriam panel for Michael Sperberg-McQueen at the TEI Conference 

  * Scheduled for Thursday October 10, 5 - 5:45pm
  * Purpose of the panel is to introduce those who did not know Michael to his important role in the TEI.  
  * EBB: Ways of engaging members of the TEI Community that knew Michael  
  * Something hybrid or online to reach more people, for instance, present a pre-recording from Lou Burnard?  
  * Contact JTEI about a memorial issue or the TEI conference proceedings that could be dedicated to him  
  * **Action on SB**: Let the jTEI know about the *Gedenkschrift* that the informal group assisting Marian with CMSMcQ’s documents is planning.

## Council and Board elections  
  * Call for nominations / elections  
  * 4 Council seats up for election, 2 Board seats  
  * Elli Bleeker (EB)  announces return to Council starting November 

## Stylesheets / ATOP update?  
  * Schedule: [https://www.when2meet.com/?26231910-cXfrP](https://www.when2meet.com/?26231910-cXfrP) 
  
## Next releases?  
  * New patch release? No, Hugh Cayless did not make one.  
  * If we are not making a patch release, let’s remove the milestone?  
    * DONE: 4.8.1 milestone now deleted  
  * Next "regular" release: notBefore January 2025  
  
## Tickets discussion 

  * JT: Should we be thinking about ways to conceptualize and rationalize our decisions about class memberships, equivalence or other relationships between elements (as manifested in discussions regarding understanding of  \`@place\`, \`@hand\` and \`att.global.rendition\`)  
  * MT: we should very much be thinking this, in VF2F subgroup we tried to analyze "connected" tickets together, to keep the bigger picture in mind. We should reserve appropriate time to discuss it during our F2F as this kind of insights and disputes will inform the shape of TEI Lite and TEI P6 in the future.  
  * EBB: Shall we try to think this through and put this in writing before F2F? 
  * MT: Yes, definitely, these are complex subjects that need time but it's in our interest to get a firmer and shared understanding going forward.  
  * EBB: Reserve slot for F2F

## What can we do before the F2F? Bundles of recent tickets and PRs:

  * Simple cleanup?  
    * [PR \#2581](https://github.com/TEIC/TEI/pull/2581) / Issue [\#2580](https://github.com/TEIC/TEI/issues/2580): Unify reason attribute to use teidata.word  
      * SB points out that the use of the enumerated datatype has useful semantics, and is probably purposeful: It means “we the TEI expect you the user to create a controlled vocabulary for use on this attribute”. We need to think about what to do about `@reason` , perhaps do the opposite, i.e. make all the elements teidata.enumerated, not word.  
      * Action on SB to comment on the ticket. — DONE, 2024-09-05  
    * Issue [\#2567](https://github.com/TEIC/TEI/issues/2567) Outdated BDP 47 info \[Assigned to RV\]

	

* Review what we proposing to do with `@place` / `att.placement` in these tickets  
  * Issue [\#2551](https://github.com/TEIC/TEI/issues/2551): Allow @place in \<div\>, in which European subgroup proposed in April to move `@place` to `att.global.rendition`  
    * Should we move `@place` to `att.global.rendition` with gentle guidance to not abuse the increased flexibility  
      * give good examples for guidance  
      * Make a commentary in the description of `att.global.rendition` to make clear that it should be used normally only on elements containing the source material (predominantly within `<text>` and header elements only where it makes sense).  
      * Council decision: Greenlight ticket and implement it before the F2F along with [\#2550](https://github.com/TEIC/TEI/issues/2550).  
    * Issues [\#2528](https://github.com/TEIC/TEI/issues/2528) and [\#2572](https://github.com/TEIC/TEI/issues/2572): Add sp and speaker to att.placement  
    * Issue [\#2542](https://github.com/TEIC/TEI/issues/2542): Allow @place in postscript (by adding it to att.placement)  
        
  * Issue [\#2550](https://github.com/TEIC/TEI/issues/2550): Allow @hand in \<emph\> and  \<date line\> \[See [European subgroup comments in table below](#bookmark=id.e8aier3bnkoc)\]  
    * Assigning SS to the ticket: please add comment to ticket and handle at same time with [\#2551](https://github.com/TEIC/TEI/issues/2551)   
    * Work on a gentle guiding instruction sentence here too.   
    * Council decision: Greenlight ticket to put `@hand` in global.rendition   
    * Issue of how to denote the responsibility of the addition of emphasis, as distinct from the text content:  
      * `@resp` proposed by European subgroup, but would mean the encoder responsible  
      * We need some other way to indicate this.   
      * `<handShift>` doesn't help  
      * MT: Maybe `<metamark>`?  
      * SB: Maybe `<handNote>`? Could this indicate here which hand does the emphasis and which did the writing of the text?   
      * HBS: Need to change the definition of hand?  
      * JT: `<metamark>` does have `@function` to state the purpose of the mark, although it is a pointing solution rather than a wrapping solution.  
      * `<metamark>` currently does NOT have a `@hand` attribute but it should.  
      * We still like making `@hand` globally available. `<handShift>` for when changes in handwriting don't match hierarchical structure.   
      * JT: Are there rules that we can put in place to constrain in Schematron the use of `@hand` and `@place` .  
      * A discussion ensued brought by JT on broader conceptual questions, summarized above under Ticket discussion.  
          
  * Issue [\#2570](https://github.com/TEIC/TEI/issues/2570): Why require @url also when @facs is present on \<graphic\>?  
    * SB: The question “why” is not the issue, the problem really is “should we”. The reason was that presence of \`@url\` precedes the concept of representing facsimiles in the Guidelines by years. Regarding the "should" Syd sees no reason not to.  
    * SB: Nevertheless the implementation may not be as straightforward. The \`@url\` attribute comes from a class and the class is in use in other elements, so if the requirement of `@url` is removed, it may have side effects and consequences for other classes?  
    * SB: Is `@facs` allowed on `<figure>`? (Yes, it could go on `<figure>` instead, but that is not the issue here.)  
    * The issue is we shouldn't have to put a `@url` on `<graphic>` when there already is facs attribute present.   
    * Make it so at least one of these is required: either `@url` or `@facs`  
    * Council decision to greenlight this as a workable solution.


## Revisions, documentation, and examples needed 
  * event / eventName / object  
    * Issue [\#2523](https://github.com/TEIC/TEI/issues/2523): Allow \<listEvent\>/\<event\> in \<object\>  
      * Issue [\#2499](https://github.com/TEIC/TEI/issues/2499): review / update examples of \<event\> in Guidelines

    * Issue [\#2392](https://github.com/TEIC/TEI/issues/2392): Add att.canonical to \<bibl\> (see [our plan from Paderborn F2F](https://github.com/TEIC/TEI/issues/2392#issuecomment-1704069237))

  * Issue [\#2574](https://github.com/TEIC/TEI/issues/2574): Do we need to generate Kindle .mobi?

  * [Issue \#2575](https://github.com/TEIC/TEI/issues/2575): ISO 8601 retitled (date/time) update of 2019

  * Follow-up on `<interleave>`  [PR \#2538](https://github.com/TEIC/TEI/pull/2538), issue [\#2154](https://github.com/TEIC/TEI/issues/2154) \+ [Stylesheets \#609](https://github.com/TEIC/Stylesheets/issues/609)   
    * Prose needs discussion of the validation issue and incompatibility with outputting DTDs  
      * Remember, we decided not to use `<interleave>` in the Guidelines so DTDs could continue be generated (check)  
      * **Action on SB** by **2024-08-28** to update p5odds.odd schema so that it prevents \<interleave\>. — DONE 2024-08-13.  
  * [PR \#2559](https://github.com/TEIC/TEI/pull/2559) and issue [\#2497](https://github.com/TEIC/TEI/issues/2497) — SB thinks this may not be ready to go, but could be very soon … (may be only a test file issue)

