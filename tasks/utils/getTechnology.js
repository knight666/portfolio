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
		'g2': {
			'name': 'Dawn Engine',
		},
		'scaleform': {
			'name': 'Autodesk Scaleform',
		},
		'horde3d': {
			'name': 'Horde3D',
		},
		'opengl2': {
			'name': 'OpenGL 2.0+',
		},
		'opengl3': {
			'name': 'OpenGL 3.0+',
		},
		'opengl4': {
			'name': 'OpenGL 4.0+',
		},
	}

	if (!properties[name])
	{
		console.log('Failed to find technology with identifier "' + name + '".');
	}

	return properties[name];
}