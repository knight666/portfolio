module.exports = function(grunt) {
	grunt.registerTask('index', function() {
		var context = {
			'PROJECT_LIST': ''
		};

		grunt.file.expand(grunt.template.process('<%= SOURCE_PATH %>/pages/*.json')).forEach(function(fullPath) {
			var entry = grunt.file.readJSON(fullPath);

			var project = {
				'filename': fullPath.match(/([^ \/]+?)\.json$/)[1] + '.html',
				'title': entry['title']
			};

			context['PROJECT_LIST'] += '<li class="list-group-item"><a href="pages/' + project['filename'] + '">' + project['title'] + '</a></li>\n';
		});

		grunt.project_utils.compileTemplate(grunt, 'index', context);
		grunt.project_utils.compileTemplate(grunt, 'projects', context);
	});
};