import Button from "../Button";
import PizzaImg from "../../assets/images/pizza.svg";
import ArrowRightIcon from "../../assets/images/arrow-right.svg";
import * as S from "./styles";

const CardRecommendation = () => {
    return (
        <S.Wrapper>
            <h1>
                Escolha a recomendação do dia e ganhe{" "}
                <strong>100 pontos</strong>!
            </h1>

            <img src={PizzaImg} alt="Ilustração de uma pizza" />

            <S.Information>
                <span>Pizza à Moda da Casa</span>

                <span>Valor: R$ 49,00</span>
            </S.Information>

            <Button to="/checkout" bgcolor="#4CD62B">
                <span>Recomendação</span>
                <img
                    src={ArrowRightIcon}
                    alt="Ícone de uma seta para a direita"
                />
            </Button>
        </S.Wrapper>
    );
};

export default CardRecommendation;
