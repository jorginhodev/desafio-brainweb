import React from "react";
import PropTypes from "prop-types";
import { sizeList } from "../../services/api";
import * as S from "./styles";

const StepTwo = ({ setSize }) => {
    const [isSelected, setIsSelected] = React.useState(false);

    return (
        <>
            <h1>Tipos de massa de pizza:</h1>

            <S.RenderStep>
                {sizeList.map((size, key) => {
                    const activePosition = isSelected === key;
                    return (
                        <li
                            key={size.id}
                            onClick={() => {
                                setSize(size);
                                setIsSelected(key);
                                console.log(size);
                            }}
                            data-selected={activePosition}
                        >
                            <img
                                src={size.image}
                                alt={`Imagem de uma massa de pizza ${size.title}`}
                            />
                            <div>
                                <h2>{size.title}</h2>
                                {size.description && <p>{size.description}</p>}
                            </div>
                        </li>
                    );
                })}
            </S.RenderStep>
        </>
    );
};

StepTwo.propTypes = {
    setSize: PropTypes.func.isRequired,
};

export default StepTwo;
