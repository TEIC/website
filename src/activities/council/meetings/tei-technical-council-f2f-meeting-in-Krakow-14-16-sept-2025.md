---
title: "TEI Technical Council F2F Meeting in Krakow, 14-16 September 2025"
date: 2025-09-14
---
# TEI Technical Council F2F Meeting in Kraków, 14–16 September 2025


| Meeting Time | Location |
| :----------: | :------: | 
| Sunday 9/14, Monday 9/15 (09:00 – 18:00) | Collegium Paderevianum, Al. Mickiewicza 9: Room A2, ground floor.|
| Tuesday 9/16, 9:00 AM – 6:00 PM | ROOM 106, al. A. Mickiewicza 9b – first floor.|
| Wednesday 9/17 Council + Board Joint Meeting 13:00 – 14:30 | ROOM 105, first floor, Collegium Paderevianum, al. A. Mickiewicza 9b. |



### Participants

* Syd Bauman (SB) Sept 14–16  
* Helena Bermúdez Sabel (HSB), Sept 14–16  
* Elisa Beshero-Bondar (EBB) (Chair), Sept 14–16  
* Elli Bleeker (EB), Sept 14–16  
* Martin Holmes (MH), Sept 14–16  
* Patricia (Trisha) O’Connor (TOC), Sept 14–16  
* Torsten Roeder (TR), Sept 14–16  
* Martina Scholger (MS), Sept 14–16  
* Joey Takeda (JT), Sept 14–16  
* Raffaele (Raff) Viglianti (RV), Sept 14–16  
* Ulrike Henny-Krahmer (UHK) joined on Sept 16\.  
* Guest Magdalena Turska joined on Sept 15\.   
* Guest Hugh Cayless joined on Sept 16\.


### Council Members involved in conferences/workshops

* HBS (Tues morning)  
* EBB, MS, TOC (Tues afternoon)

## Summary of Actions

Actions not related to specific GitHub issues – those are minuted below and recorded on GitHub.

* **Action on Council members** to add a comment to any tickets that haven’t been addressed in a specific release and remove the release milestone from the ticket, so that the council chair doesn’t have to do this in preparation for the release.  
* **Action on Council Chair** to remind everyone before each council meeting to check the unassigned tickets on Guidelines and Stylesheets when we share the Agenda.   
* **Action on EBB:** Remove the Triage table column. Check if there's TCW or Google Doc guidance for council members to remove \+ update to our new workflow.  
* **Action on EB and TOC to be completed before Jan 2026:** Update the content and the links in TCW 20 ([#24](https://github.com/TEIC/Documentation/issues/24)). **HBS** volunteers to review the updated TCW.  
* **Action on Council**: invite Peter Booth and Magdalena Turska to a Spring VF2F discussion of improvements to the TEI Publishing Model.  
* **Action to JT** to lead work on tickets related to improving Guidelines accessibility before next release

## Summary of Other Decisions

Decisions not related to specific GitHub issues – those are minuted below and recorded on GitHub.

* **Updated ticket triage procedure:** Whenever a new ticket is created, Council members look at them and assign themselves if they feel like they want to be responsible for it. New and unclaimed unassigned tickets should be assigned during each council meeting.  
* **New Workflow for Pull Requests:** The person who merges must be one of the reviewers (someone knowledgeable of the contents of this PR).  
* **Start a mentoring program for TEI Contributors:** we offer everyone on the Council election slate (not just the winners) to become our first mentoring cohort. These are the people we tap for training to attain the new badge of TEI Technical Contributor. But this training should be openly available, public facing.

## Topics of high priority

### Review of old Guidelines tickets  
  * Some questions to ask of old tickets:  
    * Is this still relevant?  
    * For FRs: Can this be encoded/expressed within the existing Guidelines?  
    * Are we waiting on use cases or examples to proceed? 	  
      * [\#325](https://github.com/TEIC/TEI/issues/325) closed as not planned.  
      * [\#299](https://github.com/TEIC/TEI/issues/299) closed as completed.  
      * [\#1045](https://github.com/TEIC/TEI/issues/1045) closed as duplicate.  
      * [\#367](https://github.com/TEIC/TEI/issues/367) closed as not planned/reconsider for P6.  
      * [\#1081](https://github.com/TEIC/TEI/issues/1081) closed as completed.  
      * [\#386](https://github.com/TEIC/TEI/issues/386) closed as duplicate.  
      * [\#482](https://github.com/TEIC/TEI/issues/482) closed as abandoned.  
      * [\#1563](https://github.com/TEIC/TEI/issues/1563) closed as completed/subsumed into [\#2782](https://github.com/TEIC/TEI/issues/2782).  
      * [\#2714](https://github.com/TEIC/TEI/issues/2714) closed as completed.  
      * [\#2548](https://github.com/TEIC/TEI/issues/2548) closed as not planned.

### Discussion of Council’s readiness to move from P5 to P6  
  * Would this be “2026 => P6”?
  * Does there need to be a significant change of technology to warrant P6, like the move from SGML to XML? Council feels that the XML technology still holds really well, but the class system doesn’t  
  * Council would like to start in Spring 2026 to prioritize P6 development, and begin to shift to maintenance-only support of P5  
    * We could write for funds to support an in-person F2F toward this, perhaps a [COST Action](https://www.cost.eu/funding/open-call-a-simple-one-step-application-process/) (21 Oct 25 deadline, *very* soon, maybe too soon)  
      * Perhaps we should apply in 2026\. Could start a task force to work on the European grant application by the end of 2025\.  
    * We should aim to deliver a presentation about P6 at the 2026 TEI conference.  
    * Canadian: Connections Grant supporting 2026 conference may be able to help support these activities too.  
      * A second Connections grant in 2027 could support a meeting in Montreal. Perhaps in conjunction with DHSI?   
    * P6 to continue with XML but change the architecture / schemas.   
      * Consider wider range of examples, global inclusion  
    * Communicate this with Board

### `<interleave>` and consequences  
* There was an action on small subgroup \[SB, JT, RV\] prior to this F2F, to update branches and review work done so far on [\#2154](https://github.com/TEIC/TEI/issues/2154), [PR \#2358](https://github.com/TEIC/TEI/pull/2538), and related tickets \+ draft PR: [\#2717](https://github.com/TEIC/TEI/issues/2717),  [Stylesheets \#719](https://github.com/TEIC/Stylesheets/issues/719), [PR \#2549](https://github.com/TEIC/TEI/pull/2549), [Stylesheets \#609](https://github.com/TEIC/Stylesheets/issues/609)   
* At F2F: SB, JT, and RV presented to Council regarding what's needed next to introduce the `<interleave>` element.  
  * We are happy with interleave itself (\#2154)  
  * What to do with `<classRef>` and `<classSpec>`  
    * classSpec has a `@generate` attribute that is magical and (from the user’s point of view) arbitrary and undocumented: can't determine the sequence being output  
    * Proposal to get rid of `@generate` completely, and define entirely with `<classRef>`  
    * To alternate or to interleave the contents within `<classRef>`?  
    * Consider a case like this: One classRef has 5 elements, says zero or 1 of any of these. Another says any of these elements in any order. This will be an ambiguous content model and these will result in invalid DTDs  
    * If you interleave two classes that contain the same element, this leads to an error in RelaxNG.   
* Discussion of [Draft PR \#2549](https://github.com/TEIC/TEI/pull/2549) : Deprecation of classSpec/@generate and classRef/@expand with alternative solutions:  
  * PR \#2549 requires a new attribute be added to \<classRef\> that says how many times each member of the class may appear. (We cannot use `@minOccurs` and `@maxOccurs` for this, as they say how often *the class* is repeated, not each member *within the class*.) We should agree on a name. Suggestions include `@membersOccur`, `@occurenceIndicator` (because “occurence indicator” is what this feature is called in SGML DTD language — in XML DTD language it does not have a name), `@membersRepeat`, `@eachOccurs`, `@howOftenEach`.  
  * We also need to decide on what its values should be. We have suggested values like the following on the ticket. SB: Why not all of them? (Answer: because DTDs do not allow “+”, “?”, or “\*” as a NMTOKEN attr value. There may be a way around this, but SB is not sure.)  
    * ODD-like: “single”, “repeatable”, “optional”, & “optionalRepeatable”; OR  
    * RNG-like: “one”, “oneOrMore”, “zeroOrOne”, & “zeroOrMore”; OR  
      * Council discussion: We prefer the RNG-like values, and to just go with this one instead of allowing all ways of expressing this.  
    * DTD-like: “1”, “+”, “?”, & “\*”.  
  * The ticket suggests we use the same `@org` as is currently on `<attList>`, but that one is pretty specific to its task.Thus SB’s suggestion is either the creation of a new `classRef/@org`, with values of “group” or “interleave” and “choice” or “alternate”; or a new `classRef/@require` with values of “all” or “one”.  
    * Council discussion: defining a class for `@org` : is a broad class and a specialized class within it possible (like `att.global`)?   
      * RV: Do we have the right mechanisms in place to facilitate this, should it be in P6 which will have a hierarchy of classes that will work properly?  
    * **Council decision: Values need to be specified as either "choice" or "interleave"**.

### Patch releases  
  * New Schematron rule invalidates files that were previously valid: [\#2750](https://github.com/TEIC/TEI/issues/2750)  
  * Updated content model for \<sp\>: new class? See [\#2758](https://github.com/TEIC/TEI/issues/2758) & [\#2760](https://github.com/TEIC/TEI/pull/2760)  
  * Current bug in Debian (Deb) XSL package \- requires another patch release  
    * Council discussion: Possible to fix the bug and just release the Deb package itself instead of the entire *Guidelines*.   
      * Issue that the Deb package's install script installs its own p5subset (from the Stylesheets version) from which it makes its build.  
        We could manually give Debian our own p5subset and rebuild the Debian packages without doing another patch release.   
      * There are currently 4 separate Debian packages for TEI, but what if we released just one that contains the entirety of the TEI? How much work would be required to combine the 4 packages into 1?  
      * MH thinks it would be best to combine Stylesheets and Guidelines repos first in order to make the debian package revisions much easier.  
      * Consider whether we should switch from Debian to Flatpack: to support more Linux systems than just Debian. (Debian locations are very canonical but Flatpack is very standard so would solve this problem.)  
      * We could distribute our own release packages from [packages.tei](http://packages.teic.org)[\-](http://packages.teic.org)[c.org](http://packages.teic.org)?  
      * SourceForge hosts our packages but is this needed when the packages are also hosted on GitHub? The download activity on SourceForge indicates that few people are downloading the packages here.  
    * Council discussion of release procedure:  
      * Styling of TCW 22 needs to be updated to improve legibility, styling of the Documentation repo could be improved as well  
      * Need to update other TCWs such as TCW 31 to ensure that the procedure employs `<list>` elements in the encoding to distinguish between the various steps etc.  
      * See ticket raised on the Website repo:  [https://github.com/TEIC/website/issues/93](https://github.com/TEIC/website/issues/93)   
      * Minor housekeeping point with regard to the branch name of the Documentation repository: we’re still using `master` instead of `main` 

### Council’s workflow  
  * The setting of milestones  
    * When to set a release milestone on a given issue?   
      * The ticket assignee should determine if it will be ready for the next release, rather than presume that every ticket can be solved for a release.  
      * **Council agrees to create an extra release milestone “future release” for long-range issues** especially (since we cannot be sure what the future release version numbers will be). SB created one.  
      * **Action on Council members** to add a comment to any tickets that haven’t been addressed in a specific release and remove the milestone from the ticket, so that the council chair doesn’t have to do this in preparation for the release.  
      * **Proposal**: Update the ticket triage procedure so it no longer involves adding milestones, but only assigning someone to a ticket.   
        * The assignee is then *responsible* for the ticket. This means that they don’t necessarily need to *solve* it, but that they need to make sure the ticket’s being worked on.   
        * When assigning a ticket to a new Council member, assign their mentor too.   
      * How/when to decide to add a milestone to the ticket. How to know whether the assignee has looked at the issue?  
      * Perhaps add a mentoring label for TEI tickets that are good for new Council members?  
      * **Updated ticket triage procedure (summary):**  
        * Whenever a new ticket is created, Council members look at them and assign themselves if they feel like they want to be responsible for it  
        * Before every Council meeting, members look at the unassigned tickets and assign themselves: **Action on Council Chair** to remind everyone to check the unassigned tickets on Guidelines and Stylesheets when we share the Agenda.   
        * During Council meetings, we assign all remaining “orphan” tickets or members discuss the tickets that they are assigned to but don’t feel that they want to work on.  
      * **Action on EBB:** Remove the Triage table column.  
        * Check if there's TCW or Google Doc guidance for council members to remove \+ update to our new workflow.

  * Branches and Issues:  
    * One branch per issue?  
      * Not necessary; we can have multiple branches.  
    * It should always be clear which issues are being addressed by a branch.    
    * Branch names should include issue numbers.  
    * Can there be branches without issues? Yes: and those are their own issues that are proposed as PRs.  
      * Opening an issue before making the branch is still preferable, unless it's just a typo correction.   
    * To branch or not to branch, and the relation between issues, branches, and pull requests:  
      * When is it okay to check directly into the dev branch?   
        * When it is only a correction of typos.  
        * You can still do this as a PR for running tests (just in case), and merge such PRs yourself. (self-merging)  
      * When do you need a PR?  / What does a PR require?  
        * Currently any PR involves a minimum of 3 persons: the assignee, 1 reviewer, and 1 to merge the PR.  
        * The assigned person should be checking if there has been sufficient review, but that person could well then be one of the reviewers.  
        * **Council agrees on new workflow:** The person who merges must be one of the reviewers (someone knowledgeable of the contents of this PR).    
        * The person who opens PR assigns a person to merge but also marks that person as a reviewer: **an assigned reviewer.**  
      * We can try the subtask feature in GitHub Issues. See Stylesheets [\#769](https://github.com/TEIC/Stylesheets/issues/769) for an example. These may or may not be compatible with GitHub alternatives, but probably with slight differences.

        

  * Possible alternatives to GitHub  
    * GitLab   
      * Feedback from EB: Institute has recently migrated to GitLab for ethical reasons but encountering several issues that are leading people back to GitHub  
      * MS: Only possible to have one assignee, very restrictive.  
    * Codeberg \- EBB: considered this for course work and seems like a viable option.  
    * Exporting data from GitHub \- RV:   
      * Use the GitHub API to export the data to the alternative if we are migrating while GitHub is still in place. We may need to have the export procedure in place if we are anticipating a scenario where we'll have to export when GitHub is no longer an option  
      * JT reopened [\#1714](https://github.com/TEIC/TEI/issues/1714) re backup of GitHub Issues, perhaps the file exported from a backup can get its own GitHub repo?

  * Are any changes needed to [TCW20](https://tei-c.org/documentation/tcw20/), especially for new Councilors?  
    * This is very out of date regarding our current practice of branching.  
    * EB: Change master branch to main instead (see [\#23](https://github.com/TEIC/Documentation/issues/23))  
    * **Action on EB and TOC to be completed before Jan 2026:** Update the content and the links in TCW 20 ([\#24](https://github.com/TEIC/Documentation/issues/24))	  
      * **HBS** volunteers to review the updated TCW.

### Upcoming Council Meetings  
  * **Council decision:** Next meetings to be on Tuesdays as marked on the Google Calendar (30 minutes earlier than current meeting time.)  
  * October meeting to be **7 October** due to EBB's university senate meeting on the 2nd Tuesday (10/14).


### Infrastructure vulnerabilities  
  * [Stylesheets \#452](https://github.com/TEIC/Stylesheets/issues/452): triage [Stylesheets profiles/](https://github.com/TEIC/Stylesheets/tree/dev/profiles) directory  
    * RV: The idea was originally to provide a centralised place for multiple projects.  
    * Council agrees to review the profiles and delete the ones that are no longer in use.  
    * If we're deleting profiles it is necessary to also remove references to any deleted tei subprofiles, such as subprofile cocoa [profiles/default/cocoa/](https://github.com/TEIC/Stylesheets/tree/dev/profiles/default/cocoa), in `bin` (the bin commands).   
    * There will be cases where we need to keep the profile but delete a subprofile, meaning all references to the deleted subprofile need to be removed in the profile documentation.  
      * Check all three levels: root of Stylesheets, profile, and subprofile, also need to check the alias in the bin  
    * Also we need a single README containing the paths to the profiles to indicate which profiles were deleted and the last release in which one can still find it.   
    * Ticket reassigned to MH.  
        
  * [\#2748](https://github.com/TEIC/TEI/issues/2748): Consider removing Google Analytics from the site  
    * **Council discussion (Sunday)**  
      * Google Analytics is generating validation errors on every webpage  
      * Seems best to remove it from the whole website (Guidelines \+ rest of website)  
      * Proposal to work with the Apache logs and set up a Jenkins script to process the logs once per month, and make them a visible feature of the website, too.   
        * Script written at UVic is getting longer and longer for chasing way bots  
        * But the stats aren't very meaningful: how can you tell what is a meaningful hit.   
      * Perhaps most conventional web stats aren't useful to us, but which kinds of data are helpful?  
      * Google Analytics stats aren't being shared with us? Are they being regularly reviewed?   
        * We should ask Hugh Cayless to show us the data so far.   
      * In the grant applications we're considering, we'd be referencing projects, books, articles that use and reference the TEI as more meaningful than numbers of hits on the website.   
      * Most users are academics, whose institutions may be directing them to be online using VPNs, so the most valuable information may be obscured to us.   
      * Google Analytics is collecting personal information without requesting. **Is this GDPR compliant? Answer: No**: TEI is not compliant with GDPR because we are not informing our users that their personal data is being collected. See the [GDPR guidelines](https://gdprlocal.com/google-analytics-gdpr-compliance/) on Google Analytics  
        * What's collected by Google analytics: IP address, device info, user id, and transaction ids  
        * Data brokers sell such information.  
      * This is a Board issue, though? Council recommends against this because the script is interfering with the code of our web release of the Guidelines.   
      * If we are continuing with Google Analytics, we should be sharing that information openly on the site. But perhaps we should really not be doing it at all.   
      * Collected data should remain "in house". We could process Apache logs to properly anonymous data and study patterns, but is this data ultimately all that necessary for us? Perhaps it is not worth the trouble. 

### Do we want more people on Council?  
  * At some point in the past, Council was changed from 12 to 11 members. Do we want to go back to 12? To 13? To 15?  
  * Bear in mind that at that time most of those Council members were based in the same place, and the TEI funds are diminishing.  
  * Why people want to join Council  
    * Recognition for professional development  
    * Connecting with people  
    * Opportunities to learn  
  * How can we offer training to interested people outside Council and how do we select?  
    * Invite people who ran for Council \+ others who could apply to us for training to be mentored, try some activities that support TEI? And they can determine whether running for Council is worthwhile: will have better working knowledge of what we do.  
    * In the nomination process all people can choose whether they would like to stand for Council or opt only for the training.  
    * Those that do not get elected get offered the opportunity to be trained in and participate in Council as TEI Technical Contributors.    
    * There could be a special session at the in-person conferences for Council \+ Technical Contributors to meet  
    * Also invite them to a selection of the Council Zoom sessions: so we have some meetings in private, and some larger meetings.  
    * Council's mentoring load would increase, but we can coordinate materials (for example create some video recordings for training) to make that easier. Mentors can meet with groups of mentees together.  
    * Council's work will change: We will spend more time thinking of how to mentor, but there will be more people to help with work. (So does it help with solving tickets, or slow us down?)   
    * The groups of people we are cultivating will include those working on TEI By Example  
      * People need to learn how to work with GitHub, learn to make a PR  
      * How to work with Stylesheets  
      * Running tests  
      * Using Docker  
      * How to read and write Documentation (for TCWs)  
  * We could designate "Member at Large" or “Honorary Member” or **"TEI Technical Contributor"** or “Vice-Council Member”  
    * Should have a very clear meaning:   
      * Experience training   
      * If you solve "n" tickets / PRs (perhaps 2), this gives you the honorific \+ badge of TEI Technical Contributor. That badge can be listed when people run for Council.   
    * Badges could also indicate specific areas of expertise ("Feature Structures" or "Documentation")   
    * Recognition: a letter of the board?  
    * Have a page to list the contributors, similar to the Release notes.  
    * **Immediate action on EBB:** Add the lists of non-Council contributors to current releases to our Council AGM report.  
  * SB proposes: we offer everyone on the Council election slate (not just the winners) to become our first mentoring cohort. These are the people we tap for training to attain the new badge of TEI Technical Contributor. But this training should be openly available, public facing. **This was adopted as a Council decision.**

### Big Tickets for Council Discussion + Work Sessions

Special small groups:  
* EB and TOC on Documentation
* SB and MH on Debian packages update

Small Groups Part 1: Monday September 15 before lunch

**Group A:** TOC, HBS, RV  
**Group B:** TR, EB, SB  
**Group C:** MH, JT, MS  
**Group D:** EBB, Magdalena Turska (guest)

* Working Group activity missing from [FM-1: Preface and Acknowledgments](https://tei-c.org/release/doc/tei-p5-doc/en/html/FM1.html) **(Group D)**  
  * See [https://tei-c.org/activities/workgroups/](https://tei-c.org/activities/workgroups/) and list of workgroups that concluded activity, other resources in the Vault, consult with Hugh Cayless and others at the conference: what should be added to FM-1?  
  * **Group D** response:  
    * Preface should give brief organizational history  
    * Think about the reader who knows very little about the TEI and its organizational structure.  
    * Need an opening paragraph like: "The TEI is over 40 years old now, and its organizational forms have been evolving over time. Formative years ...  
      (Tell the story.) P1, P2. Appointed Editors.   
      * How did council come to be  
      * How were institutions/organizations involved  
      * Individual membership. . .   
    * Move "Appointed Editors" section down to precede the TEI Council because this work is related.  
    * With sponsoring organizations, why is HumaNum not listed?  
    * There should be pictures or at least links to a gallery.  
    * Those working on this should interview lots of people with long memories.  
      * Should this be part of a Community Call?  
      * Maybe an open community repo for people to contribute their stories? Stories from younger people as well.   
      * This will help us argue for TEI's impact for funding calls.   
    * **Council discussion:**   
      * When to do this work? Ideally we start working to improve this by the next release.  
      * Rewrite the opening so it's not keyed to a specific year looking backward.  
      * The proposed TEI personography could make this updating more efficient.  
      * How much of this is Council's vs. Board's responsibility?  
      * FM-1 introduces the Guidelines, and introduces the organization. Council should just introduce the Guidelines, and perhaps the Board should be introducing the organization?  
      * We can separate a Preface from the Acknowledgments.  
      * How much of the organizational history is covered on the [History](https://tei-c.org/about/history/) page of the website?   
      * Who's interested in helping with this?   
        * Magdalena Turska  
        * EBB  
        * SB

* [Nine open Stylesheets tickets about docxtotei.xsl](https://github.com/TEIC/Stylesheets/issues?q=docxtotei%20state%3Aopen) , plus [Stylesheets \#744](https://github.com/TEIC/Stylesheets/issues/744) **(Group C: MH, JT, MS)**  
  * Review together and decide on some practical course of action  
  * [\#309](https://github.com/TEIC/Stylesheets/issues/309): Now stale; we recommend removing the milestone until someone calls for action.  
    * Removed milestones and high priority labels. **Action on HBS** to summarize what we've tried so far, and call for help\!   
    * Using TEI PM Word to TEI works correctly  
  * [\#344](https://github.com/TEIC/Stylesheets/issues/344) Closed because no response from submitter.  
  * [\#405](https://github.com/TEIC/Stylesheets/issues/405) We made a recommendation for a fix on the ticket.  
    * Council approves: status go for MH, JT, HBS to work on for 7.60 Stylesheets milestone  
    * TEI PM Word to TEI works correctly for both submitted use cases  
  * [\#429](https://github.com/TEIC/Stylesheets/issues/429) Closed because no response from submitter.  
  * [\#574](https://github.com/TEIC/Stylesheets/issues/574) Closed because no response from submitter.  
  * [\#604](https://github.com/TEIC/Stylesheets/issues/604) Requested sample files from submitter.  
  * [\#686](https://github.com/TEIC/Stylesheets/issues/686) Closed with explanation to submitter.  
  * [\#677](https://github.com/TEIC/Stylesheets/issues/677) Made a recommendation on the ticket: we believe this can be done.  
    * Council approves status go for MH and JT to add the necessary handling for the parameters as discussed on the ticket.

* [\#2745](https://github.com/TEIC/TEI/issues/2745): Should we have a personography of TEI people?  
  * JT has material to start, LB has a personography to continue. SB can contribute a topic map. Good for providing examples of personography.  
  * Council Discussion: can we use `<occupation>` that describes work contributed? Or is that problematic b/c it's not career/work? `<role>` is not available here, though nice to have.   
  * SB: Where does this new personography live?  
    * Suggestion: Documentation repo  
    * What about the Guidelines repo b/c it's about the TEI?  
    * Does it belong in a `<standoff>` element somewhere in the TEI Guidelines, like in the `<teiHeader>`.   
    * Keep in mind that we are not trying to cite what passages individuals have contributed to the Guidelines.  
    * It would most likely be referenced in FM-1. 

* [\#2744](https://github.com/TEIC/TEI/issues/2744): Explain better the use of attributes that do the same thing **(Group A)**  
  * See also Ticket Triage [\#2742](https://github.com/TEIC/TEI/issues/2742) and [\#2736](https://github.com/TEIC/TEI/issues/2736)  
  * Group A: add general remark to class `att.rendition` that combines the individual remarks of each attribute:   
  * **Council discussion:** This needs to explain how these attributes can be used in relation to each other. JT: maybe we can also explain that this can be customized by projects. TR: update the gloss of `@rend` (open a separate ticket for that: [\#2787](https://github.com/TEIC/TEI/issues/2787))  
  * `@lemma` and `@lemmaRef`: add general remark (the one used for `@ed` and `@edRef`)  
  * class `att.handFeatures`: replace current remark with the one used for `@ed` and `@edRef`  
  * `@unit` and `@unitRef`: add general remark (the one used for `@ed` and `@edRef`)  
  * either we add the Schematron to all of them or we replace the schematron from `att.measurement`  
  * **Council decision:** Make the ticket “Status Go” and replace Schematron with a general remark.  
  * **Action on RV and HBS:** Add comments to ticket on actions to be taken for P5 AND why we marked Reconsider for P6.  
  


* [\#2548](https://github.com/TEIC/TEI/issues/2548): Rationalize mechanisms for extending pure ODD  **(Group A)**  
  * Group A agrees with the idea of creating a new attribute and that it should be named `@rngPattern` like [@martindholmes](https://github.com/martindholmes) suggests.  
  * Subgroup also thinks this attribute should go in a class on which both `attRef` and `elementRef` would be members. Not `classRef` because that's just an ODD construct and not `moduleRef` because it can already refer to RELAXNG schemas as a whole with `@url`.  
  * **Council discussion:**   
    * XPointer would be needed to extend URLs to point into XML documents  
    * Need a special mechanism for pointing to the name of the element  
    * Can we point to a module?  
    * We want this capability because of [\#2282](https://github.com/TEIC/TEI/issues/2282).  
    * We mark as Status go for TR to create the attribute and give it teidata.pointer datatype.   
    * Should this be opened in the Guidelines repo when there isn't any processing for it?  
    * It does need a new class (`att.rngPattern`) because it’s only for tagdoc attributes  
    * Which is easier for the TEI user: RNG or ODD?


* [\#1837](https://github.com/TEIC/TEI/issues/1837): improve explanation of `@defaultExceptions` on schemaSpec **(Group C)**  
  * Per last comment (dated 2022-02-02) this is pending a few Council members to agree that we should just document our currently problematic system better, and then work on a better one.

* Stylesheets [\#665](https://github.com/TEIC/Stylesheets/issues/665): Documentation file teixsl.xml needs to be updated **(Group B)**

* Guidelines Publication Improvements  **(Group A and D)**  
  * Stylesheets [\#469](https://github.com/TEIC/Stylesheets/issues/469): Publishing exempla can be more inclusive of multiple languages  
    * See also this Slack discussion  
    * Group A thinks that this ticket could be closed as the solution is already provided in [\#1933](https://github.com/TEIC/TEI/issues/1933) for showing notes with multiple languages using `exemplumGrp` and `examplum[@xml:lang="mul"]`

    

  * Stylesheets [\#626](https://github.com/TEIC/Stylesheets/issues/626) : Beautify the rendering of members of att.global or any lengthy list of elements  
    * Group A thinks to organise them in a CSS grid/flex (some responsive column system) potentially use a HTML system (no JavaScript)  
    * Use \<html:details\> to show the first 30 and hide the rest.

  * Stylesheets [\#446](https://github.com/TEIC/Stylesheets/issues/446): lists of elements on reference pages should be sortable  
  * Stylesheets [\#701](https://github.com/TEIC/Stylesheets/issues/701): Guidelines need a 'Cite This' button


  * Stylesheets [\#266](https://github.com/TEIC/Stylesheets/issues/266): Allow prev/next navigation in HTML GLs Element Pages  
    ![][image2]

    * **Group D** thinks we can add prev and next links to the navigation panel pulling from the alphabetical list of elements, classes, etc.  
    * After lunch:  **New Group C** isn't sure what problem this solves: who is really reading the specs in alphabetical order? How about Close Won't Fix?

  * Stylesheets [\#267](https://github.com/TEIC/Stylesheets/issues/267): Add prev/next links at the bottom of HTML GLs chapters  
    * **Group D has closed this ticket** b/c we now have the navigation panel on every chapter page.  
      

  * Stylesheets [\#125](https://github.com/TEIC/Stylesheets/issues/125): HTML display of spec files: add an xml view link to the footer, pointing at the ODD source  
    * **Group D** thinks: we should have one link to XML source per any of the following Guidelines webpages:  
      * Chapter ([https://tei-c.org/release/doc/tei-p5-doc/en/html/CO.html](https://tei-c.org/release/doc/tei-p5-doc/en/html/CO.html)) Link to GitHub: ([https://github.com/TEIC/TEI/blob/dev/P5/Source/Guidelines/en/CO-CoreElements.xml](https://github.com/TEIC/TEI/blob/dev/P5/Source/Guidelines/en/CO-CoreElements.xml) )  
        * Should such GitHub links point to the latest dev branch or the current release represented? This would encourage people to see the latest stage and consider how to contribute, maybe on a ticket or PR.  
        * Think of who will want to be using these XML views?  
      * Element spec  
      * Attribute classes  
      * Model class  
      * Datatypes  
      * Bibliography  
    * **Group C after lunch:** See JT's comment on the ticket.   
      * Link to XML should be made with a relative link.   
      * Pointing should happen in a new region on the published spec page, defined just above the links.   
      * Could also include a "view most recent page on GitHub" that points to current version on dev branch.

### Release process improvements  
  * [Stylesheets \#457](https://github.com/TEIC/Stylesheets/issues/457): semi-automate the task of updating `source/p5subset.xml` and reviewing expected results  
  * Practice/expectations for the assignment of release milestone markers

* Peter Boot's tickets on the TEI Processing Model (see also his conference paper at TEI 2025): "They result from work on the processing model in the context of this project: [https://gitlab.huc.knaw.nl/edition-publication-model/edition-publication-model](https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgitlab.huc.knaw.nl%2Fedition-publication-model%2Fedition-publication-model&data=05%7C02%7CTEI-L%40LISTS.PSU.EDU%7Cf7cdf245cbfb47893c1208ddeec90d7c%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C638929269457989045%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=ZYFsn8SHZELliXPyNyhSi5RF0g85GWsdcYW%2F1zLKbMI%3D&reserved=0)."  
  * Also find his [online presentation](https://youtu.be/S71Ntbt2rs0) for e-editiones  
  * **Invite both Peter and Magdalena to a Spring VF2F discussion of this.**   
  * [\#2777](https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2FTEIC%2FTEI%2Fissues%2F2777&data=05%7C02%7CTEI-L%40LISTS.PSU.EDU%7Cf7cdf245cbfb47893c1208ddeec90d7c%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C638929269457903619%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=zz6KHzOpBBemsseQL6KwbA7gdL96UqBf70%2FAasXl7do%3D&reserved=0) In TEI PM, define processing for any element using ident="\*"  
  * [\#2776](https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2FTEIC%2FTEI%2Fissues%2F2776&data=05%7C02%7CTEI-L%40LISTS.PSU.EDU%7Cf7cdf245cbfb47893c1208ddeec90d7c%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C638929269457913877%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=fgQSYNYzbV6%2FwyLBB7UBXfuyYsoCMJ237b8vWb4Wr4k%3D&reserved=0) Allow id param on all TEI PM behaviours  
  * [\#2775](https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2FTEIC%2FTEI%2Fissues%2F2775&data=05%7C02%7CTEI-L%40LISTS.PSU.EDU%7Cf7cdf245cbfb47893c1208ddeec90d7c%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C638929269457922140%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=Hi2src6gJ2eVao9zQ%2F0Ksijkepzrv%2F%2BdFtbg1MlfLW4%3D&reserved=0) Move TEI PM processing definitions out of schemaSpec into (new) schemaProc  
  * [\#2774](https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2FTEIC%2FTEI%2Fissues%2F2774&data=05%7C02%7CTEI-L%40LISTS.PSU.EDU%7Cf7cdf245cbfb47893c1208ddeec90d7c%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C638929269457930025%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=lwx7KiSIJjkyLFC6FzjJLBtHv5TmxRA1unim7vsbX%2BU%3D&reserved=0) New behaviour in TEI PM: callProcBlock  
  * [\#2773](https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2FTEIC%2FTEI%2Fissues%2F2773&data=05%7C02%7CTEI-L%40LISTS.PSU.EDU%7Cf7cdf245cbfb47893c1208ddeec90d7c%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C638929269457939426%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=AzvnSUiuwEuGn9MtjX5taSFj1UDK1hh8Ja%2FThlD020c%3D&reserved=0) Facilitating sorted content in TEI PM  
  * [\#2772](https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2FTEIC%2FTEI%2Fissues%2F2772&data=05%7C02%7CTEI-L%40LISTS.PSU.EDU%7Cf7cdf245cbfb47893c1208ddeec90d7c%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C638929269457952993%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=E06AN3zeaIW7rGfbtg%2BSdwRRHBIDi44GTB%2BbRjajzag%3D&reserved=0) Callable statement blocks (procBlock) in TEI PM  
  * [\#2771](https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2FTEIC%2FTEI%2Fissues%2F2771&data=05%7C02%7CTEI-L%40LISTS.PSU.EDU%7Cf7cdf245cbfb47893c1208ddeec90d7c%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C638929269457963502%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=R4Uso3J4%2BnjGoOpe0QE9B68KD%2FngsPPpWOmnosmNggA%3D&reserved=0) Facilitating nested behaviour in TEI PM by allowing model in param  
  * [\#2770](https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2FTEIC%2FTEI%2Fissues%2F2770&data=05%7C02%7CTEI-L%40LISTS.PSU.EDU%7Cf7cdf245cbfb47893c1208ddeec90d7c%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C638929269457976815%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=B1AVuQ%2BqLjNG7yrarGgFnKMwY8ykY9Za7bSBqw8glYM%3D&reserved=0) Allowing text as content of param in TEI PM

###  **The Debian package problem**

SB and MH tried hard to make a hacky fix for [\#2779](https://github.com/TEIC/TEI/issues/2779), by creating a modified Debian (Deb) package only for the Stylesheets, so that we could avoid another patch release for a very simple problem that affects only the Deb packages. This did not work; we had what we believed was a logical approach, but the scripts that sign and release the deb packages are designed to work by downloading all the packages from Jenkins and processing them as a group, and the script we wrote failed twice with an error in the debian package build mechanism which is beyond us. Since it takes less time to do a full Guidelines patch release than we have already invested in this process, we made the following suggestion:

- Leave it for now, since we’ve only had one bug report from a user, and that user has a simple workaround.  
- Ask on TEI-L and at the AGM or the first plenary how many people are using the Deb packages (and check for download stats with Hugh Cayless), and if there is nobody, leave it completely alone until the next release early 2026; if there are few or no other reports by then, drop support for the Debian packages.  
- If we do get multiple requests or bug reports, we simply do another patch release, and we also acquire the knowledge that the Deb packages are still used and should be supported.

## Tuesday morning, September 16

* Questions about how to proceed over the problem with the broken Debian packages build. Should we do a full patch release? Or use this as a test to see whether many people do rely on the Debian release? (We think not many do.)  
  * If a new patch release, it's only the Stylesheets, and only that release would get a new number.  
  * If we inquire: We write to the TEI-L (today) and inquire at the AGM. We have to be careful because most will think it very important when they never use it. (If you don't know, you don't need them. If you DO, we need to hear from you.)   
  * There is a workaround for locally patching this that can be delivered as needed by email.   
  * Perhaps we can do both, if this is only a Stylesheets release.  
  * But such a release wouldn't have much meaning, except as an obstacle (people need to get a new oXygen plugin.)  
  * Do we have enough tickets to justify needing to maintain the Debian packages?  
  * **Council decision:** Do the patch release. However, we should check if this breaks the Stylesheets tests first and, if so, how badly? If the tests break, then we don’t proceed with the patch release today.  
    * Action on patch release subgroup. [**Result: patch release could not be completed at the F2F.**]

### Special session: Processing for Guidelines integration to the website (with Hugh  Cayless)  
  * Stylesheets [\#321](https://github.com/TEIC/Stylesheets/issues/321): All Guidelines Pages should have a dropdown menu in the footer to go to other versions in the Vault.  
    * **Council discussion:**  We like JT's solution for having no JavaScript dependency. Questions of how to efficiently create and where to store the built JSON artifact and how often it should be built.  
    * Where should it go in the footer \- general consensus is below the available language versions.  
    * JT: Should this be available on other *Guidelines* chapters? MH: Might be more useful than the previous versions of the spec pages.  
    * JT proposes that Council should implement this in the patch release.

    


  * Stylesheets [\#470](https://github.com/TEIC/Stylesheets/issues/470):  Flag old GLs versions as old and point to their replacement (See discussion on the ticket.) 
  * Stylesheets [\#594](https://github.com/TEIC/Stylesheets/issues/594): Documentation needed for GitHub webhooks  
  * Guidelines [\#1978](https://github.com/TEIC/TEI/issues/1978): Documentation  
  
### Guidelines fail accessibility tests - needs to be addressed as a priority. 
  * **Council Discussion**: new legal requirements on accessibility (in US /elsewhere): makes sites being vulnerable to enforced removal from the internet.   
  * Address the accessibility concerns seems possible in amending the Stylesheets, rather than awaiting the TEI publisher version.  
  * We should try to address this regularly with each release.   
  * Try to follow the current (accessible) TEI website CSS as much as possible.   
  * Can we import the website's CSS, or keep them separate / align them?   
    * We may need to keep them separate?  
    * But a codeblock on the website and GL should be identical  
    * Website using Bootstrap 5, and it's more minimal than the GL CSS.   
    * Can we use Bootstrap 5 as a basis for both?  
  * **Action to JT** to lead work on tickets related to this, and we'll review in future Council meetings toward next release.  

### Google Analytics Discussion with Hugh Cayless  
  *  Alternative to Google Analytics \- Matomo, Web Logs  
    * Difficulty with alternatives \- yet another system to maintain  
  * Even collecting IP addresses in Apache logs requires making that publicly visible / disclaimer page for GDPR compliance.   
    * Tracking vs. logging distinction. Logging is storing that you visited this site. Tracking is following your activity on other sites.  
    * For only working with Apache logs, we include a paragraph on a disclaimer page, which would explain: what do we do with the IP addresses, what is our data retention policy.  
    * JT: Need to be very careful regarding storage as local storage counts as well.  
    * MH: Using the data only to debug infrastructural problems and   
    * SB and TR: Need to think ahead and account for the time when we will be examining the data and need a diplomatically phrased statement to describe why we are examining the data.  
    * VSD 2011  
    
### Critical Apparatus chapter (with Hugh Cayless)  
  *  [\#2732](https://github.com/TEIC/TEI/issues/2732%20): Modeling Diverging Text (can be closed b/c we decided not to proceed with the new element)  
  * **To be discussed together with [\#2749](https://github.com/TEIC/TEI/issues/2749)** \- **Revise the Critical Apparatus chapter**  
  * **Council discussion**: Need to add prose to guide users through using the critical apparatus for diverging texts.  
  * Guidelines are making assumptions in the prose, e.g. the definition of a lemma “in the text-critical sense”  
  * [Example](https://tei-c.org/release/doc/tei-p5-doc/en/html/TC.html#TCAPWL-egXML-eu) in the [Critical Apparatus](https://tei-c.org/release/doc/tei-p5-doc/en/html/TC.html) chapter with a `<listWit>` containing `<witness>` elements with no content is wrong and needs to be corrected or removed.   
  * Other app issues:  
    * [https://github.com/TEIC/TEI/issues/2000](https://github.com/TEIC/TEI/issues/2000)   
      * A real-world example might be comparing tables of contents.  
      * Desirable for P6 more generally: context-aware content modeling with co-occurrence constraints for the critical apparatus.  
      * See [\#1744](https://github.com/TEIC/TEI/issues/1744)   
    * `<sp>`  and `<speaker>` modeling with critical apparatus  
      * [https://github.com/TEIC/TEI/issues/2316](https://github.com/TEIC/TEI/issues/2316)  
      * [https://github.com/TEIC/TEI/issues/2317](https://github.com/TEIC/TEI/issues/2317)  
      * SB: We should discuss in the revisions to the Critical Apparatus chapter: Because we're permitting many different models within `<app>`, here are some things you will need to check in your project: Provide suggestions for project validation.  
      * MH: we need to be revising the content model of `<sp>` anyway: these tickets should be addressed in relation to the critical apparatus modeling, too.  
      * UHK: We need prose guidelines, too, in the Critical Apparatus chapter and in the specs too about potential consequences for  use of `<app>.`   
      * "With great power comes great responsibility."  
      * Revision of Critical Apparatus chapter: consider a discussion of methods for encoding content models and how this is affected by `<app>`. Standoff methods for multitexts need to be discussed.  
    * To simplify validation, can we introduce a processing step that validates as if the `<app>` and `<lem>` or `<rdg>` are not present?  
    * Consider related implications for `<add>`, `<del>`, `<supplied>` 

    


### Small groups (part 2, started Monday afternoon)

**Group B:** TR, EB, RV  
**Group C:** JT, EBB, TOC, Magdalena Turska (guest)  
**Group D(ebian release)\***  SB, MH  
**Group RDFa\*:** MS, HBB

Tuesday afternoon, September 16: Performance Subgroup:

* [https://github.com/TEIC/TEI/issues?q=is%3Aissue%20state%3Aopen%20%20(speaker%20OR%20stage%20OR%20speech%20OR%20Drama)\&page=](https://github.com/TEIC/TEI/issues?q=is%3Aissue%20state%3Aopen%20%20\(speaker%20OR%20stage%20OR%20speech%20OR%20Drama\)&page=2)1

## Other Guidelines Tickets

| Ticket number | Council Group | Ticket title | Discussion notes |
| :---- | :---- | :---- | :---- |
| [\#2740](https://github.com/TEIC/TEI/issues/2740) | **C** |  Be more explicit about teidata.enumerated for customisation  | Subgroup discussion:The real issue is that we don't provide guidance on how best to update one's ODD customization when working with expanding / evolving projects for updating attribute values (not only those applying `teidata.enumerated`). Internally within our projects, we come up with scripts to update our ODDs, but we don't generalize about this practice for all projects, especially long-running ones. If you want to constrain attribute values via taxonomy: Put that taxonomy in the teiHeader, or point to it there if it's in an external file, you need to be able to point to that taxonomy with `@xml:id` . The question for each project will be how do we flatten the taxonomy for the purpose of customization? EBB: Scripted customizations of attribute valLists can/should be made from other structures besides `<taxonomy>`. ATOP ODD processing ***could*** allow for mapping to project resources to populate valLists. It would be useful to have an ODD processing function to formalize this (so projects don't have to do this with their own XSLT, etc.)  |
| [\#2663](https://github.com/TEIC/TEI/issues/2663) | **B** | Values need not be in descriptions | EB: worked on this as far as our language knowledge would let us. Perhaps MH could take a look at the Japanese? We opened a new issue to harmonize the use of `q`, `mentioned`, and `soCalled` currently used interchangeably to emphasize possible attribute values in the description of attributes |
| [\#2729](https://github.com/TEIC/TEI/issues/2729) | **C** | ODD Processing for glosses and descs | MH: This was raised for ATOP’s benefit, and if we agree with the proposed approach, the only other question is whether we retro-fit this understanding into the existing Stylesheets or just leave it to ATOP. (We should document as well, of course.) |
| [\#869](https://github.com/TEIC/TEI/issues/869) | C | half title pages in TEI Tite | SB: My instinct is that someone should talk to Kevin Hawkins or Perry Trolard. Either Tite should recommend `<titlePage>` & `<titlePart>` (they are in the schema, after all), or they should be removed from the schema and `<ab>` added, so that `<div1>` and `<ab>` can be the recommendation. Also need to ask Hugh Cayless: why it is GO rather than NEEDS DISCUSSION. |
| [\#1724](https://github.com/TEIC/TEI/issues/1724) | B | Fix inconsistency in datatypes of key= and ident= | This is still pending decisions by Council |
| [\#1916](https://github.com/TEIC/TEI/issues/1916) | C | Corpus Exemplar should more explicitly state what it's for | SB: Is Piotr Banski waiting for a ticket? I do not think so, but if he is we should generate it toot sweet. (And in which case do we close this one?) |
| [\#2000](https://github.com/TEIC/TEI/issues/2000) |  | Permit \<row\> and \<cell\> within \<rdg\> and \<lem\> | SB: Should this be set to PENDING for an example from OP? |