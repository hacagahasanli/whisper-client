import { AccessButton } from "components"
import { v4 } from "uuid"
import { IFooterList } from "../../IExtractedSections"

export const FooterNavMenu = () => {
    const footerNavLists: IFooterList[] = [
        {
            id: "about/" + v4(),
            name: "About Us"
        },
        {
            id: "press/" + v4(),
            name: "Press"
        },
        {
            id: "investors/" + v4(),
            name: "Investors"
        },
        {
            id: "events/" + v4(),
            name: "Events"
        },
        {
            id: "termsOfUse/" + v4(),
            name: "Terms of use"
        },
        {
            id: "privacyPolicy/" + v4(),
            name: "Privacy policy"
        },

    ]
    return (
        <div className="colJustifyCenter gap-[1rem]">
            <span className="font-[800] text-[1.1rem]">Whisper</span>
            <div className="w-full betweenItemsCenter">
                <ul className="flex items-center gap-[5rem] font-poppins text-[1rem] cursor-pointer">
                    {footerNavLists?.map(({ id, name }: IFooterList) => <li key={id}>{name}</li>)}
                </ul>
                <AccessButton text="Contact Us" classes="max-w-[10rem] text-[1rem] font-semibold rounded-[.5rem] py-[.6rem] font-poppins" />
            </div>
        </div>
    )
}