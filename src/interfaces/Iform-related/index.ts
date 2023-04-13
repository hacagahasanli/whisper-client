interface IInputsByTypeObject {
    label: string;
    id: string;
    placeholder?: string;
    type: string;
}

interface IFormDetails {
    [key: string]: any;
}

interface MouseClickBtn {
    e: React.MouseEvent<HTMLButtonElement>
}

export type { IInputsByTypeObject, IFormDetails, MouseClickBtn }