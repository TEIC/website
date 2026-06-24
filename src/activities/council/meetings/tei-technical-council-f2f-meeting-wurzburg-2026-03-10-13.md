---
title: "TEI Technical Council F2F Meeting in Wurzburg, 10-13 March 2026"
date: 2026-03-10
---

# TEI Technical Council F2F Meeting in Würzburg

10–13 March 2026

## Objectives
Shared understanding of what P6 means: We should be able to articulate what we mean and our points of disagreement, too.

## Discussion Topics

### From P5 to P6

* "P6" according to our GitHub repos: What have we indicated so far as desirable in P6, or possible only in P6? Review open and closed tickets for the key ideas introduced. What are the ideas, and which are still meaningful for us now?
 (Make a table, divide these up and review in small groups to determine which to prioritize.) 

    * Tickets marked P6: [Guidelines: Status: Reconsider for P6](https://github.com/TEIC/TEI/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Status%3A%20Reconsider%20for%20P6%22)  (6 open + 3 closed.

    * Tickets mentioning "P6" in the discussion:
        * [Guidelines: all tickets mentioning "P6"](https://github.com/TEIC/TEI/issues?q=P6) (remove subset "reconsider for P6") : 2 open; 20 closed.
        * [Stylesheet tickets mentioning "P6"](https://github.com/TEIC/Stylesheets/issues?q=P6): 1 open + 1 closed.


* Address P5's Models and Classes in their current state. 
    * A thought from CMSMcQ: "Schemas exist on a continuum from enabling to enforcing."
    * Where does P5 and its class system sit on this spectrum?
    * What would we want to change about this in P6? 


* Review P5's current class hierarchies including datatypes and macros:   
  * RV's interactive graph of TEI P5 class dependencies: [https://raffviglianti.com/tei-graph](https://raffviglianti.com/tei-graph) and an [easier to read class-dependency map](https://drive.google.com/file/d/135IM_mDt8948SBRz6274xmVpGloeNtkb/view?usp=sharing) (pdf)  
    * Some of P5 sore spots:  
      * When and why are groups and lists necessary. Is there anything to gain from specialized lists?  
        * The either/or policy in header (structure vs prose) frustrates many users  
        * Mandatory order of certain elements in the header also causes much frustration  
        * Make citations more easily interoperable (see DTS)   
      * Modeling changes:   
        * Do we want models and classes to persist, but not in a way that's compatible with P5?  
        * Or will we create an entirely new system?  
        * Wishlist:   
          * Formalization of generalization and specialization relations made it a way that guarantees consistency  
          * Formalization of meronymic/part-of relations (and here discuss the role of self-nesting and P5 inconsistencies)

----

## Tuesday 3/10

Meeting started @ 09:46 local time

### 1. Setting the stage for P6

See [TCW 09](https://tei-c.org/documentation/tcw09/) and what Council thought in 2006/2007 when P5 began.   

Discussion:   
   MH: That statement at the end of TCW09 has held us back from P6.  
   HBS: We have frustrations with P5 that we need to confront.  
   JT: We are, arguably, in the presence of new technologies (AI), but even if that doesn't change the use of XML, there's nothing being said in TCW09 that prevents us from moving to P6.  
   SB: Can we address our frustrations within P5?  
   RV: We need to be comfortable / confident about breaking things in the P5 class system, even if we don't call it P6. We can decide on the name of it later.  
   Discussion: there will be distress with breaking backward compatibility, so probably best to call it P6.   
   RV: P5 to P6 may be like Python 2\. 6 vs. Python 3\. Those who are ready will move to P6, but a robust community of practice can stick to P5 until ready.   
   MH: We don't have to do this quickly.   
   SB: P5 itself took several years.   
   MH: ATOP group hobbled by underspecification of ODD, yet another reason to start over w/ P6.   
   RV: It would be great to do ODD processing in more than just XSLT (e.g. XQuery, Typescript, Rust, Java).  
   TR: Consider graph database modeling for schema modeling?   
   MS: Invite people who think XML is not the only solution to consider for modeling TEI.   
   Discussion: mixed content  
   RV: Our use of XML is creating a certain kind of model that can be frustrating for those who don’t want to use it (e.g. an XML-specific way of breaking hierarchy may require more nodes in a graph than a simpler graph solution). But mixed content is central to TEI and XML excels at it.   
   UHK: If we were trying to describe the modeling without direct reference to XML it would need to be more general/abstract (as a model of text(s)?) in the Guidelines \- that would change teaching and learning TEI a lot (just stating this without saying it would be a good or a bad thing)

   Discussion of JSON/JSON Query vs. XPath/XQuery which works just fine with it. These are just methods of addressing maps and trees.  
      
   We don't really imagine people want to do text encoding in JSON.  
   People are interested in graph technologies for showing relationships across documents / annotations. Serializations always resolve to TEI XML. Can we envision a different kind of serialization that's more neutral  / friendly to graph representation?

   SB: We should back up and consider: What's the point of TEI now? Allow different projects to encode and share data. 

   TR: Can we write it by hand? (This is important to keep). Important to be able to learn encoding in relation to humanities projects: "to see what I mean". Editability threshold may collapse if things become too abstracted.

   MH: If we put HTML on the table: We can express the TEI abstract model in HTML.   
   RV: HTML also handles mixed content, and there's good reason why it hasn't died.  
   Making TEI work in the browser immediately, without CETEIcean, would be wonderful. 
    
* This is already partially done: a PR on TEI expressed in HTML \+ RDFa : A customization of TEI with RDFa attributes. An attribute in TEI isn't in the RDFa namespace: this was a small conflict, but really needed examples.  
* Could that be something we develop toward P6?  
* So much good tooling exists for resolving RDFa triples that we just need good documentation to show how to formalize the RDF statements with attributes.  
* JT: RDF is serializable in so many different formats: XML, JSON, etc. We should be working in that way, too with TEI.   
* Is the TEI a technical framework that we need to learn, or a standard for editing texts?

* MH: TEI abstract model:   
  \* concepts in metadata: That abstract model can be expressed in lots of serializations  
  \* document structure and content models: that has a distinct specification  
* MH: if we can prepare document modeling that is "relatively tree-like" that would mean we provide multiple models of inheritance  
* MS: Can other serializations be made cleanly from TEI?   
  * Graph people find it very difficult   
* JT: Contextual definition is not well handled in TEI now. When you specify what a \<note\> means according to your theory of a text, we have to wrestle this into a generic model.   
* RV: Do we want to make a priority of defining elements based on context? This might be a way to modify P5 that isn't completely at odds with the TEI's foundations.  
* Discussion of context-dependent definitions of elements  
  * Currently we can do it but we have to be very knowledgeable of a complex class system  
  * RV: What if we had a system where elements can have a set of contexts or "zones": If \<p\> descends from element X vs. Y it could have a distinct content model.  
  * JT: Who creates those zones? TEI is perceived as a group that governs what it means to research texts. But it should be representative of the community that works on a project.   
  * RV: but then where is the center?  
  * EBB: We need some TEI community to define best practice to be able to exchange.  
  * JT: TEI should NOT be an arbiter of defining what a "text" is. We provide examples only, possibilities, guidance.   
  * The problem of tag abuse: do we make it too easy for misappropriation to happen when we make things easier?  
  * HBS: TEI is more than this: We shouldn't just become a set of definitions about element names.   
  * How do we support / encourage flexibility in modeling?  
  * UHK: Do we have an idea of "prototypicality"? TEI proposes prototypical structures of documents (100% valid according to TEI schema), individual cases might deviate from that to a certain degree (XX% valid…)  
  * TR: reorganize the models according to abstraction: most abstract (like \<rs\>) to least abstract (\<persName\>); Work the other way that "collapses upward": different encodings can be interoperable at a higher level of abstraction (e.g., \<rs\>), even if different elements are used at a lower level of abstraction (e.g., \<persName\> vs. \<placeName\>)  
  * HBS: Hard for us to tell currently in P5 about the specialization vs. abstraction. Abstraction not always the most desirable.   
    * What if we could have a formalization / specialization that is consistent, makes sense and is affordable for people  
    * What if you could create an abstract class of your own from which your use of elements descends.  
    * Attach an element to different hierarchies depending on where they descend.    
    
* Why does the sequence of things in the teiHeader (fileDesc, encodingDesc etc) matter? What rules aren't really necessary b/c we're always accessing by XPath / processing anyway?  
* Expression of TEI in TEI?   
  * Guidelines chapters should continue in TEI  
  * Perhaps ODD can be written in other languages   
  * Problems of developers not understanding XML at all and not willing to learn.  
  * We can specify what ODD does in general terms. Our ODD spec can be expressed in TEI, but perhaps it can be modeled in Python, etc.   
  * We would have to write a new processing system anyway--a huge amount of work--but now directed to a new purpose that will be easier/more efficient.   
  * TR: Things that are implicit in P5 that we can now make explicit (and easier for processing.)  
  * SB: We think P6 will be expressed in TEI Guidelines. Do we think literate encoding still applies, the definition we create for an element or a class is written in the place where you discuss that class.   
    * MH: This will be more complicated now b/c of our new emphasis on context dependency: things don't have a single locus of definition.  
  * RV: You maybe no longer go to the Guidelines to learn how to encode a letter or a play. You instead go to a set of prototypes  
  * Guidelines not currently helpful at the macro level, and don’t link out to the schema  
  * How to enable multiple possible hierarchies and use TEI as a bridge

* We can seek prototypes  from the communities like [DRACOR](https://dracor.org/) and [DTA](https://www.deutschestextarchiv.de/) (DTABf)  
* Will there be a potential fall-out? Example of [EpiDoc](https://epidoc.stoa.org/): It might take some years for an established way of doing things to update  
  * But we can't be worrying about how to negotiate the transitions yet.  
  * We should try to make the best P6 we can.  
  * Perhaps P6 introduces some new possibilities for these groups without changing things too much for the encoders. Some work for the developers involved such as switching from ODD etc. but the experience stays mostly the same for end-users.  
* What does the DH community need from us?  
  * It's more about modeling scholarly interpretation rather than just exchanging texts on the web.  
  * Scholarly interpretation to machine actionable texts MORE than interchange now.  
  * It's never really been used for interoperability. Interchange yes (ability to read and understand the customization without consulting the developer.)  
  * With good exemplars maybe we do achieve interoperability.   
* Perhaps we're returning to first Poughkeepsie principles: metalanguage and prose and tools / ingredients to do the work  
* MS: speaks to difficulty of embedding other languages in TEI P5 (e.g. MathML). Geolanguages, too.   


### 2. TEI Community Views on P6: 
Over the course of P5 and especially in recent years, what has Council and TEI community said of "P6" in GitHub tickets? Small group "warm-up" activity for one hour: Read the ticket and don't try to solve it, but rather describe the gist of its perspective on P6. 

   See [Appendices: Table from Small Group Actvities: A. GitHub Guidelines and Stylesheets Tickets Marked or Mentioning P6](#a-github-guidelines-and-stylesheets-tickets-marked-or-mentioning-p6)


### 3. Do we need a P6 now, or had we better continue with P5? 

Working in groups, Council freewrites and later summarizes points in favor of continuing P5 vs. why we need to start P6. 
See [Appendices: Table from Small Group Actvities: B.  Why not P6 yet? Vs. Why P6 now?](#b-why-not-p6-yet-vs-why-p6-now) 
 
 ----

## Wednesday 3/11

### ODD processing without `@module`

[#2840](https://github.com/TEIC/TEI/issues/2840): When `@module` attribute is missing what should a processor do?

* elementSpec is not required Problem of address (the element on which `@module` is designated). What if an `elementSpec` doesn’t have a module attribute? 
* Two elementSpecs can’t both have ident in the customisation, will need to use altIdent
* MH: Now it is possible to be explicit about which module you are using. 
* Council discussion / decision: require `module` on *Spec elements. 
* Need to provide good documentation and also deprecation to guide and notify users about this change. We will have to explain to users now that every element belongs to one and only one module.
* RV: Can we please no longer have `@mode="replace"` in future ODD? Does it qualify as ‘magic’ in the TEI sense?

### TEI modeling challenges discussion
This discussion was sparked by issues with where `<addrLine>` is permitted to be encoded, and the encoding of personography/placeography in transcriptional contexts. 

* What is the point of the TEI? To facilitate the expression and interchange of an interpretation of a text. Would we be losing this in the “everything everywhere all at once” ideal for P6?

* RV and HBS: Does the ‘prototype’ of P6 become as prescriptive as the current system in P5?

* XML is an ordered hierarchy. 
* If at the end we're allowing everything everywhere all at once, what's the point of modeling classes. 
* But we have a ludicrous situation of `<address>` allowed in `<sex>` now in P5. If there can be such errors, there can be a way to fix this. 

* MH: We should not be concerned about where things appear, but instead we provide models and provide infrastructure. 

* But we immediately encounter issues with trying to achieve a base level of elements that are agreed by a consensus. The elements and features change depending on the interpretative approach ie. documentary ec.

* If we make a P6 with no hierarchy, only vocabularies, if everything is allowed, what is the point of having a schema?

* We perhaps missed a step in the process of creating P5, we have the vocabulary but need to add this missed step where users can determine what to use and in what order. 

Counterpoint that hierarchy is intrinsic for the standard.
We are NOT just a controlled vocabulary. In the end we're working with XML: What children are allowed in a parent element is part of our semantics. XML is allowing us to process our data and share it / review it. 

Discussion of feature structures - Characterising elements by the features that they have and share with other elements.

No one would ever use “everything, everywhere, all it once" in a single project. To make a chapter division available inside a sentence is part of the ability to modify an ODD schema: so it's a deliberate decision. 

80/20 rule: we can't cover 20% of the edge cases.
Subsetting from a prototype can make that easier.


We already say that TEI-ALL isn't usually appropriate but people use it anyway. 
Want to provide more specialised customisations beside TEI ALL and give some agency back to the community. 
RV: We’re already allowing “everything, everywhere, all at once” but there are many steps to achieving this in P5. Let’s condone customisation more, certainly, but we still need to have an official recommendation. 
MH: Creating a new element, making it a sub-class of an existing TEI component, makes the interchange process much easier because it can easily be resolved back to the TEI official recommendation. 
MH: We shouldn't be aiming to make just one prototype, but several.

RV: Provide a mechanism for users who need the specialisation but not remove the prescriptiveness that benefits the majority of the community.
SB: Having the community agree on a shared way to do things, organize chapters, etc. is beneficial.

If there's a mutiny we can be dethroned,  but we provide the infrastructure. 
Council being the arbiter of the rules/scholarly decisions and the infrastructure should give up one of those roles. 

HBS: If all we're providing is an ontology and some prototype customizations, community doesn't have room to adjust the customizations.


UHK: Conformance to prototypes need not be absolute? Would it be possible to indicate that a project can conform to a degree?
We have that now in a manner when you customise

MH: Prescriptiveness has been built into the infrastructure, this seems misguided. It should belong in the scholarly domain, NOT within the infrastructure itself. Carefully crafted prototypes which could be useful starting points for projects. (We are currently doing this but we could do it more effectively.)
RV: There needs to be a way to label prototypes as those offered by Council. 
UHK: Restructuring the current system and not getting rid of it completely: prototyping is different from an abstract, logical class system. As it is now, we do have some restrictions that aren't sensible. Context sensitivity for the element behavior / content is generally agreed on.

HBS: I don't see the advantage of the kind of modeling we were doing b/c we should be designing the prototypes. It's unclear how to make these customizations. 

"Everything, everywhere, all at once" is not the same as the abstract class system.

MS: It is very important to think of P6 not as us experts but as our students. They are still faced with choosing a prototype and come from many disciplines and have no idea what they're doing. 
EB: Providing prototypes: a prototype of an historic letter and a letter to encode will help. But we'll then need multiple prototypes for different kinds of letters. 
MS: Can we manage all of these prototypes needed?

HBS: Managing things by prototype seems reductive. The variety is so huge, that our set of prototypes can't be sufficient.
SB: Is it a similar issue with the Guidelines? 
Following MH, the Guidelines shouldn't have content models, but should be maintained in the prototypes.

HBS: Is this something we should question: Can we provide the infrastructure for this?

RV: Technically yes: if we do have a good class system that generates the schema: we're really re-imagining the system we already have. You can already create a perfectly valid TEI by customizing ODD. But we're going to rearrange the class system to make the processing easier and make TEI conformance make more sense to people.

SB: Defining content model in prototype rather than TEI Guidelines: Are we going to find that 80% of all users want the same content models?

MH: But we've already said, we want multiple context-sensitive content models. 

MH: Because customizations add and make classes, content models have fluidity...they are "almost arbitrary".

RV: Even in this new scenario, the TEI expert who consults the group--that relationship--isn't going to change. That process of change is still going to be done with expert guidance--for creating a new profile or prototype.

JT: If we shift our focus more to infrastructure, can we change that?

RV: We're going to be seen as the maintainers of viable prototypes.

JT: But we're being more explicit--rather than informally sharing ODDs, we can formally share them. The ODDs repository idea.

HBS: I liked calculating my level of conformance with a prototype, but from an administrative point of view, doing a grant application, if you say you're "80% compliant w/ a TEI prototype" even if you had a good reason not to comply, it might look negative in a grant evaluation. Even if you are contributing this prototype to the TEI community you will still need to get it approved first.

UHK: Maybe you don't report the number/percentage, just say it's "based" on the prototype. HBS: and then you could say that without using a teiHeader element!
EB: The 20% will be used to propose an update to a pre-existing prototype of the TEI. Confirms the position within the TEI Community and establishes with the review how you are addressing the specific needs of your research and contributing this actively to the TEI Community to align the TEI better with your research area.
The 20% nonconformance is the area of new research/innovation.

MH:  Throw away "conformance" and "compliance" and instead apply words like "aligned" and “extend”. 

RV: Authority of the TEI is still what people want. 
SB: Maybe entirely separate fields: the infrastructure to create prototypes and the maintenance / acceptance / adoption of the prototype: perhaps those roles shouldn't be approved by the same people. 
RV: approval based on safety, based on what could be broken. (as in code-injection).
SB: Add minimal criteria that TEI says you have to meet.
RV: Minimal info on the header to perform basic operations on a TEI file.
Hierarchy and attributes--the way they exist and don't exist on elements will matter. Some strict rules will need to be there. We need @xml:id and @xml:lang . 

JT: We’re evaluating the customization: Does the customization do what it says it's doing? 

RV: Can we adopt UHK's suggestion of calling them "blueprints" rather than "prototypes"?

EB: We currently work according to this principle, but call them "templates". Example: Building a letter template from bottom up for 17th-c. letters vs. medieval letters. The template they provide allows their IT to develop a front end based on an expected set of elements for them to process.

JT: Right now everything's ad hoc--just looking for resources that aren't easy to find. The TEI can make it easier for people to find helpful customizations. Smaller blueprints can be clear and deliberate and help users adopt these customisations. 

RV: All of those customizations will start from a TEI-ALL like prototype. Which is the central point that we’d like to remain in place for P6 to be a guiding principle through all the possibilities.

P5-all-like--can become the origin blueprint. 
NOT the everything-everywhere-all-at-once schema. 
There needs to be a TEI-generic as a "guiding star" (RV). 

SB: part of the point of the TEI Guidelines is to provide guidance. 

HBS: Where do you start when you have 300 optional prototypes

MS: I like the idea of the "blueprints"/"prototypes": but we need to take care of the curation: More prototypes for different kinds of things requires also figuring out good starting point. WHERE to start when you're beginning. Templates of varying levels of encoding granularity perhaps to match the level of the encoder?

EBB: We'll need a hierarchy of prototypes.

MH: A questionnaire that would direct you to the correct template/blueprint for your research needs. 

RV: Let everyone post blueprints. We can have something like "TEI-Council-Reviewed" 

TR: How many blueprints is feasible for the Council to manage?

EBB: Is it realistic that the Community would like to contribute their own templates? Not much response when asked to contribute their ODDs. How do we change this?

JT: Establish a Registry/Repository for these that can be pointed to and others to use. Value added to the contribution.

MS: One reason people don't contribute is b/c they aren't so good / "dirty laundry" of the project.

RV: If it's sent to our repository it becomes actionable. 
MH. And subject to review by reviewers.

RV: Infrastructure will provide value. 

TR: Don't we need a validator to test our cusotmizations? Maybe you're not going to post your ODD but just testing to make sure it's valid. Can we provide a validation test as opposed to storage?

Reading / reviewing ODDs will create sources of confusion. 
Some convergence to a few popular prototypes--

MH: If all are stored in different servers, might be seriously problematic.
HBS: What would the validation service look like/ how would it work? 
RV: Schema would need to be provided. Generate the RNG, etc. 

JT: Shift the work of the Council to be more on the Stylesheets and infrastructure and away from the P5 customisation.

HBS: How do we provide the tools to create the schema when we don't know what our schema declarative language will look like? If it's already close to RelaxNG w/ co-occurence constraints... This is worrisome: Are we facilitating that people do their own customizations with something not defined? 

RV: It will be "ODD-like" and will probably involve a lot of chaining.

HBS: You'll need to be able to read a full customization of a prototype. 
RV: that's how it is now. Modules, class system for elements and attributes, and the new concept of zones. 

JT: Help people winnow contents down or expand them. Allowing elements to go in alternative places always seems wrong. 

RV: Most people do just want to customize attributes. Not many really want to move elements they way JT and MH want to do.

EBB: But customizing in projects is a scholarly act and how TEI pushes beyond its limits. 

MH: We shouldn't be recreating P5, but allow for more of a separation of concerns.

EB: RV's right that most users learn from a generic starting point. 

JT: Give people better, more carefully constructed, templates that are specific to the various project’s needs. 

HBS: We need to be respecting customizations maintained by the community like EpiDoc

RV: We should still be maintaining these and they should be fine in the new system.

We'll still be working on these and the community will probably want us to be making changes on the "official ODD".


### Group P6 Modeling Activity
*Working with cards (on which we printed the names of each current TEI P5 element) or whiteboards / marker/paper*: Take a handful of ~20 elements from P5 and remodel them in terms of abstract classes. To become familiar with the complexity of how to group elements and attributes and abstract classes. To find criteria for organising elements. 

Summary discussion / representative examples of experimental classifications based on random "scoops" of elements:

* Example classifications from one group:
	* Markers 
	* Referential
	* Naming
	* Segmentable

* Examples from another group’s categorizations:
	* Resource
	* Named Entities
	* List
	* Feature / Detail

Discussion: 

* "Resource" classification from one group is similar to "Segmentable" in another.
* Are classes for elements somewhat arbitrary? Or do they work?


For details on more experiments see [Appendix C. Element SubGroup Classification Exercise](#c-element-subgroup-classification-exercise)

#### Discussion following the group activity on redefining class structure for P6

SB: Is the division of these classes based on their semantic meaning or their features/function (works the same as other elements)?  
MH: The Feature/Detail level is where it gets very difficult. For example, would `<date>` be placed here? Yes.  
RV: Probably need an Entity level as well as a Named Entity level for elements such as `<address>`?  
MH: Need to distinguish between markers as there will be markers that will be markers only and markers which will designate other structural features?   
JT: The idea of an abstract element is preferable to an abstract class. For instance \<place\> and `<org>` would have the abstract element `<entity>`  
Some elements can occur in both the `<teiHeader>` and the `<text>`, such as `<p>` and `<bibl>`. However, the difference between `<p>` and `<bibl>` is that `<bibl>` changes its meaning depending on whether it occurs in the `<teiHeader>` or the `<text>` section, while `<p>` doesn’t.  
SB: Are we heading towards a scenario where inside prose (however we chose to define this) these elements have a ref attribute, but inside a listLike context these elements have content?

#### Discussion of class structure on the element level

RV: Need to figure out what we can get from the class structure at the element level.  
JT:  What are the fundamental elements (core elements from P5) that you need? What's irreducible?  
RV: Examples of `<ab>`, `<seg>`, and `<anchor>`  
SB: Generally we don’t nest `<ab>` so perhaps `<div>` instead for self-nesting?  
JT: `<note>` is also very valuable as a default element  
HBS: `<note>` is analytical as opposed to transcription: `<ab>`.  
SB: But then why not `<ab type="analytical">`?

In the beginning was `<element>`. Everything is an `<element>`.

`<catRef>` as special kind of note and a pointer.   
`<anchor/>` is a locus but `<ptr/>` points to somewhere else

Term for grouping of elements in P6: **“scope”** instead of "zone".

**Structural fundamentals**

`<ab>`  \-----\> `<div>`, `<p>`, `<note>`  
`<seg>` \----\> `<ref>`, `<name>`, `<hi>`   
`<anchor/>` \----\> `<ptr/>`, `<witEnd/>`, etc.

OR

\[ABSTRACT CLASS NAME\] used just for naming / grouping; it has no real bearing on the hierarchy   

<span style="color:green; border:1px solid green">scope</span> in green with solid border 

<span style="color:red; border:1px dashed red">(==removedElement)</span> in red with dashed border

<pre>
[TEI]
│
├── [SEGMENTATION]
│   ├── div
│   │   ├── lg
│   ├── ab
│   │   ├── p
│   │   ├── seg
│   │   │   ├── [POINTER]
│   │   │   │   ├── ref
│   │   │   │   │   ├── ptr
│   │   │   │   │   ├── link
│   │   │   │   │   ├── rs
│   │   │   │   │   │   ├── biblRef
│   │   │   │   │   │   ├── name:<span style="color:green; border:1px solid green">referring</span>
│   │   │   │   │   │   │   ├── placeName
│   │   │   ├── del<span style="color:red; border:1px dashed red">(==delSpan)</span>
│   │   │   ├── name:<span style="color:green; border:1px solid green">naming</span>
│   │   │   │   ├── label?
│   │   │   │   ├── head
│   │   │   ├── note
│   │   │   │   ├── desc
│   │   │   │   ├── gloss
│   │   │   │   ├── label?
├── anchor
│   ├── witEnd
│   ├── milestone
│   │   ├── lb
│   │   ├── pb
│   │   ├── cb
│   │   ├── gb

NAUGHTY CORNER
bibl
gloss?

Undeveloped class tree:
EL
│
├── SEGMENT
├── DESCRIPTOR
</pre>
   
Scoping? 

If a seg-like element is self-closing, then it can behave like an anchor or pointer. 

A seg becoming anchoring is due to a structural problem. Otherwise it would be text-bearing.
Think of `<delSpan>` as an example of this: It's really JUST `<del>` that had to be shaped differently. 
SB: "The class of things that handles overlap was a bad idea!"

Metadata elements?

#### Discussion of multiple hierarchies/ inheritance

What's the difference between a referencing string and a name?


    label, head


    name --> refers to person, place, entity

* `label` reduces to `rs`
* `head` reduces to `name`

* Why isn’t `label` reducing to `head`?
* Shouldn’t `label` belong under `rs`?

* What would `desc` and `gloss` reduce to? MH and EBB: Definitional is not referential.  

* HBS: `note` is a descendant of `seg` and now `gloss` and `desc` are both descendents of `note`.

* EBB: Do we achieve ‘the laterality’ or multiple inheritances from zoning or scoping?

* MH: How likely is it that the community would agree on this newly proposed tree structure of elements?

* RV: Let's try to see if there's a way to make scoping work.

 ----

## Thursday 3/12
 
### Review / Summation of yesterday's discussion
 
 1. Although we see no reason to consider moving away from XML as our serialization/editing format, we would like to express the abstract model in such a way that it is **not dependent on the distinction between elements and attributes in XML**, reflecting expression in “objects” and “properties”, for example. Properties could be expressed as attributes, for instance, or as child elements. That way, transitioning to another format that is not XML will be facilitated.

2. We would like, *if it proves practical*, to build our abstract model on **a real class inheritance system** under which any given class could be resolved back to a more generic class. This would in theory enable automated simplification of documents for the purpose of interchange, because a processor should be able to take a specific element/object/attribute/property and walk up the inheritance tree in order to find the most generic equivalent that a receiving system understands. There may be abstract classes in that tree, and it’s not yet clear how this would work. In addition: if multiple inheritance is allowed for, a strategy (precedence rules? depending on scopes?) is needed to decide on which path to take up the hierarchy.  
   (An **alternative** would be to describe objects/properties in terms of common features instead of a strict classification system (e.g., using feature structures), with the advantage that it would make grouping easier and the disadvantage that there would probably not be an easy way for automated simplification and it might not be directly compatible with the establishment of content models)

3. We will ensure that it is straightforward to provide **different content models for the same object/element in different contexts**, and will adopt that practice in all the “**blueprints**” (see below). The suggested mechanism for this is that affected objects/elements will declare different content models, each assigned to different “**scopes**”; then objects/elements will also declare their active “scopes”, and any object/element included in their content model will appear with the appropriate content model from their collection of available content models. The details of this are still not fully worked out.   
	* For instance: **scope definition** (who defines the scopes? Are scopes fixed by us (the TEI, e.g., in council maintained blueprints) or can they be defined by the community/individual projects?)  
	* scope **compatibility** (can we ensure scope compatibility across blueprints?   
  		* RV: This is a good question because if scope is beyond the abstract model, it's bound to be less compatible outside of subscription to / reuse of someone else's (including the Council's) blueprints  
	* Should we make scope-declaration required?)   
 		 * EB: For example: if an element appears in a context where no matching scope is declared, does it fall back to a/its default content model, raise a validation error, or accept anything?  
	* Scope **inheritance?** If a subclass inherits its parent’s scope declarations, does it also inherit its content models, or should these be “redeclared”?.    
	* The "scope-ability" of objects/elements would be part of the abstract model, but the actual scoping would not be generalized. Scoping should be built into the abstract model, to an extent.   
	* Scopes would have to be defined within projects, but we might have some recommended / broadly accessible scopes that seem useful in many projects.  
	* Can these be easily translated into a schema language? If we get too abstract, it may be difficult. Counterpoint: Perhaps a better definition of the abstract model will make it easier to develop a good schema. EB: That would include inheritance rules, scope-definition rules, and subclassing-mechanisms. Having strong "first principles" makes for better schemas.   
	* Underspecification is a serious blockage for the atop group now. So knowing what the problems are with current P5 ODD processing will help. Out of this work we will probably make a much better ODD.   
	* However, the difficulty will be in expressing schemas for the new approaches to customization. Can we make this less of a technological load for customizers and Council?   
	* Much of our technological burden is about "why isn't this element allowed \_\_\_?" Our work will shift.   
	* Core blueprint and starting point for users should have stronger, clearer guidance for decision making. 

4. Rather than providing a tei\_all which becomes the yardstick for compliance and which many projects inevitably adopt despite our warnings, we will make an effort to provide **a larger and better array of "blueprints" to replace the current exemplars**. We want to emphasize customization as a core principle for using TEI. To encourage customization, users should be enabled to generate a schema bottom-up that can be refined/expanded further, starting from instances of encoded text (e.g., through ODDbyExample.xsl).

5. Blueprints would be complete working customizations with full documentation (consisting of a template TEI file for encoding, a schema and an ODD), organized into **a blueprint repository** (ideally persistent and versioned) along the lines of a package management system (e.g. PyPI or NPM), with a front-end that enables you to use a questionnaire approach to find the blueprint(s) most appropriate as starting points for your project.

6. A repository would provide a central place for the community to locate helpful blueprints for customization. Projects and scholarly communities would be encouraged to **submit their own blueprints** to the repository, which would be accepted provided they meet certain criteria (documentation etc.) and have **appropriate descriptors** enabling them to be found via the questionnaire. Some blueprints would have the Council’s mark of approval. Blueprints should be citable with DOIs. Blueprints/ODDs are treated as first-class research output and their circulation within the scholarly ecosystem is encouraged.  
	* Review and acceptance can be facilitated by requiring push to a branch with actions/tests.  
	* But some classification and organization will be required.   
	* Responsibility for schemas involves the community. Perhaps a "TEI-approved" blueprint needs to involve a scholarly peer review infrastructure we develop (not limited to Council).   
	* Maybe we don't have to make this a requirement to allow people to contribute to the repository.  
	* Perhaps there's a free area that's a bit chaotic but could be a pre-peer review open resource.   
	* “Council recommended” blueprints might conflict. Might not be a problem.   
	* If limited community participation, perhaps limit our expectations. But we should promote this as Open Science. Council members can launch this and there will probably be interest in organizers of large projects. Could be integrated into graduate program work for peer review experience.  
	* Possibly  "Council recommended" is distinct from other forms of review/approval. 


7.   Customizations would start from an existing blueprint, and **extensions would be created by sub-classing an existing item** in the tree; for example, a project wanting a `<sarcasm>` element could subclass the `<seg>` element, enabling automated resolution back to something like `<seg subclass=”sarcasm”>` for interchange.   
	* EB: Will subclassing inherit the parent’s scope-sensitive content models? E.g., will `<sarcasm>` inherit the scope-sensitive content model of \<seg\> per scope?  

8. Distinguish between (1) working on a formal specification of the abstract model vs. (2) working on the processing pipeline. We need a clear definition of inheritance rules, scope resolution rules, and subclassing semantics, before working on the implementation. 

TEI becomes two different things: the abstract model AND the scoping / blueprints. Both are to be maintained and versioned. We may need to develop new community infrastructure. 

### Council Activity: Reduction and Splitting Exercise 

Start with our [Miro board of TEI elements](https://miro.com/app/board/uXjVMopTUHY=/?share_link_id=7939356576) (as well as classes and macros). (This was made a couple of years ago, but we have just added the new `<post>` element and macro.specialPara.cmc so that it is up to date. 
* Identify what no longer seems necessary after our discussions of classification and scoping.   
* Identify elements whose content models can be "split" by distinct contexts. 

#### Discussion of elements under Destroy

* MH: `titlePage` etc since it has never worked properly  
* EBB: `listPerson` etc: no reason for specificity of `listPerson`, `listOrg`; just using list or (HBS) maybe new element listEntity  
* SB: Considering the user \-- is it easier for encoders to have fewer, limited options?  
* JT: Is a `listEntity` the same as a list, and do we need a grouping element?  
* JT: `docEdition` and `geoName` \- we know intuitively that these element names are all instances of specifications for what is a subclass of another element i.e. `<name type=”geo”>`  
* SB: If you want a set of elements to behave differently depending on their context (header or text) then you have to define these behaviours, how feasible is this to achieve?  
* The idea while P3 was being developed is that the number of allowed attributes had to match the number of allowed values?   
* MH: the constraints will apply at the blueprint level. If you’re unable to express your assertions in a formal language, you should be able to express them in prose.   
* SB: A constraint expressed in prose *within* a constraint spec takes priority over the schema. If a (prose) constraint is *not* expressed in the constraint spec, the schema takes priority. (See issue [\#2875](https://github.com/TEIC/TEI/issues/2875)).  
* UHK: `biblFull` and `biblStruct`, `bibl` is sufficient.  
*  `biblFull` does something distinctive from `bibl` and has been around since P1 and it serves the same function as the `teiHeader`  
  * `biblFull` can and often does contain a `teiHeader` . For that reason, we don't really need a `biblFull` element. Just allow `fileDesc` in `sourceDesc`.  
* JT: If the element itself declares a new context, then we have to ask whether it is truly necessary? m  
* HBS: Allow all the elements in `biblStruct` within `bibl` but not enforce an order of use on the user.   
* SB: `titlePart` the semantics are an issue here, possible confusion here between titles of external works and the title of the title page of the work being encoded.  
* SB and MH: `title` descends from both `name` and `rs` where it can have different meaning.  
* HBS: Whenever there is an element suffix `Part`, the solution should be to enable that particular element to self-nest.  
* SB: the discussion about the information in the teiHeader vs the information in the transcription is similar to the distinction between speech acts and spoken speech:  
  * The `<title>` in teiHeader `titleStmt` is a declaration like a speech act. I claim this document is called "Hello world", but this doesn’t mean that this is the title of the document I’m transcribing  
  * Elsewhere `<title>` refers to external documents. And `<head>` refers to the title of the current work or portion of it.

### Council Activity: Create a blueprint 

 *Template: Council selects a Tom Hanks Letter Typewritten on a 1934 Smith Corona typewriter as a basis for constructing a simple experimental blueprint  Source: [https://flashbak.com/tom-hanks-writes-great-letter-1934-smith-corona-typerwriter-58609/](https://flashbak.com/tom-hanks-writes-great-letter-1934-smith-corona-typerwriter-58609/)*
 
*Working all together, with EBB encoding, guided by the group, we began by modeling the document in XML potentially possible for TEI P6 but incompatible wtih TEI P5*
 
#### First encoding
 
 ```xml
 <?xml version="1.0" encoding="UTF-8"?>
<tei6>
    <metadata> </metadata>
    <text>
        <dateline>
            <date when="2012-07-13">13 July 2012</date>
        </dateline>
        <formeWork>
            <formeWork rend="underline">PLAYTONE</formeWork>
            <formeWork>
                <seg>Film</seg>
                <seg>Television</seg>
                <seg>Music</seg>
                <seg>Typewriters</seg>
            </formeWork>
        </formeWork>
        <salute>Dear <persName>Chris</persName>, <persName>Ashley</persName>, and <rs ref="#dg"
                what="person" quantity="multiple">all the<lb/> diabolical
                        <options><sic>genuies</sic><corr n="1">geniuses</corr><corr n="2"
                        >geniis</corr><corr n="3">ingenues</corr></options>
                <!--   An alternate encoding <w>gen<choice><sic>ui</sic><corr>ius</corr></choice>es</w>-->
                at <orgName>Nerdist<lb/> Industries</orgName></rs>.</salute>
   
        <p>Just who do you think you are to try<lb/> to briibe me into an apperance on your<lb/> ‘thing’ with
            this gift of the most<lb/> fantastic Cornona Silent typewriter made in 1934?</p>
 
        <p>You are out of your minds if you <lb/>think… that I… wow, this thing <lb/>has great action… and
            this deep <lb/>crimson color… Wait! I’m not so <lb/>shallow as to… and it types nearly
            <lb/>silently…</p>
   
        <p>Oh, OKAY!</p>
        <p>I will have my people contact yours <lb/>and work out some kind of interview <lb/>process…</p>
        <closer>Damn you all to hell, <signature><lb/>Tom Hanks</signature></closer>
    </text>
</tei6>
 ```
 
#### Discussion
 
 * SB: `<fw>` should be `<formeWork>` in P6 as clarity should take precedence over abbreviations. Also, is *forme work* a term that is still in use today? If not, we should create a more appropriate element name.  
* Encoding date and time: should there be a general usage `<temporality>` element or a `dateTime` element for combining both date and time?   
* Does it require a `dateLine` element wrapper too to represent the structure of certain texts like letters.  
* HBS: `dateLine` conveys the formality of letter writing practices.  
* MS: `dateLine` can be useful as a wrapper, especially as a `place` is usually included on the same line as the date in the letter.  
* JT: `dateLine` is a typographic feature and has different semantics to the date element.  
* HBS and EB: What are the research questions and editorial perspective guiding our encoding of the letter, that will determine what elements we would need.  
* EB: change the `<teiHeader>` section to `<metadata>` for P6, it’s more readily recognizable and meaningful.  
* Does text remain or should the element name also be changed?  
* Attributes for detailing the things contained by the referencing string element `<rs>`  
  * `type` should not be used, it has been incorrectly used since P2 or so. SB: type should be used to describe the *element* (in this case rs) and not the thing being referred to. Similar argument for not using `kind`. Prepositions such as `of` and `to` are not as clear. `what` isn’t used anywhere else, could we use it instead?    
* Discussion of possibly renaming `<choice>` as a wrapper of `<sic>` and `<corr>`  
  * `<split>` or `<fork>` or alt(ernative) or parallel, though Council doesn’t agree on the alternative names  
  * SB: Note that when discussing this kind of “split” or alternatives, we have to keep in mind the aspect of order: in which order should the children of choice be processed/read? JT: subclasses can be ordered; if we go up higher in the tree the children could be order-independent. For example: sic and corr can be ordered, while their parent elements parallel/option are unordered.   
    * `<abbr>` and \<`expan`\>  
    * `<orig>` and `<reg>`  
  * RV: This kind of construct with `<choice> <sic>` and `<corr>` can also occur within a word too and this often leads to whitespace issues and how can we approach this problem? Automatic segmentation automatically puts `sic` into a new line  
    * MH: You could resolve this by wrapping the word with the `<w>` element.	  
  * RV: Need to add the abstract class naming that we are suggesting while creating the blueprint  
  * Discussion of `<lb/>` and `<space>`  
    * `<lb/>` (in typescripts\!) is a carriage return whereas `<space>` is representing significant space in a text  
    * Can we assume that `<p>` always contains a `<lb>` in itself? No, for example in scriptio continua, where a paragraph metamark could indicate the start of a new paragraph even though it doesn’t start on a new line.  
    * UHK \- Can this differentiation between lb and space relevant for deciding on keeping either `ab` or `seg`?  
  * `<peritext>` element for elements such as `<fw>` or `<formeWork>`  
  * `<app>` will be a subclass of the abstract `<options>` class  
  * Issue with `<lem>` and `<rdg>` belonging to the abstract `<options>` class  
    * The `<lem>` and `<rdg>` elements are special in respect to their content models and are different feature wise from the other child elements of `<options>` (formerly `<choice>`)  
  * Discussion of `<date>` and `<time>` and whether they should belong to an abstract `<temporal>` or `<measure>` element class. UHK: [TimeML](https://timeml.github.io/site/index.html) \- Markup language for Temporal and Event Expressions  
    * MH: The distinction between elements and attributes is something that we need to overcome, for instance, currently `duration` exists in the TEI as an attribute but not an element.  
    * Prompts important considerations on how to subclass or reduce elements effectively and in a logical order.  
    * MS: Could the XSD datatypes supply a suitable template for us to achieve consensus on this  
    * Agreed resolution below:  
        
      `Measuring: quantifiable`   
       	`measure`   
       		`Temporal:datable` 

      `date`   
      `time`   
        
  * How to resolve `<form(e)Work>` to `<ab>`?  
    * MH: Missing an intermediary class that could be called `<peritext>`  
    * EB: Letterhead should be included in the `<form(e)Work>` element and `<peritext>` abstract class.  
    * `<form(e)Work>` should be renamed  
    * Possible resolution below:  
        
      `Peritext:mixedContent`  
      `formWork`

      `letterHead`  
        
  * Potentially rename `<ab>` to either `<textualComponent>` or `<contentObject>`  
    * `<textualComponent>` and `<metadataComponent>` subclasses of `<informationObject>`  
      * This seems problematic because metadata is composed of text, and the metadata aspect of this might be seen as a property of that text.   
          
* Properties that seem important in the abstract model:  
  * Some elements subscribe to a property of mixed content and some do not.  
  * Possible contenders for the name of the all encompassing elements for mixed content: `Texty` and `notTexty` or `textLess`.  
  * `Texty` is a term derived from a technical term such as **truthy** which in JavaScript context is a value that is likely to be considered true when encountered in a Boolean context. Similarly, `texty` is a value that is likely to be considered true when encountered in text context.
 
#### Same data with potential classes and "traits"

*RV next experimented with preparing a more abstract modeling of the document encoding.*

```xml
<?xml version="1.0" encoding="UTF-8"?>
<tei6>
   <metadata>
      
   </metadata>
   <text>
       <!-- Capitalized terms are abstract classes; they may or may not resolve into new elements -->
       <!-- ab is a placeholder to be replaced by either an abstract class or new element. <textualComponent> <contentObject> <thing> á la schema.org? -->
       <dateline--ab>
           <date--measure--Measuring when="2012-07-13">13 July 2012</date--measure--Measuring>
           <time--date--measure--Measuring>13 July 2012</time--date--measure--Measuring>
           <measure--Measuring/> <!-- time–Temporal–measure–Measuring & date–Temporal–measure–Measuring is under consideration as well -->


<!-- “texty” is inspired by truthy/falsy in JS: a value that is considered true/false when encountered in a Boolean. In practice it means that elements with this property will be able to contain text nodes. -->


           Thing?:texty
           ├── Measuring:quantifiable
               ├── measure
                   ├── Temporal:datable
                       ├── date
                       ├── time


       </dateline--ab>


       Thing?:texty
           ├── Peritext
               ├── formWork
                   ├── letterHead


       rdg:transparent (a property that indicates that the content is determined by the closest texty ancestor)


       <letterhead--formWork--Peritext--ab> <!-- form(e)Work to be renamed -->
           <letterhead--formWork--Peritext--ab rend="underline">PLAYTONE</letterhead--formWork--Peritext--ab>
           <letterhead--formWork--Peritext--ab>
               <seg>Film</seg>
               <seg>Television</seg>
               <seg>Music</seg>
               <seg>Typewriters</seg>
           </letterhead--formWork--Peritext--ab>
       </letterhead--formWork--Peritext--ab>


       <salute>Dear
           <persName--name>Chris</persName--name>,
           <persName--name>Ashley</persName--name>, and
           <rs what="person" ref="#" quantity="many">all the
           <lb/>diabolical
               <choice--Options> <!-- also app -->
                   <sic>genuies</sic> <!-- also orig, reg -->
                   <corr>geniuses</corr>
               </choice--Options> at Nerdist
               <lb/>Industries
           </rs>.
       </salute>
      
       <p>
           Just who do you think you are to try
           <lb/>to briibe me into an apperance on your
           <lb/>'thing' with this gift of the most
           <lb/>fantastic Cornona Silent typewriter
           <lb/>made in 1934?
       </p>


       <p>
           You are out of your minds if you
           <lb/>think… that I… wow, this thing
           <lb/>has great action… and this deep
           <lb/>crimson color… Wait! I'm not so
           <lb/>shallow as to… and it types nearly
           <lb/>silently…
       </p>


       <p>Oh, OKAY!</p>
      
       <p>
           I will have my people contact yours
           <lb/>ad work out some kind of interview
           <lb/>process…
       </p>
      
       <closer>
           Damn you all to hell,
           <signature><lb/>Tom Hanks</signature>
       </closer>
   </text>
</tei6>
```

  
Taking the example above and trying to model it from an Aspect-Oriented Programming perspective:

* Aspect (e.g., “Texty”, “Documentary”) 		\>\> Interface  
* Element (e.g., paragraph (or p), date) 		\>\> Class  
* “This element *has* this aspect” 			\>\> Realisation  
* “This element *is a* more specific kind of class 	\>\> Inheritance

In a UML visualisation (generated with [PlantUML](https://editor.plantuml.com/uml/LL5BRkCm3Dth5DeFaYCCCeFPpB90Bi38pp41YJ8eActGzkvDx2YnTjJxF3sGXsAaLbDqZiMW8mNu8pxiwZ-Tzxy2YGzPZ5YytM0lUK1ntrlvMoKn7fbE4QlhGh7YFbHXwyN_SgW9OgIF7nGXwr3yF5qB1uf-15bLzBR_OX3ZB1HRCLL6yI6dL8K36L_W4qXOpdSldOef1VCXKYd-Y3HdRUx3-mHP1ids5sDMjDUVqQ3tWDKtaE7X2HGX0sr8uzJ8MH6uS9ONEqDvsTcgiEkC5nbX1fr0mrDEIcUbUNBkMNQ___gzdgF7kfsxfUDkTuERo2tDUiYrFjlK7jiSnxqAhZbDwTopQ1VKWvjxENU033N57m00)): 
 
 <figure>
 	<img src="../img/letter-blueprint-plantUML-2026-03-12.png" alt="PlantUML visual diagram based on the encoding provided in this section" />
 	<figcaption>PlantUML diagram representing our blueprint model. "C" indicates class, "A" indicates aspect, and "I" indicates specific inheritance from a class.</figcaption>
 </figure>
 
 The visual diagram is based on the following PlantUML code:

 ```
 interface Texty {
  +can contain text nodes
}

interface Quantifiable {
  +value
  +unit
}

interface Documentary {
  +records physical features  
}

abstract class Temporal {
  +@when
  +@notBefore
  +@notAfter
  +@...?
}

abstract class NamedEntity {
    +xml:id
}

class persName {
    +@role
}

class date {
  +@calendar
}

class peritext {
  +@type
}

class letterhead

class p

class name

Temporal ..|> Texty
Temporal ..|> Quantifiable
date --|> Temporal
time --|> Temporal
persName --|> NamedEntity
peritext ..|> Texty
peritext ..|> Documentary
letterhead --|> peritext

p ..|> Texty

name ..|> Texty

persName ..|> Texty
 ```
  
  
 ----

## Friday 3/13  

###  Proposed adjustments to Thursday's example abstract model and blueprints
 
*This continues discussion of the modeling and blueprints we developed at the end of the day on Thursday.*

* Add `realizeAs=”Element”` or `realize`   
  * MH: should there be any distinction at all in the abstract model? Should it be left simply as abstract?  
* Should `elementDef` be `classDef` instead?   
* SB: If you’re not `texty`, you can’t have an attribute:  
  * Example: element `date` vs attribute `date`  
  * Occur in different positions in the tree  
  * Possible solution to prevent this confusion: Need another namespace (“meta” and “content”?) to clarify when information is a property or content.

Proposal for defining `trait`: 
Abstract model:
`classDef TRAIT:texty(:meta|:transc)`

Blueprint:

* Content for metadata:
`<content element=”trait” scope=”meta”>`

* Content for transcription:
`<content` element`=”trait” scope=”transc”>`

#### Developing abstract models for P6

  * People can experiment with trying to apply the abstract model in something other than XML (e.g. as a graph) even to test that it works as a true abstract model.   
    * Properties to link/join can be serialised in XML as elements (`<join>`)  
  * Concretizations of the abstract model are schemas. Can the abstract model be itself converted to a concrete schema? Blueprint customization of the abstract model leads to schemas.   
  * Separation of concerns of the mechanism for generating abstract models from the mechanism for generating schemas.   
  * Other languages that customize ODD can generate schemas with completely different abstract models, using our schema-generating mechanism.   
  * HBS: using abstract modelling languages to formalize our abstract model might mean that we could already create schemas out of them with existing tools, e.g. [Balisage Conference Proceedings](https://teamscale.com/hubfs/26978363/Publications/2009-engineering-document-applications-from-uml-models-to-xml-schemas.pdf)   
  * RV: The definition of attributes, do they get named in the abstract model?  
    * Properties and values  
    * Concepts behind the attributes should be there in the abstract model  
    * JT: We should describe precisely what it means for elements and attributes to be equivalent. E.g. is `<element when=”1990”/>` equivalent to `<element><date when=”1990”/></element>` (or even `<element><when>1990</when></element>`  
    * We may need a namespace or something like prop:when to distinguish when added information is a property and not from the source text.  
    * We should research tools already available for this work (For example: [UML](https://books.xmlschemata.org/relaxng/relax-CHP-14-SECT-3.html)).   
    * The differentiation of data from metadata needs to be sharply defined in the abstract model to prevent confusion.  
    * Proposal to use a flag “transcription/transcriptional/transcribed” to signal in which cases an object or property is used to mark text of the original document (vs. used to structure metadata/annotated information added to the texts)  
      * `<birth date=”2021-10-11”>`Washington D.C.`</birth>` \-\> here, `@date` is not used in a “transcriptional” way: it’s metadata  
      * `<birth><date>`11.10.2021`</date></birth>` \-\> here, `<date>` is used in a “transcriptional” way: it’s annotating information in the source.  
      * One could allow one or the other or both in a blueprint/schema.  
  * Idea of “meta” vs. “content” namespaces  
  * Question of whether this distinction should be clear at the document level or not: if it depends on the schema and must be defined there.   
  * Allowing for editorial specificity may become easier: Unpacking things that used to be sayable only in attributes into elements makes editorial documentation more expressive. \-\> e.g., if one is not sure about the date given in `@when`, if it is expressed as an element instead, `@cert` can be used on `<when>`  
  * UHK: How to resolve the scenario when text nodes added by an editor as annotation and text already present in the source – both have content  
  * Remember (via Patrick Sahle) that all of our transcription and markup is meta / editorial after all. Agreed that there is transcription (which yes, is our interpretation) and added meta-information. We just simply cannot state that content is transcription and meta-information is markup.   
  * Note elements in a transcription are a good example of metadata information embedded in transcription. The differentiation needs to be clearly defined--as properties in the abstract model.   
    * HSB: attributes on `<note>` can render as elements if \<note\> is “editorial”, but only as attributes if `<note>` is “transcriptional”. RV: we still need to identify that the “attributes” are not of the same nature as `<note>` in order to make this differentiation.  
  * TEI system needs to be able to permit scholars to create classes like "editorial"... `<note type="editorial">` vs. `<note type="authorial">`. If an editorial note is applied in a transcriptional area, change the default property to editorial.   
  * Might have to adjust content models at the blueprint level.  
  * JT: Scopes determine inherited traits when you are a text node?  
    * Trait being used to markup how traits were being indicated. How to specify when the trait isn’t necessarily meta?  
    * MH: Traits and scope seem to be overlapping considerably, should both traits and scopes be available at the abstract level and then customised?  
    * HBS: If we have a clear idea of which classes are meant to be metadata and which are to be meant to be transcriptional, and in the example of trait – where it could operate in both contexts – then we should have a property that states this duality in the abstract model.  
    * Suggestion: have certain elements that set a scope, for example: header has flag “meta”, and this propagates to all elements below it, and text propagates transcription. If projects do not like this, you change the flag in your blueprint and explicitly declare the scope.   
    * JT: Some elements that are designated as “scoping” elements, like islands, that create scopes. Few elements will have only one scope.   
      * SB: Same as how we are using xml:lang and a namespace, very used to working this way in XML.  
  * HBS: We should be using the tools already designed for class / property definition: this will be so much easier.   
  * UHK: several levels of conceptual relationships: we do need to be clear to us on which level we're modeling these.   
    * Options: [StarUML](https://staruml.io/),   
  * MH: subclasses that may be inherited may be a clean way to do this.  
  * Abstract model provides building blocks for the blueprints.   
  * MH Abstract model is assertions about documents / editorial practice. “Islands” where editorial interventions take place, for example, of text transcription takes place  
  * RV: this makes TEI special compared to other data models and standards: that the model incorporates/represents these assertions about documents/texts/editorial practice  
  * SB: we should not reinvent the wheel…  
  * HBS: We should use a tool designed for this work   
  * RV: UML has been written about (see Elena Pierazzo in Scholarly Editing book), may be helpful for us.  
    * MH: suggested activity: Try inventing a "toy language" with UML first to see how it works.


### Discussion of the Guidelines prose and the schema

USE chapter now says:
  * If there's a discrepancy between the schema and the Guidelines, this needs to be addressed.   
  * Does this need to change? According to our P6 discussion, we have been saying the Guidelines language should take precedence over the schema.   
  * MH has opened a ticket about this and tagged as "reconsider for P6": [\#2875](https://github.com/TEIC/TEI/issues/2875).

### Planning our next steps

Let's set some manageable tasks in motion for the near future.

#### Establish a workspace

* Create [Sandbox](https://github.com/TEIC/p6-sandbox) repository   
  * Add README (information available on the [P6 dev TEIWiki](https://wiki.tei-c.org/index.php/P6-dev))  
  * Assign tasks and GitHub Project management  
  * Council decides to make the repo private for now and reevaluate at F2F at Vancouver.  
  * Looking for resources like   
    * UML modeling tools for experimentation (see [UML tools Wiki](https://en.wikipedia.org/wiki/List_of_Unified_Modeling_Language_tools)).   
    * XMI: XML metadata exchange.   

#### Council Homework assignment after this F2F
 
 1. Thinking which languages would be appropriate for P6, how to build?   
 	* HBS: Modelling exercise will result in us quickly realising that meta and content become a class  
    	* MS: We have to make clear and describe what we want and summarise what we know we want now. The tools don't matter until we achieve this consensus and clarity.   
    	* JT: Reach a shared vocabulary of what we're doing.   
 2.  Review the TEI Guidelines   
	* Flag what sections can be kept for P6  
 	* Identify what sections need to be rewritten and to what extent (some will need to be rewritten from scratch).
      
3. Regular reporting / review in Council meetings  
  * Find a regular time for ALL of Council to have a 90 minute meeting twice per month: one for P5 and one for P6 where ALL of Council is present.  
  * Add a standing agenda item of a summary of the P6 meeting to the Council meeting to catch up Council members that might miss P6.


#### Explore funding options for P6 

  * A good grant application pitch is that  
    * (1) the abstract model can be used by other processing models, edition projects, AI (especially for the lazy people or people seeking to test "emerging technologies"), as a logical addition to the HTR/OCR tools and workflow, and  
    * (2) that the blueprint model promotes interchange.   
  * EBB: We need to prepare an elevator pitch for Board to help them conceptualize it with us, and for Board to help distill into a grant application.   
    * Implementing object-oriented abstract model.

* Funding for P6 development: What would help us to work together?  
     * Work with Board on funding proposals 
   
#### Engage the TEI community
   
* Plan a Community Call / Discussion on alternative ways of modeling TEI  
* Revisit the [P6 Panel Proposal](https://docs.google.com/document/d/1X_ozsb89701eBeDxeAWVd8U2JH2hXEQ9YACGhv6eL5Y/edit?tab=t.0) for the TEI 2026 Conference, and review the questions we planned to discuss there:

  * Why is it time for P6? Why should we not just continue to add feature requests to P5?  
    We're ready to rumble\! (Seriously) The landscape has changed and we can engage people who wouldn't want to do manual encoding before... The landscape of available resources/expressions has changed....

* New solution for context-sensitive content modeling (Worth differentiating between co-occurrence constraints and context-sensitivity.)  
    Blueprints \+ community involvement   
    Abstract model principles so far clarified...  
    Seeking time to continue refining this work.

* P6 has been called for for a long time: recognized need over at least the past decade. See [P5 Report from 2006](https://vault.tei-c.org/Talks/2006/p5report.pdf), and P6 Wiki article from 2017\.  

* We're going to be able to implement TEI P5 with better tools and better modeling now. 

 * We aren't breaking from XML but the abstract model we develop will make alternative serializations (RDF, graph models) possible.   What about \<overlhappens/\>  (overlap issues)? Blueprint models will choose a hierarchy to prioritize (consistent with how we've approached it before, implemented with more options/flexibility for scholars to customize).

* Priority on guiding our community to their own scholarly customizations. 

#### Continued support of P5 while developing P6

* As we develop P6, we plan to continue supporting P5. What will that mean?  
  * What changes in our maintenance of P5?  
  * It can't be nothing, but do we say, "every ticket will be evaluated based on whether it's a short fix for P5 or better developed in P6"?  
  * Encourage PRs for us to review. But we won't be implementing everything in P5 now.   
  * Encourage ODD customization  
  * Between now and TEI Conference Annual Members meeting is a "grey area": between previous commitments and future plans.   
    * Announce at Annual Members' Meeting that we're stopping new features until we start P6. This puts pressure on us.   
    * SB: A lot of the feature requests are actually issues with ODD.  
    * Whatever solution is arrived at will look very differently from ODD we recognise now . 
   
* Will there be a period of accepting feature requests to support P5 while developing P6?  
  * See grey areas announced above.  
  * Prioritize community tickets over our own.  
  * STOP fishing for things to fix in P5 UNLESS you're looking for things to do in P6.

* Review our own Guidelines Chapters with an eye to what we preserve for P6 version and what must be changed.

* Will the elements we know from P5 persist in P6? Are we going to try to reduce or expand the number of elements?  
  * We will REDUCE  the number elements in P6.
  
* Will models and classes persist in P6, but not in a way that's compatible with P5? Or will we create an entirely different system of organizing TEI elements and attributes?   
  	\* SEE ABSTRACT MODEL   
              \* Previous modeling "informs" the present modeling. 

* Where and how is P6 being developed? How will our supporting infrastructure change?   
  \* Toy sandbox research phase for now.   
  \* We will begin hosting two meetings per month to support P6 development now while continuing work requested on P5.

* Will there be parallel serializations alongside XML?  
  \* YES . We will demonstrate that it's possible to serialize the abstract model in alternative ways. 

  Our main goal is to formalize the abstract model.     
  
### Proposed principles for P6
  
  1. We are the TEI: the TEI is a community standard that underscores openness and community involvement  
  		* We locate development and customization of schemas at the center of the TEI’s approach  
  2. We do not re-invent the wheel. We value expertise and remain responsive to shifting needs and concerns. 
  		* However, we do not tie ourselves to a single technology. 
  3. We provide core infrastructure for expressing scholarly knowledge for texts, enabling robust systems for scholarly communities to express, share, review, validate, collaborate, extend, and challenge expertise
  4. We consider interchangeability of texts, knowledge, and expertise as the key purpose of the TEI, its infrastructure, and its design
  
    
 ---
   
## Appendices

Tables from small group activities
   
### A. GitHub Guidelines and Stylesheets Tickets Marked or Mentioning P6

   * Group A:  HBS, RV
   *  Group B: SB, TOC, MS
   *  Group C: MH, EB, UHK
   *  Group D: JT, TR, EBB

   | *Group* | *Ticket \#* | *What is the idea about P6, or what's relevant to P6 here?* |
| :---- | :---- | :---- |
| A | [\#2843](https://github.com/TEIC/TEI/issues/2843) | Attributes need a more flexible class system, too. In P6, attributes need to be treated as “first class citizens” just like elements. **Council discussion**: How about datatypes, too?In Relax NG, attributes were already "first class citizens" but we lost track of that in P5.Sometimes we're not clear on what should be an attribute vs. an element.Perhaps we can define elements and attributes according to the same system and allow a thing to be either element or attribute. Starting from an idea in principle can help express in multiple serializations.  MH: "Makes the transition to P7 even easier\!" |
| B | [\#2090](https://github.com/TEIC/TEI/issues/2090) | Argues for per-document default attribute values. Should definitely be included in P6 but not relevant for today’s discussion. **Council discussion:** Idea is to allow for setting a declaration mechanism in the teiHeader: is this good explicit context modeling, and good idea for P6?  Relation / difference to ODD chaining Raises question of relation between the document and the ODD. JT: Taxonomies are often wrapped into ODDs in the form of e.g. valLists; perhaps valLists should be taxonomies? Dropping ODD entirely and chain Relax NG instead? What are the advantages of ODD over RelaxNG (Documentation?)? A resource for generating Relax NG TEI can't be only about its schema. Raises arguments for a TEI schema and validator Relax NG provides speed/ease of validation What if TEI schema language were totally expressed in XPath? It would be slow to do Schematron for ALL of it. "Not invented here": If there's a good standard that works we should use it.  Would the TEI still exist even if we didn't have validating engines? Yes.  If we can generate complicated Schematron from a simpler source... “Vibe-coding a TEI schema”. |
| C | [\#2000](https://github.com/TEIC/TEI/issues/2000) | Shows difficulties arising from over-policing content models in P5. Also shows the need for context-sensitive content models. (app use in tables) **Council discussion:** Is there a mechanism that we could use in RELAX NG  In the context of critical apparatus, it means teasing apart and validating the individual versions (“horizontally”) as well as the apparatus (“vertically”).  JT: Do we have to constrain it all, or can we rely on scholarly peer review. A lot of the TEI can be automated, but what cannot be automated are the prior decisions, e.g., why are you encoding the text, what’s your theoretical model? Need to review the [24.4.6](https://tei-c.org/release/doc/tei-p5-doc/en/html/USE.html#CFCATSCH) and update accordingly: What do we now want to define as TEI conformance? |
| D | [\#1923](https://github.com/TEIC/TEI/issues/1923) | Technically complex change to resolve relative small inconsistency in ODD processing (attRef using `@key` and not `@name`) that would break backwards compatibility  |
| A | [\#1744](https://github.com/TEIC/TEI/issues/1744) | Content models need to be context-dependent – this seems to be a must-have for P6. The ticket includes suggestions on how to do this, including allowing \<elementSpec\> to define multiple contexts based on a @predicate containing an XPath – which we think should instead be abstracted as much as possible. **Council discussion of "zones" or “interface” or "behaviors" or "grouping mechanism" or "purpose" or "context" or "mode"(?)**: related to object-oriented programming. "Context" problematic b/c of its association with document structure--that's not what this is about. `seg.meta``seg.ling``seg.hi` \*\*\*A class structure with inheritance:rsnamepersName | orgName`seg.rs` Maybe we don't need ab if we have p defined in this manner. Can we do this with attributes, too? Define them in this new way of "everything, everywhere, all at once" . Can every attribute be serialized as an element? Try it and see if it will work. Maybe there will be conditions to guide the decision of expressing something as an attribute or a child element.Definition of class discussion: Class as a formal definition of an object in programming (not thinking of class as in the TEI sense). Usually instantiate a class into an object? 1\. Classes should descend  2\. Attributes could likely be expressed in this descendant hierarchy.   |
| B | [\#1400](https://github.com/TEIC/TEI/issues/1400) | P6 should not have numbered divs.Group D: We think this is where the marking of tickets explicitly for P6 begins. **Council discussion**: Given what we've been discussing so far: we can imagine including numbered elements in a specific **abstract class** by users.\<q\> vs. \<quote\> vs. \<cit\> begin to appear as distinct purposes of handling quotation marking, depending on the choice of abstract class.Content model might look simple but compile into something more complex in Relax NG.Discussion of inheritance: If we want the specific subclass (`persName` but not `name`), we get the subclass by pointing to it, and we lose access to name. But what if we want `rs` and `persName`? The user can define their own class to include what they need.How does multiple inheritance work? \<note\>  How are modules participating in this? They could be properties (private?) of classes. \*\*\* We can express all the previous versions of TEI as profiles in P6. P3 can be expressed as a distinct profile of P6. Discussion of abstraction in the Guidelines: Feature structures as the most abstract of all the models?Can everything in TEI be expressed in this way?What is \<rs\>? Not really a feature structureWe may not want to define what's "inline" or "block" anymore. But we could define "text-bearing"? \<app\> is an interesting complexity: not appropriate to call it a "block". And \<list\> can go in a \<p\> now in the TEI. It's the editorial and semantic function that should define these classes.  |
| C | [\#1175](https://github.com/TEIC/TEI/issues/1175) | Provides one of the principles we should\[?\] articulate at the outset of working on P6: what do we mean by modal verbs and terms such as “mandatory”? |
| D | [\#2744](https://github.com/TEIC/TEI/issues/2744) | We need guidance to clarify and simplify the use of attributes as pointers. P5 has too many ways to do things that mean the same thing with different attributes (e.g. `@ed` vs `@edRef` ). Attributes for pointing and referencing are generally not well specified in P5. What do we use for single strings vs. multiple pointers? Broad principle: How much does the TEI grow in order to specify different use-cases and how much is up to the user to document and define? Does the TEI proliferate attributes or allow for refinement of a single attribute?  |
| A | [\#367](https://github.com/TEIC/TEI/issues/367) | For the most part this is additional evidence that we need to rethink the class system. The ticket focuses on the content model discrepancies between place, org, and person. |
| B | [St \#235](https://github.com/TEIC/Stylesheets/issues/235) | How to process an ODD into Relax NG. Having 1 repo for P6. |
| C | [St \#569](https://github.com/TEIC/Stylesheets/issues/569) | Superficially relevant in that if we keep \<altIdent\> or something like it, it would be as an attribute. AND WE WILL DROP DTDs, so this particular issue would not arise. |
| D | [\#2001](https://github.com/TEIC/TEI/issues/2001) | Our prefixDef is the same as privateURIScheme in the rest of the world. TEI has reinvented the wheel without consulting a more standard / universal definition.  |
| A | [\#2779](https://github.com/TEIC/TEI/issues/2779) | This ticket is about problems with Debian packages and their interdependencies. It highlights how P6 will need its own infrastructure that may look different from what we have now.  |
| B | [\#1921](https://github.com/TEIC/TEI/issues/1921) | \<schemaSpec\> restricted to a small group of elements. Done, issue closed. Relevance for P6: Yes, \<schemaSpec\> should be a member of model.resourceLike, but that is a small detail unimportant to this weeks’ discussions. |
| C | [\#2157](https://github.com/TEIC/TEI/pull/2157) | Supports the idea of many good model ODDs for people to start from (so that not everyone is starting with TEI all) – but we should also consider something like ODDbyExample to go along with this. (idea of a questionnaire for people to build a starting point ODD suited to their texts/projects; potentially further customising this with a tool like ROMA 2.0; have a tool to check schema against actual encoded documents later in the workflow to suggest updates to the ODD) |
| D | [\#1964](https://github.com/TEIC/TEI/issues/1964) | Not a big deal. Just a bad example and closed. One thing to note though is the LB notes that deprecation of teiCorpus *would* be a P6 change. |
| A | [\#1841](https://github.com/TEIC/TEI/issues/1841) | This ticket is a specific example of how it can be complicated to work across classes to move elements around. This is relevant to P6 because of the need to rework the class system but also, in MH’s words: “\[I\] dream of \[a\] P6 \[where\] there's none of this nonsense. Things can appear wherever they want.” |
| B | [\#1626](https://github.com/TEIC/TEI/issues/1626) | Request to accept the xml namespace for Standoff proposal. Also closed. Main query: “If validation under egXML can be divorced from validation in general” Relevance for P6: “Does the lack of widely available tools for handling NVDL make this a P6 proposal?” |
| C | [\#1519](https://github.com/TEIC/TEI/issues/1519) | Reminds us that we need to be clear on how version labelling and numbering should work in P6. Issue can remain closed. |
| D | [\#1323](https://github.com/TEIC/TEI/issues/1323) | Gist: This is a ticket recognizing that Council had introduced an ODD-breaking change but didn't announce it to the community. We're stagnating in P5 if we can't accommodate backwards compatibility as soon as we make a class change. MH in 2015: "We're in a situation, then, in which no-one wants to talk about P6 because that has to wait for a game-changing platform shift such as moving away from XML; but neither are we allowed to make improvements to the current P5 which affect backward compatibility even slightly. A better recipe for moribundity and stagnation could hardly be devised." SR in reply: "As regards P6, the TEI needs an infrastructure to support non-backwards-compatible releases, using a forking mechanism. Its going to be quite tedious to set up a complete parallel working setup, but i would suggest its worthwhile to get the mechanism in place." |
| A | [\#1273](https://github.com/TEIC/TEI/issues/1273) | More evidence of a broken class system, but this has to do more with modules than classes, e.g. what determines whether an element goes to core or transcr, why not both? Quote: “there is no useful way to change this without module fragmentation which we've postponed until P6.” |
| B | [\#516](https://github.com/TEIC/TEI/issues/516) | \<tagsDecl\> needs to be explicit if it documents all tags in a document. No consideration for P6. Also closed. |
| C | [\#481](https://github.com/TEIC/TEI/issues/481) | Related to [\#2685](https://github.com/TEIC/TEI/issues/2685). `hand` and `handShift` can be considered two ways of expressing the same phenomenon. Prompts the question: are there clear advantages of encoding a hand/handShift in two different ways? In the context of P6, the question becomes: what are our principles about allowing multiple elements/attributes/encoding ways (e.g., wrapper vs. milestone vs. stand-off markup) for a more or less similar thing?  |
| D | [\#1099](https://github.com/TEIC/TEI/issues/1099) | Does this wiki, especially the part about the object inheritance model, contain most of what we've been discussing about P6 this morning? [https://wiki.tei-c.org/index.php/P6-dev](https://wiki.tei-c.org/index.php/P6-dev) EBB: note concept of "module fragmentation" (re splitting date/time from names/places/etc) |
| A | [\#375](https://github.com/TEIC/TEI/issues/375) | The ticket is about adding new types for \<list\>, which isn’t inherently P6-related, but it also points to an old P6 desiderata page worth looking at [https://wiki.tei-c.org/index.php/P6-dev](https://wiki.tei-c.org/index.php/P6-dev)Some highlights:\* rename msDesc elements towards a more generalized use\* an “object inheritance model”  \* context-based definitions\* apparently drop @type from list for some reason |
| B | [\#346](https://github.com/TEIC/TEI/issues/346) | Also closed. Proposal to split date and times and names and places into a new TEI chapter. (Probably a good idea to do in P6 — one chapter for names & entities, another for dates & times.)EBB: note concept of "module fragmentation" |
| C | [\#314](https://github.com/TEIC/TEI/issues/314) | The topic was mostly about backward compatibility when restricting a previously-lax content model; reminder that P6 will also have to have clear rules and principles about backward compatibility.  |
| D | [\#275](https://github.com/TEIC/TEI/issues/275) | Speaks to the problems of understanding bibliographic citation: confusions of `<biblFull>`, `<biblStruct>`. Ticket wanted to deprecate `<biblFull>`, but we (subgroup) are recognizing this as expressing a certain kind of citation suitable for digital projects.  Ticket expresses frustration about too many different elements but "can't do anything about it now."What kinds of bibliographic citation should we be supporting in P6 and can we do this without proliferating elements.  |
| A | [\#140](https://github.com/TEIC/TEI/issues/140) | Concerns around backwards compatibility for iso\* attributes. In 2008 it was thought that moving to P6 would be the only time to do this, though we have had deprecation mechanisms since, so this may not be a very P6-specific issue. However this brings up how new attribute classes may need be determined based on their datatype even if they are expressing the same concept (e.g. time as a concept but rendered as iso, custom, tei-defined, etc)  |
| B | [\#56](https://github.com/TEIC/TEI/issues/56) | \<del\> to be added to macro:specialPara like \<add\>. Issue is closed. Relevance for P6, users sometimes need to delete things larger than phrases and this leads to hierarchical issues. Is \<delSpan\> sufficient for achieving this in P5. For P6, we need to think of a different method(s) |
| C | [\#20](https://github.com/TEIC/TEI/issues/20) | Not relevant. |




<div style="border: 1px solid black; background:#fce5cd; padding:1em; margin: 1em;";>
<em>The following is an AI-generated summary based on the table above. What ideas are emerging about P6? (Claude AI Sonnet 4.6).</em>

<p><strong>Class &amp; Attribute System</strong></p>
<ul>
<li>Rework the class system entirely — attributes should be &quot;first class citizens&quot; like elements  </li>
<li>Allow things to be defined as either elements or attributes, with possible serialization of any attribute as an element  </li>
<li>Context-dependent content models (using <code>@predicate</code> with XPath or similar abstraction)  </li>
<li>Object-oriented inheritance model for classes, with descending hierarchies  </li>
<li>Multiple inheritance support, with user-defined classes combining what they need</li>
</ul>
<p><strong>Schema &amp; Validation</strong></p>
<ul>
<li>Drop DTDs entirely  </li>
<li>Explore expressing TEI schema logic fully in XPath/Schematron, potentially generated from a simpler source  </li>
<li>Keep Relax NG for speed/ease of validation, possibly chain it directly instead of ODD  </li>
<li>Clarify what TEI conformance actually means (update section 24.4.6)</li>
</ul>
<p><strong>Simplification &amp; Consolidation</strong></p>
<ul>
<li>No numbered divs (e.g. <code>div1</code>, <code>div2</code>)  </li>
<li>Reduce redundant attributes and encoding options (e.g. <code>@ed</code> vs <code>@edRef</code>)  </li>
<li>Reconsider bibliographic elements (<code>biblFull</code>, <code>biblStruct</code>) to avoid proliferation  </li>
<li>Revisit <code>hand</code>/<code>handShift</code> as example of duplicate encoding paths  </li>
<li>Drop or rethink &quot;block&quot; vs. &quot;inline&quot; distinctions in favor of semantic/functional categories</li>
</ul>
<p><strong>Backwards Compatibility &amp; Versioning</strong></p>
<ul>
<li>P6 needs clear rules and infrastructure for non-backwards-compatible releases, possibly a forking mechanism  </li>
<li>Previous TEI versions (e.g. P3) could be expressed as profiles within P6  </li>
<li>Clear version labeling and numbering principles needed</li>
</ul>
<p><strong>ODD &amp; Tooling</strong></p>
<ul>
<li>Consider model ODDs as starting points rather than requiring everyone to start from TEI All  </li>
<li>Revisit ODD chaining; consider whether <code>valLists</code> should become taxonomies  </li>
<li>Build better tooling (e.g. updated ROMA, ODDbyExample questionnaire)  </li>
<li>One unified repo for P6</li>
</ul>
<p><strong>Philosophical/Structural Principles</strong></p>
<ul>
<li>Define clear use of modal verbs and terms like &quot;mandatory&quot; in the Guidelines  </li>
<li>Decide how much TEI should specify vs. leaving to users to document  </li>
<li>Address &quot;module fragmentation&quot; — reorganize chapters (e.g. names/entities, dates/times as separate chapters)  </li>
<li>Peer review vs. automated validation: acknowledge limits of what schemas can enforce</li>
</ul>
</div>



### B.  Why not P6 yet?   Vs.  Why P6 now? 

| *In this column, write reasons why we should not bother with P6.* | *In this column, write reasons why we need P6 now?* |
| :---- | :---- |
| It will be painful and time-consuming. | The P5 schema has become unmanageable. |
| Confusion over multiple standards; fracturing of community | P5 should be historicized.  |
|  | People could be attracted to TEI through P6 (in the sense of: “it’s a straightforward and intelligently designed entry point into text encoding” instead of “it’s an overwhelmingly huge collection of different elements you can use with several ways to encode similar things”).  |
|  | End users might be used to P5 and not willing to change at first (even just out of practical reasons), but the moment they run into its limitations or constraints, or notice that there are different ways of encoding the same thing, the need for P6 becomes more evident. |
|  | (From subgroup D discussion): The P5 is like an old house with a crammed attic and some mold problems. We should be taking things from the old house to a new house with bigger windows and more doors. (Cf. Emily Dickinson, ["I dwell in Possibility."](https://www.poetryfoundation.org/poems/52197/i-dwell-in-possibility-466))  |
|  | Developing P6 may help us to find new users of the TEI. We are not outdated.  |
|  | TEI should not be about policing textual practice and interpretation; overly constrained schemas that rely on ossified “common sense” understanding of text alienates users, requires significant continuous updates to maintain currency (and be responsive to shifting understanding of text), and will always be insufficient |


<div style="border: 1px solid black; background:#fce5cd; padding:1em; margin: 1em";>

<p><em>AI-generated summary based on notes above (<a href="?tab=t.0#heading=h.ozdh1xgxdzg7">Setting the stage for P6</a>) (Claude AI Sonnet 4.6).</em></p>
<table>
<thead>
<tr>
<th>Reasons not to bother with P6 yet</th>
<th>Reasons to develop P6 now</th>
</tr>
</thead>
<tbody><tr>
<td>Frustrations with P5 could potentially be addressed within P5 itself (SB)</td>
<td>The TCW09 closing statement has actively held back progress toward P6 (MH)</td>
</tr>
<tr>
<td>P6 doesn&#39;t need to happen quickly — P5 itself took several years to develop (MH, SB)</td>
<td>The class system in P5 needs to be broken in ways that are incompatible with backward compatibility, making a new version name necessary</td>
</tr>
<tr>
<td>Those not ready for P6 can maintain a robust community of practice around P5, as with Python 2 vs. Python 3 (RV)</td>
<td>ODD is underspecified, hobbling groups like ATOP — a fresh start would allow better ODD processing in languages beyond XSLT (MH, RV)</td>
</tr>
<tr>
<td>Mixed content is central to TEI and XML handles it well — no compelling technical reason to abandon the current approach (RV)</td>
<td>New technologies (AI, graph databases) and the desire for multiple serialization formats create pressure to rethink TEI&#39;s foundations (JT, TR)</td>
</tr>
<tr>
<td>Abstraction away from XML would significantly change how TEI is taught and learned, with uncertain results (UHK)</td>
<td>Context-dependent element definitions are currently possible but require deep expertise in a complex class system — P6 could make this tractable (RV, JT)</td>
</tr>
<tr>
<td>Over-abstraction risks collapsing the &quot;editability threshold,&quot; making hand-encoding and humanities learning harder (TR)</td>
<td>HTML and RDFa offer a path to making TEI work natively in the browser without tools like CETEIcean (MH, RV)</td>
</tr>
<tr>
<td></td>
<td>The current class system makes it hard to distinguish specialization from abstraction, and a cleaner formalization is needed (HBS)</td>
</tr>
<tr>
<td></td>
<td>TEI should support multiple serializations (XML, JSON, graph-friendly formats) more cleanly — something P5&#39;s architecture wasn&#39;t designed for (MS, JT)</td>
</tr>
</tbody></table>
</div>


### C. Element SubGroup Classification Exercise

`1.` SubGroup Classification Exercise (MS, HBS, RV) 

```
List
│
├── Pointer group
│   ├── listRef
│   ├── (listRelation)
│   ├── (specGrp)
│   ├── (linkGrp)

Resource
│
├── facsimile
├── (text)
├── (standOff)
├── (TEI)
│
├── Resource Part
│   ├── floatingText
│   ├── lg
│   ├── (div)
│   ├── (sp)

Named Entity
│
├── org
├── (person)
├── (place)

Statement
│
├── recordingStmt
├── publicationStmt
├── (change)

Feature (or Detail)
│
├── pubPLace
├── seal
├── publisher
├── terrain
├── region
├── support
├── floruit
├── affiliation
├── msContent
├── addrLine
├── colloc

Encoder Operation
│
├── revisionDesc
├── (fileDesc)
├── (encodingDesc)
│
├── Encoding Declaration
│   ├── fsDecl
│   ├── fsConstraint
│   ├── fDecl
│   │
│   ├── Verbose
│   │   ├── variantEncoding
│   │   ├── transcriptionDesc
│   │   ├── prefixDef

Analysis
│
├── s
├── gloss
├── (phr)
├── (seg)
├── (w)
```

`2.` SubGroup classification exercise (SB, EBB, TR, TOC)

```
Interpretation

Classification
│
├── usage
├── trait
├── per

Referential
│
├── mapping
├── bibl

Naming
│
├── ident
├── geogName
├── actor

Segmentation
│
├── text
├── div
├── entryFree
├── castItem

Markers
│
├── milestone
├── anchor
├── watermark
├── witEnd
├── gb
├── cb
├── g
├── pb
├── lb
├── handShift

Medium/a
│
├── notatedMusic
├── facsimile
├── pause
├── sound
├── set

Transcriptional
│
├── interaction

Bridgework
│
├── app

```



