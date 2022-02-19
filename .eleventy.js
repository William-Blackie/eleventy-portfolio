module.exports = function(eleventyConfig) {

    eleventyConfig.addNunjucksShortcode("sitename", function(page_title) {
        return page_title + " | williamblackie.com"
    });


    return {
        dir: { input: 'src', output: '_site' }
    };

};