<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import './styles.css';
	const header =
		'text-[#71717a] font-medium hover:text-black duration-200 px-3 py-2 rounded-lg hover:bg-zinc-100 flex';

	let loading = true;
	onMount(() => {
		setInterval(() => (loading = false), 500);
	});
</script>

{#if loading}
	<div
		class="absolute z-50 bg-zinc-100 h-screen w-full flex flex-col justify-center items-center"
		transition:fade
	>
		<img src="/logo.webp" alt="" class="h-56 rounded-2xl" />
		<img src="/loading.svg" alt="" class="h-28" />
	</div>
{:else}
	<div class="h-screen w-full overflow-hidden">
		<nav class="fixed bg-gray-100 flex justify-between w-full px-4 py-2 h-16 duration-200">
			<a href="/" class="h-12 flex justify-center items-center">
				<img src="/title.svg" alt="" class="mt-2 h-10 w-max" />
			</a>
			<div class="flex justify-between items-center gap-x-8">
				<a href="/about/" class={header}>About Us</a>
			</div>
		</nav>
		<div class="h-16 w-full" />

		<slot />
	</div>
{/if}
