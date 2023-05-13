import { Login } from "components";
import { FC } from "react";

export const createRoute = (path: string, Component: FC = Login) => {
    return {
        path: path,
        Component
    };
}
