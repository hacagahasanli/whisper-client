import { AccessButton, Icon } from "components"
import { INavList } from "./INavbar"

export const Navbar = () => {
    const navLists: INavList[] = [
        {
            id: "overview_125",
            name: "Overview"
        },
        {
            id: "howitworks_125",
            name: "How it works"
        },
        {
            id: "feature_125",
            name: "Feature"
        },
        {
            id: "pricing_125",
            name: "Pricing"
        },
    ]
    return (
        <header className="flex justify-between items-center w-[1280px] mx-auto">
            <div>
                <Icon name="logo_light" />
            </div>
            <nav className="flex">
                <ul className="flex gap-[5rem] items-center">
                    {navLists.map(({ id, name }: INavList) => (
                        <li className="text-[#A8BBDB]" key={id}>{name}</li>
                    ))}
                </ul>
            </nav>
            <div className="flex gap-[2rem] items-center">
                <span className="text-[#A8BBDB]">Login</span>
                <AccessButton text={"Try free"} bgWhite hasIcon width="" />
            </div>
        </header>
    )
}