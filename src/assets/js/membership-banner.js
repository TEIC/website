(function () {
  var CONFIG_URL = "/data/membership-banner.json";
  var STYLES_URL = "/css/membership-banner.css";

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function language() {
    var docLang = (document.documentElement.getAttribute("lang") || "").toLowerCase().slice(0, 2);
    if (docLang === "en" || docLang === "es") {
      return docLang;
    }
    var match = window.location.pathname.match(/\/(en|es)(?:\/|$)/);
    return match ? match[1] : "en";
  }

  function localized(value, lang) {
    if (!value) {
      return "";
    }
    if (typeof value === "string") {
      return value;
    }
    return value[lang] || value.en || "";
  }

  function ensureStyles() {
    var existing = document.getElementById("tei-membership-banner-styles");
    if (existing) {
      return Promise.resolve();
    }
    return new Promise(function (resolve) {
      var link = document.createElement("link");
      link.id = "tei-membership-banner-styles";
      link.rel = "stylesheet";
      link.href = STYLES_URL;
      link.onload = function () { resolve(); };
      link.onerror = function () { resolve(); };
      document.head.appendChild(link);
    });
  }

  function mount(config) {
    if (document.querySelector(".tei-membership-banner")) {
      return;
    }
    var nav = document.querySelector("nav.navbar");
    if (!nav || !config) {
      return;
    }
    var lang = language();
    var slogans = config.slogans && (config.slogans[lang] || config.slogans.en);
    if (!slogans || !slogans.length) {
      return;
    }
    if (!config.href || !/^https?:\/\//.test(config.href)) {
      return;
    }

    var banner = document.createElement("div");
    banner.className = "tei-membership-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", localized(config.label, lang) || "Membership");

    var link = document.createElement("a");
    link.href = config.href;

    var labelText = localized(config.label, lang);
    if (labelText) {
      var label = document.createElement("span");
      label.className = "tei-membership-banner__label";
      label.textContent = labelText;
      link.appendChild(label);
    }

    var slogan = document.createElement("span");
    slogan.className = "tei-membership-banner__slogan";
    slogan.textContent = slogans[Math.floor(Math.random() * slogans.length)];
    link.appendChild(slogan);

    var popup = document.createElement("div");
    popup.className = "tei-membership-banner__popup";
    fetch("/img/ask-not-tei.svg")
      .then(function (response) {
        if (!response.ok) {
          throw new Error(String(response.status));
        }
        return response.text();
      })
      .then(function (markup) {
        popup.innerHTML = markup;
        var join = popup.querySelector("a");
        if (join) {
          join.setAttribute("href", config.href);
          join.setAttribute("xlink:href", config.href);
        }
      })
      .catch(function () {});

    banner.appendChild(link);
    banner.appendChild(popup);
    nav.insertAdjacentElement("afterend", banner);
  }

  onReady(function () {
    Promise.all([
      fetch(CONFIG_URL).then(function (response) {
        if (!response.ok) {
          throw new Error(String(response.status));
        }
        return response.json();
      }),
      ensureStyles()
    ]).then(function (results) {
      mount(results[0]);
    }).catch(function () {});
  });
})();
