---
layout: page.njk
title: "Teleconference 2017-08-31 13:00 UTC"
---
# Teleconference 2017-08-31 13:00 UTC




Attendees


* Syd Bauman (SB)
* Elli Mylonas (EM)
* James Cummings (JC)
* Hugh Cayless (HC)
* Raff Viglianti (RV)
* Sarah Stanley (SS)
* Elisa Beshero\-Bondar (EB)
* Martina Scholger (MS)
* Alejandro Bia (AB)



Logistics
---------


Call started @ \~13:07Z; finished @ \~14:24Z.


Agenda
------


  
 
 * Elections. [Nominations](https://wiki.tei-c.org/index.php/TEI-C_and_TAPAS_Call_for_Nominations_2017 "Nominations")are open for the Council, Board, and TAPAS.
	+ If your term is up, I hope you'll consider standing again — terms expiring: EB, JC,
	 EM, MS, PS, MT (if you think they should run again, nominate them!)
	+ Please think about nominating good candidates
* MH @ Victoria F2F? — agreed, yes, invite him.
* What are we going to do next? I.e. what high\-level objectives should Council focus
 on?
	+ Usability / Technical Debt
		- GLs looking old (Awaiting new website to integrate with?)
		- Stylesheets
			* There's a lot lurking in the Stylesheets that should be brought into line with new
			 stuff in TEI over the last 2\+ years.
				+ SB mentions the project to work on replicating the GLs\-generating parts of the Stylesheets
				 as a separate thing; Going through and updating the code, focusing on keeping the
				 outputs the same ("rub\-a\-dub\-dub"). RV: develop coding guidelines for Stylesheets.
				 Make a "lab journal" as we go through the cleaning process. XSLT 3\.0? Is it worth
				 it? SB: Maps (the ! operator) might make refactoring easier. Likewise the arrow operator.
				 JC: Might be too much pressure on our users at this stage. HC: The cleaning might
				 involve a pause in bug\-fixing.
					- Ideally integrate with a test job on Jenkins that would compare output of any cleaning
					 commits to output of current stylesheets
					- Document decisions (either ahead of time or as you go) to help keep coding conventions
					 consistent
				+ Update so they output to current TEI specs
				+ Documentation:
					- to help people adapt the stylesheets
					- to guide the community to use stylesheets for particular kinds of work
			* XSLT 3\.0/XQuery 3\.1 is a thing now. Should we upgrade? — General consensus seems to
			 be it is a good idea, but we are in no rush, and since some users may not have easy
			 access we should do either rub\-a\-dub\-dub or rewrite first in 2\.0, then move to 3 in
			 the future. (When more users have easy access to 3\.) Suggestion by EM to survey the
			 TEI\-L, see if there is a significant population that could not use 3\. JC: Try doing
			 the GLs generation in XSLT 3\.0?
			* Need more easy how\-to
				+ EM: More documentation to make, e.g., using stylesheets easier for users. RV: That,
				 but also code conventions for our XSLT to make contributions easier.
		- Pushing on RomaJS
			* RV: update \+ [short explanation of architecture](https://docs.google.com/presentation/d/1wENuQ3u2HT7fq0X9j6Olj69OF8PQqhXWprT_Tq-gG9U/edit?usp=sharing "short explanation of architecture")
		- OxGarage will need some attention in the future too.
	+ Extending existing work
		- Extensions to Pure ODD? (See [https://github.com/TEIC/TEI/issues/1663](https://github.com/TEIC/TEI/issues/1663 "https://github.com/TEIC/TEI/issues/1663"))
		- More work on the Processing Model?
	+ More Internationalisation / fostering more TEI work outside the North American/Western
	 European sphere
		- Spreadsheet with translations from Google Translator [https://docs.google.com/spreadsheets/d/1iVPMNGXj7p\_XUAHW34LJsr6\_owVSAq8bdDWYsVI8TAo/edit\#gid\=826339698](https://docs.google.com/spreadsheets/d/1iVPMNGXj7p_XUAHW34LJsr6_owVSAq8bdDWYsVI8TAo/edit#gid=826339698 "https://docs.google.com/spreadsheets/d/1iVPMNGXj7p_XUAHW34LJsr6_owVSAq8bdDWYsVI8TAo/edit#gid=826339698")
		- EM: Is there a way to get more people involved (and search for funding) for a roadmap
		 to internationalization of the TEI? JC: Board has been encouraging. HC: This relates
		 to refactoring the Guidelines. Council's task might be to start planning the roadmap
		 and who else to involve. Need to start a working group.
		- SB: Perhaps schedule a separate special Council call for this. MS: Those with language
		 skills should look at the spreadsheet above to comment.
	+ Something entirely new? No, let’s get on top of tickets and existing software, etc.
* Reminder of dates and arrangements for November Face to face
	+ Dates of the Members’ Meeting and Conference: 2017\-11\-11/15; thus we will be meeting
	 2017\-11\-16/18\. (Probably start at lunchtime on Thu 11\-16\.)
* Scheduling 1st face\-to\-face of 2018 — align w/ XML Prague again? (It will probably
 be in early Feb, again, but I don’t know.)
	+ Seems to be consensus that, in general, early in the year is a good idea, and this
	 would be a good opportunity. However, given that we’re meeting in mid\-Nov, it would
	 be awfully close, essentially only 1 month. No decision made.
* Other business? RV points out chap 11 still needs work.
* IIIF working group \- emails from Ben Brumfield and Nick Laiacona. Also BPTL needs
 info
	+ EM: met with Ben, Nick and others at the DH2017 conference in Montreal. Ben and Nick
	 offered to write up some examples of integration of IIIF with TEI. EM suggested they
	 write this up in their GitHub repo, and invite TEI Council to the GitHub, \+ community
	 to comment.






