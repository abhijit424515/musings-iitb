import { json } from '@sveltejs/kit';

export async function POST({ request, fetch }) {
	try {
		const { selected } = await request.json();
		const res = await fetch(`/metadata.json`);
		let data = await res.json();
		let metadata = {};

		if (selected.length == 0) return json(data.data);

		for (let i = 0; i < data.unique.length; i++) {
			if (selected.includes(data.unique[i])) {
				data.tag_map[data.unique[i]].forEach((x) => {
					if (!(x in metadata)) metadata[x] = data.data[x];
				});
			}
		}

		return json(metadata);
	} catch (error) {
		return json({
			status: 500,
			body: error.toString()
		});
	}
}
