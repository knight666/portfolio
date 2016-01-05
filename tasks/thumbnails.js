var im = require('imagemagick');
var fs = require('fs');

module.exports = function(grunt) {
	grunt.registerTask('thumbnails', function() {
		var thumbnailsPath = grunt.template.process('<%= THUMBNAILS_PATH %>');
		grunt.file.mkdir(thumbnailsPath);

		grunt.file.expand(grunt.template.process('<%= IMAGES_PATH %>/*.*')).forEach(function(fullPath) {
			grunt.log.writeln('Generating thumbnail for ' + fullPath + '.');

			var filename = fullPath.match(/([^ \/]+)$/)[1];

			im.resize({
				srcData: fs.readFileSync(fullPath, 'binary'),
				width: 256
			}, function(err, stdout, stderr) {
				if (err) { throw err; }
				fs.writeFileSync(thumbnailsPath + '/' + filename, stdout, 'binary');
				grunt.log.writeln('Resized ' + fullPath + ' to 256 pixels.');
			});
		});
	});
};