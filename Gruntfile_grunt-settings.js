var config = require("grunt-settings");

module.exports = function(grunt) {

  config.init(grunt);

  config.set("concat.dist", {
      src: "src/javascripts/*.js"
    , dest: "dist/javascripts/application.js"
  });

  config.set("uglify.dist", {
      options: { report: "gzip" }
    , src: "dist/javascripts/application.js "
    , dest: "dist/javascripts/application.min.js"
  });

  config.set("sass.dist", {
      options: { style: 'compressed'}
    , src: "src/stylesheets/application.scss"
    , dest: "dist/stylesheets/application.css"
  });

  config.registerTask("default", ["concat", "uglify", "sass"]);
};
