import React, { createContext, useState } from "react";
import { setLocalStorage } from "../utils/localStorage";

export const ResumeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ResumeProvider = ({ children }) => {
    const [dough, setDough] = useState();
    const [size, setSize] = useState();
    const [filling, setFilling] = useState();
    const [order, setOrder] = useState();

    if (dough) {
        setLocalStorage("DOUGH", dough);
    }
    if (size) {
        setLocalStorage("SIZE", size);
    }
    if (filling) {
        setLocalStorage("FILLING", filling);
    }
    if (order) {
        setLocalStorage("ORDER", order);
    }

    return (
        <ResumeContext.Provider
            value={{
                dough,
                size,
                filling,
                order,
                setDough,
                setSize,
                setFilling,
                setOrder,
            }}
        >
            {children}
        </ResumeContext.Provider>
    );
};
