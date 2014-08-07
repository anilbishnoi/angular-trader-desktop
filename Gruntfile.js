module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // ### compass
        // grunt-contrib-compass npm task
        compass: {
            dev: {
                options: {
                    sassDir: 'app/sass',
                    cssDir: 'app/css',
                    noLineComments: false,
                    environment: 'development'
                }
            },
            dist: {
                options: {
                    sassDir: 'app/sass',
                    cssDir: 'app/css',
                    noLineComments: true,
                    environment: 'production'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        // ### watch
        // Executes the listed targets on file save
        watch: {
            compass: {
                files: 'app/sass/**/*',
                tasks: ['compass:dev'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task.
    grunt.registerTask('default', ['compass:dev']);
    grunt.registerTask('test', ['karma:unit']);

};