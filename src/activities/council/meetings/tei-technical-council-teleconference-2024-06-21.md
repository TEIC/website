---
title: "TEI Technical Council Teleconference, 2024-06-21"
date: 2024-06-21
---
# TEI Technical Council Teleconference, 2024-06-21
### Meeting times

10:00am PDT \| 1:00pm EDT \| 5:00pm UTC \| 7:00pm CEST

### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero-Bondar (EBB, Chair)
* Patricia O’Connor (TOC)
* Torsten Roeder (TR)
* Martina Scholger (MS)
* Joey Takeda (JT)
* Magdalena Turska (MT)
* Raff Viglianti (RV)

### Invited guest

* Hugh Cayless

### Apologies/Not Present:


* Gustavo Riva (GR)
* Sabine Seifert (SS)

## Next Release

* Release techs: HBS, GR, TR
* Dates: (these are not the dates shown on the calendar, which asserts that refrigeration starts Fri 21 Jun, presumably at Council meeting)
    + Refrigeration: moved 7 days later to: Sat. 29 Jun 2024 at Council meeting
    + Freeze: 6 July 2024
* Release: Mon 08 Jul 2024
* Question: since the code for `<tei:interleave>` has already been added to the Stylesheets code and seems to work, can we add the `<tei:interleave>` element during refrigeration? Answer: Consider it, since we have extended refrigeration. \[**Update**: `<tei:interleave>` postponed to 4.9.0 release.\]


## Council/Stylesheets meetings this summer

* HBS is using our preferred date / time for Stylesheets Meetings
* Meetings in July and August at designated new times:
    + July Council Meeting: rescheduled for Wed. July 10 to not conflict with the release.
    + August Council meeting: Tues Aug 13
* Meeting time: 10:00–11:30 PDT, 13:00–14:30 EDT, 17:00–18:30 UTC, 19:00–20:30 CEST
* Council get-together at ADHO in DC? Week of Aug. 5

## Council F2F October 2024

Buenos Aires travel planning discussion

## New website updates for publishing the Guidelines

* Hugh Cayless (invited guest): We need Stylesheets to pull in menus from the new site
* Change the header/footer
* Need to make sure CSS updates are applied consistently
* Hugh to make a PR soon, and we can work on this during next Council / Stylesheets meetings

## CMC Chapter

* Council decides to include the CMC chapter in the next release
* **Action on HS and MT** to read through entirety of the chapter thoroughly by 2024-07-08
* [#2554](https://github.com/TEIC/TEI/issues/2554): Introduction of the new attribute class in tei module
* **Action on JT and EBB** to carefully review the whole branch over next week, then pass it to **HBS and MS** to read thoroughly by 2024-07-08

## SemVer with CalVer?

* Introduce our own CalVer datatype? See SB’s message to Council list and CalVer documentation
* Council decides: Try SB’s option 3, probably with full names like teidata.version.calVer.libre, etc. Perhaps for Ubuntu, LibreOffice, and fusefs-ntfs.Co

## Odd2Odd (ODD Chaining) problems

* [#678](https://github.com/TEIC/Stylesheets/issues/678), [#680](https://github.com/TEIC/Stylesheets/issues/680), and the [PR #681](https://github.com/TEIC/Stylesheets/pull/681) [But cf. [#645](https://github.com/TEIC/Stylesheets/issues/645), which may also be related]
* JT: Stylesheets are currently breaking customizations that weren’t broken before
* JT’s PR is a simple fix, we hope
* Lou Burnard’s chained ODDs aren’t testing well: something’s still wrong.
    + How best to test?
    + **Action on JT** to check with Martin Holmes on how to test in oXygen (without the published plugin) (?(
* This is bigger than just ODD-Chaining: Issue in last Stylesheets release about duplicate idents in the ODD processing
    + JT’s fix is about how multiple specs for the same element are grouped
    + Problem is a release stopper!
    + JT suggestion: Let’s test against 3 or 4 different versions of the Stylesheets going back into our history   
    + Work on this during  Stylesheets meeting on Monday 6/24

## Tickets with Guidelines 4.8.0 release milestone

* New milestones created! Please update tickets with the appropriate milestone.
* Guidelines PRs
    + [#2509](https://github.com/TEIC/TEI/pull/2509) (what could possibly go wrong?)
    + [#2540](https://github.com/TEIC/TEI/pull/2540) — has been merged
    + [#2552](https://github.com/TEIC/TEI/pull/2552)
    + [#1996](https://github.com/TEIC/TEI/pull/1996) (semver) — SB: should *not* be merged, we decided on 16 Mar 24 to develop a comprehensive system, instead (but branch should not be deleted, it has useful stuff)
    + [#2534](https://github.com/TEIC/TEI/pull/2534) 

* Stylesheets PRs
    + [#682](https://github.com/TEIC/Stylesheets/pull/682) (fixes #657 (styling of new attr lists) — is an unreviewed draft
    + [#681](https://github.com/TEIC/Stylesheets/pull/681) Fix regression: duplicate idents in Specs) — see SB’s comment of earlier today on PR

## Council communications

* Slack or something else?
* Action on EBB to apply: [Slack nonprofit arrangement](https://slack.com/help/articles/204368833-Apply-for-the-Slack-for-Nonprofits-discount)
* See Slack anti-Slack discussion, task force (TR, EBB, JT)
* Board preference to stay on Slack (also easier for us)
* Other options: [Matrix](https://matrix.org/), Mattermost (see Humanum’s <https://documentation.huma-num.fr/mattermost/> )


