interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?:string;
    children?: React.ReactNode;
}

export default function Button({onClick, className="", children}:ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${className} my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer flex items-center gap-2 group`}>
            {children}
        </button>
    )
}
