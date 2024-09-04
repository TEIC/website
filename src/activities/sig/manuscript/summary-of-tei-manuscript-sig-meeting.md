---
layout: page.njk
title: "Summary of TEI Manuscript SIG Meeting"
creator: Susan Schreibman
---
# Summary of TEI Manuscript SIG Meeting




 Summary of Manuscript SIG Meeting
 
  Baltimore, 23 October 2004 
 
 Outcomes: SIG members will undertake come up with solutions for:
 


* time based encoding;
* will revise Chapter 18, Transcription of Primary Sources.




 Summary of the Task Force on Manuscript Description
 
 Matthew Driscoll spoke about status of the new chapter
 Manuscript Description. The goal of the Task Force was to
 harmonize the work of two groups who had worked
 independently on manuscript description, the TEI MMSS and
 MASTER. This chapter has been written, and will be released
 with P5\.


The draft of the chapter is available [online](https://www.tei-c.org/Vault/Workgroups/MS/).
 The element set is also available by going to [Roma](http://tei.oucs.ox.ac.uk/Roma/) and
 generating the element set. Beta testers wanted!


The members of the Task Force feel they have gone as far as
 they can go at present. However, they are aware that some
 items have not been addressed. The Task Force recognizes
 that there is a need for more elements for physical
 description — orthography, decoration, paleography,
 binding, etc. The Task Force toyed with the idea of having
 separate plug\-ins rather than elements for general
 description. But as there is a physical bibliography work
 group looking at these issues, they will probably come up
 with an alternative solution.


Those reading the chapter now will notice that there is
 still a need for examples. The Task Force welcomes their
 submission. If you have one that would
 complement what already exists, please send it to [Matthew Driscoll](mailto:mjd@ham.ka.dk) and
 [David
 Birnbaum](mailto:djbpitt@pitt.edu).


Matthew addressed the differences that might arise with
 what the taskforce did, which had a bias towards mediaeval
 manuscripts, and situations that might arise when encoding
 documents from other time periods. The Task Force, however,
 tried to generalize their work enough so that it could work
 with modern manuscripts as well. Ultimately, they would like
 to see the MS Description chapter be general enough to be
 used with any text\-bearing object — tombstones, urns,
 etc, and they would be particularly interested in feedback
 on this aspect.




 Issues Raised During the Discussion on Manuscript Description
 
 * As with the options currently available in the TEI for
 unstructured and structured bibliographies, the MS
 Description DTD allows for more structured manuscript
 description using child elements, or less structured
 description by simply using 
 p tags with PCDATA for
 each of the major elements.
* What does not exist at present is a converter which
 will convert Master records to this new scheme.
* Patrick Durusau asked if there is a way of handling a
 manuscript which exists in multiple parts in multiple
 locations (that once existed as one unit). Matthew and
 David explained that this MS Description describes the
 physical object, and in this way, adopts a library\-centric
 view of the manuscript. Thus there would be four records
 (for example) which could be linked together. Part of this
 view is historical — it came from the work done by the
 previous work groups. An alternative solution would be to
 use the 
 altIdentifier to identify where the main
 part is, and then supply information regarding the other
 parts.




 General Discussion on Issues Regarding Manuscript Transcription
 
 Matthew suggested that two of the primary tasks would be
 the revision of two chapters: Chapter 18, Transcription of
 Primary Sources, and Chapter 19, Critical Apparatus.
 Patricia Bart suggested that she would like to see included
 in the Critical Apparatus tagset an element which does not
 require adding in additional readings, but allows a user to
 see patterns in readings. The group asked her to put
 together a proposal with some examples.


Dot Porter said that at University of Kentucky they are now
 including descriptive information in the transcription —
 including codicological markup.She wondered if the
 descriptive description in the header could be linked to
 description in the transcription. David Birnbaum said they
 were doing this in his project by using the standard TEI
 reference system through the 
 decl which links an
 element in the header to an element in the
 
 body.


Dot also suggested that the TEI might want to explore the
 visualization tool for finding quires that has been
 developed at U of Kentucky. Dot explained that one could
 include a manuscript and an image in which areas of the
 transcription are keyed to the same location in the manuscript.
 This tool is part of their Eclipse suite, which will
 be released under open source license, probably sometime
 next year. David added that he has not seen much interest in
 the TEI community in linking images to text and he welcomes
 this initiative. In a follow\-up email to the TEI\-L, Dot
 added that the software is called Edition Production
 Technology (EPT), which is built and deployed using the
 Eclipse platform. For a description of the EPT, see "Edition
 Production Technology (EPT) and the ARCHway Project," p.
 36\-38, [DigiCULT 
 Newsletter](http://www.digicult.info/downloads/DC_NL8_lowres_final.pdf), August 2004\. A more extensive article
 is forthcoming in the next issue of Literary and Linguistic
 Computing, which is based on the 2003 ALLC/ACH meeting.


Matthew brought up the issue of substitutions. On Friday
 Lou Bernard demonstrated a new 
 combine tag, which
 is the opposite the 
 choice. Matthew felt that it
 might not be a 
 combine element which is needed, but
 rather a 
 substitution element. However, this
 element on its own would not deal well with different levels
 of substitution. David brought of the issue of
 transpositions. Possibly we need a different way of
 representing transpositions and substitutions. Daniel
 Apollon added that they are looking at some of these issues
 at Bergen.


Syd Bauman returned to the issue of time\-based encoding
 which had been raised earlier in the discussion. He asked if
 the TEI should find a simple solution to the problem, or
 look for a more generalized solution.


To wrap up the discussion, Susan Schreibman suggested that
 the members of the SIG concentrate on two issues over the
 coming year which seemed most pressing as a result of the
 discussion: i.e. time based encoding, and revision of the
 transcription chapter. Patrick seconded this idea adding
 that he felt that this chapter could be rewritten in a more
 readable format.


Susan also mentioned that it seemed clear from the
 discussion that members of the SIG would find it useful to
 have a page which links to documentation generated by
 various projects. She said that this could be done under the
 TEI Training (now TEI Education) SIG. Tone Merete Bruvik
 added that the Ibsen project will be translating their
 encoding practice into English and would make it available
 to the TEI community.





Present:
 
 - Daniel Apollon, University of Bergen

- Patricia Bart, University of Virginia

- Syd Bauman, Brown University

- David Birnbaum, University of Pittsburgh

- Tone Merete Bruvik, University of Bergen

- Matthew Driscoll, University of Copenhagen

- Patrick Durusau, Society of Biblical Literature

- Ying\-chun Hsieh, National Digital Archives Program, Taiwan

- Michael Popham, Oxford University

- Dorothy Porter, University of Kentucky

- Perry Roland, University Virginia

- Susan Schreibman, University of Maryland






