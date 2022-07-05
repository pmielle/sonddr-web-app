import { v4 as uuid } from 'uuid';

export interface Goal {
    id: string,
    name: string,
    order: number,
}

export function dummyGoal(id: string = uuid(), order: number = 1): Goal {
    return {
        id: id,
        name: "Dummy goal",
        order: order,
    };
}