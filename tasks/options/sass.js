const sass = require('sass');

module.exports = {
	options: {
		implementation: sass,
		sourceMap: false
	},
	portfolio: {
		files: {
			'<%= OUTPUT_PATH %>/css/portfolio.css': '<%= SASS_PATH %>/portfolio.scss',
		}
	}
};