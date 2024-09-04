---
layout: page.njk
title: "TEI Manuscript SIG Meeting Report 01"
creator: Susan Schreibman, Elena Pierazzo, Edward Vanhoutte
---
# TEI Manuscript SIG Meeting Report 01



Manuscript SIG: Report from Nancy. November 8th 2003
 
 
 The first meeting of the Manuscript Special Interest Group held in Nancy was
 extremely productive. While the group did not come to any conclusions regarding
 how
 encode manuscripts according to the TEI Guidelines, many issues were raised.
 Participants found that many of the difficulties in encoding manuscripts using
 the
 TEI were common across disciples, languages, genres and time periods. A summary
 of
 the meeting is below.



 Participants
 
 Pat Bart, David Birnbaum, Ivan Boserup, Anh Bui, M.J. Driscoll, Patrick Durusau,
 Ahn Jaewon, Jindrich Marek, Alberta Nodar, Elena Pierazzo, Dorothy Porter,
 Gautier Poupeau, Peter Robinson, Susan Schreibman, Harold Short, Mirko
 Tavosanis, Adriaan van der Weel, Edward Vanhoutte, John A. Walsh.




 Summary Report: Six Issues
 
 
- Modern manuscripts and mediaeval/classical manuscripts are different
 things, or are they?

- There may be several reasons for encoding manuscripts, and the end result
 may not necessarily be the production of a critical edition. Non\-critical
 editing, or the transcription itself can be a goal. Therefore, it would be
 semantically incorrect to use the Critical Apparatus subset to encode
 several layers of additions, deletions and variation in the transcription of
 one document.

- The transcription of a manuscript interprets the writing process of an
 author/scribe. Since writing takes place in time, techniques are needed to
 encode absolute and relative time in manuscript transcriptions.

- Writing is also a topological process. This is an issue, especially when
 dealing with modern manuscript (draft) material and correspondence.
 Therefore the encoding needs also to take account of the position of the
 text on/in the manuscript.

- Particularly in the case of modern manuscripts and correspondence, an
 encoder must often decide between two encoding philosophies: i.e., whether
 the encoding is capturing the documentary appearance of the page (i.e.
 encoding the text according to what is physically present on the page
 regardless of the text's logical sequence), or whether it is to record the
 textual/ontological/teleological flow (regardless of the text's physical
 appearance on the page). dif

- A more detailed set of tags is needed to describe the accidentials of the
 text: for example, a change in ink, or a change in writing utensil (pen,
 pencil, etc). The element 
 handShift is not expressive enough to
 encompass the recording of these changes.





 Full Report
 
 
 Edward Vanhoutte kicked off by proposing that the SIG be divided into two
 distinct SIGS, one to deal with problems and issues in encoding modern
 manuscripts, and the other to deal with those in encoding mediaeval manuscripts.
 The majority of people present at the meeting felt that there should be one SIG
 as the commonalities were greater than the differences. The group thus voted
 to
 stay together.


Vanhoutte went on to discuss the problems he has in encoding the internal
 dynamics of a text, such as using speech transcription tags to encode time\-based
 events. Peter Robinson said that there are similar problems when encoding
 mediaeval manuscripts. Vanhoutte argued that the encoding strategies suggested
 by the TEI for critical apparatus are not suitable for the encoding of variants
 present in a single text. Robinson said again, that similar variants occur in
 mediaeval manuscripts.


The group agreed that the recording of time and sequence are problems that the
 SIG should address. Matthew Driscoll agreed with Vanhoutte that the 
 app
 structure should not be used for recording variants within one text. Robinson
 reported in his projects he does not use 
 add and 
 del but
 
 app.


Driscoll suggested that we create a 
 subst tag within which to put a
 
 del tag to show that a substitution is being made.


Markus Beigenheimer asked if anybody had worked with fragments. 


David Birnbaum pointed out that the Guidelines describe a manuscript as a
 physical object, which is a problem when manuscript parts exist in separate
 locations, or when a manuscript has been torn and exists as two or more separate
 objects. Gautier Poupeau said that he used the rend attribute with 
 seg
 to create coordinates of a manuscripts which can join fragments. Birnbaum asked
 that the SIG consider additional solutions to this problem


A discussion ensued which considered how to record time\-based events. Elena
 Pierazzo suggested that a rend attribute may not be enough to describe time.
 Pierazzo suggested that the textual fact and the bibliographical fact need to
 be
 recorded separately while creating one whole text that is readable as a separate
 witness. Burnard suggested that the a 
 sync tag might be used to deal
 with this problem. 


A discussion of whether milestones are good for this purpose followed.


Jindrich Marek raised the problem of deciding what the object is (i.e., items vs
 the text). This occurs, for example, when there are several sermons in one text.
 He also suggested that a best practice be developed which can help encoders
 display TEI\-encoded texts in PDF, LaTEx, etc.


Pierazzo brought up the issue of the explosion of the page in modern manuscripts:
 that is, what is the text when the author begins a letter, for example, on a
 sheet of paper, then continues it on an envelope, or on the back of a piece of
 paper stuck in the letter, etc. She asked how we should record this type of
 textual condition. Mirko Tavosanis raised the point that again, that this raises
 the problem of what theory of encoding is the encoder following: that of
 transcription or of codicology. He feels that the two methods are entirely
 different. Connected to this is the issue of how to encode the documentary
 aspect of the text from the logical flow of the text. Encoders tend to adopt
 one
 philosophy of encoding. In the case of capturing the documentary aspects of the
 page, the encoder may then use anchors, pointers and links to indicate the
 logical flow of the text. Conversely, encoders capturing the logical flow may
 use notes to explain where the text appeared originally. In either case, the
 Guidelines should more thoroughly document these philosophies of encoding,
 providing examples and alternative methodologies. 


Towards the end of the discussion, several suggestions were made as to how to
 proceed with future work. Patrick Durseau felt that much of the discussion
 revolved around how to encode time\-based events in manuscripts. He suggested
 that we think of encoding in terms of the following:



- authorial intention

- the text itself

- the analysis of the text

- the physical object/the medium on which written

- the interaction between text and physical object: sometimes one can't read
 the text because of damage to the physical object

Robinson suggested that the SIG undertake a survey to ascertain how different
 projects handle particular problems associated with the encoding of manuscripts,
 which would result in a list of problems that the SIG could then address. He
 also pointed out that we don't have enough examples of best practice, and
 suggested that the SIG undertake to create this. Harold Short added that the
 SIG
 take account of the work going on already in terms of best practice, such as
 the
 work of the research group at UNC at Chapel Hill. Driscoll suggested that it
 might be valuable to have a conference dedicated manuscript transcription where
 people can discuss particular issues.


Finally, the SIG created a list of issues to be addressed: 
 
- how to handle time based encoding

- how to record place based encoding

- how to encode fragments

- how to record codicology (the substance of the medium, ink stints,
 etc); Robinson noted that the TEI already has mechanisms to record this,
 but it needs to be better documented

- issues of substitutions

- issues of variation

- to clarify the role of using the critical apparatus tagset in
 manuscript transcription (which is dependent on whether one is encoding
 an edition or encoding a manuscript transcription)










