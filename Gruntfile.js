module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    concat: {
      dist: {
          src: 'src/javascripts/*.js'
        , dest: 'dist/javascripts/application.js'
      }
    },

    uglify: {
      dist: {
        options: {report: "gzip"}
          , src: 'dist/javascripts/application.js'
          , dest: 'dist/javascripts/application.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          // style: 'nested', // Default
          // style: 'compact',
          style: 'compressed',
          // style: 'expanded'
        },
        files: {
          'dist/stylesheets/application.css': 'src/stylesheets/application.scss',
        }
      }
    }

  });

  grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};
