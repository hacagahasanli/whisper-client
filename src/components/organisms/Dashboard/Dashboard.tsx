import { ContainerLayout, Icon } from "components"

export const Dashboard = () => {
    return (
        <ContainerLayout>
            <header className="w-full h-[90px]">
                <div className="w-full flex items-center min-h-full px-[1rem] py-[1rem] bg-gray-300">
                    <div className="flex items-center w-[280px] flex-1 bg-red-500">
                        <Icon name="logo_dark" />
                    </div>
                    <div className="flex flex-1">
                        <input placeholder="Search" value={""} />
                    </div>
                </div>
            </header>
        </ContainerLayout>
    )
}