import { IInput, IInputsByType } from "./IInput"
import { INPUTS_BY_TYPE } from "constants/form-related"

export const Input = ({ type }: IInput) => {
    const { label, id }: IInputsByType = INPUTS_BY_TYPE["email"]
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input {...{ type, id }} />
        </div>
    )
}