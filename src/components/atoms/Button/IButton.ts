import React, { ButtonHTMLAttributes } from "react"
interface IAccessButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    hasIcon?: boolean;
    bgWhite?: boolean;
    width?: string;
}


export type { IAccessButton }