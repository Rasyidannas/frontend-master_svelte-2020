<script>
	let count = 0;
	//this is a reactive declaration that will update the doubled variable whenever the count variable changes
	$: if(count >= 10) {
		alert(`count is dangerously high!`)
		count = 9
	};

	function increment() {
    count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
