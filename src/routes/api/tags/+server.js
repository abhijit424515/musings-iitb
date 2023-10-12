import { compile } from 'mdsvex';
import { json } from '@sveltejs/kit';

export async function GET() {
	try {
		let tags = {};
		const blogs_mappings = import.meta.glob('../../../../static/blogs/*.md', {
			eager: true,
			as: 'raw'
		});
		const blog_paths = Object.keys(blogs_mappings);

		let metadata = {
			unique: [],
			data: {}
		};

		for (let i = 0; i < blog_paths.length; i++) {
			const filename = blog_paths[i].replace('../../../../static/blogs/', '').replace('.md', '');
			const fm = (await compile(blogs_mappings[blog_paths[i]])).data.fm;

			tags[filename] = fm.tags;
			metadata.data[filename] = fm;
		}

		for (let i = 0; i < Object.values(tags).length; i++) {
			let tag = Object.values(tags)[i];
			for (let j = 0; j < tag.length; j++) {
				if (!metadata.unique.includes(tag[j])) {
					metadata.unique.push(tag[j]);
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
