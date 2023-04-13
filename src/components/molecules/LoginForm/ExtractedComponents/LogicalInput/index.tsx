import { Input } from "components"
import { ILogicalInputProps } from "../IExtractedComponent"
import { FC, memo } from "react"

export const LogicalInput: FC<ILogicalInputProps> = memo(({ checkBox, forgetPassword }) => {
    return (
        <>
            {!!checkBox && (
                <>
                    <Input inputKey={checkBox?.type} orderId={checkBox?.orderId} />
                    {!!forgetPassword && (
                        <div>
                            <span className="text-default-bg cursor-pointer">{forgetPassword.text}</span>
                        </div>
                    )}
                </>
            )}
        </>
    )
})