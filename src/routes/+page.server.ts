import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { IProject } from '../project-types';

export const load: PageServerLoad = async () => {
	const module = await import('../index.json');
	if (module) {
		const index = module.default;

		const promises: Promise<IProject>[] = index.featured.map(async (id) => {
			const project: IProject = (await import(`../projects/${id}.json`)).default;

			const source = (await import(`../projects/${id}.md?raw`)).default;

			return {
				...project,
				id,
				source,
			};
		});

		return {
			projects: await Promise.all(promises),
		};
	}

	error(404, 'Not found');
};
export const prerender = true;