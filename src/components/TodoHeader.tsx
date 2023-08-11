import styled from "@emotion/styled";

const TodoHeaderStyled = styled.header`
    font-size: 100px;
    font-weight: 400;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
`;

function TodoHeader() {
    return <TodoHeaderStyled>todos</TodoHeaderStyled>;
}

export { TodoHeader };
