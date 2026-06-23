
export default function() {
  return { 
    "layout": "documentation.njk",
    "tags": ["Working Papers", "documentation"],
    "eleventyComputed": {
      "permalink": data => {
        console.log(`path: ${data.page.filePathStem}`); // For debugging
        const permalink = data.page.filePathStem.replace("Documentation/TCW", "");
        return `${permalink}/index.html`
      },
    }
  }
}