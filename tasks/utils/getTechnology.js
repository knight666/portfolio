module.exports = function(name) {
	var properties = {
		'c': {
			'name': 'C',
		},
		'c++': {
			'name': 'C++',
		},
		'as': {
			'name': 'ActionScript',
		},
		'ue3': {
			'name': 'Unreal Engine 3',
		},
		'ue4': {
			'name': 'Unreal Engine 4',
		},
		'cdc': {
			'name': 'Foundation Engine',
		},
	}

	if (!properties[name])
	{
		console.log('Failed to find technology with identifier "' + name + '".');
	}

	return properties[name];
}