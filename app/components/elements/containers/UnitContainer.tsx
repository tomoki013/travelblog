interface UnitContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}

const UnitContainer: React.FC<UnitContainerProps> = ({ children, className, id, style }) => {
    return (
        <div className={`' my-4 md:mx-3 bg-white text-center text-[var(--text-color)] p-4 md:rounded-xl ${className} '`} id={id} style={style}>
            {children}
        </div>
    );
}

export default UnitContainer;
