import { ContainerLayout } from "components"
import { HeaderSection } from "./ExtractedSections"

export const Dashboard = () => {
    return (
        <div className="m-auto flex justify-center min-w-[1280px]">
            <ContainerLayout>
                <HeaderSection />
                <aside className="w-[280px] min-h-screen relative">
                    <span className="absolute right-0 w-[.15rem] min-h-screen bg-[#E5E9EB]"></span>
                    <div className="py-[2rem] px-[3rem] w-full ">
                        <div className="flex flex-col gap-[2rem]">


                        </div>
                    </div>
                </aside>
            </ContainerLayout>
        </div>
    )
}