export async function load({ fetch }) {
	return (await fetch(`/api/tags`)).json();
}
