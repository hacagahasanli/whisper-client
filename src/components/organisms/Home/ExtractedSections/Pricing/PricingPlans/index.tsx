import { Card, Icon } from "components"

export const PricingPlans = () => {
    return (
        <div className="betweenItemsCenter w-full gap-[1.5rem]">
            <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem] w-full bg-white p-0 !important">
                <div className="w-full">
                    <div className="flex">
                        <Card classes='p-[1rem] rounded-[.9rem] bg-[#EDCB50] inline-block'>
                            <Icon name="cup" />
                        </Card>
                        <div className="flex flex-col justify-between min-h-full ml-[.6rem]">
                            <span>Basic</span>
                            <div className="flex justify-between w-full">
                                <span className="self-end font-semibold text-[1.2rem]">$</span>
                                <p className="text-[1rem] self-end font-semibold p-0">0</p>
                            </div>
                        </div>
                        <span className="self-end ml-[2rem] italic font-light text-[.8rem]">Per month</span>
                    </div>
                    <div>line</div>
                    <div>
                        <div>
                            <span>icon</span>
                            <span>text</span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem] w-full">
                <div className="w-full">
                    <div>
                        <div>
                            <Icon name="cup" />
                        </div>
                        <div>
                            <span></span>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <span>Per month</span>
                    </div>
                    <div>line</div>
                    <div>
                        <div>
                            <span>icon</span>
                            <span>text</span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem] w-full">
                <div className="w-full">
                    <div>
                        <div>
                            <Icon name="cup" />
                        </div>
                        <div>
                            <span></span>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <span>Per month</span>
                    </div>
                    <div>line</div>
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