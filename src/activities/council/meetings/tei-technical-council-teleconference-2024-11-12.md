---
title: "TEI Technical Council Teleconference, 2024-11-12"
date: 2024-11-12
---
# TEI Technical Council Teleconference, 2024-11-12

10:00–11:30 PDT | 13:00–14:30 EDT | 17:00–18:30 UTC | 19:00–20:30 CEST

### Present

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Elli Bleeker (EB)  
* Patricia O'Connor (TOC)  
* Gustavo Riva (GR)	  
* Torsten Roeder (TR) (19:05)  
* Sabine Seifert (SS)  
* Martina Scholger (MS)  
* Joey Takeda (JT)   
* Magdalena Turska (MT)  
* Raff Viglianti (RV)


## Scheduling next Council teleconferences for the new year  
  * **Action on EBB to** send a poll around to determine availability  
## New Community Calls   
  * [https://www.tei-c.org/activities/community/](https://www.tei-c.org/activities/community/)   
  * [Agenda for November Call.](https://docs.google.com/document/d/1RTQvcl70sjan_gzsrAmhK7RKtYjnYHaTCoTi8y0fIvU/edit?tab=t.0#heading=h.mb4qa3stz1ia)  
  * We would plan always be hosting a community call in the weeks following a Council meeting  
  * MT: Could we have an opening for a prepared talk from the community? Like informal project presentations. JT: Maybe lightning talks might be useful for introductions. EBB: what could be potential pitfalls? E.g., keeping time/agenda.  
  * RV: JT and RV would like Council to suggest a ticket / topic of discussion for each meeting; to be agreed on at the Council call preceding the Community Call.  
  * RV: Maybe agenda should split the topic into 4 to 5 segments  
  * Dates of calls posted on this calendar: [https://members.tei-c.org/Events?EventViewMode=1\&EventListViewMode=2](https://members.tei-c.org/Events?EventViewMode=1&EventListViewMode=2)   
  * Questions  
    * Duration? They are scheduled for 1 hour, but this is not obvious until you get to the registration page.  
    * Attendance of Council members? No obligation but suggestions for the meeting topics or tickets of interest would be welcome. Add to Council meetings 5 minutes for discussion of the topic/ticket of interest.  
    * Ask Community Manager to distribute the reminder to register and join the monthly Community Calls on social media channels esp. Bluesky now that so many have joined that platform recently.  
    * **Action on Council** to come up with topics of discussion for next week.  
  * November call:  
    * Tues. Nov. 19, 8:00 PST (UTC-8) | 11:00 EST (UTC-5) | 17:00 CET  (UTC+1) | Wed. Nov 20, 3:00 (+ 1 day) JST (UTC+9)   
      * RV sending a reminder to register for the Nov call (next week)  
  * December call:  
    * Tues. Dec. 17, 18:00 PST (UTC-8) | 21:00 EST (UTC-5) | Wed. Dec. 18, 3:00 (+1 day) CEST (UTC+1) | Wed. Dec. 18, 11:00 (+1 day) JST (UTC+9)  
## Minute Review and Ticket Triage   
  * Reminder: new Status Pending label (from Go \+ Needs Discussion)  
  * Agreement: monthly “ticket triage” task should heretofore include assigning label(s) to determine the urgency/difficulty of the ticket in addition to assigning to a person, with default label being “needs discussion”.  
  * Automatic assigned status/label by GitHub? SB: maybe have them be labeled "untriaged",“unassigned” or “new” and this label disappears as soon as it is assigned to a person.   
  * Decision: No automatic label for now. All issues should have a Status label; triagers (and anyone else) should check for issues that have no status labels and set a provisional status  
  * JT and GR: [Linking GitHub Issues with published Minutes on Website](https://github.com/TEIC/website/issues/14)   
* Removal of `@calendar`   
  * Done today per [\#2045, \#2432, PR \#2435](https://github.com/TEIC/TEI/issues?q=2045)  
  * The various deletions of `@calendar` from `Exemplars/tei_lite.odd` (starting at line \~2955) need to be removed.  
  * SB just in case merged dev into issues2045-2432  
  * **Action on RV** to double check: `@calendar` was removed from `att.datable`, it was placed on the elements where it's to be used.   
  * **Action on SB** to do the removal from Lite — DONE @ \~20:56Z  
## Patch Release Summary  
  * SB, Hugh Cayless, and EBB released TEI v. 4.8.1 (Stylesheets 7.57.1) that applied a one-line fix the Stylesheets repo to restore missing value lists.   
## Next Release timing 4.9.0  
  * Late January / early February 2025  
  * **Action on EBB**: Ensure time at December Council meeting to set a precise date and focus on preparing for the release.  
  * Issues to close for next release.  
  * Release technician volunteers: RV, TR, TOC  
* TEI Lite 2 Working Group Draft Charge   
  * Rewrite the objectives?  
  * If the declarative syntax and implementation can't be accomplished, the working group at least begins with the concepts and can express them in prose--that can be applied to the Guidelines.   
  * Discussion of whether/if a problem that the new Lite 2 customization proposed by this group will be inconsistent with the current TEI ODD.   
  * MT: The Lite customization prose should be in learning the TEI, whether or not that customization schema is consistent with our processing.   
  * Discussion on the importance of the schema \- aim of the working group to provide a ‘go-to’ schema that could be used for most projects, especially in light of how TEI Lite was to make things easier by reducing the number of elements but that did not happen.  
  * **Action on MT:** Submit the finished draft charge to Council  
  * **Action on Council:** Formalize the charge in the December meeting.

