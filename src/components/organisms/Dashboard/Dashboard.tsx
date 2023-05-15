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
                        <div className="h-[138px] w-full relative">
                            <span className="font-bold">My files</span>
                            <div className="flex">
                                <span>
                                    <Icon name="row_grid" />
                                </span>
                                <span>
                                    <Icon name="column_grid" />
                                </span>
                            </div>
                            <div>
                                <span>All files</span>
                                <span>Recently</span>
                            </div>
                        </div>
                    </main>
                </div>
            </ContainerLayout>
        </div>
    )
}