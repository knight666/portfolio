module.exports = function(name) {
	var properties = {
		'windows': {
			'name': 'Windows',
		},
		'mac': {
			'name': 'Mac OS X',
		},
		'steam': {
			'name': 'Steam',
		},
		'xbone': {
			'name': 'Xbox One',
		},
		'ps4': {
			'name': 'PlayStation 4',
		}
	}

	if (!properties[name])
	{
		console.log('Failed to find platform with identifier "' + name + '".');
	}

	return properties[name];
}