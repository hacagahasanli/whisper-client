import { landing_background } from "assets"
import { ContainerLayout, Navbar } from "components"

export const Home = () => {
    return (
        <ContainerLayout>
            <section className="bg-default-bg px-[12rem] py-[3rem] block w-full h-screen bg-cover bg-center overflow-hidden" >
                <Navbar />
                
            </section>
        </ContainerLayout>
    )
}