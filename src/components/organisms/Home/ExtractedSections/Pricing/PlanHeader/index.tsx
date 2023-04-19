import { Card, Icon } from "components";
import { PlanPrice } from "../PlanPrice";
import { IPlanHeaderProps } from "../../IExtractedSections";
import { memo } from "react";

export const PlanHeader = memo(({ bgColor, textColor, plan_name, value, custom, currency, perMonth }:IPlanHeaderProps) => (
    <div className="flex">
        <Card classes={`p-[1rem] rounded-[.6rem] ${bgColor} inline-block`}>
            <Icon name="cup" />
        </Card>
        <div className="flex flex-col justify-between min-h-full ml-[.6rem]">
            <span className={`${textColor}`}>{plan_name}</span>
            <PlanPrice {...{ value, currency, custom }} />
        </div>
        {!!perMonth && <span className="self-end ml-[2rem] italic font-light text-[.8rem]">{perMonth}</span>}
    </div>
))