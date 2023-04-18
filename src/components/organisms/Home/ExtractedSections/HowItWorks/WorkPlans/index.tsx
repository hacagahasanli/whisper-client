import { memo } from "react";
import { AccessButton, Card } from "components";
import { StepItems } from "./StepItem";
import { IWorkPlans, IWorkPlansProps } from "../../IExtractedSections";

export const WorkPlans = memo(({ worksPlans }: IWorkPlansProps) => (
    <div className="betweenItemsCenter w-full">
        {worksPlans?.map(({ id, stepItems, btnText, bottomTitle, extraChoiceBtn, topTitle }: IWorkPlans) => (
            <div className="colItemsCenter gap-[1.5rem] font-semibold" key={id}>
                {!!topTitle && <span className="text-[1.4rem]">{topTitle}</span>}
                <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem] bg-white">
                    <div className="w-[250px] bg-white colItemsCenter gap-[1rem]">
                        <StepItems {...{ stepItems }} />
                        <AccessButton text={btnText} />
                        {!!extraChoiceBtn && <span className="font-light text-[1.2rem] cursor-pointer">{extraChoiceBtn}</span>}
                    </div>
                </Card>
                {!!bottomTitle && <span className="text-[1.4rem]">{bottomTitle}</span>}
            </div>
        ))}
    </div>
))