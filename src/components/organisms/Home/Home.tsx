import { landing_background } from "assets"
import { ContainerLayout, Navbar } from "components"

export const Home = () => {
    return (
        <ContainerLayout>
            <section className="bg-default-bg px-[12rem] py-[3rem] block w-full h-screen bg-cover bg-center" >
                <Navbar />
                <div className="flex flex-col justify-center items-center mt-[5rem] mx-auto">
                    <span className="text-white text-[3.5rem] max-w-[55rem] text-center font-[800]">Best choice for storing and sharing most important files.</span>
                    <span className="text-gray-blue mt-[1.5rem]">Easy to use, reliable, private, and secure</span>
                </div>
            </section>
        </ContainerLayout>
    )
}