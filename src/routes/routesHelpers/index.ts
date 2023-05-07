import { Login } from "components";

export const createRoute = (path: string) => {
    return {
        path: path,
        Component: Login
    };
}
