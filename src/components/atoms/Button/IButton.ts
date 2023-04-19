import React, { ButtonHTMLAttributes } from "react"

interface IDefaultButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
interface IAccessButton extends IDefaultButton {
    hasIcon?: boolean;
    bgWhite?: boolean;
    width?: string;
}

interface ITransparentButton extends IDefaultButton {
    color?: string;
}


export type { IAccessButton, ITransparentButton }