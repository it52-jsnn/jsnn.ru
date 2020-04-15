const capitalize = require('lodash.capitalize');

module.exports = function(eleventyConfig) {
  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./src/assets/');

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig.addPassthroughCopy({ './src/assets/img/logo.svg': 'assets/logo.svg' });
  eleventyConfig.addPassthroughCopy('CNAME');

  eleventyConfig.addFilter('ruDate', (value) => (
    capitalize(value.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }).replace(' г.', ''))
  ));

  // Eleventy configuration
  return {
    dir: {
      input: "src",
      output: "dist"
    },

    // Files read by Eleventy, add as needed
    templateFormats: ["css", "njk", "md", "txt"],
    htmlTemplateEngine: "njk",
    // markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
}
