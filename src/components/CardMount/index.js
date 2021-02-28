import Button from "../Button";
import PizzaImg from "../../assets/images/pizza.svg";
import CheckIcon from "../../assets/images/check.svg";
import ArrowRightIcon from "../../assets/images/arrow-right.svg";
import * as S from "./styles";

const CardMount = () => {
    return (
        <S.Wrapper>
            <h1>Monte sua Pizza</h1>

            <img src={PizzaImg} alt="Ilustração de uma pizza" />

            <S.Benefits>
                <span>
                    <img src={CheckIcon} alt="Ícone de checkbox" />
                    Escolha o tipo de massa
                </span>

                <span>
                    <img src={CheckIcon} alt="Ícone de checkbox" />
                    Escolha o recheio
                </span>
            </S.Benefits>

            <Button to="/mount" bgcolor="#5965e0">
                <span>Monte sua Pizza</span>
                <img
                    src={ArrowRightIcon}
                    alt="Ícone de uma seta para a direita"
                />
            </Button>
        </S.Wrapper>
    );
};

export default CardMount;
