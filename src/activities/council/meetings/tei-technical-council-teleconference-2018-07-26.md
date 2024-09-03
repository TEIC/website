---
title: "TEI Technical Council Teleconference, 2018-07-26"
date: 2018-07-26
---
# TEI Technical Council Teleconference, 2018-07-26
**Meeting time:**


* 08:00 EDT, 13:00 BST, 14:00 CEST
* Started at \~12:10Z.  ended at \~13:17Z.


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Alex Bia (AB)
* Hugh Cayless (HC)
* Elli Mylonas (EM)
* Martina Scholger (MS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


**Apologies:**
* James Cummings (JC)
* Peter Stadler (PS)
* Sarah Stanley (SS)


F2F in Tokyo
------------


* [Agenda](https://tei-c.org/activities/council/meetings/tei-technical-council-f2f-tokyo-2018-09-07-08/)
* Will Martin Holmes join us? — Yes, he is available for all our meetings except Friday morning; all we have to do is tell him which sessions we’d like him to attend (and tell him where).
* Does LingSIG have anything for us?
* Suggestion (tentatively approved) is to work on [\#1707](https://github.com/TEIC/TEI/issues/1707) during open session on Monday morning, explicitly inviting those involved on that ticket.


Review of the release process
-----------------------------


* Suggestion: release techs should build Stylesheets shortly after creating new branch, so that the Stylesheets/Tests/expected\_results/ can be updated ahead of time.
* We need an account for wordpress — HC and MS have an account now.
* Update TCW22 (to edit see [gitHub Documentation repo](https://github.com/TEIC/Documentation)).
	+ Perhaps all TCW pages should be updated via GitHub (not WordPress).


Request from Marjorie Burghart — TEI XML editor
-----------------------------------------------


* MS: Request from Marjorie Burghart on developing a TEI XML editor
* JC: Note editors like [https://github.com/jeffreycwitt/tei\-web\-editor](https://github.com/jeffreycwitt/tei-web-editor) and [http://exist\-db.org/exist/apps/eXide/index.html](http://exist-db.org/exist/apps/eXide/index.html) (which could be customised to TEI usage). But should such things be a Council’s responsibility which has its hands full with the software it has now?
* She is not asking Council to develop an editor, rather she plans to submit a proposal to the DARIAH Theme Funding Call
	+ [https://www.dariah.eu/2018/06/29/dariah\-theme\-funding\-call\-2018\-2019/](https://www.dariah.eu/2018/06/29/dariah-theme-funding-call-2018-2019/)
	+ Develop a plugin for native TEI support in e.g. jEdit
	+ Java Developer is needed (call TEI\-L?)
	+ Role of Council:
		- Do we support the idea?
		- How much effort would it be to provide a TEI package for e.g. jEdit?
		- Like oXygen plug\-in, new thing should reach into the Vault for source to TEI. We should document how the Vault is structured so that developers can use it appropriately.
		- Suggestion: we should tell Marjorie that we (TEI — should check with Board? — yes, particularly for letter of support) support the effort, and are willing to be helpful and provide input and advice to developers. We would consider supporting it in the ongoing release process if it conforms to agreed\-upon conventions.
		- Summary: Council responsibility in general is probably to provide documentation, letter of support (via Board), and Guidelines for what it means to support TEI. Perhaps a web page on TEI\-C site “Considering developing TEI editing environment? Here are some things to consider” (including what does it mean to be TEI compliant and not just XML compliant).


Status report on RomaJS
-----------------------


* RV: Does OxGarage use only release Stylesheets? If yes, we may need another release before the conference for new Roma to work.
	+ Alternatively, oxgarge2\.tei\-c.org could use the dev branch and RomaJS could temporarily point to oxgarage2\.
	+ HC: Should ask PS, but probably fine. Also: nothing stops us from doing OxGarage or Stylesheets releases out\-of\-sync with the Guidelines, or just spinning up a separate OxGarage instance for demo/testing purposes.
* RV asked Council to fill in a doodle for the next RomaJS meeting.


Report on Standoff task force meeting
-------------------------------------


* Will be meeting week after Balisage


SIG on Libraries
----------------


* SIG is dormant. Should have a call for interest in reviving it at the Members meeting. Also shop TEI SIG to the ADHO Libraries SIG.
* BPTL is close to completion. Will be announced at Members meeting. Should put it on the agenda for this purpose.


SIG on marginalia
-----------------


* EB reports that Christopher Ohge will be asking for a new SIG on marginalia.


Tickets
-------


* Status of ticket \#1707 <https://github.com/TEIC/TEI/issues/1707> on encoding measurements? EB: Partly there (we have \<unit\> now), but can’t finish before Japan. Need to introduce \<unitDef\> and \<unitDecl\>. Should finish before next release, and work on it in Open Session at the Tokyo TEI conference.
	+ Work ongoing in measurement branch (made by EB): please help there if you like.
* \#1720 <https://github.com/TEIC/TEI/issues/1720> (related to 1707\): new description of att.lexicographic okay? (EB)
	+ Everyone to comment on within next 24 hours, and (unless someone has objected) then EB merges in new description and closes.
* \# 1795 <https://github.com/TEIC/TEI/issues/1795> and \#1621 <https://github.com/TEIC/TEI/issues/1621>: re Schematron constraints: for conformance or guidance? Error messages too fatalistic? (EB)
	+ Branch connected to \#1621: [ebb\_Schematron\_Explan](https://github.com/TEIC/TEI/compare/ebb_Schematron_Explan)
	+ Discuss this in Tokyo


Posting minutes
---------------


* Suggestion for posting minutes: a pre\-set number of days after every teleconference  the Chair posts the notes to TEI website without an explicit vote of approval (which would make them into minutes). This gives Council members a predictable period of time during which they can read and edit the notes. Chair should post a reminder e\-mail to Council list 2–3 days in advance of posting on web.


Next Council meeting: Thursday August 30
Ticket triage
-------------




| **July 2018** | **EB** |
| --- | --- |
| **August 2018** | **JC** |
| **September 2018** | **EM** |
| **October 2018** | **MT** |
| **November 2018** | **SS** |
| **December 2018** | **AB** |


 