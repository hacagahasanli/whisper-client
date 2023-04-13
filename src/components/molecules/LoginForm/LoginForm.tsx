import { Input, AccessButton, Icon } from 'components';
import { useFormDetails } from 'hooks';
import { v4 } from 'uuid';

export const LoginForm = () => {
    const { location, formDetails } = useFormDetails()

    const topRem = location === "login" ? '1.5' : '3'
    const { inputs, title, checkBox, submitBtn, accountReminder, authMethod, forgetPassword, backwardAuthMethod } = formDetails[location]

    return (
        <div className="w-1/2 min-h-screen flex flex-col relative">
            <div className="flex flex-col ml-[8rem] justify-center items-center min-w-[400px] max-w-[500px] mt-[9rem] absolute left-0 mb-[8.5rem]">
                <div className='w-full flex mb-[2.5rem]'>
                    {location === "signup-fullname" && <Icon method={backwardAuthMethod.onClick} name="arrow_left" />}
                </div>
                <span className="text-[#393939] text-[2.5rem] w-full text-start font-bold mb-[2rem]">{title}</span>
                <form className="w-full">
                    <div className="flex flex-col gap-[1.4rem]">
                        {inputs?.map(({ inputKey }: { inputKey: string }) => <Input key={v4()} {...{ inputKey }} />)}
                    </div>
                    <div className={`flex justify-between items-center mt-[1rem] mb-[${topRem}rem]`}>
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
                    </div>
                    <div>
                        {!!submitBtn && <AccessButton type="submit" text={submitBtn.text} onClick={submitBtn?.onClick} />}
                        {!!accountReminder && !!authMethod && (
                            <div className='flex justify-center gap-[.5rem] items-center mt-[1rem] cursor-pointer'>
                                <span className='text-[#32568A]'>{accountReminder?.text}</span>
                                <span className='underline text-default-bg' onClick={authMethod.onClick}>{authMethod?.text}</span>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}   