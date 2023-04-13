import { v4 } from 'uuid';
import { Input, Icon } from 'components';
import { useFormDetails } from 'hooks';
import { LogicalInput, LogicalAuthSection } from './ExtractedComponents';

export const LoginForm = () => {
    const { inputs, title, checkBox, submitBtn, accountReminder, authMethod, forgetPassword, backwardAuthMethod, topRem, location } = useFormDetails()

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
                        <LogicalInput {...{ checkBox, forgetPassword }} />
                    </div>
                    <div>
                        <LogicalAuthSection {...{ submitBtn, accountReminder, authMethod }} />
                    </div>
                </form>
            </div>
        </div>
    )
}   