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

export const RenderSteps = styled.section`
    width: 720px;
    height: 700px;
    margin: 0 auto;
    background: #2e3236;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
        text-transform: uppercase;
        font-size: 20px;

        @media (max-width: 580px) {
            font-size: 16px;
        }
    }
`;
