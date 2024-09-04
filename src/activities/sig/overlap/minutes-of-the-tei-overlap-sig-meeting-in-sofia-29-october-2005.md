---
layout: page.njk
title: "Minutes of the TEI Overlap SIG Meeting in Sofia, 29 October 2005"
creator: Dot Porter
---
# Minutes of the TEI Overlap SIG Meeting in Sofia, 29 October 2005




In Attendance:
 
 
 



* Syd Bauman
* Tone Merete Bruvik
* Arianna Ciula
* Juan Garcés
* Ohya, Kazushi
* John Lavajnino
* Dot Porter
* Andreas Witt
* John Young





 This was the third meeting of the TEI Overlap SIG, first convened at
 the Third Annual TEI Member's Meeting in Nancy, France. 



 Discussion at the meeting was mainly held within the context of the
 forthcoming chapter on Multiple Hierarchies for the P5 Guidelines,
 authored by Andreas Witt. Andreas took the SIG through the main
 approaches for dealing with overlap, most of which are discussed,
 though briefly, in the Concurrent Hierarchies chapter for P4\. 
 


* milestone elements: empty elements which mark the boundaries between elements in
 a non\-nesting structure
* fragmentation
 of an item: the division of what logically is a single element into two
 or more parts, each of which nests properly within its context
* virtual joins: the recreation of a virtual element from fragments of text, possibly
 discontiguous or out of order (aka stand\-off
 markup)



 In addition, we discussed other approaches that may be adopted by TEI
 and included in future editions of the P5 CH chapter.


* Non\-XML syntax:
 
 LMNL
 (Layered Markup and Annotation Language): "LMNL, pronounced "liminal",
 is an experimental approach to digital text encoding that supports, in
 SGML/XML terms, overlapping elements (ranges in LMNL) and structured
 attributes (annotations in LMNL)." (<http://www.lmnl.net/>) 


TexMECS, An experimental markup meta\-language for complex documents (<http://decentius.aksis.uib.no/mlcd/2003/Papers/texmecs.html>)
* HORSE/CLIX
 
 See the OL SIG Wiki at [http://www.tei\-c.org/wiki/index.php/SIG:Overlap\#HORSE](http://www.tei-c.org/wiki/index.php/SIG:Overlap#HORSE)


We
 spent quite a bit of time discussing the attractions and pitfalls of
 HORSE/CLIX in the context of TEI. Essentially, this approach calls for
 breaking hierarchies that overlap from regular start and end tags, with
 verifiable content (\<p\>…\</p\>) into empty elements that mark
 the beginning and end of the content; thus, they do not actually
 contain the content. The starting and ending elements are linked
 together through matching values for "sid" (start id) on the opening
 tag and "eid" (end id) on the last tag (\<p sid\="id4"\>…\<p
 eid\="id4"\>). 


 A major problem with HORSE/CLIX is that it may break the content models assigned
 in TEI. 
 


For
 example, a poem consists of groups of lines and sentences. Sentences
 begin and end in the middle of lines, and some sentences contain
 several lines while some lines contain several sentences. In TEI,
 \<lg\> contains \<l\> and \<l\> may contain \<s\>, but
 \<lg\> may not contain \<s\>. In this case, we need to ensure
 that the HORSing/CLIXing does not affect the defined content models for
 \<lg\>. 


GOOD (\<lg\> may contain \<l\> but may not contain \<s\>)
 


\<lg\>
 
 \<l\>\<s sid\="id1"/\>…\</l\>
 
 \<l\>…\<s eid\="id1"/\>\<s sid\="id2"/\>…\</l\>
 
 \<l\>……\</l\>
 
 \<l\>…\<s eid\="id2"/\>\<s sid\="id3"/\>…\</l\>
 
 etc.
 
 \</lg\>


BAD (\<lg\> may not contain \<s\>)
 


\<lg\>
 
 \<l sid\="id1"/\>\<s\>…\<l eid\="id1"/\>
 
 \<l sid\="id2"/\>…\</s\>\<s\>…\<l eid\="id2"/\>
 
 \<l sid\="id3"/\>….\<l eid\="id3"/\>
 
 \<l sid\="id4"/\>…\<s\>\</s\>…\<l eid\="id4"/\>
 
 etc.
 
 \</lg\>


This
 approach places a great deal of responsibility on the editor, or
 requires a processor capable of automatically determining which
 elements can validly HORSE. In some cases, the valid HORSE may be the
 more complicated one; for example, an editor wants to mark every word
 in a poem when in one instance a word breaks between lines. \<lg\>
 may not contain \<w\>, so if we break \<l\> (the simpler
 choice), our TEI is invalid: 


\<lg\>
 
 \<l sid\="id1"/\>\<w\>…\</w\> \<w\>…\</w\>
 \<w\>…\</w\>\<l eid\="id1"/\>
 
 \<l sid\="id2"/\>\<w\>…\</w\> \<w\>…\</w\>
 \<w\>…\<l eid\="id2"/\>
 
 \<l sid\="id3"/\>…\</w\> \<w\>…\</w\>
 \<w\>…\</w\>\<l eid\="id3"/\>
 
 \</lg\>
* Existing
 special elements: \<addSpan/\> and \<delSpan/\> serve to mark
 the beginnings of instances of text that is likely to overlap with
 other structures. They are empty elements. The end of the Span is
 identified usually by an \<anchor\> with corresponding ID.
* We discussed
 the difference between milestone elements (which mark a point in the
 text) and empty elements that mark the beginning and end of spans of
 text (as opposed to regular opening and closing elements which act as
 physical boundaries to their content).




 Work for the Future
 
 
 



* Draft review of chapter – Andreas will make the chapter available for review prior
 to inclusion in the Guidelines.
* Possible future cooperation with the Standoff Markup Workgroup
* Continue discussion and investigate new approaches, via Wiki and Listserv
	+ Wiki: The Wiki is located at [http://www.tei\-c.org/wiki/index.php/SIG:Overlap](http://www.tei-c.org/wiki/index.php/SIG:Overlap). It currently acts as a review of approaches
	 to OL, and also as a bibliography. Anyone can add to or edit the Wiki page.
	+ Listserv: to join the listserv, register at [http://listserv.brown.edu/tei\-ol\-sig.html](http://listserv.brown.edu/tei-ol-sig.html)





