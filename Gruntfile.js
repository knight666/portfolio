module.exports = function(grunt) {
	// load dependencies
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var glob = require('glob');
	var marked = require('marked');
	var pp = require('preprocess');

	// setup config

	var config = {
		TARGET: grunt.option('build') || process.env.GRUNT_ENV || 'debug',
		SOURCE_PATH: 'source',
		TEMPLATES_PATH: '<%= SOURCE_PATH %>/templates',
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

	var compileTemplate = function(template, context, outputName) {
		grunt.log.writeln('Compiling template "' + template + '".');

		var loaded = grunt.template.process('<%= TEMPLATES_PATH %>/' + template + '.html');
		var processed = pp.preprocess(grunt.file.read(loaded), context);
		grunt.file.write(grunt.template.process('<%= OUTPUT_PATH %>/' + (outputName || template) + '.html'), processed);
	}

	grunt.registerTask('index', function () {
		var context = {
			'PROJECT_LIST': ''
		};

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/pages/*.json')).forEach(function(fullPath) {
			var entry = grunt.file.readJSON(fullPath);

			var project = {
				'filename': fullPath.match(/([^ \/]+?)\.json$/)[1] + '.html',
				'title': entry['title']
			};

			context['PROJECT_LIST'] += '<li class="list-group-item"><a href="pages/' + project['filename'] + '">' + project['title'] + '</a></li>\n';
		});

		compileTemplate('index', context);
		compileTemplate('projects', context);
	});

	grunt.registerTask('pages', function () {
		marked.setOptions({
			renderer: new marked.Renderer(),
			breaks: false,
			gfm: true,
			highlight: false,
			tables: true,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			smartypants: false
		});

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/pages/*.json')).forEach(function(fullPath) {
			grunt.log.writeln('Processing "' + fullPath + '".');

			var entry = grunt.file.readJSON(fullPath);

			var context = {
				'PAGE_TITLE': entry['title'],
				'PAGE_DESCRIPTION': '',
				'PAGE_CONTENT': '',
			};

			// build text

			entry['paragraphs'].forEach(function(item) {
				if (item['header'])
				{
					context['PAGE_CONTENT'] += marked('### ' + item['header'] + ' ###\n\n');
				}
				context['PAGE_CONTENT'] += marked(item['text']);
			});

			// build brief

			var brief = entry['brief'];

			context['PAGE_DESCRIPTION'] = marked(brief['description']);

			if (brief['released'])
			{
				context['PAGE_BRIEF_RELEASED'] = brief['released'];
			}

			if (brief['employer'])
			{
				context['PAGE_BRIEF_EMPLOYER'] = brief['employer'];
			}

			if (brief['platforms'])
			{
				var platformTypes = {
					'steam': {
						'style': 'badge badge-steam',
						'name': 'Steam'
					},
					'xboxone': {
						'style': 'badge badge-xbox-one',
						'name': 'Xbox One'
					},
					'ps4': {
						'style': 'badge badge-playstation-4',
						'name': 'PlayStation 4'
					}
				}

				context['PAGE_BRIEF_PLATFORMS'] = '';

				brief['platforms'].forEach(function(item) {
					var type = platformTypes[item];

					context['PAGE_BRIEF_PLATFORMS'] += '<a href="#" class="' + type['style'] + '">' + type['name'] + '</a>\n';
				});
			}

			var filename = fullPath.match(/([^ \/]+?)\.json$/)[1];
			compileTemplate('project', context, 'pages/' + filename);
		});
	});

	// build
	
	var defaultTasks = [
		'env:' + grunt.config('TARGET'),
		'clean:build',
		'index',
		'pages',
		'copy:bootstrap',
		'copy:jquery',
		'copy:styles',
	];

	// deploy to server
	
	if (grunt.option('deploy'))
	{
		defaultTasks.push('ftp-deploy:build');
	}

	grunt.registerTask('default', defaultTasks);
}