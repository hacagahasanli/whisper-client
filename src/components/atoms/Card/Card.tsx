import { ICardProps } from "./ICard"
import { memo } from "react"

export const Card = memo(({ children, classes }: ICardProps) => {
    return (
        <div className={`${classes}`}>
            {children}
        </div>
    )
})