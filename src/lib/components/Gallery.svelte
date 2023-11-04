<script>
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data;
</script>

<!-- <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4 pb-8"> -->
<div class="w-max mx-auto grid grid-cols-1 gap-4 p-4 pb-8">
	{#each Object.keys(data) as post}
		<BlogCard
			url={post}
			src={data[post].image.card}
			title={data[post].title}
			description={data[post].description}
		/>
	{/each}
</div>
