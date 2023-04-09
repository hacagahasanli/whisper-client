import { IInput } from "./IInput"
import { IInputsByTypeObject } from "interfaces"
import { INPUTS_BY_TYPE } from "../../../constants"

export const Input = ({ type }: IInput) => {
    const { label, id }: IInputsByTypeObject = INPUTS_BY_TYPE[type]
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <input
                className="border border-solid border-input-brd rounded-sm "
                {...{ type, id }}
            />
        </div>
    )
}