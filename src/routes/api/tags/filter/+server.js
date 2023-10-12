import { compile } from 'mdsvex';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const { selected } = await request.json();
		let metadata = {};
		const blogs_mappings = import.meta.glob('../../../../../static/blogs/*.md', {
			eager: true,
			as: 'raw'
		});
		const blog_paths = Object.keys(blogs_mappings);

		if (selected.length == 0) {
			for (let i = 0; i < blog_paths.length; i++) {
				const filename = blog_paths[i]
					.replace('../../../../../static/blogs/', '')
					.replace('.md', '');
				const fm = (await compile(blogs_mappings[blog_paths[i]])).data.fm;
				metadata[filename] = fm;
			}
		} else {
			for (let i = 0; i < blog_paths.length; i++) {
				const fm = (await compile(blogs_mappings[blog_paths[i]])).data.fm;
				const chosen = fm.tags.filter((value) => selected.includes(value)).length > 0;

				if (chosen) {
					const filename = blog_paths[i]
						.replace('../../../../../static/blogs/', '')
						.replace('.md', '');
					metadata[filename] = fm;
				}
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
