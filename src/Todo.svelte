<!-- The <svelte:options> element allows you to specify compiler options. immuutable for In this app, the specific <Todo> component flashes whenever it receives new data -->
<svelte:options immutable={true} />

<script>
	import { afterUpdate } from 'svelte';
	import flash from './flash.js';

	export let todo;

	let element;

	afterUpdate(() => {
		flash(element);
	});
</script>

<!-- the text will flash red whenever
     the `todo` object changes -->
<li bind:this={element}>
	<label>
		<input type="checkbox" checked={todo.done} on:change />
		{todo.text}
	</label>
</li>
