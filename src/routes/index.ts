import { createBrowserRouter } from "react-router-dom"
import { Login } from "components"

const createLoginRoute = (path: string) => {
    return {
        path: path,
        Component: Login
    };
}

const router = createBrowserRouter([
    createLoginRoute("/login"),
    createLoginRoute("/signup-email"),
    createLoginRoute("/signup-fullname")
])

export default router