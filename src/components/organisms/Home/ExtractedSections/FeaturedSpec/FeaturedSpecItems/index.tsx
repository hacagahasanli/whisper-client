import { memo } from "react"
import { Card, Icon } from "components"
import { IFeaturedSpecItems, IFeaturedSpecItemsProps } from "../../IExtractedSections"

export const FeaturedSpecItems = memo(({ featuredSpecItems }: IFeaturedSpecItemsProps) => {
    return (
        <div className="flex justify-center gap-[1.2rem] w-full flex-wrap">
            {featuredSpecItems?.map(({ id, icon, title, description }: IFeaturedSpecItems) => {
                return (
                    <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem]" key={id}>
                        <div className="w-[280px] bg-white colJustifyCenter gap-[1.3rem]">
                            <Icon name={icon} />
                            <div className="colJustifyCenter gap-[0.2rem]">
                                <span className="font-semibold text-[1.2rem] text-[#14183E]">{title}</span>
                                <span className="text-[#747582]">{description}</span>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
})