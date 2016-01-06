module.exports = function(grunt) {
	var fs = require('fs');

	var im = require('node-imagemagick');
	//im.convert.path = './dependencies/ImageMagic-6.9.3-Q16/convert.exe'
	//im.identify.path = './dependencies/ImageMagic-6.9.3-Q16/identify.exe'

	grunt.registerTask('thumbnails', function() {
		var thumbnailsPath = grunt.template.process('<%= THUMBNAILS_PATH %>');
		grunt.file.mkdir(thumbnailsPath);

		grunt.file.expand(grunt.template.process('<%= IMAGES_PATH %>/*.*')).forEach(function(fullPath) {
			//fullPath = './' + fullPath;

			grunt.log.writeln('Generating thumbnail for ' + fullPath + '.');

			var filename = fullPath.match(/([^ \/]+)$/)[1];

			try {
				im.identify('source/images/ThiefPCArt.png', function(err, features) {
					//if (err) throw err;
					console.log('features ' + features);
				});

				im.resize({
					srcData: fs.readFileSync(fullPath, 'binary'),
					width: 200
				}, function(err, stdout, stderr) {
					if (err) { throw err; }
					fs.writeFileSync(thumbnailsPath + '/' + filename, stdout, 'binary');
					grunt.log.writeln('Resized ' + fullPath + ' to 200 pixels.');
				});
			}
			catch (e) {
				grunt.log.writeln('error ' + e);
			}
		});
	});
};