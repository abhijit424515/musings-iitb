export async function load({ fetch }) {
	const res = await fetch(`/metadata.json`);
	return res.json();
}
