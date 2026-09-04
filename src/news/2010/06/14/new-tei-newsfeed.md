---
title: "New TEI Newsfeed"
date: "2010-06-14"
author: "theteiadmin"
permalink: "/news/2010/06/14/new-tei-newsfeed/"
tags: ["News"]
---



I’m pleased to announce that the TEI-C website now has a new Newsfeed system.  This should allow quicker and easier posting of news items to the TEI-C website sidebar and TEI News Page [1].  Although it appears entirely integral to the TEI-C website, it is in fact drawn from our Sourceforge project and based on a wordpress blog there to enable easier posting.  As the TEI Sourceforge admins can delegate posting to the newsfeed there, it means that more volunteers will eventually be able to post news without needing access to the CMS system that the TEI website uses.


You can subscribe to an atom [2]  or RSS [3] feed on the sourceforge site if you wish to consume TEI News directly.


For those interested in the technical details, what happens is that at a regular interval the Atom feed is grabbed from the Sourceforge site and then transformed (with XSLT) to some XHTML fragments of either a list of headlines or the News page content itself.  These are then dynamically included in the appropriate pages inside the OpenCMS system that the TEI-C website currently uses.


I’m sure a number of bugs will rear their heads as soon as this is announced, do feel free to report them on the TEI-L list, on Sourceforge or to me directly.  (Note: It is known that some of the dates are wrong on early posts, they were imported to wordpress without dates.)


Many thanks to David Sewell for his assistance with integrating this with OpenCMS.


-James Cummings


[1] [http://www.tei-c.org/News/](/news/)<br/>
[2] <https://sourceforge.net/apps/wordpress/tei/feed/atom/><br/>
[3] <https://sourceforge.net/apps/wordpress/tei/feed/>



