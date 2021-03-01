import Header from "../../components/Header";
import * as S from "./styles";

const Mount = () => {
    return (
        <>
            <Header />
            <S.Wrapper>
                <p>Recomendação do dia</p>
                <S.RenderSteps>passos</S.RenderSteps>
            </S.Wrapper>
        </>
    );
};

export default Mount;
