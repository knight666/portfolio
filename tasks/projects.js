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
				'PAGE_TITLE': entry.title,
				'PAGE_DESCRIPTION': '',
				'PAGE_CONTENT': '',
			};

			// build text

			if (entry.source)
			{
				current_dir = fullPath.substring(0, fullPath.lastIndexOf('/') + 1);
				context['PAGE_CONTENT'] = marked(grunt.file.read(current_dir + entry.source));
			}

			// build brief

			context['PAGE_DESCRIPTION'] = marked(entry.brief.description);

			if (entry.brief.released)
			{
				context['PAGE_BRIEF_RELEASED'] = entry.brief.released;
			}

			if (entry.brief.employer)
			{
				var properties = grunt.project_utils.getEmployer(entry.brief.employer);
				context['PAGE_BRIEF_EMPLOYER'] = '<a href="../by-employer.html#' + entry.brief.employer + '">' + properties.name + '</a>';
			}

			if (entry.brief.platforms)
			{
				context['PAGE_BRIEF_PLATFORMS'] = '';

				entry.brief.platforms.forEach(function(item) {
					var properties = grunt.project_utils.getPlatform(item);

					context['PAGE_BRIEF_PLATFORMS'] += '<a href="../by-platform.html#' + item + '" class="' + properties.style + '">' + properties.name + '</a>\n';
				});
			}

			var filename = fullPath.match(/([^ \/]+?)\.json$/)[1];
			grunt.project_utils.compileTemplate(grunt, 'project', context, 'projects/' + filename);
		});
	});
};