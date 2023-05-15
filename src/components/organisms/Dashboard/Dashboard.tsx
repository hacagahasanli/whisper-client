import { ContainerLayout, Icon } from "components"
import { HeaderSection, AsideSection } from "./ExtractedSections"

export const Dashboard = () => {
    return (
        <div className="m-auto flex justify-center min-w-[1280px]">
            <ContainerLayout>
                <HeaderSection />
                <div className="flex">
                    <AsideSection />
                    <main className="w-full">
                        <div className="relative h-[152px] w-full text-[#252C32]">
                            <div className="w-full pt-[2rem] pl-[3rem] pr-[5rem] flex space-between flex-col">
                                <span className="font-bold text-[2.5rem]">My files</span>
                                <div className="flex self-end max-w-max cursor-pointer">
                                    <span className="p-[.4rem] bg-[#E5E9EB]">
                                        <Icon name="column_grid" />
                                    </span>
                                    <span className="p-[.4rem] bg-[#F6F8F9]">
                                        <Icon name="row_grid" />
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="cursor-pointer">All files</span>
                                    <span>Recently</span>
                                </div>
                            </div>
                            <span className="absolute bottom-0 w-full h-[.15rem] bg-[#E5E9EB]"></span>
                        </div>
                    </main>
                </div>
            </ContainerLayout>
        </div>
    )
}