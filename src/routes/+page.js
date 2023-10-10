export async function load({ fetch }) {
	return (await fetch(`/api/all-blogs`)).json();
}
