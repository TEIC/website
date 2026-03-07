---
title:  "TEI Technical Council Teleconference, 2026-02-09"
date: 2026-02-09
---
# TEI Technical Council Teleconference, 2026-02-09

06:00 – 07:30 PST | 09:00 – 10:30 EST | **14:00 – 15:30 UTC** | 15:00 – 16:30 CET

#### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS) \[Left: 15:02\]  
* Elisa Beshero-Bondar (EBB, Chair)  
* Elli Bleeker (EB)  
* Ulrike Henny-Krahmer (UHK)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)  
* Torsten Roeder (TR)  
* Joey Takeda (JT) \[Late: Arrived 14:30\]  
* Raff Viglianti (RV) 

#### Apologies:

* Martina Scholger (MS) 

#### Scheduling of the Stylesheets calls: 
  * Result: 4th Wednesday of the month at 19:00 UTC  

#### F2F planning    
* RV suggests we form a subgroup to review \+ label tickets with "Reconsider for P6". This will help with agenda / discussion planning for the F2F.

* Please review and claim newly opened tickets  
  * Remaining tickets to be considered at F2F

#### PRs ready for merging

  * [\#2866](https://github.com/TEIC/TEI/pull/2866): Closes [\#2695](https://github.com/TEIC/TEI/issues/2695) (`<spGroup>` self-nest). [Merged after the meeting.]

  * [\#2844](https://github.com/TEIC/TEI/pull/2844#pullrequestreview-3656029259): Closes [\#2459](https://github.com/TEIC/TEI/issues/2459)  
    * makes `<address>` part of `att.canonical` and `att.typed`  
    * adds a special `@role` attribute  
    * adjusts attribute values for `@role` and `@type`
    * Merged in meeting.

  * [\#2817](https://github.com/TEIC/TEI/pull/2817): Does NOT close [\#2317](https://github.com/TEIC/TEI/issues/2317)  
    * Allow `<app>` as sole child of `<sp>`.  
    * Council Discussion: We had previously thought we may need to add discussion to the Guidelines to explain this. However, we agree that the new example speaks to those who work with `<app>` already., and additional prosei in the Guidelines might only introduce confusion.
    * Merged during meeting.

  * [\#2864](https://github.com/TEIC/TEI/pull/2864): Closes [\#2862](https://github.com/TEIC/TEI/issues/2862). Make dictScrap a member of model.entryPart, allowing it to nest.  
    * Merged at meeting.

  * [PR \#2869](https://github.com/TEIC/TEI/pull/2869): some progress on [\#2865](https://github.com/TEIC/TEI/issues/2865) (revising FM1)


#### Sp F2F @ Würzburg  
  *  **Tue March 10 – Fri March 13 (midday)**  
  * Travel guidance: Aim to arrive on the Monday March 9 or earlier  
  * Agenda planning  
    * Help needed with [Agenda document](https://docs.google.com/document/d/12MLIr7gCbCOk82k9grE-v-2v9uzh69_khVsKwiB-lSU/edit?usp=sharing)   
      * MH: After we return from this meeting, it would be helpful to go to the Board with ideas for a funded meeting for planning P6.  
      * Council discussion of our objective for this F2F: Come out with a shared understanding of what P6 means: We should be able to articulate what we mean and our points of disagreement, too.  
      * We will work on P5, too  
        * Consider what we need to  continue maintaining and how P5 looks in relation to P6.  
        * Try to balance 50/50 between the two?  
      * SB plans to deliver CMSMcQ’s laptop to Öyvind Eide for the [Digital Nachlass at Cologne](https://dh.phil-fak.uni-koeln.de/en/research/cmsmcq). He may visit Würzburg from Cologne, or have TR bring the laptop to Öyvind. 

#### 4.11 Release  
  * Release team: TR, HBS, TOC  
  * Dates  
    * **Refrigerate: Wed 11 Feb**  
    * **Freeze: Tue 17 Feb**  
    * Release date: **Wed 18 Feb**   
  * HC “is thinking that the new HumaNum setup rollout shouldn’t happen until after the next release” (from Slack, thanks MH\!)  
* See Tickets Needing Discussion (below)


#### JT: TEI 2026 Conference update  
  * Dates: **Mon 10 Aug – Fri 14 Aug 26**.   
    * Dates for the TEI Council meeting  
      * This time, HBS has a preference for after the Conference due to a calendar conflict  
      * Discussion: We’re generally preferring scheduling Council F2F after the conference.   
      * Location of F2F? UBC or SFU: would Council need to move lodging?  
      * Council consensus: F2F on Saturday, Sunday, half-day Monday after the conference.   
  * [CFP](https://tei2026.tei-c.org/CFP.html):  due 19 February, extension likely  
    * Action on Council to share CFP widely.  
  * Program committee co-chairs: Emily Murphy and JT  
  * Action on EBB re SIG convening, inc. new AI Tools for TEI SIG  
  * Peer review volunteers?   
    * SB, EBB, UHK, TOC  
  * Hotel bookings: blocks available, but should we see if Council rooms can just be paid by the TEI?  
    * Preference for booking Council as a group  together.

#### TEI Technical Contributor Program update (EB / TOC)  
  * [Syllabus](https://docs.google.com/document/d/1PlzKfTj7vvfSX1DNRoMxRUUjZKNcWvA86EpwMsFnR4k/edit?tab=t.0#heading=h.g4l0rpy0h6fv)  
  * [Guide](https://docs.google.com/document/d/10xON1yWYZC6zP79Eik0k-izzN5FAleBUDvwrEFhT0OA/edit?tab=t.0#heading=h.4d34og8)   
  * **Action on Council, by February meeting:** Council should decide to approve the curriculum on review  
    * Yes, Council approves, enthusiastically\!  
  * Begin deciding on Implementation / delivery.  
    * **Repo for TEI-TCP on TEI GitHub:** [https://github.com/TEIC/Mentoring](https://github.com/TEIC/Mentoring)   
    * EB and TOC wonder if it should be a GitHub wiki  
    * Make sure it's something we can migrate away from GitHub if needed.  
    * RV: we can make a simple static site made of markdown  
    * **Action on EB & TOC:** Let's check out how GitHub wikis work and see if they're easy share/maintain and migrate. 

#### TEI By Example (TBE) : [Discussed online after the meeting]
  * Survey [results](https://docs.google.com/document/d/1FAjcqU0z-SHLQJpUINSmwlF0lU5Hhh23PQ3La3nBxB8/edit?usp=sharing)  (EB)  
  * What should Council do next re TBE? Melissa Terras (on February 5, 2026\) wrote: “it looks like CDCS, which has been looking after TBE here at Edinburgh, is going to be folded into another part of the organisation as part of the rationalisation measures, **and so handing it over to someone else would ensure that it lives on.”**   
  * **Action on EB**: write to Melissa, asking for more details / urgency?  
  * EBB: Let's make sure we curate the eXist backup files.   
  * Let's talk to Board about this, and also add it to discussion at F2F, among topics of things we want to support or not in future (as things change between P5 and P6). 

