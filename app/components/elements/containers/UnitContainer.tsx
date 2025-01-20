import { UnitContainerProps } from "../types";

const UnitContainer = ({
    children,
    className,
    id,
    style
} : UnitContainerProps
) => {
    return (
        <div className={`' my-4 md:mx-3 bg-white text-center text-[var(--text-color)] p-4 md:rounded-xl ${className} '`} id={id} style={style}>
            {children}
        </div>
    );
}

export default UnitContainer;
