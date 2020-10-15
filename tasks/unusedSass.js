const { findUnused } = require('sass-unused');

module.exports = function(grunt) {
	grunt.registerTask('sass-unused', () => {
		grunt.log.writeln('Checking for unused Sass.');

		paths = [];

		grunt.file.expand(grunt.template.process('<%= SASS_PATH %>/**/*.scss')).forEach((fullPath) => {
			paths.push(fullPath);
		});

		const { vars, mixins, functions } = findUnused(paths);

		function printUnusedList(type, idents) {
			idents.sort().forEach((ident) => grunt.log.warn(`Unused ${type}: ${ident}`));
		}

		printUnusedList('variable', vars);
		printUnusedList('mixin', mixins);
		printUnusedList('functions', functions);
	});
}