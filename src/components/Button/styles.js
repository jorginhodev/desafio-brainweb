import styled, { css } from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    max-width: 300px;
    width: 100%;
    height: 50px;
    background: ${(props) => props.color};
    color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.4s;

    &:hover {
        ${(props) =>
            props.color &&
            css`
                background: ${darken(0.05, props.color)};
            `}
    }

    img {
        width: 18px;
        margin-top: 3px;
        margin-left: 3px;
    }
`;
