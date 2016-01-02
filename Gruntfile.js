module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	var package = grunt.file.readJSON('package.json');
	var versionNumber = package['version'].substring(0, package['version'].length - 2) + '.' + (package['buildnum'] || '0');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		TARGET: grunt.option('build') || process.env.GRUNT_ENV || 'debug',
		VERSION: versionNumber,

		MEDIA_PATH: 'media/',
		SOURCE_PATH: 'source/',
		INTERMEDIATE_PATH: 'intermediate/',
		STYLES_PATH: 'styles/',
		OUTPUT_PATH: 'build/<%= TARGET %>/',

		buildnumber: {
			options: {
				field: 'buildnum',
			},
			files: [ 'package.json' ],
		},

		env: {
			debug: {
				NODE_ENV: 'DEVELOPMENT',
				APPNAME: '<%= pkg.name %> ' + versionNumber + ' (DEBUG)',
			},
			release: {
				NODE_ENV: 'PRODUCTION',
				APPNAME: '<%= pkg.name %> ' + versionNumber,
			},
		},

		clean: {
			build: [ '<%= OUTPUT_PATH %>' ],
		},

		marked: {
			options: {
				highlight: false,
				gfm: true,
				tables: true,
				breaks: false,
				pedantic: false,
				sanitize: true,
				smartLists: true,
				smartypants: false
			},
			dist: {
				files: [{
					expand: true,
					src: ['<%= SOURCE_PATH %>/**/*.md'],
					dest: '<%= OUTPUT_PATH %>',
					rename: function(dest, src) {
						var filename = src.match(/([^ \/]+?)\.md$/)[0];
						return dest + filename.replace(/md$/, 'html');
					}
				}]
			},
		},
	});

	// build
	
	var defaultTasks = [
		'env:' + grunt.config('TARGET'),
		'clean:build',
		'marked'
	];
	grunt.registerTask('default', defaultTasks);
}