import { SectionLayout, SectionTitle } from "components"
import { PricingPlans } from "./PricingPlans"

export const PricingSection = () => {
    return (
        <SectionLayout classes="max-w-[1050px] py-[3rem] mt-[10rem] gap-[4rem]" sClasses="bg-[#E0ECFF]">
            <SectionTitle name="pricing" />
            <PricingPlans />
        </SectionLayout>
    )
}