export interface Column {
    title: string;
    cssClass: string;
    items: Item[];
};

export interface Item {
    id: number;
    title: string;
};