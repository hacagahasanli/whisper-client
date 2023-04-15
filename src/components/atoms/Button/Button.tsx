import { Icon } from "components"
import { IAccessButton } from "./IButton"
import { buttonClasses } from "./ButtonHelper"

const AccessButton = ({ type = "button", text, onClick, hasIcon = false, bgWhite = false, width = "full" }: IAccessButton) => {
    const btnClass = buttonClasses(bgWhite, width)
    return (
        <button
            {...{ type, onClick }}
            className={btnClass}
        >
            {text}
            {hasIcon && <Icon name="arrow_right" />}
        </button>
    )
}

export { AccessButton }