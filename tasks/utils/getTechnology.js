module.exports = function(name) {
	var properties = {
		'c': {
			'name': 'C',
		},
		'c++': {
			'name': 'C++',
		},
		'csharp': {
			'name': 'C#',
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
			'name': 'OpenGL 2.x',
		},
		'opengl3': {
			'name': 'OpenGL 3.x',
		},
		'opengl4': {
			'name': 'OpenGL 4.x',
		},
		'js': {
			'name': 'JavaScript',
		},
		'css2': {
			'name': 'CSS 3'
		},
		'css3': {
			'name': 'CSS 3'
		},
		'nodejs': {
			'name': 'NodeJS',
		},
		'php4': {
			'name': 'PHP 4',
		},
		'html4': {
			'name': 'HTML 4',
		},
		'html5': {
			'name': 'HTML 5',
		},
	}

	if (!properties[name])
	{
		console.log('Failed to find technology with identifier "' + name + '".');
	}

	return properties[name];
}