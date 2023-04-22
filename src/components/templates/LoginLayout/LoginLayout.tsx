import { IChildrenProps } from "interfaces";


export const LoginLayout = ({ children }: IChildrenProps) =>
    <div className="w-full bg-white min-h-screen flex overflow-hidden">
        {children}
    </div>