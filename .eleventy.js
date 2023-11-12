


module.exports = function (eleventyConfig) {
    
    eleventyConfig.addWatchTarget("./src/static/css/styles.css")

    eleventyConfig.addPassthroughCopy("./src/static/css/styles.css");
    eleventyConfig.addPassthroughCopy("./src/static/js/bundle.js");

    return {
      dir: {
        input: "src/_site",
        output: "public"
      }
    }
  };