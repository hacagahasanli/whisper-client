import { Input } from "components"

export const LoginForm = () => {
    return (
        <div className="w-1/2 min-h-screen pl-[8rem]">
            <div className="flex flex-col justify-center gap-[4rem] items-center min-h-screen max-w-[400px]">
                <span className="text-black text-[3.2rem]">Log In</span>
                <form className="w-full">
                    <div className="flex flex-col gap-[1.4rem]">
                        <Input type="email" />
                        <Input type="password" />
                    </div>
                    <div className="flex justify-between items-center mt-[1rem]">
                        <div>
                            <Input type="checkbox" isRow={true} orderId="-1" />
                        </div>
                        <div>
                            <span className="text-default-bg cursor-pointer">Forget password?</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}   