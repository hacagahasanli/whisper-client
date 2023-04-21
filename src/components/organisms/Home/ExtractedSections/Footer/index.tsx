import { Icon, SectionLayout } from "components"
import { v4 } from "uuid"
import { IFooterIcons } from "../IExtractedSections"

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
        <SectionLayout classes="max-w-[1280px] py-[2.2rem] gap-[4rem]" sClasses="border-t-[.05rem] border-[#cccccc]">
            <footer className="w-full betweenItemsCenter py-[2rem] border-b-[.1rem] border-[#cccccc]">
                <Icon name="logo_dark" />
                <div className="flexCenterx2 gap-[2.6rem]">
                    {FOOTER_ICONS.map(({ id, name }: IFooterIcons) => <Icon key={id} {...{ name }} />)}
                </div>
            </footer>
        </SectionLayout>
    )
}