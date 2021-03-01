import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 60px 30px;

    .resume {
        font-size: 20px;
        margin-bottom: 60px;
    }
`;

export const Details = styled.section`
    max-width: 720px;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background: #2e3236;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 720px) {
        padding: 10px;
    }

    div {
        width: 100%;
        padding: 15px;

        &:nth-of-type(2) {
            background-color: #212529;
        }

        p {
            display: flex;
            justify-content: space-between;

            @media (max-width: 720px) {
                flex-direction: column;
            }
        }
    }

    hr {
        margin: 40px 0 10px;
        width: 100%;
    }

    .total__price {
        width: 100%;
        padding-right: 15px;
        text-align: right;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 40px;
    }
`;
