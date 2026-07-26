---
title:  "TEI Technical Council Teleconference, 2026-04-24"
date: 2026-04-24
---
# TEI Technical Council Teleconference, 2026-04-24

6:30 – 8am PDT |  9:30 \- 11am EDT  | 2:30 – 4pm BST | 3:30 – 5pm CEST

#### Present:

* Syd Bauman (SB)  
* Elisa Beshero-Bondar (EBB, Chair)  
* Elli Bleeker (EB)  
* Ulrike Henny-Krahmer (UHK)  
* Martin Holmes (MH)  
* Torsten Roeder (TR)  
* Martina Scholger (MS)  
* Joey Takeda (JT)  
* Raff Viglianti (RV) 

#### Apologies:

* Helena Bermúdez Sabel (HBS)   
* Patricia O'Connor (TOC)

#### Schedule change: Alternating P5 and P6 meetings
* This meeting initiates Council's new bimonthly agenda to alternate working P5 and P6.   
* Calendar polling for next meetings: assigned to TR. Logistics:
     *  Set time range notBefore 6am for Pacific coast (Vancouver), notAfter 11pm for Europeans and choose a representative week for the poll. Usually we do the second full week of a month for regular Council Meetings  
  * We're now also selecting a second meeting, probably two weeks later.   
  * We can and do adjust the schedule after polling results as needed.

#### TEI by Example (TBE)

 * Topic left over from last (P5) meeting. Update of any recent communication on TBE w/ Melissa Terras?  
 * Board/Council decision: a backup of TBE should not be an official TEI resource because the materials are out of date and it would take lots of work to update. 
 * From Board: "If someone wants to privately, or as part of a SIG, take on hosting a backup or similar then more power to them, it is just that it shouldn't be an official duty of Council to maintain it. Especially when that effort could be put towards P6."  
* Recommend revival of the Pedagogy SIG to take this on... communicate w/ community about it? They might have input on the updating of the actual content.  
* EB: TBE is okay to be hosted where it is for about a year and a half.  
 * MH: We might look into hosting a static version of TBE; we’ll have to look into any expectations that data will be stored on the server, though.. Is it worth it? And while staticizing it is one thing, if the actual content is going to be updated, that’s a whole additional task.  
 * RV: might be interesting as a student project (create a static site from TBE); hosting will need to be discussed.  
  * JT: It would be useful to identify a canonical home for it (as opposed to a one-time experiment by students that won't be updated).   
 * EBB: We should be able to hand it to a SIG to keep updating it.   
      * PRs and updating TBE could also be student projects.  
* MH: Does there need to be a consensus on what constitutes good TEI?  
      * All our current starting points are semi-adequate (for example, the Dictionary module when you’re working with a digital dictionary)  
      * We could be providing more and better starting points, so that people won’t have to resort to tei\_all.  
      * MH: we can teach what a good starting point is; the first thing to teach would be how to select the most appropriate blueprint(s) to start from for your purposes.  
* RV: tei\_all wouldn't really work any more in the new system (too much dictated in it). But we do need something for general purpose / a reference implementation of the abstract model. Maybe more like TEI Lite.


#### P6 work in progress
  * Discussion w/ Board: very supportive for making sure we have time / space to work on P6. Some concern expressed about potential loss of tei_all.  
    * SB: People do use tei\_all, to see what's possible to encode in TEI. The convenience factor is important.

  * Work proceeding in [https://github.com/TEIC/p6-sandbox](https://github.com/TEIC/p6-sandbox) and P6-dev Slack channel  
  
 ##### Discussion of class hierarchy and P6  
    
 * JT: Positionality is baked into definitions of some of our elements, e.g. `<postScript>` Does this pose serious problems for us?   
    * MH: `<postScript>` surely means written after rather than written below! There are lots of examples of postscripts being written at the top of the letter, for example.  
   * Will we have a smaller number of elements and make the positional aspect more abstract?  
   
 * SB: Metadata needs to be separated from data, which is problematic for the "everything everywhere all at once" approach. SB doesn't want users to be confused by unclear distinctions. We've separated ourselves from the DH community we're trying to support: we need to make this easier and strictly separate data from metadata.   
    * MH: This is an already lost argument; embedded annotations are a form of metadata which is often put right into the document, for example. But could be expressed in blueprints rather than the abstract model.  
    * But traits / scopes are difficult to contemplate and may be a huge challenge for regular TEI users  
       RV: Point of hierarchy: Items always being in a list: no item should live on its own without a list. We can't shake it off completely.  
    * JT: Consider `<app>` and `<lem>`: These are specialized complications, like marginal notes that get pulled into a list via hand-drawn arrow. Documents may put things in other places and do transposition, but elements may have to sit outside their parent wrapper. `<app>` and `<lem>` set up a virtual context around something that is interpreted rather than present in the documents. We need these declarations that indicate these things are outside their regular context.  
   * RV: The tension between text and documents is always part of TEI encoding. Those who developed `<sourceDoc>` wanted to prioritize the physical text, so at the time we introduced two parallel ways of modeling the text.  
    * Can we make this work within a single abstract class system? Will we still decide that one is better than the other?   
    * EBB: Maybe we need to put this as a primary starting point for the community: 
        * When customizing the TEI for a project, which approach do you prioritize: physical document representation or semantic hierarchy?  
        * Do we then have multiple abstract models of TEI, and the customizer must decide which to use?  

* What should the P6 abstract model represent? Or what is an abstract model?  
       * MH: Semantic components of texts.  
       * Not about structural constraints. 
       * Maybe it's just a glossary?  
       * But it should be semantically hierarchical:   
       * More abstract to more specific: without dictating where the elements appear.  
       * UHK: It would be nice to have semantic modeling of relationships to help us organize the elements. Relationships could be of different kinds:  
            * Specificity: sub- or super-ordinated concepts like in WordNet.  
            * Structural relationships could be expressed in a semantic way: paragraph, heading, div related to each other  
       * RV: We can model types of relations that aren't just child or parent, could also communicate belonging, positioning. Could be expressed as hierarchy or in other ways.   
            * "often" , "normally", "frequently" language doesn't necessarily dictate structure but describes prototypical structure/usage/….  
       * RV: We define relationships, and we can combine them.  
            * Blueprints help you apply a structure. Lego analogy.  
            * Abstract model of components (e.g. the glossary) that would be a hierarchical concept tree.   
            * Concept graph of elements: RV: to avoid XML concepts, these could be considered as “things”, or textual phenomena.  
            * Concept graph of types of relationships  
            * Containment is one kind of relationship.   
      * JT: This is an ontology we're describing like a w3c web ontology. Ontologizing helps with serializations. It's a technical step that would promote interoperability and interchange via a knowledge tree that we create for the TEI.  
        * MH: Would be completely serializable as RDF (rather than UML).  
        * SB: RDF is an output format, not a data format. RV: but it's modeling a graph.   
        * SB: So, any of these concepts could have multiple inheritance?  
        * MH: We don't know yet.  
          
     * RV: For now, just what does the abstract model look like for "things" (textual phenomena) and types of relationships?   
          * One of those types of relationships would be "can be reduced to".  
          * All other relationships would be made as trees when we create blueprints. The blueprint stage is the schema development stage.
          * EBB: So the user must declare what is authentic, validatable, verifiable, reproducible based on their blueprint modeling.  
          * UHK: Are there some basic constraints that would apply in all cases? Like `revisionDesc` never goes in `body`? How do we prevent insanities?  
            * MH: Blueprints will need to be fairly opinionated, representing some agreed-on practice.  
* SB: How would P6 be doing this differently from the ODD system in P5?  
    * MH: The idea of compliance should change: not just conforming to an example. Avoid baking in preconceptions at a high level in the new abstract model.  
    * JT: Abstract model is nouns and verbs. Blueprint creates a sentence.  
    * EBB: This is seeming more writerly and declarative the more we discuss it.  A P6 that improves our capacity to express and describe the textual phenomena we are encoding.  
   * UHK: People can focus on the semantics of the elements rather than keep running into “tag abuse” problems. Go to the model to find a basis for expressing a semantic relationship, and then create a blueprint: separation of concerns.     
* SB: When might this separation of concerns not be helpful to the user? We do need to end up with an encoding that's easily customizable with other projects. How do we reduce that burden? Not only how do we make it easy for people to make a blueprint, but how do we make it easy for others to interpret blueprints?  
       * MH: An important component of interchange is being able to express in multiple serializations: XML and others. The mappability of the use of concepts between two potential serialization formats for document structures.   
     * JT: Breaking out the conceptual from the document ordering makes things more interoperable.  
     * UHK: If we conceptualise the abstract model as an ontology, it will provide us with an easy way to translate.  
     * UHK: This needs to be ready to use; very important to provide blueprints for people who don't want to have to care about the abstract model. The experts will want to extend those blueprints. These need to be implementable in tools / easy to use. 

* RV: What are we doing with attributes?  Traits? Features?   
     * Describable textual phenomena that are shared.   
     * EBB: anything we express in an attribute could be expressed as an element.  
     * MH: Attributes could fit in the abstract model in the same way as elements: the concept belongs in the tree alongside other concepts.  
     * If we imagine these being serializable in other formats, whether it's an element or an attribute may not matter.  
     * Are there some concepts for attributes that don't belong in the main concept tree? We need to look at some worked examples...  
        * MS: UML doesn't distinguish between elements and attributes, only properties. Seems like it doesn't matter, just a property. Or a kind of relationship between concept could be expressed an element or an attribute.  
        * UHK: Consider ids: they may be attributes but also child elements. Either way it's a property.  
        * Relationship of type and subtype example:  
                              
##### Practice modeling 
 * EB: HBS would want us to try a UML experiment. It will help us visualise what we’re trying to say. Gave it a go at [PlantUML](https://editor.plantuml.com/uml/LL5BRkCm3Dth5DeFaYCCCeFPpB90Bi38pp41YJ8eActGzkvDx2YnTjJxF3sGXsAaLbDqZiMW8mNu8pxiwZ-Tzxy2YGzPZ5YytM0lUK1ntrlvMoKn7fbE4QlhGh7YFbHXwyN_SgW9OgIF7nGXwr3yF5qB1uf-15bLzBR_OX3ZB1HRCLL6yI6dL8K36L_W4qXOpdSldOef1VCXKYd-Y3HdRUx3-mHP1ids5sDMjDUVqQ3tWDKtaE7X2HGX0sr8uzJ8MH6uS9ONEqDvsTcgiEkC5nbX1fr0mrDEIcUbUNBkMNQ___gzdgF7kfsxfUDkTuERo2tDUiYrFjlK7jiSnxqAhZbDwTopQ1VKWvjxENU033N57m00).

 * **Council homework:** Play with PlantUML and make blueprints / do some writing for the next P6 meeting. 
     * MS: Can we organize a visualization session, to explore w/ PlantUML? 

##### Guidelines for P6?
* EBB asks: what is a Guidelines "chapter"in P6? Can a chapter express blueprints?  
   

#### ATOP tickets
   
  * [\#2840](https://github.com/TEIC/TEI/issues/2840): When `@module` attribute is missing, what should a processor do?  
    * In 2026-03 we decided on a path forward. So should we just remove "Needs Discussion" label and move on? — SB  
  * [\#2729](https://github.com/TEIC/TEI/issues/2729): ODD processing for glosses and descs  
    * Main question is whether the "only-one-each-lang" constraint should be moved from p5odds to P5. (That is, are customizers and people who use the TEI ODD system to write non-TEI markup languages allowed to have multiple \<gloss\>es or \<desc\>es in a given language for a particular construct?)

  * [\#2826](https://github.com/TEIC/TEI/issues/2826): There should only be one `<remarks>` element per language and [\#2729](https://github.com/TEIC/TEI/issues/2729): ODD processing for glosses and descs  
    * JT + Council discussion: Is it a problem to include a `<remark>` with `@mode="add"`in addition to remarks brought in from the same language from the Guidelines? MH: Bear in mind ODD chaining: once this is allowed, the base ODD for the next level of the chain will have two `<remark>`s with the same lang, presenting the same problem again.

