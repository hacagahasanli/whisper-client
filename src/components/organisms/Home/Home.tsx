import { ContainerLayout } from "components"
import { HeadSection, HowItWorksSection, FeaturedSpecSection, PricingSection, FreeAddSection } from "./ExtractedSections"

export const Home = () => {
    return (
        <ContainerLayout>
            <HeadSection />
            <HowItWorksSection />
            <FeaturedSpecSection />
            <PricingSection />
            <FreeAddSection />
        </ContainerLayout>
    )
} 