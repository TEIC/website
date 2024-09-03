---
title: "tcm66.xml"
date: 2015-02-27
---
# tcm66.xml




 Teleconference 2015\-02\-27 13:30 UTC
 
 
 Present:
 
 meeting started at 13:36


Syd Bauman (SB)


Hugh Cayless (HC)


Fabio Ciotti (FC)


James Cummings @ 13:40 (JC)


Martin Holmes (MH)


Stefan Majewski (SM)


Paul Schaffner (PFS)


Peter Stadler (PWS)


Raff Viglianti (RV)


Stefanie Gehrke (SG) (13:46\)


Lou Burnard (LB — able to be online for latter portion, but not on
 conference call)





 Agenda
 
 
- Discuss/finalize[redefining msPart](https://sourceforge.net/p/tei/feature-requests/505/) (see:[Google
 Doc](https://docs.google.com/document/d/1bpBPughQp5sOoB13iTMHMeRd88Mjv12_eGZiQXY-na8/edit) (SG / PWS))
 
	
	- Some discussion on list;
	 FC still has some issues, MH raised a Q this morning. **Action on
	 PWS** to make the document editable/commentable (DONE). JC notes that the main
	 worry is that \<msPart\> is being used for two different things; we could create
	 a new element (msFrag?), or we could add \<msPart\> to att.typed and use @type.
	 The argument against this is that MS description is talking about one specific
	 physical object; we use msPart when that single catalogued object is formed separate
	 physical fragments. That’s the exact reverse of having a notional object formed from
	 dispersed fragments which are being unified virtually. RV: notes an example of four
	 notebooks from Godwin\-Shelley were unbound and distributed; they were once physical
	 objects; the component parts contain works which cross notebook boundaries. The
	 pieces have been arranged into boxes corresponding to the works. We need to be able
	 to describe both the component parts, the current arrangement, and the original
	 physical objects. PWS: We’ll have to change (the description/semantics of) msDesc
	 as
	 well to support this.
	
	- SB:
		* perhaps attr (e.g.,
		 @type) should be of parent \<msDesc\>, not
		 \<msPart\>
		* Whatever solution we come up with should map well to
		 the same problem as it occurs when the manuscripts are being **transcribed** not merely **described**
		* Thorny
		 enough that we probably need to take this off conference
		 call

- Discuss[TEI Simple
 report](http://lists.tei-c.org/pipermail/tei-council/2015/020458.html) (JC)
 
	
	- JC would like feedback on
	 TEI\-Council list, TEI\-Simple list, or direct e\-mail if you don’t want it
	 public.
	
	- Definitely wants written council feedback on the proposal.
	 Nothing should come as a surprise when we eventually propose these new elements to
	 Council.
		* Most meaty interesting part is the processing
		 model documentation: [http://htmlpreview.github.io/?https://github.com/TEIC/TEI\-Simple/blob/master/tei\-pm.html](http://htmlpreview.github.io/?https://github.com/TEIC/TEI-Simple/blob/master/tei-pm.html)
		* See also Magdalena Turska’s blog post: <http://dixit.hypotheses.org/550> or [http://blogs.it.ox.ac.uk/mturska/2015/01/14/seeking\-simple/](http://blogs.it.ox.ac.uk/mturska/2015/01/14/seeking-simple/)
		* The premise of processing model implementation is to generate XSLT
		 stylesheet based solely on TEI Simple ODD file that contains models and
		 renditions that define intended processing for TEI Simple elements. Base TEI
		 Simple ODD can be found at [https://github.com/TEIC/TEI\-Simple/blob/master/teisimple.odd](https://github.com/TEIC/TEI-Simple/blob/master/teisimple.odd)
		 Processing model implementation files can be found in polygon subdirectory [https://github.com/TEIC/TEI\-Simple/tree/master/polygon](https://github.com/TEIC/TEI-Simple/tree/master/polygon)
		 and this is assumed to be working directory in all examples below. To generate
		 the XSLT stylesheet one can run following command:
		 *saxon
		 \-xi \-s:../teisimple.odd \-o:simple.xsl \-xsl:simpleoddtoxsl.xsl* That
		 will generate simple.xsl file which can be used in turn to transform the TEI
		 Simple documents, eg:
		 *saxon \-s:../tests/5730\.xml
		 \-o:../tests/treasureisland.html \-xsl:simple.xsl*will produce html
		 output for Treasure Island sample file.

- Discuss[Transcription of Spoken Language](http://bit.ly/1jyZC37)
 draft (LB) — deferred for lack of LB
 
	
	- PFS points us to
	 section 5\.7 with a concern that it suggests non\-tessellating \<div\>s; or
	 annotatedU being simultaneously a div\-like object and a p\-like
	 object.
	
	- Council took quick look, and all but gasped in horror \[clearly
	 this example only makes sense if \<annotatedU\> is a divLike object, which is
	 not made explicit elsewhere in the document \-\- LB]
	
	- **Action on PFS** to comment about this on FR [http://sourceforge.net/p/tei/feature\-requests/539/](https://sourceforge.net/p/tei/feature-requests/539/)

- JTEI schema integration into P5 and Stylesheets: what goes where? (MH)
 
	
	- Ready to start
		* new customization w/
		 documentation \-\> P5
		* transforms for docs in that schema \-\>
		 Stylesheets
		* stuff for O2 framework to do that \-\> oxygen\-tei
		 plugin framework
	
	- One concern is that have to do this
	 in a manner that does not permit the framework to be published w/ only a piece of
	 this
	
	- MH wants to aim for next release (early April)
	
	- JC and
	 SB volunteer to test; JC suggests Sebastian Rahtz and Magdalena Turska might be
	 CC’ed on emails as people with experience in this area.; JC noted that the updates
	 of the framework from Jenkins were functioning fine.
	
	- **Action on MH to investigate the feasibility of accomplishing all this by the next
	 release, and report back within a week.**
	
	- **Action on
	 SB and HC to contact Oxygen and find out their release
	 schedule.**

- Update on[correspDesc proposal](https://sourceforge.net/p/tei/feature-requests/510/)
 (PWS)
 
	
	- Current state: [http://teijenkins.hcmc.uvic.ca/job/TEIP5/lastSuccessfulBuild/artifact/release/doc/tei\-p5\-doc/en/html/ref\-correspDesc.html](http://teijenkins.hcmc.uvic.ca/job/TEIP5/lastSuccessfulBuild/artifact/release/doc/tei-p5-doc/en/html/ref-correspDesc.html)
	
	- LB
	 updated prose
	
	- PWS updated examples and added \<listRef\> for
	 elements
	
	- suggested values for correspAction/@type still under
	 debate
	
	- PWS suggests sticking with past participles (“sent”, “received”)
	 rather than LB’s suggested “sent\-by”, because the latter suggest an actor, who may
	 not be known. Council generally agrees with PWS. \[but if there is named agent, don’t
	 you want to know whether it was received by them or from them? LB]
	
	- **Action on PWS to take this to the mailing list for final
	 decision.**

- Announcement re: *Balisage* pre\-conference event (HC)
 
	
	- <http://balisage.net/CulturalHeritage/index.html> HC suggests
	 people put in proposals. Deadline is April 17th

- Face to Face dates
 
	
	- **Location:** Ann
	 Arbor
	
	- **Dates:** May 28–30
	
	- Council thanks
	 PFS for taking this on.; **Action on PFS to report back to council
	 list on meeting details / hotel / travel / etc.**

- HC points out there are a lot of new bug reports (by Jens Østergaard Petersen)
 
	
	- suggests people should choose those they want, including
	 mentor/mentoree pairs.
	
	- HC will wait until 2014\-03\-06 or so then assign
	 them (on 2014\-03\-07 or so)





