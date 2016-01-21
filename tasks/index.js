module.exports = function(grunt) {
	grunt.registerTask('index', function() {
		var context = {
			'PROJECT_LIST': ''
		};

		var settings = grunt.file.readJSON(grunt.template.process('<%= SOURCE_PATH %>/index.json'));
		var projects_path = grunt.template.process('<%= SOURCE_PATH %>/projects');
		var featured = [];

		settings.featured.forEach(function(path) {
			featured.push(grunt.file.readJSON(projects_path + '/' + path))
		});

		context['PROJECT_LIST'] = grunt.project_utils.compileProjectList(grunt, featured, { 'description': true, 'featured': true });

		grunt.project_utils.compileTemplate(grunt, 'index', context);
	});
};