import { toast } from "react-toastify";
import Header from "../../components/Header";
import { getLocalStorage, clearLocalStorage } from "../../utils/localStorage";
import { formatPrice } from "../../utils/format";
import Button from "../../components/Button";
import ArrowRightIcon from "../../assets/images/arrow-right.svg";
import * as S from "./styles";

const Checkout = () => {
    let totalPrice = 0;
    const getOrder =
        getLocalStorage("ORDER") || getLocalStorage("RECOMMENDATION");
    const isRecommendation = !!getLocalStorage("RECOMMENDATION");

    clearLocalStorage();

    const handleSubmitOrder = () => {
        if (isRecommendation) {
            toast.success("Pedido realizado com sucesso!", {
                position: toast.POSITION.TOP_RIGHT,
            });
            return toast.warning("Você ganhou 100 pontos!", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

        return toast.success("Pedido realizado com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    return (
        <>
            <Header />
            <S.Wrapper>
                <p className="resume">Resumo do seu pedido</p>

                <S.Details>
                    {getOrder &&
                        getOrder.map((order) => {
                            totalPrice = totalPrice + order.price;
                            return (
                                <div key={order.id}>
                                    <p>
                                        <span>{order.title}</span>
                                        <span>
                                            Valor: {formatPrice(order.price)}
                                        </span>
                                    </p>
                                </div>
                            );
                        })}

                    <hr />

                    <p className="total__price">{formatPrice(totalPrice)}</p>

                    <Button
                        to="/"
                        bgcolor="#4db193"
                        onClick={handleSubmitOrder}
                    >
                        <span>Fechar pedido</span>
                        <img
                            src={ArrowRightIcon}
                            alt="Ícone de uma seta para a direita"
                        />
                    </Button>
                </S.Details>
            </S.Wrapper>
        </>
    );
};

export default Checkout;
