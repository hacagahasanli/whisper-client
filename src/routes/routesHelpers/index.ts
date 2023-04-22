import { Login } from "components";

export const createLoginRoute = (path: string) => {
    return {
        path: path,
        Component: Login
    };
}
