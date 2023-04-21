import { SectionLayout } from "components"
import { IFooterIcons } from "../IExtractedSections"
import { FooterHead } from "./FooterHead"
import { FooterNavMenu } from "./FooterNavMenu"
import { v4 } from "uuid"

export const FooterSection = () => {
    const FOOTER_ICONS: IFooterIcons[] = [
        {
            id: "twitter_icon/" + v4(),
            name: "twitter_icon"
        },
        {
            id: "github_icon/" + v4(),
            name: "github_icon"
        },
        {
            id: "instagram_icon/" + v4(),
            name: "instagram_icon"
        },
    ]
    return (
        <SectionLayout classes="max-w-[1280px] pt-[4rem] pb-[2.5rem] gap-[4rem]" sClasses="border-t-[.05rem] border-[#cccccc]">
            <footer className="w-full colJustifyCenter">
                <FooterHead {...{ FOOTER_ICONS }} />
                <FooterNavMenu />
            </footer>
        </SectionLayout>
    )
}