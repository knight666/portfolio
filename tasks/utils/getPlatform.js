module.exports = function(name) {
	var properties = {
		'steam': {
			'name': 'Steam',
		},
		'xbone': {
			'name': 'Xbox One',
		},
		'ps4': {
			'name': 'PlayStation 4',
		},
		'windows': {
			'name': 'Windows',
		},
		'linux': {
			'name': 'Linux',
		},
		'mac': {
			'name': 'Mac OS X',
		},
		'web': {
			'name': 'Website'
		},
		'uwp': {
			'name': 'Universal Windows Platform'
		},
	}

	if (!properties[name])
	{
		console.error('Failed to find platform with identifier "' + name + '".');
	}

	return properties[name];
}