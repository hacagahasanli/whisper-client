import { AccessButton } from "components"
import { useNavigate } from "react-router-dom"

export const AccessSection = () => {
    const navigate = useNavigate()
    return (
        <div className="flex gap-[2rem] items-center">
            <span className="text-gray-blue text-[1.2rem] cursor-pointer" onClick={() => navigate("/login")}>Login</span>
            <AccessButton text={"Try free"} bgWhite hasIcon />
        </div>
    )
}