module.exports = function(name) {
	var employerProperties = {
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
			'service-end': '2013-08',
			'service-start': '2012-10',
		},
		'scripta': {
			'name': 'Scripta Consultancy BV',
			'location': 'Rotterdam, the Netherlands',
			'function': 'Web Developer',
			'service-end': '2012-01',
			'service-start': '2005-01',
		},
	}

	return employerProperties[name];
}