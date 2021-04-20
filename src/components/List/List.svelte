<script lang="typescript">
	import ListItem from './ListItem/ListItem.svelte';
    import type { Column } from '../../interfaces';

    export let data: Column[];
    console.log(data);
</script>

<ul class="drag-list">
    {#each data as column (column.title)}
        <ListItem column={column} />
    {/each}
</ul>