var marked = require('marked');

module.exports = function(grunt) {
	grunt.registerTask('projects', function () {
		var renderer = new marked.Renderer();

		renderer.image = function(href, title, text) {
			title = title.replace(/&quot;/g, '"');
			var properties = JSON.parse(title);

			var orientation = properties.orientation || 'left';

			return '<div class="thumbnail-box-' + orientation + ' thumbnail-box-md thumbnail-box-md">' +
						'<a href="../media/screenshots/' + href + '" class="thumbnail thumbnail-sm" target="_blank">' +
							'<img src="../media/screenshots/thumbnails/' + href + '" alt="' + text + '" />' +
							'<div class="caption">' +
								marked(text) +
							'</div>' +
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

		var video_count = 0;

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/projects/*.json')).forEach(function(fullPath) {
			grunt.log.writeln('Processing "' + fullPath + '".');

			var entry = grunt.file.readJSON(fullPath);

			var context = {
				'SUBTITLE': entry.title,
				'RELATIVE_PATH': '../',
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
				if (properties)
				{
					context['PAGE_BRIEF_EMPLOYER'] = '<a href="../projects-by-employer.html#' + entry.brief.employer + '">' + properties.name + '</a>';
				}
			}

			if (entry.brief.platforms)
			{
				context['PAGE_BRIEF_PLATFORMS'] = '';

				entry.brief.platforms.forEach(function(item) {
					var properties = grunt.project_utils.getPlatform(item);
					if (properties)
					{
						context['PAGE_BRIEF_PLATFORMS'] += '<a href="../projects-by-platform.html#' + item + '" class=badge badge-platform badge-' + item + '">' + properties.name + '</a>\n';
					}
				});
			}

			if (entry.brief.technologies)
			{
				context['PAGE_BRIEF_TECHNOLOGIES'] = '';

				entry.brief.technologies.forEach(function(item) {
					var properties = grunt.project_utils.getTechnology(item);
					if (properties)
					{
						context['PAGE_BRIEF_TECHNOLOGIES'] += '<a href="../projects-by-technology.html#' + item + '" class="badge badge-technology badge-' + item + '">' + properties.name + '</a>\n';
					}
				});
			}

			// trailer

			if (entry.trailer)
			{
				var style = '';

				if (entry.trailer.image)
				{
					style = ' style="background-image: url(\'../media/previews/' + entry.trailer.image + '\'); background-position: center; background-repeat: no-repeat; background-size: 100%;"';
				}

				if (entry.trailer.link)
				{
					context['PAGE_TRAILER'] =
						'<a href="#project-trailer" name="project-video" class="project-video-play-link" video="' + entry.trailer.link + '"' + style + '>' +
							'<div class="project-video-highlight">' +
								'<h2 class="project-video-play">' +
									'<span class="glyphicon glyphicon-play" aria-hidden="true"></span>' +
								'</h2>' +
							'</div>' +
						'</a>';
				}
				else if (entry.trailer.image)
				{
					context['PAGE_TRAILER'] = '<div class="project-video-play-link" ' + style + '></div>';
				}
			}

			// compile template

			if (!entry.hidden)
			{
				var filename = fullPath.match(/([^ \/]+?)\.json$/)[1];
				grunt.project_utils.compileTemplate(grunt, 'project', context, 'projects/' + filename);
			}
		});
	});
};