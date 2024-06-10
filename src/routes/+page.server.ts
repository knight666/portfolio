import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { IIndex } from '../project-types';

export const load: PageServerLoad<IIndex> = async () => {
	const index = await import(/* @vite-ignore */ '../index.json');
	if (index) {
		return index.default;
	}

	error(404, 'Not found');
};
export const prerender = true;