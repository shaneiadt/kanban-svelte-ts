import { writable } from 'svelte/store';

import type { Column } from '../interfaces';

const defaultData: Column[] = [
    {
        title: 'Backlog',
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

function createStore() {
    const { subscribe, set, update } = writable(getData());

    return {
        subscribe
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

const updateData = (data: Column[]) => {
    try {
        localStorage.setItem('kanban-items', JSON.stringify(data));
    } catch (error) {
        console.warn(error);
    }
}

export const store = createStore();