import { Icon } from "components"

interface AsideButtons {
    id: string;
    name: string;
    value: string;
    addClass?: string;
    defaultClass?: string;
}

export const AsideSection = () => {
    const classDef = "flex items-center gap-[1rem] px-[1.4rem] min-h-[40px] rounded-lg"
    const asideButtons: AsideButtons[] = [
        {
            id: "myFiles",
            name: "myFiles",
            value: "My files",
            addClass: "text-white bg-default-bg"
        },
        {
            id: "myPerson",
            name: "myPerson",
            value: "Account",
            addClass: 'bg-transparent text-[#252C32]'
        },
        {
            id: "trash",
            name: "trash",
            value: "Trash",
            addClass: 'bg-transparent text-[#252C32]'
        },
        {
            id: "AddIcon",
            name: "add_icon",
            value: "Add new file",
            defaultClass: "px-[1.3rem] py-[1rem] flex border-[.1rem] border-solid border-[#DDE2E4] rounded-lg gap-3 max-w-max"
        }
    ]

    return (
        <aside className="w-[325px] min-h-screen relative">
            <span className="absolute right-0 w-[.15rem] min-h-screen bg-[#E5E9EB]"></span>
            <div className="py-[2rem] px-[2rem] w-full flex flex-col gap-3">
                {
                    asideButtons.map(({ id, name, value, addClass, defaultClass = classDef }: AsideButtons) => {
                        return (
                            <div className="flex flex-col gap-[.5rem]" key={id}>
                                <div className={`${defaultClass} ${addClass ?? ""}`}>
                                    <Icon {...{ name }} />
                                    <span className="text-[1rem]">{value}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </aside >
    )
}