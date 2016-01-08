module.exports = {
	images: {
		expand: true,
		cwd: '<%= IMAGES_PATH %>/',
		src: '**/*.*',
		dest: '<%= OUTPUT_PATH %>/images/'
	},
	bootstrap: {
		expand: true,
		cwd: 'node_modules/bootstrap/dist/',
		src: [
			'css/*.min.css',
			'fonts/*.*',
			'js/*.min.js',
		],
		dest: '<%= OUTPUT_PATH %>/'
	},
	jquery: {
		expand: true,
		cwd: 'node_modules/jquery/dist/',
		src: [
			'*.min.js',
		],
		dest: '<%= OUTPUT_PATH %>/js/'
	},
	styles: {
		expand: true,
		cwd: '<%= SOURCE_PATH %>/styles/',
		src: '*.css',
		dest: '<%= OUTPUT_PATH %>/css/'
	}
};