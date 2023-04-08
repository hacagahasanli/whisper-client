import { createBrowserRouter } from "react-router-dom"
import { Login } from "components"

const router = createBrowserRouter([
    {
        path: "/login",
        Component: Login
    }
])

export default router