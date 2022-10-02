import { useContext } from "react";
import { UserContext } from "./UserContext";

const Input = ({ title, input }) => {
    const test = useContext(UserContext);

    const onChange = event => {
        let name = event.target.name
        let value = event.target.value
        test.addToUser(Object.defineProperty(test.userData, name, { value: value, writable: true }))
    }

    return (
        <div className="form__group">
            <label className="form__label">{title}</label>
            <input className="form__input" name={input} onChange={onChange} />
        </div>
    )
}

export default Input;