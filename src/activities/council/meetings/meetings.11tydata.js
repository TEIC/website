module.exports = function() {
  return { 
    "layout": "page.njk",
    "tags": "council_meetings",
    "eleventyComputed": {
      "eleventyNavigation": {
        "parent": "Council",
        "key": data => data.title,
      }
    }
  }
}
