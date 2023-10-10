import { compile } from 'mdsvex';
import { json } from '@sveltejs/kit';
import { glob } from 'glob';
import * as fs from 'fs';

export async function GET() {
	try {
		let metadata = {};
		let blogs = await glob('static/blogs/*.md');

		for (let i = 0; i < blogs.length; i++) {
			let blog = blogs[i];
			metadata[blog.replace('static\\blogs\\', '').replace('.md', '')] = (
				await compile(fs.readFileSync(blog, { encoding: 'utf8', flag: 'r' }))
			).data.fm;
		}

		return json(metadata);
	} catch (error) {
		return json({
			status: 500,
			body: error.toString()
		});
	}
}
