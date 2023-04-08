import { IAccessButton } from "./IButton"

const AccessButton = ({ type = "button", text, onClick }: IAccessButton) => (
    <button
        {...{ type, onClick }}
        className="w-full min-h-full px-20 bg-access-btn-bg text-2xl text-white"
    >
        {text}
    </button>
)

export { AccessButton }