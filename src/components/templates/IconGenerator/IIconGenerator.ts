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

export type { IMethod, IIcons, IIconSize }