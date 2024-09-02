---
layout: page.njk
title: "TEI Technical Council Minutes 2015-05"
creator: TEI Technical Council
---
# TEI Technical Council Minutes 2015-05







, Ann Arbor, MI


Initial Agenda: [http://wiki.tei\-c.org/index.php/Council\_Agenda\_2015\-05](https://wiki.tei-c.org/index.php/Council_Agenda_2015-05)



Participants


**Council:** Syd Bauman (SB), Lou Burnard (LB), Hugh Cayless (HC – Chair),
 Fabio Ciotti (FC), James Cummings (JC); Martin Holmes (MH), Stefan Majewski (SM),
 Paul
 Schaffner (PFS), Peter Stadler (PWS – Local Organizer), Raffaele Viglianti (RV), and
 Stefanie Gehrke (SG)
 intermittently via Skype, 


**Guests:** Sebastian Rahtz (SR) for TEI Simple discussion. Lauren Romary
 (LR) for Standoff Discussion.




 Thursday, 2015\-05\-28
 
 
 TEI Hackathon report (JC)
 
 
- \~9 people so far some not registered via our form.

- different topics: text and image, multiple versions, eXist\-db, APIs,

- Fairly relaxed, unconference style of organization

- there is a mailing list, \& JC will be soliciting pitches beforehand





 SIG Reports
 
 
- RILM (reported by RV) \- *potential* work proposal to encode
 musicological terminology in TEI, to be coordinated by music SIG

- Correspondence SIG (reported by PWS) has proposed a training workshop at the
 Members’ Meeting

- PWS suggested moving the TEI\-SIGs list to lists.tei\-c.org for consistency. (And
 otherwise updating list of SIGs, marking them as inactive, etc.)

- Publications\-SIG appears to be dead and so should probably be
 decommissioned

- HC suggests marking SIGs as inactive as opposed to simply removing them

- **Action on SB**: send report of when each SIG list (at Brown)
 was last active — DONE

- **Action on HC**: write to conveners, telling them that (barring
 objections) he will mark their SIG as inactive and 
 may set
 their mailing lists not to receive mail.





 Fall f2f meeting
 
 
- Conference starts on Wed.

- Council meeting **must** be beforehand

- **Action on HC** to re\-establish contact with Emmanuelle and find
 out about meeting on Sunday—dependent on how workshop responsibilities pan out.

- Probably start on Sunday when workshops spread out, otherwise on Monday





 MH on *Building the Oxygen Plugin*
- MH presented on the difficulties and possibilities of building the oxygen\-tei
 plugin.





 Roma Redux
 
 
- Should Council drive a replacement for Roma?

- **Action on JC** to dig up previous specification document: [https://docs.google.com/document/d/1766WTJV2xcfANh8HRZW5m520yrC1nCzQJzUgKpwiylI/edit\#heading\=h.gj52guiijhg7](https://docs.google.com/document/d/1766WTJV2xcfANh8HRZW5m520yrC1nCzQJzUgKpwiylI/edit#heading=h.gj52guiijhg7)
 \[**DONE**]

- LB mentions that there is some work being done in this direction at University of
 Caen

- Council would like a new Roma and believes it is fundamental to people’s use of
 the TEI.

**Note:** Council would like to thank Paul and Paula Schaffner for
 hosting a marvelous BBQ at their home — a fascinating place in its own right, and
 a
 happy birthday to Fabio (FC).







 Friday, 2015\-05\-29
 
 MH presents the oXygen plugin, the concept, features and build process; **Action on MH: turn into TCW documentation after developing on wiki.**



 Standoff
 
 Council had a skype discussion with Laurent Romary about standoff



- New standoff element. Discussion set for Friday @ 10:00\. Please review:
 
	
	- <https://github.com/laurentromary/stdfSpec>

- Discussion about \<mapStruct\> with example from RV

- Council agrees on the importance of standoff, with some quibbles (especially
 concerning the header).

- A subset of Council will meet to put together a roadmap for Laurent so that he can
 put together a full proposal. Interested: PWS, HC, FC

- Action on PWS HC, FC: Form subgroup with others interested and report back to
 Council.





 TEI Simple
 
 
**Materials:**



- **Executive Summary:**[http://lists.lists.tei\-c.org/pipermail/tei\-council/attachments/20150527/7b566b81/attachment\-0001\.pdf](http://lists.lists.tei-c.org/pipermail/tei-council/attachments/20150527/7b566b81/attachment-0001.pdf)

- **TEI Simple:**[http://htmlpreview.github.io/?https://github.com/TEIC/TEI\-Simple/blob/master/teisimple.html](http://htmlpreview.github.io/?https://github.com/TEIC/TEI-Simple/blob/master/teisimple.html)

- **Simple Processing Model:**[http://htmlpreview.github.io/?https://github.com/TEIC/TEI\-Simple/blob/master/tei\-pm.html](http://htmlpreview.github.io/?https://github.com/TEIC/TEI-Simple/blob/master/tei-pm.html)

- **Recent Intro Talk:**[https://github.com/TEIC/TEI\-Simple/blob/master/advisory/oxford/teiSimple.pptx?raw\=true](https://github.com/TEIC/TEI-Simple/blob/master/advisory/oxford/teiSimple.pptx?raw=true)

Discussion by Skype with Sebastian Rahtz, project Co\-PI, with Sebastian introducing
 the
 Simple Processing Model and its background. There was some worry about re\-use of
 \<rendition\> for output. Council suggests \<outputRendition\> if project
 amenable.


Council suggests giving some examples that are not related to TEI Simple; e.g.
 manuscript description or prosopography, also to generate XForms interface. Sebastian
 suggests XForms might be more challenging but msDesc could be done with existing
 behaviours.


Council recommends to stop calling it a function library. Call it a
 method/signatures/rendering API of some sort. Would be good to get Guide on API (or
 behaviour library), and examples in multiple implementation languages. It must not
 look
 underspecified. Document that users of the processing model will need to decide how
 to
 implement.


Suggests a @mode attribute on \<model\> in order to keep @output a fixed list (e.g
 of ‘Web’, ‘Print’ etc.).


What will the Council have to do in order to support processing models? Do we need
 to
 support a reference implementation, for example? Yes, there is a reference
 implementation in the form of an XSLT function library that implements the behaviours
 defined in the PM ODD.


Note: There is an Implementation in XQuery of PM by Wolfgang Meier;
 
 you can see the showcase machine that Wolfgang set up at [http://showcases.exist\-db.org/exist/apps/tei\-simple/index.html](http://showcases.exist-db.org/exist/apps/tei-simple/index.html) (for editing user: admin pass: simple)




 To install on your local machine, grab and run [http://data.exist\-db.org/eXist\-db\-setup\-2\.2\-develop\-3f8357b.jar](http://data.exist-db.org/eXist-db-setup-2.2-develop-3f8357b.jar)


To recompile the whole thing locally, it requires the newest development build of
 eXist
 as described here [https://github.com/wolfgangmm/tei\-simple\-pm](https://github.com/wolfgangmm/tei-simple-pm)


For example HTML function library at: [https://github.com/TEIC/TEI\-Simple/blob/master/polygon/html\_functions.xsl](https://github.com/TEIC/TEI-Simple/blob/master/polygon/html_functions.xsl)


or LateX (incomplete) at: [https://github.com/TEIC/TEI\-Simple/blob/master/polygon/latex\_functions.xsl](https://github.com/TEIC/TEI-Simple/blob/master/polygon/latex_functions.xsl)


Council consensus was to agree to the TEI Simple proposals, with minor changes
 suggested below.


Actions for TEI Simple Project:



- TEI Simple project should push forward with implementation and
 documentation

- consider whether better to and how to XMLize the CSS properties of
 \<outputRendition\>; cf XSLT (used in XSL:FO a lot):

 \<xsl:attribute\-set name\="font"\>


 \<xsl:attribute name\="fname"\>Arial\</xsl:attribute\>


 \<xsl:attribute name\="size"\>14px\</xsl:attribute\>


 \<xsl:attribute name\="color"\>red\</xsl:attribute\>


\</xsl:attribute\-set\>


or
 \<tei:funcVal\>\<tei:funcName\>fname\</tei:funcName\>\<tei:val\>Arial\</tei:val\>\</tei:funcVal\>



- work on fuller documentation for functions; TEI Chapter text, element
 specifications and examples.

- don’t re\-use existing \<rendition\>, but make new element, e.g.
 \<outputRendition\>

- needs another plan of where the list of functions are specified (ie reconsider
 \<paramList\> and \<paramSpec\>) e.g. \<listBehaviour\> of
 \<behaviourSpec\>s

- produce demonstration of non\-Simple use of TEI PM (eg producing forms, or
 processing \<msDesc\>)









 Pure ODD (presentation by LB)
 
 cf. [https://sourceforge.net/p/tei/feature\-requests/530/](https://sourceforge.net/p/tei/feature-requests/530/)



- only remaining issue is: datatypes! (According to LB)

- Why \<zeroOrMore\> valList/Content ??

- Discussion of naming XSD Datatypes. xs:float vs. float. We are mildly in favour of
 xs:float as it is more explicit.

- Schematron to prevent putting elements/textNode/etc. in dataSpec/content, or use
 something other than content (\<dataContent\>?).

Council appreciate LB’s and SR’s sterling work on this spec and the associated
 processing.






 msPart (feature request 505\)
 
 Finishing off msPart revisions ([538](https://sourceforge.net/p/tei/feature-requests/538/); will assign to a group for discussion
 later)



- [https://docs.google.com/document/d/1bpBPughQp5sOoB13iTMHMeRd88Mjv12\_eGZiQXY\-na8/edit\#heading\=h.8bdq2kwb0vyu](https://docs.google.com/document/d/1bpBPughQp5sOoB13iTMHMeRd88Mjv12_eGZiQXY-na8/edit#heading=h.8bdq2kwb0vyu)

- **Action on MH and SG**: Create new element specification for
 \<msFrag\>, document the heck out of it.





 @selector proposal (MH):
 
 
[http://wiki.tei\-c.org/index.php/Proposal\_for\_@selector\_attribute\_on\_rendition](https://wiki.tei-c.org/index.php/Proposal_for_@selector_attribute_on_rendition)


counts as a best practice model for proposals to the Council!!


**Action on MH:** wait for two weeks, then
 implement if no one objects.


SB points out that once @selector is implemented, we can deprecate the use of @render
 on \<tagUsage\> for this purpose. Once that’s done, there is no longer a need for
 @partial on \<tagsDecl\>, we can go back to insisting on one \<tagUsage\> for
 each element type within \<text
 

I'm sorry, but I do not remember
 anyone suggesting that we allow this to alter the TEI Abstract Model. Rather, we
 spoke of the need for prose that says “don't do this” and perhaps formal checks to
 guard against it, because it breaks the abstract model.
\>.





 Saturday, 2015\-05\-30
 
 
 App. Crit. 
 
 See:



- [https://github.com/hcayless/TEI\-Guidelines](https://github.com/hcayless/TEI-Guidelines)

- [TEI critical apparatus cheat sheet](http://marjorie.burghart.online.fr/?q=en/content/tei-critical-apparatus-cheatsheet)

Robust discussion. There appear to be several options on the table:


* \<app\> be generalized to every level. Some of our number believe this will
 enable horrors because it allows nesting of larger classes of element inside smaller
 classes (e.g., a division inside paragraph, a heading inside a word). This may also
 have problems being modelled in DTDs. Others believe that is the concern of the
 encoder; people may do silly things if they wish, and we might try to constrain it
 with Schematron. One of the points of the TEI Guidelines is to produce recommendations
 precisely to stop people doing silly things, to some it seems a retrograde step to
 suddenly open up the ability to so vastly abuse the TEI Abstract Model. Likewise,
 JC
 argues we can’t rely on people having Schematron. This could be seen as fundamentally
 altering the nature of the TEI Abstract Model, enabling \<p\> inside \<p\>,
 etc.
* There be several types of \<app\> for different levels (\<divApp\>,
 \<pApp\>; or \<blockApp\>, \<chunkApp\>, \<phraseApp\>). Most people
 dislike this because of the complexity — how many levels do we need? What if variation
 crosses levels in some witnesses?
* A new proposal from SB that we could model all apparatus using a combination
 of:
	+ @wit, available on every text
	 element.,
	+ @lem, to carry the weight of the absence of distinction
	 between \<lem\> and \<rdg\>.
	+ \<witDetail\>, to provide the
	 functionality of \<wit\>.


The objections to \#3 come down to: 


* You cannot actually model things with the required level of richness already
 supported by \<app\>.
* The community knows and loves \<app\> and could never be convinced to adopt an
 alternative solution.


Council proposes that:


* **Action: HC, MH, RV and SB work together to encode HC’s rich example
 text using SB’s suggested solution.**
* If this works, then we go to the proponents of the original ticket (MP and EP) and
 ask if they would be prepared to accept an approach based on this, or if it is
 unsatisfactory.


Things to keep in mind for evaluating Syd’s approach: 



- grouping apparatus entries

- grouping readings

- specifying lemma

- location of witDetail (to be used instead of wit)

- location of rdg\-like specialized attributes (e.g. @cause, @varSeq)

- large or disparate movements of text chuncks.







 Council Terms and Elections
 
 HC pointed to a proposal on Board to change the date of elections and the starting
 date
 of terms. Consensus was that Council does not mind earlier elections, but wants terms
 to
 continue to start on 01 January.



**Next telecon: Action on Hugh to make a Doodle poll to schedule.**




 Meeting adjourned
 
 Council commended Paul Schaffner for doing an excellent job as local organizer.





 Feature Request Review
 
 Group A: PFS, SM, FC, SG


Group B: JC, MH, SB


Group C: RV, PWS, LB, HC



 Amber Feature Requests
 
 

| **GRP** | **\#** | **Summary** | **Owner** | **Creator** | **Created** | **Notes** |
| --- | --- | --- | --- | --- | --- | --- |
| A | [556](https://sourceforge.net/p/tei/feature-requests/556/) | [Allow \<hi\> to be  contained by \<m\>](https://sourceforge.net/p/tei/feature-requests/556/) | Hugh Cayless | Caroline T. Schroeder | 2015\-05\-27 | hi is allowed within w because it was added individually to model.hiLIke. Easy  enough to do the same for m. Would allow epidoc to be consistent in their use of hi  to record such things; OTOH, there are alternative mechanisms available, e.g. use  of  seg. m and hi may seem to belong to different spheres but it cannot be denied that  there are people who wish to operate in both. Group is divided, marginally in favour  of allowing this change. **Action: HC to implement** |
| A | [555](https://sourceforge.net/p/tei/feature-requests/555/) | [improve constraint constraints](https://sourceforge.net/p/tei/feature-requests/555/) | Syd Bauman | Syd Bauman | 3 hours ago | Syd go for it, sounds sensible. If Syd has concern with it, please raise and  explain. **Action: SB to go for it \[DONE]** |
| A | [554](https://sourceforge.net/p/tei/feature-requests/554/) | [guidance on use of @calendar and  @datingMethod](https://sourceforge.net/p/tei/feature-requests/554/) | Gabriel Bodard | Simona Stoyanova | 10 hours ago | Martin’s document (referred and linked to in SF comments) seems very clear and  well explained. Could be followed. GB (again, see SF comments) has volunteered to  implement. Voting for doing this. **Action: Assigned to Gabriel Bodard  to implement** |
| B | [553](https://sourceforge.net/p/tei/feature-requests/553/) | [JTEI schematron validation issues](https://sourceforge.net/p/tei/feature-requests/553/) |  | Lou Burnard | 2015\-05\-05 | Issues 1 \& 2 are solved. Issue 3: Council mildly recommends making this a  warning instead of error. **Action on MH: Close ticket.  \[DONE]** |
| B | [552](https://sourceforge.net/p/tei/feature-requests/552/) | [clarify how to encode author of subset or part  of document](https://sourceforge.net/p/tei/feature-requests/552/) |  | Kevin Hawkins | 2015\-04\-15 | SB Volunteers to add clarification prose to the note. **Action on  SB: Add clarification.** |
| B | [551](https://sourceforge.net/p/tei/feature-requests/551/) | [No abbr element in JTEI](https://sourceforge.net/p/tei/feature-requests/551/) |  | Lou Burnard | 2015\-04\-06 | Council recommends adding abbr (but not expan or choice). **Action  on MH: Add \<abbr\> element. \[DONE]** |
| C | [550](https://sourceforge.net/p/tei/feature-requests/550/) | [Provide place to record the Unicode  Normalization Form used](https://sourceforge.net/p/tei/feature-requests/550/) | rviglian | Jens Østergaard Petersen | 2015\-03\-24 | This appears to be more a XML issue than a TEI one. Unicode also provides quick  ways of checking for normalization: [http://unicode.org/reports/tr15/\#Quick\_Check\_Table](http://unicode.org/reports/tr15/#Quick_Check_Table) Some clarification in the Guidelines may be needed anyway (eg add prose to  projectDesc.)  **Action on RV: add clarification to guidelines** |
| C | [549](https://sourceforge.net/p/tei/feature-requests/549/) | [More flexible dateline for periodical edition  tracking](https://sourceforge.net/p/tei/feature-requests/549/) |  | M. H. Beals | 2015\-03\-22 | We don’t think the example constitutes a dateline. → close, reject |
| C | [548](https://sourceforge.net/p/tei/feature-requests/548/) | [Give more structure to abstract](https://sourceforge.net/p/tei/feature-requests/548/) |  | Laurent Romary | 2015\-03\-15 | We think Laurent’s request for structured abstract is reasonable, but are unsure  whether to create a new \<section\> that can only contain \<head\> and  \<p\> or to allow \<div\> but constrain it (presumably with Schematron)  when in the header. (note: *non transcriptional* div and  *non transcriptional* p for new element  proposal) |
| A | [547](https://sourceforge.net/p/tei/feature-requests/547/) | [Allow g in notatedMusic](https://sourceforge.net/p/tei/feature-requests/547/) |  | rviglianti | 2015\-03\-13 | Example does not appear to be notated music in the full sense at all. If there is  a case for both marking the presence of notated music and transcribing to some  extent the contents of the same, then two approaches suggest themselves: either  allow a text\-wrapper within notatedMusic (on the analogy of figure), e.g. ab or  seg or both, which itself could contain either text or text\-equivalents like  \<g\>. Or allow a \<choice\> between \<notatedMusic\> and its textual  representation. Rejected. If accepted, should probably be in the form of option 1,  i.e. adding seg and/or ab or equivalent to notatedMusic, certainly not \<g\>.  General rule should be that \<g\> should be allowed everywhere that character  data is allowed, and also vice  versa**. Should perhaps open a new ticket requesting the addition of a text\-bearing element  to the content of notatedMusic.**   **Action: close\-reject (PFS)** |
| A | [546](https://sourceforge.net/p/tei/feature-requests/546/) | [\<defaultVal\> should be removed from all  specs](https://sourceforge.net/p/tei/feature-requests/546/) | Syd Bauman | Lou Burnard | 2015\-02\-08 | We are not happy to opine definitively on this issue, on which Lou, Sebastian,  Martin, and Syd have already had a full discussion. That discussion seemed to be  moving in part at least toward mutual understanding if not consensus. It became  clear that default values express a necessary decision in the generation of  schemas (not just dtd or xsd) and that simply removing default values effectively  leaves that decision to the XSLT, without documentation in the ODD. The suggestion  that a constraint be added to warn that if \<defaultVal\> is used when  usage\="req", or if the value of \<defaultVal\> is not in a closed value list  seems welcome (and was implemented approximately 2 months ago). We suspect that  the alternative suggestions for the main point (dropping defaultVal and replacing  it with something else, or redefining defaultVal to be documentary only) have  unknown implications and should perhaps be deferred.  **Action: MH to report on cases where defaultVal is used.** |
| A | [545](https://sourceforge.net/p/tei/feature-requests/545/) | [Deprecate oVar and pVar, Revamp oRef and  pRef](https://sourceforge.net/p/tei/feature-requests/545/) | Stefanie Gehrke | Laurent Romary | 2015\-01\-31 | We don’t have enough data on the usage of the less common forms (pVar and oVar),  so we cannot judge confidently whether to drop them, i.e. whether there might not  be  people who will be affected. We may nevertheless support deprecation of \*Var and  extension of the content model of the \*Ref variants. Adding @notation to pRef is a  good idea. possibly in a class, have to check if @notation is used at other places.  **Action: MH to ask e.g. FN language encoders if they are using it.  Action: SG to ask on TEI\-L and TEI Ling SIG lists if anyone is using  them.** |
| B | [544](https://sourceforge.net/p/tei/feature-requests/544/) | [align oVar/ @type with the general taxonomy of  grammatical features](https://sourceforge.net/p/tei/feature-requests/544/) | Stefanie Gehrke | Piotr Banski | 2015\-01\-30 | Agree and recommend using datcat attributes. **Action on SG: If  Piotr agrees to suggestion, implement. (but bear in mind above ticket  545\).** |
| B | [543](https://sourceforge.net/p/tei/feature-requests/543/) | [Make the content model of occupation more  elaborate](https://sourceforge.net/p/tei/feature-requests/543/) | Fabio Ciotti | Laurent Romary | 2015\-01\-22 | Agreed. Make content model macro.specialPara; also should raise new ticket for  bringing other similar elements (\<residence\>, \<nationality\>,  \<climate\>, etc.) in line with this. **Action on FC:  Implement.** **Action on SB: create new ticket for other elements DONE** (new  ticket, FR \#563, created 2015\-06\-04\) |
| B | [542](https://sourceforge.net/p/tei/feature-requests/542/) | [Make occupation part of the content model of  author](https://sourceforge.net/p/tei/feature-requests/542/) | Fabio Ciotti | Laurent Romary | 2015\-01\-22 | NO. Council sub\-group believes strongly that \<occupation\> should not be  allowed as a child of \<author\>. It should reference a \<person\> if you  want this kind of detail. (Furthermore, there’s lots of cruft allowed inside  \<author\> that should not be.)  **Action: Waiting on Laurent to respond to JC’s comments otherwise  close.** |
| C | [541](https://sourceforge.net/p/tei/feature-requests/541/) | [Using \`\<zone\>\` for points and paths  rather than shapes](https://sourceforge.net/p/tei/feature-requests/541/) | Stefan Majewski | Martin Holmes | 2014\-12\-21 | Need clarification for use cases \- e.g. what is the need to finding a line on an  image as it has no area? → clarify definition of zone: should always be a closed area.  **Action on MH: Make a proposal for a path element** |
| C | [540](https://sourceforge.net/p/tei/feature-requests/540/) | [expanded recommendations on values of  @xml:id](https://sourceforge.net/p/tei/feature-requests/540/) | rviglianti | Kevin Hawkins | 2014\-12\-18 | Raff working on this. Will produce some examples illustrating best practices.  **Action on RV: Produce examples and recommendations.** |
| C | [539](https://sourceforge.net/p/tei/feature-requests/539/) | [New element annotatedU](https://sourceforge.net/p/tei/feature-requests/539/) | Lou Burnard | Lou Burnard | 2014\-12\-05 | \> to Friday 29 discussion |
| A | [538](https://sourceforge.net/p/tei/feature-requests/538/) | [guideline example \<msPart\>](https://sourceforge.net/p/tei/feature-requests/538/) | Stefanie Gehrke | Stefanie Gehrke | 2014\-12\-05 | Go for it, this appears to be very clear   **Action on SG: change to green, implement** |
| A | [537](https://sourceforge.net/p/tei/feature-requests/537/) | [Support for non\-ISO schematron (1\.4\) should be  removed](https://sourceforge.net/p/tei/feature-requests/537/) | Syd Bauman | Martin Holmes | 2014\-11\-19 | Ask Syd for a list of changes this would require. We have apprehension that  this might break many other things.  **Action on SB: Do something.** |
| A | [536](https://sourceforge.net/p/tei/feature-requests/536/) | [Make @source global](https://sourceforge.net/p/tei/feature-requests/536/) | James Cummings | Hugh A. Cayless | 2014\-11\-18 | May be feasible to define a global @source broadly enough to replace all three  of the local @source attributes currently in use; or at least two of them. Most of  the arguments against making @source global would apply also to making @resp and  @cert global, which we chose to do anyway. (But @source does have a particular  bibliographic meaning.) Consensus very very skeptical about making it global. **Action on HC: Produce set of examples for expansion of where @source  should be allowed for reconsideration.** |
| B | [533](https://sourceforge.net/p/tei/feature-requests/533/) | [Add profileDesc as optional child biblFull](https://sourceforge.net/p/tei/feature-requests/533/) | Hugh A. Cayless | Laurent Romary | 2014\-11\-14 | Laurent needs independent headers; our options are:* Add model.profileDescPart to the biblFull content model. * **Make the content model of biblFull an alternation between its  current model and the teiHeader model.** * Reintroduce independent headers by making teiHeader a child of  listBibl. * Why not just use teiHeader? * Just do nothing; Laurent can customise.   **Action on HC: Investigate implementation of \#2** |
| B | [531](https://sourceforge.net/p/tei/feature-requests/531/) | [New element for secluded text](https://sourceforge.net/p/tei/feature-requests/531/) | Hugh A. Cayless | Hugh A. Cayless | 2014\-10\-17 | We request that Hugh create an elementSpec we can look at, with the expectation  that it will be approved.  **Action on HC: Create draft elementSpec  and pass it by council for review.** |
| B | [525](https://sourceforge.net/p/tei/feature-requests/525/) | [translated from](https://sourceforge.net/p/tei/feature-requests/525/) | Syd Bauman | Fxp33 | 2014\-09\-14 | Council subgroup 2015\-05\-28: Assign again to SB to follow up, and with the  recommendation that he develop a proposal for @translationOf, to be available on  all text\-bearing elements. **Action on SB to follow up, but possibly create a proposal for  @translationOf on a new ticket. Done**, sort of: e\-mail sent to fxp33  2015\-05\-29 |
| C | [521](https://sourceforge.net/p/tei/feature-requests/521/) | [Allow \<lem/ \> to Contain Chunk\-Level  Markup](https://sourceforge.net/p/tei/feature-requests/521/) | Hugh A. Cayless | Gregor Middell | 2014\-07\-31 | \> to Saturday 30 discussion |
| C | [517](https://sourceforge.net/p/tei/feature-requests/517/) | [transcription of quranic "end of  ayah"\-sign](https://sourceforge.net/p/tei/feature-requests/517/) | Elli Mylonas | Tobias J. Jocham | 2014\-07\-07 | **Action on HC to poke Elli Mylonas and reassign if she isn’t planning  to finish it.** |
| C | [515](https://sourceforge.net/p/tei/feature-requests/515/) | [re\-think model.global's membership and use in  \<line\>](https://sourceforge.net/p/tei/feature-requests/515/) | Lou Burnard | Syd Bauman | 2014\-07\-02 | Needs more investigation by LB  **Action on LB: Investigate more.** |
| A | [511](https://sourceforge.net/p/tei/feature-requests/511/) | [New element \<transcriptionDesc\> as a  possible child of \<encodingDesc\>](https://sourceforge.net/p/tei/feature-requests/511/) | Martin Holmes | Thomas Schmidt | 2014\-06\-26 | Discuss along with annotation  proposal. **Action: On Original Poster, give us something we can discuss publicly.** |
| A | [507](https://sourceforge.net/p/tei/feature-requests/507/) | [create generic policy for the TEI on  integration of external standards](https://sourceforge.net/p/tei/feature-requests/507/) | Syd Bauman | Kevin Hawkins | 2014\-05\-10 | Subgroup wonders if this considers datatypes. Policy should deal with usages of  W3C datatypes/CSS, for example. More contextual information (even if history  cannot be used), examples, etc. would make it much clearer.  Guidance/recommendations against relying on external standards that are not  stable.  **Action on SB to pick this back up** |
| B | [505](https://sourceforge.net/p/tei/feature-requests/505/) | [Redefine \<msPart\>](https://sourceforge.net/p/tei/feature-requests/505/) | Stefanie Gehrke | Caroline T. Schroeder | 2014\-04\-29 | We basically like the originally\-proposed msFrag solution best; it’s clean and  straightforward. We see no strong objections raised to it so far.  Whole Council  agrees. **Action on SG (with MH):** generate elementSpec for  \<msFrag\>, and insert a subsection into the prose. |
| C | [504](https://sourceforge.net/p/tei/feature-requests/504/) | [Replace @active and @passive on relation with  @from and @to](https://sourceforge.net/p/tei/feature-requests/504/) | Hugh A. Cayless | Hugh A. Cayless | 2014\-04\-21 | relation for rdf\-like encoding is abuse. We should remove rdf\-like examples from  the guidelines and recommend better ways of representing rdf\-like statements  within TEI (eg with graph) or by embedding RDF\-XML.  **Action: close\-wontfix \[DONE]**  **Action: HC will create new FR for handling RDF** |
| C | [498](https://sourceforge.net/p/tei/feature-requests/498/) | [Permit new \<persona\> as a child of  \<person\>](https://sourceforge.net/p/tei/feature-requests/498/) | Lou Burnard | David J Birnbaum | 2014\-02\-22 | needs more investigation by LB  **Action on LB: Investigate more** |
| C | [496](https://sourceforge.net/p/tei/feature-requests/496/) | [\`\<taxonomy\>\` should be allowed as a child  of \`\<category\>\`](https://sourceforge.net/p/tei/feature-requests/496/) | Martin Holmes | Martin Holmes | 2014\-01\-31 | **Action: MH to bug everyone on the Council list about this, and if no  objections in 2 weeks, go ahead.** |
| A | [482](https://sourceforge.net/p/tei/feature-requests/482/) | [The term strikes back \- terminology  chapter](https://sourceforge.net/p/tei/feature-requests/482/) | Lou Burnard | Laurent Romary | 2013\-11\-06 | Possible we just didn’t discuss it last time? |
| A | [479](https://sourceforge.net/p/tei/feature-requests/479/) | [Adding the @place attribute to \<head\> and  \<seg\>](https://sourceforge.net/p/tei/feature-requests/479/) | Sebastian Rahtz | Ville Marttila | 2013\-10\-29 | **Action: HC to close, since there’s been no followup** |
| B | [464](https://sourceforge.net/p/tei/feature-requests/464/) | [Need for some way to test the oxygen\-tei  package before release](https://sourceforge.net/p/tei/feature-requests/464/) | Martin Holmes | Martin Holmes | 2013\-07\-05 | Agreed, we don’t see a practical way to have good test coverage. Maybe a manual  process that is defined in a release\-manual is enough. **Action: MH to  test straightforward things, and not think of really complicated  tests.** |
| B | [459](https://sourceforge.net/p/tei/feature-requests/459/) | [warn user of dropped constructs](https://sourceforge.net/p/tei/feature-requests/459/) | Syd Bauman | Syd Bauman | 2013\-06\-17 | **Closed**, is already implemented. Related tickets with  partial aspects still open. |
| B | [457](https://sourceforge.net/p/tei/feature-requests/457/) | [make explicit difference between tagUsage and  ODD documentation](https://sourceforge.net/p/tei/feature-requests/457/) | Lou Burnard | Kevin Hawkins | 2013\-05\-24 | **Action on LB: Remind LB to have a look at bullet 4 of the last  comment.** |
| C | [384](https://sourceforge.net/p/tei/feature-requests/384/) | [free\-standing attributes \-\> class](https://sourceforge.net/p/tei/feature-requests/384/) | Paul Schaffner | Sebastian Rahtz | 2012\-09\-15 | **Action on PFS: Create list of changes needed.** |
| C | [378](https://sourceforge.net/p/tei/feature-requests/378/) | [Encoding of Standoff annotations](https://sourceforge.net/p/tei/feature-requests/378/) | Peter Stadler | Javier Pose | 2012\-08\-26 | This ticket shd be linked to stdoff proposal. |
| C | [360](https://sourceforge.net/p/tei/feature-requests/360/) | [New attribute @keepHyphen](https://sourceforge.net/p/tei/feature-requests/360/) | Paul Schaffner | Martin de la Iglesia | 2012\-05\-03 | **Action on PFS** : to provide examples, one simple, one  complex, so coded as to represent Lou’s preferred solution (two different glyphs for  two different kinds of hyphen \-\- not the original suggestion of a kludgy @keepHyphen  attribute. ) See comments on ticket. |
| C | [326](https://sourceforge.net/p/tei/feature-requests/326/) | [an \<object\> element](https://sourceforge.net/p/tei/feature-requests/326/) | Sebastian Rahtz | Sebastian Rahtz | 2011\-10\-14 | No activity from SIG., We propose ticket should be closed as now over 4 years  old. Can always be reopened if action happens. **Action on HC to close  with comment.** |
|  |  |  |  |  |  |  |
| C | [366](https://sourceforge.net/p/tei/feature-requests/366/) | [rationalize content models of org and place (etc)](https://sourceforge.net/p/tei/feature-requests/366/) | James Cummings | BODARD Gabriel | 2014\-01\-26 | Could close ticket until JC stops having real work to do. |
| C | [324](https://sourceforge.net/p/tei/feature-requests/324/) | [Allow certainty etc. inside milestoneLike  elements](https://sourceforge.net/p/tei/feature-requests/324/) | BODARD Gabriel | BODARD Gabriel | 2012\-06\-03 |  |





 Amber Bugs
 
 Group A: MH, PWS, RV, HC (on Saturday)


Group B: FC, SM, SB


Group C: LB, JC, PFS, 
 HC





| **GRP** | **\#** | **Summary** | **Owner** | **Creator** | **Created** | **Notes** |
| --- | --- | --- | --- | --- | --- | --- |
| A | [754](https://sourceforge.net/p/tei/bugs/754/) | [Need for a standard way to warn of class changes  affecting ODDs](https://sourceforge.net/p/tei/bugs/754/) |  | Martin Holmes | 6 days ago | \> close. It’s the user’s responsibility to associate their ODD with a specific  release, or deal with “nightly” builds. |
| A | [753](https://sourceforge.net/p/tei/bugs/753/) | [\<app\> is phrase\-level](https://sourceforge.net/p/tei/bugs/753/) | Hugh A. Cayless | Marjorie Burghart | 2015\-05\-18 | Defer to tomorrow’s discussion. |
| A | [752](https://sourceforge.net/p/tei/bugs/752/) | [Inconsistent extension on ODD template file](https://sourceforge.net/p/tei/bugs/752/) |  | Martin Holmes | 2015\-05\-13 | \> possibly change from xml to odd extension;  **Action on MH:** check with SPQR about motivation for odd  extension. **\[DONE/closed; the problem resolved itself,  apparently.]** |
| B | [751](https://sourceforge.net/p/tei/bugs/751/) | [\<event\> not allowed in \<org\>](https://sourceforge.net/p/tei/bugs/751/) | Syd Bauman | Syd Bauman | 2015\-04\-24 | Council subgroup agrees;. Approach appears to be clear. **Acton on  SB:** poke list to review branch P5/for\-bug\-75/1 \[DONE, although I haven’t seen  my post show up on list yet], and if no objections in 2 weeks implement |
| B | [749](https://sourceforge.net/p/tei/bugs/749/) | [fatal bug in 2\.8\.0 apropos  att.global.rendition](https://sourceforge.net/p/tei/bugs/749/) |  | Sebastian Rahtz | 2015\-04\-14 | already fixed, confirmed by reviewing the source. (ticket closed) |
| B | [747](https://sourceforge.net/p/tei/bugs/747/) | [Updating Roma/ eXist on release day: improve the  process](https://sourceforge.net/p/tei/bugs/747/) |  | Martin Holmes | 2015\-04\-04 | **Action on PWS to fix the problem, making sure that Roma, and any other  release scripts still work.** |
| C | [746](https://sourceforge.net/p/tei/bugs/746/) | [Adjustment of example at Guidelines 16\.2\.5](https://sourceforge.net/p/tei/bugs/746/) |  | Joel Kalvesmaki | 2015\-03\-25 | **Action : assigned to LB, who fixed it.** |
| C | [745](https://sourceforge.net/p/tei/bugs/745/) | [Menu item has bad link](https://sourceforge.net/p/tei/bugs/745/) | Kevin Hawkins | Joel Kalvesmaki | 2015\-03\-25 | **already closed\-fixed (MDH)** |
| C | [744](https://sourceforge.net/p/tei/bugs/744/) | [Broken clarosnet/ Ashmolean links in relation  example](https://sourceforge.net/p/tei/bugs/744/) | Martin Holmes | Martin de la Iglesia | 2015\-03\-13 | **Action: HC open new ticket, close this one** |
| A | [740](https://sourceforge.net/p/tei/bugs/740/) | ["freestanding event" in 13\.3\.2\.2](https://sourceforge.net/p/tei/bugs/740/) | Stefanie Gehrke | Piotr Banski | 2015\-02\-20 | **Action on SG**: Check whether \<gi\>  elements are missing and rephrase according to the proposal. mark green |
| A | [738](https://sourceforge.net/p/tei/bugs/738/) | [documentation for \<media\> vs.  att.media](https://sourceforge.net/p/tei/bugs/738/) | Peter Stadler | Piotr Banski | 2015\-02\-18 | This is really a feature request, that overriding part of an inherited model does  not mean you are no longer a member of that model, and the documentation should  reflect that. **Action on MH to open a BugUG and close the current  ticket. \[DONE]** |
| A | [737](https://sourceforge.net/p/tei/bugs/737/) | [explaining NFC](https://sourceforge.net/p/tei/bugs/737/) | Stefan Majewski | Jens Østergaard Petersen | 2015\-02\-18 | Was just a clarification in the text, have fixed this commit r13223 **\[DONE]** |
| B | [736](https://sourceforge.net/p/tei/bugs/736/) | [compatibility characters among East Asian  logographs](https://sourceforge.net/p/tei/bugs/736/) | James Cummings | Jens Østergaard Petersen | 2015\-02\-18 | Accepted and fixed **\[DONE]** |
| B | [735](https://sourceforge.net/p/tei/bugs/735/) | [older strata](https://sourceforge.net/p/tei/bugs/735/) | Fabio Ciotti | Jens Østergaard Petersen | 2015\-02\-18 | Accepted and fixed **\[DONE]** |
| B | [730](https://sourceforge.net/p/tei/bugs/730/) | [Unicode history](https://sourceforge.net/p/tei/bugs/730/) | Hugh A. Cayless | Jens Østergaard Petersen | 2015\-02\-18 | Subgroup thinks that a better correction should be  “  by the time the Unicode standard was first being developed”. |
| C | [728](https://sourceforge.net/p/tei/bugs/728/) | [lamenting the passing of SGML SDATA](https://sourceforge.net/p/tei/bugs/728/) | Stefanie Gehrke | Jens Østergaard Petersen | 2015\-02\-18 | Fair cop. Revise this section and rename it … maybe delete the whole thing. [http://www.tei\-c.org/release/doc/tei\-p5\-doc/en/html/CH.html\#D4\-45\-2](/release/doc/tei-p5-doc/en/html/CH.html#D4-45-2) |
| C | [727](https://sourceforge.net/p/tei/bugs/727/) | [dated XML processor info](https://sourceforge.net/p/tei/bugs/727/) | Stefan Majewski | Jens Østergaard Petersen | 2015\-02\-18 | Comment SM: I find this information not dated, I think this still holds, even  though many people use UTF\-8 today. |
| C | [724](https://sourceforge.net/p/tei/bugs/724/) | [part of the "Title" clipped by Roma, in a  somewhat sneaky fashion](https://sourceforge.net/p/tei/bugs/724/) | Hugh A. Cayless | Piotr Banski | 2015\-02\-18 | Is the Council able to support Roma? In any case, this should be transformed into  a  Github issue **Action on HC**: mark green, assign to MH (and duplicate issue on  GitHub) |
| A | [721](https://sourceforge.net/p/tei/bugs/721/) | [hors d'oeuvre unpalatable in 9\.4](https://sourceforge.net/p/tei/bugs/721/) | Stefan Majewski | Piotr Banski | 2015\-01\-30 | **Action: SM implement (**Update the inline examples for what  the referenced dictionaInries REALLY provide)Include example of use of @notation  e.g. for sampa |
| A | [718](https://sourceforge.net/p/tei/bugs/718/) | [dated info on XML processors](https://sourceforge.net/p/tei/bugs/718/) | Syd Bauman | Jens Østergaard Petersen | 2015\-01\-21 | The first sentence could be slightly rewritten. We think the whole chapter could  stand to be revisited, but this is low priority. |
| A | [710](https://sourceforge.net/p/tei/bugs/710/) | [xml:lang/ langUsage](https://sourceforge.net/p/tei/bugs/710/) | Syd Bauman | Jens Østergaard Petersen | 2015\-01\-21 |  |
| B | [706](https://sourceforge.net/p/tei/bugs/706/) | [revisionDesc suggesting order of changes](https://sourceforge.net/p/tei/bugs/706/) | rviglianti | Sebastian Rahtz | 2015\-01\-17 | Subgroup suggest to drop “Conventionally” or even to drop the whole sentence **Action on RV: Fix all examples in the guidelines;Remove  ‘Conventionally’.** |
| B | [703](https://sourceforge.net/p/tei/bugs/703/) | [nonsense in remarks of \<specGrp\>](https://sourceforge.net/p/tei/bugs/703/) | Syd Bauman | Syd Bauman | 2015\-01\-03 |  |
| B | [697](https://sourceforge.net/p/tei/bugs/697/) | [sequence of declaration info is lost when making  an ODD](https://sourceforge.net/p/tei/bugs/697/) | Lou Burnard | Lou Burnard | 2014\-10\-31 |  |
| C | [696](https://sourceforge.net/p/tei/bugs/696/) | [macro.paraContent doesn't contain l](https://sourceforge.net/p/tei/bugs/696/) | James Cummings | Hugh A. Cayless | 2014\-10\-18 | But it does already, HC obviously smoking crack. (HC had done previously, but  forgotten to close the ticket) CLOSED. |
| C | [695](https://sourceforge.net/p/tei/bugs/695/) | [distributed spec files point at wrong schema  location](https://sourceforge.net/p/tei/bugs/695/) | Peter Stadler | Peter Stadler | 2014\-10\-12 | This is already fixed |
| C | [630](https://sourceforge.net/p/tei/bugs/630/) | [use of \<listRef\> in specs](https://sourceforge.net/p/tei/bugs/630/) | Lou Burnard | Kevin Hawkins | 2013\-12\-28 | Low priority: LB to try harder |
| A | [581](https://sourceforge.net/p/tei/bugs/581/) | [\`\<attRef\>\` needs better documentation](https://sourceforge.net/p/tei/bugs/581/) | Martin Holmes | Martin Holmes | 2013\-06\-24 | **Action: MH to improve documentation** |
| B | [563](https://sourceforge.net/p/tei/bugs/563/) | [inconsistent encoding of citations to sources of  examples](https://sourceforge.net/p/tei/bugs/563/) | Paul Schaffner | Kevin Hawkins | 2013\-04\-12 |  |
| C | [548](https://sourceforge.net/p/tei/bugs/548/) | [use of modal verbs in Guidelines](https://sourceforge.net/p/tei/bugs/548/) | Kevin Hawkins | Kevin Hawkins | 2013\-04\-08 | Action on JC: He MUST \-\- no, SHALL \-\- review uses of “should” (etc.) and  distribute them among MUST (or SHALL), SHOULD, and possibly MAY (or alternative  formulation altogether.) JC also to add a short discussion on Modal Verbs and their  use in the Guidelines. |
| A | [216](https://sourceforge.net/p/tei/bugs/216/) | [half title pages in TEI Tite](https://sourceforge.net/p/tei/bugs/216/) | Syd Bauman | Kevin Hawkins | 2010\-08\-09 |  |


Check Green Bugs / FR for updates on status?


Check RED Bugs / FR for updates on whether should just be closed or potential status
 change?




