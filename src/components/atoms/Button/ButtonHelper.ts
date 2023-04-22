import classnames from 'classnames';

const defaultButtonClasses = `w-full flex justify-center items-center`
export const buttonClasses = (bgWhite: boolean) => classnames(
    {
        "bg-default-bg": !bgWhite,
        "bg-white": bgWhite,
        "text-[#293241]": bgWhite,
        "text-black": bgWhite,
        "text-white": !bgWhite,
    },
    defaultButtonClasses
)