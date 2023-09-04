<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:eg="http://www.tei-c.org/ns/Examples"
  exclude-result-prefixes="eg xs"
  expand-text="yes"
  version="3.0"
  xpath-default-namespace="http://www.tei-c.org/ns/1.0">
  
  <xsl:output method="html" omit-xml-declaration="yes" indent="no"/>
  <xsl:param name="layout"/>
  
  <xsl:template match="/">---
layout: {$layout}.njk
title: "{/TEI/teiHeader[1]/fileDesc[1]/titleStmt[1]/title[1]}"
---
<div id="tei">
  <h1>{/TEI/teiHeader[1]/fileDesc[1]/titleStmt[1]/title[1]}</h1>
  <xsl:apply-templates/>
</div>
  </xsl:template>
  
  <xsl:template match="@*|comment()">
    <xsl:copy><xsl:apply-templates select="node()|@*|comment()"/></xsl:copy>
  </xsl:template>
  
  <xsl:template match="*[namespace-uri(.) = 'http://www.tei-c.org/ns/1.0']">
    <xsl:element name="tei-{lower-case(local-name(.))}" >
      <xsl:if test="namespace-uri(parent::*) != namespace-uri(.)"><xsl:attribute name="data-xmlns"><xsl:value-of select="namespace-uri(.)"/></xsl:attribute></xsl:if>
      <xsl:if test="@xml:id">
        <xsl:attribute name="id"><xsl:value-of select="@xml:id"/></xsl:attribute>
      </xsl:if>
      <xsl:if test="@xml:lang">
        <xsl:attribute name="lang"><xsl:value-of select="@xml:lang"/></xsl:attribute>
      </xsl:if>
      <xsl:attribute name="data-origname"><xsl:value-of select="local-name(.)"/></xsl:attribute>
      <xsl:if test="not(* or text())">
        <xsl:attribute name="data-empty"></xsl:attribute>
      </xsl:if>
      <xsl:if test="@*">
        <xsl:attribute name="data-origatts">
          <xsl:for-each select="@*">
            <xsl:value-of select="name(.)"/>
            <xsl:if test="not(position() = last())"><xsl:text> </xsl:text></xsl:if>
          </xsl:for-each>
        </xsl:attribute>
      </xsl:if>
      <xsl:for-each select="@*[namespace-uri() = '']">
        <xsl:copy-of select="."/>
      </xsl:for-each>
      <xsl:apply-templates select="node()|comment()|processing-instruction()"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="text()[not(ancestor::eg:egXML)]">{replace(.,'\s+',' ')}</xsl:template>
  
</xsl:stylesheet>