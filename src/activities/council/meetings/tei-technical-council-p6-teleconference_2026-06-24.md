# TEI Technical Council Teleconference, 2026-06-24

10am PDT | 1pm EDT | 6pm BST | 7pm CEST

## Administrative

* Zoom: [https://psu.zoom.us/j/98850059066?pwd=UzhBL2NFc1lweWYzS2xZd2dqYVZpdz09](https://psu.zoom.us/j/98850059066?pwd=UzhBL2NFc1lweWYzS2xZd2dqYVZpdz09)   
  * Meeting ID: 988 5005 9066  
  * Password: tei

### Present:

* Syd Bauman (SB)  
* Elisa Beshero-Bondar (EBB, Chair)  
* Ulrike Henny-Krahmer (UHK, 10 minutes late)  
* Martin Holmes (MH)  
* Martina Scholger (MS)  
* Joey Takeda (@ 17:06, JT)  
* Raff Viglianti (RV) 

### Apologies:

* Helena Bermúdez Sabel (HBS)   
* Elli Bleeker (EB)  
* Patricia O'Connor (TOC)  
* Torsten Roeder (TR)

### Previous meetings

* [May 22 (P5) Meeting Notes](https://docs.google.com/document/u/0/d/1P9t-B0OgOea9pVz6lLWYoeRVcPDf7uhTx5FR7XXob_c/edit)  
* [May 20 (P6) Meeting Notes](https://docs.google.com/document/d/1Qao6smSAs5jys5gi7GKU6BxaWgr-3v21TZ_xw-d7uZs/edit?tab=t.0#heading=h.f8gkmqkhbemn)

**Note:** minute review / p5subset update table is near the end of this document.

## Agenda & notes:

* Next meetings  
  * Please fill in the [July Council When2Meet poll](https://www.when2meet.com/?37183204-ax6Ko) by this Friday June 26\.  
    * This will help us schedule BOTH the P5 and P6 meetings  
    * EBB's times may shift a bit, but for now, everything is open...  
  * Worry that we're converging on two meetings in a single week again?

* JT:  TEI 2026 conference schedule is official. P6 panel has moved to Thursday evening. 

* MH proposes we consider a P6 abstract modeling of linking  
  * JT: Isn't everything a "link"? What do we mean? Is it a behavior / property?  
  * Pointer= a unique address resolvable to a URI scheme  
    * Does it have to work?   
    * Is the pointer the same conceptual thing as an address (or an identifier)? Or is it conceptually distinct from something like a mailing address? 

    * Resolvable Unique Identifier? Resolvable Sufficient Identifier\!  
      * Unique might be one piece of it  
      * Name  
      * Physical address: (how unique is it?)   
      * Unique enough?  
      * Disambiguation issues  
    * Concept of Referring vs. Creating vs. Describing  
  * RV: Bibliography is descriptive  
  * The old old issue of \<ref type="bibl"\> or using `@ref` vs `@corresp` on `<bibl>` for in-text citation  
  * In one sense, all markup is referential (element names refer to definitions of those elements, element content is explicitly defined/described by the element). One question is whether there’s a useful line to be drawn between plausibly-resolvable pointers (things which can be converted to URLs, for example, or possibly street addresses) versus more abstract pointers to concepts. There are also partial pointers such as idnos which depend on a collection-level context, or private uri schemes which depend on a documented resolution mechanism.  
  * In the most basic sense, verifiability (truth) of the reference isn't necessary. There are fictional, erroneous, satirical and other types of e.g. bibliographical entry that are not expected to be resolvable to anything, but are still instances of bibliographical entries.   
  * Resolvability \= plausibly findable based on syntax, or based on the existence of cataloged resources 


* UML experiments: Abstract models of bibliography, blueprints  
  * MH is puzzled by this, thinking that the task was to model bibl encoding as you might want to see it in P6. This doesn’t work with UML, because the proposed class structure is not about content models at all.   
  * EBB: I interpret the task as about mapping from bibliography encoding to class concepts in UML, as we did in our last P6 meeting and at the F2F.  
  * See examples:  
    * [https://github.com/TEIC/p6-sandbox/tree/main/bibl-encodings](https://github.com/TEIC/p6-sandbox/tree/main/bibl-encodings)  
* UML modeling resources:   
  * [https://en.wikipedia.org/wiki/Interface\_(object-oriented\_programming](https://en.wikipedia.org/wiki/Interface_\(object-oriented_programming)   
  * Try not to let UML syntax itself overly influence what we're doing?  
  * Are we modeling a markup language or bibliography itself?


* Continue experimenting with modeling bibl and other things, but also consult the P5 Guidelines to understand the reasons/backgrounds for modeling them as they are now.  
  * See for example: [https://www.tei-c.org/release/doc/tei-p5-doc/en/html/HD.html\#HD8](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/HD.html#HD8)   
  * UHK Think about which parts of nesting are conceptual and which are due to content model constraints (that don't make sense to us now)  
  * Allowing bibl to nest is for scenarios that help with specifying chapters within a larger text.   
    MH: My understanding of one reason why bibl nests in P5 is because, while in reality a book contains chapters, in a traditional bibliographical citation for a chapter, we put the information for the containing work inside the information for the target chapter. So you might have a bibl for a complete book, listing its editors, which is cited for itself; then you might cite a specific chapter, with its title and authors, and inside that you need to also supply the information for the containing work, so you just drop that in as a nested bibl. So to resolve this reference, you first have to resolve the reference to the containing text, and then in that context you can further resolve the location of the contained chapter. Physical addresses do this not by nesting but by sequence – in the west, street then town then country, or in Japan the reverse: country then town then street. But the inference is that each is contained in the one before or after it.

