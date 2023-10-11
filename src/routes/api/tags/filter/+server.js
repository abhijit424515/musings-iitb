import { compile } from 'mdsvex';
import { json } from '@sveltejs/kit';
import { glob } from 'glob';
import * as fs from 'fs';

export async function POST({ request }) {
	try {
		const { selected } = await request.json();
		let metadata = {};
		let blogs = await glob('/blogs/*.md');
		console.log(await glob('*'));

		if (selected.length == 0) {
			for (let i = 0; i < blogs.length; i++) {
				const blog = blogs[i];
				const fm = (await compile(fs.readFileSync(blog, { encoding: 'utf8', flag: 'r' }))).data.fm;
				const filename = blog.replace('static\\blogs\\', '').replace('.md', '');
				metadata[filename] = fm;
			}
		} else {
			for (let i = 0; i < blogs.length; i++) {
				const blog = blogs[i];
				const fm = (await compile(fs.readFileSync(blog, { encoding: 'utf8', flag: 'r' }))).data.fm;

				const chosen_blog = fm.tags.filter((value) => selected.includes(value)).length > 0;
				if (chosen_blog) {
					const filename = blog.replace('static\\blogs\\', '').replace('.md', '');
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
