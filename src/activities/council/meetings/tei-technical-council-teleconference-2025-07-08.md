---
title: "TEI Technical Council Teleconference, 2025-07-08"
date: 2025-07-08
---

# TEI Technical Council Teleconference, 2025-07-08

10:30–12:00 PDT | 13:30–15:00 EDT | 18:30–20:00 UTC | 19:30–21:00 CET

### Present

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Patricia O'Connor (TOC)   
* Torsten Roeder (TR)  
* Martina Scholger (MS)  
* Joey Takeda (JT)

### Apologies

* Elli Bleeker (EB)  
* Ulrike Henny-Krahmer (UHK)  
* Martin Holmes (MH)  
* Raff Viglianti (RV)

## TEI 2025 Conference and Council F2F

  * Info / updates: Conference website: [https://tei2025.confer.uj.edu.pl/en\_GB/](https://tei2025.confer.uj.edu.pl/en_GB/)   
  * Council meeting slated: Sun 14, Mon 15, and Tue 16 Sep 25.  
  * SIG meetings to be scheduled in 3 distinct session times.  
      
## Next release  

  * Refridge: week of Balisage (4–8 Aug)  
  * Freeze: starts Mon 11 Aug  
  * Release: Fri 15 Aug  
  * Release Techs: JBS, EB, TOC, JT as Pacific Rim Monitor  
  * Review Guidelines / Stylesheets tickets for release milestones  
      
## TEI meet-up at DH2025 in Lisbon?  
  * News from June TEI Board meeting: Diane Jakacki plans to try to meet with Melissa Terras to chat about TEI by Example and Pedagogy SIG revival idea.  
  * EBB to meet up with RV and Kiyonori Nagasaki re Rahtz Prize

## Community call
  * TEI By Example / Pedagogy discussion for August? 

## SIGS
  * New e-mail list established for Computable Text and Media SIG  
  * TR has added instructions [on SIG page](https://tei-c.org/activities/sig/) on how to join the new listserv. 

## Roma recovery
  * Update on Roma documentation download: "autohealed" via Docker thanks to Peter Stadler (see Slack \#infrastructure channel).  
    
## Stylesheets/Test2/ build failure on GitHub  

  * SB reports: Error does not seem to have anything to do with the Stylesheets themselves, it occurs when trying to download FOP. I can download it manually, so this may have been a one-off problem on server end. How do we force GitHub to repeat the build process?  
  * JT showed us how to do this: Navigate to the [Actions](https://github.com/TEIC/Stylesheets/actions) tab in the GitHub toolbar, select the run that failed, click “Re-run jobs”.

## Tickets and Pull Requests

### New tickets 

  * [\#2728](https://github.com/TEIC/TEI/issues/2728): 
      * Expand definition of annotationBlock or create new grouping element for \<u\> in spoken module that is parallel to \<text\> and \<facsimile\>  
      * JT takes this ticket.

### Pull Requests and Tickets discussed for Release 4.10

* [PR \#2727](https://github.com/TEIC/TEI/pull/2727)
    * MH would like us to review his potential fix of the JS bug for bibliography items as popups in the Guidelines.  
    
* [PR \#2538](https://github.com/TEIC/TEI/pull/2538) (`<interleave/>`)  
    * Council agrees to write the documentation as soon as possible and invite Lou Burnard to review it. 
    * Add to the [Gentle Introduction](https://tei-c.org/release/doc/tei-p5-doc/en/html/SG.html)  
    * Add also to the [TD chapter](https://tei-c.org/release/doc/tei-p5-doc/en/html/TD.html), make sure we address classes (collections of things) being interleaved.  
    * Add all changes to prose to JT’s branch for PR.

* Review all open tickets marked for 4.10 Release Milestone.

* [Issue \#2653](https://github.com/TEIC/TEI/issues/2653) (`@ed` vs. `@edRef`), see SB’s comment of 16 Jun 25:  
  * Point one: My current thinking is that P5’s att.edition should itself enforce “one or the other”, which would mean “one or the other on any given element instance”. But various Exemplars (other than tei\_all) should either delete @ed, delete @edRef, or enforce “one or the other in any given document”. —SB  
  * Point two: My inclination is we should just find another example that does not have a soft hyphen immediately before the milestone element, and thus avoids the issue. —SB  
  * Council decision: resolve with verbal guidance, see [comment on ticket](https://github.com/TEIC/TEI/issues/2653#issuecomment-3049898585).  

* [Issue \#2663](https://github.com/TEIC/TEI/issues/2663) (phrase-level encoded attr values in descriptions thereof):  
  * Assigned to EB, there are only 35 cases to be checked:  
    * 9 in en  
    * 4 in es  
    * 3 in fr  
    * 2 in it  
    * 7 in ja  
    * 8 in ko  
    * 2 in zh-TW  
   
* [\#1993](https://github.com/TEIC/TEI/issues/1993): 
    * Discussion: we can try to implement our decision after updating SB's branch. 

* Reminder to work on tickets introduced by the correspondence SIG.

