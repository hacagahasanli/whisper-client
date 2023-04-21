import { memo } from "react"
import { Icon } from "components"
import { IFooterIcons, IFooterHeadProps } from "../../IExtractedSections"

export const FooterHead = memo(({ FOOTER_ICONS }: IFooterHeadProps) => {
    return (
        <>
            <Icon name="logo_dark" />
            <div className="flexCenterx2 gap-[2.6rem]">
                {FOOTER_ICONS.map(({ id, name }: IFooterIcons) => <Icon key={id} {...{ name }} />)}
            </div>
        </>
    )
})