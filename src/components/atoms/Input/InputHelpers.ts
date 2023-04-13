import classnames from "classnames"

const inputWrapperDefaultClasses = `flex w-full justify-center gap-[.5rem]`
const inputDefaultClasses = `border border-solid border-input-brd rounded-[.25rem] py-[.7rem] px-[.7rem] w-full bg-white`

const inputDynmClasses = (tagRole: string, isCheckBox: boolean, orderId?: string) => {
    switch (tagRole) {
        case "input": return classnames(
            {
                "cursor-pointer": isCheckBox,
                "cursor-auto": !isCheckBox,
                "appearance-none checked:bg-default-bg form-checkbox": isCheckBox,
                "order-[-1]": orderId,
            },
            inputDefaultClasses
        )
        case "inputWrapper": return classnames(
            {
                "flex-row": isCheckBox,
                "flex-col": !isCheckBox
            },
            inputWrapperDefaultClasses
        )
        case "label": return classnames(
            {
                "text-[1rem]": isCheckBox,
                "cursor-pointer": isCheckBox,
                "cursor-auto": !isCheckBox,
                "text-gray-600": isCheckBox,
            }
        )
    }
}

const getValueByType = (type: string, orderId?: string) => {
    const isCheckBox = type === "checkbox"
    const inputClasses = inputDynmClasses("input", isCheckBox, orderId)
    const inputWrapperClasses = inputDynmClasses("inputWrapper", isCheckBox, orderId)
    const labelClasses = inputDynmClasses("label", isCheckBox, orderId)

    return {
        labelClasses,
        inputWrapperClasses,
        inputClasses
    }
}

export { getValueByType }


