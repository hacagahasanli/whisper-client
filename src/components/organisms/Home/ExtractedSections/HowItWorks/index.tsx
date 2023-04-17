import { WorkPlans } from "./WorkPlans"
import { IWorkPlans } from "./IHowItWorks"


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
        <section className="w-full">
            <div className="max-w-[1100px] autoColFlexCenter">
                <div className="autoColFlexCenter gap-[.1rem]">
                    <div className=" text-[3rem] gap-[1rem] font-[700] mt-[6.5rem]">
                        <span className="text-default-bg">How</span>
                        <span className="text-[#272727]">It Works</span>
                    </div>
                    <span className="text-[#7F848D] text-[1.2rem] font-[500]">Securely store, organize, and share all your files.</span>
                </div>
                <WorkPlans {...{ worksPlans }} />
            </div>
        </section>
    )
}