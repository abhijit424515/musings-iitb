import { compile } from 'mdsvex';
import { glob } from 'glob';
import * as fs from 'fs';

async function compile_metadata() {
	let tags = {};
	let blogs = await glob('static/blogs/*.md');

	let metadata = {
		unique: [],
		data: {},
		tag_map: {}
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

	for (let i = 0; i < Object.keys(tags).length; i++) {
		let filename = Object.keys(tags)[i];
		let tag = tags[filename];
		for (let j = 0; j < tag.length; j++) {
			if (!metadata.tag_map[tag[j]]) {
				metadata.tag_map[tag[j]] = [];
			}
			metadata.tag_map[tag[j]].push(filename);
		}
	}

	fs.writeFileSync('./static/metadata.json', JSON.stringify(metadata));
}

await compile_metadata();
