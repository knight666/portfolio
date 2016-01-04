module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	var package = grunt.file.readJSON('package.json');
	var versionNumber = package['version'].substring(0, package['version'].length - 2) + '.' + (package['buildnum'] || '0');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		TARGET: grunt.option('build') || process.env.GRUNT_ENV || 'debug',
		VERSION: versionNumber,

		MEDIA_PATH: 'media',
		SOURCE_PATH: 'source',
		INTERMEDIATE_PATH: 'intermediate',
		STYLES_PATH: 'styles',
		OUTPUT_PATH: 'build/<%= TARGET %>',

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
	});

	grunt.registerTask('pages', function () {
		var marked = require('marked');
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
			var filename = fullPath.match(/([^ \/]+?)\.json$/)[1] + '.html';
			var outputPath = grunt.template.process('<%= OUTPUT_PATH %>/pages/' + filename);

			grunt.log.writeln('Processing "' + fullPath + '" -> "' + outputPath + '".');

			var context = grunt.file.readJSON(fullPath);
			var template = grunt.file.read(grunt.template.process('<%= SOURCE_PATH %>/page-template.html'));
			template = template.replace(/##TITLE##/g, context['title']);
			template = template.replace(/##DESCRIPTION##/g, marked(context['description']));
			template = template.replace(/##CONTENT##/g, marked(context['content']));

			grunt.file.write(outputPath, template);
		});
	});

	// build
	
	var defaultTasks = [
		'env:' + grunt.config('TARGET'),
		'clean:build',
		'pages',
	];
	grunt.registerTask('default', defaultTasks);
}