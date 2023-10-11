import { browser } from '$app/environment';

export async function load({ fetch }) {
	const res = await fetch(`/api/tags`);

	// if (!browser) {
	// 	await products;
	// }
	// return {
	// 	products: { promise: products }
	// };

	console.log(!browser);

	return res.json();
}
