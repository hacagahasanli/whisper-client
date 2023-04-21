import { ContainerLayout } from "components"
import { HeadSection, HowItWorksSection, FeaturedSpecSection, PricingSection, FreeAddSection, FooterSection } from "./ExtractedSections"

export const Home = () => {
    return (
        <ContainerLayout>
            <HeadSection />
            <HowItWorksSection />
            <FeaturedSpecSection />
            <PricingSection />
            <FreeAddSection />
            <FooterSection />
        </ContainerLayout>
    )
} 