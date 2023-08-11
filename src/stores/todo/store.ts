import { Todo } from "./type";
import { filterState } from "../filter";
import { atom, selector } from "recoil";

const todoState = atom<Todo[]>({
    key: "todo",
    default: [],
});

// 필터링된 Todo
const getFiltered = selector({
    key: "getFilteredTodo",
    get: ({ get }) => {
        const filter = get(filterState);
        const todo = get(todoState);

        switch (filter) {
            case "active":
                return todo.filter((item) => !item.completed);
            case "completed":
                return todo.filter((item) => item.completed);
            default:
                return todo;
        }
    },
});

// Completed된 Todo
const getCompleted = selector({
    key: "getCompletedTodo",
    get: ({ get }) => {
        const todo = get(todoState);

        return todo.filter((item) => item.completed);
    },
});

// 모두 Completed 됐는지
const getIsAllCompleted = selector({
    key: "isAllCompleted",
    get: ({ get }) => {
        const todo = get(todoState);

        return todo.length ? todo.every((item) => item.completed) : false;
    },
});

export { todoState, getFiltered, getCompleted, getIsAllCompleted };
