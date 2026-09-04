---
title: "User survey: have you ever used any element other than tei:add and tei:del as a child of tei:subst?"
date: "2011-08-18"
author: "theteiadmin"
permalink: "/news/2011/08/18/user-survey-have-you-ever-used-any-element-other-than-teiadd-and-teidel-as-a-child-of-teisubst/"
tags: ["News"]
---



TEI Council has recently been discussing the correct content model of tei:subst. It is our considered opinion (see[ http://purl.org/TEI/FR/3393244](http://purl.org/TEI/FR/3393244) ) that the only appropriate children of tei:subst are tei:add and tei:del.


The schema and the guidelines currently allow the elements (corr orig reg sic unclear app damage restore supplied surplus) in subst, but in our opinion this is an error, and we propose to fix it in the future. (These may all of course be children of add or del, which would be the appropriate way to nest them inside one part or the other of a substitution.)


Because we are concerned with backward compatibility and finding a sensible path toward deprecation of old content models, we would like to hear on-list from anybody who uses or has used any element other than add and del as a direct child of subst. Will your XML be broken by future versions of the TEI schema that restrict this usage? What were these elements attempting to represent? Can we find a more canonical way to express what you were trying to say with this combination of elements?


Please pass this question on to any TEI users you know who may not be on this mailing list.


Best,


Gabby


—<br/>
Dr Gabriel BODARD<br/>
(Research Associate in Digital Epigraphy)


Department of Digital Humanities<br/>
King’s College London<br/>
26-29 Drury Lane<br/>
London WC2B 5RL



