import { SectionLayout, SectionTitle } from "components"
import { FeaturedSpecItems } from "./FeaturedSpecItems"
import { v4 } from "uuid"

export const FeaturedSpecSection = () => {
    const featuredSpecItems = [
        {
            id: "security/" + v4(),
            icon: "home_security",
            title: "Security",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "plans/" + v4(),
            icon: "home_plans",
            title: "Plans",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "filter/" + v4(),
            icon: "home_filter",
            title: "Filter",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "encryption/" + v4(),
            icon: "home_encryption",
            title: "Encryption",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "sharing/" + v4(),
            icon: "home_sharing",
            title: "Sharing",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "debug/" + v4(),
            icon: "home_debug",
            title: "Debug",
            description: "Grow the holistic world view of disruptive innovation"
        },
    ]
    return (
        <SectionLayout classes="max-w-[1000px] mt-[10rem] gap-[4rem]">
            <SectionTitle name="featureSpecifications" />
            <FeaturedSpecItems {...{ featuredSpecItems }} />
        </SectionLayout>
    )
}