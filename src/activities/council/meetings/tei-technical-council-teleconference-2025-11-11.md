---
title: "TEI Technical Council Teleconference, 2025-11-11"
date: 2025-11-11
---
# TEI Technical Council Teleconference, 2025-11-11

10:00–11:30 PDT | 13:00–14:30 EDT | 18:00–19:30 UTC | 19:00–20:30 CET


#### Present:

* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)  
* Elisa Beshero-Bondar (EBB, Chair)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)   
* Martina Scholger (MS)  
* Joey Takeda (JT)  
* Raff Viglianti (RV) 

#### Apologies:

* Ulrike Henny-Krahmer (UHK)  
* Elli Bleeker (EB)  
* Torsten Roeder (TR)


#### Review/assignment of newly opened tickets on Guidelines and Stylesheets

### Scheduling 
 
#### Next Council and Stylesheets meetings  

* December meeting [updated after poll]: Thurs. 12/18: 7 – 8:30am PST | 10 – 11:30am EST | 3 – 4:30pm UTC | 4 – 5:30pm CET 
* Stylesheets meeting likely to be rescheduled. 
        
#### Spring F2F

* Board wants Council to hold an in-person F2F in Spring 2026  
* When and where shall we hold it?  
   * (From October notes: Check in with James Cummings about potentially meeting in Newcastle for a F2F meeting on P6)  
      * Alternatives?  
      * Timing:   
        * If Canada, not June/not July  
        * Not the US  
        * Graz is a possibility  
        * 2 weeks during Easter might be possible  
        * EBB: March 8-14th suits or sometime in May.  
      * Duration: 2 ½ days or 3.5 days:   
        * RV: consider flying in on M and out on F  
      * \[Update after meeting\]: March 8 \- 14th window works for James Cummings/ most of Coucil, Newcastle location is good for budget. 
      * TR [later] indicates hosting in Würzburg helps with timing around a local conference.

#### Next Release  
* Release team: TR, HBS, TOC  
* Dates to be determined: February 2026?  
    * TOC: Not available on Feb 7th 2026\.

### [\#2780](https://github.com/TEIC/TEI/issues/2780) Discussion: Shall we move Stylesheets into the Guidelines repo?  
  * Perhaps this should be deferred to work on P6, unless we think it will take 5 years to release P6.  
  * We could try it as an experiment as suggested on the ticket  
  * JT: We should consider what our purpose is with the Stylesheets? (And we should think generally about the strategic direction for the TEI and Stylesheets repo)  
    * If it's internal, or meant to support external groups?   
    * RV: can we do both with git? Allow the separation of concerns with some git tricks. Git subtree to embed a one repository with another--coordinates two histories. https://docs.github.com/en/get-started/using-git/about-git-subtree-merges  
  * Would the Stylesheets / Guidelines arrangement for P5 and P6 be different?  
    * Stylesheets could be in a branch within the repository  
    


### Continued preparatory discussion of 2026 \=\> P6   
  * Questions raised in October:   
    * Outline some fundamental points of distinction between P5 and P6? Or areas to investigate in advance of the F2F? Or even as a consequence of the F2F  
      * Will we improve ODD or remove it in favor of RELAX NG modeling?   
      * Elements that should / shouldn't be in the header  
      * JT: We should really clarify our mission, mandate, and vision to help guide technical decisions

    * Consider [TCW 09: Backward Compatibility and the Maintenance of the Text Encoding Initiative Guidelines](https://tei-c.org/documentation/tcw09/)  
      * Do we agree with TCW 09 on when Council should break backwards compatibility in releasing a new version? Do these ideas still hold or would we want to change them in moving to P6?  
    * P6 discussion at conclusion of call (re \#2459): Make a policy that no attribute name will be reused with different definitions in P6 (MH), or, as a competing approach, allow the same attribute to have multiple definitions based on context (SB).  
      * RV: example of `@role` as an attribute with context-dependent definition: Following the current definitions in the guidelines, it means something different to set `@role` on the `<person>` vs. a `<persName>`

```xml
   <persName ref="#MC" role="artist">Mariah</persName>

   <!-- role specifies further information about the entity referenced by this name -->
    <person xml:id="MC" role="artist"><persName>Mariah Carey</persName></person>
  <!-- role specifies a primary role or classification for the person. -->
```

### TEI 2026     
  * **Reminder**: papers / panel proposals on P6 for the 2026 conference in August  
    * Individuals should put forward their ideas for big changes to the TEI.   
    * (from October: JT: Papers proposed for the conference could be incorporated into the TEI conference grant which could cover costs of speakers’ accommodation and flights.)

### Launching the TEI Technical Contributor program   
  * TOC, EB, UHK to meet on the week of 11/17 to complete the draft of the syllabus.  
  * Repository: [https://github.com/TEIC/Mentoring/tree/main](https://github.com/TEIC/Mentoring/tree/main)   
  * [Draft syllabus](https://docs.google.com/document/d/1PlzKfTj7vvfSX1DNRoMxRUUjZKNcWvA86EpwMsFnR4k/edit?tab=t.0) (Very early stage of draft).  
    * Structured like technical content, with step by step guidance.  
    * If P5 goes into maintenance mode, perhaps our Technical Contributors can help with this while we're concentrating on P6.  
    * And they can be involved with testing/sharing P6 too.  
    * Also this resource will be good documentation of practices, infrastructure, etc for P5.  
    * P5 to P6 might be like Python 2 to Python 3 (people will want to keep using P5 while we develop P6.   
    * Look at this group as future Council members. They should be involved in P6. And some on Council can be concentrating on P5.  
    * If we work with pre-recorded content, perhaps we don't have to restrict the invitations. The number of participants we would work with depends on the format of delivery.  
      * RV: Perhaps useful to hold "office hours" to help with the content  
      * Releasing lessons on a timeline, with a sign-up list for people to come talk to us  
    * **Action on TOC, EB & UHK:** Finalise draft syllabus by December meeting.

### Reminders (see Kraków \+ October meeting notes)  
  * Action on EB & TOC to revise TCW 20  
    * EB & TOC will also be working on locating/recovering the rest of the TCWs. See [Documentation \#27](https://github.com/TEIC/Documentation/issues/27).  
  * Critical Apparatus Chapter revision  
  * Guidelines failing accessibility tests  
  * Peter Boot's collection of Processing Model tickets  
      
### EB: Summary of survey result on **TEI By Example**:   
  * We’ve collected 61 responses, the majority of respondents identified as (post-doc) researcher and knew TBE well  
    * using it occasionally (2-3 times a year) for both teaching and learning,   
      * primarily referencing specific topics and/or tutorials (over working through the resource sequentially) and browsing the examples.  
    * The majority of respondents also stated that TBE should definitely be maintained but required updates and extensions (more for beginners as well as for advanced users), allowing for community contributions.   
    * As other learning resources, almost all respondents suggested the Guidelines and the TEI-L, which serve as complementary resources to TBE. There were a lot of useful suggestions for improvements, which EB will elaborate upon in a more detailed survey report.

* [\#2828](https://github.com/TEIC/TEI/issues/2828%20): `@type` attribute on `<stage>` allows zero values.   
  * Merged [PR \#2829](https://github.com/TEIC/TEI/pull/2829) and closed during this meeting.  
  
### Tickets from Krakow pending Council discussion  
  * [\#2459](https://github.com/TEIC/TEI/issues/2459): `<address>` should become a member of att.typed  
    * From Krakow F2F discussion:  
      * `<address>` should gain @role, @key, & @ref, but not @nymRef   
      * Are there any objections or does Council agree to make this a Status Go?  
      * TR: What is the problem with `@nymRef`?  
        * SB: I suspect the objection is that since the content of \<address\> is not (or at least almost never) a proper noun, having an attribute that allows you to assert which proper noun is the canonical proper noun for talking about the thing encoded is kind of weird. Not sure it is weird enough that we should not just add `<address>`  
    * Council decision (recorded on ticket)  
      * Implement this by  
        * adding address to att.typed  
        * adding @role distinctly  
        * adding address to att.canonical


    

