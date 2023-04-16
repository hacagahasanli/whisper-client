import { ICardProps } from "./ICard"
import { cardDynmClasses } from "./CardHelper"

export const Card = ({ children, classes }: ICardProps) => {
    const resultClasses = cardDynmClasses({ classes })
    return (
        <div className={`${resultClasses} bg-white`}>
            {children}
        </div>
    )
}