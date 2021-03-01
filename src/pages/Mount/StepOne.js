import React, { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import { doughList } from "../../services/api";
import * as S from "./styles";

const StepOne = () => {
    const resume = useContext(ResumeContext);
    const [isSelected, setIsSelected] = useState(false);

    const handleChange = (value, key) => {
        resume.setDough(value);
        setIsSelected(key);
    };

    return (
        <>
            <h1>Tipos de massa de pizza:</h1>

            <S.RenderStep>
                {doughList.map((dough, key) => {
                    return (
                        <li
                            key={dough.id}
                            onClick={() => handleChange(dough, key)}
                            data-selected={isSelected === key}
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

export default StepOne;
