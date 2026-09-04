---
title: "TEI Critical Edition Toolbox"
date: "2014-06-10"
author: "theteiadmin"
permalink: "/news/2014/06/10/tei-critical-edition-toolbox/"
tags: ["Other", "Critical Edition", "Critical Edition Toolbox", "Encoding", "Markup", "TEI", "TEI Critical Edition Toolbox", "xml"]
---



Dear Colleagues,


It is my pleasure to invite you to test a new tool I am developping, called the TEI Critical Edition Toolbox.


The current version of this online application can be found at the address below, but at this “beta testing” stage its access is password-protected:<br/>
http://ciham-digital.huma-num.fr/teitoolbox/<br/>
If you wish to test the Toolbox, please send me a private message and I will send you the login and password.


You will find below a more detailed description of the purpose and features of the TEI Critical Edition Toolbox.


Best regards,<br/>
Marjorie





The TEI Critical Edition Toolbox is a tool for people preparing a natively digital TEI critical edition. It offers facilities to display your edition while it is still in the making, and check the consistency of your encoding.


The TEI Critical Edition Toolbox can help you check editions encoded in TEI with the parallel-segmentation method. If you are using a “positive” apparatus, listing all the readings of all the manuscripts in the @wit attributes of the and/or , the application will be able to detect all apparatus entries that do not use all the witnesses listed in a in the header. Simply upload your TEI XML file, then use the options in the Toolbox.


Basic principles


The TEI Critical Edition Toolbox is a simple tool offering an easy visualization for TEI XML critical editions. It especially targets the needs of people working on natively digital editions. Its main purpose is to provide editors with an easy way of visualizing their ongoing work before it is finalized, and also to perform some automatic quality checks on their encoding.


Requirements


Your edition must be encoded in TEI with the Parallel Segmentation method.<br/>
You simply need a recent browser to access the application and upload your XML file (nothing to install).<br/>
Simple visualization


Tools like Diple or the Versioning Machine are very efficient for finished editions, but they may not be well adapted to ongoing work. For instance, an ongoing edition is likely to present only app elements with only rdg children, or to present a mix of app elements with only rdg children and others with both a lem and rdg children. Proposing a visualization for such encoding is not easy, because there is no base text (yet).


The TEI Critical Edition Toolbox accepts both types of app elements (rdg only, or lem and rdg), even in the same file. It will display each type slightly differently:


In both cases, the content of lem and rdg are highlighted, with a white background.<br/>
When the app contains a lem, only the content of the lem is displayed in the text (in order to make the apparatus lighter and more readable), and the variants appear in a pop-up note. To see the note, simply hover over the ↑ sign just after the content of the lem.<br/>
When the app contains only rdg, the content of each is displayed, in the order of appearance in the app. To make the text better readable, curly brackets open and close each series of rdg belonging in the same app. For clarity’s sake, empty readings are materialized with a minus sign, “-“.<br/>
When the encoding uses reading groups (rdgGrp), the content of each rdgGrp is displayed between bold double parenthesis. If the rdgGrp contains a lem, its text is underlined.<br/>
In the toolbox, you will have the option of showing or hiding the page breaks, either all of them, or for a particular witness. To do so, you will need to have used the witness ID in the @ed of the pb tag.<br/>
The page breaks are displayed in a slighly different manner if you choose “all” or only individual witnesses.<br/>
If you choose to display all page breaks, they will appear inline, keep the text readable.<br/>
If you choose to display pagebreaks for an individual witness, we assume that you are particularly interested in it and we display the page breaks more visibly, with a thin blue line representing each break.


Checking the consistency of your encoding


Encoding a natively digital critical edition with a positive apparatus, where all variants are mentioned for all manuscripts, is a good way to make sure you have not forgotten any reading in any manuscript. This is a useful practice during the preparation of the edition, even if you intend to mention only variants from a default lemma in your final edition.<br/>
It is frequent for editors to make mistakes, like introducing a typo in the siglum of a manuscript, or simply forgetting to mention which reading is found in one of the witnesses. This is why critical editions require many proofreading sessions. The TEI Critical Edition Toolbox will not replace those sessions, but it can help you perform consistency checks on your encoding.


Features for editions with a “positive” apparatus


If you have made a “positive” apparatus (all the available witnesses are expressly mentioned in each app), the TEI Critical Edition Toolbox can identify all the apparatus entries wich do not give a reading for each of the witnesses you will have listed in a listWit in the header. To perform this verification, check Highlight apparatus entries that do not use all witnesses? in the Toolbox. The incomplete apparatus entries will be highlighted in red.<br/>
You are also offered the option of highlighting only the apparatus entries that do not use a particular witness. This can be useful to avoid noise when you have several unfinished collations. Each witness is assigned a different colour automatically. There are 20 assigned colours, if you have more than 20 witnesses the colour cycle will begin again.


Features for editions with a “negative” apparatus


If you have a “negative” apparatus (defaut text in a lemma without @wit), you can use the TEI Critical Edition Toolbox to highlight apparatus entries that DO mention a particular witness in the variants. In the toolbox, select the witness in the section Highlight apparatus entries that mention a particular witness?.


Other controls


The “Various controls” rubric in the Toolbox lets you select other options which might be useful in both types of encoding: highlighting app entries that contain a lem, or app entries that contain only rdg elements, or app entries where the same witness appears more than once, or where no witness at all is mentionned (probably due to an encoding mistake, in both cases).



