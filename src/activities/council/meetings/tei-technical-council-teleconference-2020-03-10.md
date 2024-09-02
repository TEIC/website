---
layout: page.njk
title: "TEI Technical Council Teleconference, 2020-03-10"
---
# TEI Technical Council Teleconference, 2020-03-10
**Meeting time:**


* EST 09:00–10:30, GMT 13:00–14:30, CEST 14:00–15:30
* Started: 13:08Z; ended: 14:32Z


**Present:**
* Syd Bauman (SB)
* Elisa Beshero\-Bondar (EB)
* Meaghan Brown (MB)
* Hugh Cayless (HC; joined 13:32Z)
* Jessica Lu (JL)
* Martina Scholger (MS, chair)
* Peter Stadler (PS)
* Raff Viglianti (RV)


**Apologies/Not Present:**
* Vanessa Bigot Juloux (VBJ)
* Nicholas Cole (NC)
* Magdalena Turska (MT, engaged in Publisher workshop)


 
Next F2F meeting
----------------


* 1–3 May 2020 in Paderborn
* Let’s wait for our next teleconference (14 April 2020\) for most bookings and to re\-evaluate the travel situation.
* Council agrees that it would be possible to do a remote version of the F2F if we can’t travel — probably a few hours per day, scheduled so that all can make it.


Follow\-up Release 4\.0\.0
--------------------------


* Release process, 4\.0\.0:
	+ JL, EBB, and RV updated the documentation in [TCW22](https://teic.github.io/TCW/tcw22.html).
	+ Release process on the HumaNum VM (third machine): user ‘tei’ is very restricted, so we had to login with a personal account.
	+ We should set this up so the ‘tei’ user has sudo powers.
	+ Neither the ‘tei’ user’s nor RV’s home directory had enough disk space, so we had to work with a temp directory (which we can use as a fall\-back). 3\.4 GB available in the temp directory. This has been fixed by Luis Meneses.
* Release process, going forward:
	+ We need to decide on a stable approach.
	+ Suggestion to decide firmly on release name \& number during refridrigation, well before freezing. Also, revisit the language of the last step about predicting the next release number.
	+ Rename title of TCW 22 to “The TEI Release Process”.
	+ **Action on EB and JL** to update TCW22 accordingly **by** 2020\-04\-14\.
* Release process, review of our three VMs:
	+ machine 1: tei\-c.org server (wordpress, wiki, etc) [www.tei\-c.org/Vault/](https://www.tei-c.org/Vault/) is also on this machine.
	+ machine 2: Subversion for jTEI only.
	+ machine 3: Dockerized OxGarage, Roma, Vault; also: [vault.tei\-c.org](https://vault.tei-c.org/).
	+ Note that the data store for /Vault/ is mounted on both 1 and 3\.
	+ Release work can all be done on machine 3; home directory of ‘tei’ user should now be big enough to hold release artifacts, etc.
* model.resourceLike ⮕ model.resource
	+ Issue: class name was changed from model.resourceLike to model.resource; customizations that explicitly reference that class are now in error and need to be updated. Should we deprecate class name changes in the future?
	+ PS: in future we should care more about classes for the sake of backwards compatibility.
	+ SB: We encourage users to tie customization to a specific version; we should be more aggressive about this: perhaps make schemaSpec/@source mandatory. **Action on SB** to create an issue by **2020\-03\-15**. — DONE, see comment in [\#1869](https://github.com/TEIC/TEI/issues/1869#issuecomment-597137221), which is already about the name of this attribute.
	+ RV: What should Roma’s default behavior be? Should \<schemaSpec\> always be set to current? Suggestion, if not consensus: eventually have users select from a drop\-down, semi\-open, enumerated list (“4\.0\.0”, “current”, “3\.9\.0”, “2\.6\.0”, whatever).
	+ TCW22, *Building a TEI Release* should be revised to urge Council members to report major changes (such as things that would break ODDs) to Council when we go to refrigeration. **Action on EB and JL** to mention this in TCW22 **by** 2020\-04\-14\.
* Finalize content model of \<annotation\> — discuss at the next F2F
* uniHan — discuss at the next F2F.


Stylesheets training session
----------------------------


* will be Tue 31 Mar unless major objection: **Action on SB** to announce by **2020\-03\-12\.**


Policy for inactive members?
----------------------------


* to accompany change to 3\-year terms.
* **Action on EB, SB, JL** to have a proposal by F2F.


Stand\-off, annotations, and the Web Annotation Model
-----------------------------------------------------


* What should content model of \<listAnnotation\> be?
	+ see [**below**](#listAnnotation) for some food for thought on this.
* What should content model of \<annotation\> be?
* Note: processing of @minOccurs and @maxOccurs may need to be fixed before this can be implemented.
* Council is favoring maximum flexibility among SBs options below. SB will check in with Laurent Romary about this. MS: Document this in an issue to help us with the release notes later! SB: \<extraTextual\> is going to involve lots of discussion, probably optimistic to think it’ll be ready for the next release, but we should have \<listAnnotation\> and probably \<annotation\>.


Tickets
-------


* Documentation
	+ <https://github.com/TEIC/TEI/issues/1978>
	+ Council wonders how to begin cleaning up the mess.
	+ **Action on HC**: enumerate questions that need to be considered (on the ticket) by **2020\-03\-18**:
		- do we want to continue to author in TEI?
		- where do we want to keep stuff?
		- etc.
	+ MB suggests a dedicated section for new Council members.


 
Suggestions on content model for listAnnotation by SB
-----------------------------------------------------


### very easy, very loose, but requires that nested lists follow other stuff



```
model.annotationLike = ( note | annotation | annotationBlock )
listAnnotation = model.headLike*, model.labelLike*, model.annotationLike*, listAnnotation*
```

### easy, very loose



```
model.annotationLike = ( note | annotation | annotationBlock )
listAnnotation = model.headLike*, model.labelLike*, ( model.annotationLike | listAnnotation )+
```

\- OR \-

```
model.annotationLike = ( note | annotation | annotationBlock | listAnnotation )
listAnnotation = model.headLike*, model.labelLike*, model.annotationLike*
```

### require grouping in particular order



```
listAnnotation =
   model.headLike*,
   model.labelLike*,
   annotation*,
   annotationBlock*,
   note*,
   listAnnotation*
```

### require grouping in any order



```
listAnnotation = model.headLike*,
model.labelLike*,
(
( note+, ( ( annotation*, annotationBlock* ) | ( annotationBlock*, annotation* ) ) )
|
( annotation+, ( ( note*, annotationBlock* ) | ( annotationBlock*, note* ) ) )
|
( annotationBlock+, ( ( annotation*, note* ) | ( note*, annotation* ) ) )
),
listAnnotation*
```

(Note that ‘\&’ does not work here both because we cannot translate it to DTD or XSD, and
because it allows mixing the elements.)


### require separate \<listAnnotation\> for each kind



```
listAnnotation = model.headLike*,
model.labelLike*,
( listAnnotation+ | note+ | annotation+ | annotationBlock+ )
```

(Note that we could have model.annotationLike\_alternationRepeatable instead, but we don't.)