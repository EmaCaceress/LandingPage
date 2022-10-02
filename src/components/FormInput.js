import Input from "./Input";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const FormInput = ({ inputs }) => {
    const test = useContext(UserContext);
    let i = -1;

    return (
        <div className="form">
            {
                inputs.map(obj => {
                    i++;
                    return (
                        <Input key={i} title={obj.title} input={obj.input} />
                    )
                })
            }
            <button className="form__button" type="submit" onClick={test.peticion}>Enviar</button>
        </div>
    )
}

export default FormInput;