import styled from "@emotion/styled";
import { TodoItem } from ".";
import { getFiltered } from "../../stores/todo";
import { useRecoilValue } from "recoil";

const TodoListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
`;

function TodoList() {
    const filtered = useRecoilValue(getFiltered);
    return (
        <TodoListStyled>
            {filtered.map((item) => (
                <TodoItem key={item.id} todo={item} />
            ))}
        </TodoListStyled>
    );
}

export { TodoList };
