<script>
	import { onDestroy } from 'svelte';
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	// let count_value;

	// const unsubscribe = count.subscribe((value) => {
	// 	count_value = value;
	// });

	// //this is for avoid memory leaks
	// onDestroy(unsubscribe);
</script>

<!-- $count is for shortcut subscribe/listen store data, and without memory leaks -->
<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
