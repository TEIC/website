module.exports = function() {
  return {
    layout: "page.njk",
    permalink: function(data) {
      return `/news/${this.isoDateToPath(data.date)}/${this.slugify(data.title)}/index.html`;
    },
    tags: "news",
  };
}