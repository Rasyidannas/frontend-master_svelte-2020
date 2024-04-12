<script>
  import Nested from './Nested.svelte';
</script>

<p>This is a paragraph.</p>
<Nested />

<style>
  /* :global() will set for all components */
  :global(p) {
    color: purple;
    font-size: 'Comic sans MS', cursive;
    font-size: 2em;
  }
</style>
