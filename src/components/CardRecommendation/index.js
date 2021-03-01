import Button from "../Button";
import { setLocalStorage } from "../../utils/localStorage";
import PizzaImg from "../../assets/images/pizza.svg";
import ArrowRightIcon from "../../assets/images/arrow-right.svg";
import * as S from "./styles";

const CardRecommendation = () => {
    const dataRecommendation = [
        {
            price: 12,
            title: "Napolitana",
            id: 1,
        },
        {
            price: 12,
            title: "Pizza Grande - 12 Pedaços",
            id: 2,
        },
        {
            price: 7,
            title: "Frango c/ catupiry",
            id: 3,
        },
    ];

    return (
        <S.Wrapper>
            <h1>
                Escolha a recomendação do dia e ganhe{" "}
                <strong>100 pontos</strong>!
            </h1>

            <img src={PizzaImg} alt="Ilustração de uma pizza" />

            <S.Information>
                <span>Pizza à Moda da Casa</span>

                <span>Valor: R$ 31,00</span>
            </S.Information>

            <Button
                to="/checkout"
                bgcolor="#4db193"
                onClick={() =>
                    setLocalStorage("RECOMMENDATION", dataRecommendation)
                }
            >
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
