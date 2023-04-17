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


interface IWorkPlansProps {
    worksPlans: IWorkPlans[];
}


export type { IWorkPlans, IStepItems, IWorkPlansProps }