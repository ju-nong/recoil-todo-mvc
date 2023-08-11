import styled from "@emotion/styled";
import { TodoForm, TodoContainer } from "./todo";
import { todoState } from "../stores/todo";
import { useRecoilValue } from "recoil";

const TodoMainStyled = styled.main`
    max-width: 550px;
    min-width: 230px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
    color: #4d4d4d;
`;

function TodoMain() {
    const todo = useRecoilValue(todoState);

    return (
        <TodoMainStyled>
            <TodoForm />
            {todo.length ? <TodoContainer /> : null}
        </TodoMainStyled>
    );
}

export { TodoMain };
