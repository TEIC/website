---
title: "TEI Technical Council Teleconference, 2025-06-10"
date: 2025-06-10
---

# TEI Technical Council Teleconference, 2025-06-10

10:30–12:00 PDT | 13:30–15:00 EDT | 18:30–20:00 UTC | 19:30–21:00 CET

### Present

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Elli Bleeker (EB)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)   
* Torsten Roeder (TR)  
* Martina Scholger (MS)  
* Joey Takeda (JT)  
* Raff Viglianti (RV) 

### Apologies

* Ulrike Henny-Krahmer (UHK)

## TEI 2025 Conference and Council F2F

  * Conference website: [https://tei2025.confer.uj.edu.pl/en\_GB/](https://tei2025.confer.uj.edu.pl/en_GB/)   
  * Conference dates: 16–20 Sep 2025   
  * Council meeting slated: Sun 14, Mon 15, and Tue 16 Sep 25\.  
  * EBB is working with the TEI SIGs to find out which are attending and require meeting rooms to be scheduled.  

## Confirm next release  
 
  * Refridge: week of Balisage (4–8 Aug)  
  * Freeze: starts Mon 11 Aug  
  * Release: Fri 15 Aug  
  * Release Techs: HBS, EB, TOC, with JT as Pacific Rim Monitor  
  * Guidelines / Stylesheets tickets for release milestones  

## Roma documentation download isn’t working
  * see Hugh Cayless’s Slack in \#infrastructure channel 
  * TEIGarage timing out 
 
## TR: ISO: TEI liaison update  

  * TR will submit short reports annually about what the TEI provides and how it’s relevant to two areas of the ISO he's liaising with. And TR to report back to TEI relevant info from the ISO.  
  * TEI is a liaison organization in two subcommittees:  
    [ISO/TC 37/SC 3: Management of terminology resources](https://www.iso.org/committee/48136.html)  
    [ISO/TC 37/SC 4: Language resource management](https://www.iso.org/committee/297592.html)  
  * These subcommittees are part of Technical Committee [ISO/TC 37: Language and terminology](https://www.iso.org/committee/48104.html)  
  * Cooperation organization page for TEI at iso.org: [https://www.iso.org/organization/340283.html](https://www.iso.org/organization/340283.html)

## Call for [Rahtz Prize for TEI Ingenuity](https://tei-c.org/activities/rahtz-prize-for-tei-ingenuity/) 

   * Nominations due June 30.

## TEI Council meet-up at DH2025 in Lisbon?  

   * EBB, TR, MS, RV will be attending
     
## Council Actions for SIGs  

  * Computable Text and Media (**Action on TR** to provide information on how to join)  
  * Pedagogy SIG revival via Melissa Terras call for help with TEI by Example?  
    * RV: suggestion that we discuss this in a Community Call  
    * MS: reach out to Diane Jakacki to see if interested? (invite Diane, Brian Croxall, Gimena, Susanna Alles Torrent, etc. to a community call)  
      * JT: Maybe this should be an open call to revive the Pedagogy SIG that draws people who might like to run for Board / Council and are looking for leadership roles.   
    * EBB: Hosting needs to be discussed. 
    * TR: related to Music SIG, the MEC Interest Group “MEI in TEI” was resuscitated at MEC 2025 (London), in a way also related to TEI by example, see [https://github.com/TEI-Music-SIG/examples](https://github.com/TEI-Music-SIG/examples)  
    * Could such examples be linked in some shared, visible space for the TEI community?  

## Community Calls

  * MS: do we want to announce a special topic for August?  
  * JT (and EBB agrees): August is the perfect time for a pedagogy discussion as people are working on course materials, prepping for conferences etc.  
  * FYI: Next week (Tue 17 Jun 25 @ 17:00Z) Community Call  
  * Discussion of TEI By Example (and teaching/pedagogy generally) for August  

## TCW on Circularity Dependency Problem

  * TOC: [Circularity TCW](https://docs.google.com/document/d/19y9SQVdPZlBV-Aq7c72vuWzBkVv4ukjlfHJCayW4Nac/edit?tab=t.0#heading=h.wk51a2h4gnka) — referenced and linked in the [Update p5subset](https://docs.google.com/document/d/1UhCg76_AgnS5PW0g_EN6zPZE4tTUs0bNeMXFVmZ4VuQ/edit?tab=t.0) shared document, is there a public facing page containing this information?  
  * The document was created to understand the issue and find a solution which is to regularly update the P5 subset. This information should be condensed into a brief explanation of what the problem is and added to the Rationale.  
  * MH: We still haven't figured out all the issues with this, such as whether dev Stylesheets should successfully build with the current released version of p5subset (they don’t right now).  
  * **Action on TOC by 2025-06-30** to draft a condensed explanation for the existing TCW 31 (done)

## Tickets and Pull Requests:

* [Stylesheets PR \#748](https://github.com/TEIC/Stylesheets/pull/748) (Fix for a bug which is completely breaking builds with modern Java VMs): SB had tested this successfully, so we merged during the meeting.  
* [PR \#2538](https://github.com/TEIC/TEI/pull/2538) (`<interleave>`)  
  * SB and EBB agree that we need a high priority explanation of interleave for the Guidelines release to accompany this new feature. [Ticket \#2717](https://github.com/TEIC/TEI/issues/2717) opened.  
  * Discussion: It's okay to release this with the understanding that it works as RNG interleave.  
  * SB: We should invite Lou Burnard to help with adding documentation to the Gentle Introduction, where it's a good opportunity to explain the Relax NG idea.  
* [PR \#2509](https://github.com/TEIC/TEI/pull/2509)
  * Reviewed new work on the problem with processing abstract patterns.  
  * Merged during the meeting. 
