<script>
	export let text, selected, search;

	function flip() {
		selected = !selected;
		search();
	}
</script>

<button
	class="cursor-pointer w-max py-1 px-3 border-[2px] border-black rounded-lg"
	style={selected
		? 'background-color: black; color: white'
		: 'background-color: white; color: black'}
	on:click={flip}
>
	{text}
</button>
