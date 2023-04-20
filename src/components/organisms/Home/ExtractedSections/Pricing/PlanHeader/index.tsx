import { Card, Icon } from "components";
import { PlanPrice } from "../PlanPrice";
import { IPlanHeaderProps } from "../../IExtractedSections";
import { memo } from "react";

export const PlanHeader = memo(({ bgColor, textColor, plan_name, value, custom, currency, perMonth, extraBeauty }: IPlanHeaderProps) => (
    <>
        <div className="flex">
            <Card classes={`p-[1rem] rounded-[.6rem] ${bgColor} inline-block`}>
                <Icon name="cup" />
            </Card>
            <div className="flex flex-col justify-between min-h-full ml-[.6rem]">
                <div className="flex text-[.9rem] font-semibold">
                    <span className={`${textColor}`}>{plan_name}</span>
                </div>
                {extraBeauty && <span className="absolute right-0 text-[.8rem] px-[.8rem] py-[.2rem] rounded-[.45rem] bg-[#1681FE] text-[white] font-normal text-center">Recommended</span>}
                <PlanPrice {...{ value, currency, custom, perMonth }} />
            </div>
        </div>
        <span className="w-full h-[.1rem] bg-[#EAEBEC] mt-[.6rem] mb-[1.5rem]"></span>
    </>

))