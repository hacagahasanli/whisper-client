import { IContainerProps } from "./IContainerLayout";

export const ContainerLayout = ({ children }: IContainerProps) =>
    <div className="w-full bg-white min-h-screen flex overflow-hidden">
        {children}
    </div>