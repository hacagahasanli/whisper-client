import { landing_background } from "assets"
import { Navbar } from "components"

export const HeadSection = () => {
    return (
        <section style={{ backgroundImage: `url(${landing_background})` }} className="px-[12rem] py-[3rem] block w-full h-screen bg-cover bg-center" >
            <Navbar />
            <div className="autoColFlexCenter mt-[4.5rem]">
                <span className="text-white text-[3.5rem] max-w-[55rem] text-center font-[800]">Best choice for storing and sharing most important files.</span>
                <span className="text-gray-blue mt-[1.5rem] text-[1.5rem]">Easy to use, reliable, private, and secure</span>
            </div>
        </section>
    )
}