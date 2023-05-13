import { LogoBar } from "./LogoBar"
import { SearchBar } from "./SearchBar"
import { ProfileDetails } from "./ProfileDetails"

export const HeaderSection = () => {
    return (
        <header className="w-full h-[110px] ">
            <div className="w-full flex items-center min-h-full px-[4rem] py-[1rem] border-solid border-b-[#E5E9EB] border-b-[.15rem]">
                <LogoBar />
                <SearchBar />
                <ProfileDetails />
            </div>
        </header>
    )
}