<script>
	import dayjs from 'dayjs';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let liked = false;

	export let data;

	let percent = 0;
	function progress(e) {
		const { scrollTop, scrollHeight, clientHeight } = e.target;
		percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
	}

	onMount(() => (liked = Boolean(JSON.parse(localStorage.getItem($page.url.pathname)))));
</script>

<svelte:head>
	<title>{data.fm.title}</title>
</svelte:head>

<div class="h-1 bg-blue-600" style="width: {percent}%" />

<div class="h-[calc(100vh-4rem)] w-full overflow-y-scroll" on:scroll={progress}>
	<div
		class="w-full h-[25rem] relative flex flex-col items-center"
		style="background-image: linear-gradient(to bottom, #fffaeb00, #fffaeb), url('{data.fm.image
			.cover}'); background-size: cover; background-repeat: no-repeat; background-position: center center"
	/>
	<div id="blog">
		<div class="mb-12">
			<div class="text-center text-7xl pb-8 font-bold font-calligraffitti">{data.fm.title}</div>
			<div class="flex justify-center items-center gap-4">
				<img id="avatar" class="object-cover" src={data.fm.image.author} alt="" />
				<div>
					<div class="flex gap-2">
						<div>{dayjs(data.fm.pubDate).format('MMM D, YY')}</div>
						<div>·</div>
						<div>{data.fm.read} min read</div>
					</div>
					<div>{data.fm.author}</div>
				</div>
			</div>
			<div class="my-4 lg:text-[1.3rem]">{@html data.fm.description}</div>
			<div class="bg-black h-[1px] w-4/5 mx-auto mt-8" />
		</div>
		{@html data.body}
	</div>
</div>

<div
	class="absolute bottom-0 z-10 w-full h-16 bg-l_background flex justify-center items-center duration-500"
	style="transform: translateY({percent < 30 ? '4rem' : '0'})"
>
	<button
		class="h-full"
		on:click={() => {
			liked = !liked;
			localStorage.setItem($page.url.pathname, liked.toString());
		}}
	>
		<svg
			class="h-full p-4"
			stroke="red"
			fill={liked ? 'red' : 'none'}
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke-linecap="round"
			stroke-linejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
			/>
		</svg>
	</button>
</div>
