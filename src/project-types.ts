export interface IBreadcrumb {
	url: string;
	title: string;
}

export interface ITrailer {
	link?: string;
	image: string;
}

export interface IEmployer {
	name: string;
	location: string;
	function: string;
	serviceStart: string;
	serviceEnd?: string;
}

export interface IProject {
	id: string;
	title: string;
	employer: IEmployer;
	brief: {
		description: string;
		released: string;
		employer: string;
		platforms: string[];
		technologies: string[]
		role: string;
		type: string;
		stack: string[];
	},
	trailer: {
		link: string;
		image: string;
	}
	source: string;
};

export interface IIndex {
	featured: string[];
}