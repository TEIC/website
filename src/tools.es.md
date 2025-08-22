---
layout: page.njk
title: "Herramientas
tags: page
---
# Herramientas

Las herramientas para crear, editar, transformar y publicar documentos y esquemas son fundamentales para utilizar las Directrices de la TEI. Como estas reglas y recomendaciones están expresadas en XML, los usuarios pueden aprovechar la gran variedad de programas desarrollados para ese lenguaje, además de recurrir a recursos diseñados específicamente por la comunidad.

Algunas de estas utilidades son mantenidas y distribuidas directamente por la iniciativa: por ejemplo, la aplicación [Roma] para la personalización de esquemas constituye una parte esencial de la publicación de las Directrices, aunque también puede instalarse y usarse de forma independiente. De manera similar, las [hojas de estilo] empleadas para convertir documentos en diversos formatos se ponen a disposición pública para que otros las adapten a sus necesidades.

Las herramientas mantenidas oficialmente se describen más abajo con mayor detalle y son de código abierto, [made available under the terms and conditions of both Creative Commons Attribution-ShareAlike 3.0 Unported License and a BSD 2-Clause license].(../Guidelines/access.xml#licensing).
 
 Otras herramientas son aportadas por miembros de la comunidad de la TEI y no están mantenidas por la iniciativa. Estas pueden incluir utilidades para la redacción y edición, para la publicación en línea de colecciones de documentos, o para la generación de visualizaciones de estructuras métricas. Se alienta especialmente a la comunidad a contribuir con programas que puedan resultar de uso general, a
 [registrarlos en el wiki de la TEI](https://wiki.tei-c.org/index.php/Category:Tools), y a adaptar o mejorar los ya existentes cuando la licencia de código abierto lo permita.
  Cabe señalar que la iniciativa no avala ninguna herramienta que no mantenga ni distribuya directamente.
 
 
 También existe un  [Grupo de Interés Especial sobre Herramientas](/activities/SIG/Tools/)
 
 
 
 ## Generación de esquemas y docuementación: Roma
 
 [Roma](https://roma.tei-c.org/) es una aplicación basada en la web que permite a los usuarios TEI 
 generar sus propios esquemas y documentación personalizados compatibles con P5. Roma resulta útil para todo desarrollo 
 de de personalización, ya sea que quieras crear un esquema sencillo seleccionando algunos 
 de los módulos más relevantes para ttu proyecto, o que busques una personalización mas compleja 
 que incluya modificaciones a elementos específicos. También puede ayudar a generar documentación en otros idiomas además del inglés
 (para más detalles, véase la [sección sobre internacionalización debajo](#I18N)). Para obtener instrucciones
 detalladas sobre el uso de Roma, consulta [ Personalizando la TEI con Roma](../Guidelines/Customization/use_roma.xml). 
 Una versión en línea de comandos de Roma (llamada Roma) también está disponible y puede instalarse y ejecutarse localmente; 
 una descripción e instrucciones de uso se encuentran [aquí](../Guidelines/Customization/odds.xml#romacommandline). El código fuente 
 de Roma está disponible en el [sitio de TEI en  Sourceforge](https://sourceforge.net/project/showfiles.php?group_id=106328&package_id=141128). Roma es la equivalente en P5 de la antigua[TEI Pizza Chef](/Vault/P4/pizza.html) , una herramienta web que construía DTDs personalizados de TEI compatibles con P4 y versiones anteriores de las directrices.
 
 

 
 ## Hojas de estilo para convertir documentos TEI a distintos formatos
 
 La TEI mantiene una biblioteca de [hojas de estilo XSL](https://github.com/TEIC/Stylesheets), 
 desarrolladas originalmente por Sebastian Rahtz, que pueden convertir archivos TEI XML a documentos HTML, LaTeX o XSL:FO. Estas hojas de estilo están diseñadas para proppósitos específicos y no se consideran herramientas de conversión de uso general. Otras XSL y CSS se listan en la sección de hojas de estilo del [wiki TEI](https://wiki.tei-c.org/index.php/Stylesheets), y se alienta a todos los usuarios a contribuir con sus propias hojas a esta colección.
 
 

 
 ## Conversión hacia y desde TEI:
 
 [TEIGarage](https://teigarage.tei-c.org/) 
 es un servicio web y RESTful para gestionar la transfomración de documentos entre una variedad de formatos. La mayoría de las transformaciones utilizan el formato de la Text Encoding Initiative como formato intermedio. Es una buena herramienta para la conversión de TEI a Word .(docx) a TEI, pero también soporta muchos otros formatos.
 
 

 
 <h2 id="I18N">Internacionalización de la TEI</h2>
 
 Una herramienta importante desarrollada por la TEI es el sistema para generar versiones de las Directrices en idiomas distintos al inglés. Esta iniciativa, financiada en parte por la  [ALLC](http://www.allc.org/), 
 proporciona un marco para gestionar las traducciones de la documentación de referencia,
 los nombres y valores de atributos, y potencialmente el texto en prosa de las propias
 Directrices. Actualmente se está trabajando en la traducción de la documentación de referencia
 y de los nombres de elementos y atributos a cinco idiomas: francés, español, alemán, chino y
 japonés. Otros idiomas que podrían incluirse en el futuro, si los recursos y el esfuerzo lo permiten, son 
 hindi, italiano, polaco, rumano, eslovenoy tibetano. Con este marco en funcionamiento, 
 los usuarios podrán generar versiones internacionalizadas de la TEI utilizando la interfaz de Roma descrita anteriormente. Haz click [aquí](I18N/) para obtener más información. 
 
 
  
