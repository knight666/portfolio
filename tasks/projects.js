var marked = require('marked');

module.exports = function(grunt) {
	grunt.registerTask('projects', function () {
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

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/projects/*.json')).forEach(function(fullPath) {
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
			grunt.project_utils.compileTemplate(grunt, 'project', context, 'projects/' + filename);
		});
	});
};