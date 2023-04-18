import { IWorkPlans } from "../IExtractedSections"
import { WorkPlans } from "./WorkPlans"
import { SectionTitle, SectionLayout } from "components"

export const HowItWorksSection = () => {
    const worksPlans: IWorkPlans[] = [
        {
            id: "signUp_Whisper",
            stepItems: [
                {
                    id: "itemsign_1",
                    text: "My name is whisper"
                },
                {
                    id: "itemsign_2",
                    text: "My name is whisper"
                },
                {
                    id: "itemsign_3",
                    text: "My name is whisper"
                }
            ],
            btnText: "Create account",
            bottomTitle: "Sign up at Whisper"
        },
        {
            id: "uploadyour_Files",
            stepItems: [],
            topTitle: "Upload your files",
            btnText: "Upload file",
            extraChoiceBtn: "or drop a file"
        },
        {
            id: "create_account",
            stepItems: [
                {
                    id: "itemAccount_1",
                    text: "My name is whisper"
                },
                {
                    id: "itemAccount_2",
                    text: "My name is whisper"
                },
                {
                    id: "itemAccount_3",
                    text: "My name is whisper"
                }
            ],
            btnText: "Create account",
            bottomTitle: "Differentiate folders"
        },
    ]
    return (
        <SectionLayout classes="max-w-[1100px] mt-[6.5rem] gap-[4rem]">
            <SectionTitle name="howItWorks" />
            <WorkPlans {...{ worksPlans }} />
        </SectionLayout>
    )
}