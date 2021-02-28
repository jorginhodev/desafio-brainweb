import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 60px 30px;

    p {
        font-size: 20px;
        margin-bottom: 60px;
    }
`;

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`;
