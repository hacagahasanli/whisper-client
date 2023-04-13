import { createBrowserRouter } from "react-router-dom"
import { Login } from "components"

const router = createBrowserRouter([
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/signup-email",
        Component: Login
    },
    {
        path: "/signup-fullname",
        Component: Login
    }
])

export default router