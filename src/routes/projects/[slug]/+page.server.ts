import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { IProject } from '../../../project-types';
import { getProject } from '../../../helpers';

export const load: PageServerLoad<IProject> = async ({ params }) => {
	const project = await getProject(params.slug);
	if (project) {
		return project;
	}

	error(404, 'Not found');
};
export const prerender = true;