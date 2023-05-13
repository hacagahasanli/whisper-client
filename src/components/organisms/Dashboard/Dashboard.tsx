import { ContainerLayout, Icon } from "components"

export const Dashboard = () => {
    return (
        <ContainerLayout>
            <header className="w-full h-[90px]">
                <div className="w-full flex items-center min-h-full px-[4rem] py-[1rem]  border-solid border-b-[#E5E9EB] border-b-[.15rem]">
                    <div className="flex items-center w-[280px] flex-0">
                        <Icon name="logo_dark" />
                    </div>
                    <div className="flex flex-1 relative">
                        <div className="flex min-w-[760px] items-center relative">
                            <input placeholder="Search" value={""} className=" placeholder-[#252C32] min-w-full py-[8px] pl-[16px] pr-4 border-[.1rem] border-[#cccccc] border-solid rounded-[.3rem]" />
                            <div className="absolute right-3">
                                <Icon name="search" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-0 min-w-[400px] items-center gap-[.8rem] justify-center">
                        <div>
                            <img src="https://images.pexels.com/photos/2221877/pexels-photo-2221877.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="rounded-full w-[55px] h-[55px] object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#252C32] text-[1.2rem]">Haci Hasanli</span>
                            <span className="text-[#7A7A7A] text-[1rem]">haci1234@gmail.com</span>
                        </div>
                    </div>
                </div>
            </header>
        </ContainerLayout>
    )
}