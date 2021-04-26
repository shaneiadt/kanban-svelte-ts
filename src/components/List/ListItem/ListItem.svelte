<script lang="typescript">
	import type { Column, Item } from '../../../interfaces';
    import { store } from '../../../store';

    export let column: Column;

    let draggedFrom: { fromColumn: Column, itemDragged: Item } | null = null;

    function drag(e: DragEvent){
        if(e.dataTransfer && e.target){
            const target = e.target as HTMLLIElement;

            if(target.textContent){
                e.dataTransfer.setData("text", target.textContent);
            }
        }
    }

    function allowDrop(e: Event){
        e.preventDefault();
    }

    function drop(e: DragEvent){
        e.preventDefault();

        if(!e.dataTransfer) return;
        
        console.log(e.dataTransfer.getData('text'));

        const data = [...$store];

        for(let col of data){
            const el = document.querySelector(`#${col.cssClass}-list`) as HTMLUListElement;

            el.classList.remove('over');
        }

        // draggedFrom = null;
    }

    function dragEnter(column: Column){
        const list = document.querySelector(`#${column.cssClass}-list`) as HTMLUListElement;

        list.classList.add('over');
    }
</script>

<li class={`drag-column rounded-lg relative flex-1 overflow-x-hidden mx-1 bg-black bg-opacity-40 ${column.cssClass}-column`}>
    <span class="header">
        <h1 class="p-2">{column.title}</h1>
    </span>
    <div id={`${column.cssClass}-content`} class="custom-scroll">
        <ul class="drag-item-list" id={`${column.cssClass}-list`} on:drop={drop} on:dragover={allowDrop} on:dragenter={() => dragEnter(column)}>
            {#each column.items as item, i}
                <li class="drag-item" draggable="true" on:dragstart={drag}>{item.title}</li>
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