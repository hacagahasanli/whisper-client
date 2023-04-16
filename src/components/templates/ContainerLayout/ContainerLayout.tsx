import { IChildrenProps } from "interfaces";

export const ContainerLayout = ({ children }: IChildrenProps) =>
    <div className="w-full min-h-screen flex">
        <div className="w-full min-h-screen mx-auto ">
            {children}
        </div>
    </div>