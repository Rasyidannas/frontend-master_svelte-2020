<script>
	import BigRedButton from './BigRedButton.svelte';

	function handleClick() {
		console.log("Teeeeeet!!!!")
	}
</script>

<BigRedButton on:click={handleClick} />
