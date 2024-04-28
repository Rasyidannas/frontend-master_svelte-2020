<script>
	let html = '<p>write some text!</p>';
</script>

<div contenteditable="true" bind:innerHTML={html}></div>

<pre>{html}</pre>

<style>
	[contenteditable] {
		border: 1px solid #ccc;
		padding: 10px;
		margin: 10px 0;
	}
</style>