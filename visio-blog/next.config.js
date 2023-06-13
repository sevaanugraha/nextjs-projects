/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

const withVideos = require('next-videos')

const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withVideos(withTM(withPWA({
  images: {
    domains: ["https://unsplash.com", "visio-blog.s3.amazonaws.com"],
  },
})));
