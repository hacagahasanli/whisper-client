import { SectionLayout, SectionTitle } from "components"
import { FeaturedSpecItems } from "./FeaturedSpecItems"
import { v4 } from "uuid"

export const FeaturedSpecSection = () => {
    const featuredSpecItems = [
        {
            id: "security/" + v4(),
            icon: "",
            title: "Security",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "plans/" + v4(),
            icon: "",
            title: "Plans",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "filter/" + v4(),
            icon: "",
            title: "Filter",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "encryption/" + v4(),
            icon: "",
            title: "Encryption",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "sharing/" + v4(),
            icon: "",
            title: "Sharing",
            description: "Grow the holistic world view of disruptive innovation"
        },
        {
            id: "debug/" + v4(),
            icon: "",
            title: "Debug",
            description: "Grow the holistic world view of disruptive innovation"
        },
    ]
    return (
        <SectionLayout classes="max-w-[980px] mt-[6.5rem] gap-[4rem]">
            <SectionTitle name="featureSpecifications" />
            <FeaturedSpecItems {...{ featuredSpecItems }} />
        </SectionLayout>
    )
}