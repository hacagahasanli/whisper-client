import { arrow_left } from "assets/icons"
import { FC } from "react"

type IIcons = {
    [key: string]: any
}

const ArrowLeft = () => arrow_left

export const Icon: FC<{ name: string }> = ({ name }) => {
    const icons: IIcons = {
        "arrow_left": ArrowLeft
    }
    const SelectedIcon = icons[name]
    return <SelectedIcon />;
}