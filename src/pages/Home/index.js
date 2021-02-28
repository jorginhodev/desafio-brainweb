import Header from "../../components/Header";
import CardMount from "../../components/CardMount";
import CardRecommendation from "../../components/CardRecommendation";
import * as S from "./styles";

const Home = () => {
    return (
        <>
            <Header />
            <S.Wrapper>
                <p>Bem vindo(a) a Brain Pizzaria</p>
                <S.Cards>
                    <CardMount />
                    <CardRecommendation />
                </S.Cards>
            </S.Wrapper>
        </>
    );
};

export default Home;
