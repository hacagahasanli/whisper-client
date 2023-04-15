import { IContainerProps } from "./ILoginLayout";

export const LoginLayout = ({ children }: IContainerProps) =>
    <div className="w-full bg-white min-h-screen flex overflow-hidden">
        {children}
    </div>