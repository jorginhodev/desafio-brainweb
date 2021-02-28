import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: #2e3236;
    width: 420px;
    height: 450px;
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

export const Benefits = styled.div`
    display: flex;
    flex-direction: column;

    span {
        display: flex;

        img {
            margin-right: 15px;
            width: 20px;

            @media (max-width: 580px) {
                margin-right: 10px;
                width: 16px;
            }
        }
    }
`;
