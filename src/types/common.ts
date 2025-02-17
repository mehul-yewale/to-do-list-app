export interface TodoItem {
    title: string;
    taskDetail: string;
    completed: boolean;
    id: number;
};

export type FilterType = 'ALL' | 'ACTIVE' | 'COMPLETED';

export enum FilterTypeEnum {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED'
};

