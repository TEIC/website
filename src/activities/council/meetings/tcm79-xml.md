---
title: "TEI Council Minutes: Face to Face in Providence 2016-04-25/27"
date: 2016-04-27
---
# TEI Council Minutes: Face to Face in Providence 2016-04-25/27



TEI Council Minutes: Face to Face in Providence
 2016\-04\-25/27Meeting started @ 04\-25 \~09:40 with:
 
 * Syd Bauman (SB)
* Raff Viglianti (RV)
* Lou Burnard (LB)
* James Cummings (JC), chairing Monday Morning
* Elisa Beshero\-Bondar (EB)
* Peter Statler (PS)
* Elli Mylonas (EM), local organizer
* Stefan Majewski (SM) (departed 04\-27 \~15:50\),
* Martina Scholger (MS)
* Magdalena Turska (MT)
* Hugh Cayless (HC) (arrived late at 04\-25 12:45\. Thank you American Airlines)


 Meeting ended 04\-27 \~16:55
 
 
 
 Action Items Summary
 
 

| Action | Responsibility | Due Date |
| --- | --- | --- |
| reach out to TeX community — can they help us maintain the TEI\-\>LaTeX\-\>PDF  pipeline? | LB | 2016\-06\-01 |
| organize virtual Stylesheets sessions, either semi\-monthly or quarterly | SB | 2016\-06\-01 |
| Fix the (LaTeX) build | SM |
| move Roma tickets from TEIC/TEI to TEIC/Roma | PS | 2016\-05\-12 |
| Add to TCW\-22 a step to check on OTHER repos for release\-blocking issues:  stylesheets, oxgarage, Roma, oXygen framework, any TEI\-C repos that have current  issue. | HC, release tech group | 2016\-06\-01 |
| ask Ian Rifkin to make a subdomain in TEI\-C for debian release packages. Name  for repo? packages.tei\-c.org. To point to a packages/ folder on tei\-c. Needs about  3–4 gigabytes. | HC | 2016\-07\-01 |
| try removing the dependency on Oxygen (via commenting out the task in the  makefile). | MH | 2016\-06\-01 |
| locate the missing correspDesc commits | PS | ASAP |
| See if XML documentation can be displayed on GitHub | RV, HC | 2016\-06\-01 |
| Revise TEI Simple documentation language. | LB |
| Modify stylesheets so as to process processing model elements in reference  documentation for an ODD; | SB, HC |
| develop a proposal for how and where ProcMod should be incorporated into  TEI\-C/Stylesheets/ repository. | MT | 2016\-07\-01 |
| make a JavaScript version of Roma! Will interface with oxGarage for  processing. | RV | Next F2F |
| try looking at the PHP and fix the old sanity checker and remove it from the  user view until it might be fixed. | HC | 2016\-07\-01 |
| ask JF, or on SB to ask MSMcQ for a pointer to papers from Darmstadt — MSMcQ  thinks there are none available on the web (they are planning a printed monograph,  though) | EM, SB | DONE |
| ask JF about upcoming book on modelling | LB |
| send Council a pointer to papers from Brown modelling conference — [here is index page; few papers, but lots of  videos!](http://www.wwp.northeastern.edu/outreach/conference/kodm2012/) | SB | DONE |
| eport to EP that Council members are interested in exploring methods of  formalising the abstract model (though less so in the formats in which this might  be  serialized). Done, but don’t know if paper was submitted. | HC | DONE |
| Investigate the dates of real conference start. | HC |
| get Council to understand Stylesheets more than they do now, by any reasonable  means | HC |




 
 Agenda
 
 
 
 Day 1, Mon 04\-25 09:30–17:00
 
 * 09:30–10:00: Agenda setting
* The future of PDF generation. LaTeX, etc.
* SM explains that PDF generation, while not broken, has problems and is quite
 fragile. E.g.:
* Font dependencies
* Stylesheet maintenance
* Suggestion \#1 (MT): create a test suite to exercise that which we know is
 fragile
* We have both a political and a practical issue:
* Stylesheet author is no longer with us;
* Why are we producing PDF, anyway?
* Because TEI\-\>PDF is a desirable set of stylesheets to have
 anyway
* We have both LaTeX and XSLFO generation paths (the latter in
 oXygen)
* There seems to be general agreement within council that PDF
 generation is important and the council needs to maintain it. (See [GH \#1357](https://github.com/TEIC/TEI/issues/1357))
* Action on LB (by 2016\-06\-01\): reach out to TeX
 community — can they help us maintain the TEI\-\>LaTeX\-\>PDF
 pipeline?
* PS: or hire it out?
* Or rewrite with XSLFO? TEI\-\>PDF (nb we already have some FO
 stylesheets written by Sebastian, which is what Oxygen uses)
* Discussion: Are there enough people in our community who know
 XSL\-FO?
* SB: Make it an iceberg we all chip at or one we all try to grok in
 its entirety?
* JC: Let’s have a meeting or something to do in\-depth training for
 Stylesheets and fixing bits of them. But not just one or two people, but
 most of Council.
* SB: Spend one day each in the next three F2Fs on the Stylesheets
 together. Plus dedicated conference calls in addition to our regular
 business on Stylesheets.
* Action on SB (by 2016\-06\-01\): to organize
 virtual Stylesheets sessions, either semi\-monthly or quarterly
* Action on SM: Fix the (LaTeX)
 build


  
 
 * Main current problem is just that underlying GNU/Linux system no longer includes
 the same font we used for Japanese; all we have to do is switch to the new one, so
 this sounds like a solvable problem.
* Use of Processing Model driven transformations of the guidelines is a
 possibility.
* LB: how best should we devote our limited technical resources?
* SB: We should maintain PDF ourselves as best we can, and not outsource it. For
 the long term, presumably we do this through XSL\-FO and not LaTeX. We have already
 put some work into this and have a starting point with XSL\-FO


  
 
 Action on PS by 2016\-05\-12: move Roma tickets from TEIC/TEI to
 TEIC/Roma
 
  
 
 * Action on HC and release tech group by 2016\-06\-01: Add
 to TCW\-22 a step to check on OTHER repos for release\-blocking issues: stylesheets,
 oxgarage, Roma, oXygen framework, any TEI\-C repos that have current issue.
* TICKET PROCESSING (See below)


  
 
 Lunch in the meeting room: 12:00 (actual time: 12:40\)
 
  
 
 * 13:30: Jenkins / build process reformation discussion (Martin Holmes to join @
 13:15 — actual time \~13:25\)
* Jenkinses and Build processes: the Stylesheets are dependent on downloading
 a copy of the fully\-expanded ODD from the last release and/or using a local
 copy; the TEI build is dependent on the Stylesheets. The way the Stylesheets
 tests run tend to flag up insignificant changes as errors (language changes in
 specs, e.g.) and sometimes to conceal new bugs, because of the reliance on an
 older copy of the ODD.
* Something Must Be Done about the testing regime. Consider going through
 and pruning/altering all the tests. Can we do better than comparing files
 with old results character\-by\-character?
* Ubuntu 16\.04 LTS just came out, and that's a long\-term release, so it'll
 last for several years. Martin has made a start on that.
* MH has done some reorganization on his own server:
* Stylesheets\-dev, TEIP5\-dev, etc.
* Stylesheets, TEIP5, etc. track the master branch
* New Jenkins repo: <https://github.com/TEIC/Jenkins>
* Using Java 8, which is the default on Ubuntu 16\.04
* Dependency on TEI packages, MH doesn't like that and thinks we should move
 away from it;
* Stylesheets dependency on Oxygen, which it gets via the TEI package; we
 think the actual dependency is on Doxygen, which is an Open Source
* PDF build of the guidelines depends on specific Japanese fonts, which new
 Ubuntu doesn't have
* Manually install new fonts and change dependency in Stylesheets
* PS brings up idea of Docker wrapper for TEI Jenkins; MH asks if he
 should try to make a Docker setup; PS suggests first figure out the Jenkins
 install script, because Docker would use it anyway.
* MH will install new fonts on his Jenkins and try it out.
* MH and SM to work on Stylesheets LaTeX process
* Debian packages and general distribution of releases. Homebrew support might be
 nice too. They are now two releases out of date (v 2\.8\.1\). SM: Actually, the
 debian packages \*are\* built, working packages that are current but not distributed
 yet: A problem because 1\) we need to decide where to put them, 2\) how to
 reference the location where they are put, and 3\) we need a method for signing
 it (used to be signed by Sebastian.
* Special package repository on TEI\-C? Signing has to be handled by a local
 machine with access to debian.
* We shouldn't have a signing key on the Jenkins server\-\-too open to anyone.
* Package list from last f2f [https://docs.google.com/spreadsheets/u/1/d/1w3ObgtqxpwYLrfaF\-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit?usp\=drive\_web](https://docs.google.com/spreadsheets/u/1/d/1w3ObgtqxpwYLrfaF-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit?usp=drive_web)
* Action on HC (by 2016\-07\-01\): to ask ??? to make a
 subdomain in TEI\-C for debian release packages. Name for repo?
 packages.tei\-c.org. To point to a packages/ folder on tei\-c. Needs about 3–4
 gigabytes.
* Ideally packages.tei\-c.org/deb for Debian packages
* MH: We seem to missing oXygen packages in our current packages list. Is
 there something on the Oxford server for oXygen? JC: I don’t see any oxygen
 packages there that you don’t have. LB: we decided oXygen packages were
 redundant. SM looked at doxygen\-\-it seems that Sebastian used oXygen b/c doxygen
 doesn't support XSLT out of the box. MH: Do we need to write an intermediate
 XSLT that doxygen can ingest—probably wouldn't be too hard. SB (and others): too
 much time and effort for a redundant documentation system. MH: Why don't we
 comment out that task in the makefile and see what happens? (General
 agreement).
* SB: What's most important is for us to provide both good internal documentation (for
 programmers) and (separately) good external documentation (for users); we shouldn't
 have to
 worry about how this internal documentation for the programmer is leveraged.
* HC: We really need better documentation for the stylesheets!
* Action on MH by 2016\-06\-01: try
 removing the dependency (via commenting out the task in the makefile).
* More TICKET PROCESSING
* Lost Guidelines material \- HC
* HC: A GitHub issue in between commits between HC and PS. Find those commits.
 Merges are risky.
* Action on PS (ASAP) to locate the specific commits in
 question.
* Need to discuss protocols for branching and merging so we have better
 branching discipline. After a merge, go and check to see if the latest stuff
 wasn't lost. And pull changes from dev into a branch before we merge back.
* See what we've already posted here re GitHub procedures: [https://github.com/TEIC/TEI/blob/dev/Documents/Git\-README.md](https://github.com/TEIC/TEI/blob/dev/Documents/Git-README.md)
* Always merge changes from dev into your branch before you begin working in
 the branch. Keep the branches up to date. This ensures that the only difference
 between your branch and the dev is your changes.
* Where should this documentation go? (Also where should the TCW stuff go?)
 Migration of our documentation? SB: Keep it in TEI! LB: Ideally, use GitHub
 pages and TEI boilerplate in those pages (if it'll take
 it). Action on RV (2015\-06\-01\) to see if this will work.
* A “NoXSL” solution with TEI Boilerplate CSS (demo): <http://raffazizzi.github.io/TEIditto/>


  
 
 

 
 Day 2, Tue 04\-26, 09:00–17:00
 
 * Agenda review
* Elections Committee—need a volunteer not running for re\-election
* Elections committee is looking for a volunteer, who is not standing for
 re\-election
* EM volunteers
* TEI Simple
* TEI Simple: MT and JC have prepared an overview for F2F listing decisions to
 be made to bring this customisation exemplar under Council support. We’ve
 already agreed to do so but can modify Simple in the process. The prepared
 document is at [https://docs.google.com/document/d/1E1ZrN93QJttiUvP1NzqR05o1uUqX\_\-eHWFX\_z42BPow/edit\#heading\=h.ualhk2xiuvbp](https://docs.google.com/spreadsheets/u/1/d/1w3ObgtqxpwYLrfaF-N0SPTt5X3ITmg2iLa5ZevAg3eE/edit?usp=drive_web)
* JC: Simple was made by looking at a lot of text archives and inventorying
 the minimal tagset needed to represent them. This is similar to how TEI Lite was
 made, hence the similarities between them, but they are significantly different.
 One aspect that is different is use of processing model. RV: ProcMod may be
 problematic because it doesn't go far enough; LB: ProcMod could do a lot more.
 JC: Better to start with a simple (no pun intended) processing model and then
 build on that then try to create the perfect complete versio ab initio. HC: Are
 we talking about supporting just the Processing Model as it appears in Simple
 and only for a web target? LB: For example, the customization only supports CSS.
 MT: The current ProcMod XSLT is not intended to be all\-encompassing, but the
 ProcMod shouldn't be limited. Argues against having a reference implementation;
 current one is a prototype, not a "reference implementation". The XQuery
 implementation is better, but already goes beyond what we permit. LB: Are you
 saying it allows TEI Processing Models that are invalid? MT: Yes, it extends the
 spec.PS and HC: Consider what a "reference implementation" should do. We
 are the only ones who could define a reference implementation. LB: disagrees
 that we should define a reference implementation and thinks we should drop the
 term. LB and HC: Our responsibility is to set a standard for conformance. SB:
 But we can't be tracking down everything that isn't using the TEI namespace. MT
 and JC: Experimental implementations shouldn't have to be TEI conformant\-\-they
 can be made conformant later. LB: Why aren't they TEI conformant already\-\-why no
 feature requests yet? MT: It's not mature enough yet. SB: It's not an imperative
 on people outside the community to give back their implementations to TEI.
 (Though nice when they do) RV: ODD is a customization system and a schema
 definition language, as well as documentation for humans and machines (as it
 lets us generate Guidelines). It's not really a way of transforming your
 texts\-\-\-Should transformation language really be part of a schema language in
 the first place? If it's only needed to discuss in documentation, that's
 different from setting instructions for transformation. JC: It should be
 documentation of some ways in which one \*might\* transform: it's documenting of
 intent. SB and JC: Sebastian's hope was that ODD would grow to document
 processing models. How separate is the processing model XSLT from Stylesheets?
 MT: They're completely separate at the moment. JC: There's no dependency on
 existing stylesheets. SB: What happens when users start using this and want
 output? JC: It works like this: XSLT looks at your ODD and produces XSLT that
 matches the documentation of processing models in your ODD, this can then be
 used to transform documents or acts as a starting point for the transformation
 process. PS: That's useful, and people like it, but it's not the core of our
 work. We should work on the documentation. SB: How is the documentation
 representing the Simple customization? JC: Not really doing it well\-\-that needs
 to be represented.HC: How does this affect the rendering of the Guidelines?
 JC: It can only indicate something intended for output.JC and MT: Think of
 "processing engine" instead of "processing model". The model is what is
 documented in the ODD. It is documentation, human and machine readable in the
 good tradition of ODD. The implementations are “processing engines” which do
 something with it.
* Relation of TEI Simple to TEI Lite? TEI Lite is older, but not deprecated.
 Is there concern that MartinM based so much of the prose on TEI Lite, which
 makes it harder for us to differentiate these for users? EB: We need
 meta\-documentation of thee all the different customization options available.
 JC: We could provide something explaining context at the top of the TEI Simple
 documentation, there is some there, but it could be improved/expanded.
* Review of the documentation in TEI Simple, its difference from TEI Lite
 suggests some parts might quickly (though it does feature a publication date),
 and could use revision. LB would be best person to work on revision.
* Issue with no standardization of TEI Header in TEI Simple. LB: Two different
 Simple projects will have incompatible TEI headers. JC: This was by design. TEI
 Simple only simplifies the content of \<text\>. Partly because the project
 only had so much time, and partly because they agreed that headers were so
 different for different needs that it is unrealistic to make a simple header
 that all the targets for simple will benefit from.
* Action on LB: Revise TEI Simple documentation
 language.
* Action on HC and SB: Modify stylesheets so as to
 process processing model elements in reference documentation for an ODD; note
 this is different from an implementation of a processing model engine.
* LB: Feature requests: Don't entertain feature requests for new elements in
 Simple. Feature requests should be about the ProcMod.
* EM: We should encourage people to make their own customizations, and direct
 people to resources on how to do that. LB and EM: The intro to Simple should
 send people to information on how to customize for themselves if they don't want
 Simple's particular customization.
* JC: Suggests that we should always entertain feature requests but after it
 has been published for a while then as with other exemplars feature requests
 should be treated very conservatively. SB agrees with JC (in this and many other
 things!) JC insists this is minuted for future reference since it is so
 rare.
* HC to add procmod implementation to Stylesheets?
 Important to make explicit that this is a best effort implementation for Simple.
* Action on MT (by 2016\-07\-01\): To
 develop a proposal for how and where ProcMod should be incorporated into
 TEI\-C/Stylesheets/ repository.
* LB has done some testing of ProcMod already, available [on GitHub](https://github.com/lb42/lb42-testprocmod)
* Processing Model \-TEI ProcMod implementation: do we want to maintain the draft
 reference implementation that we have?
* Discussed above with TEI Simple, we really should talk about these things
 separately but always veer into discussing processing model when discussing
 simple as a customization.


  
 
 * Ticket processing


  
 
 Lunch out: 12:30
 
  
 
 * Ticket processing
* Strategic Planning:
* Use of ODD outside the community
* MEI, [W3C Music Notation Community
 Group](https://www.w3.org/community/music-notation/) (?), JATS (?), ITS, …
* RV: The Music Notation Community is using ODD successfully. Is there a
 way to present ODD for use outside of TEI, as a product of the TEI Council?
 Discussion: What would this really involve? Some explanation that this can
 be used for presenting other schemas.
* Possible actions points:
* Extend prose on tei\-c.org ODD page to indicate that ODD can be used
 to define languages other than the TEI
* Produce examples and point to existing examples
* PDF generation process, XSLT maintenance in general:
* Would be useful to make Stylesheets test suite more efficient
* Outsourcing the coding of tools (e.g. XSLFO for PDF guidelines):
* Ask for help from community?
* How to monitor process to maintain tools after creation?
* Question of whether W3C is still supporting XSLFO or not.
* Last update 2015\-07: [https://www.w3\.org/standards/techs/xsl\#w3c\_all](https://www.w3.org/standards/techs/xsl#w3c_all)
* Current consensus is that PDF generation is currently fixed, so this is
 not particularly urgent, and being punted.
* What to do about Roma? RV volunteers to attempt a javascript version (better
 than Byzantium) — Action on RV by next F2F: to make a
 JavaScript version of Roma! Will interface with oxGarage for processing. JC
 volunteers to help RV in testing and ODD matters.
* kill the sanity checker? JC: It's not working because of pure ODD and
 issues with PHP code—to much trouble to fix? Pure ODD is causing the sanity
 checker to break. RV might approach sanity checking differently.
* Action on HC by 2016\-07\-01 to try looking at the
 PHP and fix the old sanity checker and remove it from the user view until it
 might be fixed.
* Elena Pierazzo asks about Council’s opinion of the TEI Next stuff she talked
 about in Lyon. She’s considering submitting an abstract for the Fall meeting,
 and pondering how to take it further. [http://tei2015\.huma\-num.fr/en/papers/\#140](140)
* Action on EM to ask JF, or on SB to ask MSMcQ for a
 pointer to papers from Darmstadt — MSMcQ thinks there are none available on
 the web (they are planning a printed monograph, though)
* Action on LB to ask JF about upcoming book on
 modelling
* Action on SB to send Council a
 pointer to papers from Brown modelling conference — [here is index page; few papers, but lots
 of videos!](http://www.wwp.northeastern.edu/outreach/conference/kodm2012/)
* Action on HC to report to EP that Council members
 are interested in exploring methods of formalising the abstract model
 (though less so in the formats in which this might be serialized).


  
 
 

 
 Day 3, Wed 04\-27, 09:00–13:00
 
 * Commemoration of Sebastian Patrick Quintus Rahtz
* Council mourns the loss of one of its best and brightest, and expresses its
 condolences to the Rahtz family. A silence is held followed by members of the
 council being sarcastic to each other in the affectionate manner of
 Sebastian.
* Fall F2F
* Are we settled on Vienna? Logistics?
* TEI Conference is scheduled for 2016\-09\-26/30; so we will plan for Sun 25ish
 to Wed 28ish, depending on when the conference begins.
* Action on HC Investigate the dates
 of real conference start.
* Ticket processing


 Lunch out: 12:30
 
  
 
 * Ticket processing
* Stylesheet discussion 2–3 hours (HC)
* Council intended to do this but ran out of time. Action on
 HC to get Council to understand Stylesheets more than they do now, by any
 reasonable means.


  
 
 



