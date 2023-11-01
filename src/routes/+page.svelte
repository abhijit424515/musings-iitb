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
	<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-[calc(100vh-4rem)] lg:items-center">
		<div class="mx-auto max-w-xl text-center">
			<h1 class="text-3xl font-extrabold sm:text-5xl">
				Understand User Flow.
				<strong class="font-extrabold text-l_accent sm:block"> Increase Conversion. </strong>
			</h1>

			<p class="mt-4 sm:text-xl/relaxed">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
				numquam ea!
			</p>
		</div>
	</div>

	<div class="flex gap-x-2 p-4 w-full flex-wrap gap-2">
		{#each data.unique as tag}
			<Chip text={tag} bind:selected={selected_tags[tag]} search={filter} />
		{/each}
	</div>

	<Gallery data={results} />
</div>
