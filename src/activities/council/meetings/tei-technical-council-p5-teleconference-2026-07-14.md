---
title:  "TEI Technical Council P5 Teleconference, 2026-07-14"
date: 2026-07-14
---
# TEI Technical Council P5 Teleconference, 2026-07-14

6am PDT | 9am EDT | 2pm BST | 3pm CEST

#### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)  
* Martina Scholger (MS)  
* Raff Viglianti (RV)   
* Torsten Roeder (TR)

#### Apologies:

* Elli Bleeker (EB)  
* Joey Takeda (JT)  
* Ulrike Henny-Krahmer (UHK)

#### Assign new Guidelines / Stylesheets issues   
  * Review of open Guidelines Issues with no assignee and latest new Stylesheets issue (opened in May by community member).  
  * Are any of these high priority to try to resolve for the July release?

#### Welcome to July TEI Meetings Week\! 
* Next meetings:  
  * [P6 meeting in two days](https://docs.google.com/document/u/0/d/17DrSabyL8BTwAad69kfJeyB4at6sLX_7Mg8AADxp9rQ/edit): Thursday 16 July (P6 meeting): 6am PDT | 9am EDT | 2pm BST | 3pm CEST  
  * Infrastructure Group Meeting: Friday 17 July: 8:30am PDT  | 11:30am EDT | 4:30pm BST | 5:30pm CEST  
  * August Council meetings will be the F2F in Vancouver:   
    * Sat 15 & Sun 16 Aug: Council F2F, SFU downtown campus  
    * Mon morning 17 Aug: Council F2F, SFU Burnaby campus (30-ish mins by bus)  
  * We will need to arrange meeting times for September–December.
* Reminder to vote for Board / Council\! Check if receiving OPAVote messages 

* Infrastructure questions to be resolved (IG meeting)  
  * How will migrations & server changes affect our Guidelines Release process?   
    * Will TCW 22 need to be updated?  
    * How will our process of updating the [https://tei-c.org](http://tei-c.org) website change?

#### July Release scheduled for 2026-07-28 (Tuesday)   
  * Date chosen because Peter Stadler will be available to help with our new release infrastructure.   
  * Release techs: MH, MS, EBB.  
  * **Action on release techs**: Immediately following the release, review changes needed for TCW 22.  
  * Refridge dates (changes to prose only; any change to schema or code can only be merged into dev or a release branch by a release tech): Wed 22 Jul – Sat 25 Jul, inclusive  
  * Freeze (only release tech can merge anything to dev or a release branch): Sun 26 Jul until release

#### TEI Conference / F2F Meeting updates  
  * Conference schedule: [https://tei2026.tei-c.org/schedule.html](https://tei2026.tei-c.org/schedule.html)   
  * Treasurer is seeking estimated expenses: Diane Jackaki (in new Treasurer role) is seeking estimates of our travel expenses to help with Anticipated Expenses section of Treasurer Report at the AGM. Please respond privately to her in the Slack Board-Council channel.

#### “It's Time for P6” Panels at TEI and Editopia conferences
  * P6 Slides for Conferences subgroup: EBB, RV, and MS  
  * Who is attending the Editopia Conference? MS, UH, TR, EB

#### TEI Technical Contributor Program:   
  * Ready to launch / announce the Technical Contributor program at TEI Conference AGM?   
  * TOC: We should have enough material to gauge interest at the conference  
  * Request for clarification: How much should we expect the Contributors to be working on P5 while Council concentrates on P6?  
     * Much of our Council work is discussion + decision making. How much of issues marked "needs discussion" should involve only the Contributors?  
    * Maybe we should not be thinking of dedication to P5 vs. P6 so much.   
    * They could help with initial assessment, triaging, perhaps offer a solution.  
    * Ideally offer PRs to review.   
  * Teaching about customization and testing: Could some live teaching be blended with Community calls?   
    * RV and TOC to discuss further  
    * Maybe a separate Technical Contributor series would be better  
  * Request for guidance on how to update styling/formatting to improve legibility of [TCW 20](https://tei-c.org/documentation/tcw20/), which will be important for the program.

#### Pull Requests with meaningless whitespace changes
* Question from MH on PRs: I keep finding myself reviewing PRs where the vast majority of changes are whitespace changes. Although GitHub has a “hide whitespace” option, this doesn’t seem to do anything for linebreak changes; you still have to look at every change to see if it’s only linebreaks or if there’s anything of substance to review. 
* Could we set a policy whereby any PR for a ticket will only include changes for that ticket, and if whitespace/indents/layout of the XML is bothering you greatly, you just make those changes in a separate PR labelled “whitespace only”, to reduce the burden on people reviewing PRs? 
  * EBB thinks some of these changes come in by accident based on people's editors / operating systems.  
  * SB: Making all the glosses \+ descs go on one line used to be important for i8n translators group but we're not sure that's still active.  
  * Council discussion: Suggest: warn us if it happens (and a lot of white space changes are making a PR difficult to review, and point out exactly which sections of a PR involve significant changes.


#### P5 Tickets and PRs
* High priority on those for the July Release! (Nearly) ready for release?   
    * [TEI PR \#2922](https://github.com/TEIC/TEI/pull/2922) : Updates for 3D Object Encoding  
    * [TEI PR \#2921](https://github.com/TEIC/TEI/pull/2921): `att.performed`   
      * Still need to review the recent changes
      
    * [TEI PR \#2923](https://github.com/TEIC/TEI/pull/2923): `<death>` and `<birth>` as members of `att.locatable` (ready to merge?) — merged during mtg

  * [Stylesheets PR \#800](https://github.com/TEIC/Stylesheets/issues/800) — We should (hopefully) be able to set this to either GO without deprecation or GO with deprecation at this meeting.  
    * EBB should comment on this carefully in the release announcement, but we don't think this needs a deprecation  
    * Merged during call.

* [TEI PR \#2909](https://github.com/TEIC/TEI/pull/2909) — Set a timeout so the build does not wait forever if the website is down.  
  * Merged during call.

* TEI PRs [\#2910](https://github.com/TEIC/TEI/pull/2910) & [\#2911](https://github.com/TEIC/TEI/pull/2911) — Regularize Schematron msgs.  
  * We merged \#2910, but what about \#2911?  
  * Fix the conflicts; then merge (SB or TR).

* [TEI PR \#2901](https://github.com/TEIC/TEI/pull/2901) — Improved wording around `<application>` and `<appInfo>`.  
  * Good for TR to merge.

* [TEI PR \#2855](https://github.com/TEIC/TEI/pull/2855) — `oddDecl` elements only belong in ODD stuff; by now the deprecation date should probably be shifted forward  
  * SB to fix the conflicts and merge before the release.  
  
* TEI PR \#2888:  
   * HBS and SB to review and try to prepare for the July release  
   * TEI [https://github.com/TEIC/TEI/issues/2837](https://github.com/TEIC/TEI/issues/2837)   
    * Raff to add sentence to TAGDOCS to resolve for 4.12 release.


#### Council Preparation for the P6 meeting on Thurs 07-16 
from June P6 meeting notes:  
  * Continue experimenting with modeling `bibl` and other TEI concepts, but also consult the P5 Guidelines to understand the reasons/backgrounds for modeling them as they are now.  
    * See for example notes for Library Catalogers in [https://www.tei-c.org/release/doc/tei-p5-doc/en/html/HD.html\#HD8](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/HD.html#HD8).   
    * Think about which parts of nesting are conceptual and which are due to content model constraints (that don’t make sense to us now)  
     *  Preparation for the "It's Time for P6" Conference Panel: start work on slides.  
 