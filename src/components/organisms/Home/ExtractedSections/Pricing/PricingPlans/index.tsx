import { Card, Icon } from "components"

export const PricingPlans = () => {
    return (
        <div className="betweenItemsCenter w-full gap-[1.5rem]">
            <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem] w-full bg-white p-0 !important">
                <div className="w-full colJustifyCenter gap-[1rem]">
                    <div className="flex">
                        <Card classes='p-[1rem] rounded-[.9rem] bg-[#EDCB50] inline-block'>
                            <Icon name="cup" />
                        </Card>
                        <div className="flex flex-col justify-between min-h-full ml-[.6rem]">
                            <span className="text-[#EDCB50]">Basic</span>
                            <div className="flex justify-between w-full">
                                <span style={{ lineHeight: "1.2rem" }} className="self-end font-semibold text-[1.2rem]">$</span>
                                <p style={{ lineHeight: "1.6rem" }} className="text-[2rem] mb-[.1rem] font-semibold">0</p>
                            </div>
                        </div>
                        <span className="self-end ml-[2rem] italic font-light text-[.8rem]">Per month</span>
                    </div>
                    <span className="w-full h-[.1rem] bg-[#EAEBEC] mt-[1.4rem]"></span>
                    <div className="text-[#293241]">
                        <div className="flex items-center gap-[.3rem]">
                            <Icon name="check_mark" />
                            <span className="font-semibold">50 GB Storage</span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem] w-full bg-white p-0 !important">
                <div className="w-full colJustifyCenter gap-[1rem]">
                    <div className="flex">
                        <Card classes='p-[1rem] rounded-[.9rem] bg-[#EDCB50] inline-block'>
                            <Icon name="cup" />
                        </Card>
                        <div className="flex flex-col justify-between min-h-full ml-[.6rem]">
                            <span>Basic</span>
                            <div className="flex justify-between w-full">
                                <span style={{ lineHeight: "1.2rem" }} className="self-end font-semibold text-[1.2rem]">$</span>
                                <p style={{ lineHeight: "1.6rem" }} className="text-[2rem] mb-[.1rem] font-semibold">0</p>
                            </div>
                        </div>
                        <span className="self-end ml-[2rem] italic font-light text-[.8rem]">Per month</span>
                    </div>
                    <span className="w-full h-[.1rem] bg-[#EAEBEC] mt-[1.4rem]"></span>
                    <div>
                        <div>
                            <span>icon</span>
                            <span>text</span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem] w-full bg-white p-0 !important">
                <div className="w-full colJustifyCenter gap-[1rem]">
                    <div className="flex">
                        <Card classes='p-[1rem] rounded-[.9rem] bg-[#EDCB50] inline-block'>
                            <Icon name="cup" />
                        </Card>
                        <div className="flex flex-col justify-between min-h-full ml-[.6rem]">
                            <span className="">Basic</span>
                            <div className="flex justify-between w-full">
                                <span style={{ lineHeight: "1.2rem" }} className="self-end font-semibold text-[1.2rem]">$</span>
                                <p style={{ lineHeight: "1.6rem" }} className="text-[2rem] mb-[.1rem] font-semibold">0</p>
                            </div>
                        </div>
                        <span className="self-end ml-[2rem] italic font-light text-[.8rem]">Per month</span>
                    </div>
                    <span className="w-full h-[.1rem] bg-[#EAEBEC] mt-[1.4rem]"></span>
                    <div>
                        <div>
                            <span>icon</span>
                            <span>text</span>
                        </div>
                    </div>
                </div>
            </Card>

        </div>
    )
}