import { AccessButton, Icon } from "components"
import { NavTabs } from './ExtractedComponents';

export const Navbar = () => {

    return (
        <header className="flex justify-between items-center max-w-[1280px] mx-auto min-h-[70px]">
            <div>
                <Icon name="logo_light" width="90" height="86" />
            </div>
            <NavTabs />
            <div className="flex gap-[2rem] items-center">
                <span className="text-gray-blue text-[1.2rem] cursor-pointer">Login</span>
                <AccessButton text={"Try free"} bgWhite hasIcon width="" />
            </div>
        </header>
    )
}