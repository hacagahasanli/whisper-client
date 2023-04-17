import { HOME_SECTION_TITLES } from "../../../constants"
import { SectionTitleProps } from "./ISectionTitle"

export const SectionTitle = ({ name = "howItWorks" }: SectionTitleProps) => {
    const { main, subMain, detailedText } = HOME_SECTION_TITLES[name]
    return (
        <div className="autoColFlexCenter">
            <div className="flexCenterx2 text-[3rem] gap-[1rem] font-[700]">
                <span className="text-default-bg">{main}</span>
                {!!subMain && <span className="text-[#272727]">{subMain}</span>}
            </div>
            <span className="text-[#7F848D] text-[1.2rem] font-[500]">{detailedText}</span>
        </div>
    )
}