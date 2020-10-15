const pp = require('preprocess');

module.exports = function(grunt, list, options) {
	var description = options.description;
	var featured = options.featured || false;

	var result = '';

	const loaded = grunt.file.read(grunt.template.process('<%= TEMPLATES_PATH %>/project-item.html'));

	const processOptions = {
		srcDir: grunt.template.process('<%= TEMPLATES_PATH %>/')
	};

	list.forEach((project) => {
		if (!project.hidden)
		{
			let context = {
				FILENAME: project.filename,
				TITLE: project.title,
				DESCRIPTION: project.brief.description,
				PREVIEW: project.trailer.image
			};

			result += pp.preprocess(loaded, context, processOptions);
		}
	});

	result += '\n';

	return result;
}