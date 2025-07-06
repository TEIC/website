---
title: "TEI Technical Council Teleconference, 2025-04-08"
date: 2025-04-08
---

# TEI Technical Council Teleconference, 2025-04-08

10:30–12:00 PDT | 13:30–15:00 EDT | 18:30–20:00 UTC | 19:30–21:00 CET

### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Ulrike Henny-Krahmer (UHK)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)   
* Torsten Roeder (TR)  
* Joey Takeda (JT)  
* Raff Viglianti (RV) 

### Apologies

* Martina Scholger (MS)  
* Elli Bleeker (EB)

## Council concerns about travel reimbursement

    * **Action on EBB on 2025-05-24**: Bring up concerns about reimbursement in current political climate with BOD  
    
## Update Stylesheets meeting times
    * HBS to send a poll for changing the schedule after April
    * Next stylesheets meeting to start a little earlier at 6pm European CET (updated in calendar)
    
## Spring Council Virtual F2F(s) slated for week of May 19  

  * Full Council meets **Monday May 19**: **06:00–09:00 PDT | 09:00–12:00** **EDT** | **14:00–17:00** **BST | 15:00–18:00 CET**    
  * Set NA and EU subgroup meetings before / after  
  * Plan to hold subgroup meetings after the whole-Council 3-hour session. Thus perhaps we should stack them before & after.  
  * No objections to Sunday evening 2025-05-18 ET for NA subgroup, time TBD  
  * **Action on HBS by 2025-04-15** to poll European subgroup for best prior meeting time.  
      
## oXygen version compatibility for TEI plugin 

  * New oXygen ticket: increasing compatible versions for plugins--how far?  
  * Older than oXygen version 24 \= deprecated  
  * See [https://github.com/TEIC/oxygen-tei/issues/60](https://github.com/TEIC/oxygen-tei/issues/60)   
  * Hugh Cayless sent stats about versions of oXygen's TEI plugin that people are downloading  
  * Some will be cut off when moving to a new version, but v 23 is the "sweet spot".   
    oXygen prefers if we move to v 24 as the lowest one they'll patch  
  * Ask them if they'll support v 23 instead.  
  * We could set a policy to track them 4 versions behind?   
  * **Action on MH by 2025-04-10** to follow up to request v 23\.  
  * It would be good for others on Council to learn about it?  
    * UHK, EBB, SB  
    * MH had made [a Stylesheets presentation](https://docs.google.com/document/d/1LHIhvuNTISCrlMZDZx7jkVbDt8teivQTbJrF0EVo-mY/edit?tab=t.0#heading=h.1nz0wjch6f24) about it  
      * Video of the presentation: [https://drive.google.com/file/d/1szo3wPpmc5Uha7TfGdf9UUjmqFzu6mpW/view?usp=sharing](https://drive.google.com/file/d/1szo3wPpmc5Uha7TfGdf9UUjmqFzu6mpW/view?usp=sharing)  
      * Notes by EBB after watching the video: [https://docs.google.com/document/d/1PjOiyJY8ZLmCfxIgbCBLdGAxV-\_qXLCHlOlPhYIDDGI/edit?tab=t.0\#heading=h.4wvapquqz7u](https://docs.google.com/document/d/1PjOiyJY8ZLmCfxIgbCBLdGAxV-_qXLCHlOlPhYIDDGI/edit?tab=t.0#heading=h.4wvapquqz7u) 

## TEI 2025 Conference and Council F2F:  
  * Conference website: [https://tei2025.confer.uj.edu.pl/en\_GB/](https://tei2025.confer.uj.edu.pl/en_GB/)   
  * Conference dates: 16–20 Sep 2025   
  * CFP due Mon, 21st April 2025 (but the real CFP deadline is likely later)  
  * Magdalena Turska is chair of programme committee and requested volunteers for reviewing submissions ([see Slack](https://tei-c.slack.com/archives/C607Y6YAE/p1740850479714529))  
    * SB volunteers  
  * Council meeting tentatively slated: Sun 14, Mon 15, and Tue 16 Sep 25\.  
  * **Action on EBB:** Confirm Council meeting F2F dates with local organising committee.

## ISO: TEI needs a new liaison  
  * **Action on TR** by **2025-04-15:** Contact Annette Preissner and request information about the Working Group: what requirements / expertise is required  
  * **Action on EBB** by **2025-04-15**: Follow up with Nicholas Cole, AND write an email to Piotr and Laurent. \[Update: EBB contacted ISO people who agreed we could proceed by having Council regularly keep them apprised of TEI Guidelines releases and new features.\]

## Open TEI PRs   
  * [PR \#2679](https://github.com/TEIC/TEI/pull/2679) Remove dead links  
    * SB: are we really sure P5/Source/Guidelines/index.xml is unused? (Build is not broken, but neither MH nor SB could find anywhere that the contents of that file appear in a current Guidelines build or anywhere within TEI repo, thus we are inclined to delete, or better yet move to Source/Defunct/  
    * **Action on MH by 2025-04-12**: Close the original PR, explain what we're doing, and move it to Source/Defunct. **DONE** 2025-04-08: MH actually merged the PR, which also included a required fix for a broken link. 

## Open Stylesheets PRs since 2024-01-01

  * [PR \#738](https://github.com/TEIC/Stylesheets/pull/738) fix for filenames with spaces  
    * MH: I think this is far more complicated than it looks. At any rate, for me, the fix provided doesn’t even solve the problem as stated.  
    * This is a huge issue and can't be solved today   
  * [PR \#710](https://github.com/TEIC/Stylesheets/pull/710) fix \#703: update link in README.md  
    * **Action on EBB by 2025-04-30** to deal with the TEI website update needed  
    * Directing the community to set up TEI Docker environment seems the best way to update this. 

## Recent action items from February meeting and Slack

  * **Action on TOC** by **2025-03-31:** Adjust [TCW22](https://tei-c.org/documentation/tcw22/) to check the Jenkins release artifacts (Done\! Ready for review):[https://github.com/TEIC/Documentation/pull/18](https://github.com/TEIC/Documentation/pull/18)   
  * **Action on TOC by 2025-06-30**:  to take on the general updating of TCWs to bring into alignment with Google Docs / alt versions  
  * **Action on TR** by **2025-04-12:** fix link to Computable Text and Media SIG and make sure people know how to join.

## Opening TEI Slack to TEI Community  

  * BOD in Mar looked at how Slack invites occur. HC was looking for a more stable system rather than Slack invites, which expire quickly.  
    * RV: It should be possible to set the link to “Never expires” after it’s created. Click “Edit link settings”  
  * BOD suggestion for “members only” channel; policy on kicking people off; ?form?  
    * MH: Would potential members get the impression that they were getting privileged access to faster/better tech support or something like that? If that’s not what’s intended, we should probably make that very clear.  
  * Consensus seems to be that there is no need to wait for HC’s improved process.  
  * TEI-C Official Code of Conduct on the website: [https://tei-c.org/about/code-of-conduct/](https://tei-c.org/about/code-of-conduct/) : This is probably sufficient, as it addresses social media.  
  * **Action on EBB by 2025-04-10: Slack chat with Diane J., RV, and JT** re developing the Google form for joining Slack ahead of next community.   
    

## Tickets:

* [\#2642](https://github.com/TEIC/TEI/issues/2642): stage directions prior to speaker in sp  
  * Council agrees we should basically implement only what the ticket requests (and as needed open other tickets for other portions) for next release.

* [\#2335](https://github.com/TEIC/TEI/issues/2335): can this be set to Status Go? (Added by RV during meeting)  
  * SB: Seems like this would be a link to supply a translation for something?  
  * **Action on RV 2025-04-08:** Set to Status Pending and request more info from HC. 
