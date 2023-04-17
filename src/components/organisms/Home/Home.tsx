import { ContainerLayout } from "components"
import { HeadSection, HowItWorksSection } from "./ExtractedSections"

export const Home = () => {
    return (
        <ContainerLayout>
            <HeadSection />
            <HowItWorksSection />
        </ContainerLayout>
    )
} 