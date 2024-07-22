---
layout: page.njk
title: "TEI Board Meeting 31 2008: Board Meeting Addendum: Credit Card                 Proposal"
---
# TEI Board Meeting 31 2008: Board Meeting Addendum: Credit Card                 Proposal





 Proposal: Member/Subscriber Management and Payment System
 
 
 I would like to propose that we adopt a new Member/Subscriber Management and
 Payment System.


This proposal stems from the research I was asked to do on accepting credit card
 payments at the TEI. In the course of this work, I discovered that current
 e\-commerce software offers real potential to automate and introduce other
 efficiencies into our interaction with members, subscriber, and indeed the
 larger community. Shopping cart software is specifically designed to keep
 up\-to\-date records that associate purchase records with user names and addresses
 (meaning that it automatically reconciles accounts receivable and membership
 rolls, makes it easy to produce a real\-time view of who is up\-to\-date and in
 arrears, simplifies communication with members, and can be adapted to send
 automatic invoices and reminders). Because members enter their own information,
 moreover, the system also reduces the amount of secretarial work required to
 eliminate inaccuracies in our lists. The specific system I am proposing is
 perfectly capable of supporting multiple administrators over the Internet; a
 specific vendor I will propose for credit card processing will provide a system
 that allows members to choose automatic recurring payments (i.e. authorise us to
 debit their credit card automatically each year) and give us a "Virtual
 Terminal"\-\-an interface that allows us to enter credit card and address
 information ourselves to accommodate people who do not wish to pay over the web,
 or to accept conference registration payments at the conference site.



 Background
 
 It took me some research before I understood how credit card acceptance
 works. On the assumption that this process is not known to everybody, here's
 some background.


 E\-commerce systems typically involve three main components: 


* A catalogue
* A credit card processing gateway
* Some system for encrypting and guaranteeing the privacy of
 communication between the vendor and client.


The catalogue can consist of nothing more than a set of hard links on a
 web\-page pointing at the credit card processing gateway. Most e\-commerce is
 done using a shopping cart system that collects more information about
 clients and provides more options for producing catalogues and presenting
 options or products to the user.


The credit card processing gateway is supplied by a vendor. There are two
 usual methods. Vendors like PayPal act much like a wire transfer service: an
 e\-store customer gets a price from the retailer, and then pays that amount
 to PayPal by signing into their site and using their software; if the client
 used a credit card, PayPal runs the credit card on their own behalf,
 collects the money from the credit card company, and then transfers the sum
 (minus a fee) to the retailer's account on the PayPal\-type system—banking
 this money then requires the retailer to withdraw the money its PayPal
 account and deposit it in its bank.


The other method is to hire a vendor who acts in essence as a broker between
 the retailer and the credit card companies. In this case the vendor arranges
 merchant accounts with the credit card companies for the retailer in the
 retailer's name. It also provides software that accesses the credit card
 companies' software for card processing. Typically in these cases, the
 gateway software is built into the retailer's site (though the specific
 processing takes place at the vendor or credit card company). Customers in
 this case choose and pay for their purchases at the retailer's site. Once a
 month or so (determined at the time of the contract), the gateway vendor
 deposits the payments from the Credit Card companies into the retailer's
 bank.


 Finally, because such systems deal with sensitive information, e\-commerce
 systems typically use encryption and authenticity certificates to reassure
 customers that their credit card numbers and other information is not being
 intercepted. While it is possible to self\-certify, most e\-commerce sites use
 registrars like VeriSign to certify their identity and security
 compliance.




 Recommendation
 
 In our particular case, I recommend the following: 


* Using zencart (<http://www.zencart.org/>) a popular and open source
 shopping cart system for our catalogue
* Contracting with OptimalPayments (<http://www.optimalpayments.com/>) for our credit card
 processing
* Contracting with DigitCert (<http://digitcert.com/>) for our certification
 services.



Zencart is a relatively easy to use and customise, PHP and
 MySQL\-based, shopping cart system. I tried out a possible customisation
 suitable to the TEI on my home server: [http://zencart2\.kakelbont.homelinux.net/](http://zencart2.kakelbont.homelinux.net/) (username:
 
 2expensive; password: 
 2implement). My initial
 work with the system suggests that we could use this to do much more than
 provide a credit card compatible catalogue: we can use it to collect and
 maintain our membership and subscriber rolls, register participants for our
 annual conference, link to other sites, such as the site where P5 is being
 sold, and perhaps even arrange the sale and shipping of the remainder of our
 P4 print run. As an OS product, Zencart is free. It also isn't too hard to
 set up (it took me about 8 hours and two tries to produce the draft site).



OptimalPayments is one of hundreds of potential credit card
 gateway providers. While there is not a huge variation in price or service
 among the various competitors, OptimalPayments offered a good combination of
 price and features; they also recognised and had special policies for
 non\-profits like ourselves and extremely helpful sales staff. Setting up an
 account with them will cost a one\-time fee of $100\. Beyond that we will be
 charged 2\.3% of each transaction and a per\-transaction fee of $0\.25\. They
 waive annual and monthly maintenance fees for non\-profits, and there is no
 required length of contract or termination fee. Most
 importantly, as part of this contract, OptimalPayments will provide us with
 a "Virtual Terminal" service (a system that allows us to submit charges for
 credit card information people have not entered on\-line) and provide users
 with the option of requesting recurring charges (i.e. that they be
 automatically billed each year until they explicitly cancel their membership
 or subscription). The Virtual Terminal capability in particular is very
 useful: it means we can use the system for on\-site registration at our
 annual conference and to recover accounts receivable (e.g. payment for the
 "extra" copies we allowed people to order with our initial bulk order of the
 P5 Guidelines). OptimalPayments are very familiar and compatible with
 zencart.



DigiCert is a competitor to VeriSign, the industry leader in
 certification services. DigiCert offers cheaper and more flexible plans for
 SSL and identity certification. The option I am recommending purchasing is
 their "SSL (Single Server) Plus" certificate: [http://www.digicert.com/welcome/product\-overview.htm\#sslplus](http://www.digicert.com/welcome/product-overview.htm#sslplus).
 This is used to certify domain names (including variations like tei\-c.org
 and www.tei\-c.org) served from a single server. It costs $144/year. Most
 other companies seem to charge separately for each "wildcard" alias (i.e. a
 separate fee for each variation on the domain name). There is a possibility
 that we will need to certify more than one server (I don't know if we need
 to certify the actual credit card gateway). If that is the case then we
 either buy two certifcates ($288\) or buy a licence for unlimited servers
 ($495\).


 Finally, there are two potential complications: 


* The first is that there is a possibility that we cannot serve our
 webstore from the U of Virginia servers, since the U of
 Virginia, like many Universities is a little nervous about e\-commerce
 sites in their domain. We need to check if the fact that we run our
 own domain on these servers changes anything. If it doesn't then we
 will need to hire commercial hosting for the webstore.
* The second is that the current system cannot transfer exactly 'as\-is' if we decide
 to take up Lethbridge on its offer to handle our
 accounts payable and general accounting. OptimumPayments cannot
 process charges intended for deposit in Canada, unless we are
 registered as a corporation there. I have spoken to the U of L about
 this, however, and they are willing eventually to let us use their
 credit card gateway (provided my Moneris) at cost as part of the
 in\-kind accounting contribution. Using this requires some work with
 their IT and financial office that prevents it from being an
 immediate option this year.




 Costs
 
 
 Best Case:
 
 * Zencart Shopping Cart System: $0
* OptimalPayments Gateway and vendor services setup: $100
* DigiCert Single Server SSL Certification: $144
* Estimated service charges $2855
 
Assuming one transaction per member and subscriber, these
 fees would cost something like $2760 (2\.3% of $120,000\) and
 $95 in transaction fees given our current revenue and
 subscriber and member base.
* Grand Total: $3099 ($2999 year 2\+)




 Worse Case:
 
 * Zencart Shopping Cart System: $0
* OptimalPayments Gateway and vendor services setup: $100
* DigiCert unlimited servers $394
* Estimated service charges $2855
* Commercial hosting for WebStore $1000?
* Grand Total $4353 ($4253 year 2\+)







