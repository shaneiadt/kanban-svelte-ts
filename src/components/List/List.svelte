<script lang="typescript">
	import ListItem from './ListItem/ListItem.svelte';
    import { store } from '../../store';
</script>

<ul class="drag-list">
    {#each $store as column (column.title)}
        <ListItem column={column} />
    {/each}
</ul>