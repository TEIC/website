---
layout: page.njk
title: "TEI Stylesheets Task Force Charge"
tags: page
date: 2022-03-23
---

# TEI Stylesheets Task Force Charge

## Rationale
The TEI Stylesheets, as authored by Sebastian Rahtz and maintained in their own GitHub repository, pose serious problems for the TEI Technical Council to properly maintain. They are poorly documented, contain transformations to outdated file formats, and are themselves written in a dated form of XSLT. Over the past decade, TEI Council and community members have undertaken numerous patch repairs to maintain their functionality, but our time and energy would better be directed to rewriting them in XSLT 3 with careful documentation and a clear plan in view for Council to maintain them more reliably than we can in the current brittle situation.

To the extent that TEI Council maintains a core set of XSLT stylesheets, these should be     dedicated primarily to transformations that generate the TEI Guidelines that users read and the schemas needed to validate TEI documents from TEI ODD. We should separate the XSLT transformations that support various other conversions from and to TEI XML from those used to generate the TEI Guidelines and custom ODDs. This task force is expected to address ODD chaining and ODD to RELAX NG & Schematron.

## Objectives

* Compose a new set of XSLT Stylesheets in XSLT 3 only.
* Refactor the Stylesheets to separate the concerns of ODD processing from representation of the *TEI Guidelines*.
* Determine in consultation with the Council the technical specifications of PureODD and ODD chaining.
* The processing should be able to support either PureODD or RELAX NG content of `<content>`, but not both mixed into one `<content>`.
* Develop the new XSLT to support ODD chaining.
* Work carefully on inline and external documentation to guide Council and community members in their long-range maintenance.
* Create (as needed) a newly reorganized Stylesheets repo to house conversions we will maintain in a way that is more accessible to our community.
* Revise these objectives as needed.
* Involve more people in the task force as needed.

## Schedule

The task force is expected to revise this schedule as needed.

* March 2022: Formally invite members and create the task force.
* April 2022: Create a new TEIC GitHub repo for new Stylesheets.
* By summer 2022: Write a detailed style guide for the new codebase and its inline documentation, and create schemas or schematron to enforce it, before any actual code is written.
* Summer 2022 – Summer 2023: Develop new XSLT 3 and its testing suite together to support Guidelines releases.
* Spring 2023: Begin drafting new TCWs to support the new Stylesheets.
* Calendar 2023: Council evaluates and tries to break new testing process. Council and task force evaluate and modify the documentation as required.
* Fall 2023: Complete a working method + new draft end-user documentation to release the schema associated with the TEI Guidelines.
* By end December 2023: Give the Council a new set of Stylesheets.
* Summer 2024: Council decides what to do with the old Stylesheets and garage services, and which ones we will continue to maintain.

## Administrative

The task force is chaired by Syd Bauman. Members include Martin Holmes, Helena Bermúdez Sabel, and David Maus.

The task force is required to provide regular progress reports to the TEI Technical Council, which maintains the authority to accept or reject deliverables by the task force.