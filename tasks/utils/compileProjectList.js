module.exports = function(grunt, list, options) {
	var description = options.description;
	var featured = options.featured || false;

	var result = '<ul class="project-list">\n';

	list.forEach(function(project) {
		if (!project.hidden)
		{
			var style = '';

			if (project.trailer.image)
			{
				style = ' style="background-image: url(\'./media/previews/' + project.trailer.image + '\');';

				if (!featured)
				{
					style += ' background-size: 100%;';
				}

				style += '"';
			}

			result +=
				'<li class="project-list__item"' + style + '>' +
					'<a href="projects/' + project.filename + '">' +
						'<h2>' +
							project.title +
						'</h2>';

			result +=
					'</a>' +
				'</li>\n';
		}
	});

	result += '</ul>\n';

	return result;
}