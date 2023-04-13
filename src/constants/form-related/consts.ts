import { InputByType } from "./IFormRelated";

export const INPUTS_BY_TYPE: InputByType = {
    "email": {
        label: "Email",
        type:"email",
        id: "email",
        placeholder: "logo@gmail.com"
    },
    "password": {
        label: "Password",
        type:"password",
        id: "password",
        placeholder: "********"
    },
    "checkbox": {
        label: "Save",
        type:"checkbox",
        id: "checkbox"
    },
    "fullname":{
        id:"fullname",
        type:"text",
        label:"Full name",
        placeholder:"Name Surname"
    }
}