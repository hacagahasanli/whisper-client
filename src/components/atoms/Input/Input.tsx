import { IInput } from "./IInput"
import { IInputsByTypeObject } from "interfaces"
import { INPUTS_BY_TYPE } from "../../../constants"
import { getValueByType } from "./InputHelpers"

export const Input = ({ type, isRow, orderId }: IInput) => {
    const { label, id, placeholder }: IInputsByTypeObject = INPUTS_BY_TYPE[type]
    const { textSize, crsType, textC, appcenone, flexDir } = getValueByType(type, isRow)
    const odr = orderId || "0";

    return (
        <div>
            <div className={`flex flex-${flexDir} w-full justify-center gap-[.5rem]`}>
                <label className={`text-[${textSize}] cursor-${crsType} text-[${textC}] `} htmlFor={id}>{label}</label>
                <input
                    className={`border border-solid ${appcenone} border-input-brd order-[${odr}] cursor-${crsType} rounded-[.25rem] py-[.7rem] px-[.7rem] w-full`}
                    {...{ type, id, placeholder }}
                />
            </div>
        </div>

    )
}

