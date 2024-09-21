---
title: "TEI Technical Council Teleconference, 2024-08-13"
date: 2024-08-13
---
# TEI Technical Council Teleconference, 2024-08-13
### Meeting times


10:00am PDT / 1:00pm EDT / 5:00pm UTC / 7:00pm CEST
### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero-Bondar (EBB, Chair)
* Patricia O’Connor (TOC)
* Gustavo Riva (GR)
* Torsten Roeder (TR)
* Sabine Seifert (SS)
* Martina Scholger (MS)
* Joey Takeda (JT)
* Magdalena Turska (MT)

### Apologies/Not Present:

* Raff Viglianti (RV)

## Buenos Aires F2F October 2024

* Council F2F schedule
    + Council to meet F2F est. between 10-4 on Sunday (Update with the times confirmed by Gimena).
    + All day on Monday
    + Half a day on Tuesday (even if not everyone present).
    + EBB has created a template of an official formal letter to submit to your institution for reimbursement.
    + Register for conference, tick box as Council member. Pay if you think your institution will support.
* F2F Agenda topics
    + Under development in September
    + Include TEI-Lite2

## Scheduling next Council teleconferences

* For September, November, and December 2024
* First meeting: September 3rd (but the 2nd Tuesday of every month for November and December, so that TEI Council doesn’t collide with e-editiones monthly community meetup)
* Time: 10:00–11:30 PDT \| 13:00–14:30 EDT \| 17:00–18:30 UTC \| 19:00–20:30 CEST
* No meeting in October as it would be during the F2F

## Spring F2F possibilities

* JT proposes Spring F2F in Vancouver — Pending funding applications
* JT is organizing an event and asked if TEI Council members might be part of the program if Council F2F coincided with the event; some of the travel costs might be recovered from the event funding, either as individual travel grants or a donation or institutional membership in TEI
* We have held a F2F in early May before, MT and EBB are in favour. Planning to try a date around mid-May but we shall check if DHSI, planned in Montreal for 2025 would not conflict.
* JT suggests that it’s likely we could use college accommodation on campus and possibly negotiate a special rate
* JT asks what is better for TEI as an organization in terms of funding? Is it more advantageous to advocate for funding for individuals or better to request an institutional membership or one-off donation to the TEI-C?


## Next releases?

* New patch release?  primarily to integrate Guidelines HTML with the TEI website, before TEI Conference? (with new patch milestone).
    + 4.8.1 release milestone: primarily for PR #2566: HTML and CSS for Guidelines in new TEI website
    + Probably no new Stylesheets release
    + Initially scheduled for July 31 but postponed. HC considered releasing it himself as it is not a normal release but date unclear.
    + Council agrees that this is not of high priority, but would be nice to do it in September, so the new website is integrated before the Annual Meeting.
    + Release Team: Hugh Cayless, JT, and TOC
    + Potential new patch release date: September 16, hopint the release team can meet before then.

* Next “regular” release proposed for Jan 2025 but the date is not set in stone, as we will know more about who is on the Council after the election results are announced.


## Council nominations and elections

* Is there a nomination committee for this Council election? It is already quite late, last year it was also announced pretty late, and could have had more diverse candidates.
* Elections should be concluded at the Buenos Aires Members Meeting.
* **Action on EBB** to raise the question of elections at the next Board meeting to make it possible to nominate other people as well as accepting self-nominations. Many people will never self-nominate.

## Infrastructure group meeting

* MS: Need to revise the infrastructure documentation with current resource info (including relocation of the TEI listservs).
* Need to organise another infrastructure meeting to discuss the main issues such as trying to contact the server administrator re issues with ADHO server, etc. Who has access to institution infrastructure like listservs.
* **Action on MS** to schedule a meeting in September (before Council F2F). \[**Update:** Completed: Next Infrastructure Group meeting is Thurs. September 26 at 9am PDT, 12am EDT, 6pm CEST\].


## Pull Requests: extensive discussion of semantic versioning

* [PR #2552](https://github.com/TEIC/TEI/pull/2552): merged during meeting
* [PR #1996](https://github.com/TEIC/TEI/pull/1996) and issue [#1993](https://github.com/TEIC/TEI/issues/1993): TEI semantic versioning datatype for schemaSpec and application to Guidelines.
    + MT’s short summary from the long and unresolved discussion: the issue started with Syd’s observation that values which TEI-C uses for TEI/@version attribute are not valid against TEI schema. In an effort to not only address this original problem, but also provide means to apply one of multiple versioning systems used in various projects, Syd’s proposal included adding a number of specialized datatypes as specializations of teidata.version: for [Unicode](https://unicode.org/versions/) style, [SemVer](https://semver.org/) style, and [CalVer](https://calver.org/). Investigating calVer more closely, it is a convention, not a specification, with concrete projects creating their own precise versioning systems, therefore one could create an abstract datatype teidata.version.calVer and then concrete ones, e.g. teidata.version.calVer.Ubuntu or teidata.version.calVer.LibreOffice.
    + Since there was no request from the community about it, the main question is, do we want to already provide the implementation(s), and for which precise systems, if so. Perhaps we should primarily explain the concept of versioning systems in the prose of the Guidelines and only allow for customization points for users to clearly define the one they are using, and, if the community expresses such need, add some of these into the TEI schema?
    + Next steps: SB’s PR by now is certainly outdated, so we might start with a new tack, write the prose for this section and provide usage examples, this might get us clearer understanding what should be actually implemented (beyond the datatype that actually matches what we use in the Guidelines).
    + Original notes on teidata.version discussion: See [SS’s May summary comment](https://github.com/TEIC/TEI/pull/1996#issuecomment-2127953552). — SB: I suspect this is not ready, and worse is not moving forward at all, as we have not addressed the CalVer problem, yet. (See e-mail “victims of version vagueness” to tei-council list of 2024-05-21 17:45.) On the other hand, there may have been discussion I have forgotten or was not present for. See also, JT’s response to above email concerning recommended option 3).
    + Should the TEI provide a generic datatype that people can specify as they need/want? For reference: <https://calver.org>.
    + Or should the TEI simply provide the Guidelines prose to describe version numbering.
    + Some projects might be releasing very quickly (multiple times in a month).
        - In those cases date + maj/min/patch
        - Others might be fine with year/month
        - Uber type would help people explore different ways to adapt and allow for backwards compatibility.
        - Argument to provide very precise types for different uses:
            * (calendar versioning) – date + maj/min/patch
            * (calendar-semantic) – date info only
           
    + Concerns regarding the flexibility of the uber type in allowing too much.
    + MT: Maybe we should stick to version numbers that the TEI needs internally. SB: We can point readers to where they can read more about semantic versioning and add accompanying prose that summarizes the advantages.
    + MT: Mainly we need prose guidelines on this first, and provide examples from TEI projects first before the schema constraints. What TEI elements and attributes would hold versioning info?
    + JT: But we need the constraints to help people to specify–datatypes are helpful to the community, too.
    + EBB: Where would the new prose and examples go in the Guidelines?
    + The current PR is probably not going to be merged, but should be worked with for reference in a new branch.


