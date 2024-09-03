---
title: "TEI Technical Council Minutes 2015-07"
creator: TEI Technical Council
date: 2015-07-28
---
# TEI Technical Council Minutes 2015-07



Teleconference 2015\-07\-28 14:00 UTC


Present:
 
 * Syd Bauman (SB)
* Fabio Ciotti (FC)
* Hugh Cayless (HC)
* Martin Holmes (MH)
* Peter Stadler (PWS)
* Raff Viglianti (RV)
* James Cummings @ 14:23 (JC)
* Paul Schaffner @ 14:07 (PS)


Apologies:
 
 * Stefanie Gehrke (SG)
* Lou Burnard (LB)



 Agenda
 
 What to do about Sourceforge
 
 - Reasons for leaving: wobbly
 infrastructure, shady practices, technology unlikely to improve. Are there good
 reasons to stay?

- should we move to Git / GitHub? Are there alternatives
 we want to explore?



| **pros** | **cons** |
| --- | --- |
| Better prospects for stability. | Migration process. |
| Stylesheets and Simple are already there. | Possible loss of important history. |
| Better forking/merging. | Loss of sequential rev numbers. |
| Slightly better integration of ticketing and commits. | Slightly higher learning curve for new users. |
| Pull requests / opportunity for better community engagement | Need to rewrite/update a ton of documentation and links. |



- what needs to be replicated:
 
	
	- Keep presence on SF to
	 avoid malware take\-over. Possibly keep automatic mirror from
	 GitHub
	
	- repository / software
	
	- issue tracking
	
	- file
	 downloads (move to tei\-c?)
	 
		
		- Files can be attached to
		 GitHub releases (tags)
	
	- migration of issues: could be a
	 tool: <https://github.com/cmungall/gosf2github> appears to be feasible for the migration of issues

- The difficult thing is that the creator might get lost and the user using the API
 will be the new “creator”.


- TravisCI in addition to / instead of Jenkins?

- Timeline if we do move

- **Action on SM** to produce a spreadsheet with info from tc
 documents that will need to be updated if we move to GH.

- **Action on MH** to do an inventory of the SF site and produce a
 report on what’s there.

- **Action on HC** to put a self\-updating copy of the SF repo in
 github’s TEI\-C account for safety’s sake and for testing.

- **Action on RV** to look into the process of migrating issues from
 SF to GH.

- **Action on JC** to investigate users on SF account and find out if
 they have GH accounts.

Fall F2F (HC)
 
 * Sun 10\-25 / Tue 10\-27 in Lyon
* will be getting meeting room from U on Mon 26 and Tue 27
* need to find meeting room for Sun 25 — one not available, the other €900
* WiFi is a requirement, projection is a desirable
* **Action on HC** to look for “work space” or “share space” in
 addition to hotel meeting rooms


\<s\> inside \<s\> [bug](https://sourceforge.net/p/tei/bugs/578/) (MH)
 
 * MH proposes returning to the old content model and implementing the restriction in
 Schematron.
* Council agrees: YES!
* **Action on MH** to raise a separate “\<s\> as child of
 \<s\>?” ticket


\<xenoData\> (SB)
 
 * how do we allow encoder to say “about the source” vs “about this TEI file”
* should content be
 
	
	* well\-formed XML\-only,
	 or
	
	* any well\-balanced XML, or
	
	* any (well\-balanced) XML or
	 text() ? (The latter to allow “binary” formats like JSON)
	 
		
		* JC: I think we should make no rules about this other than that the
		 document needs to be well\-formed. (e.g. it can have text, CDATA sections, xml
		 etc.)


- The consensus is that anything (XML or text) should be allowed (of course it will
 need to be correctly escaped or encoded.) Stating the obvious: the result must be
 a well
 formed XML document.

- HC: The issue of whether there should be a way to characterize what is in
 \<xenoData\> should be a separate ticket (@mimetype?).

- FC: in Council Mail List I suggested to adopt something like @MDTYPE in METS

MEETING CLOSED AT THIS POINT.



- SB, MH, JC, FC remained on the call and discussed the nature of @rend… because they
 are gluttons for punishment. MH and JC agree that order isn’t significant (by default
 at
 least), and SB thinks it should be, but is wrong. ;\-) To clarify that a little — MH
 and
 JC agree that the TEI should require that order not be significant, SB thinks that
 whether order is significant or not is up to the encoder / project / ODD\-writer.

Their extraordinary meeting ending at 16:09Z.



- default values (SB)
 
	
	- SB, LB, SR suggestion — make
	 semantic suggestion rather than syntactic requirement
	
	- MH suggestion —
	 make part of att.deprecated and actually remove













