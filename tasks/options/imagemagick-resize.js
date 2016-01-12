module.exports = {
	thumbnails: {
		from: '<%= SCREENSHOTS_PATH %>/',
		to: '<%= THUMBNAILS_PATH %>/',
		files: '*.*',
		props: {
			width: 320
		},
		fatals: true
	}
};