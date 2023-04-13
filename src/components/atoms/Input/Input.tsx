import { IInput } from "./IInput"
import { IInputsByTypeObject } from "interfaces"
import { INPUTS_BY_TYPE } from "../../../constants"
import { getValueByType } from "./InputHelpers"

export const Input = ({ inputKey, isRow, orderId }: IInput) => {
    const { label, id, placeholder, type }: IInputsByTypeObject = INPUTS_BY_TYPE[inputKey]
    const { textSize, crsType, textC, newappearence, flexDir } = getValueByType(type, isRow)
    const odr = orderId || "0";

    return (
        <div>
            <div className={`flex flex-${flexDir} w-full justify-center gap-[.5rem]`}>
                <label className={`text-[${textSize}] cursor-${crsType} text-[${textC}] `} htmlFor={id}>{label}</label>
                <input
                    className={`border border-solid ${newappearence} border-input-brd order-[${odr}] cursor-${crsType} rounded-[.25rem] py-[.7rem] px-[.7rem] w-full bg-white`}
                    {...{ type, id, placeholder }}
                />
            </div>
        </div>

    )
}

