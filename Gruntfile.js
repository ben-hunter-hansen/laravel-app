module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src : 'resources/assets/js/*.js',
        dest: 'public/js/app.min.js'
      }
    },
    less: {
      development: {
        options: {
          paths: "public/css"
        },
        files: {
          "public/css/app.css":"resources/assets/less/app.less"
        },
        build: {
          src: 'resources/assets/less/app.less'
        }
      }
    },
    watch: {
      files: [
        '<%= uglify.build.src %>',
        '<%= less.development.build.src %>',
        '<%= ts.dev.src %>'
       ],
      tasks: ['uglify','less','ts:dev']
    },
    exec: {
      server: {
        cmd: 'php artisan serve'
      }
    },
    ts: {
      dev: {
        src: ["resources/assets/typescript/**/*.ts"],
        reference: 'resources/assets/typescript/reference.ts',
        outDir: 'public/js/dev',
        options: {
          compile: true,
          module: 'amd',
          fast: 'never'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-exec');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('serve', ['exec:server']);
  grunt.registerTask('build',['ts:dev','uglify','less']);
};