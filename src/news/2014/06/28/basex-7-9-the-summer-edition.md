---
title: "BaseX 7.9: The Summer Edition"
date: "2014-06-28"
author: "theteiadmin"
permalink: "/news/2014/06/28/basex-7-9-the-summer-edition/"
tags: ["Other", "BaseX 7.9", "xml"]
---



Dear XML aficionados,


in the midst of summertime, we provide you with a new version of BaseX,<br/>
our XML database system and XQuery 3.0 processor. This is what you get:


<br/>
XQUNIT<br/>
– Unit testing has been improved a lot. All test functions will now be<br/>
evaluated separately; this way, updates can be performed within<br/>
test.<br/>
– with the new TEST command, all test modules in a specified directory<br/>
can be evaluated.<br/>
– tests can be invoked from within the GUI editor and project view.<br/>
– on command-line, the -t flag can be used for the same purpose.


RESTXQ<br/>
– Custom HTTP methods can be defined via %rest:method<br/>
– Error handling has been improved and aligned with try/catch


REST<br/>
– The “run” operation allows execution of server-side command scripts


DATABASE MODULE<br/>
– parsing options added to db:create, db:add and db:replace


As usual, various minor bugs and inconsistencies have been fixed in<br/>
the latest version; check out our documentation and the GitHub<br/>
history for more details.


The latest version is available at [http://basex.org](http://basex.org/).<br/>
We are looking forward to your feedback,


Christian Grün<br/>
BaseX Team<br/>
Email: christian.gruen@uni-konstanz.de



