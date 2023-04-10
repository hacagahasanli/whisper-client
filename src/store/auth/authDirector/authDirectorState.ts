import { atom } from "recoil";
import { v4 } from "uuid"

const namespace = `authDirector/${v4()}`

export const authDirectorState = atom({
    key: namespace,
    default: 'login'
})