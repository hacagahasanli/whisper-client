import { Icon } from "components"

export const SearchBar = () => {
    return (
        <div className="flex flex-1 relative">
            <div className="flex min-w-[600px] max-w-[880px] items-center relative">
                <input placeholder="Search" value={""} className=" placeholder-[#252C32] min-w-[600px] max-w-[880px] py-[8px] pl-[16px] pr-4 border-[.1rem] border-[#cccccc] border-solid rounded-[.3rem]" />
                <div className="absolute right-3">
                    <Icon name="search" />
                </div>
            </div>
        </div>
    )
}