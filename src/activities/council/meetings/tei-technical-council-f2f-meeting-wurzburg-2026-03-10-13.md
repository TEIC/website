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
*.       [Stylesheet tickets mentioning "P6"](https://github.com/TEIC/Stylesheets/issues?q=P6): 1 open + 1 closed.


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
Over the course of P5 and especially in recent years, what has Council and TEI community said of "P6" in GitHub tickets? Small group "warm-up" activity for one hour: Read the ticket and don't try to solve it, but rather describe the gist of its perspective on P6. [Groups \+ Table](?tab=t.0#heading=h.iouk4wcyb5vu)

   See [Appendices: Table from Small Group Actvities: A. GitHub Guidelines and Stylesheets Tickets Marked or Mentioning P6](#a-github-guidelines-and-stylesheets-tickets-marked-or-mentioning-p6)


### 3. Do we need a P6 now, or had we better continue with P5? 

Working in groups, Council freewrites and later summarizes points in favor of continuing P5 vs. why we need to start P6. 
See [Appendices: Table from Small Group Actvities: B.  Why not P6 yet? Vs. Why P6 now?](#b-why-not-p6-yet-vs-why-p6-now) 
   
   
   ---
   ## Appendices: Tables from small group activities
   
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
| A | [\#1744](https://github.com/TEIC/TEI/issues/1744) | Content models need to be context-dependent – this seems to be a must-have for P6. The ticket includes suggestions on how to do this, including allowing \<elementSpec\> to define multiple contexts based on a @predicate containing an XPath – which we think should instead be abstracted as much as possible.**RV \+ Council discussion of "zones" or “interface” or "behaviors" or "grouping mechanism" or "purpose" or "context" or "mode"(?)**: related to object-oriented programming. "Context" problematic b/c of its association with document structure--that's not what this is about. `seg.meta``seg.ling``seg.hi` \*\*\*A class structure with inheritance:rsnamepersName | orgName`seg.rs` Maybe we don't need ab if we have p defined in this manner. Can we do this with attributes, too? Define them in this new way of "everything, everywhere, all at once" . Can every attribute be serialized as an element? Try it and see if it will work. Maybe there will be conditions to guide the decision of expressing something as an attribute or a child element.Definition of class discussion: Class as a formal definition of an object in programming (not thinking of class as in the TEI sense). Usually instantiate a class into an object? 1\. Classes should descend  2\. Attributes could likely be expressed in this descendant hierarchy.   |
| B | [\#1400](https://github.com/TEIC/TEI/issues/1400) | P6 should not have numbered divs.Group D: We think this is where the marking of tickets explicitly for P6 begins. **Council discussion**: Given what we've been discussing so far: we can imagine including numbered elements in a specific **abstract class** by users.\<q\> vs. \<quote\> vs. \<cit\> begin to appear as distinct purposes of handling quotation marking, depending on the choice of abstract class.Content model might look simple but compile into something more complex in Relax NG.Discussion of inheritance: If we want the specific subclass (persName but not name), we get the subclass by pointing to it, and we lose access to name. But what if we want rs and persName? The user can define their own class to include what they need.How does multiple inheritance work? \<note\>  How are modules participating in this? They could be properties (private?) of classes. \*\*\* We can express all the previous versions of TEI as profiles in P6. P3 can be expressed as a distinct profile of P6. Discussion of abstraction in the Guidelines: Feature structures as the most abstract of all the models?Can everything in TEI be expressed in this way?What is \<rs\>? Not really a feature structureWe may not want to define what's "inline" or "block" anymore. But we could define "text-bearing"? \<app\> is an interesting complexity: not appropriate to call it a "block". And \<list\> can go in a \<p\> now in the TEI. It's the editorial and semantic function that should define these classes.  |
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
<th>Reasons NOT to bother with P6</th>
<th></th>
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