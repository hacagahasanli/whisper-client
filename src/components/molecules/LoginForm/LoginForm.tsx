import { Input, AccessButton } from 'components';
import { useRecoilState } from 'recoil';
import { authDirectorState } from 'store';
import { IFormDetails } from "./ILoginForm"
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


export const LoginForm = () => {
    const navigate = useNavigate()
    const [authDirector, setAuthDirector] = useRecoilState(authDirectorState)

    const changeDirection = (e: Event, director: string) => {
        e.preventDefault();
        e.stopPropagation();
        setAuthDirector(director)
        navigator(director)
    }

    const navigator = (director: string) => {
        director === "login"
            ? navigate("/login", { replace: true })
            : navigate("/signup", { replace: true })
    }

    const formDetails: IFormDetails = {
        login: {
            title: "Log In",
            inputs: [{ inputKey: "email" }, { inputKey: "password" }],
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
                onClick: (e: Event) => changeDirection(e, "signUpLevelOne")
            },
            forgetPassword: {
                text: "Forget password?"
            }
        },
        signUpLevelOne: {
            title: "Sign up",
            inputs: [{ inputKey: "email" }],
            submitBtn: {
                text: 'Sign up',
                onClick: (e: Event) => changeDirection(e, "signUpLevelTwo")
            },
            accountReminder: {
                text: "You have an account?"
            },
            authMethod: {
                text: "Log In",
                onClick: (e: Event) => changeDirection(e, "login")
            },
        },
        signUpLevelTwo: {
            title: "Sign up",
            inputs: [{ inputKey: "fullname" }, { inputKey: "password" }],
            submitBtn: {
                text: 'Create account',

            },
            backwardAuthMethod: {
                onClick: (e: Event) => changeDirection(e, "signUpLevelOne")
            },
        }
    }

    const topRem = authDirector === "login" ? 1.5 : 1
    const { inputs, title, checkBox, submitBtn, accountReminder, authMethod, forgetPassword } = formDetails[authDirector]

    return (
        <div className="w-1/2 min-h-screen flex flex-col relative">
            <div className="flex flex-col ml-[8rem] justify-center items-center min-w-[400px] max-w-[500px] mt-[8rem] absolute left-0 mb-[8.5rem]">
                <span className="text-[#393939] text-[2.5rem] w-full text-start font-bold mb-[2rem]">{title}</span>
                <form className="w-full">
                    <div className="flex flex-col gap-[1.4rem]">
                        {inputs?.map(({ inputKey }: { inputKey: string }) => <Input key={v4()} {...{ inputKey }} />)}
                    </div>
                    <div className={`flex justify-between items-center mt-[1rem] mb-[${topRem}rem]`}>
                        {!!checkBox && (
                            <>
                                <Input inputKey={checkBox?.type} isRow={checkBox?.isRow} orderId={checkBox?.orderId} />
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