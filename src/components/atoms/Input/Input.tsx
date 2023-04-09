import { IInput } from "./IInput"
import { IInputsByTypeObject } from "interfaces"
import { INPUTS_BY_TYPE } from "../../../constants"

export const Input = ({ type, isRow, orderId }: IInput) => {
    const { label, id, placeholder }: IInputsByTypeObject = INPUTS_BY_TYPE[type]

    const isCheckbox = type === "checkbox"
    const flexD = isRow ? "flex-row" : "flex-col";
    const odr = orderId ? orderId : "0";
    const textSize = isCheckbox ? '1rem' : '1.2rem'
    const crsType = isCheckbox ? "pointer" : "auto"

    return (
        <div className={`flex ${flexD} w-full justify-center gap-[.5rem]`}>
            <label className={`text-[${textSize}] cursor-${crsType}`} htmlFor={id}>{label}</label>
            <input
                className={`border border-solid border-input-brd order-[${odr}] cursor-${crsType} rounded-[.25rem] py-[.7rem] px-[.7rem] w-full`}
                {...{ type, id, placeholder }}
            />
        </div>
    )
}