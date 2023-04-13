import { useNavigate } from "react-router-dom"

export const useNavigator = () => {
    const navigate = useNavigate()

    const navigator = (director: string) => {
        try {
            switch (director) {
                case "login":
                    return navigate("/login", { replace: true })
                case "signup-email":
                    return navigate("/signup-email", { replace: true })
                case "signup-fullname":
                    return navigate("/signup-fullname", { replace: true })
            }
        } catch (err) {
            return navigate("/login", { replace: true })
        }
    }

    return {
        navigator
    }
}