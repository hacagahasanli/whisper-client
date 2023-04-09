import { IAccessButton } from "./IButton"

const AccessButton = ({ type = "button", text, onClick }: IAccessButton) => (
    <button
        {...{ type, onClick }}
        className="w-full min-h-full px-20 bg-default-bg text-4xl text-white"
    >
        {text}
    </button>
)

export { AccessButton }