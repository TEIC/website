const collections = require('./config/collections.js');
const sass = require("sass");
const path = require('node:path');
const { JSDOM } = require("jsdom");
const fs = require('fs');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// CommonJS can't require ESM modules, so we have to use an import() hack instead
let CETEI;
import("CETEIcean").then((ceteicean) => {
  CETEI = ceteicean.default;
})

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets/favicon.ico": "favicon.ico"});
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/css/*.css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "img" });
  eleventyConfig.addPassthroughCopy("src/**/*.var");
  eleventyConfig.addPassthroughCopy({ "src/_data/*.json": "data" });
  eleventyConfig.addPassthroughCopy({ "node_modules/bootstrap-icons/font/fonts/*.*": "fonts" });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addTemplateFormats("xml");

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addFilter("isoDateToPath", 
    function(date) {
      if (date instanceof Date) {
        date = date.toISOString().replace(/:.*$/, "").replace(/T.*$/, "");
      }
      return date.replace(/-/g, "/");
    }
  );

  eleventyConfig.addFilter("getYears",
    function(pages) {
      return Array.from(new Set(pages.map(item => {
        let date = item.data.date;
        if (date instanceof Date) {
          date = date.toISOString().replace(/:.*$/, "").replace(/T.*$/, "");
        }
        return date.replace(/-.*$/, "");
      })));
    }
  );

  eleventyConfig.addFilter("newsByYear",
    function(pages, year) {
      return pages.filter(item => {
        let date = item.data.date;
        if (date instanceof Date) {
          date = date.toISOString().replace(/:.*$/, "").replace(/T.*$/, "");
        }
        return date.startsWith(year);
      });
    }
  );

  eleventyConfig.addExtension("scss", {

    compileOptions: {
      permalink: function(contents, inputPath) {
        return (data) => {
          return inputPath.replace("src/assets", "").replace(".scss", ".css");
        }
      }
    },

    compile: async function(inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      let result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || ".",
          this.config.dir.includes
        ]
      });

      return async (data) => {
        return result.css;
      };
    }
  });

  eleventyConfig.addExtension("xml", {

    getData: async function(inputPath) {
      const file = fs.readFileSync(inputPath, 'utf8');
      const jdom = new JSDOM(file, { contentType: "text/xml" });
      if (!jdom.window.document.querySelector("TEI")) {
        return;
      }
      return {
        "title": jdom.window.document.querySelector("titleStmt > title").textContent,
        "navkey": inputPath.replace(".*/", "").replace(".xml", ""),
        "eleventyNavigation": {
          key: inputPath.replace(".*/", "").replace(".xml", ""),
          parent: "Council",
          title: jdom.window.document.querySelector("titleStmt > title").textContent
        }
      }
    },

    compile: async function(contents, inputPath) {
      const jdom = new JSDOM(contents, { contentType: "text/xml" });
      if (!jdom.window.document.querySelector("TEI")) {
        return;
      }
      let cetei = new CETEI({ documentObject: jdom.window.document });
      let doc = await cetei.domToHTML5(jdom.window.document);
      return async (data) => {
        return cetei.utilities.serializeHTML(doc, true);
      };
    }
  });

  Object.keys(collections).forEach(collectionName => {
    eleventyConfig.addCollection(collectionName, collections[collectionName]);
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts'
    }
  }
}