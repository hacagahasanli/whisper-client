import { IChildrenProps } from "interfaces";

export const ContainerLayout = ({ children }: IChildrenProps) =>
    <div className="w-full min-h-screen flex relative bg-home-bg">
        <div className="w-full min-h-screen mx-auto bg-home-bg">
            {children}
        </div>
    </div>