import { Card, Icon } from "components"
import { v4 } from "uuid"

export const PricingPlans = () => {
    const plans = [
        {
            id: `basic/${v4()}`,
            plan_name: "Basic",
            currency: '$',
            value: 0,
            color: '#EDCB50',
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
            value: 5,
            color: '#1681FE',
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
            id: `professional/${v4()}`,
            plan_name: "Professional",
            currency: '$',
            value: 5,
            color: '#1681FE',
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
    ]
    return (
        <div className="flex justify-between w-full gap-[1.5rem] p-0">
            {plans.map(({ id, plan_name, details, color, value, currency }) => {
                return (
                    <Card key={id} classes="px-[1.1rem] py-[1.45rem] rounded-[1rem] w-full bg-white h-max">
                        <div className="w-full colJustifyCenter gap-[1rem]">
                            <div className="flex">
                                <Card classes={`p-[1rem] rounded-[.6rem] bg-[${color}] inline-block`}>
                                    <Icon name="cup" />
                                </Card>
                                <div className="flex flex-col justify-between min-h-full ml-[.6rem]">
                                    <span className={`text-[${color}]`}>{plan_name}</span>
                                    <div className="flex justify-between w-[2.2rem]">
                                        <span style={{ lineHeight: "1.2rem" }} className="self-end font-semibold text-[1.2rem] text-[#293241]">{currency}</span>
                                        <p style={{ lineHeight: "1.6rem" }} className="text-[2rem] mb-[.1rem] font-semibold text-[#293241]">{value}</p>
                                    </div>
                                </div>
                                <span className="self-end ml-[2rem] italic font-light text-[.8rem]">Per month</span>
                            </div>
                            <span className="w-full h-[.1rem] bg-[#EAEBEC] mt-[.6rem] mb-[1.5rem]"></span>
                            <div className="text-[#293241] colJustifyCenter gap-[.55rem] text-[.92rem]">
                                {details.map(({ id, detail, icon_name = "check_mark", classes = "font-semibold" }) => {
                                    return (
                                        <div key={id} className="flex items-center gap-[.3rem]">
                                            <Icon name={icon_name} {...{ color }} />
                                            <span className={classes}>{detail}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}