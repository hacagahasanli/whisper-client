import { FC } from "react"
import { IIconProps, IIcons } from "./IIconGenerator"
import { ArrowLeft, LogoDark, ArrowRight, CheckMark, CrossMark, Cup, Debug, Encryption, Filter, LogoLight, Plans, Security, Shap, Sharing, TwitterIcon, GithubIcon, InstagramIcon, SearchIcon } from "./Icons"

export const Icon: FC<IIconProps> = ({ name, method, color, ...rest }) => {
    const icons: IIcons = {
        //login
        "arrow_left": ArrowLeft,

        //global
        "arrow_right": ArrowRight,
        "logo_light": LogoLight,
        "logo_dark": LogoDark,
        "search": SearchIcon,

        //home
        "home_security": Security,
        "home_debug": Debug,
        "home_filter": Filter,
        "home_encryption": Encryption,
        "home_plans": Plans,
        "home_sharing": Sharing,
        "cup": Cup,
        "check_mark": CheckMark,
        "cross_mark": CrossMark,
        "shap": Shap,
        "twitter_icon": TwitterIcon,
        "github_icon": GithubIcon,
        "instagram_icon": InstagramIcon,
    }
    const SelectedIcon = icons[name]
    return <SelectedIcon {...{ method, color }} {...rest} />;
}