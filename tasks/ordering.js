module.exports = function(grunt) {
	grunt.registerTask('ordering', function () {
		by_platform = {};

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/projects/*.json')).forEach(function(fullPath) {
			var entry = grunt.file.readJSON(fullPath);

			var project = {
				'filename': fullPath.match(/([^ \/]+?)\.json$/)[1] + '.html',
				'title': entry.title,
				'platforms': entry.brief.platforms || []
			};

			project['platforms'].forEach(function(platform) {
				if (by_platform[platform])
				{
					by_platform[platform].push(project);
				}
				else
				{
					by_platform[platform] = [ project ]
				}
			});
		});

		var context = {
			'ORDER_TITLE': 'Ordered by platform',
			'PROJECT_LIST': ''
		};

		// by platform

		grunt.log.writeln('Ordering projects by platform.');

		for (name in by_platform)
		{
			var platform = by_platform[name];
			var properties = grunt.project_utils.getPlatform(name);

			var entry = '\t\t<h2 id="' + name + '">' + properties.name + '</h2>\n' +
						'\t\t<ul class="list-group">\n';

			platform.forEach(function(project) {
				entry += '\t\t\t<li class="list-group-item"><a href="projects/' + project['filename'] + '">' + project['title'] + '</a></li>\n';
			});

			entry += '\t\t</ul>\n';

			context['PROJECT_LIST'] += entry;
		}

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'by-platform');
	});
}