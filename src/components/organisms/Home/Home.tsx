import { landing_background } from "assets"
import { ContainerLayout, Navbar, Card, AccessButton } from "components"

export const Home = () => {
    return (
        <ContainerLayout>
            <section style={{ backgroundImage: `url(${landing_background})` }} className="px-[12rem] py-[3rem] block w-full h-screen bg-cover bg-center" >
                <Navbar />
                <div className="autoColFlexCenter mt-[4.5rem]">
                    <span className="text-white text-[3.5rem] max-w-[55rem] text-center font-[800]">Best choice for storing and sharing most important files.</span>
                    <span className="text-gray-blue mt-[1.5rem] text-[1.5rem]">Easy to use, reliable, private, and secure</span>
                </div>
            </section>
            <section className="w-full">
                <div className="max-w-[1100px] autoColFlexCenter">
                    <div className="autoColFlexCenter gap-[.1rem]">
                        <div className=" text-[3rem] gap-[1rem] font-[700] mt-[6.5rem]">
                            <span className="text-default-bg">How</span>
                            <span className="text-[#272727]">It Works</span>
                        </div>
                        <span className="text-[#7F848D] text-[1.2rem] font-[500]">Securely store, organize, and share all your files.</span>
                    </div>
                    <div className="betweenItemsCenter w-full mt-[4rem]">
                        <div className="colItemsCenter gap-[1.5rem] text-[1.4rem] font-semibold">
                            <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem]">
                                <div className="w-[250px] bg-white flex flex-col gap-[1rem]">
                                    <div className="h-[50px] w-full bg-home-bg rounded-md"></div>
                                    <div className="h-[50px] w-full bg-home-bg rounded-md"></div>
                                    <div className="h-[50px] w-full bg-home-bg rounded-md"></div>
                                    <AccessButton text="Create account" />
                                </div>
                            </Card>
                            <span>Sign up at Whisper</span>
                        </div>
                        <div className="colItemsCenter gap-[1.5rem] text-[1.4rem] font-semibold">
                            <span>Upload your files</span>
                            <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem]">
                                <div className="w-[250px] bg-white flex flex-col gap-[1rem] items-center">
                                    <AccessButton text="Upload file" />
                                    <span className="font-light">or drop a file</span>
                                </div>
                            </Card>
                        </div>
                        <div className="colItemsCenter gap-[1.5rem] text-[1.4rem] font-semibold">
                            <Card classes="px-[1.1rem] py-[1.45rem] rounded-[1rem]">
                                <div className="w-[250px] bg-white flex flex-col gap-[1rem]">
                                    <div className="h-[50px] w-full bg-home-bg rounded-md"></div>
                                    <div className="h-[50px] w-full bg-home-bg rounded-md"></div>
                                    <div className="h-[50px] w-full bg-home-bg rounded-md"></div>
                                    <AccessButton text="Create account" />
                                </div>
                            </Card>
                            <span>Differentiate folders</span>
                        </div>
                    </div>
                </div>
            </section>
        </ContainerLayout>
    )
}