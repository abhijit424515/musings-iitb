<script>
	export let src, url, title, description;
</script>

<a href={url} class="w-full h-[20rem] rounded-lg shadow-xl bg-white dark:bg-[#1d1d1d]">
	<div class="h-[12rem]">
		<img class="rounded-t-lg h-full w-full object-center object-cover" {src} alt="" />
	</div>
	<div class="p-4 h-[8rem]">
		<h5
			class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ellipses-first font-calligraffitti"
		>
			{title}
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400 ellipses-second">
			{@html description}
		</p>
	</div>
</a>
