import { arrow_left } from "assets/icons"
import { FC } from "react"
import { useSetRecoilState } from "recoil"
import { authDirectorState } from "store"

type IIcons = {
    [key: string]: any
}

const ArrowLeft = ({ method }: { method: () => void }) => {
    return (
        <svg onClick={method} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
    )
}

export const Icon: FC<{ name: string; method?: () => void }> = ({ name, method }) => {
    const icons: IIcons = {
        "arrow_left": ArrowLeft
    }
    const SelectedIcon = icons[name]
    return <SelectedIcon {...{ method }} />;
}