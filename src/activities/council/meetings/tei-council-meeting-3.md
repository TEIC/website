---
title: "TEI Council Meeting"
creator: Matt Zimmerman
date: 2006-05-19
---
# TEI Council Meeting





Times are UTC \+9 unless otherwise noted.


The meetings were held on 18 and 19 May, 2006 at the Kyoto City International Community
 House, Kyoto Japan. The meetings were held from 10:00 to 17:00\. Present were CT, CW,
 SB, AK, DP, JC, JW, LB, MZ, MD, SS, DB, SR, LR





 Approval of Agenda
 
 CW's agenda for the meeting was unanimously approved with no additions or subtractions




 Welcome Amit
 
 The Council welcomes its newest member, Amit Kumar, who will serve out the rest of
 the
 term of Alex Bia who resigned from the Council.
 




 Review of minutes from last conference call
 
 
 * Resolve remaining unresolved issues about new file organization at Sourceforge asap,
 and report on status at Kyoto Council meeting.
 
 JCUpdate HOWTO to reflect the new structure and check that the discussion of SVN procedures
 introduced in it are all correct
* Discussed structure of internationalization file structure LB suggests testing ODD tools so that linking works as opposed to copying. CW says basic structure should include how to handle examples in different languages.
 SS asks did we not once ask people for examples?
 CW says someone will have to be in charge of handling the call and collecting examples.
 SS suggest that if we collect samples we need metadata (form similar to
 the TEI projects page)
* Should chapter file names change? (i.e. hd \> header). Consensus is "no".
 
 JCsuggest new file names.
* SB updated his [report on SO output documents](http://www3.iath.virginia.edu/pipermail/tei-council/2005/001163.html) to include recommended dispositionsas a working paper for discussion in Kyoto. Recommendation
 is SVG should be used instead of graphic and figure.
 CW and DP suggest that graphic element stays and that SVG
 exists in the module for figuers and tables.
 Do we dicuss this in the guidelines and where do we discuss it?. Should part of the
 guidelines be dedicated to other lanaguges? (markup and standards).
 CT suggests a new pointing method that includes coordinate pointing.
 
 CT and DPCome up with a proposed text of how to link
 texts and images
SBSee if an similar xpointer has been provided in W3C
* Council must read chapt 14\.9\.1 p5\.
* CW follow\-up on previous request to MM for more prose describing the desired goals,
 the meaning of elements, the intended usage, etc.; also perhaps suggest a conference
 call for PB group. (MM does not have anything prepared for us to review)
* JW and MZLook at both dictionaries drama modules, post to list
* DB Look at TD (documentation elements, aka
 ‘tagdocs’), post to list.




 Working Groups Progress
 
 Physical Bibliogrpahy: has not been any changes in documents


Personograibphy: MD reports 8 new elements, 3 catagories and use of exisiting tei
 elements also.
 [See report](http://www.staff.hum.ku.dk/mjd/persPaper.html)


CT comments that type "casual" is not clear enough in the assert group (a to b? b to
 a?).
 Assert and Assertgrp? is one redundant? 
 
 LB motions that the Council identify within a week a
 list of specific items in the current proposals that need to be addressed.





 Class Struggle
 
 * Linking and Analysis: get rid of exemplumb, remarks and listRef? Why is attDef not
 attSpec?
 
 SB fix listref from ptr\* to ptr\+
* dateStruct: necessary? can we have only date?
 
 SBmerge date and dateStruct.
 Same with timestruct?
* Should day, geog, hour, minute, mont, second, week and hear be macro.phraseSeq instead
 of macro.xtext?
 
 LBSolution: macro.xtext doesn't cut it. Needs to be
 reviewed. What, if anything, should replace it?
* Should region, country, be macro.phraseSeq instead of marcro.paracontent (bloc and
 settlement are macrophrasesec)?
 Yes. No objections
 
 SBChange region, country to macro.phraseSeq instead of marcro.paracontent
* model.phrase (scaled down phrase set) posted to council list
 
 LBAdd model.phrase to TCW07




 Review TCW07
 
 Corpus:
 
 EditorisImprove wording. Where does the personagrapy stuff go?
 Should there be a disticnct module for the new elements in personagraphy? If yes,
 how does
 it affect other modules? LB proposes persongraphy stays in limbo for the time being.
 make a new module, or put in another module.
 Vote: 10\-4 in favor of putting personography into names and dates. Editors will do
 it.
 
 EditorsFix manuscript desc modules dependices on names and dates in current architecture
Editorssee if there are other interdependicies
SRsee if there is a way to implement moral dependencies.
SBfind out places were an element is place like and datalike.
 textDescPart will be defined as a new class
 
 EditorsMake a new class model.setting part contain
 model.pLike ... \-rs 



 Gaji, Figures, tables, graphs, and nets: All approved.


Spoken:
 


* Should event kinesic get att.typed? Yes
* Editorsmake a new class whose only member is desc
 that would replace some of thee occurences of macro.glassSeq.
* item 6\.4 of TCW07 approved


Manuscript Desc:
 


* In response to 7\.1 of TWC07: 'use the headphrase'
* In reponse to 7\.2 of TWC07: msidentifier and misidentifierPart \-\- Leave this as they
 are
 a model class. Would be preferable if it would be non\-repeatable.
* In response to 7\.3 of TWC07: Bullet 1: yes, Bullet 2: yes, Bullet 3: no.


Transcription:



 Syd's proposal: While I don't like how att.spanning works (mostly because it is not
 "horse\-like" enough), I agree completely that 
 addSpan and 
 delSpan belong
 in that class. I like Dot and Susan's third suggestion: hand, type, status in new
 class
 att.subEditStuff of which all 4 are members; place in new class att.placement of which
 
 add and 
 addSpan are members (and can 
 notebe a member of this
 class, too?); and 
 addSpan and 
 delSpan get added to the already existing att.spanning.)


The council accepted Syd's proposal


Linking: Done


Linking and Analysis
 


* 10\.1 from TCW07: done
* 10\.2 from TCW07: w and m solutions
* defer discussion of last item before we have output from standoff
* DP to contact the overlap group and give them a report and get
 feedback on span


Other
JW should discuss biblitem, biblstruc, and mods by end of
 June
DB to draft document of guiding principles for further
 dev of p5\.





 Roadmap
 
  1\.0 by members meeting oct 27 and 28\. [Roadmap](/Council/roadmap.xml)
 Summary of brainstorm of items needed before release is
 appended, below.
 
 LBby end of June, report on Terminology Chapter
LBReplace the current TEI core module with smaller cores
 Next call July 25 UTC 12:00
 





 Possible Requirements for 1\.0 Release
 
 







