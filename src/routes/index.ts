import { createBrowserRouter } from "react-router-dom"
import { createRoute } from "./routesHelpers"
import { Home, Dashboard } from "components"

const router = createBrowserRouter([
    createRoute("/login"),
    createRoute("/signup-email"),
    createRoute("/signup-fullname"),
    createRoute("", Home),
    createRoute("/dashboard", Dashboard)
])

export default router