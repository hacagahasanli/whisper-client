import { IChildrenProps } from "interfaces";

export const ContainerLayout = ({ children }: IChildrenProps) =>
    <div className="w-full min-h-[800px] flex overflow-hidden">
        <div className="w-full px-3 bg-default-bg min-h-[800px] mx-auto">
            {children}
        </div>
    </div>