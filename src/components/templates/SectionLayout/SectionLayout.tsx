import { ISectionLayoutProps } from "./ISectionLayout"

export const SectionLayout = ({ children, classes }: ISectionLayoutProps) => {
    return (
        <section className="w-full">
            <div className={`${classes} autoColFlexCenter`}>
                {children}
            </div>
        </section>
    )
}