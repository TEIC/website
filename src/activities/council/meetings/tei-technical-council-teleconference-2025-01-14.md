---
title: "TEI Technical Council Teleconference, 2025-01-14"
date: 2025-01-14
---
# TEI Technical Council Teleconference, 2025-01-14

10:30–12:00 PST | 13:30–15:00 EST | 17:30–19:00 UTC | 19:30–21:00 CEST

### Present:

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

### Invited Guest

* Hugh Cayless (HC)

### Apologies

* Ulrike Henny-Krahmer (UHK)


## TEI 2025 Conference and Council F2F  
  * **Planned** dates: Week of 14–20 Sep 25  
  * Will be announced shortly (after local organizer gets website up)  
  * Conference dates 16–20 Sep 2025 to avoid conflict with the CLARIN event in Vienna (Sep 30–Oct 2).  
  * EBB is thinking we would have our meeting on Sun 14, Mon 15, and Tue 16 Sep 25\.  
  * 

## Next release: Guidelines 4.9.0  
  * Release techs: **RV, TR, TOC**  
  * **Action on Council:** Check your tickets and their release milestone (or lack thereof)  
  * Refridge: Mon 2025-01-20–Tue 2025-01-21 (Only mild changes to dev, e.g. prose edits. No changes to the schema or Stylesheet code during the refrigeration period without explicit approval of release techs)  
  * Freeze: Wed 2025-01-22 (Only release techs may commit to  dev during freeze)  
  * Release day: Fri 2025-01-24

## Upcoming F2F sessions  
  * Spring meeting: Mar/Apr/May  
  * Hugh Cayless: Treasurer outlook re budgeting for Council F2F  
  * In person / virtual … combination?  
  * Spring meeting(s)?  
  * Usually the two Council F2F meeting expenses total to 20–25,000 USD a year (approx.)  
    * The BA F2F was \~23,000 USD   
  * Council should try to stay under the 25,000 USD mark  
  * One difficulty HC mentioned is that it is less possible to get institutions to cover the F2F council meeting expenses these days.  
  * Two separate models, each with variants, were suggested:  
    * Spring meeting based on previous F2F expense (aka “fiscal year”) model:  
      *  Skip F2F this Spring, on the theory that Buenos Aires was quite expensive  
      * Hold F2F in Krakow, as expected  
      * Examine expense of Krakow — iff \< 13,000 USD (or whatever), hold F2F in Spring 2026  
      * This becomes an annual cycle — hold to F2F at annual TEI meeting in Fall, and another the following Spring iff the annual meeting F2F came in under budget, whatever the budget might be.  
    * Semi-face-to-face, divided-face-to-face, or “continental” model:  
      * Skip full Council F2F this Spring, but instead  
      * Hold two (roughly simultaneous) continental F2F meetings: NA & Europe. Probably only JT & MH need to fly in NA, and most Europeans could probably take trains. But sometimes trains are more expensive than planes.  
  * For future F2F meetings, we might want to check if there are any conferences or workshops we can connect to, in the cases where council members are reimbursed for a conference/workshop visit.  
    * In some cases (e.g., that of MS), “Official Travel” can get reimbursed by some institutions but only if it is the standalone Council meeting, not when the meeting is adjoined to a conference or workshop etc.


## [Community Calls](https://www.tei-c.org/activities/community/)   
  * RV and JT: plans for next one?  
  * Council: topic or ticket(s) of interest? — to be discussed in Feb  
  * [Notes from November Call.](https://docs.google.com/document/d/1RTQvcl70sjan_gzsrAmhK7RKtYjnYHaTCoTi8y0fIvU/edit?tab=t.0#heading=h.mb4qa3stz1ia)  
  * Reminder: We’d always be doing this in the weeks following a Council meeting, a topic or ticket from Council discussion might be good for Community Call discussion.  
  * RV: not wanting to compete with other events  
    *  thinking of trying to coordinate future meetings with Kiyonori (so as not to conflict with the very active East Asian Sig), and also to coordinate with e-editiones  
    * E-editiones: next call on same day considered for next TEI community call  
    * SB suggests that one possible collaboration approach these groups may wish to entertain would be alternate months (e.g., .e-editiones runs a meeting during odd months, TEI during even); see about coordinating?  
      * HBS suggests e-editiones might find it helpful to coordinate w/ us  
      * RV: Topics like: "How do I do that in TEI?" TEI calls are still pretty new--we've only had one so far.  
      * Possibly TEI meetups might be oriented more to beginners (vs. e-editiones)? Eg: TEI meetup geared to people who haven't learned what an ODD is yet...  
      * HBS: Usually e-editiones meets 1st Tuesday of each month.

## Preparing TEI Slack for community access
    * **Action on HC**: before next Board meeting, to make all our channels private (except the public “atop” channel), renaming to “-internal” or “pvt-” or whatever, and then make Slack space public, re-creating several of our current channels PRN.


## New TEI SIG on Computable Text and Media  
  * Page is now on website: [https://www.tei-c.org/activities/sig/computable/](https://www.tei-c.org/activities/sig/computable/)  
  * New content and communication channel announcement expected after first SIG meeting (planned for Feb/Mar ‘25)  
      
## Tickets and PRs, perhaps for next Guidelines 4.9 release?

  * [PR \#2648](https://github.com/TEIC/TEI/pull/2648) Normalizing Japanese punctuation: ready to merge?  
    * SB: Yes, ready to merge  
    * Merged at meeting

  * [PR \#2654](https://github.com/TEIC/TEI/pull/2654): nested facsimiles → please review (requested specifically of SB, MH, & MT)

  * [\#2392](https://github.com/TEIC/TEI/issues/2392): Add att.canonical to `<bibl>`  
    * Be very clear on specialized use of @ref on bibl


  * [\#2376](https://github.com/TEIC/TEI/issues/2376) : Add a Charters Module (prod to Council)  
  * From Buenos Aires F2F: "Subgroup A suggests requesting a short proposal with descriptions of related elements and accompanying examples so that we can understand exactly what is wanted, shorter more concise descriptions of related elements rather than lengthy descriptions for each element (like how we define/describe an element in the TEI)"  
  * MS and SB: Check the CEI standard, and Akoma Ntoso.

  * [\#960](https://github.com/TEIC/TEI/issues/960) : MH suggested closing this old ticket on i18n, since there is now a working group. Council agreed, and the ticket was closed.


## Semantic versioning (\#1993)  
  * Draft [PR \#2599](https://github.com/TEIC/TEI/pull/2599)  
  * What SB is seeking (and has been for \~100 days), here, is general agreement or general disagreement that this is an approach we want to investigate.  
  * For easier viewing, here are SB's builds from the branch:  
    * [Guidelines](https://bauman.zapto.org/~syd/temp/4TEICouncil/sydb_1993_version_numbers/Guidelines-web/en/html/index.html) and [Schemas](https://bauman.zapto.org/~syd/temp/4TEICouncil/sydb_1993_version_numbers/Exemplars/)   
    * You mostly want to look at [teidata.version](https://bauman.zapto.org/~syd/temp/4TEICouncil/sydb_1993_version_numbers/Guidelines-web/en/html/ref-teidata.version.html) and the sub-classes it refers to  
    * Remember, there are a lot of details yet to be filled in, here. Before putting in more work, SB just wants to know that Council is not already dead-set against this idea (of this dual-level set of version datatypes, which means we have datatypes defined that *we* never use).  
    * Question: Is it problematic to define datatypes that we never use directly?  
      * JT: Isn’t this analogous to how we define attribute classes? (E.g. some classes are never pointed to directly, just its parents)  
      * 2–3 in favour, none opposed  
    * Thus general agreement that approach, including datatypes that are defined but not used on their own by P5, is OK to continue with  
    * Decision to use “….unicode” rather than “….Unicode” despite its being a proper noun  
    * teidata.teiP5:  
      * Regular expression is a bit loose (should limit to max 3 numbered segments, maybe should not include ‘α‘ and ‘β’)  
## Council procedures
    * Council members signing up for Ticket Triage & Minute Review for 2025

