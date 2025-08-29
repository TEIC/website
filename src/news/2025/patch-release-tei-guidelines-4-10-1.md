---
title: "Patch Release: TEI Guidelines 4.10.1"
date: 2025-08-28
---
# Patch Release of the TEI Guidelines 4.10.1

On 28 August 2025, the TEI Consortium released a small but significant “patch” of the TEI Guidelines as [version 4.10.1](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html). The patch removed a Schematron constraint that we had introduced in the recent 4.10.0 release, because the constraint proved problematic for TEI projects when their TEI headers use elements that are members of [att.declarable](https://www.tei-c.org/Vault/P5/4.10.1/doc/tei-p5-doc/en/html/ref-att.declarable.html) without the attributes for selection. For details on the issue, please see the explanation and tickets linked in the release notes below.


Martin Holmes and Syd Bauman were our release technicians, and the release process was helped along by our ever-vigilant Council members and friends, with special thanks to Martin Prell for alerting us to the problem in the TEI Slack.

As always, we rely on you all to report bugs and make feature requests for the Guidelines on GitHub at <https://github.com/TEIC/TEI/issues> and in our TEI Slack. Your input tells us what to work on, and we cannot do without it! You will find all of the TEI Consortium's software projects in our GitHub organization https://github.com/TEIC, where you can report issues and make feature requests. The latest release of the Guidelines is available from all the usual places, including the TEI website at <https://tei-c.org/release/doc/tei-p5-doc/en/html/index.html> and the GitHub site at <https://github.com/TEIC/TEI/releases/tag/P5_Release_4.10.1>. 


The patch did not require a new release of the Stylesheets, so the current version of the Stylesheets remains 7.59.0. The Debian package has been updated at <http://packages.tei-c.org/deb/>, and the TEI Guidelines and the Stylesheets are available for download at <https://sourceforge.net/projects/tei/files/>. 

The oXygen TEI plugin has been updated with the latest version as well. Here is an explanation of  “How to automatically update your TEI framework in oXygen": <https://github.com/TEIC/oxygen-tei/blob/master/oxygen-tei-plugin.md>.


## TEI P5 version 4.10.1 release notes

Release 4.10.1 is a patch release to remove a Schematron constraint introduced in the 4.10.0 release. This constraint flagged as an error the case of two or more sibling declarable elements appearing in the TEI header without the required attributes. Because TEI projects use these elements in the TEI Header in contexts that do not involve [att.declarable](https://www.tei-c.org/Vault/P5/4.10.1/doc/tei-p5-doc/en/html/ref-att.declarable.html), we are removing the Schematron rule introduced in 4.10.0. For now the language guiding the constraint is still present in [the prose](https://www.tei-c.org/Vault/P5/4.10.1/doc/tei-p5-doc/en/html/CC.html#CCAS2), as it has been since P2. ([#2750](https://github.com/TEIC/TEI/issues/2750) and [PR # 2751](https://github.com/TEIC/TEI/pull/2751)).

Note: patch releases do not have codenames.

