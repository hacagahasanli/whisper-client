import { ContainerLayout } from "components"
import { HeadSection, HowItWorksSection, FeaturedSpecSection } from "./ExtractedSections"

export const Home = () => {
    return (
        <ContainerLayout>
            <HeadSection />
            <HowItWorksSection />
            <FeaturedSpecSection />
        </ContainerLayout>
    )
} 