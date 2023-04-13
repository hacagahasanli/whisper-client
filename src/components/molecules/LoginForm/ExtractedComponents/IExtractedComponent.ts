interface ILogicalInputProps {
    checkBox: {
        type: string;
        orderId: string;
    }
    forgetPassword: {
        text: string;
    }
}

interface ISubmitBtn {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface AuthMethod {
    text:string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;

}

interface ILogicalAuthSectionProps {
    submitBtn: ISubmitBtn
    authMethod: AuthMethod
    accountReminder: {
        text: string;
    }
}

export type { ILogicalInputProps, ILogicalAuthSectionProps }