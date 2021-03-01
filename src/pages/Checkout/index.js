import Header from "../../components/Header";
import * as S from "./styles";

const Checkout = () => {
    return (
        <>
            <Header />
            <S.Wrapper>
                <p>Checkout</p>
                <S.RenderSteps>dados</S.RenderSteps>
            </S.Wrapper>
        </>
    );
};

export default Checkout;
