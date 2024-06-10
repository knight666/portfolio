import { error } from '@sveltejs/kit';
import { type PageServerLoad } from './$types';
import type { IProject } from '../../../project-types';

export const load: PageServerLoad = async ({ params }) => {
	const project: IProject = await import(/* @vite-ignore */ `../../../projects/${params.slug}.json`);
	if (project) {
		return project;
	}

	error(404, 'Not found');
};
export const prerender = true;