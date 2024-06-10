import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const project = await import(`../../../projects/${params.slug}.json`);
	if (project) {
		const source = (await import(`../../../projects/${params.slug}.md?raw`)).default;

		return {
			...project.default,
			id: params.slug,
			source,
		};
	}

	error(404, 'Not found');
};
export const prerender = true;