# TEI Technical Council Teleconference, 2025-02-11

10:30–12:00 PST | 13:30–15:00 EST | 17:30–19:00 UTC | 19:30–21:00 CEST

### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Ulrike Henny-Krahmer (UHK) (joined 17:36)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)   
* Torsten Roeder (TR)  
* Martina Scholger (MS)  
* Joey Takeda (JT)   
* Raff Viglianti (RV; left at 18:47) 

### Apologies

* Elli Bleeker (EB)



## Guidelines 4.9.0 Release, 2025-01-24 (RV, TR, TOC)  
  * Release issues / updates: release branch and testing late-breaking changes  
  * Subsequent discussion on whether the entire process, including the actual release to the tei-c site, should always be done from the “release-x.x.x” branch, and only after everyone has looked at the Vault and confirmed that all is good, should that branch be merged into the “released” branch. MH believes step 6 of [TCW22](https://tei-c.org/documentation/tcw22/) comes way too early; probably it should come after step 14\.  
  * RV: TCW22 could be more precise about this. Some checking steps we needed to do came after we prepped the release branch.   
  * SB: Create the “released” branch the day *after* the release day. This would give sufficient time for everyone to look at the Vault and confirm that all is good?   
    * RV: Might be an issue implementing this as the released branch needs to be pinned to the release branch on GitHub.   
    * Also issues with artifacts on Jenkins (JavaScript not working or not fetching etc.)  
    * RV: Adjust the TCW22 to check the Jenkins release artifacts.   
    * **Action on TOC:** Update the [TCW22](https://tei-c.org/documentation/tcw22/).

## Update Guidelines Preface 
* The list of Council meetings, members, and workgroups in FM1-IntroductoryNote.xml needs to be updated.  (List of active Council members on [website](https://www.tei-c.org/activities/council/) was updated 2025-02-10.)  
  * **Action on MS by 2025-03-07** to fix this (and consult with SB on workgroups)

## TEI 2025 Conference and Council F2F  
  * Conference website: [https://tei2025.confer.uj.edu.pl/en\_GB/](https://tei2025.confer.uj.edu.pl/en_GB/)   
  * Conference dates: 16–20 Sep 2025   
  * EBB is thinking we would have our meeting on Sun 14, Mon 15, and Tue 16 Sep 25\.

## Spring Council F2F(s)  
  * Council decided to skip the full Council F2F this spring, instead we will organize two virtual meetings (SVF2F):  
    * Week of May 5  
    * Week of May 19  
    * **Action on EBB by 2025-02-20** to share a poll for determining when NA and EU members meet as subgroups and all together.

## Council Mentoring / Special review session  
  * Special session on Testing / Building Guidelines and Make files  
    * We think a 90 min session, focusing on using the Docker instance for building & testing, will be sufficient.  
    * JT: Better sense of the Make files and documentation on it and other tests are needed.  
    * JT: Update the [TCW32](https://tei-c.org/documentation/tcw32/) as we are working on the testing process so that those that are building the Guidelines locally have better documentation as well.  
    * **Action on HBS by 2025-02-18:** to send a poll to reschedule the Stylesheets meeting and the next meeting will be dedicated to overview the building and testing process.  
    * Discussion of ticket triage:  
      * [Mentoring sketch pad](https://docs.google.com/document/d/1FgBn3qnS0J2cU8627xwzW9iMJHb4rLMMo6iflJ19XrI/edit?tab=t.0#heading=h.b99czsvkieos) updated with ticket triage guidance, see also the [Listing the currently assigned tickets in the TEI Archive](https://docs.google.com/document/d/1vBQUHcu5cjIjdxEbe9KotiK7kXYq303s3CLlVCPI-8E/edit?tab=t.0#heading=h.bootwi9m6vbs) section in the [Technical Council Cheat Sheet](https://docs.google.com/document/d/1vBQUHcu5cjIjdxEbe9KotiK7kXYq303s3CLlVCPI-8E/edit?tab=t.0#heading=h.ua0t0aukjtxa) for generating the number of tickets assigned to each Council member already.  
      * **Action on UHK by 2025-03-04:** To find out about getting GitHub notifications when being assigned to a ticket.  
      * When to do the ticket triage? Although prior to the Council meeting is desirable, anytime during the assigned month is perfectly acceptable.

## TEI Slack update  
  * Preparing to open to TEI Community.  
  * Board needs to decide how to handle the invitations, perhaps consulting with Infrastructure Group. 

## TEI Community calls to restart next week (Wed 19 Feb)  
  * Think of tickets to contribute to the discussion.  
  * How about `@level` on `<title>`? (See discussion of Legal Acts and Other Titles later in these minutes.)  
  * Call attention to the new [CMC chapter](https://tei-c.org/release/doc/tei-p5-doc/en/html/CMC.html).

 

## New and ongoing TEI Council work with [SIGs](https://www.tei-c.org/activities/sig/) and [Workgroups](https://www.tei-c.org/activities/workgroups/)   
  * Computable Text and Media SIG (**Action on TR** fix link and make sure people know how to join the mailing list)  
  * GIS Working Group  
  * TEI Lite Working Group  
  * ATOP Task Force  
  * Council member liaison for SIGs when requested. 

## Add a Charters Module
* [\#2376](https://github.com/TEIC/TEI/issues/2376) : Recent ticket to add a charters module
  * Relevant to recent message to TEI-L re “[Legal Acts and Other Titles](https://lists.psu.edu/cgi-bin/wa?A2=TEI-L;323dd1ec.2502&S=)”  
  * From Buenos Aires F2F: “Subgroup A suggests requesting a short proposal with descriptions of related elements and accompanying examples so that we can understand exactly what is wanted, shorter more concise descriptions of related elements rather than lengthy descriptions for each element (like how we define/describe an element in the TEI)”  
  * Task force can investigate:  
    * TEI, CEI, or [Akoma Ntoso](http://akomantoso.info/)  
    * How much is necessary for the TEI to address to supplement other standards?  
    * How much is already potentially generally encodable by TEI?
  * Request Georg Vogeler if he would form a Workgroup that Council could charge to address this topic and determine if a chapter is required or a means for addressing the authenticity issue. Let's make sure a Council member is involved. 


  
