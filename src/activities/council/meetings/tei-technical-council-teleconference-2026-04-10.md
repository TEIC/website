---
title:  "TEI Technical Council Teleconference, 2026-04-10"
date: 2026-04-10
---
# TEI Technical Council Teleconference, 2026-04-10

6:30 – 8am PDT |  9:30 \- 11am EDT  | 2:30 – 4pm BST | 3:30 – 5pm CEST

#### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Elli Bleeker (EB)  
* Ulrike Henny-Krahmer (UHK)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)  
* Torsten Roeder (TR  
* Martina Scholger (MS) )  
* Joey Takeda (JT)  
* Raff Viglianti (RV) 

#### Next meetings  
Council agrees to plan alternating P5 and P6 meetings.  
  * May and onward: Proceed with those that can make the P6 meeting. Action on TR to organize the next meeting poll.   
  * Move forward with the proposed P6 meeting on April 24th.

#### April TEI Community Call (RV and JT)  
  * Potential topic for May Community Call
  	* Discuss object-related approaches to TEI  
    	* 4 or 5 people could host a mini panel on this  
    	* Looking for computer scientists and programmers  
    	* This could help us develop P6  
  * Next Community Call is scheduled on April 21st on the new AI Tools for TEI SIG.  
  * Suggestions: 
       * discuss TEI publications during calls when there is no set topic
       * discuss TEI editing environments (alternatives to oXygen).  
      
#### TEI Conference 2026 (JT):  
  * Conference dates: 2026-08-10 (M) – 2026-08-14 (F) 
  * Dates for the TEI Council meeting  
      * Council consensus: Hold the F2F on Saturday, Sunday, half-day Monday *after* the conference**: August 15, 16, and half-day on 17.   
    * Hotel bookings: blocks available, preference for booking Council as a group together.  
  * Conference submission review:  
    * Deadline for reviewing submissions is Friday, 17 April.
  * Action on EBB re SIG convening, inc. new AI Tools for TEI SIG  
      
#### P5 to P6 
  * What kinds of continued work on P5 will we do now?  
    * Is "maintenance mode" the correct term?  
          * MH: Not yet. Might take us 10 years. We have a community of users that depend on P5 and we cannot leave them in the lurch.  
         * RV: But the work of our F2F can't be for nothing. "Maintenance mode" gives us a chance to decide which tickets require immediate attention and which makes sense to defer. Let's not dampen our momentum.  
      * TR: The phrasing "maintenance mode" may be too strong: seems to imply that P5 will go away very soon.  
        * What term is best to use?  
        * Or don't label it, and just continue?  
        * General agreement that the term  "maintenance mode" does not apply until we are ready to release P6.  
      * JT: We should come up with an internal timeline first of what active development we're doing.  
      * TR: Community announcement will have to be that we're working on P6, and also P5--but we'll have to explain what the work on P5 now involves.  
      * RV: Reminder that we did announce work on P6 in Krakow, and things have been quiet. We will also be talking about our P6 work in Vancouver.  
      * EB: Can we do meaningful work on P6 while working on P5? Like for example the Critical Apparatus:   
           * What we improve in P5 should be accounted for in P6.  
            * If we put too much work into P5, is it more difficult to develop and migrate to P6?  
            * Or can we do work on P5 that helps align with priorities for P6 and not significantly complicate migration to P6. For example: working on the critical apparatus module requires making some significant changes, and we can use this as a starting point for thinking about what the CA *should* do, even implementing it should wait til P6.  
        * Keep in mind future P6 alignment.  EB suggests: "Consolidation mode"?   
        	* Council would have several parallel tracks in active progress: 
             1. P5 consolidation mode; 
             1. P5 module work with P6 alignment in mind (like work on the CA); 
             1. P6 preparations like the abstract model, formal specification, etc.  
      * JT: (1) Establish conceptually what P6 is and (2) Determine the criteria for what is meaningful for P6.  
     * Council should start applying a label marking tickets for P5 \-\> P6. 
         * We already have a label for "Reconsider for P6".
         * Perhaps another label for "P5 only"?
 
 #### P5 tickets
  * Which P5 tickets are most important to resolve and how do we evaluate their importance?  
  * Examples of open tickets requested by the community:  
    * [\#2451](https://github.com/TEIC/TEI/issues/2451)**:** `<place>` and `<org>` should be members of att.datable  
      * Comments from Kraków F2F:   
        * Are there any objections or does Council agree to make this a Status Go?  
        * SB: I have no objection to making \<place\>, \<org\>, and even \<person\> members of att.datable, but (IMHO) the use of these attributes needs to be at least explained if not exemplified in the prose of ND.  
      * MH: One comprehensive example might cover this: An \<org\> lasting from date X to date Y, which has a \<listPerson\> of directors, each of which goes from one date to another date, as well as a \<listPlace\> for its headquarters, again with each \<place\> having @from and @to.   
      * Council decides status GO and **Action on TOC** to resolve.  

    * [\#2816](https://github.com/TEIC/TEI/issues/2816): Modify points attribute to allow third coordinate in teidata.point  
      * See [PR2821](https://github.com/TEIC/TEI/pull/2821) and the discussion  
      * MH suggests a teidata.json datatype  
        * There's good XML support for JSON in XSLT  
        * Is it a punt to p6   
        * Adding the 3rd coordinate might be simpler for now  
      * We can at least complete the 3rd attribute portion and think toward P6 for something more complex.  
      * Needs examples, possibly from the OP's project/paper  
      * Should have an example of points with 2D and points with 3D.  
      * **Action on TOC**  ask OP if adding additional points is sufficient or should additional attributes should be included in the PR. **MH** added to the ticket to review OP’s jTEI paper.

    * [\#2827](https://github.com/TEIC/TEI/issues/2827): \<event\> should allow child \<listOrg\>.  
      * Attendees at Nov 25 community call agree this is a good idea.   
      * However, it appears that list-like elements were cherry picked when the content model for `event` was created. Check notes from councils past to figure out if there was a reason for excluding `listOrg`?  
      * TOC: Checked Council notes and found no reason for excluding `listOrg` from `event`.  
      * **Action on TOC** to implement this change.  
    * [\#2213](https://github.com/TEIC/TEI/issues/2213): Dating point is underdocumented  
      * Remove `@datingPoint` (as per comments MT and Hugh Cayless)?  
      * Have example using a calendar with an epoch, like an accession date, with a regnal date pointing to that calendar?  
      * JT has a real life example coming up that justifies datingPoint  
      * Can we only use custom attributes with datingPoint?  
      * Consensus was to keep it and for JT to provide examples.  
      
#### Newly opened tickets  
  * [unclaimed Guidelines issues](https://github.com/TEIC/TEI/issues?q=is%3Aissue%20state%3Aopen%20no%3Aassignee)  
  * [unclaimed Stylesheets issues opened in past year](https://github.com/TEIC/Stylesheets/issues?q=is%3Aissue%20state%3Aopen%20no%3Aassignee%20created%3A%3E%40today-1y)

#### Pull requests ready for merging?  
  * [\#2831](https://github.com/TEIC/TEI/pull/2831): Fix for issue \#2830: make `q` a member of `att.typed`  
    * Merged during meeting