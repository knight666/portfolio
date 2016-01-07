module.exports = function(name) {
	var platformTypes = {
		'steam': {
			'name': 'Steam',
			'style': 'badge badge-steam',
		},
		'xboxone': {
			'name': 'Xbox One',
			'style': 'badge badge-xbox-one',
		},
		'ps4': {
			'name': 'PlayStation 4',
			'style': 'badge badge-playstation-4',
		}
	}

	return platformTypes[name];
}