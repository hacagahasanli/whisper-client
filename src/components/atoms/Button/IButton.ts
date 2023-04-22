import React, { ButtonHTMLAttributes } from "react"

interface IDefaultButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
interface IAccessButton extends IDefaultButton {
    hasIcon?: boolean;
    bgWhite?: boolean;
    classes?: string;
}

interface ITransparentButton extends IDefaultButton {
    classes?: string;
}


export type { IAccessButton, ITransparentButton }