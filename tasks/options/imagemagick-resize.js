module.exports = {
	thumbnails: {
		from: '<%= SCREENSHOTS_PATH %>/',
		to: '<%= THUMBNAILS_PATH %>/',
		files: '*.*',
		props: {
			width: 200
		},
		fatals: true
	}
};