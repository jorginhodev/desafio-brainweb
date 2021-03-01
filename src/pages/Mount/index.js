import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { ResumeContext } from "../../context/ResumeContext";
import { getLocalStorage } from "../../utils/localStorage";
import * as S from "./styles";

const Mount = () => {
    const resume = useContext(ResumeContext);
    const history = useHistory();

    const stepOneValidator = () => {
        const dough = getLocalStorage("DOUGH");
        if (!dough) {
            toast.error("Favor escolher um tipo de massa", {
                position: toast.POSITION.TOP_RIGHT,
            });
            return false;
        }
        return true;
    };

    const stepTwoValidator = () => {
        const size = getLocalStorage("SIZE");
        if (!size) {
            toast.error("Favor escolher um tamanho", {
                position: toast.POSITION.TOP_RIGHT,
            });
            return false;
        }
        return true;
    };

    const stepThreeValidator = () => {
        const filling = getLocalStorage("FILLING");
        if (!filling) {
            toast.error("Favor escolher um recheio", {
                position: toast.POSITION.TOP_RIGHT,
            });
            return false;
        }
        return true;
    };

    function onSubmit() {
        resume.setOrder([resume.dough, resume.size, resume.filling]);
        history.push("/checkout");
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
                                content: <StepOne />,
                                validator: stepOneValidator,
                            },
                            {
                                label: "Escolher o Tamanho",
                                name: "step 2",
                                content: <StepTwo />,
                                validator: stepTwoValidator,
                            },
                            {
                                label: "Escolher o Recheio",
                                name: "step 3",
                                content: <StepThree />,
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
