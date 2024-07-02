# The TEI-C website source

This repository contains the sources for the TEI website and the configuration to run it locally if you need to. If you are editing the website's content, you will only need to be focused on the contents of the `src/` directory, which is laid out like this:

```txt
src
├── _data
├── _includes
├── _layouts
├── about
│   └── logos
│       └── potential-new-logos
├── activities
│   └── projects
├── assets
│   ├── css
│   ├── img
│   └── js
├── documentation
│   └── Documentation
│       ├── Bylaws
│       ├── TCW
│       └── bin
├── guidelines
├── news
│   ├── 2023
│   │   ├── 01
│   │   │   ├── 09
│   │   │   └── 28
│   │   ├── 02
│   │   │   └── 27
│   │   ├── 08
│   │   │   ├── 02
│   │   │   └── 06
│   │   └── 09
│   │       └── 24
│   └── 2024
├── posts
└── support
    └── learn
```

Unless you need to change the look and feel of the site, you can ignore any directory prefixed with a `_`. The `assets/` directory contains CSS, JavaScript, and images.

Content files are mostly written in Markdown. You will notice that each one has a header like

```txt
---
layout: page.njk
title: "Customization"
tags: page
---
```

Most markdown files will use the `page.njk` layout. The title will end up being the header title of the HTML page. In a few cases, as in news posts, you will need to supply a `date` in ISO (year-2-digit month-2-digit day) format. For news posts, the date and title will determine the final URL rather than the folder organization. Older posts may be organized into year, month, and day folders, but that is only because of how they were migrated from the old website. It may be convenient to organize them into folders, but it isn't required.

By default, a file like `src/support.md` will end up being served at a URL like `https://tei-c.org/support`. If you need to change this behavior, you can set the `permalink` property in the header to the URL you desire.

The TEI Documentation pages are an exception. These are included as a Git submodule in `src/documentation/Documentation` and are TEI files. You probably don't want to edit them locally, but if you do, make sure they get pushed to the Documentation repo.

The root index pages, `index.en.md` and `index.es.md` are special in that they are set up for the Apache web server to do content negotiation to determine whether to show an English or Spanish version of the landing page depending on the requester's locale. If you use the built in Eleventy serve command, be aware that you won't get a regular index.html file at the root.
