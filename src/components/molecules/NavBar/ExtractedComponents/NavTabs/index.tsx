import { INavList } from "../IExtractedComponent"

export const NavTabs = () => {
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
        <nav className="flex">
            <ul className="flex gap-[5rem] items-center">
                {navLists.map(({ id, name }: INavList) => (
                    <li className="text-gray-blue text-[1.2rem] cursor-pointer" key={id}>{name}</li>
                ))}
            </ul>
        </nav>
    )
}