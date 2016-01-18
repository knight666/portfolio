module.exports = function(grunt) {
	grunt.registerTask('index', function() {
		var context = {
			'PROJECT_LIST': ''
		};

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/projects/*.json')).forEach(function(fullPath) {
			var entry = grunt.file.readJSON(fullPath);

			var project = {
				'filename': fullPath.match(/([^ \/]+?)\.json$/)[1] + '.html',
				'title': entry.title
			};

			if (!entry.hidden)
			{
				var style = '';

				if (entry.trailer.image)
				{
					style = ' style="background-image: url(\'../media/previews/' + entry.trailer.image + '\'); background-position: center; background-repeat: no-repeat; background-size: 100%;"';
				}

				context['PROJECT_LIST'] +=
					'<li class="list-group-item index-project"' + style + '>' +
						'<a href="projects/' + project['filename'] + '" class="index-project-link">' +
							'<span>' + project['title'] + '</span>' +
						'</a>'
					'</li>\n';
			}
		});

		grunt.project_utils.compileTemplate(grunt, 'index', context);
	});
};