import { FC } from "react"
import { IIconProps, IIcons } from "./IIconGenerator"
import { ArrowLeft, ArrowRight, CheckMark, Cup, Debug, Encryption, Filter, LogoLight, Plans, Security, Sharing } from "./Icons"

export const Icon: FC<IIconProps> = ({ name, method, ...rest }) => {
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
        "cup": Cup,
        "check_mark": CheckMark
    }
    const SelectedIcon = icons[name]
    return <SelectedIcon {...{ method }} {...rest} />;
}