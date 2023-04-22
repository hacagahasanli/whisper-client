import { Card, TransparentButton } from "components"
import { v4 } from "uuid"
import { IPlans } from "../../IExtractedSections"
import { PlanDetails } from "../PlanDetails"
import { PlanHeader } from "../PlanHeader"
import { ExtraBeauty } from "./ExtraBeauty"

export const PricingPlans = () => {
    const plans: IPlans[] = [
        {
            id: `basic/${v4()}`,
            plan_name: "Basic",
            currency: '$',
            value: "0",
            perMonth: 'Per month',
            bgColor: 'bg-[#EDCB50]',
            textColor: 'text-[#EDCB50]',
            bdColor: 'border-[#EDCB50]',
            details: [
                {
                    id: `basicDetail/${v4()}`,
                    detail: '50 GB Storage'
                },
                {
                    id: `basicDetail/${v4()}`,
                    detail: 'Basic file collaboration'
                },
                {
                    id: `basicDetail/${v4()}`,
                    detail: 'File sychronization across devices'
                },
                {
                    id: `basicDetail/${v4()}`,
                    detail: 'Support for common files'
                },
                {
                    id: `basicDetail/${v4()}`,
                    detail: 'Automatic file backup',
                    icon_name: 'cross_mark',
                    classes: 'font-normal text-[#A9ADB3]'
                },
                {
                    id: `basicDetail/${v4()}`,
                    detail: 'Advanced Security features',
                    icon_name: 'cross_mark',
                    classes: 'font-normal text-[#A9ADB3]'
                },
            ]
        },
        {
            id: `professional/${v4()}`,
            plan_name: "Professional",
            currency: '$',
            value: "5",
            perMonth: 'Per month',
            bgColor: 'bg-[#1681FE]',
            textColor: 'text-[#1681FE]',
            bdColor: 'border-[#1681FE]',
            borderCard: 'border-[.125rem] border-solid border-[#1681FE]',
            extraBeauty: true,
            details: [
                {
                    id: `professionalDetail/${v4()}`,
                    detail: '500 GB Storage'
                },
                {
                    id: `professionalDetail/${v4()}`,
                    detail: 'Advanced file collaboration'
                },
                {
                    id: `professionalDetail/${v4()}`,
                    detail: 'File sychronization across devices'
                },
                {
                    id: `professionalDetail/${v4()}`,
                    detail: 'Support for common files'
                },
                {
                    id: `professionalDetail/${v4()}`,
                    detail: 'Automatic file backup',
                },
                {
                    id: `professionalDetail/${v4()}`,
                    detail: 'Advanced security features',
                },
                {
                    id: `professionalDetail/${v4()}`,
                    detail: 'Purchase additional features ',
                },
            ]
        },
        {
            id: `enterprise/${v4()}`,
            plan_name: "Enterprise",
            bgColor: 'bg-[#448C74]',
            textColor: 'text-[#448C74]',
            bdColor: 'border-[#448C74]',
            custom: "Custom",
            details: [
                {
                    id: `enterprise/${v4()}`,
                    detail: 'Customizable storage capacity'
                },
                {
                    id: `enterprise/${v4()}`,
                    detail: 'Advanced file collaboration'
                },
                {
                    id: `enterprise/${v4()}`,
                    detail: 'File sychronization across devices'
                },
                {
                    id: `enterprise/${v4()}`,
                    detail: 'Support for common files'
                },
                {
                    id: `enterprise/${v4()}`,
                    detail: 'Automatic file backup',
                },
                {
                    id: `enterprise/${v4()}`,
                    detail: 'Advanced security features',
                },
                {
                    id: `enterprise/${v4()}`,
                    detail: 'Customizable featuress',
                },
                {
                    id: `enterprise/${v4()}`,
                    detail: 'Purchase additional features ',
                },
            ]
        },
    ]
    return (
        <div className="flex justify-between w-full gap-[1.5rem]">
            {plans.map(({ id, textColor, details, bdColor, borderCard, text = "Get Start", extraBeauty, ...rest }: IPlans) => {
                return (
                    <Card key={id} classes={`px-[1.1rem] py-[1.45rem] rounded-[1rem] w-full bg-white h-max text-[#293241] relative ${borderCard} cursor-pointer`}>
                        <ExtraBeauty {...{ extraBeauty }} />
                        <div className="w-full colJustifyCenter gap-[1rem] relative" style={{ zIndex: "1" }}>
                            <PlanHeader {...{ textColor, extraBeauty }} {...rest} />
                            <PlanDetails {...{ details, textColor }} />
                            <TransparentButton {...{ text }} classes={`${textColor} ${bdColor}`} />
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}