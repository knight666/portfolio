module.exports = {
	media: {
		expand: true,
		cwd: '<%= MEDIA_PATH %>/',
		src: '**/*.*',
		dest: '<%= OUTPUT_PATH %>/<%= MEDIA_PATH %>/'
	},
	styles: {
		expand: true,
		cwd: '<%= SOURCE_PATH %>/styles/',
		src: '*.css',
		dest: '<%= OUTPUT_PATH %>/css/'
	},
	scripts: {
		expand: true,
		cwd: '<%= SOURCE_PATH %>/scripts/',
		src: '*.js',
		dest: '<%= OUTPUT_PATH %>/js/'
	},
};