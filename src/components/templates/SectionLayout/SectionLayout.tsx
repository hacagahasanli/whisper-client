import { ISectionLayoutProps } from "./ISectionLayout"

export const SectionLayout = ({ children, classes, sClasses = "" }: ISectionLayoutProps) => {
    return (
        <section className={`w-full ${sClasses}`}>
            <div className={`${classes} autoColFlexCenter`}>
                {children}
            </div>
        </section>
    )
}