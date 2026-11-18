module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Classes added at runtime by externally loaded scripts (e.g. medium-zoom from CDN)
  // never appear in _site, so PurgeCSS would strip their rules.
  safelist: {
    greedy: [/medium-zoom/],
  },
};
