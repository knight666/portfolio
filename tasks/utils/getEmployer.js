module.exports = function(name) {
	const employers = {
		collective: {
			name: 'IEC Collective',
			location: 'Berlin, Germany',
			function: 'Senior Programmer',
			'service-start': '2021-10'
		},
		mpg: {
			name: 'The Multiplayer Guys',
			location: 'Berlin, Germany',
			function: 'Senior UI Programmer',
			'service-start': '2021-01',
			'service-end': '2021-10'
		},
		ubisoft: {
			name: 'Ubisoft Berlin GmbH',
			location: 'Berlin, Germany',
			function: 'Lead UI Programmer',
			'service-start': '2018-03',
			'service-end': '2021-01'
		},
		bigpoint: {
			name: 'Bigpoint GmbH',
			location: 'Berlin, Germany',
			function: 'Senior UI Developer',
			'service-start': '2016-06',
			'service-end': '2018-02',
		},
		nixxes: {
			name: 'Nixxes Software BV',
			location: 'Utrecht, the Netherlands',
			function: 'Systems Programmer',
			'service-start': '2013-08',
			'service-end': '2016-05',
		},
		flexposure: {
			name: 'FlexPosure BV',
			location: 'Tiel, the Netherlands',
			function: 'Junior Developer',
			'service-start': '2012-10',
			'service-end': '2013-08',
		},
		digc: {
			name: 'Dutch Indie Games Company',
			location: 'Breda, the Netherlands',
			function: 'Programmer',
			'service-start': '2012-03',
			'service-end': '2012-09',
		},
		igad: {
			name: 'NHTV Hogeschool voor de Kunsten',
			location: 'Breda, the Netherlands',
			function: 'Student',
			'service-start': '2008-09',
			'service-end': '2012-09',
		},
		scripta: {
			name: 'Scripta Consultancy BV',
			location: 'Rotterdam, the Netherlands',
			function: 'Web Developer',
			'service-start': '2005-01',
			'service-end': '2012-01',
		},
		opensource: {
			name: 'Open Source',
		},
	};

	if (!employers[name]) {
		console.error('Failed to find employer with identifier "' + name + '".');
	}

	return employers[name];
}