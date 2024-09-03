---
title: "TEI Technical Council Teleconference, 2022-05-13"
date: 2022-05-13
---
# TEI Technical Council Teleconference, 2022-05-13
**Meeting Times:**


* 7am PDT / 10am EDT / 4pm CEST
* Started:     15:05Z    Ended:    16:34Z


**Present:**
* Syd Bauman (SB)
* Helena Bermúdez Sabel (HBS)
* Elisa Beshero\-Bondar (EBB)
* Elli Bleeker (EB)
* Janelle Jenstad (JJ)
* Sabine Seifert (SS)
* Peter Stadler (PS)


**Apologies/Not Present:**
* Hugh Cayless (HC)
* Martina Scholger (MS)
* Magdalena Turska (MT)
* Raff Viglianti (RV)


Meeting minutes previous month ([April](https://tei-c.org/activities/council/meetings/tei-technical-council-teleconference-2022-04-08/))
 


F2F meeting in Newcastle
------------------------


* September 11–13 (Sun–Tue). Is this still ok for everyone?
	+ JJ cannot attend after the conference and we think that MT said the same.
	+ It seems likely that it will be okay, yes. **Would we want to start on Saturday** and keep Tuesday off for some workshops? Or start on **Sunday**? We should canvas everyone since this meeting is not fully attended. **ACTION** on **MS** to set up a poll.
* JC has booked a room in a different building for the council meeting on both Sat 10 Sep (just in case) and Sun 11 Sep. The reason for the different building is this will be the building next door where the school of English and JC’s office is, the Percy building – he’ll be able to let us in \& out of the building.
* On Mon 12 \& Tue 13 we will be in a room in the main conference venue. (The Armstrong building next door.)


Discussion of new \<gender\> element and ancillary elements
-----------------------------------------------------------


* EBB, HBS, RV, and JJ are bringing to Council all of the changes listed here in our “gender” branch and listed below in our “Things Done” notes: [**https://github.com/TEIC/TEI/compare/gender**](https://github.com/TEIC/TEI/compare/gender)
	+ SB: Well done; overall looks good. A couple of comments interspersed below.
	+ EBB presented the subgroup’s changes
		- PS pointed to the discussion in the FOAF Vocabulary Specification here: [http://xmlns.com/foaf/spec/\#term\_gender](http://xmlns.com/foaf/spec/#term_gender)
	+ **Changes to make:**
		- “specifies the gender identity of a person**, persona, or character**.”
		- use teidata.enumerated for values of teidata.sex and teidata.gender
		- Modify remarks on @value: Values for this attribute .... may be locally defined by a project *or according to an external standard* (so we don't get confused with reference pointing)
		- Add comma after hair type: “skin colour, hair type**,** and skull measurements”
		- Add Gayle Rubin to the bibliography.
		- add source\="\#NONE" or created for these Guidelines to simple example, or see below (provide exempla that point to these.)
		- Make a vCard exemplum and we cite it. “For example, here is an example of something that is defined according to the vCard ([https://datatracker.ietf.org/doc/html/rfc6350\#section\-6\.2\.7](https://datatracker.ietf.org/doc/html/rfc6350#section-6.2.7))
		- SHOULD we consider mentioning ISO? Discussion: no, good that we drop.
		- Provide an example of how to create a controlled vocabulary in an ODD. We are thinking of using a defined vocabulary from a completely new/unusual anthropological set that is not just M/F.
		- Sidenote: UN is working on a proposed ontology of gender now: <https://www.scc.ca/en/flagships/gender>
		- Add commentary that there are MANY standards available and currently in development, including but not limited to A, B, and C. Projects are encouraged to find and deploy standards developed for their fields or to customize their own.
	+ **Things Done:**
		- Edited sex.xml as follows:
			* Removed recommendations for vCard and ISO standards on the grounds that they connote the reinforcement of sexist stereotypes. Said that values may be locally defined or drawn from an external standard.
			* Amended examples (F for female, rather than 2\).
				+ SB: The above two bullet points seem at odds with one another. Surely ‘F’ is more Eurocentric than ‘2’?
			* Simplified the remarks.
			* Changed \<desc\> to “specifies the sex of an organism” (to account for projects that want to capture the sex of plants and animals).
			* Provided French, Italian, and Spanish translations for \<desc\>.
		- Edited teidata.sex.xml as follows:
			* We removed references to ISO standards.
		- Introduced teidata.gender.xml:
			* \<desc\>: “defines the range of attribute values used to represent the gender of a person or persona”
				+ SB: Should probably include “character” as well as person and persona, no?
			* Made it clear in remarks that it may not be used to encode morphological gender.
				+ SB: But wording is problematic (“this attribute” — it is the possible values that are being defined, not the attribute).
		- Created a gender.xml file with exemplum and remarks.
		- Edited ND\-NamesDates.xml:
			* Added \<gender\> to \<specList\>.
			* Alphabetized the \<specDesc\>s for searchability and neutrality.
			* Did quite a bit of revising to eliminate words like “mankind.”
			* Revised advice to encoders about culturally determined concepts.
			* Paragraph on \<persona\>: Added \<gender\> to the list.
			* Revised the example of Griffin\-Gracy to include the \<gender\> element.
		- Opened a new ticket to add an \`\<organism\>\` element. [\#2295](https://github.com/TEIC/TEI/issues/2295) and assigned ourselves to it.


Discuss ticket triage
---------------------


* Should we also triage the [Documentation repo](https://github.com/TEIC/Documentation)?
	+ There is only one open unassigned ticket. Ticket triage folks need to assign it.
* Ticket triage means also to triage Stylesheets, but there are a lot of ancient issues there.
	+ New tickets should be assigned.
	+ Ticket triage people should not be expected to go through all old stylesheet tickets.
	+ Perhaps we could mop up old stylesheets tickets at a F2F.
* EB \& SB expect to do ticket triage for May on Fri 20 May.


Oxygen
------


* Do we still want to support older versions?
	+ Meeting on this issue (with Martin) was recorded and it’s in this folder: [TEI\-Stylesheet\_Meetings](https://drive.google.com/drive/folders/1K1ugJvWzz6TQep87R8beLkYf-nGCpocX)


Documentation
-------------


* Publish documentation on how to create P5subset.xml. In the last Stylesheets meeting, we were thinking of publishing it in the Wiki. But I (MS) think we should publish it in the Documentation repo. The information in the wiki is very outdated. I suggest that we discuss in one of our next meetings what we want to have in the wiki and what should be in the documentation repo?
* **Action on EBB** to review what we have: a Google Doc that MS started. There was some discussion of adding it to the Documentation repo but the general feeling was that it does not need a formal TCW document. [https://docs.google.com/document/d/1UhCg76\_AgnS5PW0g\_EN6zPZE4tTUs0bNeMXFVmZ4VuQ/edit\#heading\=h.yg4zfkshniwp](https://docs.google.com/document/d/1UhCg76_AgnS5PW0g_EN6zPZE4tTUs0bNeMXFVmZ4VuQ/edit#heading=h.yg4zfkshniwp)


**REMINDER (post\-meeting)**
* **Action on EBB** to organize late\-May meeting re: nested \<ab\> ticket ([\#1856](https://github.com/TEIC/TEI/issues/1856)).


 