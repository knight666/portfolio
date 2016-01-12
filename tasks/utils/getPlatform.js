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
		'mac': {
			'name': 'Mac OS X',
		},
	}

	if (!properties[name])
	{
		console.error('Failed to find platform with identifier "' + name + '".');
	}

	return properties[name];
}