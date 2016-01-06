var pp = require('preprocess');

module.exports = function(grunt, template, context, outputName) {
	grunt.log.writeln('Compiling template "' + template + '".');

	var options = {
		srcDir: grunt.template.process('<%= TEMPLATES_PATH %>/')
	}

	var loaded = grunt.template.process('<%= TEMPLATES_PATH %>/' + template + '.html');
	var processed = pp.preprocess(grunt.file.read(loaded), context, options);
	grunt.file.write(grunt.template.process('<%= OUTPUT_PATH %>/' + (outputName || template) + '.html'), processed);
};