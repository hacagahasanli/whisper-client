type IIcons = {
    [key: string]: any
}

type IMethod = {
    method?: () => void
}

interface IIconSize {
    width: string;
    height: string
}

interface IIconProps {
    name: string;
    method?: () => void;
    width?: string;
    height?: string;
    color?: string
}


export type { IMethod, IIcons, IIconSize, IIconProps }