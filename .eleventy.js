const markdownIt = require('markdown-it')
      ;
module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('assets/fonts');
  eleventyConfig.addPassthroughCopy('assets/scripts');
  eleventyConfig.setTemplateFormats(["md", "jpg", "png", "gif"]);
  const options = {
    html: true,
    breaks: true,
    linkify: false
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });
  const toYsTime = (dateString) => {
   let dt = new Date(dateString);
   let y = {
    2000: "-I",
    2001: "I PSD",
    2002: "II PSD",
    2003: "III PSD",
    2004: "IV PSD",
    2005: "V PSD",
    2006: "VI PSD",
   }[dt.getFullYear()]
   let d = dt.getDate();
   let m = {
    0: "Janvyer",
    1: "Févryer",
    2: "Mars",
    3: "Avryl",
    4: "May",
    5: "Juyn",
    6: "Juyllet",
    7: "Août",
    8: "Septembre",
    9: "Octobre",
    10: "Novembre",
    11: "Décembre",
   }[dt.getMonth()]

   return `${d} ${m} An ${y}`
  }


  eleventyConfig.addFilter('toYsTime', toYsTime);

  return {
    // Use liquid in html templates
    htmlTemplateEngine: "liquid"
  };
};