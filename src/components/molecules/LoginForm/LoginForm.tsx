import { Input, AccessButton } from 'components';
import { useRecoilState } from 'recoil';
import { authDirectorState } from 'store';
import { IFormDetails } from "./ILoginForm"
import { v4 } from 'uuid';

export const LoginForm = () => {
    const [authDirector, setAuthDirector] = useRecoilState(authDirectorState)

    const formDetails: IFormDetails = {
        login: {
            title: "Log In",
            inputs: [{ type: "email" }, { type: "password" }],
            checkBox: {
                type: "checkbox",
                isRow: true,
                orderId: "-1"
            },
            submitBtn: {
                text: 'Log in'
            },
            accountReminder: {
                text: "Don't have account?"
            },
            authMethod: {
                text: "Sign up",
                onClick: (e: Event) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setAuthDirector("signUp")
                }
            },
            forgetPassword: {
                text: "Forget password?"
            }
        },
        signUp: {
            title: "Sign up",
            inputs: [{ type: "email" }],
            submitBtn: {
                text: 'Sign up'
            },
            accountReminder: {
                text: "You have an account?"
            },
            authMethod: {
                text: "Log In"
            },
        }
    }

    const { inputs, title, checkBox, submitBtn, accountReminder, authMethod, forgetPassword } = formDetails[authDirector]

    return (
        <div className="w-1/2 min-h-screen flex flex-col justify-center items-center relative">
            <div className="flex flex-col ml-[8rem] justify-center items-center min-w-[400px] max-w-[400px] mt-[5rem] absolute left-0 mb-[8.5rem]">
                <span className="text-[#393939] text-[2.5rem] w-full text-start font-bold mb-[2rem]">{title}</span>
                <form className="w-full">
                    <div className="flex flex-col gap-[1.4rem]">
                        {inputs?.map(({ type }: { type: string }) => <Input key={v4()} {...{ type }} />)}
                    </div>
                    {!!checkBox && (
                        <div className="flex justify-between items-center mt-[1rem]">
                            <Input type={checkBox?.type} isRow={checkBox?.isRow} orderId={checkBox?.orderId} />
                            {!!forgetPassword && (
                                <div>
                                    <span className="text-default-bg cursor-pointer">{forgetPassword.text}</span>
                                </div>
                            )}
                        </div>
                    )}
                    <div>
                        {!!submitBtn && <AccessButton type="submit" text={submitBtn.text} />}
                        {!!accountReminder && !!authMethod && (
                            <div className='flex justify-center gap-[.5rem] items-center mt-[1rem] cursor-pointer'>
                                <span className='text-[#32568A]'>{accountReminder?.text}</span>
                                <span className='underline text-default-bg' onClick={authMethod.onClick}>{authMethod?.text}</span>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}   