import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { IIndex, IProject } from '../project-types';

export const load: PageServerLoad = async () => {
	const module = await import('../index.json');
	if (module) {
		const index = module.default;

		const promises: Promise<IProject>[] = index.featured.map(async (id) => {
			const project = await import(`../projects/${id}.json`);
			return {
				id,
				...project.default
			};
		});

		return {
			projects: await Promise.all(promises),
		};
	}

	error(404, 'Not found');
};
export const prerender = true;