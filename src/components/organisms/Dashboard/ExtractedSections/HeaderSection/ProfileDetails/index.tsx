import { memo } from "react"

export const ProfileDetails = memo(() => {
    return (
        <div className="flex flex-0 min-w-[400px] items-center gap-[.8rem] justify-center">
            <div>
                <img src="https://images.pexels.com/photos/2221877/pexels-photo-2221877.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="rounded-full w-[55px] h-[55px] object-cover" />
            </div>
            <div className="flex flex-col">
                <span className="text-[#252C32] text-[1.2rem]">Hacaga Hasanli</span>
                <span className="text-[#7A7A7A] text-[1rem]">haci1234@gmail.com</span>
            </div>
        </div>
    )
})