import { IChildrenProps } from "interfaces";

export const ContainerLayout = ({ children }: IChildrenProps) =>
    <div className="w-full min-h-[80rem] flex relative">
        <div className="w-full min-h-[80rem] mx-auto">
            {children}
        </div>
    </div>