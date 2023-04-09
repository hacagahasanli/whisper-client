import { IInput } from "./IInput"

const inputs = {
    "email": {
        label: "Email",
        id: "email",
    },
    "password": {
        label: "Password",
        id: "password"
    }
}

export const Input = ({ type }: IInput) => {
    const { label, id }: { label: string, id: string } = inputs["email"]
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input {...{ type, id }} />
        </div>
    )
}