import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Header from "../../components/Header";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import * as S from "./styles";

const Mount = () => {
    const [dough, setDough] = React.useState(undefined);
    const [size, setSize] = React.useState(undefined);
    const [filling, setFilling] = React.useState(undefined);

    function stepOneValidator() {
        if (dough) return true;
        alert("selecione um item");
    }

    function stepTwoValidator() {
        if (size) return true;
    }

    function stepThreeValidator() {
        if (filling) return true;
    }

    function onSubmit() {
        console.log("dados da pizza");
        console.log(`Massa: ${dough}`);
        console.log(`Tamanho: ${size}`);
        console.log(`Recheio: ${filling}`);
        alert("submit data");
    }

    return (
        <>
            <Header />
            <S.Wrapper>
                <h2 className="mount__title">Monte sua Pizza</h2>

                <S.RenderSteps>
                    <StepProgressBar
                        startingStep={0}
                        onSubmit={onSubmit}
                        wrapperClass="progressBar"
                        contentClass="contentStep"
                        previousBtnName="Anterior"
                        secondaryBtnClass="previousBtn"
                        nextBtnName="Próximo"
                        primaryBtnClass="nextBtn"
                        steps={[
                            {
                                label: "Escolher a massa",
                                name: "step 1",
                                content: <StepOne setDough={setDough} />,
                                validator: stepOneValidator,
                            },
                            {
                                label: "Escolher o Tamanho",
                                name: "step 2",
                                content: <StepTwo setSize={setSize} />,
                                validator: stepTwoValidator,
                            },
                            {
                                label: "Escolher o Recheio",
                                name: "step 3",
                                content: <StepThree setFilling={setFilling} />,
                                validator: stepThreeValidator,
                            },
                        ]}
                    />
                </S.RenderSteps>
            </S.Wrapper>
        </>
    );
};

export default Mount;
