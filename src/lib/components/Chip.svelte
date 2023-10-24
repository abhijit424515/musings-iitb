<script>
	export let text, selected, search;

	function flip() {
		selected = !selected;
		search();
	}
</script>

<button
	class="cursor-pointer w-max py-1 px-3 border-[1px] border-grey-400 shadow-md rounded-lg duration-200"
	style={selected
		? 'background-color: #1D1D1D; color: white'
		: 'background-color: white; color: #1D1D1D'}
	on:click={flip}
>
	{text}
</button>
