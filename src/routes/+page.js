export async function load({ fetch }) {
	const res = await fetch(`/api/tags`);
	return res.json();
}
