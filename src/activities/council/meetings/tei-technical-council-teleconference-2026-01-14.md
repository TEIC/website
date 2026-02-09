---
title: "TEI Technical Council Teleconference, 2026-01-14"
date: 2026-01-14
---
# TEI Technical Council Teleconference, 2026-01-14

06:00 – 07:30 PST | 09:00 – 10:30 EST | **14:00 – 15:30 UTC** | 15:00 – 16:30 CET

#### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)  
* Elisa Beshero-Bondar (EBB, Chair)  
* Elli Bleeker (EB)  
* Ulrike Henny-Krahmer (UHK)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC) — until 15:01Z  
* Torsten Roeder (TR)  
* Martina Scholger (MS) for 1st \~15 min  
* Joey Takeda (JT)  
* Raff Viglianti (RV) — until 15:14Z

#### When are we holding monthly Council and Stylesheets calls?   
  * Council decision: Move monthly meeting to same time block (currently 14:00–15:30, but may change by 1 hour due to DST) on Mondays **(2nd Monday of the month).**  
  * **Next Council meeting: 9th February.** 06:00 – 07:30 PST | 09:00 – 10:30 EST | 14:00 – 15:30 UTC | 15:00 – 16:30 CET  
   * Stylesheets calls to be determined (poll circulated)

#### Review/assignment of newly opened tickets on Guidelines and Stylesheets
* All tickets claimed.

#### PRs ready for merging
  * [\#2788](https://github.com/TEIC/TEI/pull/2778): Closes our oldest open issue, [\#869](https://github.com/TEIC/TEI/issues/869)  
    * Make the Tite schema align with its prose.  
    * Merged & closed last night — SB  
  * [\#2844](https://github.com/TEIC/TEI/pull/2844#pullrequestreview-3656029259): Closes [\#2459](https://github.com/TEIC/TEI/issues/2459)  
    * makes \<address\> part of att.canonical and att.typed  
    * adds a special @role attribute  
    * Review the lists of sample & suggested values for @role and @type  
      * SB and JT to complete by tweaking attribute values, and then merge.  
  * [\#2861](https://github.com/TEIC/TEI/pull/2861): Closes [\#2860](https://github.com/TEIC/TEI/issues/2860)  
    * Makes \<entryFree\> nestable, and also available inside \<entry\>. Merged and ticket closed.  
  * [\#2833](https://github.com/TEIC/TEI/pull/2833): Closes [\#2832](https://github.com/TEIC/TEI/issues/2832)  
    * Makes p5subset.xml valid against p5odds.rng by turning \<biblStruct\>s into \<bibl\>s.  
      * Reviewed and merged.  
  * [\#2839](https://github.com/TEIC/TEI/pull/2839): Closes [\#2838](https://github.com/TEIC/TEI/issues/2838)  
    * Require one and only one of the referring attributes on \<dataRef\>.  
    * PR merged, the requirement for a test has been added to ticket [\#2838](https://github.com/TEIC/TEI/issues/2838) by MH.  
  * [\#2836](https://github.com/TEIC/TEI/pull/2836): Closes [\#2649](https://github.com/TEIC/TEI/issues/2649)  
    * Add missing biblio item.  
    * Reviewed and merged, issue 2649 closed.  
  * [\#2817](https://github.com/TEIC/TEI/pull/2817): Does NOT close [\#2317](https://github.com/TEIC/TEI/issues/2317)  
    * Allow \<app\> as sole child of \<sp\>.  
    * **Action on TR**: Need to update the prose of the Guidelines\!   
  * [\#2834:](https://github.com/TEIC/TEI/pull/2834) no associated issue  
    * Updates to an example.  
    * Reviewed and merged   
        
#### Sp F2F @ Würzburg  
  * **Tue March 10 – Fri March 13 (midday)**  
  * **Dates fixed.**

#### 4.11 Release  
  * Release team: TR, HBS, TOC    
   * Release date: **Wed. February 18\.**   
        * **Refrigerate: Wed. February 11**  
        * **Freeze: Sunday February 15**  
    * Action on EBB and MH to check in with HC and \#infrastructure channel in Slack by next week re ny changes re HumaNum, keys to work with, etc.   
    * Any changes will be announced on Slack and TEI council email list. 

#### Proposed AI Tools for TEI SIG:  
  * See email Dec 12 from Christine Ruotolo

    

#### JT: [TEI 2026 Conference](%20https://tei2026.tei-c.org)  update  
  * Dates: **Mon 10 Aug – Fri 14 Aug 26**.   
  * CFP coming soon\!
  * Program committee co-chairs: Emily Murphy and JT  
  * SIG convening 

#### TEI Technical Contributor Program update (EB / TOC)  
  * [Syllabus](https://docs.google.com/document/d/1PlzKfTj7vvfSX1DNRoMxRUUjZKNcWvA86EpwMsFnR4k/edit?tab=t.0#heading=h.g4l0rpy0h6fv)  
  * [Guide](https://docs.google.com/document/d/10xON1yWYZC6zP79Eik0k-izzN5FAleBUDvwrEFhT0OA/edit?tab=t.0#heading=h.4d34og8)   
  * **Action on Everyone**: Read the syllabus, and provide comments by 1 week prior this (Jan 2026\) Council Call  
    * Any topics that are not covered?  
    * Any topics that need to be covered in greater detail (specifically [Customisation](https://docs.google.com/document/d/1PlzKfTj7vvfSX1DNRoMxRUUjZKNcWvA86EpwMsFnR4k/edit?tab=t.0#heading=h.c7ynjcswsetc) & [Testing](https://docs.google.com/document/d/1PlzKfTj7vvfSX1DNRoMxRUUjZKNcWvA86EpwMsFnR4k/edit?tab=t.0#heading=h.i2lpugkpo22s) \- if anyone is more comfortable with breaking down these topics please feel free to expand those lesson outlines)  
    * Any online resources/tutorials/slides that you’d like to include for specific topics?  
        
  * **Action on Council, by February meeting:** Council should decide whether to approve the curriculum on review  
    * Work on details of events  
    * Should there be video call events scheduled?   
    * How much can learning activity can be asynchronous?  
    * Begin deciding on Implementation / delivery next month

#### Followup re TBE survey [results](https://docs.google.com/document/d/1FAjcqU0z-SHLQJpUINSmwlF0lU5Hhh23PQ3La3nBxB8/edit?usp=sharing)  (EB)  
  * Would TBE be useful in the TEI Technical Contributor program?  
    * Let's try not to mix those new to TEI with the more challenging technical program  
  * Should Council curate these results as a working paper? 

##### Overview of actions for council members

* **Action on TR**: update the prose of the Guidelines re: [\#2817](https://github.com/TEIC/TEI/pull/2817)  
* **Action on EBB and MH**: to check in with HC and \#infrastructure channel in Slack to pave the way for the next release (Feb 18).   
* **Action on Everyone**: Read the TCP syllabus, and provide comments by **February 2**. Curriculum should be approved by February 9 council meeting.


  


  

    

