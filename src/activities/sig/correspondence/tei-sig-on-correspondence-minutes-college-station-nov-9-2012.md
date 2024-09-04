---
layout: page.njk
title: "TEI SIG on Correspondence - Minutes College Station, Nov 9, 2012"
creator: Peter Stadler
---
# TEI SIG on Correspondence - Minutes College Station, Nov 9, 2012





Attendees: Syd Baumann, Gary Chafee, Julia Flanders, Albertina Hughey, Mary MacNeil,
 Daniel Röwenstrunk, David Sewell, Peter Stadler, Jennifer Stertzer, Werner Wegstein




 Report on last year's activities
 
 * Two people added their encoding practices to [SIG:Correspondence/EncodingComparisons](https://wiki.tei-c.org/index.php/SIG:Correspondence/EncodingComparisons) for a comparison between several customized or non\-customized TEI versions for correspondence
 (\= last year's short term goal)
* Ron posted his DALF P5 (preliminary) proposal




 Request for a correspondence module and a wrapper element for correspondence meta
 data
 
 Details about proposal were given in advance at: [SIG:Correspondence/RequestForModule](https://wiki.tei-c.org/index.php/SIG:Correspondence/RequestForModule)


* There is agreement about a correspondence module with the name “correspondence”
* There is agreement to put the correspondence metadata in the \<sourceDesc\>; if there
 is a wrapper, it should probably be called \<\>, but that detail is less important
* Peter shows the group the DALF and WeGA systems



 Decisions
 
 * letter metadata unit \<\> should be repeatable, member of att.declarable, and member
 of model.bibl (or whatever \<msDesc\> is a member of)
* Metadata should be organized (inside the wrapper) as a set of special\-purpose elements
 (e.g., \<sent\> or \<sender\> and \<received\> or \<addressee\>), with a general\-purpose element
 (e.g., \<correspItem\>) for those cases we can’t predict (e.g., transmission, censoring,
 translation \-\- although we just predicted those :\-). These elements would likely all
 have the same content model. Also need to have model.pLike or model.noteLike (or both)
 for prose explanations.




 Further work during the meeting
 
 * Syd starts writing a rough ODD draft for the above decisions
* We got stuck about a simple list of events (sending, receiving etc.) vs. a more distinguished
 separation between the creation events and the reception events
* got stuck again by trying to turn the agents into events and back again
* Final decision is to go with an actor based approach as done by DALF and WeGA and
 add some generic element to be able to take care of additional requirements
* The result of our ODD efforts are uploaded as a “second draft” on [SIG:Correspondence/ODD\_work](https://wiki.tei-c.org/index.php/SIG:Correspondence/ODD_work)




 
 AOB 
 
 nothing





