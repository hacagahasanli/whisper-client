import { Icon } from "components";

export const ExtraBeauty = ({ extraBeauty }: { extraBeauty?: boolean }) => (
    <>
        {extraBeauty && (<div style={{ position: "absolute", top: "0", left: 0, zIndex: "0" }}>
            <Icon name="shap" />
        </div>
        )}
    </>
)