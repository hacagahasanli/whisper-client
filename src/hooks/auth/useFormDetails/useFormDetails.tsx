import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authDirectorState } from "store";
import { useNavigator } from "../useNavigator";
import { IFormDetails } from "interfaces";

export const useFormDetails = () => {
    const { navigator } = useNavigator()
    const setAuthDirector = useSetRecoilState(authDirectorState)
    const location = useLocation().pathname.trim().replace(/^\/|\/$/g, '')

    const changeDirection = (e: React.MouseEvent<HTMLButtonElement> | Event, director: string) => {
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
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => changeDirection(e, "signup-email")
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
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => changeDirection(e, "signup-fullname")
            },
            accountReminder: {
                text: "You have an account?"
            },
            authMethod: {
                text: "Log In",
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => changeDirection(e, "login")
            },
        },
        'signup-fullname': {
            title: "Sign up",
            inputs: [{ inputKey: "fullname" }, { inputKey: "password" }],
            submitBtn: {
                text: 'Create account',
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => changeDirection(e, "login")
            },
            backwardAuthMethod: {
                onClick: (e: Event) => changeDirection(e, "signup-email")
            },
        }
    }

    const { inputs, title, checkBox, submitBtn, accountReminder, authMethod, forgetPassword, backwardAuthMethod } = formDetails[location]
    const topRem = location === "login" ? '1.5' : '3'

    return {
        inputs, title, checkBox, submitBtn, accountReminder, authMethod, forgetPassword, backwardAuthMethod, topRem, location
    }
}