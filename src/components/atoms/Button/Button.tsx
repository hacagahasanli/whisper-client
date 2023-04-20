import { Icon } from "components"
import { IAccessButton, ITransparentButton } from "./IButton"
import { buttonClasses } from "./ButtonHelper"

const AccessButton = ({ type = "button", text, onClick, hasIcon = false, bgWhite = false, classes = "" }: IAccessButton) => {
    const btnClass = buttonClasses(bgWhite)
    const extraClass = classes ? classes : "rounded-md px-6"
    return (
        <button
            {...{ type, onClick }}
            className={`${btnClass} ${extraClass}`}
        >
            {text}
            {hasIcon && <Icon name="arrow_right" />}
        </button>
    )
}

export const TransparentButton = ({ type = "button", onClick, classes, text }: ITransparentButton) => {
    return (
        <button
            {...{ type, onClick }}
            className={`${classes} text-[.85rem] font-bold bg-transparent border border-solid rounded-[0.5rem] w-full py-[.3rem]`}
        >
            {text}
        </button>
    )
}

export { AccessButton }