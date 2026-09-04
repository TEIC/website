---
title: "Major upgrade of Dictionary of Digital Buddhism and CJKV-English Dictionary"
date: "2010-11-05"
author: "theteiadmin"
permalink: "/news/2010/11/05/major-upgrade-of-dictionary-of-digital-buddhism-and-cjkv-english-dictionary/"
tags: ["Other"]
---



Dear TEI-ers:


I am forwarding the below message here that I have posted to a couple of major Asian Studies listservs. I wanted to post it here because the structure of the resource described below is XML that is based on TEI at the level of sense field and below, and which is delivered primarily through XSL. It is an example of a collaborative reference work that has become one of the standard online reference works for the fields of Buddhist and East Asian Studies. Much of my own development of this resource has been aided by advice from such TEI stalwarts as Christian Wittern, Lou Burnard, Wendell Piez, and Sebastian Rahtz.


Chuck


—————————


Subject: “CJKV-E/DDB 2.0”<br/>
From: Charles Muller


Dear Colleagues,


After almost ten years of operation since Michael Beddow’s initial creation of the programming structure for the online CJKV-E/DDB dictionaries, we are delighted to announce a major upgrade of these web services.


The most basic components of this upgrade are (1) a move to a dedicated server which will be able to deliver more power to search functions and greater stability to Unicode-related programming, and (2) an entire rewriting of the underlying search and indexing routines, resulting in a noticeable increase in speed and variety of search results, and links to both internal and external resources. Some major specific additions and enhancements include:


A. Basic Search


(1) A middle-level of search results, showing a list of head words that contain the search term. Previously, searches for a term would produce only the headword itself (when it existed), along with a long, scattered list of entry body matches.


(2) The list of body entry matches, which was previously delivered without any particular ordering, is now sorted according to traditional ascending radical + stroke count (basically equivalent to Unicode hex number).


(3) The list of matched body entries now includes a snippet of context, to give the user some hint of the usefulness of each listed match.


(4) Head word searches via Pinyin, Hangeul, Korean romanization, Katakana, and Japanese romanization. Previously, searches for headwords via their various renderings in East Asian and romanized syllabaries would only yield matches as body entries. Now, dedicated search indexes for Pinyin, etc. will yield head word matches in a very fast search.


(5) Searches with or without diacritics are equally and transparently supported. Searches employing those romanization systems that use diacritics may also be made with or without diacritical marks (though in the nature of things the latter may produce some false positives). This also applies to searches for Sanskrit and Pāli terms in entry bodies.


B. Entry results


(1) Previously, hyperlinks to terms within displayed entries sometimes lacked actual targets, or led to the comprehensive external index in a roundabout manner. Now, if a term currently has no target in the dictionary concerned or (in the case of the DDB)<br/>
in the external index, it will be shown without a hyperlink.


(2) If the link goes to the comprehensive external index rather than the DDB itself, the user will be taken directly to that information, with no other message or page in between.


(3) If the headword of a DDB entry is also present in the CJKV-E, a hyperlink to that entry will automatically be added to the DDB entry when it is displayed. The converse applies to CJKV-E entries: if the DDB has an entry for the same headword, a link to it will be added to the CJKV-E entry on the display.


(4) A link for a direct search to the SAT Taishō Database will automatically be generated for DDB entries (we are also able and willing to generate links directly into other web-based canonical collections if the administrators of those collections are willing to provide us with the requisite code for such links).


C. Behind-the-scenes. There are other enhancements which, while not visible to users, will greatly improve the function of both dictionaries. Most importantly:


(1) The two main indexes (on headwords and fulltext) previously used have been completely re-implemented to give faster and more flexible matching. In addition, a number of specialized supplementary indexes have been added which are automatically invoked alongside or instead of the main indexes as and when appropriate.


(2) Index updating has been made significantly faster and extensively automated. This means that all the indexes can be regenerated as frequently as desired. So from now on, corrections to existing entries, as well as newly-contributed entries, will be<br/>
browsable and searchable in their entirety very shortly after editorial acceptance (assuming of course, that the Human in-charge is not indisposed for some reason or other!).


(3) Great care has been taken to ensure that hyperlinks on external sites to DDB and CJKV-E entries which employ the syntax of the previous implementation of the Dictionaries continue to function exactly as before. No existing external links made in accordance with the methods previously specified for creating such links will<br/>
be broken as a result of the new infrastructure.


D. CJKV-E


(1) In the process of preparing this upgrade, a great amount of work has been put into improving the structure and content of the CJKV-E dictionary, which has stayed pretty much on the back burner for the past decade or so. Greater attention will henceforth be given to the development of this resource.


(2) In fact, I am presently working with a small grant that will have the effect of drastically increasing the coverage of the CJKV-E over the next few years.


I would like to take this opportunity to offer my deepest thanks to those scholars who have provided staunch and enduring support for the DDB over the past decade. Most importantly to Michael, who has, without any monetary remuneration whatsoever, provided state-of-the art programming of these dictionaries (along with web security and all other related functions), buttressed by a matched level of understanding of lexicographical and linguistic principles that has provided us with so much of the structure and precision that these online references currently exhibit. Many of the technical enhancements are based on Michael’s work on the Anglo-Norman Dictionary (<http://www.anglo-norman.net/>), funded by the Arts and Humanities Research Council of the United Kingdom, whose indirect but significant support is gratefully acknowledged.


There is also a core group of approximately 25 scholars, many of them recognized as leading figures in their own areas of expertise, who have continued to generously contribute large amounts of material from their own research notes and glossaries. They have also spent much time in scouring previously-existent entries, amending, appending, and entirely rewriting, such that the DDB and CJKV-E are in a steady state of growth in size and accuracy (the names of these scholars can be browsed at ). I would also like to thank those scholars who have convinced their libraries of the value of an institutional subscription. The resulting funds, albeit modest, have been invaluable to help pay for infrastructure, web hosting, and the employment of part-time assistants to do input and editing.


I believe we can say that there are few, if any, other examples in the academic humanities field where a body of scholars, bonded by overlapping interests but spread across the globe, have contributed to a central resource on a such a scale, upholding rigorous standards of composition, accreditation, and citation, and providing an eminently practical and useful example of how we can collaborate to build resources that are far more substantial than mere anonymous aggregations.


Digital Dictionary of Buddhism: <http://buddhism-dict.net/ddb>CJKV-E Dictionary: <http://buddhism-dict.net/dealt>


Chuck


———————-<br/>
A. Charles Muller<br/>
Center for Evolving Humanities<br/>
University of Tokyo<br/>
www.acmuller.net<br/>
———————-



