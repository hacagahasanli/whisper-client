import { Card, SectionLayout, SectionTitle } from "components"

export const FeaturedSpecSection = () => {
    return (
        <SectionLayout classes="max-w-[980px] mt-[6.5rem] gap-[4rem]">
            <SectionTitle name="featureSpecifications" />
            <div className="flex justify-center gap-[1.2rem] w-full">
                <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem]">
                    <div className="w-[280px] bg-white colItemsCenter gap-[2rem]">
                        <div className="colJustifyCenter gap-[0.2rem]">
                            <span>Security</span>
                            <span>Grow the holistic world view of disruptive innovation</span>
                        </div>
                    </div>
                </Card>
                <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem]">
                    <div className="w-[280px] colJustifyCenter gap-[1rem] bg-white">
                        <div className="colJustifyCenter gap-[0.2rem]">
                            <span>Security</span>
                            <span>Grow the holistic world view of disruptive innovation</span>
                        </div>
                    </div>
                </Card>
                <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem]">
                    <div className="w-[280px] bg-white colItemsCenter gap-[2rem]">
                        <div className="colJustifyCenter gap-[0.2rem]">
                            <span>Security</span>
                            <span>Grow the holistic world view of disruptive innovation</span>
                        </div>
                    </div>
                </Card>
            </div>
        </SectionLayout>
    )
}