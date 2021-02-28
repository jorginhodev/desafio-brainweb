import React from "react";
import PropTypes from "prop-types";
import { fillingList } from "../../services/api";
import * as S from "./styles";

const StepThree = ({ setFilling }) => {
    const [isSelected, setIsSelected] = React.useState(false);

    return (
        <>
            <h1>Tipos de massa de pizza:</h1>

            <S.RenderStep>
                {fillingList.map((filling, key) => {
                    const activePosition = isSelected === key;
                    return (
                        <li
                            key={filling.id}
                            onClick={() => {
                                setFilling(filling);
                                setIsSelected(key);
                                console.log(filling);
                            }}
                            data-selected={activePosition}
                        >
                            <img
                                src={filling.image}
                                alt={`Imagem de uma massa de pizza ${filling.title}`}
                            />
                            <div>
                                <h2>{filling.title}</h2>
                                {filling.description && (
                                    <p>{filling.description}</p>
                                )}
                            </div>
                        </li>
                    );
                })}
            </S.RenderStep>
        </>
    );
};

StepThree.propTypes = {
    setFilling: PropTypes.func.isRequired,
};

export default StepThree;
