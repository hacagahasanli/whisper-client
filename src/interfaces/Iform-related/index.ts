interface IInputsByTypeObject {
    label: string;
    id: string;
    placeholder?:string;
    type:string;
}

interface IFormDetails {
    [key: string]: any;
}


export type { IInputsByTypeObject, IFormDetails }