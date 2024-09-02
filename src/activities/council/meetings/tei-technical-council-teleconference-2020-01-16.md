---
layout: page.njk
title: "TEI Technical Council Teleconference, 2020-01-16"
---
# TEI Technical Council Teleconference, 2020-01-16
**Meeting time:**


* EDT 09:00–10:30, GMT 14:00–15:30, CEST 15:00–16:30
* Started: 14:02Z; ended: 15:37Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB)
* Hugh Cayless (HC)
* Nicolas Cole (NC) arrived @ \~14:07Z, left \~15:00Z
* Jessica Lu (JL)
* Peter Stadler (PS)
* Martina Scholger (MS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux (VBJ)


 
Next F2F meeting
----------------


* 1–3 May 2020
* Where? Our options are:
	+ Paderborn – PS says it is easy to organize. Fly to FRA and then take \~3 hour train or fly into PAD.
	+ Oxford – NC says this is easy to organize for this group size.
	+ Warsaw – **Action on MT:** check availability for May 1–3 **by** 2020\-01\-20


Next Release 3\.7\.0
--------------------


* Release Thursday 02\-13; Refrigeration: 01\-30; Freeze starts on Monday 02\-10
* Status \<uniHan\>
	+ <https://github.com/TEIC/TEI/issues/1805>
	+ **Action on MS:** organize conference call on or about 01\-28 with at least RV, SB, MH, and Duncan Paterson **by 2020\-01\-18**
* Status \<standOff\>
	+ SB reports significant progress made in late December, none since.
	+ Build had been failing (for lack of checking in a file), just fixed that this morning.
	+ **Need eyes on this, big time.**
	+ SB plans to ask NC, MT, EB, and others to review this hopefully early next week.
	+ SB \& NC to meet beforehand — NC travelling this Saturday, but proposes a call on Sunday or Monday.
* Status documentation:
	+ EB: How are we going to publish new oXygen plugin guide? See <https://github.com/TEIC/Documentation/tree/master/exDoc> and <https://github.com/TEIC/Documentation/issues/5>
		- Move to [oXygen\-tei repo](https://github.com/TEIC/oxygen-tei)? – PS suggests to replace the framework discussion already there with this.
		- Maybe split the documentation into several files and put those into a (new) docs directory in the repo root (because this can easily be deployed via github pages in the GitHub repo settings). And am I correct that GitHub pages are in HTML, so it would be easy to maintain source in TEI and generate HTML in same directory? — SB
	+ EB: Still working on revisions to TCW 20 regarding how to work with branches / pull requests: <https://github.com/TEIC/TEI/issues/1825>
* Open issues for milestone 3\.7\.0 [https://github.com/TEIC/TEI/issues?q\=is%3Aopen\+is%3Aissue\+milestone%3A%22Guidelines\+3\.7\.0%22](https://github.com/TEIC/TEI/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Guidelines+3.7.0%22)
	+ EB: Can we look at the new att.locatable in the pull request for [\#1769](https://github.com/TEIC/TEI/issues/1769)?
		- **Action on SB**: check and make sure any teidata.word value is valid as a teidata.pointer **by** 2020\-01\-22 \[Done: no, there can be valid teidata.word values that are not valid teidata.pointer values. See comment on ticket.]
	+ EB: Can we please close [\#1708](https://github.com/TEIC/TEI/issues/1708) regarding SG (Gentle Introduction)? See <https://github.com/TEIC/TEI/commit/c1131e950220310955f8e557c19952f55a291609>. EB also [added the gloss](https://github.com/TEIC/TEI/commit/4f1f1f51fa6803b24a63999bb68823064f78b22e) as SB recommended about the solidus.
		- **Action on MS:** review these changes **by** 2020\-01\-24


Report from IG Group
--------------------


* Preparing the release process:
	+ tei user is created on machine3 (cchum\-kvm\-dockerteic.in2p3\.fr)
	+ tei user is member of the Docker group (so has the permissions to restart OxGarage and Roma services).
	+ The old id\_rsa keys are restored from the ADHO server for the tei user (needed for shell access to SourceForge, see section “What you will need before you start” of [TCW22](http://teic.github.io/TCW/tcw22.html))
	+ Permissions for the vault are adjusted so the tei user may add directories to /data2/vault/P5 and /data2/vault/Stylesheets and change the symlinks there.
	+ PS updated [TCW22](http://teic.github.io/TCW/tcw22.html) and the install script to reflect the current settings on the HumaNum server.
	+ Everything should be settled for the release :)


jEdit TEI Plugin
----------------


* [https://github.com/Conal\-Tuohy/jEdit\-TEIPlugin](https://github.com/Conal-Tuohy/jEdit-TEIPlugin)
* RV reports he tried it, but couldn’t figure out how to make it work
* MS reports Marjorie Burghart had gotten a mini\-grant to create this plugin, and asked TEI\-C to host this plugin.
* MS answered that in principle answer is “yes”, but we need more information on responsibilities and documentation of the plugin.
* RV and SB are interested in helping with this — open\-source solution is especially important for teaching purposes.
* **Action on RV**: email Marjorie for more info.


Status broken oXygen plugin
---------------------------


* [https://github.com/TEIC/oxygen\-tei/issues/30](https://github.com/TEIC/oxygen-tei/issues/30)
* **Action on MT:** investigate the options and summarize/adjust documentation **by 2020\-01\-25\.**


New feature request for Computer\-Mediated Communication (CMC)
--------------------------------------------------------------


* <https://github.com/TEIC/TEI/issues/1955>
* No rush with this, will be tackled only after this release.
* SB joined the group of assignees.


I18n Working Group (internationalization)
-----------------------------------------


* HC reports he and MS not sure they had been given go\-ahead to create a working group.
* Council should provide a charge: deliverables, time framing, contact person, that kind of thing.
* HC reports we will be applying for a Mellon grant to get funding for this initiative for the TEI.
