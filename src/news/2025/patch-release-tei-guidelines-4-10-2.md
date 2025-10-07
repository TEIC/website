---
title: "Patch Release: TEI Guidelines 4.10.2"
date: 2025-09-04
---
# Patch Release of the TEI Guidelines 4.10.2

On 4 September 2025, the TEI Consortium released a second small but significant “patch” of the TEI Guidelines as [version 4.10.2](https://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html), in order to address a bug in the content model of <sp> that we introduced in the [4.10.0 release](https://www.tei-c.org/Vault/P5/4.10.2/doc/tei-p5-doc/readme-4.10.0.html). The bug inadvertently set a requirement for the `<speaker>` element within `<sp>` when previously it had been optional. For details on the patch and ongoing work to simplify the content modeling, please see the tickets linked in the release notes below.

Martin Holmes and Syd Bauman were, once again, our release technicians, assisted by Helena Bermúdez Sabel, Hugh Cayless and Trish O'Connor. The release process was helped along by our ever-vigilant Council members and friends, with very special thanks to Carsten Milling for raising the ticket earlier this week alerting us to the problem.


As always, we rely on you all to report bugs and make feature requests for the Guidelines on GitHub at <https://github.com/TEIC/TEI/issues> and in our TEI Slack. Your input tells us what to work on, and we cannot do without it! You will find all of the TEI Consortium's software projects in our GitHub organization https://github.com/TEIC, where you can report issues and make feature requests. The latest release of the Guidelines is available from all the usual places, including the TEI website at <https://tei-c.org/release/doc/tei-p5-doc/en/html/index.html> and the GitHub site at <https://github.com/TEIC/TEI/releases/tag/P5_Release_4.10.2>. 

This patch (like [the previous one](https://www.tei-c.org/Vault/P5/4.10.2/doc/tei-p5-doc/readme-4.10.1.html)) did not require a new release of the Stylesheets, so the current version of the Stylesheets remains 7.59.0. The Debian package has been updated at <http://packages.tei-c.org/deb/>, and the TEI Guidelines and the Stylesheets are available for download at <https://sourceforge.net/projects/tei/files/>. 

The oXygen TEI plugin has been updated with the latest version as well. Here is an explanation of  “How to automatically update your TEI framework in oXygen": <https://github.com/TEIC/oxygen-tei/blob/master/oxygen-tei-plugin.md>.


## TEI P5 version 4.10.2 release notes

Release 4.10.2 is a patch release to fix a bug in the content model of [sp](https://www.tei-c.org/Vault/P5/4.10.2/doc/tei-p5-doc/en/html/ref-sp.html). The patch is needed because in the [4.10.0](https://www.tei-c.org/Vault/P5/4.10.2/doc/tei-p5-doc/readme-4.10.0.html) and [4.10.1](https://www.tei-c.org/Vault/P5/4.10.2/doc/tei-p5-doc/readme-4.10.1.html) releases, the [speaker](https://www.tei-c.org/Vault/P5/4.10.2/doc/tei-p5-doc/en/html/ref-speaker.html) element was inadvertently required as a child of [sp](https://www.tei-c.org/Vault/P5/4.10.2/doc/tei-p5-doc/en/html/ref-sp.html), when previously it was not. ([#2758](https://github.com/TEIC/TEI/issues/2758), [PR #2759](https://github.com/TEIC/TEI/pull/2759) (not merged), and [PR #2760](https://github.com/TEIC/TEI/pull/2760)). The [release notes for release 4.10.0](https://www.tei-c.org/Vault/P5/4.10.2/doc/tei-p5-doc/readme-4.10.0.html) have also been revised to include information about the change introduced to the content model of [sp](https://www.tei-c.org/Vault/P5/4.10.2/doc/tei-p5-doc/en/html/ref-sp.html).

Note: patch releases do not have codenames.

