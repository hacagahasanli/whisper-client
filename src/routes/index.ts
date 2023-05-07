import { createBrowserRouter } from "react-router-dom"
import { createRoute } from "./routesHelpers"
import { Home } from "components"

const router = createBrowserRouter([
    createRoute("/login"),
    createRoute("/signup-email"),
    createRoute("/signup-fullname"),
    {
        path: "",
        Component: Home
    }
])

export default router