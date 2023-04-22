import { ICombineClassesProps } from "./ICard"
import { IKeyStringObject } from "interfaces"

const radiusClass: IKeyStringObject = {
    "sm": ".8rem",
    "md": "1.2rem",
    "lg": "1.4rem"
}

const paddingClass: IKeyStringObject = {
    "work-lg": "px-[1.1rem] py-[1.45rem]"
}

const classesCombine = ({ padding, radius }: ICombineClassesProps) => {
    try {
        return `${paddingClass[padding]} rounded-[${radiusClass[radius]}] `
    } catch (err) { }
}

export const cardDynmClasses = ({ classes }: { classes: string }) => {
    try {
        const classProps = classes.split(' ')
        return classesCombine({ padding: classProps[0], radius: classProps[1] })
    } catch (err) { }
}
