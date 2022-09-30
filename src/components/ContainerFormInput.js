import { useEffect, useState } from "react";
import customFetch from "../utils/CustomFetch";
import { inputs } from "../utils/Inputs";
import FormInput from "./FormInput";

const ContainerFormInput = () => {
    const [arrayInputs, setArrayInputs] = useState('');
    useEffect(() => {
        customFetch(2000, inputs)
            .then(res => setArrayInputs(res))
            .catch(rej => console.log(rej))
    }, []);
    return (
        <>
            {
                arrayInputs !== ''
                && <FormInput inputs={arrayInputs} />
            }
        </>
    )
}

export default ContainerFormInput;