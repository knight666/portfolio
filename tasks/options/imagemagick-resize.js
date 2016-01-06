module.exports = {
	thumbnails: {
		from: '<%= IMAGES_PATH %>/',
		to: '<%= THUMBNAILS_PATH %>/',
		files: '*.*',
		props: {
			width: 200
		},
		fatals: true
	}
};