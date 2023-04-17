import { memo } from "react"
import { Card } from "components"
import { IFeaturedSpecItems, IFeaturedSpecItemsProps } from "../../IExtractedSections"

export const FeaturedSpecItems = memo(({ featuredSpecItems }: IFeaturedSpecItemsProps) => {
    return (
        <div className="flex justify-center gap-[1.2rem] w-full flex-wrap">
            {featuredSpecItems?.map(({ id, icon, title, description }: IFeaturedSpecItems) => {
                return (
                    <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem]" key={id}>
                        <div className="w-[280px] bg-white colItemsCenter gap-[2rem]">
                            <div className="colJustifyCenter gap-[0.2rem]">
                                <span>{title}</span>
                                <span>{description}</span>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
})