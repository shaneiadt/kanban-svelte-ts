<script lang="typescript">
	import type { Column, Item } from '../../../interfaces';
    import { store } from '../../../store';

    export let column: Column;

    function drag(e: DragEvent){
        if(e.dataTransfer && e.target){
            const target = e.target as HTMLLIElement;
            const id = target.getAttribute('data-item-id');

            if(!id) return;

            console.log(id);
            e.dataTransfer.setData("text", id);
        }
    }

    function allowDrop(e: Event){
        e.preventDefault();
    }

    function findItemColumn(id: string) {
        return [...$store].filter(col => {
            const find = col.items.find(i => i.id.toString() === id);

            if(find) return find;
        })[0];
    }

    function drop(e: DragEvent){
        e.preventDefault();

        const moveToColumn = e.target as Element;

        if(!e.dataTransfer || !moveToColumn.parentElement) return;

        const itemId = e.dataTransfer.getData('text');

        console.log(moveToColumn.parentElement.getAttribute('id'), itemId, findItemColumn(itemId));

        const movedItem = findItemColumn(itemId).items.filter(i => i.id.toString() === itemId);

        const data = [...$store];

        for(let col of data){
            const el = document.querySelector(`#${col.cssClass}-list`) as HTMLUListElement;

            el.classList.remove('over');

            if(`${col.cssClass}-content` === moveToColumn.parentElement.getAttribute('id')){
                col.items = [
                    ...col.items,
                    ...movedItem
                ];
                /*data.forEach(c => {
                    const index = c.items.findIndex(dc => dc.id.toString() === itemId);

                    c.items = [
                        ...c.items.filter(i => i.id.toString() !== itemId)
                    ];
                });*/
            }
        }

        store.updateBoard(data);
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
                <li class="drag-item" data-item-id={item.id} draggable="true" on:dragstart={drag}>{item.title}</li>
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