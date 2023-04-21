import { AccessButton } from "components"

export const FooterNavMenu = () => {
    return (
        <div className="colJustifyCenter gap-[2rem]">
            <div>Whisper</div>
            <div className="w-full betweenItemsCenter">
                <ul className="flex items-center gap-[4rem]">
                    <li>About Us</li>
                    <li>Press</li>
                    <li>Investors</li>
                    <li>Events</li>
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                </ul>
                <AccessButton text="Contact Us" classes="max-w-[10rem] text-[1rem] font-semibold rounded-[.5rem] py-[.6rem]" />
            </div>
        </div>
    )
}