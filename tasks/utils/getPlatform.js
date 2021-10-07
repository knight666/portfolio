module.exports = function(name) {
	const platforms = {
		steam: {
			name: 'Steam',
		},
		uplay: {
			name: 'Ubisoft Connect',
		},
		xbone: {
			name: 'Xbox One',
		},
		xbonex: {
			name: 'Xbox Series X|S',
		},
		ps4: {
			name: 'PlayStation 4',
		},
		ps5: {
			name: 'PlayStation 5',
		},
		stadia: {
			name: 'Stadia',
		},
		windows: {
			name: 'Windows',
		},
		linux: {
			name: 'Linux',
		},
		mac: {
			name: 'Mac OS X',
		},
		web: {
			name: 'Website'
		},
		uwp: {
			name: 'Universal Windows Platform'
		},
	}

	if (!platforms[name]) {
		console.error('Failed to find platform with identifier "' + name + '".');
	}

	return platforms[name];
}