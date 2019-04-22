module.exports = function(grunt) {
  grunt.initConfig({

    import_js: {
      files: {
        expand: true,
        cwd: 'components',
        src: ['**/*.js'],
        dest: 'dest/components',
        ext: '.js'
      }
    },
    clean: {
      folder: ['dest', 'js', 'doc']
    },
    concat: {
      utility: {
        src: ['dest/components/**/Utility.js'],
        dest: 'js/Utility/Utility.js'
      },
      type: {
        src: ['dest/components/**/Type.js'],
        dest: 'js/Type/Type.js'
      },
      component: {
        src: ['dest/components/**/Component.js'],
        dest:'js/Component/Component.js'
      },
      validationStates: {
        src: ['dest/components/**/ValidationStates.js'],
        dest:'js/ValidationStates/ValidationStates.js'
      },
      validation: {
        src: ['dest/components/**/Validation.js'],
        dest:'js/Validation/Validation.js'
      },
      messagingSystem: {
        src: ['dest/components/**/MessagingSystem.js'],
        dest:'js/MessagingSystem/MessagingSystem.js'
      },
      forgeValidation: {
        src: ['dest/components/**/GenerateJqueryPlugin.js'],
        dest:'js/GenerateJqueryPlugin/GenerateJqueryPlugin.js'
      },
      all: {
        src: ['js/Utility/*.js', 'js/Type/*.js', 'js/Component/*.js', 'js/ValidationStates/*.js', 'js/Validation/*.js', 'js/MessagingSystem/*.js', 'js/GenerateJqueryPlugin/*.js'],
        dest: 'js/ForgeValidation.js'
      }
    },
    watch: {
      scripts: {
        files: ['components/**/*.js'],
        tasks: ['js'],
        options: {
          spawn: false,
        },
      },
    },
    jsdoc : {
        dist : {
            src: ['js/HelloValidation.js'],
            options: {
              destination : 'doc',
              template : "node_modules/docdash",
              configure : "node_modules/docdash/jsdoc.json"
            }
        }
    }
  });


  
  grunt.loadNpmTasks('grunt-import-js');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('js', ['clean','import_js','concat']);
  grunt.registerTask('default', ['watch']);
 // grunt.registerTask('jsdoc', ['clean', 'jsdoc']);
};
