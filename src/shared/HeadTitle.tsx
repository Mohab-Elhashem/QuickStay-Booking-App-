interface headTitleProps{
    title: string;
    subTitle: string;
    className?:string;
}

export const HeadTitle = ({title, subTitle, className=""}:headTitleProps) => {
    return (
        <div className={`${className} flex flex-col justify-center`}>
            <h2 className={`text-4xl md:text-[40px] `}>{title}</h2>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-170 ">{subTitle}</p>
        </div>
    )
}
