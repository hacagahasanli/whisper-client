import { IInput } from "./IInput"
import { IInputsByTypeObject } from "interfaces"
import { INPUTS_BY_TYPE } from "../../../constants"

export const Input = ({ type, isRow, orderId }: IInput) => {
    const { label, id, placeholder }: IInputsByTypeObject = INPUTS_BY_TYPE[type]
    const textSize = getFontSize(type);
    const crsType = getCursorType(type);
    const textC = getTextColor(type);

    const flexD = isRow ? "row" : "col";
    const odr = orderId || "0";

    return (
        <div>
            <div className={`flex flex-${flexD} w-full justify-center gap-[.5rem]`}>
                <label className={`text-[${textSize}] cursor-${crsType} text-[${textC}] `} htmlFor={id}>{label}</label>
                <input
                    className={`border border-solid border-input-brd order-[${odr}] cursor-${crsType} rounded-[.25rem] py-[.7rem] px-[.7rem] w-full`}
                    {...{ type, id, placeholder }}
                />
            </div>
        </div>

    )
}

function getFontSize(type:string) {
    return type === "checkbox" ? "1rem" : "1.2rem";
}

function getCursorType(type:string) {
    return type === "checkbox" ? "pointer" : "auto";
}

function getTextColor(type:string) {
    return type === "checkbox" ? "gray-600" : "";
}

