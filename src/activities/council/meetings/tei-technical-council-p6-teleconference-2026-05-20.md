---
title:  "TEI Technical Council P6 Teleconference, 2026-05-20"
date: 2026-05-20
---
# TEI Technical Council P6 Teleconference, 2026-05-20

9am PDT | noon EDT | 5pm BST | 6pm CEST

#### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS)   
* Elisa Beshero-Bondar (EBB, Chair)  
* Ulrike Henny-Krahmer (UHK, 5 minutes late)  
* Martin Holmes (MH)  
* Patricia O'Connor (TOC)  
* Joey Takeda (JT)  
* Raff Viglianti (RV) 

#### Apologies:

* Elli Bleeker (EB)  
* Torsten Roeder (TR)  
* Martina Scholger (MS)

#### Scheduling June meetings 
 
 Discussion to schedule two back-to-back meetings (one for P5 and one for P6) between June 14 and June 27, around Council conference travels.

#### TEI Conference / F2F Meeting updates
  * Conference + F2F: Mon 10 Aug – Mon 17 Aug 
     * Mon 10 Aug: workshops, definitely  
     * Tue 11 Aug: workshops, maybe  
     * Wed 12 – Fri 14 Aug: conference  
     * Sat 15 – Mon 17 Aug @ noon: Council F2F  
  * **Action on EBB** to contact SIG convenors ASAP: so that we know which SIGs want to meet so that schedule can be drawn up.  
  * Schedule to be published + registration going live very shortly  
  
#### Infrastructure Group meeting 
 * Tomorrow: Thurs. May 21  @  7am PDT | 10am EDT | 3pm BST | 4pm CEST  
 * Discussion of server issues, support for July P5 release

#### P6 Sandbox Experiments           
* [P6 Sandbox repo](https://github.com/teiC/p6-sandbox): when should we make it public?
    * Council discussion: For now, we'll keep it private but link to it from our minutes. Eventually we will make it public, ideally by the TEI 2026 conference when we are sharing our work with the community.

* MH: [Claude Code experiment w/ remodeling  P5 subset](https://github.com/TEIC/p6-sandbox/tree/main/mh-claude-sandbox)  
    * Having tried this, MH finds that retrofitting a hierarchy onto P5 is impractical   
    * Discussion: EBB: Did we not agree in Wurzburg that P5 should be one blueprint possible to express with P6?   
    * RV remembers this differently: We'd have a flexible abstract model for P6, and with a generous ability of users to customize, we should be able to express any P5 ODD customization in P6.   
    * RV: We will however have to axe some elements from P5, so the P6 customization wouldn't be completely the same.  
    
* JT's experiment: Visualizes the classes: what inherited clusters we already have in P5. Raises questions:  
    * How do we disambiguate?  
   * We should be able to start fresh and new, but how do we make sure that TEI as a stable standard doesn't lose people?  
   * SB: If the maintenance for P6 is going to be more difficult than P5, we shouldn't do that.  
   * MH: We could look through the existing pseudo-class system, which arose via convenience and work on making them rational\! For example, \<distinct\> is in model.emphLike, while probably \<emph\> should be in model.distinctLike, since \<distinct\> is the more abstract element. We might start our P6 work by working through existing P5 classes and rationalizing them, as well as trying to gather up many of the 422 elements which are not in \*Like classes and considering how we might group them.  

* EBB shared a set of abstract relationship classes such as temporality, spatiality, measurement, etc., and created a folder in the P6 sandbox repo for UML model diagrams to be shared. 
     * EBB's simple UML modeling to experiment with relationships: [https://github.com/TEIC/p6-sandbox/blob/main/uml-model-diagrams/abstraction-relationships-ebb.md](https://github.com/TEIC/p6-sandbox/blob/main/uml-model-diagrams/abstraction-relationships-ebb.md) 
    * File organization: Sharing model diagrams (and blueprints) in [p6-sandbox repo](https://github.com/TEIC/p6-sandbox/tree/main) to store them together outside visualization apps. 
  * RV: We have been discussing fairly high-level approaches, and this is the opposite: a fairly circumscribed manual approach.   
  * We could all make an attempt to build a model of one small component of a document (such as a bibliographical reference) and see how our approaches differ, and how they might depart from the current P5 patterns.

#### Collection of arguments for P6
  - Action on RV to make a separate document and collect the arguments there. 
  - Problems with P5: 
      - complexity of maintenance  
      - confusing class system  
      - too much prescriptiveness   
      - too many ways of doing the same thing  

#### Modeling P6
  - Is there/should there be a clear distinction between metadata and non-metadata, or do they overlap considerably?
      
* RV: At last month’s P6 meeting, quite a few of us liked the idea of modeling P6 “concepts” as graphs ("things" or textual phenomena rather than XML concepts). Where do we stand with this idea after this month’s experimentation?  
  * RV: does MH’s DAG proposal begin to explore this? Does EBB’s UML? 
      * Concept graph of types of relationships  
      * Containment is one kind of relationship. 
      
* RV's experiment shows us an abstract model taken to blueprint (the basis for RelaxNG that customizes a TEI document if made for XML). 
   * MH suggests we'll want a basic model for something like `struct` and then allow more specific structs to derive from it. Also suggests that scopes such as metadata versus transcription could be realized through namespaces, so a metadata \<p\> might be in a different namespace from a transcription \<p\>.  
   * SB likes that RV hasn't said that structs and traits are about elements. They could equally be about attributes, and while that might be weird, it just lets us handle the mapping in other ways as needed.   
   * SB: How much is this is reproducible as a system with just strong naming conventions over a Relax NG schema?  
   * RV: the output this time gives us just that, but the issue may be for more complex modeling, could we combine Relax NG's together? Relax NG might also need more than we're providing? But we should keep trying...  
   * RV thinks we will need to split this in two Relax NGs: one more abstract and one more precise / derived for a blueprint.   
   
#### Council Homework for the next June P6 meeting
Each of us will make an abstract model for bibliography in UML, and (if we can), take to to blueprint expression for encoding a bibliographic record.   



