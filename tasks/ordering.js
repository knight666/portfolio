module.exports = function(grunt) {
	grunt.registerTask('ordering', function () {
		by_date = [];
		by_employer = {};
		by_platform = {};
		by_technology = {};

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/projects/*.json')).forEach(function(fullPath) {
			var entry = grunt.file.readJSON(fullPath);

			entry.filename = fullPath.match(/([^ \/]+?)\.json$/)[1] + '.html';
			entry.brief.platforms = entry.brief.platforms || [];
			entry.brief.employer = entry.brief.employer || [];
			entry.brief.technologies = entry.brief.technologies || [];

			if (!entry.hidden)
			{
				by_date.push(entry);

				if (entry.employer != '')
				{
					if (by_employer[entry.brief.employer])
					{
						by_employer[entry.brief.employer].push(entry);
					}
					else
					{
						by_employer[entry.brief.employer] = [ entry ];
					}
				}

				entry.brief.platforms.forEach(function(platform) {
					if (by_platform[platform])
					{
						by_platform[platform].push(entry);
					}
					else
					{
						by_platform[platform] = [ entry ];
					}
				});

				entry.brief.technologies.forEach(function(technology) {
					if (by_technology[technology])
					{
						by_technology[technology].push(entry);
					}
					else
					{
						by_technology[technology] = [ entry ];
					}
				});
			}
		});

		var context = {
			'SUBTITLE': '',
			'NAVIGATION': '',
			'PROJECT_LIST': '',
		};

		var writeNavigation = function(active) {
			var order = [
				{
					'id': 'date',
					'title': 'By date',
					'link': 'projects-by-date.html',
				},
				{
					'id': 'platform',
					'title': 'By platform',
					'link': 'projects-by-platform.html',
				},
				{
					'id': 'employer',
					'title': 'By employer',
					'link': 'projects-by-employer.html',
				},
				{
					'id': 'technology',
					'title': 'By technology',
					'link': 'projects-by-technology.html',
				},
			];

			var result = '<ul class="nav nav-tabs">\n';

			order.forEach(function(type) {
				var is_active = (type.id === active) ? ' class="active"' : '';

				result += '\t<li role="presentation"' + is_active + '><a href="' + type.link + '">' + type.title + '</a></li>\n';
			});
			
			result += '</ul>\n';

			return result;
		}

		// by date

		grunt.log.writeln('Ordering projects by date.');

		context['SUBTITLE'] = 'Ordered by date';
		context['NAVIGATION'] = writeNavigation('date');

		context['PROJECT_LIST'] = '<h2>Projects</h2>\n';
		context['PROJECT_LIST'] += grunt.project_utils.compileProjectList(grunt, by_date, { 'description': false });

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'projects-by-date');

		// by employer

		grunt.log.writeln('Ordering projects by employer.');

		context['SUBTITLE'] = 'Ordered by employer';
		context['NAVIGATION'] = writeNavigation('employer');
		context['PROJECT_LIST'] = '';

		for (name in by_employer)
		{
			var employer = by_employer[name];
			var properties = grunt.project_utils.getEmployer(name);

			context['PROJECT_LIST'] += '<h2 id="' + name + '">' + properties.name + '</h2>\n';
			context['PROJECT_LIST'] += grunt.project_utils.compileProjectList(grunt, employer, { 'description': false });
		}

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'projects-by-employer');

		// by platform

		grunt.log.writeln('Ordering projects by platform.');

		context['SUBTITLE'] = 'Ordered by platform';
		context['NAVIGATION'] = writeNavigation('platform');
		context['PROJECT_LIST'] = '';

		for (name in by_platform)
		{
			var platform = by_platform[name];
			var properties = grunt.project_utils.getPlatform(name);

			context['PROJECT_LIST'] += '<h2 id="' + name + '">' + properties.name + '</h2>\n';
			context['PROJECT_LIST'] += grunt.project_utils.compileProjectList(grunt, platform, { 'description': false });
		}

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'projects-by-platform');

		// by technology

		grunt.log.writeln('Ordering projects by technology.');

		context['SUBTITLE'] = 'Ordered by technology';
		context['NAVIGATION'] = writeNavigation('technology');
		context['PROJECT_LIST'] = '';

		for (name in by_technology)
		{
			var technology = by_technology[name];
			var properties = grunt.project_utils.getTechnology(name);

			context['PROJECT_LIST'] += '<h2 id="' + name + '">' + properties.name + '</h2>\n';
			context['PROJECT_LIST'] += grunt.project_utils.compileProjectList(grunt, technology, { 'description': false });
		}

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'projects-by-technology');
	});
}