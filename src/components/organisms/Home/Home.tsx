import { ContainerLayout } from "components"
import { HeadSection, HowItWorksSection, FeaturedSpecSection, PricingSection } from "./ExtractedSections"

export const Home = () => {
    return (
        <ContainerLayout>
            <HeadSection />
            <HowItWorksSection />
            <FeaturedSpecSection />
            <PricingSection />
        </ContainerLayout>
    )
} 