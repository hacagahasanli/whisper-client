import { Icon } from "components"
import React, { memo} from "react"

export const DocsTableTitle = memo(() => {
    const icons = [
        { name: "column_grid", classes: "rounded-l-md bg-[#E5E9EB]" },
        { name: "row_grid", classes: "rounded-r-md bg-[#efeff0]" }
    ]
    return (
        <div className="relative h-[155px] w-full text-[#252C32]">
            <div className="w-full pt-[2rem] pl-[3rem] pr-[5rem] flex space-between flex-col">
                <span className="font-bold text-[2.5rem]">My files</span>
                <div className="flex self-end max-w-max cursor-pointer rounded-l-md">
                    {icons.map(({ name, classes }) => (
                        <span className={`p-[.6rem] bg-[#E5E9EB] ${classes}`} key={name}>
                            <Icon {...{ name }} />
                        </span>
                    ))}
                </div>
                <div className="flex gap-2">
                    <span>All files</span>
                    <span>Recently</span>
                </div>
            </div>
            <span className="absolute bottom-0 w-full h-[.15rem] bg-[#E5E9EB]"></span>
        </div>
    )
})