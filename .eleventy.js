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
    2005: "V (Chanel) PSD",
    2006: "VI PSD",
    2007: "VII PSD",
    2008: "VII (Glacyatyon)",
    2009: "IX (Glacyatyon)",
    2010: "X (Glacyatyon)",
    2011: "XI (Glacyatyon)",
    2012: "XII (Glacyatyon)",
    2013: "XIII (Glacyatyon)",
    2014: "XIV (Glacyatyon)",
    2015: "XV (Glacyatyon)",
    2016: "XVI (Glacyatyon)",
    2017: "XVII (Réveil)",
    2018: "XVIII (Réveil)",
    2019: "XVIII (Sommeyl)",
    2020: "XX (Sommeyl)",
    2021: "XXI (Sommeyl)",
    2022: "XXII (Nouvelle Ère)",
    2023: "XXIII (Nouvelle Ère)",
    2023: "XXIV",
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