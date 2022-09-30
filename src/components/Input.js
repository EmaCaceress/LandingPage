import { useState } from "react"


const Input = ({ title, input, i, setObj }) => {
    const [array, setArray] = useState([]);

    const onChange = event => {
        console.log(event.target.value + event.target.name)
        setObj(event.target.name = event.target.value)
    }

    return (
        <div className="form__group">
            <label className="form__label">{title}</label>
            <input className="form__input" name={input} onChange={onChange} />
        </div>
    )
}

export default Input;