<script>
	import dayjs from 'dayjs';

	export let data;
	console.log(data.fm);
</script>

<svelte:head>
	<title>{data.fm.title} | Otter</title>
</svelte:head>

<div id="blog">
	<div class="mb-12">
		<p class="text-center text-6xl font-bold">{data.fm.title}</p>
		<div class="flex justify-center items-center gap-4">
			<img id="avatar" src="https://github.com/shadcn.png" alt="" />
			<div>
				<div class="flex gap-2">
					<div>{dayjs(data.fm.pubDate).format('MMM D, YY')}</div>
					<div>·</div>
					<div>5 min read</div>
				</div>
				<div>{data.fm.author}</div>
			</div>
		</div>
		<div class="my-4">{data.fm.description}</div>
	</div>
	{@html data.body}
</div>
