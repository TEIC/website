# The TEI-C website source

This repository contains the sources for the TEI website and the configuration to run it locally if you need to. If you are editing the website's content, you will only need to be focused on the contents of the `src/` directory, which is laid out something like this:

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
...
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

## Building Locally

The website can be built locally. To do so, first make sure you have Node (20+), npm (10+), and git installed. 

Then check out the repository and install all dependencies

```sh
git clone https://github.com/TEIC/website --recurse-submodules
cd website
npm install
```

The commands for building and serving the website are configured in `./package.json`.

## Previewing with Docker Compose

If you have Docker installed, you can run the site in something like its production setup, with an Apache front end. This will avoid any confusion over the index page, which exists in multiple lanaguages. You will get the version corresponding to your browser's language preferences.

To run under Docker Compose, do

```sh
.docker/dev.sh up -d
```

The site should be available at <http://localhost:9090/>. To shut it down, you can run

```sh
.docker/dev.sh down
```

You can also do things like view the logs from Eleventy and Apache by running

```sh
.docker/dev.sh logs -f
```

Changes to source files will result in an automatic rebuild of the site.

## Previewing without Docker

To preview the website, run:

```sh
npm run dev 
```

This will also watch for any new changes and rebuild, so you can leave the console running if you're making multiple changes. 

If this is successful, you'll likely see a whole bunch of output, which should conclude with something like:

```txt
[11ty] Copied 50 files / Wrote 654 files in 3.08 seconds (4.7ms each, v2.0.1)
[11ty] Watching…
[11ty] Server at http://localhost:8080/
```

**Note**: Since the website is localized, the homepage will be located at `index.[LANGUAGE-CODE]`. E.g. to see the English homepage, go to: `https://localhost:8080/index.en`






