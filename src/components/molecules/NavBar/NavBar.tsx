import { Icon } from "components"
import { NavTabs, AccessSection } from './ExtractedComponents';

export const Navbar = () => {
    return (
        <header className="flex justify-between items-center max-w-[1280px] mx-auto min-h-[70px]">
            <div>
                <Icon name="logo_light" width="90" height="86" />
            </div>
            <NavTabs />
            <AccessSection />
        </header>
    )
}