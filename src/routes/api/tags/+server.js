import { compile } from 'mdsvex';
import { json } from '@sveltejs/kit';
import { glob } from 'glob';
import * as fs from 'fs';

export async function GET() {
	try {
		let tags = {};
		let blogs = await glob('static/blogs/*.md');

		let metadata = {
			unique: [],
			data: {}
		};

		for (let i = 0; i < blogs.length; i++) {
			let blog = blogs[i];
			const filename = blog.replace('static\\blogs\\', '').replace('.md', '');
			const fm = (await compile(fs.readFileSync(blog, { encoding: 'utf8', flag: 'r' }))).data.fm;

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
