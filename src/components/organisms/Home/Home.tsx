import { landing_background } from "assets"
import { ContainerLayout, Navbar } from "components"

export const Home = () => {
    return (
        <ContainerLayout>
            <section className="bg-default-bg px-[12rem] py-[3rem] block w-full h-screen bg-cover bg-center" >
                <Navbar />
                <div className="flex flex-col justify-center items-center mt-[4.5rem] mx-auto">
                    <span className="text-white text-[3.5rem] max-w-[55rem] text-center font-[800]">Best choice for storing and sharing most important files.</span>
                    <span className="text-gray-blue mt-[1.5rem]">Easy to use, reliable, private, and secure</span>
                </div>
            </section>
            <section>
                <div className="flex flex-col gap-[.1rem] mx-auto justify-center items-center">
                    <div className="flex justify-center items-center text-[4rem] gap-[1rem] font-[700] mt-[6.5rem]">
                        <span className="text-default-bg">How</span>
                        <span className="text-[#272727]">It Works</span>
                    </div>
                    <span>Securely store, organize, and share all your files.</span>
                </div>
            </section>
        </ContainerLayout>
    )
}