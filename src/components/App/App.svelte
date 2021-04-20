<script lang="typescript">
	import List from '../List/List.svelte';
	import type { Column } from '../../interfaces';

	const data: Column[] = [
		{
			title: 'Backlog 1',
			cssClass: 'backlog',
			items: [
				{
					title: 'Test'
				},
				{
					title: 'Testing'
				}
			]
		},
		{
			title: 'In Progress',
			cssClass: 'progress',
			items: [
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				},
				{
					title: 'Test'
				}
			]
		},
		{
			title: 'Complete',
			cssClass: 'complete',
			items: [
				{
					title: 'Test'
				},
				{
					title: 'Test'
				}
			]
		},
		{
			title: 'On Hold',
			cssClass: 'on-hold',
			items: [
				{
					title: 'Test'
				},
				{
					title: 'Test'
				}
			]
		}
	];
</script>

<style>
</style>

<h1 class="main-title">Kanban Board</h1>
<div class="drag-container">
	<List data={data} />
</div>
