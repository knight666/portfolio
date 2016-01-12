module.exports = function(name) {
	var properties = {
		'nixxes': {
			'name': 'Nixxes Software BV',
			'location': 'Utrecht, the Netherlands',
			'function': 'Systems Programmer',
			'service-start': '2013-08',
		},
		'flexposure': {
			'name': 'FlexPosure BV',
			'location': 'Tiel, the Netherlands',
			'function': 'Junior Developer',
			'service-start': '2012-10',
			'service-end': '2013-08',
		},
		'digc': {
			'name': 'Dutch Indie Games Company',
			'location': 'Breda, the Netherlands',
			'function': 'Programmer',
			'service-start': '2012-03',
			'service-end': '2012-09',
		},
		'igad': {
			'name': 'NHTV Hogeschool voor de Kunsten',
			'location': 'Breda, the Netherlands',
			'function': 'Student',
			'service-start': '2008-09',
			'service-end': '2012-09',
		},
		'scripta': {
			'name': 'Scripta Consultancy BV',
			'location': 'Rotterdam, the Netherlands',
			'function': 'Web Developer',
			'service-start': '2005-01',
			'service-end': '2012-01',
		},
	}


	if (!properties[name])
	{
		console.error('Failed to find employer with identifier "' + name + '".');
	}

	return properties[name];
}