---
title: "TEI Technical Council Teleconference, 2024-07-10"
date: 2024-07-10
---
# TEI Technical Council Teleconference, 2024-07-10
### Meeting times

10:00am PDT \| 1:00pm EDT \| 5:00pm UTC \| 7:00pm CEST

### Present


* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero-Bondar (EBB, Chair)
* Patricia O’Connor (TOC)
* Gustavo Riva (GR)
* Joey Takeda (JT)
* Raff Viglianti (RV)

### Invited guest

* Hugh Cayless

### Apologies/Not Present:

* Torsten Roeder (TR)
* Martina Scholger (MS)
* Sabine Seifert (SS)
* Magdalena Turska (MT)


## July Release briefing

* HBS, GR, TR: NB for future release technicians – Need to have Admin rights in SourceForge to implement the release. (This is already documented in [TCW 22](https://tei-c.org/activities/council/working/tcw22/).)
* New council members need to be added to the HumaNum server, and also make sure we remove people when they are not on Council.


## Next releases?

* Mini-release, primarily to integrate Guidelines HTML with the TEI website, before TEI Conference? (with new patch milestone?)
    + Should other web changes (like purging us of jQuery) be bundled with this change or be a separate change?
    + Does the (upcoming) TEI Publisher version of the Guidelines need to be changed to match this change?
        - Considerations to keep in mind for TEI Publisher handling the Guidelines: Static website and also the need for a docker process for maintenance.
        - Need to check the new version is loading the CSS properly, some few glitches
        - Recommendations for CSS: More padding for the margins and reduce line length.
        - **Note:** Menus are being pulled from the dev site
        - Decision to create a release branch to ensure that the site is up-to-date with the latest release.
        - Dev and release branches are the same at the moment except for the version.
* Do we need a Stylesheets patch release ASAP? (Maybe not, [PR #687](https://github.com/TEIC/Stylesheets/issues/687) was merged prior to release.)
* But also note that [PR #640](https://github.com/TEIC/Stylesheets/issues/640) is a “release blocker” – \[**Update**: PR completed, ticket closed\]
    + **Action on TOC by 2024-08-17:** Update TCW 22 to include a review of release blocker labeled tickets. \[**Update**: Action completed by TOC on 17-07-2024 – reviewed and merged by EBB\]
* New patch Release.
    + Adjust milestone numbers (add new milestone)
    + Release just for website: new version: 4.8.1
    + Probably no new Stylesheets release
    + Expected date: 2024-07-31 
    + Release Team: Hugh Cayless, JT, and TOC

* **Action on Hugh Cayless:** Prep the patch release branch + a full build of the website pointing to the new branch for us to review.
* Next full release, due in Jan 2025, after TEI conference in October 2024

## PR’s and Issues to prioritize for next release(s)

* [PR #2552](https://github.com/TEIC/TEI/pull/2552): Is this just ready to go?
    + SB just merged in the last few updates to dev into this branch; all tests pass, thinks this is ready to go.

* [PR #2566](https://github.com/TEIC/TEI/pull/2566): HTML and CSS for Guidelines in new TEI website
    + Hugh Cayless: Website updates for Stylesheets with upcoming release?
    + We need Stylesheets to pull in menus from the new site
    + Change the header/footer
    + Need to make sure CSS updates are applied consistently

* [Stylesheets #552](https://github.com/TEIC/Stylesheets/issues/552):  Easy test of EB’s old repair? — Yes, SB planning to work on this week of Sun 14 – Sat 20 Jul 24. (Anyone else is welcome to beat him to it.)
* [PR #2559](https://github.com/TEIC/TEI/pull/2559) and issue [#2497](https://github.com/TEIC/TEI/issues/2497): (really, ready to go?)
* [PR #1996](https://github.com/TEIC/TEI/pull/1996) and issue [#1993](https://github.com/TEIC/TEI/issues/1993): TEI semantic versioning datatype for schemaSpec and application to Guidelines. See [SS’s May summary comment](https://github.com/TEIC/TEI/pull/1996#issuecomment-2127953552). Yes, SB has a branch for this; stopped working when “victims of version vagueness” issue came up (posted to tei-council list 2024-05-21); last month we decided on it (see below), but SB has not (yet) gotten back to implementation.
    + From June Council meeting: SemVer with CalVer?
        - Introduce our own CalVer datatype? See SB’s message to Council list and CalVer documentation
        - Try SB’s option 3, probably with full names like teidata.version.calVer.libre, etc. Perhaps for Ubuntu, LibreOffice, and fusefs-ntfs.
          
* Where are we with `<interleave>`?  [PR #2538](https://github.com/TEIC/TEI/pull/2538) and issue [#2154](https://github.com/TEIC/TEI/issues/2154) (no release milestone) + [Stylesheets #2154](https://github.com/TEIC/TEI/issues/2154) and [PR #609](https://github.com/TEIC/Stylesheets/issues/609) (yes release milestone)
    + SB comments:
        - I have merged dev into the iss2154_interleave branch; all tests pass
        - I have scanned the PR, and everything that is there looks OK to me
        - Added an example of `<interleave>` in 23.5.1.1. — DONE
        - I agree with JT, catching [the thorny validation errors discussed](https://github.com/TEIC/TEI/pull/2538#issuecomment-2116575977) should probably happen in ODD processor, not TEI validation. 
        - We need discussion of this issue in the prose of the Guidelines, probably as a last subsection of [v.4 Validating a Document’s Structure](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/SG.html#SG14), but maybe also in 23.5.1.1?
        - Needs addition of tests to test suite
        - Prose needs discussion of the validation issue and incompatibility with outputting DTDs
        - Remember, we decided not to use `<interleave>` in the Guidelines so DTDs could continue be generated (check)
        - **Action on SB by 2024-08-28** to update p5odds.odd schema so that it prevents `<interleave>`.      
        
* [#2484](https://github.com/TEIC/TEI/issues/2484): Should we restrict use of `<anyElement>` the way shown in examples? (We don’t process it in the way that we promise.)
    + We did a lot of work last fall on the processing of `<anyElement>` in Stylesheets: See [https://github.com/TEIC/Stylesheets/issues?q=anyElement](https://github.com/TEIC/Stylesheets/issues?q=anyElement).

## Next teleconference meetings
* August Council meeting: Tues Aug 13 10:00–11:30 PDT, 13:00–14:30 EDT, 17:00–18:30 UTC, 19:00–20:30 CEST 
* Planning Council get-together at ADHO in DC: Week of Aug. 5
* Next Stylesheets meeting: 22 July 2024
* Setting new dates/times for September, Nov, and Dec.

## Other Business
* Buenos Aires F2F October 2024: travel planning updates
* Slack or something else?
    + Board preference to stay on Slack (also easier for us)
    +  Other options: [Matrix](https://matrix.org/), Mattermost (see Humanum’s <https://documentation.huma-num.fr/mattermost/> )
    + **Action on EBB** to apply: Slack nonprofit arrangement  \[**Update:** Action completed in July: Council and Board have a nonprofit Slack arrangement now.\]
 