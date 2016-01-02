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