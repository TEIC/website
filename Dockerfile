# Default base image is nginx:alpine
# while a hardened image can be requested
# by providing the build argument BASE_IMAGE="dhi.io/httpd:2.4-debian"
# NB, you need to be loged in to DockerHub to download this image
ARG BASE_IMAGE="httpd:2.4"

# Step 1:
# Build the webpages via eleventy
FROM node:26 AS builder
LABEL authors="pstadler"

WORKDIR /app

COPY . .

RUN cp src/_includes/analytics.html_src src/_includes/analytics.html && \
    npm ci && \
    npx @11ty/eleventy

# Step 2:
# Build the web server
FROM $BASE_IMAGE

LABEL org.opencontainers.image.authors="Peter Stadler for the TEI Consortium"
LABEL org.opencontainers.image.source="https://github.com/TEIC/website"

RUN rm -rf usr/local/apache2/htdocs/*

COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/
COPY .docker/conf/httpd.conf /usr/local/apache2/conf/
