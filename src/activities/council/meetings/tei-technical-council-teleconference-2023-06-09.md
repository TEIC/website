---
layout: page.njk
title: "TEI Technical Council Teleconference, 2023-06-09"
---
# TEI Technical Council Teleconference, 2023-06-09
### Meeting times


* 6:30am PST / 9:30am EST / 2:30pm UTC / 3:30pm CET
* Started: 13:34Z Ended: 15:05Z


### Present:


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB, Chair)
* Hugh Cayless (HC)
* Janelle Jenstad (JJ)
* Patricia O'Connor (TOC)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV @ 14:30Z)


### Apologies/Not Present:


* Elli Bleeker (EB)


Previous meeting minutes: [Guelph F2F](https://tei-c.org/activities/council/meetings/tei-technical-council-f2f-meeting-in-guelph-7-9-may-2023/)
Paderborn F2F preparations
--------------------------


* Dates: Sun 03 (morning)–Tue 05 (midday) September
* Travel planning
* Workshop overlap with TEI F2F meeting: All Tuesday, council members including the chair will be in a workshop, as well as Monday morning.
* RV solution: Put all Council run workshops on Tuesday so only half a day is missed (Monday morning).
* Council will be placed in the same building as the keynote will be.


Future meeting dates/times
--------------------------


EBB would like each of us to review dates \& times for future monthly Council meetings
Updating TEI P5 subset
----------------------


* SS needs help for updating TEI P5 subset — she is working in Windows and both test and test2 targets are failing due to “file not found” for a file that is clearly there.
* SB volunteers to meet with SS to try to help, but does not know much about Windows.
* **Action on SS and SB:** Sometime in July update documentation on updating the TEI P5 subset


Discussion of ATOP tickets
--------------------------


* [\#2306](https://github.com/TEIC/TEI/issues/2306) — “tagdocs elements are available in silly contexts”:
	+ We think this is pretty much a no\-brainer. Even Lou seems to agree. (Although SB suspects Michael might object.) However, it is potentially a lot of work, especially if we have a deprecation period.
	+ Example of the problem: \<elementSpec\> is allowed to go inside \<head\>, \<handNote\>, \<item\>, or \<stage\>
	+ Getting ODD declarations closer to the prose within the document is generally accepted as a good idea by members of the TEI community
	+ EBB: How long should the deprecation period be? (Needs to include a warning against usage).
	+ SB: At least when we initially established the system, we expected deprecation periods to be 6 months – 2 years. Often the 6 months deprecation period becomes a year \[to users] because it only comes into effect with the next release. The need for deprecation is clear and straight\-forward, but this is not an easy change to implement: e.g., there are 115 \<classSpec\>s that need fixing regardless of whether we deprecate or not.
	+ HC: How big of a problem is this, is it aesthetic or are people actively doing this?
	+ EBB: perhaps just silently remove warnings and see if there are any objections?
	+ Consensus: better to deprecate for 6 months (go through all \>100 instances in the guidelines systematically)
	+ made GREEN for HC (with SB contributing) to implement with 6 month deprecation.
* [\#2173](https://github.com/TEIC/TEI/issues/2173) — “Add warning when using \<constraintSpec\> inside \<classSpec\>”:
	+ This is the “where should @context be required?” issue.
	+ SB developed a solution back in 2021\-09, but it requires testing, and no one has tested it.
	+ See [comment of 2021\-09\-12](https://github.com/TEIC/TEI/issues/2173#issuecomment-917810897).
	+ Council supports solution proposed by SB
	+ Council may later propose/decide to make @context mandatory for all cases
* [\#2369](https://github.com/TEIC/TEI/issues/2369) — “Need to clarify the relationship between classSpec/@generate and classRef/@expand”:
	+ The bad news: explaining the *problem* may take a while — it is complex. The good news: we think the *solution* is all but trivial.
	+ \`@generate\` and \`@expand\` need to align better. Essentially \`@expand\` needs to be one of the values used on the referenced class’ \`@generate\`, but it (the \<classRef\> that wants to use @expand) may not have any way to know what the @generate says.
	+ HC points out that the order that the members of a class should be in (when using a “sequence” @generate) is not defined. SB agrees that this makes the “sequence” values almost useless, but asserts this is a problem for another ticket.
	+ SB points out that one obvious solution is simply to get rid of (or ignore) the @generate attribute. For those processors that actually want to generate patterns prior to ascertaining which are referred, they simply have to generate *all* \[6] patterns \[which is already the default in some cases]. TEI schemas are over 10,000 lines long as it is; adding an extra couple of hundred lines will make no significant difference.
	+ JT: Speculative origin: \`@generate\` may have been for ODD writers to specify the allowable ways in which a \<classSpec\> could be expanded
	+ HC, in large part because of the ambiguity of “sequence”, thinks we should deprecate \[and then remove] both \`@generate\` and \`@expand\`.
	+ Consequences of deprecation: Longer deprecation period for \`@expand\` because it is used a lot more but a shorter deprecation period for \`@generate\`
	+ HBS: Couldn’t find any examples of \`@generate\` being used in the set of ODDs that ATOP has collected from users for testing. No one really knows any use cases for the attribute.
	+ RV: MEI had previously used @expand in their ODD, but it is not currently being used. MEI no longer needs to use those attributes so it suggests that these attributes are no longer needed.
	+ For \#atop whether we remove \`@expand\` or not doesn't matter so much as \`@generate\` which is more important for moving ATOP along.
* [\#2426](https://github.com/TEIC/TEI/issues/2426) — “Usage of \<dataRef\>\+\<dataSpec\> and \<macroRef\>\+\<macroSpec\>”:
	+ Again, an issue that may take some time to *explain*, but the solution is probably not that hard. Have to decide if \<classRef\> and maybe \<macroRef\> should be disallowed, too.
	+ Problem summary: Schema suggests that you can put an element within an attribute when XML doesn’t allow it at all. Thus there should be an error or a Schematron rule to inform users that doing this means your schema will be broken.
	+ Original solution by MH: Use \<macroRef\>
	+ Requested solution: dataSpec//anyElement and dataSpec//elementRef should be disallowed.
	+ Q: should we prevent macroRef from being used in \<attDef\>? That would prevent the *other* way of putting an element inside an attr.
	+ Assign to SB Status Go for implementing Schematron


TEI Lite2 customization
-----------------------


* Resolved at Guelph F2F: discuss / assign actions before next TEI release
* Absorb simplePrint into TEI Lite schema
* Update [https://tei\-c.org/guidelines/customization/](https://tei-c.org/guidelines/customization/)
* From Guelph discussion:
	+ Lite2 should be more like an "on ramp" that doesn't cover all cases but takes us quite far as common ground.
	+ **Action on JJ** to get us started drafting a paragraph for the Customization page and the [TEI Lite](https://tei-c.org/guidelines/customization/Lite/) page that Council can review this summer\-\-to share at July meeting.
	+ **Action on MT** to also get started on the Lite2 customization by July meeting.
	+ Need to update Lite and other customisations also mentioned in Chapter 22 at: [https://tei\-c.org/release/doc/tei\-p5\-doc/en/html/USE.html\#MDlite](https://tei-c.org/release/doc/tei-p5-doc/en/html/USE.html#MDlite)


Infrastructure issues
---------------------


* Next Infrastructure Group Meeting: [https://www.when2meet.com/?20229458\-wQsv5](https://www.when2meet.com/?20229458-wQsv5)
	+ MT and HC discussion with MS to determine the best time to meet for next meeting
	+ Action on MS to follow up with others on availability for dates that suit HC and MT.
