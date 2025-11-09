---
title: "TEI Technical Council Teleconference, 2025-10-07"
date: 2025-10-07
---
# TEI Technical Council Teleconference, 2025-10-07

10:00–11:30 PDT | 13:00–14:30 EDT | 18:00–19:30 UTC | 19:00–20:30 CET


### Present:

* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)  
* Elisa Beshero-Bondar (EBB, Chair)  
* Ulrike Henny-Krahmer (UHK)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)   
* Torsten Roeder (TR)  
* Joey Takeda (JT) @ 18:09Z (leaving \~ 19:00Z)  
* Raff Viglianti (RV) @ 18:08Z

### Apologies:

* Martina Scholger (MS)  
* Elli Bleeker (EB)

### Scheduling in 2026

* EBB raises question of meeting schedule — should we favor more SVF2F meetings over monthly 1½ hour teleconference calls? Consensus seems to be “no”.

### Stylesheets meeting schedule
*  change time to the same as the TEI Council meeting  
  * Idea is to have the Stylesheets meeting consistent with or mirroring the Council sessions   
  * Decision: Hold the Stylesheets meeting during the same time slot as the Council meetings but on the last Tuesday of the month.

### Unclaimed tickets
* Review and assignment of unclaimed tickets  
  * [Guidelines](https://github.com/TEIC/TEI/issues?q=is%3Aissue%20state%3Aopen%20no%3Aassignee)   
    * We looked at the issue related to altIdent (\#2825) and assigned it to MH, SB and HBS.  
    * Discussion of \#2780 (raised during Krakow F2F):   
      * Identify what's entangled between the two repos for Guidelines processing  
      * Discussion needed first before we experiment with altering repo structures  
    
  * [Stylesheets](https://github.com/TEIC/Stylesheets/issues?q=is%3Aissue%20state%3Aopen%20no%3Aassignee)  
		* Assigned two unassigned tickets, \#144 (HBS) and \#778 (SB and MH).

### Council's new workflows
* Reminder of new Council workflows agreed on at Kraków F2F  
  * Ticket assignments  
  * Merging of PRs (Assigned merger must be one of the reviewers)  
     
### Posting announcements
* **Action on EBB** re Rahtz Prize announcement \[[done](https://tei-c.org/news/2025/10/06/2025-winners-of-the-rahtz-prize-and-community-prize/)\].   
  * Find out if Board is making Election Results announcement?   
  * Update Council page  
 
     
### Stylesheets or Debian patch release 
 
  * At F2F, Council thought we should do the patch release. However, we should check if this breaks the Stylesheets tests first and, if so, how badly?   
  * Where did we leave this? Can we patch?  
  * It seems there is little demand for Debian packages   
  * **Council decision:** Leave it til December and see whether we hear any more responses. If we hear complaints we do the patch   
  * Potentially raise ticket about removing support for Debian packages in December if there is no demand for Debian packages

### Next release
* When should we schedule the next release? Early 2026?  
  * Release team: TR, HBS, TOC  
    * Dates to be determined: February as a tentative date?


### 2026 \=\> P6  
  * What do we need to begin work?   
  * Discussion: We need some planning now:  
    * Which tickets are for P5 vs. P6?  
    * Discussion about principles for P6: what would be different from P5?  
      * Changing the underlying structure of ODD (how ODD works)  
      * Whether content models should be open and free or heavily sequenced  
      * Class system problems  
      * Attribute vs. element distinctions resolved irregularly in the past...more consistency now  
      * Roadmap document by Council: perhaps use next F2F meeting to put that together *instead* of working on P5 or schedule a separate (funded) event  
      * Elements such as \<app\> where the ODD context is a challenging issue.  
      * Do we have an existing canonical list of principles for P5 to convey what P5 is?  
        * See points in [TCW 09: Backward compatibility and the maintenance of the TEI Guidelines/](https://web.archive.org/web/20230201013648/https://tei-c.org/activities/council/working/tcw09-backward-compatibility-and-the-maintenance-of-the-text-encoding-initiative-guidelines/)  
        * Review these, identify what we want to change. How would we define today's position?   
      * ODD processing / Durand conundrum. Pure ODD came of this. Proposal to consider just using Relax NG instead of Pure ODD.  
      * **Council decision**: For now, let's continue with feature requests in P5, until we've had the proposed discussion.   
 
### Special F2F or VF2F in spring?   
    
  * Check in with James Cummings about potentially meeting in Newcastle for a F2F meeting on P6.  
  * Propose a panel or invite papers on P6 at the TEI 2026 conference:   
    * Individuals should put forward their ideas for big changes to the TEI.   
    * JT: Papers proposed for the conference could be incorporated into the TEI conference grant which could cover costs of speakers’ accommodation and flights.  
      

### Launching the TEI Technical Contributor program  
  * What do we need for curriculum \+ completion? Completion of two tickets or PRs?  
    * One tick  et might be straightforward, providing mostly the opportunity to do the branch/PR process.  
    * The other should be more substantial.  
  * Format: Live Zoom sessions only? Or a mix of pre-recorded sessions (command line \+ git / GitHub orientation) and live calls?   
    * EBB made [slides \+ video recordings](https://slides.com/elisabeshero-bondar/shell-git-nav/) for regular use in DH classes. Can make a "fork' of these to concentrate on TEI repos.  
    * Other resources for homework \+ review?  
      * TOC's "cheat sheets" / guides?  
      * EB’s mentoring notes  
      * A learning repository for centralising material and providing resources for people to access and actively use.  
      * Chat channel for exchange between contributor candidates  
  * Outreach/invitations: how shall we begin?  
    * TR: start with selected test herd?  
    * How do we select the potential contributors:? Should it be invite only or see if there is any interest?  
      * Try a Pilot that's invitation only to those who ran for Council?  
      * Then public outreach to the wider Community to gauge interest.  
    * Need a finalised syllabus and repo: **Action on:** **UHK, TOC, and EB** by **November** call.

### Reminders/ Action on... 
   * See Summary of Actions in [Kraków F2F notes](../tei-technical-council-f2f-meeting-in-Krakow-14-16-sept-2025/)  
  * Action on EB & TOC to revise TCW 20  
    * EB & TOC volunteer to review and update the rest of the TCWs.  
  * Critical Apparatus Chapter revision  
  * Guidelines failing accessibility tests  
  * Peter Boot's collection of Processing Model tickets

### Advertise TEI Community in “non-traditional” areas  
  * [https://events.ccc.de/2025/09/28/39c3-call-for-participation/](https://events.ccc.de/2025/09/28/39c3-call-for-participation/) (see [https://tei-c.slack.com/archives/C089DBAV39B/p1758493944980859](https://tei-c.slack.com/archives/C089DBAV39B/p1758493944980859))  
  * Would anybody like to help writing the proposal? (English)  
    * Due 1 Nov.   
    * HBS, EBB (others will happily read)  
    * Action on TR to pin drafts to our Council Slack.   
    





    

