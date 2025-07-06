export default function() {
  return {
    layout: "news_page.njk",
    permalink: function(data) {
      return `/news/${this.isoDateToPath(data.date)}/${this.slugify(data.title)}/index.html`;
    },
    tags: "news",
  };
}