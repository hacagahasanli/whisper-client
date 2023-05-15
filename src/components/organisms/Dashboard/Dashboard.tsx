import { ContainerLayout, Icon } from "components"
import { HeaderSection } from "./ExtractedSections"

export const Dashboard = () => {
    return (
        <div className="m-auto flex justify-center min-w-[1280px]">
            <ContainerLayout>
                <HeaderSection />
                <aside className="w-[280px] min-h-screen relative">
                    <span className="absolute right-0 w-[.15rem] min-h-screen bg-[#E5E9EB]"></span>
                    <div className="py-[2rem] px-[2rem] w-full flex flex-col gap-3">
                        <div className="flex flex-col gap-[.5rem]">
                            <div className="bg-default-bg text-white flex items-center gap-[1rem] px-[1.4rem] min-h-[40px] rounded-lg">
                                <Icon name="myFiles" />
                                <span className="text-[1rem]">My files</span>
                            </div>
                            <div className="bg-transparent text-[#252C32] flex items-center gap-[1rem] px-[1.4rem] min-h-[40px] rounded-lg">
                                <Icon name="myPerson" />
                                <span className="text-[1rem]">Account</span>
                            </div>
                            <div className="bg-transparent text-[#252C32] flex items-center gap-[1rem] px-[1.4rem] min-h-[40px] rounded-lg">
                                <Icon name="trash" />
                                <span className="text-[1rem]">Trash</span>
                            </div>
                        </div>
                        <div className="px-[1.3rem] py-[1rem] flex border-[.1rem] border-solid border-[#DDE2E4] rounded-lg gap-3 max-w-max">
                            <Icon name="add_icon" />
                            <span>Add new file</span>
                        </div>
                    </div>
                </aside>
            </ContainerLayout>
        </div>
    )
}