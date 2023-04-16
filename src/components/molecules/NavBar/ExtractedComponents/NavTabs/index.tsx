import { navLists, INavList } from "constants/landing-related"

export const NavTabs = () => {
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