import { FC } from "react"
import { IIcons } from "./IIconGenerator"
import { ArrowLeft, ArrowRight, Debug, Encryption, Filter, LogoLight, Plans, Security, Sharing } from "./Icons"

export const Icon: FC<{ name: string; method?: () => void; width?: string; height?: string; }> = ({ name, method, ...rest }) => {
    const icons: IIcons = {
        "arrow_left": ArrowLeft,
        "arrow_right": ArrowRight,
        "logo_light": LogoLight,
        "home_security": Security,
        "home_debug": Debug,
        "home_filter": Filter,
        "home_encryption": Encryption,
        "home_plans": Plans,
        "home_sharing": Sharing,
    }
    const SelectedIcon = icons[name]
    return <SelectedIcon {...{ method }} {...rest} />;
}