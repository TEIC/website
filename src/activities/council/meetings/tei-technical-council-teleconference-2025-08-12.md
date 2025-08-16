---
title: "TEI Technical Council Teleconference, 2025-08-12"
date: 2025-08-12
---

# TEI Technical Council Teleconference, 2025-08-12

10:30–12:00 PDT | 13:30–15:00 EDT | 18:30–20:00 UTC | 19:30–21:00 CET

### Present

* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Elli Bleeker (EB)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)   
* Martina Scholger (MS)  
* Joey Takeda (JT)  
* Raff Viglianti (RV until 19:44Z)

### Apologies

* Ulrike Henny-Krahmer (UHK)  
* Torsten Roeder (TR)

## TEI 2025 Conference and Council F2F:  
  * Info / updates: Conference website: [https://tei2025.confer.uj.edu.pl/en\_GB/](https://tei2025.confer.uj.edu.pl/en_GB/)   
  * Council meeting slated: Sun 14, Mon 15, and Tue 16 Sep 25\.  

## Release 4.10.0  
  * Freeze: starts now   
  * Release: Fri 15 Aug  
  * Release Techs: EB, TOC, HBS\*, JT as Pacific Rim Monitor  
  * Guidelines / Stylesheets tickets for release milestones  
      
## Community call  
  * Tues. 8/19 at 11am EDT | 5pm CET  
  * Topic: TEI By Example / Pedagogy discussion
  * Good moment to reach out to those who teach with TEI   
  * Suggestion to connect with Brian Croxall, Diane Jakacki, Walter Scholger, who hosted a TEI Pedagogy panel at DH2025.   
  * **Action on JT** to reach out to DHSI list  

## Work Session to Prep for F2F
   * We will meet Tue 08-26 16:00Z (in Stylesheets slot) to help as agenda-setting for the Kraków F2F.

## Calendaring: Need to determine a new meeting date/time for next meetings  
  * No call in September due to the F2F at the TEI conference 
  * Council to complete a calendar poll for meetings from October onward (see Slack, internal meeting notes).
    * **Action on all Council members** to complete the poll before 2025-08-15.

## Tickets and Pull Requests for Release 4.10

* [PR \#2727](https://github.com/TEIC/TEI/pull/2727): MH would like us to review his fix of the JS bug for bibliography items as popups in the Guidelines.  
  * Merged

* [PR \#2743](https://github.com/TEIC/TEI/pull/2743): (Prefatory, dedication, acknowledgements)  
  * Discussion:   
    * First line of introductory paragraph needs to be updated annually
        * Add it to the regular Council duties? 
        * Automate the date changes?
    * Add explanatory sentence to explain the presence of the non-voting members on the Board under the sub-heading “Appointed (non-voting) members of the Board of Directors”   
    * Representation of TEI Board members on the website (only Board chairs were mentioned previously)  
    * "transitions to its infrastructure" is a bit odd, change to “infrastructure transitions”  
    * **Action on MS:** Update with Council recommended revisions.

* [All open tickets marked for 4.10 Release Milestone](https://github.com/TEIC/TEI/issues?q=milestone%3A%22Guidelines%204.10.0%22%20state%3Aopen)  
* [Issue \#2653](https://github.com/TEIC/TEI/issues/2653) (`@ed` | `@edRef`),   
  * Merged for 4.10  
* [\#2718](https://github.com/TEIC/TEI/issues/2718): `entry/type=wordFamily`  
  * SB & MH: Make child entries typeless for the moment as it is safer  
  * **Council approves SB** implementing this asap for release.

## Tickets deferred to Release 4.11

* [PR \#2538](https://github.com/TEIC/TEI/pull/2538) and [\#2154](https://github.com/TEIC/TEI/issues/2154) (Interleave)  
  * Council discussion:  `<interleave\>` PR is not yet ready to merge, but let's make it a  high priority discussion at the F2F in Kraków. JT will review and merge SB’s PR against the base PR, so that other reviewers only need to review one PR against dev.  
  * Related tickets: [\#2717](https://github.com/TEIC/TEI/issues/2717) and [Stylesheets \#719](https://github.com/TEIC/Stylesheets/issues/719) 

* [Issue \#2663](https://github.com/TEIC/TEI/issues/2663) (phrase-level encoded attr values in descriptions thereof) (fixes so far are merged; punting other languages to milestone **4.11**)  
  * … there are only 35 cases to be checked:  
    * 9 in en  
    * 4 in es  
    * 3 in fr  
    * 2 in it  
    * 7 in ja  
    * 8 in ko

    

