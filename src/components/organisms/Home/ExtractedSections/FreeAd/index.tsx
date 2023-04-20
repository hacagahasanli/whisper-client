import { AccessButton, SectionLayout } from "components"

export const FreeAddSection = () => {
    return (
        <SectionLayout classes="max-w-[600px] py-[3rem] mt-[4rem] gap-[2rem] text-center">
            <span className="text-[2.5rem] font-bold text-[#272727]">Ready to take back your privacy?</span>
            <AccessButton text="Get started for free" hasIcon classes="" />
        </SectionLayout>
    )
}