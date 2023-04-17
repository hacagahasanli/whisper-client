import { memo } from "react";
import { IStepItems } from "../../../IExtractedSections";

interface IStepItemsProps {
    stepItems: IStepItems[]
}

export const StepItems = memo(({ stepItems }: IStepItemsProps) => (
    <>
        {stepItems?.map(({ id, text }: IStepItems) => (
            <div key={id} className="h-[50px] w-full bg-home-bg rounded-md font-normal text-[1rem] flexCenterx2">
                <span>{text}</span>
            </div>
        ))}
    </>
))