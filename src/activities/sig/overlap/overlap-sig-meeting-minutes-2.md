---
layout: page.njk
title: "Overlap SIG Meeting Minutes"
creator: Dot Porter
---
# Overlap SIG Meeting Minutes






Overlapping Markup SIG
 Minutes
23 October, 2004


Dot Porter

November 12, 2004



Seven in attendence.


Approach: At last year's meeting (see [the 
 minutes](/Activities/SIG/Overlap/olm01.txt)), we had discussed creating a web site to
 explain in some detail many different approaches to
 overlapping markup. This year, we discussed some approaches
 that are currently in use by those of us in the SIG: the use
 of milestone elements and Just In Time Trees (JITTS). The
 traditional problem with using milestone elements
 extensively to deal with overlapping markup is that existing
 support languages (XPath, XSLT) cannot deal with non\-content
 (that is, text between two milestone elements acting as the
 beginning and end tags). However, Alex Dekhtyar and Emil
 Iacob at the University of Kentucky have been working on an
 extension of XPath (Extended XPath, or EXPath) that can
 search overlapping encodings represented in a GODDAG. The
 GODDAG can be stored in an XML file with milestones (plus a
 set of DTDs, one per hierarchy) or in separate files: one
 XML file per hierarchy. In fact, the storage method is not
 important as long as there are parsers for GODDAG. The
 GODDAG implementation provides DOM\-like API which can be
 used as well by an XML editor. They have begun working on an
 extension of XSLT as well. Patrick Durusau also cited a
 paper presented at the 2004 Extreme Markup Conference by
 Steven DeRose, [Markup 
 Overlap: A Review and a Horse](http://www.mulberrytech.com/Extreme/Proceedings/html/2004/DeRose01/EML2004DeRose01.html). In this paper,
 DeRose outlines a system of milestone elements similar to
 that already implemeneted at the University of Kentucky,
 which he calls clix (not to be confused with Constraint Language
 in XML (CLIX)).


The SIG proposes to investigate the possibility of
 implementing within TEI a system for dealing with
 overlapping markup through a system of milestone elements
 based on clix, JITTS, and the EXPath and EXSLT support being
 developed at the University of Kentucky.






* Provide several examples on the OM SIG website and
 invite TEI users to comment and criticize the
 approach.
* Invite examples of overlapping markup from the user
 community.
* Finally, make a recommendation to the TEI editors
 — either to look into making the milestone
 approach an integrated part of P5 (if it appears to
 handle most instances of OM), or not.




 Examples
 
Example 1




The first thing that put us out was that advertisement.
 Spaulding, he came down into the office just this day eight weeks with this very
 paper in his hand, and he says:—
I wish to the Lord, Mr. Wilson, 
 that I was a red\-headed man.


Why that? I asks.

]]\>
 
 
Example 2
This example shows how we can use milestones to show, at
 the same time, four different and overlapping organizational
 sections:
 


* line \= folio line
* vline \= verse line (TEI 
 l)
* HL \= half line
* oecno \= lines according to the Old English Corpus
* vsection \= verse section (TEI 
 lg)


I used the same id for 
 sID
 and 
 eID as we use for the
 regular ID.




 ...
 
 
 ...
 
 

ÐV meaht be ðære sunnan
 


sweotole geþencean
 


7 be æghwel\-
 
 
cum
 
 
oðrum steorran
 


þara
 
 
þe æfter burgum
 
 
beorhtost
 
 
scineð.
 
 




gif him wan fore
 
wolcen
 
 
hangað
 
 


ne mægen hi swa leohtne
 
leo\-
 
 
man ansendan
 
 


ær se þicca mist
 


þynra weorðe
 




swa oft smylte
 
sæ
 
 
 ...
 
 

 ...
 
 
 ...
 
 ]]\>


References
 
 * Steven DeRose, [Markup 
 Overlap: A Review and a Horse](http://www.mulberrytech.com/Extreme/Proceedings/html/2004/DeRose01/EML2004DeRose01.html)
* Just\-In\-Time\-Trees:
* [Extended 
 XPath language (EXPath)](http://dblab.csr.uky.edu/~eiaco0/docs/expath/index.html)




