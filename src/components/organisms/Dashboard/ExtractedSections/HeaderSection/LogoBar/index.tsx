import { Icon } from "components"
import { memo } from "react"

export const LogoBar = memo(() => {
    return (
        <div className="flex items-center w-[245px]">
            <Icon name="logo_dark" />
        </div>
    )
})