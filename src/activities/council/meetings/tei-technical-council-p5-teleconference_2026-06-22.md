---
title:  "TEI Technical Council P5 Teleconference, 2026-06-22"
date: 2026-06-22
---
# TEI Technical Council P5 Teleconference, 2026-06-22

09:00 PDT | 12:00 EDT | 17:00 BST | 18:00 CEST

#### Present:

* Syd Bauman (SB)  
* Elisa Beshero-Bondar (EBB, Chair)  
* Ulrike Henny-Krahmer (UHK)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)  
* Martina Scholger (MS)  
* Joey Takeda (JT)  
* Raff Viglianti (RV)   
* Torsten Roeder (TR)

#### Apologies:

* Helena Bermúdez Sabel (HBS)   
* Elli Bleeker (EB)

#### Next meetings  
  * P6 meeting in two days: Wed 24 Jun 26 (P6 meeting): 10:00 PDT | 13:00 EDT | 18:00 BST | 19:00 CEST  
  * Calendar polling discussion for the two upcoming meetings in July.
 
#### Infrastructure   

 * Huma-Num migration last week  
      * TEIC was (inappropriately?) caught by surprise when, on Wed 17 Jun 26, sites went down.  
    * Huma-Num had sent notifications a month or so ago, but communications never reached the right people.  
 * Infrastructure Group chaired by MS (thank you\!) 🪑  
    * Planning to hold regular quarterly meetings   
    * Next meeting Fri 17 Jul 26 @ 08:30 PDT, 11:30 EDT, 16:30 BST, 17:30 pm CEST  
    * This meeting was scheduled before our upcoming release on purpose so that details can be hammered out and TCW 22 updated, etc.  
    * Peter Stadler now looking after [tei-c.org](http://tei-c.org) and interactions w/ Huma-Num  
        * Council extends a heartfelt “thank you” to Peter! 
  * MS reports that per Peter Stadler, not a lot will be different for release process  
    * Questions to be resolved in this next month:   
      * How will migrations & server changes affect our Guidelines Release process?  
      * How will our process of updating the [https://tei-c.org](http://tei-c.org) website change?

#### July Release 
* Scheduled for  2026-07-28 (Tuesday).
* **Action on release techs**: Immediately following the release, review changes needed for TCW 22.  
* Release techs: MH, MS, EBB  
* Refridge dates (changes to prose only; any change to schema or code can only be merged into dev or a release branch by a release tech): Wed 22 Jul – Sat 25 Jul 26, inclusive  
* Freeze (only release tech can merge anything to dev or a release branch): Sun 26 Jul 26 until release

#### TEI Conference / F2F Meeting updates  
  * Tentative schedule : [https://tei2026.tei-c.org/schedule.html](https://tei2026.tei-c.org/schedule.html)   
  * Discussion / request to move Council's panel ("It's TIme for P6") to a later moment in the conference to make sure we can all attend and are in good shape to present. [Panel was rescheduled later thanks to JT and conference organizers!]
  * Council F2F arrangements / locations at SFU discussed.
      
#### ATOP presentations + discussion:   

##### Attribute override problem — by MH on behalf of ATOP  
 * ODD chaining can accumulate attribute overrides at multiple stages  
 * Attribute class membership is complicated: if an ancestor class is referenced to add attributes, that can override the local class that member is in  
 * Downstream customizations can delete a class. If a root class is deleted, does it delete all the downstream customizations?  
* If an attribute is overridden in a subclass, then overridden again in an element which is a member of that subclass, should the latter customization be applied to the customization in the subclass? Logic says yes, but Stylesheets don't do that; they try to apply it to the original root class definition.   
* Discussion: 
    * RV and EBB agree with the logic of dropping attribute if its root class has been deleted upstream.  
    * RV: Changing should be seen as a state machine – each further change only changes the previous one, there is no jumping to previous state (`@source` may allow to override that)  
    * What's being referenced by pointers should be resolved before integration  
    * RV: Similar to the state-machine principle, whatever is referenced should be fully resolved (i.e. its own chain resolved and compiled) before being applied to the caller’s customization chain.  
           
##### Grouping element auto-deletion and repeatability — by SB on behalf of ATOP  
 * We converged on a consensus that it should actually be fine to have a sequence, and alternate, or an interleave which contains only a single element; if we remove the constraints that disallow that, then we can simply do the arithmetic in the way we normally would, and our intermediate ODD will actually be valid.  
* JT: A single `<elementRef>` child of `<content>` could be understood as having an implicit `<sequence>` of one with minOccurr \= 1 and maxOccur \= 1\.  
* Decision: Change content model of grouping elements (`<alternate>`, `<interleave>`, and `<sequence>`) from `<classRef key="model.contentPart" minOccurs="2" maxOccurs="unbounded"/>` to `<classRef key="model.contentPart" minOccurs="1" maxOccurs="unbounded"/>`. This will have the effect of allowing a singleton child.

#### Updates from Board: community survey & funds outlook  
  * Diane Jakacki is assuming Treasurer responsibilities from Hugh Cayless.  
  * Handover meeting is happening this month. 
  * Board is planning a major fundraising effort in 2026–2027 to support future P6 F2F meetings  
  * Arrange a task force between Board and Council members to work on fundraising / grant writing for P6.

#### Council Homework for the P6 meeting on Wed 06-24
 Each of us will make an abstract model for bibliography in UML, and (if we feel up to it), take to to blueprint expression for encoding a bibliographic record. 


  
