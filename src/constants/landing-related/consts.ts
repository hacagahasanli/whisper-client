import { v4 } from "uuid"
import { IHomeSectionTitles } from "./ILandingRelated"

export const HOME_SECTION_TITLES: IHomeSectionTitles = {
    howItWorks: {
        id: "howItWorks/" + v4(),
        main: "How",
        subMain: "It Works",
        detailedText: "Securely store, organize, and share all your files."
    },
    featureSpecifications: {
        id: "featureSpecifications/" + v4(),
        main: "Feature",
        subMain: "Specifications",
        detailedText: "Securely store, organize, and share all your files."
    },
    pricing: {
        id: "pricing/" + v4(),
        main: "Pricing",
        detailedText: "Using basic skills you can improve your business stuff with Around"
    }
} 