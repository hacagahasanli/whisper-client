import { AccessButton, Input } from "components"
import { ILogicalInputProps, ILogicalAuthSectionProps } from "./IExtractedComponent"
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

export const LogicalAuthSection: FC<ILogicalAuthSectionProps> = ({ submitBtn, authMethod, accountReminder }) => {
    return (
        <>
            {!!submitBtn && <AccessButton type="submit" text={submitBtn.text} onClick={submitBtn?.onClick} />}
            {!!accountReminder && !!authMethod && (
                <div className='flex justify-center gap-[.5rem] items-center mt-[1rem] cursor-pointer'>
                    <span className='text-[#32568A]'>{accountReminder?.text}</span>
                    <span className='underline text-default-bg' onClick={authMethod.onClick}>{authMethod?.text}</span>
                </div>
            )}
        </>
    )
}