---
title: "TEI Technical Council F2F Meeting in Buenos Aires, 6-8 October 2024"
date: 2024-10-06
---
# TEI Technical Council F2F Meeting in Buenos Aires, 6-8 October 2024


## Meeting Times (Approximate)

Sunday Oct 6: 
10.30 am to 6 pm 

Monday Oct 7:
10am to 5 pm

Tuesday Oct 8 morning: Rectorado bldg  (half day / tickets)
9:30am to 1pm


### Present 

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Patricia O'Connor (TOC)  
* Gustavo Riva (GR)  
* Torsten Roeder (TR) (19:10)  
* Martina Scholger (MS)
* Sabine Seifert (SS)  
* Joey Takeda (JT)   
* Magdalena Turska (MT)  
* Raff Viglianti (RV)


### Special Guest (Sunday and Monday) 
Hugh Cayless 

### Council Members involved in conferences/workshops
RV (Tuesday morning)
HBS, MT, TOC (Tuesday all day)
EBB, MS, GR (Tues afternoon)


## Action points for Council members

* **Action on EBB:** to write to the TEI List Serv to encourage anyone that is interested in TEI by Example to come forward;  
* **Action on EBB, JC, JT and SS**: organize a meeting with Ed Mackenzie, Melissa Terras and the Edinburgh group and all others interested in TBE;   
* **SS** to provide examples from the Correspondence SIG for TBE;  
* **HBS:** add info on the README on how to contribute to the repo of the TEI website.

### Action points resulting from tickets and issues discussed below

* **Action on SB** to update the existing ticket ([\#1996](https://github.com/TEIC/TEI/pull/1996): align teidata.version with Semantic Versioning Specs) with a redirect to SB’s branch (and corresponding ticket) and then close;  
* **Action on SB, JT, and RV** to meet post-F2F to formalize a proposal re [\#2549](https://github.com/TEIC/TEI/pull/2549);  
* **Action on JT**: to assemble the GIS WG and make some decisions re [\#1474](https://github.com/TEIC/TEI/issues/1474);  
* **Action on MT** re [\#2565](https://github.com/TEIC/TEI/issues/2565): to update the ticket to ‘Status Go’ to proceed with implementing nesting `<facsimile>`  
* **Action on EBB:** Add guidance on [\#1881](https://github.com/TEIC/TEI/issues/1881) to [TCW24](https://tei-c.org/documentation/tcw24/);  
* **Action on TOC, SB, and EBB** re [\#1881](https://github.com/TEIC/TEI/issues/1881): Work on the generation of the IDs: IDs need to be generated for the whole P5 first and then split up;  
* **Action on TOC** re [\#1881](https://github.com/TEIC/TEI/issues/1881): work on changing the prose of to remove "the preceding" / "the following" etc.  
* **Action on SS** re [\#2457](https://github.com/TEIC/TEI/issues/2457): to raise this with the Correspondence SIG and determine what `<fw>` does and does not do to solve this.  
* **Action on JT** re [\#2458](https://github.com/TEIC/TEI/issues/2458): to create a model proposal for `<input>` and `<value>` and put it in core for now.

## Collection of Topics

### TEI by Example (message from Lou / Melissa Terras)   
  * [https://teibyexample.org/exist/](https://teibyexample.org/exist/)   
  * JT summary: Still a decent number of people using the examples but examples and content require updating  
  * Melissa Terras's CDCS group at U Edinburgh is happy to host the site in the long term but need to "sunset" for keeping examples and tutorials up to date. They'll keep the site alive.  
  * Questions: is the code available / open source	  
    * How do we update it?   
    * Discussion: SB: maybe it's not good for Council to be providing all the normative examples?  
  * SB: Council maintains the Guidelines so should the TEI by Example also fall under Council responsibility should we officially take over it?  
    * Note that just asserting that the site is informative, not normative, would probably allay any such fears that TbE website must be kept up to date with the most current Guidelines at all times.  
  * EBB: More input is needed from Melissa Terras and group, request a specific meeting to discuss   
  * MT: This is one of the few resources that's community endorsed (linked from the TEI website)  
    * Could we call for a volunteer group, using the members assembly at the conference in BA? Like a workgroup or a SIG  
  * RV: Find the latest versions that these examples are valid for. If we have to freeze it for a specific moment in time, what version should we set it to etc.?  
  * SB: at least for archiving and permanence issues, if not for day-to-day use, date and version of guidelines is the kind of metadata that should be associated with each example.  
  * EBB: Founding International Advisory Committee (2006–2020); new group 2020–2024, is there still interest in this going forward?  
  * MS: Important to keep it separate, so that Council/website could feature them all but it should be a separate project since there are other ones in other languages (Japanese, or TTHub for Spanish)  
    * EBB: should we be creating a specific group for handling this?  
    * MT: there is much more on the TbE website than just examples, is there a willingness to **reduce the scope of the website**, e.g. get rid of the Tools and Introduction sections which are difficult to keep up to date, while examples are more isolated units and less prone to getting obsolete?  
    * MT: The other concern with this website is that the examples are not that representative of all the things you can do with TEI, there seems to be a focus on poetry and drama, so if the change of responsible authority is effected, it would be recommended to have a process for proposing, reviewing and adding other examples  
    * EBB: Should Council be responsible for any portion of this?  
    * HBS: Council's role should end as soon as we send a call to the community and organize a meeting  
    * JT: Does this fall under the remit of the Board?  
    * RV: Relevant for Board but Council is responsible for tasking groups   
    * JT: Perhaps this can help revive the Education SIG (last convened in 2009\!)  
    * **Action on EBB:** to prepare a slide for the AGM to invite community participation on this point.  
    * Action on all of us to talk to people at the conference and see who's interested  
    * **Action on EBB:** to write to the TEI List Serv to encourage anyone that is interested  
    * **Action on all:** Discuss this during the Council and Board meeting (try to bring in Diane over Zoom if possible)  
  * **Circling back on Tuesday AM:**   
    * Emphasis for this conference and the AGM is to revive the Education SIG in the interests of a call for new examples for TEI by Example   
    * EBB, JC, JT and SS  to try to organize a meeting with Ed Mackenzie, Melissa Terras and the Edinburgh group and all others interested  
      * (SS to provide examples from the Correspondence SIG)

### Review of Status Pending decision   
  (from Paderborn F2F minutes):  
  * **N.B. Council decision on the appropriate use of the Pending label:**   
    * Tickets labeled as “Needs Discussion” are updated to “Pending” to signify that this ticket has a pending action to be implemented by a Council member.   
    * Once the action has been implemented, the ticket reverts back to the “Needs Discussion” label to indicate that it needs to be re-discussed by Council.  
  * **Decision**: “Status: Pending” will replace “Status: Go \+ Status: Needs Discussion” combination  
  * **Action on everyone:** Check your tickets to update “Status: Go \+ Status: Needs Discussion” combination to “Status: Pending” instead.  
    * \[After-the-meeting addendum by SB\] I have added “Status: Pending” to the [Council FAQ wiki](https://wiki.tei-c.org/index.php?title=TEI-Council-FAQ) page.    
  * Discussion on Council ticket labelling  
  * JT: Currently conducting an overview of the ticket labels with a view to remove superfluous labels:  
    * In draft, but if interested (or want to make any suggestions): [GitHub Issue Labels](https://docs.google.com/spreadsheets/d/1lVDf8wi5xT1MWuQWZWKB_74_pIggLiPeKk_fvh_hC2k/edit?gid=2102519968#gid=2102519968)  
  * EBB: Are there any particular labels or label combinations that require Council review?  
  * JT: No immediate issues at present  
  * GR: “Status Go” clarification \- does it mean "work on it and merge" or does it mean to enact the solution that has been proposed.  
  * EBB: General practice is to complete the requested solution, create the pull request, and the assignee of the PR will have the responsibility of merging to dev.

### TEI Lite 2  
  * What do we need?  
  * MT: Have a subgroup for TEI Lite 2 during our small-group ticket triage  
    * Proposal from small-group and then discussed by full Council?  
    * Start with rationale and then focus on the implementation  
  * Planning spreadsheet that we last discussed in Paderborn: [https://docs.google.com/spreadsheets/d/1ft7Pm6MUksHemB9-33RHIyVua4KBXYkG\_XV0xCocXSQ/edit?gid=0\#gid=0](https://docs.google.com/spreadsheets/d/1ft7Pm6MUksHemB9-33RHIyVua4KBXYkG_XV0xCocXSQ/edit?gid=0#gid=0)   
  * MT: See the work of library SIG for the elements in teiHeader, to assure we don't  repeat teiSimple's decision to ignore teiHeader, because this is critical for interoperability.   
  * Here's the [TEI Council Drive folder](https://drive.google.com/drive/folders/1uODIXl2Cgo6qUicSfxeu4XPKrNtwFfe5?dmr=1&ec=wgc-drive-hero-goto)  
    * EBB: Let's move this spreadsheet into the [TEI Council Proposals](https://drive.google.com/drive/folders/1ynvvsEeY7pv_qbiIPxHgCMKd6SzINiJl?dmr=1&ec=wgc-drive-hero-goto) directory here  
    * EBB created a subfolder for TEI Lite under the Council Proposal.  
    * MT moved the document there.  
    * Subgroup to work on TEI Lite during the small group session: MT, GR, HBS and report back to Council

### TEI Website: review of our plans from Guelph: What do we wish to change / implement differently on the new website?  
  * Discussion of where we are with the website (now that several members of Council have been updating it)  
    * SB: Council shouldn't have to take this on as its responsibility.  
  * Currently a private repo, there were two main reasons for this:  
    * Concern about leakage of architectural details   
    * Workflow concern \- would people be using it to draft stuff containing private info (not yet public)? This Could be avoided by encouraging people not to push until the information is ready to be published. (People not aware of how to keep information private or public on the new website, due to lack of experience with GitHub)  
    * TEI Comms Officer needs to have access to the repo  
    * Certain level of knowledge with GitHub (pushing, forking etc) required  
    * RV: Manual update process rather than an automatic process as a failsafe. This can also allow us to use some kind of versioning for the website so that every time that you update the website it updates the version (eg in package.json).   
      * For ending-compliance each page should have versioning info  
    * Board members using the website are creating and accepting their own PRs, but we are not sure if they are running local builds prior to accepting the PRs or if they are aware that they should be testing locally first.  
    * MT: Protected main branch could be used to prevent inconsiderate deployment: people could push to dev, have it tested and automatic deployment would only happen after merging into main.  
    * JT: Provide an alternative for running local builds for members who are not used to or do not have the resources for local testing? Jenkins?  
    * JT and HC: CI process?  
    * Council recommends we make the repo public, but (HBS) add info on the README on how to contribute.  
      * Hugh Cayless has now made the repo public.  
    * MT: What about the review of website content, some initial work done with Janelle but now how should we continue? Do we attempt a big overhaul or incrementally review the website?  
    * HC: We need a web editor person at least and a small group that is happy to work on the website in depth.  
    * HBS: Call for a task force to resume work that has already been done on the website previously  
    * MT: There is a degree of overlap between some of the "educational" extensions we discussed in Guelph with TEI by Example; their work could be represented on the website (but would require permission to re-use or adapt the content; Melissa Terras and the group (revived Education SIG?) could be invited to contribute their work to the website

## [Guidelines PRs](https://github.com/TEIC/TEI/pulls)  
  * [\#2598](https://github.com/TEIC/TEI/pull/2598) (closed Oct 29th 2024\)  
    * RV: The stylesheets need to be updated to fix this correctly: should we  do this with the next release which is tentatively scheduled for Jan/Feb  
    * RV, HBS and TOC volunteer to be release techs for the next release  
    * **Discussion:** to resolve this issue during the next stylesheet meeting on **October 22nd** and to decide then to have another meeting before the next release.  
    * JT: Deprecation of @calendar on a bunch of elements is in November (13th Nov 2024\)  
    * November is a potential patch release date or an early next full release?  
    * HBS proposes Oct 22 Stylesheets meeting: let's try to evaluate this issue first, and decide whether to accept this PR or fix in Stylesheets  
      * SB: still wants to do a patch release ASAP because the Guidelines are majorly incorrect   
      * But no one else has complained so maybe it's okay to wait and correct this properly.  
      * Downside of doing a patch release today means that fewer tickets will get addressed during this F2F.  
      * All of the elements involved in the PR \- some of the elements are big deals (very commonly used).  
      * EBB: How much time would it require doing the patch release today or tomorrow?  
      * SB proposes a patch release next week, HC may be available to assist.   
      * HC: Is the release based on dev or based on the release branch?  
      * EBB: New website changes are on the release branch too  
      * JT: A small patch release can test if the website changes etc are working well  
      * **Council decision:** SB and HC to go forward on a patch release on the new website and resolve this issue within the next few weeks (Date TBC: 15–16 October 2024\)  
          
* Translations PRs  
    * Nudged Martin Holmes to look at Kiyonori's PR  
    * Decision: Add I8N to translation PRs  
    
* [\#1996](https://github.com/TEIC/TEI/pull/1996): align teidata.version with Semantic Versioning Specs, closes [\#1993](https://github.com/TEIC/TEI/issues/1993)  
    * Council decided to abandon this one   
    * Redirect to Syd's branch, which can be a new PR for work in progress, and then close this PR  
    * **Action on SB** to update the existing ticket with a redirect to SB’s branch (and corresponding ticket) and then close.  
  * [\#2578](https://github.com/TEIC/TEI/pull/2578): end descriptions with full stop  
    * **Council decision:** Passes local and GitHub tests, PR merged\!  
  * [\#2538](https://github.com/TEIC/TEI/pull/2538): Add interleave element (and deprecate sequence/@preserveOrder)  
    * JT: Basically ready to go, one question remains \- the validation issue with ODD due to overlapping ODDs? Discussed this with MH.  
    * Need to add prose to explain that this could happen in Relax NG so that it shows up in Google when you search the error message   
      * Error message warning people should provide explanation of why it's happening  
      * Maybe have a Schematron rule to check and provide warning for elements included in interleave that belong to multiple classes  
      * SB: Add information on the error to the Documentation for the processor?  
      * HC suggests we don't permit classRef in interleave to try to prevent overlap problems, when an element appears in two different classes  
      * `<interleave>` is really just for elements  
      * Beware if you have two class refs within an `<interleave>`  
      * Council agrees that the guidance should be  a `<remark>` on the `<interleave>` element page  
    * **Council decision:** Add a `<remark>` to the `<interleave>` element page  
      * Build on this: "F2F discussion in Buenos Aires: We should provide a `<remark>` in the `<interleave>` element spec to caution people working with elements belonging to multiple classes, or when including with classRef."  
    * Council has a solution, we just need to figure out what to call the attribute
   
* [\#2549](https://github.com/TEIC/TEI/pull/2549) is related (and linked) to previous PR [\#2538](https://github.com/TEIC/TEI/pull/2538)   
    * Discussion of Martin Holmes’ suggestion ([comment on Apr 29](https://github.com/TEIC/TEI/pull/2549#issuecomment-2083083564))  
    * The outer interleaving is not a problem, but the inner interleaving is the issue.  
    * SB: Testing the sequencing problem in Relax NG  
      * Would the interleave element apply to the content of the boxes as well as to the boxes themselves?  
      * JT: Martin Holmes' suggestion ‘to take one’ is to take one from each box, then it works as long as you have only specified one from each box. When you specify more than one from one box, it fails. **Example:** boxA (a|b|c) \- Box A has a, b, and c but as long as you select only a or b or c from Box A it works.  
      * JT: would \``@minOccurs`\` or \``@maxOccurs`\` within the \``<classRef>`\` resolve this? Potentially, but we still need to indicate whether the class is considered as a block ( el1 | el2 ) or the elements need to be “poured out”. We could use @use=”members | class”, but perhaps we need different terminology.  
    * **Action on SB, JT, and RV** to meet post-F2F to formalize a proposal   
  * [`#2587`](https://github.com/TEIC/TEI/pull/2587) Allow hand attribute in emph  
    * Request to add `@hand` attribute to `<emph>` and `<dateline>`  
    * RV: dateline should not have `@hand`, you could use `@seg` or `@handShift` instead.  
    * Based on the review of the content model: `<div>` has `@hand` and so `<dateline>` should also have it  
    * MT: This is like a number of tickets opened that request `@hand` or `@place`   
    * HC: `@rend` indicates what the source looks like and also what you want the output to look like but `@hand` applies specifically to sources only  
    * `@rend`, `@style`, `<rendition>` all mention use on source text.  
    * SB: Global attributes are *not* in fact global  
    * MT: We need to clarify usage for of source rendering info for free-text-holding elements vs. structural / meta-information elements  
    * Use of `@rend` to describe output is pretty old, connected to processing in the browser  
    * SB: In P6 this should be much clearer  
      * If we scale back att.global.rendition, people might find it not backwards-compatible  
    * MT: We could try to pilot this kind of distinction in Lite2  
    * JT favors allowing it in att.global.rendition   
    * SB: We already have an [att.written](https://vault.tei-c.de/P5/3.1.0/doc/tei-p5-doc/en/html/ref-att.written.html) so we should just add the requested element to it  
    * Discussion of limits of `<handShift/>` for ambiguity, processing, etc. `@hand` should be able to be used anywhere we'd use `<handShift/>`  
    * MS: suggests we only add `<emph>` to att.written and leave a note on the ticket to explain   
    * HBS: New proposal: Create a new class `att.source.rendition`, its contents relate to the source but not its metadata so then `att.written` and `att.placement` will be a member of this class  
    * SB: probably many attribute classes would be part of both these classes  
    * In the meantime, put `<emph>` and `<dateline>` in `att.written` for now  
    * JT: We should include a note on this ticket to indicate Council thinks we should approve these requests generally  
    * SB: Does this interfere with the processing model in any way?  
    * Council likes the new proposal to create a new attribute class for descriptions of source rendition  
    * MT: `att.source`?  Maybe this is sufficient  
    * Parallel case will help with naming and defining the new class: `model.phrase` and `model.limitedPhrase`   
    * **Action on MS:** Finish the requested work on `<dateline>` and close the related issue [\#2550](https://github.com/TEIC/TEI/issues/2550)  
    * **Council decision:** Merged [\#2587](https://github.com/TEIC/TEI/pull/2587)  
     
### Large Issues and Tickets requiring full group discussion

* Issue [\#1474](https://github.com/TEIC/TEI/issues/1474): improve GIS/gazetteer encoding support in TEI.   
  * RV: This is marked Status: Go but I think we need some coordination to move it forward; options are still being discussed on the ticket and I think we’re very close to making a decision)  
  * Blocked until **action on JT**: to assemble the GIS WG and make some decisions.  
  * Changing the status to pending.

* Issue [\#2565](https://github.com/TEIC/TEI/issues/2565): Allow nested \<facsimile\> ?  
  * MT: Generally, `<facsimile>` should nest because the [definition of the element](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-facsimile.html) mentions “set of images”, therefore one can ask for subsets to express groupings for a variety of reasons; one reason is to express the composite character of a single manuscript, as shown on the issue: several sermons created as individual manuscripts but then bound together   
  * Workarounds have been proposed but unsatisfactory, as discussed on the mailing list and the issue in github  
  * SB objects on the encoding, suggesting there should be facsimile metadata in the teiHeader therefore suggesting individual TEI documents  
  * HBS: TEI insists that the metadata of the manuscript `<msDesc>` represents the manuscript as it physically is right now, and the conceptual idea of the manuscript (texts subsequently bound together) it would be represented by `<msPart>` which is what the encoders did  
  * Discussion of using the `<group>` element to act as a grouping wrapper for facsimile elements (akin to text/group/text):   
    * Why is it required to convey the composite part?  
    * MT: because the parts of the composite manuscript can (and are) also individual manuscripts in their own right  
    * SB and RV suggest to use `<group>` to mirror the structures for composite texts  
    * `<group>` in relation to `<text>` \- Grouping texts together but also expressing the sequence of these texts but is this analogous to or even relevant for `<facsimile>`?  
    * MT: There are many reasons why you might want to arrange subsets, it is unnecessary to require intermediate grouping element when xml nesting makes that already explicit  
    * MT: arguments that using `<group>` would mean that suddenly we could have `<text>` and all the transcriptional elements as descendants of facsimile, so the superficial structural correspondence harms more than it helps  
    * MT: allowing nesting of `<facsimile>` will certainly not lead to weird side effects precisely because its use is limited to a very specific context  
    * JT: how does it affect IIIF use, would that unnecessarily repeat some of the IIIF specifications or make it harder to generate manifests from TEI documents  
    * RV: not what the TEI does so not really applicable?  
    * Discussion: Either TEI consumes IIIF manifests or TEI encoding is used to generate manifests. In the former case, TEI structures do not influence IIIF, in the latter the curators of TEI sources are in control of the process to output data to the IIIF manifest. Decisions would need to be made anyway about how to map from facsimile to manifest.  
    * SB: Why not just a sequence of facsimiles instead of nested facsimiles?  
    * MT: Because of the composite character of the manuscript, in the particular example of ([RRSS registry](https://rrss.manuscripta.zrc-sazu.si/register.html?search=&limit=20&start=1&language=en-US)), a born-digital resource, it is an inventory of manuscripts (represented by msDesc in the body), more than 100 and the same number of corresponding sibling facsimile elements.  
      * Some manuscripts are composite, i.e. having sub-parts, which are msParts. They can't be represented as siblings among others, because then there's no wrapping element that makes it clear that these facsimiles are all part of a composite structure.   
      * See [013](https://rrss.manuscripta.zrc-sazu.si/rrss_ms_013) for an example of a composite manuscript.  
      * RV: SB's proposal does not resolve the nesting issue, we still need a way to express that there is one book of which all these nested facsimiles are a part  
      * msPart elements don't easily map to sibling facsimile elements. The parallel in mirrored structures between msDesc/msPart and facsimile/facsimile nesting is clearly useful.  
      * If we put `<group>` in we are applying ‘syntactic sugar’ whereas nesting `<facsimile>` avoids this.  
      * We could use `@corresp` rather than `@facs` when pointing from  `<msDesc>` or `<msPart>` to the facsimile and then this would be more explicit at associating the metadata with the data. But we maybe should have a more explicit pointing mechanism for this.  
    * Discussion of why the [surfaceGrp](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-surfaceGrp.html) doesn’t accomplish this? (See [explanation provided by the OP on TEI Listserv)](https://lists.psu.edu/cgi-bin/wa?A2=TEI-L;f4bdaac4.2406&S=)  
    * This could be useful as an example from a real project to show TEI by Example and improve the Guidelines  
    * If the more explicit method of linking metadata entries (e.g. msDesc) with corresponding facsimiles should be recommended, then there is a surrogate element within the `<msPart>` and this could be where you put the pointer instead of very generic \`@corresp\`?  
    * Council in the course of discussion reaches the consensus to **allow nested facsimiles**.  
  * **Action on MT:** to update the ticket to ‘Status Go’ to proceed with implementing nesting `<facsimile>`.

* Issue [\#2570](https://github.com/TEIC/TEI/issues/2570): graphic attributes: url obligatory even in the presence of `@facs`  
  * Discussion of the hand drawn cross in the example:  
    * `@facs` should be on `<figure>` and not on the `<graphic>`  
    * `@facs` is already global so any element can have it.  
    * RV: `<graphic>` is essentially a pointer to a resource so it does not make sense to have `@facs` on `<graphic>`   
    * Problem is solved by having `@facs` on `<figure>` and you don’t need to worry about the URL being required.  
    * Problem stems from `@facs` being global but it really shouldn’t be allowed on graphic.  
    * Ticket closed during F2F

* Issue [\#1881](https://github.com/TEIC/TEI/issues/1881): decide naming conventions for Guidelines example, figure, and table @xml:id values  
  * SB: The problem is what element do we use to refer to them and what mechanism do we use?  
  * Suggested solution: Put xml:id on every example/figure/table and number them  
  * RV: Only issue would be when you return to add a new example/figure/table within two existing ones and the numbering gets skewed.  
  * Proposal for IDs: 2 character identification convention.  
  * The example/figure/table IDs are derived from the chapter/section ID  
  * GR: Beware \- Using generate-id() has a tendency to always generate the same value ID. Has something to do with the way Saxon reads the nodes of your documents.  
  * JT: For human readability add a dash or hyphen example/figure/table to separate the identification snippet so that the xml:id is clearer for humans.  
    * Example: SA-table-pk (Closest ancestor div/@xml:id is on the left, then whether it is a table/example/figure, and the last part is a 2-letter (using only the ASCII a-z) disambiguator per Council agreement.   
  * **Action on EBB:** Add guidance on this to [TCW24](https://tei-c.org/documentation/tcw24/).  
  * **Action on TOC, SB, and EBB:** Work on the generation of the ids  
    * IDs need to be generated for the whole P5 first and then split up 	  
  * **Action on TOC:** work on changing the prose to remove "the preceding" / "the following" etc.  
  


* TEI Lite 2 Update (MT, HBS, GR)  
  * On the Monday work session we started writing an ODD with a constrained schema by evaluating modules in order and eliminating *a priori* elements that are (tentatively) considered "not-lite", collating with the list of elements present in TEI Lite and TEI Simple. So far only header and core modules have been thus evaluated.  
  * We intend to follow up with the rest of the modules (remaining ones are less numerous)  
  * We want to consult with the best practice for Libraries recommendations, for the basic encoding "levels", and, in particular, the TEI Header template, though critically reexamined to suit today's environments and interoperability requirements  
  * We started to prepare a basic teiHeader template, more extensive than the basic TEI one, to have a (gentle) pressure towards shared metadata content.  
  * Main conceptual challenge is to ensure much stronger constraints on the content models of many elements depending on the context they are used in, with the basic distinction of   
    * Structural and metadata elements  
    * Text-bearing elements (for free text and transcription of primary source)  
  * Good start has been made but more concerted effort in a smaller group in necessary to provide a complete proposal: an ODD, introduction, file templates and examples.  
  * **Request for a Council appointment of a working group** to continue with this work on Lite 2  
  * Nota bene that the groundwork laid for TEI Lite would essentially serve as a pilot for prospective TEI P6.  
  * SB: Will this provide processing model examples, too?   
  * MT: A schema for TEI Lite isn't really about the processing model, though as a part of the ODD we may want to provide models tailored for TEI Lite documents.  
  * HBS: Maybe we can have a customization of the customization TEI Lite, good idea to include the processing model.  
  * MT: Regarding the way to express contextual constraints for the content model, in the TEI Processing Model we already have the predicate attribute for that role, so we could let us be influences by it in any new designs to add to the ODD  
    * See also: [https://github.com/TEIC/TEI/issues/1744](https://github.com/TEIC/TEI/issues/1744)	  
  * MT: Having contextually differentiated content models would solve a lot of problems that we are currently experiencing, with unpredicted side effects and various idiosyncrasies.  
  * Chair asks for examples of the predicate concept.  
  * MT: Currently the processing models are children of an `<elementSpec>` for a given element   
    * Example: For the `<pb>` element you may have several nested models, e.g. with a predicate (`<model predicate="@facs" ...>` and without. The first would be applied when a `<pb>` element has a facs attribute (e.g. to display a facsimile image) and the other in remaining cases (e.g. just to display a page marker). In general, in TEI Processing Model, to determine which model should be applied within a given situation, you need to analyse the available models top-down and pick the first one with a matching predicate (or without a predicate)  
    * Example2: Predicates can also take into account not the current element but a broader context, e.g. `<sic>` elements within a `<choice>` may be rendered differently (as a part of the choice popup or a footnote) to a standalone `<sic>` element that would be rendered just with a (\!) mark after itself. Predicate for such case could be expressed as e.g. `<model predicate="parent::choice" ...>`  
  * SB: How much of the contextual constraints for the schema can be actually expressed in Relax NG (as opposed to Schematron, where it's much easier and more is possible?). Best if context definition is limited to ancestor check or attribute presence.  
  * JT: not all processors can evaluate Schematron and give warnings.  
  * MT, HBS: this is of course the main challenge, to see what can be implemented, but we would like to come up with expressive, declarative syntax and attempt the implementation. We would very much like to call on the Council expertise in the latter.  
  * MT: On a side note: ODD processing module specs are implemented and extended in tei-publisher-lib, the TEI Processing Model implementation in XQuery. The extensions should be evaluated and ideally ported back to TEI.  
  * Peter Boot will be delivering talk at [Declarative Amsterdam](https://declarative.amsterdam/) in November 2024, that's a first critical assessment of the TEI Processing Model and Publisher extensions from beyond the core TEI Publisher team.  
    * Peter has agreed to attend the monthly meetup with e-editiones to discuss this in more detail (Jan 21st 2025\)  
    * Council is invited to attend to join the discussion  
  * **Action on EBB by our November Council Call:** Write up a call for the work force to work on this:  
    * MT, GR, MS, and HBS

* Encoding of letterheads / postcards collection of tickets  
  * Issue [\#2457](https://github.com/TEIC/TEI/issues/2457) encoding of letterheads: Letterhead is usually present at top or bottom. Pre-printed portions could have a portion that one adds by hand.   
  * The discussion of letterheads led to discussion of questionnaires and how these kinds of material are connected by their encoding needs.   
  * During discussion, we thought of making this more general--not just for letterheads. Letterheads are a subset of any pre-printed parts.  
  * Discussion of separating or distinguishing the different parts:  
    * SB: It is essential that whatever markup is used, it allows for a simple XPath to suffice to differentiate pre-printed parts and filled-in parts from the rest of the document in processing  
    * Using `@hand` is one possible solution, (see [example](https://github.com/TEIC/TEI/issues/2457#issuecomment-1897843507) provided by EBB)   
    * JT: The issue of blankness is what is really challenging here. An opportunity to provide a mechanism to denote space using `<space>` and that someone used this to add something to it.  
      * `<space>` has `@rend` and could denote the underline  
    * MT: Using `<choice>` to indicate the dual aspect: e.g. space child for the blank space and `<add>` or `<seg>` to represent what was filled in?  
    * Other options are `<add>` or `<input>`  
    * `JT: <blank>, <value>,` and `<input>` combination  
  * Discussion on the applicability of `<choice>`:  
    * SB: documenting the duality is good but `<choice>` is the wrong semantics for this (MT strongly disagrees with that statement, choice "groups a number of alternative encodings for the same point in a text")  
    * Council suggests the use of `<fw>`   
    * definition of `<fw>` probably needs to be adapted a bit  
    * **Action on SS:** To raise this with the Correspondence SIG and determine what `<fw>` does and does not do to solve this. 

    

* Issue [\#2458](https://github.com/TEIC/TEI/issues/2458) \- encoding of pre-printed parts in correspondence  
  * EBB tried to use `<ab>` to wrap around the question and the answer within the form  
  * Also an idea to introduce an element `<formShift>` to mark the points of transition within a form.  
  * `@hand` is not yet global but could it be a solution for this?  
  * Do we want to introduce new elements for this situation or are there existing TEI elements that can convey this?  
  * GR: it is probably important/interesting to keep the information that the document is *supposed* to be filled out, in opposition to "*afterthought*" additions, marginalia or corrections for which `<add>` is commonly used  
  * Discussion of using `<add>` inside `<space>`  
    * JC \[who insists he isn’t really here\]: you also will likely need `<addSpan>` for situations when one writes from one area to another, which then is a slippery slope that RV worries about.  
  * Discussion of the `<space>` and the semantics of the space (needing to be filled?)  
    * HC: `<space>` has `att.dimensions` and we convey this information in forms  
    * RV and MT: `<space>` is an empty element and should be kept like this, instead we are allowing weird things creeping in  
  * Discussion on what wrapping element to use `<choice>`, `<space>`, `<metamark>` or introduce a new `<input>` element   
    * Suggestion was made to use `<ab>` for as a wrapper element, which EBB did in her encoding of a form (see [example](https://github.com/TEIC/TEI/issues/2457#issuecomment-1897843507) provided).  
    * It was pointed out that `<ab>` is for blocks, not phrase-level.  
    * SB: points out that `<seg>` is the phrase-level equivalent of `<ab>`  
    * MT: But we need to have this element both at the phrase level and block level, because sometimes we have small inline blanks to be filled in, other times large gaps intended for longer written forms (even multiple paragraphs or poems)   
    * RV: perhaps use `<metamark>` to signal spaces to be filled in?  
    * discussion of a wrapping element for what we are calling `<space>` or `<metamark>` and then the entered content to be put inside  
    * Discussion: we should make this also a fitting solution for digital form entries as well as preprinted forms  
    * MT: we probably need the conceptual distinction between the wrapper and its parts: the visual clue or a prompt (underline, a box, checkboxes to select, dropdown, empty space reserved to write on), the entered value or content, any potential additional content (e.g. a form label or printed question to be answered)  
    * RV: think about element economy before we invent a bunch of new elements  
    * JT and HBS: Is this like feature structures?   
      * Are feature structures more for aggregating the data rather than representing the textual phenomena  
    * Should the label always be *outside* the form input field? Because the label is not part of the input..  
    * RV: both should perhaps be separate but connected by attribute pointing  
    * Perhaps the label *is* the wrapper?  
    * tables, lists, `<ab>`s of questionnaires, computer input forms…  
    * EBB: Discussion of accounting for the maximum encoding possibilities (need to be flexible on how we invite input)  
    * RV: Content model needs to be a priority  
    * SB: Does this need to be a text level element?  
    * it should appear wherever text (=input) can appear  
    * It shouldn’t appear between `<div>`s but always be inside `<div>`s  
    * `<div>`s can nest, so the input can also contain \<div\>s  
    * JT [example](https://github.com/TEIC/TEI/issues/2457#issuecomment-1898968294):  Discussion of where `@select` should go:  
      *  Should it go in `<list>` or in `<value>`? (Important distinction: The `<value>` element represents the user’s response whereas the `<list>` is the pre-prepared form to prompt the user to answer).  
      * Should we have `<label>` for input?  
    * `<label> label</label>`  
      `<input labelledBy=”teidata.pointer+”>`

            `(space | metamark | list | somethingElse)?`   
            `<value choose=”teidata.pointer+”>`

                 `(macro.phraseSeq)*`

            `</value>`  
      `</input>`

    * “Input” could be in model.abLike  
    * **Action on JT:**  to create a model proposal for `<input>` and `<value>` and put it in core for now  
      * If not `<input>`, consider `<interaction>`? But [`<interaction>`](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-interaction.html) is already defined--would need to be changed a lot to work here.  
      * `<metamark>` (you'd need to include the transcription module to work with this. Without it, you get `<space>` with `@rend`		   
      * `<list>` will need new types, e.g. “`chooseOne`”, “`chooseMany`” \-- but open Q as to whether it will be defined formally on list as a suggested value or should just be noted in prose etc.


* **Semantic versioning: can we finish it?**  
  * Issue [\#1993](https://github.com/TEIC/TEI/issues/1993) see [Council Meeting notes 2024-08-13](https://docs.google.com/document/d/1mJJV4roBI1mOZmm6W50O_rtG7plnJ-XExSxdI0AI1jM/edit)  
  * see also the sydb\_1993\_version\_numbers branch (no PR yet, not finished [PR \#2599](https://github.com/TEIC/TEI/pull/2599))   
  * Answer: No, b/c branch needs to be finished--and then we'll review it.

* **Atop tickets** (see [https://github.com/TEIC/TEI/labels/atop](https://github.com/TEIC/TEI/labels/atop) )  
  * **Already discussed on 2024-10-07:** Issue [\#2369](https://github.com/TEIC/TEI/issues/2369): Deprecation of classSpec/@generate and classRef/@expand with alternative solutions. RV had started work on this, but after some comments that suggest new schema changes, it needs to be discussed again by the group.  
  * Issue [\#2533](https://github.com/TEIC/TEI/issues/2533): ODD allows an attList with @org="choice" with @mode="delete" attributes: Last comment in March VF2F calls for more discussion of next steps.  
    * RV: `@org` specified whether only one or all the atts in the list are available.   
      * Martin's point is that mode="delete" doesn't make sense  
      * RV: you apply the mode="delete" first, and then you add the `@org` to describe what should happen with the remaining attributes. They should not be in conflict.  
      * SB: Thinks of a counterexample: what if it has a parent of mode="change"...?   
      * JT: mode="change" is difficult to process.   
    * RV and SB think we shouldn't do what Martin asks on this ticket. Will talk more about this later.   
    * We need to think also about mode on the parent element  
    * **Action on RV:** to close the ticket, (since it is not an issue in itself but it does point to a larger issue that we will be addressing in the future).  
      
# Ticket Triage: for small group discussion 

\[These are "regular" tickets, old and new, that we can discuss in small groups and then reconvene for full Council discussion later on

**Triage Groups**  
A: TOC, HC, MS

B: RV, JT, TR

C: SB, SS, EBB

D: **TEI Lite2:** MT, GR, HBS

| Ticket number | Council Group | Ticket title | Discussion notes |
| :---- | :---- | :---- | :---- |
| [\#2345](https://github.com/TEIC/TEI/issues/2345) | C | MS SIG request (2022): msIdentifier should be changed to allow only an idno or msName | Agree with JC: we should remove the schematron constraint so that it's possible to have just an `<idno>`. The prose explanation of `<msIdentifier>` should be much clearer to indicate that an `<msIdentifier>` should have sufficient information for a scholar to locate the manuscript.  If we apply the requested change, it will invalidate the need for [\#2258](https://github.com/TEIC/TEI/issues/2258) (we can close that one if we proceed). Council discussion: Since MS SIG presented this, it seems reasonable (also considering we're in the age of OrcIDs etc. |
| [\#2084](https://github.com/TEIC/TEI/issues/2084) and [\#2086](https://github.com/TEIC/TEI/issues/2086) | A | TEI XPointer Schemes / SATS and Uber ticket for SATS  | HC: I contend these are done. |
| [\#2119](https://github.com/TEIC/TEI/issues/2119) | B | teidata.interval problems \[Discussed in Guelph, did not return to it in Paderborn. See Sabine's summary comment\] | Subgroup thinks we should move to xsd:duration (constraining the number to be positive) and deprecate old values (-1, regular, irregular, unknown). **Action on RV** (hence set to Pending) to write to TEI-L about removing @unit and just using @interval as xsd:duration Will require writing to TEI-L and if no major objections, setting a long deprecation period. Consider changing the explanation in the Guidelines even before the depreciation period.  |
| [\#2436](https://github.com/TEIC/TEI/issues/2436) | C | standOff should be allowed to contain xenoData | Already closed |
| [\#2332](https://github.com/TEIC/TEI/issues/2332) | A | How are we to refer to an \<egXML\>? (Or \<figure\> or \<table\>?) | TOC: EBB has recently added guidance to TCW 24 that resolves this issue. Council subgroup agrees with using `<ref>` and `<ptr>` to point to examples. Ticket closed. |
| [\#2341](https://github.com/TEIC/TEI/issues/2341) | B | New \<entity\> and \<listEntity\> elements are needed  | Subgroup likes the idea of `<entity>` and `<listEntity>` and we think there are other positive comments towards that. Is it time to have someone start working towards a proposal? We also think `<listEntity>` should contain other entity tags (person, etc). Remaining questions include: How is it modeled? (E.g. should it be such that more specific entities (person, event, etc.) could be mapped backwards.)   Suggestion for `<bioName>` on ticket: subgroup disagrees because it looks like they’re trying to replicate a use case for `<taxonomy>` with `<name type=”...” subtype=”...”>`. **Discussion:** Should we find ways to encode `<entity>` that mirror what we have for `<person>`?  What are the components of an entity? (What you need are events, states, and traits.) Is `<list>` and `<item>` (as in a generic list) what we want rather than `<listEntity>` or do we want/need a new list element? (Added TR to the ticket, to work with HBS and EBB on developing a content model.) **Action on TR, EBB, JT and HBS** to initiate this for upcoming release (+ answer the initial ticket). TOC added Council decision on ticket. **Revisited by Council on 08/10:** Discussion on the categorisation of `<entity>`. We have a [`<relation>`](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-relation.html) element, could that be used instead of `<listEntity>` to hold `<person>`, `<bibl>`, `<org>`, `<object>`? Objective of `<listEntity>` is to convey the complexity of the novel/world etc which challenge conceptual frameworks that underpin categorisation. JT: Important consideration to keep in mind when developing the content model \- is it a union of all entities?  Keep entity simple: (main child elements) idno, entityName (or just name?), state, trait, event, relation, Possibility of `<entity>` requiring location, climate, dimensions etc. Could it contain another list for example? We'll probably have to review the different listography models **Action on TR**: summarize and comment in ticket. JT volunteers to work on ticket. |
| [\#2479](https://github.com/TEIC/TEI/issues/2479)  | C | 3D coordinate system by adding attributes to att.coordinated | Opened Oct 23, but has not been discussed. Subgroup C likes the idea. We possibly need a new attribute class for 3D coordinates. Approach the requestors and ask how they would like to model 3D coordinates, the sequence etc., and we will work with a proposal from them. We need to understand what they need to model 3D space. (JT added to the ticket) **Action on** **SB or EBB** to write on the ticket. \[Completed by EBB\] |
| [\#2350](https://github.com/TEIC/TEI/issues/2350) | A | Guidelines need a 'Cite This' or similar button on every page. | Agreed. Make green. In addition to this, we should open a Stylesheets issue. **Discussion:** Create a related Stylesheet ticket to link to this ticket. Should this be handled by the website? (or may have implications for the website as well as epub, pdf, delivery in a declarative manner) JT added a comment to the ticket about his Zotero translator--and he can be in contact with Zotero. (Zotero button generates a citation from a TEI Guidelines page.) |
| [\#2355](https://github.com/TEIC/TEI/issues/2355) | B | teidata.numeric values (requests a comma separator for decimal datatype) | Subgroup thinks we should not allow comma in the datatype. The datatype is meant to render the value in a standardized form and float values in most programming languages are represented with dots. The rendering is typically handled by localization. If the goal is to capture how a number is written on the source, that can be handled as a text node. For example `<num value="10.10" xml:lang="it">10,10</num>` has all the information needed to record the source and provide localization. We don’t think it's a good idea to add bloat with a less predictable datatype and an additional attribute needed to interpret it. XSLT provides easy number formatting functions for example that always only accepts floating numbers in dot notation. SB: I agree with subgroup B, but do want to point out that implementing this is not as bad as the original poster says (and subgroup B implies by agreeing). There would be no need for an attribute to differentiate which occurrences of teidata.numeric use comma vs dot as the decimal separator. Because xsd:decimal *always* uses the dot as the decimal separator, and neither xsd:decimal nor the regular expression that allows for fractions uses a comma, one need only examine the value: if it has a comma, it uses comma as the separator; if it has a dot, it uses dot as the separator; if it has both, it is in error; if it has `>` 1 of either it is in error; if it has neither you don’t know, but don’t care. **Council discussion:** The declaration of teidata.numeric which can be double, decimal, or a pattern.  `teidata.numeric =    xsd:double | token { pattern = "(\-?[\d]+/\-?[\d]+)" } | xsd:decimal` Caution: For an attribute value it should always be a number to ensure processing. To implement this would be a step in the wrong direction.  This is not about rendering the number; to represent the original, one could put a `@rend` on the number (though we think that’s unnecessary and would probably be best handled by transcribing the source in the text node). EBB: left comment on ticket (eventually to close at a later date) |
| [\#2361](https://github.com/TEIC/TEI/issues/2361) | C | drop the last sentence ("recommendation on atomic values") of 18.5 | Subgroup ultimately agrees with Piotr's recommendation, that the simplest solution is to remove the statement, because the original restriction/caution does not matter now. **Discussion:** Updated to Status Go. Council agrees to implement this ticket. |
| [\#2358](https://github.com/TEIC/TEI/issues/2358) | A | definitions in the text: markup and handling | HC: `<gloss>` doesn’t have `@ref` but it does have `@target`. Subgroup determines that Council needs to decide on a set approach for consistency first and then implement it to resolve this issue.  **Discussion:** We should identify all the different ways in which terms are marked (`<soCalled>`, etc) or pseudo-marked ("...") throughout the Guidelines. MS and SS are making a list of elements being currently used to markup definitions and terms.  Issue is determining the correct approach to apply consistently. Do we use `<term>` and `<gloss>.`   Potential complications:  What happens when we use the same term in different contexts where contradictory glosses arise from the same terms being used in different chapters.  Also what happens when the glosses and terms are taken away from the necessary context required to understand them (taken out of the chapter and displayed as an independent glossary as the OP requested). Review the use of `<term>` and how we are using it currently. `<name>` is also being used. Lots of `<ident>`s also. In the end, a termography will be desirable. Might not be worth glossing but it is certainly useful to review how we have encoded terms. It is an editorial question rather than an encoding question. **Action:** Review our usage and add guidance on TCW [24](https://tei-c.org/documentation/tcw24/) and [20](https://tei-c.org/documentation/tcw20/) on marking up terms and definitions consistently. MS opened ticket [\#2602](https://github.com/TEIC/TEI/issues/2602) on outdated phrasing of (last paragraph of) the note in [term](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-term.html). |
| [\#2367](https://github.com/TEIC/TEI/issues/2367) | B | "typographic" (lb) vs. "topographic" (line) | Subgroup thinks that “topographical” is intentional and adequate in the context of `<sourceDoc>` and `<facsimile>`. We agree that “typographical” for `<lb>` should be changed (because it seems too limited to print-related terminology). We think `<lb>` is ‘dimensionless’ and marks the semantic beginning of a new line (which may or may not be expressed topographically). Maybe we need to discuss with the group what *is* a LINE BEGINNING in a non-topographical way. The act of beginning writing after a constraint such as physical space running out, or a conscious decision of starting something new while continuing the text in a different location without beginning something conceptually different such as a `<paragraph>` or `<ab>`. Food for thought: [https://gams.uni-graz.at/o:tei2019.180/sdef:TEI/get?context=context:tei2019.papers](https://gams.uni-graz.at/o:tei2019.180/sdef:TEI/get?context=context:tei2019.papers)  **Discussion:** [\<line\>](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-line.html) element to mark where it is physically lined up (the positioning on the page). Simply add "or written" to the definition of the [\<lb\>](https://tei-c.org/release/doc/tei-p5-doc/en/html/ref-lb.html) : "typographical or written". Drop the parentheses and add “a new typographic or written line”. Drop the parenthesis and the term typographic already. Need to gloss the term topographic to clarify our meaning (the physical layout on the page). Topographic should be reserved for those using the `<surface>` or `<zone>` approach.  **Action on TOC:** Rephrase the desc of `<lb>` (thanks to Gerrit): "Marks the beginning of a ~~new~~ t**o**pographic line" Need to update the outdated prose in the third line of note and the example in `<lb>` "This element is intended to be used for marking actual line breaks": change to "This element is intended to be used for marking the line beginning" JT found 14 instances of “line breaks” throughout the Guidelines after (Find search, have not searched Specs yet) **MS opened ticket [\#2603](https://github.com/TEIC/TEI/issues/2603) to update `<pb>`;, `<cb>`, `<gb>` and \<lb\>** and assigned TOC and TR. **Action on TOC** to rewrite the note for \<line\> for extra clarification, since the note specifically states to *not* use `<line>` for encoding a poem yet the first example provided is of a poem being encoded using `<line>` (and it uses the term ‘linebreaks’). |
| [\#2363](https://github.com/TEIC/TEI/issues/2363) | C | consistency of facsimile-model (vs sourceDoc) | [\#2360](https://github.com/TEIC/TEI/pull/2360) prevents textual content inside a line or zone.  `<formula>` and `<media>` is inappropriate within `<facsimile>`; maybe also `<front>` and `<back>` is also irritating, but we should do some investigation of the history of why we permitted `<front>` and `<back>` . Why are `<ellipsis>` or `<writing>` allowed in this content model? The use of `model.global` here is suspect.  **Discussion: Action on SB and GR:** Look at `model.global` and its subclasses in order to help us with this problem of being overly permissive.  No need to deprecate the change if the guidelines clearly explained we shouldn't include transcriptional material. EBB has updated the ticket so it is about this work to review or revise `model.global`. `<front>` and `<back>` appear to have been present from the original content modeling of `<facismile>`, so we should not remove them. Consider a possibility of different element names for inside `<facsimile>` if we can't prevent transciptional elements from showing up here. |
| [\#2369](https://github.com/TEIC/TEI/issues/2369) | A | Need to clarify the relationship between classSpec/@generate and classRef/@expand | Per discussion in full Council on 2024-10-6, RV, JT, and SB will work on sorting this out as part of the `<interleave>` implementation. Suggest making green and letting them get on with it. |
| [\#2469](https://github.com/TEIC/TEI/issues/2469) | B | samplingDecl gloss seems too partial to corpora \[inspired by a TEIMEC 2023 paper\] | This was fixed a while back, but we forgot to close the ticket. We closed it. |
| [\#2463](https://github.com/TEIC/TEI/issues/2463) | C | classes/memberOf should be ordered (att.global first, then alphabetical) | SB is commenting on the ticket: Okay for JT to proceed, but we'll need a Schematron rule. |
| [\#2462](https://github.com/TEIC/TEI/issues/2462) | A | Role taxonomies, better examples for respStmt | Subgroup A decides that this is Status Go, but that we need to make it clear that different systems can be used because the examples provided use the CRediT taxonomy and MARC relator, there should be a note to resolve this prefix definition elsewhere in the document. |
| [\#2374](https://github.com/TEIC/TEI/issues/2374) | B | make model.listLike available in front | Subgroups agrees that if it’s in `<back>`, it should be in `<front>` too. RV thinks it should not be in back either and that was a mistake (except `<list>` and `<table>`).  |
| [\#2373](https://github.com/TEIC/TEI/issues/2373) | B | reconsider model.listLike | Subgroup wonder if model.listLike may be split into lists that are textually list-like (e.g. listBibl, list, table as a stretch). And things that are grouping of entities so more listEntityLike. More like database tables (listPerson, listPlace, and potentially listEntity). listBibl potentially belongs to both. (see also the minutes on [\#2341](https://github.com/TEIC/TEI/issues/2341)). |
| [\#2460](https://github.com/TEIC/TEI/issues/2460) | C | Allowing \<address\> inside \<div\> | Subgroup likes permitting `<address>` inside `<div>` under certain controlled circumstances. But there may be problems with how to add it to `<div>`if we choose to do so with model.common. We can try adding model.common to model.frontPart (which is used by `<back>` and `<front>`). |
| [\#2459](https://github.com/TEIC/TEI/issues/2459) | C | \<address\> should become member of att.typed | Subgroup: Of course it should\! |
| [\#2451](https://github.com/TEIC/TEI/issues/2451) | A | place and org should claim membership of att.datable | Subgroup A agrees to give James Cummings the green light to implement. |
| [\#2357](https://github.com/TEIC/TEI/issues/2357) | A | Schematron to avoid contradictory use of @require and @except | This is already green. |
| [\#2140](https://github.com/TEIC/TEI/issues/2140) | C | Example needed to model attList for delimiting alternative groupings of attributes | (EBB: I need to implement this--related to [\#2378](https://github.com/TEIC/TEI/issues/2378))? |
| [\#2392](https://github.com/TEIC/TEI/issues/2392) | A | Add att.canonical to \<bibl\> | Status pending. Tasks in [comment](https://github.com/TEIC/TEI/issues/2392#issuecomment-1704069237) still need to be completed. It is not clear to Subgroup A why Ch3.12 needs to be moved earlier.  |
| [\#2376](https://github.com/TEIC/TEI/issues/2376) | A | Add a charters module | Subgroup A suggests requesting a short proposal with descriptions of related elements and accompanying examples so that we can understand exactly what is wanted, shorter more concise descriptions of related elements rather than lengthy descriptions for each element (like how we define/describe an element in the TEI) |
| [\#2425](https://github.com/TEIC/TEI/issues/2425) | A | Example of \<desc\> (as a child of non-documentation elements) is unclear | Subgroup A decides to review and rewrite the definition of `<desc>` and to review the examples to ensure that `<desc>` is being used consistently. |
| [\#2434](https://github.com/TEIC/TEI/issues/2434) | A | rephrasing of gloss and description of \<msName\> | Subgroup A agrees with James Cummings’ proposed rewriting of the description and SB’s comment about gloss. Updated status to “Go” to correct the gloss of `<msName>` according to SB’s guidance and to use JC’s updated description. |
| [\#2438](https://github.com/TEIC/TEI/issues/2438) | A | Do lit review and update examples in 20.5, non-XML-based approaches | Subgroup agrees the chapter is stale and could use a revisit. Can a group be tasked to work on it? That should be a new issue\!  |
| [\#2601](https://github.com/TEIC/TEI/issues/2601) | C | Ruby: additional features?  | Subgroup: The encoder should try nested ruby structures for the multiple translations.   |


