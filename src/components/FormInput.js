import Input from "./Input";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const FormInput = ({ inputs }) => {
    const test = useContext(UserContext);
    const [objData, setObjData] = useState({});
    let i = -1;

    const onAdd = (data) => {
        test.addToUser(data)
    }

    return (
        <form className="form">
            {
                inputs.map(obj => {
                    console.log("hola" + i)
                    i++;
                    return (
                        <Input key={i} title={obj.title} input={obj.input} i={i} setObj={setObjData} />
                    )

                })
            }
            <button className="form__button" type="submit" onClick={onAdd(objData)}>Enviar</button>
        </form>
    )
}

export default FormInput;