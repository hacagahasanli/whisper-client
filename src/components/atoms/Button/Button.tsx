import { IAccessButton } from "./IButton"

const AccessButton = ({ type = "button", text, onClick }: IAccessButton) => (
    <button
        {...{ type, onClick }}
        className={`w-full px-20 bg-default-bg text-[1.2rem] rounded-md text-white min-h-[3rem]`}
    >
        {text}
    </button>
)

export { AccessButton }