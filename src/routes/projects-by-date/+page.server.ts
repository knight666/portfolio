import type { PageServerLoad } from './$types';
import type { IProject } from '../../project-types';

export const load: PageServerLoad<{ projects: IProject[] }> = async () => {
	const projectJsonList = import.meta.glob<string>('../../projects/*.json', {
		query: '?raw',
		import: 'default',
	});
	const projects: IProject[] = [];

	for (const path in projectJsonList) {
		projects.push(JSON.parse(await projectJsonList[path]()));
	}

	return {
		projects
	};
};
export const prerender = true;