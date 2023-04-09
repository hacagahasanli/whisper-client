import { logo_light } from "assets"

export const AuthLayer = () => {
    return (
        <div className="w-1/2 bg-default-bg min-h-screen text-white">
            <header className="flex flex-col justify-center gap-6 py-20 px-24">
                <div className="w-16">
                    <img src={logo_light} alt="light-logo" className="w-full" />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="lg:text-4xl sm:text-xs md:text-xl">Storing</span>
                    <strong className="text-4xl">most important files</strong>
                </div>
            </header>
        </div>
    )
}