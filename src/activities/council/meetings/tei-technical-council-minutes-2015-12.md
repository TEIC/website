---
title: "TEI Technical Council Minutes 2015-12"
creator: TEI Technical Council
date: 2015-12-03
---
# TEI Technical Council Minutes 2015-12




Teleconference 2015\-12\-03 14:00 UTC
 
 
 Present
 
 * Hugh Cayless (HC)
* James Cummings (JC)
* Martin Holmes (MH)
* Lou Burnard (LB)
* Syd Bauman (SB)
* Raff Viglianti (RV)
* Elisa Beshero\-Bondar (EB)
* Magdalena Turska (MT)
* Fabio Ciotti (FC until \~15:15\)
* Elli Mylonas (EM)
* Stefan Majewski (SM) (reading until \~15:15\)
* Martina Scholger (MS)
* Stefanie Gehrke (SG) (reading)
* Paul Schaffner (PFS)




 Apologies
 
 * Peter Stadler (PWS)






 Agenda and Minutes
 
 
 Pure ODD branch integration
 
 
- <http://teic.github.io/TEI/> has the last available
 version

- [https://github.com/TEIC/TEI/tree/lb42\-pureodd](https://github.com/TEIC/TEI/tree/lb42-pureodd)

- <https://github.com/TEIC/Stylesheets/tree/pureodd>

LB reported on the progress of this. Some stumbling blocks soon to be fixed.
 Hopes to have a version that runs Makefile in \~24 hrs. Discussed the example
 pages: MH and JC stress the usefulness of the description, examples, and
 remarks. LB points out that the class info is already present in the
 display, and it is confusing to duplicate it. MH points out that nobody is
 suggesting duplicating it; we’re talking about the order of items in the
 page. He thinks the examples and remarks should precede the ODD and RelaxNG
 content models. JC agrees or suggests that there should be some whizzy web
 mechanism for making examples/remarks more visible.


\[
 break owing to google hangouts having predefined
 limits] 


Continuing: LB and SB suggest that the class membership does not need to be
 in the ODD bit; and MH suggests that the caption should be “Content model”,
 not mentioning Pure ODD. SB suggests that we should also deprecate the
 display of the RelaxNG. Others think it should actually be enhanced with
 other schema languages (XSD, but not DTD). SB says that we should
 concentrate on getting Pure ODD out the door before worrying about the
 schema display. There is consensus on the removal of classes and
 recaptioning; the proposal to move the examples and remarks above the
 content model is subject to disagreement. HC to integrate these changes in
 next crack at pure\-ODD processing stylesheet.


 LB raises problem of anyXML (ticket already <https://github.com/TEIC/TEI/issues/1373> ) Stylesheets
 need to be changed to cope with this, i.e. generate correct definition. 


MH suggests that the PDF generation may be a problem and it would be good to
 find out soon whether that’s going to be a big problem or not. HC thinks
 there are probably issues with PDF versions of PureODD content models, but
 does not know. However, it is difficult to do generalized testing until
 everyone has it. Need to get this ready to test.


SM was working on PDFs. JC and MH note that the EPub generation will also be
 affected. 






 Processing Model integration
 
 JC reports that the draft text is in a branch ‘processing\-model’ off the
 lb42\-pureodd branch. All the model\* elements, etc. have been added there and
 linked to from guidelines. LB noted that he has created a brand new branch
 and not checked it in yet, so JC will have to re\-do all his work. JC agrees
 to do so but may need help with the tests. LB volunteers to help when Pure
 ODD is off his plate.




 TEI Simple
 
 JC reports that the PIs of the TEI Simple project (Martin Mueller, Sebastian
 Rahtz, Brian Pytlig Zillig) desire TEI Simple to be added as soon as
 possible. It has a dependency on the processing model documentation, which
 has a dependency on Pure ODD.




 Next Release?
 
 Much discussion of the integration and proposed release order leads to
 consensus that we should first integrate Pure ODD, and make sure everything
 works; then the Processing Model from Simple; and then Simple. We may
 release after Pure ODD is integrated, or try to get the other two components
 in before the next release. JC argues for getting Pure ODD right, and then
 while testing that (i.e. ensuring it all works well on every platform)
 adding in the processing model documentation elements. Adding in TEI Simple
 as a separate release of a new exemplar using those once they are in place. 




 Spring Face to Face?
 
 
- HC asks if we agree the Fall one should be in Vienna with the
 Conference. SM: that’s what I am going to suggest. I have already
 contacted the organisers concerning this and opportunities. I am not
 sure about the exact dates of the conference, yet.

- SB suggests Fall should be in Vienna, but that we explicitly reject
 the idea the Council **always** meets in conjunction
 with MM.

- Agreement to Vienna seems general. SM will continue inquiries and
 report back on the status.

- EM volunteers to host the Spring FtF at Brown if no\-one else wants to
 host it.

- PFS suggests that he is willing and should be able to host in Michigan
 even though he’s not on Council from next year.

- JC reminds Council that it doesn’t have to be one of our institutions
 and if there is another institution which would benefit from the influx
 of people for a ‘TEI Day’ or similar that should be an option.

- Re timing: should be done with a Doodle Poll. HC will set one
 up.





 Jenkins Boxes
 
 
- At the FtF we decided to align all Jinks configurations and create
 some subdomains on tei\-c.org for them. The Apache virtual host configs
 have now been set up, so IR has been asked to point these:
 
	
	- jenkins.tei\-c.org \-\> Victoria Jenkins
	
	- jenkins2\.tei\-c.org \-\> Paderborn Jenkins
	
	- Along with location\-specific subdomains for explicit
	 comparison (jenkins\-victoria.tei\-c.org,
	 jenkins\-oxford.tei\-c.org, jenkins\-paderborn.tei\-c.org).
	
	- We could add other stable jenkinses as desired.

- JC suggests waiting for integration of pure ODD; then using the
 jenkins.tei\-c.org address will future\-proof it since we can always
 change that DNS to point to a working location. (Unless of course paths
 on Jenkins jobs change or something.)

- Once these are working, a change needs to be made to the spec and
 chapter files which currently point to a (wrong) Oxford URI for their
 schema. Ticket \#1408 <https://github.com/TEIC/TEI/issues/1408> created,
 assigned to SB

- 16\.04 script \-\-\-if it works\-\-write documentation for it. MH could work
 on it and pass it on to EB to see if she can get it to work
 (experimental Jenkins setup in Pittsburgh)





 Candidates for Chair for 2016?
 
 
- Elections for chair coming up; members encourage HC to stand again,
 but new members are also encouraged to stand. The election happens in
 January. HC reports that it’s a reasonable but not a crushing amount of
 work.

- JC reminds new council members that there is no requirement for lots
 of familiarity with technical TEI aspects, and that the council chair is
 more of the administrator of Council business. See also the Council FAQ
 [http://wiki.tei\-c.org/index.php/TEI\-Council\-FAQ](https://wiki.tei-c.org/index.php/TEI-Council-FAQ)
 which has a section on duties of the chair. So new members should not
 feel reluctant to stand, it can be better if we have a friendly election
 rather than an acclamation.





 Farewell to departing members (HC)
 
 
- Council thanks MH, PFS, FC, SG for their service.

- FC :I want to express my thanks to all Council members. It has been
 great to be part of this lively community. I wish all the best to all of
 you especially to new members. I hope I will have the chance to join
 Council again in the future.

- MH reiterated his desire to continue working on TEI things as a member
 of the community.

- Welcome to new members (MT, EB, EM, MS)
 
	
	- Mentors and Mentees:
	 
		
		- SB mentors EB
		
		- JC mentors MS
		
		- LB mentors MT
		
		- HC is everybody’s git mentor

Issues with getting minutes up on website / TEI website issues generally.
 \[Kevin Hawkins reports via separate communication that the CMS is now so out
 of date that he only manages to do it with an old machine with an
 out\-of\-date OS and software he keeps for that purpose.]







