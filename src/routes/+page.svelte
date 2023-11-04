<script>
	import Chip from '$lib/components/Chip.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	export let data;

	let selected_tags = {};
	for (let i = 0; i < data.unique.length; i++) selected_tags[data.unique[i]] = false;

	let results = data.data;
	async function filter() {
		let selected = [];
		for (let i = 0; i < Object.keys(selected_tags).length; i++)
			if (selected_tags[Object.keys(selected_tags)[i]])
				selected.push(Object.keys(selected_tags)[i]);

		results = await (
			await fetch(`/api/tags`, {
				method: 'POST',
				body: JSON.stringify({ selected }),
				headers: {
					'Content-Type': 'application/json'
				}
			})
		).json();
	}
</script>

<svelte:head>
	<title>MUSINGS</title>
</svelte:head>

<div class="h-[calc(100vh-4rem)] w-full overflow-y-scroll">
	<div class="px-8 py-32 flex flex-col h-[calc(100vh-4rem)] justify-center">
		<div class="mx-auto max-w-xl text-center">
			<h1 class="font-extrabold text-[2.8rem] lg:text-[4.5rem] leading-[1.1] lg:leading-[1.1]">
				<div class="font-ribeye">Your Stories.</div>
				<div class="pb-4 font-ribeye" id="grad-line">Penned by Us.</div>
			</h1>
			<p
				class="mt-8 text-[1.3rem] lg:text-[1.5rem] leading-[1.4] lg:leading-[1.3] font-dynapuff font-normal"
			>
				Just a bunch of students trying to put our most cherished thoughts into words. We present,
				musings of our minds.
			</p>
		</div>
	</div>

	<!-- <div class="flex gap-x-2 p-4 w-full flex-wrap gap-2">
		{#each data.unique as tag}
			<Chip text={tag} bind:selected={selected_tags[tag]} search={filter} />
		{/each}
	</div> -->

	<Gallery data={results} />
</div>
