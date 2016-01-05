module.exports = {
	thumbnails: {
		from: '<%= IMAGES_PATH %>/',
		to: '<%= THUMBNAILS_PATH %>/',
		files: '*.*',
		props: {
			width: 256
		},
		fatals: true
	}
};