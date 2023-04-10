import { Input, AccessButton } from 'components';

export const LoginForm = () => {
    return (
        <div className="w-1/2 min-h-screen ml-[8rem] flex flex-col justify-center items-center relative">
            <div className="flex flex-col justify-center items-center gap-[4rem] min-w-[400px] max-w-[400px] mt-[5rem] absolute left-0 mb-[8.5rem]">
                <span className="text-[#393939] text-[2.5rem] w-full text-start font-bold">Log In</span>
                <form className="w-full">
                    <div className="flex flex-col gap-[1.4rem]">
                        <Input type="email" />
                        <Input type="password" />
                    </div>
                    <div className="flex justify-between items-center mt-[1rem] mb-[1.5rem]">
                        <Input type="checkbox" isRow={true} orderId="-1" />
                        <div>
                            <span className="text-default-bg cursor-pointer">Forget password?</span>
                        </div>
                    </div>
                    <AccessButton type="submit" text='Log in' />
                </form>
            </div>
        </div>
    )
}   