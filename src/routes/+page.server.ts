import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { IProject } from '../project-types';
import { getProject } from '../helpers';

export const load: PageServerLoad = async () => {
	const module = await import('../index.json');
	if (module) {
		const index = module.default;
		const promises: Promise<IProject>[] = index.featured.map(async (id) => getProject(id));

		return {
			projects: await Promise.all(promises),
		};
	}

	error(404, 'Not found');
};
export const prerender = true;