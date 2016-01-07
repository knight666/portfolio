var marked = require('marked');

module.exports = function(grunt) {
	grunt.registerTask('projects', function () {
		var renderer = new marked.Renderer();

		renderer.link = function(href, title, text) {
			if (href.indexOf('yt://', 0) === 0)
			{
				href = 'https://www.youtube.com/embed/' + href.substring('yt://'.length) + '?rel=0&vq=highres';
				console.log('href ' + href);

				return '<div class="embed-responsive embed-responsive-16by9 project-video">' +
							'<iframe class="embed-responsive-item" src="' + href + '" allowfullscreen=""></iframe>' +
						'</div>';
			}
			else
			{
				return marked.Renderer.prototype.link.call(this, href, title, text);
			}
		}

		renderer.image = function(href, title, text) {
			title = title.replace(/&quot;/g, '"');
			var properties = JSON.parse(title);

			var orientation = properties.orientation || 'left';

			return '<div class="image-box-' + orientation + '">' +
						'<a href="../images/' + href + '" class="thumbnail">' +
							'<img src="../images/thumbnails/' + href + '" alt="' + text + '" />' +
						'</a>' +
					'</div>';
		}

		marked.setOptions({
			renderer: renderer,
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

			if (entry['source'])
			{
				current_dir = fullPath.substring(0, fullPath.lastIndexOf('/') + 1);
				context['PAGE_CONTENT'] = marked(grunt.file.read(current_dir + entry['source']));
			}

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