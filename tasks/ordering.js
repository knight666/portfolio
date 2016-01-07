module.exports = function(grunt) {
	grunt.registerTask('ordering', function () {
		by_platform = {};
		by_employer = {};

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/projects/*.json')).forEach(function(fullPath) {
			var entry = grunt.file.readJSON(fullPath);

			var project = {
				'filename': fullPath.match(/([^ \/]+?)\.json$/)[1] + '.html',
				'title': entry.title,
				'platforms': entry.brief.platforms || [],
				'employer': entry.brief.employer || '',
			};

			project.platforms.forEach(function(platform) {
				if (by_platform[platform])
				{
					by_platform[platform].push(project);
				}
				else
				{
					by_platform[platform] = [ project ];
				}
			});

			if (project.employer != '')
			{
				if (by_employer[project.employer])
				{
					by_employer[project.employer].push(project);
				}
				else
				{
					by_employer[project.employer] = [ project ];
				}
			}
		});

		var context = {
			'ORDER_TITLE': 'Ordered by platform',
			'PROJECT_LIST': ''
		};

		var writeProjectList = function(list) {
			var result = '\t\t<ul class="list-group">\n';

			list.forEach(function(project) {
				result += '\t\t\t<li class="list-group-item"><a href="projects/' + project['filename'] + '">' + project['title'] + '</a></li>\n';
			});

			result += '\t\t</ul>\n';

			return result;
		}

		// by platform

		grunt.log.writeln('Ordering projects by platform.');

		context['PROJECT_LIST'] = '';
		
		for (name in by_platform)
		{
			var platform = by_platform[name];
			var properties = grunt.project_utils.getPlatform(name);

			context['PROJECT_LIST'] += '\t\t<h2 id="' + name + '">' + properties.name + '</h2>\n';
			context['PROJECT_LIST'] += writeProjectList(platform);
		}

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'by-platform');

		// by employer

		grunt.log.writeln('Ordering projects by employer.');

		context['PROJECT_LIST'] = '';

		for (name in by_employer)
		{
			var employer = by_employer[name];
			var properties = grunt.project_utils.getEmployer(name);

			context['PROJECT_LIST'] += '\t\t<h2 id="' + name + '">' + properties.name + '</h2>\n';
			context['PROJECT_LIST'] += writeProjectList(employer);
		}

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'by-employer');
	});
}