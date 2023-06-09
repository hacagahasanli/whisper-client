import { memo } from "react"
import { IPlanPrice } from "../../IExtractedSections"

export const PlanPrice = memo(({ currency, value, custom, perMonth }: IPlanPrice) => {
    return !!value ? (
        <div className="flex">
            <div className="flex justify-between w-[2.2rem]">
                <span style={{ lineHeight: "1.2rem" }} className="self-end font-semibold text-[1.2rem]">{currency}</span>
                <p style={{ lineHeight: "1.6rem" }} className="text-[2rem] mb-[.1rem] font-semibold">{value}</p>
            </div>
            {!!perMonth && <span className="self-end ml-[2rem] italic font-light text-[.8rem]">{perMonth}</span>}
        </div>
    ) : <span className="font-bold text-[1.1rem]">{custom}</span>
})