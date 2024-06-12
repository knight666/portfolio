import type { IProject, IEmployer } from "./project-types";

interface IEmployerList {
	employers: Record<string, IEmployer>;
}

export async function getEmployer(id: string) {
	const employerList: IEmployerList = (await import('./employers.json')).default;
	return employerList.employers[id];
}

export async function getProject(id: string) {
	const project: IProject = (await import(`./projects/${id}.json`)).default;

	return {
		...project,
		source: (await import(`./projects/${id}.md?raw`)).default,
		employer: await getEmployer(project.brief.employer),
		id,
	};

}