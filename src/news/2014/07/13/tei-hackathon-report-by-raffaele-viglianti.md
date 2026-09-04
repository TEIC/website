---
title: "TEI Hackathon: Report by Raffaele Viglianti"
date: "2014-07-13"
author: "theteiadmin"
permalink: "/news/2014/07/13/tei-hackathon-report-by-raffaele-viglianti/"
tags: ["Other", "Gregor Middell", "JSON", "ODD", "ODD Visualisation", "Raffaele Viglianti", "TEI Hackathon", "visualization"]
---




**Name:** Raffaele Viglianti



**twitter:** @raffazizzi



**github:** <https://github.com/raffazizzi>



**MITH: **<http://mith.umd.edu/people/person/raffaele-viglianti>







**The project**



We wanted to visualize some aspects of a given ODD specification to aid the creation process, or to help the understanding of someone else’s ODD.



There are some precedent attempts at doing this: Byzantium (<http://tei.it.ox.ac.uk/Byzantium/>) already visualizes basic information about what your ODD includes or excludes; Gregor Middell’s visualization (<http://gregor.middell.net/roma/>) already shows relationships between classes and elements in TEI.



We attempted to quantify *how much* an ODD has been customized and show graphically which parts have been curated more and which less.







**My contribution**





I worked on the architecture of this small app and programmed a scoring system that we previously sketched as a group.



First, the app imports a JSON version of the full TEI P5 ODD; then it imports the compiled ODD of a customization (in JSON).



Second, the ODDs are compared and scoring is calculated for each TEI element. These are the changes affecting the score (in parenthesis there are changes discussed, but not implemented):



* changed element description



* added attribute



* added attribute *value* (e.g. by restricting values for @type) <— this is by far the most common change



* (added elements)



* (added constraint / schematron rule)



* (number of examples provided via <exemplum>)



Finally, the resulting object is passed on to a d3.js component for visualization ([Nick worked on that part](http://textencodinginitiative.wordpress.com/2014/07/10/tei-hackathon-report-by-nick-laiacona/))







**Deliverables**



Working document and notes: <https://docs.google.com/document/d/1u77xtS1WncnkjCwR9CpTfOYeW65q7meaXz7PM-Y5Tno/edit#heading=h.6w2vysqik2f4>



GitHub repo: <https://github.com/raffazizzi/Hackathon/tree/master/odd>



Demo: <http://tei.it.ox.ac.uk/Hackathon/odd/visualizer/index.html>



ODD being visualized (prepared by James Cummings): <https://github.com/raffazizzi/Hackathon/blob/master/odd/test-odds/james.odd>







**Findings / goal**



ODD is difficult and associate with advanced TEI users. But it needs to be the gateway to TEI and a constant companion to the life of a TEI project. We’ve been trying to figure out whether visualization can make ODD clearer and less daunting. Hard to tell with our simple visualization, but I think we had a consensus in the group that this is the way forward.



Not neglecting the power users, we think that visualizing ODDs can also help understanding other people’s usage of TEI, particularly when operating on a corpus created by someone else (cfr. Syd Bauman’s concept of “[blind interchange](http://www.balisage.net/Proceedings/vol7/html/Bauman01/BalisageVol7-Bauman01.html)“).







**What did I learn**



I learned that there is willingness to make ODD more accessible across the board; that the official JSON conversion from ODD needs improvement; and that underscore.js has some nice [functional methods](http://underscorejs.org/#collections) to deal with collections.




![](https://ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif)









