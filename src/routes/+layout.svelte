<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import './styles.css';
	import Title from '../lib/icons/Title.svelte';
	import ToggleTheme from '../lib/components/ToggleTheme.svelte';

	let loading = true;
	onMount(() => {
		setInterval(() => (loading = false), 1000);
	});
</script>

{#if loading}
	<div
		class="absolute z-50 bg-l_background h-screen w-full flex flex-col justify-center items-center"
		transition:fade
	>
		<img src="/logo.webp" alt="" class="h-56 rounded-2xl" />
		<img src="/loading.svg" alt="" class="h-28" />
	</div>
{:else}
	<div class="h-screen w-full overflow-hidden bg-l_background">
		<nav class="fixed bg-l_background flex justify-between w-full px-4 py-2 h-16 duration-200">
			<a href="/" class="h-12 flex justify-center items-center">
				<Title />
			</a>
			<ToggleTheme />
			<div class="flex justify-between items-center gap-x-8">
				<a
					href="/about/"
					class="text-black font-medium duration-200 px-3 py-2 rounded-lg hover:bg-zinc-100 flex"
				>
					About Us
				</a>
			</div>
		</nav>
		<div class="h-16 w-full" />

		<slot />
	</div>
{/if}
