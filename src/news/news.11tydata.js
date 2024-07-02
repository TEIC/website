module.exports = function() {
  return {
    permalink: function(data) {
      return `/news/${this.isoDateToPath(data.date)}/${this.slugify(data.title)}/index.html`;
    },
  }
}