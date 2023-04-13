import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authDirectorState } from "store";
import { useNavigator } from "../useNavigator";
import { IFormDetails } from "interfaces";

export const useFormDetails = () => {
    const setAuthDirector = useSetRecoilState(authDirectorState)
    const location = useLocation().pathname.trim().replace(/^\/|\/$/g, '')
    const { navigator } = useNavigator()

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

    return {
        formDetails,
        location
    }
}