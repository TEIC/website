---
title: "TEI Technical Council Teleconference, 2025-03-18"
date: 2025-03-18
---

# TEI Technical Council Teleconference, 2025-03-18

11:30–13:00 PDT** | **14:30–16:00 EDT** | **18:30–20:00 UTC** | 19:30–21:00 CET

### Present:

* Syd Bauman (SB)  
* Elli Bleeker (EB)  
* Elisa Beshero-Bondar (EBB, Chair)  
* Ulrike Henny-Krahmer (UHK) 
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)   
* Torsten Roeder (TR)  
* Martina Scholger (MS)  
* Joey Takeda (JT)  
* Raff Viglianti (RV) 

### Apologies

* Helena Bermúdez Sabel (HBS) 

## Action items from this month’s meeting

-  **Action on EBB by 2025-03-21**: test and merge [PR \#2654](https://github.com/TEIC/TEI/pull/2654)  
- **Action on TOC by 2025-03-31**: adjust [TCW22](https://tei-c.org/documentation/tcw22/) to check the Jenkins release artifacts;  
- **Action on MS by 2025-03-31**: Update list of Council meetings after Paderborn in FM1-Introductory note;  
- **Action on TR** **by 2025-03-31**: fix link to Computable Text and Media SIG and make sure people know how to join;  
- **Action on EBB by 2025-04-07**: confirm Council meeting F2F dates with local organising committee;  
- **Action on EBB by** **2025-04-12**: follow up with Nicholas Cole;  
- **Action on TR** **by 2025-04-12**: contact Annette Preissner and request information about the Working Group: what requirements / expertise is required;  
- **Action on MH by 2025-04-12**: close the original [PR \#2679](https://github.com/TEIC/TEI/pull/2679), explain what we're doing, and move it to Source/Defunct;  
- **Action on EBB by 2025-04-12**: deal with the TEI website update needed;  
- **Action on UHK by 2025-04-03**: to find out about getting GitHub notifications when being assigned to a ticket (from “Code” page of repo, select the “Watch” or “Unwatch” button to adjust your settings);  
- **Action on SB by 2025-04-02**: put ATOP meetings on TEI Google Calendar.

## Spring Council F2F(s)  
  * Council was leaning towards 2 SVF2F:  
    * Week of May 5  
      * Decision\! We have **Monday May 19**, 9 \- Week of May 19: **06:00–09:00 PDT | 09:00–12:00** **EDT** | **14:00–17:00** **BST | 15:00–18:00 CET**    
  * Discussion: There may be wisdom in having subgroup meetings after the whole-Council 3-hour session. Thus perhaps we should stack them before & after.


## TEI 2025 Conference and Council F2F  
  * Conference website: [https://tei2025.confer.uj.edu.pl/en\_GB/](https://tei2025.confer.uj.edu.pl/en_GB/)   
  * Conference dates: 16–20 Sep 2025   
  * CFP due Mon, 21st April 2025 (but the real CFP deadline is likely later)  
  * Magdalena Turska is chair of programme committee and requested volunteers for reviewing submissions ([see Slack](https://tei-c.slack.com/archives/C607Y6YAE/p1740850479714529))  
    * SB,  volunteers  
  * Council meeting tentatively slated: Sun 14, Mon 15, and Tue 16 Sep 25\.  
  * **Action on EBB:** Confirm Council meeting F2F dates with local organising committee.

## ISO: TEI needs a new liaison  
  * EBB update: Current TEI representation with ISO. Former TEI Council member Nicholas Cole was our last liaison, but not in touch now.   
  * TEI liaison needed for [ISO/TC 37/SC 3 \- Management of terminology resources](https://www.iso.org/committee/48136.html)  
  * [ISO informational folder in TEI Google Drive](https://drive.google.com/drive/folders/10diuYAlKE_yYf_KwaGKiUGoHYXZZ2cf1):   
    * Look at our PDF on ISO/TC 37 here  
  * One suggestion is to have a formal (per BOD), elected ISO liaison who may be part of Council or may report to Council  
  * **Action on EBB** by **2025-04-12**: Follow up with Nicholas Cole/ find out more about ISO liaisonship. \[Update: EBB contacted ISO people who agreed we could proceed by having Council regularly keep them apprised of TEI Guidelines releases and new features.\]  
  * **Action on TR** by **2025-04-12:** Contact Annette Preissner and request information about the Working Group: what requirements / expertise is required

# Open TEI PRs since beginning of this calendar year

  * [PR \#2680](https://github.com/TEIC/TEI/pull/2680) remove contextless schematron deprecation  
    * SB: changes have been made since approval, but this is a high priority because it will (or does) break the build  
    * Merged\!  
  * [PR \#2689](https://github.com/TEIC/TEI/pull/2689) Update to content model of 'ography'-elements  
    * SB: has 2 approvals, but then subsequent work for TOC to implement  
  * [PR \#2682](https://github.com/TEIC/TEI/pull/2682/files) fix @ident of \<remarks\>, at least partially  
    * SB: seems like it could just be merged?  
    * SB to fix it immediately. :-) — DONE at 2e563e07a  
  * [PR \#2654](https://github.com/TEIC/TEI/pull/2654) allow nested facsimile elements  
    * SB: will no longer be blocked if we have merged \#2680, above  
    * MH: But tests will need to run following merge of \#2680  
    * **Action on EBB** to test and merge by 2025-03-21. \[ebb UPDATE: 2025-05-04: I have merged this, but kept the original ticket open to request an example and explanation of the appropriate use of nested `<facsimile>` elements.\]  
  * [PR \#2677](https://github.com/TEIC/TEI/pull/2677) Change whitespace in heading, fixes \#2669  
    * SB: changes have been made since approval  
    * Merged\!  
  * [PR \#2675](https://github.com/TEIC/TEI/pull/2675) Reverted em-dashes to double hyphens  
    * SB: I think this should be a draft PR until done  
    * Merged\!  
  * [PR \#2679](https://github.com/TEIC/TEI/pull/2679) Remove dead links  
    * SB: are we really sure P5/Source/Guidelines/index.xml is unused? (Build is not broken, but …)  
    * Neither MH nor SB could find anywhere that the contents of that file appear in a current Glines build or anywhere within TEI repo, thus we are inclined to delete, or better yet move to Source/Defunct/  
    * **Action on MH by 4/12**: Close the original PR, explain what we're doing, and move it to Source/Defunct 

## Open Stylesheets PRs since 2024-01-01  

  * [PR \#682](https://github.com/TEIC/Stylesheets/pull/682) Fixes \#657  
    * Merged.  
  * [PR \#738](https://github.com/TEIC/Stylesheets/pull/738) fix for filenames with spaces  
    * MH: I think this is far more complicated than it looks. At any rate, for me, the fix provided doesn’t even solve the problem as stated.  
    * This is a huge issue and can't be solved today   
  * [PR \#710](https://github.com/TEIC/Stylesheets/pull/710) fix \#703: update link in README.md  
    * **Action on EBB by 2025-04-12** to deal with the TEI website update needed

## Recent action items from February meeting and Slack  

  * **Action on TOC** by **2025-03-31:** Adjust [TCW22](https://tei-c.org/documentation/tcw22/) to check the Jenkins release artifacts   
  * **Action on MS by 2025-03-31**: Update list of Council meetings after Paderborn in FM1-Introductory note.  
  * **Action on UHK by 2025-03-04:** To find out about getting GitHub notifications when being assigned to a ticket  
    * From “Code” page of repo, select the “Watch” or “Unwatch” button to adjust your settings.  
  * **Action on TR** by **2025-03-31:** fix link to Computable Text and Media SIG and make sure people know how to join.   
  * [\#2376](https://github.com/TEIC/TEI/issues/2376) : New working group for Charters Module  
    * Action on MS by 2025-03-18 to ask Georg Vogeler about forming said group. SB indicates interest in joining but not leading such a group. \[Update: Georg Vogeler has agreed to form the working group.\]

## Council Mentoring / Special review session   
  * Next Stylesheets meeting can be special review session. Topics:  
    * Using the Docker instance for building & testing  
    * Orientation to the Make files  
    * We should update/improve [TCW32](https://tei-c.org/documentation/tcw32/) as we review/orient Council  
    * Stylesheets meeting currently is next Tues 3/25. Council agrees we  can start 30-mins later AND run for 2 hours total, as long this works for HBS. (Check w/ HBS and JT)

## TEI Community calls   
  * Reminder: there is the Community Call next Wed. at 11am EDT (4pm Europe?)   
  * Open to questions at start  
  * Maybe point to a ticket? **Action on all by 2025-03-25**: Let RV/JT know if there’s a ticket you think should be shown to the community  
  *  Encoding of Geographical Information (check out the [GIS Working Group's Survey](https://docs.google.com/forms/d/e/1FAIpQLSc_nRiioTF1csS9139zDadBckYfQJDz9srFt7wzPQ5SnBpMUQ/viewform)) "If you haven’t done so already, please consider filling out the GIS WG’s survey (all responses are useful even if you haven’t done anything geographic in the TEI :-): [https://forms.gle/BzbFTYUjM2nkhFgv5](https://forms.gle/BzbFTYUjM2nkhFgv5)"  
  * \#[2642](https://github.com/TEIC/TEI/issues/2642): stage directions prior to speaker in sp  
  * **Action on SB** by **2025-04-02**: Put ATOP meetings on TEI Google Calendar  
     