module.exports = function(eleventyConfig) {

    eleventyConfig.addNunjucksShortcode("sitename", function(page_title) {
        return page_title + " | williamblackie.com"
    });

    eleventyConfig.addNunjucksFilter("date", function(value) {
        const date = new Date(value)
        return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()
    });

    return {
        dir: { input: 'src', output: '_site' }
    };

};