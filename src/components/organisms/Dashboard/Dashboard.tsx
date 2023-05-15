import { ContainerLayout, Icon } from "components"
import { HeaderSection, AsideSection } from "./ExtractedSections"

export const Dashboard = () => {
    return (
        <div className="m-auto flex justify-center min-w-[1280px]">
            <ContainerLayout>
                <HeaderSection />
                <AsideSection />
            </ContainerLayout>
        </div>
    )
}