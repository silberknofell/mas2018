module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            fontAwesome: {
                expand: true,
                cwd: 'node_modules/font-awesome',
                src: ['**'],
                dest: 'dist/font-awesome/'
            },
            html: {
                expand: true,
                cwd: 'src',
                src: ['*.html'],
                dest: 'dist/'
            }
        },
        concat: {
            css: {
                src: [
                    "node_modules/bootstrap/dist/css/bootstrap.min.css",

                    "src/css/myStyle.css"
                ],
                dest: "dist/style.css"
            },
            script: {
                src: [
                    "node_modules/jquery/dist/jquery.slim.min.js",
                    "node_modules/tether/dist/js/tether.min.js",
                    "node_modules/bootstrap/dist/js/bootstrap.min.js",
                    "src/js/myScript.js"
                ],
                dest: "dist/script.js"
            }
        },
        sass: {
            dist: {
                options: {},
                files: {
                    'src/css/myStyle.css': 'src/css/myStyle.scss'
                }
            }
        },
        uncss: {
            dist: {
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'src/css/tidy.css'
                    }
                ]
            }
        },
        watch: {
            css: {
                files: "src/css/*.css",
                tasks: ['concat:css']
            },
            script: {
                files: "src/js/*.js",
                tasks: ['concat:script']
            },
            scss: {
                files: "src/css/*.scss",
                tasks: ['sass']
            },
            html: {
                files: "src/*.html",
                tasks: ['copy:html']
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-uncss");
};