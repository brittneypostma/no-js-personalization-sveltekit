import { products } from '$lib/products';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const { product } = params;
	// throw redirect(301, `/corgis/${product}`);
	return {
		products,
		product
	};
};
