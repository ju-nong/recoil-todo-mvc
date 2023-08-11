import styled from "@emotion/styled";

const TodoFooterStyled = styled.footer`
    margin-top: 65px;
    text-align: center;
    font-size: 10px;
    line-height: 2;

    > p {
        color: #bfbfbf;
    }

    a {
        color: inherit;
    }
`;

function TodoFooter() {
    return (
        <TodoFooterStyled>
            <p>더블클릭해서 할 일을 수정하세요.</p>
            <p>만든이 이준용</p>
            <p>
                Copyright{" "}
                <a href="https://todomvc.com/examples/react/#/" target="_blank">
                    TodoMVC
                </a>
            </p>
        </TodoFooterStyled>
    );
}

export { TodoFooter };
