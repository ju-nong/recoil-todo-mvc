import { atom } from "recoil";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

const todoState = atom<Todo[]>({
    key: "todo",
    default: [],
});

export { todoState };
export type { Todo };
