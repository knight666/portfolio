module.exports = function(grunt) {
	grunt.registerTask('ordering', function () {
		by_date = [];
		by_employer = {};
		by_platform = {};
		by_technology = {};

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/projects/*.json')).forEach(function(fullPath) {
			var entry = grunt.file.readJSON(fullPath);

			var project = {
				'filename': fullPath.match(/([^ \/]+?)\.json$/)[1] + '.html',
				'title': entry.title,
				'platforms': entry.brief.platforms || [],
				'employer': entry.brief.employer || '',
				'technologies': entry.brief.technologies || [],
			};

			by_date.push(project);

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

			project.technologies.forEach(function(technology) {
				if (by_technology[technology])
				{
					by_technology[technology].push(project);
				}
				else
				{
					by_technology[technology] = [ project ];
				}
			});
		});

		var context = {
			'ORDER_TITLE': '',
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

		var writeProjectList = function(list) {
			var result = '<ul class="list-group">\n';

			list.forEach(function(project) {
				result +=
					'<li class="list-group-item">' +
						'<a href="projects/' + project['filename'] + '">' +
							'<div class="text-profile-container">' +
								'<div class="img-profile">' +
									'<img src=images/profile.jpg />' +
								'</div>' +
								'<div class="text-profile">' +
									project['title'] +
								'</div>' +
							'</div>' +
						'</a>' +
					'</li>\n';
			});

			result += '</ul>\n';

			return result;
		}

		// by date

		grunt.log.writeln('Ordering projects by date.');

		context['ORDER_TITLE'] = 'Ordered by date';
		context['NAVIGATION'] = writeNavigation('date');

		context['PROJECT_LIST'] = '<h2>Projects</h2>\n';
		context['PROJECT_LIST'] += writeProjectList(by_date);

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'projects-by-date');

		// by employer

		grunt.log.writeln('Ordering projects by employer.');

		context['ORDER_TITLE'] = 'Ordered by employer';
		context['NAVIGATION'] = writeNavigation('employer');
		context['PROJECT_LIST'] = '';

		for (name in by_employer)
		{
			var employer = by_employer[name];
			var properties = grunt.project_utils.getEmployer(name);

			context['PROJECT_LIST'] += '<h2 id="' + name + '">' + properties.name + '</h2>\n';
			context['PROJECT_LIST'] += writeProjectList(employer);
		}

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'projects-by-employer');

		// by platform

		grunt.log.writeln('Ordering projects by platform.');

		context['ORDER_TITLE'] = 'Ordered by platform';
		context['NAVIGATION'] = writeNavigation('platform');
		context['PROJECT_LIST'] = '';

		for (name in by_platform)
		{
			var platform = by_platform[name];
			var properties = grunt.project_utils.getPlatform(name);

			context['PROJECT_LIST'] += '<h2 id="' + name + '">' + properties.name + '</h2>\n';
			context['PROJECT_LIST'] += writeProjectList(platform);
		}

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'projects-by-platform');

		// by technology

		grunt.log.writeln('Ordering projects by technology.');

		context['ORDER_TITLE'] = 'Ordered by technology';
		context['NAVIGATION'] = writeNavigation('technology');
		context['PROJECT_LIST'] = '';

		for (name in by_technology)
		{
			var technology = by_technology[name];
			var properties = grunt.project_utils.getTechnology(name);

			context['PROJECT_LIST'] += '<h2 id="' + name + '">' + properties.name + '</h2>\n';
			context['PROJECT_LIST'] += writeProjectList(technology);
		}

		grunt.project_utils.compileTemplate(grunt, 'ordering', context, 'projects-by-technology');
	});
}