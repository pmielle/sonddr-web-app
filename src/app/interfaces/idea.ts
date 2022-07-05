import { dummyGoal, Goal } from "./goal";
import { dummyUser, User } from "./user";
import { v4 as uuid } from 'uuid';

export interface Idea {
    id: string,
    title: string,
    author: User,
    goals: Goal[],
    rating: number,
    date: Date,
    cover: string,
}

export function dummyIdea(): Idea {
    return {
        id: uuid(),
        title: "Dummy idea",
        author: dummyUser,
        goals: [
            dummyGoal("no_poverty", 1),
            dummyGoal("decent_work", 2),
        ],
        rating: 66,
        date: new Date(),
        cover: '/assets/placeholders/cover-picture.png',
    }
}
