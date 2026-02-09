---
title: "TEI Technical Council Teleconference, 2025-12-18"
date: 2025-12-18
---
# TEI Technical Council Teleconference, 2025-12-18

07:00 – 08:30 PST | 10:00 – 11:30 EST | **15:00 – 16:30 UTC** | 16:00 – 17:30 CET

#### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)  
* Elisa Beshero-Bondar (EBB, Chair)  
* Elli Bleeker (EB)  
* Ulrike Henny-Krahmer (UHK)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)   
* Martina Scholger (MS)  
* Joey Takeda (JT)

#### Apologies:

* Raff Viglianti (RV)  
* Torsten Roeder (TR)


#### Review/assignment of newly opened tickets on Guidelines and Stylesheets

   * Re: [Stylesheets \#786](https://github.com/TEIC/Stylesheets/issues/786) — While this is *not* an ATOP issue, it is the sort of thing ATOP needs to be thinking about. Thus if there is no objection I will put this on the agenda for an ATOP meeting in either late Jan or early Feb for me, MH, & HBS to consider. Others welcome to join, of course. — SB

#### 🪑 Council 2026
  * EBB re-elected by consensus for another one-year term as Chair.   

#### Scheduling  next Council and Stylesheets meetings
  * Action on ALL by 2026-01-05: fill out poll for the New Year.
  * No Stylesheets meeting for December.

#### Spring F2F

 * Location: Würzburg during week of Sun 08 Mar – Sat 14 Mar 26  
 * Slack poll indicates: 
       * Sun 08 – Wed 11 is out of the running  
      * Mon 09 – Thu 12 is preferred by TS  
      * Tue 10 – Fri 13 is preferred by EB, HBS, UHK, & MS  
      * No one else has skin in the game; all have voted  
      * **Council decision: Tue 10 – Fri 13**. Action on EBB by 2026-01-01: announce to council-board list

#### Next Release  
 * Release team: TR, HBS, TOC  
  * Dates to be determined: February 2026?
      * TOC: Not available on Sat 07 Feb 2026\.  
      * Another possibility: after the F2F meeting in March 2026?  
      * We should schedule release after the infrastructure issues get resolved (which involve consolidating everything into one docker container).  
          
#### JT: [TEI 2026 Conference](%20https://tei2026.tei-c.org) update  
  * The CFP will be coming soon\!   
  * Registration on ConfTool is now ready.  
  * Need to determine when & where to schedule Council F2F.   
    * We need to have someone from UBC involved since JT is not there.  
    * Another option is to hold the F2F at JT’s Simon Fraser U. in downtown Vancouver instead. Check the transit times between the universities  
  * Dates: **Mon 10 Aug – Fri 14 Aug 26**.   
  * JT will hear back about conference grant at the end of January 2026\.  
  * Perhaps we will host an information session about the conference on the January Community Call.

#### TEI Technical Contributor Program update (EB & TOC)  
  * [Syllabus](https://docs.google.com/document/d/1PlzKfTj7vvfSX1DNRoMxRUUjZKNcWvA86EpwMsFnR4k/edit?tab=t.0#heading=h.g4l0rpy0h6fv)  
  * [Guide](https://docs.google.com/document/d/10xON1yWYZC6zP79Eik0k-izzN5FAleBUDvwrEFhT0OA/edit?tab=t.0#heading=h.4d34og8)   
  * **Action on Everyone by 2026-01-07**: Read the syllabus, and provide comments:  
    * Any topics that are not covered?  
    * Any topics that need to be covered in greater detail (specifically [Customisation](https://docs.google.com/document/d/1PlzKfTj7vvfSX1DNRoMxRUUjZKNcWvA86EpwMsFnR4k/edit?tab=t.0#heading=h.c7ynjcswsetc) & [Testing](https://docs.google.com/document/d/1PlzKfTj7vvfSX1DNRoMxRUUjZKNcWvA86EpwMsFnR4k/edit?tab=t.0#heading=h.i2lpugkpo22s) – if anyone is more comfortable with breaking down these topics please feel free to expand those lesson outlines)  
    * Any online resources, tutorials, or slides that you’d like to include for specific topics?

#### TBE survey 
* [results](https://docs.google.com/document/d/1FAjcqU0z-SHLQJpUINSmwlF0lU5Hhh23PQ3La3nBxB8/edit?usp=sharing) (EB)

#### [**ATOP tickets**](https://github.com/TEIC/TEI/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Status%3A%20Needs%20Discussion%22%20label%3Aatop)  
  * [\#2840](https://github.com/TEIC/TEI/issues/2840): When `@module` attribute is missing, what should a processor do?  
    * Our plan is to discuss this in January.  
    * **Action on Everyone by 202-01-07**: Review this ticket.

  * [\#2826](https://github.com/TEIC/TEI/issues/2826): There should only be one `<remarks>` element per language and  
    [\#2729](https://github.com/TEIC/TEI/issues/2729): ODD processing for glosses and descs  
    * JT \+ Council discussion: we are concerned about what happens if a customizer wants to include a `<remark>` with `@mode="add"`in addition to remarks brought in from the same language from the Guidelines. Perhaps not a problem because it's not clear how to distinguish them.  
    * For the situation in which we are writing ODDs, should we set this same constraint that we put on the Guidelines? 

      
  * [\#2591](https://github.com/TEIC/TEI/issues/2591): `<schemaSpec>/@source` needs a `"tei:none"` value and should be mandatory

    * It would be better, more sustainable practice for ODD customizers to specify the value of `@source` on `<schemaSpec>`.  
    * The change would need to involve a deprecation period.  
    * Should there be a default value? SB, MH, HBS \+ general agreement: this is **not** a good idea because there should not be a hidden default setting on a mandatory attribute.   
    * HBS: No Stylesheets change needed, just the TEI.  
    * Reminder: need to update oXygen templates and various Exemplars, too. (Since they would generate warning messages, we are unlikely to forget, but just in case …)  
    * JT: We need to make sure this is well documented and deprecated so people are well aware of the change.   
    * Supplying `@type` on `<schemaSpec>` is an interesting alternative, but perhaps not until P6.

#### Other tickets discussed
  * [\#1604](https://github.com/TEIC/TEI/issues/1604): `@source` on schemaSpec should be only a single pointer  
    * Solve the problem as we’ve agreed already for just `<schemaSpec>`: No multiple values for `@source` on `<schemaSpec>`.  
    * HBS: Let's open a new ticket for Syd's table re `@source` on other elements

* [\#2595](https://github.com/TEIC/TEI/issues/2595) Grouping `org`, `person`, `personGrp`, `persona` for `@role` in att.class   
  * From our discussion of `@role` in November Council Call:   
    * P6 discussion at conclusion of call (re \#2459): Make a policy that no attribute name will be reused with different definitions in P6 (MH), or, as a competing approach, allow the same attribute to have multiple definitions based on context (SB).  
      * RV: example:  
        \<persName ref="\#MC" role="artist"\>Mariah\</persName\>  
        \<\!-- role specifies further information about the entity referenced by this name \--\>  
        \<person xml:id="MC" role="artist"\>\<persName\>Mariah Carey\</persName\>\</person\>  
        \<\!-- role specifies a primary role or classification for the person. \--\>  
    * EBB added new variation on that example with a question at the end of the [\#2595 ticket](https://github.com/TEIC/TEI/issues/2595#issuecomment-3667899455).   
    * Should all uses of `@role` on entities and names be grouped in [att.naming](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.naming.html)? 


  

    

