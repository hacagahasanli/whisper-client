import { AccessButton } from "components"
import { ILogicalAuthSectionProps } from "../IExtractedComponent"
import { FC, memo } from "react"

export const LogicalAuthSection: FC<ILogicalAuthSectionProps> = memo(({ submitBtn, authMethod, accountReminder }) => {
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
})