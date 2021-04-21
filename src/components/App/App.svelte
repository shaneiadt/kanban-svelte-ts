<script lang="typescript">
	import List from '../List/List.svelte';
	import { store } from '../../store';
</script>

<style>
</style>

<h1 class="main-title">Kanban Board</h1>
<div class="drag-container">
	<List data={$store} />
</div>
