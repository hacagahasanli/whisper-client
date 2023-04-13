import { Input, AccessButton, Icon } from 'components';
import { useSetRecoilState } from 'recoil';
import { authDirectorState } from 'store';
import { IFormDetails } from "./ILoginForm"
import { useLocation } from 'react-router-dom';
import { v4 } from 'uuid';
import { useNavigator } from 'hooks';

export const LoginForm = () => {
    const { navigator } = useNavigator()
    const setAuthDirector = useSetRecoilState(authDirectorState)
    const location = useLocation().pathname.trim().replace(/^\/|\/$/g, '')

    const changeDirection = (e: Event, director: string) => {
        e.preventDefault();
        e.stopPropagation();
        setAuthDirector(location)
        navigator(director)
    }

    const formDetails: IFormDetails = {
        login: {
            title: "Log In",
            inputs: [{ inputKey: "email" }, { inputKey: "password" }],
            checkBox: {
                type: "checkbox",
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
                onClick: (e: Event) => changeDirection(e, "signup-email")
            },
            forgetPassword: {
                text: "Forget password?"
            }
        },
        'signup-email': {
            title: "Sign up",
            inputs: [{ inputKey: "email" }],
            submitBtn: {
                text: 'Sign up',
                onClick: (e: Event) => changeDirection(e, "signup-fullname")
            },
            accountReminder: {
                text: "You have an account?"
            },
            authMethod: {
                text: "Log In",
                onClick: (e: Event) => changeDirection(e, "login")
            },
        },
        'signup-fullname': {
            title: "Sign up",
            inputs: [{ inputKey: "fullname" }, { inputKey: "password" }],
            submitBtn: {
                text: 'Create account',
                onClick: (e: Event) => changeDirection(e, "login")
            },
            backwardAuthMethod: {
                onClick: (e: Event) => changeDirection(e, "signup-email")
            },
        }
    }

    const topRem = location === "login" ? '1.5' : '3'
    const { inputs, title, checkBox, submitBtn, accountReminder, authMethod, forgetPassword, backwardAuthMethod } = formDetails[location]

    return (
        <div className="w-1/2 min-h-screen flex flex-col relative">
            <div className="flex flex-col ml-[8rem] justify-center items-center min-w-[400px] max-w-[500px] mt-[9rem] absolute left-0 mb-[8.5rem]">
                <div className='w-full flex mb-[2.5rem]'>
                    {location === "signup-fullname" && <Icon method={backwardAuthMethod.onClick} name="arrow_left" />}
                </div>
                <span className="text-[#393939] text-[2.5rem] w-full text-start font-bold mb-[2rem]">{title}</span>
                <form className="w-full">
                    <div className="flex flex-col gap-[1.4rem]">
                        {inputs?.map(({ inputKey }: { inputKey: string }) => <Input key={v4()} {...{ inputKey }} />)}
                    </div>
                    <div className={`flex justify-between items-center mt-[1rem] mb-[${topRem}rem]`}>
                        {!!checkBox && (
                            <>
                                <Input inputKey={checkBox?.type} orderId={checkBox?.orderId} />
                                {!!forgetPassword && (
                                    <div>
                                        <span className="text-default-bg cursor-pointer">{forgetPassword.text}</span>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div>
                        {!!submitBtn && <AccessButton type="submit" text={submitBtn.text} onClick={submitBtn?.onClick} />}
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