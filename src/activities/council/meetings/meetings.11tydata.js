module.exports = function() {
  return { 
    "layout": "meeting.njk",
    "tags": "council_meetings",
    "eleventyComputed": {
      "eleventyNavigation": {
        "parent": "Council",
        "key": data => data.title,
      }
    }
  }
}
