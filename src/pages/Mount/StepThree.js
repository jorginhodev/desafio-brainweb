import React, { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { fillingList } from "../../services/api";
import * as S from "./styles";

const StepThree = () => {
    const resume = useContext(ResumeContext);
    const [isSelected, setIsSelected] = useState(false);

    const handleChange = (value, key) => {
        resume.setFilling(value);
        setIsSelected(key);
    };

    return (
        <>
            <h1>Tipos de massa de pizza:</h1>

            <S.RenderStep>
                {fillingList.map((filling, key) => {
                    const activePosition = isSelected === key;
                    return (
                        <li
                            key={filling.id}
                            onClick={() => handleChange(filling, key)}
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

export default StepThree;
