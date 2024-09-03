---
title: "Teleconference 2017-03-30 13:00 UTC"
date: 2017-03-30
---
# Teleconference 2017-03-30 13:00 UTC
**Present**


Syd Bauman (SB)


Sarah Stanley (SS)


Hugh Cayless, chair (HC)


Elli Mylonas (EM)


Martina Scholger (MS)


Elisa Beshero\-Bondar (EB)


Peter Stadler (PS)


Raff Viglianti (RV)


Alex Bia (AB)


**Apologies**


James Cummings (JC)


Magdalena Turska (MT)


Meeting began @ \~13:05Z, ended @ 14:29Z.



Agenda
------


The theme for this meeting is putting to bed long\-term, difficult tickets. We will start with [\#1431](https://github.com/TEIC/TEI/issues/1431 "#1431"), and progress to [\#1453](https://github.com/TEIC/TEI/issues/1453 "#1453")if we don't run out of time. We should also briefly discuss whether to do an XSLT release and accompanying oXygen plugin release soon, to get in front of the new oXygen release.

### Brief reports


* Proposal for a new “graph technologies” SIG
	+ PS reports some folks approached him saying they want to make a Graph Technologies SIG, the idea (perhaps) being to represent TEI information in a graph.
	+ Wait for proposal to read and decide
* Any objections to Lou Burnard's proposals for ch. 23: [http://lists.lists.tei\-c.org/pipermail/tei\-council/2017/024202\.html](http://lists.lists.tei-c.org/pipermail/tei-council/2017/024202.html "http://lists.lists.tei-c.org/pipermail/tei-council/2017/024202.html")? Lou wants to proceed on the green tickets soon.
	+ Council has until Thursday April 6 13:00Z to read over Lou’s green tickets and comment. Then he should go ahead and make changes, taking comments into account.




### 




### Clarify how to encode short\-form citations \#1431


Bibliography is hard.
The consensus from the ticket seems to favor using \<bibl\> with @id to encode your long\-form "back of the book" bibliographic entries, and then to use \<ref\> and @target to wrap short citations in the text. This isn't the only type of short\-form citation that occurs though. Short\-form citations can occur in the absence of a fuller bibliographic reference. Short citations might refer to abstract "works" rather than to specific edition (e.g. *Hamlet*, *Hom. Il.*) or they might refer to a specific edition using a conventional syntax (e.g. *IG I³ 40*). All of these might occur in a text without a 'referent' elsewhere in the text. The suggestion has been made that these kinds of bibliographic references are akin to the kind of name—named entity relationships that occur with \<persName\> and \<person\> or \<placeName\> and \<place\>, and that therefore @ref might profitably be added to \<bibl\> to accommodate this kind of relationship. Others argue that @corresp is a satisfactory way to do this. But, perhaps crucially, the referenced entity might not be defined in TEI. \<bibl ref\="[http://catalog.perseus.org/catalog/urn:cts:greekLit:tlg0012\.tlg001](http://catalog.perseus.org/catalog/urn:cts:greekLit:tlg0012.tlg001 "http://catalog.perseus.org/catalog/urn:cts:greekLit:tlg0012.tlg001")"\>Hom. Il.\</bibl\> might be a reasonable thing to do, for example. Others argue that \<ref target\="[http://catalog.perseus.org/catalog/urn:cts:greekLit:tlg0012\.tlg001](http://catalog.perseus.org/catalog/urn:cts:greekLit:tlg0012.tlg001 "http://catalog.perseus.org/catalog/urn:cts:greekLit:tlg0012.tlg001")"\>\<bibl\>Hom. Il.\</bibl\>\</ref\> is the right thing to do. The semantics of @target don't seem to me to work for this, but we ultimately define those semantics, so…


I've outlined my understanding of the semantics of the relevant attributes below:


**@ref encodes the relationship: \<name\> refers to \<named entity\>**


**@target encodes the relationship: \<reference\> points to \<target\>**


**@corresp encodes the relationship: \<element\> is aligned with, or defines something related to \<element\>**


Council homework is to read this, and the discussion on the issue, and bring an opinion to the discussion.


**Discussion**


Should we put @ref on \<bibl\>?


Assume we have decided that a short form citation is a \<bibl\>, right? If you want a \<citedRange\>, yes.


Case 1: standard bibliography in a journal article


Need to clarify use of \<ref\> or \<bibl\> \+ \<ref\> \+ \<citedRange\>


Case 2: want to link a short citation to a canonical identifier for the work


Bibliography, like health care, is hard


@ref vs @corresp: What is the difference?


@corresp: Is it like @like or @sameAs?


Recommend that short form citations that have a cited range, should be done as \<bibl\> so \<citedRange\> be added. If the citation is a \<ref\> it can be wrapped in the \<bibl\>.


Recommend adding @ref to \<bibl\> \- this should be used to point to ??


Discuss adding @cRef / @target which may be parallel and often mutually exclusive. NOPE


Reluctance to add @cRef .


If short form citation is pointing to longer citation in same universe, what do we recommend?


* @ref seems to be useful to point to authority or more canonical object (linked data ish link)
* @corresp could be used to point to longer form of same citation, Case 1 above.
* \<ref target\> or \<ptr target/\> inside the \<bibl\>


Martina’s rdf ex. In the guidelines : @ref on \<bibl\> to point to RDF file
What if we want to point to RDF, AND to long\-form bibliography entry:


@ref should be able to coexist with element \<ref\>
Or handle with \<ref\> and \<ptr\>



Syd: Demonstrate each example twice:


Once with attributes: @ref and @corresp
A second with a \<ptr\> child using @type attributes to explain what's going on




### \<path\> should exist alongside \<zone\> for non\-closed areas in facsimile \#1453


Martin Holmes asked for a @path on \<zone\> to express things in images (especially maps) that aren't boxes (roads, river courses, etc.). We said \<zone\> has area, and therefore @path wouldn't make sense. Martin then asked for \<path\> (based on Council's feedback). We weren't happy with that either. This hits right at the heart of where the boundaries of TEI are. Should we add \<path\>? Should we back off from implementing our own version of SVG, but allow @path on \<zone\>? \[Note: I'm in favor of something like this that allows @path or \<path\>, with this understanding: TEI isn't doing the drawing in the coordinate system, but it provides storage of needed descriptive information, which can later be readily processed by transformation into SVG (or KML, etc).Apologies if this is a bad analogy, but we store URLs in TEI that are not activated as "hyperlinks" until they are transformed or translated into something readable by a web browser. The function of the TEI here seems to be to hold text\-encoded data that describes and can helpfully be processed and translated into other formats.]Should we allow neither? Should we recommend using SVG and specify how?
Zotero ticket brief discussion [377](https://github.com/TEIC/TEI/issues/377 "377")


AOB: weigh in on Raff’s email about RomaJS




### Use Cases and Examples


Elli: This is my Zotero approach:
\<bibl xml:id \= "b1" \>


\<ptr type \= "biblItem" target \= "zotero:IIP\-043\.xml" /\> \<!\-\- “iip\-043\.xml” is the zotero “loc in archive” field value. \-\- \>


\<biblScope unit \= "page" \> **92** \</biblScope\>


\</bibl\>


Element \<ref\> or \<ptr\> isn't**necessarily** good for short form to point to long\-form.


Elisa: my approach for pointing to a long\-form listBibl in a project directory:


\<bibl corresp \= "\#IDElsewhereinProsopDoc" \>


\<author\>Joe Writer\</author\>


\<biblScope unit \= "page" \> **92** \</biblScope\>


\</bibl\>


(Why NOT use @ref for the above?)


Martina (TBC):


\<bibl ref\="sker:L10002"\>\<title\>Wake\</title\>\<biblScope\>11\</biblScope\>\</bibl\>


\<rdf:Description rdf:about\="http://gams.uni\-graz.at/sker/L10002"\>


\<owl:sameAs rdf:resource\="http://d\-nb.info/900591765" /\>


\<dc:title rdf:datatype\="http://www.w3\.org/2001/XMLSchema\#string"\>Finnegans wake\</dc:title\>


\<!\-\- more information here \-\-\>.


\<bibo:authorList\>


\<rdf:Description rdf:about\="http://d\-nb.info/gnd/118558501"\>


\<foaf:name\>Joyce, James\</foaf:name\>


\</rdf:Description\>


\</bibo:authorList\>


\</rdf:Description\>


Hugh:


**Use Case 1**: I have a full bibliography at the end of my TEI document and I have short citations in the text.


\<bibl xml:id\="tarrant2016"\>\<author\>Tarrant, R. J.\</author\> \<title\>Texts, Editors, and Readers: Methods and Problems in Latin Textual Criticism\</title\>. \<pubPlace\>Cambridge\</pubPlace\>, \<publisher\>Cambridge University Press\</publisher\>,\<date\> 2016\</date\>.\</bibl\>


And in the text, current recommended practice would have:


\<bibl\>\<ref target\="\#tarrant2016"\>Tarrant (2016\)\</ref\> \<citedRange\>ch. 7\</citedRange\>\</bibl\>


I think equally valid, and maybe superior, would be:


\<bibl corresp\="\#tarrant2016"\>Tarrant (2016\) \<citedRange\>ch. 7\</citedRange\>\</bibl\>


There is an open question whether @ref on \<bibl\>, if it were available, would be better/equivalent.


**Use Case 2**: I have no bibliography as such, but a bunch of citations in my text to canonical works.


\<bibl ref\="urn:cts:latinLit:phi0474\.phi013"\>\<title\>in Cat.\</title\> \<citedRange\>3\.16\</citedRange\>\</bibl\>


\<bibl ref\="urn:cts:greekLit:tlg0012\.tlg002"\>Hom. α \<citedRange\>ll. 1–10\</citedRange\>\</bibl\>


The URIs in the form 'urn:cts:etc.etc' are identifiers for the works referenced here—not to a specific edition. This is like Martina's example.


**Use Case 3**: I might equally well have a full bibliography that lists editions used, but want to tie the edition to a canonical identifier:


\<bibl ref\="urn:cts:latinLit:phi0474\.phi013"\>\<author\>Cicero, M. T.\</author\>, \& \<author\>Dyck, A. R.\</author\> (\<date\>2008\</date\>). \<title\>Catilinarians\</title\>. \<pubPlace\>Cambridge, UK\</pubPlace\>: \<publisher\>Cambridge University Press\</publisher\>.\</bibl\>


Syd argued during the meeting that I probably want to do this with a \<ptr\> inside the \<bibl\> instead. My discomfort with that is that I don't consider the reference URI to be a part of the bibliographic entry, but instead a useful way of identifying it that ties it to an authority system.


**JC (after the meeting): Did people bring up why @ref on \<title\> isn’t good for****Use Case 2** \[Note: You'll notice Use Case 2, part 2 has no title, as such. Yes, Classicists are problem children. I think the answer is that since title will not always work, we might be better off standardizing on bibl/@ref because it's the container of the citation.]**\& 3? To me Use Case 1, I think @corresp is fine. But****another option** \[Note: Is that a less invasive change than allowing @ref on bibl?] \[Note: That seems less invasive a change, because \<ref\> is for references, and the only reason \<citedRange\> wasn't in it is that we created \<citedRange\> later.]**is allowing \<citedRange\> and friends inside \<ref\>. I.e.**


**\<ref type\=”bibRef” target\="\#tarrant2016"\>Tarrant (2016\) \<citedRange\>ch. 7\</citedRange\>\</ref\>**


**\<ref\> is for references, short form bibliographic references are references, QED: Use \<ref\> for short form bibliographic references. ;\-)**\[Note: That's fine *if* your model for your text considers the short form citations to be pointers to the long form. I think that's valid, but I also think it's valid to model citations as names of Works. Sometimes they're pointers, and sometimes they're more like \<rs\>. I don't think there's a single, simple answer to the problem. I think we need to enumerate the use cases and exemplify them in the GLs] \[Note: I think short\-form citations are *always* pointers to a long form even if that long form is some imaginary never expressed concept. But even if it is a reference for which the encoder is *not* pointing to something then it is still a reference. If I put \<ref\>Cummings, 2009\</ref\> and no other bibliography or list of works cited then it is still a reference. I just think people shouldn't use \<bibl\> for things that are full bibliographic entries and use \<ref\> when they refer to things. If I was arguing for standardisation that is the direction I'd encourage. ;\-)]



