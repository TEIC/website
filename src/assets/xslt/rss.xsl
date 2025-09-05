<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  exclude-result-prefixes="xs dc"
  version="1.0">
  
  <xsl:output method="html"/>
  
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/teic.css" />
        <title>TEI RSS Newsfeed</title>
      </head>
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #0059A8;">
          <div class="container-fluid">
            <a class="navbar-brand p-0 m-0" href="/">
              <img src="/img/emblem_color_dark.png" alt="TEI Emblem" width="40"/>
            </a>
          </div>
        </nav>
        <main>
          <div class="container mt-4">
            <div class="row">
              <div class="col col-md-12">
                <h1><xsl:value-of select="/rss/channel/title"/></h1>
                <p>
                  <strong>This is a web feed,</strong> also known as an RSS feed. <strong>Subscribe</strong> by copying the URL from the address bar into your newsreader.
                </p>
                <p>
                  Visit <a href="https://aboutfeeds.com">About Feeds</a> to get started with newsreaders and subscribing. It’s free.
                </p>
                <xsl:apply-templates select="/rss/channel/item"/>
              </div>
            </div>
          </div>
          <div class="container">
            <footer class="py-3 my-4">
              <ul class="nav justify-content-center border-top pb-3 mb-3">
                <li class="nav-item"><a href="/" class="nav-link px-2 text-body">Home</a></li>
                <li class="nav-item"><a href="/about/code-of-conduct/" class="nav-link px-2 text-body">Code of Conduct</a></li>
                <li class="nav-item"><a href="/about/contact/" class="nav-link px-2 text-body">Contact Us</a></li>
              </ul>
              <p class="text-center text-body">
                <img src="/img/emblem_color_dark.png" alt="TEI Emblem" width="40"/> © 2025 TEI Consortium — Hosted by <a href="https://www.huma-num.fr/" class="text-body">
                  <img src="/img/logo-petit-hn-rvb-1.png" alt="Hosted by Huma-Num" width="50"/>
                </a>
              </p>
            </footer>
          </div>
        </main>
        <script>
          const outputEscaped = document.querySelector(".article h1");
          if (!outputEscaped) {
            document.querySelectorAll(".article").forEach( article => {
              article.innerHTML = article.innerText;
            });
          }
        </script>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="item">
    <div class="card mt-4" style="cursor: pointer;" tabindex="0" role="link">
      <xsl:attribute name="onclick">location.href='<xsl:value-of select="link"/>';</xsl:attribute>
      <xsl:attribute name="onkeydown">if (event.key === 'Enter') { location.href='<xsl:value-of select="link"/>'; }</xsl:attribute>
      <div class="card-header">
        <a><xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute><xsl:value-of select="title"/></a>
        <em style="float:right;"><xsl:value-of select="dc:date"/></em>
      </div>
      <div class="card-body article">
        <xsl:value-of select="description" disable-output-escaping="yes"/>
      </div>
    </div>
  </xsl:template>
  
</xsl:stylesheet>