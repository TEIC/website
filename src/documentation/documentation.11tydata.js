module.exports = function() {
  return { 
    "layout": "documentation.njk",
    "tags": "Working Papers", 
    "permalink": data => `${data.page.filePathStem.replace("Documentation/TCW", "").replace(".xml", "/index.html")}`,
    "eleventyNavigation": {
      "parent": "Council"
    }
  }
}