export default function() {
  return {
    layout: "news_page.njk",
    permalink: function(data) {
      const pattern = /\/news\/\d{4}\/\d{2}\/\d{2}\//;
      if (pattern.test(data.permalink)) {
        return data.permalink;
      }
      else {
        return `/news/${this.isoDateToPath(data.date)}/${this.slugify(data.title)}/index.html`;
      }
    },
    tags: "news",
  };
}
