import { IChildrenProps } from "interfaces";

export const ContainerLayout = ({ children }: IChildrenProps) =>
    <div className="w-full min-h-[80rem] flex overflow-hidden">
        <div className="w-full bg-default-bg min-h-[80rem] mx-auto px-[12rem] py-[3rem]">
            {children}
        </div>
    </div>