<script>
	export let text, selected, search;

	function flip() {
		selected = !selected;
		search();
	}
</script>

<!-- style={selected
		? 'background-color: #1D1D1D; color: white'
		: 'background-color: l_accent; color: #1D1D1D'} -->
<button
	class="cursor-pointer w-max py-1 px-3 border-[1px] border-grey-400 shadow-md rounded-lg duration-200 {selected
		? 'bg-l_accent text-white'
		: 'bg-white text-black'}"
	on:click={flip}
>
	{text}
</button>
