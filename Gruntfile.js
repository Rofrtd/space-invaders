module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                options: {
                    files: ['test/**/*.js', 'src/**/*.js'],
                },
                frameworks: ['assert', 'mocha'],
                port: 9876,
                browsers: ['FirefoxHeadless'],
            },
        },
    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);
}
