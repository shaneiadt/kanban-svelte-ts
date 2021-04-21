<script lang="typescript">
	import List from '../List/List.svelte';
	import { store } from '../../store';

	function update(){
		const data = $store;
		data[0].items[0].title = 'BOOM';
		store.updateBoard(data);
	}
</script>

<style>
</style>

<h1 class="main-title">Kanban Board</h1>
<button on:click={update}>UPDATE</button>
<div class="drag-container">
	<List data={$store} />
</div>
