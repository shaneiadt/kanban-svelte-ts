<script lang="typescript">
	import type { Column } from '../../../interfaces';

    export let column: Column;
    // console.log(column);
</script>

<li class={`drag-column rounded-lg relative flex-1 overflow-x-hidden mx-1 bg-black bg-opacity-40 ${column.cssClass}-column`}>
    <span class="header">
        <h1 class="p-2">{column.title}</h1>
    </span>
    <div id={`${column.cssClass}-content`} class="custom-scroll">
        <ul class="drag-item-list" id={`${column.cssClass}-list`}>
            {#each column.items as item, i}
                <li class="drag-item">{item.title}</li>
            {/each}
        </ul>
    </div>
    <div class="add-btn-group">
        <div class="add-btn">
            <span class="plus-sign">+</span>
            <span>Add Item</span>
        </div>
        <div class="add-btn solid">
            <span>Save Item</span>
        </div>
        <div class="add-container">
            <div class="add-item"></div>
        </div>
    </div>
</li>