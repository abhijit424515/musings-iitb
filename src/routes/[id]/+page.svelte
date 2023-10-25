<script>
	import dayjs from 'dayjs';

	export let data;

	let percent = 0;
	function progress(e) {
		const { scrollTop, scrollHeight, clientHeight } = e.target;
		percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
	}
</script>

<svelte:head>
	<title>{data.fm.title}</title>
</svelte:head>

<div class="h-1 bg-blue-600" style="width: {percent}%" />
<div class="h-[calc(100vh-4rem)] w-full overflow-y-scroll" on:scroll={progress}>
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
</div>
