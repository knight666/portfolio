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

		copy: {
			bootstrap: {
				expand: true,
				cwd: 'node_modules/bootstrap/dist/',
				src: [
					'css/*.min.css',
					'js/*.min.js',
				],
				dest: '<%= OUTPUT_PATH %>/'
			},
			jquery: {
				expand: true,
				cwd: 'node_modules/jquery/dist/',
				src: [
					'*.min.js',
				],
				dest: '<%= OUTPUT_PATH %>/js/'
			},
			styles: {
				expand: true,
				cwd: '<%= SOURCE_PATH %>/styles/',
				src: '*.css',
				dest: '<%= OUTPUT_PATH %>/css/'
			},
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

			var content = "";
			context['paragraphs'].forEach(function(item) {
				grunt.log.writeln(item);
				if (item['header'])
				{
					content += marked('### ' + item['header'] + ' ###\n\n');
				}
				content += marked(item['text']);
			});

			var template = grunt.file.read(grunt.template.process('<%= SOURCE_PATH %>/page-template.html'));
			template = template.replace(/##TITLE##/g, context['title']);
			template = template.replace(/##DESCRIPTION##/g, marked(context['description']));
			template = template.replace(/##CONTENT##/g, content);

			grunt.file.write(outputPath, template);
		});
	});

	// build
	
	var defaultTasks = [
		'env:' + grunt.config('TARGET'),
		'clean:build',
		'pages',
		'copy:bootstrap',
		'copy:jquery',
		'copy:styles',
	];
	grunt.registerTask('default', defaultTasks);
}