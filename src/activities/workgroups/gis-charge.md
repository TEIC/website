---
layout: page.njk
title: "GIS Working Group"
tags: page
---

# GIS Working Group

## Rationale

As outlined in issue [\#1474](https://github.com/TEIC/TEI/issues/1474) and discussed in Paderborn (2023), there is an increasing need for TEI files to incorporate geographic information within individual projects in ways that allow for interchange with other geographic encoding systems and standards (e.g. GeoJSON, GML, KML). However, support for encoding geographic information (GIS) in TEI is rudimentary at best. At present, the Guidelines provide only passing mention of other (arguably outdated) geographic standards and the existing complement of elements for encoding geographic information only allow for the most basic data and documentation.

The overall objective of the GIS Working Group is to provide standards-informed mechanisms that are at least interchangeable, if not interoperable, for encoding geographic information in TEI that are capable of unambiguous interpretation and transformation to and from standard GIS file formats. 

## Objectives

* Modify the TEI schema (through modifications of existing elements and attribute classes or through the creation of new elements and attributes, as the Workgroup sees fits) to allow for:  
  * encoding various feature geometries in TEI (e.g. Point, LineString, Polygon, MultiGeometry, Bounding Boxes/Envelopes)  
  * specifying coordinate reference systems   
* Expand the “13.3.4.1 Varieties of Location” to include:  
  * a discussion of GIS-related terminology (e.g. “Coordinate Reference System”, “projection”, “International Dateline”)  
  * a clear description of what kinds of geographical information can be accommodate by the TEI and what kinds fall outside the TEI’s purview  
  * a discussion of supporting interchange or interoperability with various mechanisms of encoding geographical information in existing standards (GeoJSON, WKT, GML, KML, etc.)  
* Determine feasibility of creating two-way transformations between TEI-encoded geographical information and existing GIS standards

## Schedule

* **November 2024:** Create the task force and invite members  
* **December 2024:** Create repository for Workgroup and first meeting of the TEI WG  
* **January – September 2025:** Monthly meeting of the TEI GIS WG to develop proposals for new mechanisms and revisions  
* **Fall 2025 (TEI Conference):** Outline of proposed changes to be delivered at next TEI Conference  
* **December 2025:** Final proposal submitted to TEI Council

## Administration and Terms of Reference

The GIS Working Group is chaired by Joey Takeda. Proposed membership will consist of 3-5 members; WG members should be available to commit up to approximately 3 hours per month from January 2025 to September 2025 (1 one-hour meeting per month with up to 2 hours of additional work reviewing and developing the new GIS specification)

Calendar and activities will be adjusted as needed. 

## Appendix

### TEI-C

“2.3.8 The Geographic Coordinates Declaration.” TEI P5: Guidelines for Electronic Text Encoding and Interchange. 4.7.0. TEI Consortium. [https://tei-c.org/Vault/P5/4.7.0/doc/tei-p5-doc/en/html/HD.html\#HDGDECL](https://tei-c.org/Vault/P5/4.7.0/doc/tei-p5-doc/en/html/HD.html#HDGDECL)

“13.3.4.1 Varieties of Location.” TEI P5: Guidelines for Electronic Text Encoding and Interchange. 4.7.0. TEI Consortium. [https://tei-c.org/Vault/P5/4.7.0/doc/tei-p5-doc/en/html/ND.html\#NDGEOGva](https://tei-c.org/Vault/P5/4.7.0/doc/tei-p5-doc/en/html/ND.html#NDGEOGva)

“geo (geographical coordinates).” TEI P5: Guidelines for Electronic Text Encoding and Interchange. 4.7.0. TEI Consortium. [https://tei-c.org/Vault/P5/4.7.0/doc/tei-p5-doc/en/html/ref-geo.html](https://tei-c.org/Vault/P5/4.7.0/doc/tei-p5-doc/en/html/ref-geo.html)

“geoDecl (geographical coordinates declaration).” TEI P5: Guidelines for Electronic Text Encoding and Interchange. 4.7.0. TEI Consortium. [https://tei-c.org/Vault/P5/4.7.0/doc/tei-p5-doc/en/html/ref-geoDecl.html](https://tei-c.org/Vault/P5/4.7.0/doc/tei-p5-doc/en/html/ref-geoDecl.html)

Holmes, Martin. “Need to improve GIS/gazetteer encoding support in TEI.” Issue \#1474, TEI-C/TEI GitHub Repository, June 18, 2016\. https://github.com/TEIC/TEI/issues/1474

### Related Standards

Butler, H., M. Daly, A. Doyle, Sean Gillies, T. Schaub, and Stefan Hagen. *The GeoJSON Format*, RFC 7946, Internet Engineering Task Force, 2016\. [https://datatracker.ietf.org/doc/rfc7946/](https://datatracker.ietf.org/doc/rfc7946/). 

Open Geospatial Consortium. *OGC Keyhole Markup Language (KML) 2.3*, 2015\. [https://docs.ogc.org/is/12-007r2/12-007r2.html](https://docs.ogc.org/is/12-007r2/12-007r2.html)

Open Geospatial Consortium. *OGC GeoRSS Encoding Standard*, 2017\. [http://www.opengis.net/doc/CS/georss/1.0](http://www.opengis.net/doc/CS/georss/1.0)

Maps for HTML Community Group. *Map Markup Language — Draft Community Group Report*, 07 November 2023\. [https://maps4html.org/MapML/spec/](https://maps4html.org/MapML/spec/)

International Organization for Standardization. *ISO 19111:2019 Geographic information — Referencing by coordinates*, 2019\. [https://www.iso.org/standard/74039.html](https://www.iso.org/standard/74039.html)

International Organization for Standardization. *ISO 19125-1:2004. Geographic information — Simple feature access — Part 1: Common architecture*, 2004\. [https://www.iso.org/standard/40114.html](https://www.iso.org/standard/40114.html) \[See also: [https://www.ogc.org/standard/sfa/](https://www.ogc.org/standard/sfa/)\]

International Organization for Standardization. *ISO 19136-1:2020: Geographic information — Geography Markup Language (GML) — Part 1: Fundamentals*, 2020\. [https://www.iso.org/standard/75676.html](https://www.iso.org/standard/75676.html) \[See also: [https://www.ogc.org/standard/gml/](https://www.ogc.org/standard/gml/)\]

International Organization for Standardization. *ISO/TS 19139-1:2019: Geographic information — XML schema implementation*, 2019\. [https://www.iso.org/standard/67253.html](https://www.iso.org/standard/67253.html)

International Organization for Standardization. *ISO 19162:2019. Geographic information—Well-known text representation of coordinate reference systems*, 2019\. [https://www.iso.org/standard/76496.html](https://www.iso.org/standard/76496.html) \[See also: [https://www.ogc.org/standard/wkt-crs/](https://www.ogc.org/standard/wkt-crs/)\]

### Other Resources

*EPSG Geodetic Parameter Dataset*. International Association of Oil and Gas Producers (IOGP). [https://epsg.org/home.html](https://epsg.org/home.html). \[See also the Guidance Note, esp. 7-1 for a useful glossary of terms: [https://epsg.org/guidance-notes.html](https://epsg.org/guidance-notes.html)\] 

*epsg.io: Coordinate Systems Worldwide*. [https://epsg.io/](https://epsg.io/).

*PROJ coordinate transformation software library*. Open Source Geospatial Foundation. https://proj.org/. DOI: 10.5281/zenodo.5884394

*GDAL*. Open Source Geospatial Foundation. [https://gdal.org/index.html](https://gdal.org/index.html). DOI 10.5281/zenodo.5884351. 

*Spatial Reference*. Open Source Geospatial Foundation. [https://spatialreference.org/about/](https://spatialreference.org/about/)

Portele, Clemens. “Encoding of Geographic Information.” In *Springer Handbook of Geographic Information*, 2nd edition, edited by Wolfgang Kresse and David Danko, 95–106. Springer International Publishing, 2022\. https://doi.org/10.1007/978-3-030-53125-6\_4.

Kresse, Wolfgang, David Danko, and Kian Fadaie. “Standardization.” In *Springer Handbook of Geographic Information*, 2nd edition, edited by Wolfgang Kresse and David Danko, 383–492. Springer International Publishing, 2022\. https://doi.org/10.1007/978-3-030-53125-6\_15.