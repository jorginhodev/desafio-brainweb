import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 60px 30px;

    .mount__title {
        margin-bottom: 60px;
    }
`;

export const RenderSteps = styled.section`
    max-width: 720px;
    width: 100%;
    min-height: 700px;
    margin: 0 auto;
    background: #2e3236;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 560px) {
        padding: 0;
    }

    .progressBar {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 560px) {
            padding: 15px 10px;
        }
    }

    .contentStep {
        margin-top: 80px;
    }

    .previousBtn {
        background-color: #bb392d;
        border: none;

        &:hover {
            background: rgba(187, 57, 45, 0.6);
            box-shadow: none;
        }
    }

    .nextBtn {
        background-color: #4db193;
        border: none;

        &:hover {
            background: rgba(77, 177, 147, 0.6);
            box-shadow: none;
        }
    }

    h1 {
        text-transform: uppercase;
        font-size: 20px;

        @media (max-width: 580px) {
            font-size: 16px;
            margin-bottom: 40px;
        }
    }
`;

export const RenderStep = styled.ul`
    list-style: none;

    li {
        display: flex;
        background: #212529;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin: 20px 0;
        height: 130px;

        @media (max-width: 720px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 280px;
        }

        @media (max-width: 580px) {
            height: 320px;
        }
        @media (max-width: 480px) {
            height: 360px;
        }

        &[data-selected="true"] {
            border: 3px solid orange;
        }

        img {
            width: 200px;
            object-fit: contain;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 15px;

            @media (max-width: 720px) {
                margin-top: 20px;
            }

            h2 {
                font-size: 22px;
            }

            p {
                font-size: 16px;
            }
        }
    }
`;

export const RenderStepTwo = styled.li``;

export const RenderStepThree = styled.li``;
