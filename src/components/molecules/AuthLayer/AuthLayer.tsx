import React from "react"
import { Icon } from "components"

export const AuthLayer = React.memo(() => {
    return (
        <div className="w-1/2 bg-default-bg min-h-screen text-white">
            <header className="py-20 px-24">
                <div className="colJustifyCenter gap-12">
                    <div>
                        <Icon name="logo_light" />
                    </div>
                    <div className="colJustifyCenter gap-4">
                        <span className="lg:text-5xl sm:text-xs md:text-xl font-light">Storing</span>
                        <span className="text-5xl font-bold">most important files</span>
                    </div>
                </div>
            </header>
        </div>
    )
})