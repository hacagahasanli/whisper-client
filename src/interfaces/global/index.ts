import { ReactNode } from "react";

interface IChildrenProps {
    children?: ReactNode;
}

interface IKeyStringObject {
    [key: string]: string
}

export type { IChildrenProps, IKeyStringObject }