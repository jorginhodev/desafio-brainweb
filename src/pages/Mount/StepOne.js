import React from "react";
import PropTypes from "prop-types";
import { doughList } from "../../services/api";
import * as S from "./styles";

const StepOne = ({ setDough }) => {
    const [isSelected, setIsSelected] = React.useState(false);

    return (
        <>
            <h1>Tipos de massa de pizza:</h1>

            <S.RenderStep>
                {doughList.map((dough, key) => {
                    const activePosition = isSelected === key;
                    return (
                        <li
                            key={dough.id}
                            onClick={() => {
                                setDough(dough);
                                setIsSelected(key);
                                console.log(dough);
                            }}
                            data-selected={activePosition}
                        >
                            <img
                                src={dough.image}
                                alt={`Imagem de uma massa de pizza ${dough.title}`}
                            />
                            <div>
                                <h2>{dough.title}</h2>
                                <p>{dough.description}</p>
                            </div>
                        </li>
                    );
                })}
            </S.RenderStep>
        </>
    );
};

StepOne.propTypes = {
    setDough: PropTypes.func.isRequired,
};

export default StepOne;
