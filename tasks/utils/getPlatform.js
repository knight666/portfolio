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
		}
	}

	if (!properties[name])
	{
		console.log('Failed to find platform with identifier "' + name + '".');
	}

	return properties[name];
}