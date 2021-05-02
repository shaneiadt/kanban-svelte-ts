import { writable } from 'svelte/store';

import type { Column } from '../interfaces';

const defaultData: Column[] = [
    {
        title: 'Backlog',
        cssClass: 'backlog',
        items: [
            {
                id: 1,
                title: 'Test'
            },
            {
                id: 2,
                title: 'Testing'
            }
        ]
    },
    {
        title: 'In Progress',
        cssClass: 'progress',
        items: [
            {
                id: 3,
                title: 'Test'
            },
            {
                id: 4,
                title: 'Test'
            },
            {
                id: 5,
                title: 'Test'
            },
            {
                id: 6,
                title: 'Test'
            },
        ]
    },
    {
        title: 'Complete',
        cssClass: 'complete',
        items: [
            {
                id: 7,
                title: 'Test'
            },
            {
                id: 8,
                title: 'Test'
            }
        ]
    },
    {
        title: 'On Hold',
        cssClass: 'on-hold',
        items: [
            {
                id: 9,
                title: 'Test'
            },
            {
                id: 10,
                title: 'Test'
            }
        ]
    }
];

function createStore() {
    const { subscribe, update } = writable(getData());

    return {
        subscribe,
        updateBoard: (newBoard: Column[]) => {
            saveData(newBoard);
            update(board => board = newBoard);
        }
    };
}

const getData = (): Column[] => {
    const storage = localStorage.getItem('kanban-items');

    if (storage) {
        try {
            return JSON.parse(storage)
        } catch (error) {
            console.warn(error);
            return defaultData;
        }
    }

    return defaultData;
}

const saveData = (data: Column[]) => {
    try {
        localStorage.setItem('kanban-items', JSON.stringify(data));
    } catch (error) {
        console.warn(error);
    }
}

export const store = createStore();