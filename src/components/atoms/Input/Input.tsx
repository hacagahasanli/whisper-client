import { IInput } from "./IInput"
import { IInputsByTypeObject } from "interfaces"
import { INPUTS_BY_TYPE } from "../../../constants"
import { getValueByType } from "./InputHelpers"

export const Input = ({ inputKey, orderId }: IInput) => {
    const { label, id, placeholder, type }: IInputsByTypeObject = INPUTS_BY_TYPE[inputKey]
    const { labelClasses, inputWrapperClasses, inputClasses } = getValueByType(type, orderId)

    return (
        <div>
            <div className={inputWrapperClasses}>
                <label className={labelClasses} htmlFor={id}>{label}</label>
                <input className={inputClasses} {...{ type, id, placeholder }} />
            </div>
        </div>

    )
}

