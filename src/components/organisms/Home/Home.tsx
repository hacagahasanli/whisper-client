import { landing_background } from "assets"
import { ContainerLayout, Navbar } from "components"

export const Home = () => {
    return (
        <ContainerLayout>
            <div style={{ backgroundImage: `url(${landing_background})` }} className="bg-black absolute left-0 top-0 block w-full min-h-screen bg-cover bg-center h-screen" >
                <Navbar />

            </div>
        </ContainerLayout>
    )
}