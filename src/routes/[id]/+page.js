export async function load({ fetch, params }) {
	return (await fetch(`/api/blog?id=${params.id}`)).json();
}
