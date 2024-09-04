---
layout: page.njk
title: "Digital Library Federation TEI Workgroup 2006-02 Meeting Minutes"
creator: Barrie L. Howard
---
# Digital Library Federation TEI Workgroup 2006-02 Meeting Minutes





This is not the canonical version of the minutes from this
 meeting. This is a copy of the (current version) of the DLF
 minutes, tranformed to XML and posted here for the benefit
 of the TEI\-C, with many thanks to the DLF.






 make it clear to the TEI Consortium that we are an
 active group
 

 review the guidelines, and plan a progression
 

 consider adding MODS\- or OAI\-centric
 enhancements
 

 review how the TEI in Libraries Guidelines for Best
 Encoding Practices map to the DLF/NSDL OAI Best
 Practices
 

 identify which version of the Guidelines we are
 currently working on
 

 define the purpose of the TEI in Libraries Working
 Group
 

 provide links to previous versions of the Guidelines
 from the DLF Web site as both XHTML and TEI files
 

 explore the possibility of constructing
 METS\-to\-TEI\-Level\-1 transformations
 




day one: 
 2006\-02\-13

 Introduction
 
 Add a general descriptive paragraph at the beginning
 (look at the IMLS grant proposal, available from <http://www.letrs.indiana.edu/t/tei/>.


Compose one paragraph for each instantiation of the
 DLF\-sponsored working group.


For the latest instantiation, include:
 


* Matthew Gibson, Virginia Foundation for the Humanities
* Merrilee Proffitt, RLG
* Natasha Smith, University of North Carolina at Chapel Hill
* Perry Willett, The University of Michigan
* Chris Powell, The University of Michigan
* Syd Bauman, The TEI Consortium (don’t include in 2003 group list)
* David Seaman, Digital Library Federation
* Kirk Hastings, California Digital Library (absent from this meeting)


2nd paragraph, bullets—remove period after first bullet.




 Background
 
 1st paragraph, 1st sentence—change “TEIxLITE” to lower
 case. Point to previous versions of Guidelines, e.g.,
 [http://www.indiana.edu/\~letrs /tei/draft.html](http://www.indiana.edu/~letrs/tei/draft.html).




 General Recommendations
 
 The amount of time editors spend on numbered divs is not
 trivial. However, the recommendation is to keep numbered
 divs.


Chris Powell has a stylesheet that counts divs and
 renumbers them. She will put it on the wiki.


Be clear that these general recommendations relate to P4
 (and perhaps quantify the four\-digit year following a
 colon, e.g., P4:2006\).


Delete the number 1 from 
 div examples,
 e.g., 
 div1.


Need for range of common practice and recommendations for
 each level.




 specific recommendations
 
 
V.1\. LEVEL 1: 
 Fully Automated Conversion and Encoding
Note: Editorial declaration is in the header.


Necessity for recommendations of 
 header use.


Articulate recommendation of at least one child
 container element per 
 div and perhaps one per
 page. Extensibility is desired, and 
 ab may aid
 this. Discuss the use of 
 ab and, if it isn’t,
 state why it was not recommended.


Add a sentence about METS.


Specify recommendations for ordering structures using
 
 pb with 
 id
n, stating how 
 n is used to demarcate what’s
 on the page and how to do it.


Include a section on IDs, discussing use, uniqueness,
 and linking pages.


Begin inserting recommendations about attributes at
 this point, i.e., use of double quotes.


Discuss the use of headers at this point, and point of
 to the DLF/NSDL OAI Best Practices document.


There may be an opportunity to mention the use
 authority work, i.e., pointing to name and subject
 authority file URLs.





V.2\. LEVEL 2: 
 Minimal Encoding (types and heads with front and back)

Purpose



* Change keyword searching to full\-text searching.



Rationale



* Note: A navigational functionality begins to
 take structure in Level 2\.
* 1st paragraph, last sentence—delete ,but
 still does not require a specialist to
 identify
* 3rd paragraph, 1st sentence—change to read
 “Level 2 is not intended to be displayed separately
 from their page images.”
* 1st paragraph, 2nd sentence—include a pointer to Level 3
* Syd will report back to group regarding two\-
 versus three\-letter language codes


Compose a blurb about 
 bibl and nesting within
 
 head elements.


Explain the use of 
 ps and three\-letter
 language codes.


Transpose the 
 div and 
 head elements
 in the code example.





V.3\. LEVEL 3
 Simple Analysis
Draw a distinction between endnotes and footnotes.



notes requires further discussion, i.e.,
 leaving 
 notes in line or in place.


Perry will take a crack at articulating and
 demonstrating the pros and cons of various uses of
 
 notes.


Rationale


First bullet—add “if”





V.4\. LEVEL 4
 Basic Content Analysis
Provide examples for HTML and print.


Rationale


Transpose bullets one and two.







 day two: 
 2006\-02\-14

 specific recommendations, continued
 
 
V.4\. LEVEL 4
 Basic Content Analysis
Recap from yesterday:


Does not require page images vs. images.


Reword indentations


Make 3rd paragraph under Rationale language more current.


Make all elements under Level 4 Prose, first bullet hyperlinks to the Guidelines explanations.


Discuss general guidelines for oral histories (Merrilee and Natasha to report back).


Change the “V.4\.n, and think of a better ordering schema.


See Matthew’s notes for issues with Level 4 examples.





V.5\. LEVEL 5
 Scholarly Encoding Projects
This is outside the scope of our work.





V.
 Attribute Values
We may be venturing into project management best
 practices here. Perhaps we need to say more, if anything
 at all.


It would be worthwhile to mention the significance of
 being consistent in encoding practice, e.g., proper use
 of double quotes and equals sign to grease the wheels of
 Perl hacking.


Is this section Level 3 or 4 compliant?


Encoders need much help, and we have an opportunity to provide that here.


Matthew will present a straw man for comment.






 Definition, mission, and purpose
 
 There is a libraries group within the TEI Consortium, and
 we are a SIG within that group. We are also an initiative
 working group within DLF.


We need to establish better communication with the TEI
 Consortium.




 Moving forward
 
 How is the current work we are doing going to work with
 P5?


Can we convene during the summer 2006 to discuss the
 header document and to review our revision of the current
 iteration of the 


Guidelines.
 
 Discussing the vendor DTD, DLF is willing to fund, in
 partnership with the TEI Consortium, this bit of work.


Who, what, and when questions need answering. A
 predecessor task is to have a cohesive document to look at
 before moving forward, and this could be assigned to a
 graduate student at one of the Consortium institutions.
 Look at Stanford’s work on GATT, UVa’s work on the Fever,
 and David’s work for 


Harper’s Weekly.
 
 Conducting a survey would be a useful for mapping the
 landscape and a beneficial marketing exercise.


The remit is to do the technical work of developing a
 vendor DTD with two tracks of deliverables and
 cost\-benefit analysis for each, and negotiate who and
 where a maintenance service will live, i.e., the TEI
 Consortium. Pursue a DTD for each level 1–4 of the
 


Guidelines.
 

 METS
 
 Is Richard’s page\-turner model primarily a Level\-1
 application, or is it extensible? This is as yet to be
 determined.


Q What do you want to prioritize using the page
 turner?


A You don’t want to dumb down the TEI, if you include
 METS. Do you duplicate the 
 div structure in the
 METS document, and how can this be done efficiently and
 effectively?


If P5 can provide the desired functionality on its own,
 then there may be not need to incorporate METS.


Q What about inserting technical metadata in the
 description tag? 


A This can be done, but isn’t a compelling reason not to
 use METS, which has a lot of promise for libraries.



The recommendation is weighted towards the second
 solution Richard provided, i.e., duplicating 
 div
 structures. The third solution is least favored.


The structural map is problematic.


Richard will create a couple of pages on the METS
 page\-turner application for Level\-1 documents for
 discussion at the DLF Spring Forum 2006\. Michael Popham
 may be available to present the results.




 Task assignments and durations
 
 * Matthew will tweak 
 Guidelines—finish
 3/1/06\.
* Chris submits explanation for why Levels 1 and 2 are
 as is at Michigan—finish 2/17/06\.
* Christie will replace previous versions of the
 
 Guidelines—finish 2/17/06\.
* Merrilee will draft piece on oral histories for
 Natasha—finish 3/1/06\.
* Richard will finish METS page turner piece for
 comment—finish 4/10/06\.
* Perry will work on 
 notes piece—finish ?
* Merrilee will contact Jerry McDonough about
 assigning a graduate student to work on an analysis and
 synthesis of the versions of the Guidleines—finish (end
 of spring)?
* Contact Liz Shaw for a quote to work on an analysis
 and synthesis of the versions of the Guidleines—finish
 (end of spring)?
* Merrileec will provide URL to an analysis similar to
 the work we need done—finish 2/17/06\.
* Get documentation about TEI headers from
 Michigan—finish 2/17/06\.
* Discuss the TEI headers at the Google symposium at
 Michigan—finish 3/9/06\.
* Attach \#10 to the amended 
 Guidelines
 or somewhere on the DLF Web site—finish ?
* Post amended Guidleines on the DLF Web site—?
* Vet the revised 
 Guidelines—?
* Plan a teleconference to discuss the vetted
 
 Guidelines 3/15/06, 4:15 p.m.
 EST—finished.
* Meet at the Annual ALA Conference, Sunday, June 25,
 2006, in New Orleans—finished.
* Post links to the minutes from this meeting and the
 revised 
 Guidelines on the TEI Consortium
 Web site—finish ?
* Syd will post a RFC to the TEI library SIG—finish
 ?





