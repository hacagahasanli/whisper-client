import { ICardProps } from "./ICard"
import { cardDynmClasses } from "./CardHelper"

export const Card = ({ children, classes }: ICardProps) => {
    return (
        <div className={`${classes}`}>
            {children}
        </div>
    )
}