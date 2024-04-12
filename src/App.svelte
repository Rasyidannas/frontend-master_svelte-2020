<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<!-- @html is will not sanitization -->
<p>{@html string}</p>
