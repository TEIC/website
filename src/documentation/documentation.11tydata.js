module.exports = function() {
  return { 
    "layout": "documentation.njk",
    "tags": ["Working Papers", "documentation"],
    "permalink": data => {
      const permalink = data.page.filePathStem.includes("TCW") ? data.page.filePathStem.replace("Documentation/TCW", "") : "/about/bylaws";
      return `${permalink}/index.html`
    },
    "eleventyNavigation": {
      "parent": "Council"
    }
  }
}