import { landing_background } from "assets"
import { ContainerLayout, Navbar, Card, AccessButton } from "components"

export const Home = () => {
    return (
        <ContainerLayout>
            <section className="bg-default-bg px-[12rem] py-[3rem] block w-full h-screen bg-cover bg-center" >
                <Navbar />
                <div className="flex flex-col justify-center items-center mt-[4.5rem]">
                    <span className="text-white text-[3.5rem] max-w-[55rem] text-center font-[800]">Best choice for storing and sharing most important files.</span>
                    <span className="text-gray-blue mt-[1.5rem] text-[1.5rem]">Easy to use, reliable, private, and secure</span>
                </div>
            </section>
            <section className="w-full">
                <div className="w-full flex flex-col mx-auto justify-center items-center">
                    <div className="flex flex-col gap-[.1rem] mx-auto justify-center items-center">
                        <div className="flex justify-center items-center text-[3rem] gap-[1rem] font-[700] mt-[6.5rem]">
                            <span className="text-default-bg">How</span>
                            <span className="text-[#272727]">It Works</span>
                        </div>
                        <span className="text-[#7F848D] text-[1.2rem] font-[500]">Securely store, organize, and share all your files.</span>
                    </div>
                    <div className="flex space-between items-center mx-auto w-full">
                        <Card classes="work-lg md">
                            <div className="w-[200px] bg-white">

                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </ContainerLayout>
    )
}