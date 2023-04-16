import { AccessButton } from "components"

export const AccessSection = () => {
    return (
        <div className="flex gap-[2rem] items-center">
            <span className="text-gray-blue text-[1.2rem] cursor-pointer">Login</span>
            <AccessButton text={"Try free"} bgWhite hasIcon width="" />
        </div>
    )
}