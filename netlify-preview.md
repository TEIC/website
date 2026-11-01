# Netlify previews for the TEI website

This note asks for approval to set up **temporary preview copies** of the TEI website. The first use is the **We Are TEI** post series: authors can see a pre-published version of their own post and approve it before it goes live. These copies are **not** a change to how the live site at tei-c.org is published.

## What this is for

**We Are TEI** posts will be drafted in the website repository before they appear on tei-c.org. Authors should be able to read their post in something that looks like the real site, without waiting for official publication.

A preview would give a **shareable URL** for one draft at a time, for example a branch named `wat/jane-doe` at:

`https://wat-jane-doe--tei-website.netlify.app`

The editor sends that link to the author. The author opens it in a browser (no GitHub or Netlify account needed), checks the post, and replies with approval or corrections. 

The same mechanism could later be used for other website drafts. For We Are TEI, branch names would start with **`wat/`** (short for We Are TEI).

## What happens with the preview website

When the post is published (the branch is merged) or the draft is withdrawn, the branch should be deleted so Netlify stops updating the preview. 

Taking the URL itself down is a separate, manual step in Netlify (see below).

## What this is not

- It does **not** replace the current publication process (GitHub Actions and Docker).
- It does **not** point tei-c.org, www.tei-c.org, or any TEI domain at Netlify.
- It does **not** make `main` the live Netlify site.
- It is **not** meant for the official website. Only branches whose names start with an agreed prefix (`wat/`) would be built.

## What we would use

[Netlify](https://www.netlify.com/) is a common hosting service for static websites. The TEI site is already a static site (built with Eleventy). Netlify can build a copy from GitHub and host it at a `*.netlify.app` address.

The Documentation submodule (`TEIC/Documentation`) would be included in the preview build. That is the same content the live site already uses.

## What we need from the TEI-C GitHub org

Netlify must be allowed to **read** the `TEIC/website` repository. That means installing the **Netlify GitHub App** on the TEIC organisation and granting it access to this repo (needs someone with **organisation admin** rights on GitHub).

A Netlify account should be owned by TEI-C (or a TEI-C officer), not a personal account, so the setup does not depend on one volunteer’s login.

Netlify’s [free tier](https://www.netlify.com/pricing/) is enough for occasional preview builds (branch deploys do not consume any credits). No custom domain and no paid plan are required for this use.

## Setup steps (once)

Someone with GitHub org access and a TEI-C Netlify login would do the following.

### A. Create the Netlify site

1. Sign in at [app.netlify.com](https://app.netlify.com).
2. Choose **Add new site** → **Import an existing project** → **GitHub**.
3. If `TEIC/website` is not listed, install the Netlify GitHub App for the TEIC organisation and allow this repository.
4. Select **TEIC/website**.
5. Set the build as follows:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Add an environment variable `NODE_VERSION` with the value `20` (Site configuration → Environment variables).
7. Create the site. Do **not** add a custom domain.

The first build may take a few minutes. It is only a test of the connection; it will not be used as the public TEI website.

### B. Keep this site as previews only

Netlify always creates a default address like `https://something.netlify.app`. To make sure `main` (the real website branch) is not published there:

1. Open **Project configuration** → **Developer settings** → **Continuous deployment** → **Branches and deploy contexts**.
2. Set **Production branch** to a name that will never be used, for example `netlify-production-unused`.
3. Save.

The live site continues to be published as it is now.

### C. Build only branches with a prefix

On the same **Branches and deploy contexts** screen:

1. Under **Branch deploys**, choose **Let me add individual branches**.
2. Enter `wat/*`.
3. Save.
4. Optionally turn **Deploy Previews** off if you do not want a preview for every GitHub pull request. Prefix branches are enough.

After this, only branches named like `wat/author-or-post-name` are built.

## How people would use it after approval

1. Put the draft We Are TEI post on a Git branch whose name starts with `wat/`, for example `wat/jane-doe` or `wat/how-i-joined-the-tei`.
2. Push it to GitHub.
3. Netlify builds it automatically.
4. Copy the preview URL from the Netlify dashboard (or from GitHub checks, if those are enabled) and send it to the author.
5. The author reviews the post in the browser and sends approval or edits. They do not need a Netlify or GitHub account.
6. When the post is ready, publish it through the usual website process. Delete the `wat/…` branch on GitHub so Netlify stops building it. That does **not** remove the last preview: someone with access to the Netlify site still needs to open **Deploys**, find that branch’s latest deploy, and **Delete** it. After that, the preview URL returns a 404 (it may take a short time if the page was cached).

## Risks and limits

- Preview URLs are **unlisted, not private**: anyone who has the link can open them. That is usually fine for author review. Do not put material on a preview if it must stay confidential.
- Deleting the Git branch only **stops further builds**. The last successful preview stays live until someone deletes that deploy in the Netlify dashboard. Netlify’s automatic cleanup does not remove the latest successful deploy for a branch.
- A preview is a close copy of the website, not a full copy of the production Apache/Docker setup. Documentation pages appear on the preview because that content is already part of this repository as a public submodule.
- Builds use TEI-C’s Netlify quota. Occasional website previews are well within a free account.

## Decision requested

1. Creating one Netlify site, linked only to `TEIC/website`, with no TEI domain attached.
2. Installing the Netlify GitHub App on the TEIC organisation for this repository.
3. Using branch names `wat/…` for pre-publication We Are TEI post previews.

