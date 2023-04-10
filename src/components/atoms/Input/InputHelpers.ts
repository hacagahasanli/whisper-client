const isCheckbox = (type: string) => type === "checkbox"

const getFontSize = (type: string) => isCheckbox(type) ? "1rem" : "1.2rem";

const getCursorType = (type: string) => isCheckbox(type) ? "pointer" : "auto";

const getTextColor = (type: string) => isCheckbox(type) && "gray-600";

const getAppearenceClass = (type: string) => isCheckbox(type) ? "appearance-none checked:bg-default-bg form-checkbox" : ""

const getFlexDir = (isRow?: boolean) => isRow ? "row" : "col";

const getValueByType = (type: string, isRow?: boolean) => {
    const textSize = getFontSize(type);
    const crsType = getCursorType(type);
    const textC = getTextColor(type);
    const appcenone = getAppearenceClass(type)
    const flexDir = getFlexDir(isRow)

    return {
        textSize,
        crsType,
        textC,
        appcenone,
        flexDir
    }
}

export { getValueByType }


