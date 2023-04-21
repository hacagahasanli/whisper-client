import { Icon, SectionLayout } from "components"

export const FooterSection = () => {
    return (
        <SectionLayout classes="max-w-[1280px] py-[3rem] mt-[10rem] gap-[4rem]">
            <div className="w-full betweenItemsCenter">
                <div>
                    <Icon name="logo_dark" />
                </div>
                <div className="flex">
                    <Icon name="twitter_icon" />
                    <Icon name="github_icon" />
                </div>
            </div>
        </SectionLayout>
    )
}