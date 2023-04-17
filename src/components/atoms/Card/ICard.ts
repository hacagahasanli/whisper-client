import { IChildrenProps } from 'interfaces';

interface ICardProps extends IChildrenProps {
    classes: string;
}

interface ICombineClassesProps {
    padding: string;
    radius: string
}

export type { ICardProps, ICombineClassesProps }