<script>
  import { createEventDispatcher } from 'svelte';
	import Inner from './Inner.svelte';
</script>

<!-- in here you need add on:message for Outer component can access the event createEventDispatcher, because event dipatcher/createEventDIspatcher don't bubble -->
<Inner on:message/>
