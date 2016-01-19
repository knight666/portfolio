module.exports = function(grunt, list, options) {
	var description = options.description;
	var featured = options.featured || false;

	var result = '<ul class="list-group">\n';

	list.forEach(function(project) {
		if (!project.hidden)
		{
			var style = '';

			if (project.trailer.image)
			{
				style = ' style="background-image: url(\'../media/previews/' + project.trailer.image + '\'); background-position: center; background-repeat: no-repeat; background-size: 100%;"';
			}

			result +=
				'<li class="list-group-item index-project' + (featured ? ' index-project-featured' : '') + '"' + style + '>' +
					'<a href="projects/' + project.filename + '" class="index-project-link">' +
						'<span class="index-project-link-title">' +
							project.title +
						'</span>';

			if (description)
			{
				result +=
						'<div class="index-project-link-description">' +
							project.brief.description +
						'</div>';
			}

			result +=
					'</a>' +
				'</li>\n';
		}
	});

	result += '</ul>\n';

	return result;
}