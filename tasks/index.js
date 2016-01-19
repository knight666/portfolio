module.exports = function(grunt) {
	grunt.registerTask('index', function() {
		var context = {
			'PROJECT_LIST': ''
		};

		var featured = [];

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/projects/*.json')).forEach(function(fullPath) {
			var entry = grunt.file.readJSON(fullPath);

			entry.filename = fullPath.match(/([^ \/]+?)\.json$/)[1] + '.html';

			if (!entry.hidden)
			{
				featured.push(entry);
			}
		});

		context['PROJECT_LIST'] = grunt.project_utils.compileProjectList(grunt, featured);

		grunt.project_utils.compileTemplate(grunt, 'index', context);
	});
};