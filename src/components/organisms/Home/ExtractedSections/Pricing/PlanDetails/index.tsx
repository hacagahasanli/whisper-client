import { Icon } from "components"
import { IPricingDetails, IPriceDetails } from "../../IExtractedSections"
import { memo } from "react"

export const PlanDetails = memo(({ details, textColor }: IPriceDetails) => (
    <div className="colJustifyCenter gap-[.55rem] text-[.92rem]">
        {details.map(({ id, detail, icon_name = "check_mark", classes = "font-normal" }: IPricingDetails) => {
            return (
                <div key={id} className="flex items-center gap-[.3rem]">
                    <Icon name={icon_name} color={textColor} />
                    <span className={classes}>{detail}</span>
                </div>
            )
        })}
    </div>
))