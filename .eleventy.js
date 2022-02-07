const now = String(Date.now())
module.exports = function(eleventyConfig) {
  
    eleventyConfig.addShortcode('version', function () {
      return now
    })
    
    return {
      dir: { input: 'src', output: '_site' }
    };

};