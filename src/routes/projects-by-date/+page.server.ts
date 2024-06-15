import type { PageServerLoad } from './$types';
import type { IProject } from '../../project-types';
import { getProject } from '../../helpers';

export const load: PageServerLoad<Record<string, IProject[]>> = async () => {
	const projectJsonList = import.meta.glob<string>('../../projects/*.json', {
		query: '?raw',
		import: 'default',
	});
	const projectMap: Record<string, IProject[]> = {
		'Ongoing': [],
	};

	for (const p in projectJsonList) {
		const filename = (p.split('/').pop() ?? '').split('.')[0];
		const project = await getProject(filename);
		if (project.brief.released === undefined) {
			projectMap['Ongoing'].push(project);
			continue;
		}	

		const release = new Date(project.brief.released);
		const year = release.getFullYear().toString();

		if (year in projectMap) {
			projectMap[year].push(project);
		} else {
			projectMap[year] = [project];
		}
	}

	return projectMap;
};
export const prerender = true;