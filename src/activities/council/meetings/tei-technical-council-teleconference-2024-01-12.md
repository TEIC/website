---
title: "TEI Technical Council Teleconference, 2024-01-12"
date: 2024-01-12
---
# TEI Technical Council Teleconference, 2024-01-12
### Meeting times


6:30am PST / 9:30am EST / 2:30pm UTC / 3:30pm CET
### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Patricia O'Connor (TOC)
* Gustavo Riva (GR)
* Torsten Roeder (TR)
* Martina Scholger (MS)
* Joey Takeda (JT)
* Raff Viglianti (RV)


### Invited Guest


* Hugh Cayless (HC)


### Apologies/Not Present


* Sabine Seifert (SS)
* Magdalena Turska (MT)


Scheduling VF2Fs
----------------


* Envisioned the V2F2Fs will take place on Fridays and Saturday **not** Sundays
* N.B. Easter is at the very end of March this year so that might be an option.
* Space out the VF2Fs so it's not in successive weekends: One VF2F in February, March, and then April.
* Consider: possibility for some Council members to meet in person in April.


New GIS Working Group
---------------------


* JT introduces [Draft charge for GIS working group](https://docs.google.com/document/u/0/d/1pdbfKNsrskUvZ_AXa3Cnj4AS9LdleRrS5ZVjdyOILIQ/edit)
* Feedback on schedule requested: Using the F2F sessions as milestones and the goal for having something to present at Buenos Aires.
	+ Schedule is feasible to have the initial proposal in June, needs a little modification.
* HBS: TEI Conversion to JSON is already covered by other working groups.
* EBB and RV: Survey how these other WGs have handled the conversion process, what can we take from these different approaches?
* JT: Main point is to outline the best practice and standard for representing this information and not to introduce new elements.
* WGs should include TEI as well as GIS experts, it is not necessary to be a member of the TEI Community but it would be valuable to have group members with an awareness of TEI to ensure that the information is represented correctly in TEI format.
* Use the TEI list to find those that might be interested.
* SB suggests we clarify the precise meaning of the use of the terms interoperable and interchangeable in the charge.
	+ Does the user have to think through the use of data in another system or can they add the data to the system without extra effort?
	+ (See [https://www.balisage.net/Proceedings/vol7/print/Bauman01/BalisageVol7\-Bauman01\.html](https://www.balisage.net/Proceedings/vol7/print/Bauman01/BalisageVol7-Bauman01.html))
* **Action on JT:** Find the people for the working group over January and February.
* **Council approves charge**.


Report on TEI Website redesign
------------------------------


* HC reports: Using Eleventy to construct the website, most pages from the website have been converted into Markdown.
* Need to represent TEI format too, such as the tutorials written in TEI.
* HC seeks Council's permission to reorganize the Documentation repo
	+ Some material doesn't belong there (older materials that aren't TCWs)
	+ When the website is built, the process will involve fetching the documents and processing them \- not necessary to have the repo in the website essentially, just need a way of generating an Eleventy template.
	+ TEI content is being processed with CETEIcean in Eleventy templates
* A static working template is available on <https://dev.teic.org>.
* **Discussion** **on TCWs**: The goal is to pull in the information from the Documentation repo.
	+ Question: Should some of the TCWs, for instance, the bylaws reside in the website entity itself?
* HC's new repo for the website: <https://github.com/TEIC/website> (Council only for now)
* EBB: Need to have a designated workflow for updating or revising the bylaws.
* **Discussion** **on TEI Tutorials**: Having the TEI tutorials directory in the website entity
	+ RV: These go out of date quickly! If we include these, add some metadata about the creation of the tutorials in case there are sections that have been updated, especially the version of the TEI when this tutorial was created
	+ Need to sort through these: some, while dated, are highly useful (e.g. pure ODD)
	+ Formalize where metadata about the content, about the date, and version of the TEI the tutorial refers to/relates to is stored in the TEI header, and/or markdown header, etc.
	+ Currently, we don’t have a specific place to clarify which version of TEI is being used.
	+ JT: Need a listing mechanism as a JSON document so we can quickly look up the version of the Guidelines relevant to the date of the tutorial.
	+ HC: The Header and Footer will need to be processed differently in producing the Guidelines(!) And what will we do with older versions of the Guidelines\-\-(should they look like the older website)?
	+ MS: Some legacy TCWs and Working Papers are in Wordpress. **HC:** They will have started life as older TEI documents and then converted to (or obscured in strange ways in) HTML. **MS:** Can we help with cleaning up the WordPress content ie. broken links etc.
	+ EBB: Hope we can set up some automated link checking on the new site. HC: That's relatively easy.
	+ RV: Comment about Guidelines and regeneration of the navigation bar:
		- Make it so the Guidelines processing doesn't generate the navigation bar?
		- RV: The real question: How does the website integrate the Guidelines: may need some brainstorming.
		- HC: Some JavaScript weirdness about how it builds CETEIcean
		- RV: We may be able to rework some of CETEIcean as a result of what we're learning / building here.
		- SB: Fact that the Guidelines are standalone HTML documents (must stand alone without the website). Requires some static site information in order for static site processors to represent this information through a website. **RV:** Often that information is written in YAML but it can be parsed in XSLT. Can write code to extract this information for the static site processor.
* **Council approves HC** **experimenting with the Documentation repo.**


Update on Migration of TEI listservs
------------------------------------


* EBB and SB report: Moving from Brown to PSU (because Brown will be removing support someday)
* Moving a LISTSERV list (including archives, users, and their settings) is trivial
* However, users (including us) will likely have links to posts in the old archives at Brown.
* Those links fall into 3 flavors: “\&P\=\#”, “\&P\=R\#”, and permalinks.
	+ For the latter two the user need only change the host and it will work (at least it did in our tests)
	+ For the first, and most common type, generating an algorithm to translate will take hours, and perhaps half of them already do not work, so we decided not to bother.
	+ Hint: *always* use the permalink!
	+ Tentative date: Thu 04 Apr 24 (starting at \~11:00 ET)
