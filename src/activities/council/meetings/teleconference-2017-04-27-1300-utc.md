---
title: "Teleconference 2017-04-27 13:00 UTC"
date: 2017-04-27
---
# Teleconference 2017-04-27 13:00 UTC





**Present:**
Hugh Cayless (HC)
Elisa Beshero\-Bondar (EB)
Alex Bia (AB)
James Cummings (JC)
Martina Scholger (MS)
Sarah Stanley (SS)
Syd Bauman (SB)
Peter Stadler (PS)
Raff Viglianti (RV)
**Apologies:**
Elli Mylonas (EM)
Magdalena Turska (MT)

### Agenda



* **Followup on discussion of**[\#1431](https://github.com/TEIC/TEI/issues/1431 "#1431"), See discussion in previous minutes
	+ Various discussion of possibilities; JC prefers use of \<ref\> for shortform citations
	 but this would need biblPart elements adding. Other possibilities discussed bibl/@ref,
	 bibl/@corresp: that @ref means something different from @corresp. @corresp suggests
	 a one\-to\-one correspondence that is not always appropriate when we use bibl for short\-form
	 citations. That we should be able to use @ref on bibl in the same way we use @ref
	 on @persName. But this is different from pointing to a specific edition. It's more
	 for making a listBibl that lists works (containing various editions).
	+ HC wants to tease out differences between all various possibilities, maybe allow all
	 and have guidelines prose make clear the differences.
	+ Action on JC to provide more examples to clarify encoding of short\-form citations.
* **Ticket triage \[is:issue is:open no:assignee]**
	+ Since the move to GitHub, ticket volume has gone way up. This is a nice problem to
	 have, but there's more triage work than HC can do at the moment. Can we come up with
	 procedures for distributing the work?
	+ JC: Perhaps on the day of, or day before, Council Teleconferences the members of Council
	 should be expected to go and take any issues they think they are best suited to doing.
	 Then at the meeting the chair has a standing item to review any unassigned issues
	 and brow beat (erm, encourage) members of council into taking as part of the call.
	 {JC assigns himself ticket [1628](https://github.com/TEIC/TEI/issues/1628 "1628")and [1631](https://github.com/TEIC/TEI/issues/1631 "1631"); PS assigned himself [1624](https://github.com/TEIC/TEI/issues/1624 "1624")}
	+ RV: Council members could take turns on triaging? One person a month? (Or 2 people
	 per year or something)
	+ SB: Perhaps instead of Chair trying to triage tickets, Chair should parcel out all
	 outstanding tickets to all members of Council for triage. \+1 by PS; JC: Triage different
	 than assigning? Triage makes decision on its basic viability.; HC explains his concept
	 of triage.
	+ HC to set up doodle poll of months
* **Graph technologies SIG proposal:**[https://docs.google.com/document/d/1VbHyfvtmtbjSW5QBCvO7FgCjypKLxyD7yi7dNjoge3E/edit?usp\=sharing](https://docs.google.com/document/d/1VbHyfvtmtbjSW5QBCvO7FgCjypKLxyD7yi7dNjoge3E/edit?usp=sharing "https://docs.google.com/document/d/1VbHyfvtmtbjSW5QBCvO7FgCjypKLxyD7yi7dNjoge3E/edit?usp=sharing")
	+ Nifty. Sure. Though they don’t really mention the existing TEI support for graphs/networks/trees.
	 Sebastian added some degree of support for this in the Stylesheets somewhere before
	 his death. HC: They appear to be talking about a graph representation of TEI rather
	 than representing graphs *in* TEI.
	+ AB thinks they talk about TEI stuff (document instances, schemas, ODD, etc.) graphical
	 visualization and/or graph\-based representation/processing, rather than encoding graphs
	 in TEI. Suggests to expand the idea to a SIG on Graph technologies and Visualization.
* **\[JC] Discussion of support for any TEI resources in Oxford**
	+ JC notes that support for TEI systems in Oxford is disappearing and we should plan
	 for these legacy resources etc. disappearing. Likely little to no support / vanishing
	 support for oxgarage, roma, Oxford TEI. etc. Oxford IT will no longer be involved
	 in TEI.
* **SB requests a volunteer to edit the proposed paper on****tei\_customize**
	+ SB to post it.
* **Everyone should read RV's messages about RomaJS and provide feedback.**
* **Ticket**[\#1453](https://github.com/TEIC/TEI/issues/1453 "#1453")**, \<path\> should exist alongside \<zone\> for non\-closed areas in facsimile**
	+ The principal questions here are:
		- Is this a step too far in the definition of graphical structures in TEI?
		- Should we be looking instead at other standards, like SVG or IIIF?
	+ Didn’t we already decide this before at the Face2Face? HC: No. We talked ourselves
	 into a corner.
	+ MS: Related topic: do we still want to organise a panel at the TEI conference?
		- There will be a IIIF Conf in Rome in early June
		- Yes: Raff will be proposing a talk on IIIF\-TEI integration. Ask eg. Martin de la Iglesia,
		 Jeffrey Witt, Martin Holmes, Council Members, …
* **Release someday?**
	+ Aim for both summer and Halloween?
	+ Consensus seems to be yes, either June or July, perhaps SB \& SS as release techs.
	+ SB—I’m pretty much not available in June, July almost wide open. Happy to see someone
	 else
* **Face 2 face someday?**
	+ Annual meeting, November







