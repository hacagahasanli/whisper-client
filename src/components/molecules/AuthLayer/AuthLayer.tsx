import React from "react"
import { logo_light } from "assets"

export const AuthLayer = React.memo(() => {
    return (
        <div className="w-1/2 bg-default-bg min-h-screen text-white">
            <header className="py-20 px-24">
                <div className="flex flex-col justify-center gap-12">
                    <div>
                        <img src={logo_light} alt="light-logo" />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <span className="lg:text-5xl sm:text-xs md:text-xl font-light">Storing</span>
                        <span className="text-5xl font-bold">most important files</span>
                    </div>
                </div>
            </header>
        </div>
    )
})