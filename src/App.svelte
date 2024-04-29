<script>
	import { name, greeting } from './stores.js';
</script>

<h1>{$greeting}</h1>
<!-- $name it can be update and subscribe too -->
<input bind:value={$name} />

<button on:click={() => $name += '!'}>
	Add exclamation mark!
</button>