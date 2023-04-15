import { createBrowserRouter } from "react-router-dom"
import { createLoginRoute } from "./routesHelpers"
import { Home } from "components"

const router = createBrowserRouter([
    createLoginRoute("/login"),
    createLoginRoute("/signup-email"),
    createLoginRoute("/signup-fullname"),
    {
        path: "",
        Component: Home
    }
])

export default router