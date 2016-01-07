module.exports = function(grunt) {
	// load dependencies

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var glob = require('glob');

	// setup config

	var config = {
		TARGET: grunt.option('build') || process.env.GRUNT_ENV || 'debug',
		SOURCE_PATH: 'source',
		TEMPLATES_PATH: '<%= SOURCE_PATH %>/templates',
		IMAGES_PATH: 'images',
		THUMBNAILS_PATH: '<%= IMAGES_PATH %>/thumbnails',
		INTERMEDIATE_PATH: 'intermediate',
		STYLES_PATH: 'styles',
		OUTPUT_PATH: 'build',
	};

	// load options from tasks folder

	var configTasks = {};

	glob.sync('*', { cwd: './tasks/options/' }).forEach(function(option) {
		var key = option.replace(/\.js$/,'');
		configTasks[key] = require('./tasks/options/' + option);
	});

	grunt.util._.extend(config, configTasks);
	grunt.initConfig(config);

	// load utilities

	grunt.project_utils = {};

	glob.sync('*', { cwd: './tasks/utils/' }).forEach(function(option) {
		var key = option.replace(/\.js$/,'');
		grunt.project_utils[key] = require('./tasks/utils/' + option);
	});

	// load additional tasks

	grunt.loadTasks('tasks');

	// build
	
	var defaultTasks = [
		'env:' + grunt.config('TARGET'),
		'clean:build',
		'index',
		'projects',
		'ordering',
		'copy:images',
		'copy:bootstrap',
		'copy:jquery',
		'copy:styles',
	];

	// build content

	if (grunt.option('content'))
	{
		defaultTasks.push('imagemagick-resize:thumbnails');
	}

	defaultTasks.push('copy:images');

	// deploy to server
	
	if (grunt.option('deploy'))
	{
		defaultTasks.push('ftp-deploy:build');
	}

	grunt.registerTask('default', defaultTasks);
}