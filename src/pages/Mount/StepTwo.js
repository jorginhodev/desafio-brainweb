import React, { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { sizeList } from "../../services/api";
import * as S from "./styles";

const StepTwo = () => {
    const resume = useContext(ResumeContext);
    const [isSelected, setIsSelected] = useState(false);

    const handleChange = (value, key) => {
        resume.setSize(value);
        setIsSelected(key);
    };

    return (
        <>
            <h1>Escolha um tamanho de pizza:</h1>

            <S.RenderStep>
                {sizeList.map((size, key) => {
                    const activePosition = isSelected === key;
                    return (
                        <li
                            key={size.id}
                            onClick={() => handleChange(size, key)}
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

export default StepTwo;
