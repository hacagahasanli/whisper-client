import { Icon, SectionLayout } from "components"

export const FooterSection = () => {
    return (
        <SectionLayout classes="max-w-[1280px] py-[3rem] gap-[4rem]" sClasses="border-t-[.05rem] border-[#cccccc]">
            <div className="w-full betweenItemsCenter py-[2rem] border-b-[.1rem] border-[#cccccc]">
                <Icon name="logo_dark" />
                <div className="flexCenterx2 gap-[2.6rem]">
                    <Icon name="twitter_icon" />
                    <Icon name="github_icon" />
                    <Icon name="instagram_icon" />
                </div>
            </div>
        </SectionLayout>
    )
}