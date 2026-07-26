---
title:  "TEI Technical Council P6 Teleconference, 2026-07-16"
date: 2026-07-16
---
# TEI Technical Council P6 Teleconference, 2026-07-16

6am PDT | 9am EDT | 2pm BST | 3pm CEST

### Present:

* Syd Bauman (SB)  
* Helena Bermúdez Sabel (HBS) (late)  
* Elisa Beshero-Bondar (EBB, Chair)  
* Martin Holmes (MH)  
* Martina Scholger (MS)  
* Raff Viglianti (RV)   
* Torsten Roeder (TR)

### Apologies:

* Elli Bleeker (EB)  
* Ulrike Henny-Krahmer (UHK)  
* Patricia O'Connor (TOC)  
* Joey Takeda (JT)

* Discussion of bibl and other P6 modeling experiments, related to P5 modeling decisions  
* Preparation of the conference panel discussion  
  * [Panel Proposal](https://docs.google.com/document/d/1X_ozsb89701eBeDxeAWVd8U2JH2hXEQ9YACGhv6eL5Y/edit?tab=t.0)  
  * What happens with our development of P5 and P6  
    * RV: Like Python 2 and Python 3: "substantial, intentional, and long" overlap between the two (as Python 2 continued development alongside Python 3\)  
    * Abstract model vs. blueprints and customizations  
      * An abstract model of P6 can be isomorphic with P5 but uses the new P6 infrastructure  
      * MH: However radically different P6 will be, there will be a better schema specification that can include a model of P5.  
      * MH: We should not retrofit P6 on the P5 abstract model  
      * RV: but we won't create P6 as if TEI didn't already exist. We should reproduce concepts we know and everyone will recognize from P5.   
        * example : yes, we still support named entities...

* SB: Relation between abstract model and schema is something we can hammer out much more clearly in P6 and P5   
* EBB: P6 would involve changes to:  
  * Abstract Model  
  * Schema  
  * Infrastructure  
* Will it be supported by ODD?   
  * MH's understatement: Current is ODD is flawed in ways that are difficult to fix  
  * EBB: RNG?  
  * MH: An "ODD-like" mechanism: schema spec and documentation should be tied together meaningfully  
  * SB: Schema language is in the same language that the definition occurs  
  * RV: we can put together code spec and documentation without them needing to be in the same language. No necessity for this to be in TEI or even XML.  
  * If we find a compact syntax that works for us, we can include it in a TEI document for documentation purposes.  
  * MH: Do we want to question the movement toward pure ODD?  
  * RV: From a designer perspective, is there a reason for it?   
  * SB: ODD alone was fine  
  * MH: There was a "completist philosophy" behind pure ODD in TEI  
  * MH: Broader idea for P6 requirement: Never reinvent someone else's wheel. Just use someone else's standard. SB: Caveat: we never reproduce a **good** wheel. Example: ISO sex definition that hurt us.  
  * Pure ODD draws a line between Schematron and Relax NG  
  * Schematron was a way of indicating a mistake in pure ODD  
  * Devil's advocate: One advantage of Pure ODD is having full control. Idea of class membership is a little anti-pattern. Not necessarily unique to TEI but not seen very often. P5 abstract model had to be force-fit into Relax NG.  
  * SB: there was a line between the two but it went both ways. Relax NG could still refer to a class: rng:ref.   
  * MH, RV: But Relax NG is all patterns, doesn't know about model classes. It just includes patterns, not indicating that the pattern is defined by that.  
  * Model classes: attempt to introduce more abstraction in the TEI content model that didn't go far enough?  
  * P4 organized elements in modules and modules descend from chapters which is kind of a membership thing. We had classes in P4 too. Classes had members. Classes declared members, not the other way around. The reversal of that in P5 was difficult to get used to.  
  * Class membership--was it an attempt to add more abstraction to the abstract model?  
  * RV: There's a history of trying to make things abstract, and we need to remember it in our new work.  
  * The abstraction we want is for the abstract model, NOT the schema spec.  
  * RV: Maybe a specific team should work on ideas and definitions that we care about in P5 and construct them in something like [schema.org](http://schema.org) . Some other team can work on the mechanisms that help us with the infrastructure for generating content models, schemas, the work that ODD does.  
  * Maybe we know what this ODD-like thing should NOT look like from ATOP\! But it's difficult to see an alternative path. Annotating RelaxNG might work.   
  * RV: We want something that will generate more than XML schemas  
  * MH: We need to choose an expression language  
  * ODD has been such a preoccupation and it's hard for us on Council. Council members have expertise in this area that's hard to step away from.  
  * But maybe we need to succeed in stepping back to see it from a distance as if it's new.  
  * EBB: Could Relax NG help us with alternative serializations? Relax NG could be abstracted but it's for trees  
  * Elena Pierazzo's keynote address in the mid 2010s on need to serialize TEI in alternative ways  
  * Choice of dominant hierarchy makes it difficult to model two different hierarchies of text at the same level.   
  * But in LMNL, all hierarchies are broken up, and that's not necessarily better. They're milestone hierarchies with no dominant hierarchy and super difficult to process.  
  * Trees are cool b/c they're easy to process and we have excellent tooling developed for them.  
  * Completely redrawing the abstract model is NOT about moving away from XML. Rethinking P5 and text encoding in a way that breaks some old problems that are making things difficult.  
  * SB: The thing that moves us to P6 besides revamping ODD or going to Relax NG is expressing the abstract model itself. We aren't clear on the abstract model in P5, what it is and what it's for.  
  * MH: In the presentation, pull out the key pain points of things we want to throw away and re-think that most   
  * EBB: also the concepts that matter to preserve in P5  
  * EBB: James C has been talking to the community, and notes that the community has shrunk. Finances are also dwindling. Can P6 come across as easier, more attractive, and novel?  
  * HBS: The community may be less active, but actual use of TEI may be higher than ever. Many people use TEI for projects but don’t join or come to conferences.  
  * JC has raised a ticket for adding a Schematron rule which would give you a message prompting you to join the TEI. (Not really serious.)  
  * SB: Relative to our income, P6 is really expensive.  
  * RV: There may be other sources of funding, and this is also time we would be spending on P5 maintenance. If people are using TEI without needing to engage and ask to change it, this is the time to put effort into P6. Just the fact that we’re doing this will create some interest.  
  * EBB: Necessity to generate interest and discourse.  
  * EBB: Part of the presentation will be to point out that funds will have to be raised, and we will have to show that P6 will be easier to maintain.   
  * SB: Making customizations \! \= argument for P6 (b/c we can already do that in P5)  
  * Peter Stadler's idea for an ODD repository / registry was for P5. But that would forfeit the opportunity to improve the abstract model  
    * But should we *start* with this customization infrastructure--an ODD repository for finding, registering and using blueprints for P5...  
    * ...and then move on to modeling blueprints there in P6  
    * Do this if we need this infrastructure for the vision work for the community (The mechanism for sharing material could be in place first)  
  * MS: Do we all agree with what we don't like in the current abstract model? Can we name it and start with a list? We talk about it as if we all agree, but maybe we don't?   
  * MH: Likes the ODD registry repo, but there's a big difference between a highly specific project ODD and a more generic blueprint for the wider world. A larger repo of bespoke project customizations   
  * EBB: ODDs for DRACOR and correspSearch might be good for this.   
  * RV: Who would make these generic customizations?   
  * Answer: We (Council) would--because we're in the position of seeing how to make specialized things generic.  
  * TR: Dracor, correspSearch, German Text Archive: these projects are maintainers of their own schemas and we shouldn't take control of that away from them. How would we manage this so they maintain   
  * EBB: I think we'd invite the maintainers to contribute their work as blueprints / starting points and still maintain responsibility. Just inviting them to register their ODDs as a contribution to the TEI, and (MH): representing these as good starting points for beginners.  
  * TR: Such schemas are such starting points now, and TEI can provide others. Would it cause confusion about the blueprints for drama, correspondence that are already well accepted in the community. Would it be an adoption process of these products from the community.    
  * EBB: Understood that we don't want to have to maintain customizations in multiple locations. We should point to these well-known starting points, not take them over.    
  * TR and MS: and it would be nice if those big players in TEI provide blueprints alongside Council.   
  * MS: remember the idea of the "Council-approved" flag that we came up with in Wurzburg. Council offers experienced vetting.  
  * ODD-API idea (not yet developed): [https://explore.openaire.eu/search/result?pid=10.5281%2Fzenodo.17165495](https://explore.openaire.eu/search/result?pid=10.5281%2Fzenodo.17165495)   
  * SB: But are we letting the perfect be the enemy of the good? Why not EBB's idea to make a repo and collect a few? To do it correctly it may take years.  
    * RV: has anyone collected ODDs?   
    * MH: as a preliminary for P6 work it's reasonable to collect ODDs to review them and examine them to see patterns of customization and pain points in P5  
    * Could give birth to a repo of P5 ODDs  
    * SB: we have a collection of ODDs in ATOP already  
    * SB: The first actual TEI organizational effort to collect ODDs was in 1997 and they were called extensions then. It wasn't a raging success.  
    * JT's efforts to collect ODDs: (in Slack 2025\) [https://tei-c.slack.com/archives/C08909H95QW/p1774483544107909](https://tei-c.slack.com/archives/C08909H95QW/p1774483544107909)  
    * RV: this only makes sense in relation to P6 b/c we've identified an infrastructure to share and use others' customizations as fundamental to its success. We would want to establish this from a modeling perspective  
    * We should create an ODD repository immediately as a precursor to P6, so that we can a) collect current ODDs as an input to the P6 modelling work, and b) provide a useful resource for P5 users now.  
    * EBB: We need to clarify that we’re not necessarily offering these as models, so nobody needs to be ashamed of their ODD.   
    * MH: We might want to offer two models of submission, so you can volunteer to share your ODD with everyone or to keep it private to Council.

    

    

Problems and Pain Points with P5:

* [https://docs.google.com/document/d/1c32lC74UkiwaHOHuTu2pJx1XxEZEJZZOmp8a9F4JwYU/edit?tab=t.0\#heading=h.plym8uig8bsw](https://docs.google.com/document/d/1c32lC74UkiwaHOHuTu2pJx1XxEZEJZZOmp8a9F4JwYU/edit?tab=t.0#heading=h.plym8uig8bsw)   
* Of those listed on the above Google Doc, these seem especially significant:  
  * In P5, some metadata and non-metadata elements are muddled and may need clearer distinction  
  * Necessity for context-dependent content models   
    * Come up with some striking examples for the presentation  
    * `<p>` in `<sourceDesc>`   
      * To solve now: use `<altIdent>` now to provide two different patterns  
      * It's difficult for most of us to know how to do that\! And it should be trivially easy  
      * We should come up with more examples to match with these problems


    

  * Our respondent, JC will likely be pointing out the need for easy community recognition of a standard, and the tendency to limit / avoid customization of a central model  
  * JC is likely to ask us whether our ideas to simplify could be done within P5

  * If P6 with blueprints is the best way forward, what guidance is needed to make this feasible for everyone?   
  * RV: Looking through minutes and our latest Slack discussions  
    * **Main points of agreement**  
      * Separate concept from serialization.   
        * XML stays the primary format, but the abstract model should be expressible in graph forms (e.g. JSONLD)  
        * TR: "TEI becomes a negotiator between a standardized vocabulary and an implemented data format"  
      * Context-sensitive content models (\<p\> in \<body\> versus \<teiHeader\>)  
      * Customization becomes the center  
        * A layered architecture: abstract model \-\> blueprints \-\> customizations (or chained blueprints)  
          * This adds another layer / complexity for how people think about the TEI. How does this make things easier?  
          * Bring forward that we need to clarify the abstract model  
          * Will people care about this?   
          * RV: It's advanced but not an expert-only topic, especially to the community that works with RDF ontologies  
          * SB: the new thing is that a blueprint permits a user to customize the abstract model. RV: that only works if the abstract model is more abstract than it is now. You can create divergent TEIs that are still working with the same concepts.   
          * TR: If I start from a registered blueprint that will make things easier. 

        * This will be part that JC will hit hard on – partly because it’s not that different from P5, really  
      * Reduce and rationalize  
        * Fewer elements  
        * Lighter structure (JT points to [schema.org](http://schema.org) as example)  
      * ODD processing must be replaced or radically simplified; above all, it must be clearly specified.  
      * Speed of updates to P5 may decrease as we devote energy to P6. Analogy of Python 2 and Python 3\. Co-eval development, but the way we develop P5 will necessarily change b/c we're working on / thinking about P6. This will take a long time before P5 is set to something like "maintenance mode."

    * **Main points of disagreement**  
      * Fresh start vs. continuity  
        * MH: “P5s junk DNA”  
        * EBB: recognizable P5 elements to be in P6  
        * P5 can be expressed entirely in P6 (as opposed to a P5 schema can be created from scratch using P6 specification mechanisms)  
      * Pace – do we have a “big idea”?  
        * More thinking and inspiration from outside domains or are we ready to proceed based on the main points of agreement above?  
      * Metadata/data separation.   
        * SB: wants it strict and sharply defined  
        * MH: "an already lost argument"  
        * RV proposed “scopes” at abstract level  
        * TR would push the distinction down to the blueprint level  
      * What "blueprint" even means, in practice  
        * JT: Like a customization  
        * RV: Like a middle layer (interpretations of the abstract model, targeting a format)  
      * Levels of prescriptiveness  
        * HBS "80% conformant" damages grant applications  
        * JC most users do not customize (source??)  
        * TR fears losing the "basic TEI literacy"  
        * MH and JT want constraint moved out of the abstract layer entirely  
      * P5 in P6?  
        * JC: it should be a design requirement (RV: this seems untenable to me)  
        * RV: it should be possible to build P5 as a blueprint out of a new abstract model (with additions at blueprint level like restoring numbered divs)  
    * Underdeveloped but important  
      * Better integration of existing standards  
        * Mentions of DTS, HTML \+ RDFa (MH, RV: "making TEI work in the browser immediately, without CETEIcean, would be wonderful"), MH "will need to be more explicitly linked to concepts defined in other ontologies and taxonomies," with machine-checkable rationales.  
    * Feasibility – is this worth it?  
      * SB: “if P6 is harder to maintain than P5, don't do it”  
      * median user (tei\_allers) gains little from a cleaner abstract model unless the tooling layer (Roma successor, blueprint repository system) is executed well.  
      * **P6's value case is currently strongest for maintainers and expert customizers, weakest for the silent majority.**  
      


* Slide prep subgroup  
  * EBB has launched a repo in TEIC space for the slide deck via [reveal.js](http://reveal.js) \+ gh-pages: [https://github.com/TEIC/timeForP6](https://github.com/TEIC/timeForP6)   
  * We edit the index.html and can do slides in markdown

