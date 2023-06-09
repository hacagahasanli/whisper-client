import { memo } from "react"
import { Icon } from "components"
import { IFooterIcons, IFooterHeadProps } from "../../IExtractedSections"

export const FooterHead = memo(({ FOOTER_ICONS }: IFooterHeadProps) => {
    return (
        <div className="w-full betweenItemsCenter pb-[2rem] mb-[3rem] border-b-[.1rem] border-[#ebebeb]">
            <Icon name="logo_dark" />
            <div className="flexCenterx2 gap-[3rem]">
                {FOOTER_ICONS.map(({ id, name }: IFooterIcons) => <Icon key={id} {...{ name }} />)}
            </div>
        </div>
    )
})