interface IStepItems {
    id: string;
    text: string;
}

interface IWorkPlans {
    id: string;
    stepItems: IStepItems[];
    btnText: string;
    bottomTitle?: string;
    extraChoiceBtn?: string;
    topTitle?: string;
}

interface IFeaturedSpecItems {
    id: string;
    icon: string;
    title: string;
    description: string;
}

interface IFeaturedSpecItemsProps {
    featuredSpecItems: IFeaturedSpecItems[]
}

interface IWorkPlansProps {
    worksPlans: IWorkPlans[];
}


interface IPricingDetails {
    id: string;
    detail: string;
    icon_name?: string;
    classes?: string;
}

interface IPriceDetails {
    textColor: string;
    details: IPricingDetails[]
}

interface IPlanPrice {
    currency?: string,
    value?: string,
    custom?: string,
    perMonth?: string;
}

interface IPlanHeaderProps {
    bgColor: string;
    textColor: string;
    plan_name: string;
    value?: string;
    custom?: string;
    currency?: string;
    perMonth?: string;
    extraBeauty?: boolean;
}
interface IPlans extends IPlanPrice {
    id: string,
    plan_name: string,
    bgColor: string,
    textColor: string,
    perMonth?: string,
    bdColor: string;
    borderCard?: string;
    details: IPricingDetails[],
    text?: string;
    extraBeauty?: boolean;
}

interface IDefaultName {
    id: string;
    name: string;
}

interface IFooterIcons extends IDefaultName {

}

interface IFooterHeadProps {
    FOOTER_ICONS: IFooterIcons[]
}


export type {
    IWorkPlans,
    IStepItems,
    IWorkPlansProps,
    IFeaturedSpecItems,
    IFeaturedSpecItemsProps,
    IPricingDetails,
    IPlans,
    IPlanPrice,
    IPriceDetails,
    IPlanHeaderProps,
    IFooterIcons,
    IFooterHeadProps
}