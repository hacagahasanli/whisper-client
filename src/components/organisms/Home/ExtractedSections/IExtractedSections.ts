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

interface IPlans {
    id: string,
    plan_name: string,
    currency?: string,
    value?: string,
    bgColor: string,
    textColor: string,
    perMonth?:string,
    custom?: string,
    bdColor:string;
    borderCard?:string;
    details: IPricingDetails[],
}

export type {
    IWorkPlans,
    IStepItems,
    IWorkPlansProps,
    IFeaturedSpecItems,
    IFeaturedSpecItemsProps,
    IPricingDetails,
    IPlans
}