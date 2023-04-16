import classnames from 'classnames';

const defaultButtonClasses = `w-full px-6 flex justify-center items-center gap-1 text-[1.2rem] rounded-md min-h-[3rem]`
export const buttonClasses = (bgWhite: boolean, width: string) => classnames(
    {
        "bg-default-bg": !bgWhite,
        "bg-white": bgWhite,
        "text-[#293241]": bgWhite,
        "text-black": bgWhite,
        "text-white": !bgWhite,
    },
    defaultButtonClasses
)