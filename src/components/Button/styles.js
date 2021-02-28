import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    max-width: 300px;
    width: 100%;
    height: 50px;
    background: #5965e0;
    color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    img {
        width: 18px;
        margin-top: 3px;
        margin-left: 3px;
    }
`;
