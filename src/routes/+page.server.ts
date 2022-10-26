import { dev } from '$app/environment';
import type { PageServerLoad } from './$types';

export const prerender = true;
export const csr = dev;

export const load: PageServerLoad = async (event) => {
	// console.log(event.platform.context);
	return {
		edge: `This is from the edge`
	};
};
