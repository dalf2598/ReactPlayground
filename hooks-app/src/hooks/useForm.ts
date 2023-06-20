import { useState } from "react";
import Form from "../models/Form";

interface InputChangeEvent {
    target: HTMLInputElement;
}

const useForm = (initialState : Form) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target } : InputChangeEvent) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return { values, handleInputChange };
}

export default useForm;