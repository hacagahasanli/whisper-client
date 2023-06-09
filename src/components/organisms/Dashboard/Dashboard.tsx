import { ContainerLayout, Icon } from "components"
import { HeaderSection, AsideSection, DocsTableTitle } from "./ExtractedSections"

export const Dashboard = () => {
    return (
        <div className="m-auto flex justify-center min-w-[1280px]">
            <ContainerLayout>
                <HeaderSection />
                <div className="flex">
                    <AsideSection />
                    <main className="w-full">
                        <DocsTableTitle />
                    </main>
                </div>
            </ContainerLayout>
        </div>
    )
}