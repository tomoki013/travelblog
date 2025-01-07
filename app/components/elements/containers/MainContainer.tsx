interface MainContainerProps {
    children: React.ReactNode;
    className?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ children, className }) => {
    return (
        <main className={`" mt-[var(--mini-header-height)] md:mt-[var(--header-height)] " ${className} `}>
            {children}
        </main>
    );
};

export default MainContainer;
