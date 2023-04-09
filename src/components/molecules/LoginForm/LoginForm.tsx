import { Input } from "components"

export const LoginForm = () => {
    return (
        <div className="w-1/2 min-h-screen">
            <div>
                <span className="text-black">Log In</span>
                <Input type="email" />
            </div>
        </div>
    )
}   