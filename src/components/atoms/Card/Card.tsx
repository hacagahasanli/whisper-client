import { ICardProps } from "./ICard"
import { cardDynmClasses } from "./CardHelper"

export const Card = ({ children, classes }: ICardProps) => {
    return (
        <div className={`${classes} bg-white`}>
            {children}
        </div>
    )
}