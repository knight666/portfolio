module.exports = {
	build: {
		auth: {
			host: 'ftp.knight666.com',
			port: 21,
			authKey: 'website',
		},
		src: '<%= OUTPUT_PATH %>',
		dest: '/domains/knight666.com/public_html/portfolio/',
	}
};