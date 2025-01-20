import { MainContainerProps } from "../types";

const MainContainer = ({
    children,
    className
} : MainContainerProps
) => {
    return (
        <main className={`" mt-[var(--mini-header-height)] md:mt-[var(--header-height)] " ${className} `}>
            {children}
        </main>
    );
};

export default MainContainer;
