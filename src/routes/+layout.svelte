<script>
	import './styles.css';
	const header =
		'text-[#71717a] font-medium hover:text-black duration-200 px-3 py-2 rounded-lg hover:bg-zinc-100 hidden md:flex';
</script>

<nav class="fixed bg-white flex justify-between w-full px-4 py-2 h-16 duration-200">
	<a class="font-nce font-bold text-2xl py-2" href="/">OTTER</a>
	<div class="flex justify-between items-center gap-x-8">
		<!-- <a href="/" class={header}>Home</a> -->
		<a href="/tags/" class={header}>Tags</a>
		<a href="/about/" class={header}>About Us</a>
	</div>
</nav>
<div class="h-16 w-full" />

<slot />
