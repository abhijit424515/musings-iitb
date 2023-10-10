import { compile } from 'mdsvex';
import { json } from '@sveltejs/kit';

export async function GET({ url, fetch }) {
	try {
		const response = await fetch(`/blogs/${url.searchParams.get('id')}.md`);
		if (!response.ok) throw new Error(`FAILED: ${response.statusText}`);

		const mdContent = await compile(await response.text());
		return json({
			headers: {
				'Content-Type': 'text/html'
			},
			body: mdContent.code,
			fm: mdContent.data.fm
		});
	} catch (error) {
		return json({
			status: 500,
			body: error.toString()
		});
	}
}
